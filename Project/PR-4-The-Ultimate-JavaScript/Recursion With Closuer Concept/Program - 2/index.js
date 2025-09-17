const MainFunction = () => {
  document.writeln(`Hello from Main Main Function\n`);
  const Sub_MainFunction = () => {
    document.writeln(`Hello from Sub Main Main Function\n`);
    const Sub_Child_MainFunction = () => {
      document.writeln(`Hello from Sub Child Main Main Function.`);
    };
    Sub_Child_MainFunction();
  };
  Sub_MainFunction();
};
MainFunction();
