import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
  const user = useSelector((state) => state.user);

  return (
    <div>
      <div className="flex justify-center items-center min-h-[calc(100svh-64px-40px)] relative">
        <div className="text-center py-10 max-w-3xl mx-4">
          {user ? (
            <>
              <h1 className="text-3xl xl:text-5xl font-bold text-primary">
                Welcome Back, {user.data.firstName}
              </h1>
              <p className="text-lg mt-4">
                Great to see you again 😊 Your journal is safe, private, and
                always accessible. It’s your space, your voice — keep expressing
                and evolving! 🚀✨
              </p>
              <Link to="/entries" className="btn btn-primary mt-6">
                Go to Your Entries
              </Link>
            </>
          ) : (
            <>
              <h1 className="text-3xl xl:text-5xl font-bold text-primary">
                Welcome to MyBook
              </h1>
              <p className="text-lg mt-4">
                We're glad you're here 😊 Log in to start journaling — your
                entries remain private, secure, and always available. Share your
                story, your way! 🚀✨
              </p>
              <Link to="/entries" className="btn btn-primary mt-6">
                Get Started
              </Link>
            </>
          )}
        </div>
        <div className="absolute bottom-10 animate-bounce">
          <span className="text-gray-500 text-sm">
            Scroll down to discover more ↓
          </span>
        </div>
      </div>

      <div className="flex justify-center items-center min-h-[calc(100svh-64px-40px)]">
        <div className="mt-16 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center pb-2">
            How It Works & Key Highlights
          </h2>

          <div className="grid md:grid-cols-2 gap-10 my-10">
            <div>
              <h3 className="text-xl font-semibold text-center md:text-left">
                Getting Started is Easy
              </h3>
              <div className="mt-6 space-y-6">
                <div className="p-4 bg-base-100 shadow-lg rounded-lg">
                  <h4 className="text-lg font-semibold">1. Sign Up</h4>
                  <p className="text-gray-500">
                    Create your free account to begin journaling. All your
                    entries are securely saved, keeping your personal moments
                    protected.
                  </p>
                </div>
                <div className="p-4 bg-base-100 shadow-lg rounded-lg">
                  <h4 className="text-lg font-semibold">2. Start Writing</h4>
                  <p className="text-gray-500">
                    Write freely and without restriction. Capture your emotions,
                    milestones, and daily thoughts — all in one place.
                  </p>
                </div>
                <div className="p-4 bg-base-100 shadow-lg rounded-lg">
                  <h4 className="text-lg font-semibold">3. Manage Profile</h4>
                  <p className="text-gray-500">
                    Personalize your profile by updating your name or password,
                    keeping your account secure and uniquely yours.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-center md:text-left">
                Features Tailored for You
              </h3>
              <div className="mt-6 space-y-6">
                <div className="p-4 bg-base-100 shadow-lg rounded-lg">
                  <h4 className="text-lg font-semibold">Daily Journaling</h4>
                  <p className="text-gray-500">
                    Build a daily habit of writing and self-reflection. The more
                    you write, the more you grow with every word.
                  </p>
                </div>
                <div className="p-4 bg-base-100 shadow-lg rounded-lg">
                  <h4 className="text-lg font-semibold">Entry Management</h4>
                  <p className="text-gray-500">
                    Effortlessly add, edit, and delete entries. You can also
                    update the entry dates to match your timeline.
                  </p>
                </div>
                <div className="p-4 bg-base-100 shadow-lg rounded-lg">
                  <h4 className="text-lg font-semibold">Private & Secure</h4>
                  <p className="text-gray-500">
                    Your data is securely backed up on the cloud. Profile and
                    entries are protected with robust security features.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
