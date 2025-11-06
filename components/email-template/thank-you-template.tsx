export function buildThankYouEmail({
  name = "Customer",
  service = "your request",
  receivedAt = new Date(),
}: {
  name?: string;
  service?: string;
  receivedAt?: string | Date;
}) {
  const received = new Date(receivedAt).toLocaleString();
const logo = "https://brahmanigraphics.com/logo.jpeg";
  const siteUrl = "https://brahmanigraphics.com";
  const supportEmail = "info@brahmanigraphics.com";

  const html = `<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
</head>
<body style="margin:0;padding:0;background:#f4f6f8;font-family:Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;color:#0f172a;">
  <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
    <tr>
      <td align="center" style="padding:28px 12px;">
        <table width="680" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;border-radius:10px;overflow:hidden;box-shadow:0 8px 30px rgba(15,23,42,0.06);">
          <tr>
            <td style="padding:20px;background:linear-gradient(90deg,#06b6d4,#0ea5a4);">
              <table width="100%" role="presentation">
                <tr>
                  <td style="vertical-align:middle;">
                    <img src="${logo}" alt="Brahmani Graphics" width="140" style="display:block;border:0;outline:none;text-decoration:none;" />
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding:28px;">
              <h1 style="margin:0 0 8px 0;font-size:20px;color:#0f172a;">Thanks for your request, ${escapeHtml(name)}!</h1>
              <p style="margin:0 0 16px 0;color:#475569;">We received your quote request for <strong>${escapeHtml(service)}</strong> on ${received}. Our team will review the details and get back to you shortly — typically within 24 hours.</p>

              <div style="padding:16px;border-radius:8px;background:#f8fafc;border:1px solid #eef2f7;margin:16px 0;">
                <p style="margin:0;color:#334155;font-size:14px"><strong>What happens next</strong></p>
                <ul style="margin:8px 0 0 18px;color:#475569">
                  <li>We review your requirements and prepare a custom quote.</li>
                  <li>We may contact you by phone or email if we need clarification.</li>
                  <li>You will receive the quote and next steps via email.</li>
                </ul>
              </div>

              <p style="margin:0 0 20px 0;color:#475569">If you need immediate assistance, call us at <strong>+91 8121146633</strong> or email <a href="mailto:${supportEmail}" style="color:#06b6d4;text-decoration:none">${supportEmail}</a>.</p>

              <p style="text-align:center;margin:28px 0 0 0;">
                <a href="${siteUrl}" style="display:inline-block;padding:12px 20px;background:#06b6d4;color:#fff;border-radius:8px;text-decoration:none;font-weight:600;">Visit Brahmani Graphics</a>
              </p>
            </td>
          </tr>

          <tr>
            <td style="padding:14px 20px;background:#fbfdff;color:#64748b;text-align:center;font-size:12px;">
              Brahmani Graphics • 1-1-54 STREET NO.1, Kakateeya Nagar, Habsiguda, Hyderabad • © ${new Date().getFullYear()}
            </td>
          </tr>
        </table>

        <div style="max-width:680px;font-size:12px;color:#94a3b8;margin-top:12px;text-align:center;">
          This is an automated confirmation that we received your quote request.
        </div>
      </td>
    </tr>
  </table>
</body>
</html>`;

  const text = `Thanks ${name},

We received your quote request for: ${service}
Received: ${received}

Our team will review your request and respond (usually within 24 hours).

If you need immediate help call: +91 8121146633
Or email: ${supportEmail}

Visit: ${siteUrl}
`;

  return { html, text };
}

function escapeHtml(str = "") {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}