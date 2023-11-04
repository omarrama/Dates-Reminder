import React from "react";
import { Row, Col } from 'react-bootstrap'

const DatesList = ({dates}) => {
  return (
    <Row className="justify-content-center">
      <Col sm="8">
        <div className="rectangle p-2">
          {dates.length > 0 ? (
            dates.map((date) => {
              return (
                <div key={date.id} className="d-flex mx-3 my-2 border-bottom">
                  <img src={date.img} alt={date.name} className="avatar" />
                  <div className="px-3">
                    <p className="d-inline fs-4">{date.name}</p>
                    <p className="fs-6">{date.date}</p>
                  </div>
                </div>
              );
            })
          ) : (
            <h2 className="text-center p-5">لا يوجد لديك مواعيد اليوم</h2>
          )}
        </div>
      </Col>
    </Row>
  );
};

export default DatesList;
