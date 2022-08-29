import React from 'react';
import {useContext} from "react";
import {UserDataContext} from "../sign-up/sign-up";

 export function ChildContext() {

     const userData = useContext(UserDataContext)

    return (
        <div>
            <p>This is user Name</p>
            {userData.name}
        </div>
    )
}
