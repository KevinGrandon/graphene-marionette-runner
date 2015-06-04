var fs = require('fs'),
    fsPath = require('path');

var platformPaths = {
  darwin: 'Contents/MacOS'
};

/**
 * Attempts to locate binary based on runtime/platform.
 *
 *    detectBinary(
 *      '/Applications/Graphene',
 *      { product: 'graphene' },
 *      function(err, bin) {
 *          // bin === '/Applications/Graphene/Contents/MacOS/graphene'
 *      }
 *    );
 *
 * Options:
 *  - bin: "graphene" by default
 *  - platform: defaults to process.platform
 *
 * @param {String} source of product runtime.
 * @param {Object} options for detection.
 * @param {Function} callback [err, binaryPath];
 */
function detectBinary(source, options, callback) {
  if (typeof options === 'function') {
    callback = options;
    options = {};
  }

  if (!options.product) throw new Error('.product must be given');

  var platform = options.platform || process.platform;
  var dir = platformPaths[platform] || '';

  var bins = [
    fsPath.join(source, dir, options.product)
  ];

  function exists(bin) {
    fs.exists(bin, function(itDoes) {
      if (itDoes) return callback(null, bin);
      next();
    });
  }

  function next() {
    var bin = bins.shift();
    if (!bin) {
      return callback(
        new Error('cannot find "' + options.product + '" binary in ' + source)
      );
    }

    exists(bin);
  }

  next();
}

module.exports.detectBinary = detectBinary;
