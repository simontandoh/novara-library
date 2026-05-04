"use client";

import { motion } from "framer-motion";
import type { FooterProps } from "../Footer.types";

export function FooterExpanded({
  brand,
  tagline,
  columns = [],
  contact,
  social = [],
  legal = [],
  copyright,
  theme
}: FooterProps) {
  const ease = theme.motion.ease;
  const year = new Date().getFullYear();
  const rights = copyright || `© ${year} ${brand}. All rights reserved.`;

  return (
    <footer
      style={{
        background: theme.colors.bgAlt,
        color: theme.colors.text,
        padding: "6rem 1.5rem 3rem",
        fontFamily: theme.fonts.body,
        borderTop: `1px solid ${theme.colors.border}`
      }}
    >
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.4fr) minmax(0, 2fr)",
            gap: "4rem",
            marginBottom: "4rem",
            alignItems: "start"
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease }}
          >
            <div
              style={{
                fontFamily: theme.fonts.display,
                fontSize: "clamp(2rem, 4vw, 3rem)",
                lineHeight: 1,
                letterSpacing: "-0.025em",
                marginBottom: tagline ? "1.5rem" : "2rem"
              }}
            >
              {brand}
            </div>

            {tagline && (
              <p
                style={{
                  color: theme.colors.textMuted,
                  fontSize: "1rem",
                  lineHeight: 1.6,
                  maxWidth: "36ch",
                  marginBottom: "2rem"
                }}
              >
                {tagline}
              </p>
            )}

            {contact && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                  fontSize: "0.9375rem",
                  color: theme.colors.text
                }}
              >
                {contact.email && (
                  <a
                    href={`mailto:${contact.email}`}
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    {contact.email}
                  </a>
                )}
                {contact.phone && (
                  <a
                    href={`tel:${contact.phone.replace(/\s/g, "")}`}
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    {contact.phone}
                  </a>
                )}
                {contact.address && (
                  <span style={{ color: theme.colors.textMuted }}>
                    {contact.address}
                  </span>
                )}
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease, delay: 0.15 }}
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${Math.min(columns.length, 3)}, minmax(0, 1fr))`,
              gap: "2rem"
            }}
          >
            {columns.map((col) => (
              <div key={col.title}>
                <h4
                  style={{
                    fontFamily: theme.fonts.body,
                    fontSize: "0.75rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: theme.colors.accent,
                    marginBottom: "1.25rem",
                    fontWeight: 500
                  }}
                >
                  {col.title}
                </h4>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem"
                  }}
                >
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        style={{
                          color: theme.colors.text,
                          textDecoration: "none",
                          fontSize: "0.9375rem"
                        }}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </div>

        <div
          style={{
            paddingTop: "2rem",
            borderTop: `1px solid ${theme.colors.border}`,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1.5rem",
            color: theme.colors.textMuted,
            fontSize: "0.8125rem"
          }}
        >
          <span>{rights}</span>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1.5rem",
              alignItems: "center"
            }}
          >
            {social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                style={{
                  color: theme.colors.textMuted,
                  textDecoration: "none",
                  letterSpacing: "0.05em"
                }}
              >
                {s.label}
              </a>
            ))}
            {social.length > 0 && legal.length > 0 && (
              <span aria-hidden style={{ color: theme.colors.border }}>
                ·
              </span>
            )}
            {legal.map((l) => (
              <a
                key={l.label}
                href={l.href}
                style={{
                  color: theme.colors.textMuted,
                  textDecoration: "none"
                }}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
