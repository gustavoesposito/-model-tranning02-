var main = document.querySelector('.main .center')[0];

fetch('https://api.themoviedb.org/3/movie/popular?api_key=506fadb0256c13349acc05dabebf9604&language=en-US&page=1')
.then(response=>response.json())
.then(data=>{
data.results.map((i,j)=>{


    if(j>10)
    return;
    if (j==0){
    main.innerHTML+= `
    
    <div class"banner-principal" style="background-image:url('https://image.tmdb.org/t/p/original`+i.backdrop_path+`')"></div>
    
    `;
    }else{
        if(j==1){
main.innerHTML+=`
 <h2>Assista o melhor Filme</h2>
<div class"card-movie"><img src""/</div>

`;

        }else{

        }
    }
})
})