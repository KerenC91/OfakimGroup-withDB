$( document ).ready(function() {
	
	// GET REQUEST
	$("#allUsers").click(function(event){
		event.preventDefault();
		ajaxGet();
	});
	
	// DO GET
	function ajaxGet(){
		$.ajax({
			type : "GET",
			url : "/api/users/all",
			success: function(result){
				$('#getResultDiv ul').empty();
				var usersList = "";
				$.each(result, function(i, user){
					$('#getResultDiv .list-group').append(user.id + ". " + user.fullname + " " 
					+ user.email + " " + user.dateofbirth + " " + user.phonenumber
					+ " " + user.gender + "<br>")
				});
				console.log("Success: ", result);
			},
			error : function(e) {
				$("#getResultDiv").html("<strong>Error</strong>");
				console.log("ERROR: ", e);
			}
		});	
	}
})