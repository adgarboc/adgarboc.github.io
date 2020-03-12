
changeLanguaje(0)


function myFunction() 
{
    var element = document.body;
    element.classList.toggle("dark-mode");
}
function changeLanguaje(lang) 
{
    let es = document.getElementsByClassName('es');
    let en = document.getElementsByClassName('en');
    switch (lang) 
    {
        case 0:
            for (let i = 0; i < en.length; i++) 
            {
                en[i].style.display = 'block';
                es[i].style.display = 'none';
            }
            console.log('Hello!');
            break;
        case 1:
            for (let i = 0; i < es.length; i++) 
            {
                en[i].style.display = 'none';
                es[i].style.display = 'block';
            }
            console.log('Hola!');
            break;
        default:
            break;
    }

}
