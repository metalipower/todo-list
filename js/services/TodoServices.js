TodoList.factory("TodoServices", function(){	
	var tarefas = localStorage.getItem('tarefas');
	if(!tarefas){
		tarefas = [];
	}else{
		tarefas = JSON.parse(tarefas);
	}	
	var _listar = function(){
		return tarefas;
	};
	var _salvar = function(tarefa){
		tarefas.push(tarefa);
		localStorage.setItem("tarefas",JSON.stringify(tarefas));
	};
	var _atualizar = function(tarefasAtualizadas){		
		localStorage.setItem("tarefas",JSON.stringify(tarefasAtualizadas));
	};
	var _remover = function(index){
		tarefas.splice(index,1);
		localStorage.setItem("tarefas",JSON.stringify(tarefas));
	};
	return {
		listar: _listar,
		salvar: _salvar,
		atualizar: _atualizar,
		remover: _remover		
	};
});