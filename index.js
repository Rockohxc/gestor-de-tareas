const btn = document.querySelector("[data-form-btn]");

// creación de la función anonima que recibe evento como parametro
const createTask = (evento) => {

    // preventDefault sirve para evitar la recarga de la pag. cuando se activa un evento
    evento.preventDefault();

    // Guardamos en input todo lo que esta en la casilla de la etiqueta input
    const input = document.querySelector("[data-form-input]");

    // guardamos en value el resultado de input
    const value = input.value;

    // 
    const list = document.querySelector("[data-list]");

    // task sirve para crear el valor de la <li>
    const task = document.createElement("li");

    task.classList.add("card");

    //Una vez guardamos el valor en value, reiniciamos el input
    input.value = "";

    //Creamos un template y le incluimos el valor de value dentro del template
    let content = `<div>
        <i class="far fa-check-square icon"></i>
        <span class="task">${value}</span>
        </div>
        <i class="fas fa-trash-alt trashIcon icon"></i>`;

    // innerHTML sirve para reemplazar el HTML, hay que tener cuuidado porque reemplaza hasta las etiquetas que tenga el ID o el elemento
    task.innerHTML = content;

    list.appendChild(task);

    console.log(content);
}

btn.addEventListener("click", (createTask))