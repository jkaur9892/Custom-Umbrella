const logoUpload = document.getElementById('logo-upload');
const logoContainer = document.querySelector('.logo-container');
const logoImage = document.querySelector('.logo-image');
const umbrellaImage = document.querySelector('.umbrella-image');
const buttonUpload = document.getElementById('button-upload');
const colorOptions = document.querySelectorAll('.color-option');

// event listener for logo upload

logoUpload.addEventListener('change', (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = (e) => {
    const imageUrl = e.target.result;
    logoImage.src = imageUrl;
    
    logoContainer.style.display = 'block';
    buttonUpload.textContent = file.name;
  }
  reader.readAsDataURL(file);
});


// event listener for color options

colorOptions.forEach((colorOption) => {
  colorOption.addEventListener('click', (event) => {
    const color = event.target.id;
    umbrellaImage.src = `images/umbrella ${color}.png`;
    document.documentElement.style.setProperty('--umbrella-color', color);

    // Calculate HSL values for the background color
    const hslValues = calculateHSLValues(color);
    
    document.body.style.backgroundColor = `hsl(${hslValues.hue}, ${hslValues.saturation}%, ${hslValues.lightness}%)`;
    document.getElementById("pink").addEventListener("click", function() {
    document.getElementById("button-upload").style.backgroundColor = "#d63384";
    
    })
    document.getElementById("blue").addEventListener("click", function() {
      document.getElementById("button-upload").style.backgroundColor = "#0db9db";
    })
    document.getElementById("yellow").addEventListener("click", function() {
      document.getElementById("button-upload").style.backgroundColor = "#ffc107";
    })
  });
});

//  HSL values for different umbrella colors

function calculateHSLValues(color) {
  
  const hslValues = {
    'pink': { hue: 330, saturation: 20, lightness: 90 },
    'blue': { hue: 210, saturation: 20, lightness: 90 },
    'yellow': { hue: 60, saturation: 20, lightness: 90 }
  };

  // HSL values for the selected color
  return hslValues[color] || { hue: 0, saturation: 0, lightness: 100 };
}






