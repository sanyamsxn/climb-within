import Header from "@/components/header";

export default function Contact() {
  return (
    <>
    <div id="headerP">
                    <Header/>
                </div>
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-950 text-gray-100 flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 mt-20">
        
        {/* Left: Contact Info */}
        <div className="space-y-8">
          <h2 className="text-4xl font-bold">
            Your Journey to the <span className="text-indigo-400">Peak</span> Starts Here 
          </h2>
          <p className="text-gray-400 text-lg">
            Have questions? Fill out the form and we&apos;ll get back to you as soon as possible.  
            We&apos;re excited to hear from you!
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 backdrop-blur-lg shadow-lg">
              <span className="text-indigo-400 text-2xl">📍</span>
              <p>Pune, India</p>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 backdrop-blur-lg shadow-lg">
              <span className="text-indigo-400 text-2xl">📧</span>
              <p>ashish@youremail.com</p>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 backdrop-blur-lg shadow-lg">
              <span className="text-indigo-400 text-2xl">📞</span>
              <p>+91 9983733333</p>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl shadow-2xl">
          <h3 className="text-2xl font-semibold mb-6 text-indigo-400">Send us a Message</h3>
          <form className="space-y-5">
            <div>
              <label className="block text-sm mb-2">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm mb-2">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm mb-2">Message</label>
              <textarea
                rows={5}
                placeholder="Your Message..."
                className=" resize-none w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400 outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-indigo-500 hover:bg-indigo-600 transition-all duration-300 font-semibold shadow-lg cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
    </>
  );
}
