const Skills = () => {

    const skillsData = [
        { imgSrc: "../../public/react.png", text: "React" },
        { imgSrc: "../../public/symfony.png", text: "Symfony" },
        { imgSrc: "../../public/sql.png", text: "SQL" },
        { imgSrc: "../../public/typescript.png", text: "TypeScript" },
        { imgSrc: "../../public/css.png", text: "CSS" },
        { imgSrc: "../../public/html.png", text: "HTML" },
        { imgSrc: "../../public/jssvg.png", text: "JavaScript" },
        { imgSrc: "../../public/php.png", text: "PHP" },
        { imgSrc: "../../public/accessibilite.png", text: "Accessibilité" },
        { imgSrc: "../../public/seo.png", text: "SEO" },
        { imgSrc: "../../public/astro.png", text: "Astro" },
    ];

    return (
        <section className="lg:col-span-1 flex flex-col justify-center items-center relative my-8 md:my-0">
            <h2 className="font-semibold text-6xl orbitron m-6">Skills</h2>
            <div className="flex flex-wrap justify-center gap-8">
                {skillsData.map((skill, index) => (
                    <div key={index} className="skill-item flex flex-col items-center justify-center w-32 md:w-[6rem] p-4 orbitron">
                        <img src={skill.imgSrc} alt={`Skill ${index + 1}`} className="mb-4 object-cover transition-transform duration-300 hover:scale-110" />
                        <p className="">{skill.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
