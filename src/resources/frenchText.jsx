import React from "react"

/** Becuase my website will support both english and french languages I have all the text and formatting
 *  saved in separate resource files that will be accessed depending on which language
 *  the user is accessing */

const linkColor = {
    "color":"white"
}

export function getIntroText(){
    return (
    <React.Fragment><span>
        <u>Bonjour</u><br/>
        Cette site web a été construit utiliser <a style={linkColor} href="https://reactjs.org">React</a>, <a style={linkColor} href="https://getbootstrap.com/docs/4.0/layout/grid/">Bootstrap</a> et plusieurs modules npm.
        Si t’est un employeur out juste un autre programmeur qui veut utiliser mon code pour étudier tu peu le trouver <a style={linkColor} href="https://github.com/SkylerGubbels/skylerWebsite">ici.</a>
        <br/><br/>
        Il est aussi possible de m’atteindre à  <a style={linkColor} href="mailto:skylermgubbels@gmail.com">skylermgubbels@gmail.com</a></span>
    </React.Fragment>)
}

export function getSummaryText(){
    return {
            paragraph: 
                (<React.Fragment>
                    <span>Au cours de mon éducation j’ai développer plusieurs compétences. Voice quelques-uns:</span>
                </React.Fragment>),
            
            frontend: {title: "Développeur du Front End", text: <React.Fragment><span>Je peux créer des expériences de front end dynamique, réactif et facile a comprendre qui fonctionne sur toutes écrans.</span></React.Fragment>},   
            backend:  {title: "Développeur du Back End", text: <React.Fragment><span>Je sais comment éviter la redondance d’information et créer des programmes qui s’ont efficace sous l’utilisation lourd.</span></React.Fragment>},
            softwareEngineering:  {title: "Ingénieur logiciel", text: <React.Fragment><span>Je peux rapidement comprendre et contribuer a votre project. Je sais comment déterminer les cas do bord et écrire du code robuste.</span></React.Fragment>},
            computerScience:  {title: "L’informatique théorique", text: <React.Fragment><span>Je peux déterminer quelles pièces d’un program s’ont inefficace et peut améliorer le code pour le faire plus rapide.</span></React.Fragment>}
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
        languages: {title: "Résolution de Problème", text: <React.Fragment><span>Je suis capable de désassembler des gros problèmes et travailler sur les partis maniables. Ces partis peuvent aussi être réutiliser si la direction du projet change.  </span></React.Fragment>},
        libraries: {title: "Apprenant Rapide", text: <React.Fragment><span>Je sais comment apprendre les détails d’un sujet. Ceci me fait vraiment réceptif a apprendre des nouveaux compétences et améliorer mon travail de programmeur.</span></React.Fragment>},
        webTechnologies: {title: "Travail en Équipe", text: <React.Fragment><span>J’ai travaillé sur plusieurs projets de groupe et je sais comment coordonner le travaille avec plusieurs autre personnes pour faire le produit final le mieux que ça peut être.</span></React.Fragment>},
        versionControl: {title: "Organisation", text: <React.Fragment><span>IJe sais comment gérer mon temp et hiérarchiser les taches pour respecter les délais et soumettre du travail de qualité.</span></React.Fragment>},
    }
}

export function getOtherSkillsParagraphText(){
    return <React.Fragment><span>Voici quelques-uns de mes autres compétences:</span></React.Fragment>
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