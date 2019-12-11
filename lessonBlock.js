import { LitElement, html, css } from 'lit-element';


class LessonBlock extends LitElement {
  static get properties() {
    return {
      //Add Properties
      blockTitle: {
        type: String,
      },
      blockContent: {
        type: String
      },
    }
  }
  //Methods

  //Render
  render() {
    return html`
      <link href="https://fonts.googleapis.com/css?family=Slabo+27px&display=swap" rel="stylesheet">
      <div class="block">
        <div class=block-title>
        ${this.blockTitle}
        </div>
        <div class="block-content">
        ${this.blockContent}
        </div>
      </div>
    `
  }
  //Styles
  static get styles() {
    return css`
      :host .block{
        padding :15px;
        width: 85%;
        margin: auto;
        display: block;


      }
      :host .block-title{
        background-color: indigo;
        width : 100%;
        padding : 20px;
        margin:auto;
        border-bottom : 4px solid #2B0062;
        color :lavender;
        font-size 36px;
        text-align:center;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 600;
        
      }
      :host .block-content{
        background-color:lavender;
        padding : 20px;
        width: 100%;
        margin:auto;
        
        
      }
    `
  }

}

customElements.define('lesson-block',LessonBlock);