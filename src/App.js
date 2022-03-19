import logo from './logo.svg';
import './App.css';


// global variable
const number = 555;
const singers = [
    {name:'magur ali', job:'s'},
    {name:'magur al', job:'si'},
    {name:'magur a', job:'sin'},
    {name:'magur ', job:'sing'},
    {name:'magu', job:'singing'},
]  
const singerStyle = {
  color: 'purple',
  backgroundColor: 'cyan',
  borderRadius: '5px'
}
function App() {
  const friends = ['awa', 'kawa', 'jawa', 'mawa', 'lawa', 'pawa']
  return (
    <div className="App">
      {
        friends.map(friend => <li>name:{friend}</li>)
      }
      {/* {
        friends.map(friend => <Person name={friend} religion={friend.religion}></Person>)
      }
       */}
      {
        singers.map(singer => <Person name={singer.name}></Person>)
       } 
      {
        singers.map(singer => <Person job={singer.job}></Person>)
      }
        {/* <Person name={friends[0]} religion="islam" profession="banker"></Person>
        <Person name={friends[1]} religion="hindu" profession="developer"></Person>
        <Person name={friends[5]} religion="buddho" profession="teacher"></Person> */}
        <h3>another function</h3>
        {/* <Friend name={friends[2]} religion="muslim" profession="banker"></Friend>
        <Friend name={friends[3]} religion="hindu" profession="farmer"></Friend>
        <Friend name={friends[4]} religion="n/a" profession="farmer"></Friend> */}
    </div>
  );
};

// trying new functions like the given one 
function Person(props) {
  console.log(props)
  return (
    // <>
    //   <h1>tum tumi khan rahman</h1>
    //   <p>profession: love</p>
    //   <p>profession: slow learner</p>
    // </>
    <div className='person'>
      <h1>{props.name}</h1>
      <p>religion: {props.religion}</p>
      <p>profession: {props.profession}</p>
      <b>balani ba?</b><br />
      <b>job: {props.job}</b>
    </div> 
  )
}
// make another function 
function Friend(props) {
  console.log(props)
  return (
    <div className='person'>
      <h1>{props.name}</h1>
      <h6>religion: {props.religion}</h6>
      <p>profession: {props.profession}</p>
    </div>
  )
}

export default App;
