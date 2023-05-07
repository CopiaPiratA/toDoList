const input = document.getElementById("input");
const addBtn = document.getElementById("add-btn");
listContainer = document.getElementById("list-container");
// create a functin that reproduce a sound.
function playAudio() {
    let sound = document.getElementById("sound");
    sound.volume = 0.02;
    if (sound.paused) {
        sound.play();
    } else {
        sound.pause();
        sound.currentTime = 0;
        sound.play();
    }
}
function addNewList(){
    if(input.value === ""){
        alert("The list can't be empty")
    }else { //create a new list
        let newList = document.createElement("LI");
        let listTxt = document.createTextNode(input.value);
        newList.appendChild(listTxt);
        listContainer.appendChild(newList);
        newList.className = "new-list";
        //Add a text area to each of the lists
        let textareaBtn = document.createElement("button");
        let textarea = document.createElement("textarea");
        newList.appendChild(textareaBtn);
        listContainer.appendChild(textarea);
        textarea.style.display = "none";
        textarea.id = "textarea";
        textareaBtn.id = "textarea-btn"

        input.value = ""
         //create a new close button
        let closeBtn = document.createElement("button");
        newList.appendChild(closeBtn)
        closeBtn.className = "close-btn";
            //delete the clicked list
            closeBtn.addEventListener("click",()=>{
                newList.style.display = "none";
                playAudio();
            })
                //when the list is clicked it changes the class to line through
                newList.addEventListener("click",()=>{
                    if (newList.className === "new-list"){
                        newList.className = "line-through"
                    }else {
                        newList.className = "new-list"
                    }
                })
                //show or hidde the textarea
                textareaBtn.addEventListener("click", (event) => {
                    event.stopPropagation();
                    if (textarea.style.display === "block") {
                      textarea.style.display = "none";
                    } else {
                      textarea.style.display = "block";
                    }
                  });
                  
    }
}

document.addEventListener("keydown",(event)=>{
    if(event.key === "Enter"){
        addNewList()
    }
})
addBtn.addEventListener("click",addNewList)
