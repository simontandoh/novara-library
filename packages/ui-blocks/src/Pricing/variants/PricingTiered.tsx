"use client";

import { motion } from "framer-motion";
import type { PricingProps } from "../Pricing.types";

export function PricingTiered({ eyebrow, headline, sub, tiers = [], theme }: PricingProps) {
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
            textAlign: "center",
            maxWidth: "40rem",
            margin: "0 auto 5rem"
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
              fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
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
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7, ease, delay: 0.1 * i }}
              style={{
                position: "relative",
                background: tier.featured ? theme.colors.surface : theme.colors.bgAlt,
                border: `1px solid ${tier.featured ? theme.colors.accent : theme.colors.border}`,
                borderRadius: theme.radius.lg,
                padding: "2.5rem 2rem",
                display: "flex",
                flexDirection: "column"
              }}
            >
              {tier.featured && (
                <span
                  style={{
                    position: "absolute",
                    top: "-12px",
                    left: "2rem",
                    background: theme.colors.accent,
                    color: theme.colors.bg,
                    padding: "4px 12px",
                    fontSize: "0.6875rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    borderRadius: theme.radius.sm,
                    fontWeight: 600
                  }}
                >
                  Most chosen
                </span>
              )}

              <h3
                style={{
                  fontFamily: theme.fonts.display,
                  fontSize: "1.375rem",
                  letterSpacing: "-0.01em",
                  marginBottom: "1rem"
                }}
              >
                {tier.name}
              </h3>

              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: "0.5rem",
                  marginBottom: tier.description ? "1rem" : "1.75rem"
                }}
              >
                <span
                  style={{
                    fontFamily: theme.fonts.display,
                    fontSize: "clamp(2.25rem, 4vw, 3rem)",
                    lineHeight: 1,
                    letterSpacing: "-0.025em"
                  }}
                >
                  {tier.price}
                </span>
                {tier.cadence && (
                  <span
                    style={{
                      color: theme.colors.textMuted,
                      fontSize: "0.875rem"
                    }}
                  >
                    {tier.cadence}
                  </span>
                )}
              </div>

              {tier.description && (
                <p
                  style={{
                    color: theme.colors.textMuted,
                    fontSize: "0.9375rem",
                    lineHeight: 1.55,
                    marginBottom: "1.75rem"
                  }}
                >
                  {tier.description}
                </p>
              )}

              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "0 0 2.5rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem"
                }}
              >
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.75rem",
                      fontSize: "0.9375rem",
                      lineHeight: 1.5,
                      color: theme.colors.text
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

              <a
                href={tier.cta.href}
                style={{
                  marginTop: "auto",
                  background: tier.featured ? theme.colors.accent : "transparent",
                  color: tier.featured ? theme.colors.bg : theme.colors.text,
                  border: `1px solid ${tier.featured ? theme.colors.accent : theme.colors.border}`,
                  padding: "0.875rem 1.5rem",
                  borderRadius: theme.radius.md,
                  textDecoration: "none",
                  fontWeight: 500,
                  fontSize: "0.9375rem",
                  textAlign: "center"
                }}
              >
                {tier.cta.label}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
