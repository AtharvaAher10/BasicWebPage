import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home.jsx';
import Userprofile from './component/Userprofile.jsx';
import { Link } from 'react-router-dom';



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
      {/* <Reqresponse/> */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/user/1">User 1</Link>
          </li>
          <li>
            <Link to="/user/2">User 2</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/user/:id" element={<Userprofile />} />
        
      </Routes>
    </div>

  );
}

export default App;
