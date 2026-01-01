import React from 'react';

const AboutSection = () => {
    return (
        <section id="about-us" className="py-20 bg-background-light">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

                {/* About Us Block */}
                <div className="flex flex-col md:flex-row gap-12 items-center mb-24">
                    <div className="w-full md:w-1/2">
                        <div className="flex flex-col gap-2 mb-6">
                            <h2 className="text-text-main text-3xl font-bold leading-tight tracking-tight uppercase">About Us</h2>
                            <div className="h-1.5 w-24 bg-metallic rounded-full"></div>
                        </div>
                        <h3 className="text-2xl text-primary font-bold mb-4">Welcome to ” ROYAL TOUCHUP” – Where Comfort Meets Creativity.</h3>
                        <div className="text-gray-300 leading-relaxed text-lg space-y-4">
                            <p>
                                At ” ROYAL TOUCHUP”, we believe your space should tell your story. Whether it’s a cozy home or a modern office, our mission is to create interiors that reflect your personality, inspire comfort, and elevate everyday living.
                            </p>
                            <p>
                                Founded by <span className="text-primary-light font-bold">Mr. Manosh Kumar Bhowmick</span>, a passionate interior designer with a keen eye for detail and aesthetics, our studio blends creativity with functionality. We don’t just decorate – we design spaces that feel good and work well.
                            </p>
                            <p>
                                From concept to completion, we offer personalized interior design services tailored to your taste, lifestyle, and budget. Whether you’re renovating a single room or building from the ground up, we ensure a smooth, enjoyable experience – with beautiful results that last.
                            </p>
                        </div>
                    </div>
                    {/* Placeholder for an About Image if user requests later, for now maybe a decorative element or text large */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        <div className="relative p-1 bg-metallic rounded-2xl rotate-3">
                            <div className="bg-surface-light p-10 rounded-xl -rotate-3 border border-white/10">
                                <span className="material-symbols-outlined text-6xl text-primary mb-4">architecture</span>
                                <h4 className="text-xl font-bold text-white mb-2">Personalized Design</h4>
                                <p className="text-gray-400">Tailored to your taste, lifestyle, and budget.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Vision Block */}
                <div className="bg-surface-dark rounded-2xl p-8 md:p-12 border border-white/5">
                    <div className="flex flex-col gap-2 mb-8 text-center items-center">
                        <h2 className="text-text-main text-3xl font-bold leading-tight tracking-tight uppercase">Our Vision</h2>
                        <div className="h-1.5 w-24 bg-metallic rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 text-gray-300 leading-relaxed text-lg">
                        <div className="space-y-4">
                            <p>
                                Our vision is to create spaces that are not only beautiful but deeply personal. We believe great design blends style, comfort, and function to enhance everyday living. Each project is a step toward transforming houses into heartfelt homes.
                            </p>
                            <p>
                                At the heart of interior decoration lies more than just aesthetics—it’s about creating meaningful spaces that reflect who you are. Our vision is to design environments that inspire, uplift, and support the lifestyle and personality of every individual or family we work with.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <p>
                                Interior decoration is not just about selecting furniture or choosing colors; it’s about understanding how people live, work, and feel in a space. Our goal is to transform houses into homes, and rooms into experiences—spaces where memories are made, comfort is felt, and style speaks without words.
                            </p>
                            <p>
                                We envision a world where good design is accessible, timeless, and sustainable. Our approach blends creativity with practicality, combining textures, light, and layout in a way that brings harmony and balance.
                            </p>
                            <p className="border-l-4 border-primary pl-4 italic text-white">
                                "Our promise is to deliver designs that not only look beautiful but also feel right—every single time."
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center mt-10">
                        <button className="text-primary hover:text-white font-bold uppercase tracking-wider text-sm border-b-2 border-primary hover:border-white pb-1 transition-all">
                            Learn More
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutSection;
