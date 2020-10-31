import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const ModalInstruction = (props) => {
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Luật chơi</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Bước 1 : Chọn "bắt đầu" để thi đấu </p>
        <p>Bước 2 : Sẽ có 25 câu hỏi với thời gian là 15 phút để bạn hoàn thành bài thi trí tuệ. Mỗi câu bạn đã làm qua thì bạn sẽ không thể quay lại nữa, nên hãy hoàn thành các câu hỏi thật cẩn thận nhé </p>
        <p>Bước 3 : Sau khi đã hoàn thành bài thi, bạn chọn "Xếp hạng" để biết hạng của mình bao nhiêu rồi nhé. Nếu bạn cảm thấy lo lắng về thứ hạng của mình, hãy truy cập đường link <span><a style={{cursor : "pointer", color: '#fe9014'}} href="https://docs.google.com/forms/d/e/1FAIpQLSeHqLp8b0ZXqBlULIXQO3IqqXmAasF_bxRLnKEreb8KjoZTMQ/viewform"> https://docs.google.com/forms/d/e/1FAIpQLSeHqLp8b0ZXqBlULIXQO3IqqXmAasF_bxRLnKEreb8KjoZTMQ/viewform </a></span> để đăng kí và sở hữu thêm 1 chiếc vé dự thi vòng 1 để tăng thứ hạng của mình nhé </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-custom" onClick={props.onHide}>
          Đã hiểu
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalInstruction
