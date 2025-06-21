const ErrorScreen = ({ error, onRetry }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center">
      <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 text-center max-w-md">
        <p className="text-white text-lg mb-4">Error: {error}</p>
        <button 
          onClick={onRetry}
          className="bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-lg transition-colors"
        >
          Try Again
        </button>
      </div>
    </div>
  )
}

export default ErrorScreen