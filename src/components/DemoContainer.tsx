import React, { useState } from "react";
import Demo from "./demo";
import "../components/demo.css";

export const DemoContainer = () => {
  const [mobile, setmobile] = useState(false);
  const [laptop, setLaptop] = useState(false);
  const [tablet, setTablet] = useState(false);
  const [fullScreen, setFullScreen] = useState(false);

  const mobilClick = () => {
    setmobile(true);
    setTablet(false);
    setLaptop(false);
    setFullScreen(false);
  };

  const laptopClick = () => {
    setmobile(false);
    setTablet(false);
    setLaptop(true);
    setFullScreen(false);
  };

  const tablatClick = () => {
    setmobile(false);
    setTablet(true);
    setLaptop(false);
    setFullScreen(false);
  };

  const fullScreenClick = () => {
    setmobile(false);
    setTablet(false);
    setLaptop(false);
    setFullScreen(true);
  };
  return (
    <div>
      <div className="btn">
        <button onClick={() => mobilClick()}>mobile</button>
        <button onClick={() => tablatClick()}>tablet</button>
        <button onClick={() => laptopClick()}>laptop</button>
        <button onClick={() => fullScreenClick()}>full Screen</button>
      </div>
      <div
        className={`${mobile && "mobile"} ${tablet && "tablet"} ${
          laptop && "laptop"
        } ${fullScreen && "fullScreen"} noCondition`}
      >
        <Demo />
      </div>
    </div>
  );
};
