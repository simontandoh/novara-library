"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { FAQProps } from "../FAQ.types";

export function FAQAccordion({ eyebrow, headline, sub, items, theme }: FAQProps) {
  const ease = theme.motion.ease;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      style={{
        background: theme.colors.bg,
        color: theme.colors.text,
        padding: `${theme.spacing.section} 1.5rem`,
        fontFamily: theme.fonts.body
      }}
    >
      <div
        style={{
          maxWidth: "60rem",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.6fr)",
          gap: "4rem",
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
                textTransform: "uppercase",
                marginBottom: "1.25rem"
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
              fontSize: "clamp(2rem, 4vw, 3rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: sub ? "1.25rem" : 0
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
                fontSize: "1rem",
                lineHeight: 1.6
              }}
            >
              {sub}
            </motion.p>
          )}
        </div>

        <div
          style={{
            borderTop: `1px solid ${theme.colors.border}`
          }}
        >
          {items.map((item, i) => {
            const isOpen = openIndex === i;

            return (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, ease, delay: 0.05 * i }}
                style={{
                  borderBottom: `1px solid ${theme.colors.border}`
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  style={{
                    width: "100%",
                    background: "transparent",
                    border: "none",
                    padding: "1.75rem 0",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "1.5rem",
                    cursor: "pointer",
                    color: "inherit",
                    fontFamily: "inherit",
                    textAlign: "left"
                  }}
                >
                  <span
                    style={{
                      fontFamily: theme.fonts.display,
                      fontSize: "clamp(1.0625rem, 1.6vw, 1.25rem)",
                      lineHeight: 1.3,
                      letterSpacing: "-0.01em",
                      color: theme.colors.text
                    }}
                  >
                    {item.question}
                  </span>
                  <motion.span
                    aria-hidden
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.4, ease }}
                    style={{
                      flexShrink: 0,
                      width: "24px",
                      height: "24px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: theme.colors.accent,
                      fontSize: "1.25rem",
                      lineHeight: 1
                    }}
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease }}
                      style={{ overflow: "hidden" }}
                    >
                      <div
                        style={{
                          padding: "0 0 1.75rem",
                          color: theme.colors.textMuted,
                          fontSize: "1rem",
                          lineHeight: 1.65,
                          maxWidth: "60ch"
                        }}
                      >
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
