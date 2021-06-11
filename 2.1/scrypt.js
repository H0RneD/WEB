let First=0,
    Second=prompt("Enter the number"),
    mass=[];
for(First=1;First<=Second;First++)
{
    if(First % 5 == 0){
        mass.push(First);
    }   
}
if(mass.length != 0)
{
        console.log(mass);
}
else{ 
        console.log('Sorry, no numbers');
}