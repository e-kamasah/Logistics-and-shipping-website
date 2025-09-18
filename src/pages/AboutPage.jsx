import React, { useState, useEffect } from 'react';
import { 
  Warehouse, Truck, Globe, Package, Plane, Ship, Container, MapPin, 
  ArrowRight, CheckCircle, Users, Target, Shield, Clock, Phone, Mail 
} from 'lucide-react';



const HeroSection = ({ backgroundImage, title, breadcrumbs, height }) => {
  return (
    <div className={`relative ${height} w-full overflow-hidden`}>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-slate-900/80"></div>
      </div>
      
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">{title}</h1>
        
        <div className="flex items-center space-x-2 text-white">
          {breadcrumbs.map((crumb, index) => (
            <React.Fragment key={index}>
              <a 
                href={crumb.href} 
                className={`${crumb.active ? 'text-blue-400 font-medium' : 'text-gray-300 hover:text-white'}`}
              >
                {crumb.label}
              </a>
              {index < breadcrumbs.length - 1 && <span className="text-gray-400">/</span>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

const ServiceCard = ({ icon, title, description, features }) => {

  return (
    <div 
      className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:-translate-y-2 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-500 opacity-0 transition-opacity duration-500 hover:opacity-10 z-0"></div>
      
      <div className="relative z-10 p-8">
        <div className="flex items-center mb-6">
          <div className="p-4 bg-blue-100 rounded-xl">
            {React.cloneElement(icon, { className: "w-8 h-8 text-blue-600" })}
          </div>
        </div>
        
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
        
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
        
        <button className="mt-8 flex items-center text-blue-600 font-semibold group">
          Learn More
          <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};

const AboutPage = () => {
  const [activeStat, setActiveStat] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const stats = [
    {
      icon: <Warehouse className="w-16 h-16 text-white mb-4" />,
      number: "160",
      label: "Main Warehouses"
    },
    {
      icon: <Truck className="w-16 h-16 text-white mb-4" />,
      number: "200+",
      label: "Delivery Channels"
    },
    {
      icon: <Globe className="w-16 h-16 text-white mb-4" />,
      number: "87+",
      label: "Countries Covered"
    },
    {
      icon: <Package className="w-16 h-16 text-white mb-4" />,
      number: "2,300+",
      label: "Shipments Delivered"
    }
  ];

  const services = [
    {
      icon: <Plane className="w-8 h-8" />,
      title: "Air Freight",
      description: "Fast and reliable air cargo solutions for time-sensitive shipments across the globe.",
      features: [
        "Express delivery options",
        "Real-time flight tracking",
        "Customs clearance assistance",
        "Special handling for fragile items"
      ]
    },
    {
      icon: <Ship className="w-8 h-8" />,
      title: "Ocean Freight",
      description: "Cost-effective sea shipping for large volume cargo with comprehensive logistics support.",
      features: [
        "FCL and LCL container options",
        "Port-to-port and door-to-door",
        "Cargo insurance available",
        "Global port coverage"
      ]
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Land Transportation",
      description: "Efficient road and rail solutions for domestic and cross-border logistics needs.",
      features: [
        "Temperature-controlled vehicles",
        "Dangerous goods handling",
        "GPS tracked shipments",
        "Flexible scheduling"
      ]
    },
    {
      icon: <Warehouse className="w-8 h-8" />,
      title: "Warehousing",
      description: "Secure storage solutions with inventory management and distribution services.",
      features: [
        "Climate-controlled facilities",
        "24/7 security monitoring",
        "Inventory management system",
        "Pick and pack services"
      ]
    }
  ];

  const values = [
    {
      icon: <Target className="w-10 h-10 text-blue-600" />,
      title: "Precision",
      description: "We ensure accurate and timely delivery with meticulous planning and execution."
    },
    {
      icon: <Shield className="w-10 h-10 text-blue-600" />,
      title: "Reliability",
      description: "Your cargo is safe with our secure handling and comprehensive insurance options."
    },
    {
      icon: <Clock className="w-10 h-10 text-blue-600" />,
      title: "Efficiency",
      description: "Optimized routes and processes to reduce costs and delivery times."
    },
    {
      icon: <Users className="w-10 h-10 text-blue-600" />,
      title: "Partnership",
      description: "We work closely with clients to understand and meet their unique logistics needs."
    }
  ];

  return (
    <div className=" bg-gray-50">

      <HeroSection 
        backgroundImage="https://images.unsplash.com/photo-1645255315921-09c386465750?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title='About Us'
        breadcrumbs={[
          { label: "Home", href: "/", active: false },
          { label: "Services", href: "/services", active: true },
        ]}
        height="h-96"
      />

      {/* Services Intro */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center mb-4">
            <div className="w-12 h-0.5 bg-blue-500 mr-3"></div>
            <span className="text-blue-500 font-semibold uppercase tracking-wider text-sm">
              OUR SERVICES
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Logistics Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide end-to-end supply chain management with innovative technology and global expertise to keep your business moving forward.
          </p>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] opacity-10 bg-cover bg-center"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`text-center p-8 rounded-xl transition-all duration-700 ${
                  activeStat === index 
                    ? 'bg-white/20 transform scale-105 shadow-xl' 
                    : 'bg-white/10'
                }`}
              >
                <div className="flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-xl text-white font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
              />
            ))}
          </div>
        </div>
      </div>

      {/* About Company Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Side - Images and Import/Export */}
            <div className="relative">
              {/* Import/Export Labels */}
              <div className="flex justify-between mb-8">
                <div className="flex items-center bg-blue-100 px-4 py-2 rounded-full">
                  <MapPin className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="font-semibold text-blue-700">Import Solutions</span>
                </div>
                <div className="flex items-center bg-green-100 px-4 py-2 rounded-full">
                  <MapPin className="w-5 h-5 text-green-600 mr-2" />
                  <span className="font-semibold text-green-700">Export Solutions</span>
                </div>
              </div>

              {/* Image Gallery Grid */}
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  {/* Airplane Image */}
                  <div className="rounded-2xl overflow-hidden shadow-lg group">
                    <img 
                      src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                      alt="Cargo airplane" 
                      className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  
                  {/* Truck Image */}
                  <div className="rounded-2xl overflow-hidden shadow-lg group">
                    <img 
                      src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                      alt="Logistics truck" 
                      className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </div>
                
                <div className="space-y-6">
                  {/* Container Ship Image */}
                  <div className="rounded-2xl overflow-hidden shadow-lg group">
                    <img 
                      src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                      alt="Container ship" 
                      className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  
                  {/* Containers Image */}
                  <div className="rounded-2xl overflow-hidden shadow-lg group">
                    <img 
                      src="https://images.unsplash.com/photo-1586528116493-a029325540fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                      alt="Shipping containers" 
                      className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  
                  {/* Large Ship Image */}
                  <div className="rounded-2xl overflow-hidden shadow-lg group">
                    <img 
                      src="https://images.unsplash.com/photo-1605745341112-85968b19335b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                      alt="Large cargo ship" 
                      className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>

              {/* Decorative Dots */}
              <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 hidden xl:block">
                <div className="grid grid-cols-6 gap-2">
                  {Array.from({ length: 24 }).map((_, i) => (
                    <div key={i} className="w-2 h-2 bg-blue-300 rounded-full opacity-40"></div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-8">
              {/* Section Header */}
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-8 h-0.5 bg-blue-500 mr-3"></div>
                  <span className="text-blue-500 font-semibold uppercase tracking-wider text-sm">
                    ABOUT OUR COMPANY
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  Global Logistics Excellence
                </h2>
              </div>

              {/* Content Paragraphs */}
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  At BlueAnchor shipping Logistics, we are dedicated to transforming the way businesses experience global logistics through our commitment to excellence, reliability, and efficiency. As a premier provider in the logistics industry, we understand that timely and safe delivery is the backbone of any successful business.
                </p>

                <p className="text-lg">
                  Our mission is simple: to be the most dependable logistics partner for businesses and individuals alike. With years of experience and a team of dedicated professionals, we offer a comprehensive range of services, from local courier deliveries to international shipping.
                </p>

                <p className="text-lg">
                  We leverage the latest tracking technologies to provide real-time updates, offering you full visibility and peace of mind from start to finish. Our customer-focused approach means we're always here to answer questions, resolve issues, and support you at every step of the journey.
                </p>
              </div>

              {/* Company Values */}
              <div className="grid grid-cols-2 gap-6 pt-4">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      {value.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{value.title}</h4>
                      <p className="text-sm text-gray-600">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="pt-6">
                <button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer flex items-center">
                  Learn More About Our Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-800 text-white mb-50 mt-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Streamline Your Logistics?</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Get in touch with our team today to discuss customized logistics solutions for your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-gray-100 hover:shadow-lg flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-white hover:text-blue-600 flex items-center">
              <Mail className="w-5 h-5 mr-2" />
              Send Message
            </button>
          </div>
        </div>
      </div>

    
  
    </div>
    
  );
};

export default AboutPage;