// for(let i=0;i<=10;i++){
//     console.log(i);
// }

// let i=0
// while(i<=10){
//     console.log(i);
//     i++
// }

// let i=0
// do{
//     console.log(i);
//     i++
// }
// while(i<=10)

// let l=[1,2,3,4,5]
// let l={name:'anu',age:23}
// for (i in l){
//     console.log(i);
// }

// for(i in l){
//     console.log(i);
// }

// let a='   welcome   '
// console.log(a.length);
// console.log(a.charAt(5));
// console.log(a.concat(' ','helo'));
// console.log(a.endsWith('e'));
// console.log(a.startsWith('w'));
// console.log(a.slice(0,4));
// console.log(a.trim());
// console.log(a.trimStart());
// console.log(a.trimEnd());


// l=[1,2,3,4,5]
// // l.pop();
// console.log(l);
// console.log(l.length);
// console.log(l.at(3));
// // l.push([6,7]);
// // console.log(l);
// // l.shift()


// // l.unshift(10)

// l[1]=100
// console.log(l);



// function sample(){
//     console.log('sample fun')

// }
// sample()

// let sample1=function(){
//     console.log('sample1');

// }
// sample1()

// let sample2=()=>{
//     console.log('sample2');

// }
// sample2()


let data=[{id:'1',name:'aromal',age:22},{id:'2',name:'abin',age:23},{id:'3',name:'roshan',age:21}]
function Display(){
    let tbody=document.querySelector("tbody")
    tbody.innerHTML=''
    data.forEach(element=>{
        
        let tr=document.createElement("tr")
        let id_td=document.createElement("td")
        id_td.innerHTML=element.id
        tr.appendChild(id_td)
        let name_td=document.createElement("td")
        name_td.innerHTML=element.name
        tr.appendChild(name_td)
        let age_td =document.createElement("td")
        age_td.innerHTML=element.age
        tr.appendChild(age_td)


        let edit_td = document.createElement("td")
        let edit_btn = document.createElement("button")
        edit_btn.innerHTML='Edit'
        edit_btn.onclick=function(){

           edit_form(element.id) 
        }
        edit_td.appendChild(edit_btn)
        tr.appendChild(edit_td)



        let del_td=document.createElement("td")
        let del_btn=document.createElement("button")
        del_btn.innerHTML='Delect'
        del_btn.onclick=function(){
            delete_data(element.id)
        }
        del_td.appendChild(del_btn)
        tr.appendChild(del_td)



        tbody.appendChild(tr)
    })

}


function delete_data(id){
    data=data.filter((user)=>{
        if(user.id!=id){
            return user
        }
    })
    Display()
}
document.getElementById("edit_form").addEventListener("submit",function(event){
    event.preventDefault()
    let id=document.getElementById9("e_id").value
    let name=document.getElementById9("e_name").value
    let age=document.getElementById9("e_age").value
    data.push({id:id,name:name,age:age})
    Display()
})
let edit_var
function edit_form(id){
    document.getElementById("add_form").style.display='none'
    document.getElementById("edit_form").style.display='block'
    console.log(id);
    let edit_data=data.find(user=>user.id==id)
    console.log(edit_data);
    document.getElementById("e_id").value=edit_data.id
    document.getElementById("e_name").value=edit_data.name
    document.getElementById("e_age").value=edit_data.age
    edit_var=id


}
document.getElementById("edit_form").addEventListener("submit",function(event){
    event.preventDefault()
    let id=document.getElementById9("e_id").value
    let name=document.getElementById9("e_name").value
    let age=document.getElementById9("e_age").value

    data=data.map((user)=>{
        if(user.id==edit_var){
            return{...user,id:id,name:name,age:age}

        }
        return user
    })
        document.getElementById("add_form").style.display='block'
        document.getElementById("edit_form").style.display='none'

    
})




Display()