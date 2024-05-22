let formulario = document.getElementById('formAdd');
let nombre = document.getElementById('nombre');
let fecha = document.getElementById('fecha');
let descripcion = document.getElementById('descripcion');
let imagen = document.getElementById('imagen');

let formEdit = document.getElementById('formEdit');
let nombreEdit = document.getElementById('nombreEdit');
let fechaEdit = document.getElementById('fechaEdit');
let descripcionEdit = document.getElementById('descripcionEdit');
let imagenEdit = document.getElementById('imagenEdit');

let listaTareas = document.getElementById('listaTareas');
let btnSalirAdd = document.querySelector('#formAdd .btn-close');
let btnSalirEdit = document.querySelector('#formEdit .btn-close');

let tareas = JSON.parse(localStorage.getItem('tareas')) || [];
let currentEditIndex = null;

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    agregarDatos();
    mostrarTareas();
    cerrarModal('nuevoModal');
    resetForm();
});

formEdit.addEventListener('submit', (e) => {
    e.preventDefault();
    actualizarDatos();
    mostrarTareas();
    cerrarModal('editModal');
    resetFormEdit();
});

btnSalirAdd.addEventListener('click', () => cerrarModal('nuevoModal'));
btnSalirEdit.addEventListener('click', () => cerrarModal('editModal'));

let cerrarModal = (modalId) => {
    let modalElement = document.getElementById(modalId);
    let modal = bootstrap.Modal.getInstance(modalElement);
    modal.hide();
};

let resetForm = () => {
    nombre.value = "";
    fecha.value = "";
    descripcion.value = "";
    imagen.value = "";
};

let resetFormEdit = () => {
    nombreEdit.value = "";
    fechaEdit.value = "";
    descripcionEdit.value = "";
    imagenEdit.value = "";
};

let agregarDatos = () => {
    let nuevaTarea = {
        nombre: nombre.value,
        fecha: fecha.value,
        descripcion: descripcion.value,
        imagen: null
    };

    if (imagen.files[0]) {
        let reader = new FileReader();
        reader.onload = function (e) {
            nuevaTarea.imagen = e.target.result;
            tareas.push(nuevaTarea);
            localStorage.setItem('tareas', JSON.stringify(tareas));
            mostrarTareas();
        };
        reader.readAsDataURL(imagen.files[0]);
    } else {
        tareas.push(nuevaTarea);
        localStorage.setItem('tareas', JSON.stringify(tareas));
        mostrarTareas();
    }
};

let actualizarDatos = () => {
    if (currentEditIndex !== null) {
        tareas[currentEditIndex] = {
            nombre: nombreEdit.value,
            fecha: fechaEdit.value,
            descripcion: descripcionEdit.value,
            imagen: tareas[currentEditIndex].imagen
        };

        if (imagenEdit.files[0]) {
            let reader = new FileReader();
            reader.onload = function (e) {
                tareas[currentEditIndex].imagen = e.target.result;
                localStorage.setItem('tareas', JSON.stringify(tareas));
                mostrarTareas();
            };
            reader.readAsDataURL(imagenEdit.files[0]);
        } else {
            localStorage.setItem('tareas', JSON.stringify(tareas));
            mostrarTareas();
        }
        currentEditIndex = null;
    }
};

let mostrarTareas = () => {
    listaTareas.innerHTML = "";
    tareas.forEach((tarea, indice) => {
        listaTareas.innerHTML += `
        <div class="row mb-2">
            <div class="col-12 col-md-3 border p-3">
                <strong>${tarea.nombre}</strong>
            </div>
            <div class="col-12 col-md-3 border p-3">
                <strong>${tarea.fecha}</strong>
            </div>
            <div class="col-12 col-md-3 border p-3">
                <strong>${tarea.descripcion}</strong>
            </div>
            <div class="col-12 col-md-3 border p-3 text-center">
                ${tarea.imagen ? `<img src="${tarea.imagen}" alt="${tarea.nombre}" style="width: 100px; height: auto;">` : ''}
                <button class="btn bg-success rounded m-1" data-bs-toggle="modal" data-bs-target="#editModal" onclick="editTask(${indice})">
                    <i class="bi bi-pencil-fill text-white"></i>
                </button>
                <button class="btn btn-danger rounded m-1" onclick="deleteTask(${indice})">
                    <i class="bi bi-trash-fill"></i>
                </button>
            </div>
        </div>`;
    });
};

let deleteTask = (indice) => {
    if (confirm('¿Estás seguro de que quieres eliminar esta tarea?')) {
        tareas.splice(indice, 1);
        localStorage.setItem('tareas', JSON.stringify(tareas));
        mostrarTareas();
    }
};

let editTask = (indice) => {
    currentEditIndex = indice;
    let tarea = tareas[indice];
    nombreEdit.value = tarea.nombre;
    fechaEdit.value = tarea.fecha;
    descripcionEdit.value = tarea.descripcion;
    imagenEdit.value = ''; // Resetea el campo de imagen
};

mostrarTareas();
