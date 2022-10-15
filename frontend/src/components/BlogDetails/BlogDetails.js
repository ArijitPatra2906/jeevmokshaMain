import React, { useEffect, useState } from 'react'
import "./BlogDetails.css"
import { Container, Typography, Box, Grid } from '@mui/material'
import BasicModal from '../Modal/BasicModal';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { Helmet } from 'react-helmet';

function BlogDetails() {
    const [blogDetails, setBlogDetails] = useState({});
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [pic, setPic] = useState("");
    const location = useLocation();

    const path = location.pathname.split("/")[2];
    useEffect(() => {
        const getBlog = async () => {
            const result = await axios.get("https://jeevmokshayogamain.herokuapp.com/blogs/" + path);

            setBlogDetails(result.data);
            setDesc(result.data.desc);
            setTitle(result.data.title);
            setPic(result.data.pic)
            // console.log(result.data)
        };
        getBlog();
    }, [blogDetails, path]);




    const [open, setOpen] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const onCheckboxClick = () => {
        setIsDisabled(!isDisabled)
    }


    return (
        <Box sx={{ flexGrow: 1 }}>
            <Helmet>
                <title>blog | jeevmokshayoga | jeevmoksha yoga</title>
                <meta
                    name="title"
                    content="blog , jeevmokshayoga , jeevmoksha yoga"
                />
                <meta
                    name="description"
                    content="Welcome to our blogging platform of JeevMoksha and get more yoga training and courses. For more details, visit now."
                />
            </Helmet>
            <Grid container spacing={3}>
                <Grid className='blogdetails_container' item xs={12}>
                    <Container maxWidth="xl" style={{ paddingTop: "150px" }}>
                        <Grid item className="blogdetails_card">
                            <Box className='blogdetails_text'>
                                <Typography variant='h2' fontFamily="Crimson Text">
                                    Read Our Blogs
                                </Typography>
                            </Box>
                        </Grid>
                        <button className='join2'>
                            Join Our Community
                        </button>
                    </Container>
                </Grid>
                <Grid className='blog_details_screen2' style={{ background: "#8E8E8E5E" }} item xs={12}>
                    <Box className='blog_details_scr2'>
                        <Box className='blog_scr2_left'>
                            <img src={pic} alt="" />
                        </Box>
                        <Box className='blog_scr2_right'>
                            <Typography fontWeight="600" fontFamily="sora" letterSpacing={1.2} lineHeight={2} pt={3} pl={4} pr={4} textAlign="left" color="white" fontSize="18px">
                                {title}
                            </Typography>

                            <Typography fontWeight="600" fontFamily="sora" letterSpacing={1.2} lineHeight={2} pt={3} pl={4} pr={4} textAlign="left" color="white" fontSize="14px">
                                {desc}
                            </Typography>
                            <Box style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                <Typography fontWeight="600" fontFamily="sora" letterSpacing={1.2} lineHeight={2} pt={1} pl={4} textAlign="left" color="#eeee" fontSize="10px"> {new Date(blogDetails.createdAt).toDateString()}</Typography>
                                <Typography fontWeight="600" fontFamily="sora" letterSpacing={1.2} lineHeight={2} pt={1} pr={4} pl={4} textAlign="left" color="#eeee" fontSize="10px"> {new Date(blogDetails.createdAt).toLocaleTimeString()}</Typography>

                            </Box>
                            <button className="blogdetails_bttn" onClick={handleOpen}>
                                Join Us
                            </button>
                            {open && <BasicModal open={open} setOpen={setOpen} handleClose={handleClose} handleOpen={handleOpen} onCheckboxClick={onCheckboxClick} isDisabled={isDisabled} />}
                        </Box>
                    </Box>
                </Grid>

            </Grid>
        </Box>
    )
}

export default BlogDetails;