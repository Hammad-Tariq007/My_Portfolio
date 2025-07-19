import React, { useEffect, useRef, useState } from "react";
import "./LoaderLogo.css";

const NAME = "Hammad Bin Tariq";
const TAGLINE = "Building Impactful Web Experiences";

export default function LoaderLogo({
  theme = { body: "#181a1b", text: "#fff", accent: "#FFD700" },
}) {
  const [show, setShow] = useState(true);
  const [revealName, setRevealName] = useState(false);
  const [showTagline, setShowTagline] = useState(false);
  const loaderRef = useRef();
  const minShowTime = 1200; // ms
  const maxShowTime = 3500; // ms fallback

  // Reveal name and tagline in sequence
  useEffect(() => {
    if (!show) return;
    const nameTimeout = setTimeout(() => setRevealName(true), 1100);
    const taglineTimeout = setTimeout(() => setShowTagline(true), 2000);
    return () => {
      clearTimeout(nameTimeout);
      clearTimeout(taglineTimeout);
    };
  }, [show]);

  // Auto-dismiss logic
  useEffect(() => {
    if (!show) return;
    const minTimeout = setTimeout(() => {
      // Listen for site ready event or fallback
      const onReady = () => setShow(false);
      window.addEventListener("appReady", onReady);
      // Fallback: force hide after maxShowTime
      const maxTimeout = setTimeout(
        () => setShow(false),
        maxShowTime - minShowTime
      );
      return () => {
        window.removeEventListener("appReady", onReady);
        clearTimeout(maxTimeout);
      };
    }, minShowTime);
    return () => clearTimeout(minTimeout);
  }, [show]);

  // Fade out animation
  useEffect(() => {
    if (!show && loaderRef.current) {
      loaderRef.current.classList.add("loader-fadeout");
      setTimeout(() => {
        if (loaderRef.current) loaderRef.current.style.display = "none";
      }, 700);
    }
  }, [show]);

  if (!show) return null;

  return (
    <div
      className="loader-logo-wrapper arch-bg"
      ref={loaderRef}
      aria-busy="true"
      aria-label="Loading site"
      style={{ background: theme.body, color: theme.text }}
    >
      <div className="loader-center">
        {/* Animated Geometric Loader */}
        <div className="loader-geo-outer" aria-hidden="true">
          {/* Animated Orbits */}
          <svg
            className="geo-orbit geo-orbit-1"
            width="120"
            height="120"
            viewBox="0 0 120 120"
          >
            <circle
              cx="60"
              cy="60"
              r="48"
              stroke={theme.accent}
              strokeWidth="1.5"
              fill="none"
            />
          </svg>
          <svg
            className="geo-orbit geo-orbit-2"
            width="120"
            height="120"
            viewBox="0 0 120 120"
          >
            <circle
              cx="60"
              cy="60"
              r="36"
              stroke="#fff2"
              strokeWidth="1"
              fill="none"
            />
          </svg>
          {/* Animated Dots */}
          <div
            className="geo-dot geo-dot-1"
            style={{ background: theme.accent }}
          />
          <div
            className="geo-dot geo-dot-2"
            style={{ background: theme.text }}
          />
          {/* Architectural Lines */}
          <div
            className="geo-line geo-line-1"
            style={{ background: theme.accent }}
          />
          <div
            className="geo-line geo-line-2"
            style={{ background: theme.text, opacity: 0.5 }}
          />
          {/* Initials */}
          <span className="geo-initials" style={{ color: theme.text }}>
            HT
          </span>
        </div>
        {/* Name Reveal Animation */}
        <div
          className={`loader-name-arch${
            revealName ? " loader-name-arch-visible" : ""
          }`}
          aria-label={NAME}
        >
          {NAME}
        </div>
        {/* Tagline Fade-in */}
        <div
          className={`loader-tagline-arch${
            showTagline ? " loader-tagline-arch-visible" : ""
          }`}
          aria-label={TAGLINE}
        >
          {TAGLINE}
        </div>
      </div>
    </div>
  );
}
