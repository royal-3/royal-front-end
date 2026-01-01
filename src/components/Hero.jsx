import React, { useState, useEffect } from 'react';
import api from '../api';

const Hero = ({ onOpenConsultation }) => {
    const [heroData, setHeroData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchHeroData = async () => {
            try {
                const response = await api.get('/hero/');
                if (response.data && response.data.length > 0) {
                    setHeroData(response.data[0]);
                }
            } catch (error) {
                console.error("Error fetching hero data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchHeroData();
    }, []);

    // Fallback static data
    const data = heroData || {
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYPKKkxl2PwYkW2vBuWPbyqKAaSY0S6bXFmRbP4OBj18LQr8LvlKh-VWcCjC6dEUG87u2FplLsIDPS9XPbITH1_57JYZ5-V_MVplDlWz8OGp-IK7VywY2oUtUYmjFVBO_x_WtCNmqAk4wns3F2jbz88jrEqkIKZSWQhIqPUcztbhtdGtPiOJIqZd8ASNtkPx6ZBk4uku0j740sDmwuOErynZ8MloNNgsbPzr-aqM_awtaOMC4Js00STxcFpI5gEX02ousfZ5PhEtQ",
        title: "ROYAL TOUCHUP",
        subtitle: "Comfort Meets Creativity",
        description: "We design spaces that feel good and work well. Personalized interior design tailored to your taste, lifestyle, and budget."
    };

    return (
        <div className="relative w-full">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
                <div
                    className="relative rounded-2xl overflow-hidden min-h-[750px] flex items-end justify-start bg-cover bg-center border border-white/10"
                    style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.8) 100%), url('${data.image}')` }}
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                    <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 max-w-[1280px] mx-auto w-full">
                        <div className="flex flex-col items-center w-full">
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-2 tracking-tight leading-tight animate-fade-in-up delay-100 font-display">
                                {data.title === "ROYAL TOUCHUP" ? (
                                    <>ROYAL <span className="text-metallic">TOUCHUP</span></>
                                ) : (
                                    data.title
                                )}
                            </h1>
                            <h2 className="w-full text-right pr-4 md:pr-12 lg:pr-20 text-primary-light text-lg md:text-xl font-medium tracking-[0.2em] mb-6 uppercase animate-fade-in-up">
                                {data.subtitle}
                            </h2>
                        </div>
                        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed animate-fade-in-up delay-200">
                           {data.description}
                        </p>
                        <div className="pt-4 pb-12">
                            <button
                                onClick={onOpenConsultation}
                                className="bg-metallic text-black text-base font-bold py-3 px-8 rounded-lg shadow-[0_0_20px_rgba(191,149,63,0.4)] flex items-center gap-2 hover:shadow-[0_0_30px_rgba(191,149,63,0.6)] transition-all"
                            >
                                Book a Consultation
                                <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
