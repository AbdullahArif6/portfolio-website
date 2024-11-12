export default function About() {
    return (
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">About Me</h1>
        
        <div className="card">
          <h2 className="text-2xl font-bold mb-4">Professional Background</h2>
          <p className="mb-4">
            I'm a passionate Full-Stack Developer with 5 years of experience building
            web applications. I specialize in React, Next.js, and Node.js.
          </p>
          <p>
            My journey in web development started when I built my first website
            in college. Since then, I've worked on numerous projects and continue
            to learn new technologies.
          </p>
        </div>
        
        <div className="card">
          <h2 className="text-2xl font-bold mb-4">Education</h2>
          <ul className="space-y-2">
            <li>B.S. in Computer Science - University Name</li>
            <li>Web Development Bootcamp - Coding Academy</li>
            <li>Various Online Certifications</li>
          </ul>
        </div>
      </div>
    );
  }
  