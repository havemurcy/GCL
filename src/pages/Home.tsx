import { Link } from 'react-router-dom';
import { CheckCircle2, Leaf, Ruler, Shovel, Trees, Droplets, ArrowRight, Star, Phone } from 'lucide-react';

export function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1558904541-efa843a96f0f?q=80&w=2000&auto=format&fit=crop" 
            alt="Beautifully landscaped backyard" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-6">
            Professional Landscaping You Can Trust
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 mb-10 font-light max-w-2xl mx-auto">
            Reliable, high-quality residential and commercial landscaping services in [CITY] and surrounding areas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-md text-white bg-primary hover:bg-primary-light transition-colors shadow-lg"
            >
              Get a Free Estimate
            </Link>
            <Link 
              to="/services" 
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-md text-white border-2 border-white hover:bg-white hover:text-primary transition-colors shadow-lg"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-text-main sm:text-4xl mb-4">Our Core Services</h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              From regular maintenance to complete outdoor transformations, we have the expertise to handle all your landscaping needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Lawn Maintenance', icon: Leaf, desc: 'Regular mowing, edging, trimming, and fertilization to keep your lawn healthy and green.' },
              { title: 'Landscape Design', icon: Ruler, desc: 'Custom design plans tailored to your property, lifestyle, and budget.' },
              { title: 'Hardscaping', icon: Shovel, desc: 'Patios, walkways, retaining walls, and outdoor living spaces built to last.' },
              { title: 'Mulching & Planting', icon: Trees, desc: 'Expert plant selection, installation, and seasonal mulching for beautiful beds.' },
              { title: 'Seasonal Cleanup', icon: CheckCircle2, desc: 'Spring and fall cleanups to prepare your property for the changing seasons.' },
              { title: 'Irrigation', icon: Droplets, desc: 'Sprinkler system installation, repair, and maintenance for optimal watering.' },
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-text-main mb-3">{service.title}</h3>
                <p className="text-text-muted mb-6 leading-relaxed">{service.desc}</p>
                <Link to="/services" className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl mb-6">Your Local Landscaping Experts</h2>
              <p className="text-lg text-gray-200 mb-6 leading-relaxed">
                At Gooch & Childers Landscaping, we believe your outdoor space should be a beautiful extension of your home. With years of experience serving the [CITY] area, we've built a reputation for reliability, quality craftsmanship, and exceptional customer service.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Locally owned and operated',
                  'Fully licensed and insured',
                  'Experienced, professional crew',
                  'Commitment to 100% customer satisfaction'
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-100">
                    <CheckCircle2 className="h-6 w-6 text-secondary-light mr-3 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link 
                to="/about" 
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-primary transition-colors"
              >
                More About Us
              </Link>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1000&auto=format&fit=crop" 
                alt="Landscaping team at work" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-text-main sm:text-4xl mb-4">Featured Projects</h2>
              <p className="text-lg text-text-muted max-w-2xl">See the transformations we've created for our clients.</p>
            </div>
            <Link to="/portfolio" className="hidden sm:inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors">
              View full portfolio <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { img: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?q=80&w=800&auto=format&fit=crop', title: 'Modern Patio Design' },
              { img: 'https://images.unsplash.com/photo-1558904541-efa843a96f0f?q=80&w=800&auto=format&fit=crop', title: 'Complete Backyard Renovation' },
              { img: 'https://images.unsplash.com/photo-1598902108854-10e335adac99?q=80&w=800&auto=format&fit=crop', title: 'Front Yard Curb Appeal' },
            ].map((project, i) => (
              <div key={i} className="group relative rounded-xl overflow-hidden shadow-sm aspect-square">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-white text-xl font-semibold">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link to="/portfolio" className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors">
              View full portfolio <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-text-main sm:text-4xl mb-4">What Our Clients Say</h2>
            <div className="flex justify-center items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              Don't just take our word for it. Read what your neighbors have to say about our work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Sarah M.", text: "GCL completely transformed our overgrown backyard into a beautiful oasis. The team was professional, on time, and the attention to detail was incredible." },
              { name: "David T.", text: "We've used them for weekly lawn maintenance for two years now. Always reliable, and our yard has never looked better. Highly recommend!" },
              { name: "Jennifer K.", text: "The new stone patio and fire pit they installed exceeded our expectations. They listened to what we wanted and delivered a perfect result within our budget." }
            ].map((review, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 relative">
                <Star className="h-8 w-8 text-gray-200 absolute top-6 right-6" />
                <p className="text-text-muted italic mb-6 relative z-10">"{review.text}"</p>
                <p className="font-semibold text-text-main">- {review.name}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/reviews" className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors">
              Read more reviews <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-secondary text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl mb-6">Ready to Transform Your Outdoor Space?</h2>
          <p className="text-xl text-gray-100 mb-10 font-light">
            Contact us today for a free, no-obligation estimate. Let's discuss how we can bring your landscaping vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-md text-primary bg-white hover:bg-gray-50 transition-colors shadow-lg"
            >
              Request a Quote
            </Link>
            <a 
              href="tel:+15551234567" 
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-md text-white border-2 border-white hover:bg-white/10 transition-colors shadow-lg"
            >
              <Phone className="mr-2 h-5 w-5" />
              (555) 123-4567
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
