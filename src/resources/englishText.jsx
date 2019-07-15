import React from "react"

/** Becuase my website will support both english and french languages I have all the text and formatting
 *  saved in separate resource files that will be accessed depending on which language
 *  the user is accessing */

export function getIntroText(){
    return (
    <React.Fragment><span>
        Hi<br/>
        This website was created using React, Bootstrap and a few other npm modules.
        Whether you’re an employer interested in seeing how I can write clean, reusable
        and easily-modifiable code or another web-developer wanting to use my website as a
        learning tool the source can be found <a href="https://github.com/SkylerGubbels/skylerWebsite">here.</a>
        <br/><br/>
        You can also reach me at skylermgubbels@gmail.com</span>
    </React.Fragment>)
}

export function getSummaryText(){
    return {
            paragraph: 
                (<React.Fragment>
                    <span>As a recent Computer Science graduate from Carleton University I learned a wide variety of skills.<br/><br/>
                    Here are a few of them:</span>
                </React.Fragment>),
            
            frontend: {title: "Front End Development", text: <React.Fragment><span>Whether it’s using vanilla Javascript, React or frameworks such as Qt I am able to create dynamic, reactive and aesthetically pleasing front-end user experiences that are easily understood and scale well to any device or screen size.</span></React.Fragment>},   
            backend:  {title: "Back End Development", text: <React.Fragment><span>My understanding of SQL and noSQL databases allow me to understand how to properly store data without data redundancy or long search times. My experience with data structures and runtime complexity also allows me to write efficient code that is incredibly scalable.</span></React.Fragment>},
            softwareEngineering:  {title: "Software Engineering", text: <React.Fragment><span>Regardless of your software development approach or the system architecture utilized I can quickly pick it up and start contributing to the project. My understanding of program testing also allows me to determine and account for edge cases in order to ensure that my code is robust.</span></React.Fragment>},
            computerScience:  {title: "Computer Science", text: <React.Fragment><span>My understanding of computer systems allows me to understand what parts of a program may be computationally expensive and how to refactor code to be cleaner, more concise and much more efficient.</span></React.Fragment>}
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
        libraries: {title: "Fast Learner", text: "Lorem ipsum dolor sit amet, consectetur adipiscing"},
        webTechnologies: {title: "Teamwork", text: "Lorem ipsum dolor sit amet, consectetur adipiscing"},
        versionControl: {title: "Organization", text: "Lorem ipsum dolor sit amet, consectetur adipiscing"},
    }
}

export function getParagraphText(){
    return "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
}