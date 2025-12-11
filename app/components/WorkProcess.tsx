// app/components/WorkProcess.jsx

export default function WorkProcess() {
  const steps = [
    {
      number: 1,
      title: "Requirement gathering",
      desc: "We dig deep into your business specifics, needs, goals, challenges, and processes to set clear project requirements."
    },
    {
      number: 2,
      title: "Design",
      desc: "We create intuitive, consistent, and visually appealing design, balancing aesthetics, functionality, and seamless navigation."
    },
    {
      number: 3,
      title: "Implementation",
      desc: "Our team brings your idea to life, using technologies and methodologies that fit the project."
    },
    {
        number: 4,
        title: "Draft",
        desc: "Maintain clear communication and timely updates to ensure smooth workflow and alignment across the team."
    },
    {
      number: 5,
      title: "Testing",
      desc: "Our engineers rigorously test the solution to ensure it meets the highest quality standards before launch."
    },
    {
      number: 6,
      title: "Launch",
      desc: "We deploy the solution, ensuring a seamless transition, minimal downtime, and maximum impact."
    },
    {
      number: 7,
      title: "Maintenance and support",
      desc: "We provide continuous support, updates, and optimizations to keep the solution secure and efficient."
    }
  ];

  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <p className="text-sm font-semibold tracking-widest text-gray-500">PROCESS</p>
      <h2 className="text-4xl font-bold mt-2 mb-12">Our work process</h2>

      <div className="relative border-l-2 border-blue-500 pl-14 space-y-14">

        {steps.map((step) => (
          <div key={step.number} className="relative flex flex-col group">
            
            {/* Number circle positioned ON the blue line */}
            <span
              className="absolute -left-20 top-0 flex items-center justify-center
              w-10 h-10 rounded-full border-2 border-blue-500 bg-white 
              text-black-600 font-semibold group-hover:bg-blue-800 group-hover:text-white transition-colors duration-75"
            >
              {step.number}
            </span>

            {/* Title */}
            <h3 className="text-xl font-semibold hover:text-blue-800 border-b w-fit border-blue-700 hover:cursor-pointer">{step.title}</h3>

            {/* Description */}
            <p className="text-gray-600 mt-2">{step.desc}</p>
          </div>
        ))}

      </div>
    </section>
  );
}
