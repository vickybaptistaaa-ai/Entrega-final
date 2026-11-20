
function cargarEntradas() {
  fetch('data/data.json')
    .then(res => res.json())
    .then(datos => {
      let contenedor = document.getElementById('contenedor-entradas');
      let htmlAcumulado = '';

      datos.forEach(item => {
        htmlAcumulado += `<div class="col">`;
        htmlAcumulado += `  <div class="tarjeta-entrada border h-100 d-flex flex-column justify-content-between p-4">`;
        htmlAcumulado += `    <div>`;
        htmlAcumulado += `      <p class="tarjeta-numero mb-4">${item.numero}</p>`;
        htmlAcumulado += `      <h3 class="tarjeta-titulo mb-3">${item.titulo}</h3>`;
        htmlAcumulado += `      <p class="tarjeta-texto mb-4">${item.descripcion}</p>`;
        htmlAcumulado += `    </div>`;
        htmlAcumulado += `    <div>`;
        htmlAcumulado += `      <p class="tarjeta-precio mb-3">${item.precio}</p>`;
        htmlAcumulado += `      <button type="button" class="enlace-card" data-bs-toggle="modal" data-bs-target="#modalEntradas">${item.cta} ↗</button>`;
        htmlAcumulado += `    </div>`;
        htmlAcumulado += `  </div>`;
        htmlAcumulado += `</div>`;
      });

      contenedor.innerHTML = htmlAcumulado;
    })
    .catch(error => {
      console.log(error);
      document.getElementById('contenedor-entradas').innerHTML =
        `<div class="col"><p class="texto-seccion">No pudimos cargar las entradas. Probá de nuevo en unos minutos.</p></div>`;
    });
}

cargarEntradas();

const forms = document.querySelectorAll('.needs-validation');

forms.forEach((form) => {
  form.addEventListener('submit', (e) => {
    if (!form.checkValidity()) {
      e.preventDefault();
      e.stopPropagation();
    }
    form.classList.add('was-validated');
  });
});
