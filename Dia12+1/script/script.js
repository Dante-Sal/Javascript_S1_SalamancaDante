let data = new Object();

const create_input = document.querySelector('.section-interface__form-input');
const create_btn = document.querySelector('.section-interface__form-btn');
const tasks_container = document.querySelector('.section-tasks');

function FETCH_DATA() {
    axios.get('https://6818a35a5a4b07b9d1d01dc7.mockapi.io/tasks')
        .then(response => {
            DISPLAY_DATA(response['data']);
        });
};

function DISPLAY_DATA(data) {
    for (let i = 0; i < data.length; i++) {
        tasks_container.innerHTML += `
        <div id="section-tasks__capsule--${data[i]['id']}" class="section-tasks__capsule">
            <p id="section-tasks__capsule-text--${data[i]['id']}" class="section-tasks__capsule-text">${data[i]['task']}</p>
            <div class="section-tasks__capsule-icon--checkmark-btn"></div>
            <div class="section-tasks__capsule-icon--delete-btn"></div>
        </div>`;
        if (data[i]['status'] === 'ready') {
            const capsule = document.getElementById(`section-tasks__capsule--${data[i]['id']}`);
            const capsule_text = document.getElementById(`section-tasks__capsule-text--${data[i]['id']}`);

            capsule.style.opacity = '50%';
            capsule_text.style.textDecoration = 'line-through';
        };
    };
};

document.addEventListener('DOMContentLoaded', () => {
    FETCH_DATA();

    create_btn.addEventListener('click', () => {
        tasks_container.innerHTML += `
        <div class="section-tasks__capsule">
            <p id="--${data.length + 1}" class="section-tasks__capsule-text">${create_input.value}</p>
            <div class="section-tasks__capsule-icon--checkmark-btn"></div>
            <div class="section-tasks__capsule-icon--delete-btn"></div>
        </div>`;
    });
});