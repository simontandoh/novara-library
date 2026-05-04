"use client";

import { motion } from "framer-motion";
import type { TestimonialsProps } from "../Testimonials.types";

export function TestimonialsMarquee({ eyebrow, headline, items, theme }: TestimonialsProps) {
  const ease = theme.motion.ease;
  const doubled = [...items, ...items];

  return (
    <section
      style={{
        background: theme.colors.bg,
        color: theme.colors.text,
        padding: `${theme.spacing.section} 0`,
        fontFamily: theme.fonts.body,
        overflow: "hidden"
      }}
    >
      <div
        style={{
          maxWidth: "72rem",
          margin: "0 auto",
          padding: "0 1.5rem",
          marginBottom: "4rem",
          textAlign: "center"
        }}
      >
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
              marginBottom: "1.5rem"
            }}
          >
            {eyebrow}
          </motion.p>
        )}
        {headline && (
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.8, ease, delay: 0.1 }}
            style={{
              fontFamily: theme.fonts.display,
              fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              maxWidth: "26ch",
              margin: "0 auto"
            }}
          >
            {headline}
          </motion.h2>
        )}
      </div>

      <div
        style={{
          position: "relative",
          maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)"
        }}
      >
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 60, ease: "linear", repeat: Infinity }}
          style={{ display: "flex", gap: "1.5rem", width: "max-content" }}
        >
          {doubled.map((item, i) => (
            <article
              key={i}
              style={{
                flex: "0 0 auto",
                width: "min(28rem, 80vw)",
                background: theme.colors.surface,
                border: `1px solid ${theme.colors.border}`,
                borderRadius: theme.radius.lg,
                padding: "2rem"
              }}
            >
              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.6,
                  color: theme.colors.text,
                  marginBottom: "1.5rem"
                }}
              >
                &ldquo;{item.quote}&rdquo;
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.875rem"
                }}
              >
                {item.avatar && (
                  <img
                    src={item.avatar}
                    alt=""
                    width={40}
                    height={40}
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: theme.radius.full,
                      objectFit: "cover"
                    }}
                  />
                )}
                <div>
                  <div
                    style={{
                      fontFamily: theme.fonts.display,
                      fontSize: "0.9375rem",
                      letterSpacing: "-0.005em"
                    }}
                  >
                    {item.author}
                  </div>
                  {(item.role || item.company) && (
                    <div
                      style={{
                        color: theme.colors.textMuted,
                        fontSize: "0.8125rem",
                        marginTop: "2px"
                      }}
                    >
                      {item.role}
                      {item.role && item.company ? ", " : ""}
                      {item.company}
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
