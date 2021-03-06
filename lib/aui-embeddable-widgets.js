(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("auiEmbeddableWidgets", [], factory);
	else if(typeof exports === 'object')
		exports["auiEmbeddableWidgets"] = factory();
	else
		root["auiEmbeddableWidgets"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/base64-js/index.js":
/*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  for (var i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ "./node_modules/buffer/index.js":
/*!**************************************!*\
  !*** ./node_modules/buffer/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(/*! base64-js */ "./node_modules/base64-js/index.js")
var ieee754 = __webpack_require__(/*! ieee754 */ "./node_modules/ieee754/index.js")
var isArray = __webpack_require__(/*! isarray */ "./node_modules/isarray/index.js")

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/core-js/modules/_a-function.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_add-to-unscopables.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_add-to-unscopables.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_advance-string-index.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_advance-string-index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/modules/_string-at.js")(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-includes.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_classof.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_classof.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_cof.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_core.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.9' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_ctx.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_defined.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_descriptors.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_dom-create.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/modules/_enum-bug-keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/modules/_enum-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-keys.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_export.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/modules/_fails.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_fix-re-wks.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_fix-re-wks.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(/*! ./es6.regexp.exec */ "./node_modules/core-js/modules/es6.regexp.exec.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
var regexpExec = __webpack_require__(/*! ./_regexp-exec */ "./node_modules/core-js/modules/_regexp-exec.js");

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_flags.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_flags.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_function-to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_function-to-string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('native-function-to-string', Function.toString);


/***/ }),

/***/ "./node_modules/core-js/modules/_global.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_has.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_hide.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_html.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_html.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/modules/_ie8-dom-define.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_iobject.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-array.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-regexp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-regexp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var MATCH = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-create.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-create.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-define.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-define.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-step.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-step.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iterators.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iterators.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/modules/_library.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/modules/_meta.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_meta.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-assign.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-assign.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-create.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-create.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dps.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dps.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopd.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopd.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn-ext.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn-ext.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gops.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gops.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gpo.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gpo.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys-internal.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-pie.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-pie.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-sap.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-sap.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-to-array.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-to-array.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var isEnum = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js").f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || isEnum.call(O, key)) {
        result.push(isEntries ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_property-desc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var SRC = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('src');
var $toString = __webpack_require__(/*! ./_function-to-string */ "./node_modules/core-js/modules/_function-to-string.js");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "./node_modules/core-js/modules/_regexp-exec-abstract.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_regexp-exec-abstract.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_regexp-exec.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_regexp-exec.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexpFlags = __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "./node_modules/core-js/modules/_set-proto.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_set-proto.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js")(Function.call, __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-to-string-tag.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared-key.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_shared-key.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/modules/_species-constructor.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_species-constructor.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-at.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-at.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-absolute-index.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-iobject.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-length.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-primitive.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/modules/_uid.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_wks-define.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-define.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/modules/_wks-ext.js");
var defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_wks-ext.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-ext.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");


/***/ }),

/***/ "./node_modules/core-js/modules/_wks.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/modules/_iter-step.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/core-js/modules/es6.function.name.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.name.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.assign.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.assign.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(/*! ./_object-assign */ "./node_modules/core-js/modules/_object-assign.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.keys.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.set-prototype-of.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.set-prototype-of.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/modules/_set-proto.js").set });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.to-string.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.3.6 Object.prototype.toString()
var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var test = {};
test[__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.exec.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.exec.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpExec = __webpack_require__(/*! ./_regexp-exec */ "./node_modules/core-js/modules/_regexp-exec.js");
__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js")({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.split.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.split.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isRegExp = __webpack_require__(/*! ./_is-regexp */ "./node_modules/core-js/modules/_is-regexp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");
var advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ "./node_modules/core-js/modules/_advance-string-index.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var callRegExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");
var regexpExec = __webpack_require__(/*! ./_regexp-exec */ "./node_modules/core-js/modules/_regexp-exec.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var $min = Math.min;
var $push = [].push;
var $SPLIT = 'split';
var LENGTH = 'length';
var LAST_INDEX = 'lastIndex';
var MAX_UINT32 = 0xffffffff;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { RegExp(MAX_UINT32, 'y'); });

// @@split logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return $split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy[LAST_INDEX];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
    };
  } else {
    internalSplit = $split;
  }

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = defined(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.symbol.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/es6.symbol.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var META = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").KEY;
var $fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/modules/_wks-ext.js");
var wksDefine = __webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/modules/_wks-define.js");
var enumKeys = __webpack_require__(/*! ./_enum-keys */ "./node_modules/core-js/modules/_enum-keys.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var _create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/core-js/modules/_object-gopn-ext.js");
var $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var $GOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js").f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.values.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.values.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $values = __webpack_require__(/*! ./_object-to-array */ "./node_modules/core-js/modules/_object-to-array.js")(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.symbol.async-iterator.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.symbol.async-iterator.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/modules/_wks-define.js")('asyncIterator');


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom.iterable.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom.iterable.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__(/*! ./es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ "./node_modules/hi-base32/src/base32.js":
/*!**********************************************!*\
  !*** ./node_modules/hi-base32/src/base32.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, global) {var __WEBPACK_AMD_DEFINE_RESULT__;/*
 * [hi-base32]{@link https://github.com/emn178/hi-base32}
 *
 * @version 0.5.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2015-2018
 * @license MIT
 */
/*jslint bitwise: true */
(function () {
  'use strict';

  var root = typeof window === 'object' ? window : {};
  var NODE_JS = !root.HI_BASE32_NO_NODE_JS && typeof process === 'object' && process.versions && process.versions.node;
  if (NODE_JS) {
    root = global;
  }
  var COMMON_JS = !root.HI_BASE32_NO_COMMON_JS && typeof module === 'object' && module.exports;
  var AMD =  true && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js");
  var BASE32_ENCODE_CHAR = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567'.split('');
  var BASE32_DECODE_CHAR = {
    'A': 0, 'B': 1, 'C': 2, 'D': 3, 'E': 4, 'F': 5, 'G': 6, 'H': 7, 'I': 8,
    'J': 9, 'K': 10, 'L': 11, 'M': 12, 'N': 13, 'O': 14, 'P': 15, 'Q': 16,
    'R': 17, 'S': 18, 'T': 19, 'U': 20, 'V': 21, 'W': 22, 'X': 23, 'Y': 24,
    'Z': 25, '2': 26, '3': 27, '4': 28, '5': 29, '6': 30, '7': 31
  };

  var blocks = [0, 0, 0, 0, 0, 0, 0, 0];

  var throwInvalidUtf8 = function (position, partial) {
    if (partial.length > 10) {
      partial = '...' + partial.substr(-10);
    }
    var err = new Error('Decoded data is not valid UTF-8.'
      + ' Maybe try base32.decode.asBytes()?'
      + ' Partial data after reading ' + position + ' bytes: ' + partial + ' <-');
    err.position = position;
    throw err;
  };

  var toUtf8String = function (bytes) {
    var str = '', length = bytes.length, i = 0, followingChars = 0, b, c;
    while (i < length) {
      b = bytes[i++];
      if (b <= 0x7F) {
        str += String.fromCharCode(b);
        continue;
      } else if (b > 0xBF && b <= 0xDF) {
        c = b & 0x1F;
        followingChars = 1;
      } else if (b <= 0xEF) {
        c = b & 0x0F;
        followingChars = 2;
      } else if (b <= 0xF7) {
        c = b & 0x07;
        followingChars = 3;
      } else {
        throwInvalidUtf8(i, str);
      }

      for (var j = 0; j < followingChars; ++j) {
        b = bytes[i++];
        if (b < 0x80 || b > 0xBF) {
          throwInvalidUtf8(i, str);
        }
        c <<= 6;
        c += b & 0x3F;
      }
      if (c >= 0xD800 && c <= 0xDFFF) {
        throwInvalidUtf8(i, str);
      }
      if (c > 0x10FFFF) {
        throwInvalidUtf8(i, str);
      }

      if (c <= 0xFFFF) {
        str += String.fromCharCode(c);
      } else {
        c -= 0x10000;
        str += String.fromCharCode((c >> 10) + 0xD800);
        str += String.fromCharCode((c & 0x3FF) + 0xDC00);
      }
    }
    return str;
  };

  var decodeAsBytes = function (base32Str) {
    if (!/^[A-Z2-7=]+$/.test(base32Str)) {
      throw new Error('Invalid base32 characters');
    }
    base32Str = base32Str.replace(/=/g, '');
    var v1, v2, v3, v4, v5, v6, v7, v8, bytes = [], index = 0, length = base32Str.length;

    // 4 char to 3 bytes
    for (var i = 0, count = length >> 3 << 3; i < count;) {
      v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v3 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v4 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v5 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v6 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v7 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v8 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      bytes[index++] = (v1 << 3 | v2 >>> 2) & 255;
      bytes[index++] = (v2 << 6 | v3 << 1 | v4 >>> 4) & 255;
      bytes[index++] = (v4 << 4 | v5 >>> 1) & 255;
      bytes[index++] = (v5 << 7 | v6 << 2 | v7 >>> 3) & 255;
      bytes[index++] = (v7 << 5 | v8) & 255;
    }

    // remain bytes
    var remain = length - count;
    if (remain === 2) {
      v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      bytes[index++] = (v1 << 3 | v2 >>> 2) & 255;
    } else if (remain === 4) {
      v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v3 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v4 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      bytes[index++] = (v1 << 3 | v2 >>> 2) & 255;
      bytes[index++] = (v2 << 6 | v3 << 1 | v4 >>> 4) & 255;
    } else if (remain === 5) {
      v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v3 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v4 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v5 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      bytes[index++] = (v1 << 3 | v2 >>> 2) & 255;
      bytes[index++] = (v2 << 6 | v3 << 1 | v4 >>> 4) & 255;
      bytes[index++] = (v4 << 4 | v5 >>> 1) & 255;
    } else if (remain === 7) {
      v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v3 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v4 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v5 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v6 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v7 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      bytes[index++] = (v1 << 3 | v2 >>> 2) & 255;
      bytes[index++] = (v2 << 6 | v3 << 1 | v4 >>> 4) & 255;
      bytes[index++] = (v4 << 4 | v5 >>> 1) & 255;
      bytes[index++] = (v5 << 7 | v6 << 2 | v7 >>> 3) & 255;
    }
    return bytes;
  };

  var encodeAscii = function (str) {
    var v1, v2, v3, v4, v5, base32Str = '', length = str.length;
    for (var i = 0, count = parseInt(length / 5) * 5; i < count;) {
      v1 = str.charCodeAt(i++);
      v2 = str.charCodeAt(i++);
      v3 = str.charCodeAt(i++);
      v4 = str.charCodeAt(i++);
      v5 = str.charCodeAt(i++);
      base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] +
        BASE32_ENCODE_CHAR[(v1 << 2 | v2 >>> 6) & 31] +
        BASE32_ENCODE_CHAR[(v2 >>> 1) & 31] +
        BASE32_ENCODE_CHAR[(v2 << 4 | v3 >>> 4) & 31] +
        BASE32_ENCODE_CHAR[(v3 << 1 | v4 >>> 7) & 31] +
        BASE32_ENCODE_CHAR[(v4 >>> 2) & 31] +
        BASE32_ENCODE_CHAR[(v4 << 3 | v5 >>> 5) & 31] +
        BASE32_ENCODE_CHAR[v5 & 31];
    }

    // remain char
    var remain = length - count;
    if (remain === 1) {
      v1 = str.charCodeAt(i);
      base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] +
        BASE32_ENCODE_CHAR[(v1 << 2) & 31] +
        '======';
    } else if (remain === 2) {
      v1 = str.charCodeAt(i++);
      v2 = str.charCodeAt(i);
      base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] +
        BASE32_ENCODE_CHAR[(v1 << 2 | v2 >>> 6) & 31] +
        BASE32_ENCODE_CHAR[(v2 >>> 1) & 31] +
        BASE32_ENCODE_CHAR[(v2 << 4) & 31] +
        '====';
    } else if (remain === 3) {
      v1 = str.charCodeAt(i++);
      v2 = str.charCodeAt(i++);
      v3 = str.charCodeAt(i);
      base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] +
        BASE32_ENCODE_CHAR[(v1 << 2 | v2 >>> 6) & 31] +
        BASE32_ENCODE_CHAR[(v2 >>> 1) & 31] +
        BASE32_ENCODE_CHAR[(v2 << 4 | v3 >>> 4) & 31] +
        BASE32_ENCODE_CHAR[(v3 << 1) & 31] +
        '===';
    } else if (remain === 4) {
      v1 = str.charCodeAt(i++);
      v2 = str.charCodeAt(i++);
      v3 = str.charCodeAt(i++);
      v4 = str.charCodeAt(i);
      base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] +
        BASE32_ENCODE_CHAR[(v1 << 2 | v2 >>> 6) & 31] +
        BASE32_ENCODE_CHAR[(v2 >>> 1) & 31] +
        BASE32_ENCODE_CHAR[(v2 << 4 | v3 >>> 4) & 31] +
        BASE32_ENCODE_CHAR[(v3 << 1 | v4 >>> 7) & 31] +
        BASE32_ENCODE_CHAR[(v4 >>> 2) & 31] +
        BASE32_ENCODE_CHAR[(v4 << 3) & 31] +
        '=';
    }
    return base32Str;
  };

  var encodeUtf8 = function (str) {
    var v1, v2, v3, v4, v5, code, end = false, base32Str = '',
      index = 0, i, start = 0, bytes = 0, length = str.length;
    do {
      blocks[0] = blocks[5];
      blocks[1] = blocks[6];
      blocks[2] = blocks[7];
      for (i = start; index < length && i < 5; ++index) {
        code = str.charCodeAt(index);
        if (code < 0x80) {
          blocks[i++] = code;
        } else if (code < 0x800) {
          blocks[i++] = 0xc0 | (code >> 6);
          blocks[i++] = 0x80 | (code & 0x3f);
        } else if (code < 0xd800 || code >= 0xe000) {
          blocks[i++] = 0xe0 | (code >> 12);
          blocks[i++] = 0x80 | ((code >> 6) & 0x3f);
          blocks[i++] = 0x80 | (code & 0x3f);
        } else {
          code = 0x10000 + (((code & 0x3ff) << 10) | (str.charCodeAt(++index) & 0x3ff));
          blocks[i++] = 0xf0 | (code >> 18);
          blocks[i++] = 0x80 | ((code >> 12) & 0x3f);
          blocks[i++] = 0x80 | ((code >> 6) & 0x3f);
          blocks[i++] = 0x80 | (code & 0x3f);
        }
      }
      bytes += i - start;
      start = i - 5;
      if (index === length) {
        ++index;
      }
      if (index > length && i < 6) {
        end = true;
      }
      v1 = blocks[0];
      if (i > 4) {
        v2 = blocks[1];
        v3 = blocks[2];
        v4 = blocks[3];
        v5 = blocks[4];
        base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] +
          BASE32_ENCODE_CHAR[(v1 << 2 | v2 >>> 6) & 31] +
          BASE32_ENCODE_CHAR[(v2 >>> 1) & 31] +
          BASE32_ENCODE_CHAR[(v2 << 4 | v3 >>> 4) & 31] +
          BASE32_ENCODE_CHAR[(v3 << 1 | v4 >>> 7) & 31] +
          BASE32_ENCODE_CHAR[(v4 >>> 2) & 31] +
          BASE32_ENCODE_CHAR[(v4 << 3 | v5 >>> 5) & 31] +
          BASE32_ENCODE_CHAR[v5 & 31];
      } else if (i === 1) {
        base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] +
          BASE32_ENCODE_CHAR[(v1 << 2) & 31] +
          '======';
      } else if (i === 2) {
        v2 = blocks[1];
        base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] +
          BASE32_ENCODE_CHAR[(v1 << 2 | v2 >>> 6) & 31] +
          BASE32_ENCODE_CHAR[(v2 >>> 1) & 31] +
          BASE32_ENCODE_CHAR[(v2 << 4) & 31] +
          '====';
      } else if (i === 3) {
        v2 = blocks[1];
        v3 = blocks[2];
        base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] +
          BASE32_ENCODE_CHAR[(v1 << 2 | v2 >>> 6) & 31] +
          BASE32_ENCODE_CHAR[(v2 >>> 1) & 31] +
          BASE32_ENCODE_CHAR[(v2 << 4 | v3 >>> 4) & 31] +
          BASE32_ENCODE_CHAR[(v3 << 1) & 31] +
          '===';
      } else {
        v2 = blocks[1];
        v3 = blocks[2];
        v4 = blocks[3];
        base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] +
          BASE32_ENCODE_CHAR[(v1 << 2 | v2 >>> 6) & 31] +
          BASE32_ENCODE_CHAR[(v2 >>> 1) & 31] +
          BASE32_ENCODE_CHAR[(v2 << 4 | v3 >>> 4) & 31] +
          BASE32_ENCODE_CHAR[(v3 << 1 | v4 >>> 7) & 31] +
          BASE32_ENCODE_CHAR[(v4 >>> 2) & 31] +
          BASE32_ENCODE_CHAR[(v4 << 3) & 31] +
          '=';
      }
    } while (!end);
    return base32Str;
  };

  var encodeBytes = function (bytes) {
    var v1, v2, v3, v4, v5, base32Str = '', length = bytes.length;
    for (var i = 0, count = parseInt(length / 5) * 5; i < count;) {
      v1 = bytes[i++];
      v2 = bytes[i++];
      v3 = bytes[i++];
      v4 = bytes[i++];
      v5 = bytes[i++];
      base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] +
        BASE32_ENCODE_CHAR[(v1 << 2 | v2 >>> 6) & 31] +
        BASE32_ENCODE_CHAR[(v2 >>> 1) & 31] +
        BASE32_ENCODE_CHAR[(v2 << 4 | v3 >>> 4) & 31] +
        BASE32_ENCODE_CHAR[(v3 << 1 | v4 >>> 7) & 31] +
        BASE32_ENCODE_CHAR[(v4 >>> 2) & 31] +
        BASE32_ENCODE_CHAR[(v4 << 3 | v5 >>> 5) & 31] +
        BASE32_ENCODE_CHAR[v5 & 31];
    }

    // remain char
    var remain = length - count;
    if (remain === 1) {
      v1 = bytes[i];
      base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] +
        BASE32_ENCODE_CHAR[(v1 << 2) & 31] +
        '======';
    } else if (remain === 2) {
      v1 = bytes[i++];
      v2 = bytes[i];
      base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] +
        BASE32_ENCODE_CHAR[(v1 << 2 | v2 >>> 6) & 31] +
        BASE32_ENCODE_CHAR[(v2 >>> 1) & 31] +
        BASE32_ENCODE_CHAR[(v2 << 4) & 31] +
        '====';
    } else if (remain === 3) {
      v1 = bytes[i++];
      v2 = bytes[i++];
      v3 = bytes[i];
      base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] +
        BASE32_ENCODE_CHAR[(v1 << 2 | v2 >>> 6) & 31] +
        BASE32_ENCODE_CHAR[(v2 >>> 1) & 31] +
        BASE32_ENCODE_CHAR[(v2 << 4 | v3 >>> 4) & 31] +
        BASE32_ENCODE_CHAR[(v3 << 1) & 31] +
        '===';
    } else if (remain === 4) {
      v1 = bytes[i++];
      v2 = bytes[i++];
      v3 = bytes[i++];
      v4 = bytes[i];
      base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] +
        BASE32_ENCODE_CHAR[(v1 << 2 | v2 >>> 6) & 31] +
        BASE32_ENCODE_CHAR[(v2 >>> 1) & 31] +
        BASE32_ENCODE_CHAR[(v2 << 4 | v3 >>> 4) & 31] +
        BASE32_ENCODE_CHAR[(v3 << 1 | v4 >>> 7) & 31] +
        BASE32_ENCODE_CHAR[(v4 >>> 2) & 31] +
        BASE32_ENCODE_CHAR[(v4 << 3) & 31] +
        '=';
    }
    return base32Str;
  };

  var encode = function (input, asciiOnly) {
    var notString = typeof(input) !== 'string';
    if (notString && input.constructor === ArrayBuffer) {
      input = new Uint8Array(input);
    }
    if (notString) {
      return encodeBytes(input);
    } else if (asciiOnly) {
      return encodeAscii(input);
    } else {
      return encodeUtf8(input);
    }
  };

  var decode = function (base32Str, asciiOnly) {
    if (!asciiOnly) {
      return toUtf8String(decodeAsBytes(base32Str));
    }
    if (!/^[A-Z2-7=]+$/.test(base32Str)) {
      throw new Error('Invalid base32 characters');
    }
    var v1, v2, v3, v4, v5, v6, v7, v8, str = '', length = base32Str.indexOf('=');
    if (length === -1) {
      length = base32Str.length;
    }

    // 8 char to 5 bytes
    for (var i = 0, count = length >> 3 << 3; i < count;) {
      v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v3 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v4 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v5 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v6 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v7 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v8 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      str += String.fromCharCode((v1 << 3 | v2 >>> 2) & 255) +
        String.fromCharCode((v2 << 6 | v3 << 1 | v4 >>> 4) & 255) +
        String.fromCharCode((v4 << 4 | v5 >>> 1) & 255) +
        String.fromCharCode((v5 << 7 | v6 << 2 | v7 >>> 3) & 255) +
        String.fromCharCode((v7 << 5 | v8) & 255);
    }

    // remain bytes
    var remain = length - count;
    if (remain === 2) {
      v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      str += String.fromCharCode((v1 << 3 | v2 >>> 2) & 255);
    } else if (remain === 4) {
      v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v3 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v4 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      str += String.fromCharCode((v1 << 3 | v2 >>> 2) & 255) +
        String.fromCharCode((v2 << 6 | v3 << 1 | v4 >>> 4) & 255);
    } else if (remain === 5) {
      v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v3 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v4 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v5 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      str += String.fromCharCode((v1 << 3 | v2 >>> 2) & 255) +
        String.fromCharCode((v2 << 6 | v3 << 1 | v4 >>> 4) & 255) +
        String.fromCharCode((v4 << 4 | v5 >>> 1) & 255);
    } else if (remain === 7) {
      v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v3 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v4 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v5 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v6 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      v7 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
      str += String.fromCharCode((v1 << 3 | v2 >>> 2) & 255) +
        String.fromCharCode((v2 << 6 | v3 << 1 | v4 >>> 4) & 255) +
        String.fromCharCode((v4 << 4 | v5 >>> 1) & 255) +
        String.fromCharCode((v5 << 7 | v6 << 2 | v7 >>> 3) & 255);
    }
    return str;
  };

  var exports = {
    encode: encode,
    decode: decode
  };
  decode.asBytes = decodeAsBytes;

  if (COMMON_JS) {
    module.exports = exports;
  } else {
    root.base32 = exports;
    if (AMD) {
      !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
        return exports;
      }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
  }
})();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/ieee754/index.js":
/*!***************************************!*\
  !*** ./node_modules/ieee754/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ "./node_modules/isarray/index.js":
/*!***************************************!*\
  !*** ./node_modules/isarray/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/url-polyfill/url-polyfill.js":
/*!***************************************************!*\
  !*** ./node_modules/url-polyfill/url-polyfill.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {(function(global) {
  /**
   * Polyfill URLSearchParams
   *
   * Inspired from : https://github.com/WebReflection/url-search-params/blob/master/src/url-search-params.js
   */

  var checkIfIteratorIsSupported = function() {
    try {
      return !!Symbol.iterator;
    } catch (error) {
      return false;
    }
  };


  var iteratorSupported = checkIfIteratorIsSupported();

  var createIterator = function(items) {
    var iterator = {
      next: function() {
        var value = items.shift();
        return { done: value === void 0, value: value };
      }
    };

    if (iteratorSupported) {
      iterator[Symbol.iterator] = function() {
        return iterator;
      };
    }

    return iterator;
  };

  /**
   * Search param name and values should be encoded according to https://url.spec.whatwg.org/#urlencoded-serializing
   * encodeURIComponent() produces the same result except encoding spaces as `%20` instead of `+`.
   */
  var serializeParam = function(value) {
    return encodeURIComponent(value).replace(/%20/g, '+');
  };

  var deserializeParam = function(value) {
    return decodeURIComponent(String(value).replace(/\+/g, ' '));
  };

  var polyfillURLSearchParams = function() {

    var URLSearchParams = function(searchString) {
      Object.defineProperty(this, '_entries', { writable: true, value: {} });
      var typeofSearchString = typeof searchString;

      if (typeofSearchString === 'undefined') {
        // do nothing
      } else if (typeofSearchString === 'string') {
        if (searchString !== '') {
          this._fromString(searchString);
        }
      } else if (searchString instanceof URLSearchParams) {
        var _this = this;
        searchString.forEach(function(value, name) {
          _this.append(name, value);
        });
      } else if ((searchString !== null) && (typeofSearchString === 'object')) {
        if (Object.prototype.toString.call(searchString) === '[object Array]') {
          for (var i = 0; i < searchString.length; i++) {
            var entry = searchString[i];
            if ((Object.prototype.toString.call(entry) === '[object Array]') || (entry.length !== 2)) {
              this.append(entry[0], entry[1]);
            } else {
              throw new TypeError('Expected [string, any] as entry at index ' + i + ' of URLSearchParams\'s input');
            }
          }
        } else {
          for (var key in searchString) {
            if (searchString.hasOwnProperty(key)) {
              this.append(key, searchString[key]);
            }
          }
        }
      } else {
        throw new TypeError('Unsupported input\'s type for URLSearchParams');
      }
    };

    var proto = URLSearchParams.prototype;

    proto.append = function(name, value) {
      if (name in this._entries) {
        this._entries[name].push(String(value));
      } else {
        this._entries[name] = [String(value)];
      }
    };

    proto.delete = function(name) {
      delete this._entries[name];
    };

    proto.get = function(name) {
      return (name in this._entries) ? this._entries[name][0] : null;
    };

    proto.getAll = function(name) {
      return (name in this._entries) ? this._entries[name].slice(0) : [];
    };

    proto.has = function(name) {
      return (name in this._entries);
    };

    proto.set = function(name, value) {
      this._entries[name] = [String(value)];
    };

    proto.forEach = function(callback, thisArg) {
      var entries;
      for (var name in this._entries) {
        if (this._entries.hasOwnProperty(name)) {
          entries = this._entries[name];
          for (var i = 0; i < entries.length; i++) {
            callback.call(thisArg, entries[i], name, this);
          }
        }
      }
    };

    proto.keys = function() {
      var items = [];
      this.forEach(function(value, name) {
        items.push(name);
      });
      return createIterator(items);
    };

    proto.values = function() {
      var items = [];
      this.forEach(function(value) {
        items.push(value);
      });
      return createIterator(items);
    };

    proto.entries = function() {
      var items = [];
      this.forEach(function(value, name) {
        items.push([name, value]);
      });
      return createIterator(items);
    };

    if (iteratorSupported) {
      proto[Symbol.iterator] = proto.entries;
    }

    proto.toString = function() {
      var searchArray = [];
      this.forEach(function(value, name) {
        searchArray.push(serializeParam(name) + '=' + serializeParam(value));
      });
      return searchArray.join('&');
    };


    global.URLSearchParams = URLSearchParams;
  };

  if (!('URLSearchParams' in global) || (new global.URLSearchParams('?a=1').toString() !== 'a=1')) {
    polyfillURLSearchParams();
  }

  var proto = global.URLSearchParams.prototype;

  if (typeof proto.sort !== 'function') {
    proto.sort = function() {
      var _this = this;
      var items = [];
      this.forEach(function(value, name) {
        items.push([name, value]);
        if (!_this._entries) {
          _this.delete(name);
        }
      });
      items.sort(function(a, b) {
        if (a[0] < b[0]) {
          return -1;
        } else if (a[0] > b[0]) {
          return +1;
        } else {
          return 0;
        }
      });
      if (_this._entries) { // force reset because IE keeps keys index
        _this._entries = {};
      }
      for (var i = 0; i < items.length; i++) {
        this.append(items[i][0], items[i][1]);
      }
    };
  }

  if (typeof proto._fromString !== 'function') {
    Object.defineProperty(proto, '_fromString', {
      enumerable: false,
      configurable: false,
      writable: false,
      value: function(searchString) {
        if (this._entries) {
          this._entries = {};
        } else {
          var keys = [];
          this.forEach(function(value, name) {
            keys.push(name);
          });
          for (var i = 0; i < keys.length; i++) {
            this.delete(keys[i]);
          }
        }

        searchString = searchString.replace(/^\?/, '');
        var attributes = searchString.split('&');
        var attribute;
        for (var i = 0; i < attributes.length; i++) {
          attribute = attributes[i].split('=');
          this.append(
            deserializeParam(attribute[0]),
            (attribute.length > 1) ? deserializeParam(attribute[1]) : ''
          );
        }
      }
    });
  }

  // HTMLAnchorElement

})(
  (typeof global !== 'undefined') ? global
    : ((typeof window !== 'undefined') ? window
    : ((typeof self !== 'undefined') ? self : this))
);

(function(global) {
  /**
   * Polyfill URL
   *
   * Inspired from : https://github.com/arv/DOM-URL-Polyfill/blob/master/src/url.js
   */

  var checkIfURLIsSupported = function() {
    try {
      var u = new global.URL('b', 'http://a');
      u.pathname = 'c%20d';
      return (u.href === 'http://a/c%20d') && u.searchParams;
    } catch (e) {
      return false;
    }
  };


  var polyfillURL = function() {
    var _URL = global.URL;

    var URL = function(url, base) {
      if (typeof url !== 'string') url = String(url);

      // Only create another document if the base is different from current location.
      var doc = document, baseElement;
      if (base && (global.location === void 0 || base !== global.location.href)) {
        doc = document.implementation.createHTMLDocument('');
        baseElement = doc.createElement('base');
        baseElement.href = base;
        doc.head.appendChild(baseElement);
        try {
          if (baseElement.href.indexOf(base) !== 0) throw new Error(baseElement.href);
        } catch (err) {
          throw new Error('URL unable to set base ' + base + ' due to ' + err);
        }
      }

      var anchorElement = doc.createElement('a');
      anchorElement.href = url;
      if (baseElement) {
        doc.body.appendChild(anchorElement);
        anchorElement.href = anchorElement.href; // force href to refresh
      }

      if (anchorElement.protocol === ':' || !/:/.test(anchorElement.href)) {
        throw new TypeError('Invalid URL');
      }

      Object.defineProperty(this, '_anchorElement', {
        value: anchorElement
      });


      // create a linked searchParams which reflect its changes on URL
      var searchParams = new global.URLSearchParams(this.search);
      var enableSearchUpdate = true;
      var enableSearchParamsUpdate = true;
      var _this = this;
      ['append', 'delete', 'set'].forEach(function(methodName) {
        var method = searchParams[methodName];
        searchParams[methodName] = function() {
          method.apply(searchParams, arguments);
          if (enableSearchUpdate) {
            enableSearchParamsUpdate = false;
            _this.search = searchParams.toString();
            enableSearchParamsUpdate = true;
          }
        };
      });

      Object.defineProperty(this, 'searchParams', {
        value: searchParams,
        enumerable: true
      });

      var search = void 0;
      Object.defineProperty(this, '_updateSearchParams', {
        enumerable: false,
        configurable: false,
        writable: false,
        value: function() {
          if (this.search !== search) {
            search = this.search;
            if (enableSearchParamsUpdate) {
              enableSearchUpdate = false;
              this.searchParams._fromString(this.search);
              enableSearchUpdate = true;
            }
          }
        }
      });
    };

    var proto = URL.prototype;

    var linkURLWithAnchorAttribute = function(attributeName) {
      Object.defineProperty(proto, attributeName, {
        get: function() {
          return this._anchorElement[attributeName];
        },
        set: function(value) {
          this._anchorElement[attributeName] = value;
        },
        enumerable: true
      });
    };

    ['hash', 'host', 'hostname', 'port', 'protocol']
      .forEach(function(attributeName) {
        linkURLWithAnchorAttribute(attributeName);
      });

    Object.defineProperty(proto, 'search', {
      get: function() {
        return this._anchorElement['search'];
      },
      set: function(value) {
        this._anchorElement['search'] = value;
        this._updateSearchParams();
      },
      enumerable: true
    });

    Object.defineProperties(proto, {

      'toString': {
        get: function() {
          var _this = this;
          return function() {
            return _this.href;
          };
        }
      },

      'href': {
        get: function() {
          return this._anchorElement.href.replace(/\?$/, '');
        },
        set: function(value) {
          this._anchorElement.href = value;
          this._updateSearchParams();
        },
        enumerable: true
      },

      'pathname': {
        get: function() {
          return this._anchorElement.pathname.replace(/(^\/?)/, '/');
        },
        set: function(value) {
          this._anchorElement.pathname = value;
        },
        enumerable: true
      },

      'origin': {
        get: function() {
          // get expected port from protocol
          var expectedPort = { 'http:': 80, 'https:': 443, 'ftp:': 21 }[this._anchorElement.protocol];
          // add port to origin if, expected port is different than actual port
          // and it is not empty f.e http://foo:8080
          // 8080 != 80 && 8080 != ''
          var addPortToOrigin = this._anchorElement.port != expectedPort &&
            this._anchorElement.port !== '';

          return this._anchorElement.protocol +
            '//' +
            this._anchorElement.hostname +
            (addPortToOrigin ? (':' + this._anchorElement.port) : '');
        },
        enumerable: true
      },

      'password': { // TODO
        get: function() {
          return '';
        },
        set: function(value) {
        },
        enumerable: true
      },

      'username': { // TODO
        get: function() {
          return '';
        },
        set: function(value) {
        },
        enumerable: true
      },
    });

    URL.createObjectURL = function(blob) {
      return _URL.createObjectURL.apply(_URL, arguments);
    };

    URL.revokeObjectURL = function(url) {
      return _URL.revokeObjectURL.apply(_URL, arguments);
    };

    global.URL = URL;

  };

  if (!checkIfURLIsSupported()) {
    polyfillURL();
  }

  if ((global.location !== void 0) && !('origin' in global.location)) {
    var getOrigin = function() {
      return global.location.protocol + '//' + global.location.hostname + (global.location.port ? (':' + global.location.port) : '');
    };

    try {
      Object.defineProperty(global.location, 'origin', {
        get: getOrigin,
        enumerable: true
      });
    } catch (e) {
      setInterval(function() {
        global.location.origin = getOrigin();
      }, 100);
    }
  }

})(
  (typeof global !== 'undefined') ? global
    : ((typeof window !== 'undefined') ? window
    : ((typeof self !== 'undefined') ? self : this))
);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/zalgo-promise/dist/zalgo-promise.js":
/*!**********************************************************!*\
  !*** ./node_modules/zalgo-promise/dist/zalgo-promise.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(root, factory) {
     true ? module.exports = factory() : undefined;
}("undefined" != typeof self ? self : this, function() {
    return function(modules) {
        var installedModules = {};
        function __webpack_require__(moduleId) {
            if (installedModules[moduleId]) return installedModules[moduleId].exports;
            var module = installedModules[moduleId] = {
                i: moduleId,
                l: !1,
                exports: {}
            };
            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            module.l = !0;
            return module.exports;
        }
        __webpack_require__.m = modules;
        __webpack_require__.c = installedModules;
        __webpack_require__.d = function(exports, name, getter) {
            __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
                configurable: !1,
                enumerable: !0,
                get: getter
            });
        };
        __webpack_require__.n = function(module) {
            var getter = module && module.__esModule ? function() {
                return module.default;
            } : function() {
                return module;
            };
            __webpack_require__.d(getter, "a", getter);
            return getter;
        };
        __webpack_require__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
        };
        __webpack_require__.p = "";
        return __webpack_require__(__webpack_require__.s = "./src/index.js");
    }({
        "./src/index.js": function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            Object.defineProperty(__webpack_exports__, "__esModule", {
                value: !0
            });
            function utils_isPromise(item) {
                try {
                    if (!item) return !1;
                    if ("undefined" != typeof Promise && item instanceof Promise) return !0;
                    if ("undefined" != typeof window && window.Window && item instanceof window.Window) return !1;
                    if ("undefined" != typeof window && window.constructor && item instanceof window.constructor) return !1;
                    var _toString = {}.toString;
                    if (_toString) {
                        var name = _toString.call(item);
                        if ("[object Window]" === name || "[object global]" === name || "[object DOMWindow]" === name) return !1;
                    }
                    if ("function" == typeof item.then) return !0;
                } catch (err) {
                    return !1;
                }
                return !1;
            }
            var dispatchedErrors = [], possiblyUnhandledPromiseHandlers = [], activeCount = 0, flushPromise = void 0;
            function flushActive() {
                if (!activeCount && flushPromise) {
                    var promise = flushPromise;
                    flushPromise = null;
                    promise.resolve();
                }
            }
            function startActive() {
                activeCount += 1;
            }
            function endActive() {
                activeCount -= 1;
                flushActive();
            }
            var promise_ZalgoPromise = function() {
                function ZalgoPromise(handler) {
                    var _this = this;
                    !function(instance, Constructor) {
                        if (!(instance instanceof ZalgoPromise)) throw new TypeError("Cannot call a class as a function");
                    }(this);
                    this.resolved = !1;
                    this.rejected = !1;
                    this.errorHandled = !1;
                    this.handlers = [];
                    if (handler) {
                        var _result = void 0, _error = void 0, resolved = !1, rejected = !1, isAsync = !1;
                        startActive();
                        try {
                            handler(function(res) {
                                if (isAsync) _this.resolve(res); else {
                                    resolved = !0;
                                    _result = res;
                                }
                            }, function(err) {
                                if (isAsync) _this.reject(err); else {
                                    rejected = !0;
                                    _error = err;
                                }
                            });
                        } catch (err) {
                            endActive();
                            this.reject(err);
                            return;
                        }
                        endActive();
                        isAsync = !0;
                        resolved ? this.resolve(_result) : rejected && this.reject(_error);
                    }
                }
                ZalgoPromise.prototype.resolve = function(result) {
                    if (this.resolved || this.rejected) return this;
                    if (utils_isPromise(result)) throw new Error("Can not resolve promise with another promise");
                    this.resolved = !0;
                    this.value = result;
                    this.dispatch();
                    return this;
                };
                ZalgoPromise.prototype.reject = function(error) {
                    var _this2 = this;
                    if (this.resolved || this.rejected) return this;
                    if (utils_isPromise(error)) throw new Error("Can not reject promise with another promise");
                    if (!error) {
                        var _err = error && "function" == typeof error.toString ? error.toString() : Object.prototype.toString.call(error);
                        error = new Error("Expected reject to be called with Error, got " + _err);
                    }
                    this.rejected = !0;
                    this.error = error;
                    this.errorHandled || setTimeout(function() {
                        _this2.errorHandled || function(err, promise) {
                            if (-1 === dispatchedErrors.indexOf(err)) {
                                dispatchedErrors.push(err);
                                setTimeout(function() {
                                    throw err;
                                }, 1);
                                for (var j = 0; j < possiblyUnhandledPromiseHandlers.length; j++) possiblyUnhandledPromiseHandlers[j](err, promise);
                            }
                        }(error, _this2);
                    }, 1);
                    this.dispatch();
                    return this;
                };
                ZalgoPromise.prototype.asyncReject = function(error) {
                    this.errorHandled = !0;
                    this.reject(error);
                    return this;
                };
                ZalgoPromise.prototype.dispatch = function() {
                    var _this3 = this, dispatching = this.dispatching, resolved = this.resolved, rejected = this.rejected, handlers = this.handlers;
                    if (!dispatching && (resolved || rejected)) {
                        this.dispatching = !0;
                        startActive();
                        for (var _loop = function(i) {
                            var _handlers$i = handlers[i], onSuccess = _handlers$i.onSuccess, onError = _handlers$i.onError, promise = _handlers$i.promise, result = void 0;
                            if (resolved) try {
                                result = onSuccess ? onSuccess(_this3.value) : _this3.value;
                            } catch (err) {
                                promise.reject(err);
                                return "continue";
                            } else if (rejected) {
                                if (!onError) {
                                    promise.reject(_this3.error);
                                    return "continue";
                                }
                                try {
                                    result = onError(_this3.error);
                                } catch (err) {
                                    promise.reject(err);
                                    return "continue";
                                }
                            }
                            if (result instanceof ZalgoPromise && (result.resolved || result.rejected)) {
                                result.resolved ? promise.resolve(result.value) : promise.reject(result.error);
                                result.errorHandled = !0;
                            } else utils_isPromise(result) ? result instanceof ZalgoPromise && (result.resolved || result.rejected) ? result.resolved ? promise.resolve(result.value) : promise.reject(result.error) : result.then(function(res) {
                                promise.resolve(res);
                            }, function(err) {
                                promise.reject(err);
                            }) : promise.resolve(result);
                        }, i = 0; i < handlers.length; i++) _loop(i);
                        handlers.length = 0;
                        this.dispatching = !1;
                        endActive();
                    }
                };
                ZalgoPromise.prototype.then = function(onSuccess, onError) {
                    if (onSuccess && "function" != typeof onSuccess && !onSuccess.call) throw new Error("Promise.then expected a function for success handler");
                    if (onError && "function" != typeof onError && !onError.call) throw new Error("Promise.then expected a function for error handler");
                    var promise = new ZalgoPromise();
                    this.handlers.push({
                        promise: promise,
                        onSuccess: onSuccess,
                        onError: onError
                    });
                    this.errorHandled = !0;
                    this.dispatch();
                    return promise;
                };
                ZalgoPromise.prototype.catch = function(onError) {
                    return this.then(void 0, onError);
                };
                ZalgoPromise.prototype.finally = function(onFinally) {
                    if (onFinally && "function" != typeof onFinally && !onFinally.call) throw new Error("Promise.finally expected a function");
                    return this.then(function(result) {
                        return ZalgoPromise.try(onFinally).then(function() {
                            return result;
                        });
                    }, function(err) {
                        return ZalgoPromise.try(onFinally).then(function() {
                            throw err;
                        });
                    });
                };
                ZalgoPromise.prototype.timeout = function(time, err) {
                    var _this4 = this;
                    if (this.resolved || this.rejected) return this;
                    var timeout = setTimeout(function() {
                        _this4.resolved || _this4.rejected || _this4.reject(err || new Error("Promise timed out after " + time + "ms"));
                    }, time);
                    return this.then(function(result) {
                        clearTimeout(timeout);
                        return result;
                    });
                };
                ZalgoPromise.prototype.toPromise = function() {
                    if ("undefined" == typeof Promise) throw new TypeError("Could not find Promise");
                    return Promise.resolve(this);
                };
                ZalgoPromise.resolve = function(value) {
                    return value instanceof ZalgoPromise ? value : utils_isPromise(value) ? new ZalgoPromise(function(resolve, reject) {
                        return value.then(resolve, reject);
                    }) : new ZalgoPromise().resolve(value);
                };
                ZalgoPromise.reject = function(error) {
                    return new ZalgoPromise().reject(error);
                };
                ZalgoPromise.asyncReject = function(error) {
                    return new ZalgoPromise().asyncReject(error);
                };
                ZalgoPromise.all = function(promises) {
                    var promise = new ZalgoPromise(), count = promises.length, results = [];
                    if (!count) {
                        promise.resolve(results);
                        return promise;
                    }
                    for (var _loop2 = function(i) {
                        var prom = promises[i];
                        if (prom instanceof ZalgoPromise) {
                            if (prom.resolved) {
                                results[i] = prom.value;
                                count -= 1;
                                return "continue";
                            }
                        } else if (!utils_isPromise(prom)) {
                            results[i] = prom;
                            count -= 1;
                            return "continue";
                        }
                        ZalgoPromise.resolve(prom).then(function(result) {
                            results[i] = result;
                            0 == (count -= 1) && promise.resolve(results);
                        }, function(err) {
                            promise.reject(err);
                        });
                    }, i = 0; i < promises.length; i++) _loop2(i);
                    0 === count && promise.resolve(results);
                    return promise;
                };
                ZalgoPromise.hash = function(promises) {
                    var result = {};
                    return ZalgoPromise.all(Object.keys(promises).map(function(key) {
                        return ZalgoPromise.resolve(promises[key]).then(function(value) {
                            result[key] = value;
                        });
                    })).then(function() {
                        return result;
                    });
                };
                ZalgoPromise.map = function(items, method) {
                    return ZalgoPromise.all(items.map(method));
                };
                ZalgoPromise.onPossiblyUnhandledException = function(handler) {
                    return function(handler) {
                        possiblyUnhandledPromiseHandlers.push(handler);
                        return {
                            cancel: function() {
                                possiblyUnhandledPromiseHandlers.splice(possiblyUnhandledPromiseHandlers.indexOf(handler), 1);
                            }
                        };
                    }(handler);
                };
                ZalgoPromise.try = function(method, context, args) {
                    if (method && "function" != typeof method && !method.call) throw new Error("Promise.try expected a function");
                    var result = void 0;
                    startActive();
                    try {
                        result = method.apply(context, args || []);
                    } catch (err) {
                        endActive();
                        return ZalgoPromise.reject(err);
                    }
                    endActive();
                    return ZalgoPromise.resolve(result);
                };
                ZalgoPromise.delay = function(_delay) {
                    return new ZalgoPromise(function(resolve) {
                        setTimeout(resolve, _delay);
                    });
                };
                ZalgoPromise.isPromise = function(value) {
                    return !!(value && value instanceof ZalgoPromise) || utils_isPromise(value);
                };
                ZalgoPromise.flush = function() {
                    return function(Zalgo) {
                        var promise = flushPromise = flushPromise || new ZalgoPromise();
                        flushActive();
                        return promise;
                    }();
                };
                return ZalgoPromise;
            }();
            __webpack_require__.d(__webpack_exports__, "ZalgoPromise", function() {
                return promise_ZalgoPromise;
            });
        }
    });
});
//# sourceMappingURL=zalgo-promise.js.map

/***/ }),

/***/ "./node_modules/zalgo-promise/index.js":
/*!*********************************************!*\
  !*** ./node_modules/zalgo-promise/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* @flow */

// eslint-disable-next-line import/no-commonjs
module.exports = __webpack_require__(/*! ./dist/zalgo-promise */ "./node_modules/zalgo-promise/dist/zalgo-promise.js");


/***/ }),

/***/ "./node_modules/zoid/dist/zoid.frame.js":
/*!**********************************************!*\
  !*** ./node_modules/zoid/dist/zoid.frame.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, Buffer, process) {!function(root, factory) {
     true ? module.exports = factory() : undefined;
}("undefined" != typeof self ? self : this, function() {
    return function(modules) {
        var installedModules = {};
        function __webpack_require__(moduleId) {
            if (installedModules[moduleId]) return installedModules[moduleId].exports;
            var module = installedModules[moduleId] = {
                i: moduleId,
                l: !1,
                exports: {}
            };
            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            module.l = !0;
            return module.exports;
        }
        __webpack_require__.m = modules;
        __webpack_require__.c = installedModules;
        __webpack_require__.d = function(exports, name, getter) {
            __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
                configurable: !1,
                enumerable: !0,
                get: getter
            });
        };
        __webpack_require__.n = function(module) {
            var getter = module && module.__esModule ? function() {
                return module.default;
            } : function() {
                return module;
            };
            __webpack_require__.d(getter, "a", getter);
            return getter;
        };
        __webpack_require__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
        };
        __webpack_require__.p = "";
        return __webpack_require__(__webpack_require__.s = "./src/index.js");
    }({
        "./node_modules/beaver-logger/client/index.js": function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            var interface_namespaceObject = {};
            __webpack_require__.d(interface_namespaceObject, "track", function() {
                return _track;
            });
            __webpack_require__.d(interface_namespaceObject, "buffer", function() {
                return buffer;
            });
            __webpack_require__.d(interface_namespaceObject, "tracking", function() {
                return tracking;
            });
            __webpack_require__.d(interface_namespaceObject, "getTransport", function() {
                return getTransport;
            });
            __webpack_require__.d(interface_namespaceObject, "setTransport", function() {
                return setTransport;
            });
            __webpack_require__.d(interface_namespaceObject, "print", function() {
                return print;
            });
            __webpack_require__.d(interface_namespaceObject, "immediateFlush", function() {
                return immediateFlush;
            });
            __webpack_require__.d(interface_namespaceObject, "flush", function() {
                return _flush;
            });
            __webpack_require__.d(interface_namespaceObject, "log", function() {
                return log;
            });
            __webpack_require__.d(interface_namespaceObject, "prefix", function() {
                return prefix;
            });
            __webpack_require__.d(interface_namespaceObject, "debug", function() {
                return debug;
            });
            __webpack_require__.d(interface_namespaceObject, "info", function() {
                return info;
            });
            __webpack_require__.d(interface_namespaceObject, "warn", function() {
                return warn;
            });
            __webpack_require__.d(interface_namespaceObject, "error", function() {
                return error;
            });
            __webpack_require__.d(interface_namespaceObject, "init", function() {
                return init;
            });
            __webpack_require__.d(interface_namespaceObject, "startTransition", function() {
                return startTransition;
            });
            __webpack_require__.d(interface_namespaceObject, "endTransition", function() {
                return endTransition;
            });
            __webpack_require__.d(interface_namespaceObject, "transition", function() {
                return transition;
            });
            __webpack_require__.d(interface_namespaceObject, "payloadBuilders", function() {
                return payloadBuilders;
            });
            __webpack_require__.d(interface_namespaceObject, "metaBuilders", function() {
                return metaBuilders;
            });
            __webpack_require__.d(interface_namespaceObject, "trackingBuilders", function() {
                return trackingBuilders;
            });
            __webpack_require__.d(interface_namespaceObject, "headerBuilders", function() {
                return headerBuilders;
            });
            __webpack_require__.d(interface_namespaceObject, "addPayloadBuilder", function() {
                return addPayloadBuilder;
            });
            __webpack_require__.d(interface_namespaceObject, "addMetaBuilder", function() {
                return addMetaBuilder;
            });
            __webpack_require__.d(interface_namespaceObject, "addTrackingBuilder", function() {
                return addTrackingBuilder;
            });
            __webpack_require__.d(interface_namespaceObject, "addHeaderBuilder", function() {
                return addHeaderBuilder;
            });
            __webpack_require__.d(interface_namespaceObject, "config", function() {
                return config;
            });
            __webpack_require__.d(interface_namespaceObject, "logLevels", function() {
                return logLevels;
            });
            var src = __webpack_require__("./node_modules/zalgo-promise/src/index.js");
            function extend(dest, src) {
                var over = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                dest = dest || {};
                src = src || {};
                for (var i in src) src.hasOwnProperty(i) && (!over && dest.hasOwnProperty(i) || (dest[i] = src[i]));
                return dest;
            }
            function uniqueID() {
                var chars = "0123456789abcdef";
                return "xxxxxxxxxx".replace(/./g, function() {
                    return chars.charAt(Math.floor(Math.random() * chars.length));
                });
            }
            var payloadBuilders = [], metaBuilders = [], trackingBuilders = [], headerBuilders = [];
            function addPayloadBuilder(builder) {
                payloadBuilders.push(builder);
            }
            function addMetaBuilder(builder) {
                metaBuilders.push(builder);
            }
            function addTrackingBuilder(builder) {
                trackingBuilders.push(builder);
            }
            function addHeaderBuilder(builder) {
                headerBuilders.push(builder);
            }
            var config = {
                uri: "",
                prefix: "",
                initial_state_name: "init",
                flushInterval: 6e5,
                debounceInterval: 10,
                sizeLimit: 300,
                silent: !1,
                heartbeat: !0,
                heartbeatConsoleLog: !0,
                heartbeatInterval: 5e3,
                heartbeatTooBusy: !1,
                heartbeatTooBusyThreshold: 1e4,
                logLevel: "warn",
                autoLog: [ "warn", "error" ],
                logUnload: !0,
                logPerformance: !0
            }, logLevels = [ "error", "warn", "info", "debug" ], buffer = [], tracking = [], logger_transport = function(headers, data, options) {
                return function(method, url) {
                    var headers = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, data = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, _ref$fireAndForget = (arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}).fireAndForget, fireAndForget = void 0 !== _ref$fireAndForget && _ref$fireAndForget;
                    return new src.a(function(resolve) {
                        var XRequest = window.XMLHttpRequest || window.ActiveXObject;
                        if (window.XDomainRequest && !function(url) {
                            var match = url.match(/https?:\/\/[^/]+/);
                            return !match || match[0] === window.location.protocol + "//" + window.location.host;
                        }(url)) {
                            if (!function(url) {
                                return window.location.protocol === url.split("/")[0];
                            }(url)) return resolve();
                            XRequest = window.XDomainRequest;
                        }
                        var req = new XRequest("MSXML2.XMLHTTP.3.0");
                        req.open(method.toUpperCase(), url, !0);
                        if ("function" == typeof req.setRequestHeader) {
                            req.setRequestHeader("X-Requested-With", "XMLHttpRequest");
                            req.setRequestHeader("Content-type", "application/json");
                            for (var headerName in headers) headers.hasOwnProperty(headerName) && req.setRequestHeader(headerName, headers[headerName]);
                        }
                        fireAndForget ? resolve() : req.onreadystatechange = function() {
                            req.readyState > 3 && resolve();
                        };
                        req.send(JSON.stringify(data).replace(/&/g, "%26"));
                    });
                }("post", config.uri, headers, data, options);
            };
            function getTransport() {
                return logger_transport;
            }
            function setTransport(newTransport) {
                logger_transport = newTransport;
            }
            var loaded = !1;
            setTimeout(function() {
                loaded = !0;
            }, 1);
            function print(level, event, payload) {
                if ("undefined" != typeof window && window.console && window.console.log) {
                    if (!loaded) return setTimeout(function() {
                        return print(level, event, payload);
                    }, 1);
                    var logLevel = config.logLevel;
                    window.LOG_LEVEL && (logLevel = window.LOG_LEVEL);
                    if (!(logLevels.indexOf(level) > logLevels.indexOf(logLevel))) {
                        payload = payload || {};
                        var args = [ event ];
                        Boolean(window.document.documentMode) && (payload = JSON.stringify(payload));
                        args.push(payload);
                        (payload.error || payload.warning) && args.push("\n\n", payload.error || payload.warning);
                        try {
                            window.console[level] && window.console[level].apply ? window.console[level].apply(window.console, args) : window.console.log && window.console.log.apply && window.console.log.apply(window.console, args);
                        } catch (err) {}
                    }
                }
            }
            function immediateFlush() {
                var _ref$fireAndForget = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).fireAndForget, fireAndForget = void 0 !== _ref$fireAndForget && _ref$fireAndForget;
                if ("undefined" != typeof window && config.uri) {
                    var hasBuffer = buffer.length, hasTracking = tracking.length;
                    if (hasBuffer || hasTracking) {
                        for (var meta = {}, _i2 = 0, _length2 = null == metaBuilders ? 0 : metaBuilders.length; _i2 < _length2; _i2++) {
                            var builder = metaBuilders[_i2];
                            try {
                                extend(meta, builder(meta), !1);
                            } catch (err) {
                                console.error("Error in custom meta builder:", err.stack || err.toString());
                            }
                        }
                        for (var headers = {}, _i4 = 0, _length4 = null == headerBuilders ? 0 : headerBuilders.length; _i4 < _length4; _i4++) {
                            var _builder = headerBuilders[_i4];
                            try {
                                extend(headers, _builder(headers), !1);
                            } catch (err) {
                                console.error("Error in custom header builder:", err.stack || err.toString());
                            }
                        }
                        var req = logger_transport(headers, {
                            events: buffer,
                            meta: meta,
                            tracking: tracking
                        }, {
                            fireAndForget: fireAndForget
                        });
                        buffer = [];
                        tracking = [];
                        return req;
                    }
                }
            }
            var method, interval, debounce, _flush = (method = immediateFlush, interval = config.debounceInterval, 
            debounce = {}, function() {
                var args = arguments;
                if (debounce.timeout) {
                    clearTimeout(debounce.timeout);
                    delete debounce.timeout;
                }
                debounce.timeout = setTimeout(function() {
                    var resolver = debounce.resolver, rejector = debounce.rejector;
                    delete debounce.promise;
                    delete debounce.resolver;
                    delete debounce.rejector;
                    delete debounce.timeout;
                    return src.a.resolve().then(function() {
                        return method.apply(null, args);
                    }).then(resolver, rejector);
                }, interval);
                debounce.promise = debounce.promise || new src.a(function(resolver, rejector) {
                    debounce.resolver = resolver;
                    debounce.rejector = rejector;
                });
                return debounce.promise;
            });
            function enqueue(level, event, payload) {
                buffer.push({
                    level: level,
                    event: event,
                    payload: payload
                });
                config.autoLog.indexOf(level) > -1 && _flush();
            }
            function log(level, event, payload) {
                if ("undefined" != typeof window) {
                    config.prefix && (event = config.prefix + "_" + event);
                    "string" == typeof (payload = payload || {}) ? payload = {
                        message: payload
                    } : payload instanceof Error && (payload = {
                        error: payload.stack || payload.toString()
                    });
                    try {
                        JSON.stringify(payload);
                    } catch (err) {
                        return;
                    }
                    payload.timestamp = Date.now();
                    for (var _i6 = 0, _length6 = null == payloadBuilders ? 0 : payloadBuilders.length; _i6 < _length6; _i6++) {
                        var builder = payloadBuilders[_i6];
                        try {
                            extend(payload, builder(payload), !1);
                        } catch (err) {
                            console.error("Error in custom payload builder:", err.stack || err.toString());
                        }
                    }
                    config.silent || print(level, event, payload);
                    buffer.length === config.sizeLimit ? enqueue("info", "logger_max_buffer_length") : buffer.length < config.sizeLimit && enqueue(level, event, payload);
                }
            }
            function prefix(name) {
                return {
                    debug: function(event, payload) {
                        return log("debug", name + "_" + event, payload);
                    },
                    info: function(event, payload) {
                        return log("info", name + "_" + event, payload);
                    },
                    warn: function(event, payload) {
                        return log("warn", name + "_" + event, payload);
                    },
                    error: function(event, payload) {
                        return log("error", name + "_" + event, payload);
                    },
                    track: function(payload) {
                        return _track(payload);
                    },
                    flush: function() {
                        return _flush();
                    }
                };
            }
            function debug(event, payload) {
                return log("debug", event, payload);
            }
            function info(event, payload) {
                return log("info", event, payload);
            }
            function warn(event, payload) {
                return log("warn", event, payload);
            }
            function error(event, payload) {
                return log("error", event, payload);
            }
            function _track(payload) {
                if ("undefined" != typeof window && payload) {
                    try {
                        JSON.stringify(payload);
                    } catch (err) {
                        return;
                    }
                    for (var _i8 = 0, _length8 = null == trackingBuilders ? 0 : trackingBuilders.length; _i8 < _length8; _i8++) {
                        var builder = trackingBuilders[_i8];
                        try {
                            extend(payload, builder(payload), !1);
                        } catch (err) {
                            console.error("Error in custom tracking builder:", err.stack || err.toString());
                        }
                    }
                    print("debug", "tracking", payload);
                    tracking.push(payload);
                }
            }
            var enablePerformance = window && window.performance && performance.now && performance.timing && performance.timing.connectEnd && performance.timing.navigationStart && Math.abs(performance.now() - Date.now()) > 1e3 && performance.now() - (performance.timing.connectEnd - performance.timing.navigationStart) > 0;
            function now() {
                return enablePerformance ? performance.now() : Date.now();
            }
            function timer(startTime) {
                return {
                    startTime: startTime = void 0 !== startTime ? startTime : now(),
                    elapsed: function() {
                        return parseInt(now() - startTime, 10);
                    },
                    reset: function() {
                        startTime = now();
                    }
                };
            }
            function reqStartElapsed() {
                if (enablePerformance) {
                    var timing = window.performance.timing;
                    return parseInt(timing.connectEnd - timing.navigationStart, 10);
                }
            }
            var clientTimer = timer(), reqTimer = timer(reqStartElapsed());
            var initiated = !1;
            function init(conf) {
                extend(config, conf || {});
                if (!initiated) {
                    initiated = !0;
                    config.logPerformance && function() {
                        if (!enablePerformance) return info("no_performance_data");
                        addPayloadBuilder(function() {
                            var payload = {};
                            payload.client_elapsed = clientTimer.elapsed();
                            enablePerformance && (payload.req_elapsed = reqTimer.elapsed());
                            return payload;
                        });
                        new src.a(function(resolve) {
                            "undefined" != typeof document && "complete" === document.readyState && resolve();
                            window.addEventListener("load", resolve);
                        }).then(function() {
                            var timing = {};
                            [ "connectEnd", "connectStart", "domComplete", "domContentLoadedEventEnd", "domContentLoadedEventStart", "domInteractive", "domLoading", "domainLookupEnd", "domainLookupStart", "fetchStart", "loadEventEnd", "loadEventStart", "navigationStart", "redirectEnd", "redirectStart", "requestStart", "responseEnd", "responseStart", "secureConnectionStart", "unloadEventEnd", "unloadEventStart" ].forEach(function(key) {
                                timing[key] = parseInt(window.performance.timing[key], 10) || 0;
                            });
                            var offset = timing.connectEnd - timing.navigationStart;
                            timing.connectEnd && Object.keys(timing).forEach(function(name) {
                                var time = timing[name];
                                time && info("timing_" + name, {
                                    client_elapsed: parseInt(time - timing.connectEnd - (clientTimer.startTime - offset), 10),
                                    req_elapsed: parseInt(time - timing.connectEnd, 10)
                                });
                            });
                            info("timing", timing);
                            info("memory", window.performance.memory);
                            info("navigation", window.performance.navigation);
                            window.performance.getEntries && window.performance.getEntries().forEach(function(resource) {
                                [ "link", "script", "img", "css" ].indexOf(resource.initiatorType) > -1 && info(resource.initiatorType, resource);
                            });
                        });
                    }();
                    config.heartbeat && (heartBeatTimer = timer(), heartbeatCount = 0, time = config.heartbeatInterval, 
                    function loop() {
                        setTimeout(function() {
                            !function() {
                                if (!(config.heartbeatMaxThreshold && heartbeatCount > config.heartbeatMaxThreshold)) {
                                    heartbeatCount += 1;
                                    var elapsed = heartBeatTimer.elapsed(), lag = elapsed - config.heartbeatInterval, heartbeatPayload = {
                                        count: heartbeatCount,
                                        elapsed: elapsed
                                    };
                                    if (config.heartbeatTooBusy) {
                                        heartbeatPayload.lag = lag;
                                        lag >= config.heartbeatTooBusyThreshold && info("toobusy", heartbeatPayload, config.heartbeatConsoleLog);
                                    }
                                    info("heartbeat", heartbeatPayload, config.heartbeatConsoleLog);
                                }
                            }();
                            loop();
                        }, time);
                    }());
                    if (config.logUnload) {
                        window.addEventListener("beforeunload", function() {
                            info("window_beforeunload");
                            immediateFlush({
                                fireAndForget: !0
                            });
                        });
                        window.addEventListener("unload", function() {
                            info("window_unload");
                            immediateFlush({
                                fireAndForget: !0
                            });
                        });
                    }
                    config.flushInterval && setInterval(_flush, config.flushInterval);
                    if (window.beaverLogQueue) {
                        window.beaverLogQueue.forEach(function(payload) {
                            log(payload.level, payload.event, payload);
                        });
                        delete window.beaverLogQueue;
                    }
                }
                var time, heartBeatTimer, heartbeatCount;
            }
            var windowID = uniqueID(), pageID = uniqueID(), currentState = config.initial_state_name, startTime = void 0;
            function startTransition() {
                startTime = now();
            }
            function endTransition(toState) {
                startTime = startTime || reqStartElapsed();
                var currentTime = now(), elapsedTime = void 0;
                void 0 !== startTime && (elapsedTime = parseInt(currentTime - startTime, 0));
                var transitionName = "transition_" + currentState + "_to_" + toState;
                info(transitionName, {
                    duration: elapsedTime
                });
                _track({
                    transition: transitionName,
                    transition_time: elapsedTime
                });
                immediateFlush();
                startTime = currentTime;
                currentState = toState;
                pageID = uniqueID();
            }
            function transition(toState) {
                startTransition();
                endTransition(toState);
            }
            addPayloadBuilder(function() {
                return {
                    windowID: windowID,
                    pageID: pageID
                };
            });
            addMetaBuilder(function() {
                return {
                    state: "ui_" + currentState
                };
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return _track;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return buffer;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return tracking;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return getTransport;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return setTransport;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return print;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return immediateFlush;
            });
            __webpack_require__.d(__webpack_exports__, "c", function() {
                return _flush;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return log;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return prefix;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return debug;
            });
            __webpack_require__.d(__webpack_exports__, "d", function() {
                return info;
            });
            __webpack_require__.d(__webpack_exports__, "f", function() {
                return warn;
            });
            __webpack_require__.d(__webpack_exports__, "b", function() {
                return error;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return init;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return startTransition;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return endTransition;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return transition;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return payloadBuilders;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return metaBuilders;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return trackingBuilders;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return headerBuilders;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return addPayloadBuilder;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return addMetaBuilder;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return addTrackingBuilder;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return addHeaderBuilder;
            });
            __webpack_require__.d(__webpack_exports__, "a", function() {
                return config;
            });
            __webpack_require__.d(__webpack_exports__, "e", function() {
                return logLevels;
            });
        },
        "./node_modules/belter/src/css.js": function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
        },
        "./node_modules/belter/src/decorators.js": function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__("./node_modules/belter/src/util.js");
        },
        "./node_modules/belter/src/device.js": function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_exports__.a = function() {
                return !!(window.navigator.mockUserAgent || window.navigator.userAgent).match(/Android|webOS|iPhone|iPad|iPod|bada|Symbian|Palm|CriOS|BlackBerry|IEMobile|WindowsMobile|Opera Mini/i);
            };
        },
        "./node_modules/belter/src/dom.js": function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__("./node_modules/zalgo-promise/src/index.js"), __webpack_require__("./node_modules/cross-domain-utils/src/index.js"), 
            __webpack_require__("./node_modules/cross-domain-safe-weakmap/src/index.js");
            var util = __webpack_require__("./node_modules/belter/src/util.js");
            __webpack_require__("./node_modules/belter/src/device.js");
            __webpack_exports__.b = function isLocalStorageEnabled() {
                return Object(util.d)(isLocalStorageEnabled, function() {
                    try {
                        if ("undefined" == typeof window) return !1;
                        if (window.localStorage) {
                            var value = Math.random().toString();
                            window.localStorage.setItem("__test__localStorage__", value);
                            var result = window.localStorage.getItem("__test__localStorage__");
                            window.localStorage.removeItem("__test__localStorage__");
                            if (value === result) return !0;
                        }
                    } catch (err) {}
                    return !1;
                });
            };
            __webpack_exports__.a = function(id) {
                var element, doc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document;
                return (element = id) instanceof window.Element || null !== element && "object" === (void 0 === element ? "undefined" : _typeof(element)) && 1 === element.nodeType && "object" === _typeof(element.style) && "object" === _typeof(element.ownerDocument) ? id : "string" == typeof id ? doc.querySelector(id) : void 0;
            };
            __webpack_exports__.c = function(el, handler) {
                var _ref2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, _ref2$width = _ref2.width, width = void 0 === _ref2$width || _ref2$width, _ref2$height = _ref2.height, height = void 0 === _ref2$height || _ref2$height, _ref2$interval = _ref2.interval, interval = void 0 === _ref2$interval ? 100 : _ref2$interval, _ref2$win = _ref2.win, win = void 0 === _ref2$win ? window : _ref2$win, currentWidth = el.offsetWidth, currentHeight = el.offsetHeight;
                handler({
                    width: currentWidth,
                    height: currentHeight
                });
                var check = function() {
                    var newWidth = el.offsetWidth, newHeight = el.offsetHeight;
                    (width && newWidth !== currentWidth || height && newHeight !== currentHeight) && handler({
                        width: newWidth,
                        height: newHeight
                    });
                    currentWidth = newWidth;
                    currentHeight = newHeight;
                }, observer = void 0, timeout = void 0;
                if (void 0 !== win.ResizeObserver) (observer = new win.ResizeObserver(check)).observe(el); else if (void 0 !== win.MutationObserver) {
                    (observer = new win.MutationObserver(check)).observe(el, {
                        attributes: !0,
                        childList: !0,
                        subtree: !0,
                        characterData: !1
                    });
                    win.addEventListener("resize", check);
                } else !function loop() {
                    check();
                    timeout = setTimeout(loop, interval);
                }();
                return {
                    cancel: function() {
                        observer.disconnect();
                        window.removeEventListener("resize", check);
                        clearTimeout(timeout);
                    }
                };
            };
            var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
                return typeof obj;
            } : function(obj) {
                return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
            Object.assign;
            Object.create(Error.prototype);
        },
        "./node_modules/belter/src/experiment.js": function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__("./node_modules/belter/src/util.js"), __webpack_require__("./node_modules/belter/src/storage.js");
        },
        "./node_modules/belter/src/global.js": function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__("./node_modules/belter/src/util.js");
        },
        "./node_modules/belter/src/http.js": function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__("./node_modules/zalgo-promise/src/index.js"), __webpack_require__("./node_modules/cross-domain-utils/src/index.js");
        },
        "./node_modules/belter/src/index.js": function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__("./node_modules/belter/src/device.js");
            var __WEBPACK_IMPORTED_MODULE_1__dom__ = __webpack_require__("./node_modules/belter/src/dom.js");
            __webpack_require__.d(__webpack_exports__, "getElementSafe", function() {
                return __WEBPACK_IMPORTED_MODULE_1__dom__.a;
            });
            __webpack_require__.d(__webpack_exports__, "onResize", function() {
                return __WEBPACK_IMPORTED_MODULE_1__dom__.c;
            });
            __webpack_require__("./node_modules/belter/src/experiment.js"), __webpack_require__("./node_modules/belter/src/global.js"), 
            __webpack_require__("./node_modules/belter/src/storage.js"), __webpack_require__("./node_modules/belter/src/util.js"), 
            __webpack_require__("./node_modules/belter/src/http.js");
            var __WEBPACK_IMPORTED_MODULE_7__types__ = __webpack_require__("./node_modules/belter/src/types.js");
            __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__types__), __webpack_require__("./node_modules/belter/src/decorators.js"), 
            __webpack_require__("./node_modules/belter/src/css.js"), __webpack_require__("./node_modules/belter/src/test.js");
        },
        "./node_modules/belter/src/storage.js": function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_exports__.a = function getStorage(_ref) {
                var name = _ref.name, _ref$version = _ref.version, version = void 0 === _ref$version ? "latest" : _ref$version, _ref$lifetime = _ref.lifetime, lifetime = void 0 === _ref$lifetime ? 3e5 : _ref$lifetime;
                return Object(__WEBPACK_IMPORTED_MODULE_0__util__.d)(getStorage, function() {
                    var STORAGE_KEY = "__" + name + "_" + version + "_storage__", accessedStorage = void 0;
                    function getState(handler) {
                        var localStorageEnabled = Object(__WEBPACK_IMPORTED_MODULE_1__dom__.b)(), storage = void 0;
                        accessedStorage && (storage = accessedStorage);
                        if (!storage && localStorageEnabled) {
                            var rawStorage = window.localStorage.getItem(STORAGE_KEY);
                            rawStorage && (storage = JSON.parse(rawStorage));
                        }
                        storage || (storage = Object(__WEBPACK_IMPORTED_MODULE_0__util__.c)()[STORAGE_KEY]);
                        storage || (storage = {
                            id: Object(__WEBPACK_IMPORTED_MODULE_0__util__.m)()
                        });
                        storage.id || (storage.id = Object(__WEBPACK_IMPORTED_MODULE_0__util__.m)());
                        accessedStorage = storage;
                        var result = handler(storage);
                        localStorageEnabled ? window.localStorage.setItem(STORAGE_KEY, JSON.stringify(storage)) : Object(__WEBPACK_IMPORTED_MODULE_0__util__.c)()[STORAGE_KEY] = storage;
                        accessedStorage = null;
                        return result;
                    }
                    function getSession(handler) {
                        return getState(function(storage) {
                            var session = storage.__session__, now = Date.now();
                            session && now - session.created > lifetime && (session = null);
                            session || (session = {
                                guid: Object(__WEBPACK_IMPORTED_MODULE_0__util__.m)(),
                                created: now
                            });
                            storage.__session__ = session;
                            return handler(session);
                        });
                    }
                    return {
                        getState: getState,
                        getID: function() {
                            return getState(function(storage) {
                                return storage.id;
                            });
                        },
                        getSessionState: function(handler) {
                            return getSession(function(session) {
                                session.state = session.state || {};
                                return handler(session.state);
                            });
                        },
                        getSessionID: function() {
                            return getSession(function(session) {
                                return session.guid;
                            });
                        }
                    };
                }, [ {
                    name: name,
                    version: version,
                    lifetime: lifetime
                } ]);
            };
            var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__("./node_modules/belter/src/util.js"), __WEBPACK_IMPORTED_MODULE_1__dom__ = __webpack_require__("./node_modules/belter/src/dom.js");
        },
        "./node_modules/belter/src/test.js": function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__("./node_modules/zalgo-promise/src/index.js"), __webpack_require__("./node_modules/belter/src/util.js");
        },
        "./node_modules/belter/src/types.js": function(module, exports) {},
        "./node_modules/belter/src/util.js": function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_exports__.m = uniqueID;
            __webpack_exports__.c = function() {
                if ("undefined" != typeof window) return window;
                if ("undefined" != typeof window) return window;
                if ("undefined" != typeof global) return global;
                throw new Error("No global found");
            };
            __webpack_exports__.e = function(method) {
                var _this = this, options = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, cacheMap = new __WEBPACK_IMPORTED_MODULE_1_cross_domain_safe_weakmap_src__.a();
                function memoizedFunction() {
                    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                    var cache = cacheMap.getOrSet(options.thisNamespace ? this : method, function() {
                        return {};
                    }), key = serializeArgs(args), cacheTime = options.time;
                    cache[key] && cacheTime && Date.now() - cache[key].time < cacheTime && delete cache[key];
                    if (cache[key]) return cache[key].value;
                    var time = Date.now(), value = method.apply(this, arguments);
                    cache[key] = {
                        time: time,
                        value: value
                    };
                    return cache[key].value;
                }
                memoizedFunction.reset = function() {
                    cacheMap.delete(options.thisNamespace ? _this : method);
                };
                options.name && (memoizedFunction.displayName = options.name + ":memoized");
                return memoizedFunction;
            };
            __webpack_exports__.h = function(method) {
                var options = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                function promisifiedFunction() {
                    return __WEBPACK_IMPORTED_MODULE_0_zalgo_promise_src__.a.try(method, this, arguments);
                }
                options.name && (promisifiedFunction.displayName = options.name + ":promisified");
                return promisifiedFunction;
            };
            __webpack_exports__.d = function(method, logic) {
                var args = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [], cache = method.__inline_memoize_cache__ = method.__inline_memoize_cache__ || {}, key = serializeArgs(args);
                return cache.hasOwnProperty(key) ? cache[key] : cache[key] = logic.apply(void 0, args);
            };
            __webpack_exports__.f = function() {};
            __webpack_exports__.g = function(method) {
                var called = !1;
                return function() {
                    if (!called) {
                        called = !0;
                        return method.apply(this, arguments);
                    }
                };
            };
            __webpack_exports__.k = function(item) {
                return "string" == typeof item ? item : item && "function" == typeof item.toString ? item.toString() : Object.prototype.toString.call(item);
            };
            __webpack_exports__.b = function(obj, source) {
                if (!source) return obj;
                if (Object.assign) return Object.assign(obj, source);
                for (var key in source) source.hasOwnProperty(key) && (obj[key] = source[key]);
                return obj;
            };
            __webpack_exports__.j = function(method, time) {
                var timeout = void 0;
                !function loop() {
                    timeout = setTimeout(function() {
                        method();
                        loop();
                    }, time);
                }();
                return {
                    cancel: function() {
                        clearTimeout(timeout);
                    }
                };
            };
            __webpack_exports__.a = function(string) {
                return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
            };
            __webpack_exports__.l = function(fn) {
                var result = void 0, error = void 0;
                try {
                    result = fn();
                } catch (err) {
                    error = err;
                }
                return {
                    result: result,
                    error: error
                };
            };
            __webpack_exports__.i = function(arr, item) {
                var index = arr.indexOf(item);
                -1 !== index && arr.splice(index, 1);
            };
            var __WEBPACK_IMPORTED_MODULE_0_zalgo_promise_src__ = __webpack_require__("./node_modules/zalgo-promise/src/index.js"), __WEBPACK_IMPORTED_MODULE_1_cross_domain_safe_weakmap_src__ = __webpack_require__("./node_modules/cross-domain-safe-weakmap/src/index.js"), _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
                return typeof obj;
            } : function(obj) {
                return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
            function uniqueID() {
                var chars = "0123456789abcdef";
                return "xxxxxxxxxx".replace(/./g, function() {
                    return chars.charAt(Math.floor(Math.random() * chars.length));
                }) + "_" + function(str) {
                    if ("function" == typeof btoa) return btoa(str);
                    if ("undefined" != typeof Buffer) return Buffer.from(str, "utf8").toString("base64");
                    throw new Error("Can not find window.btoa or Buffer");
                }(new Date().toISOString().slice(11, 19).replace("T", ".")).replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
            }
            var objectIDs = void 0;
            function serializeArgs(args) {
                try {
                    return JSON.stringify(Array.prototype.slice.call(args), function(subkey, val) {
                        return "function" == typeof val ? "memoize[" + function(obj) {
                            objectIDs = objectIDs || new __WEBPACK_IMPORTED_MODULE_1_cross_domain_safe_weakmap_src__.a();
                            if (null === obj || void 0 === obj || "object" !== (void 0 === obj ? "undefined" : _typeof(obj)) && "function" != typeof obj) throw new Error("Invalid object");
                            var uid = objectIDs.get(obj);
                            if (!uid) {
                                uid = (void 0 === obj ? "undefined" : _typeof(obj)) + ":" + uniqueID();
                                objectIDs.set(obj, uid);
                            }
                            return uid;
                        }(val) + "]" : val;
                    });
                } catch (err) {
                    throw new Error("Arguments not serializable -- can not be used to memoize");
                }
            }
        },
        "./node_modules/cross-domain-safe-weakmap/src/index.js": function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.d({}, "WeakMap", function() {
                return weakmap_CrossDomainSafeWeakMap;
            });
            var src = __webpack_require__("./node_modules/cross-domain-utils/src/index.js");
            function safeIndexOf(collection, item) {
                for (var i = 0; i < collection.length; i++) try {
                    if (collection[i] === item) return i;
                } catch (err) {}
                return -1;
            }
            var defineProperty = Object.defineProperty, counter = Date.now() % 1e9, weakmap_CrossDomainSafeWeakMap = function() {
                function CrossDomainSafeWeakMap() {
                    !function(instance, Constructor) {
                        if (!(instance instanceof CrossDomainSafeWeakMap)) throw new TypeError("Cannot call a class as a function");
                    }(this);
                    counter += 1;
                    this.name = "__weakmap_" + (1e9 * Math.random() >>> 0) + "__" + counter;
                    if (function() {
                        if ("undefined" == typeof WeakMap) return !1;
                        if (void 0 === Object.freeze) return !1;
                        try {
                            var testWeakMap = new WeakMap(), testKey = {};
                            Object.freeze(testKey);
                            testWeakMap.set(testKey, "__testvalue__");
                            return "__testvalue__" === testWeakMap.get(testKey);
                        } catch (err) {
                            return !1;
                        }
                    }()) try {
                        this.weakmap = new WeakMap();
                    } catch (err) {}
                    this.keys = [];
                    this.values = [];
                }
                CrossDomainSafeWeakMap.prototype._cleanupClosedWindows = function() {
                    for (var weakmap = this.weakmap, keys = this.keys, i = 0; i < keys.length; i++) {
                        var value = keys[i];
                        if (Object(src.w)(value) && Object(src.x)(value)) {
                            if (weakmap) try {
                                weakmap.delete(value);
                            } catch (err) {}
                            keys.splice(i, 1);
                            this.values.splice(i, 1);
                            i -= 1;
                        }
                    }
                };
                CrossDomainSafeWeakMap.prototype.isSafeToReadWrite = function(key) {
                    if (Object(src.w)(key)) return !1;
                    try {
                        key && key.self;
                        key && key[this.name];
                    } catch (err) {
                        return !1;
                    }
                    return !0;
                };
                CrossDomainSafeWeakMap.prototype.set = function(key, value) {
                    if (!key) throw new Error("WeakMap expected key");
                    var weakmap = this.weakmap;
                    if (weakmap) try {
                        weakmap.set(key, value);
                    } catch (err) {
                        delete this.weakmap;
                    }
                    if (this.isSafeToReadWrite(key)) try {
                        var name = this.name, entry = key[name];
                        entry && entry[0] === key ? entry[1] = value : defineProperty(key, name, {
                            value: [ key, value ],
                            writable: !0
                        });
                        return;
                    } catch (err) {}
                    this._cleanupClosedWindows();
                    var keys = this.keys, values = this.values, index = safeIndexOf(keys, key);
                    if (-1 === index) {
                        keys.push(key);
                        values.push(value);
                    } else values[index] = value;
                };
                CrossDomainSafeWeakMap.prototype.get = function(key) {
                    if (!key) throw new Error("WeakMap expected key");
                    var weakmap = this.weakmap;
                    if (weakmap) try {
                        if (weakmap.has(key)) return weakmap.get(key);
                    } catch (err) {
                        delete this.weakmap;
                    }
                    if (this.isSafeToReadWrite(key)) try {
                        var entry = key[this.name];
                        return entry && entry[0] === key ? entry[1] : void 0;
                    } catch (err) {}
                    this._cleanupClosedWindows();
                    var index = safeIndexOf(this.keys, key);
                    if (-1 !== index) return this.values[index];
                };
                CrossDomainSafeWeakMap.prototype.delete = function(key) {
                    if (!key) throw new Error("WeakMap expected key");
                    var weakmap = this.weakmap;
                    if (weakmap) try {
                        weakmap.delete(key);
                    } catch (err) {
                        delete this.weakmap;
                    }
                    if (this.isSafeToReadWrite(key)) try {
                        var entry = key[this.name];
                        entry && entry[0] === key && (entry[0] = entry[1] = void 0);
                    } catch (err) {}
                    this._cleanupClosedWindows();
                    var keys = this.keys, index = safeIndexOf(keys, key);
                    if (-1 !== index) {
                        keys.splice(index, 1);
                        this.values.splice(index, 1);
                    }
                };
                CrossDomainSafeWeakMap.prototype.has = function(key) {
                    if (!key) throw new Error("WeakMap expected key");
                    var weakmap = this.weakmap;
                    if (weakmap) try {
                        if (weakmap.has(key)) return !0;
                    } catch (err) {
                        delete this.weakmap;
                    }
                    if (this.isSafeToReadWrite(key)) try {
                        var entry = key[this.name];
                        return !(!entry || entry[0] !== key);
                    } catch (err) {}
                    this._cleanupClosedWindows();
                    return -1 !== safeIndexOf(this.keys, key);
                };
                CrossDomainSafeWeakMap.prototype.getOrSet = function(key, getter) {
                    if (this.has(key)) return this.get(key);
                    var value = getter();
                    this.set(key, value);
                    return value;
                };
                return CrossDomainSafeWeakMap;
            }();
            __webpack_require__.d(__webpack_exports__, "a", function() {
                return weakmap_CrossDomainSafeWeakMap;
            });
        },
        "./node_modules/cross-domain-utils/src/index.js": function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            function isRegex(item) {
                return "[object RegExp]" === Object.prototype.toString.call(item);
            }
            var PROTOCOL = {
                MOCK: "mock:",
                FILE: "file:",
                ABOUT: "about:"
            }, WILDCARD = "*", WINDOW_TYPE = {
                IFRAME: "iframe",
                POPUP: "popup"
            }, IE_WIN_ACCESS_ERROR = "Call was rejected by callee.\r\n";
            function isFileProtocol() {
                return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window).location.protocol === PROTOCOL.FILE;
            }
            function isAboutProtocol() {
                return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window).location.protocol === PROTOCOL.ABOUT;
            }
            function getParent() {
                var win = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window;
                if (win) try {
                    if (win.parent && win.parent !== win) return win.parent;
                } catch (err) {}
            }
            function getOpener() {
                var win = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window;
                if (win && !getParent(win)) try {
                    return win.opener;
                } catch (err) {}
            }
            function canReadFromWindow(win) {
                try {
                    win && win.location && win.location.href;
                    return !0;
                } catch (err) {}
                return !1;
            }
            function getActualDomain(win) {
                var location = (win = win || window).location;
                if (!location) throw new Error("Can not read window location");
                var protocol = location.protocol;
                if (!protocol) throw new Error("Can not read window protocol");
                if (protocol === PROTOCOL.FILE) return PROTOCOL.FILE + "//";
                if (protocol === PROTOCOL.ABOUT) {
                    var parent = getParent(win);
                    return parent && canReadFromWindow(parent) ? getActualDomain(parent) : PROTOCOL.ABOUT + "//";
                }
                var host = location.host;
                if (!host) throw new Error("Can not read window host");
                return protocol + "//" + host;
            }
            function getDomain(win) {
                var domain = getActualDomain(win = win || window);
                return domain && win.mockDomain && 0 === win.mockDomain.indexOf(PROTOCOL.MOCK) ? win.mockDomain : domain;
            }
            function isBlankDomain(win) {
                try {
                    if (!win.location.href) return !0;
                    if ("about:blank" === win.location.href) return !0;
                } catch (err) {}
                return !1;
            }
            function isActuallySameDomain(win) {
                try {
                    if (win === window) return !0;
                } catch (err) {}
                try {
                    var desc = Object.getOwnPropertyDescriptor(win, "location");
                    if (desc && !1 === desc.enumerable) return !1;
                } catch (err) {}
                try {
                    if (isAboutProtocol(win) && canReadFromWindow(win)) return !0;
                } catch (err) {}
                try {
                    if (getActualDomain(win) === getActualDomain(window)) return !0;
                } catch (err) {}
                return !1;
            }
            function isSameDomain(win) {
                if (!isActuallySameDomain(win)) return !1;
                try {
                    if (win === window) return !0;
                    if (isAboutProtocol(win) && canReadFromWindow(win)) return !0;
                    if (getDomain(window) === getDomain(win)) return !0;
                } catch (err) {}
                return !1;
            }
            function assertSameDomain(win) {
                if (!isSameDomain(win)) throw new Error("Expected window to be same domain");
                return win;
            }
            function getParents(win) {
                var result = [];
                try {
                    for (;win.parent !== win; ) {
                        result.push(win.parent);
                        win = win.parent;
                    }
                } catch (err) {}
                return result;
            }
            function isAncestorParent(parent, child) {
                if (!parent || !child) return !1;
                var childParent = getParent(child);
                return childParent ? childParent === parent : -1 !== getParents(child).indexOf(parent);
            }
            function getFrames(win) {
                var result = [], frames = void 0;
                try {
                    frames = win.frames;
                } catch (err) {
                    frames = win;
                }
                var len = void 0;
                try {
                    len = frames.length;
                } catch (err) {}
                if (0 === len) return result;
                if (len) {
                    for (var i = 0; i < len; i++) {
                        var frame = void 0;
                        try {
                            frame = frames[i];
                        } catch (err) {
                            continue;
                        }
                        result.push(frame);
                    }
                    return result;
                }
                for (var _i = 0; _i < 100; _i++) {
                    var _frame = void 0;
                    try {
                        _frame = frames[_i];
                    } catch (err) {
                        return result;
                    }
                    if (!_frame) return result;
                    result.push(_frame);
                }
                return result;
            }
            function getAllChildFrames(win) {
                for (var result = [], _i3 = 0, _getFrames2 = getFrames(win), _length2 = null == _getFrames2 ? 0 : _getFrames2.length; _i3 < _length2; _i3++) {
                    var frame = _getFrames2[_i3];
                    result.push(frame);
                    for (var _i5 = 0, _getAllChildFrames2 = getAllChildFrames(frame), _length4 = null == _getAllChildFrames2 ? 0 : _getAllChildFrames2.length; _i5 < _length4; _i5++) {
                        var childFrame = _getAllChildFrames2[_i5];
                        result.push(childFrame);
                    }
                }
                return result;
            }
            function getTop(win) {
                if (win) {
                    try {
                        if (win.top) return win.top;
                    } catch (err) {}
                    if (getParent(win) === win) return win;
                    try {
                        if (isAncestorParent(window, win) && window.top) return window.top;
                    } catch (err) {}
                    try {
                        if (isAncestorParent(win, window) && window.top) return window.top;
                    } catch (err) {}
                    for (var _i7 = 0, _getAllChildFrames4 = getAllChildFrames(win), _length6 = null == _getAllChildFrames4 ? 0 : _getAllChildFrames4.length; _i7 < _length6; _i7++) {
                        var frame = _getAllChildFrames4[_i7];
                        try {
                            if (frame.top) return frame.top;
                        } catch (err) {}
                        if (getParent(frame) === frame) return frame;
                    }
                }
            }
            function getNextOpener() {
                var win = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window;
                return getOpener(getTop(win) || win);
            }
            function getUltimateTop() {
                var opener = getNextOpener(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window);
                return opener ? getUltimateTop(opener) : top;
            }
            function getAllFramesInWindow(win) {
                var top = getTop(win);
                if (!top) throw new Error("Can not determine top window");
                return [].concat(getAllChildFrames(top), [ top ]);
            }
            function getAllWindows() {
                var win = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window, frames = getAllFramesInWindow(win), opener = getNextOpener(win);
                return opener ? [].concat(getAllWindows(opener), frames) : frames;
            }
            function isTop(win) {
                return win === getTop(win);
            }
            function isFrameWindowClosed(frame) {
                if (!frame.contentWindow) return !0;
                if (!frame.parentNode) return !0;
                var doc = frame.ownerDocument;
                return !(!doc || !doc.documentElement || doc.documentElement.contains(frame));
            }
            var iframeWindows = [], iframeFrames = [];
            function isWindowClosed(win) {
                var allowMock = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                try {
                    if (win === window) return !1;
                } catch (err) {
                    return !0;
                }
                try {
                    if (!win) return !0;
                } catch (err) {
                    return !0;
                }
                try {
                    if (win.closed) return !0;
                } catch (err) {
                    return !err || err.message !== IE_WIN_ACCESS_ERROR;
                }
                if (allowMock && isSameDomain(win)) try {
                    if (win.mockclosed) return !0;
                } catch (err) {}
                try {
                    if (!win.parent || !win.top) return !0;
                } catch (err) {}
                var iframeIndex = function(collection, item) {
                    for (var i = 0; i < collection.length; i++) try {
                        if (collection[i] === item) return i;
                    } catch (err) {}
                    return -1;
                }(iframeWindows, win);
                if (-1 !== iframeIndex) {
                    var frame = iframeFrames[iframeIndex];
                    if (frame && isFrameWindowClosed(frame)) return !0;
                }
                return !1;
            }
            function linkFrameWindow(frame) {
                !function() {
                    for (var i = 0; i < iframeWindows.length; i++) {
                        var closed = !1;
                        try {
                            closed = iframeWindows[i].closed;
                        } catch (err) {}
                        if (closed) {
                            iframeFrames.splice(i, 1);
                            iframeWindows.splice(i, 1);
                        }
                    }
                }();
                if (frame && frame.contentWindow) try {
                    iframeWindows.push(frame.contentWindow);
                    iframeFrames.push(frame);
                } catch (err) {}
            }
            function getUserAgent(win) {
                return (win = win || window).navigator.mockUserAgent || win.navigator.userAgent;
            }
            function getFrameByName(win, name) {
                for (var winFrames = getFrames(win), _i9 = 0, _length8 = null == winFrames ? 0 : winFrames.length; _i9 < _length8; _i9++) {
                    var childFrame = winFrames[_i9];
                    try {
                        if (isSameDomain(childFrame) && childFrame.name === name && -1 !== winFrames.indexOf(childFrame)) return childFrame;
                    } catch (err) {}
                }
                try {
                    if (-1 !== winFrames.indexOf(win.frames[name])) return win.frames[name];
                } catch (err) {}
                try {
                    if (-1 !== winFrames.indexOf(win[name])) return win[name];
                } catch (err) {}
            }
            function findChildFrameByName(win, name) {
                var frame = getFrameByName(win, name);
                if (frame) return frame;
                for (var _i11 = 0, _getFrames4 = getFrames(win), _length10 = null == _getFrames4 ? 0 : _getFrames4.length; _i11 < _length10; _i11++) {
                    var namedFrame = findChildFrameByName(_getFrames4[_i11], name);
                    if (namedFrame) return namedFrame;
                }
            }
            function findFrameByName(win, name) {
                var frame;
                return (frame = getFrameByName(win, name)) ? frame : findChildFrameByName(getTop(win) || win, name);
            }
            function isParent(win, frame) {
                var frameParent = getParent(frame);
                if (frameParent) return frameParent === win;
                for (var _i13 = 0, _getFrames6 = getFrames(win), _length12 = null == _getFrames6 ? 0 : _getFrames6.length; _i13 < _length12; _i13++) if (_getFrames6[_i13] === frame) return !0;
                return !1;
            }
            function isOpener(parent, child) {
                return parent === getOpener(child);
            }
            function getAncestor() {
                var win = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window;
                return getOpener(win = win || window) || getParent(win) || void 0;
            }
            function getAncestors(win) {
                for (var results = [], ancestor = win; ancestor; ) (ancestor = getAncestor(ancestor)) && results.push(ancestor);
                return results;
            }
            function isAncestor(parent, child) {
                var actualParent = getAncestor(child);
                if (actualParent) return actualParent === parent;
                if (child === parent) return !1;
                if (getTop(child) === child) return !1;
                for (var _i15 = 0, _getFrames8 = getFrames(parent), _length14 = null == _getFrames8 ? 0 : _getFrames8.length; _i15 < _length14; _i15++) if (_getFrames8[_i15] === child) return !0;
                return !1;
            }
            function isPopup() {
                return Boolean(getOpener(window));
            }
            function isIframe() {
                return Boolean(getParent(window));
            }
            function isFullpage() {
                return Boolean(!isIframe() && !isPopup());
            }
            function anyMatch(collection1, collection2) {
                for (var _i17 = 0, _length16 = null == collection1 ? 0 : collection1.length; _i17 < _length16; _i17++) for (var item1 = collection1[_i17], _i19 = 0, _length18 = null == collection2 ? 0 : collection2.length; _i19 < _length18; _i19++) if (item1 === collection2[_i19]) return !0;
                return !1;
            }
            function getDistanceFromTop() {
                for (var distance = 0, parent = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window; parent; ) (parent = getParent(parent)) && (distance += 1);
                return distance;
            }
            function getNthParent(win) {
                for (var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, parent = win, i = 0; i < n; i++) {
                    if (!parent) return;
                    parent = getParent(parent);
                }
                return parent;
            }
            function getNthParentFromTop(win) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                return getNthParent(win, getDistanceFromTop(win) - n);
            }
            function isSameTopWindow(win1, win2) {
                var top1 = getTop(win1) || win1, top2 = getTop(win2) || win2;
                try {
                    if (top1 && top2) return top1 === top2;
                } catch (err) {}
                var allFrames1 = getAllFramesInWindow(win1), allFrames2 = getAllFramesInWindow(win2);
                if (anyMatch(allFrames1, allFrames2)) return !0;
                var opener1 = getOpener(top1), opener2 = getOpener(top2);
                return !(opener1 && anyMatch(getAllFramesInWindow(opener1), allFrames2) || (opener2 && anyMatch(getAllFramesInWindow(opener2), allFrames1), 
                1));
            }
            function matchDomain(pattern, origin) {
                if ("string" == typeof pattern) {
                    if ("string" == typeof origin) return pattern === WILDCARD || origin === pattern;
                    if (isRegex(origin)) return !1;
                    if (Array.isArray(origin)) return !1;
                }
                return isRegex(pattern) ? isRegex(origin) ? pattern.toString() === origin.toString() : !Array.isArray(origin) && Boolean(origin.match(pattern)) : !!Array.isArray(pattern) && (Array.isArray(origin) ? JSON.stringify(pattern) === JSON.stringify(origin) : !isRegex(origin) && pattern.some(function(subpattern) {
                    return matchDomain(subpattern, origin);
                }));
            }
            function stringifyDomainPattern(pattern) {
                return Array.isArray(pattern) ? "(" + pattern.join(" | ") + ")" : isRegex(pattern) ? "RegExp(" + pattern.toString() : pattern.toString();
            }
            function getDomainFromUrl(url) {
                return url.match(/^(https?|mock|file):\/\//) ? url.split("/").slice(0, 3).join("/") : getDomain();
            }
            function onCloseWindow(win, callback) {
                var delay = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e3, maxtime = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1 / 0, timeout = void 0;
                !function check() {
                    if (isWindowClosed(win)) {
                        timeout && clearTimeout(timeout);
                        return callback();
                    }
                    if (maxtime <= 0) clearTimeout(timeout); else {
                        maxtime -= delay;
                        timeout = setTimeout(check, delay);
                    }
                }();
                return {
                    cancel: function() {
                        timeout && clearTimeout(timeout);
                    }
                };
            }
            function isWindow(obj) {
                try {
                    if (obj === window) return !0;
                } catch (err) {
                    if (err && err.message === IE_WIN_ACCESS_ERROR) return !0;
                }
                try {
                    if ("[object Window]" === Object.prototype.toString.call(obj)) return !0;
                } catch (err) {
                    if (err && err.message === IE_WIN_ACCESS_ERROR) return !0;
                }
                try {
                    if (window.Window && obj instanceof window.Window) return !0;
                } catch (err) {
                    if (err && err.message === IE_WIN_ACCESS_ERROR) return !0;
                }
                try {
                    if (obj && obj.self === obj) return !0;
                } catch (err) {
                    if (err && err.message === IE_WIN_ACCESS_ERROR) return !0;
                }
                try {
                    if (obj && obj.parent === obj) return !0;
                } catch (err) {
                    if (err && err.message === IE_WIN_ACCESS_ERROR) return !0;
                }
                try {
                    if (obj && obj.top === obj) return !0;
                } catch (err) {
                    if (err && err.message === IE_WIN_ACCESS_ERROR) return !0;
                }
                try {
                    if (obj && "__unlikely_value__" === obj.__cross_domain_utils_window_check__) return !1;
                } catch (err) {
                    return !0;
                }
                return !1;
            }
            function isBrowser() {
                return "undefined" != typeof window && void 0 !== window.location;
            }
            function isCurrentDomain(domain) {
                return !!isBrowser() && getDomain() === domain;
            }
            function isMockDomain(domain) {
                return 0 === domain.indexOf(PROTOCOL.MOCK);
            }
            function normalizeMockUrl(url) {
                if (!isMockDomain(getDomainFromUrl(url))) return url;
                throw new Error("Mock urls not supported out of test mode");
            }
            function closeWindow(win) {
                try {
                    win.close();
                } catch (err) {}
            }
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return isFileProtocol;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return isAboutProtocol;
            });
            __webpack_require__.d(__webpack_exports__, "l", function() {
                return getParent;
            });
            __webpack_require__.d(__webpack_exports__, "k", function() {
                return getOpener;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return canReadFromWindow;
            });
            __webpack_require__.d(__webpack_exports__, "b", function() {
                return getActualDomain;
            });
            __webpack_require__.d(__webpack_exports__, "f", function() {
                return getDomain;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return isBlankDomain;
            });
            __webpack_require__.d(__webpack_exports__, "o", function() {
                return isActuallySameDomain;
            });
            __webpack_require__.d(__webpack_exports__, "t", function() {
                return isSameDomain;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return assertSameDomain;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return getParents;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return isAncestorParent;
            });
            __webpack_require__.d(__webpack_exports__, "i", function() {
                return getFrames;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return getAllChildFrames;
            });
            __webpack_require__.d(__webpack_exports__, "m", function() {
                return getTop;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return getNextOpener;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return getUltimateTop;
            });
            __webpack_require__.d(__webpack_exports__, "c", function() {
                return getAllFramesInWindow;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return getAllWindows;
            });
            __webpack_require__.d(__webpack_exports__, "v", function() {
                return isTop;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return isFrameWindowClosed;
            });
            __webpack_require__.d(__webpack_exports__, "x", function() {
                return isWindowClosed;
            });
            __webpack_require__.d(__webpack_exports__, "y", function() {
                return linkFrameWindow;
            });
            __webpack_require__.d(__webpack_exports__, "n", function() {
                return getUserAgent;
            });
            __webpack_require__.d(__webpack_exports__, "h", function() {
                return getFrameByName;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return findChildFrameByName;
            });
            __webpack_require__.d(__webpack_exports__, "a", function() {
                return findFrameByName;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return isParent;
            });
            __webpack_require__.d(__webpack_exports__, "r", function() {
                return isOpener;
            });
            __webpack_require__.d(__webpack_exports__, "d", function() {
                return getAncestor;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return getAncestors;
            });
            __webpack_require__.d(__webpack_exports__, "p", function() {
                return isAncestor;
            });
            __webpack_require__.d(__webpack_exports__, "s", function() {
                return isPopup;
            });
            __webpack_require__.d(__webpack_exports__, "q", function() {
                return isIframe;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return isFullpage;
            });
            __webpack_require__.d(__webpack_exports__, "e", function() {
                return getDistanceFromTop;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return getNthParent;
            });
            __webpack_require__.d(__webpack_exports__, "j", function() {
                return getNthParentFromTop;
            });
            __webpack_require__.d(__webpack_exports__, "u", function() {
                return isSameTopWindow;
            });
            __webpack_require__.d(__webpack_exports__, "z", function() {
                return matchDomain;
            });
            __webpack_require__.d(__webpack_exports__, "B", function() {
                return stringifyDomainPattern;
            });
            __webpack_require__.d(__webpack_exports__, "g", function() {
                return getDomainFromUrl;
            });
            __webpack_require__.d(__webpack_exports__, "A", function() {
                return onCloseWindow;
            });
            __webpack_require__.d(__webpack_exports__, "w", function() {
                return isWindow;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return isBrowser;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return isCurrentDomain;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return isMockDomain;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return normalizeMockUrl;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return closeWindow;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return !0;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return PROTOCOL;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return WILDCARD;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return WINDOW_TYPE;
            });
        },
        "./node_modules/hi-base32/src/base32.js": function(module, exports, __webpack_require__) {
            (function(module) {
                var __WEBPACK_AMD_DEFINE_RESULT__, _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
                    return typeof obj;
                } : function(obj) {
                    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                };
                !function() {
                    "use strict";
                    var root = "object" === ("undefined" == typeof window ? "undefined" : _typeof(window)) ? window : {};
                    !root.HI_BASE32_NO_NODE_JS && "object" === ("undefined" == typeof process ? "undefined" : _typeof(process)) && process.versions && process.versions.node && (root = window);
                    var COMMON_JS = !root.HI_BASE32_NO_COMMON_JS && "object" === _typeof(module) && module.exports, AMD = __webpack_require__("./node_modules/webpack/buildin/amd-options.js"), BASE32_ENCODE_CHAR = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567".split(""), BASE32_DECODE_CHAR = {
                        A: 0,
                        B: 1,
                        C: 2,
                        D: 3,
                        E: 4,
                        F: 5,
                        G: 6,
                        H: 7,
                        I: 8,
                        J: 9,
                        K: 10,
                        L: 11,
                        M: 12,
                        N: 13,
                        O: 14,
                        P: 15,
                        Q: 16,
                        R: 17,
                        S: 18,
                        T: 19,
                        U: 20,
                        V: 21,
                        W: 22,
                        X: 23,
                        Y: 24,
                        Z: 25,
                        2: 26,
                        3: 27,
                        4: 28,
                        5: 29,
                        6: 30,
                        7: 31
                    }, blocks = [ 0, 0, 0, 0, 0, 0, 0, 0 ], throwInvalidUtf8 = function(position, partial) {
                        partial.length > 10 && (partial = "..." + partial.substr(-10));
                        var err = new Error("Decoded data is not valid UTF-8. Maybe try base32.decode.asBytes()? Partial data after reading " + position + " bytes: " + partial + " <-");
                        err.position = position;
                        throw err;
                    }, decodeAsBytes = function(base32Str) {
                        if (!/^[A-Z2-7=]+$/.test(base32Str)) throw new Error("Invalid base32 characters");
                        for (var v1, v2, v3, v4, v5, v6, v7, v8, bytes = [], index = 0, length = (base32Str = base32Str.replace(/=/g, "")).length, i = 0, count = length >> 3 << 3; i < count; ) {
                            v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v3 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v4 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v5 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v6 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v7 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v8 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            bytes[index++] = 255 & (v1 << 3 | v2 >>> 2);
                            bytes[index++] = 255 & (v2 << 6 | v3 << 1 | v4 >>> 4);
                            bytes[index++] = 255 & (v4 << 4 | v5 >>> 1);
                            bytes[index++] = 255 & (v5 << 7 | v6 << 2 | v7 >>> 3);
                            bytes[index++] = 255 & (v7 << 5 | v8);
                        }
                        var remain = length - count;
                        if (2 === remain) {
                            v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            bytes[index++] = 255 & (v1 << 3 | v2 >>> 2);
                        } else if (4 === remain) {
                            v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v3 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v4 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            bytes[index++] = 255 & (v1 << 3 | v2 >>> 2);
                            bytes[index++] = 255 & (v2 << 6 | v3 << 1 | v4 >>> 4);
                        } else if (5 === remain) {
                            v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v3 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v4 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v5 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            bytes[index++] = 255 & (v1 << 3 | v2 >>> 2);
                            bytes[index++] = 255 & (v2 << 6 | v3 << 1 | v4 >>> 4);
                            bytes[index++] = 255 & (v4 << 4 | v5 >>> 1);
                        } else if (7 === remain) {
                            v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v3 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v4 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v5 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v6 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v7 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            bytes[index++] = 255 & (v1 << 3 | v2 >>> 2);
                            bytes[index++] = 255 & (v2 << 6 | v3 << 1 | v4 >>> 4);
                            bytes[index++] = 255 & (v4 << 4 | v5 >>> 1);
                            bytes[index++] = 255 & (v5 << 7 | v6 << 2 | v7 >>> 3);
                        }
                        return bytes;
                    }, decode = function(base32Str, asciiOnly) {
                        if (!asciiOnly) return function(bytes) {
                            for (var b, c, str = "", length = bytes.length, i = 0, followingChars = 0; i < length; ) if ((b = bytes[i++]) <= 127) str += String.fromCharCode(b); else {
                                if (b > 191 && b <= 223) {
                                    c = 31 & b;
                                    followingChars = 1;
                                } else if (b <= 239) {
                                    c = 15 & b;
                                    followingChars = 2;
                                } else if (b <= 247) {
                                    c = 7 & b;
                                    followingChars = 3;
                                } else throwInvalidUtf8(i, str);
                                for (var j = 0; j < followingChars; ++j) {
                                    ((b = bytes[i++]) < 128 || b > 191) && throwInvalidUtf8(i, str);
                                    c <<= 6;
                                    c += 63 & b;
                                }
                                c >= 55296 && c <= 57343 && throwInvalidUtf8(i, str);
                                c > 1114111 && throwInvalidUtf8(i, str);
                                if (c <= 65535) str += String.fromCharCode(c); else {
                                    c -= 65536;
                                    str += String.fromCharCode(55296 + (c >> 10));
                                    str += String.fromCharCode(56320 + (1023 & c));
                                }
                            }
                            return str;
                        }(decodeAsBytes(base32Str));
                        if (!/^[A-Z2-7=]+$/.test(base32Str)) throw new Error("Invalid base32 characters");
                        var v1, v2, v3, v4, v5, v6, v7, v8, str = "", length = base32Str.indexOf("=");
                        -1 === length && (length = base32Str.length);
                        for (var i = 0, count = length >> 3 << 3; i < count; ) {
                            v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v3 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v4 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v5 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v6 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v7 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v8 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            str += String.fromCharCode(255 & (v1 << 3 | v2 >>> 2)) + String.fromCharCode(255 & (v2 << 6 | v3 << 1 | v4 >>> 4)) + String.fromCharCode(255 & (v4 << 4 | v5 >>> 1)) + String.fromCharCode(255 & (v5 << 7 | v6 << 2 | v7 >>> 3)) + String.fromCharCode(255 & (v7 << 5 | v8));
                        }
                        var remain = length - count;
                        if (2 === remain) {
                            v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            str += String.fromCharCode(255 & (v1 << 3 | v2 >>> 2));
                        } else if (4 === remain) {
                            v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v3 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v4 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            str += String.fromCharCode(255 & (v1 << 3 | v2 >>> 2)) + String.fromCharCode(255 & (v2 << 6 | v3 << 1 | v4 >>> 4));
                        } else if (5 === remain) {
                            v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v3 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v4 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v5 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            str += String.fromCharCode(255 & (v1 << 3 | v2 >>> 2)) + String.fromCharCode(255 & (v2 << 6 | v3 << 1 | v4 >>> 4)) + String.fromCharCode(255 & (v4 << 4 | v5 >>> 1));
                        } else if (7 === remain) {
                            v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v3 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v4 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v5 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v6 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v7 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            str += String.fromCharCode(255 & (v1 << 3 | v2 >>> 2)) + String.fromCharCode(255 & (v2 << 6 | v3 << 1 | v4 >>> 4)) + String.fromCharCode(255 & (v4 << 4 | v5 >>> 1)) + String.fromCharCode(255 & (v5 << 7 | v6 << 2 | v7 >>> 3));
                        }
                        return str;
                    }, exports = {
                        encode: function(input, asciiOnly) {
                            var notString = "string" != typeof input;
                            notString && input.constructor === ArrayBuffer && (input = new Uint8Array(input));
                            return notString ? function(bytes) {
                                for (var v1, v2, v3, v4, v5, base32Str = "", length = bytes.length, i = 0, count = 5 * parseInt(length / 5); i < count; ) {
                                    v1 = bytes[i++];
                                    v2 = bytes[i++];
                                    v3 = bytes[i++];
                                    v4 = bytes[i++];
                                    v5 = bytes[i++];
                                    base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[31 & (v1 << 2 | v2 >>> 6)] + BASE32_ENCODE_CHAR[v2 >>> 1 & 31] + BASE32_ENCODE_CHAR[31 & (v2 << 4 | v3 >>> 4)] + BASE32_ENCODE_CHAR[31 & (v3 << 1 | v4 >>> 7)] + BASE32_ENCODE_CHAR[v4 >>> 2 & 31] + BASE32_ENCODE_CHAR[31 & (v4 << 3 | v5 >>> 5)] + BASE32_ENCODE_CHAR[31 & v5];
                                }
                                var remain = length - count;
                                if (1 === remain) {
                                    v1 = bytes[i];
                                    base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[v1 << 2 & 31] + "======";
                                } else if (2 === remain) {
                                    v1 = bytes[i++];
                                    v2 = bytes[i];
                                    base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[31 & (v1 << 2 | v2 >>> 6)] + BASE32_ENCODE_CHAR[v2 >>> 1 & 31] + BASE32_ENCODE_CHAR[v2 << 4 & 31] + "====";
                                } else if (3 === remain) {
                                    v1 = bytes[i++];
                                    v2 = bytes[i++];
                                    v3 = bytes[i];
                                    base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[31 & (v1 << 2 | v2 >>> 6)] + BASE32_ENCODE_CHAR[v2 >>> 1 & 31] + BASE32_ENCODE_CHAR[31 & (v2 << 4 | v3 >>> 4)] + BASE32_ENCODE_CHAR[v3 << 1 & 31] + "===";
                                } else if (4 === remain) {
                                    v1 = bytes[i++];
                                    v2 = bytes[i++];
                                    v3 = bytes[i++];
                                    v4 = bytes[i];
                                    base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[31 & (v1 << 2 | v2 >>> 6)] + BASE32_ENCODE_CHAR[v2 >>> 1 & 31] + BASE32_ENCODE_CHAR[31 & (v2 << 4 | v3 >>> 4)] + BASE32_ENCODE_CHAR[31 & (v3 << 1 | v4 >>> 7)] + BASE32_ENCODE_CHAR[v4 >>> 2 & 31] + BASE32_ENCODE_CHAR[v4 << 3 & 31] + "=";
                                }
                                return base32Str;
                            }(input) : asciiOnly ? function(str) {
                                for (var v1, v2, v3, v4, v5, base32Str = "", length = str.length, i = 0, count = 5 * parseInt(length / 5); i < count; ) {
                                    v1 = str.charCodeAt(i++);
                                    v2 = str.charCodeAt(i++);
                                    v3 = str.charCodeAt(i++);
                                    v4 = str.charCodeAt(i++);
                                    v5 = str.charCodeAt(i++);
                                    base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[31 & (v1 << 2 | v2 >>> 6)] + BASE32_ENCODE_CHAR[v2 >>> 1 & 31] + BASE32_ENCODE_CHAR[31 & (v2 << 4 | v3 >>> 4)] + BASE32_ENCODE_CHAR[31 & (v3 << 1 | v4 >>> 7)] + BASE32_ENCODE_CHAR[v4 >>> 2 & 31] + BASE32_ENCODE_CHAR[31 & (v4 << 3 | v5 >>> 5)] + BASE32_ENCODE_CHAR[31 & v5];
                                }
                                var remain = length - count;
                                if (1 === remain) {
                                    v1 = str.charCodeAt(i);
                                    base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[v1 << 2 & 31] + "======";
                                } else if (2 === remain) {
                                    v1 = str.charCodeAt(i++);
                                    v2 = str.charCodeAt(i);
                                    base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[31 & (v1 << 2 | v2 >>> 6)] + BASE32_ENCODE_CHAR[v2 >>> 1 & 31] + BASE32_ENCODE_CHAR[v2 << 4 & 31] + "====";
                                } else if (3 === remain) {
                                    v1 = str.charCodeAt(i++);
                                    v2 = str.charCodeAt(i++);
                                    v3 = str.charCodeAt(i);
                                    base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[31 & (v1 << 2 | v2 >>> 6)] + BASE32_ENCODE_CHAR[v2 >>> 1 & 31] + BASE32_ENCODE_CHAR[31 & (v2 << 4 | v3 >>> 4)] + BASE32_ENCODE_CHAR[v3 << 1 & 31] + "===";
                                } else if (4 === remain) {
                                    v1 = str.charCodeAt(i++);
                                    v2 = str.charCodeAt(i++);
                                    v3 = str.charCodeAt(i++);
                                    v4 = str.charCodeAt(i);
                                    base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[31 & (v1 << 2 | v2 >>> 6)] + BASE32_ENCODE_CHAR[v2 >>> 1 & 31] + BASE32_ENCODE_CHAR[31 & (v2 << 4 | v3 >>> 4)] + BASE32_ENCODE_CHAR[31 & (v3 << 1 | v4 >>> 7)] + BASE32_ENCODE_CHAR[v4 >>> 2 & 31] + BASE32_ENCODE_CHAR[v4 << 3 & 31] + "=";
                                }
                                return base32Str;
                            }(input) : function(str) {
                                var v1, v2, v3, v4, v5, code, i, end = !1, base32Str = "", index = 0, start = 0, length = str.length;
                                do {
                                    blocks[0] = blocks[5];
                                    blocks[1] = blocks[6];
                                    blocks[2] = blocks[7];
                                    for (i = start; index < length && i < 5; ++index) if ((code = str.charCodeAt(index)) < 128) blocks[i++] = code; else if (code < 2048) {
                                        blocks[i++] = 192 | code >> 6;
                                        blocks[i++] = 128 | 63 & code;
                                    } else if (code < 55296 || code >= 57344) {
                                        blocks[i++] = 224 | code >> 12;
                                        blocks[i++] = 128 | code >> 6 & 63;
                                        blocks[i++] = 128 | 63 & code;
                                    } else {
                                        code = 65536 + ((1023 & code) << 10 | 1023 & str.charCodeAt(++index));
                                        blocks[i++] = 240 | code >> 18;
                                        blocks[i++] = 128 | code >> 12 & 63;
                                        blocks[i++] = 128 | code >> 6 & 63;
                                        blocks[i++] = 128 | 63 & code;
                                    }
                                    start = i - 5;
                                    index === length && ++index;
                                    index > length && i < 6 && (end = !0);
                                    v1 = blocks[0];
                                    if (i > 4) {
                                        v2 = blocks[1];
                                        v3 = blocks[2];
                                        v4 = blocks[3];
                                        v5 = blocks[4];
                                        base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[31 & (v1 << 2 | v2 >>> 6)] + BASE32_ENCODE_CHAR[v2 >>> 1 & 31] + BASE32_ENCODE_CHAR[31 & (v2 << 4 | v3 >>> 4)] + BASE32_ENCODE_CHAR[31 & (v3 << 1 | v4 >>> 7)] + BASE32_ENCODE_CHAR[v4 >>> 2 & 31] + BASE32_ENCODE_CHAR[31 & (v4 << 3 | v5 >>> 5)] + BASE32_ENCODE_CHAR[31 & v5];
                                    } else if (1 === i) base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[v1 << 2 & 31] + "======"; else if (2 === i) {
                                        v2 = blocks[1];
                                        base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[31 & (v1 << 2 | v2 >>> 6)] + BASE32_ENCODE_CHAR[v2 >>> 1 & 31] + BASE32_ENCODE_CHAR[v2 << 4 & 31] + "====";
                                    } else if (3 === i) {
                                        v2 = blocks[1];
                                        v3 = blocks[2];
                                        base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[31 & (v1 << 2 | v2 >>> 6)] + BASE32_ENCODE_CHAR[v2 >>> 1 & 31] + BASE32_ENCODE_CHAR[31 & (v2 << 4 | v3 >>> 4)] + BASE32_ENCODE_CHAR[v3 << 1 & 31] + "===";
                                    } else {
                                        v2 = blocks[1];
                                        v3 = blocks[2];
                                        v4 = blocks[3];
                                        base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[31 & (v1 << 2 | v2 >>> 6)] + BASE32_ENCODE_CHAR[v2 >>> 1 & 31] + BASE32_ENCODE_CHAR[31 & (v2 << 4 | v3 >>> 4)] + BASE32_ENCODE_CHAR[31 & (v3 << 1 | v4 >>> 7)] + BASE32_ENCODE_CHAR[v4 >>> 2 & 31] + BASE32_ENCODE_CHAR[v4 << 3 & 31] + "=";
                                    }
                                } while (!end);
                                return base32Str;
                            }(input);
                        },
                        decode: decode
                    };
                    decode.asBytes = decodeAsBytes;
                    if (COMMON_JS) module.exports = exports; else {
                        root.base32 = exports;
                        AMD && void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = function() {
                            return exports;
                        }.call(exports, __webpack_require__, exports, module)) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
                    }
                }();
            }).call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module));
        },
        "./node_modules/post-robot/src/bridge/index.js": function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            Object.defineProperty(__webpack_exports__, "__esModule", {
                value: !0
            });
            var src = __webpack_require__("./node_modules/zalgo-promise/src/index.js"), cross_domain_utils_src = __webpack_require__("./node_modules/cross-domain-utils/src/index.js"), conf = __webpack_require__("./node_modules/post-robot/src/conf/index.js"), lib = __webpack_require__("./node_modules/post-robot/src/lib/index.js"), global = __webpack_require__("./node_modules/post-robot/src/global.js");
            global.a.tunnelWindows = global.a.tunnelWindows || {};
            global.a.tunnelWindowId = 0;
            function deleteTunnelWindow(id) {
                try {
                    global.a.tunnelWindows[id] && delete global.a.tunnelWindows[id].source;
                } catch (err) {}
                delete global.a.tunnelWindows[id];
            }
            global.a.openTunnelToParent = function(_ref2) {
                var name = _ref2.name, source = _ref2.source, canary = _ref2.canary, sendMessage = _ref2.sendMessage, parentWindow = Object(cross_domain_utils_src.l)(window);
                if (!parentWindow) throw new Error("No parent window found to open tunnel to");
                var id = function(_ref) {
                    var name = _ref.name, source = _ref.source, canary = _ref.canary, sendMessage = _ref.sendMessage;
                    !function() {
                        for (var tunnelWindows = global.a.tunnelWindows, _i2 = 0, _Object$keys2 = Object.keys(tunnelWindows), _length2 = null == _Object$keys2 ? 0 : _Object$keys2.length; _i2 < _length2; _i2++) {
                            var key = _Object$keys2[_i2], tunnelWindow = tunnelWindows[key];
                            try {
                                Object(lib.j)(tunnelWindow.source);
                            } catch (err) {
                                deleteTunnelWindow(key);
                                continue;
                            }
                            Object(cross_domain_utils_src.x)(tunnelWindow.source) && deleteTunnelWindow(key);
                        }
                    }();
                    global.a.tunnelWindowId += 1;
                    global.a.tunnelWindows[global.a.tunnelWindowId] = {
                        name: name,
                        source: source,
                        canary: canary,
                        sendMessage: sendMessage
                    };
                    return global.a.tunnelWindowId;
                }({
                    name: name,
                    source: source,
                    canary: canary,
                    sendMessage: sendMessage
                });
                return global.a.send(parentWindow, conf.b.POST_MESSAGE_NAMES.OPEN_TUNNEL, {
                    name: name,
                    sendMessage: function() {
                        var tunnelWindow = function(id) {
                            return global.a.tunnelWindows[id];
                        }(id);
                        try {
                            Object(lib.j)(tunnelWindow && tunnelWindow.source);
                        } catch (err) {
                            deleteTunnelWindow(id);
                            return;
                        }
                        if (tunnelWindow && tunnelWindow.source && !Object(cross_domain_utils_src.x)(tunnelWindow.source)) {
                            try {
                                tunnelWindow.canary();
                            } catch (err) {
                                return;
                            }
                            tunnelWindow.sendMessage.apply(this, arguments);
                        }
                    }
                }, {
                    domain: conf.b.WILDCARD
                });
            };
            var cross_domain_safe_weakmap_src = __webpack_require__("./node_modules/cross-domain-safe-weakmap/src/index.js");
            function needsBridgeForBrowser() {
                return !!Object(cross_domain_utils_src.n)(window).match(/MSIE|trident|edge\/12|edge\/13/i) || !conf.a.ALLOW_POSTMESSAGE_POPUP;
            }
            function needsBridgeForWin(win) {
                return !Object(cross_domain_utils_src.u)(window, win);
            }
            function needsBridgeForDomain(domain, win) {
                if (domain) {
                    if (Object(cross_domain_utils_src.f)() !== Object(cross_domain_utils_src.g)(domain)) return !0;
                } else if (win && !Object(cross_domain_utils_src.t)(win)) return !0;
                return !1;
            }
            function needsBridge(_ref) {
                var win = _ref.win, domain = _ref.domain;
                return !(!needsBridgeForBrowser() || domain && !needsBridgeForDomain(domain, win) || win && !needsBridgeForWin(win));
            }
            function getBridgeName(domain) {
                var sanitizedDomain = (domain = domain || Object(cross_domain_utils_src.g)(domain)).replace(/[^a-zA-Z0-9]+/g, "_");
                return conf.b.BRIDGE_NAME_PREFIX + "_" + sanitizedDomain;
            }
            function isBridge() {
                return Boolean(window.name && window.name === getBridgeName(Object(cross_domain_utils_src.f)()));
            }
            var documentBodyReady = new src.a(function(resolve) {
                if (window.document && window.document.body) return resolve(window.document.body);
                var interval = setInterval(function() {
                    if (window.document && window.document.body) {
                        clearInterval(interval);
                        return resolve(window.document.body);
                    }
                }, 10);
            });
            global.a.remoteWindows = global.a.remoteWindows || new cross_domain_safe_weakmap_src.a();
            function registerRemoteWindow(win) {
                global.a.remoteWindows.set(win, {
                    sendMessagePromise: new src.a()
                });
            }
            function findRemoteWindow(win) {
                return global.a.remoteWindows.get(win);
            }
            function registerRemoteSendMessage(win, domain, sendMessage) {
                var remoteWindow = findRemoteWindow(win);
                if (!remoteWindow) throw new Error("Window not found to register sendMessage to");
                var sendMessageWrapper = function(remoteWin, message, remoteDomain) {
                    if (remoteWin !== win) throw new Error("Remote window does not match window");
                    if (!Object(cross_domain_utils_src.z)(remoteDomain, domain)) throw new Error("Remote domain " + remoteDomain + " does not match domain " + domain);
                    sendMessage(message);
                };
                remoteWindow.sendMessagePromise.resolve(sendMessageWrapper);
                remoteWindow.sendMessagePromise = src.a.resolve(sendMessageWrapper);
            }
            function rejectRemoteSendMessage(win, err) {
                var remoteWindow = findRemoteWindow(win);
                if (!remoteWindow) throw new Error("Window not found on which to reject sendMessage");
                remoteWindow.sendMessagePromise.asyncReject(err);
            }
            function sendBridgeMessage(win, message, domain) {
                var messagingChild = Object(cross_domain_utils_src.r)(window, win), messagingParent = Object(cross_domain_utils_src.r)(win, window);
                if (!messagingChild && !messagingParent) throw new Error("Can only send messages to and from parent and popup windows");
                var remoteWindow = findRemoteWindow(win);
                if (!remoteWindow) throw new Error("Window not found to send message to");
                return remoteWindow.sendMessagePromise.then(function(sendMessage) {
                    return sendMessage(win, message, domain);
                });
            }
            var awaitRemoteBridgeForWindow = Object(lib.r)(function(win) {
                return src.a.try(function() {
                    for (var _i2 = 0, _getFrames2 = Object(cross_domain_utils_src.i)(win), _length2 = null == _getFrames2 ? 0 : _getFrames2.length; _i2 < _length2; _i2++) {
                        var frame = _getFrames2[_i2];
                        try {
                            if (frame && frame !== window && Object(cross_domain_utils_src.t)(frame) && frame[conf.b.WINDOW_PROPS.POSTROBOT]) return frame;
                        } catch (err) {
                            continue;
                        }
                    }
                    try {
                        var _frame = Object(cross_domain_utils_src.h)(win, getBridgeName(Object(cross_domain_utils_src.f)()));
                        if (!_frame) return;
                        return Object(cross_domain_utils_src.t)(_frame) && _frame[conf.b.WINDOW_PROPS.POSTROBOT] ? _frame : new src.a(function(resolve) {
                            var interval = void 0, timeout = void 0;
                            interval = setInterval(function() {
                                if (_frame && Object(cross_domain_utils_src.t)(_frame) && _frame[conf.b.WINDOW_PROPS.POSTROBOT]) {
                                    clearInterval(interval);
                                    clearTimeout(timeout);
                                    return resolve(_frame);
                                }
                            }, 100);
                            timeout = setTimeout(function() {
                                clearInterval(interval);
                                return resolve();
                            }, 2e3);
                        });
                    } catch (err) {}
                });
            });
            function openTunnelToOpener() {
                return src.a.try(function() {
                    var opener = Object(cross_domain_utils_src.k)(window);
                    if (opener && needsBridge({
                        win: opener
                    })) {
                        registerRemoteWindow(opener);
                        return awaitRemoteBridgeForWindow(opener).then(function(bridge) {
                            return bridge ? window.name ? bridge[conf.b.WINDOW_PROPS.POSTROBOT].openTunnelToParent({
                                name: window.name,
                                source: window,
                                canary: function() {},
                                sendMessage: function(message) {
                                    try {
                                        Object(lib.j)(window);
                                    } catch (err) {
                                        return;
                                    }
                                    if (window && !window.closed) try {
                                        global.a.receiveMessage({
                                            data: message,
                                            origin: this.origin,
                                            source: this.source
                                        });
                                    } catch (err) {
                                        src.a.reject(err);
                                    }
                                }
                            }).then(function(_ref) {
                                var source = _ref.source, origin = _ref.origin, data = _ref.data;
                                if (source !== opener) throw new Error("Source does not match opener");
                                registerRemoteSendMessage(source, origin, data.sendMessage);
                            }).catch(function(err) {
                                rejectRemoteSendMessage(opener, err);
                                throw err;
                            }) : rejectRemoteSendMessage(opener, new Error("Can not register with opener: window does not have a name")) : rejectRemoteSendMessage(opener, new Error("Can not register with opener: no bridge found in opener"));
                        });
                    }
                });
            }
            global.a.bridges = global.a.bridges || {};
            global.a.bridgeFrames = global.a.bridgeFrames || {};
            global.a.popupWindowsByWin = global.a.popupWindowsByWin || new cross_domain_safe_weakmap_src.a();
            global.a.popupWindowsByName = global.a.popupWindowsByName || {};
            function hasBridge(url, domain) {
                domain = domain || Object(cross_domain_utils_src.g)(url);
                return Boolean(global.a.bridges[domain]);
            }
            function openBridge(url, domain) {
                domain = domain || Object(cross_domain_utils_src.g)(url);
                if (global.a.bridges[domain]) return global.a.bridges[domain];
                global.a.bridges[domain] = src.a.try(function() {
                    if (Object(cross_domain_utils_src.f)() === domain) throw new Error("Can not open bridge on the same domain as current domain: " + domain);
                    var name = getBridgeName(domain);
                    if (Object(cross_domain_utils_src.h)(window, name)) throw new Error("Frame with name " + name + " already exists on page");
                    var iframe = function(name, url) {
                        var iframe = document.createElement("iframe");
                        iframe.setAttribute("name", name);
                        iframe.setAttribute("id", name);
                        iframe.setAttribute("style", "display: none; margin: 0; padding: 0; border: 0px none; overflow: hidden;");
                        iframe.setAttribute("frameborder", "0");
                        iframe.setAttribute("border", "0");
                        iframe.setAttribute("scrolling", "no");
                        iframe.setAttribute("allowTransparency", "true");
                        iframe.setAttribute("tabindex", "-1");
                        iframe.setAttribute("hidden", "true");
                        iframe.setAttribute("title", "");
                        iframe.setAttribute("role", "presentation");
                        iframe.src = url;
                        return iframe;
                    }(name, url);
                    global.a.bridgeFrames[domain] = iframe;
                    return documentBodyReady.then(function(body) {
                        body.appendChild(iframe);
                        var bridge = iframe.contentWindow;
                        !function(source, domain) {
                            global.a.on(conf.b.POST_MESSAGE_NAMES.OPEN_TUNNEL, {
                                window: source,
                                domain: domain
                            }, function(_ref) {
                                var origin = _ref.origin, data = _ref.data;
                                if (origin !== domain) throw new Error("Domain " + domain + " does not match origin " + origin);
                                if (!data.name) throw new Error("Register window expected to be passed window name");
                                if (!data.sendMessage) throw new Error("Register window expected to be passed sendMessage method");
                                if (!global.a.popupWindowsByName[data.name]) throw new Error("Window with name " + data.name + " does not exist, or was not opened by this window");
                                if (!global.a.popupWindowsByName[data.name].domain) throw new Error("We do not have a registered domain for window " + data.name);
                                if (global.a.popupWindowsByName[data.name].domain !== origin) throw new Error("Message origin " + origin + " does not matched registered window origin " + global.a.popupWindowsByName[data.name].domain);
                                registerRemoteSendMessage(global.a.popupWindowsByName[data.name].win, domain, data.sendMessage);
                                return {
                                    sendMessage: function(message) {
                                        if (window && !window.closed) {
                                            var winDetails = global.a.popupWindowsByName[data.name];
                                            if (winDetails) try {
                                                global.a.receiveMessage({
                                                    data: message,
                                                    origin: winDetails.domain,
                                                    source: winDetails.win
                                                });
                                            } catch (err) {
                                                src.a.reject(err);
                                            }
                                        }
                                    }
                                };
                            });
                        }(bridge, domain);
                        return new src.a(function(resolve, reject) {
                            iframe.onload = resolve;
                            iframe.onerror = reject;
                        }).then(function() {
                            return Object(lib.k)(bridge, conf.a.BRIDGE_TIMEOUT, "Bridge " + url);
                        }).then(function() {
                            return bridge;
                        });
                    });
                });
                return global.a.bridges[domain];
            }
            var windowOpen = window.open;
            window.open = function(url, name, options, last) {
                var domain = url;
                if (url && 0 === url.indexOf(conf.b.MOCK_PROTOCOL)) {
                    var _url$split = url.split("|");
                    domain = _url$split[0];
                    url = _url$split[1];
                }
                domain && (domain = Object(cross_domain_utils_src.g)(domain));
                var win = windowOpen.call(this, url, name, options, last);
                if (!win) return win;
                url && registerRemoteWindow(win);
                for (var _i2 = 0, _Object$keys2 = Object.keys(global.a.popupWindowsByName), _length2 = null == _Object$keys2 ? 0 : _Object$keys2.length; _i2 < _length2; _i2++) {
                    var winName = _Object$keys2[_i2];
                    Object(cross_domain_utils_src.x)(global.a.popupWindowsByName[winName].win) && delete global.a.popupWindowsByName[winName];
                }
                if (name && win) {
                    var winOptions = global.a.popupWindowsByWin.get(win) || global.a.popupWindowsByName[name] || {};
                    winOptions.name = winOptions.name || name;
                    winOptions.win = winOptions.win || win;
                    winOptions.domain = winOptions.domain || domain;
                    global.a.popupWindowsByWin.set(win, winOptions);
                    global.a.popupWindowsByName[name] = winOptions;
                }
                return win;
            };
            function linkUrl(win, url) {
                var winOptions = global.a.popupWindowsByWin.get(win);
                if (winOptions) {
                    winOptions.domain = Object(cross_domain_utils_src.g)(url);
                    registerRemoteWindow(win);
                }
            }
            function destroyBridges() {
                for (var _i4 = 0, _Object$keys4 = Object.keys(global.a.bridgeFrames), _length4 = null == _Object$keys4 ? 0 : _Object$keys4.length; _i4 < _length4; _i4++) {
                    var domain = _Object$keys4[_i4], frame = global.a.bridgeFrames[domain];
                    frame.parentNode && frame.parentNode.removeChild(frame);
                }
                global.a.bridgeFrames = {};
                global.a.bridges = {};
            }
            __webpack_require__.d(__webpack_exports__, "openTunnelToOpener", function() {
                return openTunnelToOpener;
            });
            __webpack_require__.d(__webpack_exports__, "needsBridgeForBrowser", function() {
                return needsBridgeForBrowser;
            });
            __webpack_require__.d(__webpack_exports__, "needsBridgeForWin", function() {
                return needsBridgeForWin;
            });
            __webpack_require__.d(__webpack_exports__, "needsBridgeForDomain", function() {
                return needsBridgeForDomain;
            });
            __webpack_require__.d(__webpack_exports__, "needsBridge", function() {
                return needsBridge;
            });
            __webpack_require__.d(__webpack_exports__, "getBridgeName", function() {
                return getBridgeName;
            });
            __webpack_require__.d(__webpack_exports__, "isBridge", function() {
                return isBridge;
            });
            __webpack_require__.d(__webpack_exports__, "documentBodyReady", function() {
                return documentBodyReady;
            });
            __webpack_require__.d(__webpack_exports__, "registerRemoteWindow", function() {
                return registerRemoteWindow;
            });
            __webpack_require__.d(__webpack_exports__, "findRemoteWindow", function() {
                return findRemoteWindow;
            });
            __webpack_require__.d(__webpack_exports__, "registerRemoteSendMessage", function() {
                return registerRemoteSendMessage;
            });
            __webpack_require__.d(__webpack_exports__, "rejectRemoteSendMessage", function() {
                return rejectRemoteSendMessage;
            });
            __webpack_require__.d(__webpack_exports__, "sendBridgeMessage", function() {
                return sendBridgeMessage;
            });
            __webpack_require__.d(__webpack_exports__, "hasBridge", function() {
                return hasBridge;
            });
            __webpack_require__.d(__webpack_exports__, "openBridge", function() {
                return openBridge;
            });
            __webpack_require__.d(__webpack_exports__, "linkUrl", function() {
                return linkUrl;
            });
            __webpack_require__.d(__webpack_exports__, "destroyBridges", function() {
                return destroyBridges;
            });
        },
        "./node_modules/post-robot/src/bridge/interface.js": function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            Object.defineProperty(__webpack_exports__, "__esModule", {
                value: !0
            });
            var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__("./node_modules/post-robot/src/bridge/index.js");
            __webpack_require__.d(__webpack_exports__, "openBridge", function() {
                return __WEBPACK_IMPORTED_MODULE_0__index__.openBridge;
            });
            __webpack_require__.d(__webpack_exports__, "linkUrl", function() {
                return __WEBPACK_IMPORTED_MODULE_0__index__.linkUrl;
            });
            __webpack_require__.d(__webpack_exports__, "isBridge", function() {
                return __WEBPACK_IMPORTED_MODULE_0__index__.isBridge;
            });
            __webpack_require__.d(__webpack_exports__, "needsBridge", function() {
                return __WEBPACK_IMPORTED_MODULE_0__index__.needsBridge;
            });
            __webpack_require__.d(__webpack_exports__, "needsBridgeForBrowser", function() {
                return __WEBPACK_IMPORTED_MODULE_0__index__.needsBridgeForBrowser;
            });
            __webpack_require__.d(__webpack_exports__, "hasBridge", function() {
                return __WEBPACK_IMPORTED_MODULE_0__index__.hasBridge;
            });
            __webpack_require__.d(__webpack_exports__, "needsBridgeForWin", function() {
                return __WEBPACK_IMPORTED_MODULE_0__index__.needsBridgeForWin;
            });
            __webpack_require__.d(__webpack_exports__, "needsBridgeForDomain", function() {
                return __WEBPACK_IMPORTED_MODULE_0__index__.needsBridgeForDomain;
            });
            __webpack_require__.d(__webpack_exports__, "openTunnelToOpener", function() {
                return __WEBPACK_IMPORTED_MODULE_0__index__.openTunnelToOpener;
            });
            __webpack_require__.d(__webpack_exports__, "destroyBridges", function() {
                return __WEBPACK_IMPORTED_MODULE_0__index__.destroyBridges;
            });
        },
        "./node_modules/post-robot/src/compat/index.js": function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            Object.defineProperty(__webpack_exports__, "__esModule", {
                value: !0
            });
            var src = __webpack_require__("./node_modules/cross-domain-utils/src/index.js"), conf = __webpack_require__("./node_modules/post-robot/src/conf/index.js");
            function emulateIERestrictions(sourceWindow, targetWindow) {
                if (!conf.a.ALLOW_POSTMESSAGE_POPUP && !1 === Object(src.u)(sourceWindow, targetWindow)) throw new Error("Can not send and receive post messages between two different windows (disabled to emulate IE)");
            }
            __webpack_require__.d(__webpack_exports__, "emulateIERestrictions", function() {
                return emulateIERestrictions;
            });
        },
        "./node_modules/post-robot/src/conf/index.js": function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            var _ALLOWED_POST_MESSAGE, CONSTANTS = {
                POST_MESSAGE_TYPE: {
                    REQUEST: "postrobot_message_request",
                    RESPONSE: "postrobot_message_response",
                    ACK: "postrobot_message_ack"
                },
                POST_MESSAGE_ACK: {
                    SUCCESS: "success",
                    ERROR: "error"
                },
                POST_MESSAGE_NAMES: {
                    METHOD: "postrobot_method",
                    HELLO: "postrobot_ready",
                    OPEN_TUNNEL: "postrobot_open_tunnel"
                },
                WINDOW_TYPES: {
                    FULLPAGE: "fullpage",
                    POPUP: "popup",
                    IFRAME: "iframe"
                },
                WINDOW_PROPS: {
                    POSTROBOT: "__postRobot__"
                },
                SERIALIZATION_TYPES: {
                    METHOD: "postrobot_method",
                    ERROR: "postrobot_error",
                    PROMISE: "postrobot_promise",
                    ZALGO_PROMISE: "postrobot_zalgo_promise",
                    REGEX: "regex"
                },
                SEND_STRATEGIES: {
                    POST_MESSAGE: "postrobot_post_message",
                    BRIDGE: "postrobot_bridge",
                    GLOBAL: "postrobot_global"
                },
                MOCK_PROTOCOL: "mock:",
                FILE_PROTOCOL: "file:",
                BRIDGE_NAME_PREFIX: "__postrobot_bridge__",
                POSTROBOT_PROXY: "__postrobot_proxy__",
                WILDCARD: "*"
            }, POST_MESSAGE_NAMES = {
                METHOD: "postrobot_method",
                HELLO: "postrobot_hello",
                OPEN_TUNNEL: "postrobot_open_tunnel"
            }, POST_MESSAGE_NAMES_LIST = Object.keys(POST_MESSAGE_NAMES).map(function(key) {
                return POST_MESSAGE_NAMES[key];
            }), CONFIG = {
                ALLOW_POSTMESSAGE_POPUP: !("__ALLOW_POSTMESSAGE_POPUP__" in window) || window.__ALLOW_POSTMESSAGE_POPUP__,
                BRIDGE_TIMEOUT: 5e3,
                CHILD_WINDOW_TIMEOUT: 5e3,
                ACK_TIMEOUT: -1 !== window.navigator.userAgent.match(/MSIE/i) ? 1e4 : 2e3,
                RES_TIMEOUT: -1,
                ALLOWED_POST_MESSAGE_METHODS: (_ALLOWED_POST_MESSAGE = {}, _ALLOWED_POST_MESSAGE[CONSTANTS.SEND_STRATEGIES.POST_MESSAGE] = !0, 
                _ALLOWED_POST_MESSAGE[CONSTANTS.SEND_STRATEGIES.BRIDGE] = !0, _ALLOWED_POST_MESSAGE[CONSTANTS.SEND_STRATEGIES.GLOBAL] = !0, 
                _ALLOWED_POST_MESSAGE),
                ALLOW_SAME_ORIGIN: !1
            };
            0 === window.location.href.indexOf(CONSTANTS.FILE_PROTOCOL) && (CONFIG.ALLOW_POSTMESSAGE_POPUP = !0);
            __webpack_require__.d(__webpack_exports__, "a", function() {
                return CONFIG;
            });
            __webpack_require__.d(__webpack_exports__, "b", function() {
                return CONSTANTS;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return POST_MESSAGE_NAMES;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return POST_MESSAGE_NAMES_LIST;
            });
        },
        "./node_modules/post-robot/src/global.js": function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.d(__webpack_exports__, "a", function() {
                return global;
            });
            var __WEBPACK_IMPORTED_MODULE_0__conf__ = __webpack_require__("./node_modules/post-robot/src/conf/index.js"), global = window[__WEBPACK_IMPORTED_MODULE_0__conf__.b.WINDOW_PROPS.POSTROBOT] = window[__WEBPACK_IMPORTED_MODULE_0__conf__.b.WINDOW_PROPS.POSTROBOT] || {};
            global.registerSelf = function() {};
        },
        "./node_modules/post-robot/src/index.js": function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            Object.defineProperty(__webpack_exports__, "__esModule", {
                value: !0
            });
            var interface_namespaceObject = {};
            __webpack_require__.d(interface_namespaceObject, "cleanUpWindow", function() {
                return cleanUpWindow;
            });
            __webpack_require__.d(interface_namespaceObject, "Promise", function() {
                return zalgo_promise_src.a;
            });
            __webpack_require__.d(interface_namespaceObject, "bridge", function() {
                return bridge;
            });
            __webpack_require__.d(interface_namespaceObject, "init", function() {
                return init;
            });
            __webpack_require__.d(interface_namespaceObject, "parent", function() {
                return public_parent;
            });
            __webpack_require__.d(interface_namespaceObject, "send", function() {
                return _send;
            });
            __webpack_require__.d(interface_namespaceObject, "request", function() {
                return request;
            });
            __webpack_require__.d(interface_namespaceObject, "sendToParent", function() {
                return sendToParent;
            });
            __webpack_require__.d(interface_namespaceObject, "client", function() {
                return client;
            });
            __webpack_require__.d(interface_namespaceObject, "on", function() {
                return _on;
            });
            __webpack_require__.d(interface_namespaceObject, "listen", function() {
                return listen;
            });
            __webpack_require__.d(interface_namespaceObject, "once", function() {
                return once;
            });
            __webpack_require__.d(interface_namespaceObject, "listener", function() {
                return server_listener;
            });
            __webpack_require__.d(interface_namespaceObject, "CONFIG", function() {
                return conf.a;
            });
            __webpack_require__.d(interface_namespaceObject, "CONSTANTS", function() {
                return conf.b;
            });
            __webpack_require__.d(interface_namespaceObject, "disable", function() {
                return disable;
            });
            var lib = __webpack_require__("./node_modules/post-robot/src/lib/index.js"), src = __webpack_require__("./node_modules/cross-domain-utils/src/index.js"), conf = __webpack_require__("./node_modules/post-robot/src/conf/index.js"), global = __webpack_require__("./node_modules/post-robot/src/global.js"), zalgo_promise_src = __webpack_require__("./node_modules/zalgo-promise/src/index.js"), SEND_MESSAGE_STRATEGIES = {};
            SEND_MESSAGE_STRATEGIES[conf.b.SEND_STRATEGIES.POST_MESSAGE] = function(win, serializedMessage, domain) {
                try {
                    __webpack_require__("./node_modules/post-robot/src/compat/index.js").emulateIERestrictions(window, win);
                } catch (err) {
                    return;
                }
                (Array.isArray(domain) ? domain : "string" == typeof domain ? [ domain ] : [ conf.b.WILDCARD ]).map(function(dom) {
                    if (0 === dom.indexOf(conf.b.MOCK_PROTOCOL)) {
                        if (window.location.protocol === conf.b.FILE_PROTOCOL) return conf.b.WILDCARD;
                        if (!Object(src.o)(win)) throw new Error("Attempting to send messsage to mock domain " + dom + ", but window is actually cross-domain");
                        return Object(src.b)(win);
                    }
                    return 0 === dom.indexOf(conf.b.FILE_PROTOCOL) ? conf.b.WILDCARD : dom;
                }).forEach(function(dom) {
                    return win.postMessage(serializedMessage, dom);
                });
            };
            var _require = __webpack_require__("./node_modules/post-robot/src/bridge/index.js"), sendBridgeMessage = _require.sendBridgeMessage, needsBridgeForBrowser = _require.needsBridgeForBrowser, isBridge = _require.isBridge;
            SEND_MESSAGE_STRATEGIES[conf.b.SEND_STRATEGIES.BRIDGE] = function(win, serializedMessage, domain) {
                if (needsBridgeForBrowser() || isBridge()) {
                    if (Object(src.t)(win)) throw new Error("Post message through bridge disabled between same domain windows");
                    if (!1 !== Object(src.u)(window, win)) throw new Error("Can only use bridge to communicate between two different windows, not between frames");
                    return sendBridgeMessage(win, serializedMessage, domain);
                }
            };
            SEND_MESSAGE_STRATEGIES[conf.b.SEND_STRATEGIES.GLOBAL] = function(win, serializedMessage) {
                if (Object(lib.i)()) {
                    if (!Object(src.t)(win)) throw new Error("Post message through global disabled between different domain windows");
                    if (!1 !== Object(src.u)(window, win)) throw new Error("Can only use global to communicate between two different windows, not between frames");
                    var foreignGlobal = win[conf.b.WINDOW_PROPS.POSTROBOT];
                    if (!foreignGlobal) throw new Error("Can not find postRobot global on foreign window");
                    return foreignGlobal.receiveMessage({
                        source: window,
                        origin: Object(src.f)(),
                        data: serializedMessage
                    });
                }
            };
            var _extends = Object.assign || function(target) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];
                    for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
                }
                return target;
            };
            function sendMessage(win, message, domain) {
                return zalgo_promise_src.a.try(function() {
                    var _jsonStringify;
                    message = function(win, message) {
                        var options = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, id = Object(lib.q)(), type = Object(lib.c)(), sourceDomain = Object(src.f)(window);
                        return _extends({}, message, options, {
                            sourceDomain: sourceDomain,
                            id: message.id || id,
                            windowType: type
                        });
                    }(win, message, {
                        data: Object(lib.o)(win, domain, message.data),
                        domain: domain
                    });
                    if (win === window && !conf.a.ALLOW_SAME_ORIGIN) throw new Error("Attemping to send message to self");
                    if (Object(src.x)(win)) throw new Error("Window is closed");
                    var messages = [], serializedMessage = Object(lib.g)(((_jsonStringify = {})[conf.b.WINDOW_PROPS.POSTROBOT] = message, 
                    _jsonStringify), null, 2);
                    return zalgo_promise_src.a.map(Object.keys(SEND_MESSAGE_STRATEGIES), function(strategyName) {
                        return zalgo_promise_src.a.try(function() {
                            if (!conf.a.ALLOWED_POST_MESSAGE_METHODS[strategyName]) throw new Error("Strategy disallowed: " + strategyName);
                            return SEND_MESSAGE_STRATEGIES[strategyName](win, serializedMessage, domain);
                        }).then(function() {
                            messages.push(strategyName + ": success");
                            return !0;
                        }, function(err) {
                            messages.push(strategyName + ": " + Object(lib.p)(err) + "\n");
                            return !1;
                        });
                    }).then(function(results) {
                        var success = results.some(Boolean), status = message.type + " " + message.name + " " + (success ? "success" : "error") + ":\n  - " + messages.join("\n  - ") + "\n";
                        if (!success) throw new Error(status);
                    });
                });
            }
            var cross_domain_safe_weakmap_src = __webpack_require__("./node_modules/cross-domain-safe-weakmap/src/index.js");
            global.a.responseListeners = global.a.responseListeners || {};
            global.a.requestListeners = global.a.requestListeners || {};
            global.a.WINDOW_WILDCARD = global.a.WINDOW_WILDCARD || new function() {}();
            global.a.erroredResponseListeners = global.a.erroredResponseListeners || {};
            var _RECEIVE_MESSAGE_TYPE, __DOMAIN_REGEX__ = "__domain_regex__";
            function getResponseListener(hash) {
                return global.a.responseListeners[hash];
            }
            function deleteResponseListener(hash) {
                delete global.a.responseListeners[hash];
            }
            function isResponseListenerErrored(hash) {
                return Boolean(global.a.erroredResponseListeners[hash]);
            }
            function getRequestListener(_ref) {
                var name = _ref.name, win = _ref.win, domain = _ref.domain;
                win === conf.b.WILDCARD && (win = null);
                domain === conf.b.WILDCARD && (domain = null);
                if (!name) throw new Error("Name required to get request listener");
                var nameListeners = global.a.requestListeners[name];
                if (nameListeners) for (var _i2 = 0, _ref3 = [ win, global.a.WINDOW_WILDCARD ], _length2 = null == _ref3 ? 0 : _ref3.length; _i2 < _length2; _i2++) {
                    var winQualifier = _ref3[_i2], winListeners = winQualifier && nameListeners.get(winQualifier);
                    if (winListeners) {
                        if (domain && "string" == typeof domain) {
                            if (winListeners[domain]) return winListeners[domain];
                            if (winListeners[__DOMAIN_REGEX__]) for (var _i4 = 0, _winListeners$__DOMAI2 = winListeners[__DOMAIN_REGEX__], _length4 = null == _winListeners$__DOMAI2 ? 0 : _winListeners$__DOMAI2.length; _i4 < _length4; _i4++) {
                                var _ref5 = _winListeners$__DOMAI2[_i4], regex = _ref5.regex, listener = _ref5.listener;
                                if (Object(src.z)(regex, domain)) return listener;
                            }
                        }
                        if (winListeners[conf.b.WILDCARD]) return winListeners[conf.b.WILDCARD];
                    }
                }
            }
            var types__extends = Object.assign || function(target) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];
                    for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
                }
                return target;
            }, RECEIVE_MESSAGE_TYPES = ((_RECEIVE_MESSAGE_TYPE = {})[conf.b.POST_MESSAGE_TYPE.ACK] = function(source, origin, message) {
                if (!isResponseListenerErrored(message.hash)) {
                    var options = getResponseListener(message.hash);
                    if (!options) throw new Error("No handler found for post message ack for message: " + message.name + " from " + origin + " in " + window.location.protocol + "//" + window.location.host + window.location.pathname);
                    if (!Object(src.z)(options.domain, origin)) throw new Error("Ack origin " + origin + " does not match domain " + options.domain.toString());
                    options.ack = !0;
                }
            }, _RECEIVE_MESSAGE_TYPE[conf.b.POST_MESSAGE_TYPE.REQUEST] = function(source, origin, message) {
                var options = getRequestListener({
                    name: message.name,
                    win: source,
                    domain: origin
                });
                function respond(data) {
                    return message.fireAndForget || Object(src.x)(source) ? zalgo_promise_src.a.resolve() : sendMessage(source, types__extends({
                        target: message.originalSource,
                        hash: message.hash,
                        name: message.name
                    }, data), origin);
                }
                return zalgo_promise_src.a.all([ respond({
                    type: conf.b.POST_MESSAGE_TYPE.ACK
                }), zalgo_promise_src.a.try(function() {
                    if (!options) throw new Error("No handler found for post message: " + message.name + " from " + origin + " in " + window.location.protocol + "//" + window.location.host + window.location.pathname);
                    if (!Object(src.z)(options.domain, origin)) throw new Error("Request origin " + origin + " does not match domain " + options.domain.toString());
                    var data = message.data;
                    return options.handler({
                        source: source,
                        origin: origin,
                        data: data
                    });
                }).then(function(data) {
                    return respond({
                        type: conf.b.POST_MESSAGE_TYPE.RESPONSE,
                        ack: conf.b.POST_MESSAGE_ACK.SUCCESS,
                        data: data
                    });
                }, function(err) {
                    var error = Object(lib.p)(err).replace(/^Error: /, ""), code = err.code;
                    return respond({
                        type: conf.b.POST_MESSAGE_TYPE.RESPONSE,
                        ack: conf.b.POST_MESSAGE_ACK.ERROR,
                        error: error,
                        code: code
                    });
                }) ]).then(lib.j).catch(function(err) {
                    if (options && options.handleError) return options.handleError(err);
                    throw err;
                });
            }, _RECEIVE_MESSAGE_TYPE[conf.b.POST_MESSAGE_TYPE.RESPONSE] = function(source, origin, message) {
                if (!isResponseListenerErrored(message.hash)) {
                    var options = getResponseListener(message.hash);
                    if (!options) throw new Error("No handler found for post message response for message: " + message.name + " from " + origin + " in " + window.location.protocol + "//" + window.location.host + window.location.pathname);
                    if (!Object(src.z)(options.domain, origin)) throw new Error("Response origin " + origin + " does not match domain " + Object(src.B)(options.domain));
                    deleteResponseListener(message.hash);
                    if (message.ack === conf.b.POST_MESSAGE_ACK.ERROR) {
                        var err = new Error(message.error);
                        message.code && (err.code = message.code);
                        return options.respond(err, null);
                    }
                    if (message.ack === conf.b.POST_MESSAGE_ACK.SUCCESS) {
                        var data = message.data || message.response;
                        return options.respond(null, {
                            source: source,
                            origin: origin,
                            data: data
                        });
                    }
                }
            }, _RECEIVE_MESSAGE_TYPE), _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
                return typeof obj;
            } : function(obj) {
                return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
            global.a.receivedMessages = global.a.receivedMessages || [];
            function receiveMessage(event) {
                if (!window || window.closed) throw new Error("Message recieved in closed window");
                try {
                    if (!event.source) return;
                } catch (err) {
                    return;
                }
                var source = event.source, origin = event.origin, message = function(message) {
                    var parsedMessage = void 0;
                    try {
                        parsedMessage = Object(lib.f)(message);
                    } catch (err) {
                        return;
                    }
                    if (parsedMessage && "object" === (void 0 === parsedMessage ? "undefined" : _typeof(parsedMessage)) && null !== parsedMessage && (parsedMessage = parsedMessage[conf.b.WINDOW_PROPS.POSTROBOT]) && "object" === (void 0 === parsedMessage ? "undefined" : _typeof(parsedMessage)) && null !== parsedMessage && parsedMessage.type && "string" == typeof parsedMessage.type && RECEIVE_MESSAGE_TYPES[parsedMessage.type]) return parsedMessage;
                }(event.data);
                if (message) {
                    if (!message.sourceDomain || "string" != typeof message.sourceDomain) throw new Error("Expected message to have sourceDomain");
                    0 !== message.sourceDomain.indexOf(conf.b.MOCK_PROTOCOL) && 0 !== message.sourceDomain.indexOf(conf.b.FILE_PROTOCOL) || (origin = message.sourceDomain);
                    if (-1 === global.a.receivedMessages.indexOf(message.id)) {
                        global.a.receivedMessages.push(message.id);
                        if (!Object(src.x)(source) || message.fireAndForget) {
                            message.data && (message.data = Object(lib.b)(source, origin, message.data));
                            RECEIVE_MESSAGE_TYPES[message.type](source, origin, message);
                        }
                    }
                }
            }
            function messageListener(event) {
                try {
                    Object(lib.j)(event.source);
                } catch (err) {
                    return;
                }
                var messageEvent = {
                    source: event.source || event.sourceElement,
                    origin: event.origin || event.originalEvent && event.originalEvent.origin,
                    data: event.data
                };
                try {
                    __webpack_require__("./node_modules/post-robot/src/compat/index.js").emulateIERestrictions(messageEvent.source, window);
                } catch (err) {
                    return;
                }
                receiveMessage(messageEvent);
            }
            global.a.receiveMessage = receiveMessage;
            global.a.requestPromises = global.a.requestPromises || new cross_domain_safe_weakmap_src.a();
            function request(options) {
                return zalgo_promise_src.a.try(function() {
                    if (!options.name) throw new Error("Expected options.name");
                    var name = options.name, targetWindow = void 0, domain = void 0;
                    if ("string" == typeof options.window) {
                        var el = document.getElementById(options.window);
                        if (!el) throw new Error("Expected options.window " + Object.prototype.toString.call(options.window) + " to be a valid element id");
                        if ("iframe" !== el.tagName.toLowerCase()) throw new Error("Expected options.window " + Object.prototype.toString.call(options.window) + " to be an iframe");
                        if (!el.contentWindow) throw new Error("Iframe must have contentWindow.  Make sure it has a src attribute and is in the DOM.");
                        targetWindow = el.contentWindow;
                    } else if (options.window instanceof HTMLIFrameElement) {
                        if ("iframe" !== options.window.tagName.toLowerCase()) throw new Error("Expected options.window " + Object.prototype.toString.call(options.window) + " to be an iframe");
                        if (options.window && !options.window.contentWindow) throw new Error("Iframe must have contentWindow.  Make sure it has a src attribute and is in the DOM.");
                        options.window && options.window.contentWindow && (targetWindow = options.window.contentWindow);
                    } else targetWindow = options.window;
                    if (!targetWindow) throw new Error("Expected options.window to be a window object, iframe, or iframe element id.");
                    var win = targetWindow;
                    domain = options.domain || conf.b.WILDCARD;
                    var hash = options.name + "_" + Object(lib.q)();
                    if (Object(src.x)(win)) throw new Error("Target window is closed");
                    var hasResult = !1, requestPromises = global.a.requestPromises.get(win);
                    if (!requestPromises) {
                        requestPromises = [];
                        global.a.requestPromises.set(win, requestPromises);
                    }
                    var requestPromise = zalgo_promise_src.a.try(function() {
                        if (Object(src.p)(window, win)) return Object(lib.k)(win, options.timeout || conf.a.CHILD_WINDOW_TIMEOUT);
                    }).then(function() {
                        var origin = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).origin;
                        if (Object(lib.e)(domain) && !origin) return Object(lib.n)(win);
                    }).then(function() {
                        var origin = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).origin;
                        if (Object(lib.e)(domain)) {
                            if (!Object(src.z)(domain, origin)) throw new Error("Remote window domain " + origin + " does not match regex: " + domain.toString());
                            domain = origin;
                        }
                        if ("string" != typeof domain && !Array.isArray(domain)) throw new TypeError("Expected domain to be a string or array");
                        var actualDomain = domain;
                        return new zalgo_promise_src.a(function(resolve, reject) {
                            var responseListener = void 0;
                            options.fireAndForget || function(hash, listener) {
                                global.a.responseListeners[hash] = listener;
                            }(hash, responseListener = {
                                name: name,
                                window: win,
                                domain: actualDomain,
                                respond: function(err, result) {
                                    if (!err) {
                                        hasResult = !0;
                                        requestPromises.splice(requestPromises.indexOf(requestPromise, 1));
                                    }
                                    err ? reject(err) : resolve(result);
                                }
                            });
                            sendMessage(win, {
                                type: conf.b.POST_MESSAGE_TYPE.REQUEST,
                                hash: hash,
                                name: name,
                                data: options.data,
                                fireAndForget: options.fireAndForget
                            }, actualDomain).catch(reject);
                            if (options.fireAndForget) return resolve();
                            var ackTimeout = conf.a.ACK_TIMEOUT, resTimeout = options.timeout || conf.a.RES_TIMEOUT, cycleTime = 100;
                            setTimeout(function cycle() {
                                if (!hasResult) {
                                    if (Object(src.x)(win)) return responseListener.ack ? reject(new Error("Window closed for " + name + " before response")) : reject(new Error("Window closed for " + name + " before ack"));
                                    ackTimeout = Math.max(ackTimeout - cycleTime, 0);
                                    -1 !== resTimeout && (resTimeout = Math.max(resTimeout - cycleTime, 0));
                                    if (responseListener.ack) {
                                        if (-1 === resTimeout) return;
                                        cycleTime = Math.min(resTimeout, 2e3);
                                    } else {
                                        if (0 === ackTimeout) return reject(new Error("No ack for postMessage " + name + " in " + Object(src.f)() + " in " + conf.a.ACK_TIMEOUT + "ms"));
                                        if (0 === resTimeout) return reject(new Error("No response for postMessage " + name + " in " + Object(src.f)() + " in " + (options.timeout || conf.a.RES_TIMEOUT) + "ms"));
                                    }
                                    setTimeout(cycle, cycleTime);
                                }
                            }, cycleTime);
                        });
                    });
                    requestPromise.catch(function() {
                        !function(hash) {
                            global.a.erroredResponseListeners[hash] = !0;
                        }(hash);
                        deleteResponseListener(hash);
                    });
                    requestPromises.push(requestPromise);
                    return requestPromise;
                });
            }
            function _send(window, name, data, options) {
                (options = options || {}).window = window;
                options.name = name;
                options.data = data;
                return request(options);
            }
            function sendToParent(name, data, options) {
                var win = Object(src.d)();
                return win ? _send(win, name, data, options) : new zalgo_promise_src.a(function(resolve, reject) {
                    return reject(new Error("Window does not have a parent"));
                });
            }
            function client() {
                var options = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (!options.window) throw new Error("Expected options.window");
                var win = options.window;
                return {
                    send: function(name, data) {
                        return _send(win, name, data, options);
                    }
                };
            }
            global.a.send = _send;
            var server__typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
                return typeof obj;
            } : function(obj) {
                return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
            function listen(options) {
                if (!options.name) throw new Error("Expected options.name");
                if (!options.handler) throw new Error("Expected options.handler");
                var name = options.name, win = options.window, domain = options.domain, listenerOptions = {
                    handler: options.handler,
                    handleError: options.errorHandler || function(err) {
                        throw err;
                    },
                    window: win,
                    domain: domain || conf.b.WILDCARD,
                    name: name
                }, requestListener = function addRequestListener(_ref6, listener) {
                    var name = _ref6.name, win = _ref6.win, domain = _ref6.domain;
                    if (!name || "string" != typeof name) throw new Error("Name required to add request listener");
                    if (Array.isArray(win)) {
                        for (var listenersCollection = [], _i6 = 0, _win2 = win, _length6 = null == _win2 ? 0 : _win2.length; _i6 < _length6; _i6++) {
                            var item = _win2[_i6];
                            listenersCollection.push(addRequestListener({
                                name: name,
                                domain: domain,
                                win: item
                            }, listener));
                        }
                        return {
                            cancel: function() {
                                for (var _i8 = 0, _length8 = null == listenersCollection ? 0 : listenersCollection.length; _i8 < _length8; _i8++) listenersCollection[_i8].cancel();
                            }
                        };
                    }
                    if (Array.isArray(domain)) {
                        for (var _listenersCollection = [], _i10 = 0, _domain2 = domain, _length10 = null == _domain2 ? 0 : _domain2.length; _i10 < _length10; _i10++) {
                            var _item = _domain2[_i10];
                            _listenersCollection.push(addRequestListener({
                                name: name,
                                win: win,
                                domain: _item
                            }, listener));
                        }
                        return {
                            cancel: function() {
                                for (var _i12 = 0, _length12 = null == _listenersCollection ? 0 : _listenersCollection.length; _i12 < _length12; _i12++) _listenersCollection[_i12].cancel();
                            }
                        };
                    }
                    var existingListener = getRequestListener({
                        name: name,
                        win: win,
                        domain: domain
                    });
                    win && win !== conf.b.WILDCARD || (win = global.a.WINDOW_WILDCARD);
                    domain = domain || conf.b.WILDCARD;
                    if (existingListener) throw win && domain ? new Error("Request listener already exists for " + name + " on domain " + domain.toString() + " for " + (win === global.a.WINDOW_WILDCARD ? "wildcard" : "specified") + " window") : win ? new Error("Request listener already exists for " + name + " for " + (win === global.a.WINDOW_WILDCARD ? "wildcard" : "specified") + " window") : domain ? new Error("Request listener already exists for " + name + " on domain " + domain.toString()) : new Error("Request listener already exists for " + name);
                    var requestListeners = global.a.requestListeners, nameListeners = requestListeners[name];
                    if (!nameListeners) {
                        nameListeners = new cross_domain_safe_weakmap_src.a();
                        requestListeners[name] = nameListeners;
                    }
                    var winListeners = nameListeners.get(win);
                    if (!winListeners) {
                        winListeners = {};
                        nameListeners.set(win, winListeners);
                    }
                    var strDomain = domain.toString(), regexListeners = winListeners[__DOMAIN_REGEX__], regexListener = void 0;
                    if (Object(lib.e)(domain)) {
                        if (!regexListeners) {
                            regexListeners = [];
                            winListeners[__DOMAIN_REGEX__] = regexListeners;
                        }
                        regexListener = {
                            regex: domain,
                            listener: listener
                        };
                        regexListeners.push(regexListener);
                    } else winListeners[strDomain] = listener;
                    return {
                        cancel: function() {
                            if (winListeners) {
                                delete winListeners[strDomain];
                                win && 0 === Object.keys(winListeners).length && nameListeners.delete(win);
                                regexListener && regexListeners.splice(regexListeners.indexOf(regexListener, 1));
                            }
                        }
                    };
                }({
                    name: name,
                    win: win,
                    domain: domain
                }, listenerOptions);
                if (options.once) {
                    var _handler = listenerOptions.handler;
                    listenerOptions.handler = Object(lib.l)(function() {
                        requestListener.cancel();
                        return _handler.apply(this, arguments);
                    });
                }
                if (listenerOptions.window && options.errorOnClose) var interval = Object(lib.m)(function() {
                    if (win && "object" === (void 0 === win ? "undefined" : server__typeof(win)) && Object(src.x)(win)) {
                        interval.cancel();
                        listenerOptions.handleError(new Error("Post message target window is closed"));
                    }
                }, 50);
                return {
                    cancel: function() {
                        requestListener.cancel();
                    }
                };
            }
            function _on(name, options, handler) {
                if ("function" == typeof options) {
                    handler = options;
                    options = {};
                }
                (options = options || {}).name = name;
                options.handler = handler || options.handler;
                return listen(options);
            }
            function once(name) {
                var options = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, handler = arguments[2];
                if ("function" == typeof options) {
                    handler = options;
                    options = {};
                }
                options = options || {};
                handler = handler || options.handler;
                var errorHandler = options.errorHandler, promise = new zalgo_promise_src.a(function(resolve, reject) {
                    (options = options || {}).name = name;
                    options.once = !0;
                    options.handler = function(event) {
                        resolve(event);
                        if (handler) return handler(event);
                    };
                    options.errorHandler = function(err) {
                        reject(err);
                        if (errorHandler) return errorHandler(err);
                    };
                }), onceListener = listen(options);
                promise.cancel = onceListener.cancel;
                return promise;
            }
            function server_listener() {
                var options = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return {
                    on: function(name, handler) {
                        return _on(name, options, handler);
                    }
                };
            }
            global.a.on = _on;
            function disable() {
                delete window[conf.b.WINDOW_PROPS.POSTROBOT];
                window.removeEventListener("message", messageListener);
            }
            var public_parent = Object(src.d)();
            function cleanUpWindow(win) {
                var requestPromises = global.a.requestPromises.get(win);
                if (requestPromises) for (var _i2 = 0, _length2 = null == requestPromises ? 0 : requestPromises.length; _i2 < _length2; _i2++) requestPromises[_i2].reject(new Error("No response from window - cleaned up"));
                global.a.popupWindowsByWin && global.a.popupWindowsByWin.delete(win);
                global.a.remoteWindows && global.a.remoteWindows.delete(win);
                global.a.requestPromises.delete(win);
                global.a.methods.delete(win);
                global.a.readyPromises.delete(win);
            }
            var bridge = __webpack_require__("./node_modules/post-robot/src/bridge/interface.js");
            function init() {
                if (!global.a.initialized) {
                    Object(lib.a)(window, "message", messageListener);
                    __webpack_require__("./node_modules/post-robot/src/bridge/index.js").openTunnelToOpener();
                    Object(lib.d)();
                    Object(lib.h)({
                        on: _on,
                        send: _send
                    });
                }
                global.a.initialized = !0;
            }
            init();
            __webpack_require__.d(__webpack_exports__, "cleanUpWindow", function() {
                return cleanUpWindow;
            });
            __webpack_require__.d(__webpack_exports__, "Promise", function() {
                return zalgo_promise_src.a;
            });
            __webpack_require__.d(__webpack_exports__, "bridge", function() {
                return bridge;
            });
            __webpack_require__.d(__webpack_exports__, "init", function() {
                return init;
            });
            __webpack_require__.d(__webpack_exports__, "parent", function() {
                return public_parent;
            });
            __webpack_require__.d(__webpack_exports__, "send", function() {
                return _send;
            });
            __webpack_require__.d(__webpack_exports__, "request", function() {
                return request;
            });
            __webpack_require__.d(__webpack_exports__, "sendToParent", function() {
                return sendToParent;
            });
            __webpack_require__.d(__webpack_exports__, "client", function() {
                return client;
            });
            __webpack_require__.d(__webpack_exports__, "on", function() {
                return _on;
            });
            __webpack_require__.d(__webpack_exports__, "listen", function() {
                return listen;
            });
            __webpack_require__.d(__webpack_exports__, "once", function() {
                return once;
            });
            __webpack_require__.d(__webpack_exports__, "listener", function() {
                return server_listener;
            });
            __webpack_require__.d(__webpack_exports__, "CONFIG", function() {
                return conf.a;
            });
            __webpack_require__.d(__webpack_exports__, "CONSTANTS", function() {
                return conf.b;
            });
            __webpack_require__.d(__webpack_exports__, "disable", function() {
                return disable;
            });
            __webpack_exports__.default = interface_namespaceObject;
        },
        "./node_modules/post-robot/src/lib/index.js": function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            var src = __webpack_require__("./node_modules/cross-domain-safe-weakmap/src/index.js"), cross_domain_utils_src = __webpack_require__("./node_modules/cross-domain-utils/src/index.js"), conf = __webpack_require__("./node_modules/post-robot/src/conf/index.js"), _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
                return typeof obj;
            } : function(obj) {
                return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
            function stringifyError(err) {
                var level = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                if (level >= 3) return "stringifyError stack overflow";
                try {
                    if (!err) return "<unknown error: " + Object.prototype.toString.call(err) + ">";
                    if ("string" == typeof err) return err;
                    if (err instanceof Error) {
                        var stack = err && err.stack, message = err && err.message;
                        if (stack && message) return -1 !== stack.indexOf(message) ? stack : message + "\n" + stack;
                        if (stack) return stack;
                        if (message) return message;
                    }
                    return "function" == typeof err.toString ? err.toString() : Object.prototype.toString.call(err);
                } catch (newErr) {
                    return "Error while stringifying error: " + stringifyError(newErr, level + 1);
                }
            }
            var once = function(method) {
                if (!method) return method;
                var called = !1;
                return function() {
                    if (!called) {
                        called = !0;
                        return method.apply(this, arguments);
                    }
                };
            };
            function noop() {}
            function addEventListener(obj, event, handler) {
                obj.addEventListener ? obj.addEventListener(event, handler) : obj.attachEvent("on" + event, handler);
                return {
                    cancel: function() {
                        obj.removeEventListener ? obj.removeEventListener(event, handler) : obj.detachEvent("on" + event, handler);
                    }
                };
            }
            function uniqueID() {
                var chars = "0123456789abcdef";
                return "xxxxxxxxxx".replace(/./g, function() {
                    return chars.charAt(Math.floor(Math.random() * chars.length));
                });
            }
            function eachArray(item, callback) {
                for (var i = 0; i < item.length; i++) callback(item[i], i);
            }
            function eachObject(item, callback) {
                for (var _key in item) item.hasOwnProperty(_key) && callback(item[_key], _key);
            }
            function each(item, callback) {
                Array.isArray(item) ? eachArray(item, callback) : "object" === (void 0 === item ? "undefined" : _typeof(item)) && null !== item && eachObject(item, callback);
            }
            function replaceObject(item, callback) {
                var depth = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
                if (depth >= 100) throw new Error("Self-referential object passed, or object contained too many layers");
                var newobj = void 0;
                if ("object" !== (void 0 === item ? "undefined" : _typeof(item)) || null === item || Array.isArray(item)) {
                    if (!Array.isArray(item)) throw new TypeError("Invalid type: " + (void 0 === item ? "undefined" : _typeof(item)));
                    newobj = [];
                } else newobj = {};
                each(item, function(childItem, key) {
                    var result = callback(childItem, key);
                    void 0 !== result ? newobj[key] = result : "object" === (void 0 === childItem ? "undefined" : _typeof(childItem)) && null !== childItem ? newobj[key] = replaceObject(childItem, callback, depth + 1) : newobj[key] = childItem;
                });
                return newobj;
            }
            function safeInterval(method, time) {
                var timeout = void 0;
                timeout = setTimeout(function runInterval() {
                    timeout = setTimeout(runInterval, time);
                    method.call();
                }, time);
                return {
                    cancel: function() {
                        clearTimeout(timeout);
                    }
                };
            }
            function isRegex(item) {
                return "[object RegExp]" === Object.prototype.toString.call(item);
            }
            var util_weakMapMemoize = function(method) {
                var weakmap = new src.a();
                return function(arg) {
                    var result = weakmap.get(arg);
                    if (void 0 !== result) return result;
                    void 0 !== (result = method.call(this, arg)) && weakmap.set(arg, result);
                    return result;
                };
            };
            function getWindowType() {
                return Object(cross_domain_utils_src.s)() ? conf.b.WINDOW_TYPES.POPUP : Object(cross_domain_utils_src.q)() ? conf.b.WINDOW_TYPES.IFRAME : conf.b.WINDOW_TYPES.FULLPAGE;
            }
            function jsonStringify(obj, replacer, indent) {
                var objectToJSON = void 0, arrayToJSON = void 0;
                try {
                    if ("{}" !== JSON.stringify({})) {
                        objectToJSON = Object.prototype.toJSON;
                        delete Object.prototype.toJSON;
                    }
                    if ("{}" !== JSON.stringify({})) throw new Error("Can not correctly serialize JSON objects");
                    if ("[]" !== JSON.stringify([])) {
                        arrayToJSON = Array.prototype.toJSON;
                        delete Array.prototype.toJSON;
                    }
                    if ("[]" !== JSON.stringify([])) throw new Error("Can not correctly serialize JSON objects");
                } catch (err) {
                    throw new Error("Can not repair JSON.stringify: " + err.message);
                }
                var result = JSON.stringify.call(this, obj, replacer, indent);
                try {
                    objectToJSON && (Object.prototype.toJSON = objectToJSON);
                    arrayToJSON && (Array.prototype.toJSON = arrayToJSON);
                } catch (err) {
                    throw new Error("Can not repair JSON.stringify: " + err.message);
                }
                return result;
            }
            function jsonParse(item) {
                return JSON.parse(item);
            }
            function needsGlobalMessagingForBrowser() {
                return !!Object(cross_domain_utils_src.n)(window).match(/MSIE|trident|edge\/12|edge\/13/i) || !conf.a.ALLOW_POSTMESSAGE_POPUP;
            }
            var zalgo_promise_src = __webpack_require__("./node_modules/zalgo-promise/src/index.js"), global = __webpack_require__("./node_modules/post-robot/src/global.js"), serialize__typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
                return typeof obj;
            } : function(obj) {
                return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
            global.a.methods = global.a.methods || new src.a();
            var listenForMethods = once(function() {
                global.a.on(conf.b.POST_MESSAGE_NAMES.METHOD, {
                    origin: conf.b.WILDCARD
                }, function(_ref) {
                    var source = _ref.source, origin = _ref.origin, data = _ref.data, methods = global.a.methods.get(source);
                    if (!methods) throw new Error("Could not find any methods this window has privileges to call");
                    var meth = methods[data.id];
                    if (!meth) throw new Error("Could not find method with id: " + data.id);
                    if (!Object(cross_domain_utils_src.z)(meth.domain, origin)) throw new Error("Method domain " + meth.domain + " does not match origin " + origin);
                    return zalgo_promise_src.a.try(function() {
                        return meth.method.apply({
                            source: source,
                            origin: origin,
                            data: data
                        }, data.args);
                    }).then(function(result) {
                        return {
                            result: result,
                            id: data.id,
                            name: data.name
                        };
                    });
                });
            });
            function isSerialized(item, type) {
                return "object" === (void 0 === item ? "undefined" : serialize__typeof(item)) && null !== item && item.__type__ === type;
            }
            function serializeMethod(destination, domain, method, name) {
                var id = uniqueID(), methods = global.a.methods.get(destination);
                if (!methods) {
                    methods = {};
                    global.a.methods.set(destination, methods);
                }
                methods[id] = {
                    domain: domain,
                    method: method
                };
                return {
                    __type__: conf.b.SERIALIZATION_TYPES.METHOD,
                    __id__: id,
                    __name__: name
                };
            }
            function serializeMethods(destination, domain, obj) {
                return replaceObject({
                    obj: obj
                }, function(item, key) {
                    return "function" == typeof item ? serializeMethod(destination, domain, item, key.toString()) : item instanceof Error ? (err = item, 
                    {
                        __type__: conf.b.SERIALIZATION_TYPES.ERROR,
                        __message__: stringifyError(err),
                        __code__: err.code
                    }) : window.Promise && item instanceof window.Promise ? function(destination, domain, promise, name) {
                        return {
                            __type__: conf.b.SERIALIZATION_TYPES.PROMISE,
                            __then__: serializeMethod(destination, domain, function(resolve, reject) {
                                return promise.then(resolve, reject);
                            }, name + ".then")
                        };
                    }(destination, domain, item, key.toString()) : zalgo_promise_src.a.isPromise(item) ? function(destination, domain, promise, name) {
                        return {
                            __type__: conf.b.SERIALIZATION_TYPES.ZALGO_PROMISE,
                            __then__: serializeMethod(destination, domain, function(resolve, reject) {
                                return promise.then(resolve, reject);
                            }, name + ".then")
                        };
                    }(destination, domain, item, key.toString()) : isRegex(item) ? (regex = item, {
                        __type__: conf.b.SERIALIZATION_TYPES.REGEX,
                        __source__: regex.source
                    }) : void 0;
                    var err, regex;
                }).obj;
            }
            function deserializeMethod(source, origin, obj) {
                function wrapper() {
                    var args = Array.prototype.slice.call(arguments);
                    return global.a.send(source, conf.b.POST_MESSAGE_NAMES.METHOD, {
                        id: obj.__id__,
                        name: obj.__name__,
                        args: args
                    }, {
                        domain: origin,
                        timeout: -1
                    }).then(function(_ref2) {
                        return _ref2.data.result;
                    }, function(err) {
                        throw err;
                    });
                }
                wrapper.__name__ = obj.__name__;
                wrapper.__xdomain__ = !0;
                wrapper.source = source;
                wrapper.origin = origin;
                return wrapper;
            }
            function deserializeError(source, origin, obj) {
                var err = new Error(obj.__message__);
                obj.__code__ && (err.code = obj.__code__);
                return err;
            }
            function deserializeZalgoPromise(source, origin, prom) {
                return new zalgo_promise_src.a(function(resolve, reject) {
                    return deserializeMethod(source, origin, prom.__then__)(resolve, reject);
                });
            }
            function deserializePromise(source, origin, prom) {
                return window.Promise ? new window.Promise(function(resolve, reject) {
                    return deserializeMethod(source, origin, prom.__then__)(resolve, reject);
                }) : deserializeZalgoPromise(source, origin, prom);
            }
            function deserializeRegex(source, origin, item) {
                return new RegExp(item.__source__);
            }
            function deserializeMethods(source, origin, obj) {
                return replaceObject({
                    obj: obj
                }, function(item) {
                    if ("object" === (void 0 === item ? "undefined" : serialize__typeof(item)) && null !== item) return isSerialized(item, conf.b.SERIALIZATION_TYPES.METHOD) ? deserializeMethod(source, origin, item) : isSerialized(item, conf.b.SERIALIZATION_TYPES.ERROR) ? deserializeError(0, 0, item) : isSerialized(item, conf.b.SERIALIZATION_TYPES.PROMISE) ? deserializePromise(source, origin, item) : isSerialized(item, conf.b.SERIALIZATION_TYPES.ZALGO_PROMISE) ? deserializeZalgoPromise(source, origin, item) : isSerialized(item, conf.b.SERIALIZATION_TYPES.REGEX) ? deserializeRegex(0, 0, item) : void 0;
                }).obj;
            }
            global.a.readyPromises = global.a.readyPromises || new src.a();
            function onHello(handler) {
                global.a.on(conf.b.POST_MESSAGE_NAMES.HELLO, {
                    domain: conf.b.WILDCARD
                }, function(_ref) {
                    var source = _ref.source, origin = _ref.origin;
                    return handler({
                        source: source,
                        origin: origin
                    });
                });
            }
            function sayHello(win) {
                return global.a.send(win, conf.b.POST_MESSAGE_NAMES.HELLO, {}, {
                    domain: conf.b.WILDCARD,
                    timeout: -1
                }).then(function(_ref2) {
                    return {
                        origin: _ref2.origin
                    };
                });
            }
            function initOnReady() {
                onHello(function(_ref3) {
                    var source = _ref3.source, origin = _ref3.origin, promise = global.a.readyPromises.get(source) || new zalgo_promise_src.a();
                    promise.resolve({
                        origin: origin
                    });
                    global.a.readyPromises.set(source, promise);
                });
                var parent = Object(cross_domain_utils_src.d)();
                parent && sayHello(parent).catch(noop);
            }
            function onChildWindowReady(win) {
                var timeout = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5e3, name = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "Window", promise = global.a.readyPromises.get(win);
                if (promise) return promise;
                promise = new zalgo_promise_src.a();
                global.a.readyPromises.set(win, promise);
                -1 !== timeout && setTimeout(function() {
                    return promise.reject(new Error(name + " did not load after " + timeout + "ms"));
                }, timeout);
                return promise;
            }
            __webpack_require__.d(__webpack_exports__, "p", function() {
                return stringifyError;
            });
            __webpack_require__.d(__webpack_exports__, "l", function() {
                return once;
            });
            __webpack_require__.d(__webpack_exports__, "j", function() {
                return noop;
            });
            __webpack_require__.d(__webpack_exports__, "a", function() {
                return addEventListener;
            });
            __webpack_require__.d(__webpack_exports__, "q", function() {
                return uniqueID;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return eachArray;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return eachObject;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return each;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return replaceObject;
            });
            __webpack_require__.d(__webpack_exports__, "m", function() {
                return safeInterval;
            });
            __webpack_require__.d(__webpack_exports__, "e", function() {
                return isRegex;
            });
            __webpack_require__.d(__webpack_exports__, "r", function() {
                return util_weakMapMemoize;
            });
            __webpack_require__.d(__webpack_exports__, "c", function() {
                return getWindowType;
            });
            __webpack_require__.d(__webpack_exports__, "g", function() {
                return jsonStringify;
            });
            __webpack_require__.d(__webpack_exports__, "f", function() {
                return jsonParse;
            });
            __webpack_require__.d(__webpack_exports__, "i", function() {
                return needsGlobalMessagingForBrowser;
            });
            __webpack_require__.d(__webpack_exports__, "h", function() {
                return listenForMethods;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return serializeMethod;
            });
            __webpack_require__.d(__webpack_exports__, "o", function() {
                return serializeMethods;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return deserializeMethod;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return deserializeError;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return deserializeZalgoPromise;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return deserializePromise;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return deserializeRegex;
            });
            __webpack_require__.d(__webpack_exports__, "b", function() {
                return deserializeMethods;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return onHello;
            });
            __webpack_require__.d(__webpack_exports__, "n", function() {
                return sayHello;
            });
            __webpack_require__.d(__webpack_exports__, "d", function() {
                return initOnReady;
            });
            __webpack_require__.d(__webpack_exports__, "k", function() {
                return onChildWindowReady;
            });
        },
        "./node_modules/webpack/buildin/amd-options.js": function(module, exports) {
            (function(__webpack_amd_options__) {
                module.exports = __webpack_amd_options__;
            }).call(exports, {});
        },
        "./node_modules/webpack/buildin/module.js": function(module, exports) {
            module.exports = function(module) {
                if (!module.webpackPolyfill) {
                    module.deprecate = function() {};
                    module.paths = [];
                    module.children || (module.children = []);
                    Object.defineProperty(module, "loaded", {
                        enumerable: !0,
                        get: function() {
                            return module.l;
                        }
                    });
                    Object.defineProperty(module, "id", {
                        enumerable: !0,
                        get: function() {
                            return module.i;
                        }
                    });
                    module.webpackPolyfill = 1;
                }
                return module;
            };
        },
        "./node_modules/zalgo-promise/src/index.js": function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            function utils_isPromise(item) {
                try {
                    if (!item) return !1;
                    if ("undefined" != typeof Promise && item instanceof Promise) return !0;
                    if ("undefined" != typeof window && window.Window && item instanceof window.Window) return !1;
                    if ("undefined" != typeof window && window.constructor && item instanceof window.constructor) return !1;
                    var _toString = {}.toString;
                    if (_toString) {
                        var name = _toString.call(item);
                        if ("[object Window]" === name || "[object global]" === name || "[object DOMWindow]" === name) return !1;
                    }
                    if ("function" == typeof item.then) return !0;
                } catch (err) {
                    return !1;
                }
                return !1;
            }
            var dispatchedErrors = [], possiblyUnhandledPromiseHandlers = [], activeCount = 0, flushPromise = void 0;
            function flushActive() {
                if (!activeCount && flushPromise) {
                    var promise = flushPromise;
                    flushPromise = null;
                    promise.resolve();
                }
            }
            function startActive() {
                activeCount += 1;
            }
            function endActive() {
                activeCount -= 1;
                flushActive();
            }
            var promise_ZalgoPromise = function() {
                function ZalgoPromise(handler) {
                    var _this = this;
                    !function(instance, Constructor) {
                        if (!(instance instanceof ZalgoPromise)) throw new TypeError("Cannot call a class as a function");
                    }(this);
                    this.resolved = !1;
                    this.rejected = !1;
                    this.errorHandled = !1;
                    this.handlers = [];
                    if (handler) {
                        var _result = void 0, _error = void 0, resolved = !1, rejected = !1, isAsync = !1;
                        startActive();
                        try {
                            handler(function(res) {
                                if (isAsync) _this.resolve(res); else {
                                    resolved = !0;
                                    _result = res;
                                }
                            }, function(err) {
                                if (isAsync) _this.reject(err); else {
                                    rejected = !0;
                                    _error = err;
                                }
                            });
                        } catch (err) {
                            endActive();
                            this.reject(err);
                            return;
                        }
                        endActive();
                        isAsync = !0;
                        resolved ? this.resolve(_result) : rejected && this.reject(_error);
                    }
                }
                ZalgoPromise.prototype.resolve = function(result) {
                    if (this.resolved || this.rejected) return this;
                    if (utils_isPromise(result)) throw new Error("Can not resolve promise with another promise");
                    this.resolved = !0;
                    this.value = result;
                    this.dispatch();
                    return this;
                };
                ZalgoPromise.prototype.reject = function(error) {
                    var _this2 = this;
                    if (this.resolved || this.rejected) return this;
                    if (utils_isPromise(error)) throw new Error("Can not reject promise with another promise");
                    if (!error) {
                        var _err = error && "function" == typeof error.toString ? error.toString() : Object.prototype.toString.call(error);
                        error = new Error("Expected reject to be called with Error, got " + _err);
                    }
                    this.rejected = !0;
                    this.error = error;
                    this.errorHandled || setTimeout(function() {
                        _this2.errorHandled || function(err, promise) {
                            if (-1 === dispatchedErrors.indexOf(err)) {
                                dispatchedErrors.push(err);
                                setTimeout(function() {
                                    throw err;
                                }, 1);
                                for (var j = 0; j < possiblyUnhandledPromiseHandlers.length; j++) possiblyUnhandledPromiseHandlers[j](err, promise);
                            }
                        }(error, _this2);
                    }, 1);
                    this.dispatch();
                    return this;
                };
                ZalgoPromise.prototype.asyncReject = function(error) {
                    this.errorHandled = !0;
                    this.reject(error);
                    return this;
                };
                ZalgoPromise.prototype.dispatch = function() {
                    var _this3 = this, dispatching = this.dispatching, resolved = this.resolved, rejected = this.rejected, handlers = this.handlers;
                    if (!dispatching && (resolved || rejected)) {
                        this.dispatching = !0;
                        startActive();
                        for (var _loop = function(i) {
                            var _handlers$i = handlers[i], onSuccess = _handlers$i.onSuccess, onError = _handlers$i.onError, promise = _handlers$i.promise, result = void 0;
                            if (resolved) try {
                                result = onSuccess ? onSuccess(_this3.value) : _this3.value;
                            } catch (err) {
                                promise.reject(err);
                                return "continue";
                            } else if (rejected) {
                                if (!onError) {
                                    promise.reject(_this3.error);
                                    return "continue";
                                }
                                try {
                                    result = onError(_this3.error);
                                } catch (err) {
                                    promise.reject(err);
                                    return "continue";
                                }
                            }
                            if (result instanceof ZalgoPromise && (result.resolved || result.rejected)) {
                                result.resolved ? promise.resolve(result.value) : promise.reject(result.error);
                                result.errorHandled = !0;
                            } else utils_isPromise(result) ? result instanceof ZalgoPromise && (result.resolved || result.rejected) ? result.resolved ? promise.resolve(result.value) : promise.reject(result.error) : result.then(function(res) {
                                promise.resolve(res);
                            }, function(err) {
                                promise.reject(err);
                            }) : promise.resolve(result);
                        }, i = 0; i < handlers.length; i++) _loop(i);
                        handlers.length = 0;
                        this.dispatching = !1;
                        endActive();
                    }
                };
                ZalgoPromise.prototype.then = function(onSuccess, onError) {
                    if (onSuccess && "function" != typeof onSuccess && !onSuccess.call) throw new Error("Promise.then expected a function for success handler");
                    if (onError && "function" != typeof onError && !onError.call) throw new Error("Promise.then expected a function for error handler");
                    var promise = new ZalgoPromise();
                    this.handlers.push({
                        promise: promise,
                        onSuccess: onSuccess,
                        onError: onError
                    });
                    this.errorHandled = !0;
                    this.dispatch();
                    return promise;
                };
                ZalgoPromise.prototype.catch = function(onError) {
                    return this.then(void 0, onError);
                };
                ZalgoPromise.prototype.finally = function(onFinally) {
                    if (onFinally && "function" != typeof onFinally && !onFinally.call) throw new Error("Promise.finally expected a function");
                    return this.then(function(result) {
                        return ZalgoPromise.try(onFinally).then(function() {
                            return result;
                        });
                    }, function(err) {
                        return ZalgoPromise.try(onFinally).then(function() {
                            throw err;
                        });
                    });
                };
                ZalgoPromise.prototype.timeout = function(time, err) {
                    var _this4 = this;
                    if (this.resolved || this.rejected) return this;
                    var timeout = setTimeout(function() {
                        _this4.resolved || _this4.rejected || _this4.reject(err || new Error("Promise timed out after " + time + "ms"));
                    }, time);
                    return this.then(function(result) {
                        clearTimeout(timeout);
                        return result;
                    });
                };
                ZalgoPromise.prototype.toPromise = function() {
                    if ("undefined" == typeof Promise) throw new TypeError("Could not find Promise");
                    return Promise.resolve(this);
                };
                ZalgoPromise.resolve = function(value) {
                    return value instanceof ZalgoPromise ? value : utils_isPromise(value) ? new ZalgoPromise(function(resolve, reject) {
                        return value.then(resolve, reject);
                    }) : new ZalgoPromise().resolve(value);
                };
                ZalgoPromise.reject = function(error) {
                    return new ZalgoPromise().reject(error);
                };
                ZalgoPromise.asyncReject = function(error) {
                    return new ZalgoPromise().asyncReject(error);
                };
                ZalgoPromise.all = function(promises) {
                    var promise = new ZalgoPromise(), count = promises.length, results = [];
                    if (!count) {
                        promise.resolve(results);
                        return promise;
                    }
                    for (var _loop2 = function(i) {
                        var prom = promises[i];
                        if (prom instanceof ZalgoPromise) {
                            if (prom.resolved) {
                                results[i] = prom.value;
                                count -= 1;
                                return "continue";
                            }
                        } else if (!utils_isPromise(prom)) {
                            results[i] = prom;
                            count -= 1;
                            return "continue";
                        }
                        ZalgoPromise.resolve(prom).then(function(result) {
                            results[i] = result;
                            0 == (count -= 1) && promise.resolve(results);
                        }, function(err) {
                            promise.reject(err);
                        });
                    }, i = 0; i < promises.length; i++) _loop2(i);
                    0 === count && promise.resolve(results);
                    return promise;
                };
                ZalgoPromise.hash = function(promises) {
                    var result = {};
                    return ZalgoPromise.all(Object.keys(promises).map(function(key) {
                        return ZalgoPromise.resolve(promises[key]).then(function(value) {
                            result[key] = value;
                        });
                    })).then(function() {
                        return result;
                    });
                };
                ZalgoPromise.map = function(items, method) {
                    return ZalgoPromise.all(items.map(method));
                };
                ZalgoPromise.onPossiblyUnhandledException = function(handler) {
                    return function(handler) {
                        possiblyUnhandledPromiseHandlers.push(handler);
                        return {
                            cancel: function() {
                                possiblyUnhandledPromiseHandlers.splice(possiblyUnhandledPromiseHandlers.indexOf(handler), 1);
                            }
                        };
                    }(handler);
                };
                ZalgoPromise.try = function(method, context, args) {
                    if (method && "function" != typeof method && !method.call) throw new Error("Promise.try expected a function");
                    var result = void 0;
                    startActive();
                    try {
                        result = method.apply(context, args || []);
                    } catch (err) {
                        endActive();
                        return ZalgoPromise.reject(err);
                    }
                    endActive();
                    return ZalgoPromise.resolve(result);
                };
                ZalgoPromise.delay = function(_delay) {
                    return new ZalgoPromise(function(resolve) {
                        setTimeout(resolve, _delay);
                    });
                };
                ZalgoPromise.isPromise = function(value) {
                    return !!(value && value instanceof ZalgoPromise) || utils_isPromise(value);
                };
                ZalgoPromise.flush = function() {
                    return function(Zalgo) {
                        var promise = flushPromise = flushPromise || new ZalgoPromise();
                        flushActive();
                        return promise;
                    }();
                };
                return ZalgoPromise;
            }();
            __webpack_require__.d(__webpack_exports__, "a", function() {
                return promise_ZalgoPromise;
            });
        },
        "./src/constants.js": function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            Object.defineProperty(__webpack_exports__, "__esModule", {
                value: !0
            });
            __webpack_require__.d(__webpack_exports__, "ZOID", function() {
                return ZOID;
            });
            __webpack_require__.d(__webpack_exports__, "__ZOID__", function() {
                return __ZOID__;
            });
            __webpack_require__.d(__webpack_exports__, "POST_MESSAGE", function() {
                return POST_MESSAGE;
            });
            __webpack_require__.d(__webpack_exports__, "PROP_TYPES", function() {
                return PROP_TYPES;
            });
            __webpack_require__.d(__webpack_exports__, "INITIAL_PROPS", function() {
                return INITIAL_PROPS;
            });
            __webpack_require__.d(__webpack_exports__, "WINDOW_REFERENCES", function() {
                return WINDOW_REFERENCES;
            });
            __webpack_require__.d(__webpack_exports__, "PROP_TYPES_LIST", function() {
                return PROP_TYPES_LIST;
            });
            __webpack_require__.d(__webpack_exports__, "CONTEXT_TYPES", function() {
                return CONTEXT_TYPES;
            });
            __webpack_require__.d(__webpack_exports__, "CLASS_NAMES", function() {
                return CLASS_NAMES;
            });
            __webpack_require__.d(__webpack_exports__, "EVENTS", function() {
                return EVENTS;
            });
            __webpack_require__.d(__webpack_exports__, "ATTRIBUTES", function() {
                return ATTRIBUTES;
            });
            __webpack_require__.d(__webpack_exports__, "ANIMATION_NAMES", function() {
                return ANIMATION_NAMES;
            });
            __webpack_require__.d(__webpack_exports__, "EVENT_NAMES", function() {
                return EVENT_NAMES;
            });
            __webpack_require__.d(__webpack_exports__, "CLOSE_REASONS", function() {
                return CLOSE_REASONS;
            });
            __webpack_require__.d(__webpack_exports__, "CONTEXT_TYPES_LIST", function() {
                return CONTEXT_TYPES_LIST;
            });
            __webpack_require__.d(__webpack_exports__, "DELEGATE", function() {
                return DELEGATE;
            });
            __webpack_require__.d(__webpack_exports__, "WILDCARD", function() {
                return WILDCARD;
            });
            __webpack_require__.d(__webpack_exports__, "DEFAULT_DIMENSIONS", function() {
                return DEFAULT_DIMENSIONS;
            });
            var ZOID = "zoid", __ZOID__ = "__" + ZOID + "__", POST_MESSAGE = {
                INIT: ZOID + "_init",
                PROPS: ZOID + "_props",
                PROP_CALLBACK: ZOID + "_prop_callback",
                CLOSE: ZOID + "_close",
                CHECK_CLOSE: ZOID + "_check_close",
                REDIRECT: ZOID + "_redirect",
                RESIZE: ZOID + "_resize",
                DELEGATE: ZOID + "_delegate",
                ALLOW_DELEGATE: ZOID + "_allow_delegate",
                ERROR: ZOID + "_error",
                HIDE: ZOID + "_hide",
                SHOW: ZOID + "_show"
            }, PROP_TYPES = {
                STRING: "string",
                OBJECT: "object",
                FUNCTION: "function",
                BOOLEAN: "boolean",
                NUMBER: "number"
            }, INITIAL_PROPS = {
                RAW: "raw",
                UID: "uid"
            }, WINDOW_REFERENCES = {
                OPENER: "opener",
                TOP: "top",
                PARENT: "parent",
                GLOBAL: "global"
            }, PROP_TYPES_LIST = Object.keys(PROP_TYPES).map(function(key) {
                return PROP_TYPES[key];
            }), CONTEXT_TYPES = {
                IFRAME: "iframe",
                POPUP: "popup"
            }, CLASS_NAMES = {
                ZOID: "" + ZOID,
                OUTLET: ZOID + "-outlet",
                COMPONENT_FRAME: ZOID + "-component-frame",
                PRERENDER_FRAME: ZOID + "-prerender-frame",
                VISIBLE: ZOID + "-visible",
                INVISIBLE: ZOID + "-invisible"
            }, EVENTS = {
                CLOSE: ZOID + "-close"
            }, ATTRIBUTES = {
                IFRAME_PLACEHOLDER: "data-zoid-" + ZOID + "-placeholder"
            }, ANIMATION_NAMES = {
                SHOW_CONTAINER: ZOID + "-show-container",
                SHOW_COMPONENT: ZOID + "-show-component",
                HIDE_CONTAINER: ZOID + "-hide-container",
                HIDE_COMPONENT: ZOID + "-hide-component"
            }, EVENT_NAMES = {
                CLICK: "click"
            }, CLOSE_REASONS = {
                PARENT_CALL: "parent_call",
                CHILD_CALL: "child_call",
                CLOSE_DETECTED: "close_detected",
                USER_CLOSED: "user_closed",
                PARENT_CLOSE_DETECTED: "parent_close_detected"
            }, CONTEXT_TYPES_LIST = Object.keys(CONTEXT_TYPES).map(function(key) {
                return CONTEXT_TYPES[key];
            }), DELEGATE = {
                CALL_ORIGINAL: "call_original",
                CALL_DELEGATE: "call_delegate"
            }, WILDCARD = "*", DEFAULT_DIMENSIONS = {
                WIDTH: 300,
                HEIGHT: 150
            };
        },
        "./src/drivers/angular.js": function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.d(__webpack_exports__, "a", function() {
                return angular;
            });
            var __WEBPACK_IMPORTED_MODULE_0__lib__ = __webpack_require__("./src/lib/index.js"), angular = {
                global: function() {
                    return window.angular;
                },
                register: function(component, ng) {
                    return ng.module(component.tag, []).directive(Object(__WEBPACK_IMPORTED_MODULE_0__lib__.h)(component.tag), function() {
                        for (var scope = {}, _i2 = 0, _component$getPropNam2 = component.getPropNames(), _length2 = null == _component$getPropNam2 ? 0 : _component$getPropNam2.length; _i2 < _length2; _i2++) {
                            var key = _component$getPropNam2[_i2];
                            scope[key] = "=";
                        }
                        component.looseProps && (scope.props = "=");
                        return {
                            scope: scope,
                            restrict: "E",
                            controller: [ "$scope", "$element", function($scope, $element) {
                                if (component.looseProps && !$scope.props) throw new Error("For angular bindings to work, prop definitions must be passed to zoid.create");
                                component.log("instantiate_angular_component");
                                var getProps = function() {
                                    var scopeProps = void 0;
                                    if ($scope.props) scopeProps = $scope.props; else {
                                        scopeProps = {};
                                        for (var _i4 = 0, _Object$keys2 = Object.keys(scope), _length4 = null == _Object$keys2 ? 0 : _Object$keys2.length; _i4 < _length4; _i4++) {
                                            var _key = _Object$keys2[_i4];
                                            void 0 !== $scope[_key] && (scopeProps[_key] = $scope[_key]);
                                        }
                                    }
                                    return Object(__WEBPACK_IMPORTED_MODULE_0__lib__.J)(scopeProps, {
                                        function: function(value) {
                                            return function() {
                                                var result = value.apply(this, arguments);
                                                !function() {
                                                    if ("$apply" !== $scope.$root.$$phase && "$digest" !== $scope.$root.$$phase) try {
                                                        $scope.$apply();
                                                    } catch (err) {}
                                                }();
                                                return result;
                                            };
                                        }
                                    });
                                }, parent = component.init(getProps(), null, $element[0]);
                                parent.render($element[0]);
                                $scope.$watch(function() {
                                    parent.updateProps(getProps());
                                });
                            } ]
                        };
                    });
                }
            };
        },
        "./src/drivers/angular2.js": function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.d(__webpack_exports__, "a", function() {
                return angular2;
            });
            var __WEBPACK_IMPORTED_MODULE_0__lib__ = __webpack_require__("./src/lib/index.js"), _extends = Object.assign || function(target) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];
                    for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
                }
                return target;
            }, angular2 = {
                global: function() {},
                register: function(zoid, _ref) {
                    var AngularComponent = _ref.Component, NgModule = _ref.NgModule, ElementRef = _ref.ElementRef, NgZone = _ref.NgZone;
                    zoid.log("initializing angular2 component");
                    var getProps = function(component) {
                        return Object(__WEBPACK_IMPORTED_MODULE_0__lib__.J)(_extends({}, component.internalProps, component.props), {
                            function: function(value) {
                                if ("function" == typeof value) return function() {
                                    var _this = this, _arguments = arguments;
                                    return component.zone.run(function() {
                                        return value.apply(_this, _arguments);
                                    });
                                };
                            }
                        });
                    }, ComponentInstance = AngularComponent({
                        selector: zoid.tag,
                        template: "<div></div>",
                        inputs: [ "props" ]
                    }).Class({
                        constructor: [ ElementRef, NgZone, function(elementRef, zone) {
                            this.elementRef = elementRef;
                            this.zone = zone;
                        } ],
                        ngOnInit: function() {
                            var targetElement = this.elementRef.nativeElement, parent = zoid.init(getProps(this), null, targetElement);
                            parent.render(targetElement);
                            this.parent = parent;
                        },
                        ngOnChanges: function() {
                            this.parent && this.parent.updateProps(getProps(this));
                        }
                    });
                    return NgModule({
                        declarations: [ ComponentInstance ],
                        exports: [ ComponentInstance ]
                    }).Class({
                        constructor: function() {}
                    });
                }
            };
        },
        "./src/drivers/ember.js": function(module, exports) {},
        "./src/drivers/glimmer.js": function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.d(__webpack_exports__, "a", function() {
                return glimmer;
            });
            var _extends = Object.assign || function(target) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];
                    for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
                }
                return target;
            }, glimmer = {
                global: function() {},
                register: function(component, GlimmerComponent) {
                    return function(_GlimmerComponent) {
                        !function(subClass, superClass) {
                            if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                            subClass.prototype = Object.create(superClass && superClass.prototype, {
                                constructor: {
                                    value: subClass,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            });
                            superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
                        }(_class, _GlimmerComponent);
                        function _class() {
                            !function(instance, Constructor) {
                                if (!(instance instanceof _class)) throw new TypeError("Cannot call a class as a function");
                            }(this);
                            return function(self, call) {
                                if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return !call || "object" != typeof call && "function" != typeof call ? self : call;
                            }(this, _GlimmerComponent.apply(this, arguments));
                        }
                        _class.prototype.didInsertElement = function() {
                            component.render(_extends({}, this.args), this.element);
                        };
                        return _class;
                    }(GlimmerComponent);
                }
            };
        },
        "./src/drivers/index.js": function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            var __WEBPACK_IMPORTED_MODULE_0__script__ = __webpack_require__("./src/drivers/script.js");
            __webpack_require__.d(__webpack_exports__, "script", function() {
                return __WEBPACK_IMPORTED_MODULE_0__script__.a;
            });
            var __WEBPACK_IMPORTED_MODULE_1__react__ = __webpack_require__("./src/drivers/react.js");
            __webpack_require__.d(__webpack_exports__, "react", function() {
                return __WEBPACK_IMPORTED_MODULE_1__react__.a;
            });
            var __WEBPACK_IMPORTED_MODULE_2__vue__ = __webpack_require__("./src/drivers/vue.js");
            __webpack_require__.d(__webpack_exports__, "vue", function() {
                return __WEBPACK_IMPORTED_MODULE_2__vue__.a;
            });
            var __WEBPACK_IMPORTED_MODULE_3__angular__ = __webpack_require__("./src/drivers/angular.js");
            __webpack_require__.d(__webpack_exports__, "angular", function() {
                return __WEBPACK_IMPORTED_MODULE_3__angular__.a;
            });
            var __WEBPACK_IMPORTED_MODULE_4__ember__ = __webpack_require__("./src/drivers/ember.js");
            __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__ember__);
            __webpack_require__.o(__WEBPACK_IMPORTED_MODULE_4__ember__, "angular2") && __webpack_require__.d(__webpack_exports__, "angular2", function() {
                return __WEBPACK_IMPORTED_MODULE_4__ember__.angular2;
            });
            __webpack_require__.o(__WEBPACK_IMPORTED_MODULE_4__ember__, "glimmer") && __webpack_require__.d(__webpack_exports__, "glimmer", function() {
                return __WEBPACK_IMPORTED_MODULE_4__ember__.glimmer;
            });
            var __WEBPACK_IMPORTED_MODULE_5__glimmer__ = __webpack_require__("./src/drivers/glimmer.js");
            __webpack_require__.d(__webpack_exports__, "glimmer", function() {
                return __WEBPACK_IMPORTED_MODULE_5__glimmer__.a;
            });
            var __WEBPACK_IMPORTED_MODULE_6__angular2__ = __webpack_require__("./src/drivers/angular2.js");
            __webpack_require__.d(__webpack_exports__, "angular2", function() {
                return __WEBPACK_IMPORTED_MODULE_6__angular2__.a;
            });
        },
        "./src/drivers/react.js": function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.d(__webpack_exports__, "a", function() {
                return react;
            });
            var __WEBPACK_IMPORTED_MODULE_0__lib__ = __webpack_require__("./src/lib/index.js"), react = {
                global: function() {
                    if (window.React && window.ReactDOM) return {
                        React: window.React,
                        ReactDOM: window.ReactDOM
                    };
                },
                register: function(component, _ref) {
                    var React = _ref.React, ReactDOM = _ref.ReactDOM;
                    React.createClass ? component.react = React.createClass({
                        render: function() {
                            return React.createElement("div", null);
                        },
                        componentDidMount: function() {
                            component.log("instantiate_react_component");
                            var el = ReactDOM.findDOMNode(this), parent = component.init(Object(__WEBPACK_IMPORTED_MODULE_0__lib__.p)({}, this.props), null, el);
                            this.setState({
                                parent: parent
                            });
                            parent.render(el);
                        },
                        componentDidUpdate: function() {
                            this.state && this.state.parent && this.state.parent.updateProps(Object(__WEBPACK_IMPORTED_MODULE_0__lib__.p)({}, this.props));
                        },
                        componentWillUnmount: function() {
                            this.state && this.state.parent && this.state.parent.destroy();
                        }
                    }) : component.react = function(_React$Component) {
                        !function(subClass, superClass) {
                            if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                            subClass.prototype = Object.create(superClass && superClass.prototype, {
                                constructor: {
                                    value: subClass,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            });
                            superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
                        }(_class, _React$Component);
                        function _class() {
                            !function(instance, Constructor) {
                                if (!(instance instanceof _class)) throw new TypeError("Cannot call a class as a function");
                            }(this);
                            return function(self, call) {
                                if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return !call || "object" != typeof call && "function" != typeof call ? self : call;
                            }(this, _React$Component.apply(this, arguments));
                        }
                        _class.prototype.render = function() {
                            return React.createElement("div", null);
                        };
                        _class.prototype.componentDidMount = function() {
                            component.log("instantiate_react_component");
                            var el = ReactDOM.findDOMNode(this), parent = component.init(Object(__WEBPACK_IMPORTED_MODULE_0__lib__.p)({}, this.props), null, el);
                            this.setState({
                                parent: parent
                            });
                            parent.render(el);
                        };
                        _class.prototype.componentDidUpdate = function() {
                            this.state && this.state.parent && this.state.parent.updateProps(Object(__WEBPACK_IMPORTED_MODULE_0__lib__.p)({}, this.props));
                        };
                        _class.prototype.componentWillUnmount = function() {
                            this.state && this.state.parent && this.state.parent.destroy();
                        };
                        return _class;
                    }(React.Component);
                    return component.react;
                }
            };
        },
        "./src/drivers/script.js": function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.d(__webpack_exports__, "a", function() {
                return script;
            });
            var script = {
                global: function() {
                    return window.document;
                },
                register: function register(component, document) {
                    function render(element) {
                        if (element && element.tagName && "script" === element.tagName.toLowerCase() && element.attributes.type && "application/x-component" === element.attributes.type.value && element.parentNode) {
                            var tag = element.getAttribute("data-component");
                            if (tag && tag === component.tag) {
                                component.log("instantiate_script_component");
                                var props = element.innerText ? eval("(" + element.innerText + ")") : {}, container = document.createElement("div");
                                if (!element.parentNode) throw new Error("Element has no parent");
                                element.parentNode.replaceChild(container, element);
                                component.render(props, container);
                            }
                        }
                    }
                    function scan() {
                        for (var scriptTags = Array.prototype.slice.call(document.getElementsByTagName("script")), _i2 = 0, _length2 = null == scriptTags ? 0 : scriptTags.length; _i2 < _length2; _i2++) render(scriptTags[_i2]);
                    }
                    scan();
                    document.addEventListener("DOMContentLoaded", scan);
                    window.addEventListener("load", scan);
                    document.addEventListener("DOMNodeInserted", function(event) {
                        render(event.target);
                    });
                }
            };
        },
        "./src/drivers/vue.js": function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.d(__webpack_exports__, "a", function() {
                return vue;
            });
            var __WEBPACK_IMPORTED_MODULE_0__lib__ = __webpack_require__("./src/lib/index.js"), vue = {
                global: function() {},
                register: function(component) {
                    return {
                        render: function(createElement) {
                            return createElement("div");
                        },
                        inheritAttrs: !1,
                        mounted: function() {
                            var el = this.$el;
                            this.parent = component.init(Object(__WEBPACK_IMPORTED_MODULE_0__lib__.p)({}, this.$attrs), null, el);
                            this.parent.render(el);
                        },
                        beforeUpdate: function() {
                            this.parent && this.$attrs && this.parent.updateProps(Object(__WEBPACK_IMPORTED_MODULE_0__lib__.p)({}, this.$attrs));
                        }
                    };
                }
            };
        },
        "./src/error.js": function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_exports__.b = PopupOpenError;
            __webpack_exports__.a = IntegrationError;
            __webpack_exports__.c = RenderError;
            function PopupOpenError(message) {
                this.message = message;
            }
            PopupOpenError.prototype = Object.create(Error.prototype);
            function IntegrationError(message) {
                this.message = message;
            }
            IntegrationError.prototype = Object.create(Error.prototype);
            function RenderError(message) {
                this.message = message;
            }
            RenderError.prototype = Object.create(Error.prototype);
        },
        "./src/index.js": function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            Object.defineProperty(__webpack_exports__, "__esModule", {
                value: !0
            });
            var interface_namespaceObject = {};
            __webpack_require__.d(interface_namespaceObject, "create", function() {
                return create;
            });
            __webpack_require__.d(interface_namespaceObject, "getByTag", function() {
                return getByTag;
            });
            __webpack_require__.d(interface_namespaceObject, "getCurrentScriptDir", function() {
                return lib.s;
            });
            __webpack_require__.d(interface_namespaceObject, "destroyAll", function() {
                return interface_destroyAll;
            });
            __webpack_require__.d(interface_namespaceObject, "postRobot", function() {
                return postRobot;
            });
            __webpack_require__.d(interface_namespaceObject, "CONSTANTS", function() {
                return CONSTANTS;
            });
            __webpack_require__.d(interface_namespaceObject, "PopupOpenError", function() {
                return src_error.b;
            });
            __webpack_require__.d(interface_namespaceObject, "IntegrationError", function() {
                return src_error.a;
            });
            __webpack_require__.d(interface_namespaceObject, "RenderError", function() {
                return src_error.c;
            });
            var src = __webpack_require__("./node_modules/zalgo-promise/src/index.js"), post_robot_src = __webpack_require__("./node_modules/post-robot/src/index.js"), cross_domain_utils_src = __webpack_require__("./node_modules/cross-domain-utils/src/index.js"), lib = __webpack_require__("./src/lib/index.js"), base_BaseComponent = function() {
                function BaseComponent() {
                    !function(instance, Constructor) {
                        if (!(instance instanceof BaseComponent)) throw new TypeError("Cannot call a class as a function");
                    }(this);
                    this.clean = (obj = this, tasks = [], cleaned = !1, {
                        set: function(name, item) {
                            if (cleaned) return item;
                            obj[name] = item;
                            this.register(function() {
                                delete obj[name];
                            });
                            return item;
                        },
                        register: function(name, method) {
                            if ("function" == typeof name) {
                                method = name;
                                name = "<anonymous-cleanup-handler>";
                            }
                            if ("function" != typeof method) throw new TypeError("Expected to be passed function to clean.register");
                            cleaned ? method() : tasks.push({
                                complete: !1,
                                name: name,
                                run: function() {
                                    if (!this.complete) {
                                        this.complete = !0;
                                        method && method();
                                    }
                                }
                            });
                        },
                        hasTasks: function() {
                            return Boolean(tasks.filter(function(item) {
                                return !item.complete;
                            }).length);
                        },
                        all: function() {
                            var results = [];
                            cleaned = !0;
                            for (;tasks.length; ) results.push(tasks.pop().run());
                            return src.a.all(results).then(function() {});
                        },
                        run: function(name) {
                            for (var results = [], _i2 = 0, _length2 = null == tasks ? 0 : tasks.length; _i2 < _length2; _i2++) {
                                var item = tasks[_i2];
                                item.name === name && results.push(item.run());
                            }
                            return src.a.all(results).then(lib.E);
                        }
                    });
                    var obj, tasks, cleaned;
                    this.event = Object(lib.o)();
                }
                BaseComponent.prototype.addProp = function(options, name, def) {
                    Object(lib.g)(options, this, name, def);
                };
                BaseComponent.prototype.on = function(eventName, handler) {
                    return this.event.on(eventName, handler);
                };
                BaseComponent.prototype.listeners = function() {
                    throw new Error("Expected listeners to be implemented");
                };
                BaseComponent.prototype.error = function(err) {
                    throw new Error("Expected error to be implemented - got " + Object(lib.P)(err));
                };
                BaseComponent.prototype.listen = function(win, domain) {
                    var _this = this;
                    if (!win) throw this.component.createError("window to listen to not set");
                    if (!domain) throw new Error("Must pass domain to listen to");
                    if (this.listeners) for (var listeners = this.listeners(), _loop = function(_i4, _Object$keys2, _length4) {
                        var listenerName = _Object$keys2[_i4], name = listenerName.replace(/^zoid_/, ""), errorHandler = function(err) {
                            _this.error(err);
                        }, listener = Object(post_robot_src.on)(listenerName, {
                            window: win,
                            domain: domain,
                            errorHandler: errorHandler
                        }, function(_ref) {
                            var source = _ref.source, data = _ref.data;
                            _this.component.log("listener_" + name);
                            return listeners[listenerName].call(_this, source, data);
                        }), errorListener = Object(post_robot_src.on)(listenerName, {
                            window: win,
                            errorHandler: errorHandler
                        }, function(_ref2) {
                            var origin = _ref2.origin;
                            _this.component.logError("unexpected_listener_" + name, {
                                origin: origin,
                                domain: domain.toString()
                            });
                            _this.error(new Error("Unexpected " + name + " message from domain " + origin + " -- expected message from " + domain.toString()));
                        });
                        _this.clean.register(function() {
                            listener.cancel();
                            errorListener.cancel();
                        });
                    }, _i4 = 0, _Object$keys2 = Object.keys(listeners), _length4 = null == _Object$keys2 ? 0 : _Object$keys2.length; _i4 < _length4; _i4++) _loop(_i4, _Object$keys2);
                };
                return BaseComponent;
            }(), client = __webpack_require__("./node_modules/beaver-logger/client/index.js"), belter_src = __webpack_require__("./node_modules/belter/src/index.js"), base32 = __webpack_require__("./node_modules/hi-base32/src/base32.js"), base32_default = __webpack_require__.n(base32), constants = __webpack_require__("./src/constants.js");
            function normalize(str) {
                return str.replace(/^[^a-z0-9A-Z]+|[^a-z0-9A-Z]+$/g, "").replace(/[^a-z0-9A-Z]+/g, "_");
            }
            var isZoidComponentWindow = Object(lib.C)(function() {
                return !!window.name && "xcomponent" === window.name.split("__")[0];
            }), getComponentMeta = Object(lib.C)(function() {
                if (!window.name) throw new Error("Can not get component meta without window name");
                var _window$name$split2 = window.name.split("__"), zoidcomp = _window$name$split2[0], name = _window$name$split2[1], version = _window$name$split2[2], encodedOptions = _window$name$split2[3];
                if ("xcomponent" !== zoidcomp) throw new Error("Window not rendered by zoid - got " + zoidcomp);
                var str, componentMeta = void 0;
                try {
                    componentMeta = JSON.parse((str = encodedOptions, base32_default.a.decode(str.toUpperCase())));
                } catch (err) {
                    throw new Error("Can not decode component-meta: " + encodedOptions + " " + Object(lib.P)(err));
                }
                componentMeta.name = name;
                componentMeta.version = version.replace(/_/g, ".");
                return componentMeta;
            });
            function window_getParentDomain() {
                return getComponentMeta().domain;
            }
            function getWindowByRef(_ref) {
                var ref = _ref.ref, uid = _ref.uid, distance = _ref.distance, result = void 0;
                ref === constants.WINDOW_REFERENCES.OPENER ? result = Object(cross_domain_utils_src.k)(window) : ref === constants.WINDOW_REFERENCES.TOP ? result = Object(cross_domain_utils_src.m)(window) : ref === constants.WINDOW_REFERENCES.PARENT && (result = distance ? Object(cross_domain_utils_src.j)(window, distance) : Object(cross_domain_utils_src.l)(window));
                if (ref === constants.WINDOW_REFERENCES.GLOBAL) {
                    var ancestor = Object(cross_domain_utils_src.d)(window);
                    if (ancestor) for (var _i2 = 0, _getAllFramesInWindow2 = Object(cross_domain_utils_src.c)(ancestor), _length2 = null == _getAllFramesInWindow2 ? 0 : _getAllFramesInWindow2.length; _i2 < _length2; _i2++) {
                        var frame = _getAllFramesInWindow2[_i2], global = Object(lib.v)(frame);
                        if (global && global.windows && global.windows[uid]) {
                            result = global.windows[uid];
                            break;
                        }
                    }
                }
                if (!result) throw new Error("Unable to find window by ref");
                return result;
            }
            var window_getParentComponentWindow = Object(lib.C)(function() {
                var componentMeta = getComponentMeta();
                if (!componentMeta) throw new Error("Can not get parent component window - window not rendered by zoid");
                return getWindowByRef(componentMeta.componentParent);
            }), window_getParentRenderWindow = Object(lib.C)(function() {
                var componentMeta = getComponentMeta();
                if (!componentMeta) throw new Error("Can not get parent component window - window not rendered by zoid");
                return getWindowByRef(componentMeta.renderParent);
            }), src_error = __webpack_require__("./src/error.js");
            function normalizeChildProp(component, props, key, value) {
                var prop = component.getProp(key);
                return prop ? "function" == typeof prop.childDecorate ? prop.childDecorate(value) : value : component.looseProps ? value : void 0;
            }
            var _extends = Object.assign || function(target) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];
                    for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
                }
                return target;
            }, _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
                return typeof obj;
            } : function(obj) {
                return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
            function _possibleConstructorReturn(self, call) {
                if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !call || "object" != typeof call && "function" != typeof call ? self : call;
            }
            var child_ChildComponent = function(_BaseComponent) {
                !function(subClass, superClass) {
                    if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                    subClass.prototype = Object.create(superClass && superClass.prototype, {
                        constructor: {
                            value: subClass,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
                }(ChildComponent, _BaseComponent);
                function ChildComponent(component) {
                    !function(instance, Constructor) {
                        if (!(instance instanceof ChildComponent)) throw new TypeError("Cannot call a class as a function");
                    }(this);
                    var _this = _possibleConstructorReturn(this, _BaseComponent.call(this));
                    _this.component = component;
                    if (!_this.hasValidParentDomain()) {
                        _this.error(new src_error.c("Can not be rendered by domain: " + _this.getParentDomain()));
                        return _possibleConstructorReturn(_this);
                    }
                    _this.component.log("construct_child");
                    _this.onPropHandlers = [];
                    for (var _loop = function(_i2, _ref2, _length2) {
                        for (var item = _ref2[_i2], _loop2 = function(_i4, _ref4, _length4) {
                            var _ref4$_i = _ref4[_i4], name = _ref4$_i[0], getter = _ref4$_i[1];
                            Object.defineProperty(item, name, {
                                configurable: !0,
                                get: function() {
                                    _this.props || _this.setProps(_this.getInitialProps(), window_getParentDomain());
                                    delete item[name];
                                    item[name] = getter();
                                    return item[name];
                                }
                            });
                        }, _i4 = 0, _ref4 = [ [ "xchild", function() {
                            return _this;
                        } ], [ "xprops", function() {
                            return _this.props;
                        } ] ], _length4 = null == _ref4 ? 0 : _ref4.length; _i4 < _length4; _i4++) _loop2(_i4, _ref4);
                    }, _i2 = 0, _ref2 = [ _this.component, window ], _length2 = null == _ref2 ? 0 : _ref2.length; _i2 < _length2; _i2++) _loop(_i2, _ref2);
                    _this.component.log("init_child");
                    _this.setWindows();
                    _this.onInit = _this.sendToParent(constants.POST_MESSAGE.INIT, {
                        exports: _this.exports()
                    }).then(function(_ref5) {
                        var origin = _ref5.origin, data = _ref5.data;
                        _this.context = data.context;
                        _this.setProps(data.props, origin);
                        _this.watchForResize();
                        return _this;
                    }).catch(function(err) {
                        _this.error(err);
                        throw err;
                    });
                    return _this;
                }
                ChildComponent.prototype.hasValidParentDomain = function() {
                    return Object(cross_domain_utils_src.z)(this.component.allowedParentDomains, this.getParentDomain());
                };
                ChildComponent.prototype.init = function() {
                    return this.onInit;
                };
                ChildComponent.prototype.getParentDomain = function() {
                    return window_getParentDomain();
                };
                ChildComponent.prototype.onProps = function(handler) {
                    this.onPropHandlers.push(handler);
                };
                ChildComponent.prototype.getParentComponentWindow = function() {
                    return window_getParentComponentWindow();
                };
                ChildComponent.prototype.getParentRenderWindow = function() {
                    return window_getParentRenderWindow();
                };
                ChildComponent.prototype.getInitialProps = function() {
                    var _this2 = this, componentMeta = getComponentMeta(), props = componentMeta.props;
                    if (props.type === constants.INITIAL_PROPS.RAW) props = props.value; else {
                        if (props.type !== constants.INITIAL_PROPS.UID) throw new Error("Unrecognized props type: " + props.type);
                        var parentComponentWindow = window_getParentComponentWindow();
                        if (!Object(cross_domain_utils_src.t)(parentComponentWindow)) {
                            if ("file:" === window.location.protocol) throw new Error("Can not get props from file:// domain");
                            throw new Error("Parent component window is on a different domain - expected " + Object(cross_domain_utils_src.f)() + " - can not retrieve props");
                        }
                        var global = Object(lib.v)(parentComponentWindow);
                        if (!global) throw new Error("Can not find global for parent component - can not retrieve props");
                        props = JSON.parse(global.props[componentMeta.uid]);
                    }
                    if (!props) throw new Error("Initial props not found");
                    return Object(lib.j)(props, function(_ref6) {
                        var fullKey = _ref6.fullKey, self = _ref6.self, args = _ref6.args;
                        return _this2.onInit.then(function() {
                            var func = Object(lib.r)(_this2.props, fullKey);
                            if ("function" != typeof func) throw new TypeError("Expected " + fullKey + " to be function, got " + (void 0 === func ? "undefined" : _typeof(func)));
                            return func.apply(self, args);
                        });
                    });
                };
                ChildComponent.prototype.setProps = function(props, origin) {
                    var required = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                    this.props = this.props || {};
                    var normalizedProps = function(component, props, origin) {
                        for (var required = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3], result = {}, _i2 = 0, _Object$keys2 = Object.keys(props), _length2 = null == _Object$keys2 ? 0 : _Object$keys2.length; _i2 < _length2; _i2++) {
                            var key = _Object$keys2[_i2], prop = component.getProp(key), value = props[key];
                            if (!prop || !prop.sameDomain || origin === Object(cross_domain_utils_src.f)(window)) {
                                result[key] = normalizeChildProp(component, 0, key, value);
                                prop && prop.alias && !result[prop.alias] && (result[prop.alias] = value);
                            }
                        }
                        if (required) for (var _i4 = 0, _component$getPropNam2 = component.getPropNames(), _length4 = null == _component$getPropNam2 ? 0 : _component$getPropNam2.length; _i4 < _length4; _i4++) {
                            var _key = _component$getPropNam2[_i4];
                            props.hasOwnProperty(_key) || (result[_key] = normalizeChildProp(component, 0, _key, props[_key]));
                        }
                        return result;
                    }(this.component, props, origin, required);
                    Object(lib.p)(this.props, normalizedProps);
                    this.props.logLevel && Object(lib.L)(this.props.logLevel);
                    for (var _i6 = 0, _onPropHandlers2 = this.onPropHandlers, _length6 = null == _onPropHandlers2 ? 0 : _onPropHandlers2.length; _i6 < _length6; _i6++) _onPropHandlers2[_i6].call(this, this.props);
                };
                ChildComponent.prototype.sendToParent = function(name) {
                    var data = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, options = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, parentWindow = window_getParentComponentWindow();
                    if (!parentWindow) throw new Error("Can not find parent component window to message");
                    this.component.log("send_to_parent_" + name);
                    return Object(post_robot_src.send)(parentWindow, name, data, _extends({
                        domain: window_getParentDomain()
                    }, options));
                };
                ChildComponent.prototype.setWindows = function() {
                    if (window.__activeZoidComponent__) throw this.component.createError("Can not attach multiple components to the same window");
                    window.__activeZoidComponent__ = this;
                    if (!window_getParentComponentWindow()) throw this.component.createError("Can not find parent window");
                    var componentMeta = getComponentMeta();
                    if (componentMeta.tag !== this.component.tag) throw this.component.createError("Parent is " + componentMeta.tag + " - can not attach " + this.component.tag);
                    this.watchForClose();
                };
                ChildComponent.prototype.watchForClose = function() {
                    var _this3 = this;
                    window.addEventListener("unload", function() {
                        return _this3.checkClose();
                    });
                };
                ChildComponent.prototype.enableAutoResize = function() {
                    var _ref7 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, _ref7$width = _ref7.width, width = void 0 === _ref7$width || _ref7$width, _ref7$height = _ref7.height, height = void 0 === _ref7$height || _ref7$height;
                    this.autoResize = {
                        width: width,
                        height: height
                    };
                    this.watchForResize();
                };
                ChildComponent.prototype.getAutoResize = function() {
                    var width = !1, height = !1, autoResize = this.autoResize || this.component.autoResize;
                    if ("object" === (void 0 === autoResize ? "undefined" : _typeof(autoResize))) {
                        width = Boolean(autoResize.width);
                        height = Boolean(autoResize.height);
                    } else if (autoResize) {
                        width = !0;
                        height = !0;
                    }
                    return {
                        width: width,
                        height: height,
                        element: autoResize.element ? Object(lib.t)(autoResize.element) : document.body
                    };
                };
                ChildComponent.prototype.watchForResize = function() {
                    var _this4 = this, _getAutoResize = this.getAutoResize(), width = _getAutoResize.width, height = _getAutoResize.height, element = _getAutoResize.element;
                    if ((width || height) && this.context !== constants.CONTEXT_TYPES.POPUP && !this.watchingForResize) {
                        this.watchingForResize = !0;
                        Object(belter_src.onResize)(element, function(_ref8) {
                            var newWidth = _ref8.width, newHeight = _ref8.height;
                            _this4.resize(width ? newWidth : void 0, height ? newHeight : void 0);
                        }, {
                            width: width,
                            height: height
                        });
                    }
                };
                ChildComponent.prototype.exports = function() {
                    var self = this;
                    return {
                        updateProps: function(props) {
                            var _this5 = this;
                            return src.a.try(function() {
                                return self.setProps(props, _this5.origin, !1);
                            });
                        },
                        close: function() {
                            return src.a.try(function() {
                                return self.destroy();
                            });
                        }
                    };
                };
                ChildComponent.prototype.resize = function(width, height) {
                    var _this6 = this;
                    return src.a.resolve().then(function() {
                        _this6.component.log("resize", {
                            width: Object(lib.O)(width),
                            height: Object(lib.O)(height)
                        });
                        if (_this6.context !== constants.CONTEXT_TYPES.POPUP) return _this6.sendToParent(constants.POST_MESSAGE.RESIZE, {
                            width: width,
                            height: height
                        }).then(lib.E);
                    });
                };
                ChildComponent.prototype.hide = function() {
                    return this.sendToParent(constants.POST_MESSAGE.HIDE).then(lib.E);
                };
                ChildComponent.prototype.show = function() {
                    return this.sendToParent(constants.POST_MESSAGE.SHOW).then(lib.E);
                };
                ChildComponent.prototype.userClose = function() {
                    return this.close(constants.CLOSE_REASONS.USER_CLOSED);
                };
                ChildComponent.prototype.close = function() {
                    var reason = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : constants.CLOSE_REASONS.CHILD_CALL;
                    this.component.log("close_child");
                    this.sendToParent(constants.POST_MESSAGE.CLOSE, {
                        reason: reason
                    });
                };
                ChildComponent.prototype.checkClose = function() {
                    this.sendToParent(constants.POST_MESSAGE.CHECK_CLOSE, {}, {
                        fireAndForget: !0
                    });
                };
                ChildComponent.prototype.destroy = function() {
                    return Object(client.c)().then(function() {
                        window.close();
                    });
                };
                ChildComponent.prototype.focus = function() {
                    this.component.log("focus");
                    window.focus();
                };
                ChildComponent.prototype.error = function(err) {
                    var stringifiedError = Object(lib.P)(err);
                    this.component.logError("error", {
                        error: stringifiedError
                    });
                    return this.sendToParent(constants.POST_MESSAGE.ERROR, {
                        error: stringifiedError
                    }).then(lib.E);
                };
                return ChildComponent;
            }(base_BaseComponent), drivers__extends = Object.assign || function(target) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];
                    for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
                }
                return target;
            }, RENDER_DRIVERS = {};
            RENDER_DRIVERS[constants.CONTEXT_TYPES.IFRAME] = {
                focusable: !1,
                renderedIntoContainerTemplate: !0,
                allowResize: !0,
                openOnClick: !1,
                needsBridge: !1,
                open: function(url) {
                    var _this = this, attributes = this.component.attributes.iframe || {};
                    this.iframe = Object(lib.x)({
                        url: url,
                        attributes: drivers__extends({
                            name: this.childWindowName,
                            title: this.component.name,
                            scrolling: this.component.scrolling ? "yes" : "no"
                        }, attributes),
                        class: [ constants.CLASS_NAMES.COMPONENT_FRAME, constants.CLASS_NAMES.INVISIBLE ]
                    }, this.element);
                    return Object(lib.f)(this.iframe).then(function(frameWindow) {
                        _this.window = frameWindow;
                        var detectClose = function() {
                            return src.a.try(function() {
                                return _this.props.onClose(constants.CLOSE_REASONS.CLOSE_DETECTED);
                            }).finally(function() {
                                return _this.destroy();
                            });
                        }, iframeWatcher = Object(lib.T)(_this.iframe, detectClose), elementWatcher = Object(lib.T)(_this.element, detectClose);
                        _this.clean.register("destroyWindow", function() {
                            iframeWatcher.cancel();
                            elementWatcher.cancel();
                            Object(post_robot_src.cleanUpWindow)(_this.window);
                            delete _this.window;
                            if (_this.iframe) {
                                Object(lib.k)(_this.iframe);
                                delete _this.iframe;
                            }
                        });
                    });
                },
                openPrerender: function() {
                    var _this2 = this, attributes = this.component.attributes.iframe || {};
                    this.prerenderIframe = Object(lib.x)({
                        attributes: drivers__extends({
                            name: "__prerender__" + this.childWindowName,
                            scrolling: this.component.scrolling ? "yes" : "no"
                        }, attributes),
                        class: [ constants.CLASS_NAMES.PRERENDER_FRAME, constants.CLASS_NAMES.VISIBLE ]
                    }, this.element);
                    return Object(lib.f)(this.prerenderIframe).then(function(prerenderFrameWindow) {
                        _this2.prerenderWindow = prerenderFrameWindow;
                        _this2.clean.register("destroyPrerender", function() {
                            if (_this2.prerenderIframe) {
                                Object(lib.k)(_this2.prerenderIframe);
                                delete _this2.prerenderIframe;
                            }
                        });
                    });
                },
                switchPrerender: function() {
                    var _this3 = this;
                    Object(lib.a)(this.prerenderIframe, constants.CLASS_NAMES.INVISIBLE);
                    Object(lib.I)(this.prerenderIframe, constants.CLASS_NAMES.VISIBLE);
                    Object(lib.a)(this.iframe, constants.CLASS_NAMES.VISIBLE);
                    Object(lib.I)(this.iframe, constants.CLASS_NAMES.INVISIBLE);
                    setTimeout(function() {
                        _this3.prerenderIframe && Object(lib.k)(_this3.prerenderIframe);
                    }, 1e3);
                },
                delegateOverrides: {
                    openContainer: constants.DELEGATE.CALL_DELEGATE,
                    destroyComponent: constants.DELEGATE.CALL_DELEGATE,
                    destroyContainer: constants.DELEGATE.CALL_DELEGATE,
                    cancelContainerEvents: constants.DELEGATE.CALL_DELEGATE,
                    createPrerenderTemplate: constants.DELEGATE.CALL_DELEGATE,
                    elementReady: constants.DELEGATE.CALL_DELEGATE,
                    showContainer: constants.DELEGATE.CALL_DELEGATE,
                    showComponent: constants.DELEGATE.CALL_DELEGATE,
                    hideContainer: constants.DELEGATE.CALL_DELEGATE,
                    hideComponent: constants.DELEGATE.CALL_DELEGATE,
                    hide: constants.DELEGATE.CALL_DELEGATE,
                    show: constants.DELEGATE.CALL_DELEGATE,
                    resize: constants.DELEGATE.CALL_DELEGATE,
                    loadUrl: constants.DELEGATE.CALL_DELEGATE,
                    hijackSubmit: constants.DELEGATE.CALL_DELEGATE,
                    openPrerender: constants.DELEGATE.CALL_DELEGATE,
                    switchPrerender: constants.DELEGATE.CALL_DELEGATE,
                    renderTemplate: constants.DELEGATE.CALL_ORIGINAL,
                    openContainerFrame: constants.DELEGATE.CALL_ORIGINAL,
                    getOutlet: constants.DELEGATE.CALL_ORIGINAL,
                    open: function(original, override) {
                        return function() {
                            var _this4 = this;
                            return override.apply(this, arguments).then(function() {
                                _this4.clean.set("window", Object(cross_domain_utils_src.a)(window_getParentComponentWindow(), _this4.childWindowName));
                                if (!_this4.window) throw new Error("Unable to find parent component iframe window");
                            });
                        };
                    }
                },
                resize: function(width, height) {
                    if (width) {
                        this.container.style.width = Object(lib.Q)(width);
                        this.element.style.width = Object(lib.Q)(width);
                    }
                    if (height) {
                        this.container.style.height = Object(lib.Q)(height);
                        this.element.style.height = Object(lib.Q)(height);
                    }
                },
                show: function() {
                    Object(lib.N)(this.element);
                },
                hide: function() {
                    Object(lib.w)(this.element);
                },
                loadUrl: function(url) {
                    this.iframe.setAttribute("src", url);
                }
            };
            var validate__typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
                return typeof obj;
            } : function(obj) {
                return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
            function validateProp(prop, key, value, props) {
                var required = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
                if (null !== value && void 0 !== value && "" !== value) {
                    if (!value || "function" != typeof value.then || !prop.promise) {
                        if ("function" === prop.type) {
                            if ("function" != typeof value) throw new TypeError("Prop is not of type function: " + key);
                        } else if ("string" === prop.type) {
                            if ("string" != typeof value) throw new TypeError("Prop is not of type string: " + key);
                        } else if ("object" === prop.type) try {
                            JSON.stringify(value);
                        } catch (err) {
                            throw new Error("Unable to serialize prop: " + key);
                        } else if ("number" === prop.type && isNaN(parseInt(value, 10))) throw new TypeError("Prop is not a number: " + key);
                        "function" == typeof prop.validate && value && prop.validate(value, props);
                    }
                } else if (required && !1 !== prop.required && !prop.hasOwnProperty("def")) throw new Error("Prop is required: " + key);
            }
            var props__typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
                return typeof obj;
            } : function(obj) {
                return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
            function normalizeProp(component, instance, props, key, value) {
                var prop = component.getProp(key), resultValue = void 0;
                !(resultValue = prop.value ? prop.value : !prop.def || props.hasOwnProperty(key) && function(value) {
                    return null !== value && void 0 !== value && "" !== value;
                }(value) ? value : prop.def.call(component, props)) && prop.alias && props[prop.alias] && (resultValue = props[prop.alias]);
                var decorated = !1;
                if (prop.decorate && null !== resultValue && void 0 !== resultValue) {
                    resultValue = prop.decorate.call(instance, resultValue, props);
                    decorated = !0;
                }
                var type = prop.type;
                if ("boolean" === type) resultValue = Boolean(resultValue); else if ("function" === type) {
                    if (!resultValue && prop.noop) {
                        resultValue = lib.E;
                        !decorated && prop.decorate && (resultValue = prop.decorate.call(instance, lib.E, props));
                    }
                    if (resultValue && "function" == typeof resultValue) {
                        resultValue = resultValue.bind(instance);
                        prop.denodeify && (resultValue = Object(lib.i)(resultValue));
                        prop.promisify && (resultValue = Object(lib.H)(resultValue));
                        var original = resultValue;
                        resultValue = function() {
                            component.log("call_prop_" + key);
                            return original.apply(this, arguments);
                        };
                        prop.once && (resultValue = Object(lib.F)(resultValue));
                        prop.memoize && (resultValue = Object(lib.C)(resultValue));
                    }
                } else "string" === type || "object" === type || "number" === type && void 0 !== resultValue && (resultValue = parseInt(resultValue, 10));
                return resultValue;
            }
            var _class, parent__extends = Object.assign || function(target) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];
                    for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
                }
                return target;
            }, parent__typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
                return typeof obj;
            } : function(obj) {
                return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            }, _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || !1;
                        descriptor.configurable = !0;
                        "value" in descriptor && (descriptor.writable = !0);
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    protoProps && defineProperties(Constructor.prototype, protoProps);
                    staticProps && defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();
            function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
                var desc = {};
                Object.keys(descriptor).forEach(function(key) {
                    desc[key] = descriptor[key];
                });
                desc.enumerable = !!desc.enumerable;
                desc.configurable = !!desc.configurable;
                ("value" in desc || desc.initializer) && (desc.writable = !0);
                desc = decorators.slice().reverse().reduce(function(desc, decorator) {
                    return decorator(target, property, desc) || desc;
                }, desc);
                if (context && void 0 !== desc.initializer) {
                    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
                    desc.initializer = void 0;
                }
                if (void 0 === desc.initializer) {
                    Object.defineProperty(target, property, desc);
                    desc = null;
                }
                return desc;
            }
            lib.u.props = lib.u.props || {};
            lib.u.windows = lib.u.windows || {};
            var parent_ParentComponent = (_applyDecoratedDescriptor((_class = function(_BaseComponent) {
                !function(subClass, superClass) {
                    if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                    subClass.prototype = Object.create(superClass && superClass.prototype, {
                        constructor: {
                            value: subClass,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
                }(ParentComponent, _BaseComponent);
                function ParentComponent(component, context, _ref) {
                    var props = _ref.props;
                    !function(instance, Constructor) {
                        if (!(instance instanceof ParentComponent)) throw new TypeError("Cannot call a class as a function");
                    }(this);
                    var _this = function(self, call) {
                        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !call || "object" != typeof call && "function" != typeof call ? self : call;
                    }(this, _BaseComponent.call(this));
                    _this.component = component;
                    _this.validateParentDomain();
                    _this.context = context;
                    try {
                        _this.setProps(props);
                    } catch (err) {
                        props.onError && props.onError(err);
                        throw err;
                    }
                    _this.props.logLevel && Object(lib.L)(_this.props.logLevel);
                    _this.childWindowName = _this.buildChildWindowName({
                        renderTo: window
                    });
                    _this.registerActiveComponent();
                    _this.component.log("construct_parent");
                    _this.watchForUnload();
                    _this.onInit = new src.a();
                    _this.onInit.catch(function(err) {
                        return _this.error(err);
                    });
                    return _this;
                }
                ParentComponent.prototype.render = function(element) {
                    var _this2 = this, loadUrl = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    return this.tryInit(function() {
                        _this2.component.log("render_" + _this2.context, {
                            context: _this2.context,
                            element: element,
                            loadUrl: Object(lib.O)(loadUrl)
                        });
                        var tasks = {};
                        tasks.onRender = _this2.props.onRender();
                        tasks.getDomain = _this2.getDomain();
                        tasks.elementReady = src.a.try(function() {
                            if (element) return _this2.elementReady(element);
                        });
                        tasks.openContainer = tasks.elementReady.then(function() {
                            return _this2.openContainer(element);
                        });
                        tasks.showContainer = tasks.openContainer.then(function() {
                            return _this2.showContainer();
                        });
                        tasks.openPrerender = tasks.openContainer.then(function() {
                            return _this2.openPrerender();
                        });
                        tasks.switchPrerender = src.a.all([ tasks.openPrerender, _this2.onInit ]).then(function() {
                            return _this2.switchPrerender();
                        });
                        tasks.open = _this2.driver.openOnClick ? _this2.open() : tasks.openContainer.then(function() {
                            return _this2.open();
                        });
                        tasks.listen = src.a.all([ tasks.getDomain, tasks.open ]).then(function(_ref2) {
                            var domain = _ref2[0];
                            _this2.listen(_this2.window, domain);
                        });
                        tasks.watchForClose = tasks.open.then(function() {
                            return _this2.watchForClose();
                        });
                        tasks.linkDomain = src.a.all([ tasks.getDomain, tasks.open ]).then(function(_ref3) {
                            var domain = _ref3[0];
                            if (post_robot_src.bridge && "string" == typeof domain) return post_robot_src.bridge.linkUrl(_this2.window, domain);
                        });
                        if (!_this2.html) {
                            tasks.createPrerenderTemplate = tasks.openPrerender.then(function() {
                                return _this2.createPrerenderTemplate();
                            });
                            tasks.showComponent = tasks.createPrerenderTemplate.then(function() {
                                return _this2.showComponent();
                            });
                        }
                        tasks.openBridge = src.a.all([ tasks.getDomain, tasks.open ]).then(function(_ref4) {
                            var domain = _ref4[0];
                            return _this2.openBridge("string" == typeof domain ? domain : null);
                        });
                        if (_this2.html) tasks.loadHTML = tasks.open.then(function() {
                            return _this2.loadHTML();
                        }); else if (loadUrl) {
                            tasks.buildUrl = _this2.buildUrl();
                            tasks.loadUrl = src.a.all([ tasks.buildUrl, tasks.open, tasks.linkDomain, tasks.listen, tasks.open, tasks.openBridge, tasks.createPrerenderTemplate ]).then(function(_ref5) {
                                var url = _ref5[0];
                                return _this2.loadUrl(url);
                            });
                            tasks.runTimeout = tasks.loadUrl.then(function() {
                                return _this2.runTimeout();
                            });
                        }
                        return src.a.hash(tasks);
                    }).then(function() {
                        return _this2.props.onEnter();
                    }).then(function() {
                        return _this2;
                    });
                };
                ParentComponent.prototype.getOutlet = function() {
                    var outlet = document.createElement("div");
                    Object(lib.a)(outlet, constants.CLASS_NAMES.OUTLET);
                    return outlet;
                };
                ParentComponent.prototype.validateParentDomain = function() {
                    var domain = Object(cross_domain_utils_src.f)();
                    if (!Object(cross_domain_utils_src.z)(this.component.allowedParentDomains, domain)) throw new src_error.c("Can not be rendered by domain: " + domain);
                };
                ParentComponent.prototype.renderTo = function(win, element) {
                    var _this3 = this;
                    return this.tryInit(function() {
                        if (win === window) return _this3.render(element);
                        if (!Object(cross_domain_utils_src.u)(window, win)) throw new Error("Can only renderTo an adjacent frame");
                        if (element && "string" != typeof element) throw new Error("Element passed to renderTo must be a string selector, got " + (void 0 === element ? "undefined" : parent__typeof(element)) + " " + element);
                        _this3.checkAllowRenderTo(win);
                        _this3.component.log("render_" + _this3.context + "_to_win", {
                            element: Object(lib.O)(element),
                            context: _this3.context
                        });
                        _this3.childWindowName = _this3.buildChildWindowName({
                            renderTo: win
                        });
                        _this3.delegate(win);
                        return _this3.render(element);
                    });
                };
                ParentComponent.prototype.prefetch = function() {
                    var _this4 = this;
                    return src.a.try(function() {
                        _this4.html = _this4.buildUrl().then(function(url) {
                            return Object(lib.G)(url).then(function(html) {
                                return '\n                        <base href="' + url.split("/").slice(0, 3).join("/") + '">\n\n                        ' + html + "\n\n                        <script>\n                            if (window.history && window.history.pushState) {\n                                window.history.pushState({}, '', '/" + url.split("/").slice(3).join("/") + "');\n                            }\n                        <\/script>\n                    ";
                            });
                        });
                    });
                };
                ParentComponent.prototype.loadHTML = function() {
                    var _this5 = this;
                    return src.a.try(function() {
                        if (!_this5.html) throw new Error("Html not prefetched");
                        return _this5.html.then(function(html) {
                            return Object(lib.V)(_this5.window, html);
                        });
                    });
                };
                ParentComponent.prototype.checkAllowRenderTo = function(win) {
                    if (!win) throw this.component.createError("Must pass window to renderTo");
                    if (!Object(cross_domain_utils_src.t)(win)) {
                        var origin = Object(cross_domain_utils_src.f)(), domain = this.component.getDomain(null, this.props.env);
                        if (!domain) throw new Error("Could not determine domain to allow remote render");
                        if (!Object(cross_domain_utils_src.z)(domain, origin)) throw new Error("Can not render remotely to " + domain.toString() + " - can only render to " + origin);
                    }
                };
                ParentComponent.prototype.registerActiveComponent = function() {
                    var _this6 = this;
                    ParentComponent.activeComponents.push(this);
                    this.clean.register(function() {
                        ParentComponent.activeComponents.splice(ParentComponent.activeComponents.indexOf(_this6), 1);
                    });
                };
                ParentComponent.prototype.getComponentParentRef = function() {
                    if (this.component.getDomain(null, this.props.env) === Object(cross_domain_utils_src.f)(window)) {
                        var _uid = Object(lib.R)();
                        lib.u.windows = lib.u.windows || {};
                        lib.u.windows[_uid] = window;
                        this.clean.register(function() {
                            delete lib.u.windows[_uid];
                        });
                        return {
                            ref: constants.WINDOW_REFERENCES.GLOBAL,
                            uid: _uid
                        };
                    }
                    return this.context === constants.CONTEXT_TYPES.POPUP ? {
                        ref: constants.WINDOW_REFERENCES.OPENER
                    } : Object(cross_domain_utils_src.v)(window) ? {
                        ref: constants.WINDOW_REFERENCES.TOP
                    } : {
                        ref: constants.WINDOW_REFERENCES.PARENT,
                        distance: Object(cross_domain_utils_src.e)(window)
                    };
                };
                ParentComponent.prototype.getRenderParentRef = function() {
                    var renderToWindow = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window;
                    if (renderToWindow === window) return this.getComponentParentRef();
                    var uid = Object(lib.R)();
                    lib.u.windows[uid] = renderToWindow;
                    this.clean.register(function() {
                        delete lib.u.windows[uid];
                    });
                    return {
                        ref: constants.WINDOW_REFERENCES.GLOBAL,
                        uid: uid
                    };
                };
                ParentComponent.prototype.buildChildWindowName = function() {
                    var _ref6$renderTo = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).renderTo, renderTo = void 0 === _ref6$renderTo ? window : _ref6$renderTo, childDomain = this.component.getDomain(null, this.props.env), sameDomain = Object(cross_domain_utils_src.t)(renderTo), uid = Object(lib.R)(), tag = this.component.tag, sProps = Object(lib.K)(this.getPropsForChild()), componentParent = this.getComponentParentRef(), renderParent = this.getRenderParentRef(renderTo), props = sameDomain || this.component.unsafeRenderTo ? {
                        type: constants.INITIAL_PROPS.RAW,
                        value: sProps
                    } : {
                        type: constants.INITIAL_PROPS.UID,
                        uid: uid
                    };
                    if (props.type === constants.INITIAL_PROPS.UID) {
                        lib.u.props[uid] = JSON.stringify(sProps);
                        this.clean.register(function() {
                            delete lib.u.props[uid];
                        });
                    }
                    return function(name, version) {
                        var options = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        options.id = Object(lib.R)();
                        options.domain = Object(cross_domain_utils_src.f)(window);
                        var str, encodedName = normalize(name), encodedVersion = normalize(version), encodedOptions = (str = JSON.stringify(options), 
                        base32_default.a.encode(str).replace(/\=/g, "").toLowerCase());
                        if (!encodedName) throw new Error("Invalid name: " + name + " - must contain alphanumeric characters");
                        if (!encodedVersion) throw new Error("Invalid version: " + version + " - must contain alphanumeric characters");
                        return [ "xcomponent", encodedName, encodedVersion, encodedOptions, "" ].join("__");
                    }(this.component.name, this.component.version, {
                        uid: uid,
                        tag: tag,
                        componentParent: componentParent,
                        renderParent: renderParent,
                        props: props,
                        childDomain: childDomain
                    });
                };
                ParentComponent.prototype.sendToParent = function(name, data) {
                    if (!window_getParentComponentWindow()) throw new Error("Can not find parent component window to message");
                    this.component.log("send_to_parent_" + name);
                    return Object(post_robot_src.send)(window_getParentComponentWindow(), name, data, {
                        domain: window_getParentDomain()
                    });
                };
                ParentComponent.prototype.setProps = function(props) {
                    var required = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    !function(component, props) {
                        var required = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                        if ((props = props || {}).env && "object" === validate__typeof(component.url) && !component.url[props.env]) throw new Error("Invalid env: " + props.env);
                        for (var _i2 = 0, _component$getPropNam2 = component.getPropNames(), _length2 = null == _component$getPropNam2 ? 0 : _component$getPropNam2.length; _i2 < _length2; _i2++) {
                            var key = _component$getPropNam2[_i2], prop = component.getProp(key);
                            if (prop.alias && props.hasOwnProperty(prop.alias)) {
                                var value = props[prop.alias];
                                delete props[prop.alias];
                                props[key] || (props[key] = value);
                            }
                        }
                        for (var _i4 = 0, _Object$keys2 = Object.keys(props), _length4 = null == _Object$keys2 ? 0 : _Object$keys2.length; _i4 < _length4; _i4++) {
                            var _key = _Object$keys2[_i4], _prop = component.getProp(_key), _value = props[_key];
                            _prop && validateProp(_prop, _key, _value, props, required);
                        }
                        for (var _i6 = 0, _component$getPropNam4 = component.getPropNames(), _length6 = null == _component$getPropNam4 ? 0 : _component$getPropNam4.length; _i6 < _length6; _i6++) {
                            var _key2 = _component$getPropNam4[_i6], _prop2 = component.getProp(_key2), _value2 = props[_key2];
                            _prop2 && !props.hasOwnProperty(_key2) && validateProp(_prop2, _key2, _value2, props, required);
                        }
                    }(this.component, props, required);
                    this.component.validate && this.component.validate(this.component, props);
                    this.props = this.props || {};
                    Object(lib.p)(this.props, function(component, instance, props) {
                        var result = {};
                        props = props || {};
                        for (var _i2 = 0, _Object$keys2 = Object.keys(props), _length2 = null == _Object$keys2 ? 0 : _Object$keys2.length; _i2 < _length2; _i2++) {
                            var key = _Object$keys2[_i2];
                            -1 !== component.getPropNames().indexOf(key) ? result[key] = normalizeProp(component, instance, props, key, props[key]) : result[key] = props[key];
                        }
                        for (var _i4 = 0, _component$getPropNam2 = component.getPropNames(), _length4 = null == _component$getPropNam2 ? 0 : _component$getPropNam2.length; _i4 < _length4; _i4++) {
                            var _key = _component$getPropNam2[_i4];
                            if (!(props.hasOwnProperty(_key) || instance.props && instance.props.hasOwnProperty(_key))) {
                                var normalizedProp = normalizeProp(component, instance, props, _key, props[_key]);
                                void 0 !== normalizedProp && (result[_key] = normalizedProp);
                            }
                        }
                        return result;
                    }(this.component, this, props));
                };
                ParentComponent.prototype.buildUrl = function() {
                    var propsDef, props, params, _this7 = this, propUrl = this.props.url;
                    return src.a.all([ propUrl, (propsDef = parent__extends({}, this.component.props, this.component.builtinProps), 
                    props = this.props, params = {}, src.a.all(Object.keys(props).map(function(key) {
                        var prop = propsDef[key];
                        if (prop) return src.a.resolve().then(function() {
                            var value = props[key];
                            if (value && prop.queryParam) return value;
                        }).then(function(value) {
                            if (value) return src.a.all([ function(prop, key, value) {
                                return src.a.try(function() {
                                    return "function" == typeof prop.queryParam ? prop.queryParam(value) : "string" == typeof prop.queryParam ? prop.queryParam : key;
                                });
                            }(prop, key, value), function(prop, key, value) {
                                return src.a.try(function() {
                                    return "function" == typeof prop.queryValue ? prop.queryValue(value) : value;
                                });
                            }(prop, 0, value) ]).then(function(_ref) {
                                var queryParam = _ref[0], queryValue = _ref[1], result = void 0;
                                if ("boolean" == typeof queryValue) result = "1"; else if ("string" == typeof queryValue) result = queryValue.toString(); else {
                                    if ("function" == typeof queryValue) return;
                                    if ("object" === (void 0 === queryValue ? "undefined" : props__typeof(queryValue)) && null !== queryValue) {
                                        if ("json" !== prop.serialization) {
                                            result = Object(lib.l)(queryValue, key);
                                            for (var _i6 = 0, _Object$keys4 = Object.keys(result), _length6 = null == _Object$keys4 ? 0 : _Object$keys4.length; _i6 < _length6; _i6++) {
                                                var dotkey = _Object$keys4[_i6];
                                                params[dotkey] = result[dotkey];
                                            }
                                            return;
                                        }
                                        result = JSON.stringify(queryValue);
                                    } else "number" == typeof queryValue && (result = queryValue.toString());
                                }
                                params[queryParam] = result;
                            });
                        });
                    })).then(function() {
                        Object.keys(params).forEach(function(key) {
                            params[key] = escape(params[key]);
                        });
                        return params;
                    })) ]).then(function(_ref7) {
                        var url = _ref7[0], query = _ref7[1];
                        return url && !_this7.component.getValidDomain(url) ? url : src.a.try(function() {
                            return url || _this7.component.getUrl(_this7.props.env, _this7.props);
                        }).then(function(finalUrl) {
                            query.xcomponent = "1";
                            return Object(lib.q)(finalUrl, {
                                query: query
                            });
                        });
                    });
                };
                ParentComponent.prototype.getDomain = function() {
                    var _this8 = this;
                    return src.a.try(function() {
                        return _this8.props.url;
                    }).then(function(url) {
                        return _this8.component.getDomain(url, _this8.props.env) || (_this8.component.buildUrl ? src.a.try(function() {
                            return _this8.component.buildUrl(_this8.props);
                        }).then(function(builtUrl) {
                            return _this8.component.getDomain(builtUrl, _this8.props.env);
                        }) : void 0);
                    }).then(function(domain) {
                        if (!domain) throw new Error("Could not determine domain");
                        return domain;
                    });
                };
                ParentComponent.prototype.getPropsForChild = function() {
                    for (var result = {}, _i2 = 0, _Object$keys2 = Object.keys(this.props), _length2 = null == _Object$keys2 ? 0 : _Object$keys2.length; _i2 < _length2; _i2++) {
                        var key = _Object$keys2[_i2], prop = this.component.getProp(key);
                        prop && !1 === prop.sendToChild || (result[key] = this.props[key]);
                    }
                    return result;
                };
                ParentComponent.prototype.updateProps = function(props) {
                    var _this9 = this;
                    this.setProps(props, !1);
                    return this.onInit.then(function() {
                        if (_this9.childExports) return _this9.childExports.updateProps(_this9.getPropsForChild());
                        throw new Error("Child exports were not available");
                    });
                };
                ParentComponent.prototype.openBridge = function(domain) {
                    var _this10 = this;
                    return src.a.try(function() {
                        if (post_robot_src.bridge && _this10.driver.needsBridge) {
                            var needsBridgeParams = {
                                win: _this10.window
                            };
                            domain && (needsBridgeParams.domain = domain);
                            var needsBridge = post_robot_src.bridge.needsBridge(needsBridgeParams), bridgeUrl = _this10.component.getBridgeUrl(_this10.props.env);
                            if (bridgeUrl) {
                                bridgeUrl = Object(lib.q)(bridgeUrl, {
                                    query: {
                                        version: _this10.component.version
                                    }
                                });
                                var bridgeDomain = _this10.component.getBridgeDomain(_this10.props.env);
                                if (!bridgeDomain) throw new Error("Can not determine domain for bridge");
                                return needsBridge ? post_robot_src.bridge.openBridge(bridgeUrl, bridgeDomain).then(function(result) {
                                    if (result) return result;
                                }) : void 0;
                            }
                            if (needsBridge && domain && !post_robot_src.bridge.hasBridge(domain, domain)) throw new Error("Bridge url needed to render " + _this10.context);
                        }
                    });
                };
                ParentComponent.prototype.open = function() {
                    var _this11 = this;
                    return src.a.try(function() {
                        _this11.component.log("open_" + _this11.context, {
                            windowName: _this11.childWindowName
                        });
                        return _this11.driver.open.call(_this11);
                    });
                };
                ParentComponent.prototype.openPrerender = function() {
                    var _this12 = this;
                    return src.a.try(function() {
                        if (_this12.component.prerenderTemplate) return _this12.driver.openPrerender.call(_this12);
                    });
                };
                ParentComponent.prototype.switchPrerender = function() {
                    var _this13 = this;
                    return src.a.try(function() {
                        if (_this13.prerenderWindow && _this13.driver.switchPrerender) return _this13.driver.switchPrerender.call(_this13);
                    });
                };
                ParentComponent.prototype.elementReady = function(element) {
                    return Object(lib.m)(element).then(lib.E);
                };
                ParentComponent.prototype.delegate = function(win) {
                    var _this14 = this;
                    this.component.log("delegate_" + this.context);
                    for (var props = {
                        uid: this.props.uid,
                        dimensions: this.props.dimensions,
                        onClose: this.props.onClose,
                        onDisplay: this.props.onDisplay
                    }, _i4 = 0, _component$getPropNam2 = this.component.getPropNames(), _length4 = null == _component$getPropNam2 ? 0 : _component$getPropNam2.length; _i4 < _length4; _i4++) {
                        var propName = _component$getPropNam2[_i4];
                        this.component.getProp(propName).allowDelegate && (props[propName] = this.props[propName]);
                    }
                    for (var delegate = Object(post_robot_src.send)(win, constants.POST_MESSAGE.DELEGATE + "_" + this.component.name, {
                        context: this.context,
                        env: this.props.env,
                        options: {
                            context: this.context,
                            childWindowName: this.childWindowName,
                            isWindowClosed: function() {
                                return Object(cross_domain_utils_src.x)(_this14.window);
                            },
                            props: props,
                            overrides: {
                                focus: function() {
                                    return _this14.focus();
                                },
                                userClose: function() {
                                    return _this14.userClose();
                                },
                                getDomain: function() {
                                    return _this14.getDomain();
                                },
                                error: function(err) {
                                    return _this14.error(err);
                                },
                                on: function(eventName, handler) {
                                    return _this14.on(eventName, handler);
                                }
                            }
                        }
                    }).then(function(_ref8) {
                        var data = _ref8.data;
                        _this14.clean.register(data.destroy);
                        return data;
                    }).catch(function(err) {
                        throw new Error("Unable to delegate rendering. Possibly the component is not loaded in the target window.\n\n" + Object(lib.P)(err));
                    }), overrides = this.driver.delegateOverrides, _loop = function(_i6, _Object$keys4, _length6) {
                        var key = _Object$keys4[_i6], val = overrides[key];
                        if (val === constants.DELEGATE.CALL_ORIGINAL) return "continue";
                        var original = _this14[key];
                        _this14[key] = function() {
                            var _this15 = this, _arguments = arguments;
                            return delegate.then(function(data) {
                                var override = data.overrides[key];
                                if (val === constants.DELEGATE.CALL_DELEGATE) return override.apply(_this15, _arguments);
                                if ("function" == typeof val) return val(original, override).apply(_this15, _arguments);
                                throw new Error("Expected delgate to be CALL_ORIGINAL, CALL_DELEGATE, or factory method");
                            });
                        };
                    }, _i6 = 0, _Object$keys4 = Object.keys(overrides), _length6 = null == _Object$keys4 ? 0 : _Object$keys4.length; _i6 < _length6; _i6++) _loop(_i6, _Object$keys4);
                };
                ParentComponent.prototype.watchForClose = function() {
                    var _this16 = this, closeWindowListener = Object(cross_domain_utils_src.A)(this.window, function() {
                        _this16.component.log("detect_close_child");
                        return src.a.try(function() {
                            return _this16.props.onClose(constants.CLOSE_REASONS.CLOSE_DETECTED);
                        }).finally(function() {
                            return _this16.destroy();
                        });
                    }, 3e3);
                    this.clean.register("destroyCloseWindowListener", closeWindowListener.cancel);
                };
                ParentComponent.prototype.watchForUnload = function() {
                    var _this17 = this, onunload = Object(lib.F)(function() {
                        _this17.component.log("navigate_away");
                        Object(client.c)();
                        _this17.destroyComponent();
                    }), unloadWindowListener = Object(lib.b)(window, "unload", onunload);
                    this.clean.register("destroyUnloadWindowListener", unloadWindowListener.cancel);
                };
                ParentComponent.prototype.loadUrl = function(url) {
                    var _this18 = this;
                    return src.a.try(function() {
                        _this18.component.log("load_url");
                        if (window.location.href.split("#")[0] === url.split("#")[0]) {
                            var _query;
                            url = Object(lib.q)(url, {
                                query: (_query = {}, _query[Object(lib.R)()] = "1", _query)
                            });
                        }
                        return _this18.driver.loadUrl.call(_this18, url);
                    });
                };
                ParentComponent.prototype.hijack = function(targetElement) {
                    targetElement.target = this.childWindowName;
                };
                ParentComponent.prototype.runTimeout = function() {
                    var _this19 = this, timeout = this.props.timeout;
                    if (timeout) {
                        var _id = this.timeout = setTimeout(function() {
                            _this19.component.log("timed_out", {
                                timeout: timeout.toString()
                            });
                            var error = _this19.component.createError("Loading component timed out after " + timeout + " milliseconds");
                            _this19.onInit.reject(error);
                            _this19.props.onTimeout(error);
                        }, timeout);
                        this.clean.register(function() {
                            clearTimeout(_id);
                            delete _this19.timeout;
                        });
                    }
                };
                ParentComponent.prototype.listeners = function() {
                    var _ref9;
                    return (_ref9 = {})[constants.POST_MESSAGE.INIT] = function(source, data) {
                        this.childExports = data.exports;
                        this.onInit.resolve(this);
                        this.timeout && clearTimeout(this.timeout);
                        return {
                            props: this.getPropsForChild(),
                            context: this.context
                        };
                    }, _ref9[constants.POST_MESSAGE.CLOSE] = function(source, data) {
                        this.close(data.reason);
                    }, _ref9[constants.POST_MESSAGE.CHECK_CLOSE] = function() {
                        this.checkClose();
                    }, _ref9[constants.POST_MESSAGE.RESIZE] = function(source, data) {
                        var _this20 = this;
                        return src.a.try(function() {
                            if (_this20.driver.allowResize) return _this20.resize(data.width, data.height);
                        });
                    }, _ref9[constants.POST_MESSAGE.HIDE] = function() {
                        this.hide();
                    }, _ref9[constants.POST_MESSAGE.SHOW] = function() {
                        this.show();
                    }, _ref9[constants.POST_MESSAGE.ERROR] = function(source, data) {
                        this.error(new Error(data.error));
                    }, _ref9;
                };
                ParentComponent.prototype.resize = function(width, height) {
                    var _this21 = this;
                    return src.a.try(function() {
                        _this21.component.log("resize", {
                            height: Object(lib.O)(height),
                            width: Object(lib.O)(width)
                        });
                        _this21.driver.resize.call(_this21, width, height);
                    });
                };
                ParentComponent.prototype.hide = function() {
                    this.container && Object(lib.w)(this.container);
                    return this.driver.hide.call(this);
                };
                ParentComponent.prototype.show = function() {
                    this.container && Object(lib.N)(this.container);
                    return this.driver.show.call(this);
                };
                ParentComponent.prototype.checkClose = function() {
                    var _this22 = this, closeWindowListener = Object(cross_domain_utils_src.A)(this.window, function() {
                        _this22.userClose();
                    }, 50, 500);
                    this.clean.register(closeWindowListener.cancel);
                };
                ParentComponent.prototype.userClose = function() {
                    return this.close(constants.CLOSE_REASONS.USER_CLOSED);
                };
                ParentComponent.prototype.close = function() {
                    var _this23 = this, reason = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : constants.CLOSE_REASONS.PARENT_CALL;
                    return src.a.try(function() {
                        _this23.component.log("close", {
                            reason: reason
                        });
                        _this23.event.triggerOnce(constants.EVENTS.CLOSE);
                        return _this23.props.onClose(reason);
                    }).then(function() {
                        return src.a.all([ _this23.closeComponent(), _this23.closeContainer() ]);
                    }).then(function() {
                        return _this23.destroy();
                    });
                };
                ParentComponent.prototype.closeContainer = function() {
                    var _this24 = this, reason = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : constants.CLOSE_REASONS.PARENT_CALL;
                    return src.a.try(function() {
                        _this24.event.triggerOnce(constants.EVENTS.CLOSE);
                        return _this24.props.onClose(reason);
                    }).then(function() {
                        return src.a.all([ _this24.closeComponent(reason), _this24.hideContainer() ]);
                    }).then(function() {
                        return _this24.destroyContainer();
                    });
                };
                ParentComponent.prototype.destroyContainer = function() {
                    var _this25 = this;
                    return src.a.try(function() {
                        _this25.clean.run("destroyContainerEvents");
                        _this25.clean.run("destroyContainerTemplate");
                    });
                };
                ParentComponent.prototype.closeComponent = function() {
                    var _this26 = this, reason = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : constants.CLOSE_REASONS.PARENT_CALL, win = this.window;
                    return src.a.try(function() {
                        return _this26.cancelContainerEvents();
                    }).then(function() {
                        _this26.event.triggerOnce(constants.EVENTS.CLOSE);
                        return _this26.props.onClose(reason);
                    }).then(function() {
                        return _this26.hideComponent();
                    }).then(function() {
                        return _this26.destroyComponent();
                    }).then(function() {
                        _this26.childExports && _this26.context === constants.CONTEXT_TYPES.POPUP && !Object(cross_domain_utils_src.x)(win) && _this26.childExports.close().catch(lib.E);
                    });
                };
                ParentComponent.prototype.destroyComponent = function() {
                    this.clean.run("destroyUnloadWindowListener");
                    this.clean.run("destroyCloseWindowListener");
                    this.clean.run("destroyContainerEvents");
                    this.clean.run("destroyWindow");
                };
                ParentComponent.prototype.showContainer = function() {
                    var _this27 = this;
                    return src.a.try(function() {
                        if (_this27.props.onDisplay) return _this27.props.onDisplay();
                    }).then(function() {
                        if (_this27.container) return Object(lib.M)(_this27.container, constants.ANIMATION_NAMES.SHOW_CONTAINER, _this27.clean.register);
                    });
                };
                ParentComponent.prototype.showComponent = function() {
                    var _this28 = this;
                    return src.a.try(function() {
                        if (_this28.props.onDisplay) return _this28.props.onDisplay();
                    }).then(function() {
                        if (_this28.element) return Object(lib.M)(_this28.element, constants.ANIMATION_NAMES.SHOW_COMPONENT, _this28.clean.register);
                    });
                };
                ParentComponent.prototype.hideContainer = function() {
                    var _this29 = this;
                    return src.a.try(function() {
                        return _this29.container ? Object(lib.c)(_this29.container, constants.ANIMATION_NAMES.HIDE_CONTAINER, _this29.clean.register) : src.a.resolve();
                    });
                };
                ParentComponent.prototype.hideComponent = function() {
                    var _this30 = this;
                    return src.a.try(function() {
                        return _this30.element ? Object(lib.c)(_this30.element, constants.ANIMATION_NAMES.HIDE_COMPONENT, _this30.clean.register) : src.a.resolve();
                    });
                };
                ParentComponent.prototype.focus = function() {
                    if (!this.window || Object(cross_domain_utils_src.x)(this.window)) throw new Error("No window to focus");
                    this.component.log("focus");
                    this.window.focus();
                };
                ParentComponent.prototype.createPrerenderTemplate = function() {
                    var _this31 = this;
                    return src.a.try(function() {
                        return _this31.component.prerenderTemplate ? src.a.try(function() {
                            return _this31.prerenderIframe ? Object(lib.e)(_this31.prerenderIframe).then(function() {
                                return _this31.prerenderWindow;
                            }) : _this31.prerenderWindow;
                        }).then(function(win) {
                            var doc = void 0;
                            try {
                                doc = win.document;
                            } catch (err) {
                                return;
                            }
                            var el = void 0;
                            try {
                                el = _this31.renderTemplate(_this31.component.prerenderTemplate, {
                                    jsxDom: lib.B.bind(doc),
                                    document: doc
                                });
                            } catch (err) {
                                _this31.component.logError("preprender_error", {
                                    err: err.stack ? err.stack : err.toString()
                                });
                                console.error(err.stack ? err.stack : err);
                                return;
                            }
                            try {
                                Object(lib.U)(win, el);
                            } catch (err) {
                                _this31.component.logError("preprender_error", {
                                    err: err.stack ? err.stack : err.toString()
                                });
                                console.error(err.stack ? err.stack : err);
                            }
                            var _ref10 = "object" === parent__typeof(_this31.component.autoResize) && null !== _this31.component.autoResize ? _this31.component.autoResize : {}, _ref10$width = _ref10.width, width = void 0 !== _ref10$width && _ref10$width, _ref10$height = _ref10.height, height = void 0 !== _ref10$height && _ref10$height, _ref10$element = _ref10.element, element = void 0 === _ref10$element ? "body" : _ref10$element;
                            (element = Object(belter_src.getElementSafe)(element, doc)) && (width || height) && Object(belter_src.onResize)(element, function(_ref11) {
                                var newWidth = _ref11.width, newHeight = _ref11.height;
                                _this31.resize(width ? newWidth : void 0, height ? newHeight : void 0);
                            }, {
                                width: width,
                                height: height,
                                win: win
                            });
                        }) : src.a.resolve();
                    });
                };
                ParentComponent.prototype.renderTemplate = function(renderer) {
                    var _this32 = this, options = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, _ref12 = this.component.dimensions || {}, _ref12$width = _ref12.width, width = void 0 === _ref12$width ? constants.DEFAULT_DIMENSIONS.WIDTH + "px" : _ref12$width, _ref12$height = _ref12.height, height = void 0 === _ref12$height ? constants.DEFAULT_DIMENSIONS.HEIGHT + "px" : _ref12$height;
                    return renderer.call(this, parent__extends({
                        id: constants.CLASS_NAMES.ZOID + "-" + this.component.tag + "-" + this.props.uid,
                        props: renderer.__xdomain__ ? null : this.props,
                        tag: this.component.tag,
                        context: this.context,
                        outlet: this.getOutlet(),
                        CLASS: constants.CLASS_NAMES,
                        ANIMATION: constants.ANIMATION_NAMES,
                        CONTEXT: constants.CONTEXT_TYPES,
                        EVENT: constants.EVENTS,
                        actions: {
                            close: function() {
                                return _this32.userClose();
                            },
                            focus: function() {
                                return _this32.focus();
                            }
                        },
                        on: function(eventName, handler) {
                            return _this32.on(eventName, handler);
                        },
                        jsxDom: lib.B,
                        document: document,
                        dimensions: {
                            width: width,
                            height: height
                        }
                    }, options));
                };
                ParentComponent.prototype.openContainer = function(element) {
                    var _this33 = this;
                    return src.a.try(function() {
                        var el;
                        if (!(el = element ? Object(lib.t)(element) : document.body)) throw new Error("Could not find element to open container into");
                        if (_this33.component.containerTemplate) {
                            var container = _this33.renderTemplate(_this33.component.containerTemplate, {
                                container: el
                            });
                            _this33.container = container;
                            Object(lib.w)(_this33.container);
                            Object(lib.d)(el, _this33.container);
                            if (_this33.driver.renderedIntoContainerTemplate) {
                                _this33.element = _this33.getOutlet();
                                Object(lib.w)(_this33.element);
                                if (!_this33.element) throw new Error("Could not find element to render component into");
                                Object(lib.w)(_this33.element);
                            }
                            _this33.clean.register("destroyContainerTemplate", function() {
                                _this33.container && _this33.container.parentNode && _this33.container.parentNode.removeChild(_this33.container);
                                delete _this33.container;
                            });
                        } else if (_this33.driver.renderedIntoContainerTemplate) throw new Error("containerTemplate needed to render " + _this33.context);
                    });
                };
                ParentComponent.prototype.cancelContainerEvents = function() {
                    this.clean.run("destroyContainerEvents");
                };
                ParentComponent.prototype.destroy = function() {
                    var _this34 = this;
                    return src.a.try(function() {
                        if (_this34.clean.hasTasks()) {
                            _this34.component.log("destroy");
                            Object(client.c)();
                            return _this34.clean.all();
                        }
                    });
                };
                ParentComponent.prototype.tryInit = function(method) {
                    var _this35 = this;
                    return src.a.try(method).catch(function(err) {
                        _this35.onInit.reject(err);
                    }).then(function() {
                        return _this35.onInit;
                    });
                };
                ParentComponent.prototype.error = function(err) {
                    var _this36 = this;
                    return src.a.try(function() {
                        _this36.handledErrors = _this36.handledErrors || [];
                        if (-1 === _this36.handledErrors.indexOf(err)) {
                            _this36.handledErrors.push(err);
                            _this36.onInit.reject(err);
                            return _this36.destroy();
                        }
                    }).then(function() {
                        if (_this36.props.onError) return _this36.props.onError(err);
                    }).catch(function(errErr) {
                        throw new Error("An error was encountered while handling error:\n\n " + Object(lib.P)(err) + "\n\n" + Object(lib.P)(errErr));
                    }).then(function() {
                        if (!_this36.props.onError) throw err;
                    });
                };
                ParentComponent.destroyAll = function() {
                    for (var results = []; ParentComponent.activeComponents.length; ) results.push(ParentComponent.activeComponents[0].destroy());
                    return src.a.all(results).then(lib.E);
                };
                _createClass(ParentComponent, [ {
                    key: "driver",
                    get: function() {
                        if (!this.context) throw new Error("Context not set");
                        return RENDER_DRIVERS[this.context];
                    }
                } ]);
                return ParentComponent;
            }(base_BaseComponent)).prototype, "getOutlet", [ lib.D ], Object.getOwnPropertyDescriptor(_class.prototype, "getOutlet"), _class.prototype), 
            _applyDecoratedDescriptor(_class.prototype, "prefetch", [ lib.D ], Object.getOwnPropertyDescriptor(_class.prototype, "prefetch"), _class.prototype), 
            _applyDecoratedDescriptor(_class.prototype, "loadHTML", [ lib.D ], Object.getOwnPropertyDescriptor(_class.prototype, "loadHTML"), _class.prototype), 
            _applyDecoratedDescriptor(_class.prototype, "buildUrl", [ lib.D ], Object.getOwnPropertyDescriptor(_class.prototype, "buildUrl"), _class.prototype), 
            _applyDecoratedDescriptor(_class.prototype, "open", [ lib.D ], Object.getOwnPropertyDescriptor(_class.prototype, "open"), _class.prototype), 
            _applyDecoratedDescriptor(_class.prototype, "openPrerender", [ lib.D ], Object.getOwnPropertyDescriptor(_class.prototype, "openPrerender"), _class.prototype), 
            _applyDecoratedDescriptor(_class.prototype, "switchPrerender", [ lib.D ], Object.getOwnPropertyDescriptor(_class.prototype, "switchPrerender"), _class.prototype), 
            _applyDecoratedDescriptor(_class.prototype, "close", [ lib.D ], Object.getOwnPropertyDescriptor(_class.prototype, "close"), _class.prototype), 
            _applyDecoratedDescriptor(_class.prototype, "closeContainer", [ lib.D ], Object.getOwnPropertyDescriptor(_class.prototype, "closeContainer"), _class.prototype), 
            _applyDecoratedDescriptor(_class.prototype, "destroyContainer", [ lib.D ], Object.getOwnPropertyDescriptor(_class.prototype, "destroyContainer"), _class.prototype), 
            _applyDecoratedDescriptor(_class.prototype, "closeComponent", [ lib.D ], Object.getOwnPropertyDescriptor(_class.prototype, "closeComponent"), _class.prototype), 
            _applyDecoratedDescriptor(_class.prototype, "showContainer", [ lib.D ], Object.getOwnPropertyDescriptor(_class.prototype, "showContainer"), _class.prototype), 
            _applyDecoratedDescriptor(_class.prototype, "showComponent", [ lib.D ], Object.getOwnPropertyDescriptor(_class.prototype, "showComponent"), _class.prototype), 
            _applyDecoratedDescriptor(_class.prototype, "hideContainer", [ lib.D ], Object.getOwnPropertyDescriptor(_class.prototype, "hideContainer"), _class.prototype), 
            _applyDecoratedDescriptor(_class.prototype, "hideComponent", [ lib.D ], Object.getOwnPropertyDescriptor(_class.prototype, "hideComponent"), _class.prototype), 
            _applyDecoratedDescriptor(_class.prototype, "createPrerenderTemplate", [ lib.D ], Object.getOwnPropertyDescriptor(_class.prototype, "createPrerenderTemplate"), _class.prototype), 
            _applyDecoratedDescriptor(_class.prototype, "openContainer", [ lib.D ], Object.getOwnPropertyDescriptor(_class.prototype, "openContainer"), _class.prototype), 
            _class);
            parent_ParentComponent.activeComponents = [];
            var delegate__createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || !1;
                        descriptor.configurable = !0;
                        "value" in descriptor && (descriptor.writable = !0);
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    protoProps && defineProperties(Constructor.prototype, protoProps);
                    staticProps && defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }(), delegate_DelegateComponent = function(_BaseComponent) {
                !function(subClass, superClass) {
                    if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                    subClass.prototype = Object.create(superClass && superClass.prototype, {
                        constructor: {
                            value: subClass,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
                }(DelegateComponent, _BaseComponent);
                function DelegateComponent(component, source, options) {
                    !function(instance, Constructor) {
                        if (!(instance instanceof DelegateComponent)) throw new TypeError("Cannot call a class as a function");
                    }(this);
                    var _this = function(self, call) {
                        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !call || "object" != typeof call && "function" != typeof call ? self : call;
                    }(this, _BaseComponent.call(this));
                    _this.component = component;
                    _this.clean.set("source", source);
                    _this.context = options.context;
                    _this.props = {
                        uid: options.props.uid,
                        dimensions: options.props.dimensions,
                        onClose: options.props.onClose,
                        onDisplay: options.props.onDisplay
                    };
                    for (var _i2 = 0, _component$getPropNam2 = component.getPropNames(), _length2 = null == _component$getPropNam2 ? 0 : _component$getPropNam2.length; _i2 < _length2; _i2++) {
                        var propName = _component$getPropNam2[_i2];
                        _this.component.getProp(propName).allowDelegate && (_this.props[propName] = options.props[propName]);
                    }
                    _this.focus = function() {
                        return src.a.all([ _this.isWindowClosed().then(function(closed) {
                            closed || window.open("", _this.childWindowName);
                        }), options.overrides.focus.call(_this) ]).then(lib.E);
                    };
                    _this.clean.register("destroyFocusOverride", function() {
                        _this.focus = lib.E;
                    });
                    _this.userClose = options.overrides.userClose;
                    _this.getDomain = options.overrides.getDomain;
                    _this.error = options.overrides.error;
                    _this.on = options.overrides.on;
                    for (var delegateOverrides = RENDER_DRIVERS[options.context].delegateOverrides, _i4 = 0, _Object$keys2 = Object.keys(delegateOverrides), _length4 = null == _Object$keys2 ? 0 : _Object$keys2.length; _i4 < _length4; _i4++) {
                        var key = _Object$keys2[_i4];
                        _this[key] = parent_ParentComponent.prototype[key];
                    }
                    _this.childWindowName = options.childWindowName;
                    _this.isWindowClosed = options.isWindowClosed;
                    parent_ParentComponent.prototype.registerActiveComponent.call(_this);
                    _this.watchForClose();
                    return _this;
                }
                DelegateComponent.prototype.watchForClose = function() {
                    var _this2 = this, closeWindowListener = Object(cross_domain_utils_src.A)(this.source, function() {
                        return _this2.destroy();
                    }, 3e3);
                    this.clean.register("destroyCloseWindowListener", closeWindowListener.cancel);
                };
                DelegateComponent.prototype.getOverrides = function(context) {
                    for (var delegateOverrides = RENDER_DRIVERS[context].delegateOverrides, overrides = {}, self = this, _loop = function(_i6, _Object$keys4, _length6) {
                        var key = _Object$keys4[_i6];
                        overrides[key] = function() {
                            return parent_ParentComponent.prototype[key].apply(self, arguments);
                        };
                    }, _i6 = 0, _Object$keys4 = Object.keys(delegateOverrides), _length6 = null == _Object$keys4 ? 0 : _Object$keys4.length; _i6 < _length6; _i6++) _loop(_i6, _Object$keys4);
                    return overrides;
                };
                DelegateComponent.prototype.destroy = function() {
                    return this.clean.all();
                };
                delegate__createClass(DelegateComponent, [ {
                    key: "driver",
                    get: function() {
                        if (!this.context) throw new Error("Context not set");
                        return RENDER_DRIVERS[this.context];
                    }
                } ]);
                return DelegateComponent;
            }(base_BaseComponent), drivers = __webpack_require__("./src/drivers/index.js"), component_validate__typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
                return typeof obj;
            } : function(obj) {
                return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
            function defaultContainerTemplate(_ref) {
                var id = _ref.id, tag = _ref.tag, context = _ref.context, CLASS = _ref.CLASS, outlet = _ref.outlet, jsxDom = _ref.jsxDom, _ref$dimensions = _ref.dimensions, width = _ref$dimensions.width, height = _ref$dimensions.height;
                return jsxDom("div", {
                    id: id,
                    class: CLASS.ZOID + " " + CLASS.ZOID + "-tag-" + tag + " " + CLASS.ZOID + "-context-" + context
                }, jsxDom("style", null, "\n                    #" + id + ", #" + id + " > ." + CLASS.OUTLET + " {\n                        width: " + width + ";\n                        height: " + height + ";\n                    }\n\n                    #" + id + " > ." + CLASS.OUTLET + " {\n                        display: inline-block;\n                        position: relative;\n                    }\n\n                    #" + id + " > ." + CLASS.OUTLET + " > iframe {\n                        height: 100%;\n                        width: 100%;\n                        position: absolute;\n                        top: 0;\n                        left: 0;\n                        transition: opacity .2s ease-in-out;\n                    }\n\n                    #" + id + " > ." + CLASS.OUTLET + " > iframe." + CLASS.VISIBLE + " {\n                        opacity: 1;\n                    }\n\n                    #" + id + " > ." + CLASS.OUTLET + " > iframe." + CLASS.INVISIBLE + " {\n                        opacity: 0;\n                    }\n                "), outlet);
            }
            function defaultPrerenderTemplate(_ref) {
                var jsxDom = _ref.jsxDom;
                return jsxDom("html", null, jsxDom("head", null, jsxDom("style", null, "\n                        html, body {\n                            width: 100%;\n                            height: 100%;\n                            overflow: hidden;\n                            top: 0;\n                            left: 0;\n                            margin: 0;\n                            text-align: center;\n                        }\n\n                        .spinner {\n                            position: absolute;\n                            max-height: 60vmin;\n                            max-width: 60vmin;\n                            height: 40px;\n                            width: 40px;\n                            top: 50%;\n                            left: 50%;\n                            transform: translateX(-50%) translateY(-50%);\n                            z-index: 10;\n                        }\n\n                        .spinner .loader {\n                            height: 100%;\n                            width: 100%;\n                            box-sizing: border-box;\n                            border: 3px solid rgba(0, 0, 0, .2);\n                            border-top-color: rgba(33, 128, 192, 0.8);\n                            border-radius: 100%;\n                            animation: rotation .7s infinite linear;\n\n                        }\n\n                        @keyframes rotation {\n                            from {\n                                transform: rotate(0deg)\n                            }\n                            to {\n                                transform: rotate(359deg)\n                            }\n                        }\n                    ")), jsxDom("body", null, jsxDom("div", {
                    class: "spinner"
                }, jsxDom("div", {
                    id: "loader",
                    class: "loader"
                }))));
            }
            __webpack_require__("./src/types.js");
            var component__class, component__typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
                return typeof obj;
            } : function(obj) {
                return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            }, component_drivers = {
                angular: drivers.angular,
                angular2: drivers.angular2,
                glimmer: drivers.glimmer,
                react: drivers.react,
                vue: drivers.vue,
                script: drivers.script
            }, component_Component = (function(target, property, decorators, descriptor, context) {
                var desc = {};
                Object.keys(descriptor).forEach(function(key) {
                    desc[key] = descriptor[key];
                });
                desc.enumerable = !!desc.enumerable;
                desc.configurable = !!desc.configurable;
                ("value" in desc || desc.initializer) && (desc.writable = !0);
                desc = decorators.slice().reverse().reduce(function(desc, decorator) {
                    return decorator(target, "getPropNames", desc) || desc;
                }, desc);
                if (context && void 0 !== desc.initializer) {
                    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
                    desc.initializer = void 0;
                }
                if (void 0 === desc.initializer) {
                    Object.defineProperty(target, "getPropNames", desc);
                    desc = null;
                }
            }((component__class = function(_BaseComponent) {
                !function(subClass, superClass) {
                    if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                    subClass.prototype = Object.create(superClass && superClass.prototype, {
                        constructor: {
                            value: subClass,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
                }(Component, _BaseComponent);
                function Component(options) {
                    !function(instance, Constructor) {
                        if (!(instance instanceof Component)) throw new TypeError("Cannot call a class as a function");
                    }(this);
                    var _this = function(self, call) {
                        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !call || "object" != typeof call && "function" != typeof call ? self : call;
                    }(this, _BaseComponent.call(this));
                    !function(options) {
                        if (!options) throw new Error("Expecred options to be passed");
                        if (!options.tag || !options.tag.match(/^[a-z0-9-]+$/)) throw new Error("Invalid options.tag: " + options.tag);
                        !function(options) {
                            if (options.props && "object" !== component_validate__typeof(options.props)) throw new Error("Expected options.props to be an object");
                            if (options.props) for (var _i2 = 0, _Object$keys2 = Object.keys(options.props), _length2 = null == _Object$keys2 ? 0 : _Object$keys2.length; _i2 < _length2; _i2++) {
                                var key = _Object$keys2[_i2], prop = options.props[key];
                                if (!prop || "object" !== (void 0 === prop ? "undefined" : component_validate__typeof(prop))) throw new Error("Expected options.props." + key + " to be an object");
                                if (!prop.type) throw new Error("Expected prop.type");
                                if (-1 === constants.PROP_TYPES_LIST.indexOf(prop.type)) throw new Error("Expected prop.type to be one of " + constants.PROP_TYPES_LIST.join(", "));
                                if (prop.required && prop.def) throw new Error("Required prop can not have a default value");
                            }
                        }(options);
                        if (options.dimensions) {
                            if (options.dimensions && !Object(lib.A)(options.dimensions.width) && !Object(lib.z)(options.dimensions.width)) throw new Error("Expected options.dimensions.width to be a px or % string value");
                            if (options.dimensions && !Object(lib.A)(options.dimensions.height) && !Object(lib.z)(options.dimensions.height)) throw new Error("Expected options.dimensions.height to be a px or % string value");
                        }
                        if (options.contexts) {
                            if (options.contexts.popup) throw new Error("Popups not supported in this build -- please use the full zoid.js build");
                            for (var anyEnabled = !1, _i4 = 0, _Object$keys4 = Object.keys(options.contexts), _length4 = null == _Object$keys4 ? 0 : _Object$keys4.length; _i4 < _length4; _i4++) {
                                var context = _Object$keys4[_i4];
                                if (-1 === constants.CONTEXT_TYPES_LIST.indexOf(context)) throw new Error("Unsupported context type: " + context);
                                (options.contexts && options.contexts[context] || options.contexts && void 0 === options.contexts[context]) && (anyEnabled = !0);
                            }
                            if (!anyEnabled) throw new Error("No context type is enabled");
                        }
                        if (options.defaultContext) {
                            if (-1 === constants.CONTEXT_TYPES_LIST.indexOf(options.defaultContext)) throw new Error("Unsupported context type: " + (options.defaultContext || "unknown"));
                            if (options.contexts && options.defaultContext && !options.contexts[options.defaultContext]) throw new Error("Disallowed default context type: " + (options.defaultContext || "unknown"));
                        }
                        if (options.url && options.buildUrl) throw new Error("Can not pass both options.url and options.buildUrl");
                        if (options.defaultEnv) {
                            if ("string" != typeof options.defaultEnv) throw new TypeError("Expected options.defaultEnv to be a string");
                            if (!options.buildUrl && "object" !== component_validate__typeof(options.url)) throw new Error("Expected options.url to be an object mapping env->url");
                            if (options.url && "object" === component_validate__typeof(options.url) && !options.url[options.defaultEnv]) throw new Error("No url found for default env: " + options.defaultEnv);
                        }
                        if (options.url && "object" === component_validate__typeof(options.url)) {
                            if (!options.defaultEnv) throw new Error("Must pass options.defaultEnv with env->url mapping");
                            for (var _i6 = 0, _Object$keys6 = Object.keys(options.url), _length6 = null == _Object$keys6 ? 0 : _Object$keys6.length; _i6 < _length6; _i6++) {
                                var env = _Object$keys6[_i6];
                                if (!options.url[env]) throw new Error("No url specified for env: " + env);
                            }
                        }
                        if (options.prerenderTemplate && "function" != typeof options.prerenderTemplate) throw new Error("Expected options.prerenderTemplate to be a function");
                        if (options.containerTemplate && "function" != typeof options.containerTemplate) throw new Error("Expected options.containerTemplate to be a function");
                    }(options);
                    _this.addProp(options, "tag");
                    _this.addProp(options, "defaultLogLevel", "info");
                    _this.addProp(options, "allowedParentDomains", constants.WILDCARD);
                    Object(lib.L)(_this.defaultLogLevel);
                    if (Component.components[_this.tag]) throw new Error("Can not register multiple components with the same tag");
                    _this.addProp(options, "name", _this.tag.replace(/-/g, "_"));
                    _this.builtinProps = {
                        env: {
                            type: "string",
                            required: !1,
                            queryParam: !0,
                            def: function() {
                                return this.defaultEnv;
                            }
                        },
                        uid: {
                            type: "string",
                            def: function() {
                                return Object(lib.R)();
                            },
                            queryParam: !0
                        },
                        logLevel: {
                            type: "string",
                            required: !1,
                            queryParam: !0,
                            def: function() {
                                return this.defaultLogLevel;
                            }
                        },
                        url: {
                            type: "string",
                            required: !1,
                            promise: !0,
                            sendToChild: !1
                        },
                        dimensions: {
                            type: "object",
                            required: !1
                        },
                        version: {
                            type: "string",
                            required: !1,
                            queryParam: !0,
                            def: function() {
                                return this.version;
                            }
                        },
                        timeout: {
                            type: "number",
                            required: !1,
                            sendToChild: !1
                        },
                        onDisplay: {
                            type: "function",
                            required: !1,
                            noop: !0,
                            promisify: !0,
                            memoize: !0,
                            sendToChild: !1
                        },
                        onEnter: {
                            type: "function",
                            required: !1,
                            noop: !0,
                            promisify: !0,
                            sendToChild: !1
                        },
                        onRender: {
                            type: "function",
                            required: !1,
                            noop: !0,
                            promisify: !0,
                            sendToChild: !1
                        },
                        onClose: {
                            type: "function",
                            required: !1,
                            noop: !0,
                            once: !0,
                            promisify: !0,
                            sendToChild: !1
                        },
                        onTimeout: {
                            type: "function",
                            required: !1,
                            memoize: !0,
                            promisify: !0,
                            sendToChild: !1,
                            def: function() {
                                return function(err) {
                                    if (this.props.onError) return this.props.onError(err);
                                    throw err;
                                };
                            }
                        },
                        onError: {
                            type: "function",
                            required: !1,
                            promisify: !0,
                            sendToChild: !0,
                            once: !0,
                            def: function() {
                                return function(err) {
                                    setTimeout(function() {
                                        throw err;
                                    });
                                };
                            }
                        }
                    };
                    _this.props = options.props || {};
                    options.props || (_this.looseProps = !0);
                    _this.addProp(options, "dimensions");
                    _this.addProp(options, "scrolling");
                    _this.addProp(options, "listenForResize");
                    _this.addProp(options, "version", "latest");
                    _this.addProp(options, "defaultEnv");
                    _this.addProp(options, "buildUrl");
                    _this.addProp(options, "url");
                    _this.addProp(options, "domain");
                    _this.addProp(options, "bridgeUrl");
                    _this.addProp(options, "bridgeDomain");
                    _this.addProp(options, "attributes", {});
                    _this.addProp(options, "contexts", {
                        iframe: !0,
                        popup: !1
                    });
                    _this.addProp(options, "defaultContext");
                    _this.addProp(options, "autoResize", !1);
                    _this.addProp(options, "containerTemplate", defaultContainerTemplate);
                    _this.addProp(options, "prerenderTemplate", defaultPrerenderTemplate);
                    _this.addProp(options, "validate");
                    _this.addProp(options, "unsafeRenderTo", !1);
                    Component.components[_this.tag] = _this;
                    _this.registerDrivers();
                    _this.registerChild();
                    _this.listenDelegate();
                    return _this;
                }
                Component.prototype.getPropNames = function() {
                    for (var props = Object.keys(this.props), _i2 = 0, _Object$keys2 = Object.keys(this.builtinProps), _length2 = null == _Object$keys2 ? 0 : _Object$keys2.length; _i2 < _length2; _i2++) {
                        var key = _Object$keys2[_i2];
                        -1 === props.indexOf(key) && props.push(key);
                    }
                    return props;
                };
                Component.prototype.getProp = function(name) {
                    return this.props[name] || this.builtinProps[name];
                };
                Component.prototype.registerDrivers = function() {
                    this.driverCache = {};
                    for (var _i4 = 0, _Object$keys4 = Object.keys(component_drivers), _length4 = null == _Object$keys4 ? 0 : _Object$keys4.length; _i4 < _length4; _i4++) {
                        var driverName = _Object$keys4[_i4];
                        if (0 !== driverName.indexOf("_")) {
                            var glob = component_drivers[driverName].global();
                            glob && this.driver(driverName, glob);
                        }
                    }
                };
                Component.prototype.driver = function(name, dep) {
                    if (!component_drivers[name]) throw new Error("Could not find driver for framework: " + name);
                    this.driverCache[name] || (this.driverCache[name] = component_drivers[name].register(this, dep));
                    return this.driverCache[name];
                };
                Component.prototype.registerChild = function() {
                    var _this2 = this;
                    return src.a.try(function() {
                        if (_this2.isChild()) return new child_ChildComponent(_this2);
                    });
                };
                Component.prototype.listenDelegate = function() {
                    var _this3 = this;
                    Object(post_robot_src.on)(constants.POST_MESSAGE.ALLOW_DELEGATE + "_" + this.name, function() {
                        return !0;
                    });
                    Object(post_robot_src.on)(constants.POST_MESSAGE.DELEGATE + "_" + this.name, function(_ref) {
                        var source = _ref.source, origin = _ref.origin, data = _ref.data, domain = _this3.getDomain(null, data.env || _this3.defaultEnv);
                        if (!domain) throw new Error("Could not determine domain to allow remote render");
                        if (!Object(cross_domain_utils_src.z)(domain, origin)) throw new Error("Can not render from " + origin + " - expected " + domain.toString());
                        var delegate = _this3.delegate(source, data.options);
                        return {
                            overrides: delegate.getOverrides(data.context),
                            destroy: function() {
                                return delegate.destroy();
                            }
                        };
                    });
                };
                Component.prototype.canRenderTo = function(win) {
                    return Object(post_robot_src.send)(win, constants.POST_MESSAGE.ALLOW_DELEGATE + "_" + this.name).then(function(_ref2) {
                        return _ref2.data;
                    }).catch(function() {
                        return !1;
                    });
                };
                Component.prototype.getValidDomain = function(url) {
                    if (url) {
                        var domain = Object(cross_domain_utils_src.g)(url);
                        if ("string" == typeof this.domain && domain === this.domain) return domain;
                        var domains = this.domain;
                        if (domains && "object" === (void 0 === domains ? "undefined" : component__typeof(domains)) && !(domains instanceof RegExp)) for (var _i6 = 0, _Object$keys6 = Object.keys(domains), _length6 = null == _Object$keys6 ? 0 : _Object$keys6.length; _i6 < _length6; _i6++) {
                            var env = _Object$keys6[_i6];
                            if ("test" !== env && domain === domains[env]) return domain;
                        }
                    }
                };
                Component.prototype.getDomain = function(url, env) {
                    var domain = this.getForEnv(this.domain, env);
                    if (domain) return domain;
                    if (domain = this.getValidDomain(url)) return domain;
                    var envUrl = this.getForEnv(this.url, env);
                    return envUrl ? Object(cross_domain_utils_src.g)(envUrl) : url ? Object(cross_domain_utils_src.g)(url) : void 0;
                };
                Component.prototype.getBridgeUrl = function(env) {
                    return this.getForEnv(this.bridgeUrl, env);
                };
                Component.prototype.getForEnv = function(item, env) {
                    if (item) {
                        if ("string" == typeof item || item instanceof RegExp) return item;
                        env || (env = this.defaultEnv);
                        if (env) return env && "object" === (void 0 === item ? "undefined" : component__typeof(item)) && item[env] ? item[env] : void 0;
                    }
                };
                Component.prototype.getBridgeDomain = function(env) {
                    var bridgeDomain = this.getForEnv(this.bridgeDomain, env);
                    if (bridgeDomain) return bridgeDomain;
                    var bridgeUrl = this.getBridgeUrl(env);
                    return bridgeUrl ? Object(cross_domain_utils_src.g)(bridgeUrl) : void 0;
                };
                Component.prototype.getUrl = function(env, props) {
                    var url = this.getForEnv(this.url, env);
                    if (url) return url;
                    if (this.buildUrl) return this.buildUrl(props);
                    throw new Error("Unable to get url");
                };
                Component.prototype.isZoidComponent = function() {
                    return isZoidComponentWindow();
                };
                Component.prototype.isChild = function() {
                    if (!isZoidComponentWindow()) return !1;
                    var _getComponentMeta = getComponentMeta(), tag = _getComponentMeta.tag, childDomain = _getComponentMeta.childDomain;
                    return (!childDomain || childDomain === Object(cross_domain_utils_src.f)()) && tag === this.tag;
                };
                Component.prototype.createError = function(message, tag) {
                    return new Error("[" + (tag || this.tag) + "] " + message);
                };
                Component.prototype.init = function(props, context, element) {
                    return new parent_ParentComponent(this, this.getRenderContext(context, element), {
                        props: props
                    });
                };
                Component.prototype.delegate = function(source, options) {
                    return new delegate_DelegateComponent(this, source, options);
                };
                Component.prototype.validateRenderContext = function(context, element) {
                    if (context && !this.contexts[context]) throw new Error("[" + this.tag + "] Can not render to " + context);
                    if (!element && context === constants.CONTEXT_TYPES.IFRAME) throw new Error("[" + this.tag + "] Context type " + constants.CONTEXT_TYPES.IFRAME + " requires an element selector");
                };
                Component.prototype.getDefaultContext = function() {
                    if (this.defaultContext) return this.defaultContext;
                    if (this.contexts[constants.CONTEXT_TYPES.IFRAME]) return constants.CONTEXT_TYPES.IFRAME;
                    if (this.contexts[constants.CONTEXT_TYPES.POPUP]) return constants.CONTEXT_TYPES.POPUP;
                    throw new Error("Can not determine default context");
                };
                Component.prototype.getRenderContext = function(context, element) {
                    context = context || this.getDefaultContext();
                    this.validateRenderContext(context, element);
                    return context;
                };
                Component.prototype.render = function(props, element) {
                    var _this4 = this;
                    return src.a.try(function() {
                        return new parent_ParentComponent(_this4, _this4.getRenderContext(null, element), {
                            props: props
                        }).render(element);
                    });
                };
                Component.prototype.renderIframe = function(props, element) {
                    var _this5 = this;
                    return src.a.try(function() {
                        return new parent_ParentComponent(_this5, _this5.getRenderContext(constants.CONTEXT_TYPES.IFRAME, element), {
                            props: props
                        }).render(element);
                    });
                };
                Component.prototype.renderPopup = function(props) {
                    var _this6 = this;
                    return src.a.try(function() {
                        return new parent_ParentComponent(_this6, _this6.getRenderContext(constants.CONTEXT_TYPES.POPUP), {
                            props: props
                        }).render();
                    });
                };
                Component.prototype.renderTo = function(win, props, element) {
                    var _this7 = this;
                    return src.a.try(function() {
                        return new parent_ParentComponent(_this7, _this7.getRenderContext(null, element), {
                            props: props
                        }).renderTo(win, element);
                    });
                };
                Component.prototype.renderIframeTo = function(win, props, element) {
                    var _this8 = this;
                    return src.a.try(function() {
                        return new parent_ParentComponent(_this8, _this8.getRenderContext(constants.CONTEXT_TYPES.IFRAME, element), {
                            props: props
                        }).renderTo(win, element);
                    });
                };
                Component.prototype.renderPopupTo = function(win, props) {
                    var _this9 = this;
                    return src.a.try(function() {
                        return new parent_ParentComponent(_this9, _this9.getRenderContext(constants.CONTEXT_TYPES.POPUP), {
                            props: props
                        }).renderTo(win);
                    });
                };
                Component.prototype.prerender = function(props, element) {
                    var instance = new parent_ParentComponent(this, this.getRenderContext(null, element), {
                        props: props
                    });
                    instance.prefetch();
                    return {
                        render: function(innerProps, innerElement) {
                            innerProps && instance.updateProps(innerProps);
                            return instance.render(innerElement);
                        },
                        renderTo: function(win, innerProps, innerElement) {
                            innerProps && instance.updateProps(innerProps);
                            return instance.renderTo(win, innerElement);
                        },
                        get html() {
                            return instance.html;
                        },
                        set html(value) {
                            instance.html = value;
                        }
                    };
                };
                Component.prototype.log = function(event) {
                    var payload = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    Object(lib.y)(this.name, event, payload);
                };
                Component.prototype.logWarning = function(event, payload) {
                    Object(lib.S)(this.name, event, payload);
                };
                Component.prototype.logError = function(event, payload) {
                    Object(lib.n)(this.name, event, payload);
                };
                Component.getByTag = function(tag) {
                    return Component.components[tag];
                };
                return Component;
            }(base_BaseComponent)).prototype, 0, [ lib.C ], Object.getOwnPropertyDescriptor(component__class.prototype, "getPropNames"), component__class.prototype), 
            component__class);
            component_Component.components = {};
            function create(options) {
                return new component_Component(options);
            }
            function getByTag(tag) {
                return component_Component.getByTag(tag);
            }
            function interface_destroyAll() {
                return parent_ParentComponent.destroyAll();
            }
            var postRobot = post_robot_src, CONSTANTS = constants;
            __webpack_require__.d(__webpack_exports__, "create", function() {
                return create;
            });
            __webpack_require__.d(__webpack_exports__, "getByTag", function() {
                return getByTag;
            });
            __webpack_require__.d(__webpack_exports__, "getCurrentScriptDir", function() {
                return lib.s;
            });
            __webpack_require__.d(__webpack_exports__, "destroyAll", function() {
                return interface_destroyAll;
            });
            __webpack_require__.d(__webpack_exports__, "postRobot", function() {
                return postRobot;
            });
            __webpack_require__.d(__webpack_exports__, "CONSTANTS", function() {
                return CONSTANTS;
            });
            __webpack_require__.d(__webpack_exports__, "PopupOpenError", function() {
                return src_error.b;
            });
            __webpack_require__.d(__webpack_exports__, "IntegrationError", function() {
                return src_error.a;
            });
            __webpack_require__.d(__webpack_exports__, "RenderError", function() {
                return src_error.c;
            });
            __webpack_exports__.default = interface_namespaceObject;
        },
        "./src/lib/index.js": function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            var src = __webpack_require__("./node_modules/cross-domain-utils/src/index.js"), zalgo_promise_src = __webpack_require__("./node_modules/zalgo-promise/src/index.js"), cross_domain_safe_weakmap_src = __webpack_require__("./node_modules/cross-domain-safe-weakmap/src/index.js"), error = __webpack_require__("./src/error.js"), _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
                return typeof obj;
            } : function(obj) {
                return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
            function urlEncode(str) {
                return str.replace(/\?/g, "%3F").replace(/&/g, "%26").replace(/#/g, "%23").replace(/\+/g, "%2B");
            }
            function camelToDasherize(string) {
                return string.replace(/([A-Z])/g, function(g) {
                    return "-" + g.toLowerCase();
                });
            }
            function dasherizeToCamel(string) {
                return string.replace(/-([a-z])/g, function(g) {
                    return g[1].toUpperCase();
                });
            }
            function extend(obj, source) {
                if (!source) return obj;
                for (var key in source) source.hasOwnProperty(key) && (obj[key] = source[key]);
                return obj;
            }
            function values(obj) {
                var results = [];
                for (var key in obj) obj.hasOwnProperty(key) && results.push(obj[key]);
                return results;
            }
            function uniqueID() {
                var chars = "0123456789abcdef";
                return "xxxxxxxxxx".replace(/./g, function() {
                    return chars.charAt(Math.floor(Math.random() * chars.length));
                });
            }
            function stringifyWithFunctions(obj) {
                return JSON.stringify(obj, function(key, val) {
                    return "function" == typeof val ? val.toString() : val;
                });
            }
            function safeGet(obj, prop) {
                var result = void 0;
                try {
                    result = obj[prop];
                } catch (err) {}
                return result;
            }
            function capitalizeFirstLetter(string) {
                return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
            }
            function get(item, path, def) {
                if (!path) return def;
                for (var pathParts = path.split("."), i = 0; i < pathParts.length; i++) {
                    if ("object" !== (void 0 === item ? "undefined" : _typeof(item)) || null === item) return def;
                    item = item[pathParts[i]];
                }
                return void 0 === item ? def : item;
            }
            function safeInterval(method, time) {
                var timeout = void 0;
                timeout = setTimeout(function runInterval() {
                    timeout = setTimeout(runInterval, time);
                    method.call();
                }, time);
                return {
                    cancel: function() {
                        clearTimeout(timeout);
                    }
                };
            }
            function safeTimeout(method, time) {
                var interval = safeInterval(function() {
                    if ((time -= 100) <= 0) {
                        interval.cancel();
                        method();
                    }
                }, 100);
            }
            function each(item, callback) {
                if (item) if (Array.isArray(item)) for (var len = item.length, i = 0; i < len; i++) callback(item[i], i); else if ("object" === (void 0 === item ? "undefined" : _typeof(item))) for (var keys = Object.keys(item), _len = keys.length, _i = 0; _i < _len; _i++) {
                    var key = keys[_i];
                    callback(item[key], key);
                }
            }
            function replaceObject(item, replacers) {
                var fullKey = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                if (Array.isArray(item)) {
                    var _ret = function() {
                        for (var length = item.length, result = [], _loop = function(i) {
                            Object.defineProperty(result, i, {
                                configurable: !0,
                                enumerable: !0,
                                get: function() {
                                    var itemKey = fullKey ? fullKey + "." + i : "" + i, child = item[i], type = void 0 === child ? "undefined" : _typeof(child), replacer = replacers[type];
                                    if (replacer) {
                                        var replaced = replacer(child, i, itemKey);
                                        if (void 0 !== replaced) {
                                            result[i] = replaced;
                                            return result[i];
                                        }
                                    }
                                    if ("object" === (void 0 === child ? "undefined" : _typeof(child)) && null !== child) {
                                        result[i] = replaceObject(child, replacers, itemKey);
                                        return result[i];
                                    }
                                    result[i] = child;
                                    return result[i];
                                },
                                set: function(value) {
                                    delete result[i];
                                    result[i] = value;
                                }
                            });
                        }, i = 0; i < length; i++) _loop(i);
                        return {
                            v: result
                        };
                    }();
                    if ("object" === (void 0 === _ret ? "undefined" : _typeof(_ret))) return _ret.v;
                } else {
                    if ("object" !== (void 0 === item ? "undefined" : _typeof(item)) || null === item) throw new Error("Pass an object or array");
                    var _ret3 = function() {
                        var result = {}, _loop2 = function(key) {
                            if (!item.hasOwnProperty(key)) return "continue";
                            Object.defineProperty(result, key, {
                                configurable: !0,
                                enumerable: !0,
                                get: function() {
                                    var itemKey = fullKey ? fullKey + "." + key : "" + key, child = item[key], type = void 0 === child ? "undefined" : _typeof(child), replacer = replacers[type];
                                    if (replacer) {
                                        var replaced = replacer(child, key, itemKey);
                                        if (void 0 !== replaced) {
                                            result[key] = replaced;
                                            return result[key];
                                        }
                                    }
                                    if ("object" === (void 0 === child ? "undefined" : _typeof(child)) && null !== child) {
                                        result[key] = replaceObject(child, replacers, itemKey);
                                        return result[key];
                                    }
                                    result[key] = child;
                                    return result[key];
                                },
                                set: function(value) {
                                    delete result[key];
                                    result[key] = value;
                                }
                            });
                        };
                        for (var key in item) _loop2(key);
                        return {
                            v: result
                        };
                    }();
                    if ("object" === (void 0 === _ret3 ? "undefined" : _typeof(_ret3))) return _ret3.v;
                }
            }
            function copyProp(source, target, name, def) {
                if (source.hasOwnProperty(name)) {
                    var descriptor = Object.getOwnPropertyDescriptor(source, name);
                    Object.defineProperty(target, name, descriptor);
                } else target[name] = def;
            }
            function dotify(obj) {
                var prefix = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", newobj = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                prefix = prefix ? prefix + "." : prefix;
                for (var key in obj) void 0 !== obj[key] && null !== obj[key] && "function" != typeof obj[key] && (obj[key] && Array.isArray(obj[key]) && obj[key].length && obj[key].every(function(val) {
                    return "object" !== (void 0 === val ? "undefined" : _typeof(val));
                }) ? newobj["" + prefix + key] = obj[key].join(",") : obj[key] && "object" === _typeof(obj[key]) ? newobj = dotify(obj[key], "" + prefix + key, newobj) : newobj["" + prefix + key] = obj[key].toString());
                return newobj;
            }
            var objectIDs = new cross_domain_safe_weakmap_src.a();
            function getObjectID(obj) {
                if (null === obj || void 0 === obj || "object" !== (void 0 === obj ? "undefined" : _typeof(obj)) && "function" != typeof obj) throw new Error("Invalid object");
                var uid = objectIDs.get(obj);
                if (!uid) {
                    uid = (void 0 === obj ? "undefined" : _typeof(obj)) + ":" + uniqueID();
                    objectIDs.set(obj, uid);
                }
                return uid;
            }
            function regex(pattern, string) {
                var start = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                "string" == typeof pattern && (pattern = new RegExp(pattern));
                var result = string.slice(start).match(pattern);
                if (result) {
                    var index = result.index, match = result[0];
                    return {
                        text: match,
                        groups: result.slice(1),
                        start: start + index,
                        end: start + index + match.length,
                        length: match.length,
                        replace: function(text) {
                            return match ? "" + match.slice(0, start + index) + text + match.slice(index + match.length) : "";
                        }
                    };
                }
            }
            function regexAll(pattern, string) {
                for (var matches = [], start = 0; ;) {
                    var match = regex(pattern, string, start);
                    if (!match) break;
                    matches.push(match);
                    start = match.end;
                }
                return matches;
            }
            function count(str, substr) {
                for (var startIndex = 0, itemCount = 0; ;) {
                    var index = str.indexOf(substr, startIndex);
                    if (-1 === index) break;
                    startIndex = index;
                    itemCount += 1;
                }
                return itemCount;
            }
            function stringify(item) {
                return "string" == typeof item ? item : item && "function" == typeof item.toString ? item.toString() : Object.prototype.toString.call(item);
            }
            function stringifyError(err) {
                if (err) {
                    var stack = err.stack, message = err.message;
                    if ("string" == typeof stack) return stack;
                    if ("string" == typeof message) return message;
                }
                return stringify(err);
            }
            function eventEmitter() {
                var triggered = {}, handlers = {};
                return {
                    on: function(eventName, handler) {
                        var handlerList = handlers[eventName] = handlers[eventName] || [];
                        handlerList.push(handler);
                        var cancelled = !1;
                        return {
                            cancel: function() {
                                if (!cancelled) {
                                    cancelled = !0;
                                    handlerList.splice(handlerList.indexOf(handler), 1);
                                }
                            }
                        };
                    },
                    once: function(eventName, handler) {
                        var listener = this.on(eventName, function() {
                            listener.cancel();
                            handler();
                        });
                        return listener;
                    },
                    trigger: function(eventName) {
                        var handlerList = handlers[eventName];
                        if (handlerList) for (var _i3 = 0, _length2 = null == handlerList ? 0 : handlerList.length; _i3 < _length2; _i3++) (0, 
                        handlerList[_i3])();
                    },
                    triggerOnce: function(eventName) {
                        if (!triggered[eventName]) {
                            triggered[eventName] = !0;
                            this.trigger(eventName);
                        }
                    }
                };
            }
            function noop() {}
            function once(method) {
                var called = !1, result = void 0;
                return function() {
                    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                    if (called) return result;
                    called = !0;
                    return result = method.apply(this, arguments);
                };
            }
            function memoize(method) {
                var results = {};
                return function() {
                    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) args[_key2] = arguments[_key2];
                    var cacheKey = void 0;
                    try {
                        cacheKey = JSON.stringify(Array.prototype.slice.call(arguments), function(key, val) {
                            return "function" == typeof val ? "zoid:memoize[" + getObjectID(val) + "]" : val;
                        });
                    } catch (err) {
                        throw new Error("Arguments not serializable -- can not be used to memoize");
                    }
                    results.hasOwnProperty(cacheKey) || (results[cacheKey] = method.apply(this, arguments));
                    return results[cacheKey];
                };
            }
            function debounce(method) {
                var time = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100, timeout = void 0;
                return function() {
                    var _this = this, _arguments = arguments;
                    clearTimeout(timeout);
                    timeout = setTimeout(function() {
                        return method.apply(_this, _arguments);
                    }, time);
                };
            }
            function serializeFunctions(obj) {
                return replaceObject(obj, {
                    function: function() {
                        return {
                            __type__: "__function__"
                        };
                    }
                });
            }
            function deserializeFunctions(obj, handler) {
                return replaceObject(obj, {
                    object: function(value, key, fullKey) {
                        if (value && "__function__" === value.__type__) return function() {
                            return handler({
                                key: key,
                                fullKey: fullKey,
                                self: this,
                                args: arguments
                            });
                        };
                    }
                });
            }
            var _extends = Object.assign || function(target) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];
                    for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
                }
                return target;
            }, dom__typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
                return typeof obj;
            } : function(obj) {
                return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
            function appendChild(container, child) {
                container.appendChild(child);
            }
            function querySelectorAll(el, selector) {
                return Array.prototype.slice.call(el.querySelectorAll(selector));
            }
            function getElementSafe(id) {
                if (function(element) {
                    return element instanceof window.Element || null !== element && "object" === (void 0 === element ? "undefined" : dom__typeof(element)) && 1 === element.nodeType && "object" === dom__typeof(element.style) && "object" === dom__typeof(element.ownerDocument);
                }(id)) return id;
                if ("string" == typeof id) {
                    var element = document.getElementById(id);
                    if (element) return element;
                    document.querySelector && (element = document.querySelector(id));
                    if (element) return element;
                }
            }
            function getElement(id) {
                var element = getElementSafe(id);
                if (element) return element;
                throw new Error("Can not find element: " + stringify(id));
            }
            var documentReady = new zalgo_promise_src.a(function(resolve) {
                if ("complete" === window.document.readyState) return resolve(window.document);
                var interval = setInterval(function() {
                    if ("complete" === window.document.readyState) {
                        clearInterval(interval);
                        return resolve(window.document);
                    }
                }, 10);
            });
            function isDocumentReady() {
                return "complete" === window.document.readyState;
            }
            function elementReady(id) {
                return new zalgo_promise_src.a(function(resolve, reject) {
                    var name = stringify(id), el = getElementSafe(id);
                    if (el) return resolve(el);
                    if (isDocumentReady()) return reject(new Error("Document is ready and element " + name + " does not exist"));
                    var interval = setInterval(function() {
                        if (el = getElementSafe(id)) {
                            clearInterval(interval);
                            return resolve(el);
                        }
                        if (isDocumentReady()) {
                            clearInterval(interval);
                            return reject(new Error("Document is ready and element " + name + " does not exist"));
                        }
                    }, 10);
                });
            }
            function popup(url, options) {
                var params = Object.keys(options).map(function(key) {
                    if (options[key]) return key + "=" + stringify(options[key]);
                }).filter(Boolean).join(","), win = void 0;
                try {
                    win = window.open(url, options.name, params, !0);
                } catch (err) {
                    throw new error.b("Can not open popup window - " + (err.stack || err.message));
                }
                if (Object(src.x)(win)) {
                    var err;
                    throw new error.b("Can not open popup window - blocked");
                }
                return win;
            }
            function writeToWindow(win, html) {
                try {
                    win.document.open();
                    win.document.write(html);
                    win.document.close();
                } catch (err) {
                    try {
                        win.location = "javascript: document.open(); document.write(" + JSON.stringify(html) + "); document.close();";
                    } catch (err2) {}
                }
            }
            function writeElementToWindow(win, el) {
                var tag = el.tagName.toLowerCase();
                if ("html" !== tag) throw new Error("Expected element to be html, got " + tag);
                for (var documentElement = win.document.documentElement; documentElement.children && documentElement.children.length; ) documentElement.removeChild(documentElement.children[0]);
                for (;el.children.length; ) documentElement.appendChild(el.children[0]);
            }
            function setStyle(el, styleText) {
                var doc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window.document;
                el.styleSheet ? el.styleSheet.cssText = styleText : el.appendChild(doc.createTextNode(styleText));
            }
            function createElement() {
                var tag = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "div", options = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, container = arguments[2];
                tag = tag.toLowerCase();
                var element = document.createElement(tag);
                options.style && extend(element.style, options.style);
                options.class && (element.className = options.class.join(" "));
                if (options.attributes) for (var _i2 = 0, _Object$keys2 = Object.keys(options.attributes), _length2 = null == _Object$keys2 ? 0 : _Object$keys2.length; _i2 < _length2; _i2++) {
                    var key = _Object$keys2[_i2];
                    element.setAttribute(key, options.attributes[key]);
                }
                options.styleSheet && setStyle(element, options.styleSheet);
                container && appendChild(container, element);
                if (options.html) if ("iframe" === tag) {
                    if (!container || !element.contentWindow) throw new Error("Iframe html can not be written unless container provided and iframe in DOM");
                    writeToWindow(element.contentWindow, options.html);
                } else element.innerHTML = options.html;
                return element;
            }
            var awaitFrameLoadPromises = new cross_domain_safe_weakmap_src.a();
            function awaitFrameLoad(frame) {
                if (awaitFrameLoadPromises.has(frame)) {
                    var _promise = awaitFrameLoadPromises.get(frame);
                    if (_promise) return _promise;
                }
                var promise = new zalgo_promise_src.a(function(resolve, reject) {
                    frame.addEventListener("load", function() {
                        Object(src.y)(frame);
                        resolve(frame);
                    });
                    frame.addEventListener("error", function(err) {
                        frame.contentWindow ? resolve(frame) : reject(err);
                    });
                });
                awaitFrameLoadPromises.set(frame, promise);
                return promise;
            }
            function awaitFrameWindow(frame) {
                return frame.contentWindow ? zalgo_promise_src.a.resolve(frame.contentWindow) : awaitFrameLoad(frame).then(function(loadedFrame) {
                    if (!loadedFrame.contentWindow) throw new Error("Could not find window in iframe");
                    return loadedFrame.contentWindow;
                });
            }
            function iframe() {
                var options = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, el = getElement(arguments[1]), attributes = options.attributes || {}, style = options.style || {}, frame = createElement("iframe", {
                    attributes: _extends({
                        frameBorder: "0",
                        allowTransparency: "true"
                    }, attributes),
                    style: _extends({
                        backgroundColor: "transparent"
                    }, style),
                    html: options.html,
                    class: options.class
                });
                awaitFrameLoad(frame);
                el.appendChild(frame);
                (options.url || window.navigator.userAgent.match(/MSIE|Edge/i)) && frame.setAttribute("src", options.url || "about:blank");
                return frame;
            }
            function addEventListener(obj, event, handler) {
                obj.addEventListener(event, handler);
                return {
                    cancel: function() {
                        obj.removeEventListener(event, handler);
                    }
                };
            }
            function scanForJavascript(str) {
                if (!str) return str;
                if (str.match(/<script|on\w+\s*=|javascript:|expression\s*\(|eval\(|new\s*Function/)) throw new Error("HTML contains potential javascript: " + str);
                return str;
            }
            var parseQuery = memoize(function(queryString) {
                var params = {};
                if (!queryString) return params;
                if (-1 === queryString.indexOf("=")) throw new Error("Can not parse query string params: " + queryString);
                for (var _i4 = 0, _queryString$split2 = queryString.split("&"), _length4 = null == _queryString$split2 ? 0 : _queryString$split2.length; _i4 < _length4; _i4++) {
                    var pair = _queryString$split2[_i4];
                    (pair = pair.split("="))[0] && pair[1] && (params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]));
                }
                return params;
            });
            function getQueryParam(name) {
                return parseQuery(window.location.search.slice(1))[name];
            }
            function formatQuery() {
                var obj = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return Object.keys(obj).filter(function(key) {
                    return "string" == typeof obj[key];
                }).map(function(key) {
                    return urlEncode(key) + "=" + urlEncode(obj[key]);
                }).join("&");
            }
            function extendQuery(originalQuery) {
                var props = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return props && Object.keys(props).length ? formatQuery(_extends({}, parseQuery(originalQuery), props)) : originalQuery;
            }
            function extendUrl(url) {
                var originalHash, options = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, query = options.query || {}, hash = options.hash || {}, originalUrl = void 0, _url$split = url.split("#");
                originalUrl = _url$split[0];
                originalHash = _url$split[1];
                var _originalUrl$split = originalUrl.split("?");
                originalUrl = _originalUrl$split[0];
                var queryString = extendQuery(_originalUrl$split[1], query), hashString = extendQuery(originalHash, hash);
                queryString && (originalUrl = originalUrl + "?" + queryString);
                hashString && (originalUrl = originalUrl + "#" + hashString);
                return originalUrl;
            }
            function elementStoppedMoving(element) {
                var timeout = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5e3;
                return new zalgo_promise_src.a(function(resolve, reject) {
                    var el = getElement(element), start = el.getBoundingClientRect(), interval = void 0, timer = void 0;
                    interval = setInterval(function() {
                        var end = el.getBoundingClientRect();
                        if (start.top === end.top && start.bottom === end.bottom && start.left === end.left && start.right === end.right && start.width === end.width && start.height === end.height) {
                            clearTimeout(timer);
                            clearInterval(interval);
                            return resolve();
                        }
                        start = end;
                    }, 50);
                    timer = setTimeout(function() {
                        clearInterval(interval);
                        reject(new Error("Timed out waiting for element to stop animating after " + timeout + "ms"));
                    }, timeout);
                });
            }
            function getCurrentDimensions(el) {
                return {
                    width: el.offsetWidth,
                    height: el.offsetHeight
                };
            }
            function changeStyle(el, styles) {
                return new zalgo_promise_src.a(function(resolve) {
                    for (var _i6 = 0, _Object$keys4 = Object.keys(styles), _length6 = null == _Object$keys4 ? 0 : _Object$keys4.length; _i6 < _length6; _i6++) {
                        var key = _Object$keys4[_i6];
                        el.style[key] = styles[key];
                    }
                    setTimeout(resolve, 1);
                });
            }
            function setOverflow(el) {
                var value = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "auto", _el$style = el.style, overflow = _el$style.overflow, overflowX = _el$style.overflowX, overflowY = _el$style.overflowY;
                el.style.overflow = el.style.overflowX = el.style.overflowY = value;
                return {
                    reset: function() {
                        el.style.overflow = overflow;
                        el.style.overflowX = overflowX;
                        el.style.overflowY = overflowY;
                    }
                };
            }
            function trackDimensions(el, _ref2) {
                var _ref2$width = _ref2.width, width = void 0 === _ref2$width || _ref2$width, _ref2$height = _ref2.height, height = void 0 === _ref2$height || _ref2$height, _ref2$threshold = _ref2.threshold, threshold = void 0 === _ref2$threshold ? 0 : _ref2$threshold, currentDimensions = getCurrentDimensions(el);
                return {
                    check: function() {
                        var newDimensions = getCurrentDimensions(el);
                        return {
                            changed: function(one, two, _ref) {
                                var _ref$width = _ref.width, _ref$height = _ref.height, height = void 0 === _ref$height || _ref$height, _ref$threshold = _ref.threshold, threshold = void 0 === _ref$threshold ? 0 : _ref$threshold;
                                return !(void 0 !== _ref$width && !_ref$width || !(Math.abs(one.width - two.width) > threshold)) || !!(height && Math.abs(one.height - two.height) > threshold);
                            }(currentDimensions, newDimensions, {
                                width: width,
                                height: height,
                                threshold: threshold
                            }),
                            dimensions: newDimensions
                        };
                    },
                    reset: function() {
                        currentDimensions = getCurrentDimensions(el);
                    }
                };
            }
            function onDimensionsChange(el, _ref3) {
                var _ref3$width = _ref3.width, width = void 0 === _ref3$width || _ref3$width, _ref3$height = _ref3.height, height = void 0 === _ref3$height || _ref3$height, _ref3$delay = _ref3.delay, delay = void 0 === _ref3$delay ? 50 : _ref3$delay, _ref3$threshold = _ref3.threshold, threshold = void 0 === _ref3$threshold ? 0 : _ref3$threshold;
                return new zalgo_promise_src.a(function(resolve) {
                    var tracker = trackDimensions(el, {
                        width: width,
                        height: height,
                        threshold: threshold
                    }), interval = void 0, resolver = debounce(function(dimensions) {
                        clearInterval(interval);
                        return resolve(dimensions);
                    }, 4 * delay);
                    interval = setInterval(function() {
                        var _tracker$check = tracker.check(), changed = _tracker$check.changed, dimensions = _tracker$check.dimensions;
                        if (changed) {
                            tracker.reset();
                            return resolver(dimensions);
                        }
                    }, delay);
                    window.addEventListener("resize", function onWindowResize() {
                        var _tracker$check2 = tracker.check(), changed = _tracker$check2.changed, dimensions = _tracker$check2.dimensions;
                        if (changed) {
                            tracker.reset();
                            window.removeEventListener("resize", onWindowResize);
                            resolver(dimensions);
                        }
                    });
                });
            }
            function dimensionsMatchViewport(el, _ref4) {
                var width = _ref4.width, height = _ref4.height, dimensions = getCurrentDimensions(el);
                return !(width && dimensions.width !== window.innerWidth || height && dimensions.height !== window.innerHeight);
            }
            function bindEvents(element, eventNames, handler) {
                handler = once(handler);
                for (var _i8 = 0, _length8 = null == eventNames ? 0 : eventNames.length; _i8 < _length8; _i8++) {
                    var eventName = eventNames[_i8];
                    element.addEventListener(eventName, handler);
                }
                return {
                    cancel: once(function() {
                        for (var _i10 = 0, _length10 = null == eventNames ? 0 : eventNames.length; _i10 < _length10; _i10++) {
                            var _eventName = eventNames[_i10];
                            element.removeEventListener(_eventName, handler);
                        }
                    })
                };
            }
            var VENDOR_PREFIXES = [ "webkit", "moz", "ms", "o" ];
            function setVendorCSS(element, name, value) {
                element.style[name] = value;
                for (var capitalizedName = capitalizeFirstLetter(name), _i12 = 0, _length12 = null == VENDOR_PREFIXES ? 0 : VENDOR_PREFIXES.length; _i12 < _length12; _i12++) {
                    var prefix = VENDOR_PREFIXES[_i12];
                    element.style["" + prefix + capitalizedName] = value;
                }
            }
            var CSSRule = window.CSSRule, KEYFRAMES_RULE = CSSRule.KEYFRAMES_RULE || CSSRule.WEBKIT_KEYFRAMES_RULE || CSSRule.MOZ_KEYFRAMES_RULE || CSSRule.O_KEYFRAMES_RULE || CSSRule.MS_KEYFRAMES_RULE, ANIMATION_START_EVENTS = [ "animationstart", "webkitAnimationStart", "oAnimationStart", "MSAnimationStart" ], ANIMATION_END_EVENTS = [ "animationend", "webkitAnimationEnd", "oAnimationEnd", "MSAnimationEnd" ];
            function animate(element, name, clean) {
                var timeout = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1e3;
                return new zalgo_promise_src.a(function(resolve, reject) {
                    var el = getElement(element);
                    if (!el || !function(element, name) {
                        var stylesheets = el.ownerDocument.styleSheets;
                        try {
                            for (var i = 0; i < stylesheets.length; i++) {
                                var cssRules = stylesheets[i].cssRules;
                                if (cssRules) for (var j = 0; j < cssRules.length; j++) {
                                    var cssRule = cssRules[j];
                                    if (cssRule && cssRule.type === KEYFRAMES_RULE && cssRule.name === name) return !0;
                                }
                            }
                        } catch (err) {
                            return !1;
                        }
                        return !1;
                    }(0, name)) return resolve();
                    var hasStarted = !1, startTimeout = void 0, endTimeout = void 0, startEvent = void 0, endEvent = void 0;
                    function cleanUp() {
                        setVendorCSS(el, "animationName", "");
                        clearTimeout(startTimeout);
                        clearTimeout(endTimeout);
                        startEvent.cancel();
                        endEvent.cancel();
                    }
                    startEvent = bindEvents(el, ANIMATION_START_EVENTS, function(event) {
                        if (event.target === el && event.animationName === name) {
                            clearTimeout(startTimeout);
                            event.stopPropagation();
                            startEvent.cancel();
                            hasStarted = !0;
                            endTimeout = setTimeout(function() {
                                cleanUp();
                                resolve();
                            }, timeout);
                        }
                    });
                    endEvent = bindEvents(el, ANIMATION_END_EVENTS, function(event) {
                        if (event.target === el && event.animationName === name) {
                            cleanUp();
                            return "string" == typeof event.animationName && event.animationName !== name ? reject("Expected animation name to be " + name + ", found " + event.animationName) : resolve();
                        }
                    });
                    setVendorCSS(el, "animationName", name);
                    startTimeout = setTimeout(function() {
                        if (!hasStarted) {
                            cleanUp();
                            return resolve();
                        }
                    }, 200);
                    clean && clean(cleanUp);
                });
            }
            var STYLE = {
                DISPLAY: {
                    NONE: "none",
                    BLOCK: "block"
                },
                VISIBILITY: {
                    VISIBLE: "visible",
                    HIDDEN: "hidden"
                },
                IMPORTANT: "important"
            };
            function makeElementVisible(element) {
                element.style.setProperty("visibility", "");
            }
            function makeElementInvisible(element) {
                element.style.setProperty("visibility", STYLE.VISIBILITY.HIDDEN, STYLE.IMPORTANT);
            }
            function showElement(element) {
                element.style.setProperty("display", "");
            }
            function hideElement(element) {
                element.style.setProperty("display", STYLE.DISPLAY.NONE, STYLE.IMPORTANT);
            }
            function destroyElement(element) {
                element.parentNode && element.parentNode.removeChild(element);
            }
            function showAndAnimate(element, name, clean) {
                var animation = animate(element, name, clean);
                showElement(element);
                return animation;
            }
            function animateAndHide(element, name, clean) {
                return animate(element, name, clean).then(function() {
                    hideElement(element);
                });
            }
            function addClass(element, name) {
                element.classList ? element.classList.add(name) : -1 === element.className.split(/\s+/).indexOf(name) && (element.className += " " + name);
            }
            function removeClass(element, name) {
                element.classList ? element.classList.remove(name) : -1 !== element.className.split(/\s+/).indexOf(name) && (element.className = element.className.replace(name, ""));
            }
            function getCurrentScriptDir() {
                console.warn("Do not use zoid.getCurrentScriptDir() in production -- browser support is limited");
                return document.currentScript ? document.currentScript.src.split("/").slice(0, -1).join("/") : ".";
            }
            function getElementName(element) {
                if ("string" == typeof element) return element;
                if (!element || !element.tagName) return "<unknown>";
                var name = element.tagName.toLowerCase();
                element.id ? name += "#" + element.id : element.className && (name += "." + element.className.split(" ").join("."));
                return name;
            }
            function isElementClosed(el) {
                return !el || !el.parentNode;
            }
            function watchElementForClose(element, handler) {
                handler = once(handler);
                var interval = void 0;
                isElementClosed(element) ? handler() : interval = safeInterval(function() {
                    if (isElementClosed(element)) {
                        interval.cancel();
                        handler();
                    }
                }, 50);
                return {
                    cancel: function() {
                        interval && interval.cancel();
                    }
                };
            }
            function getHttpType(contentType, url) {
                return new zalgo_promise_src.a(function(resolve, reject) {
                    var req = new window.XMLHttpRequest();
                    req.open("GET", url);
                    req.setRequestHeader("Accept", contentType);
                    req.send(null);
                    req.onload = function() {
                        resolve(req.responseText);
                    };
                    req.onerror = function() {
                        return reject(new Error("prefetch failed"));
                    };
                });
            }
            function getHTML(url) {
                return getHttpType("text/html", url);
            }
            function getCSS(url) {
                return getHttpType("text/css", url);
            }
            function getScript(url) {
                return getHttpType("*/*", url);
            }
            function prefetchPage(url) {
                return getHTML(url);
            }
            var JSX_EVENTS = {
                onClick: "click"
            };
            function fixScripts(el) {
                for (var doc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.document, _i14 = 0, _querySelectorAll2 = querySelectorAll(el, "script"), _length14 = null == _querySelectorAll2 ? 0 : _querySelectorAll2.length; _i14 < _length14; _i14++) {
                    var script = _querySelectorAll2[_i14], newScript = doc.createElement("script");
                    newScript.text = script.textContent;
                    script.parentNode.replaceChild(newScript, script);
                }
            }
            function jsxDom(name, props, content) {
                name = name.toLowerCase();
                var doc = this && this.createElement ? this : window.document, el = doc.createElement(name);
                for (var prop in props) if (prop in JSX_EVENTS) el.addEventListener(JSX_EVENTS[prop], props[prop]); else if ("innerHTML" === prop) {
                    el.innerHTML = props[prop];
                    fixScripts(el, doc);
                } else el.setAttribute(prop, props[prop]);
                if ("style" === name) {
                    if ("string" != typeof content) throw new TypeError("Expected " + name + " tag content to be string, got " + (void 0 === content ? "undefined" : dom__typeof(content)));
                    if (arguments.length > 3) throw new Error("Expected only text content for " + name + " tag");
                    setStyle(el, content, doc);
                } else if ("iframe" === name) {
                    if (arguments.length > 3) throw new Error("Expected only single child node for iframe");
                    el.addEventListener("load", function() {
                        var win = el.contentWindow;
                        if (!win) throw new Error("Expected frame to have contentWindow");
                        "string" == typeof content ? writeToWindow(win, content) : writeElementToWindow(win, content);
                    });
                } else if ("script" === name) {
                    if ("string" != typeof content) throw new TypeError("Expected " + name + " tag content to be string, got " + (void 0 === content ? "undefined" : dom__typeof(content)));
                    if (arguments.length > 3) throw new Error("Expected only text content for " + name + " tag");
                    el.text = content;
                } else for (var i = 2; i < arguments.length; i++) if ("string" == typeof arguments[i]) {
                    var textNode = doc.createTextNode(arguments[i]);
                    appendChild(el, textNode);
                } else appendChild(el, arguments[i]);
                return el;
            }
            function denodeify(method) {
                return function() {
                    var self = this, args = Array.prototype.slice.call(arguments);
                    return args.length >= method.length ? zalgo_promise_src.a.resolve(method.apply(self, args)) : new zalgo_promise_src.a(function(resolve, reject) {
                        args.push(function(err, result) {
                            if (err && !(err instanceof Error)) throw new Error("Passed non-Error object in callback: [ " + err + " ] -- callbacks should either be called with callback(new Error(...)) or callback(null, result).");
                            return err ? reject(err) : resolve(result);
                        });
                        method.apply(self, args);
                    });
                };
            }
            function promisify(method) {
                return function() {
                    var _this = this, _arguments = arguments;
                    return zalgo_promise_src.a.try(function() {
                        return method.apply(_this, _arguments);
                    });
                };
            }
            function promise_delay() {
                var time = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                return new zalgo_promise_src.a(function(resolve) {
                    setTimeout(resolve, time);
                });
            }
            function cycle(method) {
                return zalgo_promise_src.a.try(method).then(function() {
                    return cycle(method);
                });
            }
            function isPerc(str) {
                return "string" == typeof str && /^[0-9]+%$/.test(str);
            }
            function isPx(str) {
                return "string" == typeof str && /^[0-9]+px$/.test(str);
            }
            function toNum(val) {
                if ("number" == typeof val) return val;
                var match = val.match(/^([0-9]+)(px|%)$/);
                if (!match) throw new Error("Could not match css value from " + val);
                return parseInt(match[1], 10);
            }
            function toPx(val) {
                return toNum(val) + "px";
            }
            function toCSS(val) {
                return "number" == typeof val ? toPx(val) : isPerc(val) ? val : toPx(val);
            }
            function percOf(num, perc) {
                return parseInt(num * toNum(perc) / 100, 10);
            }
            function normalizeDimension(dim, max) {
                if ("number" == typeof dim) return dim;
                if (isPerc(dim)) return percOf(max, dim);
                if (isPx(dim)) return toNum(dim);
                throw new Error("Can not normalize dimension: " + dim);
            }
            function memoized(target, name, descriptor) {
                var method = descriptor.value;
                descriptor.value = function() {
                    this.__memoized__ = this.__memoized__ || {};
                    this.__memoized__.hasOwnProperty(name) || (this.__memoized__[name] = method.apply(this, arguments));
                    return this.__memoized__[name];
                };
                descriptor.value.displayName = name + ":memoized";
            }
            function decorators_promise(target, name, descriptor) {
                var method = descriptor.value;
                descriptor.value = function() {
                    return zalgo_promise_src.a.try(method, this, arguments);
                };
                descriptor.value.displayName = name + ":promisified";
            }
            var post_robot_src = __webpack_require__("./node_modules/post-robot/src/index.js"), client = __webpack_require__("./node_modules/beaver-logger/client/index.js");
            function setLogLevel(logLevel) {
                if (-1 === client.e.indexOf(logLevel)) throw new Error("Invalid logLevel: " + logLevel);
                client.a.logLevel = logLevel;
                post_robot_src.CONFIG.LOG_LEVEL = logLevel;
                window.LOG_LEVEL = logLevel;
            }
            function info(name, event) {
                var payload = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                Object(client.d)("xc_" + name + "_" + event, payload);
            }
            function warn(name, event) {
                var payload = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                Object(client.f)("xc_" + name + "_" + event, payload);
            }
            function logger_error(name, event) {
                var payload = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                Object(client.b)("xc_" + name + "_" + event, payload);
            }
            var constants = __webpack_require__("./src/constants.js");
            function globalFor(win) {
                if (Object(src.t)(win)) {
                    win[constants.__ZOID__] || (win[constants.__ZOID__] = {});
                    return win[constants.__ZOID__];
                }
            }
            function localGlobal() {
                var global = globalFor(window);
                if (!global) throw new Error("Could not get local global");
                return global;
            }
            var global = localGlobal();
            __webpack_require__.d(__webpack_exports__, "d", function() {
                return appendChild;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return querySelectorAll;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return getElementSafe;
            });
            __webpack_require__.d(__webpack_exports__, "t", function() {
                return getElement;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return documentReady;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return isDocumentReady;
            });
            __webpack_require__.d(__webpack_exports__, "m", function() {
                return elementReady;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return popup;
            });
            __webpack_require__.d(__webpack_exports__, "V", function() {
                return writeToWindow;
            });
            __webpack_require__.d(__webpack_exports__, "U", function() {
                return writeElementToWindow;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return setStyle;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return createElement;
            });
            __webpack_require__.d(__webpack_exports__, "e", function() {
                return awaitFrameLoad;
            });
            __webpack_require__.d(__webpack_exports__, "f", function() {
                return awaitFrameWindow;
            });
            __webpack_require__.d(__webpack_exports__, "x", function() {
                return iframe;
            });
            __webpack_require__.d(__webpack_exports__, "b", function() {
                return addEventListener;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return scanForJavascript;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return parseQuery;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return getQueryParam;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return formatQuery;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return extendQuery;
            });
            __webpack_require__.d(__webpack_exports__, "q", function() {
                return extendUrl;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return elementStoppedMoving;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return getCurrentDimensions;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return changeStyle;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return setOverflow;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return trackDimensions;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return onDimensionsChange;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return dimensionsMatchViewport;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return bindEvents;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return setVendorCSS;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return animate;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return makeElementVisible;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return makeElementInvisible;
            });
            __webpack_require__.d(__webpack_exports__, "N", function() {
                return showElement;
            });
            __webpack_require__.d(__webpack_exports__, "w", function() {
                return hideElement;
            });
            __webpack_require__.d(__webpack_exports__, "k", function() {
                return destroyElement;
            });
            __webpack_require__.d(__webpack_exports__, "M", function() {
                return showAndAnimate;
            });
            __webpack_require__.d(__webpack_exports__, "c", function() {
                return animateAndHide;
            });
            __webpack_require__.d(__webpack_exports__, "a", function() {
                return addClass;
            });
            __webpack_require__.d(__webpack_exports__, "I", function() {
                return removeClass;
            });
            __webpack_require__.d(__webpack_exports__, "s", function() {
                return getCurrentScriptDir;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return getElementName;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return isElementClosed;
            });
            __webpack_require__.d(__webpack_exports__, "T", function() {
                return watchElementForClose;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return getHttpType;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return getHTML;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return getCSS;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return getScript;
            });
            __webpack_require__.d(__webpack_exports__, "G", function() {
                return prefetchPage;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return fixScripts;
            });
            __webpack_require__.d(__webpack_exports__, "B", function() {
                return jsxDom;
            });
            __webpack_require__.d(__webpack_exports__, "E", function() {
                return noop;
            });
            __webpack_require__.d(__webpack_exports__, "F", function() {
                return once;
            });
            __webpack_require__.d(__webpack_exports__, "C", function() {
                return memoize;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return debounce;
            });
            __webpack_require__.d(__webpack_exports__, "K", function() {
                return serializeFunctions;
            });
            __webpack_require__.d(__webpack_exports__, "j", function() {
                return deserializeFunctions;
            });
            __webpack_require__.d(__webpack_exports__, "i", function() {
                return denodeify;
            });
            __webpack_require__.d(__webpack_exports__, "H", function() {
                return promisify;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return promise_delay;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return cycle;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return urlEncode;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return camelToDasherize;
            });
            __webpack_require__.d(__webpack_exports__, "h", function() {
                return dasherizeToCamel;
            });
            __webpack_require__.d(__webpack_exports__, "p", function() {
                return extend;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return values;
            });
            __webpack_require__.d(__webpack_exports__, "R", function() {
                return uniqueID;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return stringifyWithFunctions;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return safeGet;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return capitalizeFirstLetter;
            });
            __webpack_require__.d(__webpack_exports__, "r", function() {
                return get;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return safeInterval;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return safeTimeout;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return each;
            });
            __webpack_require__.d(__webpack_exports__, "J", function() {
                return replaceObject;
            });
            __webpack_require__.d(__webpack_exports__, "g", function() {
                return copyProp;
            });
            __webpack_require__.d(__webpack_exports__, "l", function() {
                return dotify;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return getObjectID;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return regex;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return regexAll;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return count;
            });
            __webpack_require__.d(__webpack_exports__, "O", function() {
                return stringify;
            });
            __webpack_require__.d(__webpack_exports__, "P", function() {
                return stringifyError;
            });
            __webpack_require__.d(__webpack_exports__, "o", function() {
                return eventEmitter;
            });
            __webpack_require__.d(__webpack_exports__, "z", function() {
                return isPerc;
            });
            __webpack_require__.d(__webpack_exports__, "A", function() {
                return isPx;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return toNum;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return toPx;
            });
            __webpack_require__.d(__webpack_exports__, "Q", function() {
                return toCSS;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return percOf;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return normalizeDimension;
            });
            __webpack_require__.d(__webpack_exports__, "D", function() {
                return memoized;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return decorators_promise;
            });
            __webpack_require__.d(__webpack_exports__, "L", function() {
                return setLogLevel;
            });
            __webpack_require__.d(__webpack_exports__, "y", function() {
                return info;
            });
            __webpack_require__.d(__webpack_exports__, "S", function() {
                return warn;
            });
            __webpack_require__.d(__webpack_exports__, "n", function() {
                return logger_error;
            });
            __webpack_require__.d(__webpack_exports__, "v", function() {
                return globalFor;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return localGlobal;
            });
            __webpack_require__.d(__webpack_exports__, "u", function() {
                return global;
            });
        },
        "./src/types.js": function(module, exports) {}
    });
});
//# sourceMappingURL=zoid.frame.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../buffer/index.js */ "./node_modules/buffer/index.js").Buffer, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");

__webpack_require__(/*! core-js/modules/es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");

__webpack_require__(/*! core-js/modules/es6.object.to-string */ "./node_modules/core-js/modules/es6.object.to-string.js");

__webpack_require__(/*! core-js/modules/es6.object.keys */ "./node_modules/core-js/modules/es6.object.keys.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  reactComponent: true
};
Object.defineProperty(exports, "reactComponent", {
  enumerable: true,
  get: function get() {
    return _reactComponent.default;
  }
});

var _reactComponent = _interopRequireDefault(__webpack_require__(/*! ./reactComponent */ "./src/reactComponent.js"));

var _widgets = __webpack_require__(/*! ./widgets */ "./src/widgets.js");

Object.keys(_widgets).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _widgets[key];
    }
  });
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./src/reactComponent.js":
/*!*******************************!*\
  !*** ./src/reactComponent.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

__webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");

__webpack_require__(/*! core-js/modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");

__webpack_require__(/*! core-js/modules/es6.object.assign */ "./node_modules/core-js/modules/es6.object.assign.js");

__webpack_require__(/*! core-js/modules/es6.object.set-prototype-of */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");

var _widgets = __webpack_require__(/*! ./widgets */ "./src/widgets.js");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var reactComponent = function reactComponent(widgetUrl, deps, overrides) {
  return (
    /*#__PURE__*/
    function (_deps$React$Component) {
      _inherits(_class, _deps$React$Component);

      function _class(props) {
        var _this;

        _classCallCheck(this, _class);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(_class).call(this, props));
        _this.state = {
          component: null
        };
        return _this;
      }

      _createClass(_class, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          var _this2 = this;

          (0, _widgets.load)(widgetUrl, overrides).then(function (widget) {
            // copy dimensions so it will be picked up by zoid's render
            if (_this2.props.dimensions) {
              _extends(widget.dimensions, _this2.props.dimensions);
            } // convert widget into react component


            var component = widget.driver('react', deps); // monkey-patch zoid's react component to make it respect className

            component.prototype.render = function () {
              return deps.React.createElement('div', {
                className: _this2.props.className
              });
            };

            _this2.setState({
              component: component
            });
          }) // eslint-disable-next-line no-console
          .catch(function (err) {
            return console.error(err);
          });
        }
      }, {
        key: "render",
        value: function render() {
          var C = this.state.component;
          return C ? deps.React.createElement(C, this.props) : null;
        }
      }]);

      return _class;
    }(deps.React.Component)
  );
};

var _default = reactComponent;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/templates.js":
/*!**************************!*\
  !*** ./src/templates.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* @jsx jsxDom */
// what to show while loading (injected into iframe)
function defaultPrerenderTemplate(options) {
  // eslint-disable-next-line no-unused-vars
  var jsxDom = options.jsxDom; // duplicating core branding styles from https://cdn.antwerpen.be/core_branding_scss/3.0.3/main.css
  // for performance reasons

  return jsxDom("html", null, jsxDom("head", null, jsxDom("link", {
    rel: "stylesheet",
    href: "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
  }), jsxDom("style", null, "\n                      html, body {\n                        align-items: center;\n                        display: flex;\n                        justify-content: center;\n                        height: 100vh;\n                        padding: 0; \n                        margin: 0;\n                      }\n\n                      .a-spinner {\n                        color: #b0b0b0;\n                      }\n                      \n                      .a-spinner:before {\n                        -moz-osx-font-smoothing: grayscale;\n                        -webkit-font-smoothing: antialiased;\n                        font-size: inherit;\n                        font-family: FontAwesome;\n                        text-rendering: auto;\n                        animation: fa-spin 1200ms infinite linear;\n                        -webkit-animation: fa-spin 1200ms infinite linear;\n                        color: inherit;\n                        content: '\\f1ce';\n                        display: inline-block;\n                        font-size: 1.75rem;\n                      }\n                  ")), jsxDom("body", null, jsxDom("div", {
    class: "a-spinner"
  })));
}

module.exports = {
  defaultPrerenderTemplate: defaultPrerenderTemplate
};

/***/ }),

/***/ "./src/widgets.js":
/*!************************!*\
  !*** ./src/widgets.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.define = define;
exports.isDefined = isDefined;
exports.load = load;
exports.render = render;
exports.renderUrl = renderUrl;

__webpack_require__(/*! core-js/modules/es6.object.assign */ "./node_modules/core-js/modules/es6.object.assign.js");

__webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");

__webpack_require__(/*! core-js/modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");

__webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");

__webpack_require__(/*! core-js/modules/es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");

__webpack_require__(/*! core-js/modules/es6.object.to-string */ "./node_modules/core-js/modules/es6.object.to-string.js");

__webpack_require__(/*! core-js/modules/es7.object.values */ "./node_modules/core-js/modules/es7.object.values.js");

__webpack_require__(/*! core-js/modules/es6.regexp.split */ "./node_modules/core-js/modules/es6.regexp.split.js");

__webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");

var _zalgoPromise = __webpack_require__(/*! zalgo-promise */ "./node_modules/zalgo-promise/index.js");

var _zoid = _interopRequireDefault(__webpack_require__(/*! zoid/dist/zoid.frame */ "./node_modules/zoid/dist/zoid.frame.js"));

__webpack_require__(/*! url-polyfill */ "./node_modules/url-polyfill/url-polyfill.js");

var base32 = _interopRequireWildcard(__webpack_require__(/*! hi-base32 */ "./node_modules/hi-base32/src/base32.js"));

var _templates = __webpack_require__(/*! ./templates */ "./src/templates.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// registered widgets, indexed by tag
var widgets = {}; // maps url to promise of widget definition

var fetchedUrls = {}; // defaults applied to widget definitions

var widgetDefaults = {
  defaultLogLevel: 'warn',
  // show the ACPaaS UI spinner
  prerenderTemplate: _templates.defaultPrerenderTemplate,
  props: {
    // pass ?_aui_api_version=1 in the widget's URL to allow breaking API changes
    _aui_api_version: {
      type: 'string',
      required: false,
      defaultValue: '1',
      queryParam: true
    }
  }
};

function xhrGet(url) {
  return new _zalgoPromise.ZalgoPromise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('get', url);

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(xhr.responseText);
        } else {
          reject(new Error(xhr.statusText));
        }
      }
    };

    xhr.send();
  });
} // extract the overrides sent from the parent through window.name
// see render() for where they are sent


function getParentOverrides() {
  var meta;

  if (window.name) {
    var _window$name$split = window.name.split('__'),
        _window$name$split2 = _slicedToArray(_window$name$split, 4),
        zoidcomp = _window$name$split2[0],
        encodedOptions = _window$name$split2[3];

    if (zoidcomp === 'xcomponent') {
      try {
        meta = JSON.parse(base32.decode(encodedOptions.toUpperCase()));
      } catch (e) {
        /* */
      }
    }
  }

  return meta && meta.props && meta.props.value ? meta.props.value._aui_overrides : undefined;
}

function isAbsoluteUrl(url) {
  return /^(http(s)?:)?\/\//i.test(url);
}
/**
 * Returns whether a widget for the given tag is defined.
 * @param {string} tag The widget's tag
 */


function isDefined(tag) {
  return !!widgets[tag];
}
/**
 * Defines a widget from the given definition (typically loaded from JSON).
 * Use this only if you know what you're doing.
 * @param {object} definition The widget's definition
 */


function define(definition) {
  if (!definition.tag) {
    throw new Error('unable to define a widget without a tag');
  }

  var tag = definition.tag;

  if (widgets[tag]) {
    // zoid does not support defining a component with the same tag multiple times
    throw new Error("\"".concat(tag, "\" was defined previously"));
  } else {
    var options = _extends({}, widgetDefaults, definition);

    _extends(options.props, widgetDefaults.props, definition.props); // convert from JSON to zoid syntax


    if (options.props) {
      // @ts-ignore
      Object.values(options.props).forEach(function (prop) {
        if (prop.defaultValue) {
          if (typeof prop.defaultValue === 'function') {
            prop.def = prop.defaultValue;
          } else {
            prop.def = function () {
              return prop.defaultValue;
            };
          }
        }
      });
    }

    widgets[tag] = _zoid.default.create(options);
    return widgets[tag];
  }
}
/**
 * Load a widget definition from a url
 * @param {string} url The URL hosting the widget's JSON
 * @param {object=} overrides Overrides to apply to the JSON prior to defining the widget
 * @param {boolean=} force Force loading even if already loaded.
 *                        Use only if you know what you're doing.
 * @return Promise<object> Will return the widget definition object when loaded
 */


function load(url, overrides, force) {
  if (!url) return _zalgoPromise.ZalgoPromise.reject(new Error('must specify a url to load'));
  var loaded = fetchedUrls[url]; // don't load if already loading or loaded, unless forced

  if (!loaded || force) {
    // inherit overrides from parent if they exist
    var allOverrides = _extends({}, getParentOverrides(), overrides); // start loading and cache the promise


    fetchedUrls[url] = xhrGet(url).then(function (response) {
      var options = _extends(JSON.parse(response), allOverrides, {
        originalUrl: url
      });

      if (!options.url) throw new Error('required url property not set in widget JSON'); // convert relative URL's to absolute

      if (!isAbsoluteUrl(options.url)) {
        var baseUrl = isAbsoluteUrl(url) ? url : window.location.href;

        if (baseUrl.substr(0, 2) === '//') {
          baseUrl = (window.location.protocol || 'https:') + baseUrl;
        }

        options.url = new URL(options.url, baseUrl).href;
      }

      var definition = define(options);
      fetchedUrls[url] = definition;
      definition.overrides = overrides;
      return definition;
    });
  }

  return _zalgoPromise.ZalgoPromise.resolve(fetchedUrls[url]);
}
/**
 * Render a widget that was previously loaded
 * @param {string|object} tag A handle to the widget component, or the widget's tag.
 * @param {object} props The props to render the widget with
 * @param {HTMLElement} elem The element to render the widget to
 */


function render(tag, props, elem) {
  if (!tag || !tag.render && !widgets[tag]) {
    throw new Error("unable to render, widget \"".concat(tag, "\" is not loaded yet"));
  }

  var component = tag.render ? tag : widgets[tag];

  if (props && props.dimensions) {
    _extends(component.dimensions, props.dimensions);
  }

  var extendedProps = _extends({
    // pass overrides from parent to child
    _aui_overrides: component.overrides
  }, props);

  return component.render(extendedProps, elem);
}
/**
 * Render the widget hosted at a specific URL, loading it if needed
 * @param {string} url The URL hosting the widget's JSON
 * @param {object} props The props to render the widget with
 * @param {HTMLElement} elem The element to render the widget to
 * @param {object=} overrides The overrides to apply to the loaded JSON.
 *                      Loading occurs only once, so these are applied once per page.
 * @param {boolean=} force Force loading even if already loaded.
 *                      Use only if you know what you're doing.
 */


function renderUrl(url, props, elem, overrides, force) {
  return load(url, overrides, force).then(function (widget) {
    return render(widget, props, elem);
  });
}

/***/ })

/******/ });
});
//# sourceMappingURL=aui-embeddable-widgets.js.map