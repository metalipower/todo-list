TodoList.directive('excluir', function(TodoServices) {
  var template = 
	  '<div class="pull-right">'+
		'<a href="#" ng-click="exibirModal()" class="btn-remover icon-cross pull-right"></a>'+
		'<div ng-show="mostrarModal" class="overlay"></div>'+
		'<div ng-show="mostrarModal" class="modal">'+
			'<h3 class="title">Confirmar exclusão?</h3>'+
			'<button ng-click="removerTarefa()" class="alert-button">Sim</button>'+
			'<button ng-click="ocultarModal()">Não</button>'+
		'</div>'+
	  '</div>';
  return {
		restrict: 'E',
		template: template,		
		link: function(scope, element, attr) {			
			scope.exibirModal = function(){
				scope.mostrarModal = true;				
			}
			scope.ocultarModal = function(){
				scope.mostrarModal = false;				
			}
			scope.removerTarefa = function(){
				TodoServices.remover(attr.index);
				scope.mostrarModal = false;		
			}			
		}
	}
});