export default function Contact() {
    return (
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Contact Me</h1>
        
        <div className="card">
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Name</label>
              <input type="text" className="input-field" placeholder="Your name" />
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Email</label>
              <input type="email" className="input-field" placeholder="your@email.com" />
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea 
                className="input-field" 
                rows="4" 
                placeholder="Your message"
              ></textarea>
            </div>
            
            <button type="submit" className="button">
              Send Message
            </button>
          </form>
        </div>
        
        <div className="card mt-8">
          <h2 className="text-2xl font-bold mb-4">Other Ways to Connect</h2>
          <ul className="space-y-2">
            <li>Email: example@email.com</li>
            <li>LinkedIn: /in/yourprofile</li>
            <li>GitHub: @yourusername</li>
          </ul>
        </div>
      </div>
    );
  }