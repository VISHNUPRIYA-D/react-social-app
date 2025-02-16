import React from "react";

const About = () => {
  return (
    <main className="about-com">
      <div className="about">
        <h2 className="question">What is React?</h2>
        <p className="ans">
          React is a framework that employs Webpack to automatically compile
          React, JSX, and ES6 code while handling CSS file prefixes. React is a
          JavaScript-based UI development library.
        </p>
        <h3 className="sub-head">
          React’s popularity today has eclipsed that of all other front-end
          development frameworks. Here is why:
        </h3>
        <ul className="key-points">
          <li>
            Easy creation of dynamic applications: React makes it easier to
            create dynamic web applications because it requires less coding and
            offers more functionality, as opposed to JavaScript, where coding
            often gets complex very quickly.
          </li>
          <li>
            Improved performance: React uses Virtual DOM, thereby creating web
            applications faster. Virtual DOM compares the components’ previous
            states and updates only the items in the Real DOM that were changed,
            instead of updating all of the components again, as conventional web
            applications do.{" "}
          </li>
          <li>
            Reusable components: Components are the building blocks of any React
            application, and a single app usually consists of multiple
            components. These components have their logic and controls, and they
            can be reused throughout the application, which in turn dramatically
            reduces the application’s development time.
          </li>
          <li>
            Unidirectional data flow: React follows a unidirectional data flow.
            This means that when designing a React app, developers often nest
            child components within parent components. Since the data flows in a
            single direction, it becomes easier to debug errors and know where a
            problem occurs in an application at the moment in question.
          </li>
          <li>
            Small learning curve: React is easy to learn, as it mostly combines
            basic HTML and JavaScript concepts with some beneficial additions.
            Still, as is the case with other tools and frameworks, you have to
            spend some time to get a proper understanding of React’s library.
          </li>
          <li>
            It can be used for the development of both web and mobile apps: We
            already know that React is used for the development of web
            applications, but that’s not all it can do. There is a framework
            called React Native, derived from React itself, that is hugely
            popular and is used for creating beautiful mobile applications. So,
            in reality, React can be used for making both web and mobile
            applications.
          </li>
          <li>
            Dedicated tools for easy debugging: Facebook has released a Chrome
            extension that can be used to debug React applications. This makes
            the process of debugging React web applications faster and easier.
          </li>
          <li>
            The above reasons more than justify the popularity of the React
            library and why it is being adopted by a large number of
            organizations and businesses. Now let’s familiarize ourselves with
            React’s features.
          </li>
        </ul>
      </div>
    </main>
  );
};

export default About;
