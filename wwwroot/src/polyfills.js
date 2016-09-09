"use strict";
require('es6-shim');
require('reflect-metadata');
require('jquery/dist/jquery.js');
require('ts-helpers');
require('zone.js/dist/zone');
if (process.env.ENV === 'build') {
}
else {
    // Development
    Error['stackTraceLimit'] = Infinity;
}
//# sourceMappingURL=polyfills.js.map