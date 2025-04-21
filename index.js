document.addEventListener('DOMContentLoaded',function(){
    const form= document.getElementById("calculator"); 

    form.addEventListener("submit", function(event){ 
        event.preventDefault();

        let first_number = parseFloat(document.getElementById('first_number').value); 
        let second_number = parseFloat(document.getElementById('second_number').value); 

        let operator = document.getElementById("operation").value

        
        switch (operator){
            case 'add': 
                formuala_string = first_number + " plus " + second_number + " equals..."; 
                result_number = first_number + second_number; 
                break; 
            case 'subtract': 
                formuala_string = first_number + " minus " + second_number + " equals..."; 
                result_number = first_number - second_number; 
                break; 
            case 'mutliply': 
                formuala_string = first_number + " mutliplied by " + second_number + " equals..."; 
                result_number = first_number * second_number; 
                break;
            case 'divide': 
                formuala_string = first_number + " divided by " + second_number + " equals..."; 
                result_number = first_number / second_number; 
                console.log(result_number)
                break; 
            default: 
                console.log("Error")

        }


        document.getElementById('formula').textContent = formuala_string; 
        document.getElementById('results').textContent = result_number;
        

    }
)
}
)


