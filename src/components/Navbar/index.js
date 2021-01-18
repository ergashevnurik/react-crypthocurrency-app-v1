import React from 'react'
import {NavbarData} from '../../Data/NavbarData'
import {
    NavbarSection,
    NavbarContainer,
    NavbarUnOrderedList,
    NavbarListItem,
    NavbarLogo,
    NavbarLink
} from './NavbarComponents'

const Navbar = () => {
    return (
        <NavbarSection>
            <NavbarContainer>
                <NavbarLogo to="/">MENZ</NavbarLogo>
                <NavbarUnOrderedList>
                    {NavbarData.map((navbar, index) => (
                        <NavbarListItem key={index}>
                            <NavbarLink to={navbar.link}>{navbar.title}</NavbarLink>
                        </NavbarListItem>
                    ))}
                </NavbarUnOrderedList>
            </NavbarContainer>
        </NavbarSection>
    )
}

export default Navbar
