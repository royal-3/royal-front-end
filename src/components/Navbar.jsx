import React, { useState } from 'react';

const Navbar = ({ onOpenConsultation }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 w-full bg-surface-light/95 dark:bg-surface-dark/95 backdrop-blur-md border-b border-white/10">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 sm:h-20">
                    <div className="flex items-center gap-3">
                        <img src="/logo.jpg" alt="Royal Touchup Logo" className="h-16 w-auto object-contain" />
                    </div>

                    <div className="hidden lg:flex items-center space-x-8">
                        <a href="#" className="text-white hover:text-primary transition-colors text-sm font-medium tracking-wide uppercase">Home</a>
                        {/* Using IDs for sections for now as requested by user context implies single page sections mostly */}
                        <a href="#about-us" className="text-gray-300 hover:text-primary transition-colors text-sm font-medium tracking-wide uppercase">About Us</a>
                        <a href="#services" className="text-gray-300 hover:text-primary transition-colors text-sm font-medium tracking-wide uppercase">Services</a>
                        <a href="#footer" className="text-gray-300 hover:text-primary transition-colors text-sm font-medium tracking-wide uppercase">Contact</a>
                        <a href="#faqs" className="text-gray-300 hover:text-primary transition-colors text-sm font-medium tracking-wide uppercase">FAQs</a>
                        <a href="#" className="text-gray-300 hover:text-primary transition-colors text-sm font-medium tracking-wide uppercase">Review Us</a>
                    </div>
                    <div className="hidden sm:flex items-center">
                        <button
                            onClick={onOpenConsultation}
                            className="bg-metallic text-black text-sm font-bold py-2.5 px-6 rounded-lg shadow-[0_0_15px_rgba(191,149,63,0.3)] hover:shadow-[0_0_20px_rgba(191,149,63,0.5)] transition-shadow"
                        >
                            Get Quote
                        </button>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-text-main hover:text-primary p-2"
                        >
                            <span className="material-symbols-outlined">menu</span>
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden bg-surface-light border-t border-white/10 p-4 absolute w-full left-0">
                    <div className="flex flex-col gap-4">
                        <a href="#" className="text-gray-300 text-sm font-medium hover:text-primary transition-colors">Home</a>
                        <a href="#about" className="text-gray-300 text-sm font-medium hover:text-primary transition-colors">About</a>
                        <a href="#recent-works" className="text-gray-300 text-sm font-medium hover:text-primary transition-colors">Recent Works</a>
                        <a href="#services" className="text-gray-300 text-sm font-medium hover:text-primary transition-colors">Services</a>
                        <a href="#gallery" className="text-gray-300 text-sm font-medium hover:text-primary transition-colors">Gallery</a>
                        <a href="#faqs" className="text-gray-300 text-sm font-medium hover:text-primary transition-colors">FAQs</a>
                        <a href="#footer" className="text-gray-300 text-sm font-medium hover:text-primary transition-colors">Contact</a>
                        <button
                            onClick={onOpenConsultation}
                            className="bg-metallic text-black text-sm font-bold py-2.5 px-6 rounded-lg w-full"
                        >
                            Get Quote
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
