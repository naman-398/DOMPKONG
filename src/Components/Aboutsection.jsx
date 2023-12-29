import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Col, Container, Row } from 'react-bootstrap'
import s2_img1 from "../Images/s2-img.png";
import aboutelps from "../Images/abtelps.png";
const Aboutsection = () => {
    useEffect(() => {
        AOS.init({
            once: true,
            duration: 3000,
        });
    }, [])
    return (
        <div className='s2-padding position-relative'>
            <img src={aboutelps} alt="" className='about-elipse d-none d-sm-block' />
            <Container>
                <Row className=' flex-column-reverse flex-lg-row'>
                    <Col lg={6} className=' d-flex flex-column justify-content-center'>
                        <h1 className=' lh-108 fs-1lg color-white1 fw-normal ff-azo mx-auto mx-lg-0' data-aos="fade-down">About </h1>
                        <p className=' lh-160 ff-monsterat color-white1 fs-sm fw-normal mx-width-para-s2 mx-auto mx-lg-0' data-aos="fade-up">Turpis et tortor vel pharetra nibh. Mauris nisl sit vitae viverra amet et. Erat nam molestie. Vitae mollis lacus senectus mattis nisl. Porta , adipiscing sed mus diam amet, ac sed tellus. </p>
                    </Col>
                    <Col lg={6} className='' data-aos="fade-up">
                        <img src={s2_img1} alt="s2-img" className='w-100 s2-img1 d-lg-block mx-auto mx-lg-0 d-flex justify-content-center position-relative z-1' />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Aboutsection