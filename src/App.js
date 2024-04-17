import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Main from "./Number/Main";
import {N_1, N_2, N_3, N_4, N_5, N_6, N_7, N_8, N_9,N_10, Main, Result } from "./Number"
import './App.css';
import M from "./Number/123"
function App() {
  return (
    <div className='main'>
       <BrowserRouter>
         <Routes>
           <Route path='/' element={<Main/>}></Route>
           <Route path='/N_1' element={<N_1/>}></Route>
           <Route path='/N_2' element={<N_2/>}></Route>
           <Route path='/N_3' element={<N_3/>}></Route>
           <Route path='/N_4' element={<N_4/>}></Route>
           <Route path='/N_5' element={<N_5/>}></Route>
           <Route path='/N_6' element={<N_6/>}></Route>
           <Route path='/N_7' element={<N_7/>}></Route>
           <Route path='/N_8' element={<N_8/>}></Route>
           <Route path='/N_9' element={<N_9/>}></Route>
           <Route path='/N_10' element={<N_10/>}></Route>
           <Route path='/Result' element={<Result/>}></Route>
           <Route path='/123' element={<M/>}></Route>
           


           
         </Routes>
       </BrowserRouter>
       </div>
   );
}

export default App;
