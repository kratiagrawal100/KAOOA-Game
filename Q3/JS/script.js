console.log("Fetch API");
// let mybtn=document.getElementById("my-btn");
// let content=document.getElementById("content");
let c=0;
//const myRequest = new Request("https://github.com/kratiagrawal100/SSD_Assignment3/blob/main/krati.json");
let promise = new Promise(function(resolve, reject) {
    setTimeout(() => getdata(), 0);
  });
async function adv(){
await new Promise((resolve, reject) => setTimeout(
    ()=>{
        let div=document.createElement('div');
        div.style.marginLeft="72%";
        div.style.marginTop="10%";
        let img = document.createElement('img');
        img.src = "../img/"+"1"+".png";
        //img.className = "promise-avatar-example";
        document.body.append(div);
        div.append(img);
        for(i=2;i<8;i++){

        let div=document.createElement('div');
        div.style.marginLeft="72%";
        div.style.marginTop="20%";
        let img = document.createElement('img');
        img.src = "../img/"+i+".png";
        //img.className = "promise-avatar-example";
        document.body.append(div);
        div.append(img);
        }
    }),0);
}
adv();

function getdata(){
    url="../news.json";
    fetch(url, {
  
      }).then((response)=>response.json()).then((data)=>{

        console.log(data);
        for (const article of data.articles) {
            console.log(article.title);
            console.log(article.source.name);
            console.log(article.url);
            const container=document.getElementById('container');
            //console.log(container);
            const link=document.createElement('a');
            link.href=article.url;
            
            const card=document.createElement('div');
            card.id="card"+c;
            c++;
            card.classList='card';
            const moviecard = `
            <h3 id="cardheading" style="color:black;text-align:center;">${article.source.name}</h3>
            <img id="imgcard" src=${article.urlToImage} height="300px" width="500px" style="margin:auto">
            <div class="info">
            <p id="descard" style="color:darkblue;">${article.title}</p>
            </div>
            `;
            card.setAttribute("style","height:420px;width:550px;float:left;padding:1%;margin:12px;text-decoration: none;box-shadow: 5px 10px #cccc00;");
            card.innerHTML+=moviecard;
            card.onmouseover=enlarge;
           // card.onmouseenter=enlarge;
           // card.onmouseleave=defaultsize;
           // var ele=.getElementById("cardheading");
           // console.dir(ele);
           //ele.style.color='Red';
            link.appendChild(card);
            container.appendChild(link);
           //divele.
           // divele.appendChild(document.createElement('p')).textContent=article.title;
        }
    }).catch(err=>{console.log("error here")
});
}
function defaultsize(e){
    //e.target.style.height="420px";
   // e.target.style.width="550px";
}

function enlarge(e){
   
   // e.target.style.transform="scale(1.5)";
   // console.log(e.target);
   // console.log(e.target.style.height);

}
// try{
// getdata();
// }
// catch(err){
//     console.log("hello");
// }
