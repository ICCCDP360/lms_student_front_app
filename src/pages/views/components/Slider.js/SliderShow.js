import React from "react";
import "./SliderShow.css";
const delay = 2500;

export default function Slideshow({ slides }) {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index, slides.length]);

  return (
    <>
      <div className="slideshow">
        <div
          className="slideshowSlider"
          // style={{transform: 'translateX(-1000px)'}}
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {slides.map((data, index) => {
            return (
              <div className="slide" key={index}>
                <img src={data.image} alt="slide" />
                <img src={data.image} alt="slide" />
              </div>
            );
          })}
        </div>

        <div className="slideshowDots">
          {slides.map((_, idx) => (
            <div
              key={idx}
              className={`slideshowDot${index === idx ? " active" : ""}`}
              onClick={() => {
                setIndex(idx);
              }}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
}
