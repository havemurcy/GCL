import { Star, Quote } from 'lucide-react';

export function Reviews() {
  const reviews = [
    {
      id: 1,
      name: "Sarah M.",
      date: "October 2025",
      rating: 5,
      text: "GCL completely transformed our overgrown backyard into a beautiful oasis. The team was professional, on time, and the attention to detail was incredible. They even finished a day ahead of schedule!",
      service: "Landscape Design"
    },
    {
      id: 2,
      name: "David T.",
      date: "August 2025",
      rating: 5,
      text: "We've used them for weekly lawn maintenance for two years now. Always reliable, and our yard has never looked better. The crew is friendly and always cleans up perfectly before leaving. Highly recommend!",
      service: "Lawn Maintenance"
    },
    {
      id: 3,
      name: "Jennifer K.",
      date: "July 2025",
      rating: 5,
      text: "The new stone patio and fire pit they installed exceeded our expectations. They listened to what we wanted, provided a clear quote, and delivered a perfect result within our budget.",
      service: "Hardscaping"
    },
    {
      id: 4,
      name: "Michael R.",
      date: "May 2025",
      rating: 5,
      text: "I hired GCL for a massive spring cleanup. They removed years of dead brush, edged all the beds, and put down fresh mulch. The house looks 10 times better. Worth every penny.",
      service: "Seasonal Cleanup"
    },
    {
      id: 5,
      name: "Amanda L.",
      date: "April 2025",
      rating: 4,
      text: "Great experience overall. The design team had fantastic ideas for our front yard that we never would have thought of. The plants they selected are thriving.",
      service: "Design & Planting"
    },
    {
      id: 6,
      name: "Robert W.",
      date: "September 2024",
      rating: 5,
      text: "Fixed our broken irrigation system quickly and for a fair price. They explained exactly what was wrong and showed me how to use the new controller.",
      service: "Irrigation"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-primary-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Customer Reviews</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
            See what your neighbors in [CITY] are saying about our landscaping services.
          </p>
        </div>
      </section>

      {/* Stats Summary */}
      <section className="py-12 bg-surface border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-text-main mb-2">4.9</div>
              <div className="flex justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-text-muted">Average Rating</p>
            </div>
            <div className="hidden md:block w-px h-24 bg-gray-200"></div>
            <div>
              <div className="text-5xl font-bold text-text-main mb-2">150+</div>
              <p className="text-text-muted mt-8">Happy Customers</p>
            </div>
            <div className="hidden md:block w-px h-24 bg-gray-200"></div>
            <div>
              <div className="text-5xl font-bold text-text-main mb-2">100%</div>
              <p className="text-text-muted mt-8">Satisfaction Guarantee</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map(review => (
              <div key={review.id} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 relative hover:shadow-md transition-shadow">
                <Quote className="h-10 w-10 text-primary/10 absolute top-6 right-6" />
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <p className="text-text-muted italic mb-6 leading-relaxed relative z-10">
                  "{review.text}"
                </p>
                <div className="mt-auto pt-4 border-t border-gray-50">
                  <p className="font-bold text-text-main">{review.name}</p>
                  <div className="flex justify-between items-center mt-1">
                    <p className="text-sm text-primary font-medium">{review.service}</p>
                    <p className="text-xs text-gray-400">{review.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Google Placeholder */}
          <div className="mt-16 bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-text-main mb-4">Leave Us a Review</h3>
            <p className="text-text-muted mb-6">
              We love hearing from our customers! If we've recently completed a project for you, please consider leaving a review.
            </p>
            <a 
              href="#" 
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-text-main bg-white hover:bg-gray-50 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Review us on Google
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
