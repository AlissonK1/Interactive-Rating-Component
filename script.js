const r1 = document.getElementById('r1');
const r2 = document.getElementById('r2');
const r3 = document.getElementById('r3');
const r4 = document.getElementById('r4');
const r5 = document.getElementById('r5');
const message = document.getElementById('showRating');
const btnSubmit = document.getElementById('btnSubmit');
const before = document.getElementById('beforeRating');
const after = document.getElementById('afterRating');

r1.addEventListener('click', () => {
    r1.classList.toggle('active');
    r2.classList.remove('active');
    r3.classList.remove('active');
    r4.classList.remove('active');
    r5.classList.remove('active');
    message.innerText = 'You selected 1 out of 5';
});

r2.addEventListener('click', () => {
    r1.classList.remove('active');
    r2.classList.toggle('active');
    r3.classList.remove('active');
    r4.classList.remove('active');
    r5.classList.remove('active');
    message.innerText = 'You selected 2 out of 5';
})

r3.addEventListener('click', () => {
    r1.classList.remove('active');
    r2.classList.remove('active');
    r3.classList.toggle('active');
    r4.classList.remove('active');
    r5.classList.remove('active');
    message.innerText = 'You selected 3 out of 5';
})

r4.addEventListener('click',() => {
    r1.classList.remove('active');
    r2.classList.remove('active');
    r3.classList.remove('active');
    r4.classList.toggle('active');
    r5.classList.remove('active');
    message.innerText = 'You selected 4 out of 5';
})

r5.addEventListener('click', () => {
    r1.classList.remove('active');
    r2.classList.remove('active');
    r3.classList.remove('active');
    r4.classList.remove('active');
    r5.classList.toggle('active');
    message.innerText ='You selected 5 out of 5';
})

btnSubmit.addEventListener('click', () => {
    before.style.display = 'none';
    after.style.display = 'inline';
})