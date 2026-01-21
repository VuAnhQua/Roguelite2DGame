document.addEventListener("DOMContentLoaded", (evt) => {
    const canvas = <HTMLCanvasElement>document.getElementById("canvas");
    const ctx = <CanvasRenderingContext2D>canvas.getContext("2d");
    let img = <HTMLImageElement>document.querySelector("#Img1");

    ctx.beginPath();
    ctx.drawImage(img, 0, 0);
    ctx.fill();

    console.log("Whyyy")
})