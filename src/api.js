import { shuffleArr } from './utils'

const BASE_URL = 'https://opentdb.com/api.php?amount=25&type=multiple'

export async function getQuestions() {
  const res = await (await fetch(BASE_URL)).json()
  const questions = res.results.map((question) => ({
    ...question,
    answers: shuffleArr([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }))

  return questions
}

export function fakeGetUsers() {
  let start = 20520000
  const MOCK_USERS = Array(25)
    .fill(null)
    .map((el) => ({
      mssv: (start + Math.floor(Math.random() * 10000)).toString(),
      score: Math.floor(Math.random() * 26),
      time: Math.floor(Math.random() * (60 * 26)),
    }))
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(MOCK_USERS)
    }, 500)
  })
}
