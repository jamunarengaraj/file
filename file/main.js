const url =' https://jsonplaceholder.typicode.com/posts'


fetch(url)
.then(response => response.json())
.then(data => {

let element= document.getElementById('elem')
    element.innerHTML =  
    
    <div>
    
    ${data.map (data =>{


        <p> ${data[0].id} </p>


            // <tr> ${data.id}</tr>
        
    })}
    
    </div>



    console.log(data)
})