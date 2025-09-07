const openBtn= document.getElementById("openModal");
const closeBtn= document.getElementById("closeModal");
const modal = document.getElementById("modal");
//const cancelBtn= document.getElementById("cancel");
const content= document.getElementById("content");
const title = document.getElementById("title")
const author = document.getElementById("author")
const pages = document.getElementById("pages")
const cover = document.getElementById("cover")
const status1 = document.getElementById("status")
const form = document.querySelector("form")
const titleError = document.querySelector("#title + span.error");
const authorError = document.querySelector("#author + span.error");
const pagesError = document.querySelector("#pages + span.error");
const coverError = document.querySelector("#cover + span.error");

const myLibrary = [];

class Book{
  constructor(information){
    this.information=information;
  }
  
};

Book.prototype.addBookToLibrary= function(){
  //just to keep the data somewhere
  myLibrary.push(this.information);
  let book=[this.information];
  const div1= document.createElement("div");
  content.appendChild(div1)
  div1.classList.add("cards")
  div1.id=crypto.randomUUID()
  console.log(div1.id)

  let cover=document.getElementById("cover").value;
  var array = [cover];
  array.forEach((t) => {
  var img = document.createElement("img");
  img.src = t;
  div1.appendChild(img);
  })

  const div2=document.createElement("div")
  div2.textContent=book
  div1.appendChild(div2)

  const delBtn= document.createElement("button")
  delBtn.classList.add("delBtn")
  delBtn.innerHTML=`<i class="fa-solid fa-trash"></i>`
  div1.appendChild(delBtn)


  

  delBtn.addEventListener("click", ()=>{
  
  div1.remove(div2)
})

};

openBtn.addEventListener("click", ()=> {
  modal.classList.add("open");
 });

 //close form and get its value
// form.addEventListener("submit", (e)=>{
//   e.preventDefault();
//   const onePiece=new Book(`Title: ${title.value} \u00A0\u00A0\u00A0\u00A0Author: ${author.value} \u00A0\u00A0\u00A0\u00A0Number of pages: ${pages.value} \u00A0\u00A0\u00A0\u00A0Status: ${status1.value} `);
//   if(author.validity.valueMissing){
//     author.setCustomValidity("please enter the name of the author")
  

//   }
//   else{
//     onePiece.addBookToLibrary();
//     console.log(myLibrary)
//     modal.classList.remove("open");
//   }
//  })

 
title.addEventListener("input", (event) => {
  if (title.validity.valid) {
    titleError.textContent = ""; // Remove the message content
    titleError.className = "error"; // Removes the `active` class
  } else {
    // If there is still an error, show the correct error
    showError();
  }
});

author.addEventListener("input", (event) => {
  if (author.validity.valid) {
    authorError.textContent = ""; // Remove the message content
    authorError.className = "error"; // Removes the `active` class
  } else {
    // If there is still an error, show the correct error
    showError2();
  }
});

pages.addEventListener("input", (event) => {
  if (pages.validity.valid) {
    pagesError.textContent = ""; // Remove the message content
    pagesError.className = "error"; // Removes the `active` class
  } else {
    // If there is still an error, show the correct error
    showError3();
  }
});

cover.addEventListener("input", (event) => {
  if (title.validity.valid) {
    coverError.textContent = ""; // Remove the message content
    coverError.className = "error"; // Removes the `active` class
  } else {
    // If there is still an error, show the correct error
    showError4();
  }
});

form.addEventListener("submit", (e) => {
  // if the email field is invalid
  e.preventDefault()
  if (!title.validity.valid) {
    // display an appropriate error message
    showError();
    // prevent form submission
    //e.preventDefault();
  }
  if(!author.validity.valid){
    showError2()
  }
  if(!pages.validity.valid){
    showError3()
  }
  if(!cover.validity.valid){
    showError4()
  }

  if(title.validity.valid && author.validity.valid &&  pages.validity.valid && cover.validity.valid){
    //e.preventDefault()
    const onePiece=new Book(`Title: ${title.value} \u00A0\u00A0\u00A0\u00A0Author: ${author.value} \u00A0\u00A0\u00A0\u00A0Number of pages: ${pages.value} \u00A0\u00A0\u00A0\u00A0Status: ${status1.value} `);
    onePiece.addBookToLibrary();
    console.log(myLibrary)
    modal.classList.remove("open");
  }
});

function showError() {
  if (title.validity.valueMissing) {
    // If empty
    titleError.textContent = "You need to enter an title.";
  } else if (title.validity.typeMismatch) {
    // If it's not an email address,
    titleError.textContent = "Entered value needs to be text.";
  } else if (title.validity.tooShort) {
    // If the value is too short,
    titleError.textContent = `Email should be at least ${title.minLength} characters; you entered ${title.value.length}.`;
  }
  // Add the `active` class
  titleError.className = "error active";
}

function showError2() {
  if (author.validity.valueMissing) {
    // If empty
    authorError.textContent = "You need to enter the name of the author.";
  } else if (author.validity.typeMismatch) {
    // If it's not an email address,
    authorError.textContent = "Entered value needs to be text.";
  } else if (author.validity.tooShort) {
    // If the value is too short,
    authorError.textContent = `Email should be at least ${author.minLength} characters; you entered ${author.value.length}.`;
  }
  // Add the `active` class
  authorError.className = "error active";
}

function showError3() {
  if (pages.validity.valueMissing) {
    // If empty
    pagesError.textContent = "You need to enter the number of pages.";
  } else if (pages.validity.typeMismatch) {
    // If it's not an email address,
    pagesError.textContent = "Entered value needs to be text.";
  } else if (pages.validity.tooShort) {
    // If the value is too short,
    pagesError.textContent = `Email should be at least ${pages.minLength} characters; you entered ${pages.value.length}.`;
  }
  // Add the `active` class
  pagesError.className = "error active";
}

function showError4() {
  if (cover.validity.valueMissing) {
    // If empty
    coverError.textContent = "You need to insert an image address.";
  } else if (cover.validity.typeMismatch) {
    // If it's not an email address,
    coverError.textContent = "Entered value needs to be an image address.";
  } else if (cover.validity.tooShort) {
    // If the value is too short,
    coverError.textContent = `Email should be at least ${cover.minLength} characters; you entered ${cover.value.length}.`;
  }
  // Add the `active` class
  coverError.className = "error active";
}

 