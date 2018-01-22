var postId;
var usersId;
var postId;
var pos_user=[];
var pos_comt=[];
var usuario;
var band=0;



function Ingresar(user){
	usuario = user;
	$.ajax({
	 	url : "https://jsonplaceholder.typicode.com/users",
	 	type: "GET"
	
	   }).done(function(usuarios){

	 	  for(let i=0;i<usuarios.length;i++){

	 	    		if(usuarios[i].username==usuario){

	 	    			usersId=usuarios[i].id	
	 	    				    			
	 	    			users(usersId);	


	 	    		}
	 	      	  }

	 	    })

   
}



function users(id){

	

	$.ajax({
		url : "https://jsonplaceholder.typicode.com/posts",
	 	type: "GET"

    	}).done(function(post){


    	  for(let i=0;i<post.length;i++){

		  	  if(post[i].userId==id){	 	    			 
	 	    	  	   
  				 pos_user.push(post[i]);
  				

 		  	  }
		  }

		coments();
	 	    
 		})

  
 		
}



function coments(){

for(let i=0;i<pos_user.length;i++){
	$.ajax({
		url : "https://jsonplaceholder.typicode.com/posts/"+pos_user[i].id+"/comments",
	 	type: "GET"

    	}).done(function(comentarios){    		

    		pos_user[i].comentario=comentarios;

        })

}

	

	ver();
}

function ver(){


pos_comt=pos_user;
console.log(pos_comt, '+++++++');
	 $("#root").empty();

	 	    for(let i=0;i<pos_comt.length;i++){

	 	    	$("#root").append(`<div class="color"><h3> POST ${i+1}:</h3>
									  	 	<p> TITULO: ${pos_comt[i].title}</p>
									  		<p> CUERPO: ${pos_comt[i].body}<p/>
									  	
									  <ul id="licomts${i}">

									  </ul>
									  
								   </div>`);

	 	    						for(let j=0;j<pos_comt[i].comentario.length;j++){

	 	    							$("#licomts"+i).append(`<li class="list-group-item">${pos_comt[i].comentario[j].name} : ${pos_comt[i].comentario[j].body}</li>`);

		    						}
	 	    						

									 

	 	    }

	 	    			 
	 	   	pos_comt=[];
  			
  			document.getElementById('user').value="";
  			document.getElementById('pass').value="";
  			
  			



}

	 	  

	


  

