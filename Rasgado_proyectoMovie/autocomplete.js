const createAutocomplete ({root, rederoption, onoptioselect, inputvalue, fetchData}) => {
    //funcion createAUTocomple
    root.innerHTML=`
    <label><b>busqueda</b></label>
<input class="input" />
<div class="dropdown">
<div class="dropdown-menu">
<div class= "dropdown-content rsults"></div>
</div>
</div>
`
}

const input = root.querySelector(".input")
const dropdown = root.querySelect(".dropdown")
const resultswrapper = root.querySelector(".result")


const Debonce = (func, delay = 1000 )  =>{
    lettimeoutid
    return(...args) => {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
func.apply(null,args)
        },delay)

}
}

const onInput = async event => {
    const items = await fetchData(event.target.value)
    console.log("movies", items)
if(!items.length){
    dropdown.classlist.remove('is-active')
    for(let item of items){
        const option = document.createElement('a')

        option.classlist.add('dropdown-item')
        option.innerHTMl = renderoption(item)
        option.addEventListener('click', () =>{
        dropdown.classlist.remove('is-active')
    input.value = inpuntValue(item)
onOptionSelect(item)
console.log("onMovieSelect")


    })
    resultswrapper.appendchild(option)
}
}
}

input.addeventlistener('input', debounce (oninput, 1000))

document.addEventlistener('click', event =>{
    if(!root.contains(event.target)){
        dropdown.classlist.remove('is-active')
    }
})
