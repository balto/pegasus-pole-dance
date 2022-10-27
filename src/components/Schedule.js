import PropTypes from 'prop-types';

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

                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>
                                </th>
                                <th>
                                    Montag
                                </th>
                                <th>
                                    Dienstag
                                </th>
                                <th>
                                    Mittwoch
                                </th>
                                <th>
                                    Donnerstag
                                </th>
                                <th>
                                    Freitag
                                </th>
                            </tr>

                        </thead>
                        <tbody>
                            <tr>
                                <td>10:00 - 11:15</td>
                                <td>Pole Dance Level 1</td>
                                <td>Pole Dance Level 1</td>
                                <td>Pole Dance Level 1</td>
                                <td>Pole Dance Level 1</td>
                                <td>Pole Dance Level 1</td>
                            </tr>
                            <tr>
                                <td>17:00 - 18:15</td>
                                <td>Pole Dance Level 2</td>
                                <td>Pole Dance Level 2</td>
                                <td>Pole Dance Level 2</td>
                                <td>Pole Dance Level 2</td>
                                <td>Pole Dance Level 2</td>
                            </tr>
                            <tr>
                                <td>18:30 - 19:45</td>
                                <td>Pole Dance Level 3</td>
                                <td>Pole Dance Level 3</td>
                                <td>Pole Dance Level 3</td>
                                <td>Pole Dance Level 3</td>
                                <td>Pole Dance Level 3</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

Schedule.propTypes = {
    title : PropTypes.string.isRequired,
}

export default Schedule;