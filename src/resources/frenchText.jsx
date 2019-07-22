import React from "react"
import pdf from '../resources/websiteResume.pdf';
import github from "../resources/languageLogos/github-dark.svg"

/** Becuase my website will support both english and french languages I have all the text and formatting
 *  saved in separate resource files that will be accessed depending on which language
 *  the user is accessing */

const linkColor = {
    "color":"white"
}

// Intro text is in JSX instead of a string to make formatting over the image easier
export function getIntroText(){
    return (
    <React.Fragment><span>
        <u>Bonjour</u><br/>
        Ce site web a été construit en utilisant <a style={linkColor} href="https://reactjs.org">React</a>, <a style={linkColor} href="https://getbootstrap.com/docs/4.0/layout/grid/">Bootstrap</a> ainsi que d’autres modules npm.
        Que tu sois un employeur intéressé d’en apprendre davantage sur mon approche ou un programmeur qui aimerait utiliser mon site comme outil d’apprentissage, il est possible pour toi de le faire par l’entremise de mon code <a style={linkColor} href="https://github.com/SkylerGubbels/skylerWebsite">ici.</a>
        <br/><br/>
        Il est aussi possible de me rejoindre par courriel à l’adresse suivante <a style={linkColor} href="mailto:skylermgubbels@gmail.com">skylermgubbels@gmail.com</a></span>
    </React.Fragment>)
}

export function getSummaryText(){
    return {
            paragraph: 
                (<React.Fragment>
                    <span>Au cours de mon éducation,  j’ai eu l’occasion de développer plusieurs compétences. En voici quelques-unes:</span>
                </React.Fragment>),
            
            frontend: {title: "Développeur frontal (Front-End)", text: <React.Fragment><span>Je peux créer des expériences frontales dynamiques, réactives, faciles à comprendre et qui fonctionnent sur tous les écrans.</span></React.Fragment>},   
            backend:  {title: "Développeur interne (Back-End)", text: <React.Fragment><span>Je sais comment éviter la redondance d’information, diminuer le temps de recherche tout en créant des programmes qui demeurent efficaces et performants.</span></React.Fragment>},
            softwareEngineering:  {title: "Ingénieur logiciel", text: <React.Fragment><span>Je sais comment déterminer les cas les plus complexes ainsi qu’écrire des codes sûrs et robustes. Ainsi, je pourrai rapidement comprendre et commencer à contribuer à votre projet.</span></React.Fragment>},
            computerScience:  {title: "L’informatique", text: <React.Fragment><span>Je sais comment déterminer les cas les plus complexes ainsi qu’écrire des codes sûrs et robustes. Ainsi, je pourrai rapidement comprendre et commencer à contribuer à votre projet.</span></React.Fragment>}
    }
}

export function getTechSkillsText(){
    return {
        languages: {title: "Langues", text: "Java, Python, Javascript, C, C++, Haskell, Smalltalk"},
        libraries: {title: "Libraries", text: "React, OpenCV"},
        webTechnologies: {title: "Technologies d'Internet", text: "HTML5, CSS3, Node.js, RESTful API, npm, Bootstrap"},
        versionControl: {title: "Contrôle  de Version", text: "Git, Sourcetree, GitHub"},
        other: {title: "Autre", text: "Unreal Engine 4, Qt, SQL, noSQL"}
    }
}

export function getOtherSkillsText(){
    return {
        languages: {title: "Résolution de problème", text: <React.Fragment><span>Lorsqu’une tâche de grande envergure se présente, je morcelle cette dernière afin de travailler étape par étape.  Cette technique me permet aussi de maximiser mon temps selon la direction que prend la tâche.</span></React.Fragment>},
        libraries: {title: "Apprenant rapide", text: <React.Fragment><span>Peu importe le sujet, j’aime connaître tous les détails de ce dernier afin de mieux le maîtriser.  Cette ouverture à l’apprentissage me permet d’acquérir de nouvelles compétences et de m’améliorer dans mon travail de programmeur.</span></React.Fragment>},
        webTechnologies: {title: "Travail d’équipe", text: <React.Fragment><span>J’ai eu la chance d’organiser des rencontres de collaboration avec des collègues, en présentiel ou à distance, dans le but de travailler ensemble sur plusieurs projets afin de réaliser des produits finaux de qualité.</span></React.Fragment>},
        versionControl: {title: "Organisation", text: <React.Fragment><span>Je sais comment bien gérer mon temps tout un priorisant les tâches afin de toujours soumettre un travail de qualité qui respecte les délais prescrits.</span></React.Fragment>},
    }
}

export function getOtherSkillsParagraphText(){
    return <React.Fragment><span>Voici quelques-unes de mes compétences non liées à la programmation qui me permettent d’être efficace dans mes diverses tâches: </span></React.Fragment>
}

export function getSectionTitles(){
    return {
        summary: "Résumé",
        education: "Éducation",
        specializedCourses: "Cours Spécialisés",
        technicalSkills: "Compétences Techniques",
        otherSkills: "Autres compétences"
    }
}

export function getDropdownItems() {
    return (
        {title: "Moi", 
            links: [{text: "Introduction", to:  "#introduction"},
                    {text: "Résumé", to:  "#summary", divider: true}, 
                    {text: "Éducation", to: "#education"},
                    {text: "Cours spécialisés", to: "#specializedCourses", divider: true},
                    {text: "Compétences techniques", to:  "#technicalSkills"},
                    {text: "Autres compétences", to:  "#otherSkills"}]})
}

export function getNavbarItems() {
    return ([{text: "Projets", to:  "/projects"}, {text: "CV", href:  pdf, divider: true}]);
}

export function getProjects(){
    return ({
            headers: ["Nom", "Description", "Github", "Link"],
            data: [
                {name: "Métronome pour tambour:", 
                description: "Le métronome pour tambour est écrit en utilisant seulement Javascript, HTML et Node.js.  Chaque rangée de boîtes représente une partie de la batterie et chaque colonne représente un battement.  L’utilisateur peut choisir d’enregistrer ou de télécharger des battements de tambour qui seront conservés sur le serveur sous format JSON.", 
                github: {image: github, path: "https://github.com/SkylerGubbels/DrumMetronome"}, 
                link: {text: "Link", path: "https://warm-badlands-54209.herokuapp.com/"}},
                
                {name: "Portfolio Website", 
                description: "Ce site web est écrit en utilisant React, Boostrap ainsi que d’autres modules npm afin de démontrer mes habiletés acquises et dans l’intention d’améliorer mes compétences de développeur interne.", 
                github: {image: github, path: "https://github.com/SkylerGubbels/skylerWebsite"}, 
                link: {text: "Link", path: "/"}},
                
            ]
        }
    )
}