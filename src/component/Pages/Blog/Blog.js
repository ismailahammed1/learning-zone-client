import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-left">
          <h1 className="text-5xl font-bold">What is ‘CORS’?</h1>
          <p className="py-6">
            CORS stands for Cross Origin Resource Sharing. It is a HTTP-header
            based mechanism which enables the server to allow or restrict access
            from any other origins. A protocol, domain name, port or scheme
            requesting a URL which is different from the current page address
            depicts a cross-origin request. For security reasons, browsers
            implement Same Origin Policy and restrict cross-origin HTTP requests
            by default.
          </p>
        </div>
      </div>
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-left">
          <h1 className="text-5xl font-bold"> Why are you using firebase?</h1>
          <p className="py-6">
            Everything can be made useful if you use your mind, can’t it be?
            Like the machine is doing with the men.Firebase,
            Backend-as-a-Service (BaaS), is a platform by Google that provides
            functionalities and helps with the backend development of your
            Android, iOS, or web and even some products that support Unity3D
            too. Top functionalities are: Firebase Database: used to store users
            data like chat messages, users details and other metadata Firebase
            Cloud Storage: used to store user-generated content like the profile
            picture, multimedia messages, etc. Firebase Cloud Messaging: used to
            send notification Firebase Remote Config: used to perform A/B
            testing on the go
          </p>
          <h1 className="text-3xl font-bold">
            What other options do you have to implement authentication?
          </h1>
          <p className="py-6">
            It provides backend services, easy-to-use SDKs, and ready-made UI
            libraries to authenticate users to your app. It supports
            authentication using passwords, phone numbers, popular federated
            identity providers like Google, Firebase Authentication is a tool in
            the User Management and Authentication category of a tech stack.
          </p>
        </div>
      </div>
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-left">
          <h1 className="text-5xl font-bold">
            How does the private route work?
          </h1>
          <p className="py-6">
            The react private route component renders child components (
            children ) if the user is logged in. If not logged in the user is
            redirected to the /login page with the return url passed in the
            location state property
          </p>
        </div>
      </div>
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-left">
          <h1 className="text-5xl font-bold">What is Node?</h1>
          <p className="py-6">
            Node.js is an open-source, cross-platform, back-end JavaScript
            runtime environment that runs on a JavaScript Engine and executes
            JavaScript code outside a web browser, which was designed to build
            scalable network applications.
          </p>
          <h2 className="text-3xl font-bold">How does Node work?</h2>
          <p>
            It is a used as backend service where javascript works on the
            server-side of the application. This way javascript is used on both
            frontend and backend. Node. js runs on chrome v8 engine which
            converts javascript code into machine code, it is highly scalable,
            lightweight, fast, and data-intensive
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
