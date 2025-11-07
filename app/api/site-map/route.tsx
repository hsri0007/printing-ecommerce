import { NextResponse } from "next/server";

export async function GET() {
  const base = "https://brahmanigraphics.com";
  const urls = [
    `${base}/`,
    `${base}/services/business-cards`,
    `${base}/services/t-shirt-printing`,
    `${base}/services/wedding-cards`,
    `${base}/services/pamphlets-flyers`,
    `${base}/services/flex-printing`,
    `${base}/services/hoardings`,
    `${base}/#why`,
    `${base}/#contact`
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
      .map(
        (loc) => `
      <url>
        <loc>${loc}</loc>
         <lastmod>2025-11-07</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>`
      )
      .join("")}
  </urlset>`;

  return new NextResponse(xml, {
    headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=0, s-maxage=3600" },
  });
}