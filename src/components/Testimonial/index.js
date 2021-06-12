import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
// import Item from "./Item";
import "./styles.css";
import axios from "axios";


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 }
];


function CarouselTestimony() {
  // const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  const [getCarousel, setGetCarousel] = useState([]);

  useEffect(()=>{
    axios.get(`https://wknd-take-home-challenge-api.herokuapp.com/testimonial`)
    .then((res)=>{
      const data = res.data
      setGetCarousel(data)
    })
    .catch((err)=>{
      console.log(err);
    })
  }, [])

  return (
    <div className="App">
      {/* <hr className="seperator" /> */}
      <div className="carousel-wrapper">
        <h1 className="title-testimoni mb-3">Testimonial</h1>
        <Carousel breakPoints={breakPoints}>
        {getCarousel !== undefined ? getCarousel.map((item, index)=>{
        return (
        <div key={item.id}>
          <div className="rectangle">
            <h4 className="by">{item.by}</h4>
            <p className="testimony">{item.testimony}</p>
          </div>
        </div>
        )
        }) : null}
        </Carousel>
      </div>
    </div>
  );
}

export default CarouselTestimony;

const rootElement = document.getElementById("root");
ReactDOM.render(<CarouselTestimony />, rootElement);
