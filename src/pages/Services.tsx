import { Link } from 'react-router-dom';
import { CheckCircle2, Leaf, Ruler, Shovel, Trees, Droplets, ArrowRight } from 'lucide-react';

export function Services() {
  const services = [
    {
      id: "lawn-maintenance",
      title: "Lawn Maintenance",
      icon: Leaf,
      desc: "Keep your property looking its best year-round with our comprehensive lawn care programs.",
      benefits: "A healthy, green lawn improves curb appeal and provides a safe, enjoyable outdoor space.",
      includes: [
        "Weekly or bi-weekly mowing",
        "Precision edging along walkways and beds",
        "Trimming around obstacles",
        "Debris cleanup and blowing",
        "Seasonal fertilization and weed control"
      ],
      img: "https://images.unsplash.com/photo-1592424001806-53b44423130f?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "landscape-design",
      title: "Landscape Design",
      icon: Ruler,
      desc: "Transform your vision into reality with custom landscape designs tailored to your property.",
      benefits: "Increase property value and create functional, beautiful outdoor living areas.",
      includes: [
        "Initial consultation and site analysis",
        "Custom 2D/3D design plans",
        "Plant selection and placement",
        "Hardscape integration",
        "Budget planning and phased installation options"
      ],
      img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "hardscaping",
      title: "Hardscaping",
      icon: Shovel,
      desc: "Durable, beautiful stone and masonry work to define and enhance your outdoor spaces.",
      benefits: "Create lasting outdoor living areas that require minimal maintenance.",
      includes: [
        "Custom patios (pavers, natural stone, concrete)",
        "Walkways and pathways",
        "Retaining walls and seating walls",
        "Fire pits and outdoor fireplaces",
        "Driveway borders and aprons"
      ],
      img: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "mulching-planting",
      title: "Mulching & Planting",
      icon: Trees,
      desc: "Refresh your garden beds with expert plant installation and premium mulch.",
      benefits: "Improve soil health, retain moisture, and add instant color and texture to your landscape.",
      includes: [
        "Bed preparation and edging",
        "Premium mulch installation (various colors/types)",
        "Tree, shrub, and perennial planting",
        "Seasonal flower rotations",
        "Weed barrier installation"
      ],
      img: "https://images.unsplash.com/photo-1558904541-efa843a96f0f?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "seasonal-cleanup",
      title: "Seasonal Cleanup",
      icon: CheckCircle2,
      desc: "Prepare your property for the changing seasons with thorough spring and fall cleanups.",
      benefits: "Prevent disease, protect plants from harsh weather, and maintain a tidy appearance year-round.",
      includes: [
        "Leaf removal and disposal",
        "Perennial cutbacks",
        "Debris clearing from beds and lawns",
        "Gutter cleaning (optional)",
        "Winterization preparation"
      ],
      img: "https://images.unsplash.com/photo-1598902108854-10e335adac99?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "irrigation",
      title: "Irrigation Systems",
      icon: Droplets,
      desc: "Efficient watering solutions to keep your landscape thriving while conserving water.",
      benefits: "Save time, reduce water waste, and ensure your plants get exactly what they need.",
      includes: [
        "New system design and installation",
        "Spring start-ups and system checks",
        "Fall winterization/blowouts",
        "Repairs and head adjustments",
        "Smart controller upgrades"
      ],
      img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-primary-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
            Comprehensive landscaping solutions designed to enhance the beauty and value of your property.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div key={service.id} id={service.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
                <div className="w-full lg:w-1/2">
                  <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
                    <img 
                      src={service.img} 
                      alt={service.title} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold text-text-main">{service.title}</h2>
                  </div>
                  <p className="text-lg text-text-muted mb-6 leading-relaxed">
                    {service.desc}
                  </p>
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 mb-8">
                    <h3 className="font-semibold text-text-main mb-2">The Benefit:</h3>
                    <p className="text-text-muted italic">{service.benefits}</p>
                  </div>
                  <h3 className="text-xl font-semibold text-text-main mb-4">What's Included:</h3>
                  <ul className="space-y-3 mb-8">
                    {service.includes.map((item, i) => (
                      <li key={i} className="flex items-start text-text-muted">
                        <CheckCircle2 className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors"
                  >
                    Get a quote for {service.title.toLowerCase()} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl mb-6">Not sure what you need?</h2>
          <p className="text-xl text-gray-100 mb-10 font-light">
            We offer free consultations to assess your property and recommend the best services for your goals and budget.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-md text-primary bg-white hover:bg-gray-50 transition-colors shadow-lg"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
