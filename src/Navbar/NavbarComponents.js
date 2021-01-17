import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavbarSection = styled.nav `
    width: 100%;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        background: linear-gradient(-225deg, #ac32e4 0%, #7918f2 48%, #4801ff 100%);
        height: 3px;
        width: 100%;
    }
`

export const NavbarContainer = styled.div `
    width: 1200px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1200px) {
        width: 100%;
    }
`

export const NavbarLogo = styled(Link) `
    padding: 20px;
    text-decoration: none;
    font-size: 20px;
`

export const NavbarUnOrderedList = styled.ul `
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-conten: center;
    align-items: center;
    margin-left: auto;
    height: 100px;
`

export const NavbarListItem = styled.li `
`

export const NavbarLink = styled(Link) `
    font-size: 18px;
    text-decoration: none;
    padding: 12px 20px;
`