import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from './components/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<Navigate to='/home' />} />
        <Route path='/home' element={<Home />} />
        <Route path='/details/:id' element={<Home/>} />
        <Route path='/variables/:id/:key/:criteriaIdx' element={<Home/>} />
      </Routes>
    </>
  );
}


export default App;
