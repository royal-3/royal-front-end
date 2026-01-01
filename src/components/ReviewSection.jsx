import React, { useState, useEffect } from 'react';
import api from '../api';

const ReviewSection = () => {
    const [reviews, setReviews] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        rating: 5,
        comment: '',
    });
    const [status, setStatus] = useState('idle'); // idle, submitting, success, error

    useEffect(() => {
        fetchReviews();
    }, []);

    const fetchReviews = async () => {
        try {
            const response = await api.get('/reviews/');
            setReviews(response.data);
        } catch (error) {
            console.error('Error fetching reviews:', error);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleRatingChange = (rating) => {
        setFormData({ ...formData, rating });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');
        try {
            await api.post('/reviews/', formData);
            setStatus('success');
            setFormData({ name: '', rating: 5, comment: '' });
            fetchReviews();
            setTimeout(() => {
                setStatus('idle');
                setIsModalOpen(false);
            }, 2000);
        } catch (error) {
            console.error('Error submitting review:', error);
            setStatus('error');
        }
    };

    // Duplicate reviews for seamless marquee if there are enough reviews, otherwise just show them
    // If reviews are empty, we won't show the marquee
    const marqueeReviews = reviews.length > 0 ? [...reviews, ...reviews, ...reviews, ...reviews] : [];

    return (
        <section id="reviews" className="py-24 bg-background-light overflow-hidden relative">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 mb-12 flex flex-col md:flex-row justify-between items-center gap-6">
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold text-metallic mb-3">Client Stories</h2>
                    <p className="text-gray-400">Hear directly from those who built their dream homes with us.</p>
                </div>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-zinc-800 hover:bg-zinc-700 text-white border border-white/10 px-8 py-3 rounded-full transition-all flex items-center gap-2 font-medium group"
                >
                    <span className="material-symbols-outlined group-hover:text-primary transition-colors">rate_review</span>
                    Write a Review
                </button>
            </div>

            {/* Marquee Slider */}
            <div className="relative w-full">
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background-light to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background-light to-transparent z-10 pointer-events-none"></div>

                {reviews.length > 0 ? (
                    <div className="flex gap-6 animate-marquee w-max px-4">
                        {marqueeReviews.map((review, index) => (
                            <div
                                key={`${review.id}-${index}`}
                                className="w-[350px] md:w-[450px] bg-surface-dark border border-white/5 p-8 rounded-2xl flex-shrink-0 hover:border-primary/30 transition-colors"
                            >
                                <div className="flex justify-between items-start mb-6">
                                    <div className="flex gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <span key={i} className={`material-symbols-outlined text-lg ${i < review.rating ? 'text-primary' : 'text-gray-700'}`}>
                                                star
                                            </span>
                                        ))}
                                    </div>
                                    <span className="material-symbols-outlined text-gray-700 text-4xl opacity-50">format_quote</span>
                                </div>
                                <p className="text-gray-300 text-lg mb-6 leading-relaxed line-clamp-4 italic">"{review.comment}"</p>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-primary font-bold text-lg">
                                        {review.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold">{review.name}</h4>
                                        <p className="text-gray-500 text-xs">Verified Client</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center text-gray-500 py-10">
                        No reviews yet. Be the first to share your experience!
                    </div>
                )}
            </div>

            {/* Review Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
                    <div className="bg-surface-light border border-white/10 rounded-2xl w-full max-w-md p-6 relative shadow-2xl">
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-white"
                        >
                            <span className="material-symbols-outlined">close</span>
                        </button>

                        <h3 className="text-2xl font-bold text-white mb-6">Share Your Experience</h3>

                        {status === 'success' ? (
                            <div className="bg-green-500/10 text-green-500 p-6 rounded-lg text-center">
                                <span className="material-symbols-outlined text-4xl mb-2">check_circle</span>
                                <p className="font-bold text-lg">Thank You!</p>
                                <p>Your review has been submitted successfully.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                                <div>
                                    <label className="block text-gray-400 text-xs font-bold mb-1 uppercase">Your Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                        placeholder="Enter your name"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-400 text-xs font-bold mb-1 uppercase">Rating</label>
                                    <div className="flex gap-1">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <button
                                                key={star}
                                                type="button"
                                                onClick={() => handleRatingChange(star)}
                                                className={`focus:outline-none transition-transform hover:scale-110 p-1 ${star <= formData.rating ? 'text-primary' : 'text-gray-700'
                                                    }`}
                                            >
                                                <span className="material-symbols-outlined text-3xl">star</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-gray-400 text-xs font-bold mb-1 uppercase">Your Review</label>
                                    <textarea
                                        name="comment"
                                        value={formData.comment}
                                        onChange={handleChange}
                                        required
                                        rows="4"
                                        className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                                        placeholder="Share your experience..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === 'submitting'}
                                    className="bg-metallic text-black font-bold py-3 rounded-lg shadow-[0_0_15px_rgba(191,149,63,0.3)] mt-2 hover:opacity-90 transition-opacity disabled:opacity-50"
                                >
                                    {status === 'submitting' ? 'Submitting...' : 'Submit Review'}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
};

export default ReviewSection;
