import React, { useState } from 'react'
import './accordian.css'
import data from './data.js'
import {FaPlus} from 'react-icons/fa'

const Accordian = () => {

    const [selected, setSelected] = useState(false)
    const [multiple, setMultiple] = useState([])

    function handleSelection(getCurrentId){
        let cpyMutiple = [...multiple];
        const findIndexOfCurrentId = cpyMutiple.indexOf(getCurrentId);

        console.log(findIndexOfCurrentId);
        if (findIndexOfCurrentId === -1) cpyMutiple.push(getCurrentId);
        else cpyMutiple.splice(findIndexOfCurrentId, 1);

        setMultiple(cpyMutiple);
        setSelected(true)
    }

    return (
        <div className='acq-wrapper'>

            {
                data.map((dataItem) =>
                    <div className={`acq-data ${selected && "select-data"}`}>
                        <div className={`acq-question ${!selected && "selected"}`}
                        >
                            <p>{ dataItem.question }</p>
                            <FaPlus
                                onClick={() => handleSelection(dataItem.id)}
                            />
                        </div>

                        {
                            selected && multiple.indexOf(dataItem.id) !== -1 && (
                                <div className='acq-answer'>
                                    {dataItem.answer}
                                </div>
                            )
                        }
                        
                    </div>

                    
                )
            }
            <form className='acq-form'>
                <div className='custom-faq'>
                    <input type="text" placeholder='Custom'/>
                    <button>Send</button>
                </div>
            </form>
        </div>
    )
}

export default Accordian