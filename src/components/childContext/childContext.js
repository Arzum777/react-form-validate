import React from 'react';
import {useContext} from "react";
import {UserNameContext} from "../sign-up/sign-up";


 export function ChildContext() {

     const userData = useContext(UserNameContext)

    return (
        <div>
            <p>This is user Name</p>
            {userData.name}
        </div>
    )
}
