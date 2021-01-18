import React from 'react'
import { CardData } from '../../Data/CardData';
import {
    CardSection,
    CardContainer,
    CardRow,
    CardColumn,
    Card,
    CardHead,
    CardBody,
    CardImage,
    CardH1,
    CardP
} from './CardsElements';

const Cards = () => {
    return (
        <CardSection>
            <CardContainer>
                <CardRow>
                    {CardData.map((card, index) => (
                        <CardColumn key={index}>
                            <Card>
                                <CardHead>
                                    <CardImage src={card.img} alt={card.alt} />
                                </CardHead>
                                <CardBody>
                                    <CardH1>{card.h1}</CardH1>
                                    <CardP>{card.p}</CardP>
                                </CardBody>
                            </Card>
                        </CardColumn>
                    ))}
                </CardRow>
            </CardContainer>
        </CardSection>
    )
}

export default Cards
