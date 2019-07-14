/** Becuase my website will support both english and french languages I have all the text
 *  saved in separate resource files that will be accessed depending on which language
 *  the user is accessing */

export function getSummaryText(){
    return {
            paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            frontend: {title: "Front End", text: "Lorem ipsum dolor sit amet, consectetur adipiscing"},
            backend:  {title: "Back End", text: "Lorem ipsum dolor sit amet, consectetur adipiscing"},
            softwareEngineering:  {title: "Software Engineering", text: "Lorem ipsum dolor sit amet, consectetur adipiscing"},
            computerScience:  {title: "Computer Science", text: "Lorem ipsum dolor sit amet, consectetur adipiscing"}
    }
}

export function getTechSkillsText(){
    return {
        languages: {title: "Languages", text: "Java, Python, Javascript, C, C++, Haskell, Smalltalk"},
        libraries: {title: "Libraries", text: "React, OpenCV"},
        webTechnologies: {title: "Web Technologies", text: "HTML5, CSS3, Node.js, RESTful API, npm"},
        versionControl: {title: "Version Control", text: "Git, Sourcetree, GitHub"},
        other: {title: "Other", text: "Unreal Engine 4, Qt, SQL, noSQL"}
    }
}

export function getOtherSkillsText(){
    return {
        languages: {title: "Problem Solving", text: "Lorem ipsum dolor sit amet, consectetur adipiscing"},
        libraries: {title: "Runtime Complexity", text: "Lorem ipsum dolor sit amet, consectetur adipiscing"},
        webTechnologies: {title: "Teamwork", text: "Lorem ipsum dolor sit amet, consectetur adipiscing"},
        versionControl: {title: "Organization", text: "Lorem ipsum dolor sit amet, consectetur adipiscing"},
    }
}

export function getParagraphText(){
    return "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
}