import React, { useState } from 'react';

import SignIn from "./signin"
import SignUp from "./signup"

function pageInitial() {
    return "signin"
}
function ClientTab() {

    const [page, setPage] = useState(pageInitial())

    function newAccount() {
        setPage(prevPage => "register")
    }

    function existingAccount() {
        setPage(prevPage => "signin")
    }

    function signedIn() {
        setPage(prevPage => "signedin")
    }

    if(page == "signin"){
        return <SignIn newAcc={newAccount}/>;
    }
    else if(page == "register"){
        return <SignUp existingAcc={existingAccount}/>
    }

} export default ClientTab;