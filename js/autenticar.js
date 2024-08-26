const usuarios = [
    { correo: 'usuario@ejemplo.com', contraseña: 'contraseña', nombre: 'Usuario', imagen: 'https://lh3.googleusercontent.com/a-/ALV-UjUJJLHjYK2EfvBbGTPP4TyVmeTXLAisGkh-BkUlKu6JZQTHbnPN=s40-c' }
];

function mostrarModalLogin() {
    const modalLogin = document.createElement('div');
    modalLogin.classList.add('modal');
    modalLogin.id = 'modalLogin';
    
    const contenidoModal = `
        <div class="contenedor-login">
            <h2>Iniciar sesión</h2>
            <input type="email" id="correo" placeholder="Correo electrónico" required>
            <input type="password" id="contraseña" placeholder="Contraseña" required>
            <button id="iniciarSesion">Iniciar sesión</button>
            <button id="registrar">Registrarse</button>
        </div>
    `;

    modalLogin.innerHTML = contenidoModal;
    document.body.appendChild(modalLogin);

    document.getElementById('iniciarSesion').addEventListener('click', autenticarUsuario);
    document.getElementById('registrar').addEventListener('click', mostrarRegistro);
}

function autenticarUsuario() {
    const correo = document.getElementById('correo').value;
    const contraseña = document.getElementById('contraseña').value;
    const usuario = usuarios.find(user => user.correo === correo && user.contraseña === contraseña);

    if (usuario) {
        localStorage.setItem('usuario', JSON.stringify(usuario));
        document.getElementById('modalLogin').remove();
        mostrarPerfil();
    } else {
        alert('Credenciales incorrectas.');
    }
}

function mostrarRegistro() {
    alert('Registro no implementado.');
}

function comprobarSesion() {
    const usuarioAlmacenado = JSON.parse(localStorage.getItem('usuario'));
    if (!usuarioAlmacenado) {
        mostrarModalLogin();
    } else {
        mostrarPerfil();
    }
}

comprobarSesion();