const startGame = () => {
  let counter = 0;
  const button = document.querySelector("button");

  button.addEventListener("click", () => {
    counter++;
  });

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (counter > 2) {
        resolve(counter);
      } else {
        reject();
      }
    }, 2000);
  });
};

startGame()
  .then((counter) => {
    alert(`Cong. You are win!, you click ${counter} times`); //
  })
  .catch(() => {
    alert("Sorry. You are lost");
  });
