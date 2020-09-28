import React from 'react'
import ReactTypingEffect from 'react-typing-effect'
import {styled} from 'styled-components'


const TypeWriterAnimation: React.FC = () => {
    return(
        <div>
            <ReactTypingEffect
                speed = "100"
                text = "shorter."
                typingDelay = "0"
                eraseDelay = "16000"
            />
            <br/>
            <ReactTypingEffect
                speed = "100"
                text = "sleeker."
                typingDelay = "4000"
                eraseDelay = "12000"
            />
            <br/>
            <ReactTypingEffect
                speed = "100"
                text = "smarter."
                typingDelay = "8000"
                eraseDelay = "8000"
            />
            <br/>
            <ReactTypingEffect
                speed = "100"
                text = "stvi."
                typingDelay = "12000"
                eraseDelay = "4600"
            />
        </div>

    );

} 

const LandingPage: React.FC = () => {

    return(
        <div>
            <TypeWriterAnimation/>
        </div>
    );
}

export default LandingPage;