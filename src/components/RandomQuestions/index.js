import { useState, useEffect } from "react";
import Button from "../Button/styles";
import { QuestionTitle, RandomQuestionWrapper } from "./styles";
import data from "../../data/questions.json";
import Footer from "../Layout/Footer";

const RandomQuestions = () => {
  const questionsArray = data.questions;
  const questionsLength = questionsArray.length;  
  const [question, setQuestion] = useState(null)

  function randomQuestionNumber() {
    return Math.floor(Math.random() * (questionsLength - 0) + 0);
  }

  function showQuestion() {
    return questionsArray[randomQuestionNumber()]
  }

  function getRanodomQuestion() {
    setQuestion(showQuestion())
  }

  useEffect(() => {
    getRanodomQuestion();
  });

  return (
    <>
      <RandomQuestionWrapper>
        <QuestionTitle>{question}</QuestionTitle>
      </RandomQuestionWrapper>

      <Footer>
        <Button onClick={getRanodomQuestion}>Daj novo pitanje</Button>
      </Footer>
    </>
  )
}

export default RandomQuestions;