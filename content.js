

if (!window.activated) {
  activate()
} else {
  deactivate()
}

function activate() {
  // create exit button 
  window.exitButton = document.createElement("button")
  window.exitButton.innerText = "exit"
  window.exitButton.setAttribute("style", `
    padding: 5px;
    font-size: 16px;
    position: fixed;
    right: 30px;
    top: 30px; 
    background-color: black;
    color: white;
    z-index: 9999999999999;
  `)

  // add exit button dom. 
  document.body.appendChild(window.exitButton)

  // create hover element 
  window.hoverElem = document.createElement("div")
  window.hoverElem.innerText = "..."
  window.hoverElem.setAttribute("style", `
    padding: 5px;
    font-size: 16px;
    position: fixed;
    background-color: black;
    color: white;
    z-index: 9999999999999;
    top: -1000;
    max-width: 300px;
  `)

  // add to dom 
  document.body.appendChild(window.hoverElem)


  // add click listener 
  document.getRootNode().addEventListener("click", handleClick)

  // add move listener
  window.addEventListener("mousemove", handleMove)

  window.activated = true 
}

function deactivate() {
  // remove click listener 
  document.getRootNode().removeEventListener("click", handleClick)

  // remove move listener 
  window.removeEventListener("mousemove", handleMove)

  // remove exit button from dom 
  document.body.removeChild(window.exitButton) 
  window.exitButton = null 

  document.body.removeChild(window.hoverElem) 
  window.hoverElem = null 

  window.activated = false  
}


function handleClick(e) {
  e.stopPropagation(); 
  e.preventDefault()
  if (e.target === window.exitButton) {
    deactivate()
  }
}

function handleMove(e) {
  window.hoverElem.style.top = `${e.clientY + 20}px`
  window.hoverElem.style.left = `${e.clientX + 20}px` 

  window.hoverElem.innerText = getComputedStyle(e.target).fontFamily
}


