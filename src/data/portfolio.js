const portfolio = [
  {
    id: "1",
    name: "Pdf 1",
    desc:
      "This course is a primer for programmers wanting to get up to speed with the basics of JavaScript. You will learn the fundamental concepts and syntax of the JavaScript programming language.",
    url: "/img/js-quickstart.png",
  },
  {
    id: "2",
    name: "Pdf 2",
    desc:
      "In this course you will learn the basics of object-oriented programming in JavaScript along with the new ES2015 Class syntax.",
    url: "/img/oojs.png",
  },
  {
    id: "3",
    name: "Pdf 3",
    desc:
      "JavaScript is everywhere and used in all phases of development from software to hardware. Learn the modern landscape of JavaScript, and what it means to learn and program with JavaScript in 2018 and beyond.",
    url: "/img/landscape-of-js.png",
  },
  {
    id: "4",
    name: "Pdf 4",
    desc:
      "In this course we will create two command line applications using the popular server-side JavaScript platform Node.js. We'll be creating an application to retrieve a student's Treehouse profile information and weather information based on a zip code.",
    url: "/img/node.png",
  },
  {
    id: "5",
    name: "Pdf 5",
    desc:
      "This course will level-up your React skills by providing a better understanding of class vs. functional components, state and lifecycle methods, and how to split your UI into reusable and composable components.",
    url: "/img/react-components.png",
  },
  {
    id: "6",
    name: "Pdf 6",
    desc:
      "Vue.js is a front end JavaScript framework with a gentle learning curve. Vue’s lower barrier to entry, ease of use and fantastic documentation make it a fun and accessible technology. Learn fundamental concepts that will help you get up and running with Vue.",
    url: "/img/vue.png",
  },
  {
    id: "7",
    name: "Pdf 7",
    desc:
      "In this course we will create two command line applications using the popular server-side JavaScript platform Node.js. We'll be creating an application to retrieve a student's Treehouse profile information and weather information based on a zip code.",
    url: "/img/node.png",
  },
  {
    id: "8",
    name: "Pdf 8",
    desc:
      "This course will level-up your React skills by providing a better understanding of class vs. functional components, state and lifecycle methods, and how to split your UI into reusable and composable components.",
    url: "/img/react-components.png",
  },
  {
    id: "9",
    name: "Pdf 9",
    desc:
      "Vue.js is a front end JavaScript framework with a gentle learning curve. Vue’s lower barrier to entry, ease of use and fantastic documentation make it a fun and accessible technology. Learn fundamental concepts that will help you get up and running with Vue.",
    url: "/img/vue.png",
  },
  {
    id: "10",
    name: "Pdf 10",
    desc:
      "In this course we will create two command line applications using the popular server-side JavaScript platform Node.js. We'll be creating an application to retrieve a student's Treehouse profile information and weather information based on a zip code.",
    url: "/img/node.png",
  },
  {
    id: "11",
    name: "Pdf 11",
    desc:
      "This course will level-up your React skills by providing a better understanding of class vs. functional components, state and lifecycle methods, and how to split your UI into reusable and composable components.",
    url: "/img/react-components.png",
  },
  {
    id: "12",
    name: "Pdf 12",
    desc:
      "Vue.js is a front end JavaScript framework with a gentle learning curve. Vue’s lower barrier to entry, ease of use and fantastic documentation make it a fun and accessible technology. Learn fundamental concepts that will help you get up and running with Vue.",
    url: "/img/vue.png",
  },
];

export function getPortfolios() {
  return portfolio;
}

export function getPortfolio(id) {
  return portfolio.find((m) => m.id === id);
}

export function deletePortfolio(id) {
  let portfolioInDb = portfolio.find((m) => m._id === id);
  portfolio.splice(portfolio.indexOf(portfolioInDb), 1);
  return portfolioInDb;
}

export default portfolio;
