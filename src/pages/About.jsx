const About = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
        <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
          <h2 className="text-2xl font-semibold mb-4 text-primary">Who We Are</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            We are a leading IT Services & Career Development Company dedicated to bridging the gap between talent and opportunity. We empower businesses with cutting-edge digital solutions while providing students and professionals with the training and internships they need to succeed in the tech industry.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4 text-primary">Our Mission</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Our mission is to foster innovation by delivering exceptional IT services and to nurture the next generation of tech leaders through comprehensive, hands-on learning experiences.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4 text-primary">Our Vision</h2>
          <p className="text-gray-700 leading-relaxed">
            To become a globally recognized hub for digital transformation and career empowerment, where businesses thrive and students realize their full potential.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
