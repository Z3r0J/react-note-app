import {
  BrowserRouter,
  Route,
} from "react-router-dom";
import './App.css';
import Header from './components/Header';
import NotesPage from './pages/NotesPage';
import NotePage from "./pages/NotePage";
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <Route component={NotesPage} path="/" exact />
      <Route component={NotePage} path="/note/:id" />
    </div>
    </BrowserRouter>
  );
}

export default App;
