import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Gallery = ({ preview = true }) => {
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

    // PREVIEW MODE (Carousel)
    if (preview) {
        return (
            <div id="gallery" className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="flex flex-col gap-2 mb-10 text-center items-center">
                    <h2 className="text-text-main text-3xl font-bold leading-tight tracking-tight">Our Gallery</h2>
                    <div className="h-1.5 w-24 bg-metallic rounded-full"></div>
                    <p className="text-text-muted mt-2">A glimpse of our finest work</p>
                </div>

                <div className="relative">
                    <Swiper
                        modules={[Autoplay, Pagination, Navigation]}
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        navigation={true}
                        loop={true}
                        className="mySwiper !pb-12"
                    >
                        {sections.map((section) => (
                            <SwiperSlide key={section.id}>
                                <div className="bg-background-paper p-6 rounded-2xl border border-text-muted/10 shadow-lg mx-4 md:mx-12">
                                    <h3 className="text-text-main text-2xl font-bold mb-6 border-l-4 border-primary pl-4 text-left">{section.title}</h3>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        {/* Show only first 4 images */}
                                        {section.images && section.images.slice(0, 4).map((img) => (
                                            <div key={img.id} className="aspect-square rounded-lg overflow-hidden border border-text-muted/10 relative group">
                                                <img
                                                    src={img.image}
                                                    alt={`${section.title} ${img.id}`}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className="mt-8 text-center">
                    <Link
                        to="/gallery"
                        className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-all duration-300 shadow-lg hover:shadow-primary/50"
                    >
                        View Full Gallery
                    </Link>
                </div>
            </div>
        );
    }

    // FULL MODE (Fallback if used as full component, though GalleryPage replaces this mostly)
    return (
        <div id="gallery" className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="flex flex-col gap-2 mb-10">
                <h2 className="text-text-main text-3xl font-bold leading-tight tracking-tight">Gallery</h2>
                <div className="h-1.5 w-24 bg-metallic rounded-full"></div>
            </div>

            {sections.map((section) => (
                <div key={section.id} className="mb-12 last:mb-0">
                    <h3 className="text-text-main text-xl font-bold mb-6 border-l-4 border-primary pl-4">{section.title}</h3>
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
