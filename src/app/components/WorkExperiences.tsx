export default function WorkExperiences() {
  const experiences = [
    {
      demoAdress: "https://migration-crew-website.vercel.app/",
      title: "Static Website",
      company: "UpImigration",
      date: "Freelance",
      responsibilities: [
        "Redeveloped a static website for an immigration consultation company using Next.js, TypeScript, Tailwind CSS, and shadcn, improving user experience by 50% through a restructured UI/UX. Implemented localization for Spanish and Portuguese using next-intl, enhancing accessibility and expanding the website's reach to a broader audience.",
      ],
    },
    {
      demoAdress: "https://immigration-dashboard.vercel.app/sign-in",
      title: "Dynamic Dashboard",
      company: "UpImigration",
      date: "Freelance",
      responsibilities: [
        " Developed a web application for an immigration consultation company using Next.js, TypeScript, and Clerk, simplifying the immigration process for both applicants and consultants. Collaborated with UI/UX designers to define and clarify functional and technical requirements for a web application, ensuring alignment with business objectives and user needs. Implemented a modern frontend using Next.js, TypeScript, and ShadCN, creating a customizable and accessible UI library while leading discussions on common components to enhance ease of use and improve team development efficiency. Designed and implemented RESTful APIs and a NoSQL (MongoDB) database for an immigration consultation company using Next.js and TypeScript, focusing on flexible table and API designs to ensure future scalability and ease of feature expansion. ",
      ],
    },
  ];

  return (
    <section id="workExperiences" className="py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Experiences</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="border border-primary rounded-lg p-6">
            <div className="mb-4">
              <a
                href={exp.demoAdress}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline text-lg font-medium"
              >
                View Demo →
              </a>
            </div>
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
