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
			fullName: $("#fullName").val(),
			email: $("#email").val(),
			dateOfBirth: $("#dateOfBirth").val(),
			phoneNumber: $("#phoneNumber").val(),
			gender: $("#gender").val(),
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
					"--> " + user.fullName + " " + user.email + " " + user.dateOfBirth + " " + user.phoneNumber
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
		$("#fullName").val("");
		$("#email").val("");
		$("#dateOfBirth").val("");
		$("#phoneNumber").val("");
		$("#gender").val("");
    }
})