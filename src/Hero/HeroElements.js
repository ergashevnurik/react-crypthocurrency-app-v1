import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const HeroSection = styled.section `
    width:100%;
`

export const HeroContainer = styled.div `
    width: 1200px;
    margin: auto;

    @media screen and (max-width: 1200px) {
        width: 100%;
    }
    padding: 10px;
`

export const HeroRow = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: auto;
`

export const HeroColumnRight = styled.div `
    width: 500px;
    order: ${({reverse}) => (reverse ? '2' : '1')};
    
    @media screen and (max-width: 1200px) {
        order: ${({reverse}) => (reverse ? '1' : '2')};
        width: 100%;
    }
`

export const HeroImage = styled.img `
    width: 100%;
    height: 100%;
`

export const HeroColumnLeft = styled.div `
    width: 500px;
    padding: 10px;
    order: ${({reverse}) => (reverse ? '1' : '2')};

    @media screen and (max-width: 1200px) {
        width: 100%;
    }
`

export const HeroH1 = styled.h1 `
    font-size: clamp(1.2rem, 100vw, 2.5rem);
    margin-bottom: 10px;
    line-height: 1;

    padding: 10px;
    box-shadow: 4px 4px 0px 0 #ac32e4!important;
    box-shadow: 0px 0px 2px 2px #7918f2;
    
`

export const HeroSpan = styled.p `
    text-transform: uppercase;
    letter-spacing: 6px;
    font-size: 14px;
    margin-bottom: 10px;
`

export const HeroP = styled.p `
    margin-bottom: 20px;
`

export const HeroButton = styled(Link) `
    text-decoration: none; 
    color: white;
    padding: 12px 20px;
    background: linear-gradient(-225deg, #ac32e4 0%, #7918f2 48%, #4801ff 100%);
    border: 2px solid #ac32e4;

    transition: all 0.2s ease-in;

    &:hover {
        background: #fff;
        color: #ac32e4;
    }
`