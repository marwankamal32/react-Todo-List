import TodoList from "./components/TodoList"
import './App.css';

function App() {
  return (
    <div className="App"
    style={{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      background:"#161616",
      height:"100vh",
      direction:"rtl",
    }}>
      <TodoList/>
    </div>
  );
}

export default App;
