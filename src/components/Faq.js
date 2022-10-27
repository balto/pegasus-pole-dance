const Faq = ({faqList}) => {
    return (
        <section>
            <div className="container">
                <div className="accordion accordion-flush mt-5" id="accordionFlushExample">
                    {
                        faqList.map((faq, index)=>
                            <div key={index} className="accordion-item">
                                <h2 className="accordion-header" id={"flush-heading" + index}>
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#flush-collapse" + index} aria-expanded="false" aria-controls={"flush-collapse" + index}>
                                        {(index + 1) + '. ' + faq.question}
                                    </button>
                                </h2>
                                <div id={"flush-collapse" + index} className="accordion-collapse collapse" aria-labelledby={"flush-heading" + index} data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">
                                        {
                                            faq.answer.map((line, index)=>
                                                line === "" ? <br/> : <p key={index}>{line}</p>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default Faq;