Array.prototype.unique1 = function (){
	var n = [];
	for (var i=0; i < this.length; i++){
		if (n.indexOf(this[i] == -1)) n.push(this[i]);
	}
	return n;
}

Array.prototype.unique2 = function (){
	var n = {}, r = []; //n is hashtable, r is a temp array
	for(var i=0; i< this.length; i++){
		if (!n[this[i]]){
			n[this[i]] = true;
			r.push(this[i]);
		}
	}
	return r;
}

Array.prototype.unique3 = function () {
	var n = [this[0]];

	for (var i=1; i < this.length; i++){
		// if the ith item of this array is not at the ith position at the first time
		// it means it is duplicate
		if (this.indexOf(this[i] == i)) n.push(this[i]);
	}
	return n;
}