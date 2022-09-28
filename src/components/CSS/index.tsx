import car from "../../assets/photo.jpg";
import "../CSS/index.css";

export const Css = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];
  console.log("arr", arr);

  return (
    <div className="container">
      <h1>Css</h1>
      {/* <h1 className="htag">Check out the collection of new Cars</h1> */}
      {/* <div className="main"> */}
      {/* {arr.map(() => {
          return (
            <div className="content">
              <img src={car} alt="img" className="imgTag" />
              <h2 className="htwotag">New Car</h2>
              <button className="btn">Know More</button>
            </div>
          );
        })} */}
      {/* </div> */}
    </div>
  );
};
