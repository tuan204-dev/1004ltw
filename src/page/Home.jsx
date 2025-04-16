import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-dark mb-8">Latest Articles</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
          <img
            src="https://images.unsplash.com/photo-1499750310107-5fef28a66643"
            alt="Workspace setup"
            className="w-full h-48 object-cover"
            data-image-keyword="workspace setup"
            data-image-color="blue"
          />
          <div className="p-6">
            <h2 className="text-xl font-bold text-dark mb-2">
              Productivity Tips for Remote Work
            </h2>
            <p className="text-gray-600 mb-4">
              Discover effective strategies to boost your productivity while
              working from home.
            </p>
            <Link to="#" className="text-primary font-medium hover:underline">
              Read more →
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
            alt="Code editor"
            className="w-full h-48 object-cover"
            data-image-keyword="code editor"
            data-image-color="black"
          />
          <div className="p-6">
            <h2 className="text-xl font-bold text-dark mb-2">
              Modern JavaScript Techniques
            </h2>
            <p className="text-gray-600 mb-4">
              Learn about the latest JavaScript features that will improve your
              coding workflow.
            </p>
            <Link to="#" className="text-primary font-medium hover:underline">
              Read more →
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
          <img
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4"
            alt="UI design"
            className="w-full h-48 object-cover"
            data-image-keyword="ui design"
            data-image-color="purple"
          />
          <div className="p-6">
            <h2 className="text-xl font-bold text-dark mb-2">
              UI Design Trends 2025
            </h2>
            <p className="text-gray-600 mb-4">
              Explore the emerging design trends that will dominate the digital
              landscape this year.
            </p>
            <Link to="#" className="text-primary font-medium hover:underline">
              Read more →
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
            alt="Team meeting"
            className="w-full h-48 object-cover"
            data-image-keyword="team meeting"
            data-image-color="green"
          />
          <div className="p-6">
            <h2 className="text-xl font-bold text-dark mb-2">
              Effective Team Collaboration
            </h2>
            <p className="text-gray-600 mb-4">
              How to foster better communication and teamwork in your
              organization.
            </p>
            <Link to="#" className="text-primary font-medium hover:underline">
              Read more →
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
          <img
            src="https://images.unsplash.com/photo-1579389083078-4e7018379f7e"
            alt="Mobile app"
            className="w-full h-48 object-cover"
            data-image-keyword="mobile app"
            data-image-color="teal"
          />
          <div className="p-6">
            <h2 className="text-xl font-bold text-dark mb-2">
              Mobile App Development Guide
            </h2>
            <p className="text-gray-600 mb-4">
              A comprehensive guide to building successful mobile applications.
            </p>
            <Link to="#" className="text-primary font-medium hover:underline">
              Read more →
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
          <img
            src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d"
            alt="Mountain landscape"
            className="w-full h-48 object-cover"
            data-image-keyword="mountain landscape"
            data-image-color="black_and_white"
          />
          <div className="p-6">
            <h2 className="text-xl font-bold text-dark mb-2">
              The Art of Work-Life Balance
            </h2>
            <p className="text-gray-600 mb-4">
              Finding harmony between your professional and personal life.
            </p>
            <Link to="#" className="text-primary font-medium hover:underline">
              Read more →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
