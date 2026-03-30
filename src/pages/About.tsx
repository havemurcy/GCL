import { CheckCircle2 } from 'lucide-react';

export function About() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-primary-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
            Dedicated to creating and maintaining beautiful outdoor spaces in [CITY] and surrounding areas.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-text-main mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-text-muted leading-relaxed">
                <p>
                  Founded with a passion for the outdoors and a commitment to hard work, Gooch & Childers Landscaping (GCL) has grown from a small neighborhood lawn care service into one of [CITY]'s most trusted residential and commercial landscaping companies.
                </p>
                <p>
                  We believe that your outdoor space is an extension of your home—a place for relaxation, entertainment, and making memories. Our goal is to help you maximize the potential of your property through thoughtful design, expert installation, and meticulous maintenance.
                </p>
                <p>
                  What sets us apart is our attention to detail and our dedication to customer satisfaction. We don't just complete a job; we build lasting relationships with our clients based on trust, reliability, and consistent quality.
                </p>
              </div>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1592424001806-53b44423130f?q=80&w=1000&auto=format&fit=crop" 
                alt="Landscaping team working" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-text-main mb-4">Our Mission & Values</h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              The principles that guide our work every single day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality Craftsmanship",
                desc: "We use the best materials and proven techniques to ensure our work stands the test of time. We never cut corners."
              },
              {
                title: "Reliability",
                desc: "When we say we'll be there, we'll be there. We respect your time and communicate clearly throughout every project."
              },
              {
                title: "Customer First",
                desc: "Your satisfaction is our ultimate goal. We listen to your needs, respect your budget, and strive to exceed your expectations."
              }
            ].map((value, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-text-main mb-4">{value.title}</h3>
                <p className="text-text-muted">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { number: "10+", label: "Years Experience" },
              { number: "500+", label: "Projects Completed" },
              { number: "100%", label: "Licensed & Insured" },
              { number: "5", label: "Star Average Rating" }
            ].map((stat, i) => (
              <div key={i} className="p-6">
                <div className="text-4xl md:text-5xl font-bold text-secondary-light mb-2">{stat.number}</div>
                <div className="text-lg font-medium text-gray-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
