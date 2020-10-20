const list = document.querySelector('ul');
const input = document.querySelector('input');
const btn = document.querySelector('button');

btn.onclick = function () {
    let myItem = input.value;
    input.value = '';

    const li = document.createElement('li');
    const span = document.createElement('span');
    const button = document.createElement('button');

    // button.style.padding = '20px';

    li.appendChild(span);
    span.textContent = myItem;
    li.appendChild(button);
    button.textContent = 'Delete';

    console.log(myItem);


    list.appendChild(li);

    button.onclick = function () {
        list.removeChild(li);
    }

    input.focus();
}