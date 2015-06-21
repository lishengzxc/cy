/**
 * Created by lisheng on 15/6/5.
 */
var cy = angular.module("cy", ['ngTouch']);





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
		replace: true,
		link: function(s, e, a, c) {
			//console.log(e[0].children[0].children);
		}
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

cy.directive('order', function() {
	return {
		restrict: 'E',
		templateUrl: 'tpls/order.html',
		replace: true
	}
});

cy.directive('cartrecommend', function() {
	return {
		restrict: 'E',
		templateUrl: 'tpls/cart_recommend.html',
		replace: true,
		link: function(s, e, a, c) {
			//setTimeout(function() {
			//	console.log(e[0].children);
			//}, 1);

			setInterval(function() {
				s.left()
			}, 5000);
			//console.log(e.contents());
			//e.on('click', function(event) {
			//	console.log(event.target.getAttribute('data-goodsid'));
			//})
		}
	}
});

cy.directive('helper', function() {
	return {
		restrict: 'E',
		templateUrl: 'tpls/helper.html',
		replace: true
	}
});

//cy.directive('recommenditem', function () {
//	return {
//		restrict: 'E',
//		templateUrl: 'tpls/recommenditem.html',
//		replace: true,
//		link: function(s, e, a, c) {
//			console.log(this);
//		}
//	}
//});


// 以下为各控制器

cy.controller('cyController', ['$rootScope', function($rootScope, socket) {

	$rootScope.meunsDisplay = true;
	$rootScope.cartDisplay = false;
	$rootScope.orderDisplay = false;
	$rootScope.searchDisplay = false;
	$rootScope.helperDisplay = false;

	$rootScope.noitemsDisplay = true;

	//$rootScope.meunsDisplay = false;
	//$rootScope.cartDisplay = true;
	//$rootScope.noitemsDisplay = false;


	//$rootScope.meunsDisplay = false;
	//$rootScope.cartDisplay = false;
	//$rootScope.noitemsDisplay = false;



	//$rootScope.message = '';
	//$rootScope.messages = [];
	//
	//socket.on('new:msg', function (message) {
	//	$rootScope.message.push(message);
	//});
	//
	//
	//$scope.boradcast = function() {
	//	socket.emit('broadcast:msg', {message:$scope.message});
	//	$scope.message.push($scope.message);
	//	$scope.message = '';
	//};




	$rootScope.toCart = function() {
		document.getElementsByClassName('active')[0].classList.remove('active');
		document.getElementById('cart').classList.add('active');
		$rootScope.meunsDisplay = false;
		$rootScope.cartDisplay = true;

		if (document.querySelectorAll('.recommendItem')[0].classList.contains('out')) {

		} else {
			document.querySelectorAll('.recommendItem')[0].classList.add('in');
			for (var i = 1; i < document.querySelectorAll('.recommendItem').length; i++) {
				document.querySelectorAll('.recommendItem')[i].classList.add('out');
			}
		}
		for (var i = 0; i < document.querySelectorAll('.recommendItem').length; i++) {
			if (document.querySelectorAll('.recommendItem')[i].classList.contains('in')) {
				document.querySelectorAll('.index span')[i].classList.add('current');
				break;
			}
		}
	};



	$rootScope.tonav = function ($event) {
		document.getElementsByClassName('active')[0].classList.remove('active');
		$event.target.classList.add('active');



		switch ($event.target.innerHTML) {
			case '菜单':
				$rootScope.meunsDisplay = true;
				$rootScope.cartDisplay = false;
				$rootScope.orderDisplay = false;
				$rootScope.searchDisplay = false;
				$rootScope.helperDisplay = false;
				break;
			case '购物车':
				$rootScope.meunsDisplay = false;
				$rootScope.cartDisplay = true;
				$rootScope.orderDisplay = false;
				$rootScope.searchDisplay = false;
				$rootScope.helperDisplay = false;
				if (document.querySelectorAll('.recommendItem')[0].classList.contains('out')) {

				} else {
					document.querySelectorAll('.recommendItem')[0].classList.add('in');
					for (var i = 1; i < document.querySelectorAll('.recommendItem').length; i++) {
						document.querySelectorAll('.recommendItem')[i].classList.add('out');
					}
				}
				for (var i = 0; i < document.querySelectorAll('.recommendItem').length; i++) {
					if (document.querySelectorAll('.recommendItem')[i].classList.contains('in')) {
						document.querySelectorAll('.index span')[i].classList.add('current');
						break;
					}
				}
				break;
			case '订单':
				$rootScope.meunsDisplay = false;
				$rootScope.cartDisplay = false;
				$rootScope.orderDisplay = true;
				$rootScope.searchDisplay = false;
				$rootScope.helperDisplay = false;
				break;
			case '搜索':
				$rootScope.meunsDisplay = false;
				$rootScope.cartDisplay = false;
				$rootScope.orderDisplay = false;
				$rootScope.searchDisplay = true;
				$rootScope.helperDisplay = false;
				break;
			case '帮助':
				$rootScope.meunsDisplay = false;
				$rootScope.cartDisplay = false;
				$rootScope.orderDisplay = false;
				$rootScope.searchDisplay = false;
				$rootScope.helperDisplay = true;
				break;
		}
	};

	$rootScope.toMenus = function($event) {
		document.getElementById('menus').classList.add('active');
		document.getElementById('cart').classList.remove('active');
		this.meunsDisplay = true;
		this.cartDisplay = false;
	};

	$rootScope.nowClassify = '1';

	$rootScope.classifySets = [
		{
			typeid: 1,
			typename: "热"
		},
		{
			typeid: 2,
			typename: "冷"
		},
		{
			typeid: 3,
			typename: "饮"
		},
		{
			typeid: 4,
			typename: "它"
		}
	];

	$rootScope.jumpSomeClass = function($event) {
		this.nowClassify = $event.target.id;
	};

	$rootScope.resMenus = [
		{
			id: 11,
			type: 1,
			recommend: 1,
			name: '绿豆沙',
			info: '一些其他信息',
			sales: '99',
			num: 0,
			price: '40.0'
		},
		{
			id: 2,
			type: 1,
			recommend: 1,
			name: '绿豆冰',
			info: '一些其他信息',
			sales: '99',
			num: 0,
			price: '30.0'
		},
		{
			id: 3,
			type: 3,
			recommend: 0,
			name: '3号菜',
			info: '一些其他信息',
			sales: '99',
			num: 0,
			price: '50.0'
		},
		{
			id: 4,
			type: 4,
			recommend: 0,
			name: '123123',
			info: '一些其他信息',
			sales: '99',
			num: 0,
			price: '50.0'
		},
		{
			id: 5,
			type: 4,
			recommend: 0,
			name: 'sdfasdf',
			info: '一些其他信息',
			sales: '99',
			num: 0,
			price: '50.0'
		},
		{
			id: 6,
			type: 2,
			recommend: 1,
			name: '凉拌猪耳',
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
		$rootScope.noitemsDisplay = false;
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
				$rootScope.noitemsDisplay = true;
			}
		}
	};

	$rootScope.submit = function($event) {
		console.log($rootScope.resMenus);
	};


	$rootScope.addrecomm = function($event) {
		for (var i in $rootScope.resMenus) {
			if ($rootScope.resMenus[i].id == $event.target.getAttribute('data-goodsid')) {
				$rootScope.resMenus[i].num++;
				$rootScope.count();
				$rootScope.cartDisplay = true;
				$rootScope.noitemsDisplay = false;
				break;
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
	//$scope.tonav = function ($event) {
	//	document.getElementsByClassName('active')[0].classList.remove('active');
	//	$event.target.classList.add('active');
	//
	//	switch ($event.target.innerHTML) {
	//		case '菜单':
	//			$rootScope.meunsDisplay = true;
	//			$rootScope.cartDisplay = false;
	//			break;
	//		case '购物车':
	//			$rootScope.meunsDisplay = false;
	//			$rootScope.cartDisplay = true;
	//			if (document.querySelectorAll('.recommendItem')[0].classList.contains('out')) {
	//
	//			} else {
	//				document.querySelectorAll('.recommendItem')[0].classList.add('in');
	//				for (var i = 1; i < document.querySelectorAll('.recommendItem').length; i++) {
	//					document.querySelectorAll('.recommendItem')[i].classList.add('out');
	//				}
	//			}
	//			for (var i = 0; i < document.querySelectorAll('.recommendItem').length; i++) {
	//				if (document.querySelectorAll('.recommendItem')[i].classList.contains('in')) {
	//					document.querySelectorAll('.index span')[i].classList.add('current');
	//					break;
	//				}
	//			}
	//			break;
	//	}
	//}
}]);

cy.controller('cartRecommController', ['$scope', '$rootScope', function($rootScope, $scope) {
	var animation = true;

	$scope.getIndex = function(d, e) {
		var index = 0;
		var afterindex = 0;

		for (var i = 0; i < e.length - 1; i++) {
			if (e[i].classList.contains('in')) {
				index = i;
				break;
			}
		}

		if (d === 'left') {
			afterindex = index === e.length - 2 ? 0 : index + 1;
		} else {
			afterindex = index === 0 ? e.length - 2 : index - 1;
		}

		return [index, afterindex];
	};

	$scope.slide = function(d, tmp, e) {

		if (animation) {
			animation = false;

			for (var i = 0; i < e[e.length-1].children.length; i++) {
				e[e.length-1].children[i].classList.remove('current');
			}

			e[e.length-1].children[tmp[1]].classList.add('current');

			e[tmp[0]].classList.remove('in');
			e[tmp[0]].classList.add('out');
			e[tmp[1]].classList.remove('out');
			e[tmp[1]].classList.add('in');


			if (d === 'left') {
				for (var i in tmp) {
					e[tmp[i]].classList.add('slide');
					e[tmp[i]].style.display = 'block';
				}
				setTimeout(function() {
					e[tmp[0]].classList.remove('slide');
					e[tmp[0]].style.display = 'none';
					e[tmp[1]].classList.remove('slide');
					animation = true;
				}, 350);
			} else {
				for (var i in tmp) {
					e[tmp[i]].classList.add('slidereverse');
					e[tmp[i]].style.display = 'block';
				}
				setTimeout(function() {
					e[tmp[0]].classList.remove('slidereverse');
					e[tmp[0]].style.display = 'none';
					e[tmp[1]].classList.remove('slidereverse');
					animation = true;
				}, 350);
			}
		}

	};

	$scope.left = function($event) {
		var e = document.getElementsByClassName('cartRecommend')[0].children;
		var tmp = this.getIndex('left', e);
		this.slide('left', tmp, e);
	};

	$scope.right = function($event) {
		var e = document.getElementsByClassName('cartRecommend')[0].children;
		var tmp = this.getIndex('right', e);
		this.slide('right', tmp, e);
	};


}]);


