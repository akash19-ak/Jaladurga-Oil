import { MapPin, Clock, Phone, Map } from 'lucide-react';
import SectionHeader from './SectionHeader';

const Location = () => {
  return (
    <section id="location" className="py-24 bg-bg-light relative overflow-hidden">
      <div className="container perspective-1000">
        <SectionHeader 
          subtitle="Visit Us"
          title="Our Factory Location"
          description="Come see firsthand how your favorite pure cold-pressed coconut oil is made. We welcome visitors to our hygienic extraction facility."
        />

        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Information Column */}
          <div className="lg:col-span-1 bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-primary/10 flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 border border-primary/20 shadow-sm">
                <MapPin size={28} />
              </div>
              
              <h3 className="text-2xl font-bold font-['Montserrat'] mb-6 text-gray-900">Jaladurga Factory Unit</h3>
              
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <Map className="text-secondary shrink-0 mt-1" size={20} />
                  <div>
                    <strong className="block text-gray-900 mb-1">Address</strong>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      "Srinivas Nilaya"<br />
                      Jaladurga Home Made Coconut Oil<br />
                      Ashwathkatte, Karkala<br />
                      Karnataka 576117
                    </p>
                  </div>
                </li>
                
                <li className="flex gap-4">
                  <Clock className="text-secondary shrink-0 mt-1" size={20} />
                  <div>
                    <strong className="block text-gray-900 mb-1">Working Hours</strong>
                    <p className="text-gray-600 text-sm">
                      Monday - Saturday<br />
                      09:00 AM - 06:00 PM
                    </p>
                  </div>
                </li>

                <li className="flex gap-4">
                  <Phone className="text-secondary shrink-0 mt-1" size={20} />
                  <div>
                    <strong className="block text-gray-900 mb-1">Direct Contact</strong>
                    <p className="text-gray-600 text-sm">
                      +91 94495 92782<br />
                      +91 97435 81107
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <a 
              href="https://maps.google.com/?q=13.247566,75.029010" 
              target="_blank" 
              rel="noreferrer" 
              className="mt-8 block w-full text-center bg-primary text-white py-4 rounded-xl font-bold hover:bg-secondary transition-colors shadow-md hover:shadow-lg"
            >
              Get Directions
            </a>
          </div>

          {/* Map Column */}
          <div className="lg:col-span-2 rounded-3xl overflow-hidden shadow-md border border-gray-200 bg-gray-100 min-h-[400px]">
            <iframe 
              src="https://maps.google.com/maps?q=13.247566,75.029010&hl=en&z=15&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Jaladurga Factory Location"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 relative z-10"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Location;
