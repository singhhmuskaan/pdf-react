import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PdfForm from "./component/PdfForm";
import PdfMerge from "./component/PdfMerge";
import {Col, Container, Row} from "react-bootstrap";

function App() {
  return (
    <div className="App">
        <Container>
            <Row>
                <Col>
                    <PdfForm/>
                </Col>
                <Col>
                    <PdfMerge/>
                </Col>
            </Row>
        </Container>

    </div>
  );
}

export default App;
