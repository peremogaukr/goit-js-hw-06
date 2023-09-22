function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyRef = document.body;
const changeColorBtnRef = document.querySelector('.change-color');
const bgColorNameSpanRef = document.querySelector('.color');

changeColorBtnRef.addEventListener('click', onChangeColorBtnClick);

function onChangeColorBtnClick() {
  const randomColor = getRandomHexColor();
  console.log(`Random color is in HEX: ${randomColor}`);
  
  bodyRef.style.backgroundColor = randomColor;
  console.log(bodyRef.style.backgroundColor === randomColor);
  console.log(`Boby background color is in RGB: ${bodyRef.style.backgroundColor}`);
  bgColorNameSpanRef.textContent = randomColor;
  console.log(bgColorNameSpanRef.textContent === randomColor);
  console.log(`Color in span is in HEX: ${bgColorNameSpanRef.textContent}`);
  
  function splitRGB(color) {
  color = getHexRGBColor(color); 
  var matches = color.match(/^#?([\dabcdef]{2})([\dabcdef]{2})([\dabcdef]{2})$/i);
    
  if (!matches) return false;
  
  for (var i=1, rgb = new Array(3);  i<=3; i++) rgb[i-1] = parseInt(matches[i],16);
  
  return rgb;
  };

  function getHexRGBColor(color)
{
  color = color.replace(/\s/g,"");
  var aRGB = color.match(/^rgb\((\d{1,3}[%]?),(\d{1,3}[%]?),(\d{1,3}[%]?)\)$/i);

  if(aRGB)
  {
    color = '';
    for (var i=1;  i<=3; i++) color += Math.round((aRGB[i][aRGB[i].length-1]=="%"?2.55:1)*parseInt(aRGB[i])).toString(16).replace(/^(.)$/,'0$1');
  }
  else color = color.replace(/^#?([\da-f])([\da-f])([\da-f])$/i, '$1$1$2$2$3$3');
    
    return color;
    
}
  
  const spanInRGBArr = splitRGB(bgColorNameSpanRef.textContent);
  const bgInHEX = getHexRGBColor(bodyRef.style.backgroundColor)
  console.log(`TRANSFORM => Span in RGB: rgb(${spanInRGBArr[0]}, ${spanInRGBArr[1]}, ${spanInRGBArr[2]}}`);
  console.log(`TRANSFORM => Boby background color in HEX: #${bgInHEX}`);
  console.log(`Body background color = color in span (text) via RGB format ??? `, bodyRef.style.backgroundColor === `rgb(${spanInRGBArr[0]}, ${spanInRGBArr[1]}, ${spanInRGBArr[2]})`);
  console.log(`Body background color = color in span (text) via HEX format ??? `, bgColorNameSpanRef.textContent === `#${bgInHEX}`);
  console.log('-|-|-|-|-|-|-|-|-|-|-|-|-');
};