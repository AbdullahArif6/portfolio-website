export default function Home() {
  return (
    <div>
      <section className="hero-section">
        <div>
          <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
          <p className="text-xl">Full-Stack Developer & Designer</p>
        </div>
      </section>
      
      <section className="grid md:grid-cols-2 gap-8 mt-12">
        <div className="card">
          <h2 className="text-2xl font-bold mb-4">My Skills</h2>
          <ul className="space-y-2">
            <li>React & Next.js</li>
            <li>JavaScript/TypeScript</li>
            <li>Tailwind CSS</li>
            <li>Node.js</li>
          </ul>
        </div>
        
        <div className="card">
          <h2 className="text-2xl font-bold mb-4">Recent Projects</h2>
          <ul className="space-y-2">
            <li>E-commerce Platform</li>
            <li>Blog Website</li>
            <li>Portfolio Website</li>
            <li>Mobile App</li>
          </ul>
        </div>
      </section>
    </div>
  );
}