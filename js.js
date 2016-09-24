$(document).ready(function() { 
 	Date.prototype.yyyymmdd = function() {
  	var yyyy = this.getFullYear().toString();
  	var mm = (this.getMonth()+1).toString(); // getMonth() is zero-based
  	var dd  = this.getDate().toString();
  	return (dd[1]?dd:"0"+dd[0]) + "/" + (mm[1]?mm:"0"+mm[0]) + "/" + yyyy; // padding
  	var dt  = this.getDate().toString();
	};
	var date = new Date();
	$('.date').append(date.yyyymmdd()); // Append the date to the .date class
	var currentDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
	var day = currentDate.getDate();
	var month = currentDate.getMonth() + 1;
	var year = currentDate.getFullYear();
	$('.tdate').append("<b>" + day + "/" + month + "/" + year + "</b>") // Append to .tdate 
	$('input[name=toDo]').val("Type your to do here..."); // set some default text
	$('input[name=toDo]').click(function() { // when clicked on remove it so user can type
	$(this).val(" ");
	});

$('#button').click(function() { 
			var toDo = $('input[name=toDo]').val(); // create toDo var with the value from input
			$('#list').append('<li class="item">' + toDo + '<img src="delete.png" class="del"></li>');
});


$(document).on('click','.del',function(){
       $(this).parent().remove(); // remove the PARENT of '.del' which would be '.item'
});
  $( function() {
    $( "#list, #list2, #list3, #list4" ).sortable({
      connectWith: ".connectedSortable"
    }).disableSelection();
  } );
});