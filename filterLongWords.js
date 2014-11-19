var thing = ["Finn", "Jake", "Marceline", "Shelbie"]
var maxLength = 7
var newArray = []

for (var i = 0; i < thing.length; i+=1) {
	if (thing[i].length < maxLength) {
		newArray.push(thing[i])
	} 
}
	console.log(newArray);

