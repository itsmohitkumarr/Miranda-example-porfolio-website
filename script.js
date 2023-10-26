const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

var tl = gsap.timeline();

tl.to("#app_pages", {
  y: "100vh",
  scale: 0.5,
  duration: 0,
});
tl.to("#app_pages", {
  y: "-200vh",  
  duration: 1,
  delay: 1,
});
tl.to("#app_pages", {
  y: "0vh",
  rotate: 360,
  scale: 1,
  duration: 1.5,
});
