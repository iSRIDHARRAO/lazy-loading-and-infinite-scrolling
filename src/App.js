import React, { lazy, Suspense } from 'react';

import './App.css';
import Nav from './Nav';
const Data= lazy(()=> import('./Data'))
function App(){
  return (
    <div className='App'>
    <Nav/>
    <Suspense fallback={
      <div className='card2'>
      <div>
          <div className='mancard'>Lazy Loading...</div>
      </div>
</div>
    }>
    <Data/>
    </Suspense>

    </div>
  );
}
export default App;