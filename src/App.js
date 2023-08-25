
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Footer } from './components/public/Footer';
import { Header } from './components/public/Header';
import {Details} from './components/public/Details';
import {Form} from './components/public/Form';
import Main from './components/public/Main';

function App() {
  return (
    <div>
    <Header/>

   <Routes>
   <Route exact path={"/"} Component={Main}/>
   <Route exact path={"/details/:id"} Component={Details}/>
   <Route exact path={"/form"} Component={Form}/>
   </Routes>
   
  

  <Footer/>
  </div>
  );
}

export default App;
