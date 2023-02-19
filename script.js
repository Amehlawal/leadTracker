let myLeads = ['www.tomorrow.com', 'www.topa.com']
const inputEl = document.getElementById('input-el')
const ulEl = document.getElementById('ul-el')

const inputBtn = document.getElementById('input-btn')
inputBtn.addEventListener('click', function(){
    myLeads.push(inputEl.value)
    console.log(myLeads)
})

for(let i = 0; i < myLeads.length; i++){
        ulEl.innerHTML += '<li>' +myLeads[i] +'</li>'
}