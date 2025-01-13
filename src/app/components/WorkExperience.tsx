export default function WorkExperiences() {
  const experiences = [
    {
      title: "Front-End Web Developer",
      company: "Company Name, Location",
      date: "Date Range",
      responsibilities: [
        "Developed responsive and interactive user interfaces using HTML5, CSS3, and JavaScript.",
        "Collaborated with designers to translate wireframes and mockups into functional web pages.",
        "Implemented best practices in front-end development to optimize performance and user experience.",
        "Worked closely with back-end developers to integrate front-end components with server-side logic.",
      ],
    },
    {
      title: "Full-Stack Web Developer Intern",
      company: "Company Name, Location",
      date: "Date Range",
      responsibilities: [
        "Assisted in the development of RESTful APIs using Node.js and Express.js for server-side functionality.",
        "Designed and implemented database schemas using MongoDB and performed CRUD operations.",
        "Contributed to the creation of dynamic web applications using React.js for front-end development.",
        "Participated in code reviews and collaborated with senior developers to troubleshoot and debug issues.",
      ],
    },
    {
      title: "Freelance Web Developer",
      company: "Self-Employed",
      date: "Date Range",
      responsibilities: [
        "Worked with clients to understand project requirements and develop custom solutions tailored to their needs.",
        "Designed and developed responsive websites optimized for performance and SEO.",
        "Managed project timelines, budgets, and client communication to ensure satisfaction and timely delivery.",
        "Implemented security measures to protect websites from common vulnerabilities and threats.",
      ],
    },
  ];

  return (
    <section id="workExperiences" className="py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Work Experiences</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="border border-primary rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
            <p className="italic mb-2">{exp.company}</p>
            <p className="mb-4">{exp.date}</p>
            <ul className="list-disc list-inside space-y-2">
              {exp.responsibilities.map((resp, idx) => (
                <li key={idx}>{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
