import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'

import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <Jumbotron className="rounded bg-dark-custom text-white text-center">
      <h1>Chào mừng bạn đến với UIT RUN</h1>
      <p className="lead">
      Bạn đã sẵn sàng đến với bài kiểm tra trí tuệ chưa?
      </p>
      <div>
        <Link className="btn btn-custom custom-transition mr-2" to="/quiz">
          Thi ngay
        </Link>
        <a
          className="btn btn-custom custom-transition"
          href="https://uitrun.com/"
        >
          Tìm hiểu thêm
        </a>
      </div>
    </Jumbotron>
  )
}

export default Home
