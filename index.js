// Using CDN for react 
//ReactDOM.render(<h1>Hello, everyone!</h1>, document.getElementById("root"));
//ReactDOM.render(<p>I am starting with react</p>, document.getElementById("root"));

//Writing react code to render an ul with 2+ li inside
// ReactDOM.render(
//      <ul><li>Milk</li> <li>Bread</li></ul>, 
//       document.getElementById('root')
// )

//Build a React Info site Local setup(the quick way)

// function Navbar() {
//     return (

// <nav class="navbar navbar-expand-lg navbar-light bg-light">
//   <a class="navbar-brand" href="#">Navbar</a>
//   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//     <span class="navbar-toggler-icon"></span>
//   </button>

//   <div class="collapse navbar-collapse" id="navbarSupportedContent">
//     <ul class="navbar-nav mr-auto">
//       <li class="nav-item active">
//         <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link" href="#">Link</a>
//       </li>
//       <li class="nav-item dropdown">
//         <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//           Dropdown
//         </a>
//         <div class="dropdown-menu" aria-labelledby="navbarDropdown">
//           <a class="dropdown-item" href="#">Action</a>
//           <a class="dropdown-item" href="#">Another action</a>
//           <div class="dropdown-divider"></div>
//           <a class="dropdown-item" href="#">Something else here</a>
//         </div>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link disabled" href="#">Disabled</a>
//       </li>
//     </ul>
//     <form class="form-inline my-2 my-lg-0">
//       <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
//       <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//     </form>
//   </div>
// </nav>
// )
// }

// function MainContent() {
//     return (
//         <h1>I'm learning React!</h1>
//     )
// }

// function Paragraph() {
//   return(
//     <p>This is textual paragraph</p>
//   )
// }

// ReactDOM.render(
//     <div>
//         <MainContent />
//         <Paragraph />
//         <Navbar />
        

//     </div>, 
//     document.getElementById('root')
// )

// let p= document.createElement('h1');
// let q= document.createTextNode("Hello React!");
// p.appendChild(q);

// document.body.appendChild(p);

// const h1 = document.createElement('h1');
// h1.textContent = 'This is an imperative way to program'
// h1.className = 'header';
// document.getElementById('root').append(h1);

//React Way to do it
// ReactDOM.render(<h1 className='header'>This is declarative way to program</h1>, 
//                 document.getElementById('root'));

/*Build a React Info site JSX*/

// const h1 = document.createElement('h1');
// h1.textContent = 'Hello World';
// h1.className = 'header';
// console.log(h1);

// const element = <h1 className = 'header'>This is JSX</h1>
// console.log(element);

/* $$typeof:
Symbol(react.element)
key : null
props :  {className: 'header', children: 'This is JSX'}
ref : null
type : "h1"
_owner : null
_store : {validated: false}
_self : null
_source : null
[[Prototype]] : Object*/

//JSX
//Always Wrap multiple element in a single parent element
//  const page = (
//         <div>
//        <h1 className = 'header'>This is JSX</h1><p>This is a paragraph</p>
//         </div>
//              )

// ReactDOM.render(
//                 page,
//                 document.getElementById('root'));

//Chalenge-> Create navigation bar using JSX

const navigation =
(
  <div>
      <nav>
         <h1>MySITE</h1>
         <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
         </ul>
      </nav>
    </div>
)

ReactDOM.render(
          navigation,
          document.getElementById('root')
)