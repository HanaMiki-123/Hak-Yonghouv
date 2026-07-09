import React from 'react';
import { Link } from 'react-router-dom';
import style from '../styles/App.module.css';
import json from '../../../hooks/components/compo_latest.json';

const BoxNewsGrid = () => {
    const randomItems = [...json.latest]
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);

    return (
        <>
            {randomItems.map((item) => (
                <Link
                    key={item.id}
                    to={`/news/info/${item.id}`}
                    style={{ textDecoration: 'none' }}
                >
                    <div className={style.box_news_grid}>
                        <div style={{ margin: '20px' }}>
                            <div className={style.image}>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    loading="eager"
                                    fetchPriority="high"
                                />
                            </div>
                        </div>

                        <div className={style.container}>
                            <h4 className={style.title}>{item.title}</h4>
                            <p className={style.description}>{item.description}</p>

                            <div className={style.date}>
                                <div style={{ color: '#dad8d8ff' }}>{item.date}</div>
                                <div style={{ color: 'yellow' }}>{item.category}</div>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </>
    );
};

export default BoxNewsGrid;