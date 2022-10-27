import PropTypes from 'prop-types';

const Header = ({ headerClassName, title}) => {
    const className = "container-fluid " + headerClassName;

    return (
        <header>
            <div className={className}>
                <div className="container d-flex align-items-center justify-content-center text-center page_title_container">
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