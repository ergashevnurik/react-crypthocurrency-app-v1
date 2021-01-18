import React from 'react';
import {
    HeroSection,
    HeroContainer,
    HeroRow,
    HeroColumnLeft,
    HeroSpan,
    HeroH1,
    HeroP,
    HeroColumnRight,
    HeroImage,
    HeroButton
} from './HeroElements'

const Hero = ({span, h1, p, img, alt, reverse, bg, buttonLabel, link}) => {
    return (
        <HeroSection>
            <HeroContainer>
                <HeroRow>
                    <HeroColumnLeft reverse={reverse}>
                        <HeroSpan>{span}</HeroSpan>
                        <HeroH1>{h1}</HeroH1>
                        <HeroP>{p}</HeroP>
                        <HeroButton to={link}>{buttonLabel}</HeroButton>
                    </HeroColumnLeft>
                    <HeroColumnRight reverse={reverse}>
                        <HeroImage src={img} alt={alt}></HeroImage>
                    </HeroColumnRight>
                </HeroRow>
            </HeroContainer>
        </HeroSection>
    )
}

export default Hero
