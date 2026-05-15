import user from '../assets/user.png'
import  Package  from '../assets/package.png'
import rocket from '../assets/rocket.png'

const Steps = () => {
  return (
    <section className="py-16 bg-gray-50">

      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Get Started in 3 Steps</h2>
        <p className="text-gray-500 mt-2">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>

      {/* Steps */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">

        {/* Step 1 */}
        <div className="relative text-center bg-white p-6 rounded-xl shadow hover:shadow-lg transition">

          <div className="absolute -top-4 left -translate-x-1/2 bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
            1
          </div>

          <img
            src={user}
            alt="Create Account"
            className="w-20 h-20 mx-auto mb-4 mt-4"
          />

          <h3 className="text-xl font-semibold">Create Account</h3>
          <p className="text-gray-500 mt-2">
          Sign up for free in seconds. No credit card required to get started.
          </p>
        </div>

        {/* Step 2 */}
        <div className="relative text-center bg-white p-6 rounded-xl shadow hover:shadow-lg transition">

          <div className="absolute -top-4 left -translate-x-1/2 bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
            2
          </div>

          <img
            src={Package}
            alt="Choose Product"
            className="w-20 h-20 mx-auto mb-4 mt-4"
          />

          <h3 className="text-xl font-semibold">Choose Product</h3>
          <p className="text-gray-500 mt-2">
          Browse our catalog and select the tools
that fit your needs.
          </p>
        </div>

        {/* Step 3 */}
        <div className="relative text-center bg-white p-6 rounded-xl shadow hover:shadow-lg transition">

          <div className="absolute -top-4 right  -translate-x-1/2 bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
            3
          </div>

          <img
            src={rocket}
            alt="Start Creating"
            className="w-20 h-20 mx-auto mb-4 mt-4"
          />

          <h3 className="text-xl font-semibold">Start Creating</h3>
          <p className="text-gray-500 mt-2">
         Download and start using your premium 
tools immediately.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Steps;