const About = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">About <span className="text-primary">Adyvanta</span></h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Bridging the gap between ambitious businesses and next-generation tech talent.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Who We Are</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Adyvanta Technologies is a premier IT Services & Career Development Company. We empower businesses with cutting-edge digital solutions—from web development to cloud infrastructure—while providing students and professionals with the training and internships they need to succeed in the fast-paced tech industry.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Based in Bhopal, we pride ourselves on delivering scalable, secure, and user-centric applications for clients across the globe.
            </p>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="About Adyvanta" className="rounded-2xl shadow-xl" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-rose-50 p-10 rounded-3xl border border-rose-100">
            <h2 className="text-2xl font-bold mb-4 text-primary">Our Mission</h2>
            <p className="text-gray-800 leading-relaxed text-lg">
              Our mission is to foster innovation by delivering exceptional IT services and to nurture the next generation of tech leaders through comprehensive, hands-on learning experiences.
            </p>
          </div>
          
          <div className="bg-gray-50 p-10 rounded-3xl border border-gray-200">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              To become a globally recognized hub for digital transformation and career empowerment, where businesses thrive and students realize their full potential.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
