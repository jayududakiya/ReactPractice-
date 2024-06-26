import React from 'react'
import {BrowserRouter , Routes ,Route } from 'react-router-dom'

import Page1 from './Pages/Page1'
import Page2 from './Pages/Page2'
import Page3 from './Pages/Page3'
import Page4 from './Pages/Page4'

function ReactRouterDom() {
  return (
    <div>
        <h1>
            React Router Dom 
        </h1>

        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Page1/>} />
                <Route path='/page-2' element={<Page2/>} />
                <Route path='/page-3' element={<Page3/>} />
                <Route path='/page-4' element={<Page4/>} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default ReactRouterDom
