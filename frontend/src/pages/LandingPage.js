function LandingPage({ onLoginClick, onRegisterClick }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-1/4 right-20 w-16 h-16 bg-yellow-300/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-pink-300/10 rounded-full animate-ping"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-green-300/10 rounded-full animate-pulse"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col justify-center items-center min-h-screen px-4">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-fade-in">
          {/* Logo/Icon */}
          <div className="mb-6">
            <div className="w-24 h-24 mx-auto bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-4xl">
              📝
            </div>
          </div>

          {/* Title */}
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 tracking-tight">
            My Notes
            <span className="block text-yellow-300 text-5xl md:text-6xl mt-2">
              App
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-white/90 text-xl md:text-2xl mb-4 max-w-2xl mx-auto leading-relaxed">
            Organize your thoughts, capture your ideas, and keep your notes safe in the cloud
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 text-white/80">
            <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <span>✨</span> Beautiful Interface
            </span>
            <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <span>🔒</span> Secure & Private
            </span>
            <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <span>📱</span> Responsive Design
            </span>
            <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <span>⚡</span> Fast & Reliable
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
          <button
            onClick={onLoginClick}
            className="flex-1 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 hover:bg-gray-50 flex items-center justify-center gap-3"
          >
            <span>🔑</span>
            Login
          </button>
          <button
            onClick={onRegisterClick}
            className="flex-1 bg-yellow-400 text-gray-800 px-8 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 hover:bg-yellow-300 flex items-center justify-center gap-3"
          >
            <span>🚀</span>
            Get Started
          </button>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-white/70 text-sm">
            Join thousands of users who trust their notes with us
          </p>
          <div className="flex justify-center items-center gap-8 mt-4 text-white/60">
            <div className="text-center">
              <div className="text-2xl font-bold">10K+</div>
              <div className="text-xs">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">100K+</div>
              <div className="text-xs">Notes Created</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">99.9%</div>
              <div className="text-xs">Uptime</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-white/10">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
        </svg>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
}

export default LandingPage;