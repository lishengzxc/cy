/**
 * Created by lisheng on 15/6/4.
 */

var cy = angular.module("cy", []);

cy.controller('menusController', ['$scope', '$rootScope', function($rootScope, $scope) {
	$rootScope.dt = [
		{
			id: 1,
			name: '1号菜',
			info: '一些其他信息',
			sales: '99',
			num: 0,
			price: '40.0'
		},
		{
			id: 2,
			name: '2号菜',
			info: '一些其他信息',
			sales: '99',
			num: 0,
			price: '30.0'
		},
		{
			id: 3,
			name: '3号菜',
			info: '一些其他信息',
			sales: '99',
			num: 0,
			price: '50.0'
		},
		{
			id: 4,
			name: '123123',
			info: '一些其他信息',
			sales: '99',
			num: 0,
			price: '50.0'
		},
		{
			id: 5,
			name: 'sdfasdf',
			info: '一些其他信息',
			sales: '99',
			num: 0,
			price: '50.0'
		},
		{
			id: 6,
			name: 'ewr',
			info: '一些其他信息',
			sales: '99',
			num: 0,
			price: '50.0'
		},
		{
			id: 7,
			name: 'dsfdfv',
			info: '一些其他信息',
			sales: '99',
			num: 0,
			price: '50.0'
		}
	];

	$rootScope.popDate = {
		id: 0,
		name: '',
		price: '',
		info: '',
		price: ''
	};

	$scope.hidepop = function($event) {
		document.getElementsByClassName('pop-panel')[0].style.display = 'none';
	}
}]);

cy.controller('menusItemController', ['$scope', '$rootScope', function($rootScope, $scope) {

	$scope.add = function($event) {
		var num = this.x.num;
		this.x.num = num >= 99 ? num : num + 1;
		$event.stopPropagation();
	};
	$scope.reduce = function($event) {
		var num = this.x.num;
		this.x.num = num <= 0 ? num : num - 1;
		$event.stopPropagation();
	};
	$scope.pop = function($event) {
		var id = $event.target.getAttribute('data-Id');

		for (var i in $rootScope.dt) {
			if (id == $rootScope.dt[i].id) {
				for(var j in $rootScope.dt[i]) {
					$rootScope.popDate[j] = $rootScope.dt[i][j];
				}
			}
		}

		document.getElementsByClassName('pop-panel')[0].style.display = 'block';
		$event.stopPropagation();
	};
}]);

cy.directive('itemlist', function () {
	return {
		restrict: "E",
		templateUrl: 'tpls/itemslist.html',
		replace: true
	}
});

cy.controller('cartController', ['$scope', function($scope) {

	$scope.get = function () {
		console.log(this.dt);
	}
}]);

cy.directive('cartliest', function() {
	return {
		restrict: 'E',
		templateUrl: 'tpls/cartlist.html',
		replace: true
	}
});

cy.controller('popController', ['$scope', '$rootScope', function($rootScope, $scope) {

}]);

cy.directive('poppanel', function () {
	return {
		restrict: 'E',
		templateUrl: 'tpls/poppanel.html',
		replace: true
	}
});

