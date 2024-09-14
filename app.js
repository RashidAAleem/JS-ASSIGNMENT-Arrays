//Assignment 4

// Q 1

// var studentName = [];

// console.log(studentName);

// Q 2

// var studentName = {
    
//     names:[]
// };

// console.log(studentName);

//Q 3

// var stringArray = ["Karachi", "Lahore", "Multan"]
// console.log(stringArray);


//Q4
// var numberArray = [1,2,3,4,5,6]
// console.log(numberArray);

//Q5
// var booleanArray = [true, false]
// console.log(booleanArray);

//Q6
// var mixedArray = ["Rashid", 37, true, [1,2,3]]
// console.log(mixedArray);

//Q7

// var heading = "Qualification";
// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];


// document.write("<h1>" + heading + "</h1>");


// document.write("1) "+ qualifications[0]+"<br>")
// document.write("2) "+ qualifications[1]+"<br>")
// document.write("3) "+ qualifications[2]+"<br>")
// document.write("4) "+ qualifications[3]+"<br>")
// document.write("5) "+ qualifications[4]+"<br>")
// document.write("6) "+ qualifications[5]+"<br>")
// document.write("7) "+ qualifications[6]+"<br>")
// document.write("8) "+ qualifications[7]+"<br>")

//Q8

// var names = ["Michael","John", "Tony"];
// var marksObtained= [320, 230, 480];
// var totalMarks = 500;


// document.write("Score of " + names[0] + " is " + marksObtained[0] + ". Percentage: " + ((marksObtained[0] / totalMarks) * 100) + "%<br>");
// document.write("Score of " + names[1] + " is " + marksObtained[1] + ". Percentage: " + ((marksObtained[1] / totalMarks) * 100) + "%<br>");
// document.write("Score of " + names[2] + " is " + marksObtained[2] + ". Percentage: " + ((marksObtained[2] / totalMarks) * 100) + "%<br>");

// //Q9

// var colors = ["Red", "Green", "Blue"]
// // document.write(colors)
// var originalColor = colors.slice();
// //a)

// var beginColor = prompt("Which Color Do you want add to the the begining?");
// if (beginColor){
// colors.unshift(beginColor)
// } else colors

// document.write ("<h1>" + "Original Color" + "</h1>" + "<br>"  + originalColor + "<br>")
// document.write("<h3>" + "Begining color is" + "</h3>" + "<h1>" +  colors[0] + "</h1>" + colors)

// // b

// var endColor = prompt("Which Color Do you want add to the end?");
// if (endColor){
// colors.push(endColor)
// } else colors

// // document.write ("<h1>" + "Original Color" + "</h1>" + "<br>"  + originalColor + "<br>")
// document.write("<h3>" + "Ending color is" + "</h3>" + "<h1>" +  colors[colors.length-1] + "</h1>" + colors)

// // c
// var firstColor = prompt("Which first color do you want to add to the beginning?");
// var secondColor = prompt("Which second color do you want to add to the beginning?");

// if (firstColor && secondColor) {
//     colors.splice(0,0, firstColor, secondColor);
    
// } else{
//     "try Again"
// }

// // document.write ("<h1>" + "Original Color" + "</h1>" + "<br>"  + originalColor + "<br>")

// document.write("<h3>" + "Two more added colors are" + "</h3>" + "<h1>" +  colors[0] + ", "+ colors[1]+ "</h1>" + colors)

// //d

// var initialColor = colors[0]; 
// var delColor = colors.shift();


// // document.write ("<h1>" + "Original Color" + "</h1>" + "<br>"  + originalColor + "<br>")
// document.write("<h3>" + "Removed color from start is" + "</h3>" + "<h1>" +  delColor + "</h1>" + colors)

// //e

// var lastColor = colors[colors.lengt-1]; 
// var lastColor = colors.pop();


// // document.write ("<h1>" + "Original Color" + "</h1>" + "<br>"  + originalColor + "<br>")
// document.write("<h3>" + "Removed color from end is" + "</h3>" + "<h1>" +  lastColor + "</h1>" + colors)

// //f

// var position = +prompt("At which Position do you want to add a color?")
// var addColor = prompt( "Which Color Do you Want to add at position " + position +"?")

// if (!isNaN(position) && position >= 0 && position <= colors.length) {
//     colors.splice(position -1, 0, addColor);
//     document.write("<h3>Your added color is</h3> <h1>" + addColor + "</h1><h3> at position</h3> <h1>" + position + "</h1><br>");
// } else {
    
// }

// // document.write("<h3> Your Add color is </h3> " + addColor + "<h3> at position </h3>" + position +"<br>")
// document.write(colors)


// // g) 
// var deleteIndex = +prompt("At which index do you want to delete colors?");
// var deleteCount = +prompt("How many colors do you want to delete?");

// if (!isNaN(deleteIndex) && !isNaN(deleteCount) && deleteIndex >= 0 && deleteIndex < colors.length) {
//     if (deleteCount > 0 && deleteIndex + deleteCount <= colors.length) {
//         var removedColors = colors.splice(deleteIndex -1, deleteCount);
//         document.write("<h3>Removed colors are:</h3><h1>" + removedColors.join(", ") + "</h1><h3> from position</h3>" + deleteIndex);
//     } else {
//         alert("Number of colors to delete exceeds the available colors from the index " + deleteIndex);
//     }
// } else {
    
// }


// document.write("<h3>Remaining Color are</h3><h1>" + colors.join(", ") + "</h1>");


//10

// var score = [320, 120, 480, 230]
// var ordered = score.slice().sort()
// document.write("<h1>Scores of Students : " + score +"</h1>")
// document.write("<h1>Ordered Scores of Students : " + ordered +"</h1>")

//11

// var cities =["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"]
// var selected =cities.slice(2,4)

// document.write("<h1> Cities list : </h1><h3> " + cities + "</h3>")
// document.write("<h1> Cities list : </h1><h3> " + selected + "</h3>")

//12

// var arr = ["This", "is", "my", "cat"];
// var singleString = arr.join(" ");


// document.write("<h1> Array : </h1><h3> " + arr + "</h3>")
// document.write ("<h1> String : </h1><h3> " + singleString + "</h3>")

//13

// var fifo = ["keyboard","mouse","printer","monitor"];

// document.write("<h1>Devices:</h1>" + "<h2>" + fifo +"</h2>");

// var first =fifo.shift()
// document.write("<h1>Out:</h1>" + "<h2>" + first +"</h2>");

// document.write("<h1>Remaining Devices:</h1>" + "<h2>" + fifo +"</h2>");

// var second =fifo.shift()
// document.write("<h1>Out:</h1>" + "<h2>" + second +"</h2>");

// document.write("<h1>Remaining Devices:</h1>" + "<h2>" + fifo +"</h2>");

// var third =fifo.shift()
// document.write("<h1>Out:</h1>" + "<h2>" + third +"</h2>");

// document.write("<h1>Remaining Devices:</h1>" + "<h2>" + fifo +"</h2>");

// var fourth =fifo.shift()
// document.write("<h1>Out:</h1>" + "<h2>" + fourth +"</h2>");

// document.write("<h1>Remaining Devices:</h1>" + "<h2>" + fifo +"</h2>");


//14

// var lifo = ["keyboard","mouse","printer","monitor"];

// document.write("<h1>Devices:</h1>" + "<h2>" + lifo +"</h2>");

// var first =lifo.pop()
// document.write("<h1>Out:</h1>" + "<h2>" + first +"</h2>");

// document.write("<h1>Remaining Devices:</h1>" + "<h2>" + lifo +"</h2>");

// var second =lifo.pop()
// document.write("<h1>Out:</h1>" + "<h2>" + second +"</h2>");

// document.write("<h1>Remaining Devices:</h1>" + "<h2>" + lifo +"</h2>");

// var third =lifo.pop()
// document.write("<h1>Out:</h1>" + "<h2>" + third +"</h2>");

// document.write("<h1>Remaining Devices:</h1>" + "<h2>" + lifo +"</h2>");

// var fourth =lifo.pop()
// document.write("<h1>Out:</h1>" + "<h2>" + fourth +"</h2>");

// document.write("<h1>Remaining Devices:</h1>" + "<h2>" + lifo +"</h2>");


//15

// var phManufacturer = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"]

// document.write("<h1>Drop Down / Select Menu</h1><Select>"
//     +"<option>Select</option>"
//     +"<option>"+phManufacturer[0]+"</option>"
//     +"<option>"+phManufacturer[1]+"</option>"
//     +"<option>"+phManufacturer[2]+"</option>" 
//     +"<option>"+phManufacturer[3]+"</option>" 
//     +"<option>"+phManufacturer[4]+"</option>" 
//     +"<option>"+phManufacturer[5]+"</option>" 
    

// +"</select>")
