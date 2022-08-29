import React from "react";
import './App.css';
import {Routes, Route} from "react-router-dom";
import {Home} from "./components/Home/home-page";
import {SignIn} from "./components/sign-in/sign-in";
import {SignUp} from "./components/sign-up/sign-up";
import {ErrorPage} from "./components/ErrorPage/Error-page";


function App() {


    return (
        <div className="App">
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route path="/sign-in" element={<SignIn/>}/>
                    <Route path="/sign-up" element={<SignUp/>}/>
                    <Route exact path="*" element={<ErrorPage/>}/>
                </Routes>
        </div>
    );
}

export default App;
