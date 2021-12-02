const myClasses = (
  <a href="https://www.codecademy.com">
    <h1>
      Sign Up!
    </h1>
  </a>
);

const myList = (
  <ul>
    <li>item 1</li>
    <li>item 2</li>
    <li>item 3</li>
  </ul>
);

const title = <h1>Welcome all!</h1>

const example = <h1 id="example">JSX Attributes</h1>;
let expr = <h1>{10 * 10}</h1>;

const heading = <h1 className="large-heading">Codecademy</h1>;

// All of the list items will display if
// baby is false and age is above 25
const tasty = (
  <ul>
    <li>Applesauce</li>
    { !baby && <li>Pizza</li> }
    { age > 15 && <li>Brussels Sprouts</li> }
    { age > 20 && <li>Oysters</li> }
    { age > 25 && <li>Grappa</li> }
  </ul>
);

const headline = (
  <h1>
    { age >= drinkingAge ? 'Buy Drink' : 'Do Teen Stuff' }
  </h1>
);
 
// Using if/else outside of JSX 
let text;
 
if (age >= drinkingAge) { text = 'Buy Drink' }
else { text = 'Do Teen Stuff' }
 
// Using && operator. Renders as empty div if length is 0
const unreadMessages = [ 'hello?', 'remember me!'];
 
const update = (
  <div>
    {unreadMessages.length > 0 &&
      <h1>
        You have {unreadMessages.length} unread messages.
      </h1>
    }
  </div>
);

// Basic example
const handleClick = () => alert("Hello world!");
 
const button = <button onClick={handleClick}>Click here</button>;
 
// Example with event parameter
const handleMouseOver = (event) => event.target.style.color = 'purple';
 
const button2 = <div onMouseOver={handleMouseOver}>Drag here to change color</div>;

const introClass = "introduction";
const introParagraph = <p className={introClass}>Hello world</p>;

const strings = ['Home', 'Shop', 'About Me'];
const listItems = strings.map(string => <li>{string}</li>);
<ul>{listItems}</ul>