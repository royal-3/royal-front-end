import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';

const GalleryPage = () => {
    const [sections, setSections] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
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

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen pt-20">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center min-h-screen pt-20 text-red-500">
                {error}
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background-light dark:bg-background-dark pt-24 pb-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1280px] mx-auto">
                <div className="flex flex-col gap-2 mb-10">
                    <div className="flex justify-between items-end">
                        <div>
                            <h1 className="text-text-main text-4xl font-bold leading-tight tracking-tight mb-2">Full Gallery</h1>
                            <div className="h-1.5 w-24 bg-metallic rounded-full"></div>
                        </div>
                        <Link to="/" className="text-primary hover:text-primary-dark transition-colors font-semibold">
                            &larr; Back to Home
                        </Link>
                    </div>
                    <p className="text-text-muted mt-4 text-lg">Browse our complete collection of works.</p>
                </div>

                {sections.map((section) => (
                    <div key={section.id} className="mb-16 last:mb-0">
                        <h3 className="text-text-main text-2xl font-bold mb-6 border-l-4 border-primary pl-4">{section.title}</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {section.images && section.images.map((img) => (
                                <div key={img.id} className="aspect-square rounded-lg overflow-hidden border border-text-muted/10 group relative shadow-md hover:shadow-xl transition-all duration-300">
                                    <img
                                        src={img.image}
                                        alt={`${section.title} ${img.id}`}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 pointer-events-none"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GalleryPage;
