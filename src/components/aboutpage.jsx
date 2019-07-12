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
        language: 'english',
        imageHeight: 0
      }

      handleLanguageChange = newLanguage => {
        this.setState({language: newLanguage});
      }
    
      handleBackgroundImageResize = imageHeight =>{
        this.setState({imageHeight});
      }
    
      handleLoadImage = image =>{
        console.log(image)
        this.setState({imageHeight: image})
      }
    
      render() { 
        const { language } = this.state;
        
        return (
        <div className="pageContainer">
          <NavBarDynamic language={language} onLanguageChange={this.handleLanguageChange} imageHeight={this.state.imageHeight}/>
          <Introduction language={language} onImageSizeChange={this.handleBackgroundImageResize} onImageLoad={this.handleLoadImage}/>
          <div className="container">
            <Summary language={language}/>
            <hr/>
            <Education/>
            <SpecializedCourses language={language}/>
            <hr/>
            <TechnicalSkills language={language}/>
            <OtherSkills language={language}/>
          </div>
          <Footer/>
        </div>
      );
      }
}
 
export default AboutPage;