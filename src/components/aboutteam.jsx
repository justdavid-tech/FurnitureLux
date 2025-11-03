import { useState } from "react";

const teamData = [
  {
    id: 1,
    name: "David Thompson",
    role: "Chief Executive Officer",
    description:
      "As the founder and CEO of LuxFurnish, David brings over a decade of design experience, leading our mission to blend craftsmanship with contemporary living. His leadership inspires innovation and timeless creativity.",
    video: "/asset/videos/ceo-intro.mp4",
  },
  {
    id: 2,
    name: "Maria Daniels",
    role: "Marketing Manager",
    description:
      "Maria leads our marketing strategy with precision and heart. She ensures LuxFurnish’s story reaches the right audience, blending brand storytelling with digital innovation and global design trends.",
    video: "/asset/videos/marketing.mp4",
  },
  {
    id: 3,
    name: "James Okoro",
    role: "Sales Manager",
    description:
      "James builds relationships that last. His expertise in customer engagement and market growth ensures that every LuxFurnish client enjoys a seamless, premium experience from inquiry to delivery.",
    video: "/asset/videos/sales.mp4",
  },
];

export default function AboutTeam() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
        Meet Our <span className="text-brand">Leadership</span> Team
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
            {teamData[activeIndex].name}
          </h3>
          <p className="text-brand font-medium mb-4">
            {teamData[activeIndex].role}
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            {teamData[activeIndex].description}
          </p>
        </div>

        {/* Video Section */}
        <div className="md:w-1/2">
          <video
            src={teamData[activeIndex].video}
            controls
            className="w-full h-72 rounded-2xl object-cover shadow-xl"
          ></video>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-3 mt-10">
        {teamData.map((member, index) => (
          <button
            key={member.id}
            onClick={() => setActiveIndex(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              activeIndex === index
                ? "bg-brand scale-110 shadow-md"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}
