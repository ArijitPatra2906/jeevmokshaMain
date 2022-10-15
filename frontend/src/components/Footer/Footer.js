
import React from 'react'
import "./Footer.css"


const Footer = () => {
    return (
        <>


            <footer id="footer" className="footer-1">
                <div className="main-footer widgets-dark typo-light">
                    <div className="container">
                        <div className="row">

                            <div className="col-xs-12 col-sm-6 col-md-3">
                                <div className="widget subscribe no-box">
                                    <h5 className="widget-title">JEEVMOKSHA YOGA</h5>
                                    <p> JeevMoksha! The name is associated with a tradition which is timeless in that it’s the very essence of life. We all are continually seeking well being and freedom from the sickness, disorders and limitation of body mind in life. </p>
                                </div>
                            </div>

                            <div className="col-xs-12 col-sm-6 col-md-3">
                                <div className="widget no-box">
                                    <h5 className="widget-title">Quick Links</h5>
                                    <ul className="thumbnail-widget">
                                        <li>
                                            <div className="thumb-content"><a href="/" style={{ textDecoration: "none", color: "white", }}>HOME</a></div>
                                        </li>
                                        <li>
                                            <div className="thumb-content"><a href="/about-jeevmoksha" style={{ textDecoration: "none", color: "white" }}>ABOUT US</a></div>
                                        </li>
                                        <li>
                                            <div className="thumb-content"><a href="/yogatypes-jeevmokshya" style={{ textDecoration: "none", color: "white" }}>TYPES OF YOGA</a></div>
                                        </li>
                                        <li>
                                            <div className="thumb-content"><a href="/our-teachers " style={{ textDecoration: "none", color: "white" }}>OUR TEACHERS</a></div>
                                        </li>
                                        <li>
                                            <div className="thumb-content"><a href="/200-hour-yoga-teacher-training-in-rishikesh" style={{ textDecoration: "none", color: "white" }}>COURSES</a></div>
                                        </li>
                                        <li>
                                            <div className="thumb-content"><a href="/faq" style={{ textDecoration: "none", color: "white" }}>FAQ</a></div>
                                        </li>
                                        <li>
                                            <div className="thumb-content"><a href="/blog" style={{ textDecoration: "none", color: "white" }}>BLOGS</a></div>
                                        </li>

                                    </ul>
                                </div>
                            </div>

                            <div className="col-xs-12 col-sm-6 col-md-3">
                                <div className="widget no-box">
                                    <h5 className="widget-title">Address</h5>
                                    <p>Jeevmoksha yoga gurukul is a premier institute of yoga in Rishikesh. Located in Himalayan foothills of
                                        Shivalik range, Jeevmoksha is a serene and calm study point where students can indulge into a spiritual
                                        affair with themselves.</p>

                                </div>
                            </div>

                            <div className="col-xs-12 col-sm-6 col-md-3">

                                <div className="widget no-box">
                                    <h5 className="widget-title">Contact Us</h5>


                                    <p><a href="mailto:jeevmoksha@gmail.com" title="glorythemes" style={{ color: "white" }}>jeevmoksha@gmail.com</a></p>
                                    <ul className="social-footer2">

                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/*<div className="footer-copyright">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <p>Copyright Company Name © 2022. All rights reserved.</p>
                        </div>
                    </div>
                </div>
    </div>*/}
            </footer>

        </>
    )
}

export default Footer