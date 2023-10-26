function displayDate() {
let date = document.getElementById("dateBox")
  let d = new Date(date.value);
  console.log(d.toString());
    let dateParagraph = document.getElementById("dateParagraph")
    dateParagraph.innerText = d.toString()
}
