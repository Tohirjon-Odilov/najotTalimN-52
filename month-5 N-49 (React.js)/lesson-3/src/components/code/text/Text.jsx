import React from "react";
import "./Text.scss"

/**********************
 * !FUNCTION COMPONENT *
 **********************/

function Text({name,age,street,adress}){

  console.log(adress?.county)
  return(
    <React.Fragment>
      <div className="container text">salom {name} yoshi {age}da.
        {street && (<address>{street}</address>)}
        {adress && (
          <address>
            {adress?.county} {adress?.street && adress?.county && ","} {adress?.street}
            {/* agar optional chaining bo'lmaganida kod umuman ishga tushmasdan xatolik berar edi */}
          </address>
        )}
      </div>
    </React.Fragment>
  )
  
}

/*********
 * !CLASS component *
 *********/

// class Text extends React.Component{

//   render(){
//     // console.log("Text render")
//     return(
//       <>
//         <div className="container text">salom hammaga</div>
//       </>
//     )
//   }
// }

export default Text;