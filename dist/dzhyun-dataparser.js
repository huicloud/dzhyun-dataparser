(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["DzhyunDataParser"] = factory();
	else
		root["DzhyunDataParser"] = factory();
})(this, function() {
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 37);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Various utility functions.
 * @namespace
 */
var util = module.exports = __webpack_require__(2);

util.codegen = __webpack_require__(30);
util.fetch   = __webpack_require__(32);
util.path    = __webpack_require__(34);

/**
 * Node's fs module if available.
 * @type {Object.<string,*>}
 */
util.fs = util.inquire("fs");

/**
 * Converts an object's values to an array.
 * @param {Object.<string,*>} object Object to convert
 * @returns {Array.<*>} Converted array
 */
util.toArray = function toArray(object) {
    var array = [];
    if (object)
        for (var keys = Object.keys(object), i = 0; i < keys.length; ++i)
            array.push(object[keys[i]]);
    return array;
};

var safePropBackslashRe = /\\/g,
    safePropQuoteRe     = /"/g;

/**
 * Returns a safe property accessor for the specified properly name.
 * @param {string} prop Property name
 * @returns {string} Safe accessor
 */
util.safeProp = function safeProp(prop) {
    return "[\"" + prop.replace(safePropBackslashRe, "\\\\").replace(safePropQuoteRe, "\\\"") + "\"]";
};

/**
 * Converts the first character of a string to upper case.
 * @param {string} str String to convert
 * @returns {string} Converted string
 */
util.ucFirst = function ucFirst(str) {
    return str.charAt(0).toUpperCase() + str.substring(1);
};

/**
 * Compares reflected fields by id.
 * @param {Field} a First field
 * @param {Field} b Second field
 * @returns {number} Comparison value
 */
util.compareFieldsById = function compareFieldsById(a, b) {
    return a.id - b.id;
};


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = Enum;

// extends ReflectionObject
var ReflectionObject = __webpack_require__(4);
((Enum.prototype = Object.create(ReflectionObject.prototype)).constructor = Enum).className = "Enum";

var util = __webpack_require__(0);

/**
 * Constructs a new enum instance.
 * @classdesc Reflected enum.
 * @extends ReflectionObject
 * @constructor
 * @param {string} name Unique name within its namespace
 * @param {Object.<string,number>} [values] Enum values as an object, by name
 * @param {Object.<string,*>} [options] Declared options
 */
function Enum(name, values, options) {
    ReflectionObject.call(this, name, options);

    if (values && typeof values !== "object")
        throw TypeError("values must be an object");

    /**
     * Enum values by id.
     * @type {Object.<number,string>}
     */
    this.valuesById = {};

    /**
     * Enum values by name.
     * @type {Object.<string,number>}
     */
    this.values = Object.create(this.valuesById); // toJSON, marker

    /**
     * Value comment texts, if any.
     * @type {Object.<string,string>}
     */
    this.comments = {};

    // Note that values inherit valuesById on their prototype which makes them a TypeScript-
    // compatible enum. This is used by pbts to write actual enum definitions that work for
    // static and reflection code alike instead of emitting generic object definitions.

    if (values)
        for (var keys = Object.keys(values), i = 0; i < keys.length; ++i)
            this.valuesById[ this.values[keys[i]] = values[keys[i]] ] = keys[i];
}

/**
 * Enum descriptor.
 * @typedef EnumDescriptor
 * @type {Object}
 * @property {Object.<string,number>} values Enum values
 * @property {Object.<string,*>} [options] Enum options
 */

/**
 * Constructs an enum from an enum descriptor.
 * @param {string} name Enum name
 * @param {EnumDescriptor} json Enum descriptor
 * @returns {Enum} Created enum
 * @throws {TypeError} If arguments are invalid
 */
Enum.fromJSON = function fromJSON(name, json) {
    return new Enum(name, json.values, json.options);
};

/**
 * Converts this enum to an enum descriptor.
 * @returns {EnumDescriptor} Enum descriptor
 */
Enum.prototype.toJSON = function toJSON() {
    return {
        options : this.options,
        values  : this.values
    };
};

/**
 * Adds a value to this enum.
 * @param {string} name Value name
 * @param {number} id Value id
 * @param {?string} comment Comment, if any
 * @returns {Enum} `this`
 * @throws {TypeError} If arguments are invalid
 * @throws {Error} If there is already a value with this name or id
 */
Enum.prototype.add = function(name, id, comment) {
    // utilized by the parser but not by .fromJSON

    if (!util.isString(name))
        throw TypeError("name must be a string");

    if (!util.isInteger(id))
        throw TypeError("id must be an integer");

    if (this.values[name] !== undefined)
        throw Error("duplicate name");

    if (this.valuesById[id] !== undefined) {
        if (!(this.options && this.options.allow_alias))
            throw Error("duplicate id");
        this.values[name] = id;
    } else
        this.valuesById[this.values[name] = id] = name;

    this.comments[name] = comment || null;
    return this;
};

/**
 * Removes a value from this enum
 * @param {string} name Value name
 * @returns {Enum} `this`
 * @throws {TypeError} If arguments are invalid
 * @throws {Error} If `name` is not a name of this enum
 */
Enum.prototype.remove = function(name) {

    if (!util.isString(name))
        throw TypeError("name must be a string");

    var val = this.values[name];
    if (val === undefined)
        throw Error("name does not exist");

    delete this.valuesById[val];
    delete this.values[name];
    delete this.comments[name];

    return this;
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
var util = exports;

// used to return a Promise where callback is omitted
util.asPromise = __webpack_require__(13);

// converts to / from base64 encoded strings
util.base64 = __webpack_require__(29);

// base class of rpc.Service
util.EventEmitter = __webpack_require__(31);

// float handling accross browsers
util.float = __webpack_require__(33);

// requires modules optionally and hides the call from bundlers
util.inquire = __webpack_require__(14);

// converts to / from utf8 encoded strings
util.utf8 = __webpack_require__(36);

// provides a node-like buffer pool in the browser
util.pool = __webpack_require__(35);

// utility to work with the low and high bits of a 64 bit value
util.LongBits = __webpack_require__(45);

/**
 * An immuable empty array.
 * @memberof util
 * @type {Array.<*>}
 * @const
 */
util.emptyArray = Object.freeze ? Object.freeze([]) : /* istanbul ignore next */ []; // used on prototypes

/**
 * An immutable empty object.
 * @type {Object}
 * @const
 */
util.emptyObject = Object.freeze ? Object.freeze({}) : /* istanbul ignore next */ {}; // used on prototypes

/**
 * Whether running within node or not.
 * @memberof util
 * @type {boolean}
 * @const
 */
util.isNode = Boolean(global.process && global.process.versions && global.process.versions.node);

/**
 * Tests if the specified value is an integer.
 * @function
 * @param {*} value Value to test
 * @returns {boolean} `true` if the value is an integer
 */
util.isInteger = Number.isInteger || /* istanbul ignore next */ function isInteger(value) {
    return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
};

/**
 * Tests if the specified value is a string.
 * @param {*} value Value to test
 * @returns {boolean} `true` if the value is a string
 */
util.isString = function isString(value) {
    return typeof value === "string" || value instanceof String;
};

/**
 * Tests if the specified value is a non-null object.
 * @param {*} value Value to test
 * @returns {boolean} `true` if the value is a non-null object
 */
util.isObject = function isObject(value) {
    return value && typeof value === "object";
};

/**
 * Checks if a property on a message is considered to be present.
 * This is an alias of {@link util.isSet}.
 * @function
 * @param {Object} obj Plain object or message instance
 * @param {string} prop Property name
 * @returns {boolean} `true` if considered to be present, otherwise `false`
 */
util.isset =

/**
 * Checks if a property on a message is considered to be present.
 * @param {Object} obj Plain object or message instance
 * @param {string} prop Property name
 * @returns {boolean} `true` if considered to be present, otherwise `false`
 */
util.isSet = function isSet(obj, prop) {
    var value = obj[prop];
    if (value != null && obj.hasOwnProperty(prop)) // eslint-disable-line eqeqeq, no-prototype-builtins
        return typeof value !== "object" || (Array.isArray(value) ? value.length : Object.keys(value).length) > 0;
    return false;
};

/*
 * Any compatible Buffer instance.
 * This is a minimal stand-alone definition of a Buffer instance. The actual type is that exported by node's typings.
 * @typedef Buffer
 * @type {Uint8Array}
 */

/**
 * Node's Buffer class if available.
 * @type {?function(new: Buffer)}
 */
util.Buffer = (function() {
    try {
        var Buffer = util.inquire("buffer").Buffer;
        // refuse to use non-node buffers if not explicitly assigned (perf reasons):
        return Buffer.prototype.utf8Write ? Buffer : /* istanbul ignore next */ null;
    } catch (e) {
        /* istanbul ignore next */
        return null;
    }
})();

/**
 * Internal alias of or polyfull for Buffer.from.
 * @type {?function}
 * @param {string|number[]} value Value
 * @param {string} [encoding] Encoding if value is a string
 * @returns {Uint8Array}
 * @private
 */
util._Buffer_from = null;

/**
 * Internal alias of or polyfill for Buffer.allocUnsafe.
 * @type {?function}
 * @param {number} size Buffer size
 * @returns {Uint8Array}
 * @private
 */
util._Buffer_allocUnsafe = null;

/**
 * Creates a new buffer of whatever type supported by the environment.
 * @param {number|number[]} [sizeOrArray=0] Buffer size or number array
 * @returns {Uint8Array|Buffer} Buffer
 */
util.newBuffer = function newBuffer(sizeOrArray) {
    /* istanbul ignore next */
    return typeof sizeOrArray === "number"
        ? util.Buffer
            ? util._Buffer_allocUnsafe(sizeOrArray)
            : new util.Array(sizeOrArray)
        : util.Buffer
            ? util._Buffer_from(sizeOrArray)
            : typeof Uint8Array === "undefined"
                ? sizeOrArray
                : new Uint8Array(sizeOrArray);
};

/**
 * Array implementation used in the browser. `Uint8Array` if supported, otherwise `Array`.
 * @type {?function(new: Uint8Array, *)}
 */
util.Array = typeof Uint8Array !== "undefined" ? Uint8Array /* istanbul ignore next */ : Array;

/*
 * Any compatible Long instance.
 * This is a minimal stand-alone definition of a Long instance. The actual type is that exported by long.js.
 * @typedef Long
 * @type {Object}
 * @property {number} low Low bits
 * @property {number} high High bits
 * @property {boolean} unsigned Whether unsigned or not
 */

/**
 * Long.js's Long class if available.
 * @type {?function(new: Long)}
 */
util.Long = /* istanbul ignore next */ global.dcodeIO && /* istanbul ignore next */ global.dcodeIO.Long || util.inquire("long");

/**
 * Regular expression used to verify 2 bit (`bool`) map keys.
 * @type {RegExp}
 * @const
 */
util.key2Re = /^true|false|0|1$/;

/**
 * Regular expression used to verify 32 bit (`int32` etc.) map keys.
 * @type {RegExp}
 * @const
 */
util.key32Re = /^-?(?:0|[1-9][0-9]*)$/;

/**
 * Regular expression used to verify 64 bit (`int64` etc.) map keys.
 * @type {RegExp}
 * @const
 */
util.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/;

/**
 * Converts a number or long to an 8 characters long hash string.
 * @param {Long|number} value Value to convert
 * @returns {string} Hash
 */
util.longToHash = function longToHash(value) {
    return value
        ? util.LongBits.from(value).toHash()
        : util.LongBits.zeroHash;
};

/**
 * Converts an 8 characters long hash string to a long or number.
 * @param {string} hash Hash
 * @param {boolean} [unsigned=false] Whether unsigned or not
 * @returns {Long|number} Original value
 */
util.longFromHash = function longFromHash(hash, unsigned) {
    var bits = util.LongBits.fromHash(hash);
    if (util.Long)
        return util.Long.fromBits(bits.lo, bits.hi, unsigned);
    return bits.toNumber(Boolean(unsigned));
};

/**
 * Merges the properties of the source object into the destination object.
 * @memberof util
 * @param {Object.<string,*>} dst Destination object
 * @param {Object.<string,*>} src Source object
 * @param {boolean} [ifNotSet=false] Merges only if the key is not already set
 * @returns {Object.<string,*>} Destination object
 */
function merge(dst, src, ifNotSet) { // used by converters
    for (var keys = Object.keys(src), i = 0; i < keys.length; ++i)
        if (dst[keys[i]] === undefined || !ifNotSet)
            dst[keys[i]] = src[keys[i]];
    return dst;
}

util.merge = merge;

/**
 * Converts the first character of a string to lower case.
 * @param {string} str String to convert
 * @returns {string} Converted string
 */
util.lcFirst = function lcFirst(str) {
    return str.charAt(0).toLowerCase() + str.substring(1);
};

/**
 * Creates a custom error constructor.
 * @memberof util
 * @param {string} name Error name
 * @returns {function} Custom error constructor
 */
function newError(name) {

    function CustomError(message, properties) {

        if (!(this instanceof CustomError))
            return new CustomError(message, properties);

        // Error.call(this, message);
        // ^ just returns a new error instance because the ctor can be called as a function

        Object.defineProperty(this, "message", { get: function() { return message; } });

        /* istanbul ignore next */
        if (Error.captureStackTrace) // node
            Error.captureStackTrace(this, CustomError);
        else
            Object.defineProperty(this, "stack", { value: (new Error()).stack || "" });

        if (properties)
            merge(this, properties);
    }

    (CustomError.prototype = Object.create(Error.prototype)).constructor = CustomError;

    Object.defineProperty(CustomError.prototype, "name", { get: function() { return name; } });

    CustomError.prototype.toString = function toString() {
        return this.name + ": " + this.message;
    };

    return CustomError;
}

util.newError = newError;

/**
 * Constructs a new protocol error.
 * @classdesc Error subclass indicating a protocol specifc error.
 * @memberof util
 * @extends Error
 * @constructor
 * @param {string} message Error message
 * @param {Object.<string,*>=} properties Additional properties
 * @example
 * try {
 *     MyMessage.decode(someBuffer); // throws if required fields are missing
 * } catch (e) {
 *     if (e instanceof ProtocolError && e.instance)
 *         console.log("decoded so far: " + JSON.stringify(e.instance));
 * }
 */
util.ProtocolError = newError("ProtocolError");

/**
 * So far decoded message instance.
 * @name util.ProtocolError#instance
 * @type {Message}
 */

/**
 * Builds a getter for a oneof's present field name.
 * @param {string[]} fieldNames Field names
 * @returns {function():string|undefined} Unbound getter
 */
util.oneOfGetter = function getOneOf(fieldNames) {
    var fieldMap = {};
    for (var i = 0; i < fieldNames.length; ++i)
        fieldMap[fieldNames[i]] = 1;

    /**
     * @returns {string|undefined} Set field name, if any
     * @this Object
     * @ignore
     */
    return function() { // eslint-disable-line consistent-return
        for (var keys = Object.keys(this), i = keys.length - 1; i > -1; --i)
            if (fieldMap[keys[i]] === 1 && this[keys[i]] !== undefined && this[keys[i]] !== null)
                return keys[i];
    };
};

/**
 * Builds a setter for a oneof's present field name.
 * @param {string[]} fieldNames Field names
 * @returns {function(?string):undefined} Unbound setter
 */
util.oneOfSetter = function setOneOf(fieldNames) {

    /**
     * @param {string} name Field name
     * @returns {undefined}
     * @this Object
     * @ignore
     */
    return function(name) {
        for (var i = 0; i < fieldNames.length; ++i)
            if (fieldNames[i] !== name)
                delete this[fieldNames[i]];
    };
};

/* istanbul ignore next */
/**
 * Lazily resolves fully qualified type names against the specified root.
 * @param {Root} root Root instanceof
 * @param {Object.<number,string|ReflectionObject>} lazyTypes Type names
 * @returns {undefined}
 * @deprecated since 6.7.0 static code does not emit lazy types anymore
 */
util.lazyResolve = function lazyResolve(root, lazyTypes) {
    for (var i = 0; i < lazyTypes.length; ++i) {
        for (var keys = Object.keys(lazyTypes[i]), j = 0; j < keys.length; ++j) {
            var path = lazyTypes[i][keys[j]].split("."),
                ptr  = root;
            while (path.length)
                ptr = ptr[path.shift()];
            lazyTypes[i][keys[j]] = ptr;
        }
    }
};

/**
 * Default conversion options used for {@link Message#toJSON} implementations. Longs, enums and bytes are converted to strings by default.
 * @type {ConversionOptions}
 */
util.toJSONOptions = {
    longs: String,
    enums: String,
    bytes: String
};

util._configure = function() {
    var Buffer = util.Buffer;
    /* istanbul ignore if */
    if (!Buffer) {
        util._Buffer_from = util._Buffer_allocUnsafe = null;
        return;
    }
    // because node 4.x buffers are incompatible & immutable
    // see: https://github.com/dcodeIO/protobuf.js/pull/665
    util._Buffer_from = Buffer.from !== Uint8Array.from && Buffer.from ||
        /* istanbul ignore next */
        function Buffer_from(value, encoding) {
            return new Buffer(value, encoding);
        };
    util._Buffer_allocUnsafe = Buffer.allocUnsafe ||
        /* istanbul ignore next */
        function Buffer_allocUnsafe(size) {
            return new Buffer(size);
        };
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(48)))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = Field;

// extends ReflectionObject
var ReflectionObject = __webpack_require__(4);
((Field.prototype = Object.create(ReflectionObject.prototype)).constructor = Field).className = "Field";

var Enum  = __webpack_require__(1),
    types = __webpack_require__(5),
    util  = __webpack_require__(0);

var Type; // cyclic

var ruleRe = /^required|optional|repeated$/;

/**
 * Constructs a new message field instance. Note that {@link MapField|map fields} have their own class.
 * @classdesc Reflected message field.
 * @extends ReflectionObject
 * @constructor
 * @param {string} name Unique name within its namespace
 * @param {number} id Unique id within its namespace
 * @param {string} type Value type
 * @param {string|Object.<string,*>} [rule="optional"] Field rule
 * @param {string|Object.<string,*>} [extend] Extended type if different from parent
 * @param {Object.<string,*>} [options] Declared options
 */
function Field(name, id, type, rule, extend, options) {

    if (util.isObject(rule)) {
        options = rule;
        rule = extend = undefined;
    } else if (util.isObject(extend)) {
        options = extend;
        extend = undefined;
    }

    ReflectionObject.call(this, name, options);

    if (!util.isInteger(id) || id < 0)
        throw TypeError("id must be a non-negative integer");

    if (!util.isString(type))
        throw TypeError("type must be a string");

    if (rule !== undefined && !ruleRe.test(rule = rule.toString().toLowerCase()))
        throw TypeError("rule must be a string rule");

    if (extend !== undefined && !util.isString(extend))
        throw TypeError("extend must be a string");

    /**
     * Field rule, if any.
     * @type {string|undefined}
     */
    this.rule = rule && rule !== "optional" ? rule : undefined; // toJSON

    /**
     * Field type.
     * @type {string}
     */
    this.type = type; // toJSON

    /**
     * Unique field id.
     * @type {number}
     */
    this.id = id; // toJSON, marker

    /**
     * Extended type if different from parent.
     * @type {string|undefined}
     */
    this.extend = extend || undefined; // toJSON

    /**
     * Whether this field is required.
     * @type {boolean}
     */
    this.required = rule === "required";

    /**
     * Whether this field is optional.
     * @type {boolean}
     */
    this.optional = !this.required;

    /**
     * Whether this field is repeated.
     * @type {boolean}
     */
    this.repeated = rule === "repeated";

    /**
     * Whether this field is a map or not.
     * @type {boolean}
     */
    this.map = false;

    /**
     * Message this field belongs to.
     * @type {?Type}
     */
    this.message = null;

    /**
     * OneOf this field belongs to, if any,
     * @type {?OneOf}
     */
    this.partOf = null;

    /**
     * The field type's default value.
     * @type {*}
     */
    this.typeDefault = null;

    /**
     * The field's default value on prototypes.
     * @type {*}
     */
    this.defaultValue = null;

    /**
     * Whether this field's value should be treated as a long.
     * @type {boolean}
     */
    this.long = util.Long ? types.long[type] !== undefined : /* istanbul ignore next */ false;

    /**
     * Whether this field's value is a buffer.
     * @type {boolean}
     */
    this.bytes = type === "bytes";

    /**
     * Resolved type if not a basic type.
     * @type {?(Type|Enum)}
     */
    this.resolvedType = null;

    /**
     * Sister-field within the extended type if a declaring extension field.
     * @type {?Field}
     */
    this.extensionField = null;

    /**
     * Sister-field within the declaring namespace if an extended field.
     * @type {?Field}
     */
    this.declaringField = null;

    /**
     * Internally remembers whether this field is packed.
     * @type {?boolean}
     * @private
     */
    this._packed = null;
}

/**
 * Determines whether this field is packed. Only relevant when repeated and working with proto2.
 * @name Field#packed
 * @type {boolean}
 * @readonly
 */
Object.defineProperty(Field.prototype, "packed", {
    get: function() {
        // defaults to packed=true if not explicity set to false
        if (this._packed === null)
            this._packed = this.getOption("packed") !== false;
        return this._packed;
    }
});

/**
 * @override
 */
Field.prototype.setOption = function setOption(name, value, ifNotSet) {
    if (name === "packed") // clear cached before setting
        this._packed = null;
    return ReflectionObject.prototype.setOption.call(this, name, value, ifNotSet);
};

/**
 * Field descriptor.
 * @typedef FieldDescriptor
 * @type {Object}
 * @property {string} [rule="optional"] Field rule
 * @property {string} type Field type
 * @property {number} id Field id
 * @property {Object.<string,*>} [options] Field options
 */

/**
 * Extension field descriptor.
 * @typedef ExtensionFieldDescriptor
 * @type {Object}
 * @property {string} [rule="optional"] Field rule
 * @property {string} type Field type
 * @property {number} id Field id
 * @property {string} extend Extended type
 * @property {Object.<string,*>} [options] Field options
 */

/**
 * Constructs a field from a field descriptor.
 * @param {string} name Field name
 * @param {FieldDescriptor} json Field descriptor
 * @returns {Field} Created field
 * @throws {TypeError} If arguments are invalid
 */
Field.fromJSON = function fromJSON(name, json) {
    return new Field(name, json.id, json.type, json.rule, json.extend, json.options);
};

/**
 * Converts this field to a field descriptor.
 * @returns {FieldDescriptor} Field descriptor
 */
Field.prototype.toJSON = function toJSON() {
    return {
        rule    : this.rule !== "optional" && this.rule || undefined,
        type    : this.type,
        id      : this.id,
        extend  : this.extend,
        options : this.options
    };
};

/**
 * Resolves this field's type references.
 * @returns {Field} `this`
 * @throws {Error} If any reference cannot be resolved
 */
Field.prototype.resolve = function resolve() {

    if (this.resolved)
        return this;

    if ((this.typeDefault = types.defaults[this.type]) === undefined) { // if not a basic type, resolve it

        /* istanbul ignore if */
        if (!Type)
            Type = __webpack_require__(11);

        this.resolvedType = (this.declaringField ? this.declaringField.parent : this.parent).lookupTypeOrEnum(this.type);
        if (this.resolvedType instanceof Type)
            this.typeDefault = null;
        else // instanceof Enum
            this.typeDefault = this.resolvedType.values[Object.keys(this.resolvedType.values)[0]]; // first defined
    }

    // use explicitly set default value if present
    if (this.options && this.options["default"] !== undefined) {
        this.typeDefault = this.options["default"];
        if (this.resolvedType instanceof Enum && typeof this.typeDefault === "string")
            this.typeDefault = this.resolvedType.values[this.typeDefault];
    }

    // remove unnecessary packed option (parser adds this) if not referencing an enum
    if (this.options && this.options.packed !== undefined && this.resolvedType && !(this.resolvedType instanceof Enum))
        delete this.options.packed;

    // convert to internal data type if necesssary
    if (this.long) {
        this.typeDefault = util.Long.fromNumber(this.typeDefault, this.type.charAt(0) === "u");

        /* istanbul ignore else */
        if (Object.freeze)
            Object.freeze(this.typeDefault); // long instances are meant to be immutable anyway (i.e. use small int cache that even requires it)

    } else if (this.bytes && typeof this.typeDefault === "string") {
        var buf;
        if (util.base64.test(this.typeDefault))
            util.base64.decode(this.typeDefault, buf = util.newBuffer(util.base64.length(this.typeDefault)), 0);
        else
            util.utf8.write(this.typeDefault, buf = util.newBuffer(util.utf8.length(this.typeDefault)), 0);
        this.typeDefault = buf;
    }

    // take special care of maps and repeated fields
    if (this.map)
        this.defaultValue = util.emptyObject;
    else if (this.repeated)
        this.defaultValue = util.emptyArray;
    else
        this.defaultValue = this.typeDefault;

    return ReflectionObject.prototype.resolve.call(this);
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = ReflectionObject;

ReflectionObject.className = "ReflectionObject";

var util = __webpack_require__(0);

var Root; // cyclic

/**
 * Constructs a new reflection object instance.
 * @classdesc Base class of all reflection objects.
 * @constructor
 * @param {string} name Object name
 * @param {Object.<string,*>} [options] Declared options
 * @abstract
 */
function ReflectionObject(name, options) {

    if (!util.isString(name))
        throw TypeError("name must be a string");

    if (options && !util.isObject(options))
        throw TypeError("options must be an object");

    /**
     * Options.
     * @type {Object.<string,*>|undefined}
     */
    this.options = options; // toJSON

    /**
     * Unique name within its namespace.
     * @type {string}
     */
    this.name = name;

    /**
     * Parent namespace.
     * @type {?Namespace}
     */
    this.parent = null;

    /**
     * Whether already resolved or not.
     * @type {boolean}
     */
    this.resolved = false;

    /**
     * Comment text, if any.
     * @type {?string}
     */
    this.comment = null;

    /**
     * Defining file name.
     * @type {?string}
     */
    this.filename = null;
}

Object.defineProperties(ReflectionObject.prototype, {

    /**
     * Reference to the root namespace.
     * @name ReflectionObject#root
     * @type {Root}
     * @readonly
     */
    root: {
        get: function() {
            var ptr = this;
            while (ptr.parent !== null)
                ptr = ptr.parent;
            return ptr;
        }
    },

    /**
     * Full name including leading dot.
     * @name ReflectionObject#fullName
     * @type {string}
     * @readonly
     */
    fullName: {
        get: function() {
            var path = [ this.name ],
                ptr = this.parent;
            while (ptr) {
                path.unshift(ptr.name);
                ptr = ptr.parent;
            }
            return path.join(".");
        }
    }
});

/**
 * Converts this reflection object to its descriptor representation.
 * @returns {Object.<string,*>} Descriptor
 * @abstract
 */
ReflectionObject.prototype.toJSON = /* istanbul ignore next */ function toJSON() {
    throw Error(); // not implemented, shouldn't happen
};

/**
 * Called when this object is added to a parent.
 * @param {ReflectionObject} parent Parent added to
 * @returns {undefined}
 */
ReflectionObject.prototype.onAdd = function onAdd(parent) {
    if (this.parent && this.parent !== parent)
        this.parent.remove(this);
    this.parent = parent;
    this.resolved = false;
    var root = parent.root;
    if (root instanceof Root)
        root._handleAdd(this);
};

/**
 * Called when this object is removed from a parent.
 * @param {ReflectionObject} parent Parent removed from
 * @returns {undefined}
 */
ReflectionObject.prototype.onRemove = function onRemove(parent) {
    var root = parent.root;
    if (root instanceof Root)
        root._handleRemove(this);
    this.parent = null;
    this.resolved = false;
};

/**
 * Resolves this objects type references.
 * @returns {ReflectionObject} `this`
 */
ReflectionObject.prototype.resolve = function resolve() {
    if (this.resolved)
        return this;
    if (this.root instanceof Root)
        this.resolved = true; // only if part of a root
    return this;
};

/**
 * Gets an option value.
 * @param {string} name Option name
 * @returns {*} Option value or `undefined` if not set
 */
ReflectionObject.prototype.getOption = function getOption(name) {
    if (this.options)
        return this.options[name];
    return undefined;
};

/**
 * Sets an option.
 * @param {string} name Option name
 * @param {*} value Option value
 * @param {boolean} [ifNotSet] Sets the option only if it isn't currently set
 * @returns {ReflectionObject} `this`
 */
ReflectionObject.prototype.setOption = function setOption(name, value, ifNotSet) {
    if (!ifNotSet || !this.options || this.options[name] === undefined)
        (this.options || (this.options = {}))[name] = value;
    return this;
};

/**
 * Sets multiple options.
 * @param {Object.<string,*>} options Options to set
 * @param {boolean} [ifNotSet] Sets an option only if it isn't currently set
 * @returns {ReflectionObject} `this`
 */
ReflectionObject.prototype.setOptions = function setOptions(options, ifNotSet) {
    if (options)
        for (var keys = Object.keys(options), i = 0; i < keys.length; ++i)
            this.setOption(keys[i], options[keys[i]], ifNotSet);
    return this;
};

/**
 * Converts this instance to its string representation.
 * @returns {string} Class name[, space, full name]
 */
ReflectionObject.prototype.toString = function toString() {
    var className = this.constructor.className,
        fullName  = this.fullName;
    if (fullName.length)
        return className + " " + fullName;
    return className;
};

ReflectionObject._configure = function(Root_) {
    Root = Root_;
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Common type constants.
 * @namespace
 */
var types = exports;

var util = __webpack_require__(0);

var s = [
    "double",   // 0
    "float",    // 1
    "int32",    // 2
    "uint32",   // 3
    "sint32",   // 4
    "fixed32",  // 5
    "sfixed32", // 6
    "int64",    // 7
    "uint64",   // 8
    "sint64",   // 9
    "fixed64",  // 10
    "sfixed64", // 11
    "bool",     // 12
    "string",   // 13
    "bytes"     // 14
];

function bake(values, offset) {
    var i = 0, o = {};
    offset |= 0;
    while (i < values.length) o[s[i + offset]] = values[i++];
    return o;
}

/**
 * Basic type wire types.
 * @type {Object.<string,number>}
 * @const
 * @property {number} double=1 Fixed64 wire type
 * @property {number} float=5 Fixed32 wire type
 * @property {number} int32=0 Varint wire type
 * @property {number} uint32=0 Varint wire type
 * @property {number} sint32=0 Varint wire type
 * @property {number} fixed32=5 Fixed32 wire type
 * @property {number} sfixed32=5 Fixed32 wire type
 * @property {number} int64=0 Varint wire type
 * @property {number} uint64=0 Varint wire type
 * @property {number} sint64=0 Varint wire type
 * @property {number} fixed64=1 Fixed64 wire type
 * @property {number} sfixed64=1 Fixed64 wire type
 * @property {number} bool=0 Varint wire type
 * @property {number} string=2 Ldelim wire type
 * @property {number} bytes=2 Ldelim wire type
 */
types.basic = bake([
    /* double   */ 1,
    /* float    */ 5,
    /* int32    */ 0,
    /* uint32   */ 0,
    /* sint32   */ 0,
    /* fixed32  */ 5,
    /* sfixed32 */ 5,
    /* int64    */ 0,
    /* uint64   */ 0,
    /* sint64   */ 0,
    /* fixed64  */ 1,
    /* sfixed64 */ 1,
    /* bool     */ 0,
    /* string   */ 2,
    /* bytes    */ 2
]);

/**
 * Basic type defaults.
 * @type {Object.<string,*>}
 * @const
 * @property {number} double=0 Double default
 * @property {number} float=0 Float default
 * @property {number} int32=0 Int32 default
 * @property {number} uint32=0 Uint32 default
 * @property {number} sint32=0 Sint32 default
 * @property {number} fixed32=0 Fixed32 default
 * @property {number} sfixed32=0 Sfixed32 default
 * @property {number} int64=0 Int64 default
 * @property {number} uint64=0 Uint64 default
 * @property {number} sint64=0 Sint32 default
 * @property {number} fixed64=0 Fixed64 default
 * @property {number} sfixed64=0 Sfixed64 default
 * @property {boolean} bool=false Bool default
 * @property {string} string="" String default
 * @property {Array.<number>} bytes=Array(0) Bytes default
 * @property {Message} message=null Message default
 */
types.defaults = bake([
    /* double   */ 0,
    /* float    */ 0,
    /* int32    */ 0,
    /* uint32   */ 0,
    /* sint32   */ 0,
    /* fixed32  */ 0,
    /* sfixed32 */ 0,
    /* int64    */ 0,
    /* uint64   */ 0,
    /* sint64   */ 0,
    /* fixed64  */ 0,
    /* sfixed64 */ 0,
    /* bool     */ false,
    /* string   */ "",
    /* bytes    */ util.emptyArray,
    /* message  */ null
]);

/**
 * Basic long type wire types.
 * @type {Object.<string,number>}
 * @const
 * @property {number} int64=0 Varint wire type
 * @property {number} uint64=0 Varint wire type
 * @property {number} sint64=0 Varint wire type
 * @property {number} fixed64=1 Fixed64 wire type
 * @property {number} sfixed64=1 Fixed64 wire type
 */
types.long = bake([
    /* int64    */ 0,
    /* uint64   */ 0,
    /* sint64   */ 0,
    /* fixed64  */ 1,
    /* sfixed64 */ 1
], 7);

/**
 * Allowed types for map keys with their associated wire type.
 * @type {Object.<string,number>}
 * @const
 * @property {number} int32=0 Varint wire type
 * @property {number} uint32=0 Varint wire type
 * @property {number} sint32=0 Varint wire type
 * @property {number} fixed32=5 Fixed32 wire type
 * @property {number} sfixed32=5 Fixed32 wire type
 * @property {number} int64=0 Varint wire type
 * @property {number} uint64=0 Varint wire type
 * @property {number} sint64=0 Varint wire type
 * @property {number} fixed64=1 Fixed64 wire type
 * @property {number} sfixed64=1 Fixed64 wire type
 * @property {number} bool=0 Varint wire type
 * @property {number} string=2 Ldelim wire type
 */
types.mapKey = bake([
    /* int32    */ 0,
    /* uint32   */ 0,
    /* sint32   */ 0,
    /* fixed32  */ 5,
    /* sfixed32 */ 5,
    /* int64    */ 0,
    /* uint64   */ 0,
    /* sint64   */ 0,
    /* fixed64  */ 1,
    /* sfixed64 */ 1,
    /* bool     */ 0,
    /* string   */ 2
], 2);

/**
 * Allowed types for packed repeated fields with their associated wire type.
 * @type {Object.<string,number>}
 * @const
 * @property {number} double=1 Fixed64 wire type
 * @property {number} float=5 Fixed32 wire type
 * @property {number} int32=0 Varint wire type
 * @property {number} uint32=0 Varint wire type
 * @property {number} sint32=0 Varint wire type
 * @property {number} fixed32=5 Fixed32 wire type
 * @property {number} sfixed32=5 Fixed32 wire type
 * @property {number} int64=0 Varint wire type
 * @property {number} uint64=0 Varint wire type
 * @property {number} sint64=0 Varint wire type
 * @property {number} fixed64=1 Fixed64 wire type
 * @property {number} sfixed64=1 Fixed64 wire type
 * @property {number} bool=0 Varint wire type
 */
types.packed = bake([
    /* double   */ 1,
    /* float    */ 5,
    /* int32    */ 0,
    /* uint32   */ 0,
    /* sint32   */ 0,
    /* fixed32  */ 5,
    /* sfixed32 */ 5,
    /* int64    */ 0,
    /* uint64   */ 0,
    /* sint64   */ 0,
    /* fixed64  */ 1,
    /* sfixed64 */ 1,
    /* bool     */ 0
]);


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = Namespace;

// extends ReflectionObject
var ReflectionObject = __webpack_require__(4);
((Namespace.prototype = Object.create(ReflectionObject.prototype)).constructor = Namespace).className = "Namespace";

var Enum     = __webpack_require__(1),
    Field    = __webpack_require__(3),
    util     = __webpack_require__(0);

var Type,    // cyclic
    Service; // "

/**
 * Constructs a new namespace instance.
 * @name Namespace
 * @classdesc Reflected namespace.
 * @extends NamespaceBase
 * @constructor
 * @param {string} name Namespace name
 * @param {Object.<string,*>} [options] Declared options
 */

/**
 * Constructs a namespace from JSON.
 * @memberof Namespace
 * @function
 * @param {string} name Namespace name
 * @param {Object.<string,*>} json JSON object
 * @returns {Namespace} Created namespace
 * @throws {TypeError} If arguments are invalid
 */
Namespace.fromJSON = function fromJSON(name, json) {
    return new Namespace(name, json.options).addJSON(json.nested);
};

/**
 * Converts an array of reflection objects to JSON.
 * @memberof Namespace
 * @param {ReflectionObject[]} array Object array
 * @returns {Object.<string,*>|undefined} JSON object or `undefined` when array is empty
 */
function arrayToJSON(array) {
    if (!(array && array.length))
        return undefined;
    var obj = {};
    for (var i = 0; i < array.length; ++i)
        obj[array[i].name] = array[i].toJSON();
    return obj;
}

Namespace.arrayToJSON = arrayToJSON;

/**
 * Not an actual constructor. Use {@link Namespace} instead.
 * @classdesc Base class of all reflection objects containing nested objects. This is not an actual class but here for the sake of having consistent type definitions.
 * @exports NamespaceBase
 * @extends ReflectionObject
 * @abstract
 * @constructor
 * @param {string} name Namespace name
 * @param {Object.<string,*>} [options] Declared options
 * @see {@link Namespace}
 */
function Namespace(name, options) {
    ReflectionObject.call(this, name, options);

    /**
     * Nested objects by name.
     * @type {Object.<string,ReflectionObject>|undefined}
     */
    this.nested = undefined; // toJSON

    /**
     * Cached nested objects as an array.
     * @type {?ReflectionObject[]}
     * @private
     */
    this._nestedArray = null;
}

function clearCache(namespace) {
    namespace._nestedArray = null;
    return namespace;
}

/**
 * Nested objects of this namespace as an array for iteration.
 * @name NamespaceBase#nestedArray
 * @type {ReflectionObject[]}
 * @readonly
 */
Object.defineProperty(Namespace.prototype, "nestedArray", {
    get: function() {
        return this._nestedArray || (this._nestedArray = util.toArray(this.nested));
    }
});

/**
 * Namespace descriptor.
 * @typedef NamespaceDescriptor
 * @type {Object}
 * @property {Object.<string,*>} [options] Namespace options
 * @property {Object.<string,AnyNestedDescriptor>} nested Nested object descriptors
 */

/**
 * Namespace base descriptor.
 * @typedef NamespaceBaseDescriptor
 * @type {Object}
 * @property {Object.<string,*>} [options] Namespace options
 * @property {Object.<string,AnyNestedDescriptor>} [nested] Nested object descriptors
 */

/**
 * Any extension field descriptor.
 * @typedef AnyExtensionFieldDescriptor
 * @type {ExtensionFieldDescriptor|ExtensionMapFieldDescriptor}
 */

/**
 * Any nested object descriptor.
 * @typedef AnyNestedDescriptor
 * @type {EnumDescriptor|TypeDescriptor|ServiceDescriptor|AnyExtensionFieldDescriptor|NamespaceDescriptor}
 */
// ^ BEWARE: VSCode hangs forever when using more than 5 types (that's why AnyExtensionFieldDescriptor exists in the first place)

/**
 * Converts this namespace to a namespace descriptor.
 * @returns {NamespaceBaseDescriptor} Namespace descriptor
 */
Namespace.prototype.toJSON = function toJSON() {
    return {
        options : this.options,
        nested  : arrayToJSON(this.nestedArray)
    };
};

/**
 * Adds nested objects to this namespace from nested object descriptors.
 * @param {Object.<string,AnyNestedDescriptor>} nestedJson Any nested object descriptors
 * @returns {Namespace} `this`
 */
Namespace.prototype.addJSON = function addJSON(nestedJson) {
    var ns = this;
    /* istanbul ignore else */
    if (nestedJson) {
        for (var names = Object.keys(nestedJson), i = 0, nested; i < names.length; ++i) {
            nested = nestedJson[names[i]];
            ns.add( // most to least likely
                ( nested.fields !== undefined
                ? Type.fromJSON
                : nested.values !== undefined
                ? Enum.fromJSON
                : nested.methods !== undefined
                ? Service.fromJSON
                : nested.id !== undefined
                ? Field.fromJSON
                : Namespace.fromJSON )(names[i], nested)
            );
        }
    }
    return this;
};

/**
 * Gets the nested object of the specified name.
 * @param {string} name Nested object name
 * @returns {?ReflectionObject} The reflection object or `null` if it doesn't exist
 */
Namespace.prototype.get = function get(name) {
    return this.nested && this.nested[name]
        || null;
};

/**
 * Gets the values of the nested {@link Enum|enum} of the specified name.
 * This methods differs from {@link Namespace#get|get} in that it returns an enum's values directly and throws instead of returning `null`.
 * @param {string} name Nested enum name
 * @returns {Object.<string,number>} Enum values
 * @throws {Error} If there is no such enum
 */
Namespace.prototype.getEnum = function getEnum(name) {
    if (this.nested && this.nested[name] instanceof Enum)
        return this.nested[name].values;
    throw Error("no such enum");
};

/**
 * Adds a nested object to this namespace.
 * @param {ReflectionObject} object Nested object to add
 * @returns {Namespace} `this`
 * @throws {TypeError} If arguments are invalid
 * @throws {Error} If there is already a nested object with this name
 */
Namespace.prototype.add = function add(object) {

    if (!(object instanceof Field && object.extend !== undefined || object instanceof Type || object instanceof Enum || object instanceof Service || object instanceof Namespace))
        throw TypeError("object must be a valid nested object");

    if (!this.nested)
        this.nested = {};
    else {
        var prev = this.get(object.name);
        if (prev) {
            if (prev instanceof Namespace && object instanceof Namespace && !(prev instanceof Type || prev instanceof Service)) {
                // replace plain namespace but keep existing nested elements and options
                var nested = prev.nestedArray;
                for (var i = 0; i < nested.length; ++i)
                    object.add(nested[i]);
                this.remove(prev);
                if (!this.nested)
                    this.nested = {};
                object.setOptions(prev.options, true);

            } else
                throw Error("duplicate name '" + object.name + "' in " + this);
        }
    }
    this.nested[object.name] = object;
    object.onAdd(this);
    return clearCache(this);
};

/**
 * Removes a nested object from this namespace.
 * @param {ReflectionObject} object Nested object to remove
 * @returns {Namespace} `this`
 * @throws {TypeError} If arguments are invalid
 * @throws {Error} If `object` is not a member of this namespace
 */
Namespace.prototype.remove = function remove(object) {

    if (!(object instanceof ReflectionObject))
        throw TypeError("object must be a ReflectionObject");
    if (object.parent !== this)
        throw Error(object + " is not a member of " + this);

    delete this.nested[object.name];
    if (!Object.keys(this.nested).length)
        this.nested = undefined;

    object.onRemove(this);
    return clearCache(this);
};

/**
 * Defines additial namespaces within this one if not yet existing.
 * @param {string|string[]} path Path to create
 * @param {*} [json] Nested types to create from JSON
 * @returns {Namespace} Pointer to the last namespace created or `this` if path is empty
 */
Namespace.prototype.define = function define(path, json) {

    if (util.isString(path))
        path = path.split(".");
    else if (!Array.isArray(path))
        throw TypeError("illegal path");
    if (path && path.length && path[0] === "")
        throw Error("path must be relative");

    var ptr = this;
    while (path.length > 0) {
        var part = path.shift();
        if (ptr.nested && ptr.nested[part]) {
            ptr = ptr.nested[part];
            if (!(ptr instanceof Namespace))
                throw Error("path conflicts with non-namespace objects");
        } else
            ptr.add(ptr = new Namespace(part));
    }
    if (json)
        ptr.addJSON(json);
    return ptr;
};

/**
 * Resolves this namespace's and all its nested objects' type references. Useful to validate a reflection tree, but comes at a cost.
 * @returns {Namespace} `this`
 */
Namespace.prototype.resolveAll = function resolveAll() {
    var nested = this.nestedArray, i = 0;
    while (i < nested.length)
        if (nested[i] instanceof Namespace)
            nested[i++].resolveAll();
        else
            nested[i++].resolve();
    return this.resolve();
};

/**
 * Looks up the reflection object at the specified path, relative to this namespace.
 * @param {string|string[]} path Path to look up
 * @param {*|Array.<*>} filterTypes Filter types, any combination of the constructors of `protobuf.Type`, `protobuf.Enum`, `protobuf.Service` etc.
 * @param {boolean} [parentAlreadyChecked=false] If known, whether the parent has already been checked
 * @returns {?ReflectionObject} Looked up object or `null` if none could be found
 */
Namespace.prototype.lookup = function lookup(path, filterTypes, parentAlreadyChecked) {

    /* istanbul ignore next */
    if (typeof filterTypes === "boolean") {
        parentAlreadyChecked = filterTypes;
        filterTypes = undefined;
    } else if (filterTypes && !Array.isArray(filterTypes))
        filterTypes = [ filterTypes ];

    if (util.isString(path) && path.length) {
        if (path === ".")
            return this.root;
        path = path.split(".");
    } else if (!path.length)
        return this;

    // Start at root if path is absolute
    if (path[0] === "")
        return this.root.lookup(path.slice(1), filterTypes);
    // Test if the first part matches any nested object, and if so, traverse if path contains more
    var found = this.get(path[0]);
    if (found) {
        if (path.length === 1) {
            if (!filterTypes || filterTypes.indexOf(found.constructor) > -1)
                return found;
        } else if (found instanceof Namespace && (found = found.lookup(path.slice(1), filterTypes, true)))
            return found;
    }
    // If there hasn't been a match, try again at the parent
    if (this.parent === null || parentAlreadyChecked)
        return null;
    return this.parent.lookup(path, filterTypes);
};

/**
 * Looks up the reflection object at the specified path, relative to this namespace.
 * @name NamespaceBase#lookup
 * @function
 * @param {string|string[]} path Path to look up
 * @param {boolean} [parentAlreadyChecked=false] Whether the parent has already been checked
 * @returns {?ReflectionObject} Looked up object or `null` if none could be found
 * @variation 2
 */
// lookup(path: string, [parentAlreadyChecked: boolean])

/**
 * Looks up the {@link Type|type} at the specified path, relative to this namespace.
 * Besides its signature, this methods differs from {@link Namespace#lookup|lookup} in that it throws instead of returning `null`.
 * @param {string|string[]} path Path to look up
 * @returns {Type} Looked up type
 * @throws {Error} If `path` does not point to a type
 */
Namespace.prototype.lookupType = function lookupType(path) {
    var found = this.lookup(path, [ Type ]);
    if (!found)
        throw Error("no such type");
    return found;
};

/**
 * Looks up the values of the {@link Enum|enum} at the specified path, relative to this namespace.
 * Besides its signature, this methods differs from {@link Namespace#lookup|lookup} in that it throws instead of returning `null`.
 * @param {string|string[]} path Path to look up
 * @returns {Enum} Looked up enum
 * @throws {Error} If `path` does not point to an enum
 */
Namespace.prototype.lookupEnum = function lookupEnum(path) {
    var found = this.lookup(path, [ Enum ]);
    if (!found)
        throw Error("no such Enum '" + path + "' in " + this);
    return found;
};

/**
 * Looks up the {@link Type|type} or {@link Enum|enum} at the specified path, relative to this namespace.
 * Besides its signature, this methods differs from {@link Namespace#lookup|lookup} in that it throws instead of returning `null`.
 * @param {string|string[]} path Path to look up
 * @returns {Type} Looked up type or enum
 * @throws {Error} If `path` does not point to a type or enum
 */
Namespace.prototype.lookupTypeOrEnum = function lookupTypeOrEnum(path) {
    var found = this.lookup(path, [ Type, Enum ]);
    if (!found)
        throw Error("no such Type or Enum '" + path + "' in " + this);
    return found;
};

/**
 * Looks up the {@link Service|service} at the specified path, relative to this namespace.
 * Besides its signature, this methods differs from {@link Namespace#lookup|lookup} in that it throws instead of returning `null`.
 * @param {string|string[]} path Path to look up
 * @returns {Service} Looked up service
 * @throws {Error} If `path` does not point to a service
 */
Namespace.prototype.lookupService = function lookupService(path) {
    var found = this.lookup(path, [ Service ]);
    if (!found)
        throw Error("no such Service '" + path + "' in " + this);
    return found;
};

Namespace._configure = function(Type_, Service_) {
    Type    = Type_;
    Service = Service_;
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* eslint-disable */
// 修改protobufjs中的toObject方法，使之支持longs转换时可以指定特殊的转换方法，为将yfloat转换注入到protobufjs解析中
// 使用时，对于webpack在package.json中指定browser参数以替换原来的文件，对于nodejs则在代码中替换原模块中的方法

/**
 * Runtime message from/to plain object converters.
 * @namespace
 */

var converter = exports;

var Enum = __webpack_require__(1),
    util = __webpack_require__(0);

/**
 * Generates a partial value fromObject conveter.
 * @param {Codegen} gen Codegen instance
 * @param {Field} field Reflected field
 * @param {number} fieldIndex Field index
 * @param {string} prop Property reference
 * @returns {Codegen} Codegen instance
 * @ignore
 */
function genValuePartial_fromObject(gen, field, fieldIndex, prop) {
  /* eslint-disable no-unexpected-multiline, block-scoped-var, no-redeclare */
  if (field.resolvedType) {
    if (field.resolvedType instanceof Enum) {
      gen("switch(d%s){", prop);
      for (var values = field.resolvedType.values, keys = Object.keys(values), i = 0; i < keys.length; ++i) {
        if (field.repeated && values[keys[i]] === field.typeDefault) gen("default:");
        gen("case%j:", keys[i])("case %j:", values[keys[i]])("m%s=%j", prop, values[keys[i]])("break");
      }gen("}");
    } else gen("if(typeof d%s!==\"object\")", prop)("throw TypeError(%j)", field.fullName + ": object expected")("m%s=types[%d].fromObject(d%s)", prop, fieldIndex, prop);
  } else {
    var isUnsigned = false;
    switch (field.type) {
      case "double":
      case "float":
        gen("m%s=Number(d%s)", prop, prop);
        break;
      case "uint32":
      case "fixed32":
        gen("m%s=d%s>>>0", prop, prop);
        break;
      case "int32":
      case "sint32":
      case "sfixed32":
        gen("m%s=d%s|0", prop, prop);
        break;
      case "uint64":
        isUnsigned = true;
      // eslint-disable-line no-fallthrough
      case "int64":
      case "sint64":
      case "fixed64":
      case "sfixed64":
        gen("if(util.Long)")("(m%s=util.Long.fromValue(d%s)).unsigned=%j", prop, prop, isUnsigned)("else if(typeof d%s===\"string\")", prop)("m%s=parseInt(d%s,10)", prop, prop)("else if(typeof d%s===\"number\")", prop)("m%s=d%s", prop, prop)("else if(typeof d%s===\"object\")", prop)("m%s=new util.LongBits(d%s.low>>>0,d%s.high>>>0).toNumber(%s)", prop, prop, prop, isUnsigned ? "true" : "");
        break;
      case "bytes":
        gen("if(typeof d%s===\"string\")", prop)("util.base64.decode(d%s,m%s=util.newBuffer(util.base64.length(d%s)),0)", prop, prop, prop)("else if(d%s.length)", prop)("m%s=d%s", prop, prop);
        break;
      case "string":
        gen("m%s=String(d%s)", prop, prop);
        break;
      case "bool":
        gen("m%s=Boolean(d%s)", prop, prop);
        break;
      /* default: gen
       ("m%s=d%s", prop, prop);
       break; */
    }
  }
  return gen;
  /* eslint-enable no-unexpected-multiline, block-scoped-var, no-redeclare */
}

/**
 * Generates a plain object to runtime message converter specific to the specified message type.
 * @param {Type} mtype Message type
 * @returns {Codegen} Codegen instance
 */
converter.fromObject = function fromObject(mtype) {
  /* eslint-disable no-unexpected-multiline, block-scoped-var, no-redeclare */
  var fields = mtype.fieldsArray;
  var gen = util.codegen("d")("if(d instanceof this.ctor)")("return d");
  if (!fields.length) return gen("return new this.ctor");
  gen("var m=new this.ctor");
  for (var i = 0; i < fields.length; ++i) {
    var field = fields[i].resolve(),
        prop = util.safeProp(field.name);

    // Map fields
    if (field.map) {
      gen("if(d%s){", prop)("if(typeof d%s!==\"object\")", prop)("throw TypeError(%j)", field.fullName + ": object expected")("m%s={}", prop)("for(var ks=Object.keys(d%s),i=0;i<ks.length;++i){", prop);
      genValuePartial_fromObject(gen, field, /* not sorted */i, prop + "[ks[i]]")("}")("}");

      // Repeated fields
    } else if (field.repeated) {
      gen("if(d%s){", prop)("if(!Array.isArray(d%s))", prop)("throw TypeError(%j)", field.fullName + ": array expected")("m%s=[]", prop)("for(var i=0;i<d%s.length;++i){", prop);
      genValuePartial_fromObject(gen, field, /* not sorted */i, prop + "[i]")("}")("}");

      // Non-repeated fields
    } else {
      if (!(field.resolvedType instanceof Enum)) gen // no need to test for null/undefined if an enum (uses switch)
      ("if(d%s!=null){", prop); // !== undefined && !== null
      genValuePartial_fromObject(gen, field, /* not sorted */i, prop);
      if (!(field.resolvedType instanceof Enum)) gen("}");
    }
  }return gen("return m");
  /* eslint-enable no-unexpected-multiline, block-scoped-var, no-redeclare */
};

/**
 * Generates a partial value toObject converter.
 * @param {Codegen} gen Codegen instance
 * @param {Field} field Reflected field
 * @param {number} fieldIndex Field index
 * @param {string} prop Property reference
 * @returns {Codegen} Codegen instance
 * @ignore
 */
function genValuePartial_toObject(gen, field, fieldIndex, prop) {
  /* eslint-disable no-unexpected-multiline, block-scoped-var, no-redeclare */
  if (field.resolvedType) {
    if (field.resolvedType instanceof Enum) gen("d%s=o.enums===String?types[%d].values[m%s]:m%s", prop, fieldIndex, prop, prop);else gen("d%s=types[%d].toObject(m%s,o)", prop, fieldIndex, prop);
  } else {
    var isUnsigned = false;
    switch (field.type) {
      case "uint64":
        isUnsigned = true;
      // eslint-disable-line no-fallthrough
      case "int64":
      case "sint64":
      case "fixed64":
      case "sfixed64":
        gen("if(typeof m%s===\"number\")", prop)("d%s=o.longs===String?String(m%s):typeof o.longs==='function'?o.longs(m%s):m%s", prop, prop, prop, prop)("else") // Long-like
        ("d%s=o.longs===String?util.Long.prototype.toString.call(m%s):o.longs===Number?new util.LongBits(m%s.low>>>0,m%s.high>>>0).toNumber(%s):typeof o.longs==='function'?o.longs(m%s):m%s", prop, prop, prop, prop, isUnsigned ? "true" : "", prop, prop);
        break;
      case "bytes":
        gen("d%s=o.bytes===String?util.base64.encode(m%s,0,m%s.length):o.bytes===Array?Array.prototype.slice.call(m%s):m%s", prop, prop, prop, prop, prop);
        break;
      default:
        gen("d%s=m%s", prop, prop);
        break;
    }
  }
  return gen;
  /* eslint-enable no-unexpected-multiline, block-scoped-var, no-redeclare */
}

/**
 * Generates a runtime message to plain object converter specific to the specified message type.
 * @param {Type} mtype Message type
 * @returns {Codegen} Codegen instance
 */
converter.toObject = function toObject(mtype) {
  /* eslint-disable no-unexpected-multiline, block-scoped-var, no-redeclare */
  var fields = mtype.fieldsArray.slice().sort(util.compareFieldsById);
  if (!fields.length) return util.codegen()("return {}");
  var gen = util.codegen("m", "o")("if(!o)")("o={}")("var d={}");

  var repeatedFields = [],
      mapFields = [],
      normalFields = [],
      i = 0;
  for (; i < fields.length; ++i) {
    if (!fields[i].partOf) (fields[i].resolve().repeated ? repeatedFields : fields[i].map ? mapFields : normalFields).push(fields[i]);
  }if (repeatedFields.length) {
    gen("if(o.arrays||o.defaults){");
    for (i = 0; i < repeatedFields.length; ++i) {
      gen("d%s=[]", util.safeProp(repeatedFields[i].name));
    }gen("}");
  }

  if (mapFields.length) {
    gen("if(o.objects||o.defaults){");
    for (i = 0; i < mapFields.length; ++i) {
      gen("d%s={}", util.safeProp(mapFields[i].name));
    }gen("}");
  }

  if (normalFields.length) {
    gen("if(o.defaults){");
    for (i = 0; i < normalFields.length; ++i) {
      var field = normalFields[i],
          prop = util.safeProp(field.name);
      if (field.resolvedType instanceof Enum) gen("d%s=o.enums===String?%j:%j", prop, field.resolvedType.valuesById[field.typeDefault], field.typeDefault);else if (field.long) gen("if(util.Long){")("var n=new util.Long(%d,%d,%j)", field.typeDefault.low, field.typeDefault.high, field.typeDefault.unsigned)("d%s=o.longs===String?n.toString():o.longs===Number?n.toNumber():typeof o.longs==='function'?o.longs(n):n", prop)("}else")("d%s=o.longs===String?%j:typeof o.longs==='function'?o.longs(%d):%d", prop, field.typeDefault.toString(), field.typeDefault.toNumber(), field.typeDefault.toNumber());else if (field.bytes) gen("d%s=o.bytes===String?%j:%s", prop, String.fromCharCode.apply(String, field.typeDefault), "[" + Array.prototype.slice.call(field.typeDefault).join(",") + "]");else gen("d%s=%j", prop, field.typeDefault); // also messages (=null)
    }gen("}");
  }
  var hasKs2 = false;
  for (i = 0; i < fields.length; ++i) {
    var field = fields[i],
        index = mtype._fieldsArray.indexOf(field),
        prop = util.safeProp(field.name);
    if (field.map) {
      if (!hasKs2) {
        hasKs2 = true;gen("var ks2");
      }gen("if(m%s&&(ks2=Object.keys(m%s)).length){", prop, prop)("d%s={}", prop)("for(var j=0;j<ks2.length;++j){");
      genValuePartial_toObject(gen, field, /* sorted */index, prop + "[ks2[j]]")("}");
    } else if (field.repeated) {
      gen("if(m%s&&m%s.length){", prop, prop)("d%s=[]", prop)("for(var j=0;j<m%s.length;++j){", prop);
      genValuePartial_toObject(gen, field, /* sorted */index, prop + "[j]")("}");
    } else {
      gen("if(m%s!=null&&m.hasOwnProperty(%j)){", prop, field.name); // !== undefined && !== null
      genValuePartial_toObject(gen, field, /* sorted */index, prop);
      if (field.partOf) gen("if(o.oneofs)")("d%s=%j", util.safeProp(field.partOf.name), field.name);
    }
    gen("}");
  }
  return gen("return d");
  /* eslint-enable no-unexpected-multiline, block-scoped-var, no-redeclare */
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stringToArrayBuffer = stringToArrayBuffer;
exports.arrayBufferToString = arrayBufferToString;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function stringToArrayBuffer(str) {
  var strLen = str.length;
  var buf = new ArrayBuffer(strLen * 2); // 2 bytes for each char
  var bufView = new Uint8Array(buf);
  for (var i = 0; i < strLen; i += 1) {
    bufView[i] = str.charCodeAt(i);
  }
  return buf;
}

function arrayBufferToString(arrayBuffer) {
  var uint8Array = new Uint8Array(arrayBuffer);
  var length = uint8Array.length;
  if (length > 65535) {
    var results = [];
    var start = 0;
    do {
      var subArray = uint8Array.subarray(start, start += 65535);
      results.push(String.fromCharCode.apply(String, _toConsumableArray(subArray)));
    } while (start < length);

    return decodeURIComponent(escape(results.join('')));
  }
  return decodeURIComponent(escape(String.fromCharCode.apply(String, _toConsumableArray(uint8Array))));
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = Message;

var util = __webpack_require__(0);

/**
 * Constructs a new message instance.
 * @classdesc Abstract runtime message.
 * @constructor
 * @param {Object.<string,*>} [properties] Properties to set
 */
function Message(properties) {
    // not used internally
    if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            this[keys[i]] = properties[keys[i]];
}

/**
 * Reference to the reflected type.
 * @name Message.$type
 * @type {Type}
 * @readonly
 */

/**
 * Reference to the reflected type.
 * @name Message#$type
 * @type {Type}
 * @readonly
 */

/**
 * Encodes a message of this type.
 * @param {Message|Object.<string,*>} message Message to encode
 * @param {Writer} [writer] Writer to use
 * @returns {Writer} Writer
 */
Message.encode = function encode(message, writer) {
    return this.$type.encode(message, writer);
};

/**
 * Encodes a message of this type preceeded by its length as a varint.
 * @param {Message|Object.<string,*>} message Message to encode
 * @param {Writer} [writer] Writer to use
 * @returns {Writer} Writer
 */
Message.encodeDelimited = function encodeDelimited(message, writer) {
    return this.$type.encodeDelimited(message, writer);
};

/**
 * Decodes a message of this type.
 * @name Message.decode
 * @function
 * @param {Reader|Uint8Array} reader Reader or buffer to decode
 * @returns {Message} Decoded message
 */
Message.decode = function decode(reader) {
    return this.$type.decode(reader);
};

/**
 * Decodes a message of this type preceeded by its length as a varint.
 * @name Message.decodeDelimited
 * @function
 * @param {Reader|Uint8Array} reader Reader or buffer to decode
 * @returns {Message} Decoded message
 */
Message.decodeDelimited = function decodeDelimited(reader) {
    return this.$type.decodeDelimited(reader);
};

/**
 * Verifies a message of this type.
 * @name Message.verify
 * @function
 * @param {Message|Object.<string,*>} message Message or plain object to verify
 * @returns {?string} `null` if valid, otherwise the reason why it is not
 */
Message.verify = function verify(message) {
    return this.$type.verify(message);
};

/**
 * Creates a new message of this type from a plain object. Also converts values to their respective internal types.
 * @param {Object.<string,*>} object Plain object
 * @returns {Message} Message instance
 */
Message.fromObject = function fromObject(object) {
    return this.$type.fromObject(object);
};

/**
 * Creates a new message of this type from a plain object. Also converts values to their respective internal types.
 * This is an alias of {@link Message.fromObject}.
 * @function
 * @param {Object.<string,*>} object Plain object
 * @returns {Message} Message instance
 */
Message.from = Message.fromObject;

/**
 * Creates a plain object from a message of this type. Also converts values to other types if specified.
 * @param {Message} message Message instance
 * @param {ConversionOptions} [options] Conversion options
 * @returns {Object.<string,*>} Plain object
 */
Message.toObject = function toObject(message, options) {
    return this.$type.toObject(message, options);
};

/**
 * Creates a plain object from this message. Also converts values to other types if specified.
 * @param {ConversionOptions} [options] Conversion options
 * @returns {Object.<string,*>} Plain object
 */
Message.prototype.toObject = function toObject(options) {
    return this.$type.toObject(this, options);
};

/**
 * Converts this message to JSON.
 * @returns {Object.<string,*>} JSON object
 */
Message.prototype.toJSON = function toJSON() {
    return this.$type.toObject(this, util.toJSONOptions);
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = Reader;

var util      = __webpack_require__(2);

var BufferReader; // cyclic

var LongBits  = util.LongBits,
    utf8      = util.utf8;

/* istanbul ignore next */
function indexOutOfRange(reader, writeLength) {
    return RangeError("index out of range: " + reader.pos + " + " + (writeLength || 1) + " > " + reader.len);
}

/**
 * Constructs a new reader instance using the specified buffer.
 * @classdesc Wire format reader using `Uint8Array` if available, otherwise `Array`.
 * @constructor
 * @param {Uint8Array} buffer Buffer to read from
 */
function Reader(buffer) {

    /**
     * Read buffer.
     * @type {Uint8Array}
     */
    this.buf = buffer;

    /**
     * Read buffer position.
     * @type {number}
     */
    this.pos = 0;

    /**
     * Read buffer length.
     * @type {number}
     */
    this.len = buffer.length;
}

var create_array = typeof Uint8Array !== "undefined"
    ? function create_typed_array(buffer) {
        if (buffer instanceof Uint8Array || Array.isArray(buffer))
            return new Reader(buffer);
        throw Error("illegal buffer");
    }
    /* istanbul ignore next */
    : function create_array(buffer) {
        if (Array.isArray(buffer))
            return new Reader(buffer);
        throw Error("illegal buffer");
    };

/**
 * Creates a new reader using the specified buffer.
 * @function
 * @param {Uint8Array|Buffer} buffer Buffer to read from
 * @returns {Reader|BufferReader} A {@link BufferReader} if `buffer` is a Buffer, otherwise a {@link Reader}
 * @throws {Error} If `buffer` is not a valid buffer
 */
Reader.create = util.Buffer
    ? function create_buffer_setup(buffer) {
        return (Reader.create = function create_buffer(buffer) {
            return util.Buffer.isBuffer(buffer)
                ? new BufferReader(buffer)
                /* istanbul ignore next */
                : create_array(buffer);
        })(buffer);
    }
    /* istanbul ignore next */
    : create_array;

Reader.prototype._slice = util.Array.prototype.subarray || /* istanbul ignore next */ util.Array.prototype.slice;

/**
 * Reads a varint as an unsigned 32 bit value.
 * @function
 * @returns {number} Value read
 */
Reader.prototype.uint32 = (function read_uint32_setup() {
    var value = 4294967295; // optimizer type-hint, tends to deopt otherwise (?!)
    return function read_uint32() {
        value = (         this.buf[this.pos] & 127       ) >>> 0; if (this.buf[this.pos++] < 128) return value;
        value = (value | (this.buf[this.pos] & 127) <<  7) >>> 0; if (this.buf[this.pos++] < 128) return value;
        value = (value | (this.buf[this.pos] & 127) << 14) >>> 0; if (this.buf[this.pos++] < 128) return value;
        value = (value | (this.buf[this.pos] & 127) << 21) >>> 0; if (this.buf[this.pos++] < 128) return value;
        value = (value | (this.buf[this.pos] &  15) << 28) >>> 0; if (this.buf[this.pos++] < 128) return value;

        /* istanbul ignore if */
        if ((this.pos += 5) > this.len) {
            this.pos = this.len;
            throw indexOutOfRange(this, 10);
        }
        return value;
    };
})();

/**
 * Reads a varint as a signed 32 bit value.
 * @returns {number} Value read
 */
Reader.prototype.int32 = function read_int32() {
    return this.uint32() | 0;
};

/**
 * Reads a zig-zag encoded varint as a signed 32 bit value.
 * @returns {number} Value read
 */
Reader.prototype.sint32 = function read_sint32() {
    var value = this.uint32();
    return value >>> 1 ^ -(value & 1) | 0;
};

/* eslint-disable no-invalid-this */

function readLongVarint() {
    // tends to deopt with local vars for octet etc.
    var bits = new LongBits(0, 0);
    var i = 0;
    if (this.len - this.pos > 4) { // fast route (lo)
        for (; i < 4; ++i) {
            // 1st..4th
            bits.lo = (bits.lo | (this.buf[this.pos] & 127) << i * 7) >>> 0;
            if (this.buf[this.pos++] < 128)
                return bits;
        }
        // 5th
        bits.lo = (bits.lo | (this.buf[this.pos] & 127) << 28) >>> 0;
        bits.hi = (bits.hi | (this.buf[this.pos] & 127) >>  4) >>> 0;
        if (this.buf[this.pos++] < 128)
            return bits;
        i = 0;
    } else {
        for (; i < 3; ++i) {
            /* istanbul ignore if */
            if (this.pos >= this.len)
                throw indexOutOfRange(this);
            // 1st..3th
            bits.lo = (bits.lo | (this.buf[this.pos] & 127) << i * 7) >>> 0;
            if (this.buf[this.pos++] < 128)
                return bits;
        }
        // 4th
        bits.lo = (bits.lo | (this.buf[this.pos++] & 127) << i * 7) >>> 0;
        return bits;
    }
    if (this.len - this.pos > 4) { // fast route (hi)
        for (; i < 5; ++i) {
            // 6th..10th
            bits.hi = (bits.hi | (this.buf[this.pos] & 127) << i * 7 + 3) >>> 0;
            if (this.buf[this.pos++] < 128)
                return bits;
        }
    } else {
        for (; i < 5; ++i) {
            /* istanbul ignore if */
            if (this.pos >= this.len)
                throw indexOutOfRange(this);
            // 6th..10th
            bits.hi = (bits.hi | (this.buf[this.pos] & 127) << i * 7 + 3) >>> 0;
            if (this.buf[this.pos++] < 128)
                return bits;
        }
    }
    /* istanbul ignore next */
    throw Error("invalid varint encoding");
}

/* eslint-enable no-invalid-this */

/**
 * Reads a varint as a signed 64 bit value.
 * @name Reader#int64
 * @function
 * @returns {Long} Value read
 */

/**
 * Reads a varint as an unsigned 64 bit value.
 * @name Reader#uint64
 * @function
 * @returns {Long} Value read
 */

/**
 * Reads a zig-zag encoded varint as a signed 64 bit value.
 * @name Reader#sint64
 * @function
 * @returns {Long} Value read
 */

/**
 * Reads a varint as a boolean.
 * @returns {boolean} Value read
 */
Reader.prototype.bool = function read_bool() {
    return this.uint32() !== 0;
};

function readFixed32_end(buf, end) { // note that this uses `end`, not `pos`
    return (buf[end - 4]
          | buf[end - 3] << 8
          | buf[end - 2] << 16
          | buf[end - 1] << 24) >>> 0;
}

/**
 * Reads fixed 32 bits as an unsigned 32 bit integer.
 * @returns {number} Value read
 */
Reader.prototype.fixed32 = function read_fixed32() {

    /* istanbul ignore if */
    if (this.pos + 4 > this.len)
        throw indexOutOfRange(this, 4);

    return readFixed32_end(this.buf, this.pos += 4);
};

/**
 * Reads fixed 32 bits as a signed 32 bit integer.
 * @returns {number} Value read
 */
Reader.prototype.sfixed32 = function read_sfixed32() {

    /* istanbul ignore if */
    if (this.pos + 4 > this.len)
        throw indexOutOfRange(this, 4);

    return readFixed32_end(this.buf, this.pos += 4) | 0;
};

/* eslint-disable no-invalid-this */

function readFixed64(/* this: Reader */) {

    /* istanbul ignore if */
    if (this.pos + 8 > this.len)
        throw indexOutOfRange(this, 8);

    return new LongBits(readFixed32_end(this.buf, this.pos += 4), readFixed32_end(this.buf, this.pos += 4));
}

/* eslint-enable no-invalid-this */

/**
 * Reads fixed 64 bits.
 * @name Reader#fixed64
 * @function
 * @returns {Long} Value read
 */

/**
 * Reads zig-zag encoded fixed 64 bits.
 * @name Reader#sfixed64
 * @function
 * @returns {Long} Value read
 */

/**
 * Reads a float (32 bit) as a number.
 * @function
 * @returns {number} Value read
 */
Reader.prototype.float = function read_float() {

    /* istanbul ignore if */
    if (this.pos + 4 > this.len)
        throw indexOutOfRange(this, 4);

    var value = util.float.readFloatLE(this.buf, this.pos);
    this.pos += 4;
    return value;
};

/**
 * Reads a double (64 bit float) as a number.
 * @function
 * @returns {number} Value read
 */
Reader.prototype.double = function read_double() {

    /* istanbul ignore if */
    if (this.pos + 8 > this.len)
        throw indexOutOfRange(this, 4);

    var value = util.float.readDoubleLE(this.buf, this.pos);
    this.pos += 8;
    return value;
};

/**
 * Reads a sequence of bytes preceeded by its length as a varint.
 * @returns {Uint8Array} Value read
 */
Reader.prototype.bytes = function read_bytes() {
    var length = this.uint32(),
        start  = this.pos,
        end    = this.pos + length;

    /* istanbul ignore if */
    if (end > this.len)
        throw indexOutOfRange(this, length);

    this.pos += length;
    return start === end // fix for IE 10/Win8 and others' subarray returning array of size 1
        ? new this.buf.constructor(0)
        : this._slice.call(this.buf, start, end);
};

/**
 * Reads a string preceeded by its byte length as a varint.
 * @returns {string} Value read
 */
Reader.prototype.string = function read_string() {
    var bytes = this.bytes();
    return utf8.read(bytes, 0, bytes.length);
};

/**
 * Skips the specified number of bytes if specified, otherwise skips a varint.
 * @param {number} [length] Length if known, otherwise a varint is assumed
 * @returns {Reader} `this`
 */
Reader.prototype.skip = function skip(length) {
    if (typeof length === "number") {
        /* istanbul ignore if */
        if (this.pos + length > this.len)
            throw indexOutOfRange(this, length);
        this.pos += length;
    } else {
        do {
            /* istanbul ignore if */
            if (this.pos >= this.len)
                throw indexOutOfRange(this);
        } while (this.buf[this.pos++] & 128);
    }
    return this;
};

/**
 * Skips the next element of the specified wire type.
 * @param {number} wireType Wire type received
 * @returns {Reader} `this`
 */
Reader.prototype.skipType = function(wireType) {
    switch (wireType) {
        case 0:
            this.skip();
            break;
        case 1:
            this.skip(8);
            break;
        case 2:
            this.skip(this.uint32());
            break;
        case 3:
            do { // eslint-disable-line no-constant-condition
                if ((wireType = this.uint32() & 7) === 4)
                    break;
                this.skipType(wireType);
            } while (true);
            break;
        case 5:
            this.skip(4);
            break;

        /* istanbul ignore next */
        default:
            throw Error("invalid wire type " + wireType + " at offset " + this.pos);
    }
    return this;
};

Reader._configure = function(BufferReader_) {
    BufferReader = BufferReader_;

    var fn = util.Long ? "toLong" : /* istanbul ignore next */ "toNumber";
    util.merge(Reader.prototype, {

        int64: function read_int64() {
            return readLongVarint.call(this)[fn](false);
        },

        uint64: function read_uint64() {
            return readLongVarint.call(this)[fn](true);
        },

        sint64: function read_sint64() {
            return readLongVarint.call(this).zzDecode()[fn](false);
        },

        fixed64: function read_fixed64() {
            return readFixed64.call(this)[fn](true);
        },

        sfixed64: function read_sfixed64() {
            return readFixed64.call(this)[fn](false);
        }

    });
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = Type;

// extends Namespace
var Namespace = __webpack_require__(6);
((Type.prototype = Object.create(Namespace.prototype)).constructor = Type).className = "Type";

var Enum      = __webpack_require__(1),
    OneOf     = __webpack_require__(22),
    Field     = __webpack_require__(3),
    MapField  = __webpack_require__(20),
    Service   = __webpack_require__(24),
    Class     = __webpack_require__(17),
    Message   = __webpack_require__(9),
    Reader    = __webpack_require__(10),
    Writer    = __webpack_require__(12),
    util      = __webpack_require__(0),
    encoder   = __webpack_require__(19),
    decoder   = __webpack_require__(18),
    verifier  = __webpack_require__(25),
    converter = __webpack_require__(7);

/**
 * Constructs a new reflected message type instance.
 * @classdesc Reflected message type.
 * @extends NamespaceBase
 * @constructor
 * @param {string} name Message name
 * @param {Object.<string,*>} [options] Declared options
 */
function Type(name, options) {
    Namespace.call(this, name, options);

    /**
     * Message fields.
     * @type {Object.<string,Field>}
     */
    this.fields = {};  // toJSON, marker

    /**
     * Oneofs declared within this namespace, if any.
     * @type {Object.<string,OneOf>}
     */
    this.oneofs = undefined; // toJSON

    /**
     * Extension ranges, if any.
     * @type {number[][]}
     */
    this.extensions = undefined; // toJSON

    /**
     * Reserved ranges, if any.
     * @type {Array.<number[]|string>}
     */
    this.reserved = undefined; // toJSON

    /*?
     * Whether this type is a legacy group.
     * @type {boolean|undefined}
     */
    this.group = undefined; // toJSON

    /**
     * Cached fields by id.
     * @type {?Object.<number,Field>}
     * @private
     */
    this._fieldsById = null;

    /**
     * Cached fields as an array.
     * @type {?Field[]}
     * @private
     */
    this._fieldsArray = null;

    /**
     * Cached oneofs as an array.
     * @type {?OneOf[]}
     * @private
     */
    this._oneofsArray = null;

    /**
     * Cached constructor.
     * @type {*}
     * @private
     */
    this._ctor = null;
}

Object.defineProperties(Type.prototype, {

    /**
     * Message fields by id.
     * @name Type#fieldsById
     * @type {Object.<number,Field>}
     * @readonly
     */
    fieldsById: {
        get: function() {

            /* istanbul ignore if */
            if (this._fieldsById)
                return this._fieldsById;

            this._fieldsById = {};
            for (var names = Object.keys(this.fields), i = 0; i < names.length; ++i) {
                var field = this.fields[names[i]],
                    id = field.id;

                /* istanbul ignore if */
                if (this._fieldsById[id])
                    throw Error("duplicate id " + id + " in " + this);

                this._fieldsById[id] = field;
            }
            return this._fieldsById;
        }
    },

    /**
     * Fields of this message as an array for iteration.
     * @name Type#fieldsArray
     * @type {Field[]}
     * @readonly
     */
    fieldsArray: {
        get: function() {
            return this._fieldsArray || (this._fieldsArray = util.toArray(this.fields));
        }
    },

    /**
     * Oneofs of this message as an array for iteration.
     * @name Type#oneofsArray
     * @type {OneOf[]}
     * @readonly
     */
    oneofsArray: {
        get: function() {
            return this._oneofsArray || (this._oneofsArray = util.toArray(this.oneofs));
        }
    },

    /**
     * The registered constructor, if any registered, otherwise a generic constructor.
     * Assigning a function replaces the internal constructor. If the function does not extend {@link Message} yet, its prototype will be setup accordingly and static methods will be populated. If it already extends {@link Message}, it will just replace the internal constructor.
     * @name Type#ctor
     * @type {Class}
     */
    ctor: {
        get: function() {
            return this._ctor || (this._ctor = Class(this).constructor);
        },
        set: function(ctor) {
            if (ctor && !(ctor.prototype instanceof Message))
                Class(this, ctor);
            else
                this._ctor = ctor;
        }
    }
});

function clearCache(type) {
    type._fieldsById = type._fieldsArray = type._oneofsArray = type._ctor = null;
    delete type.encode;
    delete type.decode;
    delete type.verify;
    return type;
}

/**
 * Message type descriptor.
 * @typedef TypeDescriptor
 * @type {Object}
 * @property {Object.<string,*>} [options] Message type options
 * @property {Object.<string,OneOfDescriptor>} [oneofs] Oneof descriptors
 * @property {Object.<string,FieldDescriptor>} fields Field descriptors
 * @property {number[][]} [extensions] Extension ranges
 * @property {number[][]} [reserved] Reserved ranges
 * @property {boolean} [group=false] Whether a legacy group or not
 * @property {Object.<string,AnyNestedDescriptor>} [nested] Nested object descriptors
 */

/**
 * Creates a message type from a message type descriptor.
 * @param {string} name Message name
 * @param {TypeDescriptor} json Message type descriptor
 * @returns {Type} Created message type
 */
Type.fromJSON = function fromJSON(name, json) {
    var type = new Type(name, json.options);
    type.extensions = json.extensions;
    type.reserved = json.reserved;
    var names = Object.keys(json.fields),
        i = 0;
    for (; i < names.length; ++i)
        type.add(
            ( typeof json.fields[names[i]].keyType !== "undefined"
            ? MapField.fromJSON
            : Field.fromJSON )(names[i], json.fields[names[i]])
        );
    if (json.oneofs)
        for (names = Object.keys(json.oneofs), i = 0; i < names.length; ++i)
            type.add(OneOf.fromJSON(names[i], json.oneofs[names[i]]));
    if (json.nested)
        for (names = Object.keys(json.nested), i = 0; i < names.length; ++i) {
            var nested = json.nested[names[i]];
            type.add( // most to least likely
                ( nested.id !== undefined
                ? Field.fromJSON
                : nested.fields !== undefined
                ? Type.fromJSON
                : nested.values !== undefined
                ? Enum.fromJSON
                : nested.methods !== undefined
                ? Service.fromJSON
                : Namespace.fromJSON )(names[i], nested)
            );
        }
    if (json.extensions && json.extensions.length)
        type.extensions = json.extensions;
    if (json.reserved && json.reserved.length)
        type.reserved = json.reserved;
    if (json.group)
        type.group = true;
    return type;
};

/**
 * Converts this message type to a message type descriptor.
 * @returns {TypeDescriptor} Message type descriptor
 */
Type.prototype.toJSON = function toJSON() {
    var inherited = Namespace.prototype.toJSON.call(this);
    return {
        options    : inherited && inherited.options || undefined,
        oneofs     : Namespace.arrayToJSON(this.oneofsArray),
        fields     : Namespace.arrayToJSON(this.fieldsArray.filter(function(obj) { return !obj.declaringField; })) || {},
        extensions : this.extensions && this.extensions.length ? this.extensions : undefined,
        reserved   : this.reserved && this.reserved.length ? this.reserved : undefined,
        group      : this.group || undefined,
        nested     : inherited && inherited.nested || undefined
    };
};

/**
 * @override
 */
Type.prototype.resolveAll = function resolveAll() {
    var fields = this.fieldsArray, i = 0;
    while (i < fields.length)
        fields[i++].resolve();
    var oneofs = this.oneofsArray; i = 0;
    while (i < oneofs.length)
        oneofs[i++].resolve();
    return Namespace.prototype.resolve.call(this);
};

/**
 * @override
 */
Type.prototype.get = function get(name) {
    return this.fields[name]
        || this.oneofs && this.oneofs[name]
        || this.nested && this.nested[name]
        || null;
};

/**
 * Adds a nested object to this type.
 * @param {ReflectionObject} object Nested object to add
 * @returns {Type} `this`
 * @throws {TypeError} If arguments are invalid
 * @throws {Error} If there is already a nested object with this name or, if a field, when there is already a field with this id
 */
Type.prototype.add = function add(object) {

    if (this.get(object.name))
        throw Error("duplicate name '" + object.name + "' in " + this);

    if (object instanceof Field && object.extend === undefined) {
        // NOTE: Extension fields aren't actual fields on the declaring type, but nested objects.
        // The root object takes care of adding distinct sister-fields to the respective extended
        // type instead.

        // avoids calling the getter if not absolutely necessary because it's called quite frequently
        if (this._fieldsById ? /* istanbul ignore next */ this._fieldsById[object.id] : this.fieldsById[object.id])
            throw Error("duplicate id " + object.id + " in " + this);
        if (this.isReservedId(object.id))
            throw Error("id " + object.id + " is reserved in " + this);
        if (this.isReservedName(object.name))
            throw Error("name '" + object.name + "' is reserved in " + this);

        if (object.parent)
            object.parent.remove(object);
        this.fields[object.name] = object;
        object.message = this;
        object.onAdd(this);
        return clearCache(this);
    }
    if (object instanceof OneOf) {
        if (!this.oneofs)
            this.oneofs = {};
        this.oneofs[object.name] = object;
        object.onAdd(this);
        return clearCache(this);
    }
    return Namespace.prototype.add.call(this, object);
};

/**
 * Removes a nested object from this type.
 * @param {ReflectionObject} object Nested object to remove
 * @returns {Type} `this`
 * @throws {TypeError} If arguments are invalid
 * @throws {Error} If `object` is not a member of this type
 */
Type.prototype.remove = function remove(object) {
    if (object instanceof Field && object.extend === undefined) {
        // See Type#add for the reason why extension fields are excluded here.

        /* istanbul ignore if */
        if (!this.fields || this.fields[object.name] !== object)
            throw Error(object + " is not a member of " + this);

        delete this.fields[object.name];
        object.parent = null;
        object.onRemove(this);
        return clearCache(this);
    }
    if (object instanceof OneOf) {

        /* istanbul ignore if */
        if (!this.oneofs || this.oneofs[object.name] !== object)
            throw Error(object + " is not a member of " + this);

        delete this.oneofs[object.name];
        object.parent = null;
        object.onRemove(this);
        return clearCache(this);
    }
    return Namespace.prototype.remove.call(this, object);
};

/**
 * Tests if the specified id is reserved.
 * @param {number} id Id to test
 * @returns {boolean} `true` if reserved, otherwise `false`
 */
Type.prototype.isReservedId = function isReservedId(id) {
    if (this.reserved)
        for (var i = 0; i < this.reserved.length; ++i)
            if (typeof this.reserved[i] !== "string" && this.reserved[i][0] <= id && this.reserved[i][1] >= id)
                return true;
    return false;
};

/**
 * Tests if the specified name is reserved.
 * @param {string} name Name to test
 * @returns {boolean} `true` if reserved, otherwise `false`
 */
Type.prototype.isReservedName = function isReservedName(name) {
    if (this.reserved)
        for (var i = 0; i < this.reserved.length; ++i)
            if (this.reserved[i] === name)
                return true;
    return false;
};

/**
 * Creates a new message of this type using the specified properties.
 * @param {Object.<string,*>} [properties] Properties to set
 * @returns {Message} Runtime message
 */
Type.prototype.create = function create(properties) {
    return new this.ctor(properties);
};

/**
 * Sets up {@link Type#encode|encode}, {@link Type#decode|decode} and {@link Type#verify|verify}.
 * @returns {Type} `this`
 */
Type.prototype.setup = function setup() {
    // Sets up everything at once so that the prototype chain does not have to be re-evaluated
    // multiple times (V8, soft-deopt prototype-check).
    var fullName = this.fullName,
        types    = [];
    for (var i = 0; i < /* initializes */ this.fieldsArray.length; ++i)
        types.push(this._fieldsArray[i].resolve().resolvedType);
    this.encode = encoder(this).eof(fullName + "$encode", {
        Writer : Writer,
        types  : types,
        util   : util
    });
    this.decode = decoder(this).eof(fullName + "$decode", {
        Reader : Reader,
        types  : types,
        util   : util
    });
    this.verify = verifier(this).eof(fullName + "$verify", {
        types : types,
        util  : util
    });
    this.fromObject = this.from = converter.fromObject(this).eof(fullName + "$fromObject", {
        types : types,
        util  : util
    });
    this.toObject = converter.toObject(this).eof(fullName + "$toObject", {
        types : types,
        util  : util
    });
    return this;
};

/**
 * Encodes a message of this type. Does not implicitly {@link Type#verify|verify} messages.
 * @param {Message|Object.<string,*>} message Message instance or plain object
 * @param {Writer} [writer] Writer to encode to
 * @returns {Writer} writer
 */
Type.prototype.encode = function encode_setup(message, writer) {
    return this.setup().encode(message, writer); // overrides this method
};

/**
 * Encodes a message of this type preceeded by its byte length as a varint. Does not implicitly {@link Type#verify|verify} messages.
 * @param {Message|Object.<string,*>} message Message instance or plain object
 * @param {Writer} [writer] Writer to encode to
 * @returns {Writer} writer
 */
Type.prototype.encodeDelimited = function encodeDelimited(message, writer) {
    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
};

/**
 * Decodes a message of this type.
 * @param {Reader|Uint8Array} reader Reader or buffer to decode from
 * @param {number} [length] Length of the message, if known beforehand
 * @returns {Message} Decoded message
 * @throws {Error} If the payload is not a reader or valid buffer
 * @throws {util.ProtocolError} If required fields are missing
 */
Type.prototype.decode = function decode_setup(reader, length) {
    return this.setup().decode(reader, length); // overrides this method
};

/**
 * Decodes a message of this type preceeded by its byte length as a varint.
 * @param {Reader|Uint8Array} reader Reader or buffer to decode from
 * @returns {Message} Decoded message
 * @throws {Error} If the payload is not a reader or valid buffer
 * @throws {util.ProtocolError} If required fields are missing
 */
Type.prototype.decodeDelimited = function decodeDelimited(reader) {
    if (!(reader instanceof Reader))
        reader = Reader.create(reader);
    return this.decode(reader, reader.uint32());
};

/**
 * Verifies that field values are valid and that required fields are present.
 * @param {Object.<string,*>} message Plain object to verify
 * @returns {?string} `null` if valid, otherwise the reason why it is not
 */
Type.prototype.verify = function verify_setup(message) {
    return this.setup().verify(message); // overrides this method
};

/**
 * Creates a new message of this type from a plain object. Also converts values to their respective internal types.
 * @param {Object.<string,*>} object Plain object to convert
 * @returns {Message} Message instance
 */
Type.prototype.fromObject = function fromObject(object) {
    return this.setup().fromObject(object);
};

/**
 * Creates a new message of this type from a plain object. Also converts values to their respective internal types.
 * This is an alias of {@link Type#fromObject}.
 * @function
 * @param {Object.<string,*>} object Plain object
 * @returns {Message} Message instance
 */
Type.prototype.from = Type.prototype.fromObject;

/**
 * Conversion options as used by {@link Type#toObject} and {@link Message.toObject}.
 * @typedef ConversionOptions
 * @type {Object}
 * @property {*} [longs] Long conversion type.
 * Valid values are `String` and `Number` (the global types).
 * Defaults to copy the present value, which is a possibly unsafe number without and a {@link Long} with a long library.
 * @property {*} [enums] Enum value conversion type.
 * Only valid value is `String` (the global type).
 * Defaults to copy the present value, which is the numeric id.
 * @property {*} [bytes] Bytes value conversion type.
 * Valid values are `Array` and (a base64 encoded) `String` (the global types).
 * Defaults to copy the present value, which usually is a Buffer under node and an Uint8Array in the browser.
 * @property {boolean} [defaults=false] Also sets default values on the resulting object
 * @property {boolean} [arrays=false] Sets empty arrays for missing repeated fields even if `defaults=false`
 * @property {boolean} [objects=false] Sets empty objects for missing map fields even if `defaults=false`
 * @property {boolean} [oneofs=false] Includes virtual oneof properties set to the present field's name, if any
 */

/**
 * Creates a plain object from a message of this type. Also converts values to other types if specified.
 * @param {Message} message Message instance
 * @param {ConversionOptions} [options] Conversion options
 * @returns {Object.<string,*>} Plain object
 */
Type.prototype.toObject = function toObject(message, options) {
    return this.setup().toObject(message, options);
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = Writer;

var util      = __webpack_require__(2);

var BufferWriter; // cyclic

var LongBits  = util.LongBits,
    base64    = util.base64,
    utf8      = util.utf8;

/**
 * Constructs a new writer operation instance.
 * @classdesc Scheduled writer operation.
 * @constructor
 * @param {function(*, Uint8Array, number)} fn Function to call
 * @param {number} len Value byte length
 * @param {*} val Value to write
 * @ignore
 */
function Op(fn, len, val) {

    /**
     * Function to call.
     * @type {function(Uint8Array, number, *)}
     */
    this.fn = fn;

    /**
     * Value byte length.
     * @type {number}
     */
    this.len = len;

    /**
     * Next operation.
     * @type {Writer.Op|undefined}
     */
    this.next = undefined;

    /**
     * Value to write.
     * @type {*}
     */
    this.val = val; // type varies
}

/* istanbul ignore next */
function noop() {} // eslint-disable-line no-empty-function

/**
 * Constructs a new writer state instance.
 * @classdesc Copied writer state.
 * @memberof Writer
 * @constructor
 * @param {Writer} writer Writer to copy state from
 * @private
 * @ignore
 */
function State(writer) {

    /**
     * Current head.
     * @type {Writer.Op}
     */
    this.head = writer.head;

    /**
     * Current tail.
     * @type {Writer.Op}
     */
    this.tail = writer.tail;

    /**
     * Current buffer length.
     * @type {number}
     */
    this.len = writer.len;

    /**
     * Next state.
     * @type {?State}
     */
    this.next = writer.states;
}

/**
 * Constructs a new writer instance.
 * @classdesc Wire format writer using `Uint8Array` if available, otherwise `Array`.
 * @constructor
 */
function Writer() {

    /**
     * Current length.
     * @type {number}
     */
    this.len = 0;

    /**
     * Operations head.
     * @type {Object}
     */
    this.head = new Op(noop, 0, 0);

    /**
     * Operations tail
     * @type {Object}
     */
    this.tail = this.head;

    /**
     * Linked forked states.
     * @type {?Object}
     */
    this.states = null;

    // When a value is written, the writer calculates its byte length and puts it into a linked
    // list of operations to perform when finish() is called. This both allows us to allocate
    // buffers of the exact required size and reduces the amount of work we have to do compared
    // to first calculating over objects and then encoding over objects. In our case, the encoding
    // part is just a linked list walk calling operations with already prepared values.
}

/**
 * Creates a new writer.
 * @function
 * @returns {BufferWriter|Writer} A {@link BufferWriter} when Buffers are supported, otherwise a {@link Writer}
 */
Writer.create = util.Buffer
    ? function create_buffer_setup() {
        return (Writer.create = function create_buffer() {
            return new BufferWriter();
        })();
    }
    /* istanbul ignore next */
    : function create_array() {
        return new Writer();
    };

/**
 * Allocates a buffer of the specified size.
 * @param {number} size Buffer size
 * @returns {Uint8Array} Buffer
 */
Writer.alloc = function alloc(size) {
    return new util.Array(size);
};

// Use Uint8Array buffer pool in the browser, just like node does with buffers
/* istanbul ignore else */
if (util.Array !== Array)
    Writer.alloc = util.pool(Writer.alloc, util.Array.prototype.subarray);

/**
 * Pushes a new operation to the queue.
 * @param {function(Uint8Array, number, *)} fn Function to call
 * @param {number} len Value byte length
 * @param {number} val Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.push = function push(fn, len, val) {
    this.tail = this.tail.next = new Op(fn, len, val);
    this.len += len;
    return this;
};

function writeByte(val, buf, pos) {
    buf[pos] = val & 255;
}

function writeVarint32(val, buf, pos) {
    while (val > 127) {
        buf[pos++] = val & 127 | 128;
        val >>>= 7;
    }
    buf[pos] = val;
}

/**
 * Constructs a new varint writer operation instance.
 * @classdesc Scheduled varint writer operation.
 * @extends Op
 * @constructor
 * @param {number} len Value byte length
 * @param {number} val Value to write
 * @ignore
 */
function VarintOp(len, val) {
    this.len = len;
    this.next = undefined;
    this.val = val;
}

VarintOp.prototype = Object.create(Op.prototype);
VarintOp.prototype.fn = writeVarint32;

/**
 * Writes an unsigned 32 bit value as a varint.
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.uint32 = function write_uint32(value) {
    // here, the call to this.push has been inlined and a varint specific Op subclass is used.
    // uint32 is by far the most frequently used operation and benefits significantly from this.
    this.len += (this.tail = this.tail.next = new VarintOp(
        (value = value >>> 0)
                < 128       ? 1
        : value < 16384     ? 2
        : value < 2097152   ? 3
        : value < 268435456 ? 4
        :                     5,
    value)).len;
    return this;
};

/**
 * Writes a signed 32 bit value as a varint.
 * @function
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.int32 = function write_int32(value) {
    return value < 0
        ? this.push(writeVarint64, 10, LongBits.fromNumber(value)) // 10 bytes per spec
        : this.uint32(value);
};

/**
 * Writes a 32 bit value as a varint, zig-zag encoded.
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.sint32 = function write_sint32(value) {
    return this.uint32((value << 1 ^ value >> 31) >>> 0);
};

function writeVarint64(val, buf, pos) {
    while (val.hi) {
        buf[pos++] = val.lo & 127 | 128;
        val.lo = (val.lo >>> 7 | val.hi << 25) >>> 0;
        val.hi >>>= 7;
    }
    while (val.lo > 127) {
        buf[pos++] = val.lo & 127 | 128;
        val.lo = val.lo >>> 7;
    }
    buf[pos++] = val.lo;
}

/**
 * Writes an unsigned 64 bit value as a varint.
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */
Writer.prototype.uint64 = function write_uint64(value) {
    var bits = LongBits.from(value);
    return this.push(writeVarint64, bits.length(), bits);
};

/**
 * Writes a signed 64 bit value as a varint.
 * @function
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */
Writer.prototype.int64 = Writer.prototype.uint64;

/**
 * Writes a signed 64 bit value as a varint, zig-zag encoded.
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */
Writer.prototype.sint64 = function write_sint64(value) {
    var bits = LongBits.from(value).zzEncode();
    return this.push(writeVarint64, bits.length(), bits);
};

/**
 * Writes a boolish value as a varint.
 * @param {boolean} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.bool = function write_bool(value) {
    return this.push(writeByte, 1, value ? 1 : 0);
};

function writeFixed32(val, buf, pos) {
    buf[pos    ] =  val         & 255;
    buf[pos + 1] =  val >>> 8   & 255;
    buf[pos + 2] =  val >>> 16  & 255;
    buf[pos + 3] =  val >>> 24;
}

/**
 * Writes an unsigned 32 bit value as fixed 32 bits.
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.fixed32 = function write_fixed32(value) {
    return this.push(writeFixed32, 4, value >>> 0);
};

/**
 * Writes a signed 32 bit value as fixed 32 bits.
 * @function
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.sfixed32 = Writer.prototype.fixed32;

/**
 * Writes an unsigned 64 bit value as fixed 64 bits.
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */
Writer.prototype.fixed64 = function write_fixed64(value) {
    var bits = LongBits.from(value);
    return this.push(writeFixed32, 4, bits.lo).push(writeFixed32, 4, bits.hi);
};

/**
 * Writes a signed 64 bit value as fixed 64 bits.
 * @function
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */
Writer.prototype.sfixed64 = Writer.prototype.fixed64;

/**
 * Writes a float (32 bit).
 * @function
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.float = function write_float(value) {
    return this.push(util.float.writeFloatLE, 4, value);
};

/**
 * Writes a double (64 bit float).
 * @function
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.double = function write_double(value) {
    return this.push(util.float.writeDoubleLE, 8, value);
};

var writeBytes = util.Array.prototype.set
    ? function writeBytes_set(val, buf, pos) {
        buf.set(val, pos); // also works for plain array values
    }
    /* istanbul ignore next */
    : function writeBytes_for(val, buf, pos) {
        for (var i = 0; i < val.length; ++i)
            buf[pos + i] = val[i];
    };

/**
 * Writes a sequence of bytes.
 * @param {Uint8Array|string} value Buffer or base64 encoded string to write
 * @returns {Writer} `this`
 */
Writer.prototype.bytes = function write_bytes(value) {
    var len = value.length >>> 0;
    if (!len)
        return this.push(writeByte, 1, 0);
    if (util.isString(value)) {
        var buf = Writer.alloc(len = base64.length(value));
        base64.decode(value, buf, 0);
        value = buf;
    }
    return this.uint32(len).push(writeBytes, len, value);
};

/**
 * Writes a string.
 * @param {string} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.string = function write_string(value) {
    var len = utf8.length(value);
    return len
        ? this.uint32(len).push(utf8.write, len, value)
        : this.push(writeByte, 1, 0);
};

/**
 * Forks this writer's state by pushing it to a stack.
 * Calling {@link Writer#reset|reset} or {@link Writer#ldelim|ldelim} resets the writer to the previous state.
 * @returns {Writer} `this`
 */
Writer.prototype.fork = function fork() {
    this.states = new State(this);
    this.head = this.tail = new Op(noop, 0, 0);
    this.len = 0;
    return this;
};

/**
 * Resets this instance to the last state.
 * @returns {Writer} `this`
 */
Writer.prototype.reset = function reset() {
    if (this.states) {
        this.head   = this.states.head;
        this.tail   = this.states.tail;
        this.len    = this.states.len;
        this.states = this.states.next;
    } else {
        this.head = this.tail = new Op(noop, 0, 0);
        this.len  = 0;
    }
    return this;
};

/**
 * Resets to the last state and appends the fork state's current write length as a varint followed by its operations.
 * @returns {Writer} `this`
 */
Writer.prototype.ldelim = function ldelim() {
    var head = this.head,
        tail = this.tail,
        len  = this.len;
    this.reset().uint32(len);
    if (len) {
        this.tail.next = head.next; // skip noop
        this.tail = tail;
        this.len += len;
    }
    return this;
};

/**
 * Finishes the write operation.
 * @returns {Uint8Array} Finished buffer
 */
Writer.prototype.finish = function finish() {
    var head = this.head.next, // skip noop
        buf  = this.constructor.alloc(this.len),
        pos  = 0;
    while (head) {
        head.fn(head.val, buf, pos);
        pos += head.len;
        head = head.next;
    }
    // this.head = this.tail = null;
    return buf;
};

Writer._configure = function(BufferWriter_) {
    BufferWriter = BufferWriter_;
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = asPromise;

/**
 * Callback as used by {@link util.asPromise}.
 * @typedef asPromiseCallback
 * @type {function}
 * @param {Error|null} error Error, if any
 * @param {...*} params Additional arguments
 * @returns {undefined}
 */

/**
 * Returns a promise from a node-style callback function.
 * @memberof util
 * @param {asPromiseCallback} fn Function to call
 * @param {*} ctx Function context
 * @param {...*} params Function arguments
 * @returns {Promise<*>} Promisified function
 */
function asPromise(fn, ctx/*, varargs */) {
    var params  = new Array(arguments.length - 1),
        offset  = 0,
        index   = 2,
        pending = true;
    while (index < arguments.length)
        params[offset++] = arguments[index++];
    return new Promise(function executor(resolve, reject) {
        params[offset] = function callback(err/*, varargs */) {
            if (pending) {
                pending = false;
                if (err)
                    reject(err);
                else {
                    var params = new Array(arguments.length - 1),
                        offset = 0;
                    while (offset < params.length)
                        params[offset++] = arguments[offset];
                    resolve.apply(null, params);
                }
            }
        };
        try {
            fn.apply(ctx || null, params);
        } catch (err) {
            if (pending) {
                pending = false;
                reject(err);
            }
        }
    });
}


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = inquire;

/**
 * Requires a module only if available.
 * @memberof util
 * @param {string} moduleName Module to require
 * @returns {?Object} Required module if available and not empty, otherwise `null`
 */
function inquire(moduleName) {
    try {
        var mod = eval("quire".replace(/^/,"re"))(moduleName); // eslint-disable-line no-eval
        if (mod && (mod.length || Object.keys(mod).length))
            return mod;
    } catch (e) {} // eslint-disable-line no-empty
    return null;
}


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $protobuf = __webpack_require__(39);

var $root = ($protobuf.roots["default"] || ($protobuf.roots["default"] = new $protobuf.Root())).addJSON({
  dzhyun: {
    options: {
      java_package: "com.dzhyun.proto"
    },
    nested: {
      EnumID: {
        values: {
          IDId: 1,
          IDObj: 2,
          IDTbl: 3,
          IDObjCount: 5,
          IDQuoteDynaSingle: 20,
          IDQuoteKlineSingle: 21,
          IDQuoteTickSingle: 22,
          IDQuoteMinSingle: 23,
          IDNewsInfoValue: 24,
          IDZhiBiaoShuChu: 25,
          IDZhiBiao: 26,
          IDStkData: 27,
          IDPaiXu: 28,
          IDJianPanBaoShuChu: 29,
          IDBlockObjOutput: 33,
          IDBlockPropOutput: 34,
          IDToken: 44,
          IDF10GsgkOutput: 55,
          IDF10CwtsZycwzbOutput: 56,
          IDF10CwtsXjllbzyOutput: 57,
          IDF10ZxjbDjdcwzbOutput: 58,
          IDF10ZxjbdjdlebOutput: 59,
          IDF10GdjcGdhsOutput: 60,
          IDF10GdjcSdgdOutput: 61,
          IDF10GdjcSdltgdOutput: 62,
          IDF10GbfhFhkgOutput: 63,
          IDF10GbfhGbjgOutput: 64,
          IDXinWenXinXiOutput: 65,
          IDXinWenXinXiZhongXinOutput: 66,
          IDYiZhiXinYeJiYuCeOutPut: 68,
          IDYiZhiXinTouZiPinJiOutPut: 69,
          IDGeGuYeJiYuCeOutPut: 70,
          IDGeGuTouZiYanBaoOutPut: 71,
          IDTongJiApp: 73,
          IDQuoteBOrderSingle: 76,
          IDDXSpirit: 77,
          IDGongGaoXinXiOutput: 80,
          IDGongGaoXinXiZhongXinOutput: 81,
          IDF10CpbdZxzbOutput: 82,
          IDF10CpbdKpqkOutput: 83,
          IDF10CpbdCjhbOutput: 84,
          IDF10CwtsLrfpbzyOutput: 85,
          IDF10CwtsZcfzbzyOutput: 86,
          IDF10ZygcOutput: 87,
          IDF10DstxJjltOutput: 88,
          IDF10DstxRzrqOutput: 89,
          IDF10DstxJgccOutput: 90,
          IDF10DstxGdzjcOutput: 91,
          IDF10DstxDzjyOutput: 92,
          IDF10DstxCgbdqkOutput: 93,
          IDF10GlcOutPut: 94,
          IDF10GlcNdbcqkOutPut: 95,
          IDF10ZxjbDjdxjllbOutPut: 96,
          IDF10GdjcKggdOutPut: 97,
          IDF10GdjcSjkzrOutPut: 98,
          IDF10GbfhGbbdOutPut: 99,
          IDF10ZbyzCyqtsszqOutPut: 100,
          IDF10ZbyzCyfssgqOutPut: 101,
          IDF10zbyzRzqkzfyssOutPut: 102,
          IDF10ZbyzXmtzMjzjqkOutPut: 103,
          IDF10ZbyzXmtzMjzjcnxmOutPut: 104,
          IDF10ZbyzXmtzMjzjbgxmOutPut: 105,
          IDF10ZbyzXmtzFmjzjxmOutPut: 106,
          IDF10HydwOutPut: 107,
          IDF10RsrProForecastOutPut: 108,
          IDF10RsrInvestRatingOutPut: 109,
          IDF10RsrEarnPSForeOutPut: 110,
          IDF10RsrResReportOutPut: 111,
          IDDXSpiritStat: 113,
          IDPaiMing: 115,
          IDOverallInfo: 121,
          IDTodayListStocks: 122,
          IDTodayBrokerStocks: 123,
          IDTodayConvertStocks: 124,
          IDTodayIssueStocks: 125,
          IDBrokerDetaileInfo: 126,
          IDStockBrokerInfo: 127,
          IDIssueDetaileInfo: 128,
          IDIssueStatInfo: 129,
          IDBrokerList: 137,
          IDFinanceQuickReport: 138,
          IDNewsDataItem: 147,
          IDStockNews: 148,
          IDAnnouncemtDataItem: 149,
          IDStockAnnouncemt: 150,
          IDSelfNews: 154,
          IDSelfAnnouncemt: 155,
          IDRepCounterRsp: 156,
          IDCounterRsp: 157,
          IDQueryCapitalRsp: 158,
          IDQueryHoldRsp: 159,
          IDQueryOrderRsp: 160,
          IDQueryDealRsp: 161,
          IDCounterSettleRsp: 162,
          IDTradeRuleRsp: 163,
          IDQuoteDividSingle: 170,
          IDF10FundCpbdFbsjjzjzOutput: 179,
          IDF10FundCpbdJjfebdqkOutput: 180,
          IDF10FundCpbdJjgbjbOutput: 181,
          IDF10FundCpbdJjjzbxOutput: 182,
          IDF10FundCpbdJjxxOutput: 183,
          IDF10FundCpbdZfeOutput: 184,
          IDF10FundCwsjJyyjOutput: 185,
          IDF10FundCwsjZcfzOutput: 186,
          IDF10FundCwsjZycwzbOutput: 187,
          IDNewStockInfo: 188,
          IDF10FundCyrHshjgOutput: 190,
          IDF10FundFefhFbsjjcyrjgOutput: 191,
          IDF10FundFefhFhOutput: 192,
          IDF10FundFefhKfsjjjdfebdOutput: 193,
          IDF10FundGpmxBqzdmcgpOutput: 194,
          IDF10FundGpmxBqzdmrgpOutput: 195,
          IDF10FundGpmxQbcgOutput: 196,
          IDF10FundHgzwOutput: 197,
          IDF10FundHytzOutput: 198,
          IDF10FundHytzQdiiOutput: 199,
          IDF10FundJbxxOutput: 200,
          IDF10FundFbsjjgkOutput: 201,
          IDF10FundKfsjjgkOutput: 202,
          IDF10FundJlggJjgsggryOutput: 203,
          IDF10FundJlggJjjlOutput: 204,
          IDF10FundJyyjOutput: 205,
          IDF10FundZccgQsmgpmxOutput: 206,
          IDF10FundZccgQdiiOutput: 207,
          IDF10FundZqtzTzzhOutput: 208,
          IDF10FundZqtzTzzhQdiiOutput: 209,
          IDF10FundZqtzZcmxOutput: 210,
          IDF10FundZycyrOutput: 211,
          IDHistoryTrends: 215,
          IDQuoteDynaMinSingle: 218,
          IDQuoteHistoryMinSingle: 221,
          IDF10FundHbjjxeOutput: 222,
          IDF10BondDfzfzfxOutput: 223,
          IDF10BondDfzfzqxxOutput: 224,
          IDF10BondFlszzfxOutput: 225,
          IDF10BondFlszztkOutput: 226,
          IDF10BondFlszzxxOutput: 227,
          IDF10BondGzxxOutput: 228,
          IDF10BondHgxxOutput: 229,
          IDF10BondKzzfxOutput: 230,
          IDF10BondKzztkOutput: 231,
          IDF10BondKzztzzgjOutput: 232,
          IDF10BondKzzxxOutput: 233,
          IDF10BondQycyrOutput: 234,
          IDF10BondQyzfxOutput: 235,
          IDF10BondQyzxxOutput: 236,
          IDF10BondZqggOutput: 237,
          IDF10BondZqxjlOutput: 238,
          IDF10BondZqzgOutput: 239,
          IDF10ForexDqjjOutput: 240,
          IDF10ForexJqjjOutput: 241,
          IDF10ForexLlhhOutput: 242,
          IDF10ForexQqwhjbzlOutput: 243,
          IDF10ForexShiborlvOutput: 244,
          IDF10ForexWbdjqOutput: 245,
          IDF10ForexWhbzMbOutput: 246,
          IDF10ForexXycjOutput: 247,
          IDF10ForexYqjjOutput: 248,
          IDF10FuturesBzhyOutput: 249,
          IDF10FuturesCpgkOutput: 250,
          IDF10FuturesFkbfOutput: 251,
          IDF10FuturesJsxzOutput: 252,
          IDF10FuturesJygzOutput: 253,
          IDF10FuturesWphyOutput: 254,
          IDF10FuturesYxysOutput: 255,
          IDF10SpotBzhyOutput: 256,
          IDF10SpotFjsmOutput: 257,
          IDF10SpotJygzOutput: 258,
          IDF10SpotPzgkOutput: 259,
          IDF10SpotWphyOutput: 260,
          IDF10SpotYxysOutput: 261,
          IDReportDataItem: 262,
          IDStockReport: 263,
          IDSelfReport: 264,
          IDQuoteFundFlowSingle: 265,
          IDMonthTrends: 266,
          IDQuoteQueueMinSingle: 269,
          IDQuoteBOrderMinSingle: 302
        }
      },
      MSG: {
        fields: {
          Id: {
            rule: "required",
            type: "int32",
            id: 1
          },
          Obj: {
            type: "string",
            id: 2
          },
          Tbl: {
            type: "Table",
            id: 3
          },
          ObjCount: {
            type: "int32",
            id: 5
          },
          RepDataQuoteDynaSingle: {
            rule: "repeated",
            type: "QuoteDynaSingle",
            id: 20,
            options: {}
          },
          RepDataQuoteKlineSingle: {
            rule: "repeated",
            type: "QuoteKlineSingle",
            id: 21,
            options: {}
          },
          RepDataQuoteTickSingle: {
            rule: "repeated",
            type: "QuoteTickSingle",
            id: 22,
            options: {}
          },
          RepDataQuoteMinSingle: {
            rule: "repeated",
            type: "QuoteMinSingle",
            id: 23,
            options: {}
          },
          RepDataNewsInfoValue: {
            rule: "repeated",
            type: "NewsInfoValue",
            id: 24,
            options: {}
          },
          RepDataZhiBiaoShuChu: {
            rule: "repeated",
            type: "ZhiBiaoShuChu",
            id: 25,
            options: {}
          },
          RepDataZhiBiao: {
            rule: "repeated",
            type: "ZhiBiao",
            id: 26,
            options: {}
          },
          RepDataStkData: {
            rule: "repeated",
            type: "StkData",
            id: 27,
            options: {}
          },
          RepDataPaiXu: {
            rule: "repeated",
            type: "PaiXu",
            id: 28,
            options: {}
          },
          RepDataJianPanBaoShuChu: {
            rule: "repeated",
            type: "JianPanBaoShuChu",
            id: 29,
            options: {}
          },
          RepDataBlockObjOutput: {
            rule: "repeated",
            type: "BlockObjOutput",
            id: 33,
            options: {}
          },
          RepDataBlockPropOutput: {
            rule: "repeated",
            type: "BlockPropOutput",
            id: 34,
            options: {}
          },
          RepDataToken: {
            rule: "repeated",
            type: "Token",
            id: 44,
            options: {}
          },
          RepDataF10GsgkOutput: {
            rule: "repeated",
            type: "F10GsgkOutput",
            id: 55,
            options: {}
          },
          RepDataF10CwtsZycwzbOutput: {
            rule: "repeated",
            type: "F10CwtsZycwzbOutput",
            id: 56,
            options: {}
          },
          RepDataF10CwtsXjllbzyOutput: {
            rule: "repeated",
            type: "F10CwtsXjllbzyOutput",
            id: 57,
            options: {}
          },
          RepDataF10ZxjbDjdcwzbOutput: {
            rule: "repeated",
            type: "F10ZxjbDjdcwzbOutput",
            id: 58,
            options: {}
          },
          RepDataF10ZxjbdjdlebOutput: {
            rule: "repeated",
            type: "F10ZxjbdjdlebOutput",
            id: 59,
            options: {}
          },
          RepDataF10GdjcGdhsOutput: {
            rule: "repeated",
            type: "F10GdjcGdhsOutput",
            id: 60,
            options: {}
          },
          RepDataF10GdjcSdgdOutput: {
            rule: "repeated",
            type: "F10GdjcSdgdOutput",
            id: 61,
            options: {}
          },
          RepDataF10GdjcSdltgdOutput: {
            rule: "repeated",
            type: "F10GdjcSdltgdOutput",
            id: 62,
            options: {}
          },
          RepDataF10GbfhFhkgOutput: {
            rule: "repeated",
            type: "F10GbfhFhkgOutput",
            id: 63,
            options: {}
          },
          RepDataF10GbfhGbjgOutput: {
            rule: "repeated",
            type: "F10GbfhGbjgOutput",
            id: 64,
            options: {}
          },
          RepDataXinWenXinXiOutput: {
            rule: "repeated",
            type: "XinWenXinXiOutput",
            id: 65,
            options: {}
          },
          RepDataXinWenXinXiZhongXinOutput: {
            rule: "repeated",
            type: "XinWenXinXiZhongXinOutput",
            id: 66,
            options: {}
          },
          RepDataYiZhiXinYeJiYuCeOutPut: {
            rule: "repeated",
            type: "YiZhiXinYeJiYuCeOutPut",
            id: 68,
            options: {}
          },
          RepDataYiZhiXinTouZiPinJiOutPut: {
            rule: "repeated",
            type: "YiZhiXinTouZiPinJiOutPut",
            id: 69,
            options: {}
          },
          RepDataGeGuYeJiYuCeOutPut: {
            rule: "repeated",
            type: "GeGuYeJiYuCeOutPut",
            id: 70,
            options: {}
          },
          RepDataGeGuTouZiYanBaoOutPut: {
            rule: "repeated",
            type: "GeGuTouZiYanBaoOutPut",
            id: 71,
            options: {}
          },
          RepDataTongJiApp: {
            rule: "repeated",
            type: "TongJiApp",
            id: 73,
            options: {}
          },
          RepDataQuoteBOrderSingle: {
            rule: "repeated",
            type: "QuoteBOrderSingle",
            id: 76,
            options: {}
          },
          RepDataDXSpirit: {
            rule: "repeated",
            type: "DXSpirit",
            id: 77,
            options: {}
          },
          RepDataGongGaoXinXiOutput: {
            rule: "repeated",
            type: "GongGaoXinXiOutput",
            id: 80,
            options: {}
          },
          RepDataGongGaoXinXiZhongXinOutput: {
            rule: "repeated",
            type: "GongGaoXinXiZhongXinOutput",
            id: 81,
            options: {}
          },
          RepDataF10CpbdZxzbOutput: {
            rule: "repeated",
            type: "F10CpbdZxzbOutput",
            id: 82,
            options: {}
          },
          RepDataF10CpbdKpqkOutput: {
            rule: "repeated",
            type: "F10CpbdKpqkOutput",
            id: 83,
            options: {}
          },
          RepDataF10CpbdCjhbOutput: {
            rule: "repeated",
            type: "F10CpbdCjhbOutput",
            id: 84,
            options: {}
          },
          RepDataF10CwtsLrfpbzyOutput: {
            rule: "repeated",
            type: "F10CwtsLrfpbzyOutput",
            id: 85,
            options: {}
          },
          RepDataF10CwtsZcfzbzyOutput: {
            rule: "repeated",
            type: "F10CwtsZcfzbzyOutput",
            id: 86,
            options: {}
          },
          RepDataF10ZygcOutput: {
            rule: "repeated",
            type: "F10ZygcOutput",
            id: 87,
            options: {}
          },
          RepDataF10DstxJjltOutput: {
            rule: "repeated",
            type: "F10DstxJjltOutput",
            id: 88,
            options: {}
          },
          RepDataF10DstxRzrqOutput: {
            rule: "repeated",
            type: "F10DstxRzrqOutput",
            id: 89,
            options: {}
          },
          RepDataF10DstxJgccOutput: {
            rule: "repeated",
            type: "F10DstxJgccOutput",
            id: 90,
            options: {}
          },
          RepDataF10DstxGdzjcOutput: {
            rule: "repeated",
            type: "F10DstxGdzjcOutput",
            id: 91,
            options: {}
          },
          RepDataF10DstxDzjyOutput: {
            rule: "repeated",
            type: "F10DstxDzjyOutput",
            id: 92,
            options: {}
          },
          RepDataF10DstxCgbdqkOutput: {
            rule: "repeated",
            type: "F10DstxCgbdqkOutput",
            id: 93,
            options: {}
          },
          RepDataF10GlcOutPut: {
            rule: "repeated",
            type: "F10GlcOutPut",
            id: 94,
            options: {}
          },
          RepDataF10GlcNdbcqkOutPut: {
            rule: "repeated",
            type: "F10GlcNdbcqkOutPut",
            id: 95,
            options: {}
          },
          RepDataF10ZxjbDjdxjllbOutPut: {
            rule: "repeated",
            type: "F10ZxjbDjdxjllbOutPut",
            id: 96,
            options: {}
          },
          RepDataF10GdjcKggdOutPut: {
            rule: "repeated",
            type: "F10GdjcKggdOutPut",
            id: 97,
            options: {}
          },
          RepDataF10GdjcSjkzrOutPut: {
            rule: "repeated",
            type: "F10GdjcSjkzrOutPut",
            id: 98,
            options: {}
          },
          RepDataF10GbfhGbbdOutPut: {
            rule: "repeated",
            type: "F10GbfhGbbdOutPut",
            id: 99,
            options: {}
          },
          RepDataF10ZbyzCyqtsszqOutPut: {
            rule: "repeated",
            type: "F10ZbyzCyqtsszqOutPut",
            id: 100,
            options: {}
          },
          RepDataF10ZbyzCyfssgqOutPut: {
            rule: "repeated",
            type: "F10ZbyzCyfssgqOutPut",
            id: 101,
            options: {}
          },
          RepDataF10zbyzRzqkzfyssOutPut: {
            rule: "repeated",
            type: "F10zbyzRzqkzfyssOutPut",
            id: 102,
            options: {}
          },
          RepDataF10ZbyzXmtzMjzjqkOutPut: {
            rule: "repeated",
            type: "F10ZbyzXmtzMjzjqkOutPut",
            id: 103,
            options: {}
          },
          RepDataF10ZbyzXmtzMjzjcnxmOutPut: {
            rule: "repeated",
            type: "F10ZbyzXmtzMjzjcnxmOutPut",
            id: 104,
            options: {}
          },
          RepDataF10ZbyzXmtzMjzjbgxmOutPut: {
            rule: "repeated",
            type: "F10ZbyzXmtzMjzjbgxmOutPut",
            id: 105,
            options: {}
          },
          RepDataF10ZbyzXmtzFmjzjxmOutPut: {
            rule: "repeated",
            type: "F10ZbyzXmtzFmjzjxmOutPut",
            id: 106,
            options: {}
          },
          RepDataF10HydwOutPut: {
            rule: "repeated",
            type: "F10HydwOutPut",
            id: 107,
            options: {}
          },
          RepDataF10RsrProForecastOutPut: {
            rule: "repeated",
            type: "F10RsrProForecastOutPut",
            id: 108,
            options: {}
          },
          RepDataF10RsrInvestRatingOutPut: {
            rule: "repeated",
            type: "F10RsrInvestRatingOutPut",
            id: 109,
            options: {}
          },
          RepDataF10RsrEarnPSForeOutPut: {
            rule: "repeated",
            type: "F10RsrEarnPSForeOutPut",
            id: 110,
            options: {}
          },
          RepDataF10RsrResReportOutPut: {
            rule: "repeated",
            type: "F10RsrResReportOutPut",
            id: 111,
            options: {}
          },
          RepDataDXSpiritStat: {
            rule: "repeated",
            type: "DXSpiritStat",
            id: 113,
            options: {}
          },
          RepDataPaiMing: {
            rule: "repeated",
            type: "PaiMing",
            id: 115,
            options: {}
          },
          RepDataOverallInfo: {
            rule: "repeated",
            type: "OverallInfo",
            id: 121,
            options: {}
          },
          RepDataTodayListStocks: {
            rule: "repeated",
            type: "TodayListStocks",
            id: 122,
            options: {}
          },
          RepDataTodayBrokerStocks: {
            rule: "repeated",
            type: "TodayBrokerStocks",
            id: 123,
            options: {}
          },
          RepDataTodayConvertStocks: {
            rule: "repeated",
            type: "TodayConvertStocks",
            id: 124,
            options: {}
          },
          RepDataTodayIssueStocks: {
            rule: "repeated",
            type: "TodayIssueStocks",
            id: 125,
            options: {}
          },
          RepDataBrokerDetaileInfo: {
            rule: "repeated",
            type: "BrokerDetaileInfo",
            id: 126,
            options: {}
          },
          RepDataStockBrokerInfo: {
            rule: "repeated",
            type: "StockBrokerInfo",
            id: 127,
            options: {}
          },
          RepDataIssueDetaileInfo: {
            rule: "repeated",
            type: "IssueDetaileInfo",
            id: 128,
            options: {}
          },
          RepDataIssueStatInfo: {
            rule: "repeated",
            type: "IssueStatInfo",
            id: 129,
            options: {}
          },
          RepDataBrokerList: {
            rule: "repeated",
            type: "BrokerList",
            id: 137,
            options: {}
          },
          RepDataFinanceQuickReport: {
            rule: "repeated",
            type: "FinanceQuickReport",
            id: 138,
            options: {}
          },
          RepDataNewsDataItem: {
            rule: "repeated",
            type: "NewsDataItem",
            id: 147,
            options: {}
          },
          RepDataStockNews: {
            rule: "repeated",
            type: "StockNews",
            id: 148,
            options: {}
          },
          RepDataAnnouncemtDataItem: {
            rule: "repeated",
            type: "AnnouncemtDataItem",
            id: 149,
            options: {}
          },
          RepDataStockAnnouncemt: {
            rule: "repeated",
            type: "StockAnnouncemt",
            id: 150,
            options: {}
          },
          RepDataSelfNews: {
            rule: "repeated",
            type: "SelfNews",
            id: 154,
            options: {}
          },
          RepDataSelfAnnouncemt: {
            rule: "repeated",
            type: "SelfAnnouncemt",
            id: 155,
            options: {}
          },
          RepDataRepCounterRsp: {
            rule: "repeated",
            type: "RepCounterRsp",
            id: 156,
            options: {}
          },
          RepDataCounterRsp: {
            rule: "repeated",
            type: "CounterRsp",
            id: 157,
            options: {}
          },
          RepDataQueryCapitalRsp: {
            rule: "repeated",
            type: "QueryCapitalRsp",
            id: 158,
            options: {}
          },
          RepDataQueryHoldRsp: {
            rule: "repeated",
            type: "QueryHoldRsp",
            id: 159,
            options: {}
          },
          RepDataQueryOrderRsp: {
            rule: "repeated",
            type: "QueryOrderRsp",
            id: 160,
            options: {}
          },
          RepDataQueryDealRsp: {
            rule: "repeated",
            type: "QueryDealRsp",
            id: 161,
            options: {}
          },
          RepDataCounterSettleRsp: {
            rule: "repeated",
            type: "CounterSettleRsp",
            id: 162,
            options: {}
          },
          RepDataTradeRuleRsp: {
            rule: "repeated",
            type: "TradeRuleRsp",
            id: 163,
            options: {}
          },
          RepDataQuoteDividSingle: {
            rule: "repeated",
            type: "QuoteDividSingle",
            id: 170,
            options: {}
          },
          RepDataF10FundCpbdFbsjjzjzOutput: {
            rule: "repeated",
            type: "F10FundCpbdFbsjjzjzOutput",
            id: 179,
            options: {}
          },
          RepDataF10FundCpbdJjfebdqkOutput: {
            rule: "repeated",
            type: "F10FundCpbdJjfebdqkOutput",
            id: 180,
            options: {}
          },
          RepDataF10FundCpbdJjgbjbOutput: {
            rule: "repeated",
            type: "F10FundCpbdJjgbjbOutput",
            id: 181,
            options: {}
          },
          RepDataF10FundCpbdJjjzbxOutput: {
            rule: "repeated",
            type: "F10FundCpbdJjjzbxOutput",
            id: 182,
            options: {}
          },
          RepDataF10FundCpbdJjxxOutput: {
            rule: "repeated",
            type: "F10FundCpbdJjxxOutput",
            id: 183,
            options: {}
          },
          RepDataF10FundCpbdZfeOutput: {
            rule: "repeated",
            type: "F10FundCpbdZfeOutput",
            id: 184,
            options: {}
          },
          RepDataF10FundCwsjJyyjOutput: {
            rule: "repeated",
            type: "F10FundCwsjJyyjOutput",
            id: 185,
            options: {}
          },
          RepDataF10FundCwsjZcfzOutput: {
            rule: "repeated",
            type: "F10FundCwsjZcfzOutput",
            id: 186,
            options: {}
          },
          RepDataF10FundCwsjZycwzbOutput: {
            rule: "repeated",
            type: "F10FundCwsjZycwzbOutput",
            id: 187,
            options: {}
          },
          RepDataNewStockInfo: {
            rule: "repeated",
            type: "NewStockInfo",
            id: 188,
            options: {}
          },
          RepDataF10FundCyrHshjgOutput: {
            rule: "repeated",
            type: "F10FundCyrHshjgOutput",
            id: 190,
            options: {}
          },
          RepDataF10FundFefhFbsjjcyrjgOutput: {
            rule: "repeated",
            type: "F10FundFefhFbsjjcyrjgOutput",
            id: 191,
            options: {}
          },
          RepDataF10FundFefhFhOutput: {
            rule: "repeated",
            type: "F10FundFefhFhOutput",
            id: 192,
            options: {}
          },
          RepDataF10FundFefhKfsjjjdfebdOutput: {
            rule: "repeated",
            type: "F10FundFefhKfsjjjdfebdOutput",
            id: 193,
            options: {}
          },
          RepDataF10FundGpmxBqzdmcgpOutput: {
            rule: "repeated",
            type: "F10FundGpmxBqzdmcgpOutput",
            id: 194,
            options: {}
          },
          RepDataF10FundGpmxBqzdmrgpOutput: {
            rule: "repeated",
            type: "F10FundGpmxBqzdmrgpOutput",
            id: 195,
            options: {}
          },
          RepDataF10FundGpmxQbcgOutput: {
            rule: "repeated",
            type: "F10FundGpmxQbcgOutput",
            id: 196,
            options: {}
          },
          RepDataF10FundHgzwOutput: {
            rule: "repeated",
            type: "F10FundHgzwOutput",
            id: 197,
            options: {}
          },
          RepDataF10FundHytzOutput: {
            rule: "repeated",
            type: "F10FundHytzOutput",
            id: 198,
            options: {}
          },
          RepDataF10FundHytzQdiiOutput: {
            rule: "repeated",
            type: "F10FundHytzQdiiOutput",
            id: 199,
            options: {}
          },
          RepDataF10FundJbxxOutput: {
            rule: "repeated",
            type: "F10FundJbxxOutput",
            id: 200,
            options: {}
          },
          RepDataF10FundFbsjjgkOutput: {
            rule: "repeated",
            type: "F10FundFbsjjgkOutput",
            id: 201,
            options: {}
          },
          RepDataF10FundKfsjjgkOutput: {
            rule: "repeated",
            type: "F10FundKfsjjgkOutput",
            id: 202,
            options: {}
          },
          RepDataF10FundJlggJjgsggryOutput: {
            rule: "repeated",
            type: "F10FundJlggJjgsggryOutput",
            id: 203,
            options: {}
          },
          RepDataF10FundJlggJjjlOutput: {
            rule: "repeated",
            type: "F10FundJlggJjjlOutput",
            id: 204,
            options: {}
          },
          RepDataF10FundJyyjOutput: {
            rule: "repeated",
            type: "F10FundJyyjOutput",
            id: 205,
            options: {}
          },
          RepDataF10FundZccgQsmgpmxOutput: {
            rule: "repeated",
            type: "F10FundZccgQsmgpmxOutput",
            id: 206,
            options: {}
          },
          RepDataF10FundZccgQdiiOutput: {
            rule: "repeated",
            type: "F10FundZccgQdiiOutput",
            id: 207,
            options: {}
          },
          RepDataF10FundZqtzTzzhOutput: {
            rule: "repeated",
            type: "F10FundZqtzTzzhOutput",
            id: 208,
            options: {}
          },
          RepDataF10FundZqtzTzzhQdiiOutput: {
            rule: "repeated",
            type: "F10FundZqtzTzzhQdiiOutput",
            id: 209,
            options: {}
          },
          RepDataF10FundZqtzZcmxOutput: {
            rule: "repeated",
            type: "F10FundZqtzZcmxOutput",
            id: 210,
            options: {}
          },
          RepDataF10FundZycyrOutput: {
            rule: "repeated",
            type: "F10FundZycyrOutput",
            id: 211,
            options: {}
          },
          RepDataHistoryTrends: {
            rule: "repeated",
            type: "HistoryTrends",
            id: 215,
            options: {}
          },
          RepDataQuoteDynaMinSingle: {
            rule: "repeated",
            type: "QuoteDynaMinSingle",
            id: 218,
            options: {}
          },
          RepDataQuoteHistoryMinSingle: {
            rule: "repeated",
            type: "QuoteHistoryMinSingle",
            id: 221,
            options: {}
          },
          RepDataF10FundHbjjxeOutput: {
            rule: "repeated",
            type: "F10FundHbjjxeOutput",
            id: 222,
            options: {}
          },
          RepDataF10BondDfzfzfxOutput: {
            rule: "repeated",
            type: "F10BondDfzfzfxOutput",
            id: 223,
            options: {}
          },
          RepDataF10BondDfzfzqxxOutput: {
            rule: "repeated",
            type: "F10BondDfzfzqxxOutput",
            id: 224,
            options: {}
          },
          RepDataF10BondFlszzfxOutput: {
            rule: "repeated",
            type: "F10BondFlszzfxOutput",
            id: 225,
            options: {}
          },
          RepDataF10BondFlszztkOutput: {
            rule: "repeated",
            type: "F10BondFlszztkOutput",
            id: 226,
            options: {}
          },
          RepDataF10BondFlszzxxOutput: {
            rule: "repeated",
            type: "F10BondFlszzxxOutput",
            id: 227,
            options: {}
          },
          RepDataF10BondGzxxOutput: {
            rule: "repeated",
            type: "F10BondGzxxOutput",
            id: 228,
            options: {}
          },
          RepDataF10BondHgxxOutput: {
            rule: "repeated",
            type: "F10BondHgxxOutput",
            id: 229,
            options: {}
          },
          RepDataF10BondKzzfxOutput: {
            rule: "repeated",
            type: "F10BondKzzfxOutput",
            id: 230,
            options: {}
          },
          RepDataF10BondKzztkOutput: {
            rule: "repeated",
            type: "F10BondKzztkOutput",
            id: 231,
            options: {}
          },
          RepDataF10BondKzztzzgjOutput: {
            rule: "repeated",
            type: "F10BondKzztzzgjOutput",
            id: 232,
            options: {}
          },
          RepDataF10BondKzzxxOutput: {
            rule: "repeated",
            type: "F10BondKzzxxOutput",
            id: 233,
            options: {}
          },
          RepDataF10BondQycyrOutput: {
            rule: "repeated",
            type: "F10BondQycyrOutput",
            id: 234,
            options: {}
          },
          RepDataF10BondQyzfxOutput: {
            rule: "repeated",
            type: "F10BondQyzfxOutput",
            id: 235,
            options: {}
          },
          RepDataF10BondQyzxxOutput: {
            rule: "repeated",
            type: "F10BondQyzxxOutput",
            id: 236,
            options: {}
          },
          RepDataF10BondZqggOutput: {
            rule: "repeated",
            type: "F10BondZqggOutput",
            id: 237,
            options: {}
          },
          RepDataF10BondZqxjlOutput: {
            rule: "repeated",
            type: "F10BondZqxjlOutput",
            id: 238,
            options: {}
          },
          RepDataF10BondZqzgOutput: {
            rule: "repeated",
            type: "F10BondZqzgOutput",
            id: 239,
            options: {}
          },
          RepDataF10ForexDqjjOutput: {
            rule: "repeated",
            type: "F10ForexDqjjOutput",
            id: 240,
            options: {}
          },
          RepDataF10ForexJqjjOutput: {
            rule: "repeated",
            type: "F10ForexJqjjOutput",
            id: 241,
            options: {}
          },
          RepDataF10ForexLlhhOutput: {
            rule: "repeated",
            type: "F10ForexLlhhOutput",
            id: 242,
            options: {}
          },
          RepDataF10ForexQqwhjbzlOutput: {
            rule: "repeated",
            type: "F10ForexQqwhjbzlOutput",
            id: 243,
            options: {}
          },
          RepDataF10ForexShiborlvOutput: {
            rule: "repeated",
            type: "F10ForexShiborlvOutput",
            id: 244,
            options: {}
          },
          RepDataF10ForexWbdjqOutput: {
            rule: "repeated",
            type: "F10ForexWbdjqOutput",
            id: 245,
            options: {}
          },
          RepDataF10ForexWhbzMbOutput: {
            rule: "repeated",
            type: "F10ForexWhbzMbOutput",
            id: 246,
            options: {}
          },
          RepDataF10ForexXycjOutput: {
            rule: "repeated",
            type: "F10ForexXycjOutput",
            id: 247,
            options: {}
          },
          RepDataF10ForexYqjjOutput: {
            rule: "repeated",
            type: "F10ForexYqjjOutput",
            id: 248,
            options: {}
          },
          RepDataF10FuturesBzhyOutput: {
            rule: "repeated",
            type: "F10FuturesBzhyOutput",
            id: 249,
            options: {}
          },
          RepDataF10FuturesCpgkOutput: {
            rule: "repeated",
            type: "F10FuturesCpgkOutput",
            id: 250,
            options: {}
          },
          RepDataF10FuturesFkbfOutput: {
            rule: "repeated",
            type: "F10FuturesFkbfOutput",
            id: 251,
            options: {}
          },
          RepDataF10FuturesJsxzOutput: {
            rule: "repeated",
            type: "F10FuturesJsxzOutput",
            id: 252,
            options: {}
          },
          RepDataF10FuturesJygzOutput: {
            rule: "repeated",
            type: "F10FuturesJygzOutput",
            id: 253,
            options: {}
          },
          RepDataF10FuturesWphyOutput: {
            rule: "repeated",
            type: "F10FuturesWphyOutput",
            id: 254,
            options: {}
          },
          RepDataF10FuturesYxysOutput: {
            rule: "repeated",
            type: "F10FuturesYxysOutput",
            id: 255,
            options: {}
          },
          RepDataF10SpotBzhyOutput: {
            rule: "repeated",
            type: "F10SpotBzhyOutput",
            id: 256,
            options: {}
          },
          RepDataF10SpotFjsmOutput: {
            rule: "repeated",
            type: "F10SpotFjsmOutput",
            id: 257,
            options: {}
          },
          RepDataF10SpotJygzOutput: {
            rule: "repeated",
            type: "F10SpotJygzOutput",
            id: 258,
            options: {}
          },
          RepDataF10SpotPzgkOutput: {
            rule: "repeated",
            type: "F10SpotPzgkOutput",
            id: 259,
            options: {}
          },
          RepDataF10SpotWphyOutput: {
            rule: "repeated",
            type: "F10SpotWphyOutput",
            id: 260,
            options: {}
          },
          RepDataF10SpotYxysOutput: {
            rule: "repeated",
            type: "F10SpotYxysOutput",
            id: 261,
            options: {}
          },
          RepDataReportDataItem: {
            rule: "repeated",
            type: "ReportDataItem",
            id: 262,
            options: {}
          },
          RepDataStockReport: {
            rule: "repeated",
            type: "StockReport",
            id: 263,
            options: {}
          },
          RepDataSelfReport: {
            rule: "repeated",
            type: "SelfReport",
            id: 264,
            options: {}
          },
          RepDataQuoteFundFlowSingle: {
            rule: "repeated",
            type: "QuoteFundFlowSingle",
            id: 265,
            options: {}
          },
          RepDataMonthTrends: {
            rule: "repeated",
            type: "MonthTrends",
            id: 266,
            options: {}
          },
          RepDataQuoteQueueMinSingle: {
            rule: "repeated",
            type: "QuoteQueueMinSingle",
            id: 269,
            options: {}
          },
          RepDataQuoteBOrderMinSingle: {
            rule: "repeated",
            type: "QuoteBOrderMinSingle",
            id: 302,
            options: {}
          }
        }
      },
      InfoType: {
        values: {
          Type_Unknow: 0,
          Type_Int: 105,
          Type_SInt: 120,
          Type_Float: 102,
          Type_Double: 100,
          Type_String: 115,
          Type_Binary: 98,
          Type_Table: 116,
          Type_Array: 128,
          Type_ArrayInt: 233,
          Type_ArraySInt: 248,
          Type_ArrayFloat: 230,
          Type_ArrayDouble: 228,
          Type_ArrayString: 243
        }
      },
      CInfo: {
        fields: {
          Name: {
            type: "string",
            id: 1
          },
          Type: {
            type: "int32",
            id: 2
          },
          Ratio: {
            type: "int32",
            id: 3
          }
        }
      },
      CArray: {
        fields: {
          iValues: {
            rule: "repeated",
            type: "int64",
            id: 1,
            options: {
              packed: true
            }
          },
          fValues: {
            rule: "repeated",
            type: "float",
            id: 2,
            options: {
              packed: true
            }
          },
          dValues: {
            rule: "repeated",
            type: "double",
            id: 3,
            options: {
              packed: true
            }
          },
          sValues: {
            rule: "repeated",
            type: "string",
            id: 4,
            options: {
              packed: false
            }
          }
        }
      },
      CData: {
        fields: {
          Index: {
            rule: "required",
            type: "int32",
            id: 1
          },
          iValues: {
            rule: "repeated",
            type: "int64",
            id: 2,
            options: {
              packed: true
            }
          },
          fValues: {
            rule: "repeated",
            type: "float",
            id: 3,
            options: {
              packed: true
            }
          },
          dValues: {
            rule: "repeated",
            type: "double",
            id: 4,
            options: {
              packed: true
            }
          },
          sValues: {
            rule: "repeated",
            type: "string",
            id: 5,
            options: {
              packed: false
            }
          },
          bValues: {
            rule: "repeated",
            type: "bytes",
            id: 6,
            options: {
              packed: false
            }
          },
          tValues: {
            rule: "repeated",
            type: "Table",
            id: 7,
            options: {}
          },
          aValues: {
            rule: "repeated",
            type: "CArray",
            id: 8,
            options: {}
          },
          xValues: {
            rule: "repeated",
            type: "sint64",
            id: 9,
            options: {
              packed: true
            }
          }
        }
      },
      CDataX: {
        fields: {
          Index: {
            rule: "required",
            type: "int32",
            id: 1
          },
          iValue: {
            type: "int64",
            id: 2
          },
          fValue: {
            type: "float",
            id: 3
          },
          dValue: {
            type: "double",
            id: 4
          },
          sValue: {
            type: "string",
            id: 5
          },
          bValues: {
            type: "bytes",
            id: 6
          },
          tValue: {
            type: "Table",
            id: 7
          },
          aValues: {
            type: "CArray",
            id: 8
          }
        }
      },
      Table: {
        fields: {
          Tiid: {
            type: "int32",
            id: 1
          },
          Info: {
            rule: "repeated",
            type: "CInfo",
            id: 2,
            options: {}
          },
          Data: {
            rule: "repeated",
            type: "CData",
            id: 3,
            options: {}
          },
          DataX: {
            rule: "repeated",
            type: "CDataX",
            id: 4,
            options: {}
          },
          Name: {
            type: "string",
            id: 5
          },
          Memo: {
            type: "string",
            id: 6
          }
        }
      },
      StkData: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          JiaoYiDaiMa: {
            type: "string",
            id: 2
          },
          ZhongWenJianCheng: {
            type: "string",
            id: 3
          },
          ZuiXinJia: {
            type: "int64",
            id: 4
          },
          KaiPanJia: {
            type: "int64",
            id: 5
          },
          ZuiGaoJia: {
            type: "int64",
            id: 6
          },
          ZuiDiJia: {
            type: "int64",
            id: 7
          },
          ZuoShou: {
            type: "int64",
            id: 8
          },
          JunJia: {
            type: "int64",
            id: 9
          },
          ZhangDie: {
            type: "int64",
            id: 10
          },
          ZhangFu: {
            type: "int64",
            id: 11
          },
          ZhenFu: {
            type: "int64",
            id: 12
          },
          ChengJiaoLiang: {
            type: "int64",
            id: 13
          },
          XianShou: {
            type: "int64",
            id: 14
          },
          ChengJiaoE: {
            type: "int64",
            id: 15
          },
          ZongChengJiaoBiShu: {
            type: "int64",
            id: 16
          },
          MeiBiChengJiaoGuShu: {
            type: "int64",
            id: 17
          },
          HuanShou: {
            type: "int64",
            id: 18
          },
          LiangBi: {
            type: "int64",
            id: 19
          },
          NeiPan: {
            type: "int64",
            id: 20
          },
          WaiPan: {
            type: "int64",
            id: 21
          },
          ZongMaiRu: {
            type: "int64",
            id: 22
          },
          ZongMaiChu: {
            type: "int64",
            id: 23
          },
          ZongMaiRuJunJia: {
            type: "int64",
            id: 24
          },
          ZongMaiChuJunJia: {
            type: "int64",
            id: 25
          },
          WeiTuoMaiRuJia1: {
            type: "int64",
            id: 26
          },
          WeiTuoMaiRuJia2: {
            type: "int64",
            id: 27
          },
          WeiTuoMaiRuJia3: {
            type: "int64",
            id: 28
          },
          WeiTuoMaiRuJia4: {
            type: "int64",
            id: 29
          },
          WeiTuoMaiRuJia5: {
            type: "int64",
            id: 30
          },
          WeiTuoMaiRuLiang1: {
            type: "int64",
            id: 31
          },
          WeiTuoMaiRuLiang2: {
            type: "int64",
            id: 32
          },
          WeiTuoMaiRuLiang3: {
            type: "int64",
            id: 33
          },
          WeiTuoMaiRuLiang4: {
            type: "int64",
            id: 34
          },
          WeiTuoMaiRuLiang5: {
            type: "int64",
            id: 35
          },
          WeiTuoMaiChuJia1: {
            type: "int64",
            id: 36
          },
          WeiTuoMaiChuJia2: {
            type: "int64",
            id: 37
          },
          WeiTuoMaiChuJia3: {
            type: "int64",
            id: 38
          },
          WeiTuoMaiChuJia4: {
            type: "int64",
            id: 39
          },
          WeiTuoMaiChuJia5: {
            type: "int64",
            id: 40
          },
          WeiTuoMaiChuLiang1: {
            type: "int64",
            id: 41
          },
          WeiTuoMaiChuLiang2: {
            type: "int64",
            id: 42
          },
          WeiTuoMaiChuLiang3: {
            type: "int64",
            id: 43
          },
          WeiTuoMaiChuLiang4: {
            type: "int64",
            id: 44
          },
          WeiTuoMaiChuLiang5: {
            type: "int64",
            id: 45
          },
          WeiBi: {
            type: "int64",
            id: 46
          },
          WeiCha: {
            type: "int64",
            id: 47
          },
          ZhangSu: {
            type: "int64",
            id: 48
          },
          JunLiang5Ri: {
            type: "int64",
            id: 49
          },
          ShangZhangJiaShu: {
            type: "int64",
            id: 50
          },
          XiaDieJiaShu: {
            type: "int64",
            id: 51
          },
          PingPanJiaShu: {
            type: "int64",
            id: 52
          },
          AGuShangZhangJiaShu: {
            type: "int64",
            id: 53
          },
          AGuXiaDieJiaShu: {
            type: "int64",
            id: 54
          },
          AGuPingPanJiaShu: {
            type: "int64",
            id: 55
          },
          AGuChengJiaoE: {
            type: "int64",
            id: 56
          },
          BGuShangZhangJiaShu: {
            type: "int64",
            id: 57
          },
          BGuXiaDieJiaShu: {
            type: "int64",
            id: 58
          },
          BGuPingPanJiaShu: {
            type: "int64",
            id: 59
          },
          BGuChengJiaoE: {
            type: "int64",
            id: 60
          },
          JiJinShangZhangJiaShu: {
            type: "int64",
            id: 61
          },
          JiJinXiaDieJiaShu: {
            type: "int64",
            id: 62
          },
          JiJinPingPanJiaShu: {
            type: "int64",
            id: 63
          },
          JiJinChengJiaoE: {
            type: "int64",
            id: 64
          },
          QiTaShangZhangJiaShu: {
            type: "int64",
            id: 65
          },
          QiTaXiaDieJiaShu: {
            type: "int64",
            id: 66
          },
          QiTaPingPanJiaShu: {
            type: "int64",
            id: 67
          },
          QiTaChengJiaoE: {
            type: "int64",
            id: 68
          },
          MaiRuDanShu: {
            type: "int64",
            id: 69
          },
          MaiChuDanShu: {
            type: "int64",
            id: 70
          },
          FenZhongZhangFu1: {
            type: "int64",
            id: 77
          },
          FenZhongZhangFu2: {
            type: "int64",
            id: 78
          },
          FenZhongZhangFu3: {
            type: "int64",
            id: 79
          },
          FenZhongZhangFu4: {
            type: "int64",
            id: 80
          },
          FenZhongZhangFu5: {
            type: "int64",
            id: 81
          },
          ShiYingLv: {
            type: "int64",
            id: 82
          },
          ZhangTing: {
            type: "int64",
            id: 83
          },
          DieTing: {
            type: "int64",
            id: 84
          },
          ShiChangMingCheng: {
            type: "string",
            id: 85
          },
          ShiChangDuanMingCheng: {
            type: "string",
            id: 86
          },
          JiGouChiHuoShu: {
            type: "int64",
            id: 87
          },
          JiGouTuHuoShu: {
            type: "int64",
            id: 88
          },
          JiGouChiHuoLiang: {
            type: "int64",
            id: 89
          },
          JiGouTuHuoLiang: {
            type: "int64",
            id: 90
          },
          JiGouChiHuoJunE: {
            type: "int64",
            id: 91
          },
          JiGouTuHuoJunE: {
            type: "int64",
            id: 92
          },
          MeiShouGuShu: {
            type: "int64",
            id: 93
          },
          JiaoYiDanWei: {
            type: "int64",
            id: 94
          },
          ShiXiaoLv: {
            type: "int64",
            id: 95
          },
          ShiJian: {
            type: "int64",
            id: 96
          },
          ShiJingLv: {
            type: "int64",
            id: 97
          },
          ZongShiZhi: {
            type: "int64",
            id: 98
          },
          LiuTongShiZhi: {
            type: "int64",
            id: 99
          },
          RiZhangFu5: {
            type: "int64",
            id: 101
          },
          RiPingJunZhangFu3: {
            type: "int64",
            id: 102
          },
          JingTaiShiYingLv: {
            type: "int64",
            id: 103
          },
          RongZiYuEZhangFu: {
            type: "int64",
            id: 104
          },
          RongZiYuELiuTongShiZhiBiLv: {
            type: "int64",
            id: 105
          },
          ZiChanFuZhaiLv: {
            type: "int64",
            id: 106
          },
          JiaQuanPingJunWeiTuoMaiRuJia: {
            type: "int64",
            id: 107
          },
          WeiTuoMaiRuZongLiang: {
            type: "int64",
            id: 108
          },
          JiaQuanPingJunWeiTuoMaiChuJia: {
            type: "int64",
            id: 109
          },
          WeiTuoMaiChuZongLiang: {
            type: "int64",
            id: 110
          },
          KuoZhanMaiRuJia1: {
            type: "int64",
            id: 111
          },
          KuoZhanMaiRuJia2: {
            type: "int64",
            id: 112
          },
          KuoZhanMaiRuJia3: {
            type: "int64",
            id: 113
          },
          KuoZhanMaiRuJia4: {
            type: "int64",
            id: 114
          },
          KuoZhanMaiRuJia5: {
            type: "int64",
            id: 115
          },
          KuoZhanMaiRuLiang1: {
            type: "int64",
            id: 116
          },
          KuoZhanMaiRuLiang2: {
            type: "int64",
            id: 117
          },
          KuoZhanMaiRuLiang3: {
            type: "int64",
            id: 118
          },
          KuoZhanMaiRuLiang4: {
            type: "int64",
            id: 119
          },
          KuoZhanMaiRuLiang5: {
            type: "int64",
            id: 120
          },
          KuoZhanMaiChuJia1: {
            type: "int64",
            id: 121
          },
          KuoZhanMaiChuJia2: {
            type: "int64",
            id: 122
          },
          KuoZhanMaiChuJia3: {
            type: "int64",
            id: 123
          },
          KuoZhanMaiChuJia4: {
            type: "int64",
            id: 124
          },
          KuoZhanMaiChuJia5: {
            type: "int64",
            id: 125
          },
          KuoZhanMaiChuLiang1: {
            type: "int64",
            id: 126
          },
          KuoZhanMaiChuLiang2: {
            type: "int64",
            id: 127
          },
          KuoZhanMaiChuLiang3: {
            type: "int64",
            id: 128
          },
          KuoZhanMaiChuLiang4: {
            type: "int64",
            id: 129
          },
          KuoZhanMaiChuLiang5: {
            type: "int64",
            id: 130
          },
          DaDanDangRiLiuRuE: {
            type: "int64",
            id: 131
          },
          DaDanLiuRuE5: {
            type: "int64",
            id: 132
          },
          DDX: {
            type: "int64",
            id: 133
          },
          DDXPiaoHongTianShu10: {
            type: "int64",
            id: 134
          },
          DDXZongHe10: {
            type: "int64",
            id: 135
          },
          DDXBiaoZhunCha10: {
            type: "int64",
            id: 136
          },
          DDXDDXBiaoZhunCha10BiZhi: {
            type: "int64",
            id: 137
          },
          ShiFouTingPai: {
            type: "int64",
            id: 138
          },
          DaDanLiuRuZongE: {
            type: "int64",
            id: 140
          },
          DaDanLiuChuZongE: {
            type: "int64",
            id: 141
          },
          DaDanLiuRuZongE5: {
            type: "int64",
            id: 142
          },
          DaDanLiuChuZongE5: {
            type: "int64",
            id: 143
          },
          DDXLianXuPiaoHongTianShu: {
            type: "int64",
            id: 144
          },
          MA1minMA1: {
            type: "int64",
            id: 200
          },
          MA1minMA2: {
            type: "int64",
            id: 201
          },
          MA1minMA3: {
            type: "int64",
            id: 202
          },
          MA1minMA4: {
            type: "int64",
            id: 203
          },
          MA1minMA5: {
            type: "int64",
            id: 204
          },
          MA1minMA6: {
            type: "int64",
            id: 205
          },
          MA5minMA1: {
            type: "int64",
            id: 206
          },
          MA5minMA2: {
            type: "int64",
            id: 207
          },
          MA5minMA3: {
            type: "int64",
            id: 208
          },
          MA5minMA4: {
            type: "int64",
            id: 209
          },
          MA5minMA5: {
            type: "int64",
            id: 210
          },
          MA5minMA6: {
            type: "int64",
            id: 211
          },
          MA1dayMA1: {
            type: "int64",
            id: 212
          },
          MA1dayMA2: {
            type: "int64",
            id: 213
          },
          MA1dayMA3: {
            type: "int64",
            id: 214
          },
          MA1dayMA4: {
            type: "int64",
            id: 215
          },
          MA1dayMA5: {
            type: "int64",
            id: 216
          },
          MA1dayMA6: {
            type: "int64",
            id: 217
          },
          BOLL1minMID: {
            type: "int64",
            id: 218
          },
          BOLL1minUPPER: {
            type: "int64",
            id: 219
          },
          BOLL1minLOWER: {
            type: "int64",
            id: 220
          },
          BOLL5minMID: {
            type: "int64",
            id: 221
          },
          BOLL5minUPPER: {
            type: "int64",
            id: 222
          },
          BOLL5minLOWER: {
            type: "int64",
            id: 223
          },
          BOLL1dayMID: {
            type: "int64",
            id: 224
          },
          BOLL1dayUPPER: {
            type: "int64",
            id: 225
          },
          BOLL1dayLOWER: {
            type: "int64",
            id: 226
          },
          VOL1min: {
            type: "int64",
            id: 227
          },
          VOL1minMA1: {
            type: "int64",
            id: 228
          },
          VOL1minMA2: {
            type: "int64",
            id: 229
          },
          VOL1minMA3: {
            type: "int64",
            id: 230
          },
          VOL5min: {
            type: "int64",
            id: 231
          },
          VOL5minMA1: {
            type: "int64",
            id: 232
          },
          VOL5minMA2: {
            type: "int64",
            id: 233
          },
          VOL5minMA3: {
            type: "int64",
            id: 234
          },
          VOL1day: {
            type: "int64",
            id: 235
          },
          VOL1dayMA1: {
            type: "int64",
            id: 236
          },
          VOL1dayMA2: {
            type: "int64",
            id: 237
          },
          VOL1dayMA3: {
            type: "int64",
            id: 238
          },
          ARBR1minAR: {
            type: "int64",
            id: 239
          },
          ARBR1minBR: {
            type: "int64",
            id: 240
          },
          ARBR5minAR: {
            type: "int64",
            id: 241
          },
          ARBR5minBR: {
            type: "int64",
            id: 242
          },
          ARBR1dayAR: {
            type: "int64",
            id: 243
          },
          ARBR1dayBR: {
            type: "int64",
            id: 244
          },
          BIAS1minBIAS1: {
            type: "int64",
            id: 245
          },
          BIAS1minBIAS2: {
            type: "int64",
            id: 246
          },
          BIAS1minBIAS3: {
            type: "int64",
            id: 247
          },
          BIAS5minBIAS1: {
            type: "int64",
            id: 248
          },
          BIAS5minBIAS2: {
            type: "int64",
            id: 249
          },
          BIAS5minBIAS3: {
            type: "int64",
            id: 250
          },
          BIAS1dayBIAS1: {
            type: "int64",
            id: 251
          },
          BIAS1dayBIAS2: {
            type: "int64",
            id: 252
          },
          BIAS1dayBIAS3: {
            type: "int64",
            id: 253
          },
          CCI1min: {
            type: "int64",
            id: 254
          },
          CCI5min: {
            type: "int64",
            id: 255
          },
          CCI1day: {
            type: "int64",
            id: 256
          },
          CJBS1minCJBS: {
            type: "int64",
            id: 257
          },
          CJBS5minCJBS: {
            type: "int64",
            id: 258
          },
          CJBS1dayCJBS: {
            type: "int64",
            id: 259
          },
          CR1minCR: {
            type: "int64",
            id: 260
          },
          CR1minMA1: {
            type: "int64",
            id: 261
          },
          CR1minMA2: {
            type: "int64",
            id: 262
          },
          CR1minMA3: {
            type: "int64",
            id: 263
          },
          CR5minCR: {
            type: "int64",
            id: 264
          },
          CR5minMA1: {
            type: "int64",
            id: 265
          },
          CR5minMA2: {
            type: "int64",
            id: 266
          },
          CR5minMA3: {
            type: "int64",
            id: 267
          },
          CR1dayCR: {
            type: "int64",
            id: 268
          },
          CR1dayMA1: {
            type: "int64",
            id: 269
          },
          CR1dayMA2: {
            type: "int64",
            id: 270
          },
          CR1dayMA3: {
            type: "int64",
            id: 271
          },
          DMA1minDDD: {
            type: "int64",
            id: 272
          },
          DMA1minAMA: {
            type: "int64",
            id: 273
          },
          DMA5minDDD: {
            type: "int64",
            id: 274
          },
          DMA5minAMA: {
            type: "int64",
            id: 275
          },
          DMA1dayDDD: {
            type: "int64",
            id: 276
          },
          DMA1dayAMA: {
            type: "int64",
            id: 277
          },
          DMI1minPDI: {
            type: "int64",
            id: 278
          },
          DMI1minMDI: {
            type: "int64",
            id: 279
          },
          DMI1minADX: {
            type: "int64",
            id: 280
          },
          DMI1minADXR: {
            type: "int64",
            id: 281
          },
          DMI5minPDI: {
            type: "int64",
            id: 282
          },
          DMI5minMDI: {
            type: "int64",
            id: 283
          },
          DMI5minADX: {
            type: "int64",
            id: 284
          },
          DMI5minADXR: {
            type: "int64",
            id: 285
          },
          DMI1dayPDI: {
            type: "int64",
            id: 286
          },
          DMI1dayMDI: {
            type: "int64",
            id: 287
          },
          DMI1dayADX: {
            type: "int64",
            id: 288
          },
          DMI1dayADXR: {
            type: "int64",
            id: 289
          },
          KDJ1minK: {
            type: "int64",
            id: 290
          },
          KDJ1minD: {
            type: "int64",
            id: 291
          },
          KDJ1minJ: {
            type: "int64",
            id: 292
          },
          KDJ5minK: {
            type: "int64",
            id: 293
          },
          KDJ5minD: {
            type: "int64",
            id: 294
          },
          KDJ5minJ: {
            type: "int64",
            id: 295
          },
          KDJ1dayK: {
            type: "int64",
            id: 296
          },
          KDJ1dayD: {
            type: "int64",
            id: 297
          },
          KDJ1dayJ: {
            type: "int64",
            id: 298
          },
          MACD1minDIFF: {
            type: "int64",
            id: 299
          },
          MACD1minDEA: {
            type: "int64",
            id: 300
          },
          MACD1minMACD: {
            type: "int64",
            id: 301
          },
          MACD5minDIFF: {
            type: "int64",
            id: 302
          },
          MACD5minDEA: {
            type: "int64",
            id: 303
          },
          MACD5minMACD: {
            type: "int64",
            id: 304
          },
          MACD1dayDIFF: {
            type: "int64",
            id: 305
          },
          MACD1dayDEA: {
            type: "int64",
            id: 306
          },
          MACD1dayMACD: {
            type: "int64",
            id: 307
          },
          OBV1min: {
            type: "int64",
            id: 308
          },
          OBV5min: {
            type: "int64",
            id: 309
          },
          OBV1day: {
            type: "int64",
            id: 310
          },
          PSY1min: {
            type: "int64",
            id: 311
          },
          PSY5min: {
            type: "int64",
            id: 312
          },
          PSY1day: {
            type: "int64",
            id: 313
          },
          RSI1minRSI1: {
            type: "int64",
            id: 314
          },
          RSI1minRSI2: {
            type: "int64",
            id: 315
          },
          RSI1minRSI3: {
            type: "int64",
            id: 316
          },
          RSI5minRSI1: {
            type: "int64",
            id: 317
          },
          RSI5minRSI2: {
            type: "int64",
            id: 318
          },
          RSI5minRSI3: {
            type: "int64",
            id: 319
          },
          RSI1dayRSI1: {
            type: "int64",
            id: 320
          },
          RSI1dayRSI2: {
            type: "int64",
            id: 321
          },
          RSI1dayRSI3: {
            type: "int64",
            id: 322
          },
          WR1minWR1: {
            type: "int64",
            id: 323
          },
          WR1minWR2: {
            type: "int64",
            id: 324
          },
          WR5minWR1: {
            type: "int64",
            id: 325
          },
          WR5minWR2: {
            type: "int64",
            id: 326
          },
          WR1dayWR1: {
            type: "int64",
            id: 327
          },
          WR1dayWR2: {
            type: "int64",
            id: 328
          },
          DDXJinRi: {
            type: "int64",
            id: 330
          },
          DDX60Ri: {
            type: "int64",
            id: 331
          },
          DDX5Ri: {
            type: "int64",
            id: 332
          },
          DDYJinRi: {
            type: "int64",
            id: 333
          },
          DDY60Ri: {
            type: "int64",
            id: 334
          },
          DDY5Ri: {
            type: "int64",
            id: 335
          },
          DDZJinRi: {
            type: "int64",
            id: 336
          },
          LeiXing: {
            type: "int64",
            id: 400
          },
          ZiLeiXing: {
            type: "int64",
            id: 401
          },
          LeiXingMingCheng: {
            type: "string",
            id: 402
          },
          ChengJiaoLiangDanWei: {
            type: "int64",
            id: 403
          },
          MaBiao: {
            type: "string",
            id: 410
          },
          FJJJLeiXing: {
            type: "int64",
            id: 501
          },
          ZhengTiYiJia: {
            type: "int64",
            id: 502
          },
          MYiJia: {
            type: "int64",
            id: 551
          },
          MShiShiJingZhi: {
            type: "int64",
            id: 552
          },
          MShangZheXuZhang: {
            type: "int64",
            id: 553
          },
          MXiaZheXuDie: {
            type: "int64",
            id: 554
          },
          YinHanShouYi: {
            type: "int64",
            id: 511
          },
          JiaGeGangGan: {
            type: "int64",
            id: 512
          },
          PinZhongObj: {
            type: "string",
            id: 601
          },
          BaoGaoQi: {
            type: "string",
            id: 602
          },
          ShangShiRiQi: {
            type: "string",
            id: 603
          },
          MeiGuShouYi: {
            type: "int64",
            id: 604
          },
          MeiGuJingZiChan: {
            type: "int64",
            id: 605
          },
          JingZiChanShouYiLv: {
            type: "int64",
            id: 606
          },
          MeiGuJingYingXianJin: {
            type: "int64",
            id: 607
          },
          MeiGuGongJiJin: {
            type: "int64",
            id: 608
          },
          MeiGuWeiFenPei: {
            type: "int64",
            id: 609
          },
          GuDongQuanYiBi: {
            type: "int64",
            id: 610
          },
          JingLiRunTongBi: {
            type: "int64",
            id: 611
          },
          ZhuYingShouRuTongBi: {
            type: "int64",
            id: 612
          },
          XiaoShouMaoLiLv: {
            type: "int64",
            id: 613
          },
          TiaoZhengMeiGuJingZi: {
            type: "int64",
            id: 614
          },
          ZongZiChan: {
            type: "int64",
            id: 615
          },
          LiuDongZiChan: {
            type: "int64",
            id: 616
          },
          GuDingZiChan: {
            type: "int64",
            id: 617
          },
          WuXingZiChan: {
            type: "int64",
            id: 618
          },
          LiuDongFuZhai: {
            type: "int64",
            id: 619
          },
          ChangQiFuZhai: {
            type: "int64",
            id: 620
          },
          ZongFuZhai: {
            type: "int64",
            id: 621
          },
          GuDongQuanYi: {
            type: "int64",
            id: 622
          },
          ZiBenGongJiJin: {
            type: "int64",
            id: 623
          },
          JingYingXianJinLiuLiang: {
            type: "int64",
            id: 624
          },
          TouZiXianJinLiuLiang: {
            type: "int64",
            id: 625
          },
          ChouZiXianJinLiuLiang: {
            type: "int64",
            id: 626
          },
          XianJinZengJiaE: {
            type: "int64",
            id: 627
          },
          ZhuYingShouRu: {
            type: "int64",
            id: 628
          },
          ZhuYingLiRun: {
            type: "int64",
            id: 629
          },
          YingYeLiRun: {
            type: "int64",
            id: 630
          },
          TouZiShouYi: {
            type: "int64",
            id: 631
          },
          YingYeWaiShouZhi: {
            type: "int64",
            id: 632
          },
          LiRunZongE: {
            type: "int64",
            id: 633
          },
          JingLiRun: {
            type: "int64",
            id: 634
          },
          WeiFenPeiLiRun: {
            type: "int64",
            id: 635
          },
          ZongGuBen: {
            type: "int64",
            id: 636
          },
          WuXianShouGuHeJi: {
            type: "int64",
            id: 637
          },
          LiuTongAGu: {
            type: "int64",
            id: 638
          },
          LiuTongBGu: {
            type: "int64",
            id: 639
          },
          JingWaiShangShiGu: {
            type: "int64",
            id: 640
          },
          QiTaLiuTongGu: {
            type: "int64",
            id: 641
          },
          XianShouGuHeJi: {
            type: "int64",
            id: 642
          },
          GuoJiaChiGu: {
            type: "int64",
            id: 643
          },
          GuoYouFaRenGu: {
            type: "int64",
            id: 644
          },
          JingNeiFaRenGu: {
            type: "int64",
            id: 645
          },
          JingNeiZiRanRenGu: {
            type: "int64",
            id: 646
          },
          QiTaFaQiRenGu: {
            type: "int64",
            id: 647
          },
          MuJiFaRenGu: {
            type: "int64",
            id: 648
          },
          JingWaiFaRenGu: {
            type: "int64",
            id: 649
          },
          JingWaiZiRanRenGu: {
            type: "int64",
            id: 650
          },
          YouXianGuHuoQiTa: {
            type: "int64",
            id: 651
          },
          WeiTuoMaiRu: {
            type: "int64",
            id: 700
          },
          WeiTuoMaiChu: {
            type: "int64",
            id: 701
          },
          MaiRuZhongDanBiLi: {
            type: "int64",
            id: 702
          },
          MaiRuDaDanBiLi: {
            type: "int64",
            id: 703
          },
          MaiRuTeDaDanBiLi: {
            type: "int64",
            id: 704
          },
          MaiChuZhongDanBiLi: {
            type: "int64",
            id: 705
          },
          MaiChuDaDanBiLi: {
            type: "int64",
            id: 706
          },
          MaiChuTeDaDanBiLi: {
            type: "int64",
            id: 707
          },
          DuanXianMaiRu: {
            type: "int64",
            id: 708
          },
          DuanXianMaiChu: {
            type: "int64",
            id: 709
          },
          DuanXianChiHuo: {
            type: "int64",
            id: 710
          },
          DuanXianTuHuo: {
            type: "int64",
            id: 711
          },
          BiShi: {
            type: "int64",
            id: 801
          },
          LingZhangGu: {
            type: "LingZhangGuShuJu",
            id: 901
          },
          ChiCang: {
            type: "int64",
            id: 1001
          },
          ZengCang: {
            type: "int64",
            id: 1002
          },
          RiZeng: {
            type: "int64",
            id: 1003
          },
          JieSuanJia: {
            type: "int64",
            id: 1004
          },
          ZuoRiJieSuanJia: {
            type: "int64",
            id: 1005
          },
          KaiPing: {
            type: "int64",
            id: 1006
          },
          JieSuanZhangDie: {
            type: "int64",
            id: 1007
          },
          JieSuanZhangFu: {
            type: "int64",
            id: 1008
          },
          RongZiMaiRuE: {
            type: "int64",
            id: 1009
          },
          RongZiRongQuanBiaoJi: {
            type: "int64",
            id: 1010
          },
          ZiJinJingE: {
            type: "int64",
            id: 1011
          },
          JingNeiZongShiZhi: {
            type: "int64",
            id: 1012
          },
          GongXianDianShu: {
            type: "int64",
            id: 1013
          },
          HangYe: {
            type: "string",
            id: 1014
          },
          PanKouBianHuaMaiRu1: {
            type: "int64",
            id: 1015
          },
          PanKouBianHuaMaiRu2: {
            type: "int64",
            id: 1016
          },
          PanKouBianHuaMaiRu3: {
            type: "int64",
            id: 1017
          },
          PanKouBianHuaMaiRu4: {
            type: "int64",
            id: 1018
          },
          PanKouBianHuaMaiRu5: {
            type: "int64",
            id: 1019
          },
          PanKouBianHuaMaiRu6: {
            type: "int64",
            id: 1020
          },
          PanKouBianHuaMaiRu7: {
            type: "int64",
            id: 1021
          },
          PanKouBianHuaMaiRu8: {
            type: "int64",
            id: 1022
          },
          PanKouBianHuaMaiRu9: {
            type: "int64",
            id: 1023
          },
          PanKouBianHuaMaiRu10: {
            type: "int64",
            id: 1024
          },
          PanKouBianHuaMaiChu1: {
            type: "int64",
            id: 1025
          },
          PanKouBianHuaMaiChu2: {
            type: "int64",
            id: 1026
          },
          PanKouBianHuaMaiChu3: {
            type: "int64",
            id: 1027
          },
          PanKouBianHuaMaiChu4: {
            type: "int64",
            id: 1028
          },
          PanKouBianHuaMaiChu5: {
            type: "int64",
            id: 1029
          },
          PanKouBianHuaMaiChu6: {
            type: "int64",
            id: 1030
          },
          PanKouBianHuaMaiChu7: {
            type: "int64",
            id: 1031
          },
          PanKouBianHuaMaiChu8: {
            type: "int64",
            id: 1032
          },
          PanKouBianHuaMaiChu9: {
            type: "int64",
            id: 1033
          },
          PanKouBianHuaMaiChu10: {
            type: "int64",
            id: 1034
          },
          ShiFouGuanZhu: {
            type: "int64",
            id: 1100
          },
          XuHao: {
            type: "int64",
            id: 1101
          },
          XiaoShuWei: {
            type: "int64",
            id: 1102
          }
        }
      },
      LingZhangGuShuJu: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          ZhongWenJianCheng: {
            type: "string",
            id: 2
          },
          ZuiXinJia: {
            type: "int64",
            id: 3
          },
          ZhangFu: {
            type: "int64",
            id: 4
          }
        }
      },
      TopicInvestRank: {
        fields: {
          BianHao: {
            rule: "required",
            type: "int64",
            id: 1
          },
          ShiFouReMenZhuTi: {
            type: "int64",
            id: 2
          },
          RiPingJunZhangFuPaiMing14: {
            type: "int64",
            id: 3
          },
          RiPingJunZhangFuPaiMing30: {
            type: "int64",
            id: 4
          },
          RiReDuZhi14: {
            type: "int64",
            id: 5
          },
          RiReDuZhi30: {
            type: "int64",
            id: 6
          },
          RiReDuZhi10: {
            type: "int64",
            id: 7
          }
        }
      },
      TopicInvest: {
        fields: {
          BianHao: {
            rule: "required",
            type: "int64",
            id: 1
          },
          MingCheng: {
            type: "string",
            id: 2
          },
          ShiJian: {
            type: "int64",
            id: 3
          },
          ZhangFu: {
            type: "int64",
            id: 4
          },
          LiangBi: {
            type: "int64",
            id: 5
          },
          HuanShou: {
            type: "int64",
            id: 6
          },
          ShangZhangJiaShu: {
            type: "int64",
            id: 7
          },
          PingPanJiaShu: {
            type: "int64",
            id: 8
          },
          XiaDieJiaShu: {
            type: "int64",
            id: 9
          },
          LingZhangGu: {
            type: "LingZhangGuShuJu",
            id: 10
          },
          ShiFouReMenZhuTi: {
            type: "int64",
            id: 11
          },
          RiPingJunZhangFuPaiMing14: {
            type: "int64",
            id: 12
          },
          RiPingJunZhangFuPaiMing30: {
            type: "int64",
            id: 13
          },
          RiReDuZhi14: {
            type: "int64",
            id: 14
          },
          RiReDuZhi30: {
            type: "int64",
            id: 15
          },
          RiReDuZhi10: {
            type: "int64",
            id: 16
          },
          GeGuShu: {
            type: "int64",
            id: 17
          },
          DangYueZhangFu: {
            type: "int64",
            id: 18
          }
        }
      },
      LiShiHangQing: {
        fields: {
          ShiJian: {
            rule: "required",
            type: "int64",
            id: 1
          },
          ZhangFu: {
            rule: "required",
            type: "int64",
            id: 2
          }
        }
      },
      LiShiZouShi: {
        fields: {
          HangQing: {
            rule: "repeated",
            type: "LiShiHangQing",
            id: 1,
            options: {}
          }
        }
      },
      TopicInvestHistory: {
        fields: {
          BianHao: {
            rule: "required",
            type: "int64",
            id: 1
          },
          MingCheng: {
            type: "string",
            id: 2
          },
          ShiJian: {
            type: "int64",
            id: 3
          },
          LiShi: {
            type: "LiShiZouShi",
            id: 4
          }
        }
      },
      TopicInvestInfo: {
        fields: {
          BianHao: {
            rule: "required",
            type: "int64",
            id: 1
          },
          MingCheng: {
            rule: "required",
            type: "string",
            id: 2
          },
          ChengFenGu: {
            rule: "repeated",
            type: "string",
            id: 3,
            options: {
              packed: false
            }
          },
          LeiBie: {
            type: "int64",
            id: 4
          }
        }
      },
      ZhiBiaoShuChu: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          ShuJu: {
            rule: "repeated",
            type: "ZBShuJu",
            id: 2,
            options: {}
          },
          ShuXing: {
            rule: "repeated",
            type: "ZBShuXing",
            id: 3,
            options: {}
          },
          HuiTu: {
            rule: "repeated",
            type: "ZBHuiTu",
            id: 4,
            options: {}
          }
        },
        nested: {
          ZBShuJu: {
            fields: {
              ShiJian: {
                rule: "required",
                type: "int64",
                id: 1
              },
              JieGuo: {
                rule: "repeated",
                type: "int64",
                id: 2,
                options: {
                  packed: false
                }
              }
            }
          },
          ZBShuXing: {
            fields: {
              MingCheng: {
                rule: "required",
                type: "string",
                id: 1
              },
              YanSe: {
                rule: "required",
                type: "int64",
                id: 2
              },
              LeiXing: {
                rule: "required",
                type: "SXLeiXing",
                id: 3
              },
              KuanDu: {
                rule: "required",
                type: "int64",
                id: 4
              },
              JingDu: {
                rule: "required",
                type: "int64",
                id: 5
              },
              DuiQi: {
                rule: "required",
                type: "int64",
                id: 6
              },
              ShuXing: {
                rule: "required",
                type: "int64",
                id: 7
              },
              YiDong: {
                rule: "required",
                type: "int64",
                id: 8
              },
              CengCi: {
                rule: "required",
                type: "int64",
                id: 9
              },
              BianLiangWeiZhi: {
                rule: "required",
                type: "int64",
                id: 10
              },
              KuoZhanShuXing: {
                rule: "required",
                type: "int64",
                id: 11
              },
              YouXiaoWeiZhi: {
                rule: "required",
                type: "int64",
                id: 12
              }
            },
            nested: {
              SXLeiXing: {
                values: {
                  TYPE_TEMP_EXPRESION: 0,
                  TYPE_CURV_LINE: 1,
                  TYPE_STICK_LINE: 2,
                  TYPE_COLORSTICK_LINE: 3,
                  TYPE_VOLSTICK_LINE: 4,
                  TYPE_LINESTICK_LINE: 5,
                  TYPE_CROSS_DOT: 6,
                  TYPE_CIRCLE_DOT: 7,
                  TYPE_POINT_DOT: 8,
                  TYPE_STICK3D_LINE: 9,
                  TYPE_COLOR3D_LINE: 10,
                  TYPE_DOT_DOT: 11,
                  TYPE_DASH_DOT: 12,
                  TYPE_PERCENT_BAR: 13,
                  TYPE_ENTER_LONG: 100,
                  TYPE_EXIT_LONG: 101,
                  TYPE_ENTER_SHORT: 102,
                  TYPE_EXIT_SHORT: 103
                }
              }
            }
          },
          ZBHuiTu: {
            fields: {
              LeiXing: {
                rule: "required",
                type: "HTLeiXing",
                id: 1
              },
              KuanDu: {
                rule: "required",
                type: "int64",
                id: 2
              },
              ShuXing: {
                rule: "required",
                type: "int64",
                id: 3
              },
              ShangCiJiSuan: {
                rule: "required",
                type: "int64",
                id: 4
              },
              YanSe: {
                rule: "required",
                type: "int64",
                id: 5
              },
              ShuChuLeiXing: {
                rule: "required",
                type: "ZBShuXing.SXLeiXing",
                id: 6
              },
              ShuChuShuXing: {
                rule: "required",
                type: "int64",
                id: 7
              },
              ShuChuKuoZhanShuXing: {
                rule: "required",
                type: "int64",
                id: 8
              },
              WenBen: {
                rule: "repeated",
                type: "string",
                id: 9,
                options: {
                  packed: false
                }
              },
              ShuJu: {
                rule: "repeated",
                type: "HTShuJu",
                id: 10,
                options: {
                  packed: false
                }
              }
            },
            nested: {
              HTShuJu: {
                fields: {
                  WeiZhi: {
                    rule: "required",
                    type: "int64",
                    id: 1
                  },
                  JiaGe: {
                    rule: "required",
                    type: "int64",
                    id: 2
                  },
                  CanShu: {
                    rule: "required",
                    type: "int64",
                    id: 3
                  }
                }
              },
              HTLeiXing: {
                values: {
                  TYPE_NOLINE: 0,
                  TYPE_POLYLINE: 1,
                  TYPE_LINE: 2,
                  TYPE_STICKLINE: 3,
                  TYPE_TEXT: 4,
                  TYPE_ICON: 5,
                  TYPE_TIP_TEXT: 6,
                  TYPE_BACK_GRD: 7,
                  TYPE_BACK_GRDLAST: 8,
                  TYPE_DRAWBMP: 9,
                  TYPE_VERTLINE: 10,
                  TYPE_TEXTABS: 11,
                  TYPE_TEXTREL: 12,
                  TYPE_RECTABS: 13,
                  TYPE_RECTREL: 14,
                  TYPE_FLAGTEXT: 15,
                  TYPE_MOVETEXT: 16,
                  TYPE_HORILINE: 17
                }
              }
            }
          }
        }
      },
      ZhiBiaoShuXingShuChu: {
        fields: {
          ShuChu: {
            rule: "repeated",
            type: "ZhiBiaoShuChu.ZBShuXing",
            id: 1,
            options: {}
          }
        }
      },
      ZhiBiaoHuiTuShuChu: {
        fields: {
          ShuChu: {
            rule: "repeated",
            type: "ZhiBiaoShuChu.ZBHuiTu",
            id: 1,
            options: {}
          }
        }
      },
      ZhiBiao: {
        fields: {
          MingCheng: {
            rule: "required",
            type: "string",
            id: 1
          },
          MiaoShu: {
            type: "string",
            id: 2
          },
          YongFa: {
            type: "string",
            id: 3
          },
          CanShuJingLing: {
            type: "string",
            id: 4
          },
          JianYiZu: {
            type: "string",
            id: 5
          },
          WenBen: {
            type: "string",
            id: 6
          },
          ShiJian: {
            type: "int64",
            id: 7
          },
          LeiXing: {
            type: "ZBLeiXing",
            id: 8
          },
          WenBenLeiXing: {
            type: "ZBWenBenLeiXing",
            id: 9
          },
          BanBen: {
            type: "int64",
            id: 10
          },
          ShuXing: {
            type: "int64",
            id: 11
          },
          MoRenLeiXing: {
            type: "int64",
            id: 12
          },
          ZiJieMa: {
            type: "string",
            id: 13
          },
          ChangYong: {
            type: "bool",
            id: 14
          },
          ZiDingYi: {
            type: "bool",
            id: 15
          },
          EWaiShuJu: {
            rule: "repeated",
            type: "int64",
            id: 16,
            options: {
              packed: false
            }
          },
          CanShu: {
            rule: "repeated",
            type: "ZBCanShu",
            id: 17,
            options: {}
          },
          ShuChu: {
            rule: "repeated",
            type: "ZBShuChu",
            id: 18,
            options: {}
          }
        },
        nested: {
          ZBShuChu: {
            fields: {
              MingCheng: {
                rule: "required",
                type: "string",
                id: 1
              },
              LeiXing: {
                rule: "required",
                type: "ZhiBiaoShuChu.ZBShuXing.SXLeiXing",
                id: 2
              },
              YiDong: {
                rule: "required",
                type: "int64",
                id: 3
              },
              ShuXing: {
                rule: "required",
                type: "int64",
                id: 4
              },
              YanSe: {
                rule: "required",
                type: "int64",
                id: 5
              },
              BianLiangWeiZhi: {
                rule: "required",
                type: "int64",
                id: 6
              },
              KuoZhanShuXing: {
                rule: "required",
                type: "int64",
                id: 7
              }
            }
          },
          ZBCanShu: {
            fields: {
              MingCheng: {
                rule: "required",
                type: "string",
                id: 1
              },
              MoRenZhi: {
                rule: "required",
                type: "int64",
                id: 2
              },
              ZuiDaZhi: {
                rule: "required",
                type: "int64",
                id: 3
              },
              ZuiXiaoZhi: {
                rule: "required",
                type: "int64",
                id: 4
              },
              BuChang: {
                rule: "required",
                type: "int64",
                id: 5
              }
            }
          },
          ZBLeiXing: {
            values: {
              TYPE_EXPLORER: 0,
              TYPE_SYSTEST: 1,
              TYPE_MAIN_PICT: 2,
              TYPE_MAIN_ADD: 3,
              TYPE_SUB_PICT: 4,
              TYPE_PAINT_IT: 5,
              TYPE_TEMP_INDI: 6,
              TYPE_TECHNIQUE: 7,
              TYPE_UNKNOWN: 8
            }
          },
          ZBWenBenLeiXing: {
            values: {
              TEXTTYPE_FORMULA: 0,
              TEXTTYPE_LUA: 1,
              TEXTTYPE_UNKNOWN: 2
            }
          }
        }
      },
      BlockObjOutput: {
        fields: {
          obj: {
            rule: "repeated",
            type: "string",
            id: 1,
            options: {
              packed: false
            }
          }
        }
      },
      BlockPropOutput: {
        fields: {
          name: {
            rule: "repeated",
            type: "string",
            id: 1,
            options: {
              packed: false
            }
          }
        }
      },
      QuoteDyna: {
        fields: {
          Time: {
            type: "int32",
            id: 1
          },
          LastClose: {
            type: "float",
            id: 2
          },
          High: {
            type: "float",
            id: 3
          },
          Open: {
            type: "float",
            id: 4
          },
          Low: {
            type: "float",
            id: 5
          },
          New: {
            type: "float",
            id: 6
          },
          Volume: {
            type: "float",
            id: 7
          },
          Amount: {
            type: "float",
            id: 8
          }
        }
      },
      QuoteDynaSingle: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            type: "GeGuDongTai",
            id: 2
          }
        }
      },
      QuoteDynaOutput: {
        fields: {
          Results: {
            rule: "repeated",
            type: "QuoteDynaSingle",
            id: 1,
            options: {}
          }
        }
      },
      QuoteKline: {
        fields: {
          Time: {
            type: "int32",
            id: 1
          },
          High: {
            type: "float",
            id: 2
          },
          Open: {
            type: "float",
            id: 3
          },
          Low: {
            type: "float",
            id: 4
          },
          Close: {
            type: "float",
            id: 5
          },
          Volume: {
            type: "float",
            id: 6
          },
          Amount: {
            type: "float",
            id: 7
          },
          TickCount: {
            type: "int32",
            id: 8
          },
          Advance: {
            type: "int32",
            id: 9
          },
          Decline: {
            type: "int32",
            id: 10
          }
        }
      },
      QuoteKlineSingle: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "KXian",
            id: 2,
            options: {}
          }
        }
      },
      QuoteKlineOutput: {
        fields: {
          Results: {
            rule: "repeated",
            type: "QuoteKlineSingle",
            id: 1,
            options: {}
          }
        }
      },
      QuoteTick: {
        fields: {
          Time: {
            type: "int32",
            id: 1
          },
          Price: {
            type: "float",
            id: 2
          },
          Volume: {
            type: "float",
            id: 3
          },
          Amount: {
            type: "float",
            id: 4
          },
          TickCount: {
            type: "int32",
            id: 5
          },
          BuyPrice: {
            rule: "repeated",
            type: "float",
            id: 6,
            options: {
              packed: false
            }
          },
          BuyVolume: {
            rule: "repeated",
            type: "float",
            id: 7,
            options: {
              packed: false
            }
          },
          SellPrice: {
            rule: "repeated",
            type: "float",
            id: 8,
            options: {
              packed: false
            }
          },
          SellVolume: {
            rule: "repeated",
            type: "float",
            id: 9,
            options: {
              packed: false
            }
          },
          Outter: {
            type: "int32",
            id: 10
          }
        }
      },
      QuoteTickSingle: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "FenBiChengJiao",
            id: 2,
            options: {}
          },
          QingPan: {
            type: "int64",
            id: 3
          }
        }
      },
      QuoteTickOutput: {
        fields: {
          Results: {
            rule: "repeated",
            type: "QuoteTickSingle",
            id: 1,
            options: {}
          }
        }
      },
      QuoteMin: {
        fields: {
          Time: {
            type: "int32",
            id: 1
          },
          Price: {
            type: "float",
            id: 2
          },
          Volume: {
            type: "float",
            id: 3
          },
          Amount: {
            type: "float",
            id: 4
          },
          TickCount: {
            type: "int32",
            id: 5
          },
          BuyPrice: {
            rule: "repeated",
            type: "float",
            id: 6,
            options: {
              packed: false
            }
          },
          BuyVolume: {
            rule: "repeated",
            type: "float",
            id: 7,
            options: {
              packed: false
            }
          },
          SellPrice: {
            rule: "repeated",
            type: "float",
            id: 8,
            options: {
              packed: false
            }
          },
          SellVolume: {
            rule: "repeated",
            type: "float",
            id: 9,
            options: {
              packed: false
            }
          }
        }
      },
      QuoteMinSingle: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "FenShi",
            id: 2,
            options: {}
          },
          RiQi: {
            type: "int64",
            id: 3
          },
          ShiQu: {
            type: "int64",
            id: 4
          },
          JiHeJingJiaDianShu: {
            type: "int64",
            id: 5
          },
          JiaoYiShiJianDuan: {
            rule: "repeated",
            type: "JiaoYiShiJianDuanJieGou",
            id: 6,
            options: {}
          },
          ZuoShou: {
            type: "int64",
            id: 7
          },
          QingPan: {
            type: "int64",
            id: 8
          },
          ZuoRiJieSuanJia: {
            type: "int64",
            id: 9
          },
          LiShiFenShi: {
            rule: "repeated",
            type: "FenShiLishi",
            id: 10,
            options: {}
          }
        },
        nested: {
          JiaoYiShiJianDuanJieGou: {
            fields: {
              KaiShiShiJian: {
                type: "int64",
                id: 1
              },
              JieShuShiJian: {
                type: "int64",
                id: 2
              },
              KaiShiRiQi: {
                type: "int64",
                id: 3
              },
              JieShuRiQi: {
                type: "int64",
                id: 4
              }
            }
          }
        }
      },
      QuoteMinOutput: {
        fields: {
          Results: {
            rule: "repeated",
            type: "QuoteMinSingle",
            id: 1,
            options: {}
          }
        }
      },
      QuoteBOrder: {
        fields: {
          ShiJian: {
            type: "int64",
            id: 1
          },
          WeiTuoMaiRu: {
            type: "int64",
            id: 2
          },
          WeiTuoMaiChu: {
            type: "int64",
            id: 3
          },
          MaiRuZhongDanBiLi: {
            type: "int64",
            id: 4
          },
          MaiRuDaDanBiLi: {
            type: "int64",
            id: 5
          },
          MaiRuTeDaDanBiLi: {
            type: "int64",
            id: 6
          },
          MaiChuZhongDanBiLi: {
            type: "int64",
            id: 7
          },
          MaiChuDaDanBiLi: {
            type: "int64",
            id: 8
          },
          MaiChuTeDaDanBiLi: {
            type: "int64",
            id: 9
          },
          DuanXianMaiRu: {
            type: "int64",
            id: 10
          },
          DuanXianMaiChu: {
            type: "int64",
            id: 11
          },
          DuanXianChiHuo: {
            type: "int64",
            id: 12
          },
          DuanXianTuHuo: {
            type: "int64",
            id: 13
          },
          DaDanLiuRuJinE: {
            type: "int64",
            id: 14
          },
          DaDanLiuChuJinE: {
            type: "int64",
            id: 15
          },
          DaDanJingLiuRuJinE: {
            type: "int64",
            id: 16
          }
        }
      },
      QuoteBOrderSingle: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "QuoteBOrder",
            id: 2,
            options: {}
          }
        }
      },
      QuoteBOrderOutput: {
        fields: {
          Results: {
            rule: "repeated",
            type: "QuoteBOrderSingle",
            id: 1,
            options: {}
          }
        }
      },
      QuoteDivid: {
        fields: {
          ShiJian: {
            type: "int64",
            id: 1
          },
          ChuQuanChengShu: {
            type: "int64",
            id: 2
          },
          ChuQuanPianYi: {
            type: "int64",
            id: 3
          }
        }
      },
      QuoteDividSingle: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "QuoteDivid",
            id: 2,
            options: {}
          }
        }
      },
      QuoteDividOutput: {
        fields: {
          Results: {
            rule: "repeated",
            type: "QuoteDividSingle",
            id: 1,
            options: {}
          }
        }
      },
      QuoteDynaMinSingle: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "GeGuDongTai",
            id: 2,
            options: {}
          },
          QingPan: {
            type: "int64",
            id: 3
          }
        }
      },
      QuoteReportSingle: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "ZhubiDangri",
            id: 2,
            options: {}
          },
          QingPan: {
            type: "int64",
            id: 3
          }
        }
      },
      QuoteQueueSingle: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "WeiTuoDuiLie",
            id: 2,
            options: {}
          }
        }
      },
      QuoteHistoryMinSingle: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "FenShiLishi",
            id: 2,
            options: {}
          },
          ZuoShou: {
            type: "int64",
            id: 3
          }
        }
      },
      QuoteFundFlow: {
        fields: {
          ShiJian: {
            type: "int64",
            id: 1
          },
          DaDanLiuRuJinE: {
            type: "int64",
            id: 2
          },
          DaDanLiuChuJinE: {
            type: "int64",
            id: 3
          },
          DaDanJingLiuRuJinE: {
            type: "int64",
            id: 4
          }
        }
      },
      QuoteFundFlowSingle: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "QuoteFundFlow",
            id: 2,
            options: {}
          }
        }
      },
      QuoteQueueMinSingle: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "WeiTuoDuiLie",
            id: 2,
            options: {}
          },
          QingPan: {
            type: "int64",
            id: 3
          }
        }
      },
      QuoteBOrderMin: {
        fields: {
          ShiJian: {
            type: "int64",
            id: 1
          },
          JingMaiRuTeDaDanBiLi: {
            type: "int64",
            id: 2
          },
          JingMaiRuDaDanBiLi: {
            type: "int64",
            id: 3
          },
          JingMaiRuZhongDanBiLi: {
            type: "int64",
            id: 4
          },
          JingMaiRuXiaoDanBiLi: {
            type: "int64",
            id: 5
          }
        }
      },
      QuoteBOrderMinSingle: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "QuoteBOrderMin",
            id: 2,
            options: {}
          },
          QingPan: {
            type: "int64",
            id: 3
          }
        }
      },
      FenBiChengJiao: {
        fields: {
          Id: {
            rule: "required",
            type: "int64",
            id: 1
          },
          ShiJian: {
            rule: "required",
            type: "int64",
            id: 2
          },
          ChengJiaoJia: {
            type: "int64",
            id: 3
          },
          ChengJiaoLiang: {
            type: "int64",
            id: 4
          },
          ChengJiaoE: {
            type: "int64",
            id: 5
          },
          ChengJiaoDanBiShu: {
            type: "int64",
            id: 6
          },
          ShiFouZhuDongXingMaiDan: {
            type: "int64",
            id: 7
          },
          MaiMaiFangXiang: {
            type: "int64",
            id: 8
          },
          DanCiChengJiaoLiang: {
            type: "int64",
            id: 9
          },
          DanCiChengJiaoE: {
            type: "int64",
            id: 10
          },
          DanCiChengJiaoDanBiShu: {
            type: "int64",
            id: 11
          }
        }
      },
      GeGuDongTai: {
        fields: {
          Id: {
            rule: "required",
            type: "int64",
            id: 1
          },
          ShiJian: {
            rule: "required",
            type: "int64",
            id: 2
          },
          ZuiXinJia: {
            type: "int64",
            id: 3
          },
          KaiPanJia: {
            type: "int64",
            id: 4
          },
          ZuiGaoJia: {
            type: "int64",
            id: 5
          },
          ZuiDiJia: {
            type: "int64",
            id: 6
          },
          ZuoShou: {
            type: "int64",
            id: 7
          },
          JunJia: {
            type: "int64",
            id: 8
          },
          ZhangDie: {
            type: "int64",
            id: 9
          },
          ZhangFu: {
            type: "int64",
            id: 10
          },
          ZhenFu: {
            type: "int64",
            id: 11
          },
          ChengJiaoLiang: {
            type: "int64",
            id: 12
          },
          XianShou: {
            type: "int64",
            id: 13
          },
          ChengJiaoE: {
            type: "int64",
            id: 14
          },
          ZongChengJiaoBiShu: {
            type: "int64",
            id: 15
          },
          MeiBiChengJiaoGuShu: {
            type: "int64",
            id: 16
          },
          HuanShou: {
            type: "int64",
            id: 17
          },
          LiangBi: {
            type: "int64",
            id: 18
          },
          NeiPan: {
            type: "int64",
            id: 19
          },
          WaiPan: {
            type: "int64",
            id: 20
          },
          ZongMaiRu: {
            type: "int64",
            id: 21
          },
          ZongMaiChu: {
            type: "int64",
            id: 22
          },
          ZongMaiRuJunJia: {
            type: "int64",
            id: 23
          },
          ZongMaiChuJunJia: {
            type: "int64",
            id: 24
          },
          ZhangTing: {
            type: "int64",
            id: 25
          },
          DieTing: {
            type: "int64",
            id: 26
          },
          FenZhongZhangFu1: {
            type: "int64",
            id: 27
          },
          FenZhongZhangFu2: {
            type: "int64",
            id: 28
          },
          FenZhongZhangFu3: {
            type: "int64",
            id: 29
          },
          FenZhongZhangFu4: {
            type: "int64",
            id: 30
          },
          FenZhongZhangFu5: {
            type: "int64",
            id: 31
          },
          WeiTuoMaiRuJia1: {
            type: "int64",
            id: 32
          },
          WeiTuoMaiRuLiang1: {
            type: "int64",
            id: 33
          },
          WeiTuoMaiRuJia2: {
            type: "int64",
            id: 34
          },
          WeiTuoMaiRuLiang2: {
            type: "int64",
            id: 35
          },
          WeiTuoMaiRuJia3: {
            type: "int64",
            id: 36
          },
          WeiTuoMaiRuLiang3: {
            type: "int64",
            id: 37
          },
          WeiTuoMaiRuJia4: {
            type: "int64",
            id: 38
          },
          WeiTuoMaiRuLiang4: {
            type: "int64",
            id: 39
          },
          WeiTuoMaiRuJia5: {
            type: "int64",
            id: 40
          },
          WeiTuoMaiRuLiang5: {
            type: "int64",
            id: 41
          },
          WeiTuoMaiChuJia1: {
            type: "int64",
            id: 42
          },
          WeiTuoMaiChuLiang1: {
            type: "int64",
            id: 43
          },
          WeiTuoMaiChuJia2: {
            type: "int64",
            id: 44
          },
          WeiTuoMaiChuLiang2: {
            type: "int64",
            id: 45
          },
          WeiTuoMaiChuJia3: {
            type: "int64",
            id: 46
          },
          WeiTuoMaiChuLiang3: {
            type: "int64",
            id: 47
          },
          WeiTuoMaiChuJia4: {
            type: "int64",
            id: 48
          },
          WeiTuoMaiChuLiang4: {
            type: "int64",
            id: 49
          },
          WeiTuoMaiChuJia5: {
            type: "int64",
            id: 50
          },
          WeiTuoMaiChuLiang5: {
            type: "int64",
            id: 51
          },
          WeiBi: {
            type: "int64",
            id: 52
          },
          WeiCha: {
            type: "int64",
            id: 53
          },
          JiaQuanPingJunWeiTuoMaiRuJia: {
            type: "int64",
            id: 54
          },
          WeiTuoMaiRuZongLiang: {
            type: "int64",
            id: 55
          },
          JiaQuanPingJunWeiTuoMaiChuJia: {
            type: "int64",
            id: 56
          },
          WeiTuoMaiChuZongLiang: {
            type: "int64",
            id: 57
          },
          KuoZhanMaiRuJia1: {
            type: "int64",
            id: 58
          },
          KuoZhanMaiRuJia2: {
            type: "int64",
            id: 59
          },
          KuoZhanMaiRuJia3: {
            type: "int64",
            id: 60
          },
          KuoZhanMaiRuJia4: {
            type: "int64",
            id: 61
          },
          KuoZhanMaiRuJia5: {
            type: "int64",
            id: 62
          },
          KuoZhanMaiRuLiang1: {
            type: "int64",
            id: 63
          },
          KuoZhanMaiRuLiang2: {
            type: "int64",
            id: 64
          },
          KuoZhanMaiRuLiang3: {
            type: "int64",
            id: 65
          },
          KuoZhanMaiRuLiang4: {
            type: "int64",
            id: 66
          },
          KuoZhanMaiRuLiang5: {
            type: "int64",
            id: 67
          },
          KuoZhanMaiChuJia1: {
            type: "int64",
            id: 68
          },
          KuoZhanMaiChuJia2: {
            type: "int64",
            id: 69
          },
          KuoZhanMaiChuJia3: {
            type: "int64",
            id: 70
          },
          KuoZhanMaiChuJia4: {
            type: "int64",
            id: 71
          },
          KuoZhanMaiChuJia5: {
            type: "int64",
            id: 72
          },
          KuoZhanMaiChuLiang1: {
            type: "int64",
            id: 73
          },
          KuoZhanMaiChuLiang2: {
            type: "int64",
            id: 74
          },
          KuoZhanMaiChuLiang3: {
            type: "int64",
            id: 75
          },
          KuoZhanMaiChuLiang4: {
            type: "int64",
            id: 76
          },
          KuoZhanMaiChuLiang5: {
            type: "int64",
            id: 77
          },
          ChiCang: {
            type: "int64",
            id: 78
          },
          ZengCang: {
            type: "int64",
            id: 79
          },
          RiZeng: {
            type: "int64",
            id: 80
          },
          JieSuanJia: {
            type: "int64",
            id: 81
          },
          ZuoRiJieSuanJia: {
            type: "int64",
            id: 82
          },
          KaiPing: {
            type: "int64",
            id: 83
          },
          JieSuanZhangDie: {
            type: "int64",
            id: 84
          },
          JieSuanZhangFu: {
            type: "int64",
            id: 85
          },
          PanKouBianHuaMaiRu1: {
            type: "int64",
            id: 86
          },
          PanKouBianHuaMaiRu2: {
            type: "int64",
            id: 87
          },
          PanKouBianHuaMaiRu3: {
            type: "int64",
            id: 88
          },
          PanKouBianHuaMaiRu4: {
            type: "int64",
            id: 89
          },
          PanKouBianHuaMaiRu5: {
            type: "int64",
            id: 90
          },
          PanKouBianHuaMaiRu6: {
            type: "int64",
            id: 91
          },
          PanKouBianHuaMaiRu7: {
            type: "int64",
            id: 92
          },
          PanKouBianHuaMaiRu8: {
            type: "int64",
            id: 93
          },
          PanKouBianHuaMaiRu9: {
            type: "int64",
            id: 94
          },
          PanKouBianHuaMaiRu10: {
            type: "int64",
            id: 95
          },
          PanKouBianHuaMaiChu1: {
            type: "int64",
            id: 96
          },
          PanKouBianHuaMaiChu2: {
            type: "int64",
            id: 97
          },
          PanKouBianHuaMaiChu3: {
            type: "int64",
            id: 98
          },
          PanKouBianHuaMaiChu4: {
            type: "int64",
            id: 99
          },
          PanKouBianHuaMaiChu5: {
            type: "int64",
            id: 100
          },
          PanKouBianHuaMaiChu6: {
            type: "int64",
            id: 101
          },
          PanKouBianHuaMaiChu7: {
            type: "int64",
            id: 102
          },
          PanKouBianHuaMaiChu8: {
            type: "int64",
            id: 103
          },
          PanKouBianHuaMaiChu9: {
            type: "int64",
            id: 104
          },
          PanKouBianHuaMaiChu10: {
            type: "int64",
            id: 105
          }
        }
      },
      MaiMaiPan: {
        fields: {
          Id: {
            rule: "required",
            type: "int64",
            id: 1
          },
          ShiJian: {
            rule: "required",
            type: "int64",
            id: 2
          },
          WeiTuoMaiRuJia1: {
            type: "int64",
            id: 3
          },
          WeiTuoMaiRuLiang1: {
            type: "int64",
            id: 4
          },
          WeiTuoMaiRuJia2: {
            type: "int64",
            id: 5
          },
          WeiTuoMaiRuLiang2: {
            type: "int64",
            id: 6
          },
          WeiTuoMaiRuJia3: {
            type: "int64",
            id: 7
          },
          WeiTuoMaiRuLiang3: {
            type: "int64",
            id: 8
          },
          WeiTuoMaiRuJia4: {
            type: "int64",
            id: 9
          },
          WeiTuoMaiRuLiang4: {
            type: "int64",
            id: 10
          },
          WeiTuoMaiRuJia5: {
            type: "int64",
            id: 11
          },
          WeiTuoMaiRuLiang5: {
            type: "int64",
            id: 12
          },
          WeiTuoMaiChuJia1: {
            type: "int64",
            id: 13
          },
          WeiTuoMaiChuLiang1: {
            type: "int64",
            id: 14
          },
          WeiTuoMaiChuJia2: {
            type: "int64",
            id: 15
          },
          WeiTuoMaiChuLiang2: {
            type: "int64",
            id: 16
          },
          WeiTuoMaiChuJia3: {
            type: "int64",
            id: 17
          },
          WeiTuoMaiChuLiang3: {
            type: "int64",
            id: 18
          },
          WeiTuoMaiChuJia4: {
            type: "int64",
            id: 19
          },
          WeiTuoMaiChuLiang4: {
            type: "int64",
            id: 20
          },
          WeiTuoMaiChuJia5: {
            type: "int64",
            id: 21
          },
          WeiTuoMaiChuLiang5: {
            type: "int64",
            id: 22
          },
          WeiBi: {
            type: "int64",
            id: 23
          },
          WeiCha: {
            type: "int64",
            id: 24
          }
        }
      },
      KuoZhanMaiMaiPan: {
        fields: {
          Id: {
            rule: "required",
            type: "int64",
            id: 1
          },
          ShiJian: {
            rule: "required",
            type: "int64",
            id: 2
          },
          JiaQuanPingJunWeiTuoMaiRuJia: {
            type: "int64",
            id: 3
          },
          WeiTuoMaiRuZongLiang: {
            type: "int64",
            id: 4
          },
          JiaQuanPingJunWeiTuoMaiChuJia: {
            type: "int64",
            id: 5
          },
          WeiTuoMaiChuZongLiang: {
            type: "int64",
            id: 6
          },
          KuoZhanMaiRuJia1: {
            type: "int64",
            id: 7
          },
          KuoZhanMaiRuJia2: {
            type: "int64",
            id: 8
          },
          KuoZhanMaiRuJia3: {
            type: "int64",
            id: 9
          },
          KuoZhanMaiRuJia4: {
            type: "int64",
            id: 10
          },
          KuoZhanMaiRuJia5: {
            type: "int64",
            id: 11
          },
          KuoZhanMaiRuLiang1: {
            type: "int64",
            id: 12
          },
          KuoZhanMaiRuLiang2: {
            type: "int64",
            id: 13
          },
          KuoZhanMaiRuLiang3: {
            type: "int64",
            id: 14
          },
          KuoZhanMaiRuLiang4: {
            type: "int64",
            id: 15
          },
          KuoZhanMaiRuLiang5: {
            type: "int64",
            id: 16
          },
          KuoZhanMaiChuJia1: {
            type: "int64",
            id: 17
          },
          KuoZhanMaiChuJia2: {
            type: "int64",
            id: 18
          },
          KuoZhanMaiChuJia3: {
            type: "int64",
            id: 19
          },
          KuoZhanMaiChuJia4: {
            type: "int64",
            id: 20
          },
          KuoZhanMaiChuJia5: {
            type: "int64",
            id: 21
          },
          KuoZhanMaiChuLiang1: {
            type: "int64",
            id: 22
          },
          KuoZhanMaiChuLiang2: {
            type: "int64",
            id: 23
          },
          KuoZhanMaiChuLiang3: {
            type: "int64",
            id: 24
          },
          KuoZhanMaiChuLiang4: {
            type: "int64",
            id: 25
          },
          KuoZhanMaiChuLiang5: {
            type: "int64",
            id: 26
          }
        }
      },
      QuanMaiMaiPan: {
        fields: {
          Id: {
            rule: "required",
            type: "int64",
            id: 1
          },
          ShiJian: {
            type: "int64",
            id: 2
          },
          WeiMaiRuPan: {
            rule: "repeated",
            type: "MaiMaiBiao",
            id: 3,
            options: {}
          },
          WeiMaiChuPan: {
            rule: "repeated",
            type: "MaiMaiBiao",
            id: 4,
            options: {}
          }
        },
        nested: {
          MaiMaiBiao: {
            fields: {
              WeiZhi: {
                type: "int64",
                id: 1
              },
              Jia: {
                type: "int64",
                id: 2
              },
              Liang: {
                type: "int64",
                id: 3
              },
              DanShu: {
                type: "int64",
                id: 4
              }
            }
          }
        }
      },
      WeiTuoDuiLie: {
        fields: {
          Obj: {
            type: "string",
            id: 1
          },
          ShiJian: {
            rule: "required",
            type: "int64",
            id: 2
          },
          MaiRuDuiLie: {
            rule: "repeated",
            type: "WeiTuo",
            id: 3,
            options: {}
          },
          MaiChuDuiLie: {
            rule: "repeated",
            type: "WeiTuo",
            id: 4,
            options: {}
          }
        },
        nested: {
          WeiTuo: {
            fields: {
              Jia: {
                rule: "required",
                type: "int64",
                id: 1
              },
              BiShu: {
                type: "int64",
                id: 2
              },
              Liang: {
                rule: "repeated",
                type: "int64",
                id: 3,
                options: {
                  packed: false
                }
              },
              ZongLiang: {
                type: "int64",
                id: 4
              }
            }
          }
        }
      },
      Level2TongJi: {
        fields: {
          Id: {
            type: "int64",
            id: 1
          },
          ShiJian: {
            type: "int64",
            id: 2
          },
          WeiTuoMaiRu: {
            type: "int64",
            id: 3
          },
          WeiTuoMaiChu: {
            type: "int64",
            id: 4
          },
          MaiRuZhongDanBiLi: {
            type: "int64",
            id: 5
          },
          MaiRuDaDanBiLi: {
            type: "int64",
            id: 6
          },
          MaiRuTeDaDanBiLi: {
            type: "int64",
            id: 7
          },
          MaiChuZhongDanBiLi: {
            type: "int64",
            id: 8
          },
          MaiChuDaDanBiLi: {
            type: "int64",
            id: 9
          },
          MaiChuTeDaDanBiLi: {
            type: "int64",
            id: 10
          },
          DuanXianMaiRu: {
            type: "int64",
            id: 11
          },
          DuanXianMaiChu: {
            type: "int64",
            id: 12
          },
          DuanXianChiHuo: {
            type: "int64",
            id: 13
          },
          DuanXianTuHuo: {
            type: "int64",
            id: 14
          },
          ChengJiaoLiang: {
            type: "int64",
            id: 15
          },
          ChengJiaoE: {
            type: "int64",
            id: 16
          }
        }
      },
      DynaMMP: {
        fields: {
          Rows: {
            rule: "repeated",
            type: "DynaMaiMaiPrice",
            id: 1,
            options: {}
          }
        }
      },
      DynaMaiMaiPrice: {
        fields: {
          JiaGe: {
            type: "int64",
            id: 1
          },
          Liang: {
            type: "int64",
            id: 2
          },
          ChaZhi: {
            type: "int64",
            id: 3
          }
        }
      },
      DynaMaiMaiZongLiang: {
        fields: {
          ShiJian: {
            rule: "required",
            type: "int64",
            id: 1
          },
          WeiTuoMaiRuZongLiang: {
            type: "int64",
            id: 2
          },
          WeiTuoMaiChuZongLiang: {
            type: "int64",
            id: 3
          }
        }
      },
      DynaFenshiStatus: {
        fields: {
          ShiJian: {
            rule: "required",
            type: "int64",
            id: 1
          },
          IndexStatuc: {
            type: "int64",
            id: 2
          },
          DataStatus: {
            type: "GeGuDongTai",
            id: 3
          }
        }
      },
      KXian: {
        fields: {
          ShiJian: {
            rule: "required",
            type: "int64",
            id: 1
          },
          KaiPanJia: {
            type: "int64",
            id: 2
          },
          ZuiGaoJia: {
            type: "int64",
            id: 3
          },
          ZuiDiJia: {
            type: "int64",
            id: 4
          },
          ShouPanJia: {
            type: "int64",
            id: 5
          },
          ChengJiaoLiang: {
            type: "int64",
            id: 6
          },
          ChengJiaoE: {
            type: "int64",
            id: 7
          },
          ChengJiaoBiShu: {
            type: "int64",
            id: 8
          },
          ShangZhangJiaShu: {
            type: "int64",
            id: 9
          },
          XiaDieJiaShu: {
            type: "int64",
            id: 10
          },
          ChiCang: {
            type: "int64",
            id: 11
          },
          ZengCang: {
            type: "int64",
            id: 12
          },
          ZengLiang: {
            type: "int64",
            id: 13
          },
          JieSuanJia: {
            type: "int64",
            id: 14
          }
        }
      },
      FenShi: {
        fields: {
          ShiJian: {
            rule: "required",
            type: "int64",
            id: 1
          },
          ChengJiaoJia: {
            type: "int64",
            id: 2
          },
          ChengJiaoLiang: {
            type: "int64",
            id: 3
          },
          ChengJiaoE: {
            type: "int64",
            id: 4
          },
          JunJia: {
            type: "int64",
            id: 5
          },
          LingXianZhiBiao: {
            type: "int64",
            id: 6
          },
          DuoKongXian: {
            type: "int64",
            id: 7
          },
          WeiTuoMaiRuZongLiang: {
            type: "int64",
            id: 8
          },
          WeiTuoMaiChuZongLiang: {
            type: "int64",
            id: 9
          }
        }
      },
      FenShiLishi: {
        fields: {
          Rows: {
            rule: "repeated",
            type: "FenShi",
            id: 1,
            options: {}
          },
          RiQi: {
            type: "int64",
            id: 2
          }
        }
      },
      DynaAlib: {
        fields: {
          ShiJian: {
            rule: "required",
            type: "int64",
            id: 1
          },
          ID: {
            rule: "required",
            type: "int64",
            id: 2
          },
          Objs: {
            rule: "repeated",
            type: "string",
            id: 3,
            options: {
              packed: false
            }
          },
          DAObjs: {
            rule: "repeated",
            type: "DynaAlibObj",
            id: 4,
            options: {}
          }
        }
      },
      DynaAlibObj: {
        fields: {
          Objs: {
            rule: "repeated",
            type: "string",
            id: 1,
            options: {
              packed: false
            }
          }
        }
      },
      BackUpState: {
        fields: {
          Market: {
            rule: "required",
            type: "string",
            id: 1
          },
          BackUpTime: {
            type: "int64",
            id: 2
          },
          BackUpCloseStatus: {
            type: "int64",
            id: 3
          },
          CloseTime: {
            type: "int64",
            id: 4
          },
          CloseStatus: {
            type: "int64",
            id: 5
          }
        }
      },
      LingxianDuokongZhibiao: {
        fields: {
          ShiJian: {
            rule: "required",
            type: "int64",
            id: 1
          },
          LingXianZhiBiao: {
            type: "int64",
            id: 2
          },
          DuoKongXian: {
            type: "int64",
            id: 3
          }
        }
      },
      LingxianDuokongZhibiaoStatus: {
        fields: {
          JiaoYiRiQi: {
            rule: "required",
            type: "int64",
            id: 1
          },
          IndexStatuc: {
            type: "int64",
            id: 2
          },
          DataStatus: {
            type: "LingxianDuokongZhibiao",
            id: 3
          }
        }
      },
      ZhubiDangri: {
        fields: {
          Id: {
            rule: "required",
            type: "int64",
            id: 1
          },
          ShiJian: {
            rule: "required",
            type: "int64",
            id: 2
          },
          ZuiXinJia: {
            type: "int64",
            id: 3
          },
          ChengJiaoLiang: {
            type: "int64",
            id: 4
          },
          ZhubiId: {
            type: "int64",
            id: 5
          }
        }
      },
      JPBLeiXing: {
        values: {
          TYPE_OBJ: 0,
          TYPE_INDI: 1,
          TYPE_TOPIC: 2,
          TYPE_LHB: 3,
          TYPE_BLKOBJ: 4,
          TYPE_TOPICANALY: 5,
          TYPE_OBJPHONE: 6
        }
      },
      JPBShuJu: {
        fields: {
          DaiMa: {
            rule: "required",
            type: "string",
            id: 1
          },
          MingCheng: {
            rule: "required",
            type: "string",
            id: 2
          },
          ShuXing: {
            type: "string",
            id: 3
          },
          KuoZhan: {
            type: "string",
            id: 4
          }
        }
      },
      JPBShuChu: {
        fields: {
          LeiXing: {
            rule: "required",
            type: "JPBLeiXing",
            id: 1
          },
          ShuJu: {
            rule: "repeated",
            type: "JPBShuJu",
            id: 2,
            options: {}
          }
        }
      },
      JianPanBaoShuChu: {
        fields: {
          GuanJianZi: {
            rule: "required",
            type: "string",
            id: 1
          },
          JieGuo: {
            rule: "repeated",
            type: "JPBShuChu",
            id: 2,
            options: {}
          }
        }
      },
      Token: {
        fields: {
          result: {
            rule: "required",
            type: "int32",
            id: 1,
            options: {
              "default": 0
            }
          },
          token: {
            type: "string",
            id: 2
          },
          version: {
            type: "int64",
            id: 3
          },
          createTime: {
            type: "int64",
            id: 4
          },
          refreshTime: {
            type: "int64",
            id: 5
          },
          duration: {
            type: "int64",
            id: 6
          },
          appid: {
            type: "string",
            id: 7
          },
          device: {
            type: "string",
            id: 8
          },
          uid: {
            type: "string",
            id: 9
          }
        }
      },
      PaiXu: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Value: {
            type: "int64",
            id: 2
          },
          Text: {
            type: "string",
            id: 3
          }
        }
      },
      PaiMing: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Value: {
            type: "int64",
            id: 2
          },
          Text: {
            type: "string",
            id: 3
          },
          MingCi: {
            type: "int64",
            id: 4
          }
        }
      },
      NewsInfoValue: {
        fields: {
          ver: {
            rule: "required",
            type: "string",
            id: 1
          },
          act: {
            rule: "required",
            type: "uint32",
            id: 2
          },
          newsID: {
            rule: "required",
            type: "uint64",
            id: 3
          },
          newsTitle: {
            type: "string",
            id: 4
          }
        }
      },
      XinWenXinXiEx: {
        fields: {
          source: {
            type: "string",
            id: 1
          },
          date: {
            type: "string",
            id: 2
          },
          title: {
            type: "string",
            id: 3
          },
          context: {
            type: "string",
            id: 4
          }
        }
      },
      XinWenXinXiOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          TotalCount: {
            rule: "required",
            type: "int64",
            id: 2
          },
          Data: {
            rule: "repeated",
            type: "XinWenXinXiEx",
            id: 3,
            options: {}
          }
        }
      },
      XinWenXinXiZhongXin: {
        fields: {
          date: {
            type: "string",
            id: 1
          },
          title: {
            type: "string",
            id: 2
          },
          context: {
            type: "string",
            id: 3
          },
          source: {
            type: "string",
            id: 4
          }
        }
      },
      XinWenXinXiZhongXinOutput: {
        fields: {
          TotalCount: {
            rule: "required",
            type: "int64",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "XinWenXinXiZhongXin",
            id: 2,
            options: {}
          }
        }
      },
      GongGaoXinXi: {
        fields: {
          source: {
            type: "string",
            id: 1
          },
          date: {
            type: "string",
            id: 2
          },
          title: {
            type: "string",
            id: 3
          },
          context: {
            type: "string",
            id: 4
          }
        }
      },
      GongGaoXinXiOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          TotalCount: {
            rule: "required",
            type: "int64",
            id: 2
          },
          Data: {
            rule: "repeated",
            type: "GongGaoXinXi",
            id: 3,
            options: {}
          }
        }
      },
      GongGaoXinXiZhongXin: {
        fields: {
          date: {
            type: "string",
            id: 1
          },
          title: {
            type: "string",
            id: 2
          },
          context: {
            type: "string",
            id: 3
          },
          source: {
            type: "string",
            id: 4
          }
        }
      },
      GongGaoXinXiZhongXinOutput: {
        fields: {
          TotalCount: {
            rule: "required",
            type: "int64",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "GongGaoXinXiZhongXin",
            id: 2,
            options: {}
          }
        }
      },
      YiZhiXinYeJiYuCe: {
        fields: {
          baoGaoRiQi: {
            rule: "required",
            type: "string",
            id: 1
          },
          yuCeNianDu: {
            rule: "required",
            type: "string",
            id: 2
          },
          jingLiRun: {
            type: "int64",
            id: 3
          },
          meiGuShouYi: {
            type: "int64",
            id: 4
          }
        }
      },
      YiZhiXinYeJiYuCeOutPut: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "YiZhiXinYeJiYuCe",
            id: 2,
            options: {}
          }
        }
      },
      YiZhiXinTouZiPinJi: {
        fields: {
          pinJiRiQi: {
            rule: "required",
            type: "string",
            id: 1
          },
          zhengTiPinJi: {
            rule: "required",
            type: "string",
            id: 2
          }
        }
      },
      YiZhiXinTouZiPinJiOutPut: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "YiZhiXinTouZiPinJi",
            id: 2,
            options: {}
          }
        }
      },
      GeGuYeJiYuCe: {
        fields: {
          yuCeNianDu: {
            rule: "required",
            type: "string",
            id: 1
          },
          meiGuShouYi: {
            type: "int64",
            id: 2
          }
        }
      },
      GeGuYeJiYuCeData: {
        fields: {
          yanJiuJiGou: {
            rule: "required",
            type: "string",
            id: 1
          },
          baoGaoRiQi: {
            rule: "required",
            type: "string",
            id: 2
          },
          data: {
            rule: "repeated",
            type: "GeGuYeJiYuCe",
            id: 3,
            options: {}
          }
        }
      },
      GeGuYeJiYuCeOutPut: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "GeGuYeJiYuCeData",
            id: 2,
            options: {}
          }
        }
      },
      GeGuTouZiYanBao: {
        fields: {
          baoGaoRiQi: {
            rule: "required",
            type: "string",
            id: 1
          },
          yanJiuJiGou: {
            type: "string",
            id: 2
          },
          pinJiLeiBie: {
            type: "string",
            id: 3
          },
          pinJiBianDong: {
            type: "string",
            id: 4
          },
          yanBaoBiaoTi: {
            type: "string",
            id: 5
          },
          yanBaoNeiRong: {
            type: "string",
            id: 6
          },
          yanJiuZuoZhe: {
            type: "string",
            id: 7
          },
          muBiaoJiaGe: {
            type: "string",
            id: 8
          }
        }
      },
      GeGuTouZiYanBaoOutPut: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "GeGuTouZiYanBao",
            id: 2,
            options: {}
          }
        }
      },
      TongJiApp: {
        fields: {
          ChengJiaoE: {
            type: "int64",
            id: 1
          },
          LiuTongShiZhi: {
            type: "int64",
            id: 2
          },
          ZongShiZhi: {
            type: "int64",
            id: 3
          },
          ZhangDiePing: {
            type: "ZhangDiePingShuJu",
            id: 4
          },
          LingZhangGu: {
            type: "LingZhangGuShuJu",
            id: 5
          },
          TingPaiJiaShu: {
            type: "int64",
            id: 6
          },
          ZhangTingDieTing: {
            type: "ZhangTingDieTingShuJu",
            id: 7
          },
          GuPiaoGeShu: {
            type: "int64",
            id: 8
          },
          PingJunJingTaiShiYingLv: {
            type: "int64",
            id: 9
          },
          ZiJinJingE: {
            type: "int64",
            id: 10
          },
          ZiJinLiuXiang: {
            rule: "repeated",
            type: "ZiJinLiuXiangShuJu",
            id: 11,
            options: {}
          },
          JunJia: {
            type: "int64",
            id: 12
          },
          JiaQuanJunJia: {
            type: "int64",
            id: 13
          }
        },
        nested: {
          LingZhangGuShuJu: {
            fields: {
              Obj: {
                rule: "required",
                type: "string",
                id: 1
              },
              ZhongWenJianCheng: {
                type: "string",
                id: 2
              },
              ZuiXinJia: {
                type: "int64",
                id: 3
              },
              ZhangFu: {
                type: "int64",
                id: 4
              }
            }
          },
          ZhangDiePingShuJu: {
            fields: {
              ShangZhangJiaShu: {
                type: "int64",
                id: 1
              },
              XiaDieJiaShu: {
                type: "int64",
                id: 2
              },
              PingPanJiaShu: {
                type: "int64",
                id: 3
              }
            }
          },
          ZhangTingDieTingShuJu: {
            fields: {
              ZhangTingJiaShu: {
                type: "int64",
                id: 1
              },
              DieTingJiaShu: {
                type: "int64",
                id: 2
              }
            }
          },
          ZiJinLiuXiangShuJu: {
            fields: {
              ShiJian: {
                type: "int64",
                id: 1
              },
              ZiJinJingE: {
                type: "int64",
                id: 2
              }
            }
          }
        }
      },
      DXSpirit: {
        fields: {
          ShiJian: {
            rule: "required",
            type: "int64",
            id: 1
          },
          Obj: {
            type: "string",
            id: 2
          },
          TongZhi: {
            type: "string",
            id: 3
          },
          ShuJu: {
            type: "int64",
            id: 4
          }
        }
      },
      DXSpiritStat: {
        fields: {
          Obj: {
            type: "string",
            id: 1
          },
          HjfsTotal: {
            type: "int64",
            id: 2
          },
          KsftTotal: {
            type: "int64",
            id: 3
          },
          GttsTotal: {
            type: "int64",
            id: 4
          },
          JsxdTotal: {
            type: "int64",
            id: 5
          },
          DbmrTotal: {
            type: "int64",
            id: 6
          },
          DbmrStatistics: {
            type: "int64",
            id: 7
          },
          DbmcTotal: {
            type: "int64",
            id: 8
          },
          DbmcStatistics: {
            type: "int64",
            id: 9
          },
          FztbTotal: {
            type: "int64",
            id: 10
          },
          FdtbTotal: {
            type: "int64",
            id: 11
          },
          DkztTotal: {
            type: "int64",
            id: 12
          },
          DkdtTotal: {
            type: "int64",
            id: 13
          },
          YdmcPTotal: {
            type: "int64",
            id: 14
          },
          YdmrPTotal: {
            type: "int64",
            id: 15
          },
          LszsTotal: {
            type: "int64",
            id: 16
          },
          DyzsTotal: {
            type: "int64",
            id: 17
          },
          JgmrgdTotal: {
            type: "int64",
            id: 18
          },
          JgmcgdTotal: {
            type: "int64",
            id: 19
          },
          DcjmrdTotal: {
            type: "int64",
            id: 20
          },
          DcjmcdTotal: {
            type: "int64",
            id: 21
          },
          FdmrgdTotal: {
            type: "int64",
            id: 22
          },
          FdmcgdTotal: {
            type: "int64",
            id: 23
          },
          MrcdTotal: {
            type: "int64",
            id: 24
          },
          MccdTotal: {
            type: "int64",
            id: 25
          },
          MrxdTotal: {
            type: "int64",
            id: 26
          },
          McxdTotal: {
            type: "int64",
            id: 27
          }
        }
      },
      F10CpbdZxzbOutput: {
        fields: {
          obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          date: {
            rule: "required",
            type: "string",
            id: 2
          },
          shiq: {
            type: "string",
            id: 3
          },
          mgsy: {
            type: "int64",
            id: 4
          },
          mgjzc: {
            type: "int64",
            id: 5
          },
          zgb: {
            type: "int64",
            id: 6
          },
          ltag: {
            type: "int64",
            id: 7
          },
          jzcsyl: {
            type: "int64",
            id: 8
          },
          mgxjl: {
            type: "int64",
            id: 9
          },
          mggjj: {
            type: "int64",
            id: 10
          },
          mgwfplr: {
            type: "int64",
            id: 11
          },
          zylrtbzz: {
            type: "int64",
            id: 12
          },
          jlrtbzz: {
            type: "int64",
            id: 13
          },
          fpyan: {
            type: "string",
            id: 14
          },
          cq: {
            type: "string",
            id: 15
          },
          cym: {
            type: "string",
            id: 16
          }
        }
      },
      F10CpbdKpqk: {
        fields: {
          date: {
            rule: "required",
            type: "string",
            id: 1
          },
          gdhs: {
            type: "int64",
            id: 2
          },
          rjcltg: {
            type: "int64",
            id: 3
          },
          tcsdrjcltg: {
            type: "int64",
            id: 4
          }
        }
      },
      CpbdCjhbData: {
        fields: {
          cjl: {
            type: "int64",
            id: 1
          },
          cjje: {
            type: "int64",
            id: 2
          },
          zdlx: {
            type: "string",
            id: 3
          },
          zdz: {
            type: "int64",
            id: 4
          },
          yybmc: {
            type: "string",
            id: 5
          },
          mlje: {
            type: "int64",
            id: 6
          },
          mcje: {
            type: "int64",
            id: 7
          }
        }
      },
      F10CpbdCjhb: {
        fields: {
          date: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "CpbdCjhbData",
            id: 2,
            options: {}
          }
        }
      },
      FundCpbdFbsjjzjzData: {
        fields: {
          dwjz: {
            type: "int64",
            id: 1
          },
          dwljjz: {
            type: "int64",
            id: 2
          }
        }
      },
      F10FundCpbdFbsjjzjz: {
        fields: {
          date: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "FundCpbdFbsjjzjzData",
            id: 2,
            options: {}
          }
        }
      },
      F10FundCpbdFbsjjzjzOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10FundCpbdFbsjjzjz",
            id: 2,
            options: {}
          }
        }
      },
      FundCpbdJjfebdqkData: {
        fields: {
          qczfe: {
            type: "int64",
            id: 1
          },
          bqzsg: {
            type: "int64",
            id: 2
          },
          bqzsh: {
            type: "int64",
            id: 3
          },
          qmzfe: {
            type: "int64",
            id: 4
          },
          bqjsg: {
            type: "int64",
            id: 5
          }
        }
      },
      F10FundCpbdJjfebdqk: {
        fields: {
          date: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "FundCpbdJjfebdqkData",
            id: 2,
            options: {}
          }
        }
      },
      F10FundCpbdJjfebdqkOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10FundCpbdJjfebdqk",
            id: 2,
            options: {}
          }
        }
      },
      FundCpbdJjgbjbData: {
        fields: {
          bqjsy: {
            type: "int64",
            id: 1
          },
          qmjzc: {
            type: "int64",
            id: 2
          },
          qmfejz: {
            type: "int64",
            id: 3
          },
          gpsz: {
            type: "int64",
            id: 4
          },
          zqsz: {
            type: "int64",
            id: 5
          },
          gpbl: {
            type: "int64",
            id: 6
          },
          zqbl: {
            type: "int64",
            id: 7
          },
          hjsz: {
            type: "int64",
            id: 8
          }
        }
      },
      F10FundCpbdJjgbjb: {
        fields: {
          date: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "FundCpbdJjgbjbData",
            id: 2,
            options: {}
          }
        }
      },
      F10FundCpbdJjgbjbOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10FundCpbdJjgbjb",
            id: 2,
            options: {}
          }
        }
      },
      FundCpbdJjjzbxData: {
        fields: {
          qj: {
            type: "string",
            id: 1
          },
          jzzzl: {
            type: "int64",
            id: 2
          },
          bjjzsyl: {
            type: "int64",
            id: 3
          },
          cz: {
            type: "int64",
            id: 4
          }
        }
      },
      F10FundCpbdJjjzbx: {
        fields: {
          date: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "FundCpbdJjjzbxData",
            id: 2,
            options: {}
          }
        }
      },
      F10FundCpbdJjjzbxOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10FundCpbdJjjzbx",
            id: 2,
            options: {}
          }
        }
      },
      F10FundCpbdJjxxOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          date: {
            rule: "required",
            type: "string",
            id: 2
          },
          jjtzmb: {
            type: "string",
            id: 3
          },
          fxsytz: {
            type: "string",
            id: 4
          },
          ywbjjz: {
            type: "string",
            id: 5
          }
        }
      },
      F10FundCpbdZfeOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          gxrq: {
            rule: "required",
            type: "string",
            id: 2
          },
          jjjc: {
            type: "string",
            id: 3
          },
          jjlx: {
            type: "string",
            id: 4
          },
          ggrq: {
            type: "string",
            id: 5
          },
          zfe: {
            type: "int64",
            id: 6
          },
          ltfe: {
            type: "int64",
            id: 7
          }
        }
      },
      FundCwsjJyyjData: {
        fields: {
          dw: {
            type: "string",
            id: 1
          },
          srhj: {
            type: "int64",
            id: 2
          },
          gpcjsr: {
            type: "int64",
            id: 3
          },
          zqcjsr: {
            type: "int64",
            id: 4
          },
          zqlxsr: {
            type: "int64",
            id: 5
          },
          cklxsr: {
            type: "int64",
            id: 6
          },
          gxsr: {
            type: "int64",
            id: 7
          },
          fyhj: {
            type: "int64",
            id: 8
          },
          jjglf: {
            type: "int64",
            id: 9
          },
          jjtgf: {
            type: "int64",
            id: 10
          },
          jjjsy: {
            type: "int64",
            id: 11
          }
        }
      },
      F10FundCwsjJyyj: {
        fields: {
          jzrq: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "FundCwsjJyyjData",
            id: 2,
            options: {}
          }
        }
      },
      F10FundCwsjJyyjOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10FundCwsjJyyj",
            id: 2,
            options: {}
          }
        }
      },
      FundCwsjZcfzData: {
        fields: {
          dw: {
            type: "string",
            id: 1
          },
          yhck: {
            type: "int64",
            id: 2
          },
          qsbfj: {
            type: "int64",
            id: 3
          },
          jybzj: {
            type: "int64",
            id: 4
          },
          gptzsz: {
            type: "int64",
            id: 5
          },
          zqtzsz: {
            type: "int64",
            id: 6
          },
          yslx: {
            type: "int64",
            id: 7
          },
          yssgk: {
            type: "int64",
            id: 8
          },
          zczj: {
            type: "int64",
            id: 9
          },
          yfjyqsk: {
            type: "int64",
            id: 10
          },
          yfjjglf: {
            type: "int64",
            id: 11
          },
          yfjjtgf: {
            type: "int64",
            id: 12
          },
          yfshk: {
            type: "int64",
            id: 13
          },
          fzzj: {
            type: "int64",
            id: 14
          },
          ssjj: {
            type: "int64",
            id: 15
          },
          cyrqyhj: {
            type: "int64",
            id: 16
          },
          fzjqyhj: {
            type: "int64",
            id: 17
          }
        }
      },
      F10FundCwsjZcfz: {
        fields: {
          jzrq: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "FundCwsjZcfzData",
            id: 2,
            options: {}
          }
        }
      },
      F10FundCwsjZcfzOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10FundCwsjZcfz",
            id: 2,
            options: {}
          }
        }
      },
      FundCwsjZycwzbData: {
        fields: {
          bqjsy: {
            type: "int64",
            id: 1
          },
          kgfpsy: {
            type: "int64",
            id: 2
          },
          mfkgfpsy: {
            type: "int64",
            id: 3
          },
          qmzcjz: {
            type: "int64",
            id: 4
          },
          qmfejz: {
            type: "int64",
            id: 5
          },
          jqpjjzsyl: {
            type: "int64",
            id: 6
          },
          mfjzzzl: {
            type: "int64",
            id: 7
          },
          mfljjzzzl: {
            type: "int64",
            id: 8
          },
          mfjsy: {
            type: "int64",
            id: 9
          }
        }
      },
      F10FundCwsjZycwzb: {
        fields: {
          jzrq: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "FundCwsjZycwzbData",
            id: 2,
            options: {}
          }
        }
      },
      F10FundCwsjZycwzbOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10FundCwsjZycwzb",
            id: 2,
            options: {}
          }
        }
      },
      FundCyrHshjgData: {
        fields: {
          cyrhs: {
            type: "int64",
            id: 1
          },
          hjfe: {
            type: "int64",
            id: 2
          },
          jgcyfe: {
            type: "int64",
            id: 3
          },
          jgcybl: {
            type: "int64",
            id: 4
          },
          grcyfe: {
            type: "int64",
            id: 5
          },
          grcybl: {
            type: "int64",
            id: 6
          }
        }
      },
      F10FundCyrHshjg: {
        fields: {
          jzrq: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "FundCyrHshjgData",
            id: 2,
            options: {}
          }
        }
      },
      F10FundCyrHshjgOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10FundCyrHshjg",
            id: 2,
            options: {}
          }
        }
      },
      FundFefhFbsjjcyrjgData: {
        fields: {
          zfe: {
            type: "int64",
            id: 1
          },
          ltfe: {
            type: "int64",
            id: 2
          },
          fqrcylt: {
            type: "int64",
            id: 3
          },
          gzcy: {
            type: "int64",
            id: 4
          },
          wltfe: {
            type: "int64",
            id: 5
          },
          fqrcywlt: {
            type: "int64",
            id: 6
          },
          bdyy: {
            type: "string",
            id: 7
          }
        }
      },
      F10FundFefhFbsjjcyrjg: {
        fields: {
          bdrq: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "FundFefhFbsjjcyrjgData",
            id: 2,
            options: {}
          }
        }
      },
      F10FundFefhFbsjjcyrjgOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10FundFefhFbsjjcyrjg",
            id: 2,
            options: {}
          }
        }
      },
      FundFefhFhData: {
        fields: {
          dwfh: {
            type: "string",
            id: 1
          },
          cffe: {
            type: "string",
            id: 2
          },
          qydjr: {
            type: "string",
            id: 3
          },
          cxr: {
            type: "string",
            id: 4
          },
          hlffr: {
            type: "string",
            id: 5
          }
        }
      },
      F10FundFefhFh: {
        fields: {
          ggrq: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "FundFefhFhData",
            id: 2,
            options: {}
          }
        }
      },
      F10FundFefhFhOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10FundFefhFh",
            id: 2,
            options: {}
          }
        }
      },
      FundFefhKfsjjjdfebdData: {
        fields: {
          qcze: {
            type: "int64",
            id: 1
          },
          bqsg: {
            type: "int64",
            id: 2
          },
          cfzj: {
            type: "int64",
            id: 3
          },
          bqsh: {
            type: "int64",
            id: 4
          },
          qmze: {
            type: "int64",
            id: 5
          }
        }
      },
      F10FundFefhKfsjjjdfebd: {
        fields: {
          bbrq: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "FundFefhKfsjjjdfebdData",
            id: 2,
            options: {}
          }
        }
      },
      F10FundFefhKfsjjjdfebdOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10FundFefhKfsjjjdfebd",
            id: 2,
            options: {}
          }
        }
      },
      FundGpmxBqzdmcgpData: {
        fields: {
          gpdm: {
            type: "string",
            id: 1
          },
          gpjc: {
            type: "string",
            id: 2
          },
          ljmcjz: {
            type: "int64",
            id: 3
          },
          zjzbl: {
            type: "int64",
            id: 4
          }
        }
      },
      F10FundGpmxBqzdmcgp: {
        fields: {
          jzrq: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "FundGpmxBqzdmcgpData",
            id: 2,
            options: {}
          }
        }
      },
      F10FundGpmxBqzdmcgpOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10FundGpmxBqzdmcgp",
            id: 2,
            options: {}
          }
        }
      },
      FundGpmxBqzdmrgpData: {
        fields: {
          gpdm: {
            type: "string",
            id: 1
          },
          gpjc: {
            type: "string",
            id: 2
          },
          ljmrjz: {
            type: "int64",
            id: 3
          },
          zjzbl: {
            type: "int64",
            id: 4
          }
        }
      },
      F10FundGpmxBqzdmrgp: {
        fields: {
          jzrq: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "FundGpmxBqzdmrgpData",
            id: 2,
            options: {}
          }
        }
      },
      F10FundGpmxBqzdmrgpOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10FundGpmxBqzdmrgp",
            id: 2,
            options: {}
          }
        }
      },
      FundGpmxQbcgData: {
        fields: {
          gpdm: {
            type: "string",
            id: 1
          },
          gpjc: {
            type: "string",
            id: 2
          },
          gpsl: {
            type: "int64",
            id: 3
          },
          sz: {
            type: "int64",
            id: 4
          },
          zjzbl: {
            type: "int64",
            id: 5
          }
        }
      },
      F10FundGpmxQbcg: {
        fields: {
          jzrq: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "FundGpmxQbcgData",
            id: 2,
            options: {}
          }
        }
      },
      F10FundGpmxQbcgOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10FundGpmxQbcg",
            id: 2,
            options: {}
          }
        }
      },
      FundHgzwData: {
        fields: {
          lb: {
            type: "int64",
            id: 1
          },
          nr: {
            type: "string",
            id: 2
          },
          zq: {
            type: "int64",
            id: 3
          }
        }
      },
      F10FundHgzw: {
        fields: {
          jzrq: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "FundHgzwData",
            id: 2,
            options: {}
          }
        }
      },
      F10FundHgzwOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10FundHgzw",
            id: 2,
            options: {}
          }
        }
      },
      FundHytzData: {
        fields: {
          hydm: {
            type: "string",
            id: 1
          },
          hymc: {
            type: "string",
            id: 2
          },
          sz: {
            type: "int64",
            id: 3
          },
          zjzbl: {
            type: "int64",
            id: 4
          }
        }
      },
      F10FundHytz: {
        fields: {
          jzrq: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "FundHytzData",
            id: 2,
            options: {}
          }
        }
      },
      F10FundHytzOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10FundHytz",
            id: 2,
            options: {}
          }
        }
      },
      FundHytzQdiiData: {
        fields: {
          hydm: {
            type: "string",
            id: 1
          },
          hymc: {
            type: "string",
            id: 2
          },
          sz: {
            type: "int64",
            id: 3
          },
          zjzbl: {
            type: "int64",
            id: 4
          },
          bz: {
            type: "string",
            id: 5
          }
        }
      },
      F10FundHytzQdii: {
        fields: {
          jzrq: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "FundHytzQdiiData",
            id: 2,
            options: {}
          }
        }
      },
      F10FundHytzQdiiOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10FundHytzQdii",
            id: 2,
            options: {}
          }
        }
      },
      F10FundJbxxOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          dsymbol: {
            type: "string",
            id: 2
          },
          jjqc: {
            type: "string",
            id: 3
          },
          jjmc: {
            type: "string",
            id: 4
          },
          jjlx: {
            type: "int64",
            id: 5
          },
          tzlx: {
            type: "int64",
            id: 6
          },
          jylb: {
            type: "int64",
            id: 7
          },
          fxrq: {
            type: "string",
            id: 8
          },
          clrq: {
            type: "string",
            id: 9
          },
          jzrq: {
            type: "string",
            id: 10
          },
          glgsqc: {
            type: "string",
            id: 11
          },
          tzmb: {
            type: "string",
            id: 12
          },
          tzfw: {
            type: "string",
            id: 13
          },
          fxsytz: {
            type: "string",
            id: 14
          },
          tgrmc: {
            type: "string",
            id: 15
          },
          yjbjjz: {
            type: "string",
            id: 16
          },
          isauto: {
            type: "int64",
            id: 17
          }
        }
      },
      F10FundFbsjjgkOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          jjqc: {
            type: "string",
            id: 2
          },
          jjjc: {
            type: "string",
            id: 3
          },
          jjlx: {
            type: "string",
            id: 4
          },
          tzlx: {
            type: "string",
            id: 5
          },
          jjmz: {
            type: "string",
            id: 6
          },
          fxrq: {
            type: "string",
            id: 7
          },
          ssrq: {
            type: "string",
            id: 8
          },
          jjclr: {
            type: "string",
            id: 9
          },
          jjzzr: {
            type: "string",
            id: 10
          },
          jjcxq: {
            type: "string",
            id: 11
          },
          jjtgr: {
            type: "string",
            id: 12
          },
          glgs: {
            type: "string",
            id: 13
          },
          clrq: {
            type: "string",
            id: 14
          },
          bgdz: {
            type: "string",
            id: 15
          },
          zcdz: {
            type: "string",
            id: 16
          },
          fddbr: {
            type: "string",
            id: 17
          },
          lxdh: {
            type: "string",
            id: 18
          },
          cz: {
            type: "string",
            id: 19
          },
          gswz: {
            type: "string",
            id: 20
          },
          dzyx: {
            type: "string",
            id: 21
          },
          lssws: {
            type: "string",
            id: 22
          },
          kjssws: {
            type: "string",
            id: 23
          },
          jjyjbjjz: {
            type: "string",
            id: 24
          },
          fxsytz: {
            type: "string",
            id: 25
          },
          tzmb: {
            type: "string",
            id: 26
          },
          tzfw: {
            type: "string",
            id: 27
          },
          tzcl: {
            type: "string",
            id: 28
          },
          tzln: {
            type: "string",
            id: 29
          }
        }
      },
      F10FundKfsjjgkOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          jjqc: {
            type: "string",
            id: 2
          },
          jjjc: {
            type: "string",
            id: 3
          },
          jjlx: {
            type: "string",
            id: 4
          },
          tzlx: {
            type: "string",
            id: 5
          },
          jjmz: {
            type: "string",
            id: 6
          },
          bz: {
            type: "string",
            id: 7
          },
          fxrq: {
            type: "string",
            id: 8
          },
          ssrq: {
            type: "string",
            id: 9
          },
          jjclr: {
            type: "string",
            id: 10
          },
          jjcxq: {
            type: "string",
            id: 11
          },
          jjtgr: {
            type: "string",
            id: 12
          },
          glgs: {
            type: "string",
            id: 13
          },
          clrq: {
            type: "string",
            id: 14
          },
          bgdz: {
            type: "string",
            id: 15
          },
          zcdz: {
            type: "string",
            id: 16
          },
          fddbr: {
            type: "string",
            id: 17
          },
          lxdh: {
            type: "string",
            id: 18
          },
          cz: {
            type: "string",
            id: 19
          },
          gswz: {
            type: "string",
            id: 20
          },
          dzyx: {
            type: "string",
            id: 21
          },
          lssws: {
            type: "string",
            id: 22
          },
          kjssws: {
            type: "string",
            id: 23
          },
          jjyjbjjz: {
            type: "string",
            id: 24
          },
          fxsytz: {
            type: "string",
            id: 25
          },
          tzmb: {
            type: "string",
            id: 26
          },
          tzfw: {
            type: "string",
            id: 27
          },
          tzcl: {
            type: "string",
            id: 28
          },
          tzln: {
            type: "string",
            id: 29
          }
        }
      },
      FundJlggJjgsggryData: {
        fields: {
          xb: {
            type: "string",
            id: 1
          },
          xl: {
            type: "string",
            id: 2
          },
          zw: {
            type: "string",
            id: 3
          },
          jl: {
            type: "string",
            id: 4
          },
          lb: {
            type: "int64",
            id: 5
          }
        }
      },
      F10FundJlggJjgsggry: {
        fields: {
          xm: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "FundJlggJjgsggryData",
            id: 2,
            options: {}
          }
        }
      },
      F10FundJlggJjgsggryOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10FundJlggJjgsggry",
            id: 2,
            options: {}
          }
        }
      },
      FundJlggJjjlData: {
        fields: {
          xb: {
            type: "string",
            id: 1
          },
          xl: {
            type: "string",
            id: 2
          },
          zw: {
            type: "string",
            id: 3
          },
          rzkssj: {
            type: "string",
            id: 4
          },
          jl: {
            type: "string",
            id: 5
          }
        }
      },
      F10FundJlggJjjl: {
        fields: {
          xm: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "FundJlggJjjlData",
            id: 2,
            options: {}
          }
        }
      },
      F10FundJlggJjjlOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10FundJlggJjjl",
            id: 2,
            options: {}
          }
        }
      },
      FundJyyjData: {
        fields: {
          qsmc: {
            type: "string",
            id: 1
          },
          xw: {
            type: "int64",
            id: 2
          },
          yj: {
            type: "int64",
            id: 3
          },
          bl: {
            type: "int64",
            id: 4
          },
          gpcjje: {
            type: "int64",
            id: 5
          },
          gpcjbl: {
            type: "int64",
            id: 6
          },
          zqcjje: {
            type: "int64",
            id: 7
          },
          zqbl: {
            type: "int64",
            id: 8
          },
          zqhgje: {
            type: "int64",
            id: 9
          },
          zqhgbl: {
            type: "int64",
            id: 10
          },
          qzcjje: {
            type: "int64",
            id: 11
          },
          qzbl: {
            type: "int64",
            id: 12
          }
        }
      },
      F10FundJyyj: {
        fields: {
          jzrq: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "FundJyyjData",
            id: 2,
            options: {}
          }
        }
      },
      F10FundJyyjOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10FundJyyj",
            id: 2,
            options: {}
          }
        }
      },
      FundZccgQsmgpmxData: {
        fields: {
          gpdm: {
            type: "string",
            id: 1
          },
          gpjc: {
            type: "string",
            id: 2
          },
          sl: {
            type: "int64",
            id: 3
          },
          sz: {
            type: "int64",
            id: 4
          },
          zjzb: {
            type: "int64",
            id: 5
          },
          tbzjc: {
            type: "string",
            id: 6
          }
        }
      },
      F10FundZccgQsmgpmx: {
        fields: {
          jzrq: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "FundZccgQsmgpmxData",
            id: 2,
            options: {}
          }
        }
      },
      F10FundZccgQsmgpmxOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10FundZccgQsmgpmx",
            id: 2,
            options: {}
          }
        }
      },
      FundZccgQdiiData: {
        fields: {
          gpdm: {
            type: "string",
            id: 1
          },
          gpjc: {
            type: "string",
            id: 2
          },
          sl: {
            type: "int64",
            id: 3
          },
          sz: {
            type: "int64",
            id: 4
          },
          zjzb: {
            type: "int64",
            id: 5
          }
        }
      },
      F10FundZccgQdii: {
        fields: {
          jzrq: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "FundZccgQdiiData",
            id: 2,
            options: {}
          }
        }
      },
      F10FundZccgQdiiOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10FundZccgQdii",
            id: 2,
            options: {}
          }
        }
      },
      FundZqtzTzzhData: {
        fields: {
          zqlx: {
            type: "string",
            id: 1
          },
          sz: {
            type: "int64",
            id: 2
          },
          bl: {
            type: "int64",
            id: 3
          }
        }
      },
      F10FundZqtzTzzh: {
        fields: {
          bgrq: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "FundZqtzTzzhData",
            id: 2,
            options: {}
          }
        }
      },
      F10FundZqtzTzzhOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10FundZqtzTzzh",
            id: 2,
            options: {}
          }
        }
      },
      FundZqtzTzzhQdiiData: {
        fields: {
          xydj: {
            type: "string",
            id: 1
          },
          sz: {
            type: "int64",
            id: 2
          },
          bl: {
            type: "int64",
            id: 3
          },
          bz: {
            type: "string",
            id: 5
          }
        }
      },
      F10FundZqtzTzzhQdii: {
        fields: {
          jzrq: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "FundZqtzTzzhQdiiData",
            id: 2,
            options: {}
          }
        }
      },
      F10FundZqtzTzzhQdiiOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10FundZqtzTzzhQdii",
            id: 2,
            options: {}
          }
        }
      },
      FundZqtzZcmxData: {
        fields: {
          zqdm: {
            type: "string",
            id: 1
          },
          zqjc: {
            type: "string",
            id: 2
          },
          sz: {
            type: "int64",
            id: 3
          },
          bl: {
            type: "int64",
            id: 4
          },
          zytz: {
            type: "int64",
            id: 5
          }
        }
      },
      F10FundZqtzZcmx: {
        fields: {
          jzrq: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "FundZqtzZcmxData",
            id: 2,
            options: {}
          }
        }
      },
      F10FundZqtzZcmxOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10FundZqtzZcmx",
            id: 2,
            options: {}
          }
        }
      },
      FundZycyrData: {
        fields: {
          cyrmc: {
            type: "string",
            id: 1
          },
          cyfe: {
            type: "int64",
            id: 2
          },
          szbl: {
            type: "int64",
            id: 3
          },
          cyzjqk: {
            type: "string",
            id: 4
          }
        }
      },
      F10FundZycyr: {
        fields: {
          jzrq: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "FundZycyrData",
            id: 2,
            options: {}
          }
        }
      },
      F10FundZycyrOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10FundZycyr",
            id: 2,
            options: {}
          }
        }
      },
      FundHbjjxeData: {
        fields: {
          scdm: {
            type: "string",
            id: 1
          },
          jynm: {
            type: "string",
            id: 2
          },
          jshsx: {
            type: "int64",
            id: 3
          },
          jsgsx: {
            type: "int64",
            id: 4
          },
          zshsx: {
            type: "int64",
            id: 5
          },
          zsgsx: {
            type: "int64",
            id: 6
          },
          dzhjshsx: {
            type: "int64",
            id: 7
          },
          dzhjsgsx: {
            type: "int64",
            id: 8
          },
          dzhzshsx: {
            type: "int64",
            id: 9
          },
          dzhzsgsx: {
            type: "int64",
            id: 10
          },
          cptx: {
            type: "string",
            id: 11
          }
        }
      },
      F10FundHbjjxe: {
        fields: {
          xerq: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "FundHbjjxeData",
            id: 2,
            options: {}
          }
        }
      },
      F10FundHbjjxeOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10FundHbjjxe",
            id: 2,
            options: {}
          }
        }
      },
      F10CwtsLrfpbzy: {
        fields: {
          date: {
            rule: "required",
            type: "string",
            id: 1
          },
          dw: {
            type: "string",
            id: 2
          },
          yysr: {
            type: "int64",
            id: 3
          },
          yycb: {
            type: "int64",
            id: 4
          },
          glfy: {
            type: "int64",
            id: 5
          },
          yyfy: {
            type: "int64",
            id: 6
          },
          cwfy: {
            type: "int64",
            id: 7
          },
          yylr: {
            type: "int64",
            id: 8
          },
          tzsy: {
            type: "int64",
            id: 9
          },
          yywszje: {
            type: "int64",
            id: 10
          },
          lrze: {
            type: "int64",
            id: 11
          },
          jlr: {
            type: "int64",
            id: 12
          }
        }
      },
      F10CwtsZcfzbzy: {
        fields: {
          date: {
            rule: "required",
            type: "string",
            id: 1
          },
          dw: {
            type: "string",
            id: 2
          },
          zzc: {
            type: "int64",
            id: 3
          },
          ldzc: {
            type: "int64",
            id: 4
          },
          hbzj: {
            type: "int64",
            id: 5
          },
          jyxjrzc: {
            type: "int64",
            id: 6
          },
          ch: {
            type: "int64",
            id: 7
          },
          yszkze: {
            type: "int64",
            id: 8
          },
          qtysk: {
            type: "int64",
            id: 9
          },
          gdzcje: {
            type: "int64",
            id: 10
          },
          kgcsjrzc: {
            type: "int64",
            id: 11
          },
          wxzc: {
            type: "int64",
            id: 12
          },
          dqjk: {
            type: "int64",
            id: 13
          },
          yszk: {
            type: "int64",
            id: 14
          },
          yfzk: {
            type: "int64",
            id: 15
          },
          ldfz: {
            type: "int64",
            id: 16
          },
          cqfz: {
            type: "int64",
            id: 17
          },
          zfz: {
            type: "int64",
            id: 18
          },
          gdqy: {
            type: "int64",
            id: 19
          },
          zbgjj: {
            type: "int64",
            id: 20
          }
        }
      },
      ZygcData: {
        fields: {
          lb: {
            type: "string",
            id: 1
          },
          hy: {
            type: "string",
            id: 2
          },
          zysr: {
            type: "int64",
            id: 3
          },
          zysrzb: {
            type: "int64",
            id: 4
          },
          zysrtbbh: {
            type: "int64",
            id: 5
          },
          zycb: {
            type: "int64",
            id: 6
          },
          zycbtbbh: {
            type: "int64",
            id: 7
          },
          zylr: {
            type: "int64",
            id: 8
          },
          mll: {
            type: "int64",
            id: 9
          },
          mlltbbh: {
            type: "int64",
            id: 10
          }
        }
      },
      F10Zygc: {
        fields: {
          date: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "ZygcData",
            id: 2,
            options: {}
          }
        }
      },
      F10DstxJjlt: {
        fields: {
          date: {
            rule: "required",
            type: "string",
            id: 1
          },
          jjgf: {
            type: "int64",
            id: 2
          },
          zzgf: {
            type: "int64",
            id: 3
          },
          gflx: {
            type: "string",
            id: 4
          }
        }
      },
      F10DstxRzrq: {
        fields: {
          date: {
            rule: "required",
            type: "string",
            id: 1
          },
          rzje: {
            type: "int64",
            id: 2
          },
          rzmre: {
            type: "int64",
            id: 3
          },
          rqyl: {
            type: "int64",
            id: 4
          },
          rqye: {
            type: "int64",
            id: 5
          },
          rqmcl: {
            type: "int64",
            id: 6
          }
        }
      },
      DstxJgccData: {
        fields: {
          cgjs: {
            type: "int64",
            id: 2
          },
          cgs: {
            type: "int64",
            id: 3
          },
          zltgbl: {
            type: "int64",
            id: 4
          },
          type: {
            type: "int64",
            id: 5
          }
        }
      },
      F10DstxJgcc: {
        fields: {
          date: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "DstxJgccData",
            id: 2,
            options: {}
          }
        }
      },
      F10DstxGdzjc: {
        fields: {
          date: {
            rule: "required",
            type: "string",
            id: 1
          },
          gdmc: {
            type: "string",
            id: 2
          },
          bdfx: {
            type: "string",
            id: 3
          },
          gdlx: {
            type: "string",
            id: 4
          },
          bdsl: {
            type: "int64",
            id: 5
          },
          zzgb: {
            type: "int64",
            id: 6
          }
        }
      },
      F10DstxDzjy: {
        fields: {
          date: {
            rule: "required",
            type: "string",
            id: 1
          },
          jg: {
            type: "int64",
            id: 2
          },
          drspj: {
            type: "int64",
            id: 3
          },
          zjl: {
            type: "string",
            id: 4
          },
          cjl: {
            type: "int64",
            id: 5
          },
          cjje: {
            type: "string",
            id: 6
          },
          mf: {
            type: "string",
            id: 7
          },
          mf2: {
            type: "string",
            id: 8
          }
        }
      },
      F10DstxCgbdqk: {
        fields: {
          date: {
            rule: "required",
            type: "string",
            id: 1
          },
          bdr: {
            type: "string",
            id: 2
          },
          bdsl: {
            type: "int64",
            id: 3
          },
          jj: {
            type: "int64",
            id: 4
          },
          jcgs: {
            type: "int64",
            id: 5
          },
          djg: {
            type: "string",
            id: 6
          },
          bdyy: {
            type: "string",
            id: 7
          }
        }
      },
      GlcData: {
        fields: {
          xm: {
            type: "string",
            id: 1
          },
          zw: {
            type: "string",
            id: 2
          },
          lb: {
            type: "string",
            id: 3
          },
          rzsj: {
            type: "string",
            id: 4
          },
          xl: {
            type: "string",
            id: 5
          },
          qmcgs: {
            type: "int64",
            id: 6
          },
          xcjzrq: {
            type: "string",
            id: 7
          },
          xc: {
            type: "int64",
            id: 8
          },
          xb: {
            type: "string",
            id: 9
          },
          csrq: {
            type: "string",
            id: 10
          },
          jl: {
            type: "string",
            id: 11
          },
          px: {
            type: "int64",
            id: 12
          }
        }
      },
      F10GlcOutPut: {
        fields: {
          obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "GlcData",
            id: 2,
            options: {}
          }
        }
      },
      F10GlcNdbcqk: {
        fields: {
          date: {
            rule: "required",
            type: "string",
            id: 1
          },
          ndbcze: {
            type: "int64",
            id: 2
          },
          zgqswdsbcze: {
            type: "int64",
            id: 3
          },
          zgqswgjglrybcze: {
            type: "int64",
            id: 4
          },
          dldsjt: {
            type: "int64",
            id: 5
          }
        }
      },
      F10ZxjbDjdxjllb: {
        fields: {
          date: {
            rule: "required",
            type: "string",
            id: 1
          },
          jyxjlr: {
            type: "int64",
            id: 2
          },
          jyxjlc: {
            type: "int64",
            id: 3
          },
          jyxjje: {
            type: "int64",
            id: 4
          },
          tzxjlr: {
            type: "int64",
            id: 5
          },
          tzxjlc: {
            type: "int64",
            id: 6
          },
          tzxjje: {
            type: "int64",
            id: 7
          },
          czxjlr: {
            type: "int64",
            id: 8
          },
          czxjlc: {
            type: "int64",
            id: 9
          },
          czxjje: {
            type: "int64",
            id: 10
          },
          xjjzje: {
            type: "int64",
            id: 11
          }
        }
      },
      F10GdjcKggdOutPut: {
        fields: {
          obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          mc: {
            type: "string",
            id: 2
          },
          frdb: {
            type: "string",
            id: 3
          },
          zczb: {
            type: "int64",
            id: 4
          },
          clrq: {
            type: "string",
            id: 5
          },
          jyyw: {
            type: "string",
            id: 6
          },
          qylx: {
            type: "string",
            id: 7
          }
        }
      },
      F10GdjcSjkzrOutPut: {
        fields: {
          obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          mc: {
            type: "string",
            id: 2
          },
          sm: {
            type: "string",
            id: 3
          }
        }
      },
      F10GbfhGbbd: {
        fields: {
          date: {
            rule: "required",
            type: "string",
            id: 1
          },
          zgb: {
            type: "int64",
            id: 2
          },
          yltag: {
            type: "int64",
            id: 3
          },
          yltbg: {
            type: "int64",
            id: 4
          },
          bdrqgbsm: {
            type: "string",
            id: 5
          },
          zxjg: {
            type: "int64",
            id: 6
          }
        }
      },
      ZbyzCyqtsszqData: {
        fields: {
          btzzqdm: {
            type: "string",
            id: 1
          },
          btzzqjc: {
            type: "string",
            id: 2
          },
          cgsl: {
            type: "int64",
            id: 3
          },
          zbl: {
            type: "int64",
            id: 4
          },
          cstzje: {
            type: "int64",
            id: 5
          }
        }
      },
      F10ZbyzCyqtsszq: {
        fields: {
          date: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "ZbyzCyqtsszqData",
            id: 2,
            options: {}
          }
        }
      },
      ZbyzCyfssgqData: {
        fields: {
          scdxmc: {
            type: "string",
            id: 1
          },
          cstzje: {
            type: "int64",
            id: 2
          },
          cgsl: {
            type: "int64",
            id: 3
          },
          zbl: {
            type: "int64",
            id: 4
          },
          qmzmjz: {
            type: "int64",
            id: 5
          }
        }
      },
      F10ZbyzCyfssgq: {
        fields: {
          date: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "ZbyzCyfssgqData",
            id: 2,
            options: {}
          }
        }
      },
      F10zbyzRzqkzfyss: {
        fields: {
          rzlb: {
            type: "string",
            id: 1
          },
          yarq: {
            type: "string",
            id: 2
          },
          gddh: {
            type: "string",
            id: 3
          },
          zgyxspl: {
            type: "string",
            id: 4
          },
          lgdgqdjr: {
            type: "string",
            id: 5
          },
          sgr: {
            type: "string",
            id: 6
          },
          fajc: {
            type: "string",
            id: 7
          },
          fxfs: {
            type: "string",
            id: 8
          },
          fxgplx: {
            type: "string",
            id: 9
          },
          zzfx: {
            type: "int64",
            id: 10
          },
          fxjg: {
            type: "int64",
            id: 11
          },
          zcxs: {
            type: "string",
            id: 12
          }
        }
      },
      F10ZbyzXmtzMjzjqk: {
        fields: {
          date: {
            rule: "required",
            type: "string",
            id: 1
          },
          mjzjze: {
            type: "int64",
            id: 2
          },
          bqsyje: {
            type: "int64",
            id: 3
          },
          jlsyje: {
            type: "int64",
            id: 4
          }
        }
      },
      ZbyzXmtzMjzjcnxmData: {
        fields: {
          cnxmmc: {
            type: "string",
            id: 1
          },
          ntrje: {
            type: "int64",
            id: 2
          },
          sfbgxm: {
            type: "string",
            id: 3
          },
          sjtrje: {
            type: "int64",
            id: 4
          },
          sjsy: {
            type: "int64",
            id: 5
          },
          sffhjd: {
            type: "string",
            id: 6
          },
          bgyycxsm: {
            type: "string",
            id: 7
          }
        }
      },
      F10ZbyzXmtzMjzjcnxm: {
        fields: {
          date: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "ZbyzXmtzMjzjcnxmData",
            id: 2,
            options: {}
          }
        }
      },
      ZbyzXmtzMjzjbgxmData: {
        fields: {
          bghxmmc: {
            type: "string",
            id: 1
          },
          ycnxmmc: {
            type: "string",
            id: 2
          },
          ntrje: {
            type: "int64",
            id: 3
          },
          sjtrje: {
            type: "int64",
            id: 4
          },
          sjsy: {
            type: "int64",
            id: 5
          },
          xmjd: {
            type: "string",
            id: 6
          },
          bgxmqksm: {
            type: "string",
            id: 7
          }
        }
      },
      F10ZbyzXmtzMjzjbgxm: {
        fields: {
          date: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "ZbyzXmtzMjzjbgxmData",
            id: 2,
            options: {}
          }
        }
      },
      ZbyzXmtzFmjzjxmData: {
        fields: {
          xmmc: {
            type: "string",
            id: 1
          },
          xmje: {
            type: "int64",
            id: 2
          },
          xmjd: {
            type: "string",
            id: 3
          },
          xmsyqk: {
            type: "string",
            id: 4
          }
        }
      },
      F10ZbyzXmtzFmjzjxm: {
        fields: {
          date: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "ZbyzXmtzFmjzjxmData",
            id: 2,
            options: {}
          }
        }
      },
      HydwData: {
        fields: {
          obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          gpmc: {
            type: "string",
            id: 2
          },
          ltg: {
            type: "int64",
            id: 3
          },
          pm1: {
            type: "int64",
            id: 4
          },
          zzc: {
            type: "int64",
            id: 5
          },
          pm2: {
            type: "int64",
            id: 6
          },
          zysr: {
            type: "int64",
            id: 7
          },
          pm3: {
            type: "int64",
            id: 8
          },
          mgsy: {
            type: "int64",
            id: 9
          },
          pm4: {
            type: "int64",
            id: 10
          },
          zgb: {
            type: "int64",
            id: 11
          },
          pm5: {
            type: "int64",
            id: 12
          },
          jzc: {
            type: "int64",
            id: 13
          },
          pm6: {
            type: "int64",
            id: 14
          },
          jlr: {
            type: "int64",
            id: 15
          },
          pm7: {
            type: "int64",
            id: 16
          },
          jzcsyl: {
            type: "int64",
            id: 17
          },
          pm8: {
            type: "int64",
            id: 18
          }
        }
      },
      F10HydwOutPut: {
        fields: {
          obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          date: {
            rule: "required",
            type: "string",
            id: 2
          },
          sshy: {
            type: "string",
            id: 3
          },
          zjhhy: {
            type: "string",
            id: 4
          },
          data: {
            rule: "repeated",
            type: "HydwData",
            id: 5,
            options: {}
          }
        }
      },
      RsrProForecastData: {
        fields: {
          enddate: {
            rule: "required",
            type: "string",
            id: 1
          },
          mgsy: {
            type: "int64",
            id: 2
          },
          jlr: {
            type: "int64",
            id: 3
          },
          jlrtb: {
            type: "int64",
            id: 4
          },
          zysr: {
            type: "int64",
            id: 5
          },
          zysrtb: {
            type: "int64",
            id: 6
          },
          yyyqbhl: {
            type: "int64",
            id: 7
          },
          itnum: {
            type: "int64",
            id: 8
          },
          mgjzc: {
            type: "int64",
            id: 9
          },
          lnzz: {
            type: "int64",
            id: 10
          },
          syl: {
            type: "int64",
            id: 11
          },
          sjl: {
            type: "int64",
            id: 12
          },
          peg2: {
            type: "int64",
            id: 13
          },
          sxl: {
            type: "int64",
            id: 14
          }
        }
      },
      F10RsrProForecastOutPut: {
        fields: {
          obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          date: {
            rule: "required",
            type: "string",
            id: 2
          },
          data: {
            rule: "repeated",
            type: "RsrProForecastData",
            id: 3,
            options: {}
          }
        }
      },
      RsrInvestRatingData: {
        fields: {
          sjdValue: {
            type: "string",
            id: 1
          },
          mr: {
            type: "int64",
            id: 2
          },
          zc: {
            type: "int64",
            id: 3
          },
          zx: {
            type: "int64",
            id: 4
          },
          jc: {
            type: "int64",
            id: 5
          },
          mc: {
            type: "int64",
            id: 6
          },
          jgzs: {
            type: "int64",
            id: 7
          }
        }
      },
      F10RsrInvestRatingOutPut: {
        fields: {
          obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          date: {
            rule: "required",
            type: "string",
            id: 2
          },
          data: {
            rule: "repeated",
            type: "RsrInvestRatingData",
            id: 3,
            options: {}
          }
        }
      },
      RsrEarnPSForeData: {
        fields: {
          endDate: {
            type: "string",
            id: 1
          },
          pj: {
            type: "string",
            id: 2
          },
          value: {
            type: "int64",
            id: 3
          }
        }
      },
      F10RsrEarnPSFore: {
        fields: {
          companyName: {
            rule: "required",
            type: "string",
            id: 1
          },
          date: {
            rule: "required",
            type: "string",
            id: 2
          },
          data: {
            rule: "repeated",
            type: "RsrEarnPSForeData",
            id: 3,
            options: {}
          }
        }
      },
      F10RsrResReport: {
        fields: {
          date: {
            rule: "required",
            type: "string",
            id: 1
          },
          companyName: {
            type: "string",
            id: 2
          },
          titles: {
            type: "string",
            id: 3
          },
          investAdvice: {
            type: "string",
            id: 4
          },
          psName: {
            type: "string",
            id: 5
          }
        }
      },
      F10GsgkOutput: {
        fields: {
          obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          zqlx: {
            type: "string",
            id: 2
          },
          gsdm: {
            type: "string",
            id: 3
          },
          gsmc: {
            type: "string",
            id: 4
          },
          ywqc: {
            type: "string",
            id: 5
          },
          zcdz: {
            type: "string",
            id: 6
          },
          bgdz: {
            type: "string",
            id: 7
          },
          ssqy: {
            type: "string",
            id: 8
          },
          sshy: {
            type: "string",
            id: 9
          },
          gswz: {
            type: "string",
            id: 10
          },
          dzxx: {
            type: "string",
            id: 11
          },
          ssrq: {
            type: "string",
            id: 12
          },
          zgrq: {
            type: "string",
            id: 13
          },
          fxl: {
            type: "int64",
            id: 14
          },
          fxj: {
            type: "int64",
            id: 15
          },
          srkpj: {
            type: "int64",
            id: 16
          },
          sstjr: {
            type: "string",
            id: 17
          },
          zcxs: {
            type: "string",
            id: 18
          },
          frdb: {
            type: "string",
            id: 19
          },
          dsz: {
            type: "string",
            id: 20
          },
          zjl: {
            type: "string",
            id: 21
          },
          dm: {
            type: "string",
            id: 22
          },
          zqdb: {
            type: "string",
            id: 23
          },
          dh: {
            type: "string",
            id: 24
          },
          cz: {
            type: "string",
            id: 25
          },
          yb: {
            type: "string",
            id: 26
          },
          kjsws: {
            type: "string",
            id: 27
          },
          zyfw: {
            type: "string",
            id: 28
          },
          gsjs: {
            type: "string",
            id: 29
          },
          dmdh: {
            type: "string",
            id: 30
          },
          dmcz: {
            type: "string",
            id: 31
          },
          dmdzyx: {
            type: "string",
            id: 32
          },
          RegionName: {
            type: "string",
            id: 33
          }
        }
      },
      F10CwtsZycwzb: {
        fields: {
          kjssjyj: {
            type: "string",
            id: 1
          },
          date: {
            rule: "required",
            type: "string",
            id: 2
          },
          jbmgsy: {
            type: "int64",
            id: 3
          },
          kchjbmgsy: {
            type: "int64",
            id: 4
          },
          tbmgsy: {
            type: "int64",
            id: 5
          },
          mgjzc: {
            type: "int64",
            id: 6
          },
          mgwfplr: {
            type: "int64",
            id: 7
          },
          mggjj: {
            type: "int64",
            id: 8
          },
          xsmll: {
            type: "int64",
            id: 9
          },
          yylrl: {
            type: "int64",
            id: 10
          },
          jlrl: {
            type: "int64",
            id: 11
          },
          jqjzcsyl: {
            type: "int64",
            id: 12
          },
          tbjzcsyl: {
            type: "int64",
            id: 13
          },
          gdqy: {
            type: "int64",
            id: 14
          },
          ldbl: {
            type: "int64",
            id: 15
          },
          sdbl: {
            type: "int64",
            id: 16
          },
          mgjyxjll: {
            type: "int64",
            id: 17
          },
          bbgbr: {
            type: "string",
            id: 18
          }
        }
      },
      F10CwtsZycwzbOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10CwtsZycwzb",
            id: 2,
            options: {}
          }
        }
      },
      F10CwtsXjllbzy: {
        fields: {
          xjjzje: {
            type: "int64",
            id: 1
          },
          date: {
            rule: "required",
            type: "string",
            id: 2
          },
          dw: {
            type: "string",
            id: 3
          },
          jyxjlr: {
            type: "int64",
            id: 4
          },
          jyxjlc: {
            type: "int64",
            id: 5
          },
          jyxjje: {
            type: "int64",
            id: 6
          },
          tzxjlr: {
            type: "int64",
            id: 7
          },
          tzxjlc: {
            type: "int64",
            id: 8
          },
          tzxjje: {
            type: "int64",
            id: 9
          },
          czxjlr: {
            type: "int64",
            id: 10
          },
          czxjlc: {
            type: "int64",
            id: 11
          },
          czxjje: {
            type: "int64",
            id: 12
          }
        }
      },
      F10CwtsXjllbzyOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10CwtsXjllbzy",
            id: 2,
            options: {}
          }
        }
      },
      F10ZxjbDjdcwzb: {
        fields: {
          jlrhb: {
            type: "int64",
            id: 1
          },
          date: {
            rule: "required",
            type: "string",
            id: 2
          },
          mgsy: {
            type: "int64",
            id: 3
          },
          xsjll: {
            type: "int64",
            id: 4
          },
          jzcsyl: {
            type: "int64",
            id: 5
          },
          mgjyxjll: {
            type: "int64",
            id: 6
          },
          zysrtb: {
            type: "int64",
            id: 7
          },
          jlrtb: {
            type: "int64",
            id: 8
          },
          zysrhb: {
            type: "int64",
            id: 9
          }
        }
      },
      F10ZxjbDjdcwzbOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10ZxjbDjdcwzb",
            id: 2,
            options: {}
          }
        }
      },
      F10Zxjbdjdleb: {
        fields: {
          ssgdsy: {
            type: "int64",
            id: 1
          },
          date: {
            rule: "required",
            type: "string",
            id: 2
          },
          yysr: {
            type: "int64",
            id: 3
          },
          yycb: {
            type: "int64",
            id: 4
          },
          yysjjfj: {
            type: "int64",
            id: 5
          },
          xsfy: {
            type: "int64",
            id: 6
          },
          glfy: {
            type: "int64",
            id: 7
          },
          cwfy: {
            type: "int64",
            id: 8
          },
          tzsy: {
            type: "int64",
            id: 9
          },
          yylr: {
            type: "int64",
            id: 10
          },
          yywsr: {
            type: "int64",
            id: 11
          },
          yywzc: {
            type: "int64",
            id: 12
          },
          lrze: {
            type: "int64",
            id: 13
          },
          sdsfy: {
            type: "int64",
            id: 14
          },
          jlr: {
            type: "int64",
            id: 15
          },
          mgzjlr: {
            type: "int64",
            id: 16
          }
        }
      },
      F10ZxjbdjdlebOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10Zxjbdjdleb",
            id: 2,
            options: {}
          }
        }
      },
      F10GdjcGdhs: {
        fields: {
          Gdzhs: {
            type: "int64",
            id: 1
          },
          date: {
            rule: "required",
            type: "string",
            id: 2
          },
          Hbzj: {
            type: "int64",
            id: 3
          },
          Hbbh: {
            type: "int64",
            id: 4
          },
          Rjcg: {
            type: "int64",
            id: 5
          },
          Ltgdhs: {
            type: "int64",
            id: 6
          }
        }
      },
      F10GdjcGdhsOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10GdjcGdhs",
            id: 2,
            options: {}
          }
        }
      },
      F10GdjcGd: {
        fields: {
          Gdrs: {
            type: "int64",
            id: 1
          },
          Xh: {
            type: "int64",
            id: 2
          },
          Gdmc: {
            type: "string",
            id: 3
          },
          Cgs: {
            type: "int64",
            id: 4
          },
          Zzgs: {
            type: "int64",
            id: 5
          },
          Zjqk: {
            type: "string",
            id: 6
          },
          Gbxz: {
            type: "string",
            id: 7
          },
          Gsdm: {
            type: "string",
            id: 8
          }
        }
      },
      F10GdjcSdgd: {
        fields: {
          Date: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10GdjcGd",
            id: 2,
            options: {}
          }
        }
      },
      F10GdjcSdgdOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10GdjcSdgd",
            id: 2,
            options: {}
          }
        }
      },
      F10GdjcSdltgd: {
        fields: {
          Date: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10GdjcGd",
            id: 2,
            options: {}
          }
        }
      },
      F10GdjcSdltgdOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10GdjcSdltgd",
            id: 2,
            options: {}
          }
        }
      },
      F10GbfhFhkg: {
        fields: {
          Date: {
            rule: "required",
            type: "string",
            id: 1
          },
          Mgsg: {
            type: "int64",
            id: 2
          },
          Mgzz: {
            type: "int64",
            id: 3
          },
          Mgfh: {
            type: "int64",
            id: 4
          },
          Mgp: {
            type: "int64",
            id: 5
          },
          Pgjg: {
            type: "int64",
            id: 6
          },
          Zfgfsl: {
            type: "int64",
            id: 7
          },
          Zfjg: {
            type: "int64",
            id: 8
          },
          Gqdjr: {
            type: "string",
            id: 9
          },
          Cqcxr: {
            type: "string",
            id: 10
          },
          Zhjyr: {
            type: "string",
            id: 11
          }
        }
      },
      F10GbfhFhkgOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10GbfhFhkg",
            id: 2,
            options: {}
          }
        }
      },
      F10GbfhGbjg: {
        fields: {
          Date: {
            rule: "required",
            type: "string",
            id: 1
          },
          Zgb: {
            type: "int64",
            id: 2
          },
          Ltgf: {
            type: "int64",
            id: 3
          },
          Ltag: {
            type: "int64",
            id: 4
          },
          Ltbg: {
            type: "int64",
            id: 5
          },
          Lthg: {
            type: "int64",
            id: 6
          },
          Qtltgf: {
            type: "int64",
            id: 7
          },
          Xsltg: {
            type: "int64",
            id: 8
          },
          Xsltag: {
            type: "int64",
            id: 9
          },
          Xsltbg: {
            type: "int64",
            id: 10
          },
          Xslthg: {
            type: "int64",
            id: 11
          },
          Xsgjcg: {
            type: "int64",
            id: 12
          },
          Xsgyfrcg: {
            type: "int64",
            id: 13
          },
          Xsjnfrcg: {
            type: "int64",
            id: 14
          },
          Xsjnzrrcg: {
            type: "int64",
            id: 15
          },
          Xsggcg: {
            type: "int64",
            id: 16
          },
          Xsjwfrcg: {
            type: "int64",
            id: 17
          },
          Xsjwzrrcg: {
            type: "int64",
            id: 18
          },
          Wltg: {
            type: "int64",
            id: 19
          },
          Gjg: {
            type: "int64",
            id: 20
          },
          Gyfrg: {
            type: "int64",
            id: 21
          },
          Jnfgyfr: {
            type: "int64",
            id: 22
          },
          Zpg: {
            type: "int64",
            id: 23
          },
          Nbzgg: {
            type: "int64",
            id: 24
          },
          Yxg: {
            type: "int64",
            id: 25
          },
          Jwfrg: {
            type: "int64",
            id: 26
          },
          Qtwltgf: {
            type: "int64",
            id: 27
          }
        }
      },
      F10GbfhGbjgOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10GbfhGbjg",
            id: 2,
            options: {}
          }
        }
      },
      F10CpbdKpqkOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10CpbdKpqk",
            id: 2,
            options: {}
          }
        }
      },
      F10CpbdCjhbOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10CpbdCjhb",
            id: 2,
            options: {}
          }
        }
      },
      F10CwtsLrfpbzyOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10CwtsLrfpbzy",
            id: 2,
            options: {}
          }
        }
      },
      F10CwtsZcfzbzyOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10CwtsZcfzbzy",
            id: 2,
            options: {}
          }
        }
      },
      F10ZygcOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10Zygc",
            id: 2,
            options: {}
          }
        }
      },
      F10DstxJjltOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10DstxJjlt",
            id: 2,
            options: {}
          }
        }
      },
      F10DstxRzrqOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10DstxRzrq",
            id: 2,
            options: {}
          }
        }
      },
      F10DstxJgccOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10DstxJgcc",
            id: 2,
            options: {}
          }
        }
      },
      F10DstxGdzjcOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10DstxGdzjc",
            id: 2,
            options: {}
          }
        }
      },
      F10DstxDzjyOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10DstxDzjy",
            id: 2,
            options: {}
          }
        }
      },
      F10DstxCgbdqkOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10DstxCgbdqk",
            id: 2,
            options: {}
          }
        }
      },
      F10GlcNdbcqkOutPut: {
        fields: {
          obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "F10GlcNdbcqk",
            id: 2,
            options: {}
          }
        }
      },
      F10ZxjbDjdxjllbOutPut: {
        fields: {
          obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "F10ZxjbDjdxjllb",
            id: 2,
            options: {}
          }
        }
      },
      F10GbfhGbbdOutPut: {
        fields: {
          obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "F10GbfhGbbd",
            id: 2,
            options: {}
          }
        }
      },
      F10ZbyzCyqtsszqOutPut: {
        fields: {
          obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "F10ZbyzCyqtsszq",
            id: 2,
            options: {}
          }
        }
      },
      F10ZbyzCyfssgqOutPut: {
        fields: {
          obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "F10ZbyzCyfssgq",
            id: 2,
            options: {}
          }
        }
      },
      F10zbyzRzqkzfyssOutPut: {
        fields: {
          obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "F10zbyzRzqkzfyss",
            id: 2,
            options: {}
          }
        }
      },
      F10ZbyzXmtzMjzjqkOutPut: {
        fields: {
          obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "F10ZbyzXmtzMjzjqk",
            id: 2,
            options: {}
          }
        }
      },
      F10ZbyzXmtzMjzjcnxmOutPut: {
        fields: {
          obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "F10ZbyzXmtzMjzjcnxm",
            id: 2,
            options: {}
          }
        }
      },
      F10ZbyzXmtzMjzjbgxmOutPut: {
        fields: {
          obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "F10ZbyzXmtzMjzjbgxm",
            id: 2,
            options: {}
          }
        }
      },
      F10ZbyzXmtzFmjzjxmOutPut: {
        fields: {
          obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "F10ZbyzXmtzFmjzjxm",
            id: 2,
            options: {}
          }
        }
      },
      F10RsrEarnPSForeOutPut: {
        fields: {
          obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "F10RsrEarnPSFore",
            id: 2,
            options: {}
          }
        }
      },
      F10RsrResReportOutPut: {
        fields: {
          obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "F10RsrResReport",
            id: 2,
            options: {}
          }
        }
      },
      F10BondDfzfzfxOutput: {
        fields: {
          zqzhdm: {
            type: "string",
            id: 1
          },
          zqmc: {
            type: "string",
            id: 2
          },
          fxrmc: {
            type: "string",
            id: 3
          },
          fxqsr: {
            type: "string",
            id: 4
          },
          fxzzr: {
            type: "string",
            id: 5
          },
          zqze: {
            type: "int64",
            id: 6
          },
          fxjg: {
            type: "int64",
            id: 7
          },
          ssrq: {
            type: "string",
            id: 8
          }
        }
      },
      F10BondDfzfzqxxOutput: {
        fields: {
          zqzhdm: {
            rule: "required",
            type: "string",
            id: 1
          },
          zqjc: {
            type: "string",
            id: 2
          },
          zqqc: {
            type: "string",
            id: 3
          },
          jxqsr: {
            type: "string",
            id: 4
          },
          dqr: {
            type: "string",
            id: 5
          },
          cxqx: {
            type: "int64",
            id: 6
          },
          pmll: {
            type: "int64",
            id: 7
          },
          xppz: {
            type: "string",
            id: 8
          },
          jxfs: {
            type: "int64",
            id: 9
          },
          lllx: {
            type: "int64",
            id: 10
          },
          fxcs: {
            type: "int64",
            id: 11
          },
          fxrsm: {
            type: "string",
            id: 12
          },
          chfs: {
            type: "string",
            id: 13
          },
          sfms: {
            type: "string",
            id: 14
          },
          ktqdf: {
            type: "string",
            id: 15
          },
          bzqzsl: {
            type: "int64",
            id: 16
          }
        }
      },
      F10BondFlszzfxOutput: {
        fields: {
          zqzhdm: {
            rule: "required",
            type: "string",
            id: 1
          },
          zqmc: {
            type: "string",
            id: 2
          },
          fxrq: {
            type: "string",
            id: 3
          },
          hzwh: {
            type: "string",
            id: 4
          },
          fxfs: {
            type: "string",
            id: 5
          },
          fxdx: {
            type: "string",
            id: 6
          },
          fxjg: {
            type: "int64",
            id: 7
          },
          fxsl: {
            type: "int64",
            id: 8
          },
          bjjg: {
            type: "string",
            id: 9
          },
          cxfs: {
            type: "int64",
            id: 10
          },
          zxpgjg: {
            type: "string",
            id: 11
          },
          xydj: {
            type: "string",
            id: 12
          },
          dbr: {
            type: "string",
            id: 13
          },
          dbrlx: {
            type: "string",
            id: 14
          },
          xygdpsje: {
            type: "int64",
            id: 15
          },
          wssgrq: {
            type: "string",
            id: 16
          },
          wszqlggr: {
            type: "string",
            id: 17
          },
          wszql: {
            type: "int64",
            id: 18
          },
          zzfx: {
            type: "int64",
            id: 19
          },
          sstjr: {
            type: "string",
            id: 20
          },
          kzzdjjg: {
            type: "string",
            id: 21
          },
          mjzjze: {
            type: "int64",
            id: 22
          },
          fyhj: {
            type: "int64",
            id: 23
          },
          mjzjje: {
            type: "int64",
            id: 24
          },
          tzjyr: {
            type: "string",
            id: 25
          }
        }
      },
      F10BondFlszztkOutput: {
        fields: {
          zqzhdm: {
            rule: "required",
            type: "string",
            id: 1
          },
          ybhstk: {
            type: "string",
            id: 2
          },
          mjzjtxsm: {
            type: "string",
            id: 3
          }
        }
      },
      F10BondFlszzxxOutput: {
        fields: {
          zqzhdm: {
            rule: "required",
            type: "string",
            id: 1
          },
          zqjc: {
            type: "string",
            id: 2
          },
          zqmc: {
            type: "string",
            id: 3
          },
          zqmz: {
            type: "int64",
            id: 4
          },
          zqqx: {
            type: "int64",
            id: 5
          },
          jxqsr: {
            type: "string",
            id: 6
          },
          dqr: {
            type: "string",
            id: 7
          },
          ll: {
            type: "int64",
            id: 8
          },
          fxpl: {
            type: "int64",
            id: 9
          },
          fxrsm: {
            type: "string",
            id: 10
          },
          ssqsr: {
            type: "string",
            id: 11
          },
          scssgm: {
            type: "int64",
            id: 12
          },
          bzqzsl: {
            type: "int64",
            id: 13
          }
        }
      },
      F10BondGzxxOutput: {
        fields: {
          zqzhdm: {
            rule: "required",
            type: "string",
            id: 1
          },
          gzqc: {
            type: "string",
            id: 2
          },
          zqlx: {
            type: "int64",
            id: 3
          },
          nd: {
            type: "int64",
            id: 4
          },
          fxr: {
            type: "string",
            id: 5
          },
          zfe: {
            type: "int64",
            id: 6
          },
          mz: {
            type: "int64",
            id: 7
          },
          fxjg: {
            type: "int64",
            id: 8
          },
          pmll: {
            type: "int64",
            id: 9
          },
          qx: {
            type: "int64",
            id: 10
          },
          jxfs: {
            type: "int64",
            id: 11
          },
          lllx: {
            type: "int64",
            id: 12
          },
          qxrq: {
            type: "string",
            id: 13
          },
          dqrq: {
            type: "string",
            id: 14
          },
          xppz: {
            type: "string",
            id: 15
          },
          fxcs: {
            type: "int64",
            id: 16
          },
          fxr2: {
            type: "string",
            id: 17
          },
          chfs: {
            type: "string",
            id: 18
          },
          sfms: {
            type: "string",
            id: 19
          },
          sl: {
            type: "int64",
            id: 20
          },
          ktqdf: {
            type: "string",
            id: 21
          },
          ssrq: {
            type: "string",
            id: 22
          },
          zyssgdm: {
            type: "string",
            id: 23
          },
          hgdm7: {
            type: "string",
            id: 24
          },
          hgdm28: {
            type: "string",
            id: 25
          },
          hgdm91: {
            type: "string",
            id: 26
          },
          dfqsrq: {
            type: "string",
            id: 27
          },
          bzqzsl: {
            type: "int64",
            id: 28
          }
        }
      },
      F10BondHgxxOutput: {
        fields: {
          hgzhdm: {
            rule: "required",
            type: "string",
            id: 1
          },
          hgjc: {
            type: "string",
            id: 2
          },
          hgpz: {
            type: "string",
            id: 3
          }
        }
      },
      F10BondKzzfxOutput: {
        fields: {
          zqzhdm: {
            rule: "required",
            type: "string",
            id: 1
          },
          zqmc: {
            type: "string",
            id: 2
          },
          faxr: {
            type: "string",
            id: 3
          },
          hzwh: {
            type: "string",
            id: 4
          },
          fxfs: {
            type: "string",
            id: 5
          },
          fxdx: {
            type: "string",
            id: 6
          },
          fxjg: {
            type: "int64",
            id: 7
          },
          fxsl: {
            type: "int64",
            id: 8
          },
          bjjg: {
            type: "string",
            id: 9
          },
          cxfs: {
            type: "int64",
            id: 10
          },
          zxpgjg: {
            type: "string",
            id: 11
          },
          xydj: {
            type: "string",
            id: 12
          },
          psje: {
            type: "int64",
            id: 13
          },
          wssgr: {
            type: "string",
            id: 14
          },
          wszqggr: {
            type: "string",
            id: 15
          },
          wszql: {
            type: "int64",
            id: 16
          },
          zzfx: {
            type: "int64",
            id: 17
          },
          sstjr: {
            type: "string",
            id: 18
          },
          kzzdjjg: {
            type: "string",
            id: 19
          },
          mjzjze: {
            type: "int64",
            id: 20
          },
          fyhj: {
            type: "int64",
            id: 21
          },
          mjzjje: {
            type: "int64",
            id: 22
          },
          zgqsr: {
            type: "string",
            id: 23
          },
          zgzzr: {
            type: "string",
            id: 24
          },
          zgdm: {
            type: "string",
            id: 25
          },
          zgjc: {
            type: "string",
            id: 26
          }
        }
      },
      F10BondKzztkOutput: {
        fields: {
          zqzhdm: {
            rule: "required",
            type: "string",
            id: 1
          },
          tztk: {
            type: "string",
            id: 2
          },
          xztk: {
            type: "string",
            id: 3
          },
          dqshtk: {
            type: "string",
            id: 4
          },
          ybhstk: {
            type: "string",
            id: 5
          },
          mjzjtX: {
            type: "string",
            id: 6
          }
        }
      },
      BondKzztzzgj: {
        fields: {
          zqmc: {
            type: "string",
            id: 1
          },
          sjlx: {
            type: "string",
            id: 2
          },
          bdqzgj: {
            type: "int64",
            id: 3
          },
          bdhzgj: {
            type: "int64",
            id: 4
          },
          xzgjsxrq: {
            type: "string",
            id: 5
          }
        }
      },
      F10BondKzztzzgj: {
        fields: {
          ggrq: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "BondKzztzzgj",
            id: 2,
            options: {}
          }
        }
      },
      F10BondKzztzzgjOutput: {
        fields: {
          zqzhdm: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10BondKzztzzgj",
            id: 2,
            options: {}
          }
        }
      },
      F10BondKzzxxOutput: {
        fields: {
          zqzhdm: {
            rule: "required",
            type: "string",
            id: 1
          },
          zqjc: {
            type: "string",
            id: 2
          },
          zqmc: {
            type: "string",
            id: 3
          },
          zqmz: {
            type: "int64",
            id: 4
          },
          zqqx: {
            type: "int64",
            id: 5
          },
          jxqsr: {
            type: "string",
            id: 6
          },
          dqr: {
            type: "string",
            id: 7
          },
          llsm: {
            type: "string",
            id: 8
          },
          fxpl: {
            type: "int64",
            id: 9
          },
          fxrsm: {
            type: "string",
            id: 10
          },
          cszgj: {
            type: "int64",
            id: 11
          },
          zxzgj: {
            type: "int64",
            id: 12
          },
          cszgsm: {
            type: "string",
            id: 13
          },
          ssqsr: {
            type: "string",
            id: 14
          },
          scssgm: {
            type: "int64",
            id: 15
          },
          bzqzsl: {
            type: "int64",
            id: 16
          }
        }
      },
      BondQycyr: {
        fields: {
          cyrmc: {
            rule: "required",
            type: "int64",
            id: 1
          },
          cyrmc2: {
            rule: "required",
            type: "string",
            id: 2
          },
          cyje: {
            type: "int64",
            id: 3
          },
          cyl: {
            type: "int64",
            id: 4
          },
          cybl: {
            type: "int64",
            id: 5
          },
          sid: {
            type: "int64",
            id: 6
          }
        }
      },
      F10BondQycyr: {
        fields: {
          jzrq: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "BondQycyr",
            id: 2,
            options: {}
          }
        }
      },
      F10BondQycyrOutput: {
        fields: {
          zqzhdm: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10BondQycyr",
            id: 2,
            options: {}
          }
        }
      },
      F10BondQyzfxOutput: {
        fields: {
          zqzhdm: {
            rule: "required",
            type: "string",
            id: 1
          },
          zqmc: {
            type: "string",
            id: 2
          },
          fxrmc: {
            type: "string",
            id: 3
          },
          ywmc: {
            type: "string",
            id: 4
          },
          fxqsr: {
            type: "string",
            id: 5
          },
          zqze: {
            type: "int64",
            id: 6
          },
          fxjg: {
            type: "int64",
            id: 7
          },
          ssrq: {
            type: "string",
            id: 8
          },
          sstjr: {
            type: "string",
            id: 9
          },
          fzcxs: {
            type: "string",
            id: 10
          },
          tgr: {
            type: "string",
            id: 11
          },
          zcdz: {
            type: "string",
            id: 12
          },
          bgdz: {
            type: "string",
            id: 13
          },
          frdb: {
            type: "string",
            id: 14
          },
          yzbm: {
            type: "string",
            id: 15
          },
          hlwdz: {
            type: "string",
            id: 16
          },
          cz: {
            type: "string",
            id: 17
          },
          zczb: {
            type: "int64",
            id: 18
          },
          kjsws: {
            type: "string",
            id: 19
          },
          lssws: {
            type: "string",
            id: 20
          },
          fxrdm: {
            type: "string",
            id: 21
          }
        }
      },
      F10BondQyzxxOutput: {
        fields: {
          zqzhdm: {
            rule: "required",
            type: "string",
            id: 1
          },
          zqmc: {
            type: "string",
            id: 2
          },
          ssrq: {
            type: "string",
            id: 3
          },
          jxqsr: {
            type: "string",
            id: 4
          },
          dqr: {
            type: "string",
            id: 5
          },
          cxqx: {
            type: "int64",
            id: 6
          },
          pmll: {
            type: "int64",
            id: 7
          },
          xppz: {
            type: "string",
            id: 8
          },
          jxfs: {
            type: "int64",
            id: 9
          },
          lllx: {
            type: "int64",
            id: 10
          },
          fxcs: {
            type: "int64",
            id: 11
          },
          fxr: {
            type: "string",
            id: 12
          },
          chfs: {
            type: "string",
            id: 13
          },
          sfms: {
            type: "string",
            id: 14
          },
          sl: {
            type: "int64",
            id: 15
          },
          ktqdf: {
            type: "string",
            id: 16
          },
          pjjg: {
            type: "string",
            id: 17
          },
          xydj: {
            type: "string",
            id: 18
          },
          dbr: {
            type: "string",
            id: 19
          },
          dfqsr: {
            type: "string",
            id: 20
          },
          bzqzsl: {
            type: "int64",
            id: 21
          }
        }
      },
      BondZqgg: {
        fields: {
          ggbt: {
            type: "string",
            id: 1
          },
          qw: {
            type: "string",
            id: 2
          },
          zlly: {
            type: "string",
            id: 3
          },
          sid: {
            type: "int64",
            id: 4
          }
        }
      },
      F10BondZqgg: {
        fields: {
          ggrq: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "BondZqgg",
            id: 2,
            options: {}
          }
        }
      },
      F10BondZqggOutput: {
        fields: {
          zqzhdm: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10BondZqgg",
            id: 2,
            options: {}
          }
        }
      },
      BondZqxjl: {
        fields: {
          fxrq: {
            type: "string",
            id: 1
          },
          xjlllx: {
            type: "string",
            id: 2
          },
          je: {
            type: "int64",
            id: 3
          },
          zqdjr: {
            type: "string",
            id: 4
          },
          cqcxr: {
            type: "string",
            id: 5
          },
          sid: {
            type: "int64",
            id: 6
          }
        }
      },
      F10BondZqxjl: {
        fields: {
          ggrq: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "BondZqxjl",
            id: 2,
            options: {}
          }
        }
      },
      F10BondZqxjlOutput: {
        fields: {
          zqzhdm: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10BondZqxjl",
            id: 2,
            options: {}
          }
        }
      },
      BondZqzg: {
        fields: {
          ljzgje: {
            type: "int64",
            id: 1
          },
          ljzgs: {
            type: "int64",
            id: 2
          },
          bqzgje: {
            type: "int64",
            id: 3
          },
          bqzgs: {
            type: "int64",
            id: 4
          },
          sybj: {
            type: "int64",
            id: 5
          }
        }
      },
      F10BondZqzg: {
        fields: {
          jzrq: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "BondZqzg",
            id: 2,
            options: {}
          }
        }
      },
      F10BondZqzgOutput: {
        fields: {
          zqzhdm: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10BondZqzg",
            id: 2,
            options: {}
          }
        }
      },
      F10ForexDqjj: {
        fields: {
          rn: {
            type: "int64",
            id: 1
          },
          zdzwmc: {
            type: "string",
            id: 2
          },
          zdz: {
            type: "string",
            id: 3
          },
          stype: {
            type: "int64",
            id: 4
          }
        }
      },
      F10ForexDqjjOutput: {
        fields: {
          zhdm: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "F10ForexDqjj",
            id: 2,
            options: {}
          }
        }
      },
      F10ForexJqjj: {
        fields: {
          rn: {
            rule: "required",
            type: "int64",
            id: 1
          },
          zdzwmc: {
            type: "string",
            id: 2
          },
          zdz: {
            type: "string",
            id: 3
          },
          stype: {
            type: "int64",
            id: 4
          }
        }
      },
      F10ForexJqjjOutput: {
        fields: {
          zhdm: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10ForexJqjj",
            id: 2,
            options: {}
          }
        }
      },
      F10ForexLlhh: {
        fields: {
          rn: {
            rule: "required",
            type: "int64",
            id: 1
          },
          zdzwmc: {
            type: "string",
            id: 2
          },
          zdz: {
            type: "string",
            id: 3
          },
          stype: {
            type: "int64",
            id: 4
          }
        }
      },
      F10ForexLlhhOutput: {
        fields: {
          zhdm: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10ForexLlhh",
            id: 2,
            options: {}
          }
        }
      },
      F10ForexQqwhjbzlOutput: {
        fields: {
          whdm: {
            rule: "required",
            type: "string",
            id: 1
          },
          whmc: {
            type: "string",
            id: 2
          },
          sjly: {
            type: "string",
            id: 3
          },
          jysj: {
            type: "string",
            id: 4
          },
          jchbdm: {
            type: "string",
            id: 5
          },
          jchbmc: {
            type: "string",
            id: 6
          },
          jchbgjmc: {
            type: "string",
            id: 7
          },
          jchbssz: {
            type: "int64",
            id: 8
          },
          jchbsszmc: {
            type: "string",
            id: 9
          },
          jchbssdq: {
            type: "string",
            id: 10
          },
          jchbjj: {
            type: "string",
            id: 11
          },
          bjhbdm: {
            type: "string",
            id: 12
          },
          bjhbmc: {
            type: "string",
            id: 13
          },
          bjhbgjmc: {
            type: "string",
            id: 14
          },
          bjhbssz: {
            type: "int64",
            id: 15
          },
          bjhbsszmc: {
            type: "string",
            id: 16
          },
          bjhbssdq: {
            type: "string",
            id: 17
          },
          bjhbjj: {
            type: "string",
            id: 18
          }
        }
      },
      F10ForexShiborlv: {
        fields: {
          rn: {
            rule: "required",
            type: "int64",
            id: 1
          },
          zdzwmc: {
            type: "string",
            id: 2
          },
          zdz: {
            type: "string",
            id: 3
          },
          stype: {
            type: "int64",
            id: 4
          }
        }
      },
      F10ForexShiborlvOutput: {
        fields: {
          zhdm: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10ForexShiborlv",
            id: 2,
            options: {}
          }
        }
      },
      F10ForexWbdjq: {
        fields: {
          rn: {
            rule: "required",
            type: "int64",
            id: 1
          },
          zdzwmc: {
            type: "string",
            id: 2
          },
          zdz: {
            type: "string",
            id: 3
          },
          stype: {
            type: "int64",
            id: 4
          }
        }
      },
      F10ForexWbdjqOutput: {
        fields: {
          zhdm: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10ForexWbdjq",
            id: 2,
            options: {}
          }
        }
      },
      F10ForexWhbzMb: {
        fields: {
          rn: {
            rule: "required",
            type: "int64",
            id: 1
          },
          whbzlx: {
            type: "int64",
            id: 2
          },
          clfs: {
            type: "int64",
            id: 3
          },
          zdmc: {
            rule: "required",
            type: "string",
            id: 4
          },
          zdzwmc: {
            type: "string",
            id: 5
          },
          bz: {
            type: "string",
            id: 6
          }
        }
      },
      F10ForexWhbzMbOutput: {
        fields: {
          stype: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10ForexWhbzMb",
            id: 2,
            options: {}
          }
        }
      },
      F10ForexXycj: {
        fields: {
          rn: {
            rule: "required",
            type: "int64",
            id: 1
          },
          zdzwmc: {
            type: "string",
            id: 2
          },
          zdz: {
            type: "string",
            id: 3
          },
          stype: {
            type: "int64",
            id: 4
          }
        }
      },
      F10ForexXycjOutput: {
        fields: {
          zhdm: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10ForexXycj",
            id: 2,
            options: {}
          }
        }
      },
      F10ForexYqjj: {
        fields: {
          rn: {
            rule: "required",
            type: "int64",
            id: 1
          },
          zdzwmc: {
            type: "string",
            id: 2
          },
          zdz: {
            type: "string",
            id: 3
          },
          stype: {
            type: "int64",
            id: 4
          }
        }
      },
      F10ForexYqjjOutput: {
        fields: {
          zhdm: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10ForexYqjj",
            id: 2,
            options: {}
          }
        }
      },
      F10FuturesBzhyOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          jydm: {
            type: "string",
            id: 2
          },
          jypz: {
            type: "string",
            id: 3
          },
          ssjys: {
            type: "string",
            id: 4
          },
          jydw: {
            type: "string",
            id: 5
          },
          bjdw: {
            type: "string",
            id: 6
          },
          zxjwbd: {
            type: "string",
            id: 7
          },
          zdbdxz: {
            type: "string",
            id: 8
          },
          zdbzj: {
            type: "string",
            id: 9
          },
          hyjzj: {
            type: "int64",
            id: 10
          },
          jysxf: {
            type: "string",
            id: 11
          },
          hyjgyf: {
            type: "string",
            id: 12
          },
          zhjyr: {
            type: "string",
            id: 13
          },
          zhjgr: {
            type: "string",
            id: 14
          },
          jgpj: {
            type: "string",
            id: 15
          },
          jgdd: {
            type: "string",
            id: 16
          },
          jysjysj: {
            type: "string",
            id: 17
          },
          bdjysj: {
            type: "string",
            id: 18
          },
          jgfs: {
            type: "string",
            id: 19
          },
          jyfs: {
            type: "string",
            id: 20
          },
          jybcj: {
            type: "string",
            id: 21
          },
          jgyq: {
            type: "string",
            id: 22
          },
          wtjgsxf: {
            type: "string",
            id: 23
          },
          qtfy: {
            type: "string",
            id: 24
          },
          jchbssdq: {
            type: "string",
            id: 25
          },
          jchbssgj: {
            type: "string",
            id: 26
          },
          jchbsd: {
            type: "string",
            id: 27
          },
          bjhbssdq: {
            type: "string",
            id: 28
          },
          bjhbssgj: {
            type: "string",
            id: 29
          },
          bjhbsd: {
            type: "string",
            id: 30
          },
          pzdm: {
            type: "string",
            id: 31
          },
          pzmc: {
            type: "string",
            id: 32
          },
          jgdw: {
            type: "string",
            id: 33
          },
          jgjy: {
            type: "string",
            id: 34
          },
          jgq: {
            type: "string",
            id: 35
          },
          bjfs: {
            type: "string",
            id: 36
          },
          hybd: {
            type: "string",
            id: 37
          },
          ssrq: {
            type: "string",
            id: 38
          }
        }
      },
      F10FuturesCpgk: {
        fields: {
          rn: {
            rule: "required",
            type: "int64",
            id: 1
          },
          title: {
            type: "string",
            id: 2
          },
          content: {
            type: "string",
            id: 3
          }
        }
      },
      F10FuturesCpgkOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10FuturesCpgk",
            id: 2,
            options: {}
          }
        }
      },
      F10FuturesFkbf: {
        fields: {
          rn: {
            rule: "required",
            type: "int64",
            id: 1
          },
          title: {
            type: "string",
            id: 2
          },
          content: {
            type: "string",
            id: 3
          }
        }
      },
      F10FuturesFkbfOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10FuturesFkbf",
            id: 2,
            options: {}
          }
        }
      },
      F10FuturesJsxz: {
        fields: {
          rn: {
            rule: "required",
            type: "int64",
            id: 1
          },
          title: {
            type: "string",
            id: 2
          },
          content: {
            type: "string",
            id: 3
          }
        }
      },
      F10FuturesJsxzOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10FuturesJsxz",
            id: 2,
            options: {}
          }
        }
      },
      F10FuturesJygz: {
        fields: {
          rn: {
            rule: "required",
            type: "int64",
            id: 1
          },
          title: {
            type: "string",
            id: 2
          },
          content: {
            type: "string",
            id: 3
          }
        }
      },
      F10FuturesJygzOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10FuturesJygz",
            id: 2,
            options: {}
          }
        }
      },
      F10FuturesWphy: {
        fields: {
          rn: {
            rule: "required",
            type: "int64",
            id: 1
          },
          title: {
            type: "string",
            id: 2
          },
          content: {
            type: "string",
            id: 3
          }
        }
      },
      F10FuturesWphyOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10FuturesWphy",
            id: 2,
            options: {}
          }
        }
      },
      F10FuturesYxys: {
        fields: {
          rn: {
            rule: "required",
            type: "int64",
            id: 1
          },
          title: {
            type: "string",
            id: 2
          },
          content: {
            type: "string",
            id: 3
          }
        }
      },
      F10FuturesYxysOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10FuturesYxys",
            id: 2,
            options: {}
          }
        }
      },
      F10SpotBzhy: {
        fields: {
          rn: {
            rule: "required",
            type: "int64",
            id: 1
          },
          title: {
            type: "string",
            id: 2
          },
          content: {
            type: "string",
            id: 3
          },
          sourcetable: {
            type: "string",
            id: 4
          }
        }
      },
      F10SpotBzhyOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10SpotBzhy",
            id: 2,
            options: {}
          }
        }
      },
      F10SpotFjsm: {
        fields: {
          rn: {
            rule: "required",
            type: "int64",
            id: 1
          },
          title: {
            type: "string",
            id: 2
          },
          content: {
            type: "string",
            id: 3
          }
        }
      },
      F10SpotFjsmOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10SpotFjsm",
            id: 2,
            options: {}
          }
        }
      },
      F10SpotJygz: {
        fields: {
          rn: {
            rule: "required",
            type: "int64",
            id: 1
          },
          title: {
            type: "string",
            id: 2
          },
          content: {
            type: "string",
            id: 3
          }
        }
      },
      F10SpotJygzOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10SpotJygz",
            id: 2,
            options: {}
          }
        }
      },
      F10SpotPzgk: {
        fields: {
          rn: {
            rule: "required",
            type: "int64",
            id: 1
          },
          title: {
            type: "string",
            id: 2
          },
          content: {
            type: "string",
            id: 3
          }
        }
      },
      F10SpotPzgkOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10SpotPzgk",
            id: 2,
            options: {}
          }
        }
      },
      F10SpotWphy: {
        fields: {
          rn: {
            rule: "required",
            type: "int64",
            id: 1
          },
          title: {
            type: "string",
            id: 2
          },
          content: {
            type: "string",
            id: 3
          }
        }
      },
      F10SpotWphyOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10SpotWphy",
            id: 2,
            options: {}
          }
        }
      },
      F10SpotYxys: {
        fields: {
          rn: {
            rule: "required",
            type: "int64",
            id: 1
          },
          title: {
            type: "string",
            id: 2
          },
          content: {
            type: "string",
            id: 3
          }
        }
      },
      F10SpotYxysOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10SpotYxys",
            id: 2,
            options: {}
          }
        }
      },
      OverallInfo: {
        fields: {
          TotalStockNum: {
            type: "int64",
            id: 1
          },
          AgreementStockNum: {
            type: "int64",
            id: 2
          },
          BrokerStockNum: {
            type: "int64",
            id: 3
          },
          WaitStockNum: {
            type: "int64",
            id: 4
          },
          ApplyStockNum: {
            type: "int64",
            id: 5
          }
        }
      },
      TodayListStock: {
        fields: {
          StockCode: {
            rule: "required",
            type: "string",
            id: 1
          },
          StockName: {
            type: "string",
            id: 2
          },
          MainBroker: {
            type: "string",
            id: 3
          },
          Industry: {
            type: "string",
            id: 4
          }
        }
      },
      TodayListStocks: {
        fields: {
          ListStockNum: {
            rule: "required",
            type: "int64",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "TodayListStock",
            id: 2,
            options: {}
          }
        }
      },
      TodayBrokerStock: {
        fields: {
          StockCode: {
            rule: "required",
            type: "string",
            id: 1
          },
          StockName: {
            type: "string",
            id: 2
          },
          BrokerNum: {
            type: "int64",
            id: 3
          },
          NewAddNum: {
            type: "int64",
            id: 4
          }
        }
      },
      TodayBrokerStocks: {
        fields: {
          BrokerStockNum: {
            rule: "required",
            type: "int64",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "TodayBrokerStock",
            id: 2,
            options: {}
          }
        }
      },
      TodayConvertStock: {
        fields: {
          StockCode: {
            rule: "required",
            type: "string",
            id: 1
          },
          StockName: {
            type: "string",
            id: 2
          },
          BrokerNum: {
            type: "int64",
            id: 3
          }
        }
      },
      TodayConvertStocks: {
        fields: {
          ConvertStockNum: {
            rule: "required",
            type: "int64",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "TodayConvertStock",
            id: 2,
            options: {}
          }
        }
      },
      TodayIssueStock: {
        fields: {
          StockCode: {
            rule: "required",
            type: "string",
            id: 1
          },
          StockName: {
            type: "string",
            id: 2
          },
          ProjectAdvance: {
            type: "string",
            id: 3
          },
          IssuePrice: {
            type: "string",
            id: 4
          }
        }
      },
      TodayIssueStocks: {
        fields: {
          IssueStockNum: {
            rule: "required",
            type: "int64",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "TodayIssueStock",
            id: 2,
            options: {}
          }
        }
      },
      BrokerStock: {
        fields: {
          StockCode: {
            rule: "required",
            type: "string",
            id: 1
          },
          StockName: {
            type: "string",
            id: 2
          },
          Price: {
            type: "int64",
            id: 3
          },
          InitAmount: {
            type: "int64",
            id: 4
          },
          InitCost: {
            type: "int64",
            id: 5
          }
        }
      },
      BrokerDetaileInfo: {
        fields: {
          BrokerName: {
            rule: "required",
            type: "string",
            id: 1
          },
          FirstStockNum: {
            type: "int64",
            id: 2
          },
          LastStockNum: {
            type: "int64",
            id: 3
          },
          MainStockNum: {
            type: "int64",
            id: 4
          },
          AvgPE: {
            type: "int64",
            id: 5
          },
          AvgPB: {
            type: "int64",
            id: 6
          },
          TotalValue: {
            type: "int64",
            id: 7
          },
          Data: {
            rule: "repeated",
            type: "BrokerStock",
            id: 8,
            options: {}
          }
        }
      },
      BrokerInfo: {
        fields: {
          BrokerName: {
            rule: "required",
            type: "string",
            id: 1
          },
          BeginDate: {
            rule: "required",
            type: "string",
            id: 2
          },
          InitAmount: {
            type: "int64",
            id: 3
          }
        }
      },
      StockBrokerInfo: {
        fields: {
          StockCode: {
            rule: "required",
            type: "string",
            id: 1
          },
          StockName: {
            type: "string",
            id: 2
          },
          Data: {
            rule: "repeated",
            type: "BrokerInfo",
            id: 3,
            options: {}
          }
        }
      },
      IssueDetaileInfo: {
        fields: {
          StockCode: {
            rule: "required",
            type: "string",
            id: 1
          },
          StockName: {
            type: "string",
            id: 2
          },
          IssueAmount: {
            type: "int64",
            id: 3
          },
          CollectCapital: {
            type: "int64",
            id: 4
          },
          IssuePrice: {
            type: "string",
            id: 5
          },
          LastClose: {
            type: "int64",
            id: 6
          },
          IssuePE: {
            type: "int64",
            id: 7
          },
          OverflowRatio: {
            type: "int64",
            id: 8
          },
          ProjectAdvance: {
            type: "string",
            id: 9
          },
          IssueDate: {
            type: "string",
            id: 10
          },
          IssueTarget: {
            type: "string",
            id: 11
          }
        }
      },
      IssueStock: {
        fields: {
          StockCode: {
            rule: "required",
            type: "string",
            id: 1
          },
          StockName: {
            type: "string",
            id: 2
          },
          NoticeDate: {
            type: "string",
            id: 3
          },
          IssueScale: {
            type: "int64",
            id: 4
          },
          IssuePrice: {
            type: "string",
            id: 5
          },
          ProjectAdvance: {
            type: "string",
            id: 6
          },
          PE: {
            type: "int64",
            id: 7
          },
          LatestNoticeDate: {
            type: "string",
            id: 8
          }
        }
      },
      IssueStatInfo: {
        fields: {
          StockNum: {
            type: "int64",
            id: 1
          },
          TotalScale: {
            type: "int64",
            id: 2
          },
          AvgPE: {
            type: "int64",
            id: 3
          },
          Data: {
            rule: "repeated",
            type: "IssueStock",
            id: 4,
            options: {}
          }
        }
      },
      BrokerData: {
        fields: {
          BrokerName: {
            rule: "required",
            type: "string",
            id: 1
          },
          LastStockNum: {
            type: "int64",
            id: 2
          },
          FirstStockNum: {
            type: "int64",
            id: 3
          }
        }
      },
      BrokerList: {
        fields: {
          BrokerNum: {
            rule: "required",
            type: "int64",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "BrokerData",
            id: 2,
            options: {}
          }
        }
      },
      QuickReportData: {
        fields: {
          StockCode: {
            rule: "required",
            type: "string",
            id: 1
          },
          StockName: {
            type: "string",
            id: 2
          },
          ReportDate: {
            type: "string",
            id: 3
          },
          ReportTitle: {
            type: "string",
            id: 4
          },
          ClassTag: {
            type: "int64",
            id: 5
          }
        }
      },
      FinanceQuickReport: {
        fields: {
          Data: {
            rule: "repeated",
            type: "QuickReportData",
            id: 2,
            options: {}
          }
        }
      },
      NewsDataItem: {
        fields: {
          NewsId: {
            type: "int64",
            id: 1
          },
          Date: {
            type: "string",
            id: 2
          },
          Title: {
            type: "string",
            id: 3
          },
          Context: {
            type: "string",
            id: 4
          },
          Source: {
            type: "string",
            id: 5
          }
        }
      },
      StockNews: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "NewsDataItem",
            id: 2,
            options: {}
          }
        }
      },
      SelfNews: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          NewsId: {
            type: "int64",
            id: 2
          },
          Date: {
            type: "string",
            id: 3
          },
          Title: {
            type: "string",
            id: 4
          },
          Context: {
            type: "string",
            id: 5
          },
          Source: {
            type: "string",
            id: 6
          }
        }
      },
      NewsClassData: {
        fields: {
          Version: {
            rule: "required",
            type: "int64",
            id: 1
          },
          ClassMask: {
            type: "int64",
            id: 2
          },
          Data: {
            type: "NewsDataItem",
            id: 3
          }
        }
      },
      AnnouncemtDataItem: {
        fields: {
          Date: {
            type: "string",
            id: 1
          },
          AnnouncemId: {
            rule: "required",
            type: "int64",
            id: 2
          },
          Title: {
            type: "string",
            id: 3
          },
          Context: {
            type: "string",
            id: 4
          },
          type: {
            type: "string",
            id: 5
          }
        }
      },
      StockAnnouncemt: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "AnnouncemtDataItem",
            id: 2,
            options: {}
          }
        }
      },
      SelfAnnouncemt: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Date: {
            type: "string",
            id: 2
          },
          AnnouncemId: {
            rule: "required",
            type: "int64",
            id: 3
          },
          Title: {
            type: "string",
            id: 4
          },
          Context: {
            type: "string",
            id: 5
          },
          type: {
            type: "string",
            id: 6
          }
        }
      },
      InnerNewsDataItem: {
        fields: {
          Version: {
            rule: "required",
            type: "int64",
            id: 1
          },
          Data: {
            type: "NewsDataItem",
            id: 2
          }
        }
      },
      InnerAnnouncemtDataItem: {
        fields: {
          Version: {
            rule: "required",
            type: "int64",
            id: 1
          },
          Data: {
            type: "AnnouncemtDataItem",
            id: 2
          }
        }
      },
      ReportDataItem: {
        fields: {
          Id: {
            type: "int64",
            id: 1
          },
          Date: {
            type: "string",
            id: 2
          },
          Title: {
            type: "string",
            id: 3
          },
          Organization: {
            type: "string",
            id: 4
          },
          Context: {
            type: "string",
            id: 5
          },
          type: {
            type: "string",
            id: 6
          },
          RateClass: {
            type: "string",
            id: 7
          },
          RateDirection: {
            type: "string",
            id: 8
          },
          Author: {
            type: "string",
            id: 9
          },
          HightPrice: {
            type: "int64",
            id: 10
          },
          LowPrice: {
            type: "int64",
            id: 11
          }
        }
      },
      StockReport: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "ReportDataItem",
            id: 2,
            options: {}
          }
        }
      },
      SelfReport: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Id: {
            type: "int64",
            id: 2
          },
          Date: {
            type: "string",
            id: 3
          },
          Title: {
            type: "string",
            id: 4
          },
          Organization: {
            type: "string",
            id: 5
          },
          Context: {
            type: "string",
            id: 6
          },
          type: {
            type: "string",
            id: 7
          },
          RateClass: {
            type: "string",
            id: 8
          },
          RateDirection: {
            type: "string",
            id: 9
          },
          Author: {
            type: "string",
            id: 10
          },
          HightPrice: {
            type: "int64",
            id: 11
          },
          LowPrice: {
            type: "int64",
            id: 12
          }
        }
      },
      InnerReportDataItem: {
        fields: {
          Version: {
            rule: "required",
            type: "int64",
            id: 1
          },
          Data: {
            type: "ReportDataItem",
            id: 2
          }
        }
      },
      RepCounterRsp: {
        fields: {
          RspNo: {
            rule: "required",
            type: "uint32",
            id: 1
          },
          RspDesc: {
            type: "string",
            id: 2
          },
          Status: {
            type: "uint32",
            id: 3
          },
          StatusDesc: {
            type: "string",
            id: 4
          }
        }
      },
      CounterRsp: {
        fields: {
          RspNo: {
            rule: "required",
            type: "int64",
            id: 1
          },
          RspDesc: {
            type: "string",
            id: 2
          }
        }
      },
      QueryCapitalRsp: {
        fields: {
          RspNo: {
            rule: "required",
            type: "int64",
            id: 1
          },
          RspDesc: {
            type: "string",
            id: 2
          },
          AvailCapital: {
            type: "int64",
            id: 3
          },
          FreezeCapital: {
            type: "int64",
            id: 4
          },
          Margin: {
            type: "int64",
            id: 5
          },
          TotalValue: {
            type: "int64",
            id: 6
          },
          TotalCapital: {
            type: "int64",
            id: 7
          }
        }
      },
      HoldItem: {
        fields: {
          HoldNo: {
            rule: "required",
            type: "string",
            id: 1
          },
          ProductCode: {
            type: "string",
            id: 2
          },
          ProductName: {
            type: "string",
            id: 3
          },
          BuyOrSell: {
            type: "string",
            id: 4
          },
          Margin: {
            type: "int64",
            id: 5
          },
          PosAmount: {
            type: "int64",
            id: 6
          },
          AvailAmount: {
            type: "int64",
            id: 7
          },
          AvgPosPrice: {
            type: "int64",
            id: 8
          },
          NewPrice: {
            type: "int64",
            id: 9
          },
          Value: {
            type: "int64",
            id: 10
          },
          Profit: {
            type: "int64",
            id: 11
          }
        }
      },
      QueryHoldRsp: {
        fields: {
          RspNo: {
            rule: "required",
            type: "int64",
            id: 1
          },
          RspDesc: {
            type: "string",
            id: 2
          },
          AvailCapital: {
            type: "int64",
            id: 3
          },
          FreezeCapital: {
            type: "int64",
            id: 4
          },
          TotalMargin: {
            type: "int64",
            id: 5
          },
          TotalValue: {
            type: "int64",
            id: 6
          },
          TotalCapital: {
            type: "int64",
            id: 7
          },
          TotalProfit: {
            type: "int64",
            id: 8
          },
          HoldList: {
            rule: "repeated",
            type: "HoldItem",
            id: 9,
            options: {}
          },
          CapitalId: {
            type: "string",
            id: 10
          }
        }
      },
      OrderItem: {
        fields: {
          OrderNo: {
            rule: "required",
            type: "string",
            id: 1
          },
          OrderTime: {
            type: "string",
            id: 2
          },
          ProductCode: {
            type: "string",
            id: 3
          },
          ProductName: {
            type: "string",
            id: 4
          },
          BuyOrSell: {
            type: "string",
            id: 5
          },
          OpenOrClose: {
            type: "string",
            id: 6
          },
          OrderType: {
            type: "string",
            id: 7
          },
          OrderAmount: {
            type: "int64",
            id: 8
          },
          OrderPrice: {
            type: "int64",
            id: 9
          },
          Status: {
            type: "string",
            id: 10
          }
        }
      },
      QueryOrderRsp: {
        fields: {
          RspNo: {
            rule: "required",
            type: "int64",
            id: 1
          },
          RspDesc: {
            type: "string",
            id: 2
          },
          OrderList: {
            rule: "repeated",
            type: "OrderItem",
            id: 3,
            options: {}
          },
          CapitalId: {
            type: "string",
            id: 4
          }
        }
      },
      DealItem: {
        fields: {
          DealNo: {
            rule: "required",
            type: "string",
            id: 1
          },
          DealTime: {
            type: "string",
            id: 2
          },
          ProductCode: {
            type: "string",
            id: 3
          },
          ProductName: {
            type: "string",
            id: 4
          },
          BuyOrSell: {
            type: "string",
            id: 5
          },
          OpenOrClose: {
            type: "string",
            id: 6
          },
          DealAmount: {
            type: "int64",
            id: 7
          },
          DealPrice: {
            type: "int64",
            id: 8
          },
          Fee: {
            type: "int64",
            id: 9
          }
        }
      },
      QueryDealRsp: {
        fields: {
          RspNo: {
            rule: "required",
            type: "int64",
            id: 1
          },
          RspDesc: {
            type: "string",
            id: 2
          },
          DealList: {
            rule: "repeated",
            type: "DealItem",
            id: 3,
            options: {}
          },
          CapitalId: {
            type: "string",
            id: 4
          }
        }
      },
      CounterSettleRsp: {
        fields: {
          RspNo: {
            rule: "required",
            type: "int64",
            id: 1
          },
          RspDesc: {
            type: "string",
            id: 2
          },
          SettleTime: {
            type: "string",
            id: 3
          },
          Status: {
            type: "int64",
            id: 4
          }
        }
      },
      TradeRuleRsp: {
        fields: {
          RspNo: {
            rule: "required",
            type: "int64",
            id: 1
          },
          RspDesc: {
            type: "string",
            id: 2
          },
          UpdateTime: {
            type: "string",
            id: 3
          },
          TradeRate: {
            type: "int64",
            id: 4
          },
          MinTradeFee: {
            type: "int64",
            id: 5
          },
          MaxPosAmount: {
            type: "int64",
            id: 6
          },
          MaxOrderAmount: {
            type: "int64",
            id: 7
          },
          SettleTime: {
            type: "string",
            id: 8
          },
          StopTrade: {
            type: "int64",
            id: 9
          },
          TradeRule: {
            type: "int64",
            id: 10
          },
          MarginRate: {
            type: "int64",
            id: 11
          },
          ForceCloseRate: {
            type: "int64",
            id: 12
          }
        }
      },
      DanShangPinShuXing: {
        fields: {
          obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          shangShiShiJian: {
            type: "string",
            id: 2
          },
          zhongWenJianCheng: {
            type: "string",
            id: 3
          },
          yingWenQuanCheng: {
            type: "string",
            id: 4
          },
          xiaoShuDianWeiShu: {
            type: "int32",
            id: 5
          },
          jiaoYiShiJianLeiXin: {
            type: "int32",
            id: 6
          },
          jiaoYiBiZhong: {
            type: "string",
            id: 7
          },
          tuiShiShiJian: {
            type: "string",
            id: 8
          },
          shangShiZhuangTai: {
            type: "int32",
            id: 9
          },
          zhengQuanLeiBie: {
            type: "string",
            id: 10
          },
          tingPai: {
            type: "int32",
            id: 11
          }
        }
      },
      MarketTradeDate: {
        fields: {
          Market: {
            rule: "required",
            type: "string",
            id: 1
          },
          TradeDate: {
            rule: "repeated",
            type: "string",
            id: 2,
            options: {
              packed: false
            }
          }
        }
      },
      FutureInfo: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Name: {
            type: "string",
            id: 2
          },
          BeginDate: {
            type: "string",
            id: 3
          },
          EndDate: {
            type: "string",
            id: 4
          },
          DeliveryDay: {
            type: "string",
            id: 5
          },
          TradeUnit: {
            type: "double",
            id: 6
          },
          MarginRate: {
            type: "double",
            id: 7
          }
        }
      },
      NewStockInfo: {
        fields: {
          StockCode: {
            rule: "required",
            type: "string",
            id: 1
          },
          StockName: {
            type: "string",
            id: 2
          },
          StockSummary: {
            type: "string",
            id: 3
          },
          BuyCode: {
            type: "string",
            id: 4
          },
          IssueTotal: {
            type: "string",
            id: 5
          },
          OnlineTotal: {
            type: "string",
            id: 6
          },
          BuyLimit: {
            type: "string",
            id: 7
          },
          IssuePrice: {
            type: "string",
            id: 8
          },
          FirstClose: {
            type: "string",
            id: 9
          },
          BuyDate: {
            type: "string",
            id: 10
          },
          PubDate: {
            type: "string",
            id: 11
          },
          PayDate: {
            type: "string",
            id: 12
          },
          TradeDate: {
            type: "string",
            id: 13
          },
          IssuePE: {
            type: "string",
            id: 14
          },
          IndustryPE: {
            type: "string",
            id: 15
          },
          SuccessRate: {
            type: "string",
            id: 16
          },
          OfferTotal: {
            type: "string",
            id: 17
          },
          OfferTimes: {
            type: "string",
            id: 18
          },
          SeriesNum: {
            type: "string",
            id: 19
          },
          IncreaseTotal: {
            type: "string",
            id: 20
          }
        }
      },
      YueKXianShuJu: {
        fields: {
          Nian: {
            rule: "required",
            type: "int64",
            id: 1
          },
          ZhangFu: {
            type: "int64",
            id: 2
          }
        }
      },
      YueZouShiShuJu: {
        fields: {
          Yue: {
            rule: "required",
            type: "int64",
            id: 1
          },
          YueKXian: {
            rule: "repeated",
            type: "YueKXianShuJu",
            id: 2,
            options: {}
          },
          ShangZhangGaiLv: {
            type: "int64",
            id: 3
          },
          PingJunZhangFu: {
            type: "int64",
            id: 4
          }
        }
      },
      HistoryTrends: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          YueZouShi: {
            rule: "repeated",
            type: "YueZouShiShuJu",
            id: 2,
            options: {}
          }
        }
      },
      MonthTrends: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          HangQing: {
            rule: "repeated",
            type: "LiShiHangQing",
            id: 2,
            options: {}
          }
        }
      },
      UAResponse: {
        fields: {
          Qid: {
            rule: "required",
            type: "string",
            id: 1
          },
          Err: {
            rule: "required",
            type: "int32",
            id: 2
          },
          Counter: {
            rule: "required",
            type: "uint32",
            id: 3
          },
          Data: {
            type: "bytes",
            id: 4
          }
        }
      },
      ChildResponse: {
        fields: {
          No: {
            rule: "required",
            type: "int32",
            id: 1
          },
          Data: {
            type: "bytes",
            id: 2
          }
        }
      },
      GroupResponse: {
        fields: {
          ChildRes: {
            rule: "repeated",
            type: "ChildResponse",
            id: 1,
            options: {}
          }
        }
      }
    }
  }
});

module.exports = $root;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint-disable no-bitwise */
/**
 * yfloat格式数据的解析模块
 * Created by jiagang on 2015/10/15.
 */

var TWO_PWR_16_DBL = 1 << 16;
var TWO_PWR_32_DBL = TWO_PWR_16_DBL * TWO_PWR_16_DBL;

/**
 * 得到value中高32位数值
 * @param {number} value
 * @returns {number}
 */
function getHighBits(value) {
  return value / TWO_PWR_32_DBL | 0;
}

/**
 * 得到value中低32位数值
 * @param {number} value
 * @returns {number}
 */
function getLowBits(value) {
  return value % TWO_PWR_32_DBL | 0;
}

/**
 * 高位和低位合并为一个数字
 * @param {number} low
 * @param {number} high
 * @returns {number}
 */
function toNumber(low, high) {
  return (high >>> 0) * TWO_PWR_32_DBL + (low >>> 0);
}

/**
 * 解析yfloat类型数字，返回数值和精度的数组
 * @param {number|Long} value
 * @returns {Array}
 */
function unmakeValue(value) {
  var high = void 0;
  var low = void 0;

  // 数字类型
  if (typeof value === 'number' && value >= 0) {
    high = getHighBits(value);
    low = getLowBits(value);
  } else if (value && typeof value.getHighBits === 'function' && typeof value.getLowBits === 'function') {

    // Long型
    high = value.getHighBits();
    low = value.getLowBits();
  } else {

    // 其它类型不支持
    console.warn('unmakeValue: invalid value');
    return [NaN, 0];
  }

  var b = low >> 16 & 0xFF;
  var l = b & 0x0F;
  var h = b >> 4 & 0x0F;
  var bx = toNumber((high << 24) + (low >>> 24 << 16) + (low & 0xFFFF), high >> 8);
  var dq = [2, 1, null, 3, 4, 5, 6, 7, 8, 9, 0][l];
  var temp = dq !== null ? bx / (Math.pow(10, dq) || 1) : NaN;

  if (h !== 0) {
    temp = -temp;
  }
  return [temp, dq];
}

/**
 * 解析yfloat类型数字，返回数字类型
 * @param {number|Long} value
 * @returns {number}
 */
function unmakeValueToNumber(value) {
  return unmakeValue(value)[0];
}

/**
 * 解析yfloat类型数字，返回根据精度格式化后的字符串
 * @param {number|Long} value
 * @returns {string}
 */
function unmakeValueToString(value) {
  var result = unmakeValue(value);
  var resultValue = result[0];
  var dq = result[1];
  return dq !== null ? resultValue.toFixed(dq) : resultValue.toString();
}

exports.default = { unmakeValue: unmakeValue, unmakeValueToNumber: unmakeValueToNumber, unmakeValueToString: unmakeValueToString };

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = Class;

var Message = __webpack_require__(9),
    util    = __webpack_require__(0);

var Type; // cyclic

/**
 * Constructs a new message prototype for the specified reflected type and sets up its constructor.
 * @classdesc Runtime class providing the tools to create your own custom classes.
 * @constructor
 * @param {Type} type Reflected message type
 * @param {*} [ctor] Custom constructor to set up, defaults to create a generic one if omitted
 * @returns {Message} Message prototype
 */
function Class(type, ctor) {
    if (!Type)
        Type = __webpack_require__(11);

    if (!(type instanceof Type))
        throw TypeError("type must be a Type");

    if (ctor) {
        if (typeof ctor !== "function")
            throw TypeError("ctor must be a function");
    } else
        ctor = Class.generate(type).eof(type.name); // named constructor function (codegen is required anyway)

    // Let's pretend...
    ctor.constructor = Class;

    // new Class() -> Message.prototype
    (ctor.prototype = new Message()).constructor = ctor;

    // Static methods on Message are instance methods on Class and vice versa
    util.merge(ctor, Message, true);

    // Classes and messages reference their reflected type
    ctor.$type = type;
    ctor.prototype.$type = type;

    // Messages have non-enumerable default values on their prototype
    var i = 0;
    for (; i < /* initializes */ type.fieldsArray.length; ++i) {
        // objects on the prototype must be immmutable. users must assign a new object instance and
        // cannot use Array#push on empty arrays on the prototype for example, as this would modify
        // the value on the prototype for ALL messages of this type. Hence, these objects are frozen.
        ctor.prototype[type._fieldsArray[i].name] = Array.isArray(type._fieldsArray[i].resolve().defaultValue)
            ? util.emptyArray
            : util.isObject(type._fieldsArray[i].defaultValue) && !type._fieldsArray[i].long
              ? util.emptyObject
              : type._fieldsArray[i].defaultValue; // if a long, it is frozen when initialized
    }

    // Messages have non-enumerable getters and setters for each virtual oneof field
    var ctorProperties = {};
    for (i = 0; i < /* initializes */ type.oneofsArray.length; ++i)
        ctorProperties[type._oneofsArray[i].resolve().name] = {
            get: util.oneOfGetter(type._oneofsArray[i].oneof),
            set: util.oneOfSetter(type._oneofsArray[i].oneof)
        };
    if (i)
        Object.defineProperties(ctor.prototype, ctorProperties);

    // Register
    type.ctor = ctor;

    return ctor.prototype;
}

/**
 * Generates a constructor function for the specified type.
 * @param {Type} type Type to use
 * @returns {Codegen} Codegen instance
 */
Class.generate = function generate(type) { // eslint-disable-line no-unused-vars
    /* eslint-disable no-unexpected-multiline */
    var gen = util.codegen("p");
    // explicitly initialize mutable object/array fields so that these aren't just inherited from the prototype
    for (var i = 0, field; i < type.fieldsArray.length; ++i)
        if ((field = type._fieldsArray[i]).map) gen
            ("this%s={}", util.safeProp(field.name));
        else if (field.repeated) gen
            ("this%s=[]", util.safeProp(field.name));
    return gen
    ("if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null)") // omit undefined or null
        ("this[ks[i]]=p[ks[i]]");
    /* eslint-enable no-unexpected-multiline */
};

/**
 * Constructs a new message prototype for the specified reflected type and sets up its constructor.
 * @function
 * @param {Type} type Reflected message type
 * @param {*} [ctor] Custom constructor to set up, defaults to create a generic one if omitted
 * @returns {Message} Message prototype
 * @deprecated since 6.7.0 it's possible to just assign a new constructor to {@link Type#ctor}
 */
Class.create = Class;

// Static methods on Message are instance methods on Class and vice versa
Class.prototype = Message;

/**
 * Creates a new message of this type from a plain object. Also converts values to their respective internal types.
 * @name Class#fromObject
 * @function
 * @param {Object.<string,*>} object Plain object
 * @returns {Message} Message instance
 */

/**
 * Creates a new message of this type from a plain object. Also converts values to their respective internal types.
 * This is an alias of {@link Class#fromObject}.
 * @name Class#from
 * @function
 * @param {Object.<string,*>} object Plain object
 * @returns {Message} Message instance
 */

/**
 * Creates a plain object from a message of this type. Also converts values to other types if specified.
 * @name Class#toObject
 * @function
 * @param {Message} message Message instance
 * @param {ConversionOptions} [options] Conversion options
 * @returns {Object.<string,*>} Plain object
 */

/**
 * Encodes a message of this type.
 * @name Class#encode
 * @function
 * @param {Message|Object.<string,*>} message Message to encode
 * @param {Writer} [writer] Writer to use
 * @returns {Writer} Writer
 */

/**
 * Encodes a message of this type preceeded by its length as a varint.
 * @name Class#encodeDelimited
 * @function
 * @param {Message|Object.<string,*>} message Message to encode
 * @param {Writer} [writer] Writer to use
 * @returns {Writer} Writer
 */

/**
 * Decodes a message of this type.
 * @name Class#decode
 * @function
 * @param {Reader|Uint8Array} reader Reader or buffer to decode
 * @returns {Message} Decoded message
 */

/**
 * Decodes a message of this type preceeded by its length as a varint.
 * @name Class#decodeDelimited
 * @function
 * @param {Reader|Uint8Array} reader Reader or buffer to decode
 * @returns {Message} Decoded message
 */

/**
 * Verifies a message of this type.
 * @name Class#verify
 * @function
 * @param {Message|Object.<string,*>} message Message or plain object to verify
 * @returns {?string} `null` if valid, otherwise the reason why it is not
 */


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = decoder;

var Enum    = __webpack_require__(1),
    types   = __webpack_require__(5),
    util    = __webpack_require__(0);

function missing(field) {
    return "missing required '" + field.name + "'";
}

/**
 * Generates a decoder specific to the specified message type.
 * @param {Type} mtype Message type
 * @returns {Codegen} Codegen instance
 */
function decoder(mtype) {
    /* eslint-disable no-unexpected-multiline */
    var gen = util.codegen("r", "l")
    ("if(!(r instanceof Reader))")
        ("r=Reader.create(r)")
    ("var c=l===undefined?r.len:r.pos+l,m=new this.ctor" + (mtype.fieldsArray.filter(function(field) { return field.map; }).length ? ",k" : ""))
    ("while(r.pos<c){")
        ("var t=r.uint32()");
    if (mtype.group) gen
        ("if((t&7)===4)")
            ("break");
    gen
        ("switch(t>>>3){");

    var i = 0;
    for (; i < /* initializes */ mtype.fieldsArray.length; ++i) {
        var field = mtype._fieldsArray[i].resolve(),
            type  = field.resolvedType instanceof Enum ? "uint32" : field.type,
            ref   = "m" + util.safeProp(field.name); gen
            ("case %d:", field.id);

        // Map fields
        if (field.map) { gen
                ("r.skip().pos++") // assumes id 1 + key wireType
                ("if(%s===util.emptyObject)", ref)
                    ("%s={}", ref)
                ("k=r.%s()", field.keyType)
                ("r.pos++"); // assumes id 2 + value wireType
            if (types.long[field.keyType] !== undefined) {
                if (types.basic[type] === undefined) gen
                ("%s[typeof k===\"object\"?util.longToHash(k):k]=types[%d].decode(r,r.uint32())", ref, i); // can't be groups
                else gen
                ("%s[typeof k===\"object\"?util.longToHash(k):k]=r.%s()", ref, type);
            } else {
                if (types.basic[type] === undefined) gen
                ("%s[k]=types[%d].decode(r,r.uint32())", ref, i); // can't be groups
                else gen
                ("%s[k]=r.%s()", ref, type);
            }

        // Repeated fields
        } else if (field.repeated) { gen

                ("if(!(%s&&%s.length))", ref, ref)
                    ("%s=[]", ref);

            // Packable (always check for forward and backward compatiblity)
            if (types.packed[type] !== undefined) gen
                ("if((t&7)===2){")
                    ("var c2=r.uint32()+r.pos")
                    ("while(r.pos<c2)")
                        ("%s.push(r.%s())", ref, type)
                ("}else");

            // Non-packed
            if (types.basic[type] === undefined) gen(field.resolvedType.group
                    ? "%s.push(types[%d].decode(r))"
                    : "%s.push(types[%d].decode(r,r.uint32()))", ref, i);
            else gen
                    ("%s.push(r.%s())", ref, type);

        // Non-repeated
        } else if (types.basic[type] === undefined) gen(field.resolvedType.group
                ? "%s=types[%d].decode(r)"
                : "%s=types[%d].decode(r,r.uint32())", ref, i);
        else gen
                ("%s=r.%s()", ref, type);
        gen
                ("break");
    // Unknown fields
    } gen
            ("default:")
                ("r.skipType(t&7)")
                ("break")

        ("}")
    ("}");

    // Field presence
    for (i = 0; i < mtype._fieldsArray.length; ++i) {
        var rfield = mtype._fieldsArray[i];
        if (rfield.required) gen
    ("if(!m.hasOwnProperty(%j))", rfield.name)
        ("throw util.ProtocolError(%j,{instance:m})", missing(rfield));
    }

    return gen
    ("return m");
    /* eslint-enable no-unexpected-multiline */
}


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = encoder;

var Enum     = __webpack_require__(1),
    types    = __webpack_require__(5),
    util     = __webpack_require__(0);

/**
 * Generates a partial message type encoder.
 * @param {Codegen} gen Codegen instance
 * @param {Field} field Reflected field
 * @param {number} fieldIndex Field index
 * @param {string} ref Variable reference
 * @returns {Codegen} Codegen instance
 * @ignore
 */
function genTypePartial(gen, field, fieldIndex, ref) {
    return field.resolvedType.group
        ? gen("types[%d].encode(%s,w.uint32(%d)).uint32(%d)", fieldIndex, ref, (field.id << 3 | 3) >>> 0, (field.id << 3 | 4) >>> 0)
        : gen("types[%d].encode(%s,w.uint32(%d).fork()).ldelim()", fieldIndex, ref, (field.id << 3 | 2) >>> 0);
}

/**
 * Generates an encoder specific to the specified message type.
 * @param {Type} mtype Message type
 * @returns {Codegen} Codegen instance
 */
function encoder(mtype) {
    /* eslint-disable no-unexpected-multiline, block-scoped-var, no-redeclare */
    var gen = util.codegen("m", "w")
    ("if(!w)")
        ("w=Writer.create()");

    var i, ref;

    // "when a message is serialized its known fields should be written sequentially by field number"
    var fields = /* initializes */ mtype.fieldsArray.slice().sort(util.compareFieldsById);

    for (var i = 0; i < fields.length; ++i) {
        var field    = fields[i].resolve(),
            index    = mtype._fieldsArray.indexOf(field),
            type     = field.resolvedType instanceof Enum ? "uint32" : field.type,
            wireType = types.basic[type];
            ref      = "m" + util.safeProp(field.name);

        // Map fields
        if (field.map) {
            gen
    ("if(%s!=null&&m.hasOwnProperty(%j)){", ref, field.name) // !== undefined && !== null
        ("for(var ks=Object.keys(%s),i=0;i<ks.length;++i){", ref)
            ("w.uint32(%d).fork().uint32(%d).%s(ks[i])", (field.id << 3 | 2) >>> 0, 8 | types.mapKey[field.keyType], field.keyType);
            if (wireType === undefined) gen
            ("types[%d].encode(%s[ks[i]],w.uint32(18).fork()).ldelim().ldelim()", index, ref); // can't be groups
            else gen
            (".uint32(%d).%s(%s[ks[i]]).ldelim()", 16 | wireType, type, ref);
            gen
        ("}")
    ("}");

            // Repeated fields
        } else if (field.repeated) { gen
    ("if(%s!=null&&%s.length){", ref, ref); // !== undefined && !== null

            // Packed repeated
            if (field.packed && types.packed[type] !== undefined) { gen

        ("w.uint32(%d).fork()", (field.id << 3 | 2) >>> 0)
        ("for(var i=0;i<%s.length;++i)", ref)
            ("w.%s(%s[i])", type, ref)
        ("w.ldelim()");

            // Non-packed
            } else { gen

        ("for(var i=0;i<%s.length;++i)", ref);
                if (wireType === undefined)
            genTypePartial(gen, field, index, ref + "[i]");
                else gen
            ("w.uint32(%d).%s(%s[i])", (field.id << 3 | wireType) >>> 0, type, ref);

            } gen
    ("}");

        // Non-repeated
        } else {
            if (field.optional) gen
    ("if(%s!=null&&m.hasOwnProperty(%j))", ref, field.name); // !== undefined && !== null

            if (wireType === undefined)
        genTypePartial(gen, field, index, ref);
            else gen
        ("w.uint32(%d).%s(%s)", (field.id << 3 | wireType) >>> 0, type, ref);

        }
    }

    return gen
    ("return w");
    /* eslint-enable no-unexpected-multiline, block-scoped-var, no-redeclare */
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = MapField;

// extends Field
var Field = __webpack_require__(3);
((MapField.prototype = Object.create(Field.prototype)).constructor = MapField).className = "MapField";

var types   = __webpack_require__(5),
    util    = __webpack_require__(0);

/**
 * Constructs a new map field instance.
 * @classdesc Reflected map field.
 * @extends Field
 * @constructor
 * @param {string} name Unique name within its namespace
 * @param {number} id Unique id within its namespace
 * @param {string} keyType Key type
 * @param {string} type Value type
 * @param {Object.<string,*>} [options] Declared options
 */
function MapField(name, id, keyType, type, options) {
    Field.call(this, name, id, type, options);

    /* istanbul ignore if */
    if (!util.isString(keyType))
        throw TypeError("keyType must be a string");

    /**
     * Key type.
     * @type {string}
     */
    this.keyType = keyType; // toJSON, marker

    /**
     * Resolved key type if not a basic type.
     * @type {?ReflectionObject}
     */
    this.resolvedKeyType = null;

    // Overrides Field#map
    this.map = true;
}

/**
 * Map field descriptor.
 * @typedef MapFieldDescriptor
 * @type {Object}
 * @property {string} keyType Key type
 * @property {string} type Value type
 * @property {number} id Field id
 * @property {Object.<string,*>} [options] Field options
 */

/**
 * Extension map field descriptor.
 * @typedef ExtensionMapFieldDescriptor
 * @type {Object}
 * @property {string} keyType Key type
 * @property {string} type Value type
 * @property {number} id Field id
 * @property {string} extend Extended type
 * @property {Object.<string,*>} [options] Field options
 */

/**
 * Constructs a map field from a map field descriptor.
 * @param {string} name Field name
 * @param {MapFieldDescriptor} json Map field descriptor
 * @returns {MapField} Created map field
 * @throws {TypeError} If arguments are invalid
 */
MapField.fromJSON = function fromJSON(name, json) {
    return new MapField(name, json.id, json.keyType, json.type, json.options);
};

/**
 * Converts this map field to a map field descriptor.
 * @returns {MapFieldDescriptor} Map field descriptor
 */
MapField.prototype.toJSON = function toJSON() {
    return {
        keyType : this.keyType,
        type    : this.type,
        id      : this.id,
        extend  : this.extend,
        options : this.options
    };
};

/**
 * @override
 */
MapField.prototype.resolve = function resolve() {
    if (this.resolved)
        return this;

    // Besides a value type, map fields have a key type that may be "any scalar type except for floating point types and bytes"
    if (types.mapKey[this.keyType] === undefined)
        throw Error("invalid key type: " + this.keyType);

    return Field.prototype.resolve.call(this);
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = Method;

// extends ReflectionObject
var ReflectionObject = __webpack_require__(4);
((Method.prototype = Object.create(ReflectionObject.prototype)).constructor = Method).className = "Method";

var util = __webpack_require__(0);

/**
 * Constructs a new service method instance.
 * @classdesc Reflected service method.
 * @extends ReflectionObject
 * @constructor
 * @param {string} name Method name
 * @param {string|undefined} type Method type, usually `"rpc"`
 * @param {string} requestType Request message type
 * @param {string} responseType Response message type
 * @param {boolean|Object.<string,*>} [requestStream] Whether the request is streamed
 * @param {boolean|Object.<string,*>} [responseStream] Whether the response is streamed
 * @param {Object.<string,*>} [options] Declared options
 */
function Method(name, type, requestType, responseType, requestStream, responseStream, options) {

    /* istanbul ignore next */
    if (util.isObject(requestStream)) {
        options = requestStream;
        requestStream = responseStream = undefined;
    } else if (util.isObject(responseStream)) {
        options = responseStream;
        responseStream = undefined;
    }

    /* istanbul ignore if */
    if (!(type === undefined || util.isString(type)))
        throw TypeError("type must be a string");

    /* istanbul ignore if */
    if (!util.isString(requestType))
        throw TypeError("requestType must be a string");

    /* istanbul ignore if */
    if (!util.isString(responseType))
        throw TypeError("responseType must be a string");

    ReflectionObject.call(this, name, options);

    /**
     * Method type.
     * @type {string}
     */
    this.type = type || "rpc"; // toJSON

    /**
     * Request type.
     * @type {string}
     */
    this.requestType = requestType; // toJSON, marker

    /**
     * Whether requests are streamed or not.
     * @type {boolean|undefined}
     */
    this.requestStream = requestStream ? true : undefined; // toJSON

    /**
     * Response type.
     * @type {string}
     */
    this.responseType = responseType; // toJSON

    /**
     * Whether responses are streamed or not.
     * @type {boolean|undefined}
     */
    this.responseStream = responseStream ? true : undefined; // toJSON

    /**
     * Resolved request type.
     * @type {?Type}
     */
    this.resolvedRequestType = null;

    /**
     * Resolved response type.
     * @type {?Type}
     */
    this.resolvedResponseType = null;
}

/**
 * @typedef MethodDescriptor
 * @type {Object}
 * @property {string} [type="rpc"] Method type
 * @property {string} requestType Request type
 * @property {string} responseType Response type
 * @property {boolean} [requestStream=false] Whether requests are streamed
 * @property {boolean} [responseStream=false] Whether responses are streamed
 * @property {Object.<string,*>} [options] Method options
 */

/**
 * Constructs a method from a method descriptor.
 * @param {string} name Method name
 * @param {MethodDescriptor} json Method descriptor
 * @returns {Method} Created method
 * @throws {TypeError} If arguments are invalid
 */
Method.fromJSON = function fromJSON(name, json) {
    return new Method(name, json.type, json.requestType, json.responseType, json.requestStream, json.responseStream, json.options);
};

/**
 * Converts this method to a method descriptor.
 * @returns {MethodDescriptor} Method descriptor
 */
Method.prototype.toJSON = function toJSON() {
    return {
        type           : this.type !== "rpc" && /* istanbul ignore next */ this.type || undefined,
        requestType    : this.requestType,
        requestStream  : this.requestStream,
        responseType   : this.responseType,
        responseStream : this.responseStream,
        options        : this.options
    };
};

/**
 * @override
 */
Method.prototype.resolve = function resolve() {

    /* istanbul ignore if */
    if (this.resolved)
        return this;

    this.resolvedRequestType = this.parent.lookupType(this.requestType);
    this.resolvedResponseType = this.parent.lookupType(this.responseType);

    return ReflectionObject.prototype.resolve.call(this);
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = OneOf;

// extends ReflectionObject
var ReflectionObject = __webpack_require__(4);
((OneOf.prototype = Object.create(ReflectionObject.prototype)).constructor = OneOf).className = "OneOf";

var Field = __webpack_require__(3);

/**
 * Constructs a new oneof instance.
 * @classdesc Reflected oneof.
 * @extends ReflectionObject
 * @constructor
 * @param {string} name Oneof name
 * @param {string[]|Object.<string,*>} [fieldNames] Field names
 * @param {Object.<string,*>} [options] Declared options
 */
function OneOf(name, fieldNames, options) {
    if (!Array.isArray(fieldNames)) {
        options = fieldNames;
        fieldNames = undefined;
    }
    ReflectionObject.call(this, name, options);

    /* istanbul ignore if */
    if (!(fieldNames === undefined || Array.isArray(fieldNames)))
        throw TypeError("fieldNames must be an Array");

    /**
     * Field names that belong to this oneof.
     * @type {string[]}
     */
    this.oneof = fieldNames || []; // toJSON, marker

    /**
     * Fields that belong to this oneof as an array for iteration.
     * @type {Field[]}
     * @readonly
     */
    this.fieldsArray = []; // declared readonly for conformance, possibly not yet added to parent
}

/**
 * Oneof descriptor.
 * @typedef OneOfDescriptor
 * @type {Object}
 * @property {Array.<string>} oneof Oneof field names
 * @property {Object.<string,*>} [options] Oneof options
 */

/**
 * Constructs a oneof from a oneof descriptor.
 * @param {string} name Oneof name
 * @param {OneOfDescriptor} json Oneof descriptor
 * @returns {OneOf} Created oneof
 * @throws {TypeError} If arguments are invalid
 */
OneOf.fromJSON = function fromJSON(name, json) {
    return new OneOf(name, json.oneof, json.options);
};

/**
 * Converts this oneof to a oneof descriptor.
 * @returns {OneOfDescriptor} Oneof descriptor
 */
OneOf.prototype.toJSON = function toJSON() {
    return {
        oneof   : this.oneof,
        options : this.options
    };
};

/**
 * Adds the fields of the specified oneof to the parent if not already done so.
 * @param {OneOf} oneof The oneof
 * @returns {undefined}
 * @inner
 * @ignore
 */
function addFieldsToParent(oneof) {
    if (oneof.parent)
        for (var i = 0; i < oneof.fieldsArray.length; ++i)
            if (!oneof.fieldsArray[i].parent)
                oneof.parent.add(oneof.fieldsArray[i]);
}

/**
 * Adds a field to this oneof and removes it from its current parent, if any.
 * @param {Field} field Field to add
 * @returns {OneOf} `this`
 */
OneOf.prototype.add = function add(field) {

    /* istanbul ignore if */
    if (!(field instanceof Field))
        throw TypeError("field must be a Field");

    if (field.parent && field.parent !== this.parent)
        field.parent.remove(field);
    this.oneof.push(field.name);
    this.fieldsArray.push(field);
    field.partOf = this; // field.parent remains null
    addFieldsToParent(this);
    return this;
};

/**
 * Removes a field from this oneof and puts it back to the oneof's parent.
 * @param {Field} field Field to remove
 * @returns {OneOf} `this`
 */
OneOf.prototype.remove = function remove(field) {

    /* istanbul ignore if */
    if (!(field instanceof Field))
        throw TypeError("field must be a Field");

    var index = this.fieldsArray.indexOf(field);

    /* istanbul ignore if */
    if (index < 0)
        throw Error(field + " is not a member of " + this);

    this.fieldsArray.splice(index, 1);
    index = this.oneof.indexOf(field.name);

    /* istanbul ignore else */
    if (index > -1) // theoretical
        this.oneof.splice(index, 1);

    field.partOf = null;
    return this;
};

/**
 * @override
 */
OneOf.prototype.onAdd = function onAdd(parent) {
    ReflectionObject.prototype.onAdd.call(this, parent);
    var self = this;
    // Collect present fields
    for (var i = 0; i < this.oneof.length; ++i) {
        var field = parent.get(this.oneof[i]);
        if (field && !field.partOf) {
            field.partOf = self;
            self.fieldsArray.push(field);
        }
    }
    // Add not yet present fields
    addFieldsToParent(this);
};

/**
 * @override
 */
OneOf.prototype.onRemove = function onRemove(parent) {
    for (var i = 0, field; i < this.fieldsArray.length; ++i)
        if ((field = this.fieldsArray[i]).parent)
            field.parent.remove(field);
    ReflectionObject.prototype.onRemove.call(this, parent);
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Streaming RPC helpers.
 * @namespace
 */
var rpc = exports;

/**
 * RPC implementation passed to {@link Service#create} performing a service request on network level, i.e. by utilizing http requests or websockets.
 * @typedef RPCImpl
 * @type {function}
 * @param {Method|rpc.ServiceMethod} method Reflected or static method being called
 * @param {Uint8Array} requestData Request data
 * @param {RPCImplCallback} callback Callback function
 * @returns {undefined}
 * @example
 * function rpcImpl(method, requestData, callback) {
 *     if (protobuf.util.lcFirst(method.name) !== "myMethod") // compatible with static code
 *         throw Error("no such method");
 *     asynchronouslyObtainAResponse(requestData, function(err, responseData) {
 *         callback(err, responseData);
 *     });
 * }
 */

/**
 * Node-style callback as used by {@link RPCImpl}.
 * @typedef RPCImplCallback
 * @type {function}
 * @param {?Error} error Error, if any, otherwise `null`
 * @param {?Uint8Array} [response] Response data or `null` to signal end of stream, if there hasn't been an error
 * @returns {undefined}
 */

rpc.Service = __webpack_require__(44);


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = Service;

// extends Namespace
var Namespace = __webpack_require__(6);
((Service.prototype = Object.create(Namespace.prototype)).constructor = Service).className = "Service";

var Method = __webpack_require__(21),
    util   = __webpack_require__(0),
    rpc    = __webpack_require__(23);

/**
 * Constructs a new service instance.
 * @classdesc Reflected service.
 * @extends NamespaceBase
 * @constructor
 * @param {string} name Service name
 * @param {Object.<string,*>} [options] Service options
 * @throws {TypeError} If arguments are invalid
 */
function Service(name, options) {
    Namespace.call(this, name, options);

    /**
     * Service methods.
     * @type {Object.<string,Method>}
     */
    this.methods = {}; // toJSON, marker

    /**
     * Cached methods as an array.
     * @type {?Method[]}
     * @private
     */
    this._methodsArray = null;
}

/**
 * Service descriptor.
 * @typedef ServiceDescriptor
 * @type {Object}
 * @property {Object.<string,*>} [options] Service options
 * @property {Object.<string,MethodDescriptor>} methods Method descriptors
 * @property {Object.<string,AnyNestedDescriptor>} [nested] Nested object descriptors
 */

/**
 * Constructs a service from a service descriptor.
 * @param {string} name Service name
 * @param {ServiceDescriptor} json Service descriptor
 * @returns {Service} Created service
 * @throws {TypeError} If arguments are invalid
 */
Service.fromJSON = function fromJSON(name, json) {
    var service = new Service(name, json.options);
    /* istanbul ignore else */
    if (json.methods)
        for (var names = Object.keys(json.methods), i = 0; i < names.length; ++i)
            service.add(Method.fromJSON(names[i], json.methods[names[i]]));
    if (json.nested)
        service.addJSON(json.nested);
    return service;
};

/**
 * Converts this service to a service descriptor.
 * @returns {ServiceDescriptor} Service descriptor
 */
Service.prototype.toJSON = function toJSON() {
    var inherited = Namespace.prototype.toJSON.call(this);
    return {
        options : inherited && inherited.options || undefined,
        methods : Namespace.arrayToJSON(this.methodsArray) || /* istanbul ignore next */ {},
        nested  : inherited && inherited.nested || undefined
    };
};

/**
 * Methods of this service as an array for iteration.
 * @name Service#methodsArray
 * @type {Method[]}
 * @readonly
 */
Object.defineProperty(Service.prototype, "methodsArray", {
    get: function() {
        return this._methodsArray || (this._methodsArray = util.toArray(this.methods));
    }
});

function clearCache(service) {
    service._methodsArray = null;
    return service;
}

/**
 * @override
 */
Service.prototype.get = function get(name) {
    return this.methods[name]
        || Namespace.prototype.get.call(this, name);
};

/**
 * @override
 */
Service.prototype.resolveAll = function resolveAll() {
    var methods = this.methodsArray;
    for (var i = 0; i < methods.length; ++i)
        methods[i].resolve();
    return Namespace.prototype.resolve.call(this);
};

/**
 * @override
 */
Service.prototype.add = function add(object) {

    /* istanbul ignore if */
    if (this.get(object.name))
        throw Error("duplicate name '" + object.name + "' in " + this);

    if (object instanceof Method) {
        this.methods[object.name] = object;
        object.parent = this;
        return clearCache(this);
    }
    return Namespace.prototype.add.call(this, object);
};

/**
 * @override
 */
Service.prototype.remove = function remove(object) {
    if (object instanceof Method) {

        /* istanbul ignore if */
        if (this.methods[object.name] !== object)
            throw Error(object + " is not a member of " + this);

        delete this.methods[object.name];
        object.parent = null;
        return clearCache(this);
    }
    return Namespace.prototype.remove.call(this, object);
};

/**
 * Creates a runtime service using the specified rpc implementation.
 * @param {RPCImpl} rpcImpl RPC implementation
 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
 * @returns {rpc.Service} RPC service. Useful where requests and/or responses are streamed.
 */
Service.prototype.create = function create(rpcImpl, requestDelimited, responseDelimited) {
    var rpcService = new rpc.Service(rpcImpl, requestDelimited, responseDelimited);
    for (var i = 0; i < /* initializes */ this.methodsArray.length; ++i) {
        rpcService[util.lcFirst(this._methodsArray[i].resolve().name)] = util.codegen("r","c")("return this.rpcCall(m,q,s,r,c)").eof(util.lcFirst(this._methodsArray[i].name), {
            m: this._methodsArray[i],
            q: this._methodsArray[i].resolvedRequestType.ctor,
            s: this._methodsArray[i].resolvedResponseType.ctor
        });
    }
    return rpcService;
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = verifier;

var Enum      = __webpack_require__(1),
    util      = __webpack_require__(0);

function invalid(field, expected) {
    return field.name + ": " + expected + (field.repeated && expected !== "array" ? "[]" : field.map && expected !== "object" ? "{k:"+field.keyType+"}" : "") + " expected";
}

/**
 * Generates a partial value verifier.
 * @param {Codegen} gen Codegen instance
 * @param {Field} field Reflected field
 * @param {number} fieldIndex Field index
 * @param {string} ref Variable reference
 * @returns {Codegen} Codegen instance
 * @ignore
 */
function genVerifyValue(gen, field, fieldIndex, ref) {
    /* eslint-disable no-unexpected-multiline */
    if (field.resolvedType) {
        if (field.resolvedType instanceof Enum) { gen
            ("switch(%s){", ref)
                ("default:")
                    ("return%j", invalid(field, "enum value"));
            for (var keys = Object.keys(field.resolvedType.values), j = 0; j < keys.length; ++j) gen
                ("case %d:", field.resolvedType.values[keys[j]]);
            gen
                    ("break")
            ("}");
        } else gen
            ("var e=types[%d].verify(%s);", fieldIndex, ref)
            ("if(e)")
                ("return%j+e", field.name + ".");
    } else {
        switch (field.type) {
            case "int32":
            case "uint32":
            case "sint32":
            case "fixed32":
            case "sfixed32": gen
                ("if(!util.isInteger(%s))", ref)
                    ("return%j", invalid(field, "integer"));
                break;
            case "int64":
            case "uint64":
            case "sint64":
            case "fixed64":
            case "sfixed64": gen
                ("if(!util.isInteger(%s)&&!(%s&&util.isInteger(%s.low)&&util.isInteger(%s.high)))", ref, ref, ref, ref)
                    ("return%j", invalid(field, "integer|Long"));
                break;
            case "float":
            case "double": gen
                ("if(typeof %s!==\"number\")", ref)
                    ("return%j", invalid(field, "number"));
                break;
            case "bool": gen
                ("if(typeof %s!==\"boolean\")", ref)
                    ("return%j", invalid(field, "boolean"));
                break;
            case "string": gen
                ("if(!util.isString(%s))", ref)
                    ("return%j", invalid(field, "string"));
                break;
            case "bytes": gen
                ("if(!(%s&&typeof %s.length===\"number\"||util.isString(%s)))", ref, ref, ref)
                    ("return%j", invalid(field, "buffer"));
                break;
        }
    }
    return gen;
    /* eslint-enable no-unexpected-multiline */
}

/**
 * Generates a partial key verifier.
 * @param {Codegen} gen Codegen instance
 * @param {Field} field Reflected field
 * @param {string} ref Variable reference
 * @returns {Codegen} Codegen instance
 * @ignore
 */
function genVerifyKey(gen, field, ref) {
    /* eslint-disable no-unexpected-multiline */
    switch (field.keyType) {
        case "int32":
        case "uint32":
        case "sint32":
        case "fixed32":
        case "sfixed32": gen
            ("if(!util.key32Re.test(%s))", ref)
                ("return%j", invalid(field, "integer key"));
            break;
        case "int64":
        case "uint64":
        case "sint64":
        case "fixed64":
        case "sfixed64": gen
            ("if(!util.key64Re.test(%s))", ref) // see comment above: x is ok, d is not
                ("return%j", invalid(field, "integer|Long key"));
            break;
        case "bool": gen
            ("if(!util.key2Re.test(%s))", ref)
                ("return%j", invalid(field, "boolean key"));
            break;
    }
    return gen;
    /* eslint-enable no-unexpected-multiline */
}

/**
 * Generates a verifier specific to the specified message type.
 * @param {Type} mtype Message type
 * @returns {Codegen} Codegen instance
 */
function verifier(mtype) {
    /* eslint-disable no-unexpected-multiline */

    var gen = util.codegen("m")
    ("if(typeof m!==\"object\"||m===null)")
        ("return%j", "object expected");
    var oneofs = mtype.oneofsArray,
        seenFirstField = {};
    if (oneofs.length) gen
    ("var p={}");

    for (var i = 0; i < /* initializes */ mtype.fieldsArray.length; ++i) {
        var field = mtype._fieldsArray[i].resolve(),
            ref   = "m" + util.safeProp(field.name);

        if (field.optional) gen
        ("if(%s!=null&&m.hasOwnProperty(%j)){", ref, field.name); // !== undefined && !== null

        // map fields
        if (field.map) { gen
            ("if(!util.isObject(%s))", ref)
                ("return%j", invalid(field, "object"))
            ("var k=Object.keys(%s)", ref)
            ("for(var i=0;i<k.length;++i){");
                genVerifyKey(gen, field, "k[i]");
                genVerifyValue(gen, field, i, ref + "[k[i]]")
            ("}");

        // repeated fields
        } else if (field.repeated) { gen
            ("if(!Array.isArray(%s))", ref)
                ("return%j", invalid(field, "array"))
            ("for(var i=0;i<%s.length;++i){", ref);
                genVerifyValue(gen, field, i, ref + "[i]")
            ("}");

        // required or present fields
        } else {
            if (field.partOf) {
                var oneofProp = util.safeProp(field.partOf.name);
                if (seenFirstField[field.partOf.name] === 1) gen
            ("if(p%s===1)", oneofProp)
                ("return%j", field.partOf.name + ": multiple values");
                seenFirstField[field.partOf.name] = 1;
                gen
            ("p%s=1", oneofProp);
            }
            genVerifyValue(gen, field, i, ref);
        }
        if (field.optional) gen
        ("}");
    }
    return gen
    ("return null");
    /* eslint-enable no-unexpected-multiline */
}

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = parseJSON;

var _util = __webpack_require__(8);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function convertToJsonArray(input) {
  if (!input || !input.head) return input;

  var head = input.head;
  var data = input.data;

  return data.map(function (row) {
    var rowObject = {};
    row.forEach(function (cell, columnIndex) {
      rowObject[head[columnIndex]] = convertToJsonArray(cell);
    });
    return rowObject;
  });
}

function parseJSON(input) {
  return Promise.resolve().then(function () {
    var json = input instanceof ArrayBuffer ? (0, _util.arrayBufferToString)(input) : input;
    var response = JSON.parse(json);
    if (response.Err !== 0) {
      return response;
    }

    var data = response.Data;
    if (data.JsonTbl) {
      var tbl = convertToJsonArray(data.JsonTbl);
      var key = Object.keys(tbl[0])[0];
      var value = tbl[0][key];
      data = _defineProperty({
        Id: data.Id
      }, key, value);
    }

    return {
      Qid: response.Qid,
      Err: response.Err,
      Counter: response.Counter,
      Data: data
    };
  });
}

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = parseProtoBuf;

var _converter = __webpack_require__(7);

var _converter2 = _interopRequireDefault(_converter);

var _protobufjsConverter = __webpack_require__(7);

var _protobufjsConverter2 = _interopRequireDefault(_protobufjsConverter);

var _dzhyunProto = __webpack_require__(15);

var _dzhyunProto2 = _interopRequireDefault(_dzhyunProto);

var _pbTable = __webpack_require__(38);

var _pbTable2 = _interopRequireDefault(_pbTable);

var _yfloat = __webpack_require__(16);

var _yfloat2 = _interopRequireDefault(_yfloat);

var _util = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// 替换原模块中的方法
Object.assign(_converter2.default, _protobufjsConverter2.default);

var UAResponse = _dzhyunProto2.default.lookupType('dzhyun.UAResponse');
var MSG = _dzhyunProto2.default.lookupType('dzhyun.MSG');

function parseProtoBuf(input, parseYfloat) {
  return Promise.resolve().then(function () {
    var buffer = typeof input === 'string' ? (0, _util.stringToArrayBuffer)(input) : input;
    var array = new Uint8Array(buffer);
    var responseMessage = UAResponse.decode(array);

    // 错误消息直接返回，正确的数据消息再解析其中的Data
    if (responseMessage.Err !== 0) {
      var result = responseMessage.toObject();
      if (result.Data) result.Data = JSON.parse(String.fromCharCode.apply(String, _toConsumableArray(result.Data)));
      return result;
    }
    var dataMessage = MSG.decode(responseMessage.Data);
    var data = void 0;

    // 如果数据是pbtable格式，做pbtable转array，否则将其直接转object（转yfloat解析）
    if (dataMessage.Tbl) {
      var tbl = _pbTable2.default.convertToJsonArray(dataMessage.Tbl);
      var key = Object.keys(tbl[0])[0];
      var value = tbl[0][key];
      data = _defineProperty({
        Id: dataMessage.Id
      }, key, value);
    } else {
      data = dataMessage.toObject(parseYfloat ? {
        longs: _yfloat2.default.unmakeValueToNumber
      } : undefined);
    }
    return {
      Qid: responseMessage.Qid,
      Err: responseMessage.Err,
      Counter: responseMessage.Counter,
      Data: data
    };
  });
}

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = uncompress;

var _snappy_decompressor = __webpack_require__(47);

function uncompress(compressed) {
  if (!(compressed instanceof ArrayBuffer)) {
    throw new TypeError('Argument compressed must be type of ArrayBuffer');
  }

  var decompressor = new _snappy_decompressor.SnappyDecompressor(new Uint8Array(compressed));
  var length = decompressor.readUncompressedLength();
  if (length === -1) {
    throw new Error('Invalid Snappy bitstream');
  }
  var uncompressed = new ArrayBuffer(length);
  var uncompressedView = new Uint8Array(uncompressed);
  if (!decompressor.uncompressToBuffer(uncompressedView)) {
    throw new Error('Invalid Snappy bitstream');
  }
  return uncompressed;
}

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A minimal base64 implementation for number arrays.
 * @memberof util
 * @namespace
 */
var base64 = exports;

/**
 * Calculates the byte length of a base64 encoded string.
 * @param {string} string Base64 encoded string
 * @returns {number} Byte length
 */
base64.length = function length(string) {
    var p = string.length;
    if (!p)
        return 0;
    var n = 0;
    while (--p % 4 > 1 && string.charAt(p) === "=")
        ++n;
    return Math.ceil(string.length * 3) / 4 - n;
};

// Base64 encoding table
var b64 = new Array(64);

// Base64 decoding table
var s64 = new Array(123);

// 65..90, 97..122, 48..57, 43, 47
for (var i = 0; i < 64;)
    s64[b64[i] = i < 26 ? i + 65 : i < 52 ? i + 71 : i < 62 ? i - 4 : i - 59 | 43] = i++;

/**
 * Encodes a buffer to a base64 encoded string.
 * @param {Uint8Array} buffer Source buffer
 * @param {number} start Source start
 * @param {number} end Source end
 * @returns {string} Base64 encoded string
 */
base64.encode = function encode(buffer, start, end) {
    var string = []; // alt: new Array(Math.ceil((end - start) / 3) * 4);
    var i = 0, // output index
        j = 0, // goto index
        t;     // temporary
    while (start < end) {
        var b = buffer[start++];
        switch (j) {
            case 0:
                string[i++] = b64[b >> 2];
                t = (b & 3) << 4;
                j = 1;
                break;
            case 1:
                string[i++] = b64[t | b >> 4];
                t = (b & 15) << 2;
                j = 2;
                break;
            case 2:
                string[i++] = b64[t | b >> 6];
                string[i++] = b64[b & 63];
                j = 0;
                break;
        }
    }
    if (j) {
        string[i++] = b64[t];
        string[i  ] = 61;
        if (j === 1)
            string[i + 1] = 61;
    }
    return String.fromCharCode.apply(String, string);
};

var invalidEncoding = "invalid encoding";

/**
 * Decodes a base64 encoded string to a buffer.
 * @param {string} string Source string
 * @param {Uint8Array} buffer Destination buffer
 * @param {number} offset Destination offset
 * @returns {number} Number of bytes written
 * @throws {Error} If encoding is invalid
 */
base64.decode = function decode(string, buffer, offset) {
    var start = offset;
    var j = 0, // goto index
        t;     // temporary
    for (var i = 0; i < string.length;) {
        var c = string.charCodeAt(i++);
        if (c === 61 && j > 1)
            break;
        if ((c = s64[c]) === undefined)
            throw Error(invalidEncoding);
        switch (j) {
            case 0:
                t = c;
                j = 1;
                break;
            case 1:
                buffer[offset++] = t << 2 | (c & 48) >> 4;
                t = c;
                j = 2;
                break;
            case 2:
                buffer[offset++] = (t & 15) << 4 | (c & 60) >> 2;
                t = c;
                j = 3;
                break;
            case 3:
                buffer[offset++] = (t & 3) << 6 | c;
                j = 0;
                break;
        }
    }
    if (j === 1)
        throw Error(invalidEncoding);
    return offset - start;
};

/**
 * Tests if the specified string appears to be base64 encoded.
 * @param {string} string String to test
 * @returns {boolean} `true` if probably base64 encoded, otherwise false
 */
base64.test = function test(string) {
    return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(string);
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = codegen;

var blockOpenRe  = /[{[]$/,
    blockCloseRe = /^[}\]]/,
    casingRe     = /:$/,
    branchRe     = /^\s*(?:if|}?else if|while|for)\b|\b(?:else)\s*$/,
    breakRe      = /\b(?:break|continue)(?: \w+)?;?$|^\s*return\b/;

/**
 * A closure for generating functions programmatically.
 * @memberof util
 * @namespace
 * @function
 * @param {...string} params Function parameter names
 * @returns {Codegen} Codegen instance
 * @property {boolean} supported Whether code generation is supported by the environment.
 * @property {boolean} verbose=false When set to true, codegen will log generated code to console. Useful for debugging.
 * @property {function(string, ...*):string} sprintf Underlying sprintf implementation
 */
function codegen() {
    var params = [],
        src    = [],
        indent = 1,
        inCase = false;
    for (var i = 0; i < arguments.length;)
        params.push(arguments[i++]);

    /**
     * A codegen instance as returned by {@link codegen}, that also is a sprintf-like appender function.
     * @typedef Codegen
     * @type {function}
     * @param {string} format Format string
     * @param {...*} args Replacements
     * @returns {Codegen} Itself
     * @property {function(string=):string} str Stringifies the so far generated function source.
     * @property {function(string=, Object=):function} eof Ends generation and builds the function whilst applying a scope.
     */
    /**/
    function gen() {
        var args = [],
            i = 0;
        for (; i < arguments.length;)
            args.push(arguments[i++]);
        var line = sprintf.apply(null, args);
        var level = indent;
        if (src.length) {
            var prev = src[src.length - 1];

            // block open or one time branch
            if (blockOpenRe.test(prev))
                level = ++indent; // keep
            else if (branchRe.test(prev))
                ++level; // once

            // casing
            if (casingRe.test(prev) && !casingRe.test(line)) {
                level = ++indent;
                inCase = true;
            } else if (inCase && breakRe.test(prev)) {
                level = --indent;
                inCase = false;
            }

            // block close
            if (blockCloseRe.test(line))
                level = --indent;
        }
        for (i = 0; i < level; ++i)
            line = "\t" + line;
        src.push(line);
        return gen;
    }

    /**
     * Stringifies the so far generated function source.
     * @param {string} [name] Function name, defaults to generate an anonymous function
     * @returns {string} Function source using tabs for indentation
     * @inner
     */
    function str(name) {
        return "function" + (name ? " " + name.replace(/[^\w_$]/g, "_") : "") + "(" + params.join(",") + ") {\n" + src.join("\n") + "\n}";
    }

    gen.str = str;

    /**
     * Ends generation and builds the function whilst applying a scope.
     * @param {string} [name] Function name, defaults to generate an anonymous function
     * @param {Object.<string,*>} [scope] Function scope
     * @returns {function} The generated function, with scope applied if specified
     * @inner
     */
    function eof(name, scope) {
        if (typeof name === "object") {
            scope = name;
            name = undefined;
        }
        var source = gen.str(name);
        if (codegen.verbose)
            console.log("--- codegen ---\n" + source.replace(/^/mg, "> ").replace(/\t/g, "  ")); // eslint-disable-line no-console
        var keys = Object.keys(scope || (scope = {}));
        return Function.apply(null, keys.concat("return " + source)).apply(null, keys.map(function(key) { return scope[key]; })); // eslint-disable-line no-new-func
        //     ^ Creates a wrapper function with the scoped variable names as its parameters,
        //       calls it with the respective scoped variable values ^
        //       and returns our brand-new properly scoped function.
        //
        // This works because "Invoking the Function constructor as a function (without using the
        // new operator) has the same effect as invoking it as a constructor."
        // https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Function
    }

    gen.eof = eof;

    return gen;
}

function sprintf(format) {
    var args = [],
        i = 1;
    for (; i < arguments.length;)
        args.push(arguments[i++]);
    i = 0;
    format = format.replace(/%([dfjs])/g, function($0, $1) {
        switch ($1) {
            case "d":
                return Math.floor(args[i++]);
            case "f":
                return Number(args[i++]);
            case "j":
                return JSON.stringify(args[i++]);
            default:
                return args[i++];
        }
    });
    if (i !== args.length)
        throw Error("argument count mismatch");
    return format;
}

codegen.sprintf   = sprintf;
codegen.supported = false; try { codegen.supported = codegen("a","b")("return a-b").eof()(2,1) === 1; } catch (e) {} // eslint-disable-line no-empty
codegen.verbose   = false;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = EventEmitter;

/**
 * Constructs a new event emitter instance.
 * @classdesc A minimal event emitter.
 * @memberof util
 * @constructor
 */
function EventEmitter() {

    /**
     * Registered listeners.
     * @type {Object.<string,*>}
     * @private
     */
    this._listeners = {};
}

/**
 * Registers an event listener.
 * @param {string} evt Event name
 * @param {function} fn Listener
 * @param {*} [ctx] Listener context
 * @returns {util.EventEmitter} `this`
 */
EventEmitter.prototype.on = function on(evt, fn, ctx) {
    (this._listeners[evt] || (this._listeners[evt] = [])).push({
        fn  : fn,
        ctx : ctx || this
    });
    return this;
};

/**
 * Removes an event listener or any matching listeners if arguments are omitted.
 * @param {string} [evt] Event name. Removes all listeners if omitted.
 * @param {function} [fn] Listener to remove. Removes all listeners of `evt` if omitted.
 * @returns {util.EventEmitter} `this`
 */
EventEmitter.prototype.off = function off(evt, fn) {
    if (evt === undefined)
        this._listeners = {};
    else {
        if (fn === undefined)
            this._listeners[evt] = [];
        else {
            var listeners = this._listeners[evt];
            for (var i = 0; i < listeners.length;)
                if (listeners[i].fn === fn)
                    listeners.splice(i, 1);
                else
                    ++i;
        }
    }
    return this;
};

/**
 * Emits an event by calling its listeners with the specified arguments.
 * @param {string} evt Event name
 * @param {...*} args Arguments
 * @returns {util.EventEmitter} `this`
 */
EventEmitter.prototype.emit = function emit(evt) {
    var listeners = this._listeners[evt];
    if (listeners) {
        var args = [],
            i = 1;
        for (; i < arguments.length;)
            args.push(arguments[i++]);
        for (i = 0; i < listeners.length;)
            listeners[i].fn.apply(listeners[i++].ctx, args);
    }
    return this;
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = fetch;

var asPromise = __webpack_require__(13),
    inquire   = __webpack_require__(14);

var fs = inquire("fs");

/**
 * Node-style callback as used by {@link util.fetch}.
 * @typedef FetchCallback
 * @type {function}
 * @param {?Error} error Error, if any, otherwise `null`
 * @param {string} [contents] File contents, if there hasn't been an error
 * @returns {undefined}
 */

/**
 * Options as used by {@link util.fetch}.
 * @typedef FetchOptions
 * @type {Object}
 * @property {boolean} [binary=false] Whether expecting a binary response
 * @property {boolean} [xhr=false] If `true`, forces the use of XMLHttpRequest
 */

/**
 * Fetches the contents of a file.
 * @memberof util
 * @param {string} filename File path or url
 * @param {FetchOptions} options Fetch options
 * @param {FetchCallback} callback Callback function
 * @returns {undefined}
 */
function fetch(filename, options, callback) {
    if (typeof options === "function") {
        callback = options;
        options = {};
    } else if (!options)
        options = {};

    if (!callback)
        return asPromise(fetch, this, filename, options); // eslint-disable-line no-invalid-this

    // if a node-like filesystem is present, try it first but fall back to XHR if nothing is found.
    if (!options.xhr && fs && fs.readFile)
        return fs.readFile(filename, function fetchReadFileCallback(err, contents) {
            return err && typeof XMLHttpRequest !== "undefined"
                ? fetch.xhr(filename, options, callback)
                : err
                ? callback(err)
                : callback(null, options.binary ? contents : contents.toString("utf8"));
        });

    // use the XHR version otherwise.
    return fetch.xhr(filename, options, callback);
}

/**
 * Fetches the contents of a file.
 * @name util.fetch
 * @function
 * @param {string} path File path or url
 * @param {FetchCallback} callback Callback function
 * @returns {undefined}
 * @variation 2
 */

/**
 * Fetches the contents of a file.
 * @name util.fetch
 * @function
 * @param {string} path File path or url
 * @param {FetchOptions} [options] Fetch options
 * @returns {Promise<string|Uint8Array>} Promise
 * @variation 3
 */

/**/
fetch.xhr = function fetch_xhr(filename, options, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange /* works everywhere */ = function fetchOnReadyStateChange() {

        if (xhr.readyState !== 4)
            return undefined;

        // local cors security errors return status 0 / empty string, too. afaik this cannot be
        // reliably distinguished from an actually empty file for security reasons. feel free
        // to send a pull request if you are aware of a solution.
        if (xhr.status !== 0 && xhr.status !== 200)
            return callback(Error("status " + xhr.status));

        // if binary data is expected, make sure that some sort of array is returned, even if
        // ArrayBuffers are not supported. the binary string fallback, however, is unsafe.
        if (options.binary) {
            var buffer = xhr.response;
            if (!buffer) {
                buffer = [];
                for (var i = 0; i < xhr.responseText.length; ++i)
                    buffer.push(xhr.responseText.charCodeAt(i) & 255);
            }
            return callback(null, typeof Uint8Array !== "undefined" ? new Uint8Array(buffer) : buffer);
        }
        return callback(null, xhr.responseText);
    };

    if (options.binary) {
        // ref: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Sending_and_Receiving_Binary_Data#Receiving_binary_data_in_older_browsers
        if ("overrideMimeType" in xhr)
            xhr.overrideMimeType("text/plain; charset=x-user-defined");
        xhr.responseType = "arraybuffer";
    }

    xhr.open("GET", filename);
    xhr.send();
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = factory(factory);

/**
 * Reads / writes floats / doubles from / to buffers.
 * @name util.float
 * @namespace
 */

/**
 * Writes a 32 bit float to a buffer using little endian byte order.
 * @name util.float.writeFloatLE
 * @function
 * @param {number} val Value to write
 * @param {Uint8Array} buf Target buffer
 * @param {number} pos Target buffer offset
 * @returns {undefined}
 */

/**
 * Writes a 32 bit float to a buffer using big endian byte order.
 * @name util.float.writeFloatBE
 * @function
 * @param {number} val Value to write
 * @param {Uint8Array} buf Target buffer
 * @param {number} pos Target buffer offset
 * @returns {undefined}
 */

/**
 * Reads a 32 bit float from a buffer using little endian byte order.
 * @name util.float.readFloatLE
 * @function
 * @param {Uint8Array} buf Source buffer
 * @param {number} pos Source buffer offset
 * @returns {number} Value read
 */

/**
 * Reads a 32 bit float from a buffer using big endian byte order.
 * @name util.float.readFloatBE
 * @function
 * @param {Uint8Array} buf Source buffer
 * @param {number} pos Source buffer offset
 * @returns {number} Value read
 */

/**
 * Writes a 64 bit double to a buffer using little endian byte order.
 * @name util.float.writeDoubleLE
 * @function
 * @param {number} val Value to write
 * @param {Uint8Array} buf Target buffer
 * @param {number} pos Target buffer offset
 * @returns {undefined}
 */

/**
 * Writes a 64 bit double to a buffer using big endian byte order.
 * @name util.float.writeDoubleBE
 * @function
 * @param {number} val Value to write
 * @param {Uint8Array} buf Target buffer
 * @param {number} pos Target buffer offset
 * @returns {undefined}
 */

/**
 * Reads a 64 bit double from a buffer using little endian byte order.
 * @name util.float.readDoubleLE
 * @function
 * @param {Uint8Array} buf Source buffer
 * @param {number} pos Source buffer offset
 * @returns {number} Value read
 */

/**
 * Reads a 64 bit double from a buffer using big endian byte order.
 * @name util.float.readDoubleBE
 * @function
 * @param {Uint8Array} buf Source buffer
 * @param {number} pos Source buffer offset
 * @returns {number} Value read
 */

// Factory function for the purpose of node-based testing in modified global environments
function factory(exports) {

    // float: typed array
    if (typeof Float32Array !== "undefined") (function() {

        var f32 = new Float32Array([ -0 ]),
            f8b = new Uint8Array(f32.buffer),
            le  = f8b[3] === 128;

        function writeFloat_f32_cpy(val, buf, pos) {
            f32[0] = val;
            buf[pos    ] = f8b[0];
            buf[pos + 1] = f8b[1];
            buf[pos + 2] = f8b[2];
            buf[pos + 3] = f8b[3];
        }

        function writeFloat_f32_rev(val, buf, pos) {
            f32[0] = val;
            buf[pos    ] = f8b[3];
            buf[pos + 1] = f8b[2];
            buf[pos + 2] = f8b[1];
            buf[pos + 3] = f8b[0];
        }

        /* istanbul ignore next */
        exports.writeFloatLE = le ? writeFloat_f32_cpy : writeFloat_f32_rev;
        /* istanbul ignore next */
        exports.writeFloatBE = le ? writeFloat_f32_rev : writeFloat_f32_cpy;

        function readFloat_f32_cpy(buf, pos) {
            f8b[0] = buf[pos    ];
            f8b[1] = buf[pos + 1];
            f8b[2] = buf[pos + 2];
            f8b[3] = buf[pos + 3];
            return f32[0];
        }

        function readFloat_f32_rev(buf, pos) {
            f8b[3] = buf[pos    ];
            f8b[2] = buf[pos + 1];
            f8b[1] = buf[pos + 2];
            f8b[0] = buf[pos + 3];
            return f32[0];
        }

        /* istanbul ignore next */
        exports.readFloatLE = le ? readFloat_f32_cpy : readFloat_f32_rev;
        /* istanbul ignore next */
        exports.readFloatBE = le ? readFloat_f32_rev : readFloat_f32_cpy;

    // float: ieee754
    })(); else (function() {

        function writeFloat_ieee754(writeUint, val, buf, pos) {
            var sign = val < 0 ? 1 : 0;
            if (sign)
                val = -val;
            if (val === 0)
                writeUint(1 / val > 0 ? /* positive */ 0 : /* negative 0 */ 2147483648, buf, pos);
            else if (isNaN(val))
                writeUint(2143289344, buf, pos);
            else if (val > 3.4028234663852886e+38) // +-Infinity
                writeUint((sign << 31 | 2139095040) >>> 0, buf, pos);
            else if (val < 1.1754943508222875e-38) // denormal
                writeUint((sign << 31 | Math.round(val / 1.401298464324817e-45)) >>> 0, buf, pos);
            else {
                var exponent = Math.floor(Math.log(val) / Math.LN2),
                    mantissa = Math.round(val * Math.pow(2, -exponent) * 8388608) & 8388607;
                writeUint((sign << 31 | exponent + 127 << 23 | mantissa) >>> 0, buf, pos);
            }
        }

        exports.writeFloatLE = writeFloat_ieee754.bind(null, writeUintLE);
        exports.writeFloatBE = writeFloat_ieee754.bind(null, writeUintBE);

        function readFloat_ieee754(readUint, buf, pos) {
            var uint = readUint(buf, pos),
                sign = (uint >> 31) * 2 + 1,
                exponent = uint >>> 23 & 255,
                mantissa = uint & 8388607;
            return exponent === 255
                ? mantissa
                ? NaN
                : sign * Infinity
                : exponent === 0 // denormal
                ? sign * 1.401298464324817e-45 * mantissa
                : sign * Math.pow(2, exponent - 150) * (mantissa + 8388608);
        }

        exports.readFloatLE = readFloat_ieee754.bind(null, readUintLE);
        exports.readFloatBE = readFloat_ieee754.bind(null, readUintBE);

    })();

    // double: typed array
    if (typeof Float64Array !== "undefined") (function() {

        var f64 = new Float64Array([-0]),
            f8b = new Uint8Array(f64.buffer),
            le  = f8b[7] === 128;

        function writeDouble_f64_cpy(val, buf, pos) {
            f64[0] = val;
            buf[pos    ] = f8b[0];
            buf[pos + 1] = f8b[1];
            buf[pos + 2] = f8b[2];
            buf[pos + 3] = f8b[3];
            buf[pos + 4] = f8b[4];
            buf[pos + 5] = f8b[5];
            buf[pos + 6] = f8b[6];
            buf[pos + 7] = f8b[7];
        }

        function writeDouble_f64_rev(val, buf, pos) {
            f64[0] = val;
            buf[pos    ] = f8b[7];
            buf[pos + 1] = f8b[6];
            buf[pos + 2] = f8b[5];
            buf[pos + 3] = f8b[4];
            buf[pos + 4] = f8b[3];
            buf[pos + 5] = f8b[2];
            buf[pos + 6] = f8b[1];
            buf[pos + 7] = f8b[0];
        }

        /* istanbul ignore next */
        exports.writeDoubleLE = le ? writeDouble_f64_cpy : writeDouble_f64_rev;
        /* istanbul ignore next */
        exports.writeDoubleBE = le ? writeDouble_f64_rev : writeDouble_f64_cpy;

        function readDouble_f64_cpy(buf, pos) {
            f8b[0] = buf[pos    ];
            f8b[1] = buf[pos + 1];
            f8b[2] = buf[pos + 2];
            f8b[3] = buf[pos + 3];
            f8b[4] = buf[pos + 4];
            f8b[5] = buf[pos + 5];
            f8b[6] = buf[pos + 6];
            f8b[7] = buf[pos + 7];
            return f64[0];
        }

        function readDouble_f64_rev(buf, pos) {
            f8b[7] = buf[pos    ];
            f8b[6] = buf[pos + 1];
            f8b[5] = buf[pos + 2];
            f8b[4] = buf[pos + 3];
            f8b[3] = buf[pos + 4];
            f8b[2] = buf[pos + 5];
            f8b[1] = buf[pos + 6];
            f8b[0] = buf[pos + 7];
            return f64[0];
        }

        /* istanbul ignore next */
        exports.readDoubleLE = le ? readDouble_f64_cpy : readDouble_f64_rev;
        /* istanbul ignore next */
        exports.readDoubleBE = le ? readDouble_f64_rev : readDouble_f64_cpy;

    // double: ieee754
    })(); else (function() {

        function writeDouble_ieee754(writeUint, off0, off1, val, buf, pos) {
            var sign = val < 0 ? 1 : 0;
            if (sign)
                val = -val;
            if (val === 0) {
                writeUint(0, buf, pos + off0);
                writeUint(1 / val > 0 ? /* positive */ 0 : /* negative 0 */ 2147483648, buf, pos + off1);
            } else if (isNaN(val)) {
                writeUint(0, buf, pos + off0);
                writeUint(2146959360, buf, pos + off1);
            } else if (val > 1.7976931348623157e+308) { // +-Infinity
                writeUint(0, buf, pos + off0);
                writeUint((sign << 31 | 2146435072) >>> 0, buf, pos + off1);
            } else {
                var mantissa;
                if (val < 2.2250738585072014e-308) { // denormal
                    mantissa = val / 5e-324;
                    writeUint(mantissa >>> 0, buf, pos + off0);
                    writeUint((sign << 31 | mantissa / 4294967296) >>> 0, buf, pos + off1);
                } else {
                    var exponent = Math.floor(Math.log(val) / Math.LN2);
                    if (exponent === 1024)
                        exponent = 1023;
                    mantissa = val * Math.pow(2, -exponent);
                    writeUint(mantissa * 4503599627370496 >>> 0, buf, pos + off0);
                    writeUint((sign << 31 | exponent + 1023 << 20 | mantissa * 1048576 & 1048575) >>> 0, buf, pos + off1);
                }
            }
        }

        exports.writeDoubleLE = writeDouble_ieee754.bind(null, writeUintLE, 0, 4);
        exports.writeDoubleBE = writeDouble_ieee754.bind(null, writeUintBE, 4, 0);

        function readDouble_ieee754(readUint, off0, off1, buf, pos) {
            var lo = readUint(buf, pos + off0),
                hi = readUint(buf, pos + off1);
            var sign = (hi >> 31) * 2 + 1,
                exponent = hi >>> 20 & 2047,
                mantissa = 4294967296 * (hi & 1048575) + lo;
            return exponent === 2047
                ? mantissa
                ? NaN
                : sign * Infinity
                : exponent === 0 // denormal
                ? sign * 5e-324 * mantissa
                : sign * Math.pow(2, exponent - 1075) * (mantissa + 4503599627370496);
        }

        exports.readDoubleLE = readDouble_ieee754.bind(null, readUintLE, 0, 4);
        exports.readDoubleBE = readDouble_ieee754.bind(null, readUintBE, 4, 0);

    })();

    return exports;
}

// uint helpers

function writeUintLE(val, buf, pos) {
    buf[pos    ] =  val        & 255;
    buf[pos + 1] =  val >>> 8  & 255;
    buf[pos + 2] =  val >>> 16 & 255;
    buf[pos + 3] =  val >>> 24;
}

function writeUintBE(val, buf, pos) {
    buf[pos    ] =  val >>> 24;
    buf[pos + 1] =  val >>> 16 & 255;
    buf[pos + 2] =  val >>> 8  & 255;
    buf[pos + 3] =  val        & 255;
}

function readUintLE(buf, pos) {
    return (buf[pos    ]
          | buf[pos + 1] << 8
          | buf[pos + 2] << 16
          | buf[pos + 3] << 24) >>> 0;
}

function readUintBE(buf, pos) {
    return (buf[pos    ] << 24
          | buf[pos + 1] << 16
          | buf[pos + 2] << 8
          | buf[pos + 3]) >>> 0;
}


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A minimal path module to resolve Unix, Windows and URL paths alike.
 * @memberof util
 * @namespace
 */
var path = exports;

var isAbsolute =
/**
 * Tests if the specified path is absolute.
 * @param {string} path Path to test
 * @returns {boolean} `true` if path is absolute
 */
path.isAbsolute = function isAbsolute(path) {
    return /^(?:\/|\w+:)/.test(path);
};

var normalize =
/**
 * Normalizes the specified path.
 * @param {string} path Path to normalize
 * @returns {string} Normalized path
 */
path.normalize = function normalize(path) {
    path = path.replace(/\\/g, "/")
               .replace(/\/{2,}/g, "/");
    var parts    = path.split("/"),
        absolute = isAbsolute(path),
        prefix   = "";
    if (absolute)
        prefix = parts.shift() + "/";
    for (var i = 0; i < parts.length;) {
        if (parts[i] === "..") {
            if (i > 0 && parts[i - 1] !== "..")
                parts.splice(--i, 2);
            else if (absolute)
                parts.splice(i, 1);
            else
                ++i;
        } else if (parts[i] === ".")
            parts.splice(i, 1);
        else
            ++i;
    }
    return prefix + parts.join("/");
};

/**
 * Resolves the specified include path against the specified origin path.
 * @param {string} originPath Path to the origin file
 * @param {string} includePath Include path relative to origin path
 * @param {boolean} [alreadyNormalized=false] `true` if both paths are already known to be normalized
 * @returns {string} Path to the include file
 */
path.resolve = function resolve(originPath, includePath, alreadyNormalized) {
    if (!alreadyNormalized)
        includePath = normalize(includePath);
    if (isAbsolute(includePath))
        return includePath;
    if (!alreadyNormalized)
        originPath = normalize(originPath);
    return (originPath = originPath.replace(/(?:\/|^)[^/]+$/, "")).length ? normalize(originPath + "/" + includePath) : includePath;
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = pool;

/**
 * An allocator as used by {@link util.pool}.
 * @typedef PoolAllocator
 * @type {function}
 * @param {number} size Buffer size
 * @returns {Uint8Array} Buffer
 */

/**
 * A slicer as used by {@link util.pool}.
 * @typedef PoolSlicer
 * @type {function}
 * @param {number} start Start offset
 * @param {number} end End offset
 * @returns {Uint8Array} Buffer slice
 * @this {Uint8Array}
 */

/**
 * A general purpose buffer pool.
 * @memberof util
 * @function
 * @param {PoolAllocator} alloc Allocator
 * @param {PoolSlicer} slice Slicer
 * @param {number} [size=8192] Slab size
 * @returns {PoolAllocator} Pooled allocator
 */
function pool(alloc, slice, size) {
    var SIZE   = size || 8192;
    var MAX    = SIZE >>> 1;
    var slab   = null;
    var offset = SIZE;
    return function pool_alloc(size) {
        if (size < 1 || size > MAX)
            return alloc(size);
        if (offset + size > SIZE) {
            slab = alloc(SIZE);
            offset = 0;
        }
        var buf = slice.call(slab, offset, offset += size);
        if (offset & 7) // align to 32 bit
            offset = (offset | 7) + 1;
        return buf;
    };
}


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A minimal UTF8 implementation for number arrays.
 * @memberof util
 * @namespace
 */
var utf8 = exports;

/**
 * Calculates the UTF8 byte length of a string.
 * @param {string} string String
 * @returns {number} Byte length
 */
utf8.length = function utf8_length(string) {
    var len = 0,
        c = 0;
    for (var i = 0; i < string.length; ++i) {
        c = string.charCodeAt(i);
        if (c < 128)
            len += 1;
        else if (c < 2048)
            len += 2;
        else if ((c & 0xFC00) === 0xD800 && (string.charCodeAt(i + 1) & 0xFC00) === 0xDC00) {
            ++i;
            len += 4;
        } else
            len += 3;
    }
    return len;
};

/**
 * Reads UTF8 bytes as a string.
 * @param {Uint8Array} buffer Source buffer
 * @param {number} start Source start
 * @param {number} end Source end
 * @returns {string} String read
 */
utf8.read = function utf8_read(buffer, start, end) {
    var len = end - start;
    if (len < 1)
        return "";
    var parts = null,
        chunk = [],
        i = 0, // char offset
        t;     // temporary
    while (start < end) {
        t = buffer[start++];
        if (t < 128)
            chunk[i++] = t;
        else if (t > 191 && t < 224)
            chunk[i++] = (t & 31) << 6 | buffer[start++] & 63;
        else if (t > 239 && t < 365) {
            t = ((t & 7) << 18 | (buffer[start++] & 63) << 12 | (buffer[start++] & 63) << 6 | buffer[start++] & 63) - 0x10000;
            chunk[i++] = 0xD800 + (t >> 10);
            chunk[i++] = 0xDC00 + (t & 1023);
        } else
            chunk[i++] = (t & 15) << 12 | (buffer[start++] & 63) << 6 | buffer[start++] & 63;
        if (i > 8191) {
            (parts || (parts = [])).push(String.fromCharCode.apply(String, chunk));
            i = 0;
        }
    }
    if (parts) {
        if (i)
            parts.push(String.fromCharCode.apply(String, chunk.slice(0, i)));
        return parts.join("");
    }
    return String.fromCharCode.apply(String, chunk.slice(0, i));
};

/**
 * Writes a string as UTF8 bytes.
 * @param {string} string Source string
 * @param {Uint8Array} buffer Destination buffer
 * @param {number} offset Destination offset
 * @returns {number} Bytes written
 */
utf8.write = function utf8_write(string, buffer, offset) {
    var start = offset,
        c1, // character 1
        c2; // character 2
    for (var i = 0; i < string.length; ++i) {
        c1 = string.charCodeAt(i);
        if (c1 < 128) {
            buffer[offset++] = c1;
        } else if (c1 < 2048) {
            buffer[offset++] = c1 >> 6       | 192;
            buffer[offset++] = c1       & 63 | 128;
        } else if ((c1 & 0xFC00) === 0xD800 && ((c2 = string.charCodeAt(i + 1)) & 0xFC00) === 0xDC00) {
            c1 = 0x10000 + ((c1 & 0x03FF) << 10) + (c2 & 0x03FF);
            ++i;
            buffer[offset++] = c1 >> 18      | 240;
            buffer[offset++] = c1 >> 12 & 63 | 128;
            buffer[offset++] = c1 >> 6  & 63 | 128;
            buffer[offset++] = c1       & 63 | 128;
        } else {
            buffer[offset++] = c1 >> 12      | 224;
            buffer[offset++] = c1 >> 6  & 63 | 128;
            buffer[offset++] = c1       & 63 | 128;
        }
    }
    return offset - start;
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _snappyjsUncompress = __webpack_require__(28);

var _snappyjsUncompress2 = _interopRequireDefault(_snappyjsUncompress);

var _parseProtoBuf2 = __webpack_require__(27);

var _parseProtoBuf3 = _interopRequireDefault(_parseProtoBuf2);

var _parseJSON2 = __webpack_require__(26);

var _parseJSON3 = _interopRequireDefault(_parseJSON2);

var _util = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DzhyunDataParser = function () {

  // options.compresser 压缩格式，默认不设置则根据数据自动判断，先直接解析数据失败了再解压后再次解析，
  // 'snappy'使用snappy压缩，解压时如果失败直接报错，false不使用压缩，直接解析数据失败直接报错
  // options.yfloat {bool} 是否将long类型数据做yfloat解析，默认不设置为true，设置为false则不解析, 不包括pbtable
  function DzhyunDataParser() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, DzhyunDataParser);

    this.options = options;
  }

  _createClass(DzhyunDataParser, [{
    key: 'parse',
    value: function parse(input) {
      var _this = this;

      return Promise.resolve().then(function () {
        return _this.options.compresser === 'snappy' ? DzhyunDataParser.uncompress(input) : input;
      }).then(function (data) {
        if (DzhyunDataParser.isJSON(data)) {
          return DzhyunDataParser.parseJSON(data);
        } else if (_this.options.compresser === undefined) {
          // 默认自动判断压缩时，当解析pb失败后再次解压后再尝试解析
          return DzhyunDataParser.parseProtoBuf(data, _this.options.yfloat !== false).catch(function (e) {
            return DzhyunDataParser.uncompress(data).catch(function () {
              throw e;
            }).then(_this.parse.bind(_this));
          });
        }
        return DzhyunDataParser.parseProtoBuf(data, _this.options.yfloat !== false);
      });
    }
  }], [{
    key: 'parseProtoBuf',
    value: function parseProtoBuf(data, parseYfloat) {
      return typeof _parseProtoBuf3.default === 'function' ? (0, _parseProtoBuf3.default)(data, parseYfloat) : Promise.reject(new Error('no support parse protobuf data'));
    }
  }, {
    key: 'parseJSON',
    value: function parseJSON(data) {
      return typeof _parseJSON3.default === 'function' ? (0, _parseJSON3.default)(data) : Promise.reject(new Error('no support parse JSON data'));
    }
  }, {
    key: 'isJSON',
    value: function isJSON(data) {
      var first = void 0;
      if (typeof data === 'string') {
        first = data.charCodeAt(0);
      } else if (data instanceof ArrayBuffer) {
        first = new Uint8Array(data)[0];
      }
      return first === 123;
    }
  }, {
    key: 'uncompress',
    value: function uncompress(data) {
      return Promise.resolve().then(function () {
        var result = data;
        if (typeof _snappyjsUncompress2.default !== 'function') throw new Error('no support snappy uncompress');
        if (typeof data === 'string') {
          result = (0, _util.stringToArrayBuffer)(result);
          result = (0, _snappyjsUncompress2.default)(result);
        } else {
          result = (0, _snappyjsUncompress2.default)(result);
        }
        return result;
      });
    }
  }]);

  return DzhyunDataParser;
}();

module.exports = DzhyunDataParser;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * pb table格式数据转换模块
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _dzhyunProto = __webpack_require__(15);

var _dzhyunProto2 = _interopRequireDefault(_dzhyunProto);

var _yfloat = __webpack_require__(16);

var _yfloat2 = _interopRequireDefault(_yfloat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** 列类型枚举 */
var InfoType = void 0;
try {
  InfoType = _dzhyunProto2.default.lookupEnum('dzhyun.InfoType').values;
} catch (e) {
  InfoType = {
    Type_Int: 105,
    Type_Float: 102,
    Type_Double: 100,
    Type_String: 115,
    Type_Binary: 98,
    Type_Table: 116,
    Type_SInt: 120,
    Type_Unknow: 0
  };
}

/** 各种列类型对应数据字段前缀 */
var cDataFieldPrefix = {};
cDataFieldPrefix[InfoType.Type_Int] = 'i';
cDataFieldPrefix[InfoType.Type_Float] = 'f';
cDataFieldPrefix[InfoType.Type_Double] = 'd';
cDataFieldPrefix[InfoType.Type_String] = 's';
cDataFieldPrefix[InfoType.Type_Binary] = 'b';
cDataFieldPrefix[InfoType.Type_Table] = 't';
cDataFieldPrefix[InfoType.Type_SInt] = 'x';

/** table信息缓存，多次推送数据时只有第一次会有table信息，所以需要做缓存 */
var tableInfoCache = {};

var PbTableConverter = function () {
  /**
   * pbTable数据转换器类型
   * @param {?{filter: {function}}} options 可以设置一个filter函数对所有解析的数据都会调用该方法，
   *        返回true保留数据，false丢弃数据，返回其它类型数据则将其替换
   * @constructor
   */
  function PbTableConverter(options) {
    _classCallCheck(this, PbTableConverter);

    this.options = options || {};
    this._tableInfoStack = [];
  }

  /**
   * 根据列的类型取得具体列数据中对应字段的数据值
   * @param {Object} columnData
   * @param {number} columnType
   * @private
   */
  // eslint-disable-next-line class-methods-use-this


  _createClass(PbTableConverter, [{
    key: '_getColumnDataValues',
    value: function _getColumnDataValues(columnData, columnType) {

      // 非未知类型直接取类型的字段值
      if (columnType !== InfoType.Type_Unknow) {
        var fieldName = cDataFieldPrefix[columnType] + 'Values';
        return columnData[fieldName];
      }

      // 对于未知类型则按顺序找到第一个不为空的数据字段值
      return columnData.iValues || columnData.fValues || columnData.dValues || columnData.sValues || columnData.bValues || columnData.tValues || columnData.xValues;
    }

    /**
     * 恢复数据值
     * @param {number} columnType
     * @param {number} columnRatio
     * @returns {*}
     * @private
     */

  }, {
    key: '_retrieveValue',
    value: function _retrieveValue(columnType, columnRatio) {
      var _this = this;

      if (columnType === InfoType.Type_Table) {
        return function (value, rowIndex) {
          return _this.convert(value, rowIndex === 0);
        };
      } else if ((columnType === InfoType.Type_Int || columnType === InfoType.Type_SInt) && !!columnRatio) {

        // 对于整型数据，根据radio将数据还原（第一行数据跳过，不处理）
        return function (value, rowIndex) {
          return rowIndex !== 0 ? value * columnRatio : value;
        };
      }
      return function (value) {
        return value;
      };
    }

    /**
     * 转换列数据
     * @param {Object} columnData 指定的一列的数据 CData|CDataX
     * @param {?Object} columnInfo 对应的该列的列信息 CInfo
     * @param {!Array.<Object>} resultArray 存放转换后数据的数组
     * @throws {Error}
     * @private
     */

  }, {
    key: '_convertColumn',
    value: function _convertColumn(columnData) {
      var columnInfo = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var resultArray = arguments[2];

      var index = columnData.Index;

      // 列信息中名称不存在时，列名使用列下标
      var columnName = columnInfo.Name || index;

      // 列信息中类型不存在时，列类型取未知
      var columnType = columnInfo.Type || InfoType.Type_Unknow;

      var columnRatio = columnInfo.Ratio;

      var values = this._getColumnDataValues(columnData, columnType);

      // 如果对应列数据为空则抛出错误
      if (values == null) {
        throw new Error('column ' + index + ' data is null');
      }

      this._columnToRow(values, index, columnName, columnType, columnRatio, resultArray);
    }

    /**
     * 列数据转为行数据
     * @param columnValues
     * @param columnIndex
     * @param columnName
     * @param columnType
     * @param columnRatio
     * @param resultArray
     * @private
     */

  }, {
    key: '_columnToRow',
    value: function _columnToRow(columnValues, columnIndex, columnName, columnType, columnRatio, resultArray) {
      var retrieveValue = this._retrieveValue(columnType, columnRatio);
      var previousValue = 0;
      var dq = void 0;
      var w = void 0;
      columnValues.forEach(function (value, rowIndex) {

        // 对应结果行数据不存在则创建
        var row = resultArray[rowIndex];
        if (row === undefined) {
          row = {};
          resultArray.push(row);
        }

        // 恢复数据值
        var result = retrieveValue(value, rowIndex);

        // 对于Type_SInt类型，按照差分还原
        if (columnType === InfoType.Type_SInt) {

          // 第一次记录精度
          if (dq === undefined) {
            var arr = _yfloat2.default.unmakeValue(result);
            previousValue = arr[0];
            dq = arr[1];
            w = Math.pow(10, dq);
          } else {
            // result = result.toNumber ? result.toNumber() : result;
            previousValue = Number((previousValue + result / w).toFixed(dq));
          }
          row[columnName] = previousValue;
        } else if (columnType === InfoType.Type_Int) {

          // 对于Type_Int类型数据转换yfloat
          row[columnName] = _yfloat2.default.unmakeValueToNumber(result);
        } else {
          row[columnName] = result;
        }
      });

      // 一列转换完成后将tableInfoStack中最后一个数据移除堆栈
      this._tableInfoStack.pop();
    }

    /**
     * 将传入的pbTable格式数据转换成标准json对象数组
     * @param {!ArrayBuffer|ByteBuffer|Object} pbTable 待转换的pbTable格式数据
     * @param {?boolean} isFirstRow 转换的pbTable数据是否是嵌套table转换数据的第一行
     *        第一行则要记录tableInfo，非第一行则不记录，避免堆栈数据重复
     * @throws {Error}
     * @return {Array.<Object>} 转换后的标准json对象数组
     */

  }, {
    key: 'convert',
    value: function convert(pbTable, isFirstRow) {
      var _this2 = this;

      // 得到table列信息
      var tableInfoId = pbTable.Tiid;
      var tableInfo = pbTable.Info;

      // table信息不存在则从堆栈或者全局缓存中查找对应table信息
      if (!tableInfo || tableInfo.length === 0) {
        var length = this._tableInfoStack.length;
        tableInfo = isFirstRow === false && length > 0 ? this._tableInfoStack[length] : tableInfoCache[tableInfoId];
      } else {

        // 第一行的tableInfo信息放入堆栈
        if (isFirstRow === true) this._tableInfoStack.push(tableInfo);
        tableInfoCache[tableInfoId] = tableInfo;
      }

      // 定义出最后的转换结果数组
      var jsonArray = [];

      // 转换table数据
      var tableData = pbTable.Data || pbTable.DataX;
      if (tableData) {
        tableData.forEach(function (columnData) {
          var columnIndex = columnData.Index;

          // 从table信息中得到该列对应的column信息，column信息可能不存在
          var columnInfo = tableInfo ? tableInfo[columnIndex] : null;
          _this2._convertColumn(columnData, columnInfo, jsonArray);
        });
      } else {
        throw new Error('table data undefined');
      }

      return jsonArray;
    }
  }]);

  return PbTableConverter;
}();

exports.default = {

  /**
   * 将传入的pbTable格式数据转换成标准json对象数组
   * @param {!ArrayBuffer|ByteBuffer|Object} pbTable 待转换的pbTable格式数据
   * @param {Object=} options 选项
   * @throws {Error}
   * @return {Array.<Object>} 转换后的标准json对象数组
   */
  convertToJsonArray: function convertToJsonArray(pbTable, options) {
    return new PbTableConverter(options).convert(pbTable);
  }
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// light library entry point.


module.exports = __webpack_require__(40);

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var protobuf = module.exports = __webpack_require__(41);

protobuf.build = "light";

/**
 * A node-style callback as used by {@link load} and {@link Root#load}.
 * @typedef LoadCallback
 * @type {function}
 * @param {?Error} error Error, if any, otherwise `null`
 * @param {Root} [root] Root, if there hasn't been an error
 * @returns {undefined}
 */

/**
 * Loads one or multiple .proto or preprocessed .json files into a common root namespace and calls the callback.
 * @param {string|string[]} filename One or multiple files to load
 * @param {Root} root Root namespace, defaults to create a new one if omitted.
 * @param {LoadCallback} callback Callback function
 * @returns {undefined}
 * @see {@link Root#load}
 */
function load(filename, root, callback) {
    if (typeof root === "function") {
        callback = root;
        root = new protobuf.Root();
    } else if (!root)
        root = new protobuf.Root();
    return root.load(filename, callback);
}

/**
 * Loads one or multiple .proto or preprocessed .json files into a common root namespace and calls the callback.
 * @name load
 * @function
 * @param {string|string[]} filename One or multiple files to load
 * @param {LoadCallback} callback Callback function
 * @returns {undefined}
 * @see {@link Root#load}
 * @variation 2
 */
// function load(filename:string, callback:LoadCallback):undefined

/**
 * Loads one or multiple .proto or preprocessed .json files into a common root namespace and returns a promise.
 * @name load
 * @function
 * @param {string|string[]} filename One or multiple files to load
 * @param {Root} [root] Root namespace, defaults to create a new one if omitted.
 * @returns {Promise<Root>} Promise
 * @see {@link Root#load}
 * @variation 3
 */
// function load(filename:string, [root:Root]):Promise<Root>

protobuf.load = load;

/**
 * Synchronously loads one or multiple .proto or preprocessed .json files into a common root namespace (node only).
 * @param {string|string[]} filename One or multiple files to load
 * @param {Root} [root] Root namespace, defaults to create a new one if omitted.
 * @returns {Root} Root namespace
 * @throws {Error} If synchronous fetching is not supported (i.e. in browsers) or if a file's syntax is invalid
 * @see {@link Root#loadSync}
 */
function loadSync(filename, root) {
    if (!root)
        root = new protobuf.Root();
    return root.loadSync(filename);
}

protobuf.loadSync = loadSync;

// Serialization
protobuf.encoder          = __webpack_require__(19);
protobuf.decoder          = __webpack_require__(18);
protobuf.verifier         = __webpack_require__(25);
protobuf.converter        = __webpack_require__(7);

// Reflection
protobuf.ReflectionObject = __webpack_require__(4);
protobuf.Namespace        = __webpack_require__(6);
protobuf.Root             = __webpack_require__(43);
protobuf.Enum             = __webpack_require__(1);
protobuf.Type             = __webpack_require__(11);
protobuf.Field            = __webpack_require__(3);
protobuf.OneOf            = __webpack_require__(22);
protobuf.MapField         = __webpack_require__(20);
protobuf.Service          = __webpack_require__(24);
protobuf.Method           = __webpack_require__(21);

// Runtime
protobuf.Class            = __webpack_require__(17);
protobuf.Message          = __webpack_require__(9);

// Utility
protobuf.types            = __webpack_require__(5);
protobuf.util             = __webpack_require__(0);

// Configure reflection
protobuf.ReflectionObject._configure(protobuf.Root);
protobuf.Namespace._configure(protobuf.Type, protobuf.Service);
protobuf.Root._configure(protobuf.Type);


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var protobuf = exports;

/**
 * Build type, one of `"full"`, `"light"` or `"minimal"`.
 * @name build
 * @type {string}
 * @const
 */
protobuf.build = "minimal";

/**
 * Named roots.
 * This is where pbjs stores generated structures (the option `-r, --root` specifies a name).
 * Can also be used manually to make roots available accross modules.
 * @name roots
 * @type {Object.<string,Root>}
 * @example
 * // pbjs -r myroot -o compiled.js ...
 *
 * // in another module:
 * require("./compiled.js");
 *
 * // in any subsequent module:
 * var root = protobuf.roots["myroot"];
 */
protobuf.roots = {};

// Serialization
protobuf.Writer       = __webpack_require__(12);
protobuf.BufferWriter = __webpack_require__(46);
protobuf.Reader       = __webpack_require__(10);
protobuf.BufferReader = __webpack_require__(42);

// Utility
protobuf.util         = __webpack_require__(2);
protobuf.rpc          = __webpack_require__(23);
protobuf.configure    = configure;

/* istanbul ignore next */
/**
 * Reconfigures the library according to the environment.
 * @returns {undefined}
 */
function configure() {
    protobuf.Reader._configure(protobuf.BufferReader);
    protobuf.util._configure();
}

// Configure serialization
protobuf.Writer._configure(protobuf.BufferWriter);
configure();


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = BufferReader;

// extends Reader
var Reader = __webpack_require__(10);
(BufferReader.prototype = Object.create(Reader.prototype)).constructor = BufferReader;

var util = __webpack_require__(2);

/**
 * Constructs a new buffer reader instance.
 * @classdesc Wire format reader using node buffers.
 * @extends Reader
 * @constructor
 * @param {Buffer} buffer Buffer to read from
 */
function BufferReader(buffer) {
    Reader.call(this, buffer);

    /**
     * Read buffer.
     * @name BufferReader#buf
     * @type {Buffer}
     */
}

/* istanbul ignore else */
if (util.Buffer)
    BufferReader.prototype._slice = util.Buffer.prototype.slice;

/**
 * @override
 */
BufferReader.prototype.string = function read_string_buffer() {
    var len = this.uint32(); // modifies pos
    return this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + len, this.len));
};

/**
 * Reads a sequence of bytes preceeded by its length as a varint.
 * @name BufferReader#bytes
 * @function
 * @returns {Buffer} Value read
 */


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = Root;

// extends Namespace
var Namespace = __webpack_require__(6);
((Root.prototype = Object.create(Namespace.prototype)).constructor = Root).className = "Root";

var Field   = __webpack_require__(3),
    Enum    = __webpack_require__(1),
    util    = __webpack_require__(0);

var Type,   // cyclic
    parse,  // might be excluded
    common; // "

/**
 * Constructs a new root namespace instance.
 * @classdesc Root namespace wrapping all types, enums, services, sub-namespaces etc. that belong together.
 * @extends NamespaceBase
 * @constructor
 * @param {Object.<string,*>} [options] Top level options
 */
function Root(options) {
    Namespace.call(this, "", options);

    /**
     * Deferred extension fields.
     * @type {Field[]}
     */
    this.deferred = [];

    /**
     * Resolved file names of loaded files.
     * @type {string[]}
     */
    this.files = [];
}

/**
 * Loads a namespace descriptor into a root namespace.
 * @param {NamespaceDescriptor} json Nameespace descriptor
 * @param {Root} [root] Root namespace, defaults to create a new one if omitted
 * @returns {Root} Root namespace
 */
Root.fromJSON = function fromJSON(json, root) {
    if (!root)
        root = new Root();
    if (json.options)
        root.setOptions(json.options);
    return root.addJSON(json.nested);
};

/**
 * Resolves the path of an imported file, relative to the importing origin.
 * This method exists so you can override it with your own logic in case your imports are scattered over multiple directories.
 * @function
 * @param {string} origin The file name of the importing file
 * @param {string} target The file name being imported
 * @returns {?string} Resolved path to `target` or `null` to skip the file
 */
Root.prototype.resolvePath = util.path.resolve;

// A symbol-like function to safely signal synchronous loading
/* istanbul ignore next */
function SYNC() {} // eslint-disable-line no-empty-function

/**
 * Loads one or multiple .proto or preprocessed .json files into this root namespace and calls the callback.
 * @param {string|string[]} filename Names of one or multiple files to load
 * @param {ParseOptions} options Parse options
 * @param {LoadCallback} callback Callback function
 * @returns {undefined}
 */
Root.prototype.load = function load(filename, options, callback) {
    if (typeof options === "function") {
        callback = options;
        options = undefined;
    }
    var self = this;
    if (!callback)
        return util.asPromise(load, self, filename, options);

    var sync = callback === SYNC; // undocumented

    // Finishes loading by calling the callback (exactly once)
    function finish(err, root) {
        /* istanbul ignore if */
        if (!callback)
            return;
        var cb = callback;
        callback = null;
        if (sync)
            throw err;
        cb(err, root);
    }

    // Processes a single file
    function process(filename, source) {
        try {
            if (util.isString(source) && source.charAt(0) === "{")
                source = JSON.parse(source);
            if (!util.isString(source))
                self.setOptions(source.options).addJSON(source.nested);
            else {
                parse.filename = filename;
                var parsed = parse(source, self, options),
                    resolved,
                    i = 0;
                if (parsed.imports)
                    for (; i < parsed.imports.length; ++i)
                        if (resolved = self.resolvePath(filename, parsed.imports[i]))
                            fetch(resolved);
                if (parsed.weakImports)
                    for (i = 0; i < parsed.weakImports.length; ++i)
                        if (resolved = self.resolvePath(filename, parsed.weakImports[i]))
                            fetch(resolved, true);
            }
        } catch (err) {
            finish(err);
        }
        if (!sync && !queued)
            finish(null, self); // only once anyway
    }

    // Fetches a single file
    function fetch(filename, weak) {

        // Strip path if this file references a bundled definition
        var idx = filename.lastIndexOf("google/protobuf/");
        if (idx > -1) {
            var altname = filename.substring(idx);
            if (altname in common)
                filename = altname;
        }

        // Skip if already loaded / attempted
        if (self.files.indexOf(filename) > -1)
            return;
        self.files.push(filename);

        // Shortcut bundled definitions
        if (filename in common) {
            if (sync)
                process(filename, common[filename]);
            else {
                ++queued;
                setTimeout(function() {
                    --queued;
                    process(filename, common[filename]);
                });
            }
            return;
        }

        // Otherwise fetch from disk or network
        if (sync) {
            var source;
            try {
                source = util.fs.readFileSync(filename).toString("utf8");
            } catch (err) {
                if (!weak)
                    finish(err);
                return;
            }
            process(filename, source);
        } else {
            ++queued;
            util.fetch(filename, function(err, source) {
                --queued;
                /* istanbul ignore if */
                if (!callback)
                    return; // terminated meanwhile
                if (err) {
                    /* istanbul ignore else */
                    if (!weak)
                        finish(err);
                    else if (!queued) // can't be covered reliably
                        finish(null, self);
                    return;
                }
                process(filename, source);
            });
        }
    }
    var queued = 0;

    // Assembling the root namespace doesn't require working type
    // references anymore, so we can load everything in parallel
    if (util.isString(filename))
        filename = [ filename ];
    for (var i = 0, resolved; i < filename.length; ++i)
        if (resolved = self.resolvePath("", filename[i]))
            fetch(resolved);

    if (sync)
        return self;
    if (!queued)
        finish(null, self);
    return undefined;
};
// function load(filename:string, options:ParseOptions, callback:LoadCallback):undefined

/**
 * Loads one or multiple .proto or preprocessed .json files into this root namespace and calls the callback.
 * @param {string|string[]} filename Names of one or multiple files to load
 * @param {LoadCallback} callback Callback function
 * @returns {undefined}
 * @variation 2
 */
// function load(filename:string, callback:LoadCallback):undefined

/**
 * Loads one or multiple .proto or preprocessed .json files into this root namespace and returns a promise.
 * @name Root#load
 * @function
 * @param {string|string[]} filename Names of one or multiple files to load
 * @param {ParseOptions} [options] Parse options. Defaults to {@link parse.defaults} when omitted.
 * @returns {Promise<Root>} Promise
 * @variation 3
 */
// function load(filename:string, [options:ParseOptions]):Promise<Root>

/**
 * Synchronously loads one or multiple .proto or preprocessed .json files into this root namespace (node only).
 * @name Root#loadSync
 * @function
 * @param {string|string[]} filename Names of one or multiple files to load
 * @param {ParseOptions} [options] Parse options. Defaults to {@link parse.defaults} when omitted.
 * @returns {Root} Root namespace
 * @throws {Error} If synchronous fetching is not supported (i.e. in browsers) or if a file's syntax is invalid
 */
Root.prototype.loadSync = function loadSync(filename, options) {
    if (!util.isNode)
        throw Error("not supported");
    return this.load(filename, options, SYNC);
};

/**
 * @override
 */
Root.prototype.resolveAll = function resolveAll() {
    if (this.deferred.length)
        throw Error("unresolvable extensions: " + this.deferred.map(function(field) {
            return "'extend " + field.extend + "' in " + field.parent.fullName;
        }).join(", "));
    return Namespace.prototype.resolveAll.call(this);
};

// only uppercased (and thus conflict-free) children are exposed, see below
var exposeRe = /^[A-Z]/;

/**
 * Handles a deferred declaring extension field by creating a sister field to represent it within its extended type.
 * @param {Root} root Root instance
 * @param {Field} field Declaring extension field witin the declaring type
 * @returns {boolean} `true` if successfully added to the extended type, `false` otherwise
 * @inner
 * @ignore
 */
function tryHandleExtension(root, field) {
    var extendedType = field.parent.lookup(field.extend);
    if (extendedType) {
        var sisterField = new Field(field.fullName, field.id, field.type, field.rule, undefined, field.options);
        sisterField.declaringField = field;
        field.extensionField = sisterField;
        extendedType.add(sisterField);
        return true;
    }
    return false;
}

/**
 * Called when any object is added to this root or its sub-namespaces.
 * @param {ReflectionObject} object Object added
 * @returns {undefined}
 * @private
 */
Root.prototype._handleAdd = function _handleAdd(object) {
    if (object instanceof Field) {

        if (/* an extension field (implies not part of a oneof) */ object.extend !== undefined && /* not already handled */ !object.extensionField)
            if (!tryHandleExtension(this, object))
                this.deferred.push(object);

    } else if (object instanceof Enum) {

        if (exposeRe.test(object.name))
            object.parent[object.name] = object.values; // expose enum values as property of its parent

    } else /* everything else is a namespace */ {

        if (object instanceof Type) // Try to handle any deferred extensions
            for (var i = 0; i < this.deferred.length;)
                if (tryHandleExtension(this, this.deferred[i]))
                    this.deferred.splice(i, 1);
                else
                    ++i;
        for (var j = 0; j < /* initializes */ object.nestedArray.length; ++j) // recurse into the namespace
            this._handleAdd(object._nestedArray[j]);
        if (exposeRe.test(object.name))
            object.parent[object.name] = object; // expose namespace as property of its parent
    }

    // The above also adds uppercased (and thus conflict-free) nested types, services and enums as
    // properties of namespaces just like static code does. This allows using a .d.ts generated for
    // a static module with reflection-based solutions where the condition is met.
};

/**
 * Called when any object is removed from this root or its sub-namespaces.
 * @param {ReflectionObject} object Object removed
 * @returns {undefined}
 * @private
 */
Root.prototype._handleRemove = function _handleRemove(object) {
    if (object instanceof Field) {

        if (/* an extension field */ object.extend !== undefined) {
            if (/* already handled */ object.extensionField) { // remove its sister field
                object.extensionField.parent.remove(object.extensionField);
                object.extensionField = null;
            } else { // cancel the extension
                var index = this.deferred.indexOf(object);
                /* istanbul ignore else */
                if (index > -1)
                    this.deferred.splice(index, 1);
            }
        }

    } else if (object instanceof Enum) {

        if (exposeRe.test(object.name))
            delete object.parent[object.name]; // unexpose enum values

    } else if (object instanceof Namespace) {

        for (var i = 0; i < /* initializes */ object.nestedArray.length; ++i) // recurse into the namespace
            this._handleRemove(object._nestedArray[i]);

        if (exposeRe.test(object.name))
            delete object.parent[object.name]; // unexpose namespaces

    }
};

Root._configure = function(Type_, parse_, common_) {
    Type = Type_;
    parse = parse_;
    common = common_;
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = Service;

var util = __webpack_require__(2);

// Extends EventEmitter
(Service.prototype = Object.create(util.EventEmitter.prototype)).constructor = Service;

/**
 * A service method callback as used by {@link rpc.ServiceMethod|ServiceMethod}.
 *
 * Differs from {@link RPCImplCallback} in that it is an actual callback of a service method which may not return `response = null`.
 * @typedef rpc.ServiceMethodCallback
 * @type {function}
 * @param {?Error} error Error, if any
 * @param {?Message} [response] Response message
 * @returns {undefined}
 */

/**
 * A service method part of a {@link rpc.ServiceMethodMixin|ServiceMethodMixin} and thus {@link rpc.Service} as created by {@link Service.create}.
 * @typedef rpc.ServiceMethod
 * @type {function}
 * @param {Message|Object.<string,*>} request Request message or plain object
 * @param {rpc.ServiceMethodCallback} [callback] Node-style callback called with the error, if any, and the response message
 * @returns {Promise<Message>} Promise if `callback` has been omitted, otherwise `undefined`
 */

/**
 * A service method mixin.
 *
 * When using TypeScript, mixed in service methods are only supported directly with a type definition of a static module (used with reflection). Otherwise, explicit casting is required.
 * @typedef rpc.ServiceMethodMixin
 * @type {Object.<string,rpc.ServiceMethod>}
 * @example
 * // Explicit casting with TypeScript
 * (myRpcService["myMethod"] as protobuf.rpc.ServiceMethod)(...)
 */

/**
 * Constructs a new RPC service instance.
 * @classdesc An RPC service as returned by {@link Service#create}.
 * @exports rpc.Service
 * @extends util.EventEmitter
 * @augments rpc.ServiceMethodMixin
 * @constructor
 * @param {RPCImpl} rpcImpl RPC implementation
 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
 */
function Service(rpcImpl, requestDelimited, responseDelimited) {

    if (typeof rpcImpl !== "function")
        throw TypeError("rpcImpl must be a function");

    util.EventEmitter.call(this);

    /**
     * RPC implementation. Becomes `null` once the service is ended.
     * @type {?RPCImpl}
     */
    this.rpcImpl = rpcImpl;

    /**
     * Whether requests are length-delimited.
     * @type {boolean}
     */
    this.requestDelimited = Boolean(requestDelimited);

    /**
     * Whether responses are length-delimited.
     * @type {boolean}
     */
    this.responseDelimited = Boolean(responseDelimited);
}

/**
 * Calls a service method through {@link rpc.Service#rpcImpl|rpcImpl}.
 * @param {Method|rpc.ServiceMethod} method Reflected or static method
 * @param {function} requestCtor Request constructor
 * @param {function} responseCtor Response constructor
 * @param {Message|Object.<string,*>} request Request message or plain object
 * @param {rpc.ServiceMethodCallback} callback Service callback
 * @returns {undefined}
 */
Service.prototype.rpcCall = function rpcCall(method, requestCtor, responseCtor, request, callback) {

    if (!request)
        throw TypeError("request must be specified");

    var self = this;
    if (!callback)
        return util.asPromise(rpcCall, self, method, requestCtor, responseCtor, request);

    if (!self.rpcImpl) {
        setTimeout(function() { callback(Error("already ended")); }, 0);
        return undefined;
    }

    try {
        return self.rpcImpl(
            method,
            requestCtor[self.requestDelimited ? "encodeDelimited" : "encode"](request).finish(),
            function rpcCallback(err, response) {

                if (err) {
                    self.emit("error", err, method);
                    return callback(err);
                }

                if (response === null) {
                    self.end(/* endedByRPC */ true);
                    return undefined;
                }

                if (!(response instanceof responseCtor)) {
                    try {
                        response = responseCtor[self.responseDelimited ? "decodeDelimited" : "decode"](response);
                    } catch (err) {
                        self.emit("error", err, method);
                        return callback(err);
                    }
                }

                self.emit("data", response, method);
                return callback(null, response);
            }
        );
    } catch (err) {
        self.emit("error", err, method);
        setTimeout(function() { callback(err); }, 0);
        return undefined;
    }
};

/**
 * Ends this service and emits the `end` event.
 * @param {boolean} [endedByRPC=false] Whether the service has been ended by the RPC implementation.
 * @returns {rpc.Service} `this`
 */
Service.prototype.end = function end(endedByRPC) {
    if (this.rpcImpl) {
        if (!endedByRPC) // signal end to rpcImpl
            this.rpcImpl(null, null, null);
        this.rpcImpl = null;
        this.emit("end").off();
    }
    return this;
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = LongBits;

var util = __webpack_require__(2);

/**
 * Constructs new long bits.
 * @classdesc Helper class for working with the low and high bits of a 64 bit value.
 * @memberof util
 * @constructor
 * @param {number} lo Low 32 bits, unsigned
 * @param {number} hi High 32 bits, unsigned
 */
function LongBits(lo, hi) {

    // note that the casts below are theoretically unnecessary as of today, but older statically
    // generated converter code might still call the ctor with signed 32bits. kept for compat.

    /**
     * Low bits.
     * @type {number}
     */
    this.lo = lo >>> 0;

    /**
     * High bits.
     * @type {number}
     */
    this.hi = hi >>> 0;
}

/**
 * Zero bits.
 * @memberof util.LongBits
 * @type {util.LongBits}
 */
var zero = LongBits.zero = new LongBits(0, 0);

zero.toNumber = function() { return 0; };
zero.zzEncode = zero.zzDecode = function() { return this; };
zero.length = function() { return 1; };

/**
 * Zero hash.
 * @memberof util.LongBits
 * @type {string}
 */
var zeroHash = LongBits.zeroHash = "\0\0\0\0\0\0\0\0";

/**
 * Constructs new long bits from the specified number.
 * @param {number} value Value
 * @returns {util.LongBits} Instance
 */
LongBits.fromNumber = function fromNumber(value) {
    if (value === 0)
        return zero;
    var sign = value < 0;
    if (sign)
        value = -value;
    var lo = value >>> 0,
        hi = (value - lo) / 4294967296 >>> 0;
    if (sign) {
        hi = ~hi >>> 0;
        lo = ~lo >>> 0;
        if (++lo > 4294967295) {
            lo = 0;
            if (++hi > 4294967295)
                hi = 0;
        }
    }
    return new LongBits(lo, hi);
};

/**
 * Constructs new long bits from a number, long or string.
 * @param {Long|number|string} value Value
 * @returns {util.LongBits} Instance
 */
LongBits.from = function from(value) {
    if (typeof value === "number")
        return LongBits.fromNumber(value);
    if (util.isString(value)) {
        /* istanbul ignore else */
        if (util.Long)
            value = util.Long.fromString(value);
        else
            return LongBits.fromNumber(parseInt(value, 10));
    }
    return value.low || value.high ? new LongBits(value.low >>> 0, value.high >>> 0) : zero;
};

/**
 * Converts this long bits to a possibly unsafe JavaScript number.
 * @param {boolean} [unsigned=false] Whether unsigned or not
 * @returns {number} Possibly unsafe number
 */
LongBits.prototype.toNumber = function toNumber(unsigned) {
    if (!unsigned && this.hi >>> 31) {
        var lo = ~this.lo + 1 >>> 0,
            hi = ~this.hi     >>> 0;
        if (!lo)
            hi = hi + 1 >>> 0;
        return -(lo + hi * 4294967296);
    }
    return this.lo + this.hi * 4294967296;
};

/**
 * Converts this long bits to a long.
 * @param {boolean} [unsigned=false] Whether unsigned or not
 * @returns {Long} Long
 */
LongBits.prototype.toLong = function toLong(unsigned) {
    return util.Long
        ? new util.Long(this.lo | 0, this.hi | 0, Boolean(unsigned))
        /* istanbul ignore next */
        : { low: this.lo | 0, high: this.hi | 0, unsigned: Boolean(unsigned) };
};

var charCodeAt = String.prototype.charCodeAt;

/**
 * Constructs new long bits from the specified 8 characters long hash.
 * @param {string} hash Hash
 * @returns {util.LongBits} Bits
 */
LongBits.fromHash = function fromHash(hash) {
    if (hash === zeroHash)
        return zero;
    return new LongBits(
        ( charCodeAt.call(hash, 0)
        | charCodeAt.call(hash, 1) << 8
        | charCodeAt.call(hash, 2) << 16
        | charCodeAt.call(hash, 3) << 24) >>> 0
    ,
        ( charCodeAt.call(hash, 4)
        | charCodeAt.call(hash, 5) << 8
        | charCodeAt.call(hash, 6) << 16
        | charCodeAt.call(hash, 7) << 24) >>> 0
    );
};

/**
 * Converts this long bits to a 8 characters long hash.
 * @returns {string} Hash
 */
LongBits.prototype.toHash = function toHash() {
    return String.fromCharCode(
        this.lo        & 255,
        this.lo >>> 8  & 255,
        this.lo >>> 16 & 255,
        this.lo >>> 24      ,
        this.hi        & 255,
        this.hi >>> 8  & 255,
        this.hi >>> 16 & 255,
        this.hi >>> 24
    );
};

/**
 * Zig-zag encodes this long bits.
 * @returns {util.LongBits} `this`
 */
LongBits.prototype.zzEncode = function zzEncode() {
    var mask =   this.hi >> 31;
    this.hi  = ((this.hi << 1 | this.lo >>> 31) ^ mask) >>> 0;
    this.lo  = ( this.lo << 1                   ^ mask) >>> 0;
    return this;
};

/**
 * Zig-zag decodes this long bits.
 * @returns {util.LongBits} `this`
 */
LongBits.prototype.zzDecode = function zzDecode() {
    var mask = -(this.lo & 1);
    this.lo  = ((this.lo >>> 1 | this.hi << 31) ^ mask) >>> 0;
    this.hi  = ( this.hi >>> 1                  ^ mask) >>> 0;
    return this;
};

/**
 * Calculates the length of this longbits when encoded as a varint.
 * @returns {number} Length
 */
LongBits.prototype.length = function length() {
    var part0 =  this.lo,
        part1 = (this.lo >>> 28 | this.hi << 4) >>> 0,
        part2 =  this.hi >>> 24;
    return part2 === 0
         ? part1 === 0
           ? part0 < 16384
             ? part0 < 128 ? 1 : 2
             : part0 < 2097152 ? 3 : 4
           : part1 < 16384
             ? part1 < 128 ? 5 : 6
             : part1 < 2097152 ? 7 : 8
         : part2 < 128 ? 9 : 10;
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = BufferWriter;

// extends Writer
var Writer = __webpack_require__(12);
(BufferWriter.prototype = Object.create(Writer.prototype)).constructor = BufferWriter;

var util = __webpack_require__(2);

var Buffer = util.Buffer;

/**
 * Constructs a new buffer writer instance.
 * @classdesc Wire format writer using node buffers.
 * @extends Writer
 * @constructor
 */
function BufferWriter() {
    Writer.call(this);
}

/**
 * Allocates a buffer of the specified size.
 * @param {number} size Buffer size
 * @returns {Buffer} Buffer
 */
BufferWriter.alloc = function alloc_buffer(size) {
    return (BufferWriter.alloc = util._Buffer_allocUnsafe)(size);
};

var writeBytesBuffer = Buffer && Buffer.prototype instanceof Uint8Array && Buffer.prototype.set.name === "set"
    ? function writeBytesBuffer_set(val, buf, pos) {
        buf.set(val, pos); // faster than copy (requires node >= 4 where Buffers extend Uint8Array and set is properly inherited)
                           // also works for plain array values
    }
    /* istanbul ignore next */
    : function writeBytesBuffer_copy(val, buf, pos) {
        if (val.copy) // Buffer values
            val.copy(buf, pos, 0, val.length);
        else for (var i = 0; i < val.length;) // plain array values
            buf[pos++] = val[i++];
    };

/**
 * @override
 */
BufferWriter.prototype.bytes = function write_bytes_buffer(value) {
    if (util.isString(value))
        value = util._Buffer_from(value, "base64");
    var len = value.length >>> 0;
    this.uint32(len);
    if (len)
        this.push(writeBytesBuffer, len, value);
    return this;
};

function writeStringBuffer(val, buf, pos) {
    if (val.length < 40) // plain js is faster for short strings (probably due to redundant assertions)
        util.utf8.write(val, buf, pos);
    else
        buf.utf8Write(val, pos);
}

/**
 * @override
 */
BufferWriter.prototype.string = function write_string_buffer(value) {
    var len = Buffer.byteLength(value);
    this.uint32(len);
    if (len)
        this.push(writeStringBuffer, len, value);
    return this;
};


/**
 * Finishes the write operation.
 * @name BufferWriter#finish
 * @function
 * @returns {Buffer} Finished buffer
 */


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// The MIT License (MIT)
//
// Copyright (c) 2016 Zhipeng Jia
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.



var WORD_MASK = [0, 0xff, 0xffff, 0xffffff, 0xffffffff]

function copyBytes (from_array, from_pos, to_array, to_pos, length) {
  var i
  for (i = 0; i < length; i++) {
    to_array[to_pos + i] = from_array[from_pos + i]
  }
}

function selfCopyBytes (array, pos, offset, length) {
  var i
  for (i = 0; i < length; i++) {
    array[pos + i] = array[pos - offset + i]
  }
}

function SnappyDecompressor (compressed) {
  this.array = compressed
  this.pos = 0
}

SnappyDecompressor.prototype.readUncompressedLength = function () {
  var result = 0
  var shift = 0
  var c, val
  while (shift < 32 && this.pos < this.array.length) {
    c = this.array[this.pos]
    this.pos += 1
    val = c & 0x7f
    if (((val << shift) >>> shift) !== val) {
      return -1
    }
    result |= val << shift
    if (c < 128) {
      return result
    }
    shift += 7
  }
  return -1
}

SnappyDecompressor.prototype.uncompressToBuffer = function (out_buffer) {
  var array = this.array
  var array_length = array.length
  var pos = this.pos
  var out_pos = 0

  var c, len, small_len
  var offset

  while (pos < array.length) {
    c = array[pos]
    pos += 1
    if ((c & 0x3) === 0) {
      // Literal
      len = (c >>> 2) + 1
      if (len > 60) {
        if (pos + 3 >= array_length) {
          return false
        }
        small_len = len - 60
        len = array[pos] + (array[pos + 1] << 8) + (array[pos + 2] << 16) + (array[pos + 3] << 24)
        len = (len & WORD_MASK[small_len]) + 1
        pos += small_len
      }
      if (pos + len > array_length) {
        return false
      }
      copyBytes(array, pos, out_buffer, out_pos, len)
      pos += len
      out_pos += len
    } else {
      switch (c & 0x3) {
        case 1:
          len = ((c >>> 2) & 0x7) + 4
          offset = array[pos] + ((c >>> 5) << 8)
          pos += 1
          break
        case 2:
          if (pos + 1 >= array_length) {
            return false
          }
          len = (c >>> 2) + 1
          offset = array[pos] + (array[pos + 1] << 8)
          pos += 2
          break
        case 3:
          if (pos + 3 >= array_length) {
            return false
          }
          len = (c >>> 2) + 1
          offset = array[pos] + (array[pos + 1] << 8) + (array[pos + 2] << 16) + (array[pos + 3] << 24)
          pos += 4
          break
        default:
          break
      }
      if (offset === 0 || offset > out_pos) {
        return false
      }
      selfCopyBytes(out_buffer, out_pos, offset, len)
      out_pos += len
    }
  }
  return true
}

exports.SnappyDecompressor = SnappyDecompressor


/***/ }),
/* 48 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })
/******/ ]);
});
//# sourceMappingURL=dzhyun-dataparser.js.map