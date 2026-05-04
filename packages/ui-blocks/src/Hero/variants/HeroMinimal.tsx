"use client";

import { motion } from "framer-motion";
import type { HeroProps } from "../Hero.types";

export function HeroMinimal({ eyebrow, headline, sub, ctaPrimary, ctaSecondary, theme }: HeroProps) {
  const ease = theme.motion.ease;
  const duration = theme.motion.duration;

  return (
    <section
      style={{
        background: theme.colors.bg,
        color: theme.colors.text,
        padding: `${theme.spacing.section} 1.5rem`,
        fontFamily: theme.fonts.body
      }}
    >
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration, ease }}
            style={{
              color: theme.colors.accent,
              fontSize: "0.75rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: "1.5rem"
            }}
          >
            {eyebrow}
          </motion.p>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration, ease, delay: 0.1 }}
          style={{
            fontFamily: theme.fonts.display,
            fontSize: "clamp(2.5rem, 7vw, 6rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            marginBottom: "2rem",
            maxWidth: "20ch"
          }}
        >
          {headline}
        </motion.h1>

        {sub && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration, ease, delay: 0.2 }}
            style={{
              color: theme.colors.textMuted,
              fontSize: "1.125rem",
              lineHeight: 1.6,
              maxWidth: "44ch",
              marginBottom: "3rem"
            }}
          >
            {sub}
          </motion.p>
        )}

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration, ease, delay: 0.3 }}
          style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
        >
          {ctaPrimary && (
            <a
              href={ctaPrimary.href}
              style={{
                background: theme.colors.text,
                color: theme.colors.bg,
                padding: "0.875rem 1.75rem",
                borderRadius: theme.radius.md,
                textDecoration: "none",
                fontWeight: 500,
                fontSize: "0.9375rem"
              }}
            >
              {ctaPrimary.label}
            </a>
          )}
          {ctaSecondary && (
            <a
              href={ctaSecondary.href}
              style={{
                border: `1px solid ${theme.colors.border}`,
                color: theme.colors.text,
                padding: "0.875rem 1.75rem",
                borderRadius: theme.radius.md,
                textDecoration: "none",
                fontWeight: 500,
                fontSize: "0.9375rem"
              }}
            >
              {ctaSecondary.label}
            </a>
          )}
        </motion.div>
      </div>
    </section>
  );
}
