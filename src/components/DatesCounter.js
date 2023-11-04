import React from 'react'
import { Row, Col } from 'react-bootstrap'

const DatesCounter = ({dates}) => {
    return (
      !dates.length ? null : (
        <Row className="justify-content-center mb-3">
          <Col sm="8" className='dates-counter'>لديك <span className='text-decoration-underline'>{dates.length}</span> مواعيد اليوم</Col>
        </Row>
      )
    )
}

export default DatesCounter