function RequestSomething(requestID){
	
	console.log("Request Number : " + requestID);
	QueryDatabase(function(){
		console.log("Request completed " + requestID);
	});
}

function QueryDatabase(callback){
	
	setTimeout(callback,5000);
	
}

RequestSomething(1);
RequestSomething(2);
RequestSomething(3);
RequestSomething(4);
RequestSomething(5);
RequestSomething(6);


