import Submit from "./submit.js";

export default function Rating({ target }) {
  const rating = document.createElement("div");
  rating.setAttribute("class", "rating");

  const img = document.createElement("img");
  img.setAttribute("class", "star");
  img.setAttribute("src", "./images/icon-star.svg");

  this.ratingHtml = () => {
    rating.innerHTML += `<h1>How did we do?</h1>
    <p>
      Please let us know how we did with your support request. All feedback is appreciated
      to help us improve our offering!
    </p>`;
  };

  this.number = () => {
    const form = document.createElement("form");
    form.setAttribute("class", "numbers");
    for (let i = 0; i < 5; i++) {
      const num = document.createElement("input");
      num.setAttribute("type", "radio");
      num.setAttribute("name", "num");
      num.setAttribute("id", `num${i + 1}`);
      num.setAttribute("value", `${i + 1}`);
      const label = document.createElement("label");
      label.setAttribute("for", `num${i + 1}`);
      label.innerHTML = `${i + 1}`;
      form.appendChild(num);
      form.appendChild(label);
    }
    rating.appendChild(form);
  };

  this.submit = () => {
    const submit = document.createElement("button");
    submit.setAttribute("class", "btn");
    submit.addEventListener("click", (e) => {
      const num = document.getElementsByName("num");
      let num2;
      for (let i = 0; i < 5; i++) {
        if (num[i].checked === true) {
          num2 = num[i].value;
          console.log(num2);
        }
      }
      new Submit({ target }, num2).render();
    });
    submit.innerHTML = "Submit";
    rating.appendChild(submit);
  };

  this.render = () => {
    rating.appendChild(img);
    this.ratingHtml();

    this.number();

    this.submit();
    target.appendChild(rating);
  };
}
