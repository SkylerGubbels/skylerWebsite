/** Change info here to change elements in both the navbar and the footer
 *  divider attribute is for the navbar. If it is true then a divider will
 *  be put under that element */

export function getDropDownItems() {
    return (
        {title: "About", 
            links: [{text: "Summary", to: "#", divider: true}, 
                    {text: "Education", to:"#"},
                    {text: "Specialized Courses", to:"#", divider: true},
                    {text: "Technical Skills", to: "#"},
                    {text: "Other Skills", to: "#"}]})
}