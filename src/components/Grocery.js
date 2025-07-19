const Grocery = () => {
  return (
    <div className="m-6 p-6 bg-gradient-to-r from-yellow-50 to-pink-100 rounded-2xl shadow-lg border border-pink-200 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold text-pink-600 mb-4 flex items-center gap-2">
        🛒 Grocery Coming Soon!
      </h1>
      <p className="text-gray-700 text-lg leading-relaxed">
        In the near future, this section will showcase an amazing collection of
        grocery items 🥦🥛🍞. Until then, feel free to explore our delicious
        range of restaurant food items 🍕🍔🍱.
      </p>
      <div className="mt-6 text-center">
        <button className="px-6 py-2 bg-pink-500 text-black rounded-full shadow-md hover:bg-pink-600 transition duration-300">
          Explore Food Menu 🍽️
        </button>
      </div>
    </div>
  );
};

export default Grocery;
