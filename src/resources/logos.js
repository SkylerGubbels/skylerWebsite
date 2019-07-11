import java from "../resources/languageLogos/java.svg"
import python from "../resources/languageLogos/python.svg"
import javascript from "../resources/languageLogos/javascript.svg"
import c from "../resources/languageLogos/c.svg"
import cpp from "../resources/languageLogos/cpp.svg"
import haskell from "../resources/languageLogos/haskell.png"
import sourcetree from "../resources/languageLogos/sourcetree.svg"
import oracle from "../resources/languageLogos/oracle.svg"
import bootstrap from "../resources/languageLogos/bootstrap.svg"
import github from "../resources/languageLogos/github.svg"
import git from "../resources/languageLogos/git.svg"
import mongodb from "../resources/languageLogos/mongodb.svg"
import nodejs from "../resources/languageLogos/nodejs.svg"
import css3 from "../resources/languageLogos/css3.svg"
import html5 from "../resources/languageLogos/html5.svg"
import react from "../resources/languageLogos/react.svg"

/** The purpose of this file is to handle all the logos
 *  Doing it this ways prevents the technicalSkills.jsx from becoming
 *  cramped with import statements*/
export const getLogos = () => {
    return [
        [java, python, javascript, c, cpp, haskell],
        [html5, css3, nodejs, react, mongodb, bootstrap],
        [sourcetree, oracle, github, git]
    ]
}