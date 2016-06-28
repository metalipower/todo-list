describe("Todo Testes", function() {
	var TodoController, Excluir;
	
	beforeEach(function() {
		localStorage.removeItem("tarefas");
		module('TodoList');
		
		inject(function($controller,$http) {		  
		  TodoController = $controller('TodoController');		  	  
		});
	});
	  
	it('Módulo TodoList existe?', function() {		
		expect(TodoList).toBeDefined();
	});	

	describe("Testando TodoController", function() {
		var tarefa;
		it('TodoController existe?', function() {
			expect(TodoController).toBeDefined();
		});				
				
		it("Adicionar Tarefa", function() {
			TodoController.salvar("Tarefa Teste");			
			expect(TodoController.tarefas.length).toBe(1);
			tarefa = TodoController.tarefas[0];			
		});
		
		it("Marcar tarefa como concluída", function() {
			TodoController.tarefaConcluida(tarefa,0,true);
			expect(TodoController.tarefas[0].concluida).toBe(true);			
		});

		it("Desmarcar tarefa como concluída", function() {
			TodoController.tarefaConcluida(tarefa,0,false);
			expect(TodoController.tarefas[0].concluida).toBe(false);			
		});		
		describe("Testando directive Excluir", function() {
			beforeEach(function() {
				inject(function($rootScope,$compile) {	
					
					  Excluir = angular.element('<excluir index="0"></alert-msg>');					  
					  $compile(Excluir)($rootScope);					  					  
					  $rootScope.$digest();				  					
				});
				TodoController.salvar("Tarefa Teste");
			});
			it("Clicar no botão não da modal", function() {				
				Excluir.find("button")[1].click();
				expect(TodoController.tarefas.length).toBe(1);
			});
			it("Clicar no botão sim da modal", function() {
				Excluir.find("button")[0].click();
				expect(TodoController.tarefas.length).toBe(0);
			});		
		});
	  
	});
	
});
