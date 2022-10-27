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
                                <th scope="col">Ticket</th>
                                <th scope="col">Times</th>
                                <th scope="col">Valid</th>
                                <th scope="col">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tickets.map((ticket, index)=>
                                    <tr key={index}>
                                        <th scope="row">{ticket.name}</th>
                                        <td>{ticket.timeCount}</td>
                                        <td>{ticket.valid}</td>
                                        <td>{ticket.price}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                }
            </div>
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