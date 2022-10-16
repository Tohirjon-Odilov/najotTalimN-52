import React from 'react';
import './Navbar.scss'

function Navbar(){  
  return (
    React.createElement("header", {className: "site-header"}, 
      React.createElement('ul',{className: "header__list"},
        React.createElement('li', {className: "header__item"}, 'Home'),
        React.createElement('li', {className: "header__item"}, 'Cards'),
        React.createElement('li', {className: "header__item"}, 'Contact'),
        React.createElement('li', {className: "header__item"}, 'About'),
      ))
  )
  
  
  
  /*********
   * OTHER *
   *********/
  // return React.createElement("div",{className: "container"},
    // React.createElement("div", {className: 'block'},
      // React.createElement("div", {className: "innerBlock"}, "Bu inner Block")),
    // React.createElement("div", {className: "adderBlock"}, 
      // React.createElement("div", {className: "block-adder"}, "Bu esa boshqa block"))
  // )
//  return (
//   <div className='container'>
//     <div className="block">
//       <div className="innerBlock">
//         Bu inner block
//       </div>
//     </div>
//     <div className="adderBlock">
//       Bu esa yana boshqa block
//     </div>
//   </div>
//  )
}

export default Navbar; //!Xohlagan nom ostida export qilish imkonini beradi
