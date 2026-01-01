import React, { useState } from 'react';

const BusinessCard = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div
            className="relative w-[360px] h-[220px] sm:w-[500px] sm:h-[300px] cursor-pointer group perspective-1000"
            onClick={handleFlip}
        >
            <div
                className={`relative w-full h-full duration-700 preserve-3d transition-transform ${isFlipped ? 'rotate-y-180' : ''}`}
                style={{ transformStyle: 'preserve-3d' }}
            >

                {/* FRONT FACE - Logo & Contact Info */}
                <div
                    className="absolute inset-0 w-full h-full backface-hidden"
                    style={{ backfaceVisibility: 'hidden' }}
                >
                    {/* Container with Black Background & Gold Border */}
                    <div className="w-full h-full bg-[#111] rounded-2xl border-2 border-[#D4AF37] p-6 text-[#D4AF37] shadow-xl flex flex-col sm:flex-row items-center justify-between relative overflow-hidden">

                        {/* Decorative Glow */}
                        <div className="absolute top-[-50%] left-[-50%] w-full h-full bg-[#D4AF37]/5 blur-3xl rounded-full"></div>

                        {/* Left Side: Logo Area - Hidden on Mobile */}
                        <div className="hidden sm:flex flex-col items-center justify-center flex-1 text-center sm:text-left z-10 sm:border-r border-[#D4AF37]/30 sm:pr-6 w-full sm:w-auto mb-4 sm:mb-0">
                            {/* Logo Icon Mockup */}
                            <div className="text-4xl sm:text-5xl mb-2">
                                <span className="material-symbols-outlined text-[#D4AF37]" style={{ fontSize: 'inherit' }}>home_app_logo</span>
                            </div>

                            <h2 className="text-2xl sm:text-3xl font-bold tracking-wider leading-none mb-1">RT</h2>
                            <h3 className="text-lg sm:text-xl font-semibold tracking-widest whitespace-nowrap">ROYAL TOUCHUP</h3>
                            <p className="text-[8px] sm:text-[10px] tracking-[0.2em] mt-1 opacity-80 text-white">COMFORT MEETS CREATIVITY</p>
                        </div>

                        {/* Right Side: Contact Details */}
                        <div className="flex flex-col justify-center w-full z-10 h-full sm:h-auto sm:pl-6">
                            {/* Mobile: Centered Block, Left Aligned Items */}
                            <div className="w-fit mx-auto sm:w-full sm:mx-0 flex flex-col space-y-4 sm:space-y-3">
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-[#D4AF37] text-2xl sm:text-lg">call</span>
                                    <div className="text-sm sm:text-sm text-white text-left">
                                        <p>7278087172</p>
                                        <p>9171837878</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-[#D4AF37] text-2xl sm:text-lg">mail</span>
                                    <p className="text-sm sm:text-sm text-white text-left">royaltouchup3@gmail.com</p>
                                </div>

                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-[#D4AF37] text-2xl sm:text-lg">public</span>
                                    <p className="text-sm sm:text-sm text-white text-left">royaltouchup.co.in</p>
                                </div>
                            </div>
                        </div>

                        <div className="absolute bottom-2 right-4 text-[9px] text-[#D4AF37]/50 uppercase tracking-widest animate-pulse">
                            Click to View Services &rarr;
                        </div>
                    </div>
                </div>

                {/* BACK FACE - Services */}
                <div
                    className="absolute inset-0 w-full h-full backface-hidden rotate-y-180"
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                >
                    <div className="w-full h-full bg-[#111] rounded-2xl border-2 border-[#D4AF37] p-6 text-[#D4AF37] shadow-xl flex flex-col relative overflow-hidden">

                        {/* Header */}
                        <div className="text-center mb-4 z-10">
                            <h3 className="text-xl sm:text-2xl font-bold tracking-widest uppercase border-b-2 border-[#D4AF37] pb-1 inline-block">Our Services</h3>
                        </div>

                        {/* Content Grid */}
                        <div className="grid grid-cols-2 gap-x-4 gap-y-2 flex-grow content-center items-center text-[10px] sm:text-xs font-semibold z-10">
                            <div className="flex items-center gap-2"><span className="text-[#D4AF37]">&gt;</span> <span className="text-white">FALSE CEILING</span></div>
                            <div className="flex items-center gap-2 justify-end"><span className="text-white">WARDROBE DESIGN</span> <span className="text-[#D4AF37]">&lt;</span></div>

                            <div className="flex items-center gap-2"><span className="text-[#D4AF37]">&gt;</span> <span className="text-white">MODULAR KITCHEN</span></div>
                            <div className="flex items-center gap-2 justify-end"><span className="text-white">WATER PURIFIER</span> <span className="text-[#D4AF37]">&lt;</span></div>

                            <div className="flex items-center gap-2"><span className="text-[#D4AF37]">&gt;</span> <span className="text-white">WALL PAINT / PAPER</span></div>
                            <div className="flex items-center gap-2 justify-end"><span className="text-white">CHIMNEY</span> <span className="text-[#D4AF37]">&lt;</span></div>

                            <div className="flex items-center gap-2"><span className="text-[#D4AF37]">&gt;</span> <span className="text-white">FURNITURE LAYOUT</span></div>
                            <div className="flex items-center gap-2 justify-end"><span className="text-white">COMPLETE INTERIOR</span> <span className="text-[#D4AF37]">&lt;</span></div>
                        </div>

                        {/* Bottom Arch / Address */}
                        <div className="mt-auto pt-2 text-center z-10">
                            <div className="text-[9px] sm:text-[10px] text-white/90 italic border-t border-[#D4AF37]/30 pt-2">
                                Address: Gayeshpur, Kataganj, Kalyani - 741250
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default BusinessCard;
