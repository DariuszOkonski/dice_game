import './App.css';
import Die from './Die';

function App() {
  return (
    <div className='App'>
      <h1>Dice Game</h1>
      <Die face='one' />
      <Die face='two' />
      <Die face='three' />
      <Die face='four' />
      <Die face='five' />
    </div>
  );
}

export default App;
