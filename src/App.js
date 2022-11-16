import './App.css';
import { Navbar } from './components/Navbar/Navbar.js';
import { TodoList } from './components/TodoList/TodoList.js';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <TodoList/>
    </div>
  );
}

export default App;
