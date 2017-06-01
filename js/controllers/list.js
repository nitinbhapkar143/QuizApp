(function(){
	angular
	.module("cricketFacts")
	.controller("listCtrl", ListController);

    ListController.$inject = ['quizMetrics','dataService'];

	function ListController(quizMetrics, dataService){
		var vm = this;
        vm.quizMetrics = quizMetrics;
		vm.data = dataService.turtleData;
		vm.activeTurtle = {};
		vm.search = "";
		vm.getActiveTurtle = getActiveTurtle;
        vm.showQuiz = showQuiz;

		function getActiveTurtle(index){
			vm.activeTurtle = index;
		}

        function showQuiz(){
            quizMetrics.changeState(true); 
        }
	}

})();