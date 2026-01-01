import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';

const HomeRecentWorks = () => {
    const [works, setWorks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    // State to track current image index for each work item
    const [imageIndices, setImageIndices] = useState({});

    useEffect(() => {
        const fetchWorks = async () => {
            try {
                const response = await api.get('/recent-works/');
                // Only take the first 4 items for the home page
                setWorks(response.data.slice(0, 4));

                // Initialize image indices to 0
                const initialIndices = {};
                response.data.slice(0, 4).forEach(work => {
                    initialIndices[work.id] = 0;
                });
                setImageIndices(initialIndices);

                setLoading(false);
            } catch (err) {
                console.error('Error fetching recent works:', err);
                setError('Failed to load recent works.');
                setLoading(false);
            }
        };

        fetchWorks();
    }, []);

    // Cycle images effect
    useEffect(() => {
        const interval = setInterval(() => {
            setWorks(currentWorks => {
                const nextIndices = {};
                currentWorks.forEach(work => {
                    if (work.images && work.images.length > 1) {
                        setImageIndices(prev => ({
                            ...prev,
                            [work.id]: (prev[work.id] + 1) % work.images.length
                        }));
                    }
                });
                return currentWorks;
            });
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, [works]);


    if (loading) return <div className="text-white text-center py-20">Loading projects...</div>;
    if (error) return <div className="text-red-500 text-center py-20">{error}</div>;

    return (
        <div id="recent-works" className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
            <div className="flex flex-col gap-2 mb-6">
                <div className="flex flex-col gap-2">
                    <h2 className="text-text-main text-3xl font-bold leading-tight tracking-tight uppercase">Our Portfolio</h2>
                    <div className="h-1.5 w-24 bg-metallic rounded-full"></div>
                </div>
                <h3 className="text-xl text-primary font-bold mt-2">Real Spaces, Remarkable Designs</h3>
                <div className="text-gray-400 mt-2 max-w-3xl leading-relaxed">
                    <p>
                        Explore our portfolio to see how we turn ideas into stunning spaces. From modern living rooms to elegant offices, each project reflects our commitment to style, comfort, and functionality. We specialize in creating interiors that are both beautiful and practical, tailored to each client’s unique taste and lifestyle. Every design tells a story — from color palettes and textures to lighting and layout. Whether it’s a cozy apartment or a spacious commercial space, our work showcases creativity, detail, and passion. Take a look and get inspired for your own dream space. Your perfect interior starts here.
                    </p>
                </div>
            </div>

            {/* Updated Grid: lg:grid-cols-4 for smaller cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {works.map((work) => {
                    const currentIndex = imageIndices[work.id] || 0;
                    const currentImage = work.images && work.images.length > 0 ? work.images[currentIndex].image : null;

                    return (
                        <div
                            key={work.id}
                            onClick={() => navigate('/recent-works')}
                            className="group relative overflow-hidden rounded-xl h-[250px] border border-white/10 cursor-pointer"
                        >
                            {currentImage ? (
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{ backgroundImage: `url(${currentImage})`, transition: 'background-image 0.5s ease-in-out' }}
                                >
                                </div>
                            ) : (
                                <div className="absolute inset-0 bg-surface-light flex items-center justify-center text-gray-500">
                                    No Image
                                </div>
                            )}

                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <h3 className="text-primary-light text-lg font-bold truncate">{work.title}</h3>
                                <p className="text-gray-300 text-xs mt-1 line-clamp-2">{work.description}</p>
                            </div>

                            {/* Dots indicator for slideshow if multiple images */}
                            {work.images && work.images.length > 1 && (
                                <div className="absolute bottom-2 right-2 flex gap-1 z-10">
                                    {work.images.map((_, idx) => (
                                        <div
                                            key={idx}
                                            className={`w-1.5 h-1.5 rounded-full ${idx === currentIndex ? 'bg-primary' : 'bg-white/50'}`}
                                        ></div>
                                    ))}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
            <div className="flex justify-center mt-10">
                <button
                    onClick={() => navigate('/recent-works')}
                    className="flex items-center gap-2 border border-white/20 hover:border-primary text-text-main hover:text-primary px-8 py-3 rounded-lg text-sm font-bold transition-all duration-300"
                >
                    View All Projects
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
            </div>
        </div>
    );
};

export default HomeRecentWorks;
