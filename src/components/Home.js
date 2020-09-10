import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'

import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <Jumbotron className="rounded bg-dark-custom text-white text-center">
      <h1 className="font-italic">UIT Run</h1>
      <p className="lead">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div>
        <Link className="btn btn-custom custom-transition mr-2" to="/quiz">
          Thi ngay
        </Link>
        <a
          className="btn btn-custom custom-transition"
          href="https://google.com"
        >
          Tìm hiểu thêm
        </a>
      </div>
    </Jumbotron>
  )
}

export default Home
