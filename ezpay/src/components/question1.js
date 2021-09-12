import "./questions.css"
import { useState } from 'react';

function Question1 ({selection, changeSelection}) {

    const [isActive, setIsActive] = useState(false)
    const options = ["Less than $20,000", "$20,000 - $30,000", "$30,000 - $40,000", "More than $40,000"]
    return(
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
    )
}export default Question1;