import React, { useState } from 'react'
import BasicModal from '../Modal/BasicModal';
import "./Navbar.css"
import logo from "../../assets/logo.png"
import { Menu, X } from 'react-feather';
const Navbar = () => {

    const [open, setOpen] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const onCheckboxClick = () => {
        setIsDisabled(!isDisabled)
    }
    const [isOpen, setIsOpen] = useState(false)
    const [bar, setBar] = useState(true)
    const [close, setClose] = useState(false)


    return (
        <div div className="Navbar" >
            <span className="nav-logo">
                <a href="/">
                    <img className='logo-img' src={logo} alt="" />

                </a>
            </span>
            <div className={`nav-items ${isOpen && "open"}`}>
                <a href="/" >
                    Home
                </a>
                <a href="/about-jeevmoksha">
                    About Us
                </a>
                <div style={{ marginTop: '16px', color: "white", textDecoration: "none" }}>
                    <a href="#/" style={{ textDecoration: "none", color: "white" }} role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Course
                    </a>

                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <a className="dropdown-item" href="/200-hour-yoga-teacher-training-in-rishikesh">200 Hour Yoga Teacher Training in Rishikesh</a>
                        <a className="dropdown-item" href="/500-hour-yoga-teacher-training-in-rishikesh">500 Hour Yoga Teacher Training in Rishikesh</a>
                    </div>
                </div>
                <a href="/yogatypes-jeevmokshya">
                    Yoga Types
                </a>
                <a href="/our-teachers">
                    Our Teachers
                </a>
                <a href="/faq">
                    Faq
                </a>
                <a href="/blog">
                    Blog
                </a>
                <a href="/contact-us">
                    Contact Us
                </a>
                <a href='#/' className='mobileApply' onClick={handleOpen}>Apply Now</a>
            </div>
            <button className='apply' onClick={handleOpen} >
                Apply Now
            </button>
            <div
                className={`nav-toggle ${isOpen && "open"}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="menubar"
                    onClick={() => {
                        setBar(!bar)
                        // setClose(true)
                    }}>
                    {bar && (
                        <Menu onClick={() => setClose(!close)} />
                    )}
                    {
                        close && (
                            <X onClick={() => {
                                setClose(!close)
                                setBar(!bar)
                            }}
                            />
                        )}
                </div>
            </div>

            {open && <BasicModal open={open} setOpen={setOpen} handleClose={handleClose} handleOpen={handleOpen} onCheckboxClick={onCheckboxClick} isDisabled={isDisabled} />}
        </div>
    )
}
export default Navbar;
