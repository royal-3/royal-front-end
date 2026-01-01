import React, { useEffect, useState } from 'react';
import api from '../api';

const Gallery = () => {
    const [sections, setSections] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchGallery = async () => {
            try {
                const response = await api.get('/gallery/');
                setSections(response.data);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching gallery:', err);
                setError('Failed to load gallery.');
                setLoading(false);
            }
        };

        fetchGallery();
    }, []);

    if (loading) return null; // Or loader
    if (error) return null; // Or error message

    return (
        <div id="gallery" className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="flex flex-col gap-2 mb-10">
                <h2 className="text-text-main text-3xl font-bold leading-tight tracking-tight">Gallery</h2>
                <div className="h-1.5 w-24 bg-metallic rounded-full"></div>
            </div>

            {sections.map((section) => (
                <div key={section.id} className="mb-12 last:mb-0">
                    <h3 className="text-white text-xl font-bold mb-6 border-l-4 border-primary pl-4">{section.title}</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {section.images && section.images.map((img) => (
                            <div key={img.id} className="aspect-square rounded-lg overflow-hidden border border-white/10 group relative">
                                <img
                                    src={img.image}
                                    alt={`${section.title} ${img.id}`}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Gallery;
