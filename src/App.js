import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import './App.css';
import {Routes, Route} from "react-router-dom";
import {Home} from "./components/Home/home-page";
import {SignIn} from "./components/sign-in/sign-in";
import {SignUp} from "./components/sign-up/sign-up";
import {ErrorPage} from "./components/ErrorPage/Error-page";
import Dashboard from "./components/dashboard/dashboard";
export const UserDataContext = React.createContext({})


function App() {

    const [parentValue, setParentValue] = useState({})
    const navigation = useNavigate()

    const element = () => {
        navigation('/dashboard')
    }

    useEffect(() => {
        if (parentValue.email === 'arz.arzyan@mail.ru'){
            console.log('exav')
        }else{
            console.log('chexav')
        }
    },[parentValue])


    return (
        <div className="App">
            <UserDataContext.Provider value={parentValue}>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route path="/sign-in" element={<SignIn/>}/>
                    <Route path="/sign-up" element={<SignUp setParentValue={setParentValue}/>}/>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                    <Route exact path="*" element={<ErrorPage/>}/>
                </Routes>
            </UserDataContext.Provider>

        </div>
    );
}

export default App;
