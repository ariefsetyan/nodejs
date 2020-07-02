'use strict';
module.exports = function(app){
    var jsonku = require('./Controller');
    app.route('/').get(jsonku.index);
    app.route('/getData').get(jsonku.getData);
    app.route('/postData').post(jsonku.postData);
    app.route('/updateData').post(jsonku.updateData);
    app.route('/deleteData').delete(jsonku.deleteData);
}