import Header from './components/Header';
import Meme from './components/Meme';

function App() {
  return (
    <div>
      <Header />
      <Meme />
      {console.log("app component rendered")}
    </div>
    
  );
}

export default App;
