import React from 'react'
import './faq.css'
import Accordian from './Accordian'

const Faq = () => {
    return (
        <div className='faq-container'>
            <div className="faq-header">
                <h3>Frequently Asked Questions</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut repudiandae hic delectus molestias! Nam reprehenderit vel accusamus asperiores suscipit consequatur! Nulla, cupiditate! Porro harum dolorum deleniti? Qui dignissimos atque voluptatibus?
                </p>
            </div>

            <Accordian />
        </div>
    )
}

export default Faq