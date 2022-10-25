import React, { useState, useRef, useEffect } from "react";
import "../components/demo.css";

const Demo = () => {
  const [mobile, setmobile] = useState(false);
  const [laptop, setLaptop] = useState(false);
  const [tablet, setTablet] = useState(false);
  const [fullScreen, setFullScreen] = useState(false);
  const [stateWidth, setStateWidth] = useState<any>();
  const [stateHeight, setStateHeight] = useState<any>();
  const [cssStyle, setCssStyle] = useState<any>();

  const divRef: any = useRef(null);

  console.log("stateWidth", stateWidth);
  // console.log("heightWidth", stateHeight);

  const [windowDimenion, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  });

  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    });
  };

  console.log("windowDimenion", windowDimenion);

  const mobilClick = () => {
    // fun();
    setmobile(true);
    setTablet(false);
    setLaptop(false);
    setFullScreen(false);
  };

  const laptopClick = () => {
    // fun();
    setmobile(false);
    setTablet(false);
    setLaptop(true);
    setFullScreen(false);
  };

  const tablatClick = () => {
    // fun();
    setmobile(false);
    setTablet(true);
    setLaptop(false);
    setFullScreen(false);
  };

  const fullScreenClick = () => {
    // fun();
    setmobile(false);
    setTablet(false);
    setLaptop(false);
    setFullScreen(true);
  };

  const fun = () => {
    let style;
    if (stateWidth <= 320 || windowDimenion.winWidth <= 320) {
      style = { backgroundColor: "red" };
      setCssStyle(style);
    } else if (
      stateWidth === 768 ||
      (windowDimenion.winWidth > 320 && windowDimenion.winWidth <= 768)
    ) {
      style = { backgroundColor: "blue" };
      setCssStyle(style);
    } else if (
      stateWidth <= 1024 ||
      (windowDimenion.winWidth > 768 && windowDimenion.winWidth < 1024)
    ) {
      style = { backgroundColor: "yellow" };
      setCssStyle(style);
    } else if (stateWidth >= 1024 || windowDimenion.winWidth > 1024) {
      style = { backgroundColor: "rgb(226, 163, 167)" };
      setCssStyle(style);
    } else {
      style = { backgroundColor: "pink" };
    }
  };

  useEffect(() => {
    setStateWidth(divRef.current?.offsetWidth);
    setStateHeight(divRef.current?.offsetHeight);
  }, [mobilClick, laptopClick, tablatClick, fullScreenClick]);

  useEffect(() => {
    window.addEventListener("resize", detectSize);
    // fun();
    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimenion]);

  const style = {
    "@media (max-width: 320px)": {
      backgroundColor: " rgb(0, 255, 225)",
    },
  };

  console.log("hello");

  return (
    <div>
      <div className="btn">
        <button onClick={() => mobilClick()}>mobile</button>
        <button onClick={() => tablatClick()}>tablet</button>
        <button onClick={() => laptopClick()}>laptop</button>
        <button onClick={() => fullScreenClick()}>full Screen</button>
      </div>
      <div className="containerdiv">
        <div
          ref={divRef}
          className={`${mobile && "mobile"} ${tablet && "tablet"} ${
            laptop && "laptop"
          } ${fullScreen && "fullScreen"} content`}
          style={cssStyle}
        >
          <div className="main">
            <article className="firstArticle">
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                fugit obcaecati nostrum quam dolorum eligendi consequuntur et
                laboriosam. Animi ipsam repellendus odit optio labore officiis
                tempora distinctio dolorum aperiam cupiditate. Lorem ipsum,
                dolor sit amet consectetur adipisicing elit. Consectetur
                praesentium maxime vitae ullam labore fugiat veniam! Inventore,
                odit aliquid optio nostrum minima itaque, dicta aperiam
                dignissimos atque possimus, saepe exercitationem! Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Nostrum fugiat
                excepturi perspiciatis laudantium amet rem facere, natus porro
              </p>
            </article>
            <article className="secondArticle">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                fugit obcaecati nostrum quam dolorum eligendi consequuntur et
                laboriosam. Animi ipsam repellendus odit optio labore officiis
                tempora distinctio dolorum aperiam cupiditate. laboriosam. Animi
                ipsam repellendus odit optio labore officiis tempora distinctio
                dolorum aperiam cupiditate. Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Consectetur praesentium maxime
                vitae ullam labore fugiat veniam! Inventore, odit aliquid optio
                nostrum minima itaque, dicta aperiam dignissimos atque possimus,
                saepe exercitationem! Lorem ipsum dolor sit amet consectetur
                magni optio mollitia nemo veniam quasi error eum ad magnam in?
              </p>
            </article>
            <article className="thiredArticle">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                fugit obcaecati nostrum quam dolorum eligendi consequuntur et
                laboriosam. Animi ipsam repellendus odit optio labore officiis
                tempora distinctio dolorum aperiam cupiditate. laboriosam. Animi
                ipsam repellendus odit optio labore officiis tempora distinctio
                dolorum aperiam cupiditate. Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Consectetur praesentium maxime
                vitae ullam labore fugiat veniam! Inventore, odit aliquid optio
                nostrum minima itaque, dicta aperiam dignissimos atque possimus,
                saepe exercitationem! Lorem ipsum dolor sit amet consectetur
              </p>
            </article>
            <article className="fourthArticle">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                fugit obcaecati nostrum quam dolorum eligendi consequuntur et
                laboriosam. Animi ipsam repellendus odit optio labore officiis
                tempora distinctio dolorum aperiam cupiditate. laboriosam. Animi
                ipsam repellendus odit optio labore officiis tempora distinctio
                dolorum aperiam cupiditate. Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Consectetur praesentium maxime
                vitae ullam labore fugiat veniam! Inventore, odit aliquid optio
                nostrum minima itaque, dicta aperiam dignissimos atque possimus,
                saepe exercitationem! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Nostrum fugiat excepturi perspiciatis
              </p>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Demo;
