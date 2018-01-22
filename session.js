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


	 	    
 		})

  coments();
 		
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

	console.log(pos_user,'----------');

	ver();
}

function ver(){


	pos_comt=pos_user;
    console.log(pos_comt, '+++++++');
	 $("#root").empty();

	 	    for(let i=0;i<pos_comt.length;i++){

	 	    	$("#root").append(`<div><ul class="list-group">
									  <li class="list-group-item">${pos_comt[i].title}</li>
									  <li class="list-group-item">${pos_comt[i].body}</li>
									  		<ol class="list-group">
									  		<li class="list-group-item">${pos_comt[i].comentario[i].name}</li>
									  		<li class="list-group-item">${pos_comt[i].comentario[i].email}</li>
									  		<li class="list-group-item">${pos_comt[i].comentario[i].body}</li>
									  		</ol>
									  </ul>	
								   </div>`);

	 	    }

	 	    			 
	 	   	pos_comt=[];
  			
  			document.getElementById('user').value="";
  			document.getElementById('pass').value="";
  			
  			



}

	 	  

	


  

