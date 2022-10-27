import mapImg from '../img/map_wide.JPG';
import ContactList from "./ContactList";

const ContactStudio = () => {
    return (
        <>
            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-md-4 col-sm-0"></div>
                    <div className="col-md-4 col-sm-12">
                        <p className="text-muted">
                            Hier findest du alle Informationen über das Pole Dance Studio.
                        </p>
                        <div className="contact">
                            <ContactList/>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-0"></div>
                </div>
            </div>
            <div className="container-fluid mt-5">
                <img src={mapImg} className="img-fluid" alt=""/>
            </div>
        </>
    )
}

export default ContactStudio;