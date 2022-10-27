import PropTypes from "prop-types";
import { useLocation } from 'react-router-dom';

const NavBar = ({menus}) => {
    const location = useLocation(); // React Hook

    let getClassName = function (menuUri) {
        return location.pathname === menuUri ? "nav-link active" : "nav-link";
    }

    return (
        <nav className="navbar sticky-top navbar-expand-lg" style={{backgroundColor: 'white'}}>
            <div className="container-fluid">
                <a className="navbar-brand" href={menus.home.uri}>Pegasus Pole</a>
                <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className={getClassName(menus.home.uri)} aria-current="page" href={menus.home.uri}>{menus.home.menuTitle}</a>
                        </li>
                        <li className="nav-item">
                            <a className={getClassName(menus.about.uri)} href={menus.about.uri}>{menus.about.menuTitle}</a>
                        </li>
                        <li className="nav-item">
                            <a className={getClassName(menus.schedule.uri)} href={menus.schedule.uri}>{menus.schedule.menuTitle}</a>
                        </li>
                        <li className="nav-item">
                            <a className={getClassName(menus.innovativeClasses.uri)} href={menus.innovativeClasses.uri}>{menus.innovativeClasses.menuTitle}</a>
                        </li>
                        <li className="nav-item">
                            <a className={getClassName(menus.contact.uri)} href={menus.contact.uri}>{menus.contact.menuTitle}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

NavBar.propTypes = {
    menus: PropTypes.object.isRequired,
}

export default NavBar