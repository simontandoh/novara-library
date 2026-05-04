"use client";

import { motion } from "framer-motion";
import type { PricingProps } from "../Pricing.types";

export function PricingMinimal({ eyebrow, headline, sub, offer, stats = [], theme }: PricingProps) {
  const ease = theme.motion.ease;
  if (!offer) return null;

  return (
    <section
      style={{
        background: theme.colors.bgAlt,
        color: theme.colors.text,
        padding: `${theme.spacing.section} 1.5rem`,
        fontFamily: theme.fonts.body
      }}
    >
      <div style={{ maxWidth: "60rem", margin: "0 auto" }}>
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
              marginBottom: "2rem"
            }}
          >
            {eyebrow}
          </motion.p>
        )}

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
            marginBottom: sub ? "1.5rem" : "3rem",
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
              fontSize: "1.125rem",
              lineHeight: 1.6,
              maxWidth: "48ch",
              marginBottom: "4rem"
            }}
          >
            {sub}
          </motion.p>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.9, ease, delay: 0.2 }}
          style={{
            background: theme.colors.surface,
            border: `1px solid ${theme.colors.border}`,
            borderRadius: theme.radius.lg,
            padding: "3rem 2.5rem",
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) auto",
            gap: "3rem",
            alignItems: "center",
            marginBottom: stats.length > 0 ? "4rem" : 0
          }}
        >
          <div>
            <div
              style={{
                fontFamily: theme.fonts.display,
                fontSize: "0.9375rem",
                color: theme.colors.textMuted,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                marginBottom: "1rem"
              }}
            >
              {offer.name}
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: "0.625rem",
                marginBottom: "1.5rem",
                flexWrap: "wrap"
              }}
            >
              <span
                style={{
                  fontFamily: theme.fonts.display,
                  fontSize: "clamp(2.5rem, 5vw, 3.75rem)",
                  lineHeight: 1,
                  letterSpacing: "-0.03em"
                }}
              >
                {offer.price}
              </span>
              {offer.cadence && (
                <span
                  style={{
                    color: theme.colors.textMuted,
                    fontSize: "1rem"
                  }}
                >
                  {offer.cadence}
                </span>
              )}
            </div>

            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "0.625rem"
              }}
            >
              {offer.features.map((feature) => (
                <li
                  key={feature}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.75rem",
                    fontSize: "0.9375rem",
                    lineHeight: 1.5
                  }}
                >
                  <span
                    aria-hidden
                    style={{
                      color: theme.colors.accent,
                      flexShrink: 0,
                      marginTop: "1px"
                    }}
                  >
                    ─
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <a
            href={offer.cta.href}
            style={{
              background: theme.colors.accent,
              color: theme.colors.bg,
              padding: "1rem 2rem",
              borderRadius: theme.radius.md,
              textDecoration: "none",
              fontWeight: 500,
              fontSize: "0.9375rem",
              whiteSpace: "nowrap"
            }}
          >
            {offer.cta.label}
          </a>
        </motion.div>

        {stats.length > 0 && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${stats.length}, minmax(0, 1fr))`,
              gap: "2rem",
              borderTop: `1px solid ${theme.colors.border}`,
              paddingTop: "3rem"
            }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.7, ease, delay: 0.1 * i }}
              >
                <div
                  style={{
                    fontFamily: theme.fonts.display,
                    fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                    lineHeight: 1,
                    letterSpacing: "-0.02em",
                    marginBottom: "0.5rem"
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    color: theme.colors.textMuted,
                    fontSize: "0.8125rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase"
                  }}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
