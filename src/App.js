import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import ErrorPage from './components/ErrorPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/signup' element={<SignUp/>}/> 
        <Route path='/login' element={<Login/>}/> 
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </>
  );
}

export default App;
