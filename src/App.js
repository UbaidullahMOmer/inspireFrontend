import ReactRoute from "./reactRoute/ReactRoute";
import { SnackbarProvider } from 'notistack'
function App() {
  
  return (
    <div className="App">
      <SnackbarProvider maxSnack={3}/>
      <ReactRoute />
    </div>
  );
}

export default App;