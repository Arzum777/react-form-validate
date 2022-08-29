import React from 'react'
import { Link } from "react-router-dom";

 export function Home(){
    return(
        <div>
            <h1>Home</h1>
            <p>
                <Link to="/">Home</Link>
            </p>
            <p>
                <Link to="/sign-in">Sign In</Link>
            </p>
            <p>
                <Link to="/sign-up">Sign up</Link>
            </p>
        </div>
    )
}
