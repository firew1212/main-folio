export default function Skills() {
  const skillGroups = [
    {
      title: "Frontend Development",

      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "HTML5",
        "CSS3",
      ],
    },


    {
      title: "Backend Development",

      skills: [
        "Node.js",
        "NestJS",
        "REST API",
        "Authentication",
        "JWT",
        "Backend Architecture",
      ],
    },


    {
      title: "Database & Architecture",

      skills: [
        "PostgreSQL",
        "Prisma ORM",
        "Database Design",
        "SQL",
        "Data Modeling",
        "System Design",
      ],
    },


    {
      title: "Tools & Deployment",

      skills: [
        "Git",
        "GitHub",
        "Docker",
        "Linux",
        "CI/CD",
        "Cloud Deployment",
      ],
    },
  ];


  return (
    <section
      id="skills"
      className="
        max-w-6xl
        mx-auto
        px-4
        md:px-6
        py-7
      "
    >


      {/* Header */}

      <div className="mb-12">

        <p className="
          text-blue-400
          mb-3
        ">
          Skills
        </p>


        <h2 className="
          text-3xl
          md:text-4xl
          font-bold
        ">
          Technologies I Work With
        </h2>


      </div>





      {/* Skill Cards */}

      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-8
        "
      >


        {
          skillGroups.map((group)=>(
            
            <div
              key={group.title}
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                p-8
                transition
                duration-300
                hover:-translate-y-2
                hover:border-blue-500/40
              "
            >


              <h3 className="
                text-2xl
                font-semibold
                mb-6
              ">
                {group.title}
              </h3>




              <div
                className="
                  flex
                  flex-wrap
                  gap-3
                "
              >

                {
                  group.skills.map((skill)=>(
                    <span
                      key={skill}
                      className="
                        rounded-full
                        border
                        border-white/10
                        bg-black/20
                        px-4
                        py-2
                        text-sm
                        text-gray-300
                        transition
                        hover:text-blue-400
                      "
                    >
                      {skill}
                    </span>
                  ))
                }


              </div>


            </div>

          ))
        }


      </div>


    </section>
  );
}