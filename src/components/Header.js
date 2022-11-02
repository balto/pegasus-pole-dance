import PropTypes from 'prop-types';

const Header = ({ headerClassName, title}) => {
    //const className = "container-fluid " + headerClassName;
    const className = "container-fluid";

    return (
        <header className="page_title_container">
            <div className={className}>
                <div className="container d-flex align-items-center justify-content-center text-center">
                    <h1 style={{ color: 'white' }}>{title}</h1>
                </div>
            </div>
        </header>
    )
}

Header.propTypes = {
    headerClassName: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export default Header;