import { Box, Card, CardActionArea, CardContent, Container, Typography, Grid, Modal } from '@mui/material'
import React, { useState } from 'react'
import "./Courses.css"
import img1 from "../../assets/image 39.png"
import img2 from "../../assets/image 40.png"
import img3 from "../../assets/image 41.png"
import img4 from "../../assets/image 42.png"
import Carousel from 'react-elastic-carousel';
import Carousell from "../carousel/carousel"
import slider from "../../assets/image 34.png"
import { Check, X } from 'react-feather'
import image1 from "../../assets/Rectangle 388.png"
import image2 from "../../assets/Rectangle 389.png"
import image3 from "../../assets/Rectangle 390.png"
import image4 from "../../assets/Rectangle 391.png"
import BasicModal from '../Modal/BasicModal'
import { Helmet } from 'react-helmet'



const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = (event) => {
        setIsReadMore(!isReadMore);

        event.course_subtext.style.width = "700px"
    };
    return (
        <p className="text">
            {isReadMore ? text.slice(0, 210) : text}
            <button onClick={toggleReadMore} className="read-or-hide-courses">
                {isReadMore ? "Read More" : " Show Less"}
            </button>
        </p>
    );
};



function Courses() {

    const [open, setOpen] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
    const [Read, setRead] = useState(false);
    const readMore = () => setRead(true)
    const handleReadMoreClose = () => setRead(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const onCheckboxClick = () => {
        setIsDisabled(!isDisabled)
    }

    return (

        <Box sx={{ flexGrow: 1 }}>
            <Helmet>
                <title>200 hours yoga teacher training rishikesh | 300 hours yoga teacher training rishikesh | Best yoga schools in rishikesh</title>
                <meta
                    name="title"
                    content="200 hours yoga teacher training rishikesh , 300 hours yoga teacher training rishikesh , Best yoga schools in rishikesh"
                />
                <meta
                    name="description"
                    content="It’s time to learn a 200 hours or 300 hours yoga teacher training rishikesh with JeevMoksha. We are known as Best yoga schools in rishikesh. To learn yoga and their details, visit now."
                />
            </Helmet>
            <Grid container spacing={3}>
                <Grid className='course_container' item xs={12}>
                    <Grid className="course_card">
                        <Box className='course_text'>
                            <Typography variant='h2' fontFamily="Crimson Text" className='course_text_1'>
                                <span>200 Hour Yoga Teacher <br /> Training </span> in Rishikesh
                            </Typography>

                        </Box>
                        <Box className="course_subtext" >
                            <Typography className='course_text_2' fontFamily="open sans" fontSize="16px" fontWeight="800">
                                <ReadMore>
                                    JeevMoksha Yoga 200 hour yoga teacher training in Rishikesh is accredited and certified by Yoga Alliance
                                    USA. On completing the course you will be eligible to teach yoga as a Registered Yoga Teacher (RYT). The
                                    yoga alliance certification makes you eligible to teach yoga anywhere in the world. The certificate is an
                                    assurance that you have qualified successfully the minimum standards of yoga teacher training.
                                    Our 200 hours yoga teacher training program is based upon the traditional methods of practice of Hatha
                                    Yoga. Hatha represents two natural forces of Solar &amp; Lunar in human bodies and yoga aims at balancing
                                    these forces.
                                </ReadMore>
                            </Typography>

                        </Box>
                    </Grid>
                    <button className='join' onClick={handleOpen}>
                        Join Our Community
                    </button>
                </Grid>

                <Grid className='home_container2' item xs={12}>
                    <Box className="home_section2">
                        <Box className='home_text2'>
                            <Typography variant='h2' fontFamily="Crimson Text" className='home_text_12'>
                                <span>200 Hour Yoga Teacher <br /> Training </span> in Rishikesh
                            </Typography>
                        </Box>
                        <Box className="home2">
                            <Typography className='home_text_22' fontFamily="open sans" fontSize="16px" fontWeight="800">
                                JeevMoksha Yoga 200 hour yoga teacher training in Rishikesh is accredited and certified by Yoga Alliance
                                USA.
                                <button style={{ background: "none", border: "none", outline: "none", color: "#906a47", fontWeight: 600 }} onClick={readMore}>Read more</button>
                            </Typography>
                            {Read &&
                                <Modal
                                    open={readMore}
                                    onClose={handleReadMoreClose}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                >
                                    <Box className='modal_read' p={5}>
                                        <X onClick={handleReadMoreClose} className="modal_icon" />
                                        <Typography fontSize={14} color="white">On completing the course you will be eligible to teach yoga as a Registered Yoga Teacher (RYT). The
                                            yoga alliance certification makes you eligible to teach yoga anywhere in the world. The certificate is an
                                            assurance that you have qualified successfully the minimum standards of yoga teacher training.
                                            Our 200 hours yoga teacher training program is based upon the traditional methods of practice of Hatha
                                            Yoga. Hatha represents two natural forces of Solar &amp; Lunar in human bodies and yoga aims at balancing
                                            these forces.The practice of hatha yoga is based upon intelligently bringing the awareness into the
                                            body. It involves understanding the patterns of movements and correcting the imbalances in muscular
                                            actions of flexion and extensions. Holding the asanas gives time to the student to be able to feel deeper
                                            in the bodies and with their awareness and intelligence guide their efforts in creating the fine balance.
                                            Our breath becomes the bridge in this process. Breath helps in guiding the awareness into the target
                                            body part and then with the Prana we can let the healing take place and transform collectively.
                                            This course is accredited to yoga alliance and students can register for 200 hours continuing education
                                            criteria for upgrading to 500 hour level.
                                        </Typography>
                                    </Box>
                                </Modal>}
                        </Box>
                    </Box>
                    <button className='start' onClick={handleOpen}>
                        Join Our Community
                    </button>
                </Grid>
                <Grid className='course_screen2' item xs={12}>
                    <Box className='course_screen2_section'>
                        <Box className='screen2_image'>
                        </Box>
                        <Box className='screen2_text'>
                            <Typography fontFamily="Crimson Text" fontSize="26px" mt={3}>
                                Life-Changing 25 Days
                            </Typography>
                            <Box className='inner'>
                                <Typography fontSize="11px" fontFamily="Sora" fontWeight="600" mt={3}>
                                    Jeevmoksha yoga 200 hours yoga teacher training in Rishikesh is a <br />25 days intensive course and is recognized by Yoga Alliance (USA). <br /> <br />
                                    Students can implement the knowledge of yoga which they acquire <br /> at our yoga teacher training course, towards benefiting themselves <br /> and others. <br /> <br />
                                    After the course, the participants receive their certificates of <br /> completion of 200 hour yoga teacher training. <br /> <br />
                                    It enables them to enroll themselves as Registered Yoga Teachers <br /> (RYT) with Yoga Alliance, and conduct yoga classes at a place of <br /> their choice anywhere in the world. <br /> <br />
                                </Typography>
                            </Box>
                            <button className='scrn2_btn' onClick={handleOpen}>
                                Join Us
                            </button>
                            {open && <BasicModal open={open} setOpen={setOpen} handleClose={handleClose} handleOpen={handleOpen} onCheckboxClick={onCheckboxClick} isDisabled={isDisabled} />}
                        </Box>
                    </Box>

                </Grid>
                <Grid xs={12} style={{ background: "#C9CFC7", paddingTop: "20px" }} >
                    <Box className='course'>


                        <Box className='inner'>
                            <div className='eligibility_course'>


                                <Typography fontFamily="Crimson Text" fontSize="26px" mt={3} style={{ textAlign: "center" }}>
                                    ELIGIBILITY FOR THIS COURSE
                                </Typography>


                                <Typography fontSize="11px" fontFamily="Sora" fontWeight="600" mt={3}>
                                    Everybody and anybody who is looking to develop a yogic knowledge base from the elementary level is a
                                    candidate for this 200 hours yoga teacher training course. If you are beginner then this course will be
                                    the best gift you can give to yourself on the journey of health and wellness. If you are already a
                                    practitioner then you will develop additional skills for your self practice and also to teach yoga at a
                                    professional level.
                                    Jeevmoksha yoga school in rishikesh is the best ashram to introduce to a yogic lifestyle and begin on the
                                    journey towards self care and well being. You will get the best of the teachings to be able to establish
                                    yourself into a yogic view of life. The course is designed keeping in mind the physical, mental and
                                    spiritual aspects of yoga. It would prove to be a milestone to start living in wholeness and holistically
                                    with higher intentions and actions dedicated to spiritual fulfillment.
                                </Typography>
                            </div>
                        </Box>
                        <Box className='inner' >
                            <div className='benefit_course'>
                                <Typography fontFamily="Crimson Text" fontSize="26px" mt={3} style={{ textAlign: "center" }}>
                                    TAKE-AWAY FROM THIS COURSE
                                </Typography>
                                <Typography fontSize="11px" fontFamily="Sora" fontWeight="600" mt={3}>


                                    1. Traditional yoga at the source. Learn in the most authentic ashram environment<br />
                                    <br />
                                    2. Learn with the most renowned and experienced yoga teachers and yogis <br />
                                    <br />
                                    3.Experience the culture. Living in a gurukul environment is always the best when it {" "} comes to
                                    learn and imbibing knowledge.<br />
                                    <br />
                                    4. Obtain the international certification.<br />
                                    <br />
                                    5. You will get to know the scientific approach behind yogic system in the most {" "} illustrated manner.<br />
                                    <br />
                                    6. Complete details as per the curriculum of both theoretical and practicle parts of yoga.<br />
                                    <br />
                                    7. Create bonds that last forever with your teachers and fellow students.
                                    <br />
                                </Typography>
                            </div>

                        </Box>
                    </Box>
                </Grid>

                <Grid className='course_scrn2' item xs={12}>
                    <Carousel dots="false" >
                        <Grid item xs={12}>
                            <div className='carousel' style={{ display: "flex", flexDirection: "column" }}>
                                <img src={slider} alt='' />
                                <h4 className="slider_text">Yoga and Meditation</h4>
                                <p className="slider_subtext">Acharya Vinay</p>
                            </div>

                            <div className='carousel' style={{ display: "flex", flexDirection: "column" }}>
                                <img src={slider} alt='' />
                                <h4 className="slider_text">Yoga</h4>
                                <p className="slider_subtext">Acharya Vinay</p>
                            </div>

                            <div className='carousel' style={{ display: "flex", flexDirection: "column" }}>
                                <img src={slider} alt='' />
                                <h4 className="slider_text">Yoga</h4>
                                <p className="slider_subtext">Acharya Vinay</p>
                            </div>
                            <div className='carousel' style={{ display: "flex", flexDirection: "column" }}>
                                <img src={slider} alt='' />
                                <h4 className="slider_text">Yoga and Meditation</h4>
                                <p className="slider_subtext">Acharya Vinay</p>
                            </div>
                        </Grid>
                        <div>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <img src={slider} alt='' />
                                <h4 className="slider_text">Yoga and Meditation</h4>
                                <p className="slider_subtext">Acharya Vinay</p>
                            </div>

                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <img src={slider} alt='' />
                                <h4 className="slider_text">Yoga</h4>
                                <p className="slider_subtext">Acharya Vinay</p>
                            </div>

                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <img src={slider} alt='' />
                                <h4 className="slider_text">Yoga</h4>
                                <p className="slider_subtext">Acharya Vinay</p>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <img src={slider} alt='' />
                                <h4 className="slider_text">Yoga and Meditation</h4>
                                <p className="slider_subtext">Acharya Vinay</p>
                            </div>
                        </div>
                    </Carousel>
                    <Carousel />
                </Grid>
                <Grid className='course_scrn2_2' item xs={12}>
                    <Carousell />
                </Grid>

                <Grid className='course_scrn3' item xs={12}>
                    <Typography className="cource_scr3_text" fontFamily="Crimson text" fontSize="30px">
                        Count the ways you can personalize your practice                </Typography>
                    <Box className="images">
                        <Box className="carrt">
                            <img className='image_monk' src={img3} alt="" />

                            <div style={{ marginTop: "20px" }}>
                                7+<br />
                                <span>Years of Experience</span>
                            </div>
                        </Box>
                        <Box className="carrt">
                            <img className="image_monk" src={img4} alt="" />
                            <div style={{ marginTop: "20px" }}>
                                6<br />
                                <span>Curated Collections</span>
                            </div>
                        </Box>
                        <Box className="carrt">
                            <img className="image_monk" src={img2} alt="" />
                            <div style={{ marginTop: "18px" }}>
                                12<br />
                                <span>Program & Training's</span>
                            </div>

                        </Box>
                        <Box className="carrt">
                            <img className='image_monk' src={img1} alt="" />
                            <div style={{ marginTop: "18px" }}>
                                750+<br />
                                <span>Happy Clients</span>
                            </div>
                        </Box>
                    </Box>
                </Grid>

                <Grid className='course_screen3' item xs={12}>
                    <Container maxWidth="xl" className='course_screen_3' >
                        <Typography fontSize="30px" fontWeight="700" fontFamily="Fahkwang" pt={6}>Choose Membership</Typography>
                        <Box className="cards">
                            <Card sx={{ width: 300, height: 500 }}>
                                <CardActionArea>
                                    <CardContent>
                                        <div className='curve'>
                                            <div style={{ position: "relative" }}>
                                                <h3 style={{ color: "white" }}>
                                                    Shared Room <br /> 2000
                                                </h3>
                                            </div>
                                        </div>
                                        <h5 style={{ marginTop: "50px" }}>Discover your favorite class!</h5>
                                        <div className='payment_box payment_box1'>
                                            <Check />
                                            <p>Pay as you go</p>
                                        </div>
                                        <div className='payment_box payment_box2'>
                                            <Check />
                                            <p>Perfect for non-residence</p>
                                        </div>
                                        <div className='payment_box payment_box3'>
                                            <Check />
                                            <p>Acces bto all classes</p>
                                        </div>
                                        <button className='membership_btn'>Book Now</button>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            <Card sx={{ width: 300, height: 500 }}>
                                <CardActionArea>
                                    <CardContent>
                                        <div className='curve'>
                                            <div style={{ position: "relative" }}>
                                                <p style={{ marginTop: "-2px", color: "white" }}>Recomemded</p>
                                                <h3 style={{ color: "white" }}>
                                                    1 month Membership <br /> 3500
                                                </h3>
                                            </div>
                                        </div>
                                        <h5 style={{ marginTop: "40px" }}>Discover your favorite class!</h5>
                                        <div className='payment_box payment_box4'>
                                            <Check />
                                            <p>Pay as you go</p>
                                        </div>
                                        <div className='payment_box payment_box5'>
                                            <Check />
                                            <p>Perfect for non-residence</p>
                                        </div>
                                        <div className='payment_box payment_box6'>
                                            <Check />
                                            <p>Acces bto all classes</p>
                                        </div>
                                        <div className='payment_box payment_box7'>
                                            <Check />
                                            <p>Acces bto all classes</p>
                                        </div>
                                        <button className='membership_btn2'>Book Now</button>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            <Card sx={{ width: 300, height: 500 }}>
                                <CardActionArea>
                                    <CardContent>
                                        <div className='curve'>
                                            <div style={{ position: "relative" }}>
                                                <h3 style={{ color: "white" }}>
                                                    Private Room <br /> 5200
                                                </h3>
                                            </div>
                                        </div>
                                        <h5 style={{ marginTop: "60px" }}>Discover your favorite class!</h5>
                                        <div className='payment_box payment_box8'>
                                            <Check />
                                            <p>Pay as you go</p>
                                        </div>
                                        <div className='payment_box payment_box9'>
                                            <Check />
                                            <p>Perfect for non-residence</p>
                                        </div>
                                        <div className='payment_box payment_box10'>
                                            <Check />
                                            <p>Acces bto all classes</p>
                                        </div>
                                        <div className='payment_box payment_box11'>
                                            <Check />
                                            <p>Acces bto all classes</p>
                                        </div>
                                        <button className='membership_btn3'>Book Now</button>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Box>
                    </Container>

                </Grid>



                <Grid className='course_screen4' item xs={12}>
                    <Box className='screen4_cards'>
                        <Box>
                            <img src={image1} alt="image1" />
                            <Typography mt={-20} fontFamily="Crimson Text" fontSize="22px" fontWeight="700" color="white">Food & Nutretion</Typography>
                            <button>See More</button>
                        </Box>
                        <Box>
                            <img src={image2} alt="image1" />
                            <Typography mt={-20} fontFamily="Crimson Text" fontSize="22px" fontWeight="700" color="white">Weekend Excursions</Typography>
                            <button>See More</button>
                        </Box>
                        <Box>
                            <img src={image3} alt="image1" />
                            <Typography mt={-20} fontFamily="Crimson Text" fontSize="22px" fontWeight="700" color="white">Spiriputal Experience</Typography>
                            <button>See More</button>
                        </Box>
                        <Box>
                            <img src={image4} alt="image1" />
                            <Typography mt={-20} fontFamily="Crimson Text" fontSize="22px" fontWeight="700" color="white">Eligibility Yoga Teacher <br /> Training </Typography>
                            <button>See More</button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box >
    )
}

export default Courses