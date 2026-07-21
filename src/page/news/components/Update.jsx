import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import style from '../styles/Latest.module.css';

const API_URL = import.meta.env.VITE_API_BACKEND || 'http://localhost:5000';

const Update = () => {

    const [visibleCount, setVisibleCount] = useState(5);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        AOS.init({
            duration: 700,
            once: true,
            easing: 'ease-in-out',
        });
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const res = await fetch(`${API_URL}/api/update`);
                if (!res.ok) throw new Error('Failed to fetch update data');
                const json = await res.json();
                setData(json);
            } catch (err) {
                console.error('Update fetch error:', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const handleMore = () => {
        setVisibleCount(prev => prev + 5);
    };

    const latestData = data.slice(0, visibleCount);

    if (loading) return (
        <div style={{ textAlign: 'center', color: '#4fc3f7', padding: '40px', fontFamily: 'khmer' }}>
            កំពុងទាញទិន្នន័យ...
        </div>
    );

    if (error) return (
        <div style={{ textAlign: 'center', color: '#fc8181', padding: '40px', fontFamily: 'khmer' }}>
            មានបញ្ហាក្នុងការទាញទិន្នន័យ: {error}
        </div>
    );

    return (
        <>
            {latestData.map((item, index) => (
                <Link key={item.id} to={`/news/info/${item.id}`} className={style.latest} data-aos="fade-up" data-aos-delay={index * 150} >
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
                                color: item.category === 'Last update' ? '#fff44f' : '#a0aec0',
                                backgroundColor: item.category === 'Last update' ? 'rgba(255, 244, 79, 0.1)' : 'rgba(160, 174, 192, 0.1)',
                                border: item.category === 'Last update' ? '1px solid rgba(255, 244, 79, 0.2)' : '1px solid rgba(160, 174, 192, 0.2)',
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

            {visibleCount < data.length && (
                <button
                    className={style.more}
                    onClick={handleMore}
                    data-aos="fade-up"
                    data-aos-delay={(data.length - visibleCount) * 1000}
                >
                    More
                </button>
            )}
        </>
    );
};

export default Update;