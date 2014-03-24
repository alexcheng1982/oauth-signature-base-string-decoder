function DecoderCtrl($scope) {
	$scope.decode = function () {
		$scope.hasError = false;
		var parts = $scope.input.split('&');
		if (parts.length < 3) {
			$scope.hasError = true;
			$scope.errorMessage = "Invalid input format, please check.";
			return;
		}
		$scope.httpMethod = parts[0];
		$scope.url = decodeURIComponent(parts[1]);
		var paramString = decodeURIComponent(parts[2]);
		$scope.parameters = URI('?' + paramString).query(true);
	}
}