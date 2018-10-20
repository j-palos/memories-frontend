import React from 'react';
import {Card, CardBody, CardImg, CardText, CardTitle} from 'reactstrap';

//add images and text for sabrina and jesus
const profile = {

};

const images = {

};
export default function PersonCard(props) {
    return (
        <Card>
            <CardImg top  src={images[props.name]}
                     alt={"Card image"} width={140} height={140}/>
            <CardBody>
                <CardTitle>{props.name}</CardTitle>
                <CardText>{profile[props.name]}</CardText>
            </CardBody>
        </Card>
    );
}

