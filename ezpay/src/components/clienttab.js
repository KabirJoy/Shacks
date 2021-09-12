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

    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [pho, setpho] = useState("")
    const [pw, setpw] = useState("")

    const handlefname = (fnameval) => {
        setFname(prevval=> fnameval)
    }
    const handlelname = (lnameval) => {
        setLname(prevval=> lnameval)
    }
    const handleno = (phoval) => {
        setpho(prevval=> phoval)
    }
    const handlepw = (pval) => {
        setpw(prevval=> pval)
    }

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

    function submit() {
        var miles = 0;

        if(selection1=="$20,000 - $30,000"){
            miles = miles + 20;
        }
        if(selection1=="$30,000 - $40,000"){
            miles = miles + 30;
        }
        if(selection1=="More than $40,000"){
            miles = miles + 40;
        }

        if(selection2=="Less than $500"){
            miles = miles + 10;
        }
        if(selection2=="$500 - $1000"){
            miles = miles + 20;
        }
        if(selection2=="More than $1000"){
            miles = miles + 30;
        }

        if(selection3=="Less than $20"){
            miles = miles + 5;
        }
        if(selection3=="$20 - $35"){
            miles = miles + 10;
        }
        if(selection3=="More than $35"){
            miles = miles + 15;
        }

        if(selection4=="N/A"){
            miles = miles + 20;
        }
        if(selection4=="Less than $5,000"){
            miles = miles + 5;
        }
        if(selection4=="$5,000 - $10,000"){
            miles = miles + 1;
        }

        if(selection5=="No"){
            miles = miles + 10;
        }

        console.log("Miles: " + miles)

        var tier = "Blue";
        var limit = 200;
        var pir = 29.99;
        var cair = 34.99;

        if(miles >= 35){
            tier = "Silver";
            limit = 300;
            pir = 27.99
            cair = 31.99;
        }
        if(miles == 115){
            tier = "Gold";
            limit = 400;
            pir = 25.99;
            cair = 29.99;
        }

        console.log("Tier:" + tier);
        console.log("Limit: " + limit)
        console.log("IR 1: " + pir)
        console.log("IR 2: " + cair)

        signedIn()
    }

    if(page == "signin"){
        return <SignIn newAcc={newAccount}/>;
    }
    else if(page == "register"){
        return <SignUp existingAcc={existingAccount} goQone={goQone}
        handlefname={handlefname} handlelname={handlelname} handleno={handleno} handlepw={handlepw}/>
    }
    else if(page == "Qone"){
        console.log("Name: " + fname + " " + lname)
        console.log("Phone Number: " + pho)
        console.log("Password: " + pw)
        return (
        <h3>
            What is your annual income?
            <Question1 selection={selection1} changeSelection={changeSelection1}/>
            <Question2 selection={selection2} changeSelection={changeSelection2} toActivate={selection1==""?false:true} />
            <Question3 selection={selection3} changeSelection={changeSelection3} toActivate={selection2==""?false:true} />
            <Question4 selection={selection4} changeSelection={changeSelection4} toActivate={selection3==""?false:true} />
            <Question5 selection={selection5} changeSelection={changeSelection5} toActivate={selection4==""?false:true} submitt={submit}/>
        </h3>
        )
    }
    else if(page == "signedin") {
        return (
            <div> Signed in </div>
        )
    }

} export default ClientTab;