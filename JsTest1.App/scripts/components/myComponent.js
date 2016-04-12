'use strict';
function MyComponentController() {

}

app.component('myComponent', {
    templateUrl: 'scripts/components/myComponent.html',
    controller: MyComponentController,
    bindings: {
        hero: '=',
        something: '=',  
        myTime: '='
    }
});