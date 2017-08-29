//otro método
var arrLang = new Array();
arrLang["es"] = new Array();
arrLang["en"] = new Array();

arrLang["es"]["home"] = "Casa";
arrLang["es"]["about"] = "Acerca de nosotros";
arrLang["es"]["contact"] = "Contacto";

arrLang["en"]["home"] = "Home";
arrLang["en"]["about"] = "About us";
arrLang["en"]["contact"] = "Contact";
$(document).ready(function(){
   
    $('.translate').click(function(){
    	var lang = $(this).attr('id');
    	$('.lang').each(function(index,element){
    		$(this).text(arrLang[lang][$(this).attr('key')]);
    	});
    });  
});