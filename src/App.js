import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './Components/Home';
import AllDestination from './Components/AllDestination/AllDestination';
import Details from './Components/Details/Details';
function App() {
  return (
    <div className="">
     <BrowserRouter>
     <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/home' element={<Home/>} />
       <Route path='/destination' element={<AllDestination/>} />
       <Route path='/destination/:_id' element={<Details/>} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
