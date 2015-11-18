var Squeeze = require('good-squeeze').Squeeze;

module.export = function Reporter (events, config) {

    if (!(this instanceof Reporter)) {
        return new Reporter(events, config);
    }

    this.squeeze = Squeeze(events);
}

Reporter.prototype.init = function (readstream, emitter, callback) {

    readstream.pipe(this.squeeze).pipe(process.stdout);
    emitter.on('stop', function () {
        console.log('some clean up logic.');
    });
    callback();
}

Reporter.attributes = {
    name: 'reporter'
}
