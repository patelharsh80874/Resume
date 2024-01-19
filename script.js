var tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#main",
    start: "30% 10%",
    end: "90% 90%",
    scrub: true,
  },
});
tl.to("#img2", {
  rotateX: "0deg",
});
tl.to("#img3", {
  rotateX: "0deg",
});
tl.to(
  "#resume",
  {
    marginTop: "100vh",
    scale: 0.8,
  },
  "same"
);
tl.to(
  "#text",
  {
    marginTop: "-100vh",
  },
  "same"
);
tl.to(
  "#overlay",
  {
    opacity: 1,
  },
  "same"
);
