//define string
var givenastring = 'iloveRnowIamlearningJS'

//define substring
var subr = givenastring.substring(0,6)
var subjs = givenastring.substring(6,givenastring.length) //used the length method here
var wholestr = givenastring.substring(-1)
console.log(subr)
console.log(subjs)
console.log(wholestr)

//Advanced use and application of substring
//i start by using the keyword this to add some elements commonly used in text and cursor manipulation in js
//the JS this keyword represents several things but what i know it represents so far is a dictionary {}
//the concept is often if given a string within a window or miniwindow in HTML, determining the cursor location and also determining the range of text or numerals selected by the user.
//it is important to track this but knowing its full use will entail more programming to determine further use cases for tracking user events
//Also coming from R it is also important to mention that the design side of web dev presents a challenge for me and also getting a better grasp of the print option in html and js is interesting
//Also the other challenge is knowing how html data structures work and what constitutes a data structure and how to think about it and
//this is useful as a quick tool to store variables in key value pairs for future reference
this.text = "testsubstring"; //note that this cannot take a var definer like let, var or const infront of it
this.selectionStart = 1; //keys in the this dictionary can be updated
this.selectionEnd = this.text.length
this.test = this.text.substring(0,this.selectionStart) + '\t' + this.text.substring(this.selectionStart,this.selectionEnd)
console.log(this.test)

