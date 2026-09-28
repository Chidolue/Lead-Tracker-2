const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const leads = document.getElementById("leads")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")

let myLeads = []
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    leads.innerHTML = render(myLeads)
}


inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    leads.innerHTML = render(myLeads) 
    inputEl.value = ""
    localStorage.setItem("myLeads", `${JSON.stringify(myLeads)}`)
})

function render(arr) {
    let listItems = ""
    for (let i = 0; i < arr.length; i++) {
        listItems += `<li><a href="${arr[i]}" target="_blank"> ${arr[i]} </a></li>`
    }
    return listItems
}

deleteBtn.addEventListener("click", function() {
    leads.textContent = ""
    inputEl.value = ""
    localStorage.removeItem("myLeads")
    myLeads = []
    leads.innerHTML = render(myLeads)
})

tabBtn.addEventListener("click", function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", `${JSON.stringify(myLeads)}`)
        leads.innerHTML = render(myLeads)
    })  
})