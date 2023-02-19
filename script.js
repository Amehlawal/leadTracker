let myLeads = ['www.tomorrow.com', 'www.topa.com']
const inputEl = document.getElementById('input-el')
const ulEl = document.getElementById('ul-el')

const inputBtn = document.getElementById('input-btn')
inputBtn.addEventListener('click', function(){
    myLeads.push(inputEl.value)
    console.log(myLeads)
})
let listItems = ""

for(let i = 0; i < myLeads.length; i++){
        listItems += '<li>' +myLeads[i] +'</li>'
}
ulEl.innerHTML = listItems