import './App.css';
import { useState } from 'react';
import ToDos from './ToDos';

function App() {

  const [searchFeild, setSearchFeild] = useState("");
  const [list, setList] = useState(["Add Task Above"]);

  const setArray = () => {
    if(searchFeild === "") {
      setList(prev => [...prev]);
      setSearchFeild("");
    }
    else {
    setList(prev => [...prev, searchFeild]);
    setSearchFeild("");
    }
  }

  const removeItem = (id) => {
    setList(prev => prev.filter((arr, index) => {
        return index !== id;
      })
    )
  };

  const handleKeyPress = (e) => {
    if(e.charCode === 13) {
      setArray();
    }
  }


  return (
    <div className="App">
      <div className="App-header">
        <h1>React Todos</h1>
        <div className="input-section">
          <input 
            type="text" 
            placeholder="Enter Tasks"
            value={searchFeild}
            onChange={(e) => setSearchFeild(e.target.value)}
            autoComplete = "on"
            onKeyPress={handleKeyPress}>
          </input>
          <i className="fas fa-plus-circle" onClick={setArray}></i>
        </div>

        <div className="todos-section">
          <ul>
            {list.map((items, index) => {
              return <ToDos 
              listItems = {items} 
              key={index} 
              id={index}
              onSelect={removeItem}/>
            })}
          </ul>
        </div>
      </div>
      <footer>
        <p class="footer__text">
        © 2021 - Website developed by
        <a href="https://github.com/bishalmallick" target="_blank" rel="noreferrer">
         Bishal Mallick
        </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
