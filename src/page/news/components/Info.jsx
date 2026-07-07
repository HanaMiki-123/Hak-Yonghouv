import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import style from '../styles/Latest.module.css';
import json from '../../../hooks/components/compo_latest.json';

const Info = () => {

    const [visibleCount, setVisibleCount] = useState(5);

    useEffect(() => {
        AOS.init({
            duration: 700,
            once: true,
            easing: 'ease-in-out',
        });
    }, []);

    const handleMore = () => {
        setVisibleCount(prev => prev + 5);
    };

    const latestData = json.latest.slice(0, visibleCount);

    return (
        <>
            {latestData.map((item, index) => (
                <Link key={item.id} to={item.link} className={style.latest} data-aos="fade-up" data-aos-delay={index * 150} >
                    <div style={{ width: '250px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img src={item.image} alt={item.title} loading='eager' fetchPriority='high' style={{ width: '100%' }} />
                    </div>
                    <div style={{ width: '80%', position: 'relative', height: '155px' }} >
                        <div>
                            <h2 style={{ fontFamily: 'sans-serif', color: '#000' }} >
                                {item.title}
                            </h2>
                            <br />
                            <p style={{ fontFamily: 'sans-serif', fontSize: '14px', color: '#8c8888', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }} title={item.description} >
                                {item.description}
                            </p>
                        </div>
                        <div style={{ position: 'absolute', bottom: '10px', right: '10px', display: 'flex', gap: '40px' }} >
                            <p style={{ color: '#8c8888', fontSize: '14px' }} >
                                {item.date}
                            </p>
                            <p style={{ color: item.category === 'Info' ? '#249b00' : '#a406a7', fontSize: '14px' }} >
                                {item.category}
                            </p>
                        </div>
                    </div>
                </Link>
            ))}

            {visibleCount < json.latest.length && (
                <button
                    className={style.more}
                    onClick={handleMore}
                    data-aos="fade-up"
                    data-aos-delay={(json.latest.length - visibleCount) * 1000}
                >
                    More
                </button>
            )}
        </>
    );
};

export default Info;