import React, { useEffect, useMemo, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import {
    ArrowLeft,
    ExternalLink,
    Calendar,
    Clock,
    Sparkles,
    ChevronRight,
    Globe
} from 'lucide-react';

import style from '../../styles/private/PageFullinfomationWeb.module.css';

const API_URL = import.meta.env.VITE_API_BACKEND || 'http://localhost:5000';

const PageFullinfomationWeb = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [allItems, setAllItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        AOS.init({
            duration: 700,
            once: true,
            easing: 'ease-in-out'
        });
    }, []);


    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, [id]);


    // Fetch both latest and update from backend
    useEffect(() => {
        const fetchAll = async () => {
            try {
                setLoading(true);
                const [latestRes, updateRes] = await Promise.all([
                    fetch(`${API_URL}/api/latest`),
                    fetch(`${API_URL}/api/update`)
                ]);

                if (!latestRes.ok) throw new Error('Failed to fetch latest data');
                if (!updateRes.ok) throw new Error('Failed to fetch update data');

                const latestJson = await latestRes.json();
                const updateJson = await updateRes.json();

                const latestItems = latestJson.map(item => ({
                    ...item,
                    source: 'latest'
                }));

                const updateItems = updateJson.map(item => ({
                    ...item,
                    source: 'update'
                }));

                setAllItems([...latestItems, ...updateItems]);
            } catch (err) {
                console.error('PageFullinfomationWeb fetch error:', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchAll();
    }, []);


    const currentItem = useMemo(() => {
        return allItems.find(
            item => String(item.id) === String(id)
        );
    }, [allItems, id]);


    const suggestions = useMemo(() => {
        const pool = allItems.filter(
            item => String(item.id) !== String(id)
        );

        const shuffled = [...pool]
            .sort(() => Math.random() - 0.5);

        return shuffled.slice(0, 3);

    }, [allItems, id]);


    // Loading state
    if (loading) {
        return (
            <div className={style.container_fullweb}>
                <div
                    className={style.notFound}
                    data-aos="fade-up"
                >
                    <Sparkles size={40} color="#4fc3f7" />
                    <h2 style={{ fontFamily: 'khmer', color: '#4fc3f7' }}>
                        កំពុងទាញទិន្នន័យ...
                    </h2>
                </div>
            </div>
        );
    }

    // Error state
    if (error) {
        return (
            <div className={style.container_fullweb}>
                <div
                    className={style.notFound}
                    data-aos="fade-up"
                >
                    <Sparkles size={40} color="#fc8181" />
                    <h2 style={{ fontFamily: 'khmer', color: '#fc8181' }}>
                        មានបញ្ហាក្នុងការទាញទិន្នន័យ
                    </h2>
                    <button
                        className={style.btnBack}
                        onClick={() => navigate('/news')}
                        style={{ fontFamily: 'khmer' }}
                    >
                        <ArrowLeft size={18} />
                        ត្រឡប់ទៅទំព័រ News
                    </button>
                </div>
            </div>
        );
    }


    if (!currentItem) {

        return (
            <div className={style.container_fullweb}>

                <div
                    className={style.notFound}
                    data-aos="fade-up"
                >

                    <Sparkles
                        size={40}
                        color="#4fc3f7"
                    />

                    <h2 style={{ fontFamily: 'khmer' }}>
                        រកមិនឃើញព័ត៌មាននេះទេ
                    </h2>


                    <button
                        className={style.btnBack}
                        onClick={() => navigate('/news')}
                        style={{ fontFamily: 'khmer' }}
                    >

                        <ArrowLeft size={18} />
                        ត្រឡប់ទៅទំព័រ News

                    </button>


                </div>

            </div>
        );
    }



    const fullInfo = currentItem.fullInfomation?.contect_1;

    const aboutUpdate =
        currentItem.fullInfomation?.about_update
        ||
        currentItem.about_update;


    const descBlock = fullInfo?.description;



    return (<div style={{ backgroundColor: '#15142bff', paddingTop: '100px' }}>

        <div className={style.container_fullweb}>
            <button
                className={style.btnBack}
                onClick={() => navigate(-1)}
                data-aos="fade-right"
                style={{ backgroundColor: '#15142bff', color: 'white', fontFamily: 'khmer' }}
            >
                <ArrowLeft size={18} />
                ត្រឡប់ក្រោយ
            </button>
            <div className={style.mainGrid}>
                {/* LEFT */}
                <div
                    className={style.leftPanel}
                    data-aos="fade-up"
                >
                    <div className={style.heroImage}>
                        <img
                            src={
                                fullInfo?.image
                                ||
                                currentItem.image
                            }
                            alt={currentItem.title}
                        />
                        <div className={style.heroOverlay} />
                        <div className={style.heroBadge}>
                            <Sparkles size={14} />
                            {currentItem.category}
                        </div>
                    </div>
                    <div className={style.heroContent}>
                        <h1 className={style.heroTitle}>
                            {
                                fullInfo?.title
                                ||
                                currentItem.title
                            }
                        </h1>
                        <div className={style.metaRow}>
                            <span className={style.metaItem}>
                                <Calendar size={15} />
                                {currentItem.date}
                            </span>
                            {
                                fullInfo?.url_web && (
                                    <a
                                        href={fullInfo.url_web}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={style.metaLink}
                                        style={{ fontFamily: 'khmer' }}
                                    >
                                        <Globe size={15} />
                                        មើល Website
                                        <ExternalLink size={13} />

                                    </a>

                                )
                            }
                        </div>
                        {
                            currentItem.description && (

                                <p className={style.leadDescription} style={{ fontFamily: 'khmer' }}>

                                    {currentItem.description}

                                </p>

                            )
                        }
                        {
                            descBlock ? (

                                <div className={style.richContent}>
                                    {['1', '2', '3', '4', '5', '6'].map((num) => (
                                        <React.Fragment key={num}>

                                            {descBlock[`p${num}`] && (
                                                <p
                                                    className={style.paragraph}
                                                    style={{ fontFamily: 'khmer' }}
                                                    dangerouslySetInnerHTML={{
                                                        __html: descBlock[`p${num}`]
                                                    }}
                                                />
                                            )}

                                            {descBlock[`image${num}`] && (
                                                <img
                                                    src={descBlock[`image${num}`]}
                                                    alt={`Image ${num}`}
                                                    className={style.contentImage}
                                                    loading="lazy"
                                                />
                                            )}

                                        </React.Fragment>
                                    ))}
                                </div>
                            )
                                :
                                (
                                    !currentItem.description && (
                                        <div className={style.emptyState} style={{ fontFamily: 'khmer' }}>
                                            <Clock size={22} />
                                            <p>
                                                ព័ត៌មានលម្អិតសម្រាប់ website នេះកំពុងរៀបចំ សូមរង់ចាំការ Update បន្ថែម។
                                            </p>
                                        </div>
                                    )
                                )
                        }
                        {
                            aboutUpdate && (
                                <div className={style.updateSection}>

                                    <h3
                                        className={style.updateTitle}
                                        style={{ fontFamily: 'khmer' }}
                                    >
                                        <Clock size={18} />
                                        ប្រវត្តិការ Update
                                    </h3>

                                    {
                                        Object.entries(aboutUpdate)
                                            .filter(([key]) => /^p\d+$/.test(key))
                                            .sort((a, b) => {
                                                const numA = Number(a[0].replace("p", ""));
                                                const numB = Number(b[0].replace("p", ""));
                                                return numA - numB;
                                            })
                                            .map(([key, value]) => (
                                                <p
                                                    key={key}
                                                    className={style.updateIntro}
                                                    style={{ fontFamily: "khmer" }}
                                                >
                                                    {value}
                                                </p>
                                            ))
                                    }

                                    <div className={style.timeline}>
                                        ...
                                    </div>

                                </div>
                            )
                        }
                    </div>
                </div>
                {/* RIGHT */}
                <div
                    className={style.rightPanel}
                    data-aos="fade-left"
                >
                    <h3 className={style.rightTitle} style={{ fontFamily: 'khmer' }}>
                        <Sparkles size={16} />
                        Website ផ្សេងទៀត
                    </h3>
                    <div className={style.suggestList}>
                        {
                            suggestions.map((item, index) => (
                                <Link
                                    to={`/news/info/${item.id}`}
                                    key={item.id}
                                    className={style.suggestCard}
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                >
                                    <div className={style.suggestImage}>
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className={style.suggestInfo}>
                                        <h4 className={style.suggestCardTitle}>
                                            {item.title}
                                        </h4>
                                        <p className={style.suggestCardDate}>
                                            {item.date}
                                        </p>
                                    </div>
                                    <ChevronRight
                                        size={16}
                                        className={style.suggestArrow}
                                    />
                                </Link>
                            ))
                        }
                    </div>
                    <button
                        className={style.seeAllBtn}
                        onClick={() => navigate('/news')}
                        style={{ fontFamily: 'khmer' }}
                    >
                        មើលទាំងអស់
                        <ChevronRight size={16} />
                    </button>
                </div>
            </div>
        </div>
    </div>
    );
};



export default PageFullinfomationWeb;