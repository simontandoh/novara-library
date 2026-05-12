"use client";

import { motion } from "framer-motion";
import { useSyncExternalStore } from "react";
import type { HeroProps } from "../Hero.types";

function subscribeMobileLayout(onStoreChange: () => void) {
  const mq = window.matchMedia("(max-width: 767px)");
  mq.addEventListener("change", onStoreChange);
  return () => mq.removeEventListener("change", onStoreChange);
}

function getMobileLayoutSnapshot() {
  return window.matchMedia("(max-width: 767px)").matches;
}

function getMobileLayoutServerSnapshot() {
  return false;
}

function useMobileHeroLayout() {
  return useSyncExternalStore(
    subscribeMobileLayout,
    getMobileLayoutSnapshot,
    getMobileLayoutServerSnapshot
  );
}

export function HeroCinematic({ eyebrow, headline, sub, ctaPrimary, image, theme }: HeroProps) {
  const ease = theme.motion.ease;
  const isMobileLayout = useMobileHeroLayout();

  const bgStyle = {
    position: "absolute" as const,
    inset: 0,
    backgroundImage: image ? `url(${image.src})` : undefined,
    backgroundSize: "cover" as const,
    backgroundPosition: "center center" as const,
    backgroundRepeat: "no-repeat" as const
  };

  return (
    <section
      data-hero
      style={{
        position: "relative",
        minHeight: "100svh",
        background: theme.colors.bg,
        color: theme.colors.text,
        overflow: "hidden",
        fontFamily: theme.fonts.body
      }}
    >
      {image &&
        (isMobileLayout ? (
          <div
            style={{
              ...bgStyle,
              opacity: 0.55,
              transform: "none",
              willChange: "auto"
            }}
            aria-hidden
          />
        ) : (
          <motion.div
            initial={{ scale: 1.05, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.55 }}
            transition={{ duration: 1.8, ease }}
            style={bgStyle}
            aria-hidden
          />
        ))}

      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(180deg, ${theme.colors.bg}33 0%, ${theme.colors.bg} 100%)`
        }}
        aria-hidden
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "72rem",
          margin: "0 auto",
          padding: `${theme.spacing.section} 1.5rem`,
          minHeight: "100svh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end"
        }}
      >
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.4 }}
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

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease, delay: 0.5 }}
          style={{
            fontFamily: theme.fonts.display,
            fontSize: "clamp(3rem, 9vw, 8rem)",
            lineHeight: 0.95,
            letterSpacing: "-0.03em",
            marginBottom: "2rem",
            maxWidth: "16ch"
          }}
        >
          {headline}
        </motion.h1>

        {sub && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.7 }}
            style={{
              color: theme.colors.textMuted,
              fontSize: "1.125rem",
              lineHeight: 1.6,
              maxWidth: "48ch",
              marginBottom: "3rem"
            }}
          >
            {sub}
          </motion.p>
        )}

        {ctaPrimary && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.85 }}
          >
            <a
              href={ctaPrimary.href}
              style={{
                background: theme.colors.accent,
                color: theme.colors.bg,
                padding: "1rem 2rem",
                borderRadius: theme.radius.md,
                textDecoration: "none",
                fontWeight: 500,
                fontSize: "0.9375rem",
                letterSpacing: "0.05em"
              }}
            >
              {ctaPrimary.label}
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
}
