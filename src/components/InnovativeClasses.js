import poleDanceImg from '../img/pole_dance_pegasus_pole.jpg';
import bodyStyleImg from '../img/body_style_pegasus_pole.jpg';
import aerialYogaImg from '../img/coming_soon_pegasus_pole.jpg';

const InnovativeClasses = () => {
    return (
        <section>
            <div className="container-fluid innovative-classes">
                <div className="container">
                    <div className="text-center mt-5 pt-5">
                        <h1>
                            <span className="highlight">Verschiedene Kursarten</span>
                        </h1>
                        <p>
                            Alienum phaedrum torquatos nec eu, vis detraxit periculis exnihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est. Eos ei nisl graecis. vix aperiri conse
                        </p>
                    </div>
                    <div className="row g-5 mt-2">
                        <div className="col-md-4">
                            <div className="card">
                                <img src={poleDanceImg} className="card-img-top" alt=""/>
                                    <div className="card-body">
                                        <h6 className="card-text">POLE DANCE</h6>
                                    </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <img src={bodyStyleImg} className="card-img-top" alt=""/>
                                    <div className="card-body">
                                        <h6 className="card-text">BODYSTYLE</h6>
                                    </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <img src={aerialYogaImg} className="card-img-top" alt=""/>
                                    <div className="card-body">
                                        <h6 className="card-text">AERIAL YOGA</h6>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default InnovativeClasses;