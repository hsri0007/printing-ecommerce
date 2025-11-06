export function buildQuoteEmail({ name, phone, email, service, message, receivedAt = new Date() }: any) {
  const received = new Date(receivedAt).toLocaleString();
  const logo = "https://brahmanigraphics.com/logo.jpeg";
  const siteUrl = "https://brahmanigraphics.com";
  const adminUrl = `${siteUrl}/admin/quotes`;

  const html = `<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
</head>
<body style="margin:0;padding:0;background:#f4f6f8;font-family:Arial,Helvetica,sans-serif;color:#111;">
  <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
    <tr>
      <td align="center" style="padding:24px 12px;">
        <table width="680" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 6px 24px rgba(16,24,40,0.08);">
          <tr>
            <td style="padding:20px 28px;background:linear-gradient(90deg,#0ea5a4,#06b6d4);">
              <table width="100%" role="presentation">
                <tr>
                  <td style="vertical-align:middle;">
                    <img src="${logo}" alt="Brahmani Graphics" width="140" style="display:block;border:0;outline:none;text-decoration:none;" />
                  </td>
                  <td style="text-align:right;color:#ffffff;font-size:14px;vertical-align:middle;">
                    <strong>New Quote Request</strong><br />
                    <span style="opacity:0.9;font-size:12px;">${received}</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding:20px 28px;">
              <h2 style="margin:0 0 12px 0;font-size:18px;color:#0f172a;">Quote request details</h2>

              <table width="100%" cellpadding="8" cellspacing="0" role="presentation" style="border-collapse:collapse;">
                <tr>
                  <td style="width:140px;font-weight:600;color:#334155;">Name</td>
                  <td style="color:#0f172a;">${escapeHtml(name)}</td>
                </tr>
                <tr>
                  <td style="font-weight:600;color:#334155;">Phone</td>
                  <td style="color:#0f172a;">${escapeHtml(phone)}</td>
                </tr>
                <tr>
                  <td style="font-weight:600;color:#334155;">Email</td>
                  <td style="color:#0f172a;">${escapeHtml(email)}</td>
                </tr>
                <tr>
                  <td style="font-weight:600;color:#334155;">Service</td>
                  <td style="color:#0f172a;">${escapeHtml(service)}</td>
                </tr>
                <tr>
                  <td style="font-weight:600;color:#334155;vertical-align:top;">Message</td>
                  <td style="color:#0f172a;line-height:1.5;">${escapeHtml(message).replace(/\n/g,'<br />')}</td>
                </tr>
              </table>

              <div style="margin-top:20px;text-align:center;">
                <a href="${adminUrl}" style="display:inline-block;padding:12px 20px;background:#06b6d4;color:#fff;border-radius:6px;text-decoration:none;font-weight:600;">
                  View in Admin
                </a>
              </div>
            </td>
          </tr>

          <tr>
            <td style="padding:16px 28px;background:#f8fafc;font-size:13px;color:#475569;text-align:center;">
              <div style="margin-bottom:8px;">Brahmani Graphics — Professional Printing Services</div>
              <div style="font-size:12px;opacity:0.9;">
                <a href="${siteUrl}" style="color:#0ea5a4;text-decoration:none;">Visit website</a> &nbsp;•&nbsp;
                <a href="mailto:info@brahmanigraphics.com" style="color:#0ea5a4;text-decoration:none;">info@brahmanigraphics.com</a>
              </div>
            </td>
          </tr>
        </table>

        <div style="max-width:680px;font-size:12px;color:#94a3b8;margin-top:12px;text-align:center;">
          This message contains information about a website quote request. Do not share credentials in email.
        </div>
      </td>
    </tr>
  </table>
</body>
</html>`;

  const text = `New Quote Request - ${received}

Name: ${name}
Phone: ${phone}
Email: ${email}
Service: ${service}

Message:
${message}

View in admin: ${adminUrl}
`;

  return { html, text };
}

// small helper to avoid HTML injection
function escapeHtml(str = "") {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}