import { useState } from 'react';
import Hero from '../components/Hero';
import { Truck, Plane, Package, Phone, CheckCircle } from 'lucide-react';

export default function Homepage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const stats = [
    { number: '20+', label: 'YEARS EXPERIENCE' },
    { number: '500+', label: 'ACTIVE GLOBAL LOCATIONS' },
    { number: '99.1%', label: 'ON-TIME DELIVERY RATE' },
    { number: '120+', label: 'COUNTRIES COVERED' },
    { number: '25M+', label: 'TONS TRANSPORTED ANNUALLY' },
    { number: '200+', label: 'GLOBAL PARTNERS' }
  ];

  const features = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Decades of Expertise',
      description: '20+ years navigating global logistics challenges.'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Always-On Support',
      description: '24/7 multilingual assistance across time zones.'
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: 'Tailored Logistics Solutions',
      description: 'Flexible options for SMEs to global enterprises.'
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: 'Competitive Pricing',
      description: 'Optimized cost-efficiency without compromising speed.'
    }
  ];

  return (
    <div className="bg-white">
      <Hero backgroundImage="/shipping-image.jpg" />
      
      {/* Excellence Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-4">
            <span className="inline-block px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 border border-gray-200">
              CUSTOMER CENTRIC APPROACH
            </span>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left side - Main content */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Experience Excellence with BlueAnchor Logistics
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We prioritize precision, reliability, and a customer-centric approach, making 
                your satisfaction our top priority. Experience the difference of a logistics 
                partner committed to excellence - experience BlueAnchor Logistics.
              </p>
              
              {/* Featured card */}
              <div className="bg-slate-800 rounded-2xl p-8 text-white">
                <div className="w-12 h-12 bg-blue-400 rounded-xl flex items-center justify-center mb-6">
                  <Package className="w-6 h-6 text-slate-800" />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Innovative Solutions for the Future
                </h3>
                <p className="text-slate-300">
                  Choose BlueAnchor Logistics for commitment, reliability, and seamless service. We 
                  understand that your shipments are more than packages.
                </p>
              </div>
            </div>
            
            {/* Right side - Service cards */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                  <Plane className="w-6 h-6 text-gray-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Comprehensive Range of Services
                </h3>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-gray-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Trust is the backbone of our operations
                </h3>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                  <Truck className="w-6 h-6 text-gray-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Unparalleled Expertise in Logistics
                </h3>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-gray-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Dedicated Customer Support
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats and Logistics Solutions Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Transport Images */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="relative rounded-2xl overflow-hidden h-48 bg-blue-100">
              <img 
                src="/sea.jpg" 
                alt="Sea transport" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-medium">
                Sea
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-48 bg-gray-100">
              <img 
                src="/plane.webp" 
                alt="Air transport" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-medium">
                Air
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-48 bg-orange-100">
              <img 
                src="/trucks.webp" 
                alt="Land transport" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-medium">
                Land
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Seamless BlueAnchor Shipping and Logistics
              </h2>
              <p className="text-gray-600">
                For over 20 years, BlueAnchor has been powering supply chains with efficient, 
                reliable, and scalable logistics services worldwide.
              </p>
            </div>
            <div>
              <p className="text-gray-600">
                BlueAnchor is a global logistics company specializing in ocean freight, inland transport, warehousing, 
                and integrated supply chain solutions. With a worldwide technology network, 
                businesses grow across borders with speed and efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose BlueAnchor Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden h-96">
                <img 
                  src="https://images.unsplash.com/photo-1689148455895-7145a0f8b222?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="BlueAnchor logistics" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
            
            {/* Right side - Content */}
            <div>
              <div className="mb-6">
                <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                  WHY CHOOSE BLUEANCHOR
                </span>
              </div>
              
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                With BlueAnchor, <span className="text-gray-500">you're not just choosing a carrier — you're choosing</span> a logistics partner built for the future.
              </h2>
              
              <div className="mb-8">
                <div className="flex items-center space-x-2 mb-6">
                  <span className="text-lg font-semibold text-gray-900">Get Started</span>
                  <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">→</span>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {features.map((feature, index) => (
                    <div key={index} className="flex space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Form */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <span className="text-blue-600 font-medium">Contact Us</span>
              </div>
              
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Contact us to request a quote today
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name*
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="MO Surtam"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email*
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="hello@email.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone*
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+123 456 789"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company*
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Add Company"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Please type your message here..."
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
                >
                  Get In Touch
                </button>
              </form>
            </div>
            
            {/* Right side - Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden h-96">
                <img 
                  src="https://images.unsplash.com/photo-1680034975991-beff14a0dbbd?q=80&w=1166&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Contact us" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

   
    </div>
  );
}