const About = () => {
  return (
    <div className="flex justify-center px-4 sm:px-6 lg:px-10 my-10">
      <div className="w-full max-w-3xl bg-base-200 shadow-xl hover:shadow-2xl rounded-3xl p-6 md:p-8">
        <h1 className="text-3xl font-bold text-center mb-7">About MyBook</h1>
        <p className="text-lg text-center mb-4">
          MyBook is a secure and reliable digital journal designed to safeguard your thoughts and memories. With a focus on simplicity and user experience, it lets you record your life moments effortlessly. MyBook ensures complete privacy and a distraction-free environment, making journaling a truly personal and meaningful experience.
        </p>

        <div className="divider"></div>

        <h2 className="text-2xl font-bold text-center mb-4">What You Can Do</h2>
        <ul className="space-y-3 text-lg px-4 sm:px-6">
          <li className="flex items-start gap-2">
            <span>✅</span>
            <span>
              <strong>Create & Manage Entries:</strong> Quickly add, update, and remove journal entries while keeping them secure.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span>📅</span>
            <span>
              <strong>Preserve Your Memories:</strong> Document events from any day to build a lasting collection of experiences.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span>🎨</span>
            <span>
              <strong>Customize Your Profile:</strong> Personalize your identity with full control over your account's privacy and settings.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span>🔒</span>
            <span>
              <strong>Robust Security:</strong> Keep your entries safe with encrypted authentication, strong passwords, and secure cookie management.
            </span>
          </li>
        </ul>

        <div className="divider"></div>

        <h2 className="text-2xl font-bold text-center mb-4">Tech Stack</h2>
        <p className="text-lg text-center mb-4">
          Powered by modern technologies for a <strong>safe</strong> and <strong>high-performance</strong> journaling platform:
        </p>
        <ul className="space-y-3 text-lg px-4 sm:px-6">
          <li className="flex items-start gap-2">
            <span>⚛️</span>
            <span>
              <strong>Frontend:</strong> React.js with DaisyUI & TailwindCSS
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span>🖥️</span>
            <span>
              <strong>Backend:</strong> Node.js & Express.js
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span>🔑</span>
            <span>
              <strong>Authentication:</strong> JWT with secure HTTP-only cookies
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span>📡</span>
            <span>
              <strong>State Management:</strong> Redux Toolkit (RTK) & RTK Query
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span>🗄️</span>
            <span>
              <strong>Database:</strong> MongoDB with server-side data validation
            </span>
          </li>
        </ul>

        <div className="divider"></div>

        <p className="text-lg text-center">
          Begin your journaling journey with <strong>MyBook</strong> – where your memories remain <strong>private</strong>, <strong>personal</strong>, and always within reach.
        </p>

        <div className="text-center mt-5">
          <a href="https://github.com/Hariom-sharma01/MyBook" target="_blank">
            <button className="btn btn-primary">
              Explore the Code on GitHub
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
