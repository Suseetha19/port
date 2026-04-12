export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-10">
      
      {/* Title */}
      <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-fadeIn">
        About Me
      </h1>

      {/* Card Container */}
      <div className="max-w-2xl bg-gray-800/60 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-gray-700 hover:shadow-purple-500/20 transition duration-300 animate-slideUp">
        <p className="text-lg text-center leading-relaxed">
          Hi, I’m <span className="text-purple-400 font-semibold">Suseetha</span>, 
          a passionate <span className="text-green-400 font-semibold">Data Analyst</span> 
          with strong skills in <span className="text-blue-400">SQL</span>, 
          <span className="text-blue-400"> Microsoft Excel</span>, and 
          <span className="text-blue-400"> Power BI</span>. 
          I enjoy working with data to perform <span className="text-pink-400">data analysis</span>, 
          identify patterns, and build <span className="text-yellow-400">interactive dashboards</span> 
          that support data-driven decision-making.
          <br /><br />
          I have experience in <span className="text-white">data cleaning</span>, 
          <span className="text-white"> transformation</span>, and 
          <span className="text-white"> visualization</span>, and I am always eager to learn 
          new tools and techniques in the field of data analytics.
        </p>
      </div>
    </div>
  );
}