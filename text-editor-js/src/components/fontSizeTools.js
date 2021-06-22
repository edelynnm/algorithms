import React, {useState} from 'react';
import 'bulma/css/bulma.min.css';

const FontSizeTools = ({fontSize , changeFontSize}) => {
  return (
    <div id="textStyle-container" className="field is-grouped">
       <div className="field has-addons mr-2">
        <p id="minus-font-btn" className="control">
          <a className="button" onClick={() => changeFontSize('minus') }>
            <span className="icon is-small">
              <i className="fas fa-minus"></i>
            </span>
          </a>
        </p>
        <p id="input-font-size" className="control">
          <span>
            <input className="input" type="text" value={fontSize} 
              onChange={(e) => changeFontSize('custom', e.target.value)}
              onBlur={(e) => changeFontSize('custom', e.target.value)}
              style={{width: 50, textAlign: 'center'}}
            />
          </span>
        </p>
        <p id="add-font-btn" className="control">
          <a className="button" onClick={() => changeFontSize('add')}>
            <span className="icon is-small">
              <i className="fas fa-plus"></i>
            </span>
          </a>
        </p>
      </div>
    </div>
  )
}

export default FontSizeTools;
