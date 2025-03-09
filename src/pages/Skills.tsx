    // import accessibilite from "/accessibilite.png";
    // import astro from "../../public/astro.png";
    // import css from "../../public/css.png";
    // import html from "../../public/html.png";
    // import javascript from "../../public/javascript.png";
    // import php from "../../public/php.png";
    // import react from "../../public/react.png";
    // import sql from "../../public/sql.png";
    // import symfony from "../../public/symfony.png";
    // import typescript from "../../public/typescript.png";



const Skills = () => {

    const skillsData = [
        { imgSrc: "../../public/accessibilite.png", text: "Accessibilité Web" },
        { imgSrc: "../../public/astro.png", text: "Astrophysique" },
        { imgSrc: "../../public/css.png", text: "CSS - Mise en page" },
        { imgSrc: "../../public/html.png", text: "HTML - Structure" },
        { imgSrc: "../../public/javascript.png", text: "JavaScript - Interactivité" },
        { imgSrc: "../../public/php.png", text: "PHP - Back-end" },
        { imgSrc: "../../public/react.png", text: "React - Front-end" },
        { imgSrc: "../../public/sql.png", text: "SQL - Base de données" },
        { imgSrc: "../../public/symfony.png", text: "Symfony - Framework PHP" },
        { imgSrc: "../../public/typescript.png", text: "TypeScript - Typage statique" },
    ];

    return (
        <div className="lg:col-span-1 flex justify-center items-center relative my-8 md:my-0">
            <h2>Mes compétences</h2>
            <div className="flex flex-wrap justify-center gap-8">
                {skillsData.map((skill, index) => (
                    <div key={index} className="skill-item  p-4 rounded shadow-md">
                        <img src={skill.imgSrc} alt={`Skill ${index + 1}`} className="mb-4 w-24 h-24 object-cover" />
                        <p>{skill.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
