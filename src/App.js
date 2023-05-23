import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from "./Components/MovieList";
import Home from './Components/Home';
import NavBar from "./Components/NavBar";
import Trailer from "./Components/Trailer";
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
    <div className="App">
       <NavBar />
       <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/movies" element={ <MovieList />} />
        <Route path="/trailer/:id" element={ <Trailer />} />
       </Routes>
    </div>
       </BrowserRouter>
    
  );
}

export default App;
 