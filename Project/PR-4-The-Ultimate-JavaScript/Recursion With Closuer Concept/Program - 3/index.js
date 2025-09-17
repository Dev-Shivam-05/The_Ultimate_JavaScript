let num = 10;
const MainFunction = () => {
  let num = 20;
  const Sub_MainFunction = () => {
    let num = 30;
    const Sub_Child_MainFunction = () => {
      let num = 40;
      console.log(`Sub Child MainFunction Num : ${num}`);
    }
    Sub_Child_MainFunction();
    console.log(`Sub MainFunction Number : ${num}`);
  }
  Sub_MainFunction();
  console.log(`MainFunction Number : ${num}`);
}
MainFunction();
console.log(`Out Of MainFunction Number : ${num}`);