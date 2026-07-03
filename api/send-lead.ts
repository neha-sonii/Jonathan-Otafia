import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const DEFAULT_TO = "jonathanpaulinus32@gmail.com";

declare const process: {
  env: Record<string, string | undefined>;
};

type LeadPayload = {
  name?: string;
  email?: string;
  linkedinUrl?: string;
  planLabel?: string;
  submittedAt?: string;
  answers?: Array<{ question: string; answer: string }>;
  to?: string;
};

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;") 
    .replace(/'/g, "&#039;");

const buildHtml = (lead: LeadPayload) => {
  const answers = lead.answers || [];

  return `
    <div style="font-family:Arial,sans-serif;color:#16131d;line-height:1.55">
      <h1 style="margin:0 0 16px;font-size:24px">New LinkedIn fit-check lead</h1>
      <p><strong>Plan:</strong> ${escapeHtml(lead.planLabel || "Not selected")}</p>
      <p><strong>Name:</strong> ${escapeHtml(lead.name || "")}</p>
      <p><strong>Email:</strong> ${escapeHtml(lead.email || "")}</p>
      <p><strong>LinkedIn:</strong> ${escapeHtml(lead.linkedinUrl || "")}</p>
      <p><strong>Submitted:</strong> ${escapeHtml(lead.submittedAt || "")}</p>
      <hr style="border:none;border-top:1px solid #ddd;margin:24px 0" />
      ${answers
      .map(
        (item, index) => `
            <p style="margin:0 0 16px">
              <strong>${index + 1}. ${escapeHtml(item.question)}</strong><br />
              ${escapeHtml(item.answer)}
            </p>
          `
      )
      .join("")}
    </div>
  `;
};

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false });
  }

  const lead = req.body as LeadPayload;
  const to = process.env.LEAD_EMAIL_TO || process.env.EMAIL_TO || lead.to || DEFAULT_TO;
  const user = process.env.EMAIL_USER || process.env.SMTP_USER;
  const pass = process.env.EMAIL_PASS || process.env.SMTP_PASS;
  const from = process.env.SMTP_FROM || process.env.EMAIL_FROM || `Website Lead <${user || "noreply@example.com"}>`;

  if (!user || !pass) {
    console.error("SMTP credentials are not configured. Lead email was not sent.", lead);
    return res.status(500).json({
      ok: false,
      error:
        "SMTP mail is not configured. Set EMAIL_USER and EMAIL_PASS in your environment.",
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user,
        pass,
      },
    });

    await transporter.sendMail({
      from,
      to,
      replyTo: lead.email,
      subject: `New ${lead.planLabel || "lead"} application from ${lead.name || "website"}`,
      html: buildHtml(lead),
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("SMTP email failed", error);
    return res.status(502).json({
      ok: false,
      error: error instanceof Error ? error.message : "Unknown email error",
    });
  }
}
