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

console.log(response.data)
    console.log(responese.data)
    console.response.data.search
//fetchData()

    autocompleteconfig = {
        renderOption(movie){
            const imgsrc = movie.poster === 'N/A' ? ''movie.poster
        return`
        <img src="${imgSrc}" />
        ${movie.title} (${movie.year})
        
        `

},
        inputValue(movie){
            return movie.title
        }
        async fetchData(searchTerm){
            apiMovieURL = 'htt://ww.owdapi.com/'
            const response = await axios.get(apiMovieURL,{
                params; {
                paikey: 'd9edc03c'
                s: searchTerm
            }
        })
        console.log(response.data)
    return response.data.search
}
}
createAutocomplete({
    ...autocompleteconfig,
    root, document.queryselector('#left-autocomplete'),
                   onOptionSelect(movie){
    document.querySelector('.tutorial').classlist.add('is-hidden')
    onmovieselect(movie,document.queryselector('#left-sumary'), 'left'


                  const onMovieselect=(movie, summaryelement,side)=>{
        const response = await axios.get('http://www.omdbapi.com/,{
                                         params: {
            apikey: 'd9edc03c',
                i: movie.imdbid
        }
    })
    console.log(response.data)
    summaryElement.innerHTml = movieTemplate(response.data)
    //preguntamos cual lado es?
    if(side === 'left'){
        leftMovie = response.data
    }else{ 
        rigMovie = response.data
        }
    //preguntamos si tenemos ambos lados
if(leftMovie && rightMovie){
    //entonces ejecutamos la funcion de comparacion
    runComparasion()
}
}
cons runcomparasion = () => {
    console.log(comparacion de peliculas)
    const leftsideStats = document.querySelectorAll('#left-summary .notificatios')
 const rightsidestats = document.querySelectorAll('#left-summary .notification')
                                 
leftsideStats.forEach((leftstats,index) => {
const rightStat = rightsideStats[index]
    const leftsideValue = parseInt (leftstat.dataset.value)
    const rightsidevalue = porseint(reightstart.dataset.value)
    const rightsidevalue = parseint(rightstat.dataset.value)

    if(rightsidevalue > leftsidevalue){
        leftstat.classlist.remove.('is-primary')
        rightstat.classlist.add('is-danger')
}

})





                  
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



