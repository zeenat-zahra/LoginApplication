
angular
    .module("loginModule", [])
    .component('loginForm', {
        templateUrl: 'modules/login/login-form.template.html',
        controller: ['$http', function LoginController($http) {
            var self = this;
            self.error = '';
            self.submit = function () {
                var i, result = '';

                $http.get('http://localhost:3000/users')
                    .then(function (response) {
                        myWelcome = response.data;

                        for (i = 0; i < myWelcome.length; i++) {
                            result = myWelcome[i];
                            if (self.username == "admin" && self.password == "pass")
                                window.location.href = "#!/adduser";
                            else if (self.username == result.username && self.password == result.password)
                                window.location.href = "welcome.html";
                            else
                                self.error = "Incorrect Credentials!!"
                        }

                    });


            }
        }
        ]
    });
