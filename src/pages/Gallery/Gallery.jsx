import { useState, useEffect, useRef } from "react";

import PageBanner from "../../components/shared/PageBanner";
import SectionHeading from "../../components/shared/SectionHeading";
import { GALLERY_IMGS } from "../../data/galleryData";

import "./Gallery.css";

const GAP_PX = 19.2; // 1.2rem at 16px root font-size

export default function Gallery() {
  const [current, setCurrent] = useState(0);
  const [perPage, setPerPage] = useState(3);
  const trackRef = useRef(null);

  // Recalculate how many slides fit on resize
  useEffect(() => {
    const update = () => {
      if (window.innerWidth <= 768) setPerPage(1);
      else if (window.innerWidth <= 1024) setPerPage(2);
      else setPerPage(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Reset to first slide whenever perPage changes to avoid out-of-bounds
  useEffect(() => { setCurrent(0); }, [perPage]);

  const totalPositions = Math.max(1, GALLERY_IMGS.length - perPage + 1);

  const goTo = (n) =>
    setCurrent(Math.max(0, Math.min(n, totalPositions - 1)));

  // Translate the track on every current/perPage change
  useEffect(() => {
    const track = trackRef.current;
    if (!track || !track.children[0]) return;
    const slideWidth = track.children[0].offsetWidth;
    track.style.transform = `translateX(-${current * (slideWidth + GAP_PX)}px)`;
  }, [current, perPage]);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(
      () => setCurrent((c) => (c + 1 < totalPositions ? c + 1 : 0)),
      4000
    );
    return () => clearInterval(timer);
  }, [totalPositions]);

  return (
    <>
      <PageBanner title="Gallery" sub="A look at our food and dining room" />

      <div className="gallery-section">
        <SectionHeading title="Food & Atmosphere" />

        <div className="gallery-slider-wrap">
          <div className="gallery-track" ref={trackRef}>
            {GALLERY_IMGS.map((img, i) => (
              <div key={i} className="gallery-slide">
                <img src={img.src} alt={img.alt} />
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="gallery-controls">
          <button
            className="gallery-arrow-btn"
            onClick={() => goTo(current - 1)}
            aria-label="Previous"
          >
            ←
          </button>

          <div className="gallery-dots">
            {Array.from({ length: totalPositions }).map((_, i) => (
              <button
                key={i}
                className={`gallery-dot${i === current ? " active" : ""}`}
                onClick={() => goTo(i)}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>

          <button
            className="gallery-arrow-btn"
            onClick={() => goTo(current + 1 < totalPositions ? current + 1 : 0)}
            aria-label="Next"
          >
            →
          </button>
        </div>
      </div>
    </>
  );
}
