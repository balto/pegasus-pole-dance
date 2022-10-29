import PropTypes from 'prop-types';
import BookingTool from "./BookingTool";

const Schedule = ({title}) => {
    return (
        <section>
            <div className="container">
                <div className="text-center mt-5 pt-5">
                    <h1>
                        <span className="highlight">{title}</span>
                    </h1>
                    <p>
                        Alienum phaedrum torquatos nec eu, vis detraxit periculis exnihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est. Eos ei nisl graecis. vix aperiri conse
                    </p>

                    <BookingTool/>
                </div>
            </div>
        </section>
    )
}

Schedule.propTypes = {
    title : PropTypes.string.isRequired,
}

export default Schedule;