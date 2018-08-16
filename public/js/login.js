


console.log('llego al js');


$("#btlog").on('click', function(evt){
	login();
});


console.log($('#user').val());
function login()
{

	jQuery.ajax({
		url:"/home",
		type:"POST",
		data:{"name":$("#user").val(), "pass":$("#pass").val()},
		success: function(res)
		{
			window.location = '/about';
		},
		error: function(error)
		{
			console.log(error);
		}
	});
}