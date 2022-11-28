import React from "react";

const Blog = () => {
  return (
    <div className="my-10 w-1/2 mx-auto">
     <h2 className="text-3xl text-center font-bold mb-5">Our Blog</h2>
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-3"
      >
        <div className="collapse-title text-xl font-medium">
         What are the different ways to manage a state in a React application?
        </div>
        <div className="collapse-content">
          <p>The built-in way that React provides for setting component states is by using setState() and adding “local state” to a class. There are several other ways to manage state​s in React, including the use of:
           <li>Hooks</li>
           <li>Context API</li>
           <li>Apollo Link State</li>
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-3"
      >
        <div className="collapse-title text-xl font-medium">
        How does prototypical inheritance work?
        </div>
        <div className="collapse-content">
          <p>Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-3"
      >
        <div className="collapse-title text-xl font-medium">
        What is a unit test? Why should we write unit tests?
        </div>
        <div className="collapse-content">
          <p>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-3"
      >
        <div className="collapse-title text-xl font-medium">
        React vs. Angular vs. Vue?
        </div>
        <div className="collapse-content">
          <p>React often requires extra modules and components, which keeps the core library small, but means there’s extra work involved when incorporating outside tools. Angular, on the other hand, is more of a full-fledged solution that doesn’t require extras like React often does, though it does have a steeper learning curve for its core compared to React.
           React is more suitable for intermediate to advanced JavaScript developers who are familiar with concepts from ES6 and up, while Angular favors those same developers who are also familiar with TypeScript.
           Vue is generally more suited to smaller, less complex apps and is easier to learn from scratch compared to React. Vue can be easier to integrate into new or existing projects and many feel its use of HTML templates along with JSX is an advantage.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
