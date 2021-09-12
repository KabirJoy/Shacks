import "./questions.css"
import { useState } from 'react';

import Button from '@material-ui/core/Button'

function Question5 ({selection, changeSelection, toActivate, submitt}) {

    const [isActive, setIsActive] = useState(false)
    const options = ["Yes", "No"]
    if(toActivate){
        return(
            <div>
                <h4>In the last 12 months, have you ever defaulted on any monthly payment?</h4>
                <div className="card">
                    <div className="dropdown">
                        <div className="dropdown-btn" onClick={(e) => 
                            setIsActive(!isActive)}>
                            {selection}
                            <span className="fas fa-caret-down"></span>
                        </div>
                        {isActive && (
                            <div className="dropdown-content">
                            {options.map((option) => (
                                <div onClick={(e) => {
                                    changeSelection(option)
                                    setIsActive(false)
                                }
                                } className="dropdown-item">
                                    {option}
                                </div>
                            ))}
                            </div>
                        )}
                    </div>
                </div>
                <div style={{marginTop: "100px", display: 'flex', justifyContent:'center', alignItems:'center'}}>
                    <Button style={{display: 'flex', justifyContent:'center', alignItems:'center', width: "100%"}} 
                    variant="contained" color="primary" onClick={submitt}>
                        Complete Registration
                    </Button>
                </div>
            </div>
        )
    }
    else return (<div />)
}export default Question5;