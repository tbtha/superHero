$(document).ready(function(){

$("button").click(function(){

$.ajax({
    type:"GET",
    url: "https://www.superheroapi.com/api.php/3525635500807579/618",
    dataType: "json",
    success: function(data){
        $(".resultado").append(`
        <section class="resultado ms-2 mt-5">
        <div class="card mb-3" style="max-width: 700px;">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="${data.image.url}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <ul class="list-group list-group-flush"></ul>
                  <h5 class="card-title list-group-item">Nombre: ${data.name}</h5>
                  <li class="list-group-item">Conexiones: ${data.connections["group-affiliation"]}<p> Publicado por : ${data.biography.publisher}</p></li>
                  <li class="list-group-item">Ocupación: ${data.work.occupation}</li>
                  <li class="list-group-item">Primera aparicion: ${data.biography["first-appearance"]}</li>
                  <li class="list-group-item">Altura: ${data.appearance.height[0]} - ${data.appearance.height[1]} </li>
                  <li class="list-group-item">Peso: ${data.appearance.weight[0]} - ${data.appearance.weight[1]} </li>
                  <li class="list-group-item">Alianzas: ${data.biography.aliases}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      `)


    }
})

})




})

//[ ]