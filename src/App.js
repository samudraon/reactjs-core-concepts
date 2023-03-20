import logo from './logo.svg';
import './App.css';

/* Variable */
const num = 5555;
const singers = [
  { name: 'Dr. Mahfuz', job: 'Singer' },
  { name: 'Eva Rahman', job: 'Singer2' },
  { name: 'Agun', job: 'Sopno' },
  { name: 'Shuvro', job: 'Pathor' }
]

/* CSS Style */
const singerStyle = {
  color: 'purple',
  backgroundColor: 'aquamarine'
}

function App() {
  const nayoks = ['Rubel', 'Bapparaj', 'Kuber', 'Jashim', 'Salman Shah', 'Riyaj', 'Razzak']
  return (
    <div className="App">
      {
        nayoks.map(nayok => <li>Name: {nayok}</li>)
      }

      {/* {
        nayoks.map(nayok => <Person name={nayok}></Person>)
      } */}

      {
        singers.map(singer => <Person name={singer.name}></Person>)
      }

      {/* <Person name={nayoks[0]} nayika="Moushumi"></Person>
      <Person name={nayoks[1]} nayika="Moushumi"></Person>
      <Person name={nayoks[2]} nayika="kopila"></Person> */}
      <h5>New Component. YAY!!</h5>
      <Friend movie="Daabang" phone="01234"></Friend>
      <Friend movie="Kaliya" phone="019912"></Friend>
    </div>
  );
}

function Person(props) {
  return (
    <div className='person'>
      <h1>{props.name}</h1>
      <p>{props.nayika}</p>
    </div>
  )
}

function Friend(props) {
  return (
    <div className='container'>
      <h3>Name: {props.movie}</h3>
      <p>phone: {props.phone}</p>
    </div>
  )
}

export default App;
