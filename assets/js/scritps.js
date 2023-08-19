const propiedades = [
  {
    name: "Casa de campo",
    description: "Un lugar ideal para descansar de la ciudad",
    src:
      "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
    rooms: 2,
    m: 170
  },
  {
    name: "Casa de playa",
    description: "Despierta tus días oyendo el oceano",
    src:
      "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
    rooms: 2,
    m: 130
  },
  {
    name: "Casa en el centro",
    description: "Ten cerca de ti todo lo que necesitas",
    src:
      "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    rooms: 1,
    m: 80
  },
  {
    name: "Casa rodante",
    description: "Conviertete en un nómada del mundo sin salir de tu casa",
    src:
      "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    rooms: 1,
    m: 6
  },
  {
    name: "Departamento",
    description: "Desde las alturas todo se ve mejor",
    src:
      "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
    rooms: 3,
    m: 200
  },
  {
    name: "Mansión",
    description: "Vive una vida lujosa en la mansión de tus sueños ",
    src:
      "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    rooms: 5,
    m: 500
  }
];
const dormitorios = document.getElementById("rooms");
const cantidades = document.querySelectorAll(".quantity");
const desde = document.getElementById("desde");
const hasta = document.getElementById("hasta");
const total = document.getElementById("total");
const button = document.querySelector("button");
const catalog = document.getElementById("propiedades");
let cantidadesMetros = [];

total.innerHTML = "Total:" + "&nbsp;" + propiedades.length;
const card = (propiedades)  => {
propiedades.map((valor) => {
  const element = document.createElement("div");
  element.innerHTML = `
    <div class="propiedad">
    <div class="img" style="background-image: url('${valor.src}')"></div>
                <section>
                    <h5>${valor.name}</h5>
                    <div class="d-flex justify-content-between">
                        <p>Cuartos: ${valor.rooms}</p>
                        <p>Metros: ${valor.m}</p>
                    </div>
                    <p class="my-3">${valor.description}</p>
                    <button class="btn btn-info ">Ver más</button>
                </section>
            </div>`;
  catalog.appendChild(element);
});
}
card(propiedades);

button.addEventListener("click", () => {
  const resultDormitorio = dormitorios.value;
  const resultDesde = desde.value;
  const resultHasta = hasta.value;

  if (resultDormitorio.length === 0) {
    alert("Por favor ingrese la cantidad de cuartos");
  } else if (resultDesde.length === 0 || resultHasta.length === 0) {
    alert("Por favor llene todos los campos en Metros cuadrados ");
  }

  console.log(resultDormitorio, "valor ingresado de dormitorios");
  cantidades.forEach((cantidad) => {
    cantidadesMetros.push(Number(cantidad.value));
  });

  const dataRooms = propiedades.filter((e) => {
    return e.rooms == resultDormitorio;
  });

  const newData = dataRooms.filter((e) => {
    return e.m >= cantidadesMetros[0] && e.m <= cantidadesMetros[1];
  }, cantidadesMetros);
  console.log(newData);
  total.innerHTML = "Total:" + "&nbsp;" + newData.length;
  catalog.innerHTML = " ";
  card(newData);

}); 