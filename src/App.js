import React from 'react'
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const App = (props) => {

  return (
    <>
      <div className='app-wrapper'>
        <BrowserRouter>
          <Header />
          <Nav />
          <div className='app-wrapper-content'>
            <Routes>
              <Route path='/profile'
                element={<Profile 
                  state={props.state.profilePage}
                  dispatch={props.dispatch} />} />
              <Route path='/dialogs'
                element={<Dialogs 
                  store={props.store} />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>

    </>

  )
}

export default App;
