import { Link } from "react-router-dom";
import { Activity, Mail, Phone, MapPin, Twitter, Linkedin, Github, Youtube } from "lucide-react";

const footerLinks = {
  platform: [
    { name: "Policy Simulation", href: "/simulation" },
    { name: "Public Feedback", href: "/feedback" },
    { name: "Citizen Voice", href: "/citizen-voice" },
    { name: "Blog & Insights", href: "/blog" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "FAQ", href: "/faq" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
  resources: [
    { name: "Documentation", href: "/docs" },
    { name: "API Access", href: "/api" },
    { name: "Open Data", href: "/open-data" },
    { name: "Research Papers", href: "/research" },
  ],
};

const socialLinks = [
  { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
  { name: "GitHub", icon: Github, href: "https://github.com" },
  { name: "YouTube", icon: Youtube, href: "https://youtube.com" },
];

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-50">
      <div className="container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                <Activity className="w-5 h-5 text-accent" />
              </div>
              <span className="font-serif text-xl font-bold">
                Policy<span className="text-accent">Pulse</span>
              </span>
            </Link>
            <p className="text-primary-foreground/70 mb-6 max-w-sm leading-relaxed">
              Empowering citizens and governments through AI-driven policy analysis,
              transparent governance, and participatory democracy.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:contact@policypulse.gov.in"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">contact@policypulse.gov.in</span>
              </a>
              <a
                href="tel:+911234567890"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">+91 123 456 7890</span>
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/70">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Digital India Center, New Delhi, India 110001</span>
              </div>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h3 className="font-semibold mb-4 text-accent">Platform</h3>
            <ul className="space-y-3">
              {footerLinks.platform.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4 text-accent">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-semibold mb-4 text-accent">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} PolicyPulse AI. All rights reserved. A Digital India Initiative.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all hover:scale-110"
                aria-label={social.name}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
