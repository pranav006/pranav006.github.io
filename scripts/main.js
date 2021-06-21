let myimage=document.querySelector('img');
myimage.onclick = function()
{
let mysrc=myimage.getAttribute('src');
if(mysrc==='images/googlelogo.jpg')
{
    myimage.setAttribute('src','images/google2.jpg');
}
else 
{
myimage.setAttribute('src','images/googlelogo.jpg');
}
}



// Personalized welcome message code


let mybutton = document.querySelector('button');
let myheading = document.querySelector('h1');


function setusername()
{
    let myname=prompt('Enter your name');
    

    if(!myname)
    {
        setusername();
    }
    else
    {
        localStorage.setItem('name',myname);
        myheading.textContent='Google is cool,'+ myname;
    }

}

if(!localStorage.getItem('name'))
{
    setusername();
}

else
{
let storedname=localStorage.getItem('name');
myheading.textContent='Google is cool,'+ storedname;
}

mybutton.onclick=function()
{
    setusername();
}
