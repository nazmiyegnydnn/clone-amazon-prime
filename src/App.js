import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Home from "./components/home/Home"
import WatchAgain from "./components/watchAgain/WatchAgain"
import Romantic from "./components/romantic/Romantic"
import Actions from "./components/actions/Actions"
import Adventure from "./components/adventure/Adventure"
import './App.scss'

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/:watchAgainId' element={<WatchAgain/>}></Route>
        <Route path='/romantic' element={<Romantic/>}></Route>
        <Route path='/actions' element={<Actions/>}></Route>
        <Route path='/adventure' element={<Adventure/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}


export default App;
