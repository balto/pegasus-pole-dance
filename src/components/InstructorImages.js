import instructorImg1 from "../img/profile_2_veronika_varga_farkas_pegasus_pole.jpg";
import instructorImg2 from "../img/profile_3_veronika_varga_farkas_pegasus_pole.jpg";
import instructorImg3 from "../img/profile_4_veronika_varga_farkas_pegasus_pole.jpg";

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