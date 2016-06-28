TodoList.controller("TodoController",function(TodoServices){
	this.tarefas = TodoServices.listar();
	this.tarefaConcluida = function(tarefa,index,concluida){
		if (angular.isDefined(concluida)) {
				tarefa.concluida = concluida;
		}		
		this.tarefas[index] = tarefa;
		TodoServices.atualizar(this.tarefas);
	}
	this.salvar = function(descricao){
		var tarefa = {
			descricao: descricao,
			concluida: false
		}
		TodoServices.salvar(tarefa);
		delete this.tarefa;
	}
});