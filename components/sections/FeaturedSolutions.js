

export default function FeaturedSolutions() {
    return (
        <>
            <section  id="featured-solutions" className="pt-100 ct-02 content-section division">
                <div className="container">
                    {/* SECTION TITLE */}
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-9">
                            <div className="section-title mb-80">
                                {/* Title */}
                                <h2 className="s-50 w-700">Featured Solutions</h2>
                                {/* Text */}
                                <p className="s-21 color--grey">Applied engineering for high performance processes.</p>
                            </div>
                        </div>
                    </div>
                    {/* SECTION CONTENT (ROW) */}
                    <div className="row d-flex align-items-center">
                        {/* IMAGE BLOCK */}
                        <div className="col-md-6">
                            <div className="img-block left-column wow fadeInRight">
                                <img className="img-fluid" src="/images/photo/img-03.png" alt="content-image" />
                            </div>
                        </div>
                        {/* TEXT BLOCK */}
                        <div className="col-md-6">
                            <div className="txt-block right-column wow fadeInLeft">
                                {/* CONTENT BOX #1 */}
                                <div className="cbox-4">
                                    {/* Icon & Title */}
                                    <div className="box-title">
                                        <span className="flaticon-paper-sizes color--theme" />
                                        <h5 className="s-22 w-700">Offline POS</h5>
                                    </div>
                                    {/* Text */}
                                    <div className="cbox-4-txt">
                                        <p>Implementation of logic to segment customer information and not saturate the application when searching without cache.
                                        </p>
                                    </div>
                                </div>	{/* END CONTENT BOX #1 */}
                                {/* CONTENT BOX #2 */}
                                <div className="cbox-4">
                                    {/* Icon & Title */}
                                    <div className="box-title">
                                        <span className="flaticon-layers-1 color--theme" />
                                        <h5 className="s-22 w-700">High Transaction Files</h5>
                                    </div>
                                    {/* Text */}
                                    <div className="cbox-4-txt">
                                        <p>Management of csv of millions of records where the split logic is managed with AWS resources to segment the reading of files and the reporting of information.
                                        </p>
                                    </div>
                                </div>	{/* END CONTENT BOX #2 */}
                                {/* CONTENT BOX #3 */}
                                <div className="cbox-4">
                                    {/* Icon & Title */}
                                    <div className="box-title">
                                        <span className="flaticon-pie-chart color--theme" />
                                        <h5 className="s-22 w-700">React Motion Animations</h5>
                                    </div>
                                    {/* Text */}
                                    <div className="cbox-4-txt">
                                        <p className="mb-0">Implementation of UX effects for the operation of Front End systems.
                                        </p>
                                    </div>
                                </div>	{/* END CONTENT BOX #3 */}
                            </div>
                        </div>	{/* END TEXT BLOCK */}
                    </div>	{/* END SECTION CONTENT (ROW) */}
                </div>	   {/* End container */}
            </section>
        </>
    )
}
