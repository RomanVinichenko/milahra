export interface SubmitEvent {
    explicitOriginalTarget: HTMLElement;
}

const form: HTMLFormElement = document.getElementById('form-telephone') as HTMLFormElement;
const modal = document.getElementById('modal');
const modalClose = document.getElementById('modal-close');
const modalContent = document.getElementById('modal-content');
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');

modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
    modalContent.innerHTML = '';
});

form.addEventListener('submit', (event: Event) => {
    event.preventDefault();
    modal.style.display = 'flex';
    modalContent.innerHTML = `Заявка отправлена на номер ${form.telephone.value}`;
    form.telephone.value = '';
});

burger.addEventListener('click', () => {
    menu.classList.toggle('fefef');
});
