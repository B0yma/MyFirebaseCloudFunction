var functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

class Point {
  constructor(x,y) {
    this.x = x;
    this.y = y;
  }
}


 exports.helloWorld = functions.https.onRequest((request, response) => {
var n0 = new Date().getTime();
for (var line=0; line<1000000; line++) {
    var points = new Array();
    points.push(new Point(0,0));
    points.push(new Point(1,1));
    points.push(new Point(1,1));
    points.push(new Point(2,2));
    points.push(new Point(3,3));

    var uniq = new Set();
    points.forEach(e => uniq.add(JSON.stringify(e)));
    var res = Array.from(uniq).map(e => JSON.parse(e));

}
var n1 = new Date().getTime();
var time = n1 - n0;
console.log('Execution time: ' + time);
  response.send("Execution time: " + String(time) + "<br>");
 });
