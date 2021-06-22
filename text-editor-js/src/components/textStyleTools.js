import React from 'react';
import 'bulma/css/bulma.min.css';

const TextStyleTools = ({ applyStyle, openSearch}) => {
  return (
    <div id="textTools">
      <div className="field has-addons">
        <p className="control">
          <button className="button is-text" onClick={() => applyStyle("bold")}>
            <span className="icon is-small">
              <i className="fas fa-bold"></i>
            </span>
          </button>
        </p>
        <p className="control">
          <button className="button is-text" onClick={() => applyStyle("italic")}>
            <span className="icon is-small">
              <i className="fas fa-italic"></i>
            </span>
          </button>
        </p>
        <p className="control">
          <button className="button is-text" onClick={() => applyStyle("underline")}>
            <span className="icon is-small">
              <i className="fas fa-underline"></i>
            </span>
          </button>
        </p>

        <p className="control">
          <button className="button is-text" onClick={() => applyStyle("justifyLeft")}>
            <span className="icon is-small">
              <i className="fas fa-align-left"></i>
            </span>
          </button>
        </p>
        <p className="control">
          <button className="button is-text" onClick={() => applyStyle("justifyCenter")}>
            <span className="icon is-small">
              <i className="fas fa-align-center"></i>
            </span>
          </button>
        </p>
        <p className="control">
          <button className="button is-text" onClick={() => applyStyle("justifyRight")}>
            <span className="icon is-small">
              <i className="fas fa-align-right"></i>
            </span>
          </button>
        </p>
        <p className="control">
          <button className="button is-text" onClick={() => applyStyle("justifyFull")}>
            <span className="icon is-small">
              <i className="fas fa-align-justify"></i>
            </span>
          </button>
        </p>
        <p className="control">
          <button className="button is-text" onClick={() => applyStyle("formatBlock", "blockquote")}>
            <span className="icon is-small">
              <i className="fas fa-quote-right"></i>
            </span>
          </button>
        </p>
        <p className="control">
          <button className="button is-text" onClick={() => applyStyle("formatBlock", "pre")}>
            <span className="icon is-small">
              <i className="fas fa-code"></i>
            </span>
          </button>
        </p>
        <p className="control">
          <button className="button is-text" onClick={() => applyStyle("insertHorizontalRule")}>
            <span className="icon is-small">
              <i className="fas fa-minus"></i>
            </span>
          </button>
        </p>
         <p className="control">
          <button className="button is-text" onClick={() => openSearch()}>
            <span className="icon is-small">
              <i className="fas fa-search"></i>
            </span>
          </button>
        </p>
      </div>
      
    </div>
  )
}

export default TextStyleTools;