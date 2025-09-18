import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Package, 
  Plane, 
  CheckCircle, 
  Truck, 
  Phone,
  Clock,
  Shield,
  Users,
  ArrowRight,
} from 'lucide-react';

const ExcellenceSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 -mt-16 -mr-16 opacity-10">
        <div className="w-64 h-64 rounded-full bg-blue-500"></div>
      </div>
      <div className="absolute bottom-0 left-0 -mb-16 -ml-16 opacity-10">
        <div className="w-64 h-64 rounded-full bg-blue-500"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className={`mb-6 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <span className="inline-flex items-center px-4 py-2 bg-white rounded-full text-sm font-semibold text-blue-600 border border-blue-100 shadow-sm">
            <CheckCircle className="w-4 h-4 mr-2" />
            CUSTOMER CENTRIC APPROACH
          </span>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left side - Main content */}
          <div className={`transform transition-all duration-700 delay-100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Experience <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Excellence</span> with BlueAnchor Logistics
            </h2>
            <p className="text-lg text-gray-700 mb-10 leading-relaxed">
              We prioritize precision, reliability, and a customer-centric approach, making 
              your satisfaction our top priority. Experience the difference of a logistics 
              partner committed to excellence - experience BlueAnchor Logistics.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <div className="text-3xl font-bold text-blue-600 mb-2">99.7%</div>
                <div className="text-sm text-gray-600">On-Time Delivery Rate</div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <div className="text-3xl font-bold text-blue-600 mb-2">150+</div>
                <div className="text-sm text-gray-600">Countries Served</div>
              </div>
            </div>
            
            {/* Featured card */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 text-white shadow-xl transform transition-all duration-500 hover:-translate-y-1">
              <div className="flex items-start mb-6">
                <div className="w-14 h-14  rounded-xl flex items-center justify-center shadow-md">
                  <Package className="w-full h-7 text-white" />
                </div>
                <div className="ml-6">
                  <h3 className="text-2xl font-bold mb-2">
                    Innovative Solutions for the Future
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    Choose BlueAnchor Logistics for commitment, reliability, and seamless service. We 
                    understand that your shipments are more than packages.
                  </p>
                </div>
              </div>
              <div className="flex items-center mt-6 pt-6 border-t border-slate-700">
                <div className="flex items-center text-sm text-slate-400">
                  <Clock className="w-4 h-4 mr-1" />
                  24/7 Real-time Tracking
                </div>
                <div className="flex items-center text-sm text-slate-400 ml-6">
                  <Shield className="w-4 h-4 mr-1" />
                  Fully Insured Shipments
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side - Service cards */}
          <div className="space-y-6">
            <div className={`bg-white p-6 rounded-xl shadow-sm border border-gray-100 transform transition-all duration-500 delay-200 hover:shadow-md hover:-translate-y-1 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                  <Plane className="w-6 h-6 text-blue-600" />
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Comprehensive Range of Services
                  </h3>
                  <p className="text-gray-600">
                    From air freight to ocean shipping, we offer end-to-end logistics solutions tailored to your needs.
                  </p>
                </div>
              </div>
            </div>
            
            <div className={`bg-white p-6 rounded-xl shadow-sm border border-gray-100 transform transition-all duration-500 delay-300 hover:shadow-md hover:-translate-y-1 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Trust is the backbone of our operations
                  </h3>
                  <p className="text-gray-600">
                    We've built our reputation on transparency, security, and reliability for all your shipments.
                  </p>
                </div>
              </div>
            </div>
            
            <div className={`bg-white p-6 rounded-xl shadow-sm border border-gray-100 transform transition-all duration-500 delay-400 hover:shadow-md hover:-translate-y-1 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                  <Truck className="w-6 h-6 text-blue-600" />
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Unparalleled Expertise in Logistics
                  </h3>
                  <p className="text-gray-600">
                    Our team of experts brings decades of experience to ensure your logistics operations run smoothly.
                  </p>
                </div>
              </div>
            </div>
            
            <div className={`bg-white p-6 rounded-xl shadow-sm border border-gray-100 transform transition-all duration-500 delay-500 hover:shadow-md hover:-translate-y-1 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Dedicated Customer Support
                  </h3>
                  <p className="text-gray-600">
                    Our support team is available around the clock to address your concerns and provide updates.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className={`pt-6 transform transition-all duration-500 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
               <Link to="/services">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-xl flex items-center cursor-pointer justify-center transition-all duration-300 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg">
                Explore Our Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              </Link>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExcellenceSection;