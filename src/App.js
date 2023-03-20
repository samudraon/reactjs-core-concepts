import logo from './logo.svg';
import './App.css';

/* Variable */
const num = 5555;
const singer = { name: 'Dr. Mahfuz', job: 'Singer' };
const singer2 = {
  name: 'Eva Rahman',
  job: 'Singer2'
}

/* CSS Style */
const singerStyle = {
  color: 'purple',
  backgroundColor: 'aquamarine'
}

function App() {
  return (
    <div className="App">
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <h5>New Component. YAY!!</h5>
      <Friend></Friend>
      <Friend></Friend>
      <Friend></Friend>
    </div>
  );
}

function Person() {
  return (
    <div className='person'>
      <h1>Shakib Al Hasan</h1>
      <p>Profession: Cricketer</p>
    </div>
  )
}

function Friend() {
  return (
    <div className='container'>
      <h3>Name: Salman Khan</h3>
      <p>job: maramari</p>
    </div>
  )
}

export default App;
