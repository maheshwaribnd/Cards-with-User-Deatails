import './App.css';
import { useState } from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import ShowCards from './Components/ShowCards';

const App = () => {

  const [check, setCheck] = useState(false)

  return (
    <>
      <Navbar setCheck={setCheck} />
      {check ? <ShowCards /> : <Home />}
    </>
  );
}

export default App;
