import React, { Component } from 'react';
import NavBar from './navbar';
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
        imageHeight: 200
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
        <React.Fragment>
          <NavBar language={language} onLanguageChange={this.handleLanguageChange} imageHeight={this.state.imageHeight}/>
          <Introduction language={language} onImageSizeChange={this.handleBackgroundImageResize} onImageLoad={this.handleLoadImage}/>
          <div className="container">
            <Summary language={language}/>
            <Education/>
            <SpecializedCourses language={language}/>
            <TechnicalSkills language={language}/>
            <OtherSkills language={language}/>
          </div>
          <Footer/>
        </React.Fragment>
      );
      }
}
 
export default AboutPage;