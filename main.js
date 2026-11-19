const f = document.getElementById("form")
const times = [

]

const ct = document.getElementById("corpotabela")

f.addEventListener("submit", function(a){
    a.preventDefault()
    const v1 = document.getElementById("v1").value
    const v2 = document.getElementById("v2").value
    
    const insert = {time:v1,fundacao:v2}
    times.push(insert)
ct.innerHTML = ""
    for (time of times){
        
  ct.innerHTML += `
  <tr>
  <td>${time.time}</td>
  <td>${time.fundacao}</td>
  </tr>
  `
    }
})