import React from 'react';
import ConsultationForm from './ConsultationForm';

const ConsultationModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="bg-surface-light border border-white/10 rounded-2xl w-full max-w-md p-6 relative shadow-2xl">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white"
                >
                    <span className="material-symbols-outlined">close</span>
                </button>

                <h3 className="text-2xl font-bold text-white mb-2">Get a Free Quote</h3>
                <p className="text-gray-400 text-sm mb-6">Fill in the details and our team will get back to you.</p>

                <ConsultationForm onSuccess={onClose} />
            </div>
        </div>
    );
};

export default ConsultationModal;
