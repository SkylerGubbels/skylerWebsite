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
        language: "",
        imageHeight: 0
      }

      componentDidMount(){
        console.log(this.props.language)
        this.setState({language: this.props.language});
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
          <NavBarDynamic language={language} onLanguageChange={this.props.onLanguageChange} imageHeight={this.state.imageHeight}/>
          <div id="introduction"/>
          <Introduction language={language} onImageSizeChange={this.handleBackgroundImageResize} onImageLoad={this.handleLoadImage}/>
          <div className="container">
            <div id="summary"/>
            <Summary language={language}/>
            <hr/>
            <div id="education"/>
            <Education/>
            <div id="specializedCourses"/>
            <SpecializedCourses language={language}/>
            <hr/>
            <div id="technicalSkills"/>
            <TechnicalSkills language={language}/>
            <div id="otherSkills"/>
            <OtherSkills language={language}/>
          </div>
          <Footer/>
        </div>
      );
      }
}
 
export default AboutPage;