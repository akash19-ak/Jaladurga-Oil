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
                      Coastal Industrial Area,<br />
                      Karnataka, India<br />
                      (Near the Main Highway)
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
                      +91 91135 70875
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <a 
              href="https://maps.google.com/?q=Karnataka,India" 
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15555.518606554553!2d74.8354724!3d12.9157209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35a4c37bf488f%3A0x827bbc7a74fcfe64!2sKarnataka!5e0!3m2!1sen!2sin!4v1703248384950!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Jaladurga Factory Location"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Location;
