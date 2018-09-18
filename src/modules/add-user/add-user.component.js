
angular
    .module("addUser", [])
    .component('addUser', {
        templateUrl: 'modules/add-user/add-user.template.html',
        controller: ['$http', function addController($http) {
            var self = this;

            self.add = function () {

                var dataObj = {
                    name: self.name,
                    email: self.email,
                    address: self.address,
                    username: self.username,
                    password: self.password,
                    role: self.role

                };
                $http.post('http://localhost:3000/users', dataObj).
                    then(function (data, status, headers, config) {
                        self.message = data;
                        self.success = "User Added Sucessfully!"
                        self.name = '';
                        self.email = '';
                        self.address = '';
                        self.username = '';
                        self.password = '';
                        self.role = '';
                    },
                        function (data, status, headers, config) {
                            alert("failure message: " + JSON.stringify({ data: data }));
                        });
            }
        }
        ]
    });
