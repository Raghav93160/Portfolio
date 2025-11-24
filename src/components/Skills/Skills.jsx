import { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";
import { SkillsInfo } from "../../constants";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="skills"
      className="relative py-20 px-4 sm:px-6 lg:px-8 font-sans bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className={`text-center mb-16 transition-all duration-700 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700/50 mb-4">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-300 tracking-wide">
              TECHNICAL SKILLS
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Technologies I <span className="text-purple-500">Work With</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            A comprehensive overview of my technical expertise and the tools I use to build amazing digital experiences
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid gap-8 lg:gap-10">
          {SkillsInfo.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`transition-all duration-500 delay-${categoryIndex * 100} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {/* Category Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                  {category.title}
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-purple-600 mx-auto rounded-full"></div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <Tilt
                    key={skill.name}
                    tiltMaxAngleX={5}
                    tiltMaxAngleY={5}
                    perspective={1000}
                    scale={1.05}
                    transitionSpeed={1500}
                    gyroscope={true}
                    className="w-full h-full"
                  >
                    <div
                      className="flex flex-col items-center justify-center p-6 bg-gray-800/30 backdrop-blur-sm 
                                border border-gray-700/50 rounded-2xl text-center cursor-default
                                transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20
                                hover:bg-gray-700/40 hover:border-purple-500/50 h-full group"
                      style={{
                        transitionDelay: isVisible ? `${200 + skillIndex * 50}ms` : '0ms'
                      }}
                    >
                      {/* Skill Icon */}
                      <div className="w-16 h-16 mb-4 flex items-center justify-center 
                                    bg-gray-700/50 rounded-xl p-3 transition-all duration-300
                                    group-hover:bg-purple-500/10 group-hover:scale-110">
                        <img
                          src={skill.logo}
                          alt={`${skill.name} logo`}
                          className="w-8 h-8 object-contain transition-all duration-300 
                                    group-hover:brightness-0 group-hover:invert"
                          loading="lazy"
                        />
                      </div>
                      
                      {/* Skill Name */}
                      <span className="text-base font-semibold text-gray-200 group-hover:text-white transition-colors duration-300">
                        {skill.name}
                      </span>
                      
                      {/* Hover Effect Line */}
                      <div className="w-0 h-0.5 bg-purple-500 mt-2 transition-all duration-300 group-hover:w-8 rounded-full"></div>
                    </div>
                  </Tilt>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        {/* <div className={`text-center mt-16 transition-all duration-700 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-3">Always Learning</h3>
            <p className="text-gray-400 leading-relaxed">
              I'm constantly exploring new technologies and frameworks to stay updated with the latest trends 
              in web development. Currently diving deeper into advanced React patterns, Node.js optimization, 
              and cloud technologies.
            </p>
          </div>
        </div> */}
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-3 h-3 bg-purple-500 rounded-full opacity-40 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-4 h-4 bg-purple-400 rounded-full opacity-30 animate-bounce" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-20 w-2 h-2 bg-blue-400 rounded-full opacity-50 animate-ping"></div>
    </section>
  );
};

export default Skills;