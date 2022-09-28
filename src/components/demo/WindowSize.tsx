import React, { useState, useEffect } from "react";

export default function ScreenSize() {
  const [windowDimenion, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  });

  const [state, setState] = useState();

  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    });
  };

  // const style = {
  //   width: windowDimenion.winWidth,
  //   height: windowDimenion.winHeight,
  // };

  // console.log(style);

  useEffect(() => {
    // setState()
    window.addEventListener("resize", detectSize);

    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimenion]);

  return (
    <div >
      <p>
        Width: <strong>{windowDimenion.winWidth}</strong>
      </p>
      <p>
        Height: <strong>{windowDimenion.winHeight}</strong>
      </p>
    </div>
  );
}
