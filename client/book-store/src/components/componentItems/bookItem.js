import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
  Row,
  Col
} from "reactstrap";


export default function itemBook(bookList, AddToCart) {
  return (
    <div className="List-book">
        <Row>
          {bookList.map((item, index) => {
            return (
              <Col lg="3" key={index}>
                <Card>
                  <CardImg
                    top
                    width="100%"
                    src={item.image}
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle>{item.name}</CardTitle>
                    <CardText>{item.des}</CardText>
                    <CardText>{item.rate} Sao</CardText>
                    <Button onClick={() => AddToCart(item)}>Buy It</Button>
                  </CardBody>
                </Card>
              </Col>
            );
          })}
        </Row>
    </div>
  );
}
