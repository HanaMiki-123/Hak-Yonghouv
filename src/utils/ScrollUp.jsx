import React, { useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollUp = () => {
    const [visible, setVisible] = useState(false);
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        } else if (scrolled <= 300) {
            setVisible(false);
        }
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    window.addEventListener('scroll', toggleVisible);

    return (
        <>
            {visible && (
                <div style={{ position: 'fixed', bottom: '50px', right: '20px', backgroundColor: '#2e2e2e', color: '#fff', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'opacity 0.3s ease', zIndex: '999999999999999999999999' }} onClick={scrollToTop} >
                    <FaArrowUp />
                </div>
            )}
        </>
    );
};

export default ScrollUp;