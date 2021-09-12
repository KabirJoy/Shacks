import React, { useState } from 'react';

import SignIn from "./signin"
import SignUp from "./signup"
import Question1 from "./question1"
import Question2 from "./question2"
import Question3 from "./question3"
import Question4 from "./question4"
import Question5 from "./question5"

function pageInitial() {
    return "signin"
}
function ClientTab() {

    const [page, setPage] = useState(pageInitial())
    const [selection1, changeSelection1] = useState("")
    const [selection2, changeSelection2] = useState("")
    const [selection3, changeSelection3] = useState("")
    const [selection4, changeSelection4] = useState("")
    const [selection5, changeSelection5] = useState("")

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
            <Question3 selection={selection3} changeSelection={changeSelection3} toActivate={selection2==""?false:true} />
            <Question4 selection={selection4} changeSelection={changeSelection4} toActivate={selection3==""?false:true} />
            <Question5 selection={selection5} changeSelection={changeSelection5} toActivate={selection3==""?false:true} />
        </h3>
        )
    }

} export default ClientTab;