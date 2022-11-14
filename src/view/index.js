async function listarFilmes(){
    const movieDiv = document.querySelector(".movie-list");
    try {
        const headers = {
            'Content-Type': 'application/json',
        }

        const init ={
            headers: headers,
            method: 'GET',
        }

        let response = await fetch(`http://localhost:3333/movies`, init);
        let data = await response.json();
        console.log(data);
        data.forEach(element => {
            const html = element.nome;
            movieDiv.innerHTML += html;
        });

    } catch (error) {
        console.log('Error getting events! ', error);
    }

}

listarFilmes();
