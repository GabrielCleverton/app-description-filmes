fetch('https://api.themoviedb.org/3/movie/popular?api_key=506fadb0256c13349acc05dabebf9604&language=en-US&page=1', {

method: 'GET'
}).then (response => response.json()).then(function(json){

var container= document.querySelector('.container');
json.results.map(function(val){
    container.innerHTML+=`
    
   <div style = 'cursor : pointer' class="titulofilmes"> `+val.title+`<div style = 'display: none';  class ="description">`+val.overview+`</div><hr>
    
   

    </div>`;
    
    
    
})
// console.log(json);*/
var titulos = document.querySelectorAll('.titulofilmes');
    for(var i = 0; i<titulos.length; i++){
        titulos[i].addEventListener('click', function(t){
        if(t.target.querySelector(".description").style.display=="none"){
            t.target.querySelector(".description").style.display='block';

        }else{

         t.target.querySelector(".description").style.display="none";
        }
        })
    }
})
  