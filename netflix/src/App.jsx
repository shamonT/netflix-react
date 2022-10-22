
import './App.css';
import React from 'react';
import {Action,comedy,Horror,Originals, Romance  } from "./urls";
import Navbar from './components/navbar/Navbar';
import Banner from './components/Banner/Banner';
import RowPost from './components/Rowpost/RowPost';

function App() {
 return(
  <div className='App'>
    <Navbar/>
    <Banner/>
    <RowPost url={Originals} title='Netflix Originals'/>
    <RowPost url={Action} title='Action' isSmall/>
    <RowPost url={Romance} title='Romance' isSmall/>
    <RowPost url={Horror} title='Horror' isSmall/>
    <RowPost url={comedy} title='comedy' isSmall/>
  </div>
 )
}

export default App;
