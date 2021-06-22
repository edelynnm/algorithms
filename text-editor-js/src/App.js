import "./App.css";
import { useRef, useEffect } from "react";
import TextStyleTools from "./components/textStyleTools";
import SearchBar from "./components/searchbar";

function App() {
  const textInput = useRef();

  function applyStyle(command, value) {
    document.execCommand(command, false, value);
  }

  useEffect(() => {
    textInput.current.focus();
  }, []);

  const openSearch = () => {
    const searchHolder = document.querySelector("#searchHolder");
    searchHolder.style.visibility = "visible";
  };

  useEffect(() => {
    const contentArea = document.querySelector('#content')
    contentArea.addEventListener('keydown', (e) => {

      if(e.key === 'Tab') {
        e.preventDefault()
        console.log('tab')
        applyStyle('indent')
      }

    })
    contentArea.addEventListener("paste", (e) => {
      console.log(e.clipboardData)

      e.preventDefault();
      const text = e.clipboardData.getData('text/plain');
      document.execCommand("insertText", false, text);
  });

  }, [])
  return (
    <div>
      <div id="main">
        <div style={{ display: "flex", borderBottom: "2px solid #eee" }}>
            <TextStyleTools applyStyle={applyStyle} openSearch={openSearch} />
          </div>
        <SearchBar/>

        <div style={{ padding: "20px", paddingTop: 60}}>
          <div id="editor">
           
            <div className="textAreaContainer">
              <div
                placeholder="Enter text here..."
                contentEditable={true}
                id="content"
                ref={textInput}
                className="content textArea"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
