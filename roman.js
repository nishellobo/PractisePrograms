const prompt= require("prompt-sync")({sigint: true});

/*Prompt to enter the input*/
s=prompt("Enter the roman number");
x=convertromanint(s);
console.log("The value of the roman number you have enetered is", x);

/* Roman numeral characters returning the corresponding value*/
function value(r)
{
if(r=='I')
return 1;

if(r=='V')
return 5;

if(r=='X')
return 10;

if(r=='L')
return 50;

if(r=='C')
return 100;

if(r=='D')
return 500;

if(r=='M')
return 1000;

return -1; 

}


/*Taking the input and converting it into integer */
function convertromanint(s)
{
  /*Creating a variable to store the results*/
  let sum=0;

  /*Input length should be less than 15*/
  if(s.length>=15)
  {
    console.log("Not Valid");
    return;
  }
  /*looping through the the prompt entered*/
  for(let i=0; i<s.length;i++)
  {
  /*Get the first value of the character*/  
    let first= value(s.charAt(i));
  
    if(i+1<s.length)
    {
  /*Get the second value of the character*/  
      let second= value(s.charAt(i+1));
  /*Comparing the first value with the second */
      if(first>=second)
      {

        sum=sum+first;
      }
      else
      {
        sum=sum+second-first;
        i++;
      }
    }
  else
  {
    sum=sum+first;
  }
}

if( sum>3999 || sum<1)
{
  console.log("Not Valid");
  return;
}
else
{
  console.log(sum);
}


return sum;
  

}