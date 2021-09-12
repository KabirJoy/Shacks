import "./questions.css"
import { useState } from 'react';

function Question3 ({selection, changeSelection, toActivate}) {

    const [isActive, setIsActive] = useState(false)
    const options = ["N/A", "Less than $20", "$20 - $35", "More than $35"]
    if(toActivate){
        return(
            <div>
                <h4> What does your monthly postpaid phone plan cost?</h4>
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
}export default Question3;