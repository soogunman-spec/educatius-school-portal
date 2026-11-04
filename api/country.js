// Vercel Function: tells the site which country the visitor is in.
// Vercel adds the x-vercel-ip-country header (ISO code, e.g. "KR") to every request.
module.exports = function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  res.status(200).json({ country: req.headers['x-vercel-ip-country'] || null });
};
