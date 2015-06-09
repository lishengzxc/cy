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
			// 左右侧滑效果
			e[0].children[0].style.display = 'block';
			for (var i = 1; i < e[0].children.length - 1; i++) {
				e[0].children[i].style.display = 'none';
			}
			var index = 0;
			var animationFlag = true;
			var startX = 0;
			var direction = 'left';

			var slideStep1 = function(index, s, d) {
				s[index].style.display = 'block';
				if (d === 'left') {
					s[index].classList.add('slide', 'out');
					if (index !== s.length - 2) {
						s[index + 1].style.display = 'block';
						s[index + 1].classList.add('in', 'slide');
					} else {
						s[0].style.display = 'block';
						s[0].classList.add('in', 'slide');
					}
				} else {
					s[index].classList.add('slide', 'out', 'reverse');
					if (index !== 0) {
						s[index - 1].style.display = 'block';
						s[index - 1].classList.remove('out');
						s[index - 1].classList.add('in', 'slide', 'reverse');
					} else {
						s[s.length - 2].style.display = 'block';
						s[s.length - 2].classList.remove('out');
						s[s.length - 2].classList.add('in', 'slide', 'reverse');
					}
				}
			};

			var slideStpe2 = function(index, s, d) {
				//s[index].classList.remove('slide', 'reverse');
				s[index].classList.remove('slide', 'out');
				s[index].style.display = 'none';
				s[index + 1].classList.remove('slide', 'in');
				s[index + 1].style.display = 'block';

				if (d === 'left') {
					if (index !== s.length - 2) {
						s[index + 1].classList.remove('slide');
					} else {
						s[0].classList.remove('slide');
					}
				} else {
					if (index !== 0) {
						s[index - 1].classList.remove('slide', 'reverse');
					} else {
						s[s.length - 2].classList.remove('slide', 'reverse');
					}
				}
			};

			var moveIndex = function(index, s, d) {
				s[s.length - 1].children[index].classList.remove('current');
				if (d === 'left') {
					var ti = index === s.length - 2 ? 0 : index + 1;
					s[s.length - 1].children[ti].classList.add('current');
				} else {
					var ti = index === 0 ? s.length - 2 : index - 1;
					s[s.length - 1].children[ti].classList.add('current');
				}
			};

			var slide = function(event) {
				if (!event) {
					direction = 'left';
				} else {
					if (startX - event.touches[0].pageX > 0) {
						direction = 'left'
					} else {
						direction = 'right'
					}
				}
				if (animationFlag) {
					animationFlag = false;
					var s = e[0].children;
					index = 0;
					for (var i = 0; i < s.length - 1; i++) {
						if (s[i].classList.contains('in')) {
							index = i;
							break;
						}
					}
					slideStep1(index, s, direction);
					setTimeout(function() {
						slideStpe2(index, s, direction);
						moveIndex(index, s, direction);
						animationFlag = true;
					}, 350);
				}
			};
			e.on('touchstart', function(event) {
				startX = event.touches[0].pageX;
			});
			e.on('touchmove', slide);
			//e.on('webkitAnimationEnd', function(event) {
			//	var s = e[0].children;
			//	slideStpe2(index, s, direction);
			//	moveIndex(index, s, direction);
			//	animationFlag = true;
			//});
			//e.on('animationend', function(event) {
			//	var s = e[0].children;
			//	slideStpe2(index, s, direction);
			//	moveIndex(index, s, direction);
			//	animationFlag = true;
			//});
			setInterval(slide, 2000);

			// 点击添加

		}
	}
});


// 以下为各控制器

cy.controller('cyController', ['$rootScope', function($rootScope) {

	$rootScope.meunsDisplay = true;
	$rootScope.cartDisplay = false;
	$rootScope.noitemsDisplay = true;

	//$rootScope.meunsDisplay = false;
	//$rootScope.cartDisplay = true;
	//$rootScope.noitemsDisplay = false;

	$rootScope.toCart = function() {

		var a = document.querySelectorAll('.navitem');

		for (var i in a) {
			try {
				a[i].classList.remove('active');
			} catch (e) {
				continue;
			}
		}

		document.getElementById('cart').classList.add('active');

		this.meunsDisplay = false;
		this.cartDisplay = true;
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
			id: 1,
			type: 1,
			name: '1号菜',
			info: '一些其他信息',
			sales: '99',
			num: 0,
			price: '40.0'
		},
		{
			id: 2,
			type: 1,
			name: '2号菜',
			info: '一些其他信息',
			sales: '99',
			num: 0,
			price: '30.0'
		},
		{
			id: 3,
			type: 3,
			name: '3号菜',
			info: '一些其他信息',
			sales: '99',
			num: 0,
			price: '50.0'
		},
		{
			id: 4,
			type: 4,
			name: '123123',
			info: '一些其他信息',
			sales: '99',
			num: 0,
			price: '50.0'
		},
		{
			id: 5,
			type: 4,
			name: 'sdfasdf',
			info: '一些其他信息',
			sales: '99',
			num: 0,
			price: '50.0'
		},
		{
			id: 6,
			type: 2,
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


