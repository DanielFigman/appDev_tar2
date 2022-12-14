

function FCRecipe(props){
let count = 0;

function btnChange(){
count++;
if(count > 0)
{
    return(
    <div>
        <h1>Ready to EAT!</h1>
        <h3>Recipes made: {count}</h3>
        <div className="row">

        </div>
    </div>
 );
}

else if(count == 0)
{
    
}
}
   
}