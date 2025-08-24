export default function Creations() {
  return (
    <section className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-4xl font-bold mb-10">My Creations</h1>
      
      <div className="space-y-8 max-w-3xl">
        
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform">
          <h2 className="text-2xl font-semibold text-purple-400">Healthcare Live Chat System</h2>
          <p className="mt-2 text-lg">
            Developed a real-time chat platform enabling patients to connect with admins via WebSocket messaging.  
            Integrated an intelligent chatbot for offline handling and seamless transition to live chat.
          </p>
        </div>
        
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform">
          <h2 className="text-2xl font-semibold text-blue-400">Student Database Management System</h2>
          <p className="mt-2 text-lg">
            Built a student portal with role-based access for administrators to manage student records securely, 
            improving data access efficiency by 60%.
          </p>
        </div>
        
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform">
          <h2 className="text-2xl font-semibold text-green-400">Climate Analysis Dashboard</h2>
          <p className="mt-2 text-lg">
            Analyzed 2+ years of climate data using Python, Pandas, and NumPy.  
            Created a visual dashboard for weather trend predictions, enhancing decision-making with a user-friendly UI.
          </p>
        </div>

      </div>
    </section>
  );
}