
const saveBtn = document.getElementById("save");
const textInput = document.getElementById("text");
const fileInput = document.getElementById("file");
const modeBtn = document.getElementById("mode-btn");
const destroy = document.getElementById("destroy-btn");
const erase = document.getElementById("erase-btn");
const colorOptions = Array.from(document.getElementsByClassName("color-option"));
const color = document.getElementById("color");
const lineWidth = document.getElementById("line-width");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = 500;
const CANVAS_HEIHGT = 500;


  canvas.width = CANVAS_WIDTH;
  canvas.height = CANVAS_HEIHGT;
  ctx.lineWidth = lineWidth.value;
  ctx.lineCap = "round";

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
        ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIHGT);
     }
   }

   function onDestroyClick () {
      ctx.fillStyle = "white";
      ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIHGT);
   }

   function onEraseClick () {
      ctx.strokeStyle = "white";
      isFilling = false;
      modeBtn.innerText = "Fill";
   }

   function onFileChange (event) {
       const file = event.target.files[0];
       const url = URL.createObjectURL(file);
       const image = new Image();
       image.src = url;
       image.onload = function() {
            ctx.drawImage(image, 200, 200, 200, 200);
            fileInput.value = null;
       }
  
      
   }
   function onDoubleClick(event) {
      const text = textInput.value; 

      if(text !== ""){
      ctx.save();
      ctx.lineWidth = 1;
      ctx.font = "48px serif";
      ctx.fillText(text, event.offsetX, event.offsetY);
      ctx.restore();
      }
      
   }

   function onSaveClick(event) {
      const url = canvas.toDataURL();
      const a = document.createElement("a");
      a.href =url;
      a.download = "myDrawing.png";
      a.click();
   }


  canvas.addEventListener("dblclick", onDoubleClick); 
  canvas.addEventListener("mousemove", onMove);
  canvas.addEventListener("mousedown", onMouseDown);
  canvas.addEventListener("mouseup", onMouseUp);
  canvas.addEventListener("mouseleave",onMouseUp);
  canvas.addEventListener("click", onCanvasClcik);
  
  lineWidth.addEventListener("change", onLineWidthChange);
  color.addEventListener("change", onColorChange);
  colorOptions.forEach(color => color.addEventListener("click", onColorClick));
  modeBtn.addEventListener("click", onModeClick);
  destroy.addEventListener("click", onDestroyClick);
  erase.addEventListener("click", onEraseClick);
  fileInput.addEventListener("change", onFileChange);
  saveBtn.addEventListener("click", onSaveClick);

