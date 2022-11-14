import PropTypes from "prop-types";
import ContactList from "./ContactList";

const Footer = ({menus}) => {
    return (
        <footer>
            <div className="container-fluid">
                <div className="mt-5 mb-5 line"></div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 contact">
                        <h5>Kontakt</h5>
                        <ContactList/>
                    </div>
                    <div className="col-md-3">
                        <ul className="list-unstyled">
                            <li><a href={menus.impressum.uri} className="useful-links">{menus.impressum.menuTitle}</a></li>
                            <li><a href={menus.privacyPolicy.uri} className="useful-links">{menus.privacyPolicy.menuTitle}</a></li>
                            <li><a href={menus.termsAndConditions.uri} className="useful-links">{menus.termsAndConditions.menuTitle}</a></li>
                            <li><a href={menus.faq.uri} className="useful-links">{menus.faq.menuTitle}</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <ul className="list-unstyled">
                            <li><a href='https://www.facebook.com/pegasuspoletrier' className="useful-links" target={'_blank'} rel="noreferrer">Facebook</a></li>
                            <li><a href='https://www.instagram.com/pegasuspoletrier' className="useful-links" target={'_blank'} rel="noreferrer">Instagram</a></li>
                            <li><a href='https://www.tiktok.com/@pegasuspoletrier' className="useful-links" target={'_blank'} rel="noreferrer">TikTok</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        Photographer <a href={'https://www.facebook.com/vizoliphotography'} target={'_blank'} rel="noreferrer" style={{textDecoration: 'none'}}>@VizoliPhotography</a>
                    </div>
                </div>
                <div className="mt-5 mb-2 copyright">
                    © Copyright Pegasus Pole
                </div>
            </div>
        </footer>
    )
}

Footer.propTypes = {
    menus: PropTypes.object.isRequired,
}

export default Footer;