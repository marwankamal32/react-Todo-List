import TodoList from "./components/TodoList"
import './App.css';
import {createTheme , ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily:[
      "Alexandria",
    ]
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default App;
