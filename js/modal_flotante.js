// Funcion para abrir el modal y mostrar el nombre del estudiante en el mensaje
function openModal(nombreEstudiante) {
    document.getElementById('modal_text').innerText = `Eliminar ${nombreEstudiante}`;
    document.getElementById('modal').style.display = 'block';
}

// Función para cerrar el modal
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Funcion para mostar mensaje en caso de que se de al boton "Si, eliminar" 
function confirmDelete() {
    // Cierra el modal despues de confirmar la eliminacion
    closeModal();
    // Muestra una alerta indicando que el estudiante ha sido eliminado
    alert('Estudiante eliminado');
}