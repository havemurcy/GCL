import { useState } from 'react';

export function Portfolio() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Lawn Care', 'Hardscaping', 'Design'];

  const projects = [
    {
      id: 1,
      title: "Modern Backyard Oasis",
      category: "Design",
      desc: "Complete redesign featuring drought-tolerant plants and clean lines.",
      img: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Flagstone Patio & Fire Pit",
      category: "Hardscaping",
      desc: "Custom natural stone patio perfect for evening entertaining.",
      img: "https://images.unsplash.com/photo-1558904541-efa843a96f0f?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Estate Lawn Restoration",
      category: "Lawn Care",
      desc: "Aeration, overseeding, and regular maintenance brought this lawn back to life.",
      img: "https://images.unsplash.com/photo-1598902108854-10e335adac99?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "Retaining Wall & Steps",
      category: "Hardscaping",
      desc: "Engineered block wall to manage a steep slope and create usable space.",
      img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 5,
      title: "Front Yard Curb Appeal",
      category: "Design",
      desc: "New beds, fresh mulch, and colorful perennials to welcome guests.",
      img: "https://images.unsplash.com/photo-1592424001806-53b44423130f?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 6,
      title: "Commercial Property Maintenance",
      category: "Lawn Care",
      desc: "Weekly mowing and edging for a pristine corporate campus.",
      img: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?q=80&w=800&auto=format&fit=crop"
    }
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-primary-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
            Browse our recent projects and see the quality of our work firsthand.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === cat 
                    ? 'bg-primary text-white shadow-md' 
                    : 'bg-gray-100 text-text-muted hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <div key={project.id} className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.img} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-primary">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-text-main mb-2">{project.title}</h3>
                  <p className="text-text-muted">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
