import { Col, Container, Row } from "react-bootstrap";
import logo from '../asset/cybersoft.png'
import ItemList from "./component/ItemList";
import Model from "./component/Model";
import style from './style.module.css'

const RoomPage = () => {
  return (
    <Container fluid>
      <div className={style.header}>
        <img src={logo} alt="Logo"/>
        <h4 className={style.title}>CyberLearn - Học lập trình trực tuyến - Dự án thử đồ trực tuyến - Virtual Dressing
          Room</h4>
      </div>
      <hr className={style.line}/>
      <Row>
        <Col xs={8} className="px-4">
          <ItemList/>
        </Col>
        <Col xs={4} className="px-4">
          <Model/>
        </Col>
      </Row>
    </Container>
  );
};

export default RoomPage;