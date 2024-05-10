import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {  Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './components/home/Home.jsx';
import Gallery from './components/gallery/Gallery.jsx';
import Upload from './components/upload/Upload.jsx';
import UserProfile from './components/UserProfile.jsx/UserProfile.jsx';

const myRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />}></Route>
      <Route path='gallery' element={<Gallery/>} />
      <Route path='upload' element={<Upload/>}/>
      <Route path='/userProfile' element={<UserProfile/>}/>
    </Route>

  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={myRouter}/>
  </React.StrictMode>,
)
