document.getElementById('getText').addEventListener('click',getText);
document.getElementById('getUsers').addEventListener('click',getUsers);
document.getElementById('getPosts').addEventListener('click',getPosts);
document.getElementById('addPost').addEventListener('submit',addPost);


let url = `https://jsonplaceholder.typicode.com/posts`



function getText(){
fetch('sample.txt')
  .then(txt=>txt.text())
  .then(data=>{
document.getElementById('text').innerHTML=data
  })
  document.getElementById('output').innerHTML = null
  document.querySelector('.other').style.visibility = 'visible'
  document.getElementById('addPost').style.visibility = 'visible'

}

function getUsers(){
  document.getElementById('text').innerHTML=null
  fetch('https://jsonplaceholder.typicode.com/users').then((res)=>res.json())
  .then((users)=>{
    let output = `<h1>Users</h1>`
    
    users.forEach(user => {
      output+=`
      <ul class="list-group mb-4">
        <li class="list-group-item">ID: ${user.id}</li>
        <li class="list-group-item">Name: ${user.name}</li>
        <li class="list-group-item">Email: ${user.email}</li>
      </ul>
      `
    });
    document.getElementById('output').innerHTML = output 
    document.getElementById('addPost').style.visibility = 'hidden'
    document.querySelector('.other').style.visibility = 'hidden'
  })
}

function getPosts(){
  document.getElementById('text').innerHTML=null
  fetch(url).then((res)=>res.json())
  .then((posts)=>{
    let output = `<h1>Posts</h1>`
    
    posts.forEach(post => {
      output+=`
      <div class="card card-body mb-3">
         
         <h3>${post.title}</h3>
         <p>${post.body}</p>
      </div>
      `
    });
    document.getElementById('output').innerHTML = output 
     document.querySelector('.other').style.visibility = 'visible'
  })
}

function addPost(e){
  document.getElementById('addPost').style.visibility = 'visible'
  document.querySelector('.other').style.visibility = 'visible'
  e.preventDefault()
  
  let title  = document.getElementById('title').value
  let body  = document.getElementById('body').value
  fetch(url,{
    method:'POST',
    headers:{
      'Accept':'application/json, text/plain,*/*',
      'Content-type':'application/json'
    },
    body:JSON.stringify({title:title,body:body})
  }).then(res=>res.json()).then(
    (data)=>{
      let ou = `<h3>${title}</h3>
      <p>${body}</p> `
      document.querySelector('.other').innerHTML= ou
     
    }
  )
  
}