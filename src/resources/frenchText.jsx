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
        <u>Hello</u><br/>
        This website was created using <a style={linkColor} href="https://reactjs.org">React</a>, <a style={linkColor} href="https://getbootstrap.com/docs/4.0/layout/grid/">Bootstrap</a> and a few other npm modules.
        Whether you’re an employer interested in seeing my approach to writing code 
        or another web-developer wanting to use my website as a
        learning tool, the source can be found <a style={linkColor} href="https://github.com/SkylerGubbels/skylerWebsite">here.</a>
        <br/><br/>
        You can also reach me at <a style={linkColor} href="mailto:skylermgubbels@gmail.com">skylermgubbels@gmail.com</a></span>
    </React.Fragment>)
}

export function getSummaryText(){
    return {
            paragraph: 
                (<React.Fragment>
                    <span>As a recent Computer Science graduate from Carleton University I learned a wide variety of skills.</span>
                </React.Fragment>),
            
            frontend: {title: "Front End Development", text: <React.Fragment><span>I am able to create dynamic, reactive and aesthetically pleasing front-end user experiences that are easily understood and scale well to any device or screen size.</span></React.Fragment>},   
            backend:  {title: "Back End Development", text: <React.Fragment><span>I know how to properly store data without data redundancy or expensive search times and can write code that will remain efficient and can scale your needs.</span></React.Fragment>},
            softwareEngineering:  {title: "Software Engineering", text: <React.Fragment><span>I can quickly pick it up and start contributing to the project. I am adept at determining edge cases and writing robust code.</span></React.Fragment>},
            computerScience:  {title: "Computer Science", text: <React.Fragment><span>I am able to determine what parts of a program can be computationally expensive and how to refactor code to be cleaner, more concise and more efficient.</span></React.Fragment>}
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
        languages: {title: "Problem Solving", text: <React.Fragment><span>Given a large task to complete, I can break it down into smaller and more manageable parts. This also allows me to reuse parts should the project requirements change.</span></React.Fragment>},
        libraries: {title: "Quick Learner", text: <React.Fragment><span>Whether it is a new language, framework or library I am very adept at learning the ins and outs of the topic. This has made me very receptive to learning new things and expand my programming knowledge.</span></React.Fragment>},
        webTechnologies: {title: "Teamwork", text: <React.Fragment><span>Having worked on a variety of group projects I have gotten especially comfortable with coordinating work with my peers and taking part in meetings to review our code and plan our next move.</span></React.Fragment>},
        versionControl: {title: "Organization", text: <React.Fragment><span>I am very effective at managing my time and prioritizing tasks. This also allows me to be very effective at meeting deadlines, even when working on multiple projects.</span></React.Fragment>},
    }
}

export function getOtherSkillsParagraphText(){
    return <React.Fragment><span>Here are a few non-programming skills that help me be good at the things that I do.</span></React.Fragment>
}