
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

   return message.replace(/[a-z]/gi, c => b[a.indexOf(c)])
  }


  rot13('message')