import React from "react";

function Food(props) {
  return <div>I like {props.fav}</div>;
}
function App() {
  return (
    <div className="App">
      <div>Hello</div>
      <Food fav="Samgyupsal🍖" />
      <Food fav="to drink a glass of Wine🍷" />
      <Food fav="pizza🍕" />
      <Food fav="fried potato🍟" />
      <Food fav="jokbal🍗" />
    </div>
  );
}

export default App;
