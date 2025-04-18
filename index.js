document.addEventListener('DOMContentLoaded',function(){
    const form= document.getElementById("calculator"); 

    form.addEventListener('submit', function(event){ 
        event.preventDefault();

        let first_number = parseFloat(document.getElementById('first_number').value); 
        let second_number = parseFloat(document.getElementById('second_number').value); 

        result_number = first_number + second_number; 
        console.log(result_number)
        formuala_string = first_number + " and " + second_number + " equal..."

        document.getElementById('formula').textContent = formuala_string; 
        document.getElementById('results').textContent =result_number;
        

    }
)
}


)


