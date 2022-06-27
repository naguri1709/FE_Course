const articles = [
  {
    name: "Neuer",
    title: "Học Javascript như thế nào",
    description: `An array of odd numbers.
      An array of numbers divisible by 2 or 5.
      An array of numbers divisible by 3 and then squared those numbers.
      The sum of the following: square the numbers divisible by 5.
      `,
  },
  {
    name: "Neuer Goretzka",
    title: "Học React như thế nào",
    description: `An array of odd numbers.
      An array of numbers divisible by 2 or 5.
      An array of numbers divisible by 3 and then squared those numbers.
      The sum of the following: square the numbers divisible by 5.
      The sum of the following: square the numbers divisible by 5.
      The sum of the following: square the numbers divisible by 5.`,
  },

  {
    name: "Goretzka Neuer",
    title: "Làm thế nào để trở lên tốt hơn",
    description: `An array of odd numbers.
      An array of numbers divisible by 2 or 5.
      An array of numbers divisible by 3 and then squared those numbers.
      The sum of the following: square the numbers divisible by 5.
      The sum of the following: square the numbers divisible by 5.
      The sum of the following: square the numbers divisible by 5.
      The sum of the following: square the numbers divisible by 5.
      The sum of the following: square the numbers divisible by 5.`,
  },
];

function countWord(str) {
  const arr = str.split(" ");
  return arr.filter((word) => word !== "").length;
}

function template(item, index) {
  return `
  <div class="person">
  <h2 class="person-name">${item.name}</h2>
  <p><strong>Title:</strong>${item.title}</p>
  <p><strong>Description:</strong>${showMore(item.description, index)}</p></div>
  `;
}

function showMore(str, id) {
  if (countWord(str) > 50) {
    const newStr = str.split(" ");
    return `${newStr.slice(0, 51).join(" ")} 
      <span id="${id}">...</span>
      <span id="moreText_${id}" style="display:none;">${newStr
      .slice(50)
      .join(" ")}</span>
    <button onClick="toggleText(${id})" id="showMoreBtn_${id}">Show More</button>`;
  } else return str;
}

function toggleText(id) {
  console.log(id);
  let points = document.getElementById(id);

  let showMoreText = document.getElementById(`moreText_${id}`);

  let buttonText = document.getElementById(`showMoreBtn_${id}`);

  if (points.style.display === "none") {
    showMoreText.style.display = "none";

    points.style.display = "inline";

    buttonText.innerHTML = "Show more";
  } else {
    showMoreText.style.display = "inline";

    points.style.display = "none";

    buttonText.innerHTML = "Show Less";
  }
}

document.getElementById("app").innerHTML = `
<h1 class="app-title">Person (${articles.length} results)</h1>
<div class="wrapper">
${articles.map((item, index) => template(item, index)).join("")}
</div>
`;
