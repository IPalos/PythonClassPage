import {LitElement, html, css} from "lit-element";

class SideBar extends LitElement{

  constructor(){
    super();
    this.lessons = ['Introducción',
                    'Tipos primitivos', 
                    'Variables', 
                    'Operaciones Básicas', 
                    'Listas', 
                    'Ciclos For/While',
                    'Listas de listas, matrices',
                    'Diccionarios, tuplas y conjuntos',
                    'Funciones', 
                    'Alcance de una variable', 
                    'Funciones Recursivas',
                    'Clases',
                    'Juego Submarino',
                  ];
    this.showAddLessonButton = true;
    this.addLessonName = "wiuiu";
  }

  static get properties(){
    return {
      lessons:{
        type : Array,
      },
    }
  }

  render(){
    return html `
    <div class="side-bar">
      <div class="side-sandwich">O</div>
      ${this.lessons.map( (item,index) =>html `<div @click=${this.handleClick} id="${index}" class="side-button">${item}</div>`)}

    </div>

    `;
  }

  handleClick(event){
    console.log(event.target.id);
    let buttonID = event.target.id;
    this.dispatchEvent(new CustomEvent('select-lesson', {detail: {lessonID:buttonID}}));
  }

  showLesson(event){
    console.log(`deberia mostrar la leccion ${event.detail}`);
  }

  static get styles(){
    return css `

    .side-bar{
      width : 25%;
      height: 100%;
      display : block;
      background-color : darkslateblue;
      position: fixed;

    }

    .side-button{
      background-color : darkslateblue;
      padding : 10px ;
      color : lavender;
    }

    .side-button:hover{
      background-color : slateblue;
      box-shadow: 0px -2px 10px   #101020;
      border-bottom : 2px solid #101020;
      transition: 0.3s;
      // width: 100%;
    }


    `
  }

}

customElements.define("side-bar",SideBar);





