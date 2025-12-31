function calculateWeight() {
  const mass = Number(document.getElementById('mass').value);
  const planet = document.getElementById('planet').value;
  const planetMessage = document.querySelector('.image');
  const message = document.querySelector('.description');
  if (!mass) {
    planetMessage.innerHTML = "Enter mass";
    message.style.visibility = 'hidden'
    message.innerHTML = '';
    console.log('Enter mass');
    return;
  }
  if(!planet){
    planetMessage.innerHTML = "Choose Planet";
    message.style.visibility = 'hidden'
    message.innerHTML = '';
    console.log('Enter a planet');
    return;
  }

    const gravity = {
        earth: 9.81,
        jupiter: 24.79,
        mars: 3.71,
        mercury: 3.7,
        moon: 1.62,
        neptune: 11.15,
        pluto: 0.62,
        saturn: 10.44,
        uranus: 8.69,
        venus: 8.87
  };


  const weight = mass * gravity[planet];

  planetMessage.innerHTML = `<img src='./images/${planet}.png' class='planet-image'/>`
  message.innerHTML = `The Weight of an Object on ${planet} is ${weight.toFixed(2)}`
  message.style.visibility = 'visible'

  console.log(`Planet: ${planet}, Weight: ${weight}`);
  return weight;
}

