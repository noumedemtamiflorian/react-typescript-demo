import './App.css';
import { List } from './generics/List';

function App() {

  return (
   <div className='App'>
    <List
    
      items={['Batman','Superman','Wonder Woman']}
      onClick={(item)=>console.log(item)}

    />
    <List items={[1,2,3]} onClick={(item)=>console.log(item)}/>
    <List

    items={[
      {
        first:'Bruce1',
        last:'Wayne1'
      },
      {
        first:'Bruce2',
        last:'Wayne2'
      },
      {
        first:'Bruce3',
        last:'Wayn3e'
      },
      {
        first:'Bruce4',
        last:'Wayne4'
      }
    ]}

    onClick={(item)=>console.log(item)}
    />
   </div>
  );
}

export default App;