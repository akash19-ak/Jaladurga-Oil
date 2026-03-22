
import { motion } from 'framer-motion';
import { Star, Users, Award, TrendingUp } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Ramesh Kumara',
    rating: 5,
    comment: 'Best cold pressed oil in the region. The aroma is purely natural and remind us of old days.',
    date: '1 week ago'
  },
  {
    id: 2,
    name: 'Sunita H Rao',
    rating: 5,
    comment: 'ಜಲದುರ್ಗ ಕೊಬ್ಬರಿ ಎಣ್ಣೆ ತುಂಬಾ ಚೆನ್ನಾಗಿದೆ. ನಾನು ಇದನ್ನು ಅಡುಗೆಗೆ ಮತ್ತು ಕೂದಲಿಗೆ ಬಳಸುತ್ತೇನೆ.',
    date: '2 weeks ago'
  },
  {
    id: 3,
    name: 'Deepak Hegde',
    rating: 5,
    comment: 'The coconut processing service is very efficient. We got our oil within 2 days. Highly recommend!',
    date: '1 month ago'
  }
];

const stats = [
  { id: 1, label: 'Happy Customers', value: '500+', icon: <Users /> },
  { id: 2, label: 'Average Rating', value: '4.9/5', icon: <Star /> },
  { id: 3, label: 'Litre Sold', value: '1000+', icon: <TrendingUp /> },
  { id: 4, label: 'Pure & Organic', value: '100%', icon: <Award /> },
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-24 bg-white">
      <div className="container">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
          {stats.map((stat) => (
            <motion.div 
              key={stat.id}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: stat.id * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-2xl bg-bg-light"
            >
              <div className="text-primary mb-4 flex justify-center">{stat.icon}</div>
              <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-text-muted text-sm uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <span className="section-subtitle">ಗ್ರಾಹಕರ ವಿಮರ್ಶೆ | Customer Feedback</span>
        <h2 className="section-title">What They Say About Us</h2>

        <div className="grid md:grid-cols-3 gap-8 perspective-1000">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="card-3d p-8 rounded-3xl border border-primary/10 hover:border-primary/30 transition-all bg-white shadow-sm cursor-pointer"
            >
              <div className="flex gap-1 mb-4 text-secondary">
                {[...Array(review.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-text-muted italic mb-6">"{review.comment}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center font-bold text-primary">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold">{review.name}</h4>
                  <span className="text-xs text-text-muted">{review.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#" className="text-primary font-bold hover:underline">View all Google Reviews</a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
