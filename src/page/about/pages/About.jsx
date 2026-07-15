import React from 'react';
import styles from '../styles/App.module.css';
import { FaNodeJs, FaGitAlt, FaGithub, FaExternalLinkAlt, FaRocket, FaBullhorn, FaHandshake } from 'react-icons/fa';
import { SiVite, SiMongodb, SiJavascript, SiCss, SiHtml5 } from 'react-icons/si';
import { Link } from 'react-router-dom';
import latestJson from '../../../hooks/components/compo_latest.json';

const skills = [
  { icon: <SiHtml5 />, name: 'HTML5', color: '#e34c26' },
  { icon: <SiCss />, name: 'CSS3', color: '#1572b6' },
  { icon: <SiJavascript />, name: 'JavaScript', color: '#f7df1e' },
  { icon: <SiVite />, name: 'React + Vite', color: '#61dafb' },
  { icon: <FaNodeJs />, name: 'Node.js', color: '#6fa763' },
  { icon: <SiMongodb />, name: 'MongoDB', color: '#47a248' },
  { icon: <FaGitAlt />, name: 'Git', color: '#f05032' },
  { icon: <FaGithub />, name: 'GitHub', color: '#ffffff' },
];

const timeline = [
  {
    year: '2013 - 2016',
    title: 'Student',
    desc: 'Completed primary education at Boeung Kok Primary School.',
  },
  {
    year: '2017 - 2019',
    title: 'Student',
    desc: 'Completed primary education at Anuovath Primary School.',
  },
  {
    year: '2020 - 2025',
    title: 'Student',
    desc: 'Completed studies at Hun Sen Kampong Cham High School.',
  },
  {
    year: '2025 - Present',
    title: 'Student',
    desc: 'First-Year Undergraduate Student at Preah Kosamak Polytechnic Institute.',
  },
];

const About = () => {
  return (
    <div className={styles.About}>

      <section className={styles.hero}>
        <div className={styles.hero_content}>
          <div className={styles.hero_text}>
            <span className={styles.badge}>About Me</span>
            <h1 className={styles.hero_title}>
              Hi, I'm <span>Hak Yonghouv</span>
            </h1>
            <p className={styles.hero_desc}>
              I'm a technology student who enjoys creating websites and useful software. I code with passion and truly love what I do.
            </p>
            <div className={styles.hero_actions}>
              <Link to="/contact" className={styles.btn_primary}>Get In Touch</Link>
              <Link to="/news" className={styles.btn_secondary}>View Projects</Link>
            </div>
          </div>
          <div className={styles.hero_avatar}>
            <div className={styles.avatar_ring}>
              <img
                src="https://www.houv.online/src/image/image1.jpg"
                alt="Hak Yonghouv"
                className={styles.avatar_img}
              />
            </div>
            <div className={styles.avatar_glow}></div>
          </div>
        </div>
      </section>

      <section className={styles.purpose_section}>
        <div className={styles.section_container}>
          <div className={styles.section_header}>
            <h2 className={styles.section_title} style={{ fontFamily: 'khmer' }}>គោលបំណងនៃគេហទំព័រនេះ</h2>
            <p className={styles.section_subtitle}>Why this website was created</p>
          </div>
          <div className={styles.purpose_grid}>
            <div className={styles.purpose_card}>
              <div className={styles.purpose_icon}><FaRocket /></div>
              <h3 className={styles.purpose_title} style={{ fontFamily: 'khmer' }}>បង្ហាញស្នាដៃ & គម្រោង</h3>
              <p className={styles.purpose_desc} style={{ fontFamily: 'khmer' }}>
                បង្ហាញរាល់គេហទំព័រ និងកម្មវិធី (Applications) ដែលខ្ញុំបានអភិវឌ្ឍឡើង ដើម្បីដោះស្រាយបញ្ហាជាក់ស្តែង និងផ្តល់ជាដំណោះស្រាយមានប្រយោជន៍។
              </p>
            </div>
            <div className={styles.purpose_card}>
              <div className={styles.purpose_icon}><FaBullhorn /></div>
              <h3 className={styles.purpose_title} style={{ fontFamily: 'khmer' }}>ចែករំលែកព័ត៌មាន</h3>
              <p className={styles.purpose_desc} style={{ fontFamily: 'khmer' }}>
                ផ្តល់ការអាប់ដេតព័ត៌មានថ្មីៗ ក៏ដូចជាកំណែទម្រង់ផ្សេងៗនៃកម្មវិធីនីមួយៗ ដើម្បីឱ្យអ្នកប្រើប្រាស់ងាយស្រួលតាមដាន។
              </p>
            </div>
            <div className={styles.purpose_card}>
              <div className={styles.purpose_icon}><FaHandshake /></div>
              <h3 className={styles.purpose_title} style={{ fontFamily: 'khmer' }}>ការទំនាក់ទំនង & សហការ</h3>
              <p className={styles.purpose_desc} style={{ fontFamily: 'khmer' }}>
                បង្កើតឡើងដើម្បីជាស្ពានចម្លងក្នុងការបង្កើតទំនាក់ទំនង សាកសួរព័ត៌មាន ឬសហការគ្នាលើការបង្កើតគម្រោងថ្មីៗ។
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.skills_section}>
        <div className={styles.section_container}>
          <div className={styles.section_header}>
            <h2 className={styles.section_title}>Skills & Technologies</h2>
            <p className={styles.section_subtitle}>Tools and languages I use to build things</p>
          </div>
          <div className={styles.skills_grid} style={{ marginLeft: '5%' }} >
            {
              skills.map((skill, index) => (
                <div className={styles.skill_card} key={index}>
                  <div className={styles.skill_icon} style={{ color: skill.color }}>
                    {skill.icon}
                  </div>
                  <span className={styles.skill_name}>{skill.name}</span>
                </div>
              ))
            }
          </div>
        </div>
      </section >

      < section className={styles.timeline_section} >
        <div className={styles.section_container}>
          <div className={styles.section_header}>
            <h2 className={styles.section_title}>My Journey</h2>
            <p className={styles.section_subtitle}>Steps that shaped who I am today</p>
          </div>
          <div className={styles.timeline}>
            {timeline.map((item, index) => (
              <div className={styles.timeline_item} key={index}>
                <div className={styles.timeline_dot}></div>
                <div className={styles.timeline_content}>
                  <span className={styles.timeline_year}>{item.year}</span>
                  <h3 className={styles.timeline_title}>{item.title}</h3>
                  <p className={styles.timeline_desc}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section >

      < section className={styles.projects_section} >
        <div className={styles.section_container}>
          <div className={styles.section_header}>
            <h2 className={styles.section_title}>My Projects</h2>
            <p className={styles.section_subtitle}>A collection of tools and websites I've built</p>
          </div>
          <div className={styles.projects_grid}>
            {latestJson.latest.slice(0, 3).map((item) => (
              <Link
                key={item.id}
                to={`/news/info/${item.id}`}
                className={styles.project_card}
              >
                <div className={styles.project_img_wrap}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className={styles.project_img}
                  />
                  <div className={styles.project_overlay}>
                    <span className={styles.project_view}>
                      <FaExternalLinkAlt /> View
                    </span>
                  </div>
                </div>

                <div className={styles.project_info}>
                  <div className={styles.project_top}>
                    <h3 className={styles.project_title}>{item.title}</h3>
                    <span
                      className={styles.project_badge}
                      style={{
                        color: item.category === "Info" ? "#4fc3f7" : "#f687b3",
                        backgroundColor:
                          item.category === "Info"
                            ? "rgba(79,195,247,0.1)"
                            : "rgba(246,135,179,0.1)",
                        border:
                          item.category === "Info"
                            ? "1px solid rgba(79,195,247,0.25)"
                            : "1px solid rgba(246,135,179,0.25)",
                      }}
                    >
                      {item.category}
                    </span>
                  </div>

                  {item.description && (
                    <p className={styles.project_desc}>{item.description}</p>
                  )}

                  <span className={styles.project_date}>{item.date}</span>
                </div>
              </Link>
            ))}
          </div>
          <div className={styles.projects_cta}>
            <Link to="/news" className={styles.btn_primary}>See All Projects</Link>
          </div>
        </div>
      </section >

    </div >
  );
};

export default About;
