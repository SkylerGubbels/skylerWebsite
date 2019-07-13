/** Change info here to change elements in both the navbar and the footer
 *  divider attribute is for the navbar. If it is true then a divider will
 *  be put under that element */

export function getDropDownItems() {
    const path = `/about#`;
    return (
        {title: "About", 
            links: [{text: "Introduction", to: path + "introduction"},
                    {text: "Summary", to: path + "summary", divider: true}, 
                    {text: "Education", to:path + "education"},
                    {text: "Specialized Courses", to:path + "specializedCourses", divider: true},
                    {text: "Technical Skills", to: path + "technicalSkills"},
                    {text: "Other Skills", to: path + "otherSkills"}]})
}