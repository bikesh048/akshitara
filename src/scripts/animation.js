// src/scripts/animations.js
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

// Wait for the DOM to be fully loaded before running animations
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM Loaded - Initializing GSAP Animations");

  // --- Hero Section Animations ---
  // Animate elements sequentially on load
  const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });

  heroTl
    .to(".hero-heading", { duration: 1.2, y: 0, opacity: 1, delay: 0.2 })
    .to(".hero-subheading", { duration: 1, y: 0, opacity: 1 }, "-=0.8") // Overlap slightly
    .to(
      ".hero-button",
      { duration: 0.8, scale: 1, opacity: 1, ease: "back.out(1.7)" },
      "-=0.6"
    );

  // --- General Section Title & Subtitle Animation ---
  // Target elements with specific classes as they scroll into view
  gsap.utils.toArray(".section-title-animate").forEach((elem) => {
    gsap.from(elem, {
      scrollTrigger: {
        trigger: elem,
        start: "top 85%", // Trigger when 85% from the top of the viewport hits the element's top
        end: "bottom 20%",
        toggleActions: "play none none none", // Play animation once on enter
        // markers: true, // Uncomment for debugging trigger points
      },
      duration: 0.8,
      y: 30, // Start 30px below final position
      opacity: 0,
      ease: "power2.out",
    });
  });

  gsap.utils.toArray(".section-subtitle-animate").forEach((elem) => {
    gsap.from(elem, {
      scrollTrigger: {
        trigger: elem,
        start: "top 90%",
        toggleActions: "play none none none",
        // markers: true,
      },
      duration: 0.8,
      y: 20,
      opacity: 0,
      delay: 0.2, // Slight delay after title
      ease: "power2.out",
    });
  });

  // --- About Section - Location Cards Animation ---
  // Animate cards staggering in
  const locationCards = gsap.utils.toArray(".location-card-animate");
  if (locationCards.length > 0) {
    gsap.from(locationCards, {
      scrollTrigger: {
        trigger: ".location-cards-container", // Trigger based on the container
        start: "top 80%",
        toggleActions: "play none none none",
        // markers: true,
      },
      duration: 0.6,
      y: 50,
      opacity: 0,
      stagger: 0.15, // Stagger animation for each card
      ease: "power2.out",
    });
  } else {
    console.warn("No location cards found for animation.");
  }

  // --- Pricing Section - Pricing Item Animation ---
  // Animate pricing cards scaling and fading in
  const pricingItems = gsap.utils.toArray(".pricing-item-animate");
  if (pricingItems.length > 0) {
    gsap.from(pricingItems, {
      scrollTrigger: {
        trigger: ".pricing-cards-container", // Trigger based on the container
        start: "top 80%",
        toggleActions: "play none none none",
        //  markers: true,
      },
      duration: 0.5,
      scale: 0.9, // Start slightly smaller
      opacity: 0,
      stagger: 0.1, // Stagger animation
      ease: "power1.out",
    });
  } else {
    console.warn("No pricing items found for animation.");
  }

  // --- Contact Section - Content Box Animation ---
  const contactContent = document.querySelector(".contact-content-animate");
  if (contactContent) {
    gsap.from(contactContent, {
      scrollTrigger: {
        trigger: contactContent,
        start: "top 85%",
        toggleActions: "play none none none",
        //   markers: true,
      },
      duration: 1,
      y: 40,
      opacity: 0,
      ease: "power3.out",
    });
  } else {
    console.warn("Contact content box not found for animation.");
  }

  console.log("GSAP Animations Initialized Successfully.");
}); // End DOMContentLoaded listener
