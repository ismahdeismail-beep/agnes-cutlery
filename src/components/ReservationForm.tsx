import React, { useState } from 'react';
import { Calendar, Clock, Users, User, QrCode } from 'lucide-react';

export default function ReservationForm() {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    partySize: '2',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello Agnes Catering, I would like to make a reservation.\n\nName: ${formData.name}\nDate: ${formData.date}\nTime: ${formData.time}\nGuests: ${formData.partySize}\n\nPlease let me know if this slot is available.`;
    const whatsappUrl = `https://wa.me/254797453969?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="bg-surface p-8 md:p-10 border border-surface-variant rounded-xl shadow-lg relative overflow-hidden">
      <form onSubmit={handleSubmit} className="space-y-8 relative z-10 transition-opacity duration-500 opacity-100">
        <div className="text-center mb-8">
          <h3 className="text-headline-sm text-primary">Book an Experience</h3>
          <p className="text-body-md text-on-surface-variant mt-2">Reserve your heritage dining experience.</p>
        </div>

          <div className="space-y-6">
            <div className="relative">
              <label htmlFor="name" className="sr-only">Name</label>
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-on-surface-variant/50" />
              </div>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full pl-10 pr-3 py-3 bg-transparent border-b border-surface-variant focus:border-primary outline-none transition-colors placeholder:text-on-surface-variant/50 text-body-md text-on-surface"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <label htmlFor="date" className="sr-only">Date</label>
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Calendar className="h-5 w-5 text-on-surface-variant/50" />
                </div>
                <input
                  type="date"
                  id="date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full pl-10 pr-3 py-3 bg-transparent border-b border-surface-variant focus:border-primary outline-none transition-colors text-body-md text-on-surface"
                />
              </div>

              <div className="relative">
                <label htmlFor="time" className="sr-only">Time</label>
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Clock className="h-5 w-5 text-on-surface-variant/50" />
                </div>
                <input
                  type="time"
                  id="time"
                  name="time"
                  required
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full pl-10 pr-3 py-3 bg-transparent border-b border-surface-variant focus:border-primary outline-none transition-colors text-body-md text-on-surface"
                />
              </div>
            </div>

            <div className="relative">
              <label htmlFor="partySize" className="sr-only">Party Size</label>
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Users className="h-5 w-5 text-on-surface-variant/50" />
              </div>
              <select
                id="partySize"
                name="partySize"
                value={formData.partySize}
                onChange={handleChange}
                className="w-full pl-10 pr-3 py-3 bg-transparent border-b border-surface-variant focus:border-primary outline-none transition-colors text-body-md text-on-surface appearance-none cursor-pointer"
              >
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
                <option value="5">5 Guests</option>
                <option value="6">6+ Guests</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-on-primary font-label-caps tracking-widest py-4 rounded-lg hover:bg-primary-container transition-all flex justify-center items-center gap-2"
          >
            <QrCode className="w-5 h-5" /> BOOK VIA WHATSAPP
          </button>
        </form>
    </div>
  );
}
