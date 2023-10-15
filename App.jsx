// import logo from './logo.svg';
import './App.css';
// import Lorum from './Lorum';
import Header from './Header/Header';
import { Route,Routes } from 'react-router-dom';
import Main from './Main/Main';
import Gallery from './Gallery/Gallery';
import Projects from './Projects/Projects';
import Contacts from './Contacts/Contacts';
import RegForm from './RegForm/RegForm';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
  return (
   <>


   {user?<Header/>:<RegForm setUser={setUser}/>}

    {/* <Header/> */}

    <Routes>
      <Route path='/Main'element = {<Main/>}></Route>
      <Route path='/Gallery' element= {<Gallery/>}></Route>
      <Route path='/Projects' element={<Projects/>}></Route>
      <Route path='/Contacts' element={<Contacts/>}></Route>
    </Routes>
   </>
  );
}

export default App;
