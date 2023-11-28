import { HtmlHTMLAttributes } from "react";
import styles from "./../styles/Test.module.css";
import Image from 'next/image'

const Test = () : JSX.Element =>{

  const sizeExample : number = 5; 
  const prototypeObjects : Array<Element> | any
        = Array
          .apply(null, Array(sizeExample))
          .map((n,i)=>{
            return (
              <div id={`obj-custom-${i}`} draggable="true" onDragStart={drag}>
                Item {i}
            </div>
            )
          });

  return(
    <div>
      <div className={styles.editor} style={{backgroundColor : "#E4C482"}} id="editor" onDrop={drop}  onDragOver={allowDrop}>
        {/* Drop area */}
      </div>

      <div className={styles.dragItem} id="obj-1" draggable="true" onDragStart={drag}>
        Item 1
      </div>
      <div className={styles.dragItem} id="obj-2" draggable="true" onDragStart={drag}>
        Item 2
      </div>
      <div className={styles.dragItem} id="obj-3" draggable="true" onDragStart={drag}>
        Item 3
      </div>
      <h1 className={styles.dragItem}  id="obj-4" draggable="true" onDragStart={drag}>TESTTTTT</h1>
      <img id="logo-test"  onDragStart={drag} src="https://thewindev.com/asset/img/logo.png" />
      <img
                id="obj-5" 
                src="/vercel.svg"
                alt="Vercel Logo"
                className="dark:invert"
                width={100}
                height={24}
                onDragStart={drag}
      />
      {...prototypeObjects}
  </div>
  )
};

const allowDrop = (event:any) => {
  event.preventDefault();
};

function drag(event:any) : void{
  event.dataTransfer.setData('text/plain', event.target.id);
};

function drop(event:any) : void{
  event.preventDefault();
  let id : string = event.dataTransfer.getData('text/plain');
  const dropTarget : HTMLDivElement = event.target;

  if (dropTarget.classList.contains(styles.editor)) {
    console.log("------>"+id);
    dropTarget.appendChild(document.querySelector(`#${id}`)?.cloneNode(true) as HTMLDivElement);
  }
};

export default Test;