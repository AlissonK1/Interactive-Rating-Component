const r1 = document.getElementById('r1');
const r2 = document.getElementById('r2');
const r3 = document.getElementById('r3');
const r4 = document.getElementById('r4');
const r5 = document.getElementById('r5');
const message = document.getElementById('showRating');
const btnSubmit = document.getElementById('btnSubmit');
const before = document.getElementById('beforeRating');
const after = document.getElementById('afterRating');


function getRating(number){
    let choice = document.getElementById(number);
    choice.classList.add('active');
    for(let i = 1; i<=5; i++){
        let x = ''
        if(number.includes(String(i))){
            message.innerText = `You selected ${i} out of 5`;
            continue;
        }
        x = document.getElementById(('r' + i));
        x.classList.remove('active');
    }
}

r1.addEventListener('click', () => {getRating('r1'); })

r2.addEventListener('click', () => {getRating('r2'); })

r3.addEventListener('click', () => {getRating('r3'); })

r4.addEventListener('click', () => {getRating('r4'); })

r5.addEventListener('click', () => {getRating('r5'); })

btnSubmit.addEventListener('click', () => {
    before.style.display = 'none';
    after.style.display = 'inline';
})