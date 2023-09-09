const form = document.querySelector(".form");
const inputs =document.querySelectorAll(".inputs");
const box = document.querySelector (".box");

const posts = [];

const render=()=>{
};
for(let i of posts){
    let div = document.createElement('div');
    div.innerHTML =`
    <p>${i.first_child}</p>
    <p>${i.last_name}</p>
    <p>${i.email}</p>
    `;
    box.append(div);
};

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    let obj ={};
    for(let i of inputs){
        obj[i.name] = i.value;
        i.value="";
    }
    posts.push = ({...obj,id:Date.now})

    render()
});

