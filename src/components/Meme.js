import MemeData from "../memesData";
function Meme(props) {

  let url
  
  function HandleClick() {
    url = MemeData.data.memes[Math.floor(Math.random() * MemeData.data.memes.length )]["url"];
    console.log(url);
  }

  return (

    <main>
      <div className="form">
          <input className="form-input" type="text" placeholder="Top Text" />
          <input
            className="form-input"
            type="text"
            placeholder="Bottom Text"
          />
        <button className="form-button" onClick={HandleClick}>Get a new meme image 🖼</button>
      </div>
      <p>{url}</p>
    </main>
  );
}

export default Meme;