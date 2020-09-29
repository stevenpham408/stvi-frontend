import React from 'react'
import styled from 'styled-components'
import Typist from 'react-typist'
import NavBar from './Components/NavBarComponent'
import '../../node_modules/react-typist/dist/Typist.css'

const TypistStyles = styled.div`
  color: #bb86fc;
  text-align: center;
  font-size: 45px;
  font-family: "Nunito Sans", sans-serif;
  letter-spacing: 3px;
  .TypingAnimationBlock {
      float: right;
      margin-top: 50px;
      margin-right: 50px;
      width: 200px;
    //   outline: dotted;
  }
`;

const MyTypist: React.FC = () => {
    return(
        <TypistStyles>
            <Typist className="TypingAnimationBlock">
               shorter.
               <Typist.Delay ms={500} />
               <br/>
               sleeker.
               <Typist.Delay ms={500} />
               <br/>
               smarter.
               <Typist.Delay ms={500} />
               <br/>
               stvi.
            </Typist>
        </TypistStyles>
    )
}
const LandingPage: React.FC = () => {

    return(
        <div>
            <NavBar/>
            <MyTypist/>
        </div>
    );
}

export default LandingPage;