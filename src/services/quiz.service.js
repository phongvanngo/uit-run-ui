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

  return fetch('https://uitrun-test.herokuapp.com/api/v1/question/exam', requestOptions)
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
    `https://uitrun-test.herokuapp.com/api/v1/question/exam`,
    requestOptions
  ).then(handleResponse)
}
