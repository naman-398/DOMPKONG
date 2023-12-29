import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import s7_img1 from "../Images/s7-img1.png";
import s7_img2 from "../Images/s7-img2.png";
import s7_img3 from "../Images/s7-img3.png";
import s7_img4 from "../Images/s7-img4.png";
import s7_line from "../Images/s7-line.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Partnersection = () => {
    useEffect(() => {
        AOS.init({
            once: true,
            duration: 3000,
        });
    }, [])
    return (
        <div className='s7-padding'>
            <Container>
                <h1 className=' fs-1lg fw-normal lh-108 color-white1 text-center ff-azo'>Partners</h1>
                <Row className=' justify-content-center s7-row-padding'>
                    <Col lg="3" sm="4" className='col-6  d-flex align-items-center cursor-pointer'>
                        <img src={s7_img1} alt="s7-img" className='w-100' data-aos="fade-down" />
                        <img src={s7_line} alt="" className='' data-aos="fade-up" />
                    </Col>
                    <Col lg="3" sm="4" className=' col-6 d-flex align-items-center ps-5 cursor-pointer'>
                        <img src={s7_img2} alt="s7-img" className='w-100' data-aos="fade-down" />
                        <img src={s7_line} alt="" className='d-none d-sm-block' data-aos="fade-up" />
                    </Col>
                    <Col lg="3" sm="4" className=' col-6 d-flex align-items-center ps-5 mt-3 mt-sm-0 cursor-pointer'>
                        <img src={s7_img3} alt="s7-img" className='w-100' data-aos="fade-down" />
                        <img src={s7_line} alt="" className='d-block  d-sm-none d-lg-block' data-aos="fade-up" />
                    </Col>
                    <Col lg="3" sm="4" className=' col-6 d-flex align-items-center ps-5 mt-sm-4 mt-3 mt-lg-0 cursor-pointer'>
                        <img src={s7_img4} alt="s7-img" className='w-100' data-aos="fade-down" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Partnersection