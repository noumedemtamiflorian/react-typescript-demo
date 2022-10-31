import './App.css';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Status } from './components/Status';

function App() {

  return (
    <div className="App">
    <Status status='success'/>
    <Heading>Placeholder text</Heading>
    <Oscar> 
      <Heading>Oscar goes to Lenardo Dicario !</Heading>
    </Oscar>
    <Greet name='Virmash'  />
    </div>
  );
}

export default App;