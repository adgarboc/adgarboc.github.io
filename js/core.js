const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
	document.body.classList.toggle('dark');
	var a = document.getElementsByClassName("zelda");
	for (let index = 0; index < a.length; index++) 
	{
		a[index].classList.toggle("dark");
	}

});