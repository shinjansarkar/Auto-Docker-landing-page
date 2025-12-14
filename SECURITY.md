# Security Policy

## Reporting a Vulnerability

If you discover a security vulnerability in the Auto Docker Website, please report it by emailing the maintainer directly or opening a private security advisory on GitHub.

**Please do not:**
- Open public issues for security vulnerabilities
- Disclose the vulnerability publicly until it has been addressed

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |

## Security Best Practices

This website follows security best practices:

- No server-side code execution
- Static HTML/CSS/JavaScript only
- CDN resources loaded over HTTPS
- Security headers configured (see netlify.toml/vercel.json)
- No sensitive data collection
- No authentication system
- XSS protection enabled
- Content Security Policy headers

## Third-Party Dependencies

This site uses minimal third-party dependencies:
- Tailwind CSS (loaded from CDN)
- Google Fonts (loaded from CDN)
- Material Symbols Icons (loaded from CDN)

All resources are loaded over HTTPS from trusted CDNs.

## Browser Security

For optimal security, please use modern browsers:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Updates

Security updates will be released as needed. Monitor this repository for updates.
