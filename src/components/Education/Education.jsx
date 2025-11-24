import { FaAward, FaCalendarAlt, FaGraduationCap } from "react-icons/fa";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="relative py-20 px-4 sm:px-6 lg:px-8 font-sans bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-500/10 to-purple-600/10 border border-purple-500/20 mb-6">
            <FaGraduationCap className="text-purple-400 text-lg" />
            <span className="text-sm font-semibold text-purple-300 tracking-wider">
              EDUCATIONAL PATH
            </span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">Education</span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-500 mx-auto mb-8 rounded-full shadow-lg shadow-purple-500/30"></div>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed font-light">
            The foundation of my technical expertise, built through formal education and specialized training
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative">
          {/* Main Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1.5 bg-gradient-to-b from-purple-400 via-purple-500 to-purple-600 h-full rounded-full shadow-2xl shadow-purple-500/30"></div>

          {/* Education Cards */}
          <div className="space-y-8 lg:space-y-12">
            {education.map((edu, index) => (
              <div
                key={edu.id}
                className={`relative flex flex-col lg:flex-row items-center ${
                  index % 2 === 0 ? 'lg:justify-start' : 'lg:justify-end'
                }`}
              >
                {/* Timeline Node */}
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full border-4 border-gray-900 shadow-2xl shadow-purple-500/50 z-20 items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full shadow-inner"></div>
                  <div className="absolute w-6 h-6 bg-purple-400 rounded-full opacity-50 animate-ping"></div>
                </div>

                {/* Education Card */}
                <div className={`w-full lg:w-2/5 transform transition-all duration-500 hover:scale-105 ${
                  index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'
                }`}>
                  <div className="relative bg-gray-800/40 backdrop-blur-xl border border-gray-700/30 rounded-3xl p-8 shadow-2xl hover:shadow-2xl hover:shadow-purple-500/30 hover:border-purple-400/50 transition-all duration-500 group overflow-hidden">
                    
                    {/* Background Gradient Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Header */}
                    <div className="relative z-10">
                      <div className="flex items-start gap-6 mb-6">
                        {/* Institution Logo */}
                        <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-white to-gray-100 rounded-2xl p-3 shadow-2xl group-hover:shadow-purple-500/20 transition-all duration-500 transform group-hover:rotate-3">
                          <img
                            src={edu.img}
                            alt={edu.school}
                            className="w-full h-full object-contain"
                          />
                        </div>

                        {/* Degree Info */}
                        <div className="flex-1 min-w-0">
                          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-purple-300 transition-all duration-300">
                            {edu.degree}
                          </h3>
                          <h4 className="text-xl font-semibold text-purple-300 mb-3">
                            {edu.school}
                          </h4>
                          
                          {/* Meta Information */}
                          <div className="flex flex-wrap gap-3">
                            <div className="flex items-center gap-2 text-sm text-gray-300 bg-gray-700/50 px-4 py-2 rounded-full border border-gray-600/50">
                              <FaCalendarAlt className="text-purple-400" />
                              <span>{edu.date}</span>
                            </div>
                            <div className={`flex items-center gap-2 text-sm font-bold text-white px-4 py-2 rounded-full ${
                              edu.grade === 'Pursuing' 
                                ? 'bg-gradient-to-r from-amber-500 to-amber-600'
                                : 'bg-gradient-to-r from-purple-500 to-purple-600'
                            }`}>
                              <FaAward className="text-white" />
                              <span>{edu.grade}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <div className="relative">
                        <p className="text-gray-300 leading-relaxed text-base border-l-2 border-purple-500/30 pl-4 py-2 group-hover:border-purple-400 transition-all duration-300">
                          {edu.desc}
                        </p>
                      </div>

                      {/* Animated Border Bottom */}
                      <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-purple-500 to-purple-600 transition-all duration-500 group-hover:w-full rounded-full"></div>
                    </div>

                    {/* Corner Accents */}
                    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-purple-500/30 rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-purple-500/30 rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile View */}
        <div className="lg:hidden space-y-8 mt-12">
          {education.map((edu, index) => (
            <div
              key={edu.id}
              className="relative bg-gray-800/40 backdrop-blur-xl border border-gray-700/30 rounded-3xl p-8 shadow-2xl hover:shadow-2xl hover:shadow-purple-500/30 hover:border-purple-400/50 transition-all duration-500 group overflow-hidden"
            >
              {/* Background Gradient Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Header */}
              <div className="relative z-10">
                <div className="flex items-start gap-6 mb-6">
                  {/* Institution Logo */}
                  <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-white to-gray-100 rounded-2xl p-3 shadow-2xl group-hover:shadow-purple-500/20 transition-all duration-500">
                    <img
                      src={edu.img}
                      alt={edu.school}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Degree Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-purple-300 transition-all duration-300">
                      {edu.degree}
                    </h3>
                    <h4 className="text-xl font-semibold text-purple-300 mb-3">
                      {edu.school}
                    </h4>
                    
                    {/* Meta Information */}
                    <div className="flex flex-wrap gap-3">
                      <div className="flex items-center gap-2 text-sm text-gray-300 bg-gray-700/50 px-4 py-2 rounded-full border border-gray-600/50">
                        <FaCalendarAlt className="text-purple-400" />
                        <span>{edu.date}</span>
                      </div>
                      <div className={`flex items-center gap-2 text-sm font-bold text-white px-4 py-2 rounded-full ${
                        edu.grade === 'Pursuing' 
                          ? 'bg-gradient-to-r from-amber-500 to-amber-600'
                          : 'bg-gradient-to-r from-purple-500 to-purple-600'
                      }`}>
                        <FaAward className="text-white" />
                        <span>{edu.grade}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="relative">
                  <p className="text-gray-300 leading-relaxed text-base border-l-2 border-purple-500/30 pl-4 py-2 group-hover:border-purple-400 transition-all duration-300">
                    {edu.desc}
                  </p>
                </div>

                {/* Animated Border Bottom */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-purple-500 to-purple-600 transition-all duration-500 group-hover:w-full rounded-full"></div>
              </div>

              {/* Corner Accents */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-purple-500/30 rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-purple-500/30 rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-500/10 to-purple-600/10 border border-purple-500/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Continuous Growth</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I believe in lifelong learning and continuously strive to enhance my skills through 
              personal projects, online courses, and staying updated with the latest technologies.
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-purple-600 mx-auto rounded-full"></div>
          </div>
        </div> */}
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-40 left-5 w-4 h-4 bg-purple-400 rounded-full opacity-60 animate-pulse shadow-lg shadow-purple-400/30"></div>
      <div className="absolute bottom-40 right-8 w-6 h-6 bg-purple-500 rounded-full opacity-40 animate-bounce shadow-lg shadow-purple-500/30" style={{animationDelay: '0.5s'}}></div>
      <div className="absolute top-1/3 right-12 w-3 h-3 bg-blue-400 rounded-full opacity-70 animate-ping shadow-lg shadow-blue-400/30"></div>
    </section>
  );
};

export default Education;