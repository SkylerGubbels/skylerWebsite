/** Change info here to change elements in both the navbar and the footer
 *  divider attribute is for the navbar. If it is true then a divider will
 *  be put under that element */

export function getDropdownItemsEnglish() {
    return (
        {title: "About", 
            links: [{text: "Introduction", to:  "#introduction"},
                    {text: "Summary", to:  "#summary", divider: true}, 
                    {text: "Education", to: "#education"},
                    {text: "Specialized Courses", to: "#specializedCourses", divider: true},
                    {text: "Technical Skills", to:  "#technicalSkills"},
                    {text: "Other Skills", to:  "#otherSkills"}]})
}

export function getNavbarItemsEnglish() {
    return ([{text: "Projects", to:  "/projects"}, {text: "Contact", to:  "/contact", divider: true}]);
}

export function getDropdownItemsFrench() {
    return (
        {title: "Moi", 
            links: [{text: "Introduction", to:  "#introduction"},
                    {text: "Résumé", to:  "#summary", divider: true}, 
                    {text: "Éducation", to: "#education"},
                    {text: "Cours spécialisés", to: "#specializedCourses", divider: true},
                    {text: "Compétences techniques", to:  "#technicalSkills"},
                    {text: "Autres compétences", to:  "#otherSkills"}]})
}

export function getNavbarItemsFrench() {
    return ([{text: "Projets", to:  "/projects"}, {text: "Contact", to:  "/contact", divider: true}]);
}

export function getDropDownItems() {
    return (
        {title: "About", 
            links: [{text: "Introduction", to:  "#introduction"},
                    {text: "Summary", to:  "#summary", divider: true}, 
                    {text: "Education", to: "#education"},
                    {text: "Specialized Courses", to: "#specializedCourses", divider: true},
                    {text: "Technical Skills", to:  "#technicalSkills"},
                    {text: "Other Skills", to:  "#otherSkills"}]})
}