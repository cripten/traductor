 var arrLang = {
    'es': {
    	'home': 'Casa',
    	'about': 'Acerca de nosotros',
    	'contact': 'Contacto'
    },
    'en': {
    	'home': 'Home',
    	'about': 'About us',
    	'contact': 'Contact'
    }
};
$(document).ready(function(){
    $('.translate').click(function(){
    	var lang = $(this).attr('id');
    	$('.lang').each(function(index,element){
    		$(this).text(arrLang[lang][$(this).attr('key')]);
    	})
    });  
});