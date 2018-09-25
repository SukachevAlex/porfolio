export function slidePage(event) {
    let side = Boolean(this.querySelector('.page-navigation__arrow_left'));

    localStorage.setItem('page', /(\w+).html/.exec(this)[1]);
    localStorage.setItem('side', `${side ? 'left' : 'right'}`);

    event.preventDefault();
    document.querySelector('.page').classList.add(`page_slideOut-${side ? 'right' : 'left' }`);
    setTimeout(redirect, 350);
}

export function redirect() {
    window.location = `${localStorage.getItem('page')}.html`;
}