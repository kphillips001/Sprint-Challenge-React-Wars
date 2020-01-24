import React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle, Row, Col
} from 'reactstrap';

function CharCard(props) {
    return (
      <Row>
        <Col>
          <Card>
            <CardBody>
              <CardTitle>{props.character.name}</CardTitle>
              <CardSubtitle>Birth Year: {props.character.birth_year}</CardSubtitle>
              <CardText>Gender: {props.character.gender}</CardText>
              <CardText>Eye Color: {props.character.eye_color}</CardText>
              <CardText>Skin Color: {props.character.skin_color}</CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
  )
}

export default CharCard;