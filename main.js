let searchWord =document.getElementById('word');
let searchDefi =document.getElementById('defi');
let searchForm =document.getElementById('search');

searchForm.addEventListener("submit",(e) => {
    e.preventDefault();
    fetch(`https://dictionaryapi.com/api/v3/references/sd4/json/${e.target[0].value}?key=95609ff9-cb77-4d27-86f9-10f1334df5ea`)
    .then((word) => (word).json())
    .then((data)=>{
        console.log(data)
        searchWord.textContent=data[0].meta.id;
        searchDefi.textContent=data[0].shortdef[0]

    })
})
