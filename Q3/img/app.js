const data=[{
    title:"aaa",
    rating:"8.4"
},
{
    title:"bbb",
    rating:"7.7"
}];
//console.log(data);
for(let i=0;i<10;i++){
for(const d of data){

//console.log(d);
const container=document.getElementById('container');
console.log(container);
const card=document.createElement('div');
card.classList='card';
const moviecard = `
<img src="./img/1.png" alt="">
<div class="info">
<h3>${d.title}</h3>
<p>${d.rating}</p>
</div>
`;
card.style.height='300px';
card.style.width='300px';
card.style.float='left';
//card.style.padding='10%'
card.style.margin="10px";
card.style.border="1px solid green";
card.innerHTML+=moviecard;
console.dir(container);
container.appendChild(card);
}
}

