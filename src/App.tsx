import logo from './logo.svg';
import './App.css';
import web3 from './web3';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{web3.version}</p>
      </header>
    </div>
  );
}

export default App;
