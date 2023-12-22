var container = document.querySelector(".container");
var Postlist = document.getElementById("title");
var activeDiv = null;

async function userFun() {
  try {
      var res = await fetch("https://jsonplaceholder.typicode.com/users");
  var data = await res.json();
  // console.log(data);

  for (let i = 0; i < data.length; i++) {
    let div = document.createElement("div");
    div.innerText = data[i].name;
    div.addEventListener("click", function () {
      if (activeDiv) {
        activeDiv.classList.remove("active");
      }
      this.classList.add("active");
      activeDiv = this;
      Postlist.innerHTML = "";
      postsFun(data[i].id);
    });
    container.appendChild(div);
    if (i === 0) {
      div.classList.add("active");
      activeDiv = div;
      postsFun(data[i].id);
    }
  }
  }catch{console.log('error in user')}

  
}
async function postsFun(id) {
  try {
      let res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?userId=" + id
  );
  let post = await res.json();
  // console.log(post);

  for (let i = 0; i < post.length; i++) {
    if (id === post[i].userId) {
      let li = document.createElement("li");
      li.innerText = post[i].title;
      Postlist.appendChild(li);
    }
  }
  }catch{console.log('error in posts')}

}
userFun();


