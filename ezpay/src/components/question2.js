import "./questions.css"
import { useState } from 'react';

function Question2 ({selection, changeSelection, toActivate}) {

    const [isActive, setIsActive] = useState(false)
    const options = ["N/A", "Less than $500", "$500 - $1000", "More than $1000"]
    if(toActivate){
        return(
            <div>
                <h4> What is your monthly rent, inclusive of utilities?</h4>
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
}export default Question2;