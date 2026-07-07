import React, { useRef, useState } from 'react';
import style from '../../styles/private/Header.module.css';
import { Link } from 'react-router-dom';

import { IoVolumeMute, IoVolumeHigh } from "react-icons/io5";
import { FaCaretDown, FaUserCircle } from "react-icons/fa";
import { FaEarthAmericas } from "react-icons/fa6";

import json from '../../hooks/components/compo_header.json';
import route from '../../hooks/components/compo_route.json';

import LoginProps from '../../context/loging/Login';
import song from '../../assets/song/song1.mp3';

const Header = () => {

    const [Logins, setLogins] = useState(false);

    const audioRef = useRef(new Audio(song));
    const [isPlaying, setIsPlaying] = useState(false);

    const handleMusic = () => {
        if (isPlaying) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
            setIsPlaying(false);
        } else {
            audioRef.current.loop = true;
            audioRef.current.play();
            setIsPlaying(true);
        }
    };

    return (
        <>
            <header className={style.header}>
                <div className={style.left}>
                    <div className={style.song_icon_box} onClick={handleMusic} style={{ cursor: "pointer" }}>
                        {isPlaying ? (
                            <IoVolumeHigh className={style.icon_song} style={{ color: "lime" }} />
                        ) : (
                            <IoVolumeMute className={style.icon_song} style={{ color: "white" }} />
                        )}
                    </div>
                    <h3 style={{ color: 'var(--white)', userSelect: 'none' }}>Hak Yonghouv</h3>
                    <nav className={style.navbar}>
                        <ul className={style.ul}>
                            <Link to={route.home_page.p1} className={style.link}><li className={style.li}>Home</li></Link>
                            <Link to="" className={style.link}><li className={style.li}>About</li></Link>
                            <Link to={route.news_page.p1} className={style.link}><li className={style.li}>News</li></Link>
                            <div className={style.link}>
                                <li className={style.li}>
                                    Website
                                    <FaCaretDown />
                                    <ul className={style.dropdown}>
                                        {json.navbar.website.map((item, index) => (
                                            <li key={index} className={style.li_dropdown}>
                                                <a href={item.url} target={item.target} className={style.link_dropdown}><FaEarthAmericas />{item.title}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            </div>
                            <Link to="" className={style.link}><li className={style.li}>Contact</li></Link>
                        </ul>
                    </nav>
                </div>

                {/* <div className={style.right}>
                    <div onClick={() => setLogins(true)} style={{ display: 'flex', alignItems: 'center', gap: '10px', paddingTop: '15px', paddingBottom: '15px', cursor: 'pointer' }}>
                        <h3 style={{ color: 'var(--white)' }}>Log in</h3>
                        <FaUserCircle className={style.user_icon} style={{ color: 'var(--white)', fontSize: '1.5rem' }} />
                    </div>
                </div> */}
            </header >

            {Logins && <LoginProps setLogins={setLogins} />}
        </>
    );
};

export default Header;