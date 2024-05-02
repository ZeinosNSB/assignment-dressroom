import { Button, Card, Col, Row, Tab, Tabs } from "react-bootstrap";

import data from '../../../data/Data.json';
import style from './style.module.css';

const CardItem = (item) => {
  return (
    <Card className={style.card}>
      <Card.Img variant="top" src={item.imgSrc_jpg}/>
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text className="text-start">{item.desc}</Card.Text>
      </Card.Body>
      <Button className='w-100' variant="info">Thử đồ</Button>
    </Card>
  );
}

const ItemList = () => {
  return (
    <Tabs
      defaultActiveKey="tabTopClothes"
      justify
    >
      {
        data.navPills.map((items, index) => {
          const correspondingTabPanes = data.tabPanes.filter(pane => pane.type === items.type);
          return (
            <Tab eventKey={items.tabName} title={items.showName}
                 key={index}>
              <Row className={style.row}>
                {correspondingTabPanes.map((pane, index) => (
                  <Col className={style.col} xs={3} key={index}>
                    {CardItem(pane)}
                  </Col>
                ))}
              </Row>
            </Tab>
          );
        })
      }
    </Tabs>
  );
};

export default ItemList;