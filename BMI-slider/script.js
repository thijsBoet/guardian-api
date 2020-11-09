const height = document.getElementById("height");
const weight = document.getElementById("weight");
const BMI = document.getElementById("BMI");
const BMIBackgroundColor = document.getElementById("bmiBackgroundColor").style;
BMIBackgroundColor.backgroundColor = "yellow";

const heightSlider = document.getElementById("heightSlider");
const weightSlider = document.getElementById("weightSlider");

height.innerText = `${heightSlider.value} cm`;
weight.innerText = `${weightSlider.value} kg`;

heightSlider.addEventListener("input", function () {
  height.innerText = `${heightSlider.value} cm`;
  calculateBMI();
});

weightSlider.addEventListener("input", function () {
  weight.innerText = `${weightSlider.value} kg`;
  calculateBMI();
});

const color = {
  1: "blue",
  2: "blue",
  3: "blue",
  4: "blue",
  5: "blue",
  6: "blue",
  7: "blue",
  8: "blue",
  9: "blue",
  10: "blue",
  11: "blue",
  12: "blue",
  13: "blue",
  14: "blue",
  15: "blue",
  16: "blue",
  17: "blue",
  18: "blue",
  19: "green",
  20: "green",
  21: "green",
  22: "green",
  23: "green",
  24: "green",
  25: "yellow",
  26: "yellow",
  27: "yellow",
  28: "yellow",
  29: "yellow",
  30: "orange",
  31: "orange",
  32: "orange",
  33: "orange",
  34: "orange",
  35: "orange",
  36: "orange",
  37: "orange",
  38: "orange",
  39: "orange",
  40: "red",
  41: "red",
  42: "red",
  43: "red",
  44: "red",
  45: "red",
  46: "red",
  47: "red",
  48: "red",
  49: "red",
  50: "red",
  51: "red",
  52: "red",
  53: "red",
  54: "red",
  55: "red",
  56: "red",
  57: "red",
  58: "red",
  59: "red",
  60: "red",
  61: "red",
  62: "red",
  63: "red",
  64: "red",
  65: "red",
  66: "red",
  67: "red",
  68: "red",
  69: "red",
  70: "red",
  71: "red",
  72: "red",
  73: "red",
  74: "red",
  75: "red",
  76: "red",
  77: "red",
  78: "red",
  79: "red",
  80: "red",
  81: "red",
  82: "red",
  83: "red",
  84: "red",
  85: "red",
  86: "red",
  87: "red",
  88: "red",
  89: "red",
  90: "red",
  91: "red",
  92: "red",
  93: "red",
  94: "red",
  95: "red",
  96: "red",
  97: "red",
  98: "red",
  99: "red",
  100: "red",
}

const calculateBMI = () => {
  BMI.innerText = Math.round(+weightSlider.value / (((+heightSlider.value / 100) * +heightSlider.value) / 100));

  let BMIValue = parseInt(BMI.innerText);
  HEX = color[BMIValue];
  BMIBackgroundColor.backgroundColor = HEX;
};

