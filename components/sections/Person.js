

import Link from "next/link"
export default function Person() {
    return (
        <>
            <section id="person" className="bg--scroll hero-section pt-40">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        {/* HERO TEXT */}
                        <div className="col-md-6">
                            <div className="hero-5-txt wow fadeInRight">
                                {/* Title */}
                                <h2 className="s-58 w-700">Michael Pérez - Full Stack Developer and Master DevOps</h2>
                                {/* Text */}
                                <p className="p-lg">In software development, don't look for the 'silver bullet', look for the perfect combination of persistence, continuous learning and creativity to solve challenges with ingenious and lasting solutions.
                                </p>
                                {/* Button */}
                                <Link href="https://www.linkedin.com/in/michael-perez-pin/" target="_blank" className="btn r-04 btn--theme hover--theme">Linkedin</Link>
                            </div>
                        </div>	{/* END HERO TEXT */}
                        {/* HERO IMAGE */}
                        <div className="col-md-6">
                            <div className="hero-5-img wow fadeInLeft">
                                <img className="img-fluid" src="/images/photo/img-18.png" alt="hero-image" />
                            </div>
                        </div>
                    </div>    {/* End row */}
                </div>	   {/* End container */}
                {/* WAVE SHAPE BOTTOM */}
                <div className="wave-shape-bottom">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 170"><path fillOpacity={1} d="M0,160L120,160C240,160,480,160,720,138.7C960,117,1200,75,1320,53.3L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z" /></svg>
                </div>
            </section>
        </>
    )
}
