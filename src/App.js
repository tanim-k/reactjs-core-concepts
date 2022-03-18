import logo from './logo.svg';
import './App.css';


// global variable
const number = 555;
const singer = {name:'magur ali', job:'singing'}
const singerStyle = {
  color: 'purple',
  backgroundColor: 'cyan',
  borderRadius: '5px'
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>JSX</h1>
        <p>love u</p>
        <div className="container">
          <h3>hello dude how r you</h3>
        </div>
        <div className="music">
          <h2 style={singerStyle}>name: {222 + number}</h2>
          <h2 style={{color:'white', backgroundColor: 'goldenrod', borderRadius: '10px'}}>name: {singer.name}</h2>
          <h2 style={singerStyle}>name: {singer.job}</h2>
        </div>
        <div id="countries" className="countries">
          <p> </p>
          <p></p>
          <p></p>
        </div>
        <p style={singerStyle}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
