const tagContainer = document.querySelector('.tag-container');
const input = document.querySelector('.tag-container input');
const tagContainer1 = document.querySelector('.tagC-containerC');
const input1 = document.querySelector('.tagC-containerC input');
let tags = [];

function createTag(label) {
    const div = document.createElement('div');
    div.setAttribute('class', 'tag');
    const span = document.createElement('span');
    span.innerHTML = label;
    const closeIcon = document.createElement('i');
    closeIcon.innerHTML = 'x';
    closeIcon.setAttribute('class', 'material-icons');
    closeIcon.setAttribute('data-item', label);
    div.appendChild(span);
    div.appendChild(closeIcon);
    return div;
}

function clearTags() {
    document.querySelectorAll('.tag').forEach(tag => {
        tag.parentElement.removeChild(tag);
    });
}

function addTags() {
    clearTags();
    tags.slice().reverse().forEach(tag => {
        tagContainer.prepend(createTag(tag));
        //localStorage.setItem('h', JSON.stringify(tag));
    });
}
input.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        e.target.value.split(',').forEach(tag => {
            //
            const exists = objects.includes(tag);
            if (exists == true){
                tags.push(tag);
            }
        });

        addTags();
        input.value = '';
    }
});

console.log(tags);
input.focus();

let tags1 = [];

function createTag1(label) {
    const div1 = document.createElement('div1');
    div1.setAttribute('class', 'tagC');
    const span2 = document.createElement('span2');
    span2.innerHTML = label;
    const closeIcon1 = document.createElement('i');
    closeIcon1.innerHTML = 'x';
    closeIcon1.setAttribute('class', 'material-icons2');
    closeIcon1.setAttribute('data-item2', label);
    div1.appendChild(span2);
    div1.appendChild(closeIcon1);
    return div1;
}

function clearTags1() {
    document.querySelectorAll('.tagC').forEach(tagC => {
        tagC.parentElement.removeChild(tagC);
    });
}

function addTags1() {
    clearTags1();
    tags1.slice().reverse().forEach(tagC => {
        tagContainer1.prepend(createTag1(tagC));
        //localStorage.setItem('h', JSON.stringify(tag));
    });
}
input1.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        e.target.value.split(',').forEach(tagC => {
            //
            const exists = objects.includes(tagC);
            if (exists == true){
                tags1.push(tagC);
            }
        });

        addTags1();
        input1.value = '';
    }
 });

console.log(tags1);
input1.focus();