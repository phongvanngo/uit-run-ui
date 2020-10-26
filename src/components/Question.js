import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import ReactPlayer from 'react-player'

const Question = ({ question, checkAnswer, answers, questionNumber,playingVideo,setPlayingVideo }) => {
  const [userAnswer, setUserAnswer] = useState('')
  
  return (
    <>
      <Card className="w-100 mb-4 border-custom-lg">
        <Card.Header className="bg-dark-custom text-white">
          Câu hỏi {questionNumber + 1} trên 20
        </Card.Header>

        <Card.Body className="px-3 py-4">
          <Card.Title className="mb-4">
            <h3>{question.content}</h3>
          </Card.Title>
          {question && question.description && <div className="d-flex align-items-center mb-3 flex-column">
            <ReactPlayer
              style={{ pointerEvents: 'none' }}
              url={question.description}
              playing={playingVideo}
              key={questionNumber}
            />

            <Button
              variant="custom"
              onClick={() => setPlayingVideo(true)}
              className="mt-2"
            >
              Play video
            </Button>
          </div>}

          {question && question.image && <div className="d-flex align-items-center justify-content-center mb-3">
            <Image
              src={question.image}
              className="rounded mw-100"
              style={{maxHeight: '500px'}}
            ></Image>
          </div>}

          <div className="pt-3 ">
            {answers.map((answer,i) => (
              <div
                key={answer + i}
                className="mb-2 "
                onClick={() => setUserAnswer(answer)}
              >
                <Form.Check
                  className={
                    'px-3 py-2 border-custom-lg rounded custom-transition ' +
                    (answer === userAnswer ? 'answer' : '')
                  }
                  custom
                  type="radio"
                  label={answer}
                  id={answer}
                  onChange={() => setUserAnswer(answer)}
                  checked={answer === userAnswer}
                ></Form.Check>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <Button
              onClick={() => checkAnswer(userAnswer)}
              variant={questionNumber < 24 ? 'outline-custom' : 'custom'}
              className="custom-transition"
            >
              {questionNumber < 24 ? 'Câu kế tiếp' : 'Kết thúc'}
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  )
}

export default Question
