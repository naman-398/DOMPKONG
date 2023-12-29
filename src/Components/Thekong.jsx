import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import bigbandar from "../Images/bigbandar.png";
import s4_img1 from "../Images/s5-img1.png";
import s4_img2 from "../Images/s5-img2.png";
import s4_img3 from "../Images/s5-img3.png";
import s4_img4 from "../Images/s4-img4.png";
import s4_img5 from "../Images/s4-img5.png";
import s4_img6 from "../Images/s4-img7.png";
import s4_img7 from "../Images/s4-img6.png";
import s4_img8 from "../Images/s4-img8.png";
import s4_img9 from "../Images/s4-img9.png";
import s4_img10 from "../Images/s4-img10.png";
import s4_elp from "../Images/bigmonkeyelipse.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Thekong = () => {
    useEffect(() => {
        AOS.init({
            once: true,
            duration: 3000,
        });
    }, [])
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speedAutoplay: 2000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 3.5,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 690,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 595,
                settings: {
                    slidesToShow: 2.5,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 390,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 340,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const slider2 = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speedAutoplay: 2000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 3.5,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 690,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 595,
                settings: {
                    slidesToShow: 2.5,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 390,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 340,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='s4-padding overflow-hidden position-relative'>
            <Container className=''>
                <h1 className="fs-1lg fw-normal color-white1 lh-108 text-center ff-azo">THE KONGS</h1>
                <Slider {...settings} className=' d-block d-lg-none mt-5'>
                    <div className=' mx-auto'> <img src={s4_img1} alt="s4" className=' mx-auto box_shadow' data-aos="fade-down"/></div>
                    <div className=' mx-auto'> <img src={s4_img2} alt="s4" className=' mx-auto box_shadow' data-aos="fade-down"/></div>
                    <div className=' mx-auto'> <img src={s4_img3} alt="s4" className=' mx-auto box_shadow' data-aos="fade-down"/></div>
                    <div className=' mx-auto'> <img src={s4_img4} alt="s4" className=' mx-auto box_shadow' data-aos="fade-down"/></div>
                    <div className=' mx-auto'> <img src={s4_img5} alt="s4" className=' mx-auto box_shadow' data-aos="fade-down"/></div>
                </Slider>
                <div className=' d-flex justify-content-center position-relative'><img src={bigbandar} alt="big" className='bigmonkey w-100 h-100 mx-auto position-relative z-1' />
                <img src={s4_elp} alt="" className='s4-elp d-none d-md-block'/></div>
                <Slider {...slider2} className=' d-block d-lg-none mt-5'>
                    <div className=' mx-auto'> <img src={s4_img6} alt="s4" className=' mx-auto box_shadow' data-aos="fade-up"/></div>
                    <div className=' mx-auto'> <img src={s4_img7} alt="s4" className=' mx-auto box_shadow' data-aos="fade-up"/></div>
                    <div className=' mx-auto'> <img src={s4_img8} alt="s4" className=' mx-auto box_shadow' data-aos="fade-up"/></div>
                    <div className=' mx-auto'> <img src={s4_img9} alt="s4" className=' mx-auto box_shadow' data-aos="fade-up"/></div>
                    <div className=' mx-auto'> <img src={s4_img10} alt="s4" className=' mx-auto box_shadow' data-aos="fade-up"/></div>
                </Slider>
                <div className=' d-none d-lg-block'>
                    <img src={s4_img1} alt="s4" className='s4-img1 box_shadow' data-aos="fade-down" />
                    <img src={s4_img2} alt="s4" className='s4-img2 box_shadow' data-aos="fade-up" />
                    <img src={s4_img3} alt="s4" className='s4-img3 box_shadow' data-aos="fade-down" />
                    <img src={s4_img4} alt="s4" className='s4-img4 box_shadow' data-aos="fade-up" />
                    <img src={s4_img5} alt="s4" className='s4-img5 box_shadow' data-aos="fade-down" />
                    <img src={s4_img6} alt="s4" className='s4-img6 box_shadow' data-aos="fade-down" />
                    <img src={s4_img7} alt="s4" className='s4-img7 box_shadow' data-aos="fade-up" />
                    <img src={s4_img8} alt="s4" className='s4-img8 box_shadow' data-aos="fade-down" />
                    <img src={s4_img9} alt="s4" className='s4-img9 box_shadow' data-aos="fade-up" />
                    <img src={s4_img10} alt="s4" className='s4-img10 box_shadow' data-aos="fade-dowwn" /></div>
            </Container>
        </div>
    )
}

export default Thekong