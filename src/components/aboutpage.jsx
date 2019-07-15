import React, { Component } from 'react';
import NavBarDynamic from './navbardynamic';
import Education from './education';
import Introduction from './introduction';
import Summary from './summary';
import TechnicalSkills from './technicalskills';
import Footer from './footer';
import OtherSkills from './otherskills';
import SpecializedCourses from './specializedcourses';
import downhill from '../resources/images/downhill.jpg';

class AboutPage extends Component {
    state = {
        imageHeight: 0
      }
    
      handleBackgroundImageResize = imageHeight =>{
        this.setState({imageHeight});
      }
    
      handleLoadImage = image =>{
        console.log(image)
        this.setState({imageHeight: image})
      }
    
      render() { 
        const { language, onLanguageChange } = this.props;
        const divMargin = "sectionMargin";
        
        return (
        <div className="pageContainer">
          <NavBarDynamic language={language} onLanguageChange={onLanguageChange} imageHeight={this.state.imageHeight}/>
          <div id="introduction" className=""/>
          <Introduction language={language} onImageSizeChange={this.handleBackgroundImageResize} onImageLoad={this.handleLoadImage}/>
          
          <div className="blackBackground">
            <div className="container">
              <div id="summary" className={divMargin}/>
                <Summary language={language}/>
              <div className={divMargin}/>
          </div>
            </div>
          <div className="container">
            <div id="education" className={divMargin}/>
            <Education/>
            <div id="specializedCourses" className={divMargin}/>
            <SpecializedCourses language={language}/>
            <div className={divMargin}/>
            </div>
            <div className="blackBackground"><div className="container"><div id="technicalSkills" className={divMargin}/>
            <TechnicalSkills language={language}/>
            <div className={divMargin}/></div></div>
            <div className="container">
            <div id="otherSkills" className={divMargin}/>
            <OtherSkills language={language}/>
            <div id="otherSkills" className={divMargin}/>
            </div>
            <div className="blackBackground"><div className="container">
            <div className={divMargin}/>
            <img src={downhill} width="100%"/>
            </div>
          </div>
          <Footer/>
        </div>
      );
      }
}
 
export default AboutPage;