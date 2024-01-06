let switchTitle = () => {
    document.querySelector('title').textContent = document.querySelector('title').textContent=='Sign-up'?'Login':'Sign-up';
}
document.querySelector('footer > span').textContent = `Copyright © ${new Date().getFullYear()} `;

