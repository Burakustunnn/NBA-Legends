import './App.css';
import Header from './components/header/Header';
import CardContainer from "./components/cardcontainer/CardContainer"
import { useState } from 'react';

function App() {
  const [search, setSearch] = useState("")
  return (
    <div className="App">
      <Header setSearch={setSearch}/>
      <CardContainer search={search}/>

   
    </div>
  );
}

export default App;
