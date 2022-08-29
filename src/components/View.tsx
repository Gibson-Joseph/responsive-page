import { useState } from "react";
import { Index } from "./index";

export const View = () => {
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
    <div className="w-full">
      <div className="flex justify-center fixed bg-gray-100 text-gray-500 w-full">
        <button onClick={() => mobilClick()} className=" ml-8 py-1">
          Mobile
        </button>

        <button onClick={() => laptopClick()} className=" ml-8 px-6 py-1">
          Laptop
        </button>

        {/* <div className="h-full absolute border-2 border-l-red-600 "></div> */}

        <button onClick={() => tablatClick()} className=" ml-8 px-6 py-1">
          Tablet
        </button>

        <div className="h-full absolute border border-white left-32rem"></div>

        <button onClick={() => fullScreenClick()} className=" ml-8 px-6 py-1">
          FullScreen
        </button>
      </div>
      <div
        className={`${mobile && "w-[320px]"} ${tablet && "w-[768px]"} ${
          laptop && "w-[1024px]"
        } ${fullScreen && "w-full"} m-auto`}
      >
        <Index />
      </div>
    </div>
  );
};
