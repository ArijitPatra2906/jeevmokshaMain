import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import slider from "../../assets/image 34.png"
import "./carousel.css"
import { Grid } from '@mui/material';

function carousel() {
    return (
        <Grid ml={4} xs={10} bgcolor="#C9CFC7">
            <Carousel autoPlay showThumbs={false} dots="false">
                <div>
                    <img alt="" src={slider} />
                    <h4 >Yoga and Meditation</h4>
                    <p style={{ fonSize: "16px" }} >Acharya Vinay</p>
                </div>
                <div>
                    <img alt="" src={slider} />
                    <h4 >Yoga and Meditation</h4>
                    <p style={{ fonSize: "16px" }} >Acharya Vinay</p>
                </div>
                <div>
                    <img alt="" src={slider} />
                    <h4 >Yoga and Meditation</h4>
                    <p style={{ fonSize: "16px" }} >Acharya Vinay</p>
                </div>
                <div>
                    <img alt="" src={slider} />
                    <h4 >Yoga and Meditation</h4>
                    <p style={{ fonSize: "16px" }} >Acharya Vinay</p>
                </div>
                <div>
                    <img alt="" src={slider} />
                    <h4 >Yoga and Meditation</h4>
                    <p style={{ fonSize: "16px" }} >Acharya Vinay</p>
                </div>
                <div>
                    <img alt="" src={slider} />
                    <h4 >Yoga and Meditation</h4>
                    <p style={{ fonSize: "16px" }} >Acharya Vinay</p>
                </div>
                <div>
                    <img alt="" src={slider} />
                    <h4 >Yoga and Meditation</h4>
                    <p style={{ fonSize: "16px" }} >Acharya Vinay</p>
                </div>
                <div>
                    <img alt="" src={slider} />
                    <h4 >Yoga and Meditation</h4>
                    <p style={{ fonSize: "16px" }} >Acharya Vinay</p>
                </div>

            </Carousel>
        </Grid >
    )
}

export default carousel