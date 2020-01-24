import React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle, Row, Col, Container
} from 'reactstrap';

function CharCard({ character }) {
  const {name, birth_year, gender, eye_color, skin_color } = character; 
  return (
        <Container>
          <Col xs="6" md="4" xl="3">
            <Card>
            <CardBody>
               <CardTitle>{name}</CardTitle>
               <CardSubtitle>Birth Year: {birth_year}</CardSubtitle>
               <CardText>Gender: {gender}</CardText>
               <CardText>Eye Color: {eye_color}</CardText>
               <CardText>Skin Color: {skin_color}</CardText>
            </CardBody>
            </Card>
          </Col>
        </Container>
  )
}

export default CharCard;