/** Becuase my website will support both english and french languages I have all the text
 *  saved in separate resource files that will be accessed depending on which language
 *  the user is accessing */

export function getEnglishText(){
    return {
        summary: {
            frontend: "Lorem ipsum dolor sit amet, consectetur adipiscing",
            backend: "Lorem ipsum dolor sit amet, consectetur adipiscing",
            softwareEngineering: "Lorem ipsum dolor sit amet, consectetur adipiscing",
            computerScience: "Lorem ipsum dolor sit amet, consectetur adipiscing"
        }
    }
}