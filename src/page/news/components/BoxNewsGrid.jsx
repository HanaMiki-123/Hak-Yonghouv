import React from 'react';
import style from '../styles/App.module.css';
import { Link } from 'react-router-dom';

const BoxNewsGrid = ({ url, title, description, date, links }) => {
    return (
        <Link to={links} style={{ textDecoration: 'none' }}>
            <div className={style.box_news_grid}>
                <div style={{ margin: '20px' }}>
                    <div className={style.image}>
                        <img src={url} alt="image" loading='eager' fetchPriority='high' />
                    </div>
                </div>
                <div className={style.container}>
                    <h4 className={style.title}>{title}</h4>
                    <p className={style.description}>{description}</p>
                    <div className={style.date}>
                        <div style={{ color: '#dad8d8ff' }}>{date}</div>
                        <div style={{ color: 'yellow' }}>Info</div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default BoxNewsGrid;