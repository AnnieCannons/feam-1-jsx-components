
import './App.css';
import img1 from './Images/fall.jpg';
import img2 from './Images/spring.jpg';
import img3 from './Images/summer.jpg';
import img4 from './Images/winter.jpg';


function App() {
  return (
    <div className="App">
      <h1>Welcome to my seasonal website!</h1>
      <div className='img_Container'>
        <div className='card'>
          <img src={img2}></img>
          <p>Springtime</p>
        </div>
        <div className='card'>
          <img src={img3}></img>
          <p>Summertime</p>
        </div>
        <div className='card'>
          <img src={img1}></img>
          <p>Falltime</p>
        </div>
        <div className='card'>
          <img src={img4}></img>
          <p>Wintertime</p>
        </div>
      </div>
      <div>
        
        <ul className='green'>
          <h2>Some of my favorite seasonal activities are:</h2>
          <li>Hiking in  the spring wildflowers</li>
          <li>Surfing in the summer time</li>
          <li>Playing i the fall leaves</li>
          <li>Building snowmen in the winter </li>
        </ul>
      </div>

    </div>
  );
}

export default App;
