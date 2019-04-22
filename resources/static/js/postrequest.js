$( document ).ready(function() {
	
	// SUBMIT FORM
    $("#userForm").submit(function(event) {
		// Prevent the form from submitting via the browser.
		event.preventDefault();
		ajaxPost();
	});
    
    
    function ajaxPost(){
    	
    	// PREPARE FORM DATA
    	var formData = {
			fullname: $("#fullname").val(),
			email: $("#email").val(),
			dateofbirth: $("#dateofbirth").val(),
			phonenumber: $("#phonenumber").val(),
			gender: $("input[name='gender']:checked").val(),
    	}
    	console.log(formData); //debug
    	// DO POST
    	$.ajax({
			type : "POST",
			contentType : "application/json",
			url : window.location + "api/users/save",
			data : JSON.stringify(formData),
			dataType : 'json',
			success : function(user) {
				$("#postResultDiv").html("<p>" + 
					"Post Successfully! <br>" +
					"--> " + user.fullname + " " + user.email + " " + user.dateofbirth + " " + user.phonenumber
					+ " " + user.gender + ", createdAt: " + user.createdAt + "</p>"); 

			},
			error : function(e) {
				alert("Error!")
				console.log(formData);
				console.log("ERROR: ", e);
			}
		});
    	
    	// Reset FormData after Posting
    	resetData();
 
    }
    
    function resetData(){
		$("#fullname").val("");
		$("#email").val("");
		$("#dateofbirth").val("");
		$("#phonenumber").val("");
		$("#gender").val("");
    }
})