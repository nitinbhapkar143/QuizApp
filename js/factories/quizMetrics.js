(function(){
	angular
	.module("cricketFacts")
	.factory("quizMetrics", quizFactory);

	function quizFactory(){
		var quizObj = {
			activeQuiz : false,
			changeState : changeState
		};

		return quizObj;

		function changeState(state){
			quizObj.activeQuiz = state;
		}
	}

})();