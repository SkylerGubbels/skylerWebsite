/** Change info here to change elements in both the navbar and the footer
 *  divider attribute is for the navbar. If it is true then a divider will
 *  be put under that element */

export function getDropDownItems() {
    const path = `/about`;
    return (
        {title: "About", 
            links: [{text: "Introduction", to:  "#introduction"},
                    {text: "Summary", to:  "#summary", divider: true}, 
                    {text: "Education", to: "#education"},
                    {text: "Specialized Courses", to: "#specializedCourses", divider: true},
                    {text: "Technical Skills", to:  "#technicalSkills"},
                    {text: "Other Skills", to:  "#otherSkills"}]})
}