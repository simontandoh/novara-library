"use client";

import { motion } from "framer-motion";
import type { ServicesProps } from "../Services.types";

export function ServicesEditorial({ eyebrow, headline, sub, items, theme }: ServicesProps) {
  const ease = theme.motion.ease;

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
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) minmax(0, 2fr)",
            gap: "4rem",
            marginBottom: "5rem",
            alignItems: "start"
          }}
        >
          <div>
            {eyebrow && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-15%" }}
                transition={{ duration: 0.6, ease }}
                style={{
                  color: theme.colors.accent,
                  fontSize: "0.75rem",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase"
                }}
              >
                {eyebrow}
              </motion.p>
            )}
          </div>

          <div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 1, ease }}
              style={{
                fontFamily: theme.fonts.display,
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                lineHeight: 1,
                letterSpacing: "-0.025em",
                marginBottom: sub ? "2rem" : 0,
                maxWidth: "18ch"
              }}
            >
              {headline}
            </motion.h2>

            {sub && (
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-15%" }}
                transition={{ duration: 0.8, ease, delay: 0.15 }}
                style={{
                  color: theme.colors.textMuted,
                  fontSize: "1.125rem",
                  lineHeight: 1.6,
                  maxWidth: "44ch"
                }}
              >
                {sub}
              </motion.p>
            )}
          </div>
        </div>

        <div
          style={{
            borderTop: `1px solid ${theme.colors.border}`
          }}
        >
          {items.map((item, i) => (
            <motion.a
              key={item.title}
              href={item.href || "#"}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease, delay: 0.05 * i }}
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(0, 1fr) minmax(0, 2fr)",
                gap: "4rem",
                padding: "3rem 0",
                borderBottom: `1px solid ${theme.colors.border}`,
                textDecoration: "none",
                color: "inherit",
                alignItems: "baseline"
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: "1.5rem"
                }}
              >
                <span
                  style={{
                    fontFamily: theme.fonts.mono,
                    fontSize: "0.75rem",
                    color: theme.colors.textMuted,
                    letterSpacing: "0.1em"
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3
                  style={{
                    fontFamily: theme.fonts.display,
                    fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                    lineHeight: 1.05,
                    letterSpacing: "-0.02em",
                    margin: 0
                  }}
                >
                  {item.title}
                </h3>
              </div>

              <p
                style={{
                  color: theme.colors.textMuted,
                  fontSize: "1.0625rem",
                  lineHeight: 1.6,
                  margin: 0,
                  maxWidth: "52ch"
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
