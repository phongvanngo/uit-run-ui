import React, { useState } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'

import { Link } from 'react-router-dom'

const Home = () => {
  const [user, setUser] = useState(() => {
    let userData = JSON.parse(localStorage.getItem('user'))
    if (userData && userData.user) {
      return userData.user.fullName
    } else {
      return null
    }
  })
  return (
    <Jumbotron className="rounded bg-dark-custom text-white text-center">
      <h1>Chào mừng {user ? user : 'bạn'} đến với UIT RUN</h1>
      <p className="lead">
      Bạn đã sẵn sàng đến với bài kiểm tra trí tuệ chưa?
      </p>
      <div>
        <Link className="btn btn-custom custom-transition mr-2" to="/quiz">
          Thi ngay
        </Link>
        <a
          className="btn btn-custom custom-transition"
          href="https://www.facebook.com/uitrun/">
          Tìm hiểu thêm
        </a>
      </div>
    </Jumbotron>
  )
}

export default Home
