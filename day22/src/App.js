import './App.css';
import Fetch  from './component/Fetch.js';
import Error1 from './component/Error1.jsx';
import Error2 from './component/Error2.jsx';
import Reqresponse from './component/Reqresponse.jsx';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
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
      </header> */}
      {/* <Fetch/> */}
      {/* <Error1/> */}
      {/* <Error2/> */}
      <Reqresponse/>
    </div>

  );
}

export default App;
