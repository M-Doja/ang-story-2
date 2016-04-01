(function() {
	'use strict';
	angular.module('app')
	.controller('HomeController', HomeController);

	function HomeController($state, HomeFactory) {
		var vm = this;
		vm.title = 'Welcome to TraveLaws';
		vm.showLaws = true;
		vm.States = HomeFactory.States;

		
  		// {state: 'DELAWARE', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'FLORIDA', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'GEORGIA', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'HAWAII', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'IDAHO', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'ILLINOIS', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'INDIANA', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'IOWA', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
  		// {state: 'KANSAS', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'KENTUCKY', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'LOUISIANA', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'MAINE', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'MARYLAND', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'MASSACHUSETTS', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'MICHIGAN', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
  		// {state: 'MINNESOTA', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'MISSISSIPPI', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'MISSOURI', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'MONTANA', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'NEBRASKA', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'NEVADA', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'NEW HAMPSHIRE', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			//  	{state: 'NEW JERSEY', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'NEW MEXICO', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'NEW YORK', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'NORTH CAROLINA', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'NORTH DAKOTA', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'OHIO', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'OKLAHOMA', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
    	// {state: 'OREGON', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'PENNSYLVANIA', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'RHODE ISLAND', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'SOUTH CAROLINA', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'SOUTH DAKOTA', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'TENNESSEE', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'TEXAS', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'UTAH', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
      // {state: 'VERMONT', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'VIRGINIA', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'WASHINGTON', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'WEST_VIRGINIA', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'WISCONSIN', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}},
			// {state: 'WYOMING', image: 'w', laws: {gen: 'www', traf: 'www', gun: 'www', bus: 'www'}}
// ];
//
// for (var i = 0; i < vm.States.length; i++) {
// 	for(var prop in vm.States[i]){
// 		// console.log(vm.States[i][prop]);
//     	for(var prop2 in vm.States[i][prop]){
// 				// console.log(vm.States[i][prop][prop2]);
// 		}
// 	}
// }



	}
})();
