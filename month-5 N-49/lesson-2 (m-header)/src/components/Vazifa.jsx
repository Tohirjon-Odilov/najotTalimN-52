import React from 'react';

function Vazifa() {
  return (
    function HelloWorld() {
      console.log("hello world")
      return React.createElement("div", { className: "container", onClick: () => console.log("salom") },
        React.createElement("h2", null, "Hello"),
        React.createElement("p", null, "Boshqa so'zlar"),
        React.createElement("div", { className: "box" },
          React.createElement("span", null, "inner1"), 
          React.createElement("span", null, "inner2"),
        ),
      );



      // function HelloWorld() {
      //   return (
      //     <div className="container" onClick={() => console.log("salom")}>
      //       <h2>Hello</h2>
      //       <p>Boshqa so'zlar</p>
      //       <div className="box">
      //         <span>inner1</span>
      //         <span>inner2</span>
      //       </div>
      //     </div>
      //   );
      // }
    }
  )
}

export default Vazifa();