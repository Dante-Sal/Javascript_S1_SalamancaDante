document.addEventListener('DOMContentLoaded', () => {
    const create_input = document.querySelector('.section-interface__form-input');
    const create_btn = document.querySelector('.section-interface__form-btn');
    const tasks_container = document.querySelector('.section-tasks');
    create_btn.addEventListener('click', () => {
        tasks_container.innerHTML += `
        <div class="section-tasks__capsule">
            <p class="section-tasks__capsule-text">${create_input.value}</p>
            <div class="section-tasks__capsule-icon--checkmark-btn"></div>
            <div class="section-tasks__capsule-icon--delete-btn"></div>
        </div>`;
    });
});