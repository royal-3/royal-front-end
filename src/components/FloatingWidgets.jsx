import React, { useState, useEffect } from 'react';
import ConsultationForm from './ConsultationForm';

const FloatingWidgets = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show the button after scrolling down a bit
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const toggleForm = () => {
        setIsFormOpen(!isFormOpen);
    };

    if (!isVisible) {
        return null;
    }

    return (
        <>
            {/* Left Side Trigger Button */}
            <div className="fixed bottom-6 left-6 z-50">
                <button
                    onClick={toggleForm}
                    className="flex items-center gap-2 px-4 py-3 bg-primary text-white font-bold rounded-full shadow-lg hover:bg-primary-dark transition-all duration-300 hover:scale-105 hover:shadow-primary/50"
                >
                    <span className="material-symbols-outlined">edit_document</span>
                    <span className="hidden sm:inline">Get a Quote</span>
                </button>
            </div>

            {/* Slide-in Quote Form - Bottom Left (just above button or center) */}
            {/* User requested "in touch then the quote card". Let's show it near the button or centered. 
                Original was bottom-right. Let's keep it somewhat near the trigger or center screen for focus.
                Let's make it center-screen or slide from left. Slide from left seems appropriate given the button is on left.
            */}
            <div
                className={`fixed top-1/2 -translate-y-1/2 left-4 z-40 transition-transform duration-500 ease-in-out ${isFormOpen ? 'translate-x-0' : '-translate-x-[calc(100%+2rem)]'
                    }`}
            >
                <div className="bg-surface-light border border-white/10 rounded-2xl w-full max-w-sm p-6 relative shadow-2xl ml-4 sm:ml-0">
                    <button
                        onClick={toggleForm}
                        className="absolute top-2 right-2 text-gray-400 hover:text-white bg-black/50 rounded-full p-1 transition-colors"
                        title="Close"
                    >
                        <span className="material-symbols-outlined text-sm">close</span>
                    </button>

                    <h3 className="text-xl font-bold text-white mb-4">Book a Free Consultation</h3>
                    <ConsultationForm onSuccess={() => setIsFormOpen(false)} />
                </div>
            </div>

            {/* WhatsApp Button - Bottom Right (Fixed) */}
            <div className="fixed bottom-6 right-6 z-50">
                <a
                    href="https://wa.me/919876543210" // Replace with actual number
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:scale-110 transition-transform hover:shadow-[#25D366]/50"
                    aria-label="Chat on WhatsApp"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="currentColor"
                        className="text-white"
                        viewBox="0 0 16 16"
                    >
                        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                    </svg>
                </a>
            </div>
        </>
    );
};

export default FloatingWidgets;
