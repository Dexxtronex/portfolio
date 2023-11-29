
export default function Footer1() {
    return (
        <>
            <footer id="footer-10" className="pt-50 footer">
                <div className="container text-center">
                    <div className="row justify-content-center">
                        <div className="col-xl-10">
                            {/* FOOTER LOGO */}
                            <div className="footer-info">
                                <img className="footer-logo" src="images/logos/default.png" alt="footer-logo" />
                                <img className="footer-logo-dark" src="images/logos/default-dark.png" alt="footer-logo" />
                            </div>
                            {/* FOOTER LINKS */}
                            <div className="footer-links">
                                <ul className="foo-links clearfix">
                                    <li><p><a href="#person">About</a></p></li>
                                    <li><p><a href="#experience">Experiencase</a></p></li>
                                    <li><p><a href="#plus">Plus</a></p></li>
                                    <li><p><a href="#skills">Skills</a></p></li>
                                    <li><p><a href="#featured-solutions">Featured Solutions</a></p></li>
                                </ul>
                            </div>
                            {/* FOOTER SOCIALS */}
                            <ul className="bottom-footer-socials ico-25">
                                <li><a target="_blank" href="https://wa.me/593996911729"><span className="flaticon-whatsapp" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div> 
            </footer>

        </>
    )
}
