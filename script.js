let switchTitle = () => {
    document.querySelector('title').textContent = document.querySelector('title').textContent=='Sign-up'?'Login':'Sign-up';
}
document.querySelector('footer > span').textContent = `Copyright © ${new Date().getFullYear()} `;

Array.from(document.querySelectorAll('form > div > input')).forEach(element=> {
    element.addEventListener('input', ()=>{
        if(element.value == ''){
            element.nextElementSibling.style.display = 'none';
        }else {
            element.nextElementSibling.style.display = 'inherit';
        }
    })
})

Array.from(document.querySelectorAll('button[type="reset"]')).forEach(element=>{
    element.addEventListener('click', ()=>{
        Array.from(document.querySelectorAll('form > div > input')).forEach(element=> element.nextElementSibling.style.display = 'none')
    })
});

document.querySelector('input[placeholder="Confirm Password"').addEventListener('input', ()=>{
    document.querySelector('input[placeholder="Confirm Password"').setAttribute('pattern', `${document.querySelector('#signup-password').value}`)
});
document.querySelector('#signup-password').addEventListener('input', ()=>{
    document.querySelector('input[placeholder="Confirm Password"').setAttribute('pattern', `${document.querySelector('#signup-password').value}`)
});