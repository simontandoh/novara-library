"use client";

import { motion } from "framer-motion";
import type { FooterProps } from "../Footer.types";

export function FooterMinimal({
  brand,
  tagline,
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
        background: theme.colors.bg,
        color: theme.colors.text,
        borderTop: `1px solid ${theme.colors.border}`,
        padding: "5rem 1.5rem 3rem",
        fontFamily: theme.fonts.body
      }}
    >
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.9, ease }}
          style={{
            paddingBottom: "3rem",
            borderBottom: `1px solid ${theme.colors.border}`,
            marginBottom: "2rem"
          }}
        >
          <div
            style={{
              fontFamily: theme.fonts.display,
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              lineHeight: 1,
              letterSpacing: "-0.03em",
              marginBottom: tagline ? "1.25rem" : 0
            }}
          >
            {brand}
          </div>
          {tagline && (
            <p
              style={{
                color: theme.colors.textMuted,
                fontSize: "1.0625rem",
                lineHeight: 1.6,
                maxWidth: "44ch",
                margin: 0
              }}
            >
              {tagline}
            </p>
          )}
        </motion.div>

        <div
          style={{
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
