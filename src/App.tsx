import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';

function App() {
  const personName = {
    first :"NOUMEDEM TAMI",
    last : "Florian"
  }

  const nameList = [
    {
      first :"NOUMEDEM TAMI",
      last : "Florian"
    },
    {
      first :"NOUMEDEM TAMI",
      last : "Florian"
    },
    {
      first :"NOUMEDEM TAMI",
      last : "Florian"
    },
    {
      first :"NOUMEDEM TAMI",
      last : "Florian"
    }
  ]
  return (
    <div className="App">
      <Greet name="Vishmas" messageCount={10} isLoggedIn={true}/>
      <Person name={personName}/>
      <PersonList names={nameList} />
    </div>
  );
}

export default App;