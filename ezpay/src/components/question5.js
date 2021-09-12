import "./questions.css"
import { useState } from 'react';

function Question5 ({selection, changeSelection, toActivate}) {

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
            </div>
        )
    }
    else return (<div />)
}export default Question5;