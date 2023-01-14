import React from 'react'

function Book(props) {
    const {img_src, title, author} = props;
    const clickHandler = () => {
      alert("Button clicked")
    }
    return (
      <article className="book" onMouseOver={() => {
        console.log(title);
      }}>
        <img alt="" src={img_src} style={{height:'200px', width:'300px'}}></img>
        <h2 onClick={() => console.log(title)}>{title}</h2>
        <h4>{author}</h4>
        <button onClick={clickHandler}>Click Example</button>
      </article>
    );
}

export default Book
