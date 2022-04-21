import Rating from "./rating.js";
import Submit from "./submit.js";

export default function App({ target }) {
  this.route = () => {
    const { pathname } = location;
    console.log(pathname);

    target.innerHTML = "";

    new Rating({ target }).render();
  };
  this.route();
}
