function mostrarPerfil() {
    const root = document.getElementById('root');
    root.innerHTML = `
        <header>
            <h1>Marelin Te Asigna 📝</h1>
            <div class="contenedor-perfil">
                <span id="usuario"></span>
                <img src="https://github.com/marelinguzman" id="imagenPerfil" class="imagen-perfil">
            </div>
        </header>
        <main>
            <input type="text" id="buscador" placeholder="Busca las asignaciones" oninput="buscarTareas()">
            <div id="contenido-tareas"></div>
        </main>
    `;
   
    actualizarPerfil();
}

function actualizarPerfil() {
    const usuario = JSON.parse(localStorage.getItem('usuario'));
    if (usuario) {
        document.getElementById('usuario').textContent = `Bienvenido, ${usuario.nombre}`;
        document.getElementById('imagenPerfil').src = usuario.imagen | 'default-avatar.png';
        mostrarTareas();
    }
}

function mostrarTareas() {
    const contenidoTareas = document.getElementById('contenido-tareas');
    const tareas = [
        { id: 1, nombre: 'Tarea 1', descripcion: 'Descripción de la tarea 1' },
        { id: 2, nombre: 'Tarea 2', descripcion: 'Descripción de la tarea 2' },
        { id: 3, nombre: 'Tarea 3', descripcion: 'Descripción de la tarea 3' }
    ];

    contenidoTareas.innerHTML = tareas.map(tarea => `
        <div class="tarea" id="${tarea.id}">
            <h2>${tarea.nombre}</h2>
            <p>${tarea.descripcion}</p>
        </div>
    `).join('');
}

function buscarTareas() {
    const query = document.getElementById('buscador').value.toLowerCase();
    const tareas = Array.from(document.querySelectorAll('#contenido-tareas .tarea'));

    tareas.forEach(tarea => {
        const nombre = tarea.querySelector('h2').textContent.toLowerCase();
        const descripcion = tarea.querySelector('p').textContent.toLowerCase();
        if (nombre.includes(query) || descripcion.includes(query)) {
            tarea.style.display = '';
        } else {
            tarea.style.display = 'none';
        }
    });
}

mostrarPerfil();