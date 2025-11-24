import Tilt from 'react-parallax-tilt';
import Raghav from '../../assets/profile/Raghav.jpeg';

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center py-16 px-4 sm:px-6 lg:px-8 font-sans bg-gray-900"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-12 xl:gap-16">
          {/* Left Content - Adjusted for better balance */}
          <div className="lg:w-5/10 text-center lg:text-left space-y-6">
            {/* Pre-title */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700/50 lg:mx-0 mx-auto">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-300 tracking-wide">
               Full Stack DEVELOPER
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Raghavendra
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 mt-2">
                  Tavati
                </span>
              </h1>
              
              {/* Subtitle */}
              {/* <div className="flex flex-col sm:flex-row items-center gap-2 text-xl sm:text-2xl text-gray-300 font-light justify-center lg:justify-start">
                <span>Full Stack Developer</span>
                <div className="hidden sm:block w-1 h-1 bg-purple-500 rounded-full mx-2"></div>
                <span className="text-purple-400">MERN Specialist</span>
              </div> */}
            </div>

            {/* Description */}
            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl lg:max-w-none mx-auto lg:mx-0">
              I specialize in building scalable, modern web applications using the MERN stack. 
              With expertise in both frontend and backend development, I create seamless digital 
              experiences that combine elegant design with robust functionality. Passionate about 
              clean code, performance optimization, and delivering exceptional user experiences.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center lg:justify-start">
              <a
                href="https://drive.google.com/file/d/1SJHfKfE_oQL9Yq3CDH99MXwzjSJbSlXE/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-8 py-4 font-semibold text-white transition-all duration-300 rounded-xl bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105"
              >
                <span>Download Resume</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </a>
              
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 font-semibold text-white transition-all duration-300 rounded-xl border border-purple-500/50 hover:bg-purple-500/10 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/10"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Right Content - Image - Adjusted width */}
          <div className="lg:w-7/12 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-800 rounded-full blur-3xl opacity-20 animate-pulse -z-10"></div>
              
              <Tilt
                className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                perspective={1000}
                scale={1.05}
                transitionSpeed={2000}
                gyroscope={true}
              >
                {/* Image Container with Gradient Border */}
                <div className="relative w-full h-full rounded-full p-1 bg-gradient-to-br from-purple-500 via-purple-600 to-purple-800 shadow-2xl shadow-purple-500/20">
                  <img
                    src={Raghav}
                    alt="Raghavendra Tavati"
                    className="w-full h-full rounded-full object-cover border-4 border-gray-900"
                  />
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500 rounded-full animate-bounce shadow-lg shadow-purple-500/50"></div>
                <div className="absolute -bottom-2 -left-4 w-6 h-6 bg-purple-400 rounded-full animate-bounce shadow-lg shadow-purple-400/50" style={{animationDelay: '0.5s'}}></div>
              </Tilt>

              {/* Experience Badge
              <div className="absolute -bottom-4 -right-4 bg-gray-800/90 backdrop-blur-sm border border-gray-700 rounded-2xl px-6 py-3 shadow-2xl">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">2+</div>
                  <div className="text-xs text-gray-400 font-medium">YEARS EXPERIENCE</div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;