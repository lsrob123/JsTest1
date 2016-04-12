'use strict';
function HeroDetailController() {
}

app.component('heroDetail', {
    templateUrl: 'scripts/components/heroDetail.html',
    controller: HeroDetailController,
    bindings: {
        hero: '=',
        something: '=',
        myTime: '=',
        numberC: '='
    }
});
