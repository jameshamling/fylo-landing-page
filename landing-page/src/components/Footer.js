import EmailSignUp from "./EmailSignUp"

import logo from "../images/logo.svg"
import iconLocation from "../images/icon-location.svg"
import iconPhone from "../images/icon-phone.svg"
import iconEmail from "../images/icon-email.svg"

export default function Footer() {
    return (
        <footer className="footer">

            <EmailSignUp />

            <img src={logo} alt="#" className="footer__logo" />

            <div className="footer__text-content">
                <div className="footer__text-content__body">
                    <img src={iconLocation} alt="#" className="footer__icon" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                    dolore magna aliqua</p>
                </div>
                <div className="footer__text-content__contact">
                    <div className="contact__number">
                        <img src={iconPhone} alt="#" className="footer__icon" />
                        <p>+1-543-123-4567</p>
                    </div>
                    <div className="contact__email">
                        <img src={iconEmail} alt="#" className="footer__icon" />
                        <p>example@fylo.com</p>
                    </div>
                </div>
                
                <div className="footer__text-content__links">
                    <a href="#">About Us</a>
                    <a href="#">Jobs</a>
                    <a href="#">Press</a>
                    <a href="#">Blog</a>
                </div>
                
                <div className="footer__text-content__links" id="footer-links_2">
                    <a href="#">Contact Us</a>
                    <a href="#">Terms</a>
                    <a href="#">Privacy</a>
                </div>
                
                <div className="footer__text-content__social-icons"> 
                    <a href="#"><i className="fab fa-facebook-f footer__social-icon"></i></a>
                    <a href="#"><i className="fab fa-twitter footer__social-icon"></i></a>
                    <a href="#"><i className="fab fa-instagram footer__social-icon"></i></a>
                </div>
            </div>
            
            <p className="attribution">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
            Coded by <a href="https://jameshamling.github.io/portfolio/" target="_blank">James Hamling</a>.
            </p>
        </footer>
    )
}