function MenuDesplegable() {
	document.getElementsByClassName
	("navigation")[0].classList.toggle("responsive");
}



function Fecha ()
{

	var f = new Date();
     var diaSemana = f.getDay();
     var dia = f.getDate();
     var mes = f.getMonth();
     var year =f.getFullYear();

     var pDiaSemana = document.getElementById('mostrarfecha');
            var pDia = document.getElementById('mostrarfecha');
            var pMes = document.getElementById('mostrarfecha');
            var pYear = document.getElementById('mostrarfecha');
   
            var semana = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
            pDiaSemana = semana[diaSemana];
            pDia = dia;  
            var meses = ['Enero','Febrero','Marzo','Abril','Mayo','Juio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
            pMes = meses[mes];
            pYear = year; 
            var res= pDiaSemana+" "+pDia+" de "+pMes+" "+" del "+ pYear;
   
     document.getElementById('mostrarfecha').value= res;

}