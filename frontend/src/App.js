import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import DeleteMovie from './pages/DeleteMovie';
import CreateMovie from './pages/CreateMovie';
import EditMovie from './pages/EditMovie';
import ShowMovie from './pages/ShowMovie';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/movies/create' element={<CreateMovie/>}></Route>
      <Route path='/movies/details/:id' element={<ShowMovie/>}></Route>
      <Route path='/movies/edit/:id' element={<EditMovie/>}></Route>
      <Route path='/movies/delete/:id' element={<DeleteMovie/>}></Route>
    </Routes>
  )
}

export default App