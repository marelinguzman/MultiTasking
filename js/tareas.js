function mostrarTareas() {
    const contenidoTareas = document.getElementById('contenido-tareas');
    contenidoTareas.innerHTML = `
        <h2>Mis Tareas</h2>
        <form id="formulario-tarea" class="formulario-tarea">
            <input type="text" id="nombre-tarea" placeholder="Nombre de la tarea" required>
            <input type="date" id="fecha-entrega" required>
            <select id="nombre-asignado" required>
                <option value="" disabled selected>Asignar a</option>
                <option value="Josue Anleu">Josue Anleu</option>
                <option value="Javier Mayen">Javier Mayen</option>
                <option value="Justin Bercian">Justin Bercian</option>
                <option value="Yulian Gaitan">Yulian Gaitan</option>
                <option value="Estuardo Ordoñez">Estuardo Ordoñez</option>
            </select>
            <select id="estado-tarea">
                <option value="pendiente">Pendiente</option>
                <option value="en-proceso">En proceso</option>
                <option value="terminada">Terminada</option>
            </select>
            <button type="submit">Agregar tarea</button>
        </form>
        <table id="tabla-tareas">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Fecha de Entrega</th>
                    <th>Asignado a</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody id="tareas-pendientes">
                <tr><th colspan="5">Pendientes</th></tr>
            </tbody>
            <tbody id="tareas-en-proceso">
                <tr><th colspan="5">En proceso</th></tr>
            </tbody>
            <tbody id="tareas-terminadas">
                <tr><th colspan="5">Terminadas</th></tr>
            </tbody>
        </table>
    `;

    cargarTareas();

    document.getElementById('formulario-tarea').addEventListener('submit', agregarTarea);
}

function agregarTarea(event) {
    event.preventDefault();

    const nombreTarea = document.getElementById('nombre-tarea').value;
    const fechaEntrega = document.getElementById('fecha-entrega').value;
    const nombreAsignado = document.getElementById('nombre-asignado').value;
    const estadoTarea = document.getElementById('estado-tarea').value;

    const tarea = {
        nombre: nombreTarea,
        fechaEntrega: fechaEntrega,
        nombreAsignado: nombreAsignado,
        estado: estadoTarea
    };

    let tareas = JSON.parse(localStorage.getItem('tareas')) || [];
    tareas.push(tarea);
    localStorage.setItem('tareas', JSON.stringify(tareas));

    mostrarTareas();
    document.getElementById('formulario-tarea').reset();
}

function cargarTareas() {
    const tareas = JSON.parse(localStorage.getItem('tareas')) || [];

    const tablaPendientes = document.querySelector('#tareas-pendientes');
    const tablaEnProceso = document.querySelector('#tareas-en-proceso');
    const tablaTerminadas = document.querySelector('#tareas-terminadas');

    tablaPendientes.innerHTML = '<tr><th colspan="5">Pendientes</th></tr>';
    tablaEnProceso.innerHTML = '<tr><th colspan="5">En proceso</th></tr>';
    tablaTerminadas.innerHTML = '<tr><th colspan="5">Terminadas</th></tr>';

    tareas.forEach(tarea => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${tarea.nombre}</td>
            <td>${tarea.fechaEntrega}</td>
            <td>${tarea.nombreAsignado}</td>
            <td>${tarea.estado}</td>
            <td>
                <button class="boton-estado">Editar</button>
                <button class="boton-estado">Eliminar</button>
            </td>
        `;

        if (tarea.estado === 'pendiente') {
            tablaPendientes.appendChild(fila);
        } else if (tarea.estado === 'en-proceso') {
            tablaEnProceso.appendChild(fila);
        } else if (tarea.estado === 'terminada') {
            tablaTerminadas.appendChild(fila);
        }
    });
}

mostrarTareas();