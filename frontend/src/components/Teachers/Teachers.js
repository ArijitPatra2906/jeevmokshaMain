import React, { useState } from 'react'
import "./Teacher.css"

import { Box, Grid, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';

import IconButton from '@mui/material/IconButton';


import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


import Carousel from 'react-elastic-carousel';
import acharya from "../../assets/acharya.jpg"
import kalpendra from "../../assets/kalpendra.jpg"
import naveen from "../../assets/naveen.jpg"
import divya from "../../assets/divya 1.jfif"
import image59 from "../../assets/image 44.png"
import image44 from "../../assets/image 59.png"
import image53 from "../../assets/image 53.png"
import image54 from "../../assets/image 54.png"
import image55 from "../../assets/image 55.png"
import image56 from "../../assets/image 56.png"
import image57 from "../../assets/image 57.png"
import image58 from "../../assets/image 58.png"
import { Helmet } from 'react-helmet';

//card component function

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));



function Teachers() {

    const [expanded1, setExpanded1] = useState(false);
    const [expanded2, setExpanded2] = useState(false);
    const [expanded3, setExpanded3] = useState(false);
    const [expanded4, setExpanded4] = useState(false);

    const handleExpandClick1 = () => {
        setExpanded1(!expanded1);
    };
    const handleExpandClick2 = () => {
        setExpanded2(!expanded2);
    }; const handleExpandClick3 = () => {
        setExpanded3(!expanded3);
    }; const handleExpandClick4 = () => {
        setExpanded4(!expanded4);
    };
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Helmet>
                <title>Tantra Yoga Courses Rishikesh India | Yoga Wellness Rishikesh India | Best yoga schools in India</title>
                <meta
                    name="title"
                    content="Tantra Yoga courses Rishikesh India , Yoga Wellness Rishikesh India , Best yoga schools in India"
                />
                <meta
                    name="description"
                    content="Meet our yoga teachers in Rishikesh and join a Tantra Yoga courses and Yoga Wellness Rishikesh India and lived a healthy lifestyle. For more details, visit now."
                />
            </Helmet>
            <Grid container spacing={3}>
                <Grid className='teacher_container' item xs={12}>
                    <Box className="teacher_card">
                        <Box className='teacher_text'>
                            <Typography fontWeight="600" variant='h2' fontFamily="Crimson Text" className='teacher_text_1'>
                                MEET OUR TEACHERS
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid className='teacher_screen3' item xs={12}>
                    <Typography fontWeight="700" fontFamily="Crimson Text" fontSize="46px" color="#112734">Practice with confidence
                    </Typography>
                    <Typography fontWeight="700" fontFamily="Open sans" fontSize="14px" color="#112734B2">
                        Connect and study with 500+ expert teachers across yoga therapy, anatomy. meditation, and more. <br />
                        The world’s most diverse yoga site.
                    </Typography>
                    <div className="dekstop">
                        <Carousel dots="false" >
                            <Grid className="carousel_testimonial_sec" item xs={12}>
                                <div className='carousel_testimonial' style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", gap: "6px", padding: "30px 10px" }}>

                                    <Card sx={{ maxWidth: 280, height: "fit-content" }} >
                                        <CardHeader

                                            title="Acharya Ji"

                                        />
                                        <CardMedia
                                            component="img"
                                            height="194"
                                            image={acharya}
                                            alt="acharya"
                                        />
                                        <CardContent>
                                            <Typography variant="body2" color="text.secondary">
                                                Acharya Ji has been teaching at various levels for last 12 years, different components of yogic system and lifestyle and an expert in his methods of delivering the components with a touch of compassion and gentleness.
                                            </Typography>
                                        </CardContent>

                                        <CardActions disableSpacing>

                                            <ExpandMore
                                                expand={expanded4}
                                                onClick={handleExpandClick4}
                                                aria-expanded={expanded4}
                                                aria-label="show more"
                                            >
                                                <ExpandMoreIcon />
                                            </ExpandMore>
                                        </CardActions>
                                        <Collapse in={expanded4} timeout="auto" unmountOnExit>
                                            <CardContent>
                                                <Typography paragraph>Method:</Typography>
                                                <Typography paragraph>
                                                    Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                                                    aside for 10 minutes.
                                                </Typography>
                                                <Typography paragraph>
                                                    Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                                                    medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                                                    occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                                                    large plate and set aside, leaving chicken and chorizo in the pan. Add
                                                    pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                                                    stirring often until thickened and fragrant, about 10 minutes. Add
                                                    saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                                                </Typography>
                                                <Typography paragraph>
                                                    Add rice and stir very gently to distribute. Top with artichokes and
                                                    peppers, and cook without stirring, until most of the liquid is absorbed,
                                                    15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                                                    mussels, tucking them down into the rice, and cook again without
                                                    stirring, until mussels have opened and rice is just tender, 5 to 7
                                                    minutes more. (Discard any mussels that don&apos;t open.)
                                                </Typography>
                                                <Typography>
                                                    Set aside off of the heat to let rest for 10 minutes, and then serve.
                                                </Typography>
                                            </CardContent>
                                        </Collapse>
                                    </Card>
                                    <Card sx={{ maxWidth: 280, height: "fit-content" }}>
                                        <CardHeader
                                            title="Naveen"
                                        />
                                        <CardMedia
                                            component="img"
                                            height="194"
                                            image={naveen}
                                            alt="naveen"
                                        />
                                        <CardContent>
                                            <Typography variant="body2" color="text.secondary">
                                                He has been teaching at various levels for last 12 years, different components of yogic system and lifestyle and an expert in his methods of delivering the components with a touch of compassion and gentleness.
                                            </Typography>
                                        </CardContent>
                                        <CardActions disableSpacing>

                                            <ExpandMore
                                                expand={expanded1}
                                                onClick={handleExpandClick1}
                                                aria-expanded={expanded1}
                                                aria-label="show more"
                                            >
                                                <ExpandMoreIcon />
                                            </ExpandMore>
                                        </CardActions>
                                        <Collapse in={expanded1} timeout="auto" unmountOnExit>
                                            <CardContent>


                                                <Typography paragraph>

                                                    Naveen is an  expert teacher for the following subjects <br />
                                                    1 . Hatha yoga <br /> 2. Ashtanga vinyasa yoga <br /> 3. Asana alignment and adjustment and Teaching method <br /> 4. Pranayamas <br /> 5. Shatkarma <br /> 6.  Meditation <br /> 7. Yoga Nidra

                                                </Typography>

                                            </CardContent>
                                        </Collapse>
                                    </Card>
                                    <Card sx={{ maxWidth: 280, height: "fit-content" }}>
                                        <CardHeader


                                            title="Kalpendra Chauhan"

                                        />
                                        <CardMedia
                                            component="img"
                                            height="194"
                                            image={kalpendra}
                                            alt="kalpendra"
                                        />
                                        <CardContent>
                                            <Typography variant="body2" color="text.secondary">
                                                Kalpendra Chauhan Ji who has been on the path of Yoga and spirituality from an early age of 19 born and brought up in traditional north Indian Spiritual family .
                                                His expertise lies in understanding the science behind yoga, breathing, meditation, and relaxation practices to help people find the balance between mind, body, and soul.
                                            </Typography>
                                        </CardContent>
                                        <CardActions disableSpacing>

                                            <ExpandMore
                                                expand={expanded2}
                                                onClick={handleExpandClick2}
                                                aria-expanded={expanded2}
                                                aria-label="show more"
                                            >
                                                <ExpandMoreIcon />
                                            </ExpandMore>
                                        </CardActions>
                                        <Collapse in={expanded2} timeout="auto" unmountOnExit>
                                            <CardContent>

                                                <Typography paragraph>
                                                    He has obtained Masters degree in Yoga science from Uttarakhand Sanskrit Universityi, Haridwar in 2008. He also has earned a post-graduate Diploma in Yoga and Holistic Health from HNB Garhwal University in 2005 and Certfied Yoga teacher (ERYT 500 from Yoga Alliance USA),He has been teaching Yoga Philosophy, Pranayam , Yoga Nidra and Meditation for over 12 years now. His simplicity transcends into his teaching philosophy. His depth of knowledge, yoga expertise, and humility makes him a favorite among students. He has unique expertise in his subject where he gives more importance on implementation rather than theoretical knowledge.He is considered one of the best yoga teacher and most friendly person.
                                                    His span of work experience includes designing Yoga programs & curriculam, training future Yoga teachers, delivering meditation courses and breathing workshops in India as well as abroad.
                                                </Typography>

                                            </CardContent>
                                        </Collapse>
                                    </Card>
                                    <Card sx={{ maxWidth: 280, height: "fit-content" }}>
                                        <CardHeader


                                            title="Shrimp and Chorizo Paella"

                                        />
                                        <CardMedia
                                            component="img"
                                            height="194"
                                            image={divya}
                                            alt="divya"
                                        />
                                        <CardContent>
                                            <Typography variant="body2" color="text.secondary">
                                                Divya is a certified Yoga instructor with masters's degree in Yogic sciences from the University of Yoga in Rishikesh.
                                            </Typography>
                                        </CardContent>
                                        <CardActions disableSpacing>

                                            <ExpandMore
                                                expand={expanded3}
                                                onClick={handleExpandClick3}
                                                aria-expanded={expanded3}
                                                aria-label="show more"
                                            >
                                                <ExpandMoreIcon />
                                            </ExpandMore>
                                        </CardActions>
                                        <Collapse in={expanded3} timeout="auto" unmountOnExit>
                                            <CardContent>

                                                <Typography paragraph>
                                                    Her skills involves teaching prenatal and post natal yoga as well as Mantra chantings, bhajans and kirtans and musical compositions conducive to the yogic growth and development of students. She is also taking care of ashram kitchen providing the best of meals to our students. Her gentle voice and humble attitude is her strengths in creating a positive environment all around the ashram.
                                                </Typography>

                                            </CardContent>
                                        </Collapse>
                                    </Card>
                                </div>
                            </Grid>
                            {/* <div className="scr3_image">
                                <div class="testimonial_container">
                                    <img src={ecplice6} alt="" />
                                    <img src={ecplice7} alt="" />
                                    <img src={ecplice8} alt="" />
                                    <img src={ecplice9} alt="" />
                                </div>
                            </div>
                            <div className="scr3_image">
                                <div class="testimonial_container">
                                    <img src={ecplice6} alt="" />
                                    <img src={ecplice7} alt="" />
                                    <img src={ecplice8} alt="" />
                                    <img src={ecplice9} alt="" />
                                </div>
                            </div>
                            <div className="scr3_image">
                                <div class="testimonial_container">
                                    <img src={ecplice6} alt="" />
                                    <img src={ecplice7} alt="" />
                                    <img src={ecplice8} alt="" />
                                    <img src={ecplice9} alt="" />
                                </div>
                            </div> */}
                        </Carousel>
                    </div>
                    <div className='mobile'>
                        <Carousel>
                            <Card sx={{ maxWidth: 280, height: "fit-content" }} >
                                <CardHeader

                                    title="Acharya Ji"

                                />
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image={acharya}
                                    alt="acharya"
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        Acharya Ji has been teaching at various levels for last 12 years, different components of yogic system and lifestyle and an expert in his methods of delivering the components with a touch of compassion and gentleness.
                                    </Typography>
                                </CardContent>

                                <CardActions disableSpacing>
                                    <ExpandMore
                                        expand={expanded4}
                                        onClick={handleExpandClick4}
                                        aria-expanded={expanded4}
                                        aria-label="show more"
                                    >
                                        <ExpandMoreIcon />
                                    </ExpandMore>
                                </CardActions>
                                <Collapse in={expanded4} timeout="auto" unmountOnExit>
                                    <CardContent>
                                        <Typography paragraph>Method:</Typography>
                                        <Typography paragraph>
                                            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                                            aside for 10 minutes.
                                        </Typography>
                                        <Typography paragraph>
                                            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                                            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                                            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                                            large plate and set aside, leaving chicken and chorizo in the pan. Add
                                            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                                            stirring often until thickened and fragrant, about 10 minutes. Add
                                            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                                        </Typography>
                                        <Typography paragraph>
                                            Add rice and stir very gently to distribute. Top with artichokes and
                                            peppers, and cook without stirring, until most of the liquid is absorbed,
                                            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                                            mussels, tucking them down into the rice, and cook again without
                                            stirring, until mussels have opened and rice is just tender, 5 to 7
                                            minutes more. (Discard any mussels that don&apos;t open.)
                                        </Typography>
                                        <Typography>
                                            Set aside off of the heat to let rest for 10 minutes, and then serve.
                                        </Typography>
                                    </CardContent>
                                </Collapse>
                            </Card>
                            <Card sx={{ maxWidth: 280, height: "fit-content" }}>
                                <CardHeader
                                    title="Naveen"
                                />
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image={naveen}
                                    alt="naveen"
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        He has been teaching at various levels for last 12 years, different components of yogic system and lifestyle and an expert in his methods of delivering the components with a touch of compassion and gentleness.
                                    </Typography>
                                </CardContent>
                                <CardActions disableSpacing>

                                    <ExpandMore
                                        expand={expanded1}
                                        onClick={handleExpandClick1}
                                        aria-expanded={expanded1}
                                        aria-label="show more"
                                    >
                                        <ExpandMoreIcon />
                                    </ExpandMore>
                                </CardActions>
                                <Collapse in={expanded1} timeout="auto" unmountOnExit>
                                    <CardContent>


                                        <Typography paragraph>

                                            Naveen is an  expert teacher for the following subjects <br />
                                            1 . Hatha yoga <br /> 2. Ashtanga vinyasa yoga <br /> 3. Asana alignment and adjustment and Teaching method <br /> 4. Pranayamas <br /> 5. Shatkarma <br /> 6.  Meditation <br /> 7. Yoga Nidra

                                        </Typography>

                                    </CardContent>
                                </Collapse>
                            </Card>
                            <Card sx={{ maxWidth: 280, height: "fit-content" }}>
                                <CardHeader


                                    title="Kalpendra Chauhan"

                                />
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image={kalpendra}
                                    alt="kalpendra"
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        Kalpendra Chauhan Ji who has been on the path of Yoga and spirituality from an early age of 19 born and brought up in traditional north Indian Spiritual family .
                                        His expertise lies in understanding the science behind yoga, breathing, meditation, and relaxation practices to help people find the balance between mind, body, and soul.
                                    </Typography>
                                </CardContent>
                                <CardActions disableSpacing>

                                    <ExpandMore
                                        expand={expanded2}
                                        onClick={handleExpandClick2}
                                        aria-expanded={expanded2}
                                        aria-label="show more"
                                    >
                                        <ExpandMoreIcon />
                                    </ExpandMore>
                                </CardActions>
                                <Collapse in={expanded2} timeout="auto" unmountOnExit>
                                    <CardContent>

                                        <Typography paragraph>
                                            He has obtained Masters degree in Yoga science from Uttarakhand Sanskrit Universityi, Haridwar in 2008. He also has earned a post-graduate Diploma in Yoga and Holistic Health from HNB Garhwal University in 2005 and Certfied Yoga teacher (ERYT 500 from Yoga Alliance USA),He has been teaching Yoga Philosophy, Pranayam , Yoga Nidra and Meditation for over 12 years now. His simplicity transcends into his teaching philosophy. His depth of knowledge, yoga expertise, and humility makes him a favorite among students. He has unique expertise in his subject where he gives more importance on implementation rather than theoretical knowledge.He is considered one of the best yoga teacher and most friendly person.
                                            His span of work experience includes designing Yoga programs & curriculam, training future Yoga teachers, delivering meditation courses and breathing workshops in India as well as abroad.
                                        </Typography>

                                    </CardContent>
                                </Collapse>
                            </Card>
                            <Card sx={{ maxWidth: 280, height: "fit-content" }}>
                                <CardHeader


                                    title="Shrimp and Chorizo Paella"

                                />
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image={divya}
                                    alt="divya"
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        Divya is a certified Yoga instructor with masters's degree in Yogic sciences from the University of Yoga in Rishikesh.
                                    </Typography>
                                </CardContent>
                                <CardActions disableSpacing>

                                    <ExpandMore
                                        expand={expanded3}
                                        onClick={handleExpandClick3}
                                        aria-expanded={expanded3}
                                        aria-label="show more"
                                    >
                                        <ExpandMoreIcon />
                                    </ExpandMore>
                                </CardActions>
                                <Collapse in={expanded3} timeout="auto" unmountOnExit>
                                    <CardContent>

                                        <Typography paragraph>
                                            Her skills involves teaching prenatal and post natal yoga as well as Mantra chantings, bhajans and kirtans and musical compositions conducive to the yogic growth and development of students. She is also taking care of ashram kitchen providing the best of meals to our students. Her gentle voice and humble attitude is her strengths in creating a positive environment all around the ashram.
                                        </Typography>

                                    </CardContent>
                                </Collapse>
                            </Card>
                        </Carousel>
                    </div>
                </Grid>

                <Grid className='teacher_screen4' item xs={12}>
                    <Typography fontWeight="600" variant='h2' fontFamily="Crimson Text">
                        Recognition
                    </Typography>
                    <Box className="screen4_content">
                        <Box>
                            <img src={image59} alt="" />
                        </Box>
                        <Box>
                            <img src={image44} alt="" />
                        </Box>
                    </Box>
                </Grid>




                <Grid className='teacher_screen5' item xs={12}>
                    <Typography fontWeight="700" fontFamily="Crimson Text" fontSize="46px" color="#112734">Our <span style={{ color: "#375B26" }}>Inspirations</span>
                    </Typography>
                    <Grid className="inspiration_sec" item xs={12}>
                        <div className='inspiration' style={{ display: "flex", flexDirection: "column" }}>
                            <div className="scr5_image">
                                <div >
                                    <div class="inspiration_container">
                                        <div>
                                            <img src={image53} alt="inspiration" />
                                            <Typography fontSize={14} fontFamily="Open sans">ADI SHANKARACHARYA</Typography>
                                        </div>
                                        <div>
                                            <img src={image54} alt="inspiration" />
                                            <Typography fontSize={14} fontFamily="Open sans">GURU GORAKHNATH</Typography>
                                        </div>
                                        <div>
                                            <img src={image55} alt="inspiration" />
                                            <Typography fontSize={14} fontFamily="Open sans">SHRI RAMAKRISHNA</Typography>
                                        </div>
                                    </div>
                                    <div class="inspiration_container">
                                        <div>
                                            <img src={image57} alt="inspiration" />
                                            <Typography fontSize={14} fontFamily="Open sans">SWAMI SATYANANDA SARASWATI</Typography>
                                        </div>
                                        <div>
                                            <img src={image56} alt="inspiration" />
                                            <Typography fontSize={14} fontFamily="Open sans">SWAMI VIVEKANANDA</Typography>
                                        </div>
                                        <div>
                                            <img src={image58} alt="inspiration" />
                                            <Typography fontSize={14} fontFamily="Open sans">BKS IYENGAR</Typography>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Grid>

        </Box >

    )
}

export default Teachers