document.addEventListener('DOMContentLoaded', () => {
    const create_input = document.querySelector('.section-interface__form-input');
    const create_btn = document.querySelector('.section-interface__form-btn');
    const tasks_container = document.querySelector('.section-tasks');

    async function FETCH_DATA() {
        const response = await axios.get('https://6818a35a5a4b07b9d1d01dc7.mockapi.io/tasks');
        data = await response.data;
        return data;
    }

    async function FETCH_NEW(task) {
        const req = {
            'task': task,
            'status': 'on_hold'
        };
        await axios.post('https://6818a35a5a4b07b9d1d01dc7.mockapi.io/tasks', req);
        const data = await FETCH_DATA();
        DISPLAY_DATA(data);
    };

    function FETCH_COMPLETED(task, id) {
        const req = {
            'task': task,
            'status': 'ready'
        };
        axios.put(`https://6818a35a5a4b07b9d1d01dc7.mockapi.io/tasks/${id}`, req);
    };

    function FETCH_DELETED(id) {
        axios.delete(`https://6818a35a5a4b07b9d1d01dc7.mockapi.io/tasks/${id}`);
    };

    function DISPLAY_DATA(data) {
        tasks_container.innerHTML = '';
        for (let i = 0; i < data.length; i++) {
            tasks_container.innerHTML += `
        <div id="section-tasks__capsule--${data[i]['id']}" data-id="${data[i]['id']}" class="section-tasks__capsule">
            <p id="section-tasks__capsule-text--${data[i]['id']}" data-id="${data[i]['id']}" class="section-tasks__capsule-text">${data[i]['task']}</p>
            <div id="section-tasks__capsule-icon--checkmark-btn--${data[i]['id']}" data-id="${data[i]['id']}" class="section-tasks__capsule-icon--checkmark-btn"></div>
            <div id="section-tasks__capsule-icon--delete-btn--${data[i]['id']}" data-id="${data[i]['id']}" class="section-tasks__capsule-icon--delete-btn"></div>
        </div>`;
            if (data[i]['status'] === 'ready') {
                const capsule = document.getElementById(`section-tasks__capsule--${data[i]['id']}`);
                const capsule_text = document.getElementById(`section-tasks__capsule-text--${data[i]['id']}`);
                capsule.style.opacity = '50%';
                capsule_text.style.textDecoration = 'line-through';
            };
        };
        document.querySelectorAll('.section-tasks__capsule-icon--checkmark-btn').forEach(checkmark_btn => {
            checkmark_btn.addEventListener('click', COMPLETE_TASKS);
        });
        document.querySelectorAll('.section-tasks__capsule-icon--delete-btn').forEach(delete_btn => {
            delete_btn.addEventListener('click', DELETE_TASKS);
        });
    };

    function COMPLETE_TASKS(event) {
        console.log(event);
        const id = event.target.getAttribute('data-id');
        const task = document.getElementById(`section-tasks__capsule-text--${id}`).innerHTML;
        const capsule_to_complete = document.getElementById(`section-tasks__capsule--${id}`);
        const capsule_text_to_complete = document.getElementById(`section-tasks__capsule-text--${id}`);
        capsule_to_complete.style.opacity = '50%';
        capsule_text_to_complete.style.textDecoration = 'line-through';
        FETCH_COMPLETED(task, id);
    };

    function DELETE_TASKS(event) {
        const id = event.target.getAttribute('data-id');
        const capsule_to_delete = document.getElementById(`section-tasks__capsule--${id}`);
        capsule_to_delete.remove();
        FETCH_DELETED(id);
    };

    create_btn.addEventListener('click', () => {
        if (create_input.value.trim() !== '') {
            FETCH_NEW(create_input.value);
        };
        create_input.value = '';
    });

    FETCH_DATA()
        .then(data => {
            DISPLAY_DATA(data);
        });
});