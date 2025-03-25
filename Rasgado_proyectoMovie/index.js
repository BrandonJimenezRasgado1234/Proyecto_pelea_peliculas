const fetchData = async(SearchTeam) => {
    const response = await axios.get('http://omdbapi.com/',{
        params: {
            apikey: 'd9edc03c',
            s: 'avengers'
        }
    })


if(response.data.Error){
return []

}

console.log(response.data.Search)

}
const root = document.querySelector('.autocomplete')
root.innerHTML = `
<label><b>busqueda de Peliculas </b></label>
<input class="input" />
<div class="dropdown">
<div class="dropdown-menu">
<div class="dropdown-content results"> </div>
</div>
</div>`

const input = document.querySelector("input")
const dropdonw = document.querySelector('.dropdown')
const resultswrapper = document.querySelector('.results')

const Debonce = (func, delay = 1000 )  =>{
    lettimeoutid
    return(...args) => {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
func.apply(null,args)
        },delay)

}
}

const oninput = async (event) => {
    const movies = await fetchData(event.target.value)
    console.log("MOVIES: ", movies)
    if(!movies.length) {
        dropdonw.classList.remove('is-active')
    }
        for(let movie of movies){
const option = document.createElement('a')
const imgSRC = movie.poster === 'N/A'?'': movie.poster
option.classList.add('dropdown-item')
option.innerHTML = `
<img src = " ${imgSRC}"/>
${movie.title}`

option.addEventListener('click', () => {
    dropdonw.classList.remove('is-active')
    input.value = movie.title
    onmovieSelect(movie)
})
resultswrapper.appendChild(option)


option.classList.add('dropdown-item')
option.innerHTML = `
<img src"$(imgSRC)" />
$(movie.Title)`


option.addEventListener('click',()=> {
dropdonw.classList.remove('is-active')
input.value = movie.title
onmovieselect (movie)
})
resultswrapper.appendChild(option)
        }
    }

input.addEventListener('input', debunce(oninput, 1000))

document.addEventListener('click', event => {
if(!root.contains(event.target)){
    dropdonw.classList.remove('is-active')
}

}
 )
 const onmovieSelect = async (movie) => {
    const response= await axios.get('http://www.ondbapi.com',{
        params:{
            apikey: ''
            i: movie.imdID
        }
    })
    console.log(response.data)
    document.querySelector('#sumary') .innerHTML = movieTemplate(response)
    const movieTemplate = (moviedetail) => {
        return`
        <article class="media>
        <figure class"media-left">
        <p class="image">
        <img src= "${moviedetail.poster}" />
        </p>
        </figure>
        <dive class="content">
        <h1>${moviedetail.title}</h1>
        <h4>${moviedetail.genre}</h4>
        <p>${moviedetail.plot}</p>
        </div>
        </article>`
 }



