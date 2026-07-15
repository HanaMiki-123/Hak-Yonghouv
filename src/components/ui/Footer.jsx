import React from 'react';
import style from '../../styles/private/Footer.module.css';
import { Link } from 'react-router-dom';

import Logo from '../../assets/images/png/logo.png';

import { FaFacebook, FaYoutube, FaGithub, FaTiktok, FaTelegram } from "react-icons/fa";

import json from '../../hooks/components/compo_footer.json';
import route from '../../hooks/components/compo_route.json';

import { FaExternalLinkAlt } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <footer className={style.footer}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5rem' }}>
                    <a target='_blank' href="https://www.facebook.com/houv.yong.hak" className={style.icon_link}><FaFacebook className={style.icon} /></a>
                    <a target='_blank' href="https://t.me/boyboy_2" className={style.icon_link}><FaTelegram className={style.icon} /></a>
                    <a target='_blank' href="http://www.youtube.com/@HakYonghouv" className={style.icon_link}><FaYoutube className={style.icon} /></a>
                    <a target='_blank' href="https://github.com/Hacker122-qpwi" className={style.icon_link}><FaGithub className={style.icon} /></a>
                    <a target='_blank' href="https://www.tiktok.com/@hk.yghv?_r=1&_t=ZS-982jrGGRgtp" className={style.icon_link}><FaTiktok className={style.icon} /></a>
                </div>
                <hr style={{ marginTop: '20px', marginBottom: '20px' }} />
                <div className={style.container}>
                    <div className={style.box_footer1}>
                        <div style={{ maxWidth: '320px' }}>
                            <div className={style.text_logo}>
                                <img src={Logo} alt="logo" style={{ width: "200px", height: "50px" }} loading="lazy" />
                            </div>
                            <p className={style.description}>
                                {json.description1}
                                <br />
                                {json.description2}
                            </p>
                        </div>
                        <div>
                            <h4 className={style.navigation}>MENU</h4>
                            <ul className={style.ul_nav}>
                                <li><Link className={style.a_nav} to={route.home_page.p1}>Home</Link></li>
                                <li><Link className={style.a_nav} to={route.about_page.p1}>About</Link></li>
                                <li><Link className={style.a_nav} to={route.news_page.p1}>News</Link></li>
                                <li><Link className={style.a_nav} to={route.library_page.p1}>Library</Link></li>
                                <li><Link className={style.a_nav} to={route.contact_page.p1}>Contact</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className={style.navigation}>APPLICATION</h4>
                            <ul className={style.ul_nav}>
                                <li><Link className={style.a_nav} to="https://github.com/HanaMiki-123/Hak-Yonghouv.git">Source Code <FaExternalLinkAlt /></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className={style.box_footer2}>
                        <div className={style.copyright}>
                            <span>&copy; 2026 Hak Yonghouv. All rights reserved.</span>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;