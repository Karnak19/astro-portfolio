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
        className="absolute top-1/2 left-1/2 aspect-square h-[34vmax] animate-spin-slow rounded-full bg-gradient-to-r from-teal-600 to-purple-600 opacity-80 duration-[10000ms]"
      />
      <div className="fixed z-[2] h-full w-full backdrop-blur-3xl" />
    </>
  );
}

export default Blur;
