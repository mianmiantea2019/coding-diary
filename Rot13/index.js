
  let message;
  
  // function rot13(message){
  //   let letterArray="";

  //   //your code here
  //  const listA ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  //  const listB = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm";

  //  const newListA = listA.split("")
  //  const newListB = listB.split("")
  //  const newmessage = message.split("")

  //  for (let i = 0; i < newmessage.length; i ++) {
  //   let newLetterIndex = newListA.indexOf(message[i]);
  //   letterArray += newListB[newLetterIndex]
  //  }
  //  console.log(   letterArray.toString()
  //  )
  // }


  function rot13(message){

    //your code here
   const a ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
   const b = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm";

  //The replace() method searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced.
  //callback function, c is the variable for the single letter, use that letter to find the position in string a, 
  //then look for the postion in array b
  ///[a-z]/gi means letter a to z, and case insensitive;
   return message.replace(/[a-z]/gi, c => b[a.indexOf(c)]);
  }


  rot13('message')