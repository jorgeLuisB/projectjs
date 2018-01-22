
var usersId;
var postId;
var pos_user=[];
var pos_comt=[];
var usuario;



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

    		ver();

        })

}

	

	
}

function ver(){


pos_comt=pos_user;
console.log(pos_comt, '+++++++');

	 $("#root").empty();

	 	    for(let i=0;i<pos_comt.length;i++){

	 	    	$("#root").append(`<div class="color posts"  ><h5 class="pos_titulo"> POST ${i+1}:</h5>
									  	 	<p> TITULO: ${pos_comt[i].title}</p>
									  		<p> CUERPO: ${pos_comt[i].body}<p/>
									  	
									  
									</div><br><h5 class="pos_titulo">:::COMENTARIOS:::</h5>
									<ul id="licomts${i}">
									</ul>
									 `);

	 	    						for(let j=0;j<pos_comt[i].comentario.length;j++){

	 	    							$("#licomts"+i).append(`<li class="list-group-item  coments">${pos_comt[i].comentario[j].name} : ${pos_comt[i].comentario[j].body} <a href="#" class="btn btn-primary btnFav">Agregar a Favoritos</a></li>`);

		    						}
	 	    						

									 

	 	    }

	 	    			 
	 	   	pos_comt=[];
  			
  			document.getElementById('user').value="";
  			document.getElementById('pass').value="";
  			
  			



}

	 	  

	


  

