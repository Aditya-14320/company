import { Link } from 'react-router-dom';
import { FaLaptopCode, FaBullhorn, FaPaintBrush, FaArrowRight, FaCheckCircle } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="relative bg-white pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-rose-50 via-white to-white -z-10"></div>
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 text-primary text-sm font-semibold mb-6">
              <span className="flex h-2 w-2 rounded-full bg-primary"></span>
              Empowering Next-Gen Talent
            </div>
            <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Build Your Future With <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">TechNova</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              We deliver cutting-edge IT services for modern businesses and provide career-launching internships for students ready to make an impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/internships" className="bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-rose-700 transition-all shadow-lg hover:shadow-rose-200 flex items-center justify-center gap-2">
                Explore Internships <FaArrowRight />
              </Link>
              <Link to="/services" className="bg-white text-gray-900 border border-gray-200 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-all flex items-center justify-center">
                Our IT Services
              </Link>
            </div>
          </div>
          <div className="hidden lg:block relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-3xl blur-3xl opacity-20 transform scale-95"></div>
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Team collaborating" className="relative rounded-3xl shadow-2xl object-cover h-[500px] w-full border border-white/50" />
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-3">What We Do</h2>
            <h3 className="text-4xl font-bold text-gray-900 mb-6">Premium Digital Solutions</h3>
            <p className="text-gray-600 text-lg">We help ambitious businesses grow by providing top-tier development, marketing, and design services.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <FaLaptopCode />, title: 'Web Development', desc: 'Scalable and performant web applications built with modern frameworks.' },
              { icon: <FaBullhorn />, title: 'Digital Marketing', desc: 'Data-driven campaigns that drive traffic, engagement, and conversions.' },
              { icon: <FaPaintBrush />, title: 'UI/UX Design', desc: 'Intuitive user experiences and stunning interfaces that users love.' }
            ].map((srv, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-14 h-14 bg-rose-50 rounded-xl flex items-center justify-center text-primary text-2xl mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  {srv.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{srv.title}</h4>
                <p className="text-gray-600 leading-relaxed">{srv.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-rose-800 transition-colors">
              View All Services <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Achievements / Why Choose Us */}
      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/20 to-transparent -z-10"></div>
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why Partner With Us?</h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Whether you are a startup looking for tech solutions or a student looking for a breakthrough, we have the ecosystem to support your growth.
            </p>
            <ul className="space-y-5">
              {[
                'Expert team of industry professionals',
                'Custom-tailored IT solutions for your business',
                'Hands-on internship programs with real-world projects',
                'Proven track record of success and growth'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 text-gray-300">
                  <FaCheckCircle className="text-secondary text-xl shrink-0 mt-1" />
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm text-center">
              <div className="text-5xl font-extrabold text-primary mb-2">500+</div>
              <div className="text-gray-400 font-medium">Projects Delivered</div>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm text-center">
              <div className="text-5xl font-extrabold text-primary mb-2">1000+</div>
              <div className="text-gray-400 font-medium">Students Trained</div>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm text-center">
              <div className="text-5xl font-extrabold text-primary mb-2">99%</div>
              <div className="text-gray-400 font-medium">Client Satisfaction</div>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm text-center">
              <div className="text-5xl font-extrabold text-primary mb-2">50+</div>
              <div className="text-gray-400 font-medium">Hiring Partners</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
