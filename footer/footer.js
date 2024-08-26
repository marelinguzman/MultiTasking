function crearPieDePagina() {
  const pieDePagina = document.createElement('footer');
  pieDePagina.classList.add('pie');

  const contenido = `
     <div class="footer">
      <center>
        <img src="https://media.licdn.com/dms/image/C560BAQFReQup08LukQ/company-logo_200_200/0/1652286229007?e=2147483647&v=beta&t=cB65tfGD72TrPKNWt3aSnaNNPKKTzlrgGY4vTAMhpyg" alt="">
      </center>
      <b><p>Colegio Santa Catalina Labouré</p></b>
      <b><P>Marelin Cristal Guzmán Díaz</P></b>
      <b><p>mcguzman@scl.edu.gt</p></b>
     </div>

  `;

  pieDePagina.innerHTML = contenido;
  document.body.appendChild(pieDePagina);
}

crearPieDePagina();