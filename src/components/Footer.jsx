import React from 'react';

const Footer = () => {
    return (
        <footer id="footer" className="mt-auto bg-black text-white py-16 border-t border-white/10">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2">
                            <img src="/logo.jpg" alt="Royal Touchup Logo" className="h-16 w-auto object-contain" />
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Creating exceptional living spaces that combine comfort, luxury, and modern design. Your dream home awaits.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h4 className="font-bold text-lg text-white">Quick Links</h4>
                        <div className="flex flex-col gap-2">
                            <a href="/" className="text-gray-400 hover:text-primary transition-colors text-sm">Home</a>
                            <a href="/#about-us" className="text-gray-400 hover:text-primary transition-colors text-sm">About Us</a>
                            <a href="/#services" className="text-gray-400 hover:text-primary transition-colors text-sm">Services</a>
                            <a href="/#faqs" className="text-gray-400 hover:text-primary transition-colors text-sm">FAQs</a>
                            <a href="/#reviews" className="text-gray-400 hover:text-primary transition-colors text-sm">Review Us</a>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h4 className="font-bold text-lg text-white">Contact Us</h4>
                        <div className="flex flex-col gap-3">
                            <div className="flex items-start gap-3 text-gray-400 text-sm group">
                                <span className="material-symbols-outlined text-base mt-0.5 group-hover:text-primary transition-colors">location_on</span>
                                <span>Kalyani, West Bengal - 741250</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-400 text-sm group">
                                <span className="material-symbols-outlined text-base group-hover:text-primary transition-colors">call</span>
                                <span className="font-bold text-white">+91 7278087172</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-400 text-sm group">
                                <span className="material-symbols-outlined text-base group-hover:text-primary transition-colors">mail</span>
                                <span className="font-bold text-white">royaltouchup3@gmail.com</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h4 className="font-bold text-lg text-white">Find Us</h4>
                        <div className="w-full h-48 rounded-lg overflow-hidden border border-white/10">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7348.03660812001!2d88.470728!3d22.949553!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8957906aa4529%3A0xf439c59e6e410094!2sKataganj%2C%20West%20Bengal%20741250!5e0!3m2!1sen!2sin!4v1767286184609!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Royal Touchup Location"
                            ></iframe>
                        </div>
                    </div>
                </div>
                <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                    <p>| Copyright 2025 | royaltouchup.co.in |</p>
                    <div className="flex flex-col md:flex-row gap-4 items-center">
                        <p>Powered by <span className="text-white">Igniis</span></p>
                        <p>Developer &gt;&gt; <span className="text-white">Rajesh</span></p>
                    </div>
                    <div className="flex gap-4">
                        <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                            <span className="sr-only">Facebook</span>
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path></svg>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                            <span className="sr-only">Instagram</span>
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path clipRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 014.123 4.13c.636-.247 1.363-.416 2.427-.465C7.567 3.617 7.91 3.606 10.334 3.606h.634c2.43 0 2.784.013 3.808.06h.023zM10.27 1.373c-2.484 0-2.822.01-3.793.054-1.21.056-2.036.252-2.756.532a6.163 6.163 0 00-2.228 1.45 6.163 6.163 0 00-1.45 2.228c-.28.72-.476 1.546-.532 2.756-.044.97-.054 1.309-.054 3.793v.01c0 2.484.01 2.822.054 3.793.056 1.21.252 2.036.532 2.756a6.163 6.163 0 001.45 2.228 6.163 6.163 0 002.228 1.45c.72.28 1.546.476 2.756.532.97.044 1.309.054 3.793.054v.01c2.484 0 2.822-.01 3.793-.054 1.21-.056 2.036-.252 2.756-.532a6.163 6.163 0 002.228-1.45 6.163 6.163 0 001.45-2.228c.28-.72.476-1.546.532-2.756.044-.97.054-1.309.054-3.793v-.01c0-2.484-.01-2.822-.054-3.793-.056-1.21-.252-2.036-.532-2.756a6.163 6.163 0 00-1.45-2.228 6.163 6.163 0 00-2.228-1.45c-.72-.28-1.546-.476-2.756-.532-.97-.044-1.309-.054-3.793-.054H10.27zm3.53 8.35a3.8 3.8 0 100 7.6 3.8 3.8 0 000-7.6zm0-1.267a5.067 5.067 0 110 10.134 5.067 5.067 0 010-10.134zM16.94 7.6a1.05 1.05 0 110-2.1 1.05 1.05 0 010 2.1z" fillRule="evenodd"></path></svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
