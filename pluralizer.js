var thing = "ferret";
var count = "200";

// if the count is more than one, pluralize/add s to the thing

// if (count>1) {
// 	thing += "s"
// }
// else if (count<-1) {
// 	thing += "s"
// }

if (count > 1 || count < -1) {
	thing += "s"
}

console.log(count + " " + thing)