import studioImg from '../img/526-800x800.jpg';

const Studio = () => {
    return (
        <section>
            <div className="container-fluid">
                <div className="container">
                    <div className="row mt-2 mt-lg-5 g-5">
                        <div className="col-md-6">
                            <div>
                                <h2>
                                    <span className="highlight">Beautiful Studio</span>
                                </h2>
                                <p>
                                    In unserem wunderschönen Studio bieten wir Pole Dance Fitness, Exotic Pole, Flexibility/Mobility Training und Body Workout Kurse auf höchstem Niveau. Jeder Teilnehmer hat sein eigenes Luftakrobatikgerät. Auf 150 qm Fläche findest du einen Kursraum, einen großzügigen Umkleidebereich, ein Kinderzimmer mit Kaffeeküche und gemütliche Lounge. Ausreichend kostenlose Parkplätze direkt vor dem Gebäude stehen zur Verfügung.
                                </p>
                                <ul className="studio-list">
                                    <li>TipTop neu renoviertes Studio!</li>
                                    <li>Nur Qualitätsstangen im Studio, deine Sicherheit steht bei uns an erster Stelle!</li>
                                    <li>12 Competition X-Poles, 45 mm, mit Quick Lock (Spinning/Static in 1 Sek.)</li>
                                    <li>Das neueste Pole Away System</li>
                                    <li>Große Spiegelwand (2,4 m hoch und 10 m lang)</li>
                                    <li>Großer Umkleideraum</li>
                                    <li>3,25 m hohe Decke</li>
                                    <li>112 qm Trainingsraum</li>
                                    <li>Mindestabstand zwischen den Stangen beträgt 2,3 m</li>
                                    <li>Hochwertige Yoga-Matten, Yoga-Blöcke, elastisches Fitnessbänder und Gewichte</li>
                                    <li>Lupit Pole Fallmatten</li>
                                    <li>Kostenlose Parkmöglichkeiten</li>
                                    <li>Öffentliche Verkehrsmittel innerhalb von 100 Metern</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex align-items-center">
                            <img src={studioImg} className="img-fluid" alt="alt"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Studio;