import { randomUUID } from "node:crypto";
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { buildQuoteEmail, type QuoteLead } from "@/lib/quote-email";

export const runtime = "nodejs";
type QuotePayload = { name?: unknown; phone?: unknown; vehicle?: unknown; city?: unknown; email?: unknown; message?: unknown; sourcePage?: unknown; pageUrl?: unknown; company?: unknown };
const cleanLine = (value: unknown, max = 500) => typeof value === "string" ? value.replace(/[\r\n\0]+/g, " ").trim().slice(0, max) : "";
const cleanMessage = (value: unknown, max = 1000) => typeof value === "string" ? value.replace(/\0/g, "").trim().slice(0, max) : "";
const env = (name: string) => process.env[name]?.trim() ?? "";

export async function POST(request: Request) {
  let payload: QuotePayload;
  try { payload = (await request.json()) as QuotePayload; } catch { return NextResponse.json({ message: "Please check the form and try again." }, { status: 400 }); }
  if (cleanLine(payload.company)) return NextResponse.json({ message: "Thanks — we’ll be in touch shortly." });
  const lead: QuoteLead = {
    name: cleanLine(payload.name, 100), phone: cleanLine(payload.phone, 40), vehicle: cleanLine(payload.vehicle, 150), city: cleanLine(payload.city, 100), email: cleanLine(payload.email, 150), message: cleanMessage(payload.message), sourcePage: cleanLine(payload.sourcePage, 250) || "/", pageUrl: cleanLine(payload.pageUrl, 1000), ipAddress: cleanLine(request.headers.get("x-forwarded-for")?.split(",")[0] || request.headers.get("x-real-ip") || "Not available", 100), browser: cleanLine(request.headers.get("user-agent") || "Not available", 600),
  };
  if (!lead.name || !lead.phone || !lead.vehicle || !lead.city) return NextResponse.json({ message: "Name, phone, vehicle, and city are required." }, { status: 422 });
  if (lead.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) return NextResponse.json({ message: "Please enter a valid email address or leave it blank." }, { status: 422 });
  const smtpHost = env("SMTP_HOST"), smtpPort = Number(env("SMTP_PORT")), smtpUser = env("SMTP_USER"), smtpPass = env("SMTP_PASS"), contactTo = env("CONTACT_TO"), contactCc = env("CONTACT_CC"), contactFrom = env("CONTACT_FROM") || smtpUser;
  if (!smtpHost || !smtpPort || !smtpUser || !smtpPass || !contactTo || !contactFrom) return NextResponse.json({ message: "Email delivery is not configured yet. Please call (403) 688-7307." }, { status: 503 });
  const reference = `JAC-${randomUUID().slice(0, 8).toUpperCase()}`;
  const email = buildQuoteEmail(lead, reference, new Date());
  try {
    const transporter = nodemailer.createTransport({ host: smtpHost, port: smtpPort, secure: smtpPort === 465, auth: { user: smtpUser, pass: smtpPass }, connectionTimeout: 10000, greetingTimeout: 10000, socketTimeout: 15000 });
    await transporter.sendMail({ from: `Junk A Car <${contactFrom}>`, to: contactTo, cc: contactCc || undefined, replyTo: lead.email ? `${lead.name} <${lead.email}>` : undefined, subject: `[New Quote] ${lead.vehicle} — ${lead.city}`, text: email.text, html: email.html });
    return NextResponse.json({ message: "Thanks — we’ll call you with an offer shortly.", reference });
  } catch (error) {
    console.error("[quote-email] Delivery failed", { reference, error: error instanceof Error ? error.message : "Unknown SMTP error" });
    return NextResponse.json({ message: "We couldn’t send that right now. Please call (403) 688-7307." }, { status: 502 });
  }
}
