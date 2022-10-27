import instructorImg1 from "../img/47-910x692.jpg";
import instructorImg2 from "../img/465-910x692.jpg";
import instructorImg3 from "../img/840-910x692.jpg";

const InstructorImages = () => {
    return (
        <div className="container-fluid">
            <div className="row g-2 mt-2">
                <div className="col-md-4">
                    <img src={instructorImg1} className="img-fluid" alt=""/>
                </div>
                <div className="col-md-4">
                    <img src={instructorImg2} className="img-fluid" alt=""/>
                </div>
                <div className="col-md-4">
                    <img src={instructorImg3} className="img-fluid" alt=""/>
                </div>
            </div>
        </div>
    )
}

export default InstructorImages;