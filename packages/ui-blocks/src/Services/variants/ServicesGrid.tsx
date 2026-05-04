"use client";

import { motion } from "framer-motion";
import type { ServicesProps } from "../Services.types";

export function ServicesGrid({ eyebrow, headline, sub, items, theme }: ServicesProps) {
  const ease = theme.motion.ease;

  return (
    <section
      style={{
        background: theme.colors.bgAlt,
        color: theme.colors.text,
        padding: `${theme.spacing.section} 1.5rem`,
        fontFamily: theme.fonts.body
      }}
    >
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
        <div style={{ marginBottom: "4rem", maxWidth: "40rem" }}>
          {eyebrow && (
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.6, ease }}
              style={{
                color: theme.colors.accent,
                fontSize: "0.75rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                marginBottom: "1rem"
              }}
            >
              {eyebrow}
            </motion.p>
          )}

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.8, ease, delay: 0.1 }}
            style={{
              fontFamily: theme.fonts.display,
              fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: sub ? "1.5rem" : 0
            }}
          >
            {headline}
          </motion.h2>

          {sub && (
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.7, ease, delay: 0.2 }}
              style={{
                color: theme.colors.textMuted,
                fontSize: "1.0625rem",
                lineHeight: 1.6
              }}
            >
              {sub}
            </motion.p>
          )}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem"
          }}
        >
          {items.map((item, i) => (
            <motion.a
              key={item.title}
              href={item.href || "#"}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7, ease, delay: 0.08 * i }}
              whileHover={{ y: -6 }}
              style={{
                display: "block",
                background: theme.colors.surface,
                border: `1px solid ${theme.colors.border}`,
                borderRadius: theme.radius.lg,
                padding: "2rem",
                textDecoration: "none",
                color: "inherit",
                transition: `border-color 300ms ${ease.join(",")}`
              }}
            >
              {item.icon && (
                <div
                  style={{
                    fontSize: "1.75rem",
                    marginBottom: "1.25rem",
                    color: theme.colors.accent
                  }}
                >
                  {item.icon}
                </div>
              )}

              <h3
                style={{
                  fontFamily: theme.fonts.display,
                  fontSize: "1.375rem",
                  lineHeight: 1.2,
                  letterSpacing: "-0.01em",
                  marginBottom: "0.75rem"
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  color: theme.colors.textMuted,
                  fontSize: "0.9375rem",
                  lineHeight: 1.6
                }}
              >
                {item.description}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
