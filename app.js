
const modeBtn = document.getElementById("mode-btn");
const colorOptions = Array.from(document.getElementsByClassName("color-option"));
const color = document.getElementById("color");
const lineWidth = document.getElementById("line-width");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

  canvas.width = 800;
  canvas.height = 800;
  ctx.lineWidth = lineWidth.value;

  let isPainting = false;
  let isFilling = false;
  
   function onMove (event) {
    if (isPainting) {
     ctx.lineTo(event.offsetX, event.offsetY);
     ctx.stroke();
     return;
   } 
     ctx.moveTo(event.offsetX, event.offsetY);
}

   function onMouseDown () {
      isPainting= true;
   }

   function onMouseUp (){
     isPainting = false;
     ctx.beginPath();
   }

   function onLineWidthChange (event){
      ctx.lineWidth = event.target.value;
   }

   function onColorChange (event) {
     ctx.strokeStyle = event.target.value;
     ctx.fillStyle = event.target.value;
   }

   function onColorClick (event) {
    const colorData = event.target.dataset.color; 
    ctx.strokeStyle = colorData;
    ctx.fillStyle = colorData;
    color.value = colorData;
   }

   function onModeClick () {
      if(isFilling) {
        isFilling = false;
        modeBtn.innerText = "Fill";
      } else {
        isFilling = true;
        modeBtn.innerText = "Draw";
      }
   }

   function onCanvasClcik () {
     if (isFilling) {
        ctx.fillRect(0, 0, 800, 800);
     }
   }

  canvas.addEventListener("mousemove", onMove);
  canvas.addEventListener("mousedown", onMouseDown);
  canvas.addEventListener("mouseup", onMouseUp);
  canvas.addEventListener("mouseleave",onMouseUp);
  canvas.addEventListener("click", onCanvasClcik);
  
  lineWidth.addEventListener("change", onLineWidthChange);
  color.addEventListener("change", onColorChange);
  colorOptions.forEach(color => color.addEventListener("click", onColorClick));
  modeBtn.addEventListener("click", onModeClick);


