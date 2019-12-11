import { LitElement, html, css } from 'lit-element';

import './sidebar.js';
import './lessonContent.js';

class PurpleCowCourse extends LitElement {

  static get properties() {
    return {
      activeLesson:{
        type:Number,
      },
    }
  }

  //Methods
  showLesson(event){
    console.log(event.detail);
    this.activeLesson = event.detail.lessonID
  }


  //Render
  render() {
    return html `
    <lesson-content .lesson=${this.activeLesson} ></lesson-content>
    <side-bar @select-lesson=${this.showLesson} ></side-bar>
    `
  }
  //Styles
  static get styles() {
  }
}

customElements.define('purple-cow-course', PurpleCowCourse);