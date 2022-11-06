import React, { lazy, Suspense } from 'react';
import Fallback2 from './Fallback';
import {BrowserRouter as Router, Link,Routes,Route} from 'react-router-dom';
import WithoutLazy from './WithoutLazy';
import './App.css';
import Nav from './Nav';
const Data= lazy(()=> import('./Data'))
function App(){
  return (
    <Router>
    <div className='App'>
      <Nav/>

        <Suspense fallback=
          {Fallback2}>  
        <Routes>
          <Route exact path="/" element={<Data/>} />
          <Route exact path="/withoutlazy" element={<WithoutLazy/>} />
          </Routes>
           </Suspense>

      </div>
    </Router>
  );
}
export default App;