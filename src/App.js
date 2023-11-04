import { useState } from "react";
import { Container } from "react-bootstrap";
import dates from "./dates";
import DatesCounter from "./components/DatesCounter";
import DatesList from "./components/DatesList";
import DatesActions from "./components/DatesActions";

function App() {

  const [data, setData] = useState(dates)

  const DeleteData = () => {
    setData([])
  }

  const ViewData = () => {
    setData(dates)
  }

  return (
    <div className="body-style">
      <Container className="py-3">
        <DatesCounter dates={data} />
        <DatesList dates={data} />
        <DatesActions DeleteData={DeleteData} ViewData={ViewData} />
      </Container>
    </div>
  );
}

export default App;
