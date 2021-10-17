/*
10. Skriv en funktion, som kan udregne længden af den ukendte side i en retvinklet trekant.
    F.eks. vil længden af hypotenusen i en trekant med kateter af længde 3 og 4 være sqrt(3^2 + 4^2) = sqrt(25) = 5.

    Beskriv koden med et flowchart og offentliggør den på et git repository.
*/
function myFunction (num1, num2){
    
    if(num1 > 0 && num2 > 0){
        
        let trekant = (num1**2 + num2**2);
        
        return (Math.sqrt(trekant));
        
    }
    else{
        
        console.log("Sidernes længder er ikke defineret.")
        
    }
    
}
console.log(myFunction(12, 6));