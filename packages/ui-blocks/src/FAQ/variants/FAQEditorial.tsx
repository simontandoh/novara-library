"use client";

import { motion } from "framer-motion";
import type { FAQProps } from "../FAQ.types";

export function FAQEditorial({ eyebrow, headline, sub, items, theme }: FAQProps) {
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
                fontSize: "clamp(2.25rem, 5vw, 4rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.025em",
                marginBottom: sub ? "1.5rem" : 0,
                maxWidth: "20ch"
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
                  fontSize: "1.0625rem",
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
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "3rem 4rem",
            borderTop: `1px solid ${theme.colors.border}`,
            paddingTop: "4rem"
          }}
        >
          {items.map((item, i) => (
            <motion.div
              key={item.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7, ease, delay: 0.05 * i }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: "1rem",
                  marginBottom: "1rem"
                }}
              >
                <span
                  style={{
                    fontFamily: theme.fonts.mono,
                    fontSize: "0.6875rem",
                    color: theme.colors.accent,
                    letterSpacing: "0.15em"
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3
                  style={{
                    fontFamily: theme.fonts.display,
                    fontSize: "1.375rem",
                    lineHeight: 1.25,
                    letterSpacing: "-0.015em",
                    margin: 0
                  }}
                >
                  {item.question}
                </h3>
              </div>

              <p
                style={{
                  color: theme.colors.textMuted,
                  fontSize: "1rem",
                  lineHeight: 1.65,
                  margin: 0,
                  maxWidth: "44ch",
                  paddingLeft: "calc(0.6875rem + 1rem + 0.5ch)"
                }}
              >
                {item.answer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
