import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import style from '../styles/Latest.module.css';
import json from '../../../hooks/components/compo_update.json';

const Update = () => {

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

    const latestData = json.update.slice(0, visibleCount);

    return (
        <>
            {latestData.map((item, index) => (
                <Link key={item.id} to={item.link} className={style.latest} data-aos="fade-up" data-aos-delay={index * 150} >
                    <div style={{ width: '250px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', overflow: 'hidden' }}>
                        <img src={item.image} alt={item.title} loading='eager' fetchPriority='high' style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} />
                    </div>
                    <div style={{ width: '80%', position: 'relative', height: '155px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '5px 0' }} >
                        <div>
                            <h2 style={{ fontFamily: 'sans-serif', color: '#ffffff', fontSize: '1.25rem', fontWeight: '700' }} >
                                {item.title}
                            </h2>
                            <p style={{ fontFamily: 'sans-serif', fontSize: '14px', color: '#a0aec0', marginTop: '8px', lineHeight: '1.5', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }} title={item.description} >
                                {item.description}
                            </p>
                        </div>
                        <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }} >
                            <p style={{ color: '#718096', fontSize: '13px' }} >
                                {item.date}
                            </p>
                            <p style={{ 
                                color: item.category === 'Info' ? '#4fc3f7' : '#f687b3', 
                                backgroundColor: item.category === 'Info' ? 'rgba(79, 195, 247, 0.1)' : 'rgba(246, 135, 179, 0.1)',
                                border: item.category === 'Info' ? '1px solid rgba(79, 195, 247, 0.2)' : '1px solid rgba(246, 135, 179, 0.2)',
                                padding: '2px 10px',
                                borderRadius: '20px',
                                fontSize: '12px',
                                fontWeight: '600'
                            }} >
                                {item.category}
                            </p>
                        </div>
                    </div>
                </Link>
            ))}

            {visibleCount < json.update.length && (
                <button
                    className={style.more}
                    onClick={handleMore}
                    data-aos="fade-up"
                    data-aos-delay={(json.update.length - visibleCount) * 1000}
                >
                    More
                </button>
            )}
        </>
    );
};

export default Update;