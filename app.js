















const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

ctx.fillRect(200, 200, 10, 200);
ctx.fillRect(400, 200, 10, 200);
ctx.lineWidth = 3;
ctx.strokeRect(280, 300, 50, 100);
ctx.fillRect(200, 200, 200, 10);
ctx.moveTo(200, 200);
ctx.lineTo(310, 110);
ctx.lineTo(410, 200);
ctx.stroke();

ctx.beginPath();
ctx.arc(500, 350, 20, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(490, 350, 3, 0, 2 * Math.PI);
ctx.arc(510, 350, 3, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.strokeStyle = "white";
ctx.arc(500, 355, 6, 0, Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "black";
ctx.fillRect(480, 375, 3, 30);
ctx.fillRect(515, 375, 3, 30);
ctx.fillRect(490, 375, 20, 28);
ctx.fillRect(492, 405, 5, 40);
ctx.fillRect(503, 405, 5, 40);
