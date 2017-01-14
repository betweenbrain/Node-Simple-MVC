/**
 * Project    simple-mvc
 * File       test.js
 * Created    1/14/17 9:56 AM
 * Author     Matt Thomas
 * Email      matt.thomas@searshc.com
 * Copyright  Copyright (C) 2017 Sears Holdings. All Rights Reserved.
 */

module.exports = function (app) {
    app.get('/', function (req, res) {

        var data = {
            rows: [
                {name: 'foo'},
                {name: 'bar'},
                {name: 'baz'}
            ]
        }

        res.render('test', data);
    })
}