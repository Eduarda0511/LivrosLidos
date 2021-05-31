

function salvar(){
	
	/*Ler os elementos dos inputs*/
	var inputLivro = document.getElementById('inputLivro').value;
	var inputAutor = document.getElementById('inputAutor').value;
	var inputPaginas = parseInt(document.getElementById('inputPaginas').value);
	var inputInicial = new Date(document.getElementById('inputInicial').value);
	var inicial = inputInicial.format("yyyy-mm-dd");
	var inputFinal = new Date(document.getElementById('inputFinal').value);
	var final = inputFinal.format("yyyy-mm-dd");
	var inputdiferenca = Math.abs(inputFinal.getTime() - inputInicial.getTime());
	inputdiferenca = Math.ceil(inputdiferenca / (1000*3600*24)); //converter para horas, após faz a diferença de dias
	var genero = document.getElementById('inlineFormCustomSelect').options[document.getElementById('inlineFormCustomSelect').selectedIndex].value;


	if(!inputLivro && !inputAutor && !inputPaginas){
		alert("Preencha os campos abaixo!");
		return false;
		
	}

	/*Fiz um objeto, para separar cada item*/
	livro = {/*passando os atributos para cada elemento*/
		nome: inputLivro,
		autor: inputAutor,
		pagina: inputPaginas,
		genero: genero,
		diferenca: inputdiferenca,
		dataInicio: inicial,
		dataFim: final
		
	}

	console.log(livro); /*apresenta o objeto (para teste)*/


	/*Trasformei o objeto em string*/
	if(localStorage.getItem('patio2') === null){ /*getItem serve para retornar o valor*/
		var livros = []; /*criei um array para guardar o objeto*/
		livros.push(livro); /*esse array para receber as informações do objeto*/
		localStorage.setItem('patio2', JSON.stringify(livros));/*setItem serve para armazenar o valor*/
		/*O JSON vai transformar o objeto em string*/
	}else{
		var livros = JSON.parse(localStorage.getItem('patio2')); /*serve para retornar em formato de objeto*/
		livros.push(livro);
		localStorage.setItem('patio2', JSON.stringify(livros));
	}


}

/*Ler o inputs depois de editado*/
function salvar2(){
	var i = localStorage.getItem('i');

	/*Ler os elementos dos inputs*/
	var inputLivro = document.getElementById('inputLivro').value;
	var inputAutor = document.getElementById('inputAutor').value;
	var inputPaginas = parseInt(document.getElementById('inputPaginas').value);
	var inputInicial = new Date(document.getElementById('inputInicial').value);
	var inicial = inputInicial.format("yyyy-mm-dd");
	var inputFinal = new Date(document.getElementById('inputFinal').value);
	var final = inputFinal.format("yyyy-mm-dd");
	var inputdiferenca = Math.abs(inputFinal.getTime() - inputInicial.getTime());
	inputdiferenca = Math.ceil(inputdiferenca / (1000*3600*24)); //converter para horas, após faz a diferença de dias
	var genero = document.getElementById('inlineFormCustomSelect').options[document.getElementById('inlineFormCustomSelect').selectedIndex].value;


	if(!inputLivro && !inputAutor && !inputPaginas){
		alert("Preencha os campos abaixo!");
		return false;
	}

	/*Fiz um objeto, para separar cada item*/
	livro = {/*passando os atributos para cada elemento*/
		nome: inputLivro,
		autor: inputAutor,
		pagina: inputPaginas,
		genero: genero,
		diferenca: inputdiferenca,
		dataInicio: inicial,
		dataFim: final
		
	}

	var livros = JSON.parse(localStorage.getItem('patio2'));
	livros[i] = livro;

	livros = JSON.stringify(livros);
	localStorage.setItem('patio2',livros);
}

function editar(i){
	var livros = JSON.parse(localStorage.getItem('patio2'));

		var nome = livros[i].nome;
		var autor = livros[i].autor;
		var pagina = livros[i].pagina;
		var diferenca = livros[i].diferenca;
		var genero = livros[i].genero;
		var dataInicio = livros[i].dataInicio;
		var dataFim = livros[i].dataFim;
		var array = new Array(nome, autor, pagina, genero, dataInicio, dataFim);

	localStorage.setItem('atual', JSON.stringify(array));
	localStorage.setItem('i', i);

	mostraPatio();
}



/*Utilizei esta função para remover itens*/
function apagarLivro(nome){
	var livros = JSON.parse(localStorage.getItem('patio2')); /*capturar as informações de patio2*/

	for(var a=0; a < livros.length; a++){
		if(livros[a].nome == nome){ /*se o valor que está na posição do array for o mesmo do nome, então..*/
			livros.splice(a,1); /*remover*/
		}
		localStorage.setItem('patio2', JSON.stringify(livros)); /*seta novamente o localStorage*/
	}



	window.open("consultar.html","_self"); //para atualizar as informações da função

	mostraPatio();
	
}


	
/*Para apresentar os itens da primeira tabela na pag consultar..*/
function mostraPatio(){
	var livros = JSON.parse(localStorage.getItem('patio2')); /*chamar as informações do patio2 e convertendo para JSON*/
	var livrosResultado = document.getElementById('resultados'); /*capturar as informações do id*/


	livrosResultado.innerHTML = '';

		for(var i=0; i < livros.length; i++){ /*para capturar as informações do objeto e apresentá-las na tabela*/
			var numero = i;
			var nome = livros[i].nome;
			var autor = livros[i].autor;
			var pagina = livros[i].pagina;
			var diferenca = livros[i].diferenca;
			var genero = livros[i].genero;
			switch(genero){
				case '0':
					genero = "Ação";
					break;
				case '1':
					genero = "Autoajuda";
					break;
				case '2':
					genero = "Aventura";
					break;
				case '3':
					genero = "Bibliografia";
					break;
				case '4':
					genero = "Carta";
					break;
				case '5':
					genero = "Científico";
					break;
				case '6':
					genero = "Conto";
					break;
				case '7':
					genero = "Crônica";
					break;
				case '8':
					genero = "Didático";
					break;
				case '9':
					genero = "Drama";
					break;
				case '10':
					genero = "Épico";
					break;
				case '11':
					genero = "Fantasia";
					break;
				case '12':
					genero = "Ficção Científica";
					break;
				case '13':
					genero = "Guia";
					break;
				case '14':
					genero = "Histórico";
					break;
				case '15':
					genero = "Humor";
					break;
				case '16':
					genero = "Infatojuvenil";
					break;
				case '17':
					genero = "Jogo";
					break;
				case '18':
					genero = "Romance";
					break;
				case '19':
					genero = "Saúde";
					break;
				case '20':
					genero = "Terror";
					break;
			}

livrosResultado.innerHTML += '<tr><td>' + (numero + 1) + '</td><td>' + nome + '</td><td>' + autor + '</td><td>' + pagina + '</td><td>'+ genero + '</td><td>' 
+ diferenca +
 '</td><td><a href="editar.html"><button type="submit" class="btn btn-light" onclick="editar(\''+i+'\')"><i class="material-icons">create</i> </button></a>'+
 '</td><td><button type="submit" class=" btn btn-light" onclick="apagarLivro(\''+nome+'\')"><i class="material-icons">delete</i></button>' +
 '</td></tr>' 

		
	}	

}


var soma = 0;
var soma1 = 0;

/*apresenta as informações da segunda tabela*/
function mostraTotal(){
	var livros = JSON.parse(localStorage.getItem('patio2'));
	var livrosTotal = document.getElementById('total');

	livrosTotal.innerHTML = '';

		for(var i=0; i < livros.length; i++){
			var numero = i;
			var pagina = livros[i].pagina;

			numero++;
			soma1 = soma1 + pagina;
	}	
	
	livrosTotal.innerHTML +=  '<tr><td>' + numero  + '</td><td>' +  soma1 + '</td></tr>'
	
}

