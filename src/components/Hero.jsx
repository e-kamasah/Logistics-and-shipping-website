import { ArrowRight } from "lucide-react";

export const Hero = ({
  title = "Fast & Reliable Delivery",
  subtitle = "BlueAnchor Shipping and Logistics",
  description = "We provide international shipping and local delivery services with real-time tracking and guaranteed delivery times.",
  showTrackButton = true,
  backgroundImage = null, // <-- default background image
}) => {
  return (
    <div
      className="relative  overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0  bg-opacity-50"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center min-h-screen pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="text-blue-200 text-sm md:text-base font-medium mb-4 tracking-wide uppercase">
              {subtitle}
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              {title}
            </h1>

            <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed max-w-xl">
              {description}
            </p>

            {showTrackButton && (
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group bg-white text-blue-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  <span>Track Your Package</span>
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform duration-200"
                  />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
