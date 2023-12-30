import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import darubottle from "../Images/darubottle.png";
import mint_elps2 from "../Images/mint-elps2.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Mintsection = () => {
    useEffect(() => {
        AOS.init({
            once: true,
            duration: 3000,
        });
    }, [])
    let [count, setCount] = useState(1);

    function incrementCount() {
        setCount(prevCount => (prevCount < 30 ? prevCount + 1 : prevCount));
    }
    function decrementCount() {

        setCount(prevCount => (prevCount > 1 ? prevCount - 1 : 1));
    }
    const formattedCount = count < 10 ? `0${count}` : count;
    return (
        <div className='s5-bg-img s5-padding position-relative'>
            <svg className=' position-absolute mint-els1 start-0 d-none d-sm-block' xmlns="http://www.w3.org/2000/svg" width="465" height="757" viewBox="0 0 465 757" fill="none">
                <g filter="url(#filter0_f_0_62)">
                    <circle cx="86.5" cy="378.5" r="86.5" fill="#FDDA60" />
                </g>
                <defs>
                    <filter id="filter0_f_0_62" x="-292" y="0" width="757" height="757" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="146" result="effect1_foregroundBlur_0_62" />
                    </filter>
                </defs>
            </svg>
            <img src={mint_elps2} alt="mint" className='mint-elps2 position-absolute end-0 d-none d-sm-block' />
            <Container>
                <Row>
                    <Col md={6} className=' d-flex justify-content-center' data-aos="fade-down">
                        <img src={darubottle} alt="daru" className='w-100 s5-img h-100' />
                    </Col>
                    <Col md={6} className='pt-4 pt-md-0 d-flex justify-content-center flex-column position-relative z-1'>
                        <h1 className=' fs-1lg color-white1 fw-normal lh-108 mb-1 ff-azo' data-aos="fade-down">Mint NFT</h1>
                        <Row>
                            <Col className='col-6 mt-5' data-aos="fade-up">
                                <p className=' fs-lg color-white1 lh-108 ff-monsterat fw-black mb-0'>9999</p>
                                <p className=' fs-sm fw-normal ff-monsterat color-white1 lh-160 mt-2'>of 10,000 minted</p>
                            </Col>
                            <Col className='col-6 mt-5' data-aos="fade-up">
                                <p className=' fs-lg color-white1 lh-108 ff-monsterat fw-black mb-0'>.2 ETH</p>
                                <p className=' fs-sm fw-normal ff-monsterat color-white1 lh-160 mt-2'>per NFT</p>
                            </Col>
                            <Col className='col-6 mt-4' data-aos="fade-down">
                                <p className=' fs-lg color-white1 lh-108 ff-monsterat fw-black mb-0'>Max 9</p>
                                <p className=' fs-sm fw-normal ff-monsterat color-white1 lh-160 mt-2'>NFTs per transaction</p>
                            </Col>
                            <Col className='col-6 mt-4' data-aos="fade-down">
                                <p className=' fs-lg color-white1 lh-108 ff-monsterat fw-black mb-0'>Max 2</p>
                                <p className=' fs-sm fw-normal ff-monsterat color-white1 lh-160 mt-2'>Transaction per wallet</p>
                            </Col>
                        </Row>
                        <div className=' d-flex align-items-center gap-3' data-aos="fade-up">
                            <button className='fw-black lh-108 fs-lg color-black1 ff-monsterat bg-White1 plus-minus m-0' onClick={decrementCount}>-</button>
                            <div className='s5-number d-flex align-items-center justify-content-center ff-monsterat fs-lg color-white1 fw-black lh-108'> {formattedCount}</div>
                            <button className='fw-black lh-108 fs-lg color-black1 ff-monsterat bg-White1 plus-minus m-0' onClick={incrementCount}>+</button>
                        </div>
                        <button className=' text-center lh-108 fw-normal color-black1 fs-md mint-button ff-azo' data-aos="fade-down"><span>MINT NOW</span></button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Mintsection