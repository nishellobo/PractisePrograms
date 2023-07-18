const prompt= require("prompt-sync")({sigint: true});



s=prompt("Enter the string");
toCamelCase(s);


function toCamelCase(s)
{
/*defining the delimiters*/
const d1 = '_';
const d2='-';
const d3=' ';

/* if the string is empty*/
if(s.length==0)
{
    
    return"";
}
/*loop each character in the string*/

for(let i=0;i<s.length;i++)
{
    const nextcharacter= parseInt(i+1);
    const pos=s.charAt(nextcharacter);
    const valueofs= s.charCodeAt(nextcharacter);

    /*checking to see if the element is a delmiter */

    if(s[i]==d1||s[i]==d2||s[i]==d3)
    {
    
    /*Ignore if the next character in the string is a delimiter or if the character is in uppercase*/

        if(pos==d1||pos==d2||pos==d3||valueofs>=65&&valueofs<=90)
        {
            i++;
        }
     /*convert to uppercase if the next character is not a delimiter or lowercase */   
        else
        {
            const asciivalue= s.charCodeAt(nextcharacter);
            const uppercase= asciivalue-32;
            s=s.slice(0,nextcharacter)+String.fromCharCode(uppercase)+s.slice(nextcharacter+1);
             
        }
    
    }
   

}

/*Removing all the delimiters*/
const delimiters = ["-", " ","_"];
const regex = new RegExp(delimiters.join("|"), "g");
const removedDelimiters = s.replace(regex, "");

console.log(removedDelimiters);
return;
}