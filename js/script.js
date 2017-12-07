(function() {
    var app = angular.module("myApp", []);
    
    app.controller('StoreController', function($scope){

        this.products = gems;
        this.names = names;
        
        $scope.selectedValue = null;

        $scope.setValue = function(value){
            $scope.selectedValue = value;
        };

        $scope.getValue = function(){
            return $scope.selectedValue;
        };
    });

    app.controller('PanelController', function() {

        this.tab = 1;
        this.products = gems;

        this.selectTab = function(setTab) {
            this.tab = setTab;
        }

        this.isSelected = function(checkTab) {
            return this.tab === checkTab;
        };
    });

    var names = ["Dodecahedron", "Pentagonal Gem", "Normal Gem", "Octagon Gem", "Figure", "Non Gem"]

    var gems = [
        {
            id: 0,
            name: "Dodecahedron",
            price: 2.95,
            description: 'As you can see, there is a TODO in the code. Let’s implement the missing mapping from request URLs to mock data. This can be done with MockConnection from the package @angular/http/testing. We check requested URLs to the fake backend and return (modified) mock data. Requests, we are not interested in, can be passed through (real remote calls).',
            image:
                {
                    full: 'img/image-full.png',
                    thumb: 'img/image-thumb.png',
                },
            reviews: [
                {
                    stars: 5,
                    body: "I love this product!",
                    author: "joe@thomas.com"
                },
                {
                    stars: 1,
                    body: "This product sucks!",
                    author: "tim@hater.com"
                }
            ],
            canPurchase: true,
            soldOut: true,
        },
        {
            id: 1,
            name: "Pentagonal Gem",
            price: 5.95,
            image:
                {
                    full: 'img/image-full.png',
                    thumb: 'img/image-thumb.png',
                },
            description: 'The mock Http service can be implemented with a factory method. We just need to use the following fakeBackendFactory method in place of standard Http service.',
            canPurchase: true,
            soldOut: true,
        },
        {
            id: 2,
            name: "Normal Gem",
            price: 4.35,
            image:
                {
                    full: 'img/image-full.png',
                    thumb: 'img/image-thumb.png',
                },
            description: 'Before implementing a fake or mock Http service, we need data. Let’s create a mock database as simple array of employees objects.',
            canPurchase: true,
            soldOut: true,
        },
        {
            id: 3,
            name: "Octagon Gem",
            price: 8.65,
            image:
                {
                    full: 'img/image-full.png',
                    thumb: 'img/image-thumb.png',
                },
            description: 'The domain model object Employee is defined by the following interface.',
            canPurchase: true,
            soldOut: true,
        },
        {
            id: 4,
            name: "Figure",
            price: 1.99,
            image:
                {
                    full: 'img/image-full.png',
                    thumb: 'img/image-thumb.png',
                },
            description: 'Welcome to our Game Update! It’s been great seeing all the feedback you’re providing for our game!',
            canPurchase: true,
            soldOut: true,
        },
        {
            id: 5,
            name: "Non Gem",
            price: 2.45,
            image:
                {
                    full: 'img/image-full.png',
                    thumb: 'img/image-thumb.png',
                },
            description: 'Thank you all for your patience as we continue to optimize the game for PC and enforce in-game security.',
            canPurchase: true,
            soldOut: true,
        }
    ]
})();