import React, {useState, useEffect } from 'react';
import { kmpSearch } from '../helper/searchText';

const SearchBar = () => {
  const contentArea = document.querySelector('#content')
  console.log(contentArea?.innerHTML)

  const [pattern, setPattern] = useState("") 
  const [replacement, setReplacement] = useState("") 
  const [matches, setMatches] = useState([])

  const replace = (startingIndex, pattern,replacement) => {
    let splitContent = contentArea.innerHTML.split('')
    splitContent.splice(startingIndex, pattern.length, ...replacement)

    const newContent=splitContent.join('')
    return newContent
  }

  useEffect(() => {
    if(pattern !== '') {
      let matchIndexes = kmpSearch(contentArea.innerHTML, pattern)
      setMatches(matchIndexes)

      // if(matchIndexes.length > 0) {
      //   markText(matchIndexes)
      // }
      // console.log(matchIndexes)
    }
  }, [pattern, contentArea?.innerHTML])
  
 

  const replaceOne = () => {
    if(matches.length > 0) { 
      contentArea.innerHTML = replace(matches[0].startingIndex, pattern, replacement)
      setMatches(kmpSearch(contentArea.innerHTML, pattern))
    }
   return
  }

  const replaceAll = () => {
    let matchesCopy = [...matches]

    if(matches.length > 0) {
      while(matchesCopy.length !== 0) { // O(n + 1)
        contentArea.innerHTML = replace(matchesCopy[0].startingIndex, pattern, replacement)
        matchesCopy = kmpSearch(contentArea.innerHTML, pattern)
      }
    }

  }

  // const markText = (matches) => {
  //     const matchText = contentArea.innerHTML.slice(matches[0].startingIndex, matches[0].lastIndex)
  //     console.log(matchText)
  //     const markText = `<mark>${matchText}</mark>`
  //     console.log(markText)
  //     contentArea.innerHTML = replace(matches[0].startingIndex, pattern, markText)
  // }

  return (
    <div id="searchHolder">
      <div id="textSearchContainer">
        <div id="textSearch" className="m-2">
         
          <div
           className="mt-1"
           style={{ display: "flex", alignItems: "center" }}
          >
          <input
            className="input is-small"
            type="text"
            placeholder="Find"
            onChange={(e) => setPattern(e.target.value)}
          />
        <span>
          <button className="button is-small ml-1" onClick={() => {
            const searchHolder = document.querySelector("#searchHolder");
            searchHolder.style.visibility = "hidden"
          }}>
            <span className="icon">
              <i className="fas fa-times"></i>
            </span>
          </button>
        </span>
      </div>

          <div
            className="mt-1"
            style={{ display: "flex", alignItems: "center" }}
          >
            <input
              className="input is-small"
              type="text"
              placeholder="Replace"
              onChange={(e) => setReplacement(e.target.value)}
            />
            <button className="button is-small ml-2 is-primary is-light" onClick={() => replaceOne()}>
              Replace
            </button>
            <button className="button is-small ml-2 is-primary is-light" onClick={() => replaceAll()}>
              Replace All
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchBar;
