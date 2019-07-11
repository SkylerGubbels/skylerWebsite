/** Change info here to change elements in both the navbar and the footer */

export function getDropDownItems() {
    return (
        {title: "About", 
            links: [{text: "Summary", to: "#", divider: true}, 
                    {text: "Technical Skills", to: "#"},
                    {text: "Other Skills", to: "#", divider: true},
                    {text: "Education", to:"#"},
                    {text: "Specialized Courses", to:"#"}, 
                    {text: "Work Experience", to:"#"}]})
}