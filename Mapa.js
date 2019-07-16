var mapa, seletorFase, lin, col, tela, tbLin, tbCol;
var selectedPalette = 4;
var sizex = 50, sizey = 50;
var ctx = null;

function zerarMatriz() {
    mapa.length = 0;
}

function inicializar() {
	mapa = [];
	tbLin = document.getElementById("tbLin");
	tbCol = document.getElementById("tbCol");
    lin = tbLin.value;
    col = tbCol.value;
	for(let i = 0; i < lin; i++) {
	mapa.push([]);
	for (let j = 0; j < col; j++) {
		mapa[i].push(0);
		}
	}
    tela = document.getElementById("master");
    tela.width = col*sizex;
    tela.height = lin*sizey;
    ctx = tela.getContext('2d');
	verificaClique();
    rodar();
}

function change(x,y){
	let indexX = Math.floor(x/sizex);
	let indexY = Math.floor(y/sizey);
	console.log(indexX + " "+  indexY);
	mapa[indexY][indexX] = selectedPalette;
	
}

function getCursorPosition(canvas, event) {
    const rect = canvas.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    change(x,y);
}

function verificaClique(){
	tela.addEventListener('mousedown', function(e) {
    getCursorPosition(tela, e)
	})
}

function desenhar() {
    if(ctx == null) return;

    for(let i = 0; i < lin; i++)
    {
        for(let j = 0; j < col; j++)
        {
            switch(mapa[i][j])
            {
                case 0:
                    ctx.fillStyle = "#000000";
                    break;
                case 1:
                    ctx.fillStyle = "#006ba8";
                    break;
                case 2:
					ctx.fillStyle = "#9d6710";
                    break;
                case 3:
                    ctx.fillStyle = "#9c2520";
                    break;
                case 4:
                    ctx.fillStyle = "#bc39ba";
                    break;
                default:
                    ctx.fillStyle = "#E8E3D9";
                    break;
            }
            ctx.fillRect(j*sizex,i*sizey,sizex,sizey);
        }
    }

}

function rodar() {
		desenhar();
		//verificaClique();
        setTimeout(rodar,33.3333);
}