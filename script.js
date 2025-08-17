const openBtn= document.getElementById("openModal");
const closeBtn= document.getElementById("closeModal");
const modal = document.getElementById("modal");
//const cancelBtn= document.getElementById("cancel");
const content= document.getElementById("content");

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
closeBtn.addEventListener("click", (e)=>{
  e.preventDefault();
  let title= document.getElementById("title").value;
  let author= document.getElementById("author").value;
  let pages= document.getElementById("pages").value;
  let status=document.getElementById("status").value;
  let cover=document.getElementById("cover").value
  const onePiece=new Book(`Title: ${title} \u00A0\u00A0\u00A0\u00A0Author: ${author} \u00A0\u00A0\u00A0\u00A0Number of pages: ${pages} \u00A0\u00A0\u00A0\u00A0Status: ${status} `);
  if(title.length<1||author.length<1||pages.length<1||status.length<1||cover.length<1){
    alert("fill the form correctly")
  

  }
  else{
    onePiece.addBookToLibrary();
    console.log(myLibrary)
    modal.classList.remove("open");
  }
 })

 

 



