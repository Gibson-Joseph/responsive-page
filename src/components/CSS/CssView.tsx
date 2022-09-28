import React, { useState } from "react";
import { Css } from "./index";
// import "../CSS/index.css";
import Demo from "../demo";
import "../../components/demo.css";

export const CssView = () => {
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
    <div className="viewDiv">
      <div className="btnView">
        <button onClick={() => mobilClick()} className=" ml-8 py-1">
          Mobile
        </button>

        <button onClick={() => laptopClick()} className=" ml-8 px-6 py-1">
          Laptop
        </button>

        <button onClick={() => tablatClick()} className=" ml-8 px-6 py-1">
          Tablet
        </button>

        <button onClick={() => fullScreenClick()} className=" ml-8 px-6 py-1">
          FullScreen
        </button>
      </div>
      <div
        className={`${mobile && "mobile"} ${tablet && "tablet"} ${
          laptop && "laptop"
        } ${fullScreen && "fullScreen"} noCondition`}
      >
        {/* <Css /> */}
        <Demo />
      </div>
    </div>
  );
};
