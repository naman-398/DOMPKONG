import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const PreLoader = () => {
    useEffect(() => {
        AOS.init({
            once: true,
            duration: 3000,
        });
    }, [])
    const [isLoaded, setIsLoaded] = useState(false);

    // Simulating data loading with a delay
    useEffect(() => {
        const delay = setTimeout(() => {
            setIsLoaded(true); // Simulated content loaded after delay
            document.body.style.overflow = 'auto'; // Display scrollbar when loaded
        }, 2000); // Simulated delay of 2 seconds

        // Clean up the timeout to prevent memory leaks
        return () => clearTimeout(delay);
    }, []);

    // Hide scrollbar initially until loading is complete
    useEffect(() => {
        document.body.style.overflow = 'hidden';
    }, []);
    return (
        <div>
            <div className="preloader min-vh-100 min-vw-100 bg-black position-fixed top-0 start-0" style={{ display: isLoaded ? 'none' : 'block', zIndex: 9999 }}>
                <div className='d-flex align-items-center justify-content-center min-vh-100'>
                    <div class="loader" data-aos="fade-up">
                        <div class="loader ff-azo fw-normal fw-bold">DOMPKONG..</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PreLoader