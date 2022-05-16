const pageLoad = (() => {
    const pageContent = document.querySelector(".container");
    const header = document.createElement('div')
    header.classList.add('header')
    header.textContent = 'test'
    pageContent.appendChild(header)
})();
