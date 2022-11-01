const ClassTemplate = ({title, subTitle = null, descriptions, tickets = null, image, index}) => {
    let isEven = function (n) {
        return index % 2 === 0;
    }

    let fetchDescription = function (title, subTitle = null, descriptions, tickets = null) {
        return <div className="col-md-6">
            <div>
                <h2>
                    <span className="highlight">{title}</span>
                </h2>
                {
                    subTitle && <span className="class-subtitle" key={index}>
                        {subTitle}
                    </span>
                }
                {
                    descriptions.map((description, index)=>
                        <p key={index}>{description}</p>
                    )
                }
            </div>
            <div>
                {
                    tickets && <table className="table">
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">Gültig</th>
                                <th scope="col">Preis</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tickets.map((ticket, index)=>
                                    <tr key={index}>
                                        <th scope="row">{ticket.name}</th>
                                        <td>{ticket.valid}</td>
                                        <td>{ticket.price}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                }
            </div>
            <a type="button" href="/kursplan" className="btn btn-pegasus">Zur Anmeldung</a>
        </div>
    }

    let fetchImage = function (image) {
        return <div className="col-md-6">
            <img src={image} className="img-fluid" alt=""/>
        </div>
    }

    return (
        <div className="row mt-2 mt-lg-5 g-5">
            {
                isEven(index) && <>
                    {fetchDescription(title, subTitle, descriptions, tickets)}
                    {fetchImage(image)}
                </>
            }
            {
                !isEven(index) && <>
                    {fetchImage(image)}
                    {fetchDescription(title, subTitle, descriptions, tickets)}
                </>
            }
        </div>
    )
}

export default ClassTemplate;