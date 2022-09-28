import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import './style.css';




function urlvaltas()
{
    document.getElementById('kepecske').src = document.getElementById('kepUrl').value;
}

function szelessegvaltas()
{
    document.getElementById('kepecske').width = document.getElementById('kepszelesseg').value;
}
function keretvastagsag()
{
    document.getElementById('kepecske').border = document.getElementById('kepkeretvastagsag').value;

}


function keretszin()
{

    document.getElementById('kepecske').style.borderColor = document.getElementById('kepkeretszin').value;


}
function tonusvaltas()
{
    var element = document.body;
  element.classList.toggle("dark-mode");
}

document.getElementById('kepkeretszin').addEventListener('input', keretszin)
document.getElementById('kepkeretvastagsag').addEventListener('input', keretvastagsag)
document.getElementById('kepUrl').addEventListener('change', urlvaltas);
document.getElementById('kepszelesseg').addEventListener('input',szelessegvaltas);
document.getElementById('tonusvalto').addEventListener('click',tonusvaltas);

