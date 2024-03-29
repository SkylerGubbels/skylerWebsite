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
            
            frontend: {title: "Front End Development", text: <React.Fragment><span>I am able to create dynamic, reactive and easily understood front-end user experiences that are easily understood and scale well to any device or screen size.</span></React.Fragment>},   
            backend:  {title: "Back End Development", text: <React.Fragment><span>I know how to properly store data without data redundancy or expensive search times and can write code that will remain efficient and can scale your needs.</span></React.Fragment>},
            softwareEngineering:  {title: "Software Engineering", text: <React.Fragment><span>I can quickly pick it up and start contributing to the project. I am adept at determining edge cases and writing robust code.</span></React.Fragment>},
            computerScience:  {title: "Computer Science", text: <React.Fragment><span>I am able to determine what parts of a program can be computationally expensive and how to refactor code to be cleaner, more concise and more efficient.</span></React.Fragment>}
    }
}

export function getTechSkillsText(){
    return {
        languages: {title: "Languages", text: "Java, Python, Javascript, C, C++, Haskell, Smalltalk"},
        libraries: {title: "Libraries", text: "React, OpenCV"},
        webTechnologies: {title: "Web Technologies", text: "HTML5, CSS3, Node.js, RESTful API, npm, Bootstrap"},
        versionControl: {title: "Version Control", text: "Git, Sourcetree, GitHub"},
        other: {title: "Other", text: "Unreal Engine 4, Qt, SQL, noSQL"}
    }
}

export function getOtherSkillsText(){
    return {
        languages: {title: "Problem Solving", text: <React.Fragment><span>Given a large task to complete, I can break it down into smaller and more manageable parts. This also allows me to reuse parts should the project requirements change.</span></React.Fragment>},
        libraries: {title: "Quick Learner", text: <React.Fragment><span>Whether it is a new language, framework or library I am very adept at learning the ins and outs of the topic. This has made me very receptive to learning new things and expand my programming knowledge.</span></React.Fragment>},
        webTechnologies: {title: "Teamwork", text: <React.Fragment><span>Having worked on a variety of group projects I have gotten especially comfortable with coordinating work with my peers and taking part in meetings to review our code and plan our next move.</span></React.Fragment>},
        versionControl: {title: "Organization", text: <React.Fragment><span>I am very skilled at managing my time and prioritizing tasks. This also allows me to be very effective at meeting deadlines, even when working on multiple projects.</span></React.Fragment>},
    }
}

export function getOtherSkillsParagraphText(){
    return <React.Fragment><span>Here are a few non-programming skills that help me be good at the things that I do.</span></React.Fragment>
}

export function getSectionTitles(){
    return {
        summary: "Summary",
        education: "Education",
        specializedCourses: "Specialized Courses",
        technicalSkills: "Technical Skills",
        otherSkills: "Other Skills"
    }
}

export function getDropdownItems() {
    return (
        {title: "About", 
            links: [{text: "Introduction", to:  "#introduction"},
                    {text: "Summary", to:  "#summary", divider: true}, 
                    {text: "Education", to: "#education"},
                    {text: "Specialized Courses", to: "#specializedCourses", divider: true},
                    {text: "Technical Skills", to:  "#technicalSkills"},
                    {text: "Other Skills", to:  "#otherSkills"}]})
}

export function getNavbarItems() {
    return ([{text: "Projects", to:  "/projects"}, {text: "Resume", href: pdf}]);
}

export function getProjects(){
    return ({
            headers: ["Name", "Description", "Github", "Link"],
            data: [
                {name: "Drum Metronome", 
                description: "Written using only Javascript, HTML and Node.js. Each row of boxes corresponds to a certain part of a drumkit and each column represents a beat. Users can save and load drumbeats they’ve previously written which are stored on the server as JSON objects.", 
                github: {image: github, path: "https://github.com/SkylerGubbels/DrumMetronome"}, 
                link: {text: "Link", path: "https://warm-badlands-54209.herokuapp.com/"}},
                
                {name: "Portfolio Website", 
                description: "Written using React, Bootstrap and a few other npm modules. Created as both an opportunity to demonstrate my experience and to improve my front-end web development skills.", 
                github: {image: github, path: "https://github.com/SkylerGubbels/skylerWebsite"}, 
                link: {text: "Link", path: "/"}},
                
            ]
        }
    )
}