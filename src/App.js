import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Home from "./components/home/Home"
import './App.scss'
import Category from './components/category/Category';
import Movie from './components/movie/Movie';

function App() {  
  return (
    <div className="app">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/category/:type' element={<Category/>}></Route>
        <Route path='/movies/:movieId' element={<Movie/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}


export default App;
