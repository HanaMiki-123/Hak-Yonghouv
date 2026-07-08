import { Link, useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import styles from '../styles/App.module.css';
import "swiper/css";

import compo_latest from '../../../hooks/components/compo_latest.json';
import compo_route from '../../../hooks/components/compo_route.json';
import { CiSquarePlus } from "react-icons/ci";

import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';

const Home = () => {
  const navigate = useNavigate();

  const images = [
    "https://drive.google.com/thumbnail?id=1LvPt-f4Wwwe0yXfswxN3kpMnJmATQp0A&sz=w1000",
    "https://drive.google.com/thumbnail?id=11H4cUym-7PgOAobuOmmyPTye9eEMHBbF&sz=w1000",
    "https://drive.google.com/thumbnail?id=1jFdXh1_Zehfkz7uT9f8TVtZ-eNQxetrs&sz=w1000",
    "https://drive.google.com/thumbnail?id=1Anmic2xLgTPjSn5t6vLmplDWlcdmr6Ig&sz=w1000"
  ];
  return (
    <>
      <div className={styles.Home}>
        <section className={styles.home}>
          {/* Background */}
          <img src={image1} alt="background" className={styles.hero_bg} />

          {/* Hero overlay content */}
          <div className={styles.hero_overlay}>

            {/* ── Left: Text ── */}
            <div className={styles.hero_left}>
              <div className={styles.hero_tag}>
                <span className={styles.dot}></span>
                Welcome to my world
              </div>

              <h1 className={styles.hero_name}>
                Hak <span>Yonghouv</span>
              </h1>

              <p className={styles.hero_title}>
                Web Developer · Designer · Creator
              </p>

              <p className={styles.hero_desc}>
                សូមស្វាគមន៍មកកាន់គេហទំព័ររបស់ខ្ញុំ។
                ខ្ញុំចែករំលែកព័ត៌មាន គម្រោង និងភាពច្នៃប្រឌិតផ្សេងៗ
                ដែលបានបង្កើតឡើងដោយចំណង់ចំណូលចិត្ត។
              </p>

              <div className={styles.hero_actions}>
                <button
                  className={styles.hero_btn_primary}
                  onClick={() => navigate(compo_route.news_page.p1)}
                >
                  Explore News
                </button>
                <button className={styles.hero_btn_secondary}>
                  About Me
                </button>
              </div>
            </div>

            {/* ── Right: Logo + Stats ── */}
            <div className={styles.hero_right}>
              <div className={styles.hero_logo_box}>
                <img src="https://www.houv.online/src/image/image1.jpg" className={styles.hero_logo_img} alt="logo" />
              </div>
            </div>

          </div>
        </section>

        <section className={styles.section2}>
          <img src={image2} alt="background" className={styles.bg2} />
          <div className={styles.Container}>
            {/* News */}
            <div className={styles.news}>
              <h1 style={{ textAlign: 'center' }}>NEWS</h1>
              <br />
              <div className={styles.box_news}>
                <div className={styles.box_img_news}>
                  <Swiper spaceBetween={30} centeredSlides={true} autoplay={{ delay: 2000, disableOnInteraction: false, }} modules={[Autoplay]} className="mySwiper" >
                    {images.map((img, idx) => (
                      <SwiperSlide key={idx}>
                        <img src={img} alt="background" style={{ width: '100%', height: '350px', objectFit: 'cover' }} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                <div className={styles.box_latest_all}>
                  <h2 style={{ textAlign: 'left', marginTop: '10px' }}>Latest</h2>
                  <hr size={3} color='#ffffffff' style={{ marginTop: '10px' }} />
                  <div className={styles.box_latest}>
                    {compo_latest.latest.slice(0, 4).map((item, index) => (
                      <Link to={item.link} style={{ textDecoration: 'none' }}>
                        <div key={index} className={styles.item_latest}>
                          <div className={styles.title}>{item.title}</div>
                          <div className={styles.date}>{item.date}</div>
                        </div>
                      </Link>
                    ))}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'right', marginTop: '20px' }}>
                      <button onClick={() => navigate(`${compo_route.news_page.p1}`)} className={styles.btn_More}><CiSquarePlus className={styles.icon} /> More</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
