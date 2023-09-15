const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('click',() => {
        removeactivepanel();
        panel.classList.add('active');
    })
    
});

function removeactivepanel() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}