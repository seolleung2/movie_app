import React from "react";
import PropTypes from "prop-types";

const foodIlike = [
  {
    id: 1,
    name: "Samgyupsal🍖",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmp-seoul-image-production-s3.mangoplate.com%2Fmango_pick%2Fuker6u9xhkr1m8.jpg&f=1&nofb=1",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Wine🍷",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ft1.daumcdn.net%2Fthumb%2FR1280x0%2F%3Ffname%3Dhttp%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2Fciv%2Fimage%2FyPsX8Xxl95iuasNOrNt--Gr0aoQ&f=1&nofb=1",
    rating: 3,
  },
  {
    id: 3,
    name: "pizza🍕",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F243BC34358D0CAEB17&f=1&nofb=1",
    rating: 2.5,
  },
  {
    id: 4,
    name: "fried potato🍟",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdnweb01.wikitree.co.kr%2Fwebdata%2Feditor%2F201604%2F20%2Fimg_20160420093450_49ea2f90.jpg&f=1&nofb=1",
    rating: 3.8,
  },
  {
    id: 5,
    name: "jokbal🍗",
    image:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fmbymadmin.reddot.kr%2Fdata%2Fupload%2F10153%2Fvisual3.jpg&f=1&nofb=1",
    rating: 5,
  },
];

Food.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

function Food(props) {
  return (
    <div>
      <h2>I like {props.name}</h2>
      <img src={props.url} width="250px" alt={props.name} />
      <h2>{props.rating} / 5.0</h2>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <div>
        <h1>Hello, your favourite foods are👇🏻</h1>
      </div>
      {/* <Food fav="Samgyupsal🍖" />
      <Food fav="to drink a glass of Wine🍷" />
      <Food fav="pizza🍕" />
      <Food fav="fried potato🍟" />
      <Food fav="jokbal🍗" /> */}
      {foodIlike.map((food) => {
        return (
          <Food
            key={food.id}
            name={food.name}
            url={food.image}
            rating={food.rating}
          />
        );
      })}
    </div>
  );
}

export default App;
