import "./questions.css"
import { useState } from 'react';

function Question4 ({selection, changeSelection, toActivate}) {

    const [isActive, setIsActive] = useState(false)
    const options = ["N/A", "Less than $5,000", "$5,000 - $10,000", "More than $10,000"]
    if(toActivate){
        return(
            <div>
                <h4> How much net debt are you currently in?</h4>
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
}export default Question4;