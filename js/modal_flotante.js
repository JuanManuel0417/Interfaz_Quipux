function openModal(nombreEstudiante) {
    document.getElementById('modal_text').innerText = `Eliminar ${nombreEstudiante}`;
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

function confirmDelete() {
    closeModal();
    alert('Estudiante eliminado');
}