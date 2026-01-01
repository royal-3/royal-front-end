import React from 'react';

const Services = () => {
    const services = [
        {
            title: "Concept Design",
            description: "Developing the initial look and feel of your space through mood boards and sketches.",
            icon: "edit"
        },
        {
            title: "Space Planning",
            description: "Optimizing layout for flow and functionality to maximize your living area.",
            icon: "square_foot"
        },
        {
            title: "Full Renovation",
            description: "End-to-end management of construction, material selection, and final styling.",
            icon: "construction"
        }
    ];

    return (
        <div id="services" className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="flex flex-col gap-2 mb-10">
                <h2 className="text-text-main text-3xl font-bold leading-tight tracking-tight">Our Services</h2>
                <div className="h-1.5 w-24 bg-metallic rounded-full"></div>
            </div>
            <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-4 max-w-[720px]">
                    <h3 className="text-white text-2xl sm:text-4xl font-extrabold leading-tight">
                        Tailored Design <span className="text-metallic">Solutions</span>
                    </h3>
                    <p className="text-text-secondary text-lg leading-relaxed">
                        We bring your vision to life with our comprehensive interior design services, ensuring every detail reflects your style.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <div key={index} className="group flex flex-col gap-5 p-6 rounded-xl border border-white/10 bg-surface-light hover:border-primary/50 hover:shadow-[0_0_20px_rgba(0,0,0,0.5)] transition-all duration-300">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-metallic group-hover:text-black transition-all duration-300 border border-primary/20">
                                <span className="material-symbols-outlined text-3xl">{service.icon}</span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h4 className="text-white text-xl font-bold">{service.title}</h4>
                                <p className="text-text-secondary text-base">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
