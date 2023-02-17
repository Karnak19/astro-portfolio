import { useEffect, useRef } from "react";

function Blur() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    window.onpointermove = (e) => {
      const { clientX, clientY } = e;

      ref.current?.animate(
        {
          left: clientX + "px",
          top: clientY + "px",
        },
        {
          duration: 5000,
          fill: "forwards",
        }
      );
    };
  }, []);

  return (
    <>
      <div
        ref={ref}
        style={{
          translate: "-50% -50%",
        }}
        className="absolute h-[34vmax] top-1/2 left-1/2 opacity-80 bg-gradient-to-r from-teal-600 to-purple-600 aspect-square animate-spin-slow duration-[10000ms] rounded-full"
      />
      <div className="h-full w-full z-[2] backdrop-blur-3xl fixed" />
    </>
  );
}

export default Blur;
