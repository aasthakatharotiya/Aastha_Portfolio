import React from 'react'
import JsonAPI from './Redux_Json_API/JsonAPI'
import { Provider } from 'react-redux'
import { store } from './App/store'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Men from './Redux_Json_API/Men'
import Women from './Redux_Json_API/Women'
import Food from './Redux_Json_API/Food'
import AddToCart from './Redux_Json_API/AddToCart'
import Beauty from './Redux_Json_API/Beauty'
import Gift from './Redux_Json_API/Gift'
import Electronic from './Redux_Json_API/Electronic'
import SignIn from './Redux_Json_API/SignIn'

export default function App() {
  return (
    <div>
      <Provider store={store}>
        {/* <JsonAPI/> */}

        <BrowserRouter>
          <Routes>
            <Route path='/' element={<SignIn />}></Route>
            <Route path='/All' element={<JsonAPI />}></Route>
            <Route path='/Men' element={<Men />}></Route>
            <Route path='/Women' element={<Women />}></Route>
            <Route path='/Food' element={<Food />}></Route>
            <Route path='/Beauty' element={<Beauty />}></Route>
            <Route path='/Gift' element={<Gift />}></Route>
            <Route path='/Electronic' element={<Electronic />}></Route>
            <Route path='/Cart' element={<AddToCart />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  )
}
