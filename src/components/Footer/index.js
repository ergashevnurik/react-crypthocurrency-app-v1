import React from 'react'
import {
    FooterContainer, 
    FooterWrap, 
    FooterLinksContainer, 
    FooterLinksWrapper, 
    FooterLinkItems, 
    FooterLinkTitle, 
    FooterLink,
    SocialIcons,
    SocialIconLink,
    SocialMedia,
    SocialMediaWrap,
    WebsiteRights,
    SocialLogo
} from './FooterElements'
import {FaFacebook, FaInstagram, FaYoutube, FaTelegram} from 'react-icons/fa'
const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About US</FooterLinkTitle>
                            
                                <FooterLink to="/signin">
                                    How we work
                                </FooterLink>
                                <FooterLink to="/signin">
                                    Testimonials
                                </FooterLink>
                                <FooterLink to="/signin">
                                    Careers
                                </FooterLink>
                                <FooterLink to="/signin">
                                    Terms of Service
                                </FooterLink>
                            
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>About US</FooterLinkTitle>
                            
                                <FooterLink to="/signin">
                                    How we work
                                </FooterLink>
                                <FooterLink to="/signin">
                                    Testimonials
                                </FooterLink>
                                <FooterLink to="/signin">
                                    Careers
                                </FooterLink>
                                <FooterLink to="/signin">
                                    Terms of Service
                                </FooterLink>
                            
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About US</FooterLinkTitle>
                            
                                <FooterLink to="/signin">
                                    How we work
                                </FooterLink>
                                <FooterLink to="/signin">
                                    Testimonials
                                </FooterLink>
                                <FooterLink to="/signin">
                                    Careers
                                </FooterLink>
                                <FooterLink to="/signin">
                                    Terms of Service
                                </FooterLink>
                            
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                            
                                <FooterLink to="/signin">
                                    Instagram
                                </FooterLink>
                                <FooterLink to="/signin">
                                    Telegram
                                </FooterLink>
                                <FooterLink to="/signin">
                                    Facebook
                                </FooterLink>
                                <FooterLink to="/signin">
                                    Pinterest
                                </FooterLink>
                            
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/">
                            MENZ
                        </SocialLogo>
                        <WebsiteRights>MENZ &copy; {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                <FaFacebook></FaFacebook>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                <FaInstagram></FaInstagram>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Telegram">
                                <FaTelegram></FaTelegram>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="You Tube">
                                <FaYoutube></FaYoutube>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer