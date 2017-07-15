var a=105;
var b=76;
var c=99;
function findMax(a,b,c){
	var max;
	if(a>b){
		if(a>c){max=a;}
		else{max=c;}
	}
	else{
		if(b>c){
			max=b;
		}
		else{
			max=c;
		}
	}
	return max;
}
console.log("The max of the three numbers is: "+findMax(a,b,c));