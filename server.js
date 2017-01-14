/**
 * Project    simple-mvc
 * File       server.js
 * Created    1/14/17 8:24 AM
 * Author     Matt Thomas
 * Email      matt.thomas@searshc.com
 * Copyright  Copyright (C) 2017 Sears Holdings. All Rights Reserved.
 */

const express  = require('express');
const enrouten = require('express-enrouten');

var app = express();
app.use(enrouten({directory: 'routes'}));

app.listen(8080)