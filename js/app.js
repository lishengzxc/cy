/**
 * Created by lisheng on 15/6/5.
 */
var cy = angular.module("cy", []);

cy.directive('menusnav', function () {
	return {
		restrict: 'E',
		templateUrl: 'tpls/nav.html',
		replace: true
	}
});

cy.directive('menus', function() {
	return {
		restrict: 'E',
		templateUrl: 'tpls/menus.html',
		replace: true
	}
});

cy.directive('recommend', function() {
	return {
		restrict: 'E',
		templateUrl: 'tpls/recommend.html',
		replace: true
	}
});

cy.directive('classify', function () {
	return {
		restrice: 'E',
		templateUrl: 'tpls/classify.html',
		replace: true
	}
});

cy.directive('menusitemsbox', function() {
	return {
		restrice: 'E',
		templateUrl: 'tpls/menus-items-box.html',
		replace: true
	}
});

cy.directive('addcart', function() {
	return {
		restrice: 'E',
		templateUrl: 'tpls/addcart.html',
		replace: true
	}
});

cy.directive('cart', function() {
	return {
		restrice: 'E',
		templateUrl: 'tpls/cart.html',
		replace: true
	}
});

cy.directive('cartliest', function() {
	return {
		restrict: 'E',
		templateUrl: 'tpls/cartlist.html',
		replace: true
	}
});

cy.directive('poppanel', function () {
	return {
		restrict: 'E',
		templateUrl: 'tpls/poppanel.html',
		replace: true
	}
});



// 以下为各控制器

cy.controller('cyController', ['$rootScope', function($rootScope) {

	$rootScope.meunsDisplay = false;
	$rootScope.cartDisplay = true;

	$rootScope.toCart = function() {

		var a = document.querySelectorAll('.navitem');

		for (var i in a) {
			try {
				a[i].classList.remove('active');
			} catch (e) {
				continue;
			}
		}

		console.log(document.getElementById('cart').classList.add('active'));

		this.meunsDisplay = false;
		this.cartDisplay = true;

		//for (var i in this.resMenus) {
		//	if (this.resMenus[i].num > 0) {
		//		this.cartDate.push(this.resMenus[i]);
		//	}
		//}
	};

	$rootScope.resMenus = [
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
		},
		{
			id: 8,
			name: 'dsfdfv',
			info: '一些其他信息',
			sales: '99',
			num: 0,
			price: '50.0'
		},
		{
			id: 9,
			name: 'dsfdfv',
			info: '一些其他信息',
			sales: '99',
			num: 0,
			price: '50.0'
		},
		{
			id: 10,
			name: 'dsfdfv',
			info: '一些其他信息',
			sales: '99',
			num: 0,
			price: '50.0'
		},
		{
			id: 11,
			name: 'dsfdfv',
			info: '一些其他信息',
			sales: '99',
			num: 0,
			price: '50.0'
		},
		{
			id: 12,
			name: 'dsfdfv',
			info: '一些其他信息',
			sales: '99',
			num: 0,
			price: '50.0'
		},
		{
			id: 13,
			name: 'dsfdfv',
			info: '一些其他信息',
			sales: '99',
			num: 0,
			price: '50.0'
		},
		{
			id: 14,
			name: 'dsfdfv',
			info: '一些其他信息',
			sales: '99',
			num: 0,
			price: '50.0'
		},
		{
			id: 15,
			name: 'dsfdfv',
			info: '一些其他信息',
			sales: '99',
			num: 0,
			price: '50.0'
		},
		{
			id: 16,
			name: 'dsfdfv',
			info: '一些其他信息',
			sales: '99',
			num: 0,
			price: '50.0'
		},
		{
			id: 17,
			name: 'dsfdfv',
			info: '一些其他信息',
			sales: '99',
			num: 0,
			price: '50.0'
		},
		{
			id: 18,
			name: 'dsfdfv',
			info: '一些其他信息',
			sales: '99',
			num: 0,
			price: '50.0'
		},
		{
			id: 19,
			name: 'dsfdfv',
			info: '一些其他信息',
			sales: '99',
			num: 0,
			price: '50.0'
		},
		{
			id: 20,
			name: 'dsfdfv',
			info: '一些其他信息',
			sales: '99',
			num: 0,
			price: '50.0'
		},
		{
			id: 21,
			name: 'dsfdfv',
			info: '一些其他信息',
			sales: '99',
			num: 0,
			price: '50.0'
		},
		{
			id: 22,
			name: 'dsfdfv',
			info: '一些其他信息',
			sales: '99',
			num: 0,
			price: '50.0'
		}
	];
	$rootScope.cartDate = [];

	$rootScope.deliver2Cart = function (d) {
		$rootScope.cartDate.push(d);
		$rootScope.cartDate.sort(function(a, b) {
			return a.id - b.id
		});
		for (var i = 0; i < $rootScope.cartDate.length; i++) {
			if (i + 1 === $rootScope.cartDate.length) {

			} else {
				if ($rootScope.cartDate[i].id === $rootScope.cartDate[i + 1].id) {
					$rootScope.cartDate.splice(i + 1, 1);
				}
			}
		}
	};

	$rootScope.popDate = {
		id: 0,
		name: '',
		info: '',
		sales: '',
		num: 0,
		price: ''
	};

	$rootScope.totalNum = 0;
	$rootScope.totalPrice = 0;

	$rootScope.count = function() {
		$rootScope.totalNum = 0;
		$rootScope.totalPrice = 0;
		for (var i in $rootScope.resMenus) {
			$rootScope.totalNum += $rootScope.resMenus[i].num;
			$rootScope.totalPrice += $rootScope.resMenus[i].num * $rootScope.resMenus[i].price;
		}
	};

	$rootScope.add = function($event) {
		$event.stopPropagation();
		var num = this.x.num;
		$rootScope.totalNum = 0;
		$rootScope.totalPrice = 0;
		this.x.num = num >= 99 ? num : num + 1;
		this.count();
	};

	$rootScope.reduce = function($event) {
		$event.stopPropagation();
		var num = this.x.num;
		$rootScope.totalNum = 0;
		$rootScope.totalPrice = 0;
		this.x.num = num <= 0 ? num : num - 1;
		this.count();
		if (this.x.num === 0) {
			var t = 0;
			for (var i in $rootScope.resMenus) {
				t += $rootScope.resMenus[i].num;
			}
			if (t === 0) {
				// 显示用户购物车内没商品
				console.log('no');
			}
		}
	};

	$rootScope.hidepop = function($event) {
		document.getElementsByClassName('pop-panel')[0].style.display = 'none';
	}
}]);

cy.controller('menusController', ['$scope', '$rootScope', function($rootScope, $scope) {
	$scope.pop = function($event) {
		$event.stopPropagation();
		for (var i in this.x) {
			$rootScope.popDate[i] = this.x[i];
		}
		document.getElementsByClassName('pop-panel')[0].style.display = 'block';
	};
}]);

cy.controller('popController', ['$scope', '$rootScope', function($rootScope, $scope) {
	$scope.popReduce = function($event) {
		var id = $rootScope.popDate.id;
		var num = $rootScope.popDate.num;
		$rootScope.popDate.num = num <= 0 ? num : num - 1;
		for (var i in $rootScope.resMenus) {
			if (id == $rootScope.resMenus[i].id) {
				$rootScope.resMenus[i].num = $rootScope.popDate.num;
				break;
			}
		}
		$rootScope.count();
		$event.stopPropagation();
	};

	$scope.popAdd = function($event) {
		var id = $rootScope.popDate.id;
		var num = $rootScope.popDate.num;
		$rootScope.popDate.num = num >= 99 ? num : num + 1;
		for (var i in $rootScope.resMenus) {
			if (id == $rootScope.resMenus[i].id) {
				$rootScope.resMenus[i].num = $rootScope.popDate.num;
				break;
			}
		}
		$rootScope.count();
		$event.stopPropagation();
	};
}]);

cy.controller('navController', ['$scope', '$rootScope', function($rootScope, $scope) {
	$scope.tonav = function ($event) {
		document.getElementsByClassName('active')[0].classList.remove('active');
		$event.target.classList.add('active');

		switch ($event.target.innerHTML) {
			case '菜单':
				$rootScope.meunsDisplay = true;
				$rootScope.cartDisplay = false;
				break;
			case '购物车':
				$rootScope.meunsDisplay = false;
				$rootScope.cartDisplay = true;
				break
		}
	}
}]);


