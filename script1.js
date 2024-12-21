fetch("https://dummyjson.com/products").then(Response => Response.json()).then(data=>{
    data.posts.forEach(element =>{
        const row=document.querySelector(".row")
        const col = document.createElement("div")
        col.classList.add("col-lg-4")
        col.innerHTML=`
          <div class="card" style="width:400px">
    <img class="card-img-top" src="../bootstrap4/img_avatar1.png" alt="Card image" style="width:100%">
    <div class="card-body">
      <h4 class="card-title">John Doe</h4>
      <p class="card-text">Some example text some example text. John Doe is an architect and engineer</p>
      <a href="#" class="btn btn-primary">See Profile</a>
    </div>

     `
        

    })

})
    