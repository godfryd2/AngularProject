(function() {
    var app = angular.module("myApp", []);

    app.controller('StoreController', function(){
        this.products = gems;
    });
    var gems = [
        {
            name: 'Dodecahedron',
            price: 2.95,
            description: 'As you can see, there is a TODO in the code. Let’s implement the missing mapping from request URLs to mock data. This can be done with MockConnection from the package @angular/http/testing. We check requested URLs to the fake backend and return (modified) mock data. Requests, we are not interested in, can be passed through (real remote calls).',
            canPurchase: true,
            soldOut: true,
        },
        {
            name: "Pentagonal Gem",
            price: 5.95,
            description: 'The mock Http service can be implemented with a factory method. We just need to use the following fakeBackendFactory method in place of standard Http service.',
            canPurchase: true,
            soldOut: true,
        },
        {
            name: "Normal Gem",
            price: 4.35,
            description: 'Before implementing a fake or mock Http service, we need data. Let’s create a mock database as simple array of employees objects.',
            canPurchase: true,
            soldOut: true,
        },
        {
            name: "Octagon Gem",
            price: 8.65,
            description: 'The domain model object Employee is defined by the following interface.',
            canPurchase: true,
            soldOut: true,
        },
        {
            name: "Figure",
            price: 1.99,
            description: 'Welcome to our Game Update! It’s been great seeing all the feedback you’re providing for our game!',
            canPurchase: true,
            soldOut: true,
        },
        {
            name: "Non Gem",
            price: 2.45,
            description: 'Thank you all for your patience as we continue to optimize the game for PC and enforce in-game security.',
            canPurchase: true,
            soldOut: true,
        }
    ]
})();