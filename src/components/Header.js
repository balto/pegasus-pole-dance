import PropTypes from 'prop-types';

const Header = ({title}) => {
    return (
        <header className="page_title_container">
            <div className="container-fluid">
                <div className="container d-flex align-items-center justify-content-center text-center">
                    <h1 style={{ color: 'white' }}>{title}</h1>
                </div>
            </div>
        </header>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header;