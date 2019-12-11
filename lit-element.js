import {LitElement, html} from LitElement;

class MyElement extends LitElement{
  render(){
    return html `<h1>Hello World</h1>`;
  }
}

customElements.define("my-element", MyElement);