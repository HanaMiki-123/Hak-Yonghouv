import React, { useEffect, useState } from 'react';
import '../styles/private/MobileBlock.css';

const MobileBlock = () => {
    const [mounted, setMounted] = useState(false);
    const [dots, setDots] = useState([]);

    useEffect(() => {
        setMounted(true);

        // Generate floating particles
        const generatedDots = Array.from({ length: 20 }, (_, i) => ({
            id: i,
            left: Math.random() * 100,
            top: Math.random() * 100,
            size: Math.random() * 6 + 3,
            duration: Math.random() * 4 + 3,
            delay: Math.random() * 4,
        }));
        setDots(generatedDots);
    }, []);

    return (
        <div className={`mobile-block-overlay ${mounted ? 'mounted' : ''}`}>
            {/* Animated Background */}
            <div className="mb-bg-gradient"></div>
            <div className="mb-bg-grid"></div>

            {/* Floating Particles */}
            <div className="mb-particles">
                {dots.map((dot) => (
                    <div
                        key={dot.id}
                        className="mb-particle"
                        style={{
                            left: `${dot.left}%`,
                            top: `${dot.top}%`,
                            width: `${dot.size}px`,
                            height: `${dot.size}px`,
                            animationDuration: `${dot.duration}s`,
                            animationDelay: `${dot.delay}s`,
                        }}
                    />
                ))}
            </div>

            {/* Glowing orbs */}
            <div className="mb-orb mb-orb-1"></div>
            <div className="mb-orb mb-orb-2"></div>
            <div className="mb-orb mb-orb-3"></div>

            {/* Main Content Card */}
            <div className="mb-card">
                {/* Animated Computer Icon */}
                <div className="mb-icon-wrapper">
                    <div className="mb-icon-ring mb-ring-1"></div>
                    <div className="mb-icon-ring mb-ring-2"></div>
                    <div className="mb-icon-ring mb-ring-3"></div>
                    <div className="mb-icon-container">
                        <svg
                            className="mb-computer-icon"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
                            <path d="M8 21H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M12 17V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
                            <path d="M9.5 10H7M17 10H14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M12 7.5V5M12 15V12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>

                        {/* Animated cross-out for mobile */}
                        <div className="mb-cross-container">
                            <svg
                                className="mb-phone-icon"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect x="5" y="2" width="14" height="20" rx="3" stroke="currentColor" strokeWidth="1.5" />
                                <circle cx="12" cy="18" r="1" fill="currentColor" />
                            </svg>
                            <div className="mb-cross-line"></div>
                        </div>
                    </div>
                </div>

                {/* Text Content */}
                <div className="mb-content">
                    <div className="mb-badge">
                        <span className="mb-badge-dot"></span>
                        <span>Desktop Only</span>
                    </div>

                    <h1 className="mb-title">
                        <span className="mb-title-line1">គេហទំព័រនេះ</span>
                        <span className="mb-title-highlight">គឺតម្រូវឱ្យប្រើ</span>
                        <span className="mb-title-line2">Computer</span>
                    </h1>

                    <p className="mb-desc-km">
                        សូមអភ័យទោស! គេហទំព័រនេះត្រូវបានរចនាសម្រាប់ប្រើប្រាស់តែ
                        <strong> Computer (Desktop / Laptop) </strong>
                        ប៉ុណ្ណោះ។ សូម​បើក​គេហទំព័រ​នេះ​ម្តង​ទៀត​នៅ​លើ Computer របស់​អ្នក។
                    </p>

                    <p className="mb-desc-en">
                        This website is optimized for <strong>Desktop & Laptop</strong> computers only.
                        Please visit us on a computer for the best experience.
                    </p>

                    {/* Divider */}
                    <div className="mb-divider">
                        <span className="mb-divider-line"></span>
                        <span className="mb-divider-icon">💻</span>
                        <span className="mb-divider-line"></span>
                    </div>

                    {/* Device Icons */}
                    <div className="mb-devices">
                        <div className="mb-device-item mb-device-ok">
                            <div className="mb-device-icon">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="2" y="4" width="20" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
                                    <path d="M8 21H16M12 17V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </div>
                            <span>Desktop</span>
                            <div className="mb-check">✓</div>
                        </div>
                        <div className="mb-device-item mb-device-ok">
                            <div className="mb-device-icon">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="3" y="5" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
                                    <path d="M11 19h2M8 21h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </div>
                            <span>Laptop</span>
                            <div className="mb-check">✓</div>
                        </div>
                        <div className="mb-device-item mb-device-no">
                            <div className="mb-device-icon">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="4" y="2" width="16" height="20" rx="3" stroke="currentColor" strokeWidth="1.5" />
                                    <circle cx="12" cy="18.5" r="1" fill="currentColor" />
                                </svg>
                            </div>
                            <span>Tablet</span>
                            <div className="mb-cross">✕</div>
                        </div>
                        <div className="mb-device-item mb-device-no">
                            <div className="mb-device-icon">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="6" y="2" width="12" height="20" rx="3" stroke="currentColor" strokeWidth="1.5" />
                                    <circle cx="12" cy="18.5" r="1" fill="currentColor" />
                                </svg>
                            </div>
                            <span>Mobile</span>
                            <div className="mb-cross">✕</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom watermark */}
            <div className="mb-watermark" style={{ marginBottom: '50px' }}>
                <span>© Hak Yonghouv Website</span>
            </div>
        </div>
    );
};

export default MobileBlock;
