const Stats = () => {
  return (
    <div className="w-full max-w-5xl mx-auto my-12 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

        <div className="stat bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 p-6 border border-gray-100">
          <div className="stat-title text-gray-500">Products</div>
          <div className="stat-value text-purple-600">50+</div>
        </div>

        <div className="stat bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 p-6 border border-gray-100">
          <div className="stat-title text-gray-500">Customers</div>
          <div className="stat-value text-purple-600">10K+</div>
         
        </div>

        <div className="stat bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 p-6 border border-gray-100">
          <div className="stat-title text-gray-500">Reviews</div>
          <div className="stat-value text-purple-600">4.9★</div>
      
        </div>

      </div>
    </div>
  );
};

export default Stats;