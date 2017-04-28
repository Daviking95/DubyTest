$(function () {
	// body...

	$('#cancel').click(function(){
		$('#hideForm').slideToggle();
	});

	$('#submit').click(function(){
		alert('Successful');
	});

	$('#lgmt').hide();

	var state = $('#exampleSelect2');
	$('#state').click(function(){
		if ($(this).val() == "") {
			$('#lgmt').show();
		}
	});

	var $name = $('#name').val();
	$('#button').click(function() {
		if ($name === "") {
			// $('#button').css({'background': 'red', 'color':'white'});
			alert ('Name is empty');

		}
	});

	$('#toggle').hide();
	$('#toggle2').hide();

	$('button#project1').click(function() {
		$('#toggle').slideToggle();
	}
		);


});
