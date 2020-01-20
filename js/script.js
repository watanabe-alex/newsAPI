let botaoAtualiza = document.getElementById("btn-atualizar");
let board = document.getElementById("board");
let input = document.getElementById("input");


//método mais explicado
// botaoAtualiza.addEventListener('click', ()=> {
//     fetch("https://newsapi.org/v2/top-headlines?country=jp&apiKey=686cd179b50b478cb2c2f1737e302795").then((response)=>{
//         return response.json()
//     }).then(json=>{ //pode fazer essa arrow function assim também (json)=>{}
//         console.log(json);
//     });
// });

//método abreviado
botaoAtualiza.addEventListener('click', ()=> {
    fetch("https://newsapi.org/v2/top-headlines?country="+input.value+"&apiKey=686cd179b50b478cb2c2f1737e302795")
    .then(response=>response.json())
    .then(json=>{
        //console.log(json.articles);
        mostrarNaTela(json.articles);
    });
});

// outra maneira que poderia ser feito
// botaoAtualiza.addEventListener('click', async()=>{
//     let listaNoticias = (await fetch("https://newsapi.org/v2/top-headlines?country="+input.value+"&apiKey=686cd179b50b478cb2c2f1737e302795")).json();
//     console.log(listaNoticias);
// });

let mostrarNaTela = listaNoticias => {

    board.innerHTML = "";

    listaNoticias.forEach(element => {
        
        let card = `<div class="card col-3 p-1 m-3" style="width: 18rem;">
                        <img src="${element.urlToImage}" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">${element.title}</h5>
                            <p class="card-text">${element.description}</p>
                            <a href="${element.url}" class="btn btn-secondary">LEIA MAIS</a>
                        </div>
                    </div>`

        board.innerHTML += card;

    });

}