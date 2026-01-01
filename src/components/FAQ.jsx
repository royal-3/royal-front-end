import React, { useState } from 'react';

const FAQItem = ({ question, answer, icon }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-white/10 rounded-xl overflow-hidden bg-surface-light transition-all duration-300 hover:border-primary/30">
            <button
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="flex items-center gap-4">
                    <span className="text-2xl">{icon}</span>
                    <span className="text-lg font-bold text-white pr-4">{question}</span>
                </div>
                <span className={`material-symbols-outlined text-primary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    expand_more
                </span>
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <p className="p-6 pt-0 text-gray-300 leading-relaxed border-t border-white/5">
                    {answer}
                </p>
            </div>
        </div>
    );
};

const FAQ = () => {
    const faqs = [
        {
            icon: "🏠",
            question: "What types of interior spaces do you design?",
            answer: "We design a wide range of spaces – homes, apartments, offices, showrooms, salons, cafes, and more with modern and functional appeal."
        },
        {
            icon: "🎨",
            question: "Do you offer customized interior solutions?",
            answer: "Absolutely! Every design is tailored to your style, needs, and budget – from colour palettes to furniture selection."
        },
        {
            icon: "💰",
            question: "How much does interior decoration cost?",
            answer: "We offer both budget and premium packages. Book a free consultation to receive a detailed, transparent quote."
        },
        {
            icon: "⏱️",
            question: "How long will it take to complete my interior project?",
            answer: "Most projects are completed within 2–4 weeks depending on the size. We value timely delivery with quality execution."
        },
        {
            icon: "🤝",
            question: "Will I be involved in the design process?",
            answer: "Yes, you will! We share mood boards, concepts, and 3D views with you to make sure your dream space comes to life."
        }
    ];

    return (
        <section id="faqs" className="py-20 bg-background-dark">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center text-center gap-2 mb-16">
                    <h2 className="text-text-main text-3xl font-bold leading-tight tracking-tight uppercase">Frequently Asked Questions</h2>
                    <div className="h-1.5 w-24 bg-metallic rounded-full"></div>
                    <p className="text-gray-400 mt-4 max-w-xl">
                        Got questions? We have answers. Here is everything you need to know about our interior design process.
                    </p>
                </div>

                <div className="flex flex-col gap-4">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} {...faq} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
