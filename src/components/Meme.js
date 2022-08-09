import MemesData from "../memesData";
import { useState } from "react";

//state: state allows us to "hook" into our component and make it so that whenever the state changes (is updated), the component will re-render. state is an object of values that are stored in our component.

//state refers to values that a component can maintain between render cycles - a way for reacty to remember saved valyes from within a component.

//Props: refers to the properties that are passed into our component in order for it to work, similar to how a function receives parameters. A component receiving props is not allowed to modify them (they are immutable).

//state vs props: state refers to values that are managed by the component (similar to how variables are declared inside a function), while props are values that are passed into the component. Any time you have changing values that should be saved/displayed, you should use state.

//RULE: KEEP STATE AS LOCAL AS POSSIBLE

function Meme(props) {
  // const [result, setResult] = useState("Hello")
  // console.log(result);

  // const [things, setThings] = useState(["Thing 1", "Thing 2"]);

  // const [count, setCount] = useState(0);

  //function add() { setCount(count + 1); } never do count++, as that is modifying state directly

  //function subtract() { setCount(count - 1); }

  //we can also provide a callback function to the setCount function, which will be called after the state is updated. this is generally best practice.

  // function add() { setCount(function(oldValue) {
  //   return oldValue + 1})
  // }; this is the ES5 way of writing the above function.

  // we pass oldValue - the current value of count - into the callback function, which will be called after the state is updated.

  function add() { setCount(prevCount => prevCount + 1); }

  function subtract() { setCount(prevCount => prevCount - 1); }

  //you pass in a newe value of state if you don't need to modify the old value. otherwise, you pass in a function that takes the old value and returns a new value.

  // const array = things.map(thing => {
  //   return <p key={thing}>{thing}</p>;
  // })

  // function addItem() {
  //   const newThingText = `thing ${things.length + 1}`;
  //   setThings(prevState => [...prevState, newThingText]);

  //   setResult("Hello World!");

  // }

  // const [memeImage, setMemeImage] = useState("");
  // const [isGoingOut, setGoingOut] = useState("true");
  // const [thingsArray, setThingsArray] = useState(["thing1", "thing2"]);

  const [meme, setMeme] = useState({
    toptext: "",
    bottomtext: "",
    randomImage: "",
  });

  const [allMemeImages, setAllMemeImages] = useState(MemesData);

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomIndex = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomIndex].url;
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }) );
  }

  const [count, setCount] = useState(0);

  function Count(props) {
    //in this component, state is passed in as props.
    return (
      <div>
        <h1>{props.number}</h1>
        {console.log("Count component rendered")}
      </div>
    );
  }
  

  // function changeImage() { setMemeImage(getMemeImage); }

  //   function goingOut() {
  //     //setGoingOut(!isGoingOut); NEVER DO THIS - this is modifying state directly
  //     setGoingOut(prevState => !prevState);
  //   }

  //   function showThings() {
  //     const newThingText = `thing ${thingsArray.length + 1}`;
  //  setThingsArray(prevState => [...prevState, newThingText]);
  //   }

  return (
    <main>
      <div className="form">
        <input className="form-input" type="text" placeholder="Top Text" />
        <input className="form-input" type="text" placeholder="Bottom Text" />
        <button className="form-button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme-box">
        {meme.randomImage ? (
          <img className="meme-image" src={meme.randomImage} alt="meme" />
        ) : null}
      </div>
      <Count number={count} />
      <button onClick={add}>Add</button>
      <button onClick={subtract}>Subtract</button>
      {/* <div className="state-value" onClick={goingOut}>{isGoingOut ? "yes" : "no"}</div>
      <button onClick={showThings}>update UI</button>
      {thingsArray} */}
      {/* <div>
        {array}
        {result}
      </div>
      <br/>
      <div>
        <button onClick={subtract}>-</button>
        <div className="counter"><h1>{count}</h1></div>
        <button onClick={add}>+</button>
      </div> */}
    </main>
  );
}

export default Meme;
