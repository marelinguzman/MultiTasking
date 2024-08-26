function mostrarModalLogin() {
    const modalLogin = document.createElement('div');
    modalLogin.id = 'modalLogin';
    modalLogin.classList.add('modal-login');

    modalLogin.innerHTML = `
        <div class="contenido-modal-login">
            <div class="bienvenida">
                <img src="https://media.licdn.com/dms/image/C560BAQFReQup08LukQ/company-logo_200_200/0/1652286229007?e=2147483647&v=beta&t=cB65tfGD72TrPKNWt3aSnaNNPKKTzlrgGY4vTAMhpyg" alt="Bienvenida">
                <h2>Generador de asignaciones SCL Bienvenido</h2>
            </div>
            <form id="formLogin">
                <input type="email" id="correo" placeholder="Correo electrónico" required>
                <input type="password" id="contrasena" placeholder="Contraseña" required>
                <button type="submit">Iniciar sesión</button>
                <button type="button" id="botonBeta">No tengo credencial</button>
                <button type="submit"><a href="https://github.com/marelinguzman" class="github">Git-Hub Marelin G.</a></button>
                <a href="#" id="crearCuenta">Crear cuenta</a>
                <p id="mensaje-error" style="display: none;">Usuario o contraseña incorrectos.</p>
            </form>
        </div>
    `;

    document.body.appendChild(modalLogin);

    document.getElementById('formLogin').addEventListener('submit', (event) => {
        event.preventDefault();
        const correo = document.getElementById('correo').value;
        const contrasena = document.getElementById('contrasena').value;
        const mensajeError = document.getElementById('mensaje-error');

        const usuario = usuariosRegister.find(user =>
            user.correo === correo && user.contrasena === contrasena
        );

        if (usuario) {
            guardarUsuario(usuario);
            ocultarModalLogin();
            mostrarPaginaPrincipal();
        } else {
            mensajeError.style.display = 'block';
        }
    });

    document.getElementById('botonBeta').addEventListener('click', () => {
        const usuarioBeta = usuariosRegister[0];
        guardarUsuario(usuarioBeta);
        ocultarModalLogin();
        mostrarPaginaPrincipal();
    });

    document.getElementById('crearCuenta').addEventListener('click', mostrarFormularioCrearCuenta);
}

function mostrarFormularioCrearCuenta() {
    const modalCrearCuenta = document.createElement('div');
    modalCrearCuenta.id = 'modalCrearCuenta';
    modalCrearCuenta.classList.add('modal-login');

    modalCrearCuenta.innerHTML = `
        <div class="contenido-modal-login">
            <h2>Crear Nueva Cuenta</h2>
            <form id="formCrearCuenta">
                <input type="text" id="nombre-nuevo" placeholder="Nombre" required>
                <input type="email" id="correo-nuevo" placeholder="Correo electrónico" required>
                <input type="password" id="contrasena-nueva" placeholder="Contraseña" required>
                <button type="submit">Crear cuenta</button>
                <button type="button" id="cancelarCrearCuenta">Cancelar</button>
            </form>
        </div>
    `;

    document.body.appendChild(modalCrearCuenta);

    document.getElementById('formCrearCuenta').addEventListener('submit', agregarNuevaCuenta);
    document.getElementById('cancelarCrearCuenta').addEventListener('click', () => {
        document.getElementById('modalCrearCuenta').remove();
    });
}

function agregarNuevaCuenta(event) {
    event.preventDefault();

    const nombreNuevo = document.getElementById('nombre-nuevo').value;
    const correoNuevo = document.getElementById('correo-nuevo').value;
    const contrasenaNueva = document.getElementById('contrasena-nueva').value;

    const nuevoUsuario = {
        nombre: nombreNuevo,
        correo: correoNuevo,
        contrasena: contrasenaNueva,
        perfil: "https://png.pngtree.com/png-vector/20210706/ourlarge/pngtree-blank-whatsapp-bussiness-man-photo-profile-png-image_3562846.jpg"
    };

    usuariosRegister.push(nuevoUsuario);
    guardarUsuario(nuevoUsuario);
    localStorage.setItem('usuariosRegister', JSON.stringify(usuariosRegister));

    document.getElementById('modalCrearCuenta').remove();
    ocultarModalLogin();
    mostrarPaginaPrincipal();
}

function guardarUsuario(usuario) {
    localStorage.setItem('usuario', JSON.stringify(usuario));
}

function ocultarModalLogin() {
    document.getElementById('modalLogin').style.display = 'none';
}

const usuariosRegister = [
    {
        nombre: "Jossue",
        correo: "jefuentes@scl.edu.gt",
        contrasena: "jossue",
        perfil: "https://github.com/marelinguzman/img_repositorio/blob/main/foto_profe.png?raw=true"
    },
    {
        nombre:"Maria",
        correo: "mgomez@gmail.com",
        contrasena: "mariamar"
    },
    {
        nombre: "Johan",
        correo: "johandf@gmail.com",
        contrasena: "perronice"
    },
    {
        nombre: "Gaby",
        correo: "gabriela@gmail.com",
        contrasena: "gatonice"
    }

];

const usuariosGuardados = JSON.parse(localStorage.getItem('usuariosRegister'));
if (usuariosGuardados) {
    usuariosRegister.push(...usuariosGuardados);
}

mostrarModalLogin();
