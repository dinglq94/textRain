function dropText() {
  var canvas = document.querySelector('canvas');
  if(canvas){
    document.body.removeChild(canvas);
  }

  canvas = document.createElement('canvas');
  document.body.appendChild(canvas);
  console.log(devicePixelRatio);
  canvas.width = window.innerWidth-4
  canvas.height = window.innerHeight-4
  canvas.height = window.innerHeight-4

  //获得2d上下文对象
  var ctx = canvas.getContext('2d');

  // 列宽
  var columnWidth = 20
  var columnCount = Math.floor(window.innerWidth / columnWidth)

  // 记录每列写到第几个文字
  var columnIndex = new Array(columnCount).fill(0)


  function getRandomColor(color) {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    if (color) {
      return 'rgb(' + r + ',' + g + ',' + b + ')';
    } else {
      return 'rgba(' + r + ',' + g + ',' + b + ')';
    }
  }

  function getRandomChar() {
    var str = `console.log('hello world')`;
    return str.charAt(Math.floor(Math.random() * str.length));
  }

  function draw() {
    ctx.fillStyle = `rgba(255,255,255,0.1)`;
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

    ctx.font = "14px Georgia";
    ctx.textBaseline = "top";
    ctx.textAlign = "center";

    for (var i = 0; i < columnIndex.length; i++) {
      ctx.fillStyle = getRandomColor();
      const chart = getRandomChar();
      const x = i * columnWidth;
      const y = columnIndex[i + 1] * columnWidth
      if (y > window.innerHeight && Math.random() > 0.99) {
        columnIndex[i] = 0;
      }
      ctx.fillText(chart, x, y);
      columnIndex[i]++
    }
  }

  draw();
  setInterval(draw, 30)
}

window.onload = function (e) {
  dropText();
}

window.onresize = function (e) {
  dropText();
}
