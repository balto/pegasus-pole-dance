import instructorPortraitImg from '../img/526-800x800.jpg';

const Instructor = () => {
    return (
        <div className="container-fluid instructor-background">
            <div className="container">
                <div className="row mt-5 g-5">
                    <div className="col-md-6">
                        <img src={instructorPortraitImg} className="img-fluid" alt=""/>
                    </div>
                    <div className="col-md-6 d-flex align-items-center">
                        <div>
                            <h2>
                                <span className="highlight">Veronika</span>
                                <br/>
                                <span>Varga-Farkas</span>
                            </h2>
                            <p>
                                Pole Dance bedeutet mir grenzenlose Freiheit, Lebensfreude, Glaube an mich selbst, dass ich alles kann, Respekt vor meinem Körper. Pole Dance ist Therapie, die perfekte Erfahrung des gegenwärtigen Moments (seien es Schmerz oder euphorische Freude). Kommunikation mit mir selbst und der Welt, in der es keiner Worte bedarf, die aber mehr sagt als alle Worte.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Instructor;