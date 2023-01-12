let menuHumb = document.getElementById('menuHumb');

menuHumb.addEventListener('click', menuClick);

function menuClick(e) {
    if (this.classList.contains('not-active')) {
        this.classList.remove('not-active');
        this.classList.add('active');
    } else {
        this.classList.remove('active');
        this.classList.add('not-active')
    }
}