$(document).ready(function(){

const exp = /[0-9]/i;///^\d*$/;

$("button").on("click",function(){
  if(exp.test($("input").val()) ) {  // como ingresar solo hasta el numero de superheros disponible s????
    
$.ajax({
  type:"GET",
  url: "https://www.superheroapi.com/api.php/3525635500807579/" + $("input").val(), 
  dataType: "json",
  success: function(data){
     
    $(".resultado").append(`
      <section class="resultado ms-2 mt-5">
      <div class="card mb-3" style="max-width: 700px;">
        <div class="row g-0">
          <div class="col-12 col-md-4">
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
    </section>`)
pintarElementos(data)
  }//sucess
 
});//ajax
  } else{(alert("ingresa un numero valido"))};//if
 
});//botom


const pintarElementos = data => {
  // console.log(Object.keys(data.powerstats))
  // console.log(Object.values(data.powerstats))
  console.log(data.powerstats)

  //de objeto a array con propiedad y valor 
  const dataArray =  Object.entries(data.powerstats)
  console.log(dataArray)

  // const dataPoints = 
 //???? como ingresar propiedades y valores en la 

  const options = {
    title: {
      text: "Estadisticas de poder para " + data.name
    },
    animationEnabled: true,
    data: [{
      type: "pie",
      startAngle: 40,
      toolTipContent: "<b>{label}</b>: {y}%", // valor de la animacion
      showInLegend: "true",
      legendText: "{label}",  //puntitos de abajo
      indexLabelFontSize: 16,
      indexLabel: "{label}  - {y}%",  //valor estatico en la pantalla 
      dataPoints: [
        { y: 48.36, label: "Windows 7" },
        { y: 26.85, label: "Windows 10" },
        { y: 1.49, label: "Windows 8" },
        { y: 6.98, label: "Windows XP" },
        { y: 6.53, label: "Windows 8.1" },
        { y: 2.45, label: "Linux" },
        
      ] //dataPoints
    }]
  };


  $("#chartContainer").CanvasJSChart(options);
}


});//document ready

//[ ]