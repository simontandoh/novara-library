"use client";

import { motion } from "framer-motion";
import type { TestimonialsProps } from "../Testimonials.types";

export function TestimonialsEditorial({ eyebrow, items, theme }: TestimonialsProps) {
  const ease = theme.motion.ease;
  const item = items[0];
  if (!item) return null;

  return (
    <section
      style={{
        background: theme.colors.bgAlt,
        color: theme.colors.text,
        padding: `${theme.spacing.section} 1.5rem`,
        fontFamily: theme.fonts.body
      }}
    >
      <div style={{ maxWidth: "60rem", margin: "0 auto", textAlign: "left" }}>
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
              marginBottom: "3rem"
            }}
          >
            {eyebrow}
          </motion.p>
        )}

        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 1.1, ease, delay: 0.1 }}
          style={{
            margin: 0,
            padding: 0,
            fontFamily: theme.fonts.display,
            fontSize: "clamp(1.75rem, 4vw, 3rem)",
            lineHeight: 1.25,
            letterSpacing: "-0.015em"
          }}
        >
          <span
            aria-hidden
            style={{
              color: theme.colors.accent,
              display: "block",
              fontSize: "3rem",
              lineHeight: 1,
              marginBottom: "1rem"
            }}
          >
            &ldquo;
          </span>
          {item.quote}
        </motion.blockquote>

        <motion.footer
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.8, ease, delay: 0.3 }}
          style={{
            marginTop: "3rem",
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            paddingTop: "2rem",
            borderTop: `1px solid ${theme.colors.border}`
          }}
        >
          {item.avatar && (
            <img
              src={item.avatar}
              alt=""
              width={48}
              height={48}
              style={{
                width: "48px",
                height: "48px",
                borderRadius: theme.radius.full,
                objectFit: "cover"
              }}
            />
          )}
          <div>
            <div
              style={{
                fontFamily: theme.fonts.display,
                fontSize: "1rem",
                letterSpacing: "-0.005em"
              }}
            >
              {item.author}
            </div>
            {(item.role || item.company) && (
              <div
                style={{
                  color: theme.colors.textMuted,
                  fontSize: "0.875rem",
                  marginTop: "2px"
                }}
              >
                {item.role}
                {item.role && item.company ? ", " : ""}
                {item.company}
              </div>
            )}
          </div>
        </motion.footer>
      </div>
    </section>
  );
}
