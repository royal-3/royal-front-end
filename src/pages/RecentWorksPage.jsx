import React, { useEffect, useState } from 'react';
import api from '../api';

const RecentWorksPage = () => {
    const [works, setWorks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        const fetchWorks = async () => {
            try {
                const response = await api.get('/recent-works/');
                setWorks(response.data);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching recent works:', err);
                setError('Failed to load recent works.');
                setLoading(false);
            }
        };

        fetchWorks();

        // Scroll to top on mount
        window.scrollTo(0, 0);
    }, []);

    const openLightbox = (image) => {
        setSelectedImage(image);
    };

    const closeLightbox = () => {
        setSelectedImage(null);
    };

    if (loading) return <div className="text-white text-center py-20 min-h-screen pt-32">Loading projects...</div>;
    if (error) return <div className="text-red-500 text-center py-20 min-h-screen pt-32">{error}</div>;

    return (
        <div className="min-h-screen pt-24 pb-16 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-2 mb-10">
                <h1 className="text-text-main text-4xl font-bold leading-tight tracking-tight">All Projects</h1>
                <div className="h-1.5 w-24 bg-metallic rounded-full"></div>
                <p className="text-gray-400 mt-2">Explore our complete portfolio of interior design projects.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {works.map((work) => (
                    <div key={work.id} className="flex flex-col gap-4 p-6 border border-white/10 rounded-xl bg-surface-light">
                        <h2 className="text-2xl font-bold text-primary-light">{work.title}</h2>
                        <p className="text-gray-300">{work.description}</p>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-2">
                            {work.images && work.images.map((img) => (
                                <div
                                    key={img.id}
                                    className="aspect-square rounded-lg overflow-hidden cursor-zoom-in border border-white/5 relative group"
                                    onClick={() => openLightbox(img.image)}
                                >
                                    <img
                                        src={img.image}
                                        alt={`${work.title}`}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4"
                    onClick={closeLightbox}
                >
                    <button
                        className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
                        onClick={closeLightbox}
                    >
                        <span className="material-symbols-outlined text-4xl">close</span>
                    </button>
                    <img
                        src={selectedImage}
                        alt="Full size"
                        className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </div>
    );
};

export default RecentWorksPage;
