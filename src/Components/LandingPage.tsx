import React from 'react'
import styled from 'styled-components'
import Typist from 'react-typist'
import '../../node_modules/react-typist/dist/Typist.css'

const TypistStyles = styled.div`
  color: #bb86fc;
  font-size: 30px;
  font-family: "Nunito Sans", sans-serif;
  #TypingAnimationBlock {
    /* position styles here */
  }
`;

const MyTypist: React.FC = () => {
    return(
        <TypistStyles>
            <Typist>
                Animate this text.
            </Typist>
        </TypistStyles>
    )
}
const LandingPage: React.FC = () => {

    return(
        <div>
            <MyTypist/>
        </div>
    );
}

export default LandingPage;