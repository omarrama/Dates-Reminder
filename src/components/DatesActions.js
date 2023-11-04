import React from "react";
import { Row, Col } from 'react-bootstrap'

const DatesActions = ({DeleteData, ViewData}) => {
  return (
    <Row className="my-2 justify-content-center">
      <Col sm="8" className="d-flex justify-content-between">
        <button onClick={DeleteData} className="btn-style p-2">مسح الكل</button>
        <button onClick={ViewData} className="btn-style p-2">عرض المواعيد</button>
      </Col>
    </Row>
  );
};

export default DatesActions;
