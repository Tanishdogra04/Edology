import React from 'react';

export default function AlumniHubs() {
  const cities = [
    {
      id: 1,
      name: "Bengaluru",
      count: "15,200+",
      hub: "Silicon Valley Hub",
      focus: "AI, Tech Leadership & Dev",
      image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: 2,
      name: "Mumbai",
      count: "12,400+",
      hub: "Financial Capital Circle",
      focus: "Investment Banking & Finance",
      image: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: 3,
      name: "Delhi NCR",
      count: "10,800+",
      hub: "Corporate & Strategy Center",
      focus: "Digital Marketing & Operations",
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: 4,
      name: "Hyderabad",
      count: "9,500+",
      hub: "Cyber City Network",
      focus: "Data Science & Cloud Arch",
      image: "https://images.unsplash.com/photo-1608958220926-a6e95c102a11?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: 5,
      name: "Pune",
      count: "8,200+",
      hub: "Educational & IT Sector",
      focus: "Product Tech & MBA Leadership",
      image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&q=80&w=600"
    }
  ];

  return (
    <div className="bg-white py-20 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-xs font-semibold text-blue-600 shadow-sm animate-float">
            <i className="bi bi-geo-alt-fill text-blue-600"></i>
            <span>Alumni & Placements Network</span>
          </div>
          <h2 className="font-heading font-extrabold text-slate-900 text-3xl sm:text-4xl tracking-tight">
            Connecting Learners Across India's Key Growth Hubs
          </h2>
          <p className="font-sans text-slate-500 text-sm sm:text-base leading-relaxed">
            Join active regional student circles, attend exclusive offline networking meets, and unlock placements with leading employers in your city.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {cities.map((city) => (
            <div 
              key={city.id}
              className="group relative h-[260px] rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 ease-out cursor-pointer flex flex-col justify-end"
            >
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <img 
                  src={city.image} 
                  alt={`${city.name} Alumni Hub`} 
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              </div>

              <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold tracking-wide shadow-md">
                {city.count}
              </div>

              <div className="relative p-4 text-left z-10">
                <p className="text-[9px] font-bold text-blue-400 uppercase tracking-widest leading-none mb-1">
                  {city.hub}
                </p>
                <h3 className="font-heading text-lg font-extrabold text-white leading-tight mb-1">
                  {city.name}
                </h3>
                <p className="text-[10px] text-slate-300 leading-normal font-sans font-medium mb-2 line-clamp-1">
                  Focus: {city.focus}
                </p>
                
                <div className="flex items-center gap-1 text-[10px] font-bold text-white opacity-85 group-hover:opacity-100 group-hover:text-blue-300 transition-all duration-300">
                  <span>Explore Circle</span>
                  <i className="bi bi-arrow-right transition-transform duration-300 group-hover:translate-x-1"></i>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
