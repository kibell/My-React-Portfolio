
import NavBar from './components/navbar';
import Sidebar from './components/sidebar';
import Landing from './components/landing';
import About from './components/about';
import './App.css';
import { Fragment } from 'react';

function App() {
  return (
   <Fragment>
   <NavBar/>
   <Sidebar/>
   <div className='container'>
   <Landing/>
   <About/>
   </div>
   </Fragment>
      
    
  );
}

export default App;
