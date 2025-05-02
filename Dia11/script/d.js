const delete_input = document.getElementById('delete-input');
const delete_btn = document.getElementById('delete-btn');

delete_input.addEventListener('input', () => {
    if (delete_input.value.length > 0) {
        delete_btn.removeAttribute('disabled');
    } else {
        delete_btn.setAttribute('disabled', 'true');
    };
});