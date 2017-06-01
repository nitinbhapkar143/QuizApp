(function(){
	angular
	.module("cricketFacts")
	.controller("quizCtrl", quizController);

	quizController.$inject = ['quizMetrics','dataService'];

	function quizController(quizMetrics, dataService){
		var vm = this;
		vm.quizMetrics = quizMetrics;
		vm.dataService = dataService;
		vm.activeQuestion = 0;
		vm.quizEnd	 = false;
		vm.submitAndNextQuestion = submitAndNextQuestion;
		vm.previousQuestion =previousQuestion;
		vm.changeSelected = changeSelected;
		vm.clearAnswer = clearAnswer;
		vm.gotoQuestion = gotoQuestion;
		vm.increaseAnswered = increaseAnswered;
		var quizLength = dataService.quizData.length;
		var questionAnswered = 0;
		var count = 0;

		function increaseAnswered(){
			if(dataService.quizData[vm.activeQuestion].selected !== null && questionAnswered <= quizLength){
				++questionAnswered;	
			}
		}

		function gotoQuestion(index){
			vm.activeQuestion = index;
			vm.quizEnd = false;
		}

		function clearAnswer(){
			dataService.quizData[vm.activeQuestion].selected = null;
			--questionAnswered;
		}	

		function changeSelected(index){
			dataService.quizData[vm.activeQuestion].selected = index;
		}

		function previousQuestion(){
			while(1){
				vm.activeQuestion = vm.activeQuestion > 0 ? --vm.activeQuestion: quizLength - 1;
				if(dataService.quizData[vm.activeQuestion].selected === null){
					break;
				}
			}
		}
		function submitAndNextQuestion(){
			count = 0;
			while(1){
				if(count === 0){
					vm.increaseAnswered();
					count++;
				}
				vm.activeQuestion = vm.activeQuestion < quizLength - 1 ? ++vm.activeQuestion : 0;
				console.log("Qno : " + vm.activeQuestion + "QAns : " + questionAnswered + "len : " + dataService.quizData.length);
				if(vm.activeQuestion == 0){
					if(questionAnswered >= dataService.quizData.length){
								vm.quizEnd = true;
								break;
					}
				}

				if(dataService.quizData[vm.activeQuestion].selected === null){
					break;
				}

			}
			//dataService.quizData[vm.activeQuestion].selected = 'yes';
			//vm.activeQuestion += 1;
		}
	}

})();