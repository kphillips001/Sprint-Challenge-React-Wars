import React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle, Row, Col, Container
} from 'reactstrap';

function CharCard(props) {
    return (
        <Container>
          <Col xs="6" md="4" xl="3">
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
        </Container>
      
    )
}

export default CharCard;