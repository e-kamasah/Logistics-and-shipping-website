import React from "react";

const HeroSection = ({ backgroundImage, title, breadcrumbs = [], height = "h-96" }) => {
  return (
    <div className={`relative ${height} w-full overflow-hidden`}>
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-slate-900/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">{title}</h1>

        {breadcrumbs.length > 0 && (
          <div className="flex items-center space-x-2 text-white">
            {breadcrumbs.map((crumb, index) => (
              <React.Fragment key={index}>
                <a
                  href={crumb.href}
                  className={`${
                    crumb.active
                      ? "text-blue-400 font-medium"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {crumb.label}
                </a>
                {index < breadcrumbs.length - 1 && <span className="text-gray-400">/</span>}
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
