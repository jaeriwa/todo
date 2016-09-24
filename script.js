$(document).ready(function() { 
$('input[name=toDo]').val("Type your to do here..."); // set some default text
$('input[name=toDo]').click(function() { // when clicked on remove it so user can type
			$(this).val(" ");
});
var num = 0;
	$('#button').click(function() { 
			var toDo = $('input[name=toDo]').html(); // create toDo var with the text from input
			$('#list').append('<p class="item"><img src="delete.png" class="del" />' + toDo + '</p>');
			// put the text into a new line
			localStorage.setItem('toDo', toDo);
	});
if(localStorage.getItem('toDo')) {
	$('input[name=toDo]').html(localStorage.getItem('toDo'));
	};
$('#list').on('click','.del',function(){
       $(this).parent().remove(); // remove the PARENT of '.del' which would be '.item'
});
$( function() {
    $( "#list, #list2" ).sortable({
    connectWith: ".connectedSortable",
	placeholder: 'highlight'

    }).disableSelection();
  } );
});
/*

  $( function() {
    $( "#list, #list2" ).sortable({
    	connectWith: ".connectedSortable",
    	over: function( event, item ) {
    	$( "#list, #list2" ).addClass("highlight");
    	}
    }).disableSelection();
    
    
$( "#list, #list2" ).addClass("highlight");

$( init );
function init() {
$('.list').on('mouseover','.item',function(){
    $(this).draggable({ revert: "invalid" });
  } );
$('.list2').droppable( {
    drop: handleDropEvent
  } );
  };
	*/
	