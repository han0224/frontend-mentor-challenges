export default function Submit({ target }, num) {
  target.innerHTML = "";
  const thankyou = document.createElement("div");
  thankyou.setAttribute("class", "thankyou");

  const img = document.createElement("img");
  img.setAttribute("class", "thankyouImg");
  img.setAttribute("src", "./images/illustration-thank-you.svg");
  thankyou.appendChild(img);

  const selected = document.createElement("div");
  selected.setAttribute("class", "selected");
  selected.innerText = `You selected ${num} out of 5`;
  thankyou.appendChild(selected);

  thankyou.innerHTML += `<h1>
  Thank you!
</h1>
<p>
  We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in
  touch!
</p>`;
  this.render = () => {
    target.appendChild(thankyou);
  };
}
