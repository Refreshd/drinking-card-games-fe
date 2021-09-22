import { useState, useEffect } from "react";
import data from "../../data/questions.json";
import Button from "../Button/styles";
import QuestionTitle from "./styles";

const testData = [
  "pitanje 1",
  "pitanje 2",
  "pitanje 3",
  "pitanje 4",
  "pitanje 5",
  "pitanje 6",
  "pitanje 7"
]

const RandomQuestions = () => {
  const questionsArray = data.questions;
  const questionsLength = questionsArray.length;
  const randomNumberFromList = Math.floor(Math.random() * (questionsLength - 0) + 0);
  
  const [randomNumber, setRandomNumber] = useState(randomNumberFromList);

  function showQuestion() {
    return questionsArray[randomNumber]
  }

  function getRanodomQuestion() {
    console.log('kako ovo radi?')
    showQuestion()
  }

  useEffect(() => {
    getRanodomQuestion();
  }, []);

  return (
    <>
      <QuestionTitle>{showQuestion()}</QuestionTitle>
      <Button>Daj novo pitanje</Button>
    </>
  )
}

export default RandomQuestions;