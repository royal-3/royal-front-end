import React, { useState } from 'react';
import api from '../api';

const ConsultationForm = ({ onSuccess, className = "" }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone_number: '',
        house_type: '2BHK',
        property_type: 'Domestic',
        city: 'Mumbai',
    });
    const [status, setStatus] = useState('idle'); // idle, submitting, success, error
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');
        try {
            await api.post('/consultation/', formData);
            setStatus('success');
            setTimeout(() => {
                if (onSuccess) onSuccess();
                setStatus('idle');
                setFormData({
                    name: '',
                    phone_number: '',
                    house_type: '2BHK',
                    property_type: 'Domestic',
                    city: 'Mumbai',
                });
            }, 2000);
        } catch (err) {
            console.error('Submission error:', err);
            setStatus('error');
            setErrorMessage('Failed to submit request. Please try again.');
        }
    };

    if (status === 'success') {
        return (
            <div className="bg-green-500/10 text-green-500 p-4 rounded-lg text-center">
                <span className="material-symbols-outlined text-4xl mb-2">check_circle</span>
                <p className="font-bold">Request Submitted!</p>
                <p className="text-sm">We will call you shortly.</p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className={`flex flex-col gap-4 ${className}`}>
            <div>
                <label className="block text-gray-400 text-xs font-bold mb-1 uppercase">Name</label>
                <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    placeholder="Your Name"
                />
            </div>

            <div>
                <label className="block text-gray-400 text-xs font-bold mb-1 uppercase">Phone Number</label>
                <input
                    type="tel"
                    name="phone_number"
                    required
                    value={formData.phone_number}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    placeholder="10-digit mobile number"
                />
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-gray-400 text-xs font-bold mb-1 uppercase">City</label>
                    <select
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full bg-surface-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary appearance-none"
                        required
                    >
                        <option value="" disabled>Select Your City</option>
                        <option value="Kalyani">Kalyani</option>
                        <option value="Kancharapara">Kancharapara</option>
                        <option value="Barrackpore">Barrackpore</option>
                        <option value="Naihati">Naihati</option>
                        <option value="Krishnanagar">Krishnanagar</option>
                        <option value="Kolkata">Kolkata</option>
                    </select>
                </div>
                <div>
                    <label className="block text-gray-400 text-xs font-bold mb-1 uppercase">Property</label>
                    <select
                        name="property_type"
                        value={formData.property_type}
                        onChange={handleChange}
                        className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    >
                        <option value="Domestic">Domestic</option>
                        <option value="Commercial">Commercial</option>
                    </select>
                </div>
            </div>

            <div>
                <label className="block text-gray-400 text-xs font-bold mb-1 uppercase">House Type</label>
                <select
                    name="house_type"
                    value={formData.house_type}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                >
                    <option value="1BHK">1 BHK</option>
                    <option value="2BHK">2 BHK</option>
                    <option value="3BHK">3 BHK</option>
                    <option value="4BHK/Duplex">4 BHK / Duplex</option>
                </select>
            </div>

            {status === 'error' && <p className="text-red-500 text-sm">{errorMessage}</p>}

            <button
                type="submit"
                disabled={status === 'submitting'}
                className="bg-metallic text-black font-bold py-3 rounded-lg shadow-[0_0_15px_rgba(191,149,63,0.3)] mt-2 hover:opacity-90 transition-opacity disabled:opacity-50"
            >
                {status === 'submitting' ? 'Submitting...' : 'Submit Request'}
            </button>
        </form>
    );
};

export default ConsultationForm;
