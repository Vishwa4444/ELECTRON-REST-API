async function getData(){
const api_url = 'https://fakestoreapi.com/products'
fetch(api_url).then((data)=>{
   // console.log(data)
   return data.json()  //converted to object
}).then((objectData)=>{
    //console.log(objectData[0].title)
    let tableData = "";
    objectData.map((values)=>{
    tableData += `<tr>
    <td>${values.title}</td>
    <td>${values.description}</td>
    <td>${values.price}</td>
    <td><img src = "${values.image}"/></td>
  </tr></h1>`
    })
    document.getElementById("table_body").innerHTML = tableData
}).catch((err)=>{
    console.log("ERROR")

})
}
