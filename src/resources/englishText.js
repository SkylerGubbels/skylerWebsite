/** Becuase my website will support both english and french languages I have all the text
 *  saved in separate resource files that will be accessed depending on which language
 *  the user is accessing */

export function getSummaryText(){
    return {
            frontend: "Lorem ipsum dolor sit amet, consectetur adipiscing",
            backend: "Lorem ipsum dolor sit amet, consectetur adipiscing",
            softwareEngineering: "Lorem ipsum dolor sit amet, consectetur adipiscing",
            computerScience: "Lorem ipsum dolor sit amet, consectetur adipiscing"
    }
}

export function getTechSkillsText(){
    return {
        languages: {title: "Languages", text: "Java, Python, Javascript, C, C++, Haskell"},
        libraries: {title: "Libraries", text: "React, OpenCV"},
        webTechnologies: {title: "Web Technologies", text: "HTML5, CSS3, Node.js, RESTful API, npm"},
        versionControl: {title: "Version Control", text: "Git, Sourcetree, GitHub"},
        other: {title: "Other", text: "Unreal Engine 4, Qt, SQL, noSQL"}
    }
}