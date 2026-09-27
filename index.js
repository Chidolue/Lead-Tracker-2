const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const leads = document.getElementById("leads")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")

inputBtn.addEventListener("click", function() {
    leads.innerHTML += `<li> ${inputEl.value} </li>`
    inputEl.value = ""
})

deleteBtn.addEventListener("click", function() {
    leads.textContent = ""
})

tabBtn.addEventListener("click", function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        leads.innerHTML += `<li> ${tabs[0].url} </li>`
    })
    
})