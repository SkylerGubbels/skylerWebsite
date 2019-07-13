import React, { Component } from 'react';
import NavBarDynamic from './navbardynamic';
import Education from './education';
import Introduction from './introduction';
import Summary from './summary';
import TechnicalSkills from './technicalskills';
import Footer from './footer';
import OtherSkills from './otherskills';
import SpecializedCourses from './specializedcourses';

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
        const anchorClass = "pageAnchor";
        
        return (
        <div className="pageContainer">
          <NavBarDynamic language={language} onLanguageChange={onLanguageChange} imageHeight={this.state.imageHeight}/>
          <div id="introduction" className=""/>
          <Introduction language={language} onImageSizeChange={this.handleBackgroundImageResize} onImageLoad={this.handleLoadImage}/>
          <div className="container">
            <div id="summary" className={anchorClass}/>
            <Summary language={language}/>
            <hr/>
            <div id="education" className={anchorClass}/>
            <Education/>
            <div id="specializedCourses" className={anchorClass}/>
            <SpecializedCourses language={language}/>
            <hr/>
            <div id="technicalSkills" className={anchorClass}/>
            <TechnicalSkills language={language}/>
            <div id="otherSkills" className={anchorClass}/>
            <OtherSkills language={language}/>
            <div id="otherSkills" className={anchorClass}/>
          </div>
          <Footer/>
        </div>
      );
      }
}
 
export default AboutPage;