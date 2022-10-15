import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import "./Blog.css"
import { FiUser } from "react-icons/fi"
import { Link } from 'react-router-dom'
import axios from "axios";
import { Helmet } from 'react-helmet'

function Blog() {

    const [blog, setBlog] = useState([])

    useEffect(() => {
        const getBlogs = async () => {
            const result = await axios.get("https://jeevmokshayogamain.herokuapp.com/blogs");
            setBlog(result.data)
            // console.log(blog)
        };
        getBlogs()
    })
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
                <Grid className='blog_container' item xs={12}>
                    <Box className="blog_card">
                        <Box className='blog_text'>
                            <Typography variant='h2' fontFamily="Crimson Text" className='blog_text_1'>
                                Curated Blogs For You
                            </Typography>
                        </Box>
                    </Box>
                </Grid>

                <Grid className='blog_screen_2' item xs={12} >
                    <Box className="blog_Sec_card">
                        {blog && blog?.map((b) => (
                            <Box className='blog1'>
                                <Card sx={{ maxWidth: 300, height: "fit-content", bgcolor: "#906A47" }} >
                                    <CardActionArea >
                                        <CardMedia
                                            component="img"
                                            height="200"
                                            image={b.pic}
                                            alt="green iguana"
                                        />
                                        <CardContent >
                                            <Typography fontFamily="inter" gutterBottom variant="h7" fontSize="18px" fontWeight="600" lineHeight={1.5} color="white" textAlign="left" component="div">
                                                {b.title}
                                            </Typography>
                                            <div className="author">
                                                <FiUser />
                                                <Typography fontSize="12px" color="white">{new Date(b.createdAt).toDateString()} | {new Date(b.createdAt).toLocaleTimeString()}</Typography>
                                            </div>
                                            <Typography mt={1.5} fontSize="12px" color="white" textAlign="left" letterSpacing={1} fontWeight="500" variant="body2">
                                                {b.desc}
                                            </Typography>
                                            <Link to={`/blog/${b._id}`} style={{ textDecoration: "none" }}>
                                                <button className='blog_card_btn'>
                                                    Read More
                                                </button>
                                            </Link>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Box>
                        ))}
                    </Box>

                </Grid>
            </Grid>
        </Box>
    )
}

export default Blog