const codeLines = {
    javascript: ["const platform = level 1", "for(let i of platforms){ ... }"]
}

export function imageLinks() { 
    return {
        python: "https://konpa.github.io/devicon/devicon.git/icons/python/python-original.svg",
        java: "https://konpa.github.io/devicon/devicon.git/icons/java/java-original.svg",
        javascript: "https://konpa.github.io/devicon/devicon.git/icons/javascript/javascript-original.svg",
        c: "https://konpa.github.io/devicon/devicon.git/icons/c/c-original.svg",
        cpp: "https://konpa.github.io/devicon/devicon.git/icons/cplusplus/cplusplus-original.svg",
        haskell: "http://i.imgur.com/tuFExZl.png"}}

export function getCodeLinesForGame(level){
    switch(level){
        case 1: return codeLines.javascript;
        default: return ["Error: No level code found"]
    }
}