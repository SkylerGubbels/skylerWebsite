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
import ModalMenu from './common/modalmenu';

class AboutPage extends Component {
    state = {
        imageHeight: 0,
        modal: false
      }
  
      // Updates information when background image is resized.
      handleBackgroundImageResize = imageHeight =>{
        this.setState({imageHeight});
      }
    
      // Gets image dimensions on image load
      // This information needs to be passed to navbarDynamic so it knows
      // the point at which it needs to start fading in the background
      handleLoadImage = image =>{
        this.setState({imageHeight: image})
      }

      handleMobileMenu = () =>{
        this.setState({modal: true})
      }

      handleCloseModal = () => {
        this.setState({modal: false})
      }
    
      render() { 
        const { language, onLanguageChange, textFile } = this.props;
        const { modal } = this.state;
        const sectionTitles = textFile.getSectionTitles();
        
        return (
        <div className="pageContainer">
          <NavBarDynamic language={language} onLanguageChange={onLanguageChange} imageHeight={this.state.imageHeight} navbarItems={textFile.getNavbarItems()} dropdownItems={textFile.getDropdownItems()} onMobileMenu={this.handleMobileMenu}/>
            <div id="introduction" className=""/>
            {modal && <ModalMenu onCloseModal={this.handleCloseModal}/>}
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
            <h1 className="componentTitle" style={{"paddingLeft":"20px"}}>{sectionTitles.specializedCourses}</h1></div>
            <SpecializedCourses/>
            
            <div className="padding100"/>
            </div>
            
            <div className="blackBackground"><div className="container"><div id="technicalSkills" className="padding100"/>
            <h1 className="whiteText componentTitle">{sectionTitles.technicalSkills}</h1>
            <TechnicalSkills text={textFile.getTechSkillsText()} logoSize={100}/>
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