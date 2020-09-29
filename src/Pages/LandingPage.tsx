import React from 'react'
import styled from 'styled-components'
import Typist from 'react-typist'
import NavBar from './Components/NavBarComponent'
import '../../node_modules/react-typist/dist/Typist.css'
import Chain_Img from '../Images/BrokenChain.svg'

const TypistStyles = styled.div`
  color: #bb86fc;
  text-align: center;
  font-size: 45px;
  font-family: "Nunito Sans", sans-serif;
  letter-spacing: 3px;
  .TypingAnimationBlock {
      float: right;
      margin-top: 80px;
      margin-right: 50px;
      width: 200px;
    //   outline: dotted;
  }
`;

const GetStartedStyles = styled.div`
  color: white;
  font-family: "Nunito Sans", sans-serif;
  margin-left: 62px;
  margin-top: 30px;

  #chain {
      width: 650px;
      height: auto;
  }
  #hook {
      font-size: 30px;
      letter-spacing: 3px;
  }

  #introduction {
      display: inline-block;
      width: 61%;
      word-wrap: break-word;
      padding-top: 20px;
      color: #BBBBBB;
      letter-spacing: 1.5px;
  }

`

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
    );
};

const GetStarted: React.FC = () => {
    return(
        <GetStartedStyles>
            <img id="chain"src={Chain_Img}></img>
            <div>
                <span id='hook'> <strong>Shorten your long, unsightly URLs with a cluck of a button. </strong> </span>
                <br/>
                <span id='introduction'> 
                    In the current age ruled by social media, short and readable links have become one of the many pillars 
                    that support a brand due to their implicit usage in advertisement. A website's URL, as simple as it may 
                    seem, is one of the few faces behind a brand that users constantly see and interact with. 
                    URL Shorteners are services that thrive in today's day and age. 
                </span>
            </div>
        </GetStartedStyles>
 
    );
};
const LandingPage: React.FC = () => {

    return(
        <div>
            <NavBar/>
            <MyTypist/>
            <GetStarted/>
             
        </div>
    );
}

export default LandingPage;