
var usersId;
var postId;
var pos_user=[];
var pos_comt=[];
var Comts_Fav=[];
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

	 	    							$("#licomts"+i).append(`<li class="list-group-item  coments">${pos_comt[i].comentario[j].name} : ${pos_comt[i].comentario[j].body} <input type="button" class="btn btn-primary btnFav" id="${pos_comt[i].comentario[j].id}"  onclick="Fav_Comts(this.id, ${pos_comt[i].comentario[j].postId},${pos_comt[i].userId})" value="Agregar a Favoritos"></li>`);

		    						}
	 	    						

									 

	 	    }


	 	console.log('+++++++++++');  	



	 	    			 
	 	   	pos_comt=[];
  			
  			document.getElementById('user').value="";
  			document.getElementById('pass').value="";


}


function Fav_Comts(Id_Comts,Id_Post,Id_User){
	console.table(Id_Comts,Id_Post,Id_User);
	// $("#"+Id_Comts).prop('disabled',true);
	 $("#"+Id_Comts).attr('value','Añadido a Favoritos');


 let obj= {'Id_Usuario': Id_User, 'Id_post':Id_Post, 'comFav_Id':Id_Comts}
 Comts_Fav.push(obj);

 localStorage.setItem('Favoritos',JSON.stringify(Comts_Fav));

}


// if(localStorage.length>0){

// 	 	    			 		let cometarios_Fav=[];

// 	 	    			 		cometarios_Fav=JSON.parse(localStorage.getItem('Favoritos'));
// 	 	    			 		// console.log(cometarios_Fav);
	 	    			 		
// 	 	    			 			for(let j=0;j<cometarios_Fav.length;j++){

// 		 	    			 			if(cometarios_Fav[j].Id_Usuario == usersId){
// 		 	    			 					console.log(cometarios_Fav[j].comFav_Id,'--------');
	
// 		 	    			 				$("#"+cometarios_Fav[j].comFav_Id).attr('value','Añadido a Favoritos');

// 		 	    			 			}
// 	 	    			 			}
// 	 	    			 	}


	 	  

	


  

