import { handleResponse } from './auth.service'
import authHeader from './auth-header'

export const quizService = {
  getExam,
  postExam,
}

function getExam() {
  const requestOptions = {
    method: 'GET',
    headers: authHeader(),
  }

  return fetch(`${process.env.REACT_APP_API_URL}/question/exam`, requestOptions)
    .then(handleResponse)
    .then((questions) =>
      questions.map((question) => {
        return {
          ...question,
          answers: [
            question.answerA,
            question.answerB,
            question.answerC,
            question.answerD,
          ],
        }
      })
    )
}

function postExam(userAnswers, time) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...authHeader() },
    body: JSON.stringify({ arrayAns: userAnswers, time }),
  }

  return fetch(
    `${process.env.REACT_APP_API_URL}/question/exam`,
    requestOptions
  ).then(handleResponse)
}
