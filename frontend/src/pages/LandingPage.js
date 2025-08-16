function LandingPage({ onLoginClick, onRegisterClick }) {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-blue-400 to-purple-500">
      <h1 className="text-5xl font-bold text-white mb-6">📝 My Notes App</h1>
      <p className="text-white mb-8 text-lg">Organize your thoughts, keep your notes safe!</p>
      <div className="space-x-4">
        <button
          onClick={onLoginClick}
          className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold shadow-md hover:bg-gray-100"
        >
          Login
        </button>
        <button
          onClick={onRegisterClick}
          className="bg-yellow-400 text-white px-6 py-2 rounded-lg font-semibold shadow-md hover:bg-yellow-500"
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
