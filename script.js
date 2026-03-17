/* ESERCIZIO 1
       Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
    */

const changeTitle = function (stringa) {
  const h1 = document.getElementById("main_title")
  console.log(h1.innerText)
  h1.innerText = stringa
  console.log(h1.innerText)
}
changeTitle("Adesso il titolo è diverso")
/* ESERCIZIO 2
       Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
    */

const addClassToTitle = function (stringa) {
  const classTitle = document.getElementById("main_title")
  classTitle.classList.add(stringa)
}
addClassToTitle("myHeading")
/* ESERCIZIO 3
       Scrivi una funzione che cambi il testo dei p figli di un div
      */

const changePcontent = function (stringa1, stringa2) {
  const newP = document.querySelectorAll(stringa1)
  console.log(stringa1)
  for (let i = 0; i < newP.length; i++) {
    newP[i].innerText = stringa2
  }
}
changePcontent("div p", "i NUOVI paragrafi sono 2")

/* ESERCIZIO 4
       Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
      */

const changeUrls = function (stringa1, stringa2) {
  const linkUl = document.querySelector("#lists a")
  linkUl.setAttribute("href", stringa1)
  linkUl.innerText = stringa2
}
changeUrls("https://www.google.com", "Questo link porta al sito di GOOGLE")

/* ESERCIZIO 5
       Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
    */

const addToTheSecond = function (stringa) {
  const newElem = document.createElement("li")
  //   <li></li>
  newElem.innerText = stringa
  console.log(newElem)
  const ulElem = document.getElementById("secondList")
  //  <ul id="secondList">
  //     <li>1st</li>
  //     <li>2nd</li>
  //     <li>3rd</li>
  //   </ul>
  ulElem.appendChild(newElem)
}
addToTheSecond("4th")
/* ESERCIZIO 6
       Scrivi una funzione che aggiunga un paragrafo al primo div
    */

const addParagraph = function (stringa1, stringa2) {
  const newP = document.createElement(stringa1)
  newP.innerText = stringa2
  console.log(newP.innerText)
  const stDiv = document.getElementById("firstDiv")
  stDiv.appendChild(newP)
}
addParagraph("p", "questo paragrafo è NUOVO")
/* ESERCIZIO 7
       Scrivi una funzione che faccia scomparire la prima lista non ordinata
    */

const hideFirstUl = function (stringa) {
  const firstUl = document.getElementById(stringa)
  firstUl.remove()
}
hideFirstUl("firstList")
/* ESERCIZIO 8 
       Scrivi una funzione che renda verde il background di ogni lista non ordinata
      */

const paintItGreen = function (stringa) {
  const greenBg = document.querySelectorAll(stringa)
  for (let i = 0; i < greenBg.length; i++) {
    greenBg[i].style.backgroundColor = "green"
  }
}
paintItGreen("ul")

/* ESERCIZIO 9
       Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
      */

const makeItClickable = function (stringa) {
  const title = document.querySelector(stringa)
  title.addEventListener("click", function () {
    title.textContent = title.textContent.slice(0, -1)
  })
}
makeItClickable("h1")
/* ESERCIZIO 10
       Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
      */

const revealFooterLink = function () {
  const clickfoot = document.querySelector("footer")
  clickfoot.addEventListener("click", function () {
    alert(
      "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents",
    )
  })
}
revealFooterLink()
/* ESERCIZIO 11
       Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
       La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
    */

const generateTable = function () {
  const newTable = document.getElementById("tableArea")
  newTable.innerHTML = `  <table>
  <thead>
  <tr>
  <th>Image</th>
  <th>Product Name</th>
  <th>Quantity</th>
  <th>Price</th>
  </tr>
  
  </thead>
  <tbody>
  <tr>
  <td><img src="https://placecats.com/300/200" alt"foto_mario" width= '50px'></td>
  <td>Mario</td>
  <td>5</td>
  <td>100€</td>
  </tr>
  <tr>
  <td><img src="https://placecats.com/300/200" alt"foto_mirko" width= '50px'></td>
  <td>Mirko</td>
  <td>40</td>
  <td>300€</td>
  </tr>
  <tr>
  <td><img src="https://placecats.com/300/200" alt"foto_miro" width= '50px'></td>
  <td>Miro</td>
  <td>5</td>
  <td>2000€</td>
  </tr>
  <tr>
  <td><img src="https://placecats.com/300/200" alt"foto_mimi" width= '50px'></td>
  <td>Mimi</td>
  <td>300</td>
  <td>1€</td>
  </tr>
  <tr>
  <td><img src="https://placecats.com/300/200" alt"foto_mirtillo" width= '50px'></td>
  <td>Mirtillo</td>
  <td>12</td>
  <td>500€</td>
  </tr>
  </tbody>
  <table/>
  `
}
generateTable()

//   const table = document.createElement("table")
//   const headerRow = document.createElement("tr")
//   headerRow.innerHTML = `<tr>
//       <td>Immagine</td>
//       <td>Nome</td>
//       <td>Quantità</td>
//       <td>Prezzo</td>
//     </tr>`
//   const data = [
//     {
//       Immagine: "https://placecats.com/50/50",
//       Nome: "Mimì",
//       Quantita: 1,
//       Prezzo: 5,
//     },
//     {
//       Immagine: "https://placecats.com/50/50",
//       Nome: "Mirù",
//       Quantita: 2,
//       Prezzo: 30,
//     },
//     {
//       Immagine: "https://placecats.com/50/50",
//       Nome: "Mimmo",
//       Quantita: 2,
//       Prezzo: 100,
//     },
//     {
//       Immagine: "https://placecats.com/50/50",
//       Nome: "Mario",
//       Quantita: 1,
//       Prezzo: 30000,
//     },
//     {
//       Immagine: "https://placecats.com/50/50",
//       Nome: "Matteo",
//       Quantita: 1,
//       Prezzo: 2,
//     },
//   ]
//   for (let i = 0; i < data.length; i++) {
//     const row = document.createElement("tr")

//     row.innerHTML = `<td><img src="data[i].immagine"></td>
//     <td>data[i].nomeProdotto</td>
//     <td>data[i].quantità</td>
//     <td>data[i].prezzo</td>`
//     table.appendChild(row)
//   }
//   newTable.appendChild(table)
// }
// generateTable()

/* ESERCIZIO 12
       Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
    */

const addRow = function () {}

/* ESERCIZIO 14
      Crea una funzione che nasconda le immagini della tabella quando eseguita
    */

const hideAllImages = function () {}

/* EXTRA ESERCIZIO 15
      Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
    */

const changeColorWithRandom = function () {
  const changeclick = document.getElementById("changeMyColor")
  changeclick.addEventListener("click", function () {
    let x = Math.floor(Math.random() * 256)
    let y = Math.floor(Math.random() * 256)
    let z = Math.floor(Math.random() * 256)
    let randomColor = "rgb(" + x + "," + y + "," + z + ")"
    changeclick.style.color = randomColor
  })
}
changeColorWithRandom()
