import headerTextImg from '../img/pegasus-pole-text.png';

const HomeHeader = () => {
    return (
        <header>
            <div className="container-fluid home-header-background">
                <div className="container d-flex align-items-center justify-content-center text-center home_page_title_container">
                    <div className="row">
                        <div className="col-12">
                            <img src={headerTextImg} className="img-fluid" alt=""/>
                        </div>
                        <div className="col-12">
                            <div className="header-caption">
                                Pole Dance & Aerial Fitness
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HomeHeader;