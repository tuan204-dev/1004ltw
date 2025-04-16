import React from "react";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        {/* Profile Header */}
        <div className="bg-gradient-to-r from-primary to-secondary p-8 text-white">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d"
              alt="Profile photo"
              className="w-32 h-32 rounded-full border-4 border-white object-cover shadow-md"
              data-image-keyword="professional portrait"
              data-image-color="blue"
            />
            <div>
              <h1 className="text-3xl font-bold">Alex Johnson</h1>
              <p className="text-xl opacity-90 mt-1">Senior Web Developer</p>
            </div>
          </div>
        </div>

        {/* Profile Content */}
        <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-dark mb-2 flex items-center gap-2">
                <i className="fas fa-user text-primary"></i> About Me
              </h2>
              <p className="text-gray-600">
                Passionate web developer with 8+ years of experience creating
                responsive, user-friendly websites. Specializing in modern
                JavaScript frameworks and clean UI design.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-dark mb-2 flex items-center gap-2">
                <i className="fas fa-envelope text-primary"></i> Contact
              </h2>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <i className="fas fa-envelope w-5"></i>
                  <span>
                    <a href="#" className="__cf_email__">
                      [email&#160;protected]
                    </a>
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <i className="fas fa-phone w-5"></i>
                  <span>(555) 123-4567</span>
                </li>
                <li className="flex items-center gap-2">
                  <i className="fas fa-map-marker-alt w-5"></i>
                  <span>San Francisco, CA</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-dark mb-2 flex items-center gap-2">
                <i className="fas fa-globe text-primary"></i> Website
              </h2>
              <a href="#" className="text-primary hover:underline">
                www.alexjohnson.dev
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-dark mb-2 flex items-center gap-2">
                <i className="fas fa-share-alt text-primary"></i> Social Media
              </h2>
              <div className="flex gap-4 text-2xl text-gray-600">
                <a
                  href="#"
                  className="hover:text-blue-500 transition"
                  title="Twitter"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className="hover:text-blue-700 transition"
                  title="LinkedIn"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  href="#"
                  className="hover:text-gray-800 transition"
                  title="GitHub"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="#"
                  className="hover:text-pink-600 transition"
                  title="Instagram"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-dark mb-2 flex items-center gap-2">
                <i className="fas fa-briefcase text-primary"></i> Portfolio
              </h2>
              <a href="#" className="text-primary hover:underline">
                www.alexjohnson.work
              </a>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-dark mb-2 flex items-center gap-2">
                <i className="fas fa-heart text-primary"></i> Hobbies &amp;
                Interests
              </h2>
              <div className="flex flex-wrap gap-2">
                {["Photography", "Hiking", "Reading", "Cooking", "Travel"].map(
                  (hobby) => (
                    <span
                      key={hobby}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {hobby}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-8 py-4 text-center text-gray-500 text-sm">
          © 2025 Alex Johnson. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default About;
