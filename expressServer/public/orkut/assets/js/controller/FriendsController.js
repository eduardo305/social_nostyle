var app = app || app.module('orkut', []);

app.controller('FriendsController', ['$scope', 'Friendship', function($scope, Friendship) {

	Friendship.me({}, function(data) {
		$scope.friends = data;
	});

	Friendship.requests({}, function(data) {
		$scope.friendsRequests = data;
	});

	Friendship.requested({}, function(data) {
		$scope.friendsRequested = data;
	});
}]);