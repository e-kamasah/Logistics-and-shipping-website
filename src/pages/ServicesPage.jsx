import { useState } from 'react';
import { Truck, Plane, Ship, Package, CheckCircle, MapPin, Shield, Globe, MousePointer } from 'lucide-react';
import HeroSection from '../components/HeroSection';


export default function ServicesPage() {
  const [hoveredMethod, setHoveredMethod] = useState(null);

  const shippingMethods = [
    {
      id: 1,
      number: '01',
      icon: <Truck className="w-16 h-16 text-blue-600" />,
      title: 'Road Freight Service',
      description: 'Standard ground shipping is a cost-effective and reliable option for domestic shipments. It involves the use of trucks for overland transportation and is suitable for packages of various sizes.',
      image: 'https://images.unsplash.com/photo-1730189695336-9976f883421c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 2,
      number: '02',
      icon: <Plane className="w-16 h-16 text-blue-600" />,
      title: 'Express Air Shipping',
      description: 'Express air shipping is ideal for time-sensitive shipments. It ensures rapid delivery by utilizing airfreight services. This method is commonly chosen for urgent deliveries and international shipments.',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      number: '03',
      icon: <Ship className="w-16 h-16 text-blue-600" />,
      title: 'Maritime transportation',
      description: 'Ocean freight shipping is a cost-effective choice for international cargo. It involves shipping goods via container vessels. This method is suitable for large shipments and non-urgent deliveries.',
      image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const transportServices = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: 'Freight Forwarding',
      description: 'We handle customs clearance, documentation, and logistics to ensure smooth and efficient delivery of cargo between countries.'
    },
    {
      icon: <MousePointer className="w-8 h-8" />,
      title: 'Online Tracking System',
      description: 'We provide an advanced tracking system to keep customers informed about the status and location of their shipments in real-time.'
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: 'Warehousing & Distribution',
      description: 'We provide efficient storage and distribution solutions to help businesses manage their inventory, reduce transit times, and optimize their supply chains.'
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Great logistical support',
      description: 'Our logistical support service is designed to simplify and streamline every step of the shipping process for our clients.'
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: 'Cross-Border Shipping',
      description: 'Priority Mail Logistics helps navigate customs procedures and border regulations to ensure efficient cross-border logistics.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Cargo Insurance',
      description: 'We offer insurance options to protect customers\' goods during transit, giving peace of mind and financial protection in the event of loss or damage.'
    }
  ];

  const additionalServices = [
    {
      icon: <MapPin className="w-12 h-12" />,
      title: 'Cross-Border Shipping'
    },
    {
      icon: <CheckCircle className="w-12 h-12" />,
      title: 'Customized Logistics Solutions'
    },
    {
      icon: <MousePointer className="w-12 h-12" />,
      title: 'Last-Mile Delivery'
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: 'Supply Chain Optimization'
    },
    {
      icon: <Package className="w-12 h-12" />,
      title: 'E-Commerce Logistics'
    }
  ];

  return (
    <div className=" bg-white">
      <HeroSection
        backgroundImage="https://images.unsplash.com/photo-1645255315921-09c386465750?q=80&w=1470&auto=format&fit=crop"
        title="Our Services"
        height="h-96"
        breadcrumbs={[
          { label: "Home", href: "/", active: false },
          { label: "Services", href: "/services", active: true },
        ]}
      />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-blue-100 rounded-full text-sm font-medium text-blue-700 border border-blue-200">
              ⚡ TRANSPORT & LOGISTICS SERVICES
            </span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8">
            Our Shipping Methods
          </h1>
        </div>
      </section>

      {/* Shipping Methods Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {shippingMethods.map((method) => (
              <div
                key={method.id}
                className="relative group cursor-pointer overflow-hidden rounded-2xl h-96"
                onMouseEnter={() => setHoveredMethod(method.id)}
                onMouseLeave={() => setHoveredMethod(null)}
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${method.image})` }}
                />
                
                {/* Overlay */}
                <div className={`absolute inset-0 transition-all duration-300 ${
                  hoveredMethod === method.id 
                    ? 'bg-transparent bg-opacity-30' 
                    : ' bg-opacity-90'
                }`} />
                
                {/* Content */}
                <div className="relative h-full p-8 flex flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <div className={`transition-all duration-300 ${
                      hoveredMethod === method.id ? 'text-white' : 'text-blue-600'
                    }`}>
                      {method.icon}
                    </div>
                    <span className={`text-6xl font-bold transition-all duration-300 ${
                      hoveredMethod === method.id ? 'text-white text-opacity-50' : 'text-blue-600'
                    }`}>
                      {method.number}
                    </span>
                  </div>
                  
                  <div>
                    <h3 className={`text-2xl font-bold mb-4 transition-all duration-300 ${
                      hoveredMethod === method.id ? 'text-white' : 'text-gray-900'
                    }`}>
                      {method.title}
                    </h3>
                    <p className={`text-sm leading-relaxed transition-all duration-300 ${
                      hoveredMethod === method.id ? 'text-white text-opacity-90' : 'text-gray-600'
                    }`}>
                      {method.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transport & Logistics Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-blue-600 rounded text-sm font-medium uppercase tracking-wide">
                  ⚡ BlueAnchor shipping LOGISTICS
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-8">
                Our Transport & Logistics Services
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {transportServices.map((service, index) => (
                  <div key={index} className="flex space-x-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                      <p className="text-blue-100 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right Image */}
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Logistics Operations" 
                className="w-full h-96 object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium uppercase tracking-wide">
              ⚡ BlueAnchor shipping LOGISTICS
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-16">
            Additional Services
          </h2>
          
          <div className="grid md:grid-cols-5 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-4 group-hover:shadow-md transition-shadow duration-200">
                  <div className="text-blue-600">
                    {service.icon}
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solution CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us to discuss your specific shipping requirements
          </p>
          
          <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-200">
            Contact Us
          </button>
        </div>
      </section>


 
    </div>
  );
}