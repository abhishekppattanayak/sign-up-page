document.querySelector('footer > span').textContent = `Copyright © ${new Date().getFullYear()} `;

window.addEventListener('beforeunload', ()=> {
    document.querySelectorAll('input').forEach(input => input.value = '')
})

Array.from(document.querySelectorAll('form > div > input')).forEach(element=> {
    element.addEventListener('input', ()=>{
        if(element.value == ''){
            element.nextElementSibling.style.display = 'none';
        }else {
            element.nextElementSibling.style.display = 'inherit';
        }
    })
})

document.querySelector('input[placeholder="Confirm Password"').addEventListener('input', ()=>{
    document.querySelector('input[placeholder="Confirm Password"').setAttribute('pattern', `${document.querySelector('#signup-password').value}`)
});

document.querySelector('input[placeholder="Password"').addEventListener('input', ()=>{
    document.querySelector('input[placeholder="Confirm Password"').setAttribute('pattern', `${document.querySelector('#signup-password').value}`)
});
document.querySelector('input[type="tel"]').addEventListener('keydown', function (e) {
    // Allow: backspace, delete, tab, escape, enter, and numbers
    if ([46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 ||
        // Allow: Ctrl+A/Ctrl+C/Ctrl+V
        (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) ||
        (e.keyCode === 67 && (e.ctrlKey === true || e.metaKey === true)) ||
        (e.keyCode === 86 && (e.ctrlKey === true || e.metaKey === true)) ||
        // Allow: home, end, left, right, down, up
        (e.keyCode >= 35 && e.keyCode <= 40)) {
        // Allow the key
        return;
    }

    // Ensure that it is a number and stop the keypress
    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
        e.preventDefault();
    }
});
