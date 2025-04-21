document.addEventListener('DOMContentLoaded',function(){
    const form= document.getElementById("converter"); 

    form.addEventListener("submit", function(event){ 
        event.preventDefault();
        let first_number_c = document.getElementById("first_converter").value

        let converters = document.getElementById("converter_selector").value

        switch(converters){
            case 'c_f':
                result_c = first_number_c * 1.8 + 32; 
                result_text = parseInt(result_c) + " °F"; 
                break;
            case 'f_c':
                result_c = first_number_c - 32;
                result_c *= .5555
                result_text = parseInt(result_c) + " °C"; 
                break;
            case 'm_k':
                result_c = first_number_c * 1.60934; 
                result_text = result_c.toFixed(3) + " Kilometers"; 
                break;
            case 'k_m':
                result_c = first_number_c * 0.62137; 
                result_text = result_c.toFixed(3)+ " Miles"; 
                break;
            case 'k_p':
                result_c = first_number_c * 2.2; 
                result_text = result_c.toFixed(3) + " Pounds"; 
                break;
            case 'p_k':
                result_c = first_number_c / 2.2; 
                result_text = result_c.toFixed(3) + " Kilograms"; 
                break;
            default: 
                result_text ="Error"
                break;
            
  
        }
        document.getElementById("results").textContent = (result_text) 
      

    }
)
} 
)