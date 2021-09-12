import React, { useState } from 'react';

import SignIn from "./signin"
import SignUp from "./signup"
import Question1 from "./question1"
import Question2 from "./question2"

function pageInitial() {
    return "signin"
}
function ClientTab() {

    const [page, setPage] = useState(pageInitial())
    const [selection1, changeSelection1] = useState("")
    const [selection2, changeSelection2] = useState("")
    const [selection3, changeSelection3] = useState("")
    const [selection4, changeSelection4] = useState("")

    function newAccount() {
        setPage(prevPage => "register")
    }

    function existingAccount() {
        setPage(prevPage => "signin")
    }

    function signedIn() {
        setPage(prevPage => "signedin")
    }

    function goQone() {
        setPage(prevPage => "Qone")
    }

    if(page == "signin"){
        return <SignIn newAcc={newAccount}/>;
    }
    else if(page == "register"){
        return <SignUp existingAcc={existingAccount} goQone={goQone}/>
    }
    else if(page == "Qone"){
        return (
        <h3>
            What is your annual income?
            <Question1 selection={selection1} changeSelection={changeSelection1}/>
            <Question2 selection={selection2} changeSelection={changeSelection2} toActivate={selection1==""?false:true} />
        </h3>
        )
    }

} export default ClientTab;