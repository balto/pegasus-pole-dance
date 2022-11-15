import BookingTool from "./BookingTool";

const Schedule = () => {
    return (
        <section>
            <div className="container">
                <div className="text-center mt-5 pt-5">
                    <h1>
                        <span className="highlight">Unser Kursplan</span>
                    </h1>
                    <p>
                        Hier kannst du unseren aktuellen Kursplan einsehen und deinen Platz reservieren. Zur Anmeldung klicke auf den gewünschten Kurs und wähle dann über den Button "Jetzt buchen" das passende Kursticket aus.
                    </p>

                    <BookingTool/>
                </div>
            </div>
        </section>
    )
}

export default Schedule;