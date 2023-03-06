// chrome://extensions/
let myLeads = []
const inputEl = document.getElementById('input-el')
const ulEl = document.getElementById('ul-el')

const inputBtn = document.getElementById('input-btn')
const deleteBtn = document.getElementById('delete-btn')
const tabBtn = document.getElementById('tab-btn')

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}    
const tabs = [
    {url: 'https://www.google.com'}
]
tabBtn.addEventListener('click', function () {
    console.log(tabs[0].url)
})
function render(leads){
    let listItems = ""

    for(let i = 0; i < leads.length; i++){
        //listItems += "<li><a target='_blank_' href='"+ myLeads[i]+ "'>" +myLeads[i] +"</a></li>"
        listItems += `
        <li>
            <a target='_blank_' href='${leads[i]}'>
                ${leads[i]}
            </a>
        </li>`
    }
    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener('dblclick', function() {
    localStorage.clear()
    myLeads=[]
    render(myLeads)
})

inputBtn.addEventListener('click', function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem('myLeads', JSON.stringify(myLeads))
    render(myLeads)
})

