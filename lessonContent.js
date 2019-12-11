import {html, css, LitElement} from 'lit-element';
import './lessonBlock';

class LessonContent extends LitElement{

  static get properties(){
    return{
      lesson:{
        type:String,
        attribute:true,
        reflect: true
      },
      blocks:{
        type:Array
      },
      lessonTitles:{
        type:Array,
        reflect:true,

      },
      lessonContents:{
        type:Array,
      },
      currentLesson:{
        type:Array,
      }
    }

  }  

  attributeChangedCallback(name, oldval, newval){
    if(name === "lesson"){
      console.log("estoy cambiando a lessons")
      this.lessonTitles=[]
      this.currentLesson=[]
      this.blocks[this.lesson].forEach(e=> {this.lessonTitles.push(e.title)});
      this.blocks[this.lesson].forEach(title=>{this.currentLesson.push([title.title,title.content])});
      console.log(this.currentLesson);
    }
  }



  render(){
    return html `
    <div>
      ${this.currentLesson.map( title=> html `<lesson-block .blockTitle=${title[0]} .blockContent=${title[1]}></lesson-block>`) }
    </div>
    `

  }

  constructor(){
    super();
    this.lessonTitles=["Hello", "world"]
    this.blocks=[
      [
        //INTRODUCCION
        {
          title:"¿Qué es Python?",
          content:html `<p>Lenguaje de programación de <b>alto nivel, interpretado y 
          de propósito general.</b></p>
          <p>Ayuda a los programadores a realizar código en menos pasos en comparación con Java o C++.</p>
          <p>Fue fundado en 1991 por el desarrollador Guido Van Rossum.</p>`
        },
        {
          title:"Instalación de Python",
          content: html `
          <p><b>Verificar si Python está instalado</b></p>
          <ul>
            <li>Entrar a la terminal</li>
            <li>Escribir: <code>python --version</code></li>
          </ul>
          <p>En caso de que python esté instalado, saldrá un mensaje mostrando la versión instalada, en caso contrario, saldrá un mensaje diciendo que el comando <code>python</code> no se encuentra</p>
          `
        },
        {
          title:"print() e input()",
          content: html `
          <ul>
            <li><code>print(<code style="color:orchid">valor</code>)</code>: Muestra el valor de <code style="color:orchid">valor</code> en la terminal </li>
            <li><code>input(<code style="color:orchid">"mensaje"</code>)</code>: Muestra a <code style="color:orchid">mensaje</code> en la terminal, y recibe la entrada del teclado </li>
          </ul>
          `
        },
      ],
      //TIPOS PRIMITIVOS
      [
        {
          title:"Block1",
          content:html `<p>Lesson 1</p>`
        },
        {
          title:"Block2",
          content: html `<p>Lesson 1</p>`
        },
      ],
      //VARIABLES
      [

      ],
      //OPERACIONES BASICAS
      [

      ],
      //LISTAS
      [

      ],
      //FOR/WHILE LOOPS
      [

      ],
      //LISTAS DE LISTAS / MATRICES
      [

      ],
      //DICCIONARIOS, TUPLAS Y CONJUNTOS
      [

      ],
      //FUNCIONES
      [

      ],
      //ALCANCE DE UNA VARIABLE
      [

      ],
      //FUNCIONES RECURSIVAS
      [

      ],
      //CLASES
      [

      ],
      //JUEGO SUBMARINO
      [

      ]

    ]

  }

  static get styles(){
    return css `
    :host div{
      color: darkslateblue;
      display: block;
      marginleft:25%;
      position :absolute;
      right: 0px;
      width: 75%;
      height: 100%;
      background-color:#191926;
      // background-color:#2F2F61;
      font:
    }
    `

  }


}

customElements.define('lesson-content',LessonContent);