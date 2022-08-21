let selected_rating = 0;
let ratings_section = document.getElementById('ratings');

ratings_section.addEventListener('click', (e) => {
    if(e.target.classList.contains('rate-mark')) {
        if(selected_rating !== 0) {
            e.target.parentNode.children[selected_rating - 1].style.color = 'hsl(217, 12%, 63%)';
            e.target.parentNode.children[selected_rating - 1].style.backgroundColor = '#262f38';
        }

        selected_rating = Number(e.target.textContent);
        e.target.style.color = '#fff';
        e.target.style.backgroundColor = 'hsl(25, 97%, 53%)';
    }
});

ratings_section.addEventListener('mouseover', (e) => {
    if(e.target.classList.contains('rate-mark') && selected_rating != Number(e.target.textContent)) { 
        e.target.style.color = '#fff';
        e.target.style.backgroundColor = '#7c8898';
    }
});

ratings_section.addEventListener('mouseout', (e) => {
    if(e.target.classList.contains('rate-mark') && selected_rating != Number(e.target.textContent)) { 
        e.target.style.color = 'hsl(217, 12%, 63%)';
        e.target.style.backgroundColor = '#262f38';
    }
});

document.getElementById('rate-btn').addEventListener('click', (e) => {
    if(selected_rating !== 0) {
        document.getElementById('rate-state').style.display = 'none';
        document.getElementById('thank-state').style.display = 'flex';
        document.getElementById('selected-info').children[0].textContent = String(selected_rating);
    }
});