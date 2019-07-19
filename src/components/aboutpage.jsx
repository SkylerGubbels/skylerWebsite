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
        imageHeight: 0,
      }
  
      handleBackgroundImageResize = imageHeight =>{
        this.setState({imageHeight});
      }
    
      handleLoadImage = image =>{
        this.setState({imageHeight: image})
      }
    
      render() { 
        const { language, onLanguageChange, textFile } = this.props;
        const sectionTitles = textFile.getSectionTitles();
        
        return (
        <div className="pageContainer">
          <NavBarDynamic language={language} onLanguageChange={onLanguageChange} imageHeight={this.state.imageHeight} navbarItems={textFile.getNavbarItems()} dropdownItems={textFile.getDropdownItems()}/>
          <div id="introduction" className=""/>
          <Introduction onImageSizeChange={this.handleBackgroundImageResize} onImageLoad={this.handleLoadImage} text={textFile.getIntroText()}/>
          
          <div className="blackBackground"><div className="container"><div className="padding100" id="summary"/>
            <h1 className="whiteText componentTitle">{sectionTitles.summary}</h1>
            <Summary text={textFile.getSummaryText()}/>
          <div className="padding100"/></div></div>
          
          <div className="container">
            <div id="education" className="padding100"/>
            <h1 className="componentTitle">{sectionTitles.education}</h1>
            <Education/>
            
            <div id="specializedCourses" className="padding100"/>
              <div className="row"><div className="col-md-6 col-sm-12"/>
              <h1 className="componentTitle">{sectionTitles.specializedCourses}</h1></div>
            <SpecializedCourses/>
            
            <div className="padding100"/>
          </div>
          
          <div className="blackBackground"><div className="container"><div id="technicalSkills" className="padding100"/>
            <h1 className="whiteText componentTitle">{sectionTitles.technicalSkills}</h1>
            <TechnicalSkills text={textFile.getTechSkillsText()}/>
          <div className="padding100"/></div></div>
          
          <div className="container"><div id="otherSkills" className="padding100"/>
            <h1 className="componentTitle">{sectionTitles.otherSkills}</h1>
            <OtherSkills text={textFile.getOtherSkillsText()} paragraph={textFile.getOtherSkillsParagraphText()}/>
          </div>
          <div className="padding50"></div>
            
          <div className="blackBackground"><div className="container"><div className="padding100"/>
            <img src={downhill} width="100%" alt=""/>
          </div></div>
        
          <Footer text={textFile.getDropdownItems()}/>
        </div>
      );
      }
}
 
export default AboutPage;