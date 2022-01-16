
import NavBar from './components/navbar';
import Sidebar from './components/sidebar';
import Landing from './components/landing';
import About from './components/about';
import Work from './components/work';
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
   <Work/>
   </div>
   </Fragment>
      
    
  );
}

export default App;
