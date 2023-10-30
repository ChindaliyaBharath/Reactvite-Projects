import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RoleDice from './RoleDice'
import { useState } from 'react'
import { Button, OutlineButton } from './Styled/Button'
import Rules from './Rules'

const Gameplay = () => {
  const [selecteNumber , setSelectedNumber] = useState();
  const [currentDice , setCurrentDice] = useState(1);
  const [ score , setScore] = useState(0);
  const [error , SetError] = useState("");
  const [ showRules , setShowRules] = useState(false);


const generateRandomNumber = (min , max) => {
  // console.log(Math.floor(Math.random() * (max - min) + min));
  return Math.floor(Math.random() * (max - min) + min)
}

const roleDice = () =>{
  if(!selecteNumber){
    
    SetError("You have not selected any number")
    return;
  }

  const randomNumber = generateRandomNumber(1,7);
  setCurrentDice((prev) => randomNumber);

  

  if ( selecteNumber == randomNumber){
    setScore((prev) => prev + randomNumber)
  }else {
    setScore((prev) => prev - 2);
  }

  setSelectedNumber(undefined);
}

const resetScore = () =>{
  setScore(0);
}
  return (
   <MainContainer>
    <div className='top_section'>
    <TotalScore score = {score} />
    <NumberSelector
    error = {error}
    SetError = {SetError}
    selecteNumber={selecteNumber}
    setSelectedNumber={setSelectedNumber}
    />
    </div>
    <RoleDice 
    currentDice={currentDice}
    roleDice={roleDice}
    />
    <div className="btns">
      <OutlineButton
      onClick={resetScore}
      >
        Reset
      </OutlineButton>
      <Button onClick={() => setShowRules((prev) => !prev)}>{
        showRules ? "Hide" : "Show"
        }Show Rules</Button>
    </div>
    {showRules && <Rules />}
   </MainContainer>
  )
}

export default Gameplay;


const MainContainer = styled.main`
  padding-top: 70px;
   .top_section{
    display: flex;
    justify-content: space-around;
    align-items: end;
   }
   .btns{
    margin-top: 40px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
   }
`