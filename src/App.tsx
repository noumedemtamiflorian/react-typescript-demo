import './App.css';
import { Private } from './auth/Private';
import { Profile } from './auth/Profile';

function App() {

  return (
   <div>
    <Private isLoggedIn={true} Component={Profile}/>
   </div>
  );
}

export default App;