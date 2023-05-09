'use strict';

(function () {
    function init() {
        const router = new Router([
            new Router('begin', 'form.html', true),            
            new Router('test', 'test1.html'),
            new Router('couplepage', 'couplepage.html'),
            new Router('questioncouple', 'questuiocouple.html'),
            new Router('questiondep', 'questiondep.html'),

        ]);
    }
    init();
}());