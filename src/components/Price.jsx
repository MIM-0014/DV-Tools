import { useState } from "react";

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState("pro");

  const plans = [
    {
      name: "Starter",
      desc: "Perfect for getting started",
      price: "$0",
      features: ["Access to 10 free tools", "One project per month", "Basic templates","Community support"],
    },
    {
      name: "Pro",
      desc: "Best for professionals",
      price: "$29",
      features: ["Access to all premium tools", "Unlimited templates", "Priority support", "Collaboration features"],
    },
    {
      name: "Enterprise",
       desc: "For teams and businesses",
      price: "$99",
      features: ["Everything in Pro", "24/7 Support", "Custom Features", "Dedicated Account Manager", "Team training and onboarding", "Volume licensing discounts"],
    },
  ];

  return (
    <section className="py-16 bg-gray-50">

      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Simple, Transparent Pricing</h2>
        <p className="text-gray-500 mt-2">
         Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">

        {plans.map((plan) => {
          const isSelected = selectedPlan === plan.name.toLowerCase();

          return (
            <div
              key={plan.name}
              onClick={() => setSelectedPlan(plan.name.toLowerCase())}
              className={`cursor-pointer p-8 rounded-xl shadow transition relative text-center
              ${
                isSelected
                  ? "bg-purple-600 text-white scale-105 shadow-xl"
                  : "bg-white hover:shadow-lg"
              }`}
            >
              {/* Badge for Pro */}
              {plan.name === "Pro" && (
                <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <h3 className="text-xl font-semibold mt-6">{plan.name}</h3>
               <p className={isSelected ? "text-purple-100" : "text-gray-500"}>
                {plan.desc}
              </p>
              <p className="text-3xl font-bold my-4">{plan.price}<span className="text-lg font-normal text-gray-500">/month</span></p>
            

              {/* Features panel */}
              <ul className="mt-5 text-sm space-y-2 text-left">
                {plan.features.map((f, i) => (
                  <li key={i}>✔ {f}</li>
                ))}
              </ul>

              <button
                className={`w-full mt-6 py-2 rounded-full font-semibold transition
                ${
                  isSelected
                    ? "bg-white text-purple-600"
                    : "border border-purple-600 text-purple-600 hover:bg-purple-50"
                }`}
              >
                {isSelected ? "Selected" : "Select Plan"}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Pricing;