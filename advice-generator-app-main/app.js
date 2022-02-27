const refresh = document.getElementById('refresh');



const fetchApi = () => {
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then((data) => {
            let output = '';
            output += `
        <h4>Advice #${data.slip.id}</h4>
        <h2>"${data.slip.advice}"</h2>
        `;
            document.querySelector('.container').innerHTML = output;
        })
        .catch(err => console.error(err));
}
refresh.addEventListener('click', fetchApi);
document.addEventListener('DOMContentLoaded', fetchApi);