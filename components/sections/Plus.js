

export default function Plus() {
    return (
        <>
            <section id="plus" className="py-100 shape--06 shape--gr-whitesmoke features-section division">
                <div className="container">
                    {/* SECTION TITLE */}
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-9">
                            <div className="section-title mb-80">
                                {/* Title */}
                                <h2 className="s-50 w-700">Plus</h2>
                                {/* Text */}
                                <p className="s-21 color--grey">Communication is essential in remote work.</p>
                            </div>
                        </div>
                    </div>
                    {/* FEATURES-2 WRAPPER */}
                    <div className="fbox-wrapper text-center">
                        <div className="row row-cols-1 row-cols-md-3">
                            {/* FEATURE BOX #1 */}
                            <div className="col">
                                <div className="fbox-2 fb-1 wow fadeInUp">
                                    {/* Image */}
                                    <div className="fbox-img gr--whitesmoke h-175">
                                        <img className="img-fluid light-theme-img" src="/images/plus/terraform.jpeg" alt="terraform-image" />
                                        <img className="img-fluid dark-theme-img" src="/images/plus/terraform.jpeg" alt="terraform-image" />
                                    </div>
                                    {/* Text */}
                                    <div className="fbox-txt">
                                        <h6 className="s-22 w-700">infrastructure as Code</h6>
                                        <p>With terraform it helps us organize, control and automate the creation of infrastructure such as AWS, GCP and Azure.</p>
                                    </div>
                                </div>
                            </div>	{/* END FEATURE BOX #1 */}
                            {/* FEATURE BOX #2 */}
                            <div className="col">
                                <div className="fbox-2 fb-2 wow fadeInUp">
                                    {/* Image */}
                                    <div className="fbox-img gr--whitesmoke h-175">
                                        <img className="img-fluid light-theme-img" src="/images/plus/scrum.jpg" alt="scrum-image" />
                                        <img className="img-fluid dark-theme-img" src="/images/plus/scrum.jpg" alt="scrum-image" />
                                    </div>
                                    {/* Text */}
                                    <div className="fbox-txt">
                                        <h6 className="s-22 w-700">Scrum</h6>
                                        <p>Execution of agile SCRUM methodology to create high-value deliverables for the client.</p>
                                    </div>
                                </div>
                            </div>	{/* END FEATURE BOX #2 */}
                            {/* FEATURE BOX #3 */}
                            <div className="col">
                                <div className="fbox-2 fb-3 wow fadeInUp">
                                    {/* Image */}
                                    <div className="fbox-img gr--whitesmoke h-175">
                                        <img className="img-fluid light-theme-img" src="/images/plus/microservice.png" alt="microservice-image" />
                                        <img className="img-fluid dark-theme-img" src="/images/plus/microservice.png" alt="microservice-image" />
                                    </div>
                                    {/* Text */}
                                    <div className="fbox-txt">
                                        <h6 className="s-22 w-700">Microservice</h6>
                                        <p>Flexible architecture for efficiency and simplified maintenance in development.</p>
                                    </div>
                                </div>
                            </div>	{/* END FEATURE BOX #3 */}
                        </div>  {/* End row */}
                    </div>	{/* END FEATURES-2 WRAPPER */}
                </div>     {/* End container */}
            </section>
        </>
    )
}
