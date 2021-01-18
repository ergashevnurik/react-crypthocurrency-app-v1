import styled from 'styled-components'

export const CardSection = styled.section `
    width: 100%;
    background: linear-gradient(-225deg, #ac32e4 0%, #7918f2 48%, #4801ff 100%);
    height: 100%;
`

export const CardContainer = styled.div `
    width: 1200px;
    margin: auto;

    @media screen and (max-width: 1200px) {
        width: 100%;
    }
`

export const CardRow = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`

export const CardColumn = styled.div `
    margin: 10px;
`

export const Card = styled.div `
    width: 250px;
    background: white;
    padding: 20px;
    box-shadow: 4px 4px 0 0 rgba(255,255,255,0.2);
    border-top-right-radius: 35px;
    border-bottom-left-radius: 35px;

    @media screen and (max-width: 1200px) {
        width: 100%;
        height: 100%;
    }
`

export const CardHead = styled.div `
    width: 100%;
    height: 125px;
    @media screen and (max-width: 1200px) {
        width: 100%;
        height: 100%;
    }
`

export const CardBody = styled.div `
    width: 100%;
    height: 200px;
    text-align: center;
    @media screen and (max-width: 1200px) {
        width: 100%;
        height: 100%;
    }
`

export const CardImage = styled.img `
    width: 100%;
    height: 100%;
`

export const CardH1 = styled.h1 `

`

export const CardP = styled.p `

`