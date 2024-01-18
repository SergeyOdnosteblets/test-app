import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from './components/Main';

import "./App.css";

function App() {
  return (
    <Router basename='/'>
      <div className='container'>
        <Header />
        <Main/>
      </div>
    </Router>
  );
}

export default App;
