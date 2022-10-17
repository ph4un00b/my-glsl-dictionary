(function (f) {
  if (typeof exports === "object" && typeof module !== "undefined") {
    module.exports = f();
  } else if (typeof define === "function" && define.amd) {
    define([], f);
  } else {
    var g;
    if (typeof window !== "undefined") {
      g = window;
    } else if (typeof global !== "undefined") {
      g = global;
    } else if (typeof self !== "undefined") {
      g = self;
    } else {
      g = this;
    }
    g.glslGallery = f();
  }
})(function () {
  var define, module, exports;
  return (function e(t, n, r) {
    function s(o, u) {
      if (!n[o]) {
        if (!t[o]) {
          var a = typeof require == "function" && require;
          if (!u && a) return a(o, !0);
          if (i) return i(o, !0);
          var f = new Error("Cannot find module '" + o + "'");
          throw ((f.code = "MODULE_NOT_FOUND"), f);
        }
        var l = (n[o] = { exports: {} });
        t[o][0].call(
          l.exports,
          function (e) {
            var n = t[o][1][e];
            return s(n ? n : e);
          },
          l,
          l.exports,
          e,
          t,
          n,
          r
        );
      }
      return n[o].exports;
    }
    var i = typeof require == "function" && require;
    for (var o = 0; o < r.length; o++) s(r[o]);
    return s;
  })(
    {
      1: [
        function (_dereq_, module, exports) {
          module.exports = {
            default: _dereq_("core-js/library/fn/object/define-property"),
            __esModule: true
          };
        },
        { "core-js/library/fn/object/define-property": 5 }
      ],
      2: [
        function (_dereq_, module, exports) {
          "use strict";

          exports["default"] = function (instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          };

          exports.__esModule = true;
        },
        {}
      ],
      3: [
        function (_dereq_, module, exports) {
          "use strict";

          var _Object$defineProperty = _dereq_(
            "babel-runtime/core-js/object/define-property"
          )["default"];

          exports["default"] = (function () {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;

                _Object$defineProperty(target, descriptor.key, descriptor);
              }
            }

            return function (Constructor, protoProps, staticProps) {
              if (protoProps)
                defineProperties(Constructor.prototype, protoProps);
              if (staticProps) defineProperties(Constructor, staticProps);
              return Constructor;
            };
          })();

          exports.__esModule = true;
        },
        { "babel-runtime/core-js/object/define-property": 1 }
      ],
      4: [
        function (_dereq_, module, exports) {
          "use strict";

          exports["default"] = function (obj) {
            return obj && obj.__esModule
              ? obj
              : {
                  default: obj
                };
          };

          exports.__esModule = true;
        },
        {}
      ],
      5: [
        function (_dereq_, module, exports) {
          var $ = _dereq_("../../modules/$");
          module.exports = function defineProperty(it, key, desc) {
            return $.setDesc(it, key, desc);
          };
        },
        { "../../modules/$": 6 }
      ],
      6: [
        function (_dereq_, module, exports) {
          var $Object = Object;
          module.exports = {
            create: $Object.create,
            getProto: $Object.getPrototypeOf,
            isEnum: {}.propertyIsEnumerable,
            getDesc: $Object.getOwnPropertyDescriptor,
            setDesc: $Object.defineProperty,
            setDescs: $Object.defineProperties,
            getKeys: $Object.keys,
            getNames: $Object.getOwnPropertyNames,
            getSymbols: $Object.getOwnPropertySymbols,
            each: [].forEach
          };
        },
        {}
      ],
      7: [
        function (_dereq_, module, exports) {
          (function (global) {
            var win;

            if (typeof window !== "undefined") {
              win = window;
            } else if (typeof global !== "undefined") {
              win = global;
            } else if (typeof self !== "undefined") {
              win = self;
            } else {
              win = {};
            }

            module.exports = win;
          }.call(
            this,
            typeof global !== "undefined"
              ? global
              : typeof self !== "undefined"
              ? self
              : typeof window !== "undefined"
              ? window
              : {}
          ));
        },
        {}
      ],
      8: [
        function (_dereq_, module, exports) {
          (function (global) {
            "use strict";

            var commonjsGlobal =
              typeof window !== "undefined"
                ? window
                : typeof global !== "undefined"
                ? global
                : typeof self !== "undefined"
                ? self
                : {};

            function createCommonjsModule(fn, module) {
              return (
                (module = { exports: {} }),
                fn(module, module.exports),
                module.exports
              );
            }

            var win;

            if (typeof window !== "undefined") {
              win = window;
            } else if (typeof commonjsGlobal !== "undefined") {
              win = commonjsGlobal;
            } else if (typeof self !== "undefined") {
              win = self;
            } else {
              win = {};
            }

            var window_1 = win;

            var isFunction_1 = isFunction;

            var toString = Object.prototype.toString;

            function isFunction(fn) {
              var string = toString.call(fn);
              return (
                string === "[object Function]" ||
                (typeof fn === "function" && string !== "[object RegExp]") ||
                (typeof window !== "undefined" &&
                  // IE8 and below
                  (fn === window.setTimeout ||
                    fn === window.alert ||
                    fn === window.confirm ||
                    fn === window.prompt))
              );
            }

            var trim_1 = createCommonjsModule(function (module, exports) {
              exports = module.exports = trim;

              function trim(str) {
                return str.replace(/^\s*|\s*$/g, "");
              }

              exports.left = function (str) {
                return str.replace(/^\s*/, "");
              };

              exports.right = function (str) {
                return str.replace(/\s*$/, "");
              };
            });

            var forEach_1 = forEach;

            var toString$1 = Object.prototype.toString;
            var hasOwnProperty = Object.prototype.hasOwnProperty;

            function forEach(list, iterator, context) {
              if (!isFunction_1(iterator)) {
                throw new TypeError("iterator must be a function");
              }

              if (arguments.length < 3) {
                context = this;
              }

              if (toString$1.call(list) === "[object Array]")
                forEachArray$1(list, iterator, context);
              else if (typeof list === "string")
                forEachString(list, iterator, context);
              else forEachObject(list, iterator, context);
            }

            function forEachArray$1(array, iterator, context) {
              for (var i = 0, len = array.length; i < len; i++) {
                if (hasOwnProperty.call(array, i)) {
                  iterator.call(context, array[i], i, array);
                }
              }
            }

            function forEachString(string, iterator, context) {
              for (var i = 0, len = string.length; i < len; i++) {
                // no such thing as a sparse string.
                iterator.call(context, string.charAt(i), i, string);
              }
            }

            function forEachObject(object, iterator, context) {
              for (var k in object) {
                if (hasOwnProperty.call(object, k)) {
                  iterator.call(context, object[k], k, object);
                }
              }
            }

            var isArray = function (arg) {
              return Object.prototype.toString.call(arg) === "[object Array]";
            };

            var parseHeaders = function (headers) {
              if (!headers) return {};

              var result = {};

              forEach_1(trim_1(headers).split("\n"), function (row) {
                var index = row.indexOf(":"),
                  key = trim_1(row.slice(0, index)).toLowerCase(),
                  value = trim_1(row.slice(index + 1));

                if (typeof result[key] === "undefined") {
                  result[key] = value;
                } else if (isArray(result[key])) {
                  result[key].push(value);
                } else {
                  result[key] = [result[key], value];
                }
              });

              return result;
            };

            var immutable = extend;

            var hasOwnProperty$1 = Object.prototype.hasOwnProperty;

            function extend() {
              var target = {};

              for (var i = 0; i < arguments.length; i++) {
                var source = arguments[i];

                for (var key in source) {
                  if (hasOwnProperty$1.call(source, key)) {
                    target[key] = source[key];
                  }
                }
              }

              return target;
            }

            ("use strict");

            var xhr = createXHR;
            // Allow use of default import syntax in TypeScript
            var default_1 = createXHR;
            createXHR.XMLHttpRequest = window_1.XMLHttpRequest || noop;
            createXHR.XDomainRequest =
              "withCredentials" in new createXHR.XMLHttpRequest()
                ? createXHR.XMLHttpRequest
                : window_1.XDomainRequest;

            forEachArray(
              ["get", "put", "post", "patch", "head", "delete"],
              function (method) {
                createXHR[method === "delete" ? "del" : method] = function (
                  uri,
                  options,
                  callback
                ) {
                  options = initParams(uri, options, callback);
                  options.method = method.toUpperCase();
                  return _createXHR(options);
                };
              }
            );

            function forEachArray(array, iterator) {
              for (var i = 0; i < array.length; i++) {
                iterator(array[i]);
              }
            }

            function isEmpty(obj) {
              for (var i in obj) {
                if (obj.hasOwnProperty(i)) return false;
              }
              return true;
            }

            function initParams(uri, options, callback) {
              var params = uri;

              if (isFunction_1(options)) {
                callback = options;
                if (typeof uri === "string") {
                  params = { uri: uri };
                }
              } else {
                params = immutable(options, { uri: uri });
              }

              params.callback = callback;
              return params;
            }

            function createXHR(uri, options, callback) {
              options = initParams(uri, options, callback);
              return _createXHR(options);
            }

            function _createXHR(options) {
              if (typeof options.callback === "undefined") {
                throw new Error("callback argument missing");
              }

              var called = false;
              var callback = function cbOnce(err, response, body) {
                if (!called) {
                  called = true;
                  options.callback(err, response, body);
                }
              };

              function readystatechange() {
                if (xhr.readyState === 4) {
                  setTimeout(loadFunc, 0);
                }
              }

              function getBody() {
                // Chrome with requestType=blob throws errors arround when even testing access to responseText
                var body = undefined;

                if (xhr.response) {
                  body = xhr.response;
                } else {
                  body = xhr.responseText || getXml(xhr);
                }

                if (isJson) {
                  try {
                    body = JSON.parse(body);
                  } catch (e) {}
                }

                return body;
              }

              function errorFunc(evt) {
                clearTimeout(timeoutTimer);
                if (!(evt instanceof Error)) {
                  evt = new Error("" + (evt || "Unknown XMLHttpRequest Error"));
                }
                evt.statusCode = 0;
                return callback(evt, failureResponse);
              }

              // will load the data & process the response in a special response object
              function loadFunc() {
                if (aborted) return;
                var status;
                clearTimeout(timeoutTimer);
                if (options.useXDR && xhr.status === undefined) {
                  //IE8 CORS GET successful response doesn't have a status field, but body is fine
                  status = 200;
                } else {
                  status = xhr.status === 1223 ? 204 : xhr.status;
                }
                var response = failureResponse;
                var err = null;

                if (status !== 0) {
                  response = {
                    body: getBody(),
                    statusCode: status,
                    method: method,
                    headers: {},
                    url: uri,
                    rawRequest: xhr
                  };
                  if (xhr.getAllResponseHeaders) {
                    //remember xhr can in fact be XDR for CORS in IE
                    response.headers = parseHeaders(
                      xhr.getAllResponseHeaders()
                    );
                  }
                } else {
                  err = new Error("Internal XMLHttpRequest Error");
                }
                return callback(err, response, response.body);
              }

              var xhr = options.xhr || null;

              if (!xhr) {
                if (options.cors || options.useXDR) {
                  xhr = new createXHR.XDomainRequest();
                } else {
                  xhr = new createXHR.XMLHttpRequest();
                }
              }

              var key;
              var aborted;
              var uri = (xhr.url = options.uri || options.url);
              var method = (xhr.method = options.method || "GET");
              var body = options.body || options.data;
              var headers = (xhr.headers = options.headers || {});
              var sync = !!options.sync;
              var isJson = false;
              var timeoutTimer;
              var failureResponse = {
                body: undefined,
                headers: {},
                statusCode: 0,
                method: method,
                url: uri,
                rawRequest: xhr
              };

              if ("json" in options && options.json !== false) {
                isJson = true;
                headers["accept"] ||
                  headers["Accept"] ||
                  (headers["Accept"] = "application/json"); //Don't override existing accept header declared by user
                if (method !== "GET" && method !== "HEAD") {
                  headers["content-type"] ||
                    headers["Content-Type"] ||
                    (headers["Content-Type"] = "application/json"); //Don't override existing accept header declared by user
                  body = JSON.stringify(
                    options.json === true ? body : options.json
                  );
                }
              }

              xhr.onreadystatechange = readystatechange;
              xhr.onload = loadFunc;
              xhr.onerror = errorFunc;
              // IE9 must have onprogress be set to a unique function.
              xhr.onprogress = function () {
                // IE must die
              };
              xhr.onabort = function () {
                aborted = true;
              };
              xhr.ontimeout = errorFunc;
              xhr.open(method, uri, !sync, options.username, options.password);
              //has to be after open
              if (!sync) {
                xhr.withCredentials = !!options.withCredentials;
              }
              // Cannot set timeout with sync request
              // not setting timeout on the xhr object, because of old webkits etc. not handling that correctly
              // both npm's request and jquery 1.x use this kind of timeout, so this is being consistent
              if (!sync && options.timeout > 0) {
                timeoutTimer = setTimeout(function () {
                  if (aborted) return;
                  aborted = true; //IE9 may still call readystatechange
                  xhr.abort("timeout");
                  var e = new Error("XMLHttpRequest timeout");
                  e.code = "ETIMEDOUT";
                  errorFunc(e);
                }, options.timeout);
              }

              if (xhr.setRequestHeader) {
                for (key in headers) {
                  if (headers.hasOwnProperty(key)) {
                    xhr.setRequestHeader(key, headers[key]);
                  }
                }
              } else if (options.headers && !isEmpty(options.headers)) {
                throw new Error(
                  "Headers cannot be set on an XDomainRequest object"
                );
              }

              if ("responseType" in options) {
                xhr.responseType = options.responseType;
              }

              if (
                "beforeSend" in options &&
                typeof options.beforeSend === "function"
              ) {
                options.beforeSend(xhr);
              }

              // Microsoft Edge browser sends "undefined" when send is called with undefined value.
              // XMLHttpRequest spec says to pass null as body to indicate no body
              // See https://github.com/naugtur/xhr/issues/100.
              xhr.send(body || null);

              return xhr;
            }

            function getXml(xhr) {
              // xhr.responseXML will throw Exception "InvalidStateError" or "DOMException"
              // See https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/responseXML.
              try {
                if (xhr.responseType === "document") {
                  return xhr.responseXML;
                }
                var firefoxBugTakenEffect =
                  xhr.responseXML &&
                  xhr.responseXML.documentElement.nodeName === "parsererror";
                if (xhr.responseType === "" && !firefoxBugTakenEffect) {
                  return xhr.responseXML;
                }
              } catch (e) {}

              return null;
            }

            function noop() {}

            xhr.default = default_1;

            var _typeof =
              typeof Symbol === "function" &&
              typeof Symbol.iterator === "symbol"
                ? function (obj) {
                    return typeof obj;
                  }
                : function (obj) {
                    return obj &&
                      typeof Symbol === "function" &&
                      obj.constructor === Symbol &&
                      obj !== Symbol.prototype
                      ? "symbol"
                      : typeof obj;
                  };

            var asyncGenerator = (function () {
              function AwaitValue(value) {
                this.value = value;
              }

              function AsyncGenerator(gen) {
                var front, back;

                function send(key, arg) {
                  return new Promise(function (resolve, reject) {
                    var request = {
                      key: key,
                      arg: arg,
                      resolve: resolve,
                      reject: reject,
                      next: null
                    };

                    if (back) {
                      back = back.next = request;
                    } else {
                      front = back = request;
                      resume(key, arg);
                    }
                  });
                }

                function resume(key, arg) {
                  try {
                    var result = gen[key](arg);
                    var value = result.value;

                    if (value instanceof AwaitValue) {
                      Promise.resolve(value.value).then(
                        function (arg) {
                          resume("next", arg);
                        },
                        function (arg) {
                          resume("throw", arg);
                        }
                      );
                    } else {
                      settle(result.done ? "return" : "normal", result.value);
                    }
                  } catch (err) {
                    settle("throw", err);
                  }
                }

                function settle(type, value) {
                  switch (type) {
                    case "return":
                      front.resolve({
                        value: value,
                        done: true
                      });
                      break;

                    case "throw":
                      front.reject(value);
                      break;

                    default:
                      front.resolve({
                        value: value,
                        done: false
                      });
                      break;
                  }

                  front = front.next;

                  if (front) {
                    resume(front.key, front.arg);
                  } else {
                    back = null;
                  }
                }

                this._invoke = send;

                if (typeof gen.return !== "function") {
                  this.return = undefined;
                }
              }

              if (typeof Symbol === "function" && Symbol.asyncIterator) {
                AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
                  return this;
                };
              }

              AsyncGenerator.prototype.next = function (arg) {
                return this._invoke("next", arg);
              };

              AsyncGenerator.prototype.throw = function (arg) {
                return this._invoke("throw", arg);
              };

              AsyncGenerator.prototype.return = function (arg) {
                return this._invoke("return", arg);
              };

              return {
                wrap: function (fn) {
                  return function () {
                    return new AsyncGenerator(fn.apply(this, arguments));
                  };
                },
                await: function (value) {
                  return new AwaitValue(value);
                }
              };
            })();

            var classCallCheck = function (instance, Constructor) {
              if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
              }
            };

            var createClass = (function () {
              function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                  var descriptor = props[i];
                  descriptor.enumerable = descriptor.enumerable || false;
                  descriptor.configurable = true;
                  if ("value" in descriptor) descriptor.writable = true;
                  Object.defineProperty(target, descriptor.key, descriptor);
                }
              }

              return function (Constructor, protoProps, staticProps) {
                if (protoProps)
                  defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
              };
            })();

            var toConsumableArray = function (arr) {
              if (Array.isArray(arr)) {
                for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++)
                  arr2[i] = arr[i];

                return arr2;
              } else {
                return Array.from(arr);
              }
            };

            var lastError = "";

            /**
             * Creates the HTLM for a failure message
             * @param {string} canvasContainerId id of container of th
             *        canvas.
             * @return {string} The html.
             */
            function makeFailHTML(msg) {
              return (
                '\n<table style="background-color: #8CE; width: 100%; height: 100%;"><tr>\n<td align="center">\n<div style="display: table-cell; vertical-align: middle;">\n<div style="">' +
                msg +
                "</div>\n</div>\n</td></tr></table>\n"
              );
            }

            /**
             * Message for getting a webgl browser
             * @type {string}
             */
            var GET_A_WEBGL_BROWSER =
              '\n\tThis page requires a browser that supports WebGL.<br/>\n\t<a href="http://get.webgl.org">Click here to upgrade your browser.</a>\n';

            /**
             * Message for need better hardware
             * @type {string}
             */
            var OTHER_PROBLEM =
              '\n\tIt does not appear your computer can support WebGL.<br/>\n\t<a href="http://get.webgl.org/troubleshooting/">Click here for more information.</a>\n';

            /**
             * Code to return in `onError` callback when the browser doesn't support webgl
             * @type {number}
             */
            var ERROR_BROWSER_SUPPORT = 1;

            /**
             * Code to return in `onError` callback there's any other problem related to webgl
             * @type {number}
             */
            var ERROR_OTHER = 2;

            /**
             * Creates a webgl context. If creation fails it will
             * change the contents of the container of the <canvas>
             * tag to an error message with the correct links for WebGL,
             * unless `onError` option is defined to a callback,
             * which allows for custom error handling..
             * @param {Element} canvas. The canvas element to create a
             *     context from.
             * @param {WebGLContextCreationAttributes} optAttribs Any
             *     creation attributes you want to pass in.
             * @return {WebGLRenderingContext} The created context.
             */
            function setupWebGL(canvas, optAttribs, onError) {
              function showLink(str) {
                var container = canvas.parentNode;
                if (container) {
                  container.innerHTML = makeFailHTML(str);
                }
              }

              function handleError(errorCode, msg) {
                if (typeof onError === "function") {
                  onError(errorCode);
                } else {
                  showLink(msg);
                }
              }

              if (!window.WebGLRenderingContext) {
                handleError(ERROR_BROWSER_SUPPORT, GET_A_WEBGL_BROWSER);
                return null;
              }

              var context = create3DContext(canvas, optAttribs);
              if (!context) {
                handleError(ERROR_OTHER, OTHER_PROBLEM);
              } else {
                context.getExtension("OES_standard_derivatives");
              }
              return context;
            }

            /**
             * Creates a webgl context.
             * @param {!Canvas} canvas The canvas tag to get context
             *     from. If one is not passed in one will be created.
             * @return {!WebGLContext} The created context.
             */
            function create3DContext(canvas, optAttribs) {
              var names = ["webgl", "experimental-webgl"];
              var context = null;
              for (var ii = 0; ii < names.length; ++ii) {
                try {
                  context = canvas.getContext(names[ii], optAttribs);
                } catch (e) {
                  if (context) {
                    break;
                  }
                }
              }
              return context;
            }

            /*
             *	Create a Vertex of a specific type (gl.VERTEX_SHADER/)
             */
            function createShader(main, source, type, offset) {
              var gl = main.gl;

              var shader = gl.createShader(type);
              gl.shaderSource(shader, source);
              gl.compileShader(shader);

              var compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);

              if (!compiled) {
                // Something went wrong during compilation; get the error
                lastError = gl.getShaderInfoLog(shader);
                console.error(
                  "*** Error compiling shader " + shader + ":" + lastError
                );
                main.trigger("error", {
                  shader: shader,
                  source: source,
                  type: type,
                  error: lastError,
                  offset: offset || 0
                });
                gl.deleteShader(shader);
                return null;
              }

              return shader;
            }

            /**
             * Loads a shader.
             * @param {!WebGLContext} gl The WebGLContext to use.
             * @param {string} shaderSource The shader source.
             * @param {number} shaderType The type of shader.
             * @param {function(string): void) opt_errorCallback callback for errors.
             * @return {!WebGLShader} The created shader.
             */
            function createProgram(main, shaders, optAttribs, optLocations) {
              var gl = main.gl;

              var program = gl.createProgram();
              for (var ii = 0; ii < shaders.length; ++ii) {
                gl.attachShader(program, shaders[ii]);
              }
              if (optAttribs) {
                for (var _ii = 0; _ii < optAttribs.length; ++_ii) {
                  gl.bindAttribLocation(
                    program,
                    optLocations ? optLocations[_ii] : _ii,
                    optAttribs[_ii]
                  );
                }
              }
              gl.linkProgram(program);

              // Check the link status
              var linked = gl.getProgramParameter(program, gl.LINK_STATUS);
              if (!linked) {
                // something went wrong with the link
                lastError = gl.getProgramInfoLog(program);
                console.log("Error in program linking:" + lastError);
                gl.deleteProgram(program);
                return null;
              }
              return program;
            }

            // By Brett Camber on
            // https://github.com/tangrams/tangram/blob/master/src/gl/glsl.js
            function parseUniforms(uniforms) {
              var prefix =
                arguments.length > 1 && arguments[1] !== undefined
                  ? arguments[1]
                  : null;

              var parsed = [];

              for (var name in uniforms) {
                var uniform = uniforms[name];
                var u = void 0;

                if (prefix) {
                  name = prefix + "." + name;
                }

                // Single float
                if (typeof uniform === "number") {
                  parsed.push({
                    type: "float",
                    method: "1f",
                    name: name,
                    value: uniform
                  });
                }
                // Array: vector, array of floats, array of textures, or array of structs
                else if (Array.isArray(uniform)) {
                  // Numeric values
                  if (typeof uniform[0] === "number") {
                    // float vectors (vec2, vec3, vec4)
                    if (uniform.length === 1) {
                      parsed.push({
                        type: "float",
                        method: "1f",
                        name: name,
                        value: uniform
                      });
                    }
                    // float vectors (vec2, vec3, vec4)
                    else if (uniform.length >= 2 && uniform.length <= 4) {
                      parsed.push({
                        type: "vec" + uniform.length,
                        method: uniform.length + "fv",
                        name: name,
                        value: uniform
                      });
                    }
                    // float array
                    else if (uniform.length > 4) {
                      parsed.push({
                        type: "float[]",
                        method: "1fv",
                        name: name + "[0]",
                        value: uniform
                      });
                    }
                    // TODO: assume matrix for (typeof == Float32Array && length == 16)?
                  }
                  // Array of textures
                  else if (typeof uniform[0] === "string") {
                    parsed.push({
                      type: "sampler2D",
                      method: "1i",
                      name: name,
                      value: uniform
                    });
                  }
                  // Array of arrays - but only arrays of vectors are allowed in this case
                  else if (
                    Array.isArray(uniform[0]) &&
                    typeof uniform[0][0] === "number"
                  ) {
                    // float vectors (vec2, vec3, vec4)
                    if (uniform[0].length >= 2 && uniform[0].length <= 4) {
                      // Set each vector in the array
                      for (u = 0; u < uniform.length; u++) {
                        parsed.push({
                          type: "vec" + uniform[0].length,
                          method: uniform[u].length + "fv",
                          name: name + "[" + u + "]",
                          value: uniform[u]
                        });
                      }
                    }
                    // else error?
                  }
                  // Array of structures
                  else if (_typeof(uniform[0]) === "object") {
                    for (u = 0; u < uniform.length; u++) {
                      // Set each struct in the array
                      parsed.push.apply(
                        parsed,
                        toConsumableArray(
                          parseUniforms(uniform[u], name + "[" + u + "]")
                        )
                      );
                    }
                  }
                }
                // Boolean
                else if (typeof uniform === "boolean") {
                  parsed.push({
                    type: "bool",
                    method: "1i",
                    name: name,
                    value: uniform
                  });
                }
                // Texture
                else if (typeof uniform === "string") {
                  parsed.push({
                    type: "sampler2D",
                    method: "1i",
                    name: name,
                    value: uniform
                  });
                }
                // Structure
                else if (
                  (typeof uniform === "undefined"
                    ? "undefined"
                    : _typeof(uniform)) === "object"
                ) {
                  // Set each field in the struct
                  parsed.push.apply(
                    parsed,
                    toConsumableArray(parseUniforms(uniform, name))
                  );
                }
                // TODO: support other non-float types? (int, etc.)
              }
              return parsed;
            }

            function isCanvasVisible(canvas) {
              return (
                canvas.getBoundingClientRect().top + canvas.height > 0 &&
                canvas.getBoundingClientRect().top <
                  (window.innerHeight || document.documentElement.clientHeight)
              );
            }

            function isPowerOf2(value) {
              return (value & (value - 1)) === 0;
            }

            function isSafari() {
              return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
            }

            function isDiff(a, b) {
              if (a && b) {
                return a.toString() !== b.toString();
              }
              return false;
            }

            function subscribeMixin$1(target) {
              var listeners = new Set();

              return Object.assign(target, {
                on: function on(type, f) {
                  var listener = {};
                  listener[type] = f;
                  listeners.add(listener);
                },
                off: function off(type, f) {
                  if (f) {
                    var listener = {};
                    listener[type] = f;
                    listeners.delete(listener);
                  } else {
                    var _iteratorNormalCompletion = true;
                    var _didIteratorError = false;
                    var _iteratorError = undefined;

                    try {
                      for (
                        var _iterator = listeners[Symbol.iterator](), _step;
                        !(_iteratorNormalCompletion = (_step = _iterator.next())
                          .done);
                        _iteratorNormalCompletion = true
                      ) {
                        var item = _step.value;
                        var _iteratorNormalCompletion2 = true;
                        var _didIteratorError2 = false;
                        var _iteratorError2 = undefined;

                        try {
                          for (
                            var _iterator2 = Object.keys(item)[
                                Symbol.iterator
                              ](),
                              _step2;
                            !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next())
                              .done);
                            _iteratorNormalCompletion2 = true
                          ) {
                            var key = _step2.value;

                            if (key === type) {
                              listeners.delete(item);
                              return;
                            }
                          }
                        } catch (err) {
                          _didIteratorError2 = true;
                          _iteratorError2 = err;
                        } finally {
                          try {
                            if (
                              !_iteratorNormalCompletion2 &&
                              _iterator2.return
                            ) {
                              _iterator2.return();
                            }
                          } finally {
                            if (_didIteratorError2) {
                              throw _iteratorError2;
                            }
                          }
                        }
                      }
                    } catch (err) {
                      _didIteratorError = true;
                      _iteratorError = err;
                    } finally {
                      try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                          _iterator.return();
                        }
                      } finally {
                        if (_didIteratorError) {
                          throw _iteratorError;
                        }
                      }
                    }
                  }
                },
                listSubscriptions: function listSubscriptions() {
                  var _iteratorNormalCompletion3 = true;
                  var _didIteratorError3 = false;
                  var _iteratorError3 = undefined;

                  try {
                    for (
                      var _iterator3 = listeners[Symbol.iterator](), _step3;
                      !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next())
                        .done);
                      _iteratorNormalCompletion3 = true
                    ) {
                      var item = _step3.value;

                      console.log(item);
                    }
                  } catch (err) {
                    _didIteratorError3 = true;
                    _iteratorError3 = err;
                  } finally {
                    try {
                      if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                      }
                    } finally {
                      if (_didIteratorError3) {
                        throw _iteratorError3;
                      }
                    }
                  }
                },
                subscribe: function subscribe(listener) {
                  listeners.add(listener);
                },
                unsubscribe: function unsubscribe(listener) {
                  listeners.delete(listener);
                },
                unsubscribeAll: function unsubscribeAll() {
                  listeners.clear();
                },
                trigger: function trigger(event) {
                  for (
                    var _len = arguments.length,
                      data = Array(_len > 1 ? _len - 1 : 0),
                      _key = 1;
                    _key < _len;
                    _key++
                  ) {
                    data[_key - 1] = arguments[_key];
                  }

                  var _iteratorNormalCompletion4 = true;
                  var _didIteratorError4 = false;
                  var _iteratorError4 = undefined;

                  try {
                    for (
                      var _iterator4 = listeners[Symbol.iterator](), _step4;
                      !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next())
                        .done);
                      _iteratorNormalCompletion4 = true
                    ) {
                      var listener = _step4.value;

                      if (typeof listener[event] === "function") {
                        listener[event].apply(
                          listener,
                          toConsumableArray(data)
                        );
                      }
                    }
                  } catch (err) {
                    _didIteratorError4 = true;
                    _iteratorError4 = err;
                  } finally {
                    try {
                      if (!_iteratorNormalCompletion4 && _iterator4.return) {
                        _iterator4.return();
                      }
                    } finally {
                      if (_didIteratorError4) {
                        throw _iteratorError4;
                      }
                    }
                  }
                }
              });
            }

            // Texture management
            var Texture = (function () {
              function Texture(gl, name) {
                var options =
                  arguments.length > 2 && arguments[2] !== undefined
                    ? arguments[2]
                    : {};
                classCallCheck(this, Texture);

                subscribeMixin$1(this);

                this.gl = gl;
                this.texture = gl.createTexture();
                if (this.texture) {
                  this.valid = true;
                }
                this.bind();

                this.name = name;
                this.source = null;
                this.sourceType = null;
                this.loading = null; // a Promise object to track the loading state of this texture

                // Default to a 1-pixel black texture so we can safely render while we wait for an image to load
                // See: http://stackoverflow.com/questions/19722247/webgl-wait-for-texture-to-load
                this.setData(1, 1, new Uint8Array([0, 0, 0, 255]), {
                  filtering: "linear"
                });
                this.setFiltering(options.filtering);

                this.load(options);
              }

              // Destroy a single texture instance

              createClass(Texture, [
                {
                  key: "destroy",
                  value: function destroy() {
                    if (!this.valid) {
                      return;
                    }
                    this.gl.deleteTexture(this.texture);
                    this.texture = null;
                    delete this.data;
                    this.data = null;
                    this.valid = false;
                  }
                },
                {
                  key: "bind",
                  value: function bind(unit) {
                    if (!this.valid) {
                      return;
                    }
                    if (typeof unit === "number") {
                      if (Texture.activeUnit !== unit) {
                        this.gl.activeTexture(this.gl.TEXTURE0 + unit);
                        Texture.activeUnit = unit;
                      }
                    }
                    if (Texture.activeTexture !== this.texture) {
                      this.gl.bindTexture(this.gl.TEXTURE_2D, this.texture);
                      Texture.activeTexture = this.texture;
                    }
                  }
                },
                {
                  key: "load",
                  value: function load() {
                    var options =
                      arguments.length > 0 && arguments[0] !== undefined
                        ? arguments[0]
                        : {};

                    this.loading = null;

                    if (typeof options.url === "string") {
                      if (this.url === undefined || options.url !== this.url) {
                        this.setUrl(options.url, options);
                      }
                    } else if (options.element) {
                      this.setElement(options.element, options);
                    } else if (
                      options.data &&
                      options.width &&
                      options.height
                    ) {
                      this.setData(
                        options.width,
                        options.height,
                        options.data,
                        options
                      );
                    }
                  }

                  // Sets texture from an url
                },
                {
                  key: "setUrl",
                  value: function setUrl(url) {
                    var _this = this;

                    var options =
                      arguments.length > 1 && arguments[1] !== undefined
                        ? arguments[1]
                        : {};

                    if (!this.valid) {
                      return;
                    }

                    this.url = url; // save URL reference (will be overwritten when element is loaded below)
                    this.source = this.url;
                    this.sourceType = "url";

                    this.loading = new Promise(function (resolve, reject) {
                      var ext = url.split(".").pop().toLowerCase();
                      var isVideo =
                        ext === "ogv" || ext === "webm" || ext === "mp4";

                      var element = undefined;
                      if (isVideo) {
                        element = document.createElement("video");
                        element.autoplay = true;
                        options.filtering = "nearest";
                        // element.preload = 'auto';
                        // element.style.display = 'none';
                        // document.body.appendChild(element);
                      } else {
                        element = new Image();
                      }

                      element.onload = function () {
                        try {
                          _this.setElement(element, options);
                        } catch (e) {
                          console.log(
                            "Texture '" +
                              _this.name +
                              "': failed to load url: '" +
                              _this.source +
                              "'",
                            e,
                            options
                          );
                        }
                        resolve(_this);
                      };
                      element.onerror = function (e) {
                        // Warn and resolve on error
                        console.log(
                          "Texture '" +
                            _this.name +
                            "': failed to load url: '" +
                            _this.source +
                            "'",
                          e,
                          options
                        );
                        resolve(_this);
                      };

                      // Safari has a bug loading data-URL elements with CORS enabled, so it must be disabled in that case
                      // https://bugs.webkit.org/show_bug.cgi?id=123978
                      if (
                        !(isSafari() && _this.source.slice(0, 5) === "data:")
                      ) {
                        element.crossOrigin = "anonymous";
                      }

                      element.src = _this.source;
                      if (isVideo) {
                        _this.setElement(element, options);
                      }
                    });
                    return this.loading;
                  }

                  // Sets texture to a raw image buffer
                },
                {
                  key: "setData",
                  value: function setData(width, height, data) {
                    var options =
                      arguments.length > 3 && arguments[3] !== undefined
                        ? arguments[3]
                        : {};

                    this.width = width;
                    this.height = height;

                    this.source = data;
                    this.sourceType = "data";

                    this.update(options);
                    this.setFiltering(options);

                    this.loading = Promise.resolve(this);
                    return this.loading;
                  }

                  // Sets the texture to track a element (canvas/image)
                },
                {
                  key: "setElement",
                  value: function setElement(element, options) {
                    var _this2 = this;

                    var el = element;

                    // a string element is interpeted as a CSS selector
                    if (typeof element === "string") {
                      element = document.querySelector(element);
                    }

                    if (
                      element instanceof HTMLCanvasElement ||
                      element instanceof HTMLImageElement ||
                      element instanceof HTMLVideoElement
                    ) {
                      this.source = element;
                      this.sourceType = "element";

                      if (element instanceof HTMLVideoElement) {
                        element.addEventListener(
                          "canplaythrough",
                          function () {
                            _this2.intervalID = setInterval(function () {
                              _this2.update(options);
                            }, 15);
                          },
                          true
                        );
                        element.addEventListener(
                          "ended",
                          function () {
                            element.currentTime = 0;
                            element.play();
                          },
                          true
                        );
                      } else {
                        this.update(options);
                      }
                      this.setFiltering(options);
                    } else {
                      var msg =
                        "the 'element' parameter (`element: " +
                        JSON.stringify(el) +
                        "`) must be a CSS ";
                      msg +=
                        "selector string, or a <canvas>, <image> or <video> object";
                      console.log(
                        "Texture '" + this.name + "': " + msg,
                        options
                      );
                    }

                    this.loading = Promise.resolve(this);
                    return this.loading;
                  }

                  // Uploads current image or buffer to the GPU (can be used to update animated textures on the fly)
                },
                {
                  key: "update",
                  value: function update() {
                    var options =
                      arguments.length > 0 && arguments[0] !== undefined
                        ? arguments[0]
                        : {};

                    if (!this.valid) {
                      return;
                    }

                    this.bind();
                    this.gl.pixelStorei(
                      this.gl.UNPACK_FLIP_Y_WEBGL,
                      options.UNPACK_FLIP_Y_WEBGL === false ? false : true
                    );
                    this.gl.pixelStorei(
                      this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
                      options.UNPACK_PREMULTIPLY_ALPHA_WEBGL || false
                    );

                    // Image or Canvas element
                    if (
                      this.sourceType === "element" &&
                      (this.source instanceof HTMLCanvasElement ||
                        this.source instanceof HTMLVideoElement ||
                        (this.source instanceof HTMLImageElement &&
                          this.source.complete))
                    ) {
                      if (this.source instanceof HTMLVideoElement) {
                        this.width = this.source.videoWidth;
                        this.height = this.source.videoHeight;
                      } else {
                        this.width = this.source.width;
                        this.height = this.source.height;
                      }
                      this.gl.texImage2D(
                        this.gl.TEXTURE_2D,
                        0,
                        this.gl.RGBA,
                        this.gl.RGBA,
                        this.gl.UNSIGNED_BYTE,
                        this.source
                      );
                    }
                    // Raw image buffer
                    else if (this.sourceType === "data") {
                      this.gl.texImage2D(
                        this.gl.TEXTURE_2D,
                        0,
                        this.gl.RGBA,
                        this.width,
                        this.height,
                        0,
                        this.gl.RGBA,
                        this.gl.UNSIGNED_BYTE,
                        this.source
                      );
                    }
                    this.trigger("loaded", this);
                  }

                  // Determines appropriate filtering mode
                },
                {
                  key: "setFiltering",
                  value: function setFiltering() {
                    var options =
                      arguments.length > 0 && arguments[0] !== undefined
                        ? arguments[0]
                        : {};

                    if (!this.valid) {
                      return;
                    }

                    this.powerOf2 =
                      isPowerOf2(this.width) && isPowerOf2(this.height);
                    var defualtFilter = this.powerOf2 ? "mipmap" : "linear";
                    this.filtering = options.filtering || defualtFilter;

                    var gl = this.gl;
                    this.bind();

                    // For power-of-2 textures, the following presets are available:
                    // mipmap: linear blend from nearest mip
                    // linear: linear blend from original image (no mips)
                    // nearest: nearest pixel from original image (no mips, 'blocky' look)
                    if (this.powerOf2) {
                      gl.texParameteri(
                        gl.TEXTURE_2D,
                        gl.TEXTURE_WRAP_S,
                        options.TEXTURE_WRAP_S ||
                          (options.repeat && gl.REPEAT) ||
                          gl.CLAMP_TO_EDGE
                      );
                      gl.texParameteri(
                        gl.TEXTURE_2D,
                        gl.TEXTURE_WRAP_T,
                        options.TEXTURE_WRAP_T ||
                          (options.repeat && gl.REPEAT) ||
                          gl.CLAMP_TO_EDGE
                      );

                      if (this.filtering === "mipmap") {
                        gl.texParameteri(
                          gl.TEXTURE_2D,
                          gl.TEXTURE_MIN_FILTER,
                          gl.LINEAR_MIPMAP_LINEAR
                        ); // TODO: use trilinear filtering by defualt instead?
                        gl.texParameteri(
                          gl.TEXTURE_2D,
                          gl.TEXTURE_MAG_FILTER,
                          gl.LINEAR
                        );
                        gl.generateMipmap(gl.TEXTURE_2D);
                      } else if (this.filtering === "linear") {
                        gl.texParameteri(
                          gl.TEXTURE_2D,
                          gl.TEXTURE_MIN_FILTER,
                          gl.LINEAR
                        );
                        gl.texParameteri(
                          gl.TEXTURE_2D,
                          gl.TEXTURE_MAG_FILTER,
                          gl.LINEAR
                        );
                      } else if (this.filtering === "nearest") {
                        gl.texParameteri(
                          gl.TEXTURE_2D,
                          gl.TEXTURE_MIN_FILTER,
                          gl.NEAREST
                        );
                        gl.texParameteri(
                          gl.TEXTURE_2D,
                          gl.TEXTURE_MAG_FILTER,
                          gl.NEAREST
                        );
                      }
                    } else {
                      // WebGL has strict requirements on non-power-of-2 textures:
                      // No mipmaps and must clamp to edge
                      gl.texParameteri(
                        gl.TEXTURE_2D,
                        gl.TEXTURE_WRAP_S,
                        gl.CLAMP_TO_EDGE
                      );
                      gl.texParameteri(
                        gl.TEXTURE_2D,
                        gl.TEXTURE_WRAP_T,
                        gl.CLAMP_TO_EDGE
                      );

                      if (this.filtering === "mipmap") {
                        this.filtering = "linear";
                      }

                      if (this.filtering === "nearest") {
                        gl.texParameteri(
                          gl.TEXTURE_2D,
                          gl.TEXTURE_MIN_FILTER,
                          gl.NEAREST
                        );
                        gl.texParameteri(
                          gl.TEXTURE_2D,
                          gl.TEXTURE_MAG_FILTER,
                          gl.NEAREST
                        );
                      } else {
                        // default to linear for non-power-of-2 textures
                        gl.texParameteri(
                          gl.TEXTURE_2D,
                          gl.TEXTURE_MIN_FILTER,
                          gl.LINEAR
                        );
                        gl.texParameteri(
                          gl.TEXTURE_2D,
                          gl.TEXTURE_MAG_FILTER,
                          gl.LINEAR
                        );
                      }
                    }
                  }
                }
              ]);
              return Texture;
            })();

            // Report max texture size for a GL context

            Texture.getMaxTextureSize = function (gl) {
              return gl.getParameter(gl.MAX_TEXTURE_SIZE);
            };

            // Global set of textures, by name
            Texture.activeUnit = -1;

            /*
  The MIT License (MIT)
  
  Copyright (c) 2015 Patricio Gonzalez Vivo ( http://www.patriciogonzalezvivo.com )
  
  Permission is hereby granted, free of charge, to any person obtaining a copy of
  this software and associated documentation files (the 'Software'), to deal in
  the Software without restriction, including without limitation the rights to
  use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
  the Software, and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:
  
  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
  FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
  COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
  IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
  */

            var GlslCanvas = (function () {
              function GlslCanvas(canvas, contextOptions, options) {
                var _this = this;

                classCallCheck(this, GlslCanvas);

                subscribeMixin$1(this);

                contextOptions = contextOptions || {};
                options = options || {};

                this.width = canvas.clientWidth;
                this.height = canvas.clientHeight;

                this.canvas = canvas;
                this.gl = undefined;
                this.program = undefined;
                this.textures = {};
                this.buffers = {};
                this.uniforms = {};
                this.vbo = {};
                this.isValid = false;

                this.BUFFER_COUNT = 0;
                this.TEXTURE_COUNT = 0;

                this.vertexString =
                  contextOptions.vertexString ||
                  "\n#ifdef GL_ES\nprecision mediump float;\n#endif\n\nattribute vec2 a_position;\nattribute vec2 a_texcoord;\n\nvarying vec2 v_texcoord;\n\nvoid main() {\n    gl_Position = vec4(a_position, 0.0, 1.0);\n    v_texcoord = a_texcoord;\n}\n";
                this.fragmentString =
                  contextOptions.fragmentString ||
                  "\n#ifdef GL_ES\nprecision mediump float;\n#endif\n\nvarying vec2 v_texcoord;\n\nvoid main(){\n    gl_FragColor = vec4(0.0);\n}\n";

                // GL Context
                var gl = setupWebGL(canvas, contextOptions, options.onError);
                if (!gl) {
                  return;
                }
                this.gl = gl;
                this.timeLoad = this.timePrev = performance.now();
                this.timeDelta = 0.0;
                this.forceRender = true;
                this.paused = false;
                this.realToCSSPixels = window.devicePixelRatio || 1;

                // Allow alpha
                canvas.style.backgroundColor =
                  contextOptions.backgroundColor || "rgba(1,1,1,0)";

                // Load shader
                if (canvas.hasAttribute("data-fragment")) {
                  this.fragmentString = canvas.getAttribute("data-fragment");
                } else if (canvas.hasAttribute("data-fragment-url")) {
                  var source = canvas.getAttribute("data-fragment-url");
                  xhr.get(source, function (error, response, body) {
                    _this.load(body, _this.vertexString);
                  });
                }

                // Load shader
                if (canvas.hasAttribute("data-vertex")) {
                  this.vertexString = canvas.getAttribute("data-vertex");
                } else if (canvas.hasAttribute("data-vertex-url")) {
                  var _source = canvas.getAttribute("data-vertex-url");
                  xhr.get(_source, function (error, response, body) {
                    _this.load(_this.fragmentString, body);
                  });
                }

                this.load();

                if (!this.program) {
                  return;
                }

                // Define Vertex buffer
                var texCoordsLoc = gl.getAttribLocation(
                  this.program,
                  "a_texcoord"
                );
                this.vbo.texCoords = gl.createBuffer();
                this.gl.bindBuffer(gl.ARRAY_BUFFER, this.vbo.texCoords);
                this.gl.bufferData(
                  gl.ARRAY_BUFFER,
                  new Float32Array([
                    0.0,
                    0.0,
                    1.0,
                    0.0,
                    0.0,
                    1.0,
                    0.0,
                    1.0,
                    1.0,
                    0.0,
                    1.0,
                    1.0
                  ]),
                  gl.STATIC_DRAW
                );
                this.gl.enableVertexAttribArray(texCoordsLoc);
                this.gl.vertexAttribPointer(
                  texCoordsLoc,
                  2,
                  gl.FLOAT,
                  false,
                  0,
                  0
                );

                var verticesLoc = gl.getAttribLocation(
                  this.program,
                  "a_position"
                );
                this.vbo.vertices = gl.createBuffer();
                this.gl.bindBuffer(gl.ARRAY_BUFFER, this.vbo.vertices);
                this.gl.bufferData(
                  gl.ARRAY_BUFFER,
                  new Float32Array([
                    -1.0,
                    -1.0,
                    1.0,
                    -1.0,
                    -1.0,
                    1.0,
                    -1.0,
                    1.0,
                    1.0,
                    -1.0,
                    1.0,
                    1.0
                  ]),
                  gl.STATIC_DRAW
                );
                this.gl.enableVertexAttribArray(verticesLoc);
                this.gl.vertexAttribPointer(
                  verticesLoc,
                  2,
                  gl.FLOAT,
                  false,
                  0,
                  0
                );

                // load TEXTURES
                if (canvas.hasAttribute("data-textures")) {
                  var imgList = canvas.getAttribute("data-textures").split(",");
                  for (var nImg in imgList) {
                    this.setUniform("u_tex" + nImg, imgList[nImg]);
                  }
                }

                // ========================== EVENTS
                var mouse = {
                  x: 0,
                  y: 0
                };
                document.addEventListener(
                  "mousemove",
                  function (e) {
                    mouse.x = e.clientX || e.pageX;
                    mouse.y = e.clientY || e.pageY;
                  },
                  false
                );

                var sandbox = this;
                function RenderLoop() {
                  if (sandbox.nMouse > 1) {
                    sandbox.setMouse(mouse);
                  }
                  sandbox.forceRender = sandbox.resize();
                  sandbox.render();
                  window.requestAnimationFrame(RenderLoop);
                }

                // Start
                this.setMouse({ x: 0, y: 0 });
                RenderLoop();
                return this;
              }

              createClass(GlslCanvas, [
                {
                  key: "destroy",
                  value: function destroy() {
                    this.animated = false;
                    this.isValid = false;
                    for (var tex in this.textures) {
                      if (tex.destroy) {
                        tex.destroy();
                      }
                    }
                    this.textures = {};
                    for (var att in this.attribs) {
                      this.gl.deleteBuffer(this.attribs[att]);
                    }
                    this.gl.useProgram(null);
                    this.gl.deleteProgram(this.program);
                    for (var key in this.buffers) {
                      var buffer = this.buffers[key];
                      this.gl.deleteProgram(buffer.program);
                    }
                    this.program = null;
                    this.gl = null;
                  }
                },
                {
                  key: "load",
                  value: function load(fragString, vertString) {
                    // Load vertex shader if there is one
                    if (vertString) {
                      this.vertexString = vertString;
                    }

                    // Load fragment shader if there is one
                    if (fragString) {
                      this.fragmentString = fragString;
                    }

                    this.animated = false;
                    this.nDelta = (
                      this.fragmentString.match(/u_delta/g) || []
                    ).length;
                    this.nTime = (
                      this.fragmentString.match(/u_time/g) || []
                    ).length;
                    this.nDate = (
                      this.fragmentString.match(/u_date/g) || []
                    ).length;
                    this.nMouse = (
                      this.fragmentString.match(/u_mouse/g) || []
                    ).length;
                    this.animated =
                      this.nDate > 1 || this.nTime > 1 || this.nMouse > 1;

                    var nTextures = this.fragmentString.search(/sampler2D/g);
                    if (nTextures) {
                      var lines = this.fragmentString.split("\n");
                      for (var i = 0; i < lines.length; i++) {
                        var match = lines[i].match(
                          /uniform\s*sampler2D\s*([\w]*);\s*\/\/\s*([\w|\:\/\/|\.|\-|\_]*)/i
                        );
                        if (match) {
                          var ext = match[2].split(".").pop().toLowerCase();
                          if (
                            match[1] &&
                            match[2] &&
                            (ext === "jpg" ||
                              ext === "jpeg" ||
                              ext === "png" ||
                              ext === "ogv" ||
                              ext === "webm" ||
                              ext === "mp4")
                          ) {
                            this.setUniform(match[1], match[2]);
                          }
                        }
                        var main = lines[i].match(/\s*void\s*main\s*/g);
                        if (main) {
                          break;
                        }
                      }
                    }

                    var vertexShader = createShader(
                      this,
                      this.vertexString,
                      this.gl.VERTEX_SHADER
                    );
                    var fragmentShader = createShader(
                      this,
                      this.fragmentString,
                      this.gl.FRAGMENT_SHADER
                    );

                    // If Fragment shader fails load a empty one to sign the error
                    if (!fragmentShader) {
                      fragmentShader = createShader(
                        this,
                        "void main(){\n\tgl_FragColor = vec4(1.0);\n}",
                        this.gl.FRAGMENT_SHADER
                      );
                      this.isValid = false;
                    } else {
                      this.isValid = true;
                    }

                    // Create and use program
                    var program = createProgram(this, [
                      vertexShader,
                      fragmentShader
                    ]); //, [0,1],['a_texcoord','a_position']);
                    this.gl.useProgram(program);

                    // Delete shaders
                    // this.gl.detachShader(program, vertexShader);
                    // this.gl.detachShader(program, fragmentShader);
                    this.gl.deleteShader(vertexShader);
                    this.gl.deleteShader(fragmentShader);

                    this.program = program;
                    this.change = true;

                    this.BUFFER_COUNT = 0;
                    var buffers = this.getBuffers(this.fragmentString);
                    if (Object.keys(buffers).length) {
                      this.loadPrograms(buffers);
                    }
                    this.buffers = buffers;

                    // Trigger event
                    this.trigger("load", {});

                    this.forceRender = true;
                  }
                },
                {
                  key: "test",
                  value: function test(callback, fragString, vertString) {
                    // Thanks to @thespite for the help here
                    // https://www.khronos.org/registry/webgl/extensions/EXT_disjoint_timer_query/
                    var pre_test_vert = this.vertexString;
                    var pre_test_frag = this.fragmentString;
                    var pre_test_paused = this.paused;

                    var ext = this.gl.getExtension("EXT_disjoint_timer_query");
                    var query = ext.createQueryEXT();
                    var wasValid = this.isValid;

                    if (fragString || vertString) {
                      this.load(fragString, vertString);
                      wasValid = this.isValid;
                      this.forceRender = true;
                      this.render();
                    }

                    this.paused = true;
                    ext.beginQueryEXT(ext.TIME_ELAPSED_EXT, query);
                    this.forceRender = true;
                    this.render();
                    ext.endQueryEXT(ext.TIME_ELAPSED_EXT);

                    var sandbox = this;
                    function finishTest() {
                      // Revert changes... go back to normal
                      sandbox.paused = pre_test_paused;
                      if (fragString || vertString) {
                        sandbox.load(pre_test_frag, pre_test_vert);
                      }
                    }
                    function waitForTest() {
                      sandbox.forceRender = true;
                      sandbox.render();
                      var available = ext.getQueryObjectEXT(
                        query,
                        ext.QUERY_RESULT_AVAILABLE_EXT
                      );
                      var disjoint = sandbox.gl.getParameter(
                        ext.GPU_DISJOINT_EXT
                      );
                      if (available && !disjoint) {
                        var ret = {
                          wasValid: wasValid,
                          frag: fragString || sandbox.fragmentString,
                          vert: vertString || sandbox.vertexString,
                          timeElapsedMs:
                            ext.getQueryObjectEXT(query, ext.QUERY_RESULT_EXT) /
                            1000000.0
                        };
                        finishTest();
                        callback(ret);
                      } else {
                        window.requestAnimationFrame(waitForTest);
                      }
                    }
                    waitForTest();
                  }
                },
                {
                  key: "loadTexture",
                  value: function loadTexture(name, urlElementOrData, options) {
                    var _this2 = this;

                    if (!options) {
                      options = {};
                    }

                    if (typeof urlElementOrData === "string") {
                      options.url = urlElementOrData;
                    } else if (
                      (typeof urlElementOrData === "undefined"
                        ? "undefined"
                        : _typeof(urlElementOrData)) === "object" &&
                      urlElementOrData.data &&
                      urlElementOrData.width &&
                      urlElementOrData.height
                    ) {
                      options.data = urlElementOrData.data;
                      options.width = urlElementOrData.width;
                      options.height = urlElementOrData.height;
                    } else if (
                      (typeof urlElementOrData === "undefined"
                        ? "undefined"
                        : _typeof(urlElementOrData)) === "object"
                    ) {
                      options.element = urlElementOrData;
                    }

                    if (this.textures[name]) {
                      if (this.textures[name]) {
                        this.textures[name].load(options);
                        this.textures[name].on("loaded", function (args) {
                          _this2.forceRender = true;
                        });
                      }
                    } else {
                      this.textures[name] = new Texture(this.gl, name, options);
                      this.textures[name].on("loaded", function (args) {
                        _this2.forceRender = true;
                      });
                    }
                  }
                },
                {
                  key: "refreshUniforms",
                  value: function refreshUniforms() {
                    this.uniforms = {};
                  }
                },
                {
                  key: "setUniform",
                  value: function setUniform(name) {
                    var u = {};

                    for (
                      var _len = arguments.length,
                        value = Array(_len > 1 ? _len - 1 : 0),
                        _key = 1;
                      _key < _len;
                      _key++
                    ) {
                      value[_key - 1] = arguments[_key];
                    }

                    u[name] = value;
                    this.setUniforms(u);
                  }
                },
                {
                  key: "setUniforms",
                  value: function setUniforms(uniforms) {
                    var parsed = parseUniforms(uniforms);
                    // Set each uniform
                    for (var u in parsed) {
                      if (parsed[u].type === "sampler2D") {
                        // For textures, we need to track texture units, so we have a special setter
                        // this.uniformTexture(parsed[u].name, parsed[u].value[0]);
                        this.loadTexture(parsed[u].name, parsed[u].value[0]);
                      } else {
                        this.uniform(
                          parsed[u].method,
                          parsed[u].type,
                          parsed[u].name,
                          parsed[u].value
                        );
                        this.forceRender = true;
                      }
                    }
                  }
                },
                {
                  key: "setMouse",
                  value: function setMouse(mouse) {
                    // set the mouse uniform
                    var rect = this.canvas.getBoundingClientRect();
                    if (
                      mouse &&
                      mouse.x &&
                      mouse.x >= rect.left &&
                      mouse.x <= rect.right &&
                      mouse.y &&
                      mouse.y >= rect.top &&
                      mouse.y <= rect.bottom
                    ) {
                      var mouse_x =
                        (mouse.x - rect.left) * this.realToCSSPixels;
                      var mouse_y =
                        this.canvas.height -
                        (mouse.y - rect.top) * this.realToCSSPixels;

                      for (var key in this.buffers) {
                        var buffer = this.buffers[key];
                        this.gl.useProgram(buffer.program);
                        this.gl.uniform2f(
                          this.gl.getUniformLocation(buffer.program, "u_mouse"),
                          mouse_x,
                          mouse_y
                        );
                      }
                      this.gl.useProgram(this.program);
                      this.gl.uniform2f(
                        this.gl.getUniformLocation(this.program, "u_mouse"),
                        mouse_x,
                        mouse_y
                      );
                    }
                  }

                  // ex: program.uniform('3f', 'position', x, y, z);
                },
                {
                  key: "uniform",
                  value: function uniform(method, type, name) {
                    // 'value' is a method-appropriate arguments list
                    this.uniforms[name] = this.uniforms[name] || {};
                    var uniform = this.uniforms[name];

                    for (
                      var _len2 = arguments.length,
                        value = Array(_len2 > 3 ? _len2 - 3 : 0),
                        _key2 = 3;
                      _key2 < _len2;
                      _key2++
                    ) {
                      value[_key2 - 3] = arguments[_key2];
                    }

                    var change = isDiff(uniform.value, value);
                    if (
                      change ||
                      this.change ||
                      uniform.location === undefined ||
                      uniform.value === undefined
                    ) {
                      uniform.name = name;
                      uniform.value = value;
                      uniform.type = type;
                      uniform.method = "uniform" + method;
                      uniform.location = this.gl.getUniformLocation(
                        this.program,
                        name
                      );

                      this.gl[uniform.method].apply(
                        this.gl,
                        [uniform.location].concat(uniform.value)
                      );
                    }
                  }
                },
                {
                  key: "uniformTexture",
                  value: function uniformTexture(name, texture, options) {
                    if (this.textures[name] === undefined) {
                      this.loadTexture(name, texture, options);
                    } else {
                      return true;
                    }
                  }
                },
                {
                  key: "resize",
                  value: function resize() {
                    if (
                      this.width !== this.canvas.clientWidth ||
                      this.height !== this.canvas.clientHeight
                    ) {
                      this.realToCSSPixels = window.devicePixelRatio || 1;

                      // Lookup the size the browser is displaying the canvas in CSS pixels
                      // and compute a size needed to make our drawingbuffer match it in
                      // device pixels.
                      var displayWidth = Math.floor(
                        this.gl.canvas.clientWidth * this.realToCSSPixels
                      );
                      var displayHeight = Math.floor(
                        this.gl.canvas.clientHeight * this.realToCSSPixels
                      );

                      // Check if the canvas is not the same size.
                      if (
                        this.gl.canvas.width !== displayWidth ||
                        this.gl.canvas.height !== displayHeight
                      ) {
                        // Make the canvas the same size
                        this.gl.canvas.width = displayWidth;
                        this.gl.canvas.height = displayHeight;
                        // Set the viewport to match
                        this.gl.viewport(
                          0,
                          0,
                          this.gl.canvas.width,
                          this.gl.canvas.height
                        );
                        // this.gl.viewport(0, 0, this.gl.drawingBufferWidth, this.gl.drawingBufferHeight);
                      }
                      this.width = this.canvas.clientWidth;
                      this.height = this.canvas.clientHeight;
                      this.resizeSwappableBuffers();
                      return true;
                    } else {
                      return false;
                    }
                  }
                },
                {
                  key: "render",
                  value: function render() {
                    this.visible = isCanvasVisible(this.canvas);
                    if (
                      this.forceRender ||
                      (this.animated && this.visible && !this.paused)
                    ) {
                      this.renderPrograms();
                      // Trigger event
                      this.trigger("render", {});
                      this.change = false;
                      this.forceRender = false;
                    }
                  }
                },
                {
                  key: "pause",
                  value: function pause() {
                    this.paused = true;
                  }
                },
                {
                  key: "play",
                  value: function play() {
                    this.paused = false;
                  }
                },
                {
                  key: "version",
                  value: function version() {
                    return "0.0.27";
                  }

                  // render main and buffers programs
                },
                {
                  key: "renderPrograms",
                  value: function renderPrograms() {
                    var gl = this.gl,
                      W = gl.canvas.width,
                      H = gl.canvas.height;
                    this.updateVariables();
                    gl.viewport(0, 0, W, H);
                    for (var key in this.buffers) {
                      var buffer = this.buffers[key];
                      this.updateUniforms(buffer.program, key);
                      buffer.bundle.render(W, H, buffer.program, buffer.name);
                      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
                    }
                    this.updateUniforms(this.program, "main");
                    gl.drawArrays(gl.TRIANGLES, 0, 6);
                  }

                  // update glslCanvas variables
                },
                {
                  key: "updateVariables",
                  value: function updateVariables() {
                    var glsl = this;
                    var date = new Date();
                    var now = performance.now();
                    var variables = this.variables || {};
                    variables.prev = variables.prev || now;
                    variables.delta = (now - variables.prev) / 1000.0;
                    variables.prev = now;
                    variables.load = glsl.timeLoad;
                    variables.time = (now - glsl.timeLoad) / 1000.0;
                    variables.year = date.getFullYear();
                    variables.month = date.getMonth();
                    variables.date = date.getDate();
                    variables.daytime =
                      date.getHours() * 3600 +
                      date.getMinutes() * 60 +
                      date.getSeconds() +
                      date.getMilliseconds() * 0.001;
                    this.variables = variables;
                  }

                  // update uniforms per program
                },
                {
                  key: "updateUniforms",
                  value: function updateUniforms(program, key) {
                    var gl = this.gl,
                      variables = this.variables;
                    gl.useProgram(program);
                    if (this.nDelta > 1) {
                      // set the delta time uniform
                      gl.uniform1f(
                        gl.getUniformLocation(program, "u_delta"),
                        variables.delta
                      );
                    }
                    if (this.nTime > 1) {
                      // set the elapsed time uniform
                      gl.uniform1f(
                        gl.getUniformLocation(program, "u_time"),
                        variables.time
                      );
                    }
                    if (this.nDate) {
                      // Set date uniform: year/month/day/time_in_sec
                      gl.uniform4f(
                        gl.getUniformLocation(program, "u_date"),
                        variables.year,
                        variables.month,
                        variables.date,
                        variables.daytime
                      );
                    }
                    // set the resolution uniform
                    gl.uniform2f(
                      gl.getUniformLocation(program, "u_resolution"),
                      this.canvas.width,
                      this.canvas.height
                    );
                    // this.uniform('2f', 'vec2', 'u_resolution', this.canvas.width, this.canvas.height);
                    for (var _key3 in this.buffers) {
                      var buffer = this.buffers[_key3];
                      gl.uniform1i(
                        gl.getUniformLocation(program, buffer.name),
                        buffer.bundle.input.index
                      );
                    }
                    this.TEXTURE_COUNT = this.BUFFER_COUNT;
                    for (var name in this.textures) {
                      if (
                        this.uniformTexture(name, null, {
                          filtering: "mipmap",
                          repeat: true
                        })
                      ) {
                        var texture = this.textures[name];
                        gl.activeTexture(gl.TEXTURE0 + this.TEXTURE_COUNT);
                        gl.bindTexture(gl.TEXTURE_2D, texture.texture);
                        gl.uniform1i(
                          gl.getUniformLocation(program, name),
                          this.TEXTURE_COUNT
                        );
                        gl.uniform2f(
                          gl.getUniformLocation(program, name + "Resolution"),
                          texture.width,
                          texture.height
                        );
                        this.TEXTURE_COUNT++;
                      }
                    }
                  }

                  // parse input strings
                },
                {
                  key: "getBuffers",
                  value: function getBuffers(fragString) {
                    var buffers = {};
                    if (fragString) {
                      fragString.replace(
                        /(?:^\s*)((?:#if|#elif)(?:\s*)(defined\s*\(\s*BUFFER_)(\d+)(?:\s*\))|(?:#ifdef)(?:\s*BUFFER_)(\d+)(?:\s*))/gm,
                        function () {
                          var i = arguments[3] || arguments[4];
                          buffers["u_buffer" + i] = {
                            fragment: "#define BUFFER_" + i + "\n" + fragString
                          };
                        }
                      );
                    }
                    return buffers;
                  }

                  // load buffers programs
                },
                {
                  key: "loadPrograms",
                  value: function loadPrograms(buffers) {
                    var glsl = this;
                    var gl = this.gl;
                    var i = 0;
                    var vertex = createShader(
                      glsl,
                      glsl.vertexString,
                      gl.VERTEX_SHADER
                    );
                    for (var key in buffers) {
                      var buffer = buffers[key];
                      var fragment = createShader(
                        glsl,
                        buffer.fragment,
                        gl.FRAGMENT_SHADER,
                        1
                      );
                      if (!fragment) {
                        fragment = createShader(
                          glsl,
                          "void main(){\n\tgl_FragColor = vec4(1.0);\n}",
                          gl.FRAGMENT_SHADER
                        );
                        glsl.isValid = false;
                      } else {
                        glsl.isValid = true;
                      }
                      var program = createProgram(glsl, [vertex, fragment]);
                      buffer.name = "u_buffer" + i;
                      buffer.program = program;
                      buffer.bundle = glsl.createSwappableBuffer(
                        glsl.canvas.width,
                        glsl.canvas.height,
                        program
                      );
                      gl.deleteShader(fragment);
                      i++;
                    }
                    gl.deleteShader(vertex);
                  }

                  // create an input / output swappable buffer
                },
                {
                  key: "createSwappableBuffer",
                  value: function createSwappableBuffer(W, H, program) {
                    var input = this.createBuffer(W, H, program);
                    var output = this.createBuffer(W, H, program);
                    var gl = this.gl;
                    return {
                      input: input,
                      output: output,
                      swap: function swap() {
                        var temp = input;
                        input = output;
                        output = temp;
                        this.input = input;
                        this.output = output;
                      },
                      render: function render(W, H, program, name) {
                        gl.useProgram(program);
                        gl.viewport(0, 0, W, H);
                        gl.bindFramebuffer(gl.FRAMEBUFFER, this.input.buffer);
                        gl.framebufferTexture2D(
                          gl.FRAMEBUFFER,
                          gl.COLOR_ATTACHMENT0,
                          gl.TEXTURE_2D,
                          this.output.texture,
                          0
                        );
                        gl.drawArrays(gl.TRIANGLES, 0, 6);
                        this.swap();
                      },
                      resize: function resize(W, H, program, name) {
                        gl.useProgram(program);
                        gl.viewport(0, 0, W, H);
                        this.input.resize(W, H);
                        this.output.resize(W, H);
                      }
                    };
                  }

                  // create a buffers
                },
                {
                  key: "createBuffer",
                  value: function createBuffer(W, H, program) {
                    var gl = this.gl;
                    var index = this.BUFFER_COUNT;
                    this.BUFFER_COUNT += 2;
                    gl.getExtension("OES_texture_float");
                    var texture = gl.createTexture();
                    gl.activeTexture(gl.TEXTURE0 + index);
                    gl.bindTexture(gl.TEXTURE_2D, texture);
                    gl.texImage2D(
                      gl.TEXTURE_2D,
                      0,
                      gl.RGBA,
                      W,
                      H,
                      0,
                      gl.RGBA,
                      gl.FLOAT,
                      null
                    );
                    gl.texParameteri(
                      gl.TEXTURE_2D,
                      gl.TEXTURE_MIN_FILTER,
                      gl.NEAREST
                    );
                    gl.texParameteri(
                      gl.TEXTURE_2D,
                      gl.TEXTURE_MAG_FILTER,
                      gl.NEAREST
                    );
                    gl.texParameteri(
                      gl.TEXTURE_2D,
                      gl.TEXTURE_WRAP_S,
                      gl.CLAMP_TO_EDGE
                    );
                    gl.texParameteri(
                      gl.TEXTURE_2D,
                      gl.TEXTURE_WRAP_T,
                      gl.CLAMP_TO_EDGE
                    );
                    var buffer = gl.createFramebuffer();
                    return {
                      index: index,
                      texture: texture,
                      buffer: buffer,
                      W: W,
                      H: H,
                      resize: function resize(W, H) {
                        gl.bindFramebuffer(gl.FRAMEBUFFER, buffer);
                        var minW = Math.min(W, this.W);
                        var minH = Math.min(H, this.H);
                        var pixels = new Float32Array(minW * minH * 4);
                        gl.readPixels(
                          0,
                          0,
                          minW,
                          minH,
                          gl.RGBA,
                          gl.FLOAT,
                          pixels
                        );
                        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
                        var newIndex = index + 1;
                        var newTexture = gl.createTexture();
                        gl.activeTexture(gl.TEXTURE0 + newIndex);
                        gl.bindTexture(gl.TEXTURE_2D, newTexture);
                        gl.texImage2D(
                          gl.TEXTURE_2D,
                          0,
                          gl.RGBA,
                          W,
                          H,
                          0,
                          gl.RGBA,
                          gl.FLOAT,
                          null
                        );
                        gl.texParameteri(
                          gl.TEXTURE_2D,
                          gl.TEXTURE_MIN_FILTER,
                          gl.NEAREST
                        );
                        gl.texParameteri(
                          gl.TEXTURE_2D,
                          gl.TEXTURE_MAG_FILTER,
                          gl.NEAREST
                        );
                        gl.texParameteri(
                          gl.TEXTURE_2D,
                          gl.TEXTURE_WRAP_S,
                          gl.CLAMP_TO_EDGE
                        );
                        gl.texParameteri(
                          gl.TEXTURE_2D,
                          gl.TEXTURE_WRAP_T,
                          gl.CLAMP_TO_EDGE
                        );
                        gl.texSubImage2D(
                          gl.TEXTURE_2D,
                          0,
                          0,
                          0,
                          minW,
                          minH,
                          gl.RGBA,
                          gl.FLOAT,
                          pixels
                        );
                        var newBuffer = gl.createFramebuffer();
                        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
                        gl.deleteTexture(texture);
                        gl.activeTexture(gl.TEXTURE0 + index);
                        gl.bindTexture(gl.TEXTURE_2D, newTexture);
                        index = this.index = index;
                        texture = this.texture = newTexture;
                        buffer = this.buffer = newBuffer;
                        this.W = W;
                        this.H = H;
                      }
                    };
                  }

                  // resize buffers on canvas resize
                  // consider applying a throttle of 50 ms on canvas resize
                  // to avoid requestAnimationFrame and Gl violations
                },
                {
                  key: "resizeSwappableBuffers",
                  value: function resizeSwappableBuffers() {
                    var gl = this.gl;
                    var W = gl.canvas.width,
                      H = gl.canvas.height;
                    gl.viewport(0, 0, W, H);
                    for (var key in this.buffers) {
                      var buffer = this.buffers[key];
                      buffer.bundle.resize(W, H, buffer.program, buffer.name);
                    }
                    gl.useProgram(this.program);
                  }
                }
              ]);
              return GlslCanvas;
            })();

            function loadAllGlslCanvas() {
              var list = document.getElementsByClassName("glslCanvas");
              if (list.length > 0) {
                window.glslCanvases = [];
                for (var i = 0; i < list.length; i++) {
                  var sandbox = new GlslCanvas(list[i]);
                  if (sandbox.isValid) {
                    window.glslCanvases.push(sandbox);
                  }
                }
              }
            }

            window.addEventListener("load", function () {
              loadAllGlslCanvas();
            });

            module.exports = GlslCanvas;
          }.call(
            this,
            typeof global !== "undefined"
              ? global
              : typeof self !== "undefined"
              ? self
              : typeof window !== "undefined"
              ? window
              : {}
          ));
        },
        {}
      ],
      9: [
        function (_dereq_, module, exports) {
          module.exports = isFunction;

          var toString = Object.prototype.toString;

          function isFunction(fn) {
            if (!fn) {
              return false;
            }
            var string = toString.call(fn);
            return (
              string === "[object Function]" ||
              (typeof fn === "function" && string !== "[object RegExp]") ||
              (typeof window !== "undefined" &&
                // IE8 and below
                (fn === window.setTimeout ||
                  fn === window.alert ||
                  fn === window.confirm ||
                  fn === window.prompt))
            );
          }
        },
        {}
      ],
      10: [
        function (_dereq_, module, exports) {
          var trim = function (string) {
              return string.replace(/^\s+|\s+$/g, "");
            },
            isArray = function (arg) {
              return Object.prototype.toString.call(arg) === "[object Array]";
            };

          module.exports = function (headers) {
            if (!headers) return {};

            var result = {};

            var headersArr = trim(headers).split("\n");

            for (var i = 0; i < headersArr.length; i++) {
              var row = headersArr[i];
              var index = row.indexOf(":"),
                key = trim(row.slice(0, index)).toLowerCase(),
                value = trim(row.slice(index + 1));

              if (typeof result[key] === "undefined") {
                result[key] = value;
              } else if (isArray(result[key])) {
                result[key].push(value);
              } else {
                result[key] = [result[key], value];
              }
            }

            return result;
          };
        },
        {}
      ],
      11: [
        function (_dereq_, module, exports) {
          "use strict";
          var window = _dereq_("global/window");
          var once = _dereq_("once");
          var isFunction = _dereq_("is-function");
          var parseHeaders = _dereq_("parse-headers");
          var xtend = _dereq_("xtend");

          module.exports = createXHR;
          createXHR.XMLHttpRequest = window.XMLHttpRequest || noop;
          createXHR.XDomainRequest =
            "withCredentials" in new createXHR.XMLHttpRequest()
              ? createXHR.XMLHttpRequest
              : window.XDomainRequest;

          forEachArray(
            ["get", "put", "post", "patch", "head", "delete"],
            function (method) {
              createXHR[method === "delete" ? "del" : method] = function (
                uri,
                options,
                callback
              ) {
                options = initParams(uri, options, callback);
                options.method = method.toUpperCase();
                return _createXHR(options);
              };
            }
          );

          function forEachArray(array, iterator) {
            for (var i = 0; i < array.length; i++) {
              iterator(array[i]);
            }
          }

          function isEmpty(obj) {
            for (var i in obj) {
              if (obj.hasOwnProperty(i)) return false;
            }
            return true;
          }

          function initParams(uri, options, callback) {
            var params = uri;

            if (isFunction(options)) {
              callback = options;
              if (typeof uri === "string") {
                params = { uri: uri };
              }
            } else {
              params = xtend(options, { uri: uri });
            }

            params.callback = callback;
            return params;
          }

          function createXHR(uri, options, callback) {
            options = initParams(uri, options, callback);
            return _createXHR(options);
          }

          function _createXHR(options) {
            var callback = options.callback;
            if (typeof callback === "undefined") {
              throw new Error("callback argument missing");
            }
            callback = once(callback);

            function readystatechange() {
              if (xhr.readyState === 4) {
                loadFunc();
              }
            }

            function getBody() {
              // Chrome with requestType=blob throws errors arround when even testing access to responseText
              var body = undefined;

              if (xhr.response) {
                body = xhr.response;
              } else if (xhr.responseType === "text" || !xhr.responseType) {
                body = xhr.responseText || xhr.responseXML;
              }

              if (isJson) {
                try {
                  body = JSON.parse(body);
                } catch (e) {}
              }

              return body;
            }

            var failureResponse = {
              body: undefined,
              headers: {},
              statusCode: 0,
              method: method,
              url: uri,
              rawRequest: xhr
            };

            function errorFunc(evt) {
              clearTimeout(timeoutTimer);
              if (!(evt instanceof Error)) {
                evt = new Error("" + (evt || "Unknown XMLHttpRequest Error"));
              }
              evt.statusCode = 0;
              callback(evt, failureResponse);
            }

            // will load the data & process the response in a special response object
            function loadFunc() {
              if (aborted) return;
              var status;
              clearTimeout(timeoutTimer);
              if (options.useXDR && xhr.status === undefined) {
                //IE8 CORS GET successful response doesn't have a status field, but body is fine
                status = 200;
              } else {
                status = xhr.status === 1223 ? 204 : xhr.status;
              }
              var response = failureResponse;
              var err = null;

              if (status !== 0) {
                response = {
                  body: getBody(),
                  statusCode: status,
                  method: method,
                  headers: {},
                  url: uri,
                  rawRequest: xhr
                };
                if (xhr.getAllResponseHeaders) {
                  //remember xhr can in fact be XDR for CORS in IE
                  response.headers = parseHeaders(xhr.getAllResponseHeaders());
                }
              } else {
                err = new Error("Internal XMLHttpRequest Error");
              }
              callback(err, response, response.body);
            }

            var xhr = options.xhr || null;

            if (!xhr) {
              if (options.cors || options.useXDR) {
                xhr = new createXHR.XDomainRequest();
              } else {
                xhr = new createXHR.XMLHttpRequest();
              }
            }

            var key;
            var aborted;
            var uri = (xhr.url = options.uri || options.url);
            var method = (xhr.method = options.method || "GET");
            var body = options.body || options.data || null;
            var headers = (xhr.headers = options.headers || {});
            var sync = !!options.sync;
            var isJson = false;
            var timeoutTimer;

            if ("json" in options) {
              isJson = true;
              headers["accept"] ||
                headers["Accept"] ||
                (headers["Accept"] = "application/json"); //Don't override existing accept header declared by user
              if (method !== "GET" && method !== "HEAD") {
                headers["content-type"] ||
                  headers["Content-Type"] ||
                  (headers["Content-Type"] = "application/json"); //Don't override existing accept header declared by user
                body = JSON.stringify(options.json);
              }
            }

            xhr.onreadystatechange = readystatechange;
            xhr.onload = loadFunc;
            xhr.onerror = errorFunc;
            // IE9 must have onprogress be set to a unique function.
            xhr.onprogress = function () {
              // IE must die
            };
            xhr.ontimeout = errorFunc;
            xhr.open(method, uri, !sync, options.username, options.password);
            //has to be after open
            if (!sync) {
              xhr.withCredentials = !!options.withCredentials;
            }
            // Cannot set timeout with sync request
            // not setting timeout on the xhr object, because of old webkits etc. not handling that correctly
            // both npm's request and jquery 1.x use this kind of timeout, so this is being consistent
            if (!sync && options.timeout > 0) {
              timeoutTimer = setTimeout(function () {
                aborted = true; //IE9 may still call readystatechange
                xhr.abort("timeout");
                var e = new Error("XMLHttpRequest timeout");
                e.code = "ETIMEDOUT";
                errorFunc(e);
              }, options.timeout);
            }

            if (xhr.setRequestHeader) {
              for (key in headers) {
                if (headers.hasOwnProperty(key)) {
                  xhr.setRequestHeader(key, headers[key]);
                }
              }
            } else if (options.headers && !isEmpty(options.headers)) {
              throw new Error(
                "Headers cannot be set on an XDomainRequest object"
              );
            }

            if ("responseType" in options) {
              xhr.responseType = options.responseType;
            }

            if (
              "beforeSend" in options &&
              typeof options.beforeSend === "function"
            ) {
              options.beforeSend(xhr);
            }

            xhr.send(body);

            return xhr;
          }

          function noop() {}
        },
        {
          "global/window": 7,
          "is-function": 9,
          once: 12,
          "parse-headers": 10,
          xtend: 13
        }
      ],
      12: [
        function (_dereq_, module, exports) {
          module.exports = once;

          once.proto = once(function () {
            Object.defineProperty(Function.prototype, "once", {
              value: function () {
                return once(this);
              },
              configurable: true
            });
          });

          function once(fn) {
            var called = false;
            return function () {
              if (called) return;
              called = true;
              return fn.apply(this, arguments);
            };
          }
        },
        {}
      ],
      13: [
        function (_dereq_, module, exports) {
          module.exports = extend;

          var hasOwnProperty = Object.prototype.hasOwnProperty;

          function extend() {
            var target = {};

            for (var i = 0; i < arguments.length; i++) {
              var source = arguments[i];

              for (var key in source) {
                if (hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }

            return target;
          }
        },
        {}
      ],
      14: [
        function (_dereq_, module, exports) {
          "use strict";

          var _classCallCheck = _dereq_(
            "babel-runtime/helpers/class-call-check"
          )["default"];

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.createOpenFrameArtwork = createOpenFrameArtwork;

          var OpenFrameIcon = function OpenFrameIcon(parent) {
            var _this = this;

            _classCallCheck(this, OpenFrameIcon);

            this.parent = parent;

            this.el = document.createElement("div");
            this.el.setAttribute("class", "glslGallery_openFrameIcon");
            this.el.innerHTML = "[o]";
            this.el.addEventListener(
              "click",
              function () {
                createOpenFrameArtwork(_this.parent, function () {
                  console.log(event);
                });
              },
              true
            );

            this.parent.el.appendChild(this.el);
          };

          exports["default"] = OpenFrameIcon;

          function createOpenFrameArtwork(item, callback) {
            var id = item.id;
            var title = item.title || "unknow";
            var author = item.author || "unknow";
            var xhr = new XMLHttpRequest();
            callback = callback || function () {};
            // anywhere in the API that user {id} is needed, the alias 'current' can be used for the logged-in user
            xhr.open(
              "POST",
              "http://openframe.io/api/users/current/owned_artwork",
              false
            );
            // set content type to JSON...
            xhr.setRequestHeader(
              "Content-Type",
              "application/json;charset=UTF-8"
            );
            // This is essential in order to include auth cookies:
            xhr.withCredentials = true;
            xhr.onload = function (event) {
              if (event.currentTarget.status === 404) {
                (function () {
                  window.open(
                    "http://openframe.io/login-popup",
                    "login",
                    "width=500,height=600"
                  );
                  var successListener = function successListener(e) {
                    if (e.data === "success") {
                      createOpenFrameArtwork(item, callback);
                    }
                    window.removeEventListener("message", successListener);
                  };
                  window.addEventListener("message", successListener, false);
                })();
              } else if (event.currentTarget.status === 200) {
                callback(true);
              } else {
                callback(false);
              }
            };
            xhr.onerror = function (event) {
              console.log(event.currentTarget.status);
            };

            var url = "";
            if (id.match(/\d\d\/.*/)) {
              url = "https://thebookofshaders.com/" + id;
            } else {
              url = "https://thebookofshaders.com/log/" + id;
            }

            xhr.send(
              JSON.stringify({
                title: title,
                author_name: author,
                is_public: false,
                format: "openframe-glslviewer",
                url: url + ".frag",
                thumb_url: url + ".png"
              })
            );
          }
        },
        { "babel-runtime/helpers/class-call-check": 2 }
      ],
      15: [
        function (_dereq_, module, exports) {
          "use strict";

          var _createClass = _dereq_("babel-runtime/helpers/create-class")[
            "default"
          ];

          var _classCallCheck = _dereq_(
            "babel-runtime/helpers/class-call-check"
          )["default"];

          var _interopRequireDefault = _dereq_(
            "babel-runtime/helpers/interop-require-default"
          )["default"];

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var _xhr = _dereq_("xhr");

          var _xhr2 = _interopRequireDefault(_xhr);

          var _glslCanvas = _dereq_("glslCanvas");

          var _glslCanvas2 = _interopRequireDefault(_glslCanvas);

          var _addonsOpenFrameIcon = _dereq_("../addons/openFrameIcon");

          var _addonsOpenFrameIcon2 = _interopRequireDefault(
            _addonsOpenFrameIcon
          );

          var GalleryItem = (function () {
            function GalleryItem(id, main, options) {
              _classCallCheck(this, GalleryItem);

              this.id = id;
              this.main = main;
              this.options = options;

              // Construct Item
              this.el = document.createElement("div");
              this.el.setAttribute("class", "glslGallery_item");

              this.canvas = document.createElement("canvas");

              this.img = document.createElement("img");
              this.img.setAttribute("class", "glslGallery_thumb");

              this.credits = document.createElement("div");
              this.credits.setAttribute("class", "glslGallery_credits");
              this.credits.style.visibility = "hidden";

              // if (this.id.match(/\d\d\/.*/)) {
              //     this.link.setAttribute('href', 'https://thebookofshaders.com/edit.php#' + this.id + '.frag');
              //     this.img.src = 'https://thebookofshaders.com/' + this.id + '.png';
              // }
              // else {
              //     if (this.options.clickRun === "editor") {
              //         this.link.setAttribute('href', 'https://thebookofshaders.com/edit.php?log=' + this.id);
              //         this.img.src = 'https://thebookofshaders.com/log/' + this.id + '.png';
              //     } else {
              //         this.link.setAttribute('href', 'http://' + this.options.clickRun + '.thebookofshaders.com/?log=' + this.id);
              //         this.img.src = 'https://thebookofshaders.com/log/' + this.id + '.png';
              //     }
              // }

              // this.link.appendChild(this.img);
              this.el.appendChild(this.credits);
              this.el.appendChild(this.canvas);
              this.main.container.appendChild(this.el);

              // Add events
              if (this.options.hoverPreview) {
                // this.el.addEventListener('mouseenter', () => {
                //     handleMouseEnter(this);
                // });
                // this.el.addEventListener('mouseleave', () => {
                //     handleMouseLeave(this);
                // });
              }

              if (this.options.openFrameIcon) {
                this.openFrameIcon = new _addonsOpenFrameIcon2["default"](this);
              }

              // this.init();
              this.requestSource(this.id);
            }

            _createClass(GalleryItem, [
              {
                key: "init",
                value: function init() {
                  var _this = this;

                  if (!this.source || this.source === "") {
                    var url;

                    (function () {
                      url = "";

                      if (_this.id.match(/\d\d\/.*/)) {
                        url =
                          "https://thebookofshaders.com/" + _this.id + ".frag";
                      } else {
                        url =
                          "https://thebookofshaders.com/log/" +
                          _this.id +
                          ".frag";
                      }
                      var item = _this;
                      _xhr2["default"].get(url, function (error, res, body) {
                        if (error) {
                          console.error("Error downloading ", error);
                          return;
                        }
                        item.setCode(body);
                      });
                    })();
                  }
                }
              },
              {
                key: "requestSource",
                value: function requestSource(id) {
                  var _this2 = this;

                  var url = "/phau/dict/" + id + ".frag";
                  _xhr2["default"].get(url, function (error, res, body) {
                    if (error) {
                      console.error("Error downloading ", error);
                      return;
                    }

                    var sandbox = new _glslCanvas2["default"](_this2.canvas);
                    _this2.canvas.setAttribute("class", "glslGallery_canvas");
                    sandbox.load(body);
                    _this2.setCode(body);
                  });
                }
              },
              {
                key: "load",
                value: function load(code) {
                  this.setCode(code);
                  window.glslGallery_canvas.load(code);
                  window.glslGallery_canvas.canvas.style.height =
                    this.img.offsetHeight + "px";
                  this.link.appendChild(window.glslGallery_canvas.canvas);
                }
              },
              {
                key: "setCode",
                value: function setCode(code) {
                  this.source = code;

                  if (!this.author && this.options.showAuthor) {
                    this.author = this.getAuthor();
                    // if (this.author !== 'unknown') {
                    var authorEl = document.createElement("p");
                    authorEl.setAttribute(
                      "class",
                      "glslGallery_label glslGallery_author"
                    );
                    authorEl.innerHTML = this.author;
                    this.credits.appendChild(authorEl);
                    this.credits.style.visibility = "visible";
                    // }
                  }

                  if (!this.title && this.options.showTitle) {
                    this.title = this.getTitle();
                    // if (this.title !== 'unknown') {
                    var titleEl = document.createElement("p");
                    titleEl.setAttribute(
                      "class",
                      "glslGallery_label glslGallery_title"
                    );
                    titleEl.innerHTML = this.title;
                    this.credits.appendChild(titleEl);
                    this.credits.style.visibility = "visible";
                    // }
                  }

                  if (!this.lesson && this.options.showTitle) {
                    this.lesson = this.getLesson();
                    console.log(this.lesson);
                    // if (this.title !== 'unknown') {
                    var lessonEl = document.createElement("p");
                    lessonEl.setAttribute(
                      "class",
                      "glslGallery_label glslGallery_lesson"
                    );
                    lessonEl.innerHTML = this.lesson;
                    this.credits.appendChild(lessonEl);
                    this.credits.style.visibility = "visible";
                    // }
                  }
                  if (!this.lesson2 && this.options.showTitle) {
                    this.lesson2 = this.getLesson2();
                    console.log(this.lesson2);
                    // if (this.title !== 'unknown') {
                    var lessonEl = document.createElement("p");
                    lessonEl.setAttribute(
                      "class",
                      "glslGallery_label glslGallery_lesson"
                    );
                    lessonEl.innerHTML = this.lesson2;
                    this.credits.appendChild(lessonEl);
                    this.credits.style.visibility = "visible";
                    // }
                  }
                }
              },
              {
                key: "getCode",
                value: function getCode() {
                  return this.source;
                }
              },
              {
                key: "getTitle",
                value: function getTitle() {
                  var result = this.source.match(
                    /\/\/\s*[T|t]itle\s*:\s*([\w|\s|\@|\(|\)|\-|\_]*)/i
                  );
                  if (result && !(result[1] === " " || result[1] === "")) {
                    return result[1].replace(/(\r\n|\n|\r)/gm, "");
                  } else {
                    return "untitled";
                  }
                }
              },
              {
                key: "getLesson2",
                value: function getLesson2() {
                  var result = this.source.match(
                    /\/\/\s*[S|s]econd\s*:\s*([\w|\d|\.|\s|\@|\(|\)|\-|\_]*)/i
                  );
                  // console.log(result)
                  if (result && !(result[1] === " " || result[1] === "")) {
                    return result[1].replace(/(\r\n|\n|\r)/gm, "");
                  } else {
                    return "";
                  }
                }
              },
              {
                key: "getLesson",
                value: function getLesson() {
                  var result = this.source.match(
                    /\/\/\s*[L|l]esson\s*:\s*([\w|\d|\.|\s|\@|\(|\)|\-|\_]*)/i
                  );
                  // console.log(result)
                  if (result && !(result[1] === " " || result[1] === "")) {
                    return result[1].replace(/(\r\n|\n|\r)/gm, "");
                  } else {
                    return "";
                  }
                }
              },
              {
                key: "getAuthor",
                value: function getAuthor() {
                  var result = this.source.match(
                    /\/\/\s*[A|a]uthor\s*[\:]?\s*([\w|\s|\@|\(|\)|\-|\_]*)/i
                  );
                  if (result && !(result[1] === " " || result[1] === "")) {
                    return result[1].replace(/(\r\n|\n|\r)/gm, "");
                  } else {
                    return "anonymous";
                  }
                }
              }
            ]);

            return GalleryItem;
          })();

          exports["default"] = GalleryItem;

          function initCanvas() {
            if (!window.glslGallery_canvas) {
              var canvas = document.createElement("canvas");
              canvas.setAttribute("class", "glslGallery_canvas");
              canvas.style.width = "250px";
              canvas.style.height = "250px";
              canvas.width = "250px";
              canvas.height = "250px";
              window.glslGallery_canvas = new _glslCanvas2["default"](canvas);
            }
          }

          function handleMouseEnter(item) {
            // console.log('jamon', item)
            initCanvas();

            if (item.getCode()) {
              console.log("get", item.getCode());
              item.load(item.getCode());
            } else {
              var url = "";
              if (item.id.match(/\d\d\/.*/)) {
                url = "/phau/" + item.id + ".frag";
              }

              _xhr2["default"].get(url, function (error, res, body) {
                if (error) {
                  console.error("Error downloading ", error);
                  return;
                }
                item.load(body);
              });
            }
          }

          function handleMouseLeave(item) {
            initCanvas();

            if (item.el.getElementsByClassName("glslGallery_canvas") > 0) {
              // Remove glslCanvas instance from item
              item.el.removeChild(window.glslGallery_canvas.canvas);
            }
          }
          module.exports = exports["default"];
        },
        {
          "../addons/openFrameIcon": 14,
          "babel-runtime/helpers/class-call-check": 2,
          "babel-runtime/helpers/create-class": 3,
          "babel-runtime/helpers/interop-require-default": 4,
          glslCanvas: 8,
          xhr: 11
        }
      ],
      16: [
        function (_dereq_, module, exports) {
          /*
  The MIT License (MIT)
  
  Copyright (c) 2016 Patricio Gonzalez Vivo ( http://www.patriciogonzalezvivo.com )
  
  Permission is hereby granted, free of charge, to any person obtaining a copy of
  this software and associated documentation files (the 'Software'), to deal in
  the Software without restriction, including without limitation the rights to
  use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
  the Software, and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:
  
  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
  FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
  COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
  IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
  */

          "use strict";

          var _createClass = _dereq_("babel-runtime/helpers/create-class")[
            "default"
          ];

          var _classCallCheck = _dereq_(
            "babel-runtime/helpers/class-call-check"
          )["default"];

          var _interopRequireDefault = _dereq_(
            "babel-runtime/helpers/interop-require-default"
          )["default"];

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var _appCoreGalleryItem = _dereq_("app/core/GalleryItem");

          var _appCoreGalleryItem2 = _interopRequireDefault(
            _appCoreGalleryItem
          );

          var GlslGallery = (function () {
            function GlslGallery(selector, options) {
              _classCallCheck(this, GlslGallery);

              if (
                typeof selector === "object" &&
                selector.nodeType &&
                selector.nodeType === 1
              ) {
                this.container = selector;
              } else if (typeof selector === "string") {
                this.container = document.querySelector(selector);
              } else {
                console.log(
                  "Error, type " +
                    typeof selector +
                    " of " +
                    selector +
                    " is unknown"
                );
                return;
              }

              this.options = options || {};

              if (!this.options.showAuthor) {
                this.options.showAuthor = true;
              }

              if (!this.options.showTitle) {
                this.options.showTitle = true;
              }

              if (!this.options.hoverPreview) {
                this.options.hoverPreview = true;
              }

              if (!this.options.openFrameIcon) {
                this.options.openFrameIcon = true;
              }

              if (!this.options.clickRun) {
                this.options.clickRun = "player";
              }

              this.items = [];

              if (selector.hasAttribute("data-properties")) {
                var prop = selector.getAttribute("data-properties").split(",");
                for (var i in prop) {
                  var values = prop[i].split(":");
                  if (values.length === 1) {
                    this.options[values[0]] = true;
                  } else if (values.length === 2) {
                    this.options[values[0]] =
                      values[1] === "true" || values[1] === "false"
                        ? values[1] === "true"
                        : values[1];
                  }
                }
              }

              if (selector.hasAttribute("data")) {
                this.addItems(selector.getAttribute("data"));
              }

              if (this.options.logs) {
                this.addItems(this.options.logs);
              }

              return this;
            }

            _createClass(GlslGallery, [
              {
                key: "addItem",
                value: function addItem(log) {
                  if (typeof log === "number") {
                    log = log.toString();
                  }
                  this.items.push(
                    new _appCoreGalleryItem2["default"](log, this, this.options)
                  );
                }
              },
              {
                key: "addItems",
                value: function addItems(logs) {
                  if (typeof logs === "string") {
                    logs = logs.split(",");
                  }
                  for (var i in logs) {
                    this.addItem(logs[i]);
                  }
                }
              },
              {
                key: "version",
                value: function version() {
                  return "0.0.6";
                }
              }
            ]);

            return GlslGallery;
          })();

          exports["default"] = GlslGallery;

          function glslGalleryLoadAll() {
            if (!window.GlslGallery) {
              window.GlslGallery = GlslGallery;
            }

            var list = document.getElementsByClassName("glslGallery");
            if (list.length > 0) {
              window.glslGalleries = [];
              for (var i = 0; i < list.length; i++) {
                var gallery = new GlslGallery(list[i]);
                window.glslGalleries.push(gallery);
              }
            }
          }

          window.addEventListener("load", function () {
            glslGalleryLoadAll();
          });
          module.exports = exports["default"];
        },
        {
          "app/core/GalleryItem": 15,
          "babel-runtime/helpers/class-call-check": 2,
          "babel-runtime/helpers/create-class": 3,
          "babel-runtime/helpers/interop-require-default": 4
        }
      ]
    },
    {},
    [16]
  )(16);
});

//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzLWNhbGwtY2hlY2suanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZS1jbGFzcy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvaW50ZXJvcC1yZXF1aXJlLWRlZmF1bHQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5qcyIsIm5vZGVfbW9kdWxlcy9nbG9iYWwvd2luZG93LmpzIiwibm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvbGliL0dsc2xDYW52YXMuanMiLCJub2RlX21vZHVsZXMvaXMtZnVuY3Rpb24vaW5kZXguanMiLCJub2RlX21vZHVsZXMvcGFyc2UtaGVhZGVycy9wYXJzZS1oZWFkZXJzLmpzIiwibm9kZV9tb2R1bGVzL3hoci9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy94aHIvbm9kZV9tb2R1bGVzL29uY2Uvb25jZS5qcyIsIm5vZGVfbW9kdWxlcy94dGVuZC9pbW11dGFibGUuanMiLCIvaG9tZS9waDR1MjAvcHJvamVjdHMvZ2xzbEdhbGxlcnkvc3JjL2pzL2FkZG9ucy9vcGVuRnJhbWVJY29uLmpzIiwiL2hvbWUvcGg0dTIwL3Byb2plY3RzL2dsc2xHYWxsZXJ5L3NyYy9qcy9jb3JlL0dhbGxlcnlJdGVtLmpzIiwiL2hvbWUvcGg0dTIwL3Byb2plY3RzL2dsc2xHYWxsZXJ5L3NyYy9qcy9nbHNsR2FsbGVyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDaGlFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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LENBQUMsQ0FBQyxDQUFDO2FBQ3pCO1NBQ0o7OztlQUVNLG1CQUFHO0FBQ04sbUJBQU8sT0FBTyxDQUFDO1NBQ2xCOzs7V0EvRWdCLFdBQVc7OztxQkFBWCxXQUFXOztBQWtGaEMsU0FBUyxrQkFBa0IsR0FBRztBQUMxQixRQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRTtBQUNyQixjQUFNLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztLQUNwQzs7QUFFRCxRQUFJLElBQUksR0FBRyxRQUFRLENBQUMsc0JBQXNCLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDMUQsUUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtBQUNqQixjQUFNLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztBQUMxQixhQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUNsQyxnQkFBSSxPQUFPLEdBQUcsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdkMsa0JBQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3RDO0tBQ0o7Q0FDSjs7QUFFRCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLFlBQVk7QUFDeEMsc0JBQWtCLEVBQUUsQ0FBQztDQUN4QixDQUFDLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9PYmplY3QkZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIilbXCJkZWZhdWx0XCJdO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuXG4gICAgICBfT2JqZWN0JGRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gIH07XG59KSgpO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsInZhciAkID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy8kJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2Mpe1xuICByZXR1cm4gJC5zZXREZXNjKGl0LCBrZXksIGRlc2MpO1xufTsiLCJ2YXIgJE9iamVjdCA9IE9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBjcmVhdGU6ICAgICAkT2JqZWN0LmNyZWF0ZSxcbiAgZ2V0UHJvdG86ICAgJE9iamVjdC5nZXRQcm90b3R5cGVPZixcbiAgaXNFbnVtOiAgICAge30ucHJvcGVydHlJc0VudW1lcmFibGUsXG4gIGdldERlc2M6ICAgICRPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxuICBzZXREZXNjOiAgICAkT2JqZWN0LmRlZmluZVByb3BlcnR5LFxuICBzZXREZXNjczogICAkT2JqZWN0LmRlZmluZVByb3BlcnRpZXMsXG4gIGdldEtleXM6ICAgICRPYmplY3Qua2V5cyxcbiAgZ2V0TmFtZXM6ICAgJE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzLFxuICBnZXRTeW1ib2xzOiAkT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyxcbiAgZWFjaDogICAgICAgW10uZm9yRWFjaFxufTsiLCJ2YXIgd2luO1xuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHdpbiA9IHdpbmRvdztcbn0gZWxzZSBpZiAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHdpbiA9IGdsb2JhbDtcbn0gZWxzZSBpZiAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIpe1xuICAgIHdpbiA9IHNlbGY7XG59IGVsc2Uge1xuICAgIHdpbiA9IHt9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHdpbjtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNvbW1vbmpzR2xvYmFsID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiB0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB7fTtcblxuXG5cblxuXG5mdW5jdGlvbiBjcmVhdGVDb21tb25qc01vZHVsZShmbiwgbW9kdWxlKSB7XG5cdHJldHVybiBtb2R1bGUgPSB7IGV4cG9ydHM6IHt9IH0sIGZuKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMpLCBtb2R1bGUuZXhwb3J0cztcbn1cblxudmFyIHdpbjtcblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB3aW4gPSB3aW5kb3c7XG59IGVsc2UgaWYgKHR5cGVvZiBjb21tb25qc0dsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHdpbiA9IGNvbW1vbmpzR2xvYmFsO1xufSBlbHNlIGlmICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIil7XG4gICAgd2luID0gc2VsZjtcbn0gZWxzZSB7XG4gICAgd2luID0ge307XG59XG5cbnZhciB3aW5kb3dfMSA9IHdpbjtcblxudmFyIGlzRnVuY3Rpb25fMSA9IGlzRnVuY3Rpb247XG5cbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbmZ1bmN0aW9uIGlzRnVuY3Rpb24gKGZuKSB7XG4gIHZhciBzdHJpbmcgPSB0b1N0cmluZy5jYWxsKGZuKTtcbiAgcmV0dXJuIHN0cmluZyA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJyB8fFxuICAgICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicgJiYgc3RyaW5nICE9PSAnW29iamVjdCBSZWdFeHBdJykgfHxcbiAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgLy8gSUU4IGFuZCBiZWxvd1xuICAgICAoZm4gPT09IHdpbmRvdy5zZXRUaW1lb3V0IHx8XG4gICAgICBmbiA9PT0gd2luZG93LmFsZXJ0IHx8XG4gICAgICBmbiA9PT0gd2luZG93LmNvbmZpcm0gfHxcbiAgICAgIGZuID09PSB3aW5kb3cucHJvbXB0KSlcbn1cblxudmFyIHRyaW1fMSA9IGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uIChtb2R1bGUsIGV4cG9ydHMpIHtcbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHRyaW07XG5cbmZ1bmN0aW9uIHRyaW0oc3RyKXtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzKnxcXHMqJC9nLCAnJyk7XG59XG5cbmV4cG9ydHMubGVmdCA9IGZ1bmN0aW9uKHN0cil7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyovLCAnJyk7XG59O1xuXG5leHBvcnRzLnJpZ2h0ID0gZnVuY3Rpb24oc3RyKXtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXHMqJC8sICcnKTtcbn07XG59KTtcblxudmFyIGZvckVhY2hfMSA9IGZvckVhY2g7XG5cbnZhciB0b1N0cmluZyQxID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbmZ1bmN0aW9uIGZvckVhY2gobGlzdCwgaXRlcmF0b3IsIGNvbnRleHQpIHtcbiAgICBpZiAoIWlzRnVuY3Rpb25fMShpdGVyYXRvcikpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignaXRlcmF0b3IgbXVzdCBiZSBhIGZ1bmN0aW9uJylcbiAgICB9XG5cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDMpIHtcbiAgICAgICAgY29udGV4dCA9IHRoaXM7XG4gICAgfVxuICAgIFxuICAgIGlmICh0b1N0cmluZyQxLmNhbGwobGlzdCkgPT09ICdbb2JqZWN0IEFycmF5XScpXG4gICAgICAgIGZvckVhY2hBcnJheSQxKGxpc3QsIGl0ZXJhdG9yLCBjb250ZXh0KTtcbiAgICBlbHNlIGlmICh0eXBlb2YgbGlzdCA9PT0gJ3N0cmluZycpXG4gICAgICAgIGZvckVhY2hTdHJpbmcobGlzdCwgaXRlcmF0b3IsIGNvbnRleHQpO1xuICAgIGVsc2VcbiAgICAgICAgZm9yRWFjaE9iamVjdChsaXN0LCBpdGVyYXRvciwgY29udGV4dCk7XG59XG5cbmZ1bmN0aW9uIGZvckVhY2hBcnJheSQxKGFycmF5LCBpdGVyYXRvciwgY29udGV4dCkge1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBhcnJheS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChhcnJheSwgaSkpIHtcbiAgICAgICAgICAgIGl0ZXJhdG9yLmNhbGwoY29udGV4dCwgYXJyYXlbaV0sIGksIGFycmF5KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gZm9yRWFjaFN0cmluZyhzdHJpbmcsIGl0ZXJhdG9yLCBjb250ZXh0KSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHN0cmluZy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAvLyBubyBzdWNoIHRoaW5nIGFzIGEgc3BhcnNlIHN0cmluZy5cbiAgICAgICAgaXRlcmF0b3IuY2FsbChjb250ZXh0LCBzdHJpbmcuY2hhckF0KGkpLCBpLCBzdHJpbmcpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZm9yRWFjaE9iamVjdChvYmplY3QsIGl0ZXJhdG9yLCBjb250ZXh0KSB7XG4gICAgZm9yICh2YXIgayBpbiBvYmplY3QpIHtcbiAgICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrKSkge1xuICAgICAgICAgICAgaXRlcmF0b3IuY2FsbChjb250ZXh0LCBvYmplY3Rba10sIGssIG9iamVjdCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbnZhciBpc0FycmF5ID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZykgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gICAgfTtcblxudmFyIHBhcnNlSGVhZGVycyA9IGZ1bmN0aW9uIChoZWFkZXJzKSB7XG4gIGlmICghaGVhZGVycylcbiAgICByZXR1cm4ge31cblxuICB2YXIgcmVzdWx0ID0ge307XG5cbiAgZm9yRWFjaF8xKFxuICAgICAgdHJpbV8xKGhlYWRlcnMpLnNwbGl0KCdcXG4nKVxuICAgICwgZnVuY3Rpb24gKHJvdykge1xuICAgICAgICB2YXIgaW5kZXggPSByb3cuaW5kZXhPZignOicpXG4gICAgICAgICAgLCBrZXkgPSB0cmltXzEocm93LnNsaWNlKDAsIGluZGV4KSkudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICwgdmFsdWUgPSB0cmltXzEocm93LnNsaWNlKGluZGV4ICsgMSkpO1xuXG4gICAgICAgIGlmICh0eXBlb2YocmVzdWx0W2tleV0pID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHJlc3VsdFtrZXldID0gdmFsdWU7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNBcnJheShyZXN1bHRba2V5XSkpIHtcbiAgICAgICAgICByZXN1bHRba2V5XS5wdXNoKHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXN1bHRba2V5XSA9IFsgcmVzdWx0W2tleV0sIHZhbHVlIF07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgKTtcblxuICByZXR1cm4gcmVzdWx0XG59O1xuXG52YXIgaW1tdXRhYmxlID0gZXh0ZW5kO1xuXG52YXIgaGFzT3duUHJvcGVydHkkMSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbmZ1bmN0aW9uIGV4dGVuZCgpIHtcbiAgICB2YXIgdGFyZ2V0ID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eSQxLmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXRcbn1cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuXG5cblxudmFyIHhociA9IGNyZWF0ZVhIUjtcbi8vIEFsbG93IHVzZSBvZiBkZWZhdWx0IGltcG9ydCBzeW50YXggaW4gVHlwZVNjcmlwdFxudmFyIGRlZmF1bHRfMSA9IGNyZWF0ZVhIUjtcbmNyZWF0ZVhIUi5YTUxIdHRwUmVxdWVzdCA9IHdpbmRvd18xLlhNTEh0dHBSZXF1ZXN0IHx8IG5vb3A7XG5jcmVhdGVYSFIuWERvbWFpblJlcXVlc3QgPSBcIndpdGhDcmVkZW50aWFsc1wiIGluIChuZXcgY3JlYXRlWEhSLlhNTEh0dHBSZXF1ZXN0KCkpID8gY3JlYXRlWEhSLlhNTEh0dHBSZXF1ZXN0IDogd2luZG93XzEuWERvbWFpblJlcXVlc3Q7XG5cbmZvckVhY2hBcnJheShbXCJnZXRcIiwgXCJwdXRcIiwgXCJwb3N0XCIsIFwicGF0Y2hcIiwgXCJoZWFkXCIsIFwiZGVsZXRlXCJdLCBmdW5jdGlvbihtZXRob2QpIHtcbiAgICBjcmVhdGVYSFJbbWV0aG9kID09PSBcImRlbGV0ZVwiID8gXCJkZWxcIiA6IG1ldGhvZF0gPSBmdW5jdGlvbih1cmksIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgICAgIG9wdGlvbnMgPSBpbml0UGFyYW1zKHVyaSwgb3B0aW9ucywgY2FsbGJhY2spO1xuICAgICAgICBvcHRpb25zLm1ldGhvZCA9IG1ldGhvZC50b1VwcGVyQ2FzZSgpO1xuICAgICAgICByZXR1cm4gX2NyZWF0ZVhIUihvcHRpb25zKVxuICAgIH07XG59KTtcblxuZnVuY3Rpb24gZm9yRWFjaEFycmF5KGFycmF5LCBpdGVyYXRvcikge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaXRlcmF0b3IoYXJyYXlbaV0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gaXNFbXB0eShvYmope1xuICAgIGZvcih2YXIgaSBpbiBvYmope1xuICAgICAgICBpZihvYmouaGFzT3duUHJvcGVydHkoaSkpIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpbml0UGFyYW1zKHVyaSwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICB2YXIgcGFyYW1zID0gdXJpO1xuXG4gICAgaWYgKGlzRnVuY3Rpb25fMShvcHRpb25zKSkge1xuICAgICAgICBjYWxsYmFjayA9IG9wdGlvbnM7XG4gICAgICAgIGlmICh0eXBlb2YgdXJpID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBwYXJhbXMgPSB7dXJpOnVyaX07XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBwYXJhbXMgPSBpbW11dGFibGUob3B0aW9ucywge3VyaTogdXJpfSk7XG4gICAgfVxuXG4gICAgcGFyYW1zLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgcmV0dXJuIHBhcmFtc1xufVxuXG5mdW5jdGlvbiBjcmVhdGVYSFIodXJpLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIG9wdGlvbnMgPSBpbml0UGFyYW1zKHVyaSwgb3B0aW9ucywgY2FsbGJhY2spO1xuICAgIHJldHVybiBfY3JlYXRlWEhSKG9wdGlvbnMpXG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVYSFIob3B0aW9ucykge1xuICAgIGlmKHR5cGVvZiBvcHRpb25zLmNhbGxiYWNrID09PSBcInVuZGVmaW5lZFwiKXtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiY2FsbGJhY2sgYXJndW1lbnQgbWlzc2luZ1wiKVxuICAgIH1cblxuICAgIHZhciBjYWxsZWQgPSBmYWxzZTtcbiAgICB2YXIgY2FsbGJhY2sgPSBmdW5jdGlvbiBjYk9uY2UoZXJyLCByZXNwb25zZSwgYm9keSl7XG4gICAgICAgIGlmKCFjYWxsZWQpe1xuICAgICAgICAgICAgY2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIG9wdGlvbnMuY2FsbGJhY2soZXJyLCByZXNwb25zZSwgYm9keSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gcmVhZHlzdGF0ZWNoYW5nZSgpIHtcbiAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGxvYWRGdW5jLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEJvZHkoKSB7XG4gICAgICAgIC8vIENocm9tZSB3aXRoIHJlcXVlc3RUeXBlPWJsb2IgdGhyb3dzIGVycm9ycyBhcnJvdW5kIHdoZW4gZXZlbiB0ZXN0aW5nIGFjY2VzcyB0byByZXNwb25zZVRleHRcbiAgICAgICAgdmFyIGJvZHkgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgaWYgKHhoci5yZXNwb25zZSkge1xuICAgICAgICAgICAgYm9keSA9IHhoci5yZXNwb25zZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJvZHkgPSB4aHIucmVzcG9uc2VUZXh0IHx8IGdldFhtbCh4aHIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzSnNvbikge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBib2R5ID0gSlNPTi5wYXJzZShib2R5KTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYm9keVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVycm9yRnVuYyhldnQpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRUaW1lcik7XG4gICAgICAgIGlmKCEoZXZ0IGluc3RhbmNlb2YgRXJyb3IpKXtcbiAgICAgICAgICAgIGV2dCA9IG5ldyBFcnJvcihcIlwiICsgKGV2dCB8fCBcIlVua25vd24gWE1MSHR0cFJlcXVlc3QgRXJyb3JcIikgKTtcbiAgICAgICAgfVxuICAgICAgICBldnQuc3RhdHVzQ29kZSA9IDA7XG4gICAgICAgIHJldHVybiBjYWxsYmFjayhldnQsIGZhaWx1cmVSZXNwb25zZSlcbiAgICB9XG5cbiAgICAvLyB3aWxsIGxvYWQgdGhlIGRhdGEgJiBwcm9jZXNzIHRoZSByZXNwb25zZSBpbiBhIHNwZWNpYWwgcmVzcG9uc2Ugb2JqZWN0XG4gICAgZnVuY3Rpb24gbG9hZEZ1bmMoKSB7XG4gICAgICAgIGlmIChhYm9ydGVkKSByZXR1cm5cbiAgICAgICAgdmFyIHN0YXR1cztcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRUaW1lcik7XG4gICAgICAgIGlmKG9wdGlvbnMudXNlWERSICYmIHhoci5zdGF0dXM9PT11bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vSUU4IENPUlMgR0VUIHN1Y2Nlc3NmdWwgcmVzcG9uc2UgZG9lc24ndCBoYXZlIGEgc3RhdHVzIGZpZWxkLCBidXQgYm9keSBpcyBmaW5lXG4gICAgICAgICAgICBzdGF0dXMgPSAyMDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdGF0dXMgPSAoeGhyLnN0YXR1cyA9PT0gMTIyMyA/IDIwNCA6IHhoci5zdGF0dXMpO1xuICAgICAgICB9XG4gICAgICAgIHZhciByZXNwb25zZSA9IGZhaWx1cmVSZXNwb25zZTtcbiAgICAgICAgdmFyIGVyciA9IG51bGw7XG5cbiAgICAgICAgaWYgKHN0YXR1cyAhPT0gMCl7XG4gICAgICAgICAgICByZXNwb25zZSA9IHtcbiAgICAgICAgICAgICAgICBib2R5OiBnZXRCb2R5KCksXG4gICAgICAgICAgICAgICAgc3RhdHVzQ29kZTogc3RhdHVzLFxuICAgICAgICAgICAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHt9LFxuICAgICAgICAgICAgICAgIHVybDogdXJpLFxuICAgICAgICAgICAgICAgIHJhd1JlcXVlc3Q6IHhoclxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmKHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMpeyAvL3JlbWVtYmVyIHhociBjYW4gaW4gZmFjdCBiZSBYRFIgZm9yIENPUlMgaW4gSUVcbiAgICAgICAgICAgICAgICByZXNwb25zZS5oZWFkZXJzID0gcGFyc2VIZWFkZXJzKHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlcnIgPSBuZXcgRXJyb3IoXCJJbnRlcm5hbCBYTUxIdHRwUmVxdWVzdCBFcnJvclwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2FsbGJhY2soZXJyLCByZXNwb25zZSwgcmVzcG9uc2UuYm9keSlcbiAgICB9XG5cbiAgICB2YXIgeGhyID0gb3B0aW9ucy54aHIgfHwgbnVsbDtcblxuICAgIGlmICgheGhyKSB7XG4gICAgICAgIGlmIChvcHRpb25zLmNvcnMgfHwgb3B0aW9ucy51c2VYRFIpIHtcbiAgICAgICAgICAgIHhociA9IG5ldyBjcmVhdGVYSFIuWERvbWFpblJlcXVlc3QoKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB4aHIgPSBuZXcgY3JlYXRlWEhSLlhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIga2V5O1xuICAgIHZhciBhYm9ydGVkO1xuICAgIHZhciB1cmkgPSB4aHIudXJsID0gb3B0aW9ucy51cmkgfHwgb3B0aW9ucy51cmw7XG4gICAgdmFyIG1ldGhvZCA9IHhoci5tZXRob2QgPSBvcHRpb25zLm1ldGhvZCB8fCBcIkdFVFwiO1xuICAgIHZhciBib2R5ID0gb3B0aW9ucy5ib2R5IHx8IG9wdGlvbnMuZGF0YTtcbiAgICB2YXIgaGVhZGVycyA9IHhoci5oZWFkZXJzID0gb3B0aW9ucy5oZWFkZXJzIHx8IHt9O1xuICAgIHZhciBzeW5jID0gISFvcHRpb25zLnN5bmM7XG4gICAgdmFyIGlzSnNvbiA9IGZhbHNlO1xuICAgIHZhciB0aW1lb3V0VGltZXI7XG4gICAgdmFyIGZhaWx1cmVSZXNwb25zZSA9IHtcbiAgICAgICAgYm9keTogdW5kZWZpbmVkLFxuICAgICAgICBoZWFkZXJzOiB7fSxcbiAgICAgICAgc3RhdHVzQ29kZTogMCxcbiAgICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICAgIHVybDogdXJpLFxuICAgICAgICByYXdSZXF1ZXN0OiB4aHJcbiAgICB9O1xuXG4gICAgaWYgKFwianNvblwiIGluIG9wdGlvbnMgJiYgb3B0aW9ucy5qc29uICE9PSBmYWxzZSkge1xuICAgICAgICBpc0pzb24gPSB0cnVlO1xuICAgICAgICBoZWFkZXJzW1wiYWNjZXB0XCJdIHx8IGhlYWRlcnNbXCJBY2NlcHRcIl0gfHwgKGhlYWRlcnNbXCJBY2NlcHRcIl0gPSBcImFwcGxpY2F0aW9uL2pzb25cIik7IC8vRG9uJ3Qgb3ZlcnJpZGUgZXhpc3RpbmcgYWNjZXB0IGhlYWRlciBkZWNsYXJlZCBieSB1c2VyXG4gICAgICAgIGlmIChtZXRob2QgIT09IFwiR0VUXCIgJiYgbWV0aG9kICE9PSBcIkhFQURcIikge1xuICAgICAgICAgICAgaGVhZGVyc1tcImNvbnRlbnQtdHlwZVwiXSB8fCBoZWFkZXJzW1wiQ29udGVudC1UeXBlXCJdIHx8IChoZWFkZXJzW1wiQ29udGVudC1UeXBlXCJdID0gXCJhcHBsaWNhdGlvbi9qc29uXCIpOyAvL0Rvbid0IG92ZXJyaWRlIGV4aXN0aW5nIGFjY2VwdCBoZWFkZXIgZGVjbGFyZWQgYnkgdXNlclxuICAgICAgICAgICAgYm9keSA9IEpTT04uc3RyaW5naWZ5KG9wdGlvbnMuanNvbiA9PT0gdHJ1ZSA/IGJvZHkgOiBvcHRpb25zLmpzb24pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IHJlYWR5c3RhdGVjaGFuZ2U7XG4gICAgeGhyLm9ubG9hZCA9IGxvYWRGdW5jO1xuICAgIHhoci5vbmVycm9yID0gZXJyb3JGdW5jO1xuICAgIC8vIElFOSBtdXN0IGhhdmUgb25wcm9ncmVzcyBiZSBzZXQgdG8gYSB1bmlxdWUgZnVuY3Rpb24uXG4gICAgeGhyLm9ucHJvZ3Jlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIElFIG11c3QgZGllXG4gICAgfTtcbiAgICB4aHIub25hYm9ydCA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGFib3J0ZWQgPSB0cnVlO1xuICAgIH07XG4gICAgeGhyLm9udGltZW91dCA9IGVycm9yRnVuYztcbiAgICB4aHIub3BlbihtZXRob2QsIHVyaSwgIXN5bmMsIG9wdGlvbnMudXNlcm5hbWUsIG9wdGlvbnMucGFzc3dvcmQpO1xuICAgIC8vaGFzIHRvIGJlIGFmdGVyIG9wZW5cbiAgICBpZighc3luYykge1xuICAgICAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gISFvcHRpb25zLndpdGhDcmVkZW50aWFscztcbiAgICB9XG4gICAgLy8gQ2Fubm90IHNldCB0aW1lb3V0IHdpdGggc3luYyByZXF1ZXN0XG4gICAgLy8gbm90IHNldHRpbmcgdGltZW91dCBvbiB0aGUgeGhyIG9iamVjdCwgYmVjYXVzZSBvZiBvbGQgd2Via2l0cyBldGMuIG5vdCBoYW5kbGluZyB0aGF0IGNvcnJlY3RseVxuICAgIC8vIGJvdGggbnBtJ3MgcmVxdWVzdCBhbmQganF1ZXJ5IDEueCB1c2UgdGhpcyBraW5kIG9mIHRpbWVvdXQsIHNvIHRoaXMgaXMgYmVpbmcgY29uc2lzdGVudFxuICAgIGlmICghc3luYyAmJiBvcHRpb25zLnRpbWVvdXQgPiAwICkge1xuICAgICAgICB0aW1lb3V0VGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBpZiAoYWJvcnRlZCkgcmV0dXJuXG4gICAgICAgICAgICBhYm9ydGVkID0gdHJ1ZTsvL0lFOSBtYXkgc3RpbGwgY2FsbCByZWFkeXN0YXRlY2hhbmdlXG4gICAgICAgICAgICB4aHIuYWJvcnQoXCJ0aW1lb3V0XCIpO1xuICAgICAgICAgICAgdmFyIGUgPSBuZXcgRXJyb3IoXCJYTUxIdHRwUmVxdWVzdCB0aW1lb3V0XCIpO1xuICAgICAgICAgICAgZS5jb2RlID0gXCJFVElNRURPVVRcIjtcbiAgICAgICAgICAgIGVycm9yRnVuYyhlKTtcbiAgICAgICAgfSwgb3B0aW9ucy50aW1lb3V0ICk7XG4gICAgfVxuXG4gICAgaWYgKHhoci5zZXRSZXF1ZXN0SGVhZGVyKSB7XG4gICAgICAgIGZvcihrZXkgaW4gaGVhZGVycyl7XG4gICAgICAgICAgICBpZihoZWFkZXJzLmhhc093blByb3BlcnR5KGtleSkpe1xuICAgICAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgaGVhZGVyc1trZXldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAob3B0aW9ucy5oZWFkZXJzICYmICFpc0VtcHR5KG9wdGlvbnMuaGVhZGVycykpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSGVhZGVycyBjYW5ub3QgYmUgc2V0IG9uIGFuIFhEb21haW5SZXF1ZXN0IG9iamVjdFwiKVxuICAgIH1cblxuICAgIGlmIChcInJlc3BvbnNlVHlwZVwiIGluIG9wdGlvbnMpIHtcbiAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9IG9wdGlvbnMucmVzcG9uc2VUeXBlO1xuICAgIH1cblxuICAgIGlmIChcImJlZm9yZVNlbmRcIiBpbiBvcHRpb25zICYmXG4gICAgICAgIHR5cGVvZiBvcHRpb25zLmJlZm9yZVNlbmQgPT09IFwiZnVuY3Rpb25cIlxuICAgICkge1xuICAgICAgICBvcHRpb25zLmJlZm9yZVNlbmQoeGhyKTtcbiAgICB9XG5cbiAgICAvLyBNaWNyb3NvZnQgRWRnZSBicm93c2VyIHNlbmRzIFwidW5kZWZpbmVkXCIgd2hlbiBzZW5kIGlzIGNhbGxlZCB3aXRoIHVuZGVmaW5lZCB2YWx1ZS5cbiAgICAvLyBYTUxIdHRwUmVxdWVzdCBzcGVjIHNheXMgdG8gcGFzcyBudWxsIGFzIGJvZHkgdG8gaW5kaWNhdGUgbm8gYm9keVxuICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vbmF1Z3R1ci94aHIvaXNzdWVzLzEwMC5cbiAgICB4aHIuc2VuZChib2R5IHx8IG51bGwpO1xuXG4gICAgcmV0dXJuIHhoclxuXG5cbn1cblxuZnVuY3Rpb24gZ2V0WG1sKHhocikge1xuICAgIC8vIHhoci5yZXNwb25zZVhNTCB3aWxsIHRocm93IEV4Y2VwdGlvbiBcIkludmFsaWRTdGF0ZUVycm9yXCIgb3IgXCJET01FeGNlcHRpb25cIlxuICAgIC8vIFNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvWE1MSHR0cFJlcXVlc3QvcmVzcG9uc2VYTUwuXG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHhoci5yZXNwb25zZVR5cGUgPT09IFwiZG9jdW1lbnRcIikge1xuICAgICAgICAgICAgcmV0dXJuIHhoci5yZXNwb25zZVhNTFxuICAgICAgICB9XG4gICAgICAgIHZhciBmaXJlZm94QnVnVGFrZW5FZmZlY3QgPSB4aHIucmVzcG9uc2VYTUwgJiYgeGhyLnJlc3BvbnNlWE1MLmRvY3VtZW50RWxlbWVudC5ub2RlTmFtZSA9PT0gXCJwYXJzZXJlcnJvclwiO1xuICAgICAgICBpZiAoeGhyLnJlc3BvbnNlVHlwZSA9PT0gXCJcIiAmJiAhZmlyZWZveEJ1Z1Rha2VuRWZmZWN0KSB7XG4gICAgICAgICAgICByZXR1cm4geGhyLnJlc3BvbnNlWE1MXG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7fVxuXG4gICAgcmV0dXJuIG51bGxcbn1cblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnhoci5kZWZhdWx0ID0gZGVmYXVsdF8xO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iajtcbn0gOiBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xufTtcblxuXG5cblxuXG52YXIgYXN5bmNHZW5lcmF0b3IgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEF3YWl0VmFsdWUodmFsdWUpIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cblxuICBmdW5jdGlvbiBBc3luY0dlbmVyYXRvcihnZW4pIHtcbiAgICB2YXIgZnJvbnQsIGJhY2s7XG5cbiAgICBmdW5jdGlvbiBzZW5kKGtleSwgYXJnKSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICB2YXIgcmVxdWVzdCA9IHtcbiAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICBhcmc6IGFyZyxcbiAgICAgICAgICByZXNvbHZlOiByZXNvbHZlLFxuICAgICAgICAgIHJlamVjdDogcmVqZWN0LFxuICAgICAgICAgIG5leHQ6IG51bGxcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoYmFjaykge1xuICAgICAgICAgIGJhY2sgPSBiYWNrLm5leHQgPSByZXF1ZXN0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZyb250ID0gYmFjayA9IHJlcXVlc3Q7XG4gICAgICAgICAgcmVzdW1lKGtleSwgYXJnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzdW1lKGtleSwgYXJnKSB7XG4gICAgICB0cnkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gZ2VuW2tleV0oYXJnKTtcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuXG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEF3YWl0VmFsdWUpIHtcbiAgICAgICAgICBQcm9taXNlLnJlc29sdmUodmFsdWUudmFsdWUpLnRoZW4oZnVuY3Rpb24gKGFyZykge1xuICAgICAgICAgICAgcmVzdW1lKFwibmV4dFwiLCBhcmcpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uIChhcmcpIHtcbiAgICAgICAgICAgIHJlc3VtZShcInRocm93XCIsIGFyZyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2V0dGxlKHJlc3VsdC5kb25lID8gXCJyZXR1cm5cIiA6IFwibm9ybWFsXCIsIHJlc3VsdC52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBzZXR0bGUoXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldHRsZSh0eXBlLCB2YWx1ZSkge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgXCJyZXR1cm5cIjpcbiAgICAgICAgICBmcm9udC5yZXNvbHZlKHtcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgIGRvbmU6IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFwidGhyb3dcIjpcbiAgICAgICAgICBmcm9udC5yZWplY3QodmFsdWUpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgZnJvbnQucmVzb2x2ZSh7XG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICBkb25lOiBmYWxzZVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBmcm9udCA9IGZyb250Lm5leHQ7XG5cbiAgICAgIGlmIChmcm9udCkge1xuICAgICAgICByZXN1bWUoZnJvbnQua2V5LCBmcm9udC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYmFjayA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5faW52b2tlID0gc2VuZDtcblxuICAgIGlmICh0eXBlb2YgZ2VuLnJldHVybiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICB0aGlzLnJldHVybiA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5hc3luY0l0ZXJhdG9yKSB7XG4gICAgQXN5bmNHZW5lcmF0b3IucHJvdG90eXBlW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gIH1cblxuICBBc3luY0dlbmVyYXRvci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uIChhcmcpIHtcbiAgICByZXR1cm4gdGhpcy5faW52b2tlKFwibmV4dFwiLCBhcmcpO1xuICB9O1xuXG4gIEFzeW5jR2VuZXJhdG9yLnByb3RvdHlwZS50aHJvdyA9IGZ1bmN0aW9uIChhcmcpIHtcbiAgICByZXR1cm4gdGhpcy5faW52b2tlKFwidGhyb3dcIiwgYXJnKTtcbiAgfTtcblxuICBBc3luY0dlbmVyYXRvci5wcm90b3R5cGUucmV0dXJuID0gZnVuY3Rpb24gKGFyZykge1xuICAgIHJldHVybiB0aGlzLl9pbnZva2UoXCJyZXR1cm5cIiwgYXJnKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHdyYXA6IGZ1bmN0aW9uIChmbikge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBBc3luY0dlbmVyYXRvcihmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICAgIH07XG4gICAgfSxcbiAgICBhd2FpdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICByZXR1cm4gbmV3IEF3YWl0VmFsdWUodmFsdWUpO1xuICAgIH1cbiAgfTtcbn0oKTtcblxuXG5cblxuXG52YXIgY2xhc3NDYWxsQ2hlY2sgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufTtcblxudmFyIGNyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9O1xufSgpO1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbnZhciB0b0NvbnN1bWFibGVBcnJheSA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgIGZvciAodmFyIGkgPSAwLCBhcnIyID0gQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIGFycjJbaV0gPSBhcnJbaV07XG5cbiAgICByZXR1cm4gYXJyMjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShhcnIpO1xuICB9XG59O1xuXG52YXIgbGFzdEVycm9yID0gJyc7XG5cbi8qKlxuICogQ3JlYXRlcyB0aGUgSFRMTSBmb3IgYSBmYWlsdXJlIG1lc3NhZ2VcbiAqIEBwYXJhbSB7c3RyaW5nfSBjYW52YXNDb250YWluZXJJZCBpZCBvZiBjb250YWluZXIgb2YgdGhcbiAqICAgICAgICBjYW52YXMuXG4gKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBodG1sLlxuICovXG5mdW5jdGlvbiBtYWtlRmFpbEhUTUwobXNnKSB7XG4gICAgcmV0dXJuICdcXG48dGFibGUgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAjOENFOyB3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlO1wiPjx0cj5cXG48dGQgYWxpZ249XCJjZW50ZXJcIj5cXG48ZGl2IHN0eWxlPVwiZGlzcGxheTogdGFibGUtY2VsbDsgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcIj5cXG48ZGl2IHN0eWxlPVwiXCI+JyArIG1zZyArICc8L2Rpdj5cXG48L2Rpdj5cXG48L3RkPjwvdHI+PC90YWJsZT5cXG4nO1xufVxuXG4vKipcbiAqIE1lc3NhZ2UgZm9yIGdldHRpbmcgYSB3ZWJnbCBicm93c2VyXG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG52YXIgR0VUX0FfV0VCR0xfQlJPV1NFUiA9ICdcXG5cXHRUaGlzIHBhZ2UgcmVxdWlyZXMgYSBicm93c2VyIHRoYXQgc3VwcG9ydHMgV2ViR0wuPGJyLz5cXG5cXHQ8YSBocmVmPVwiaHR0cDovL2dldC53ZWJnbC5vcmdcIj5DbGljayBoZXJlIHRvIHVwZ3JhZGUgeW91ciBicm93c2VyLjwvYT5cXG4nO1xuXG4vKipcbiAqIE1lc3NhZ2UgZm9yIG5lZWQgYmV0dGVyIGhhcmR3YXJlXG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG52YXIgT1RIRVJfUFJPQkxFTSA9ICdcXG5cXHRJdCBkb2VzIG5vdCBhcHBlYXIgeW91ciBjb21wdXRlciBjYW4gc3VwcG9ydCBXZWJHTC48YnIvPlxcblxcdDxhIGhyZWY9XCJodHRwOi8vZ2V0LndlYmdsLm9yZy90cm91Ymxlc2hvb3RpbmcvXCI+Q2xpY2sgaGVyZSBmb3IgbW9yZSBpbmZvcm1hdGlvbi48L2E+XFxuJztcblxuLyoqXG4gKiBDb2RlIHRvIHJldHVybiBpbiBgb25FcnJvcmAgY2FsbGJhY2sgd2hlbiB0aGUgYnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgd2ViZ2xcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKi9cbnZhciBFUlJPUl9CUk9XU0VSX1NVUFBPUlQgPSAxO1xuXG4vKipcbiAqIENvZGUgdG8gcmV0dXJuIGluIGBvbkVycm9yYCBjYWxsYmFjayB0aGVyZSdzIGFueSBvdGhlciBwcm9ibGVtIHJlbGF0ZWQgdG8gd2ViZ2xcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKi9cbnZhciBFUlJPUl9PVEhFUiA9IDI7XG5cbi8qKlxuICogQ3JlYXRlcyBhIHdlYmdsIGNvbnRleHQuIElmIGNyZWF0aW9uIGZhaWxzIGl0IHdpbGxcbiAqIGNoYW5nZSB0aGUgY29udGVudHMgb2YgdGhlIGNvbnRhaW5lciBvZiB0aGUgPGNhbnZhcz5cbiAqIHRhZyB0byBhbiBlcnJvciBtZXNzYWdlIHdpdGggdGhlIGNvcnJlY3QgbGlua3MgZm9yIFdlYkdMLFxuICogdW5sZXNzIGBvbkVycm9yYCBvcHRpb24gaXMgZGVmaW5lZCB0byBhIGNhbGxiYWNrLFxuICogd2hpY2ggYWxsb3dzIGZvciBjdXN0b20gZXJyb3IgaGFuZGxpbmcuLlxuICogQHBhcmFtIHtFbGVtZW50fSBjYW52YXMuIFRoZSBjYW52YXMgZWxlbWVudCB0byBjcmVhdGUgYVxuICogICAgIGNvbnRleHQgZnJvbS5cbiAqIEBwYXJhbSB7V2ViR0xDb250ZXh0Q3JlYXRpb25BdHRyaWJ1dGVzfSBvcHRBdHRyaWJzIEFueVxuICogICAgIGNyZWF0aW9uIGF0dHJpYnV0ZXMgeW91IHdhbnQgdG8gcGFzcyBpbi5cbiAqIEByZXR1cm4ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gVGhlIGNyZWF0ZWQgY29udGV4dC5cbiAqL1xuZnVuY3Rpb24gc2V0dXBXZWJHTChjYW52YXMsIG9wdEF0dHJpYnMsIG9uRXJyb3IpIHtcbiAgICBmdW5jdGlvbiBzaG93TGluayhzdHIpIHtcbiAgICAgICAgdmFyIGNvbnRhaW5lciA9IGNhbnZhcy5wYXJlbnROb2RlO1xuICAgICAgICBpZiAoY29udGFpbmVyKSB7XG4gICAgICAgICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gbWFrZUZhaWxIVE1MKHN0cik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVFcnJvcihlcnJvckNvZGUsIG1zZykge1xuICAgICAgICBpZiAodHlwZW9mIG9uRXJyb3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIG9uRXJyb3IoZXJyb3JDb2RlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNob3dMaW5rKG1zZyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXdpbmRvdy5XZWJHTFJlbmRlcmluZ0NvbnRleHQpIHtcbiAgICAgICAgaGFuZGxlRXJyb3IoRVJST1JfQlJPV1NFUl9TVVBQT1JULCBHRVRfQV9XRUJHTF9CUk9XU0VSKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIGNvbnRleHQgPSBjcmVhdGUzRENvbnRleHQoY2FudmFzLCBvcHRBdHRyaWJzKTtcbiAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgICAgaGFuZGxlRXJyb3IoRVJST1JfT1RIRVIsIE9USEVSX1BST0JMRU0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRleHQuZ2V0RXh0ZW5zaW9uKCdPRVNfc3RhbmRhcmRfZGVyaXZhdGl2ZXMnKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbnRleHQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHdlYmdsIGNvbnRleHQuXG4gKiBAcGFyYW0geyFDYW52YXN9IGNhbnZhcyBUaGUgY2FudmFzIHRhZyB0byBnZXQgY29udGV4dFxuICogICAgIGZyb20uIElmIG9uZSBpcyBub3QgcGFzc2VkIGluIG9uZSB3aWxsIGJlIGNyZWF0ZWQuXG4gKiBAcmV0dXJuIHshV2ViR0xDb250ZXh0fSBUaGUgY3JlYXRlZCBjb250ZXh0LlxuICovXG5mdW5jdGlvbiBjcmVhdGUzRENvbnRleHQoY2FudmFzLCBvcHRBdHRyaWJzKSB7XG4gICAgdmFyIG5hbWVzID0gWyd3ZWJnbCcsICdleHBlcmltZW50YWwtd2ViZ2wnXTtcbiAgICB2YXIgY29udGV4dCA9IG51bGw7XG4gICAgZm9yICh2YXIgaWkgPSAwOyBpaSA8IG5hbWVzLmxlbmd0aDsgKytpaSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KG5hbWVzW2lpXSwgb3B0QXR0cmlicyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGlmIChjb250ZXh0KSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNvbnRleHQ7XG59XG5cbi8qXG4gKlx0Q3JlYXRlIGEgVmVydGV4IG9mIGEgc3BlY2lmaWMgdHlwZSAoZ2wuVkVSVEVYX1NIQURFUi8pXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVNoYWRlcihtYWluLCBzb3VyY2UsIHR5cGUsIG9mZnNldCkge1xuICAgIHZhciBnbCA9IG1haW4uZ2w7XG5cbiAgICB2YXIgc2hhZGVyID0gZ2wuY3JlYXRlU2hhZGVyKHR5cGUpO1xuICAgIGdsLnNoYWRlclNvdXJjZShzaGFkZXIsIHNvdXJjZSk7XG4gICAgZ2wuY29tcGlsZVNoYWRlcihzaGFkZXIpO1xuXG4gICAgdmFyIGNvbXBpbGVkID0gZ2wuZ2V0U2hhZGVyUGFyYW1ldGVyKHNoYWRlciwgZ2wuQ09NUElMRV9TVEFUVVMpO1xuXG4gICAgaWYgKCFjb21waWxlZCkge1xuICAgICAgICAvLyBTb21ldGhpbmcgd2VudCB3cm9uZyBkdXJpbmcgY29tcGlsYXRpb247IGdldCB0aGUgZXJyb3JcbiAgICAgICAgbGFzdEVycm9yID0gZ2wuZ2V0U2hhZGVySW5mb0xvZyhzaGFkZXIpO1xuICAgICAgICBjb25zb2xlLmVycm9yKCcqKiogRXJyb3IgY29tcGlsaW5nIHNoYWRlciAnICsgc2hhZGVyICsgJzonICsgbGFzdEVycm9yKTtcbiAgICAgICAgbWFpbi50cmlnZ2VyKCdlcnJvcicsIHtcbiAgICAgICAgICAgIHNoYWRlcjogc2hhZGVyLFxuICAgICAgICAgICAgc291cmNlOiBzb3VyY2UsXG4gICAgICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICAgICAgZXJyb3I6IGxhc3RFcnJvcixcbiAgICAgICAgICAgIG9mZnNldDogb2Zmc2V0IHx8IDBcbiAgICAgICAgfSk7XG4gICAgICAgIGdsLmRlbGV0ZVNoYWRlcihzaGFkZXIpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gc2hhZGVyO1xufVxuXG4vKipcbiAqIExvYWRzIGEgc2hhZGVyLlxuICogQHBhcmFtIHshV2ViR0xDb250ZXh0fSBnbCBUaGUgV2ViR0xDb250ZXh0IHRvIHVzZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBzaGFkZXJTb3VyY2UgVGhlIHNoYWRlciBzb3VyY2UuXG4gKiBAcGFyYW0ge251bWJlcn0gc2hhZGVyVHlwZSBUaGUgdHlwZSBvZiBzaGFkZXIuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKHN0cmluZyk6IHZvaWQpIG9wdF9lcnJvckNhbGxiYWNrIGNhbGxiYWNrIGZvciBlcnJvcnMuXG4gKiBAcmV0dXJuIHshV2ViR0xTaGFkZXJ9IFRoZSBjcmVhdGVkIHNoYWRlci5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlUHJvZ3JhbShtYWluLCBzaGFkZXJzLCBvcHRBdHRyaWJzLCBvcHRMb2NhdGlvbnMpIHtcbiAgICB2YXIgZ2wgPSBtYWluLmdsO1xuXG4gICAgdmFyIHByb2dyYW0gPSBnbC5jcmVhdGVQcm9ncmFtKCk7XG4gICAgZm9yICh2YXIgaWkgPSAwOyBpaSA8IHNoYWRlcnMubGVuZ3RoOyArK2lpKSB7XG4gICAgICAgIGdsLmF0dGFjaFNoYWRlcihwcm9ncmFtLCBzaGFkZXJzW2lpXSk7XG4gICAgfVxuICAgIGlmIChvcHRBdHRyaWJzKSB7XG4gICAgICAgIGZvciAodmFyIF9paSA9IDA7IF9paSA8IG9wdEF0dHJpYnMubGVuZ3RoOyArK19paSkge1xuICAgICAgICAgICAgZ2wuYmluZEF0dHJpYkxvY2F0aW9uKHByb2dyYW0sIG9wdExvY2F0aW9ucyA/IG9wdExvY2F0aW9uc1tfaWldIDogX2lpLCBvcHRBdHRyaWJzW19paV0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdsLmxpbmtQcm9ncmFtKHByb2dyYW0pO1xuXG4gICAgLy8gQ2hlY2sgdGhlIGxpbmsgc3RhdHVzXG4gICAgdmFyIGxpbmtlZCA9IGdsLmdldFByb2dyYW1QYXJhbWV0ZXIocHJvZ3JhbSwgZ2wuTElOS19TVEFUVVMpO1xuICAgIGlmICghbGlua2VkKSB7XG4gICAgICAgIC8vIHNvbWV0aGluZyB3ZW50IHdyb25nIHdpdGggdGhlIGxpbmtcbiAgICAgICAgbGFzdEVycm9yID0gZ2wuZ2V0UHJvZ3JhbUluZm9Mb2cocHJvZ3JhbSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBpbiBwcm9ncmFtIGxpbmtpbmc6JyArIGxhc3RFcnJvcik7XG4gICAgICAgIGdsLmRlbGV0ZVByb2dyYW0ocHJvZ3JhbSk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gcHJvZ3JhbTtcbn1cblxuLy8gQnkgQnJldHQgQ2FtYmVyIG9uXG4vLyBodHRwczovL2dpdGh1Yi5jb20vdGFuZ3JhbXMvdGFuZ3JhbS9ibG9iL21hc3Rlci9zcmMvZ2wvZ2xzbC5qc1xuZnVuY3Rpb24gcGFyc2VVbmlmb3Jtcyh1bmlmb3Jtcykge1xuICAgIHZhciBwcmVmaXggPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IG51bGw7XG5cbiAgICB2YXIgcGFyc2VkID0gW107XG5cbiAgICBmb3IgKHZhciBuYW1lIGluIHVuaWZvcm1zKSB7XG4gICAgICAgIHZhciB1bmlmb3JtID0gdW5pZm9ybXNbbmFtZV07XG4gICAgICAgIHZhciB1ID0gdm9pZCAwO1xuXG4gICAgICAgIGlmIChwcmVmaXgpIHtcbiAgICAgICAgICAgIG5hbWUgPSBwcmVmaXggKyAnLicgKyBuYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2luZ2xlIGZsb2F0XG4gICAgICAgIGlmICh0eXBlb2YgdW5pZm9ybSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIHBhcnNlZC5wdXNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnZmxvYXQnLFxuICAgICAgICAgICAgICAgIG1ldGhvZDogJzFmJyxcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgIHZhbHVlOiB1bmlmb3JtXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBBcnJheTogdmVjdG9yLCBhcnJheSBvZiBmbG9hdHMsIGFycmF5IG9mIHRleHR1cmVzLCBvciBhcnJheSBvZiBzdHJ1Y3RzXG4gICAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodW5pZm9ybSkpIHtcbiAgICAgICAgICAgICAgICAvLyBOdW1lcmljIHZhbHVlc1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdW5pZm9ybVswXSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZmxvYXQgdmVjdG9ycyAodmVjMiwgdmVjMywgdmVjNClcbiAgICAgICAgICAgICAgICAgICAgaWYgKHVuaWZvcm0ubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJzZWQucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Zsb2F0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICcxZicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdW5pZm9ybVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gZmxvYXQgdmVjdG9ycyAodmVjMiwgdmVjMywgdmVjNClcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodW5pZm9ybS5sZW5ndGggPj0gMiAmJiB1bmlmb3JtLmxlbmd0aCA8PSA0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VkLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAndmVjJyArIHVuaWZvcm0ubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IHVuaWZvcm0ubGVuZ3RoICsgJ2Z2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHVuaWZvcm1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZsb2F0IGFycmF5XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh1bmlmb3JtLmxlbmd0aCA+IDQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VkLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Zsb2F0W10nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnMWZ2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUgKyAnWzBdJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB1bmlmb3JtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogYXNzdW1lIG1hdHJpeCBmb3IgKHR5cGVvZiA9PSBGbG9hdDMyQXJyYXkgJiYgbGVuZ3RoID09IDE2KT9cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gQXJyYXkgb2YgdGV4dHVyZXNcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgdW5pZm9ybVswXSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlZC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc2FtcGxlcjJEJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICcxaScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdW5pZm9ybVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gQXJyYXkgb2YgYXJyYXlzIC0gYnV0IG9ubHkgYXJyYXlzIG9mIHZlY3RvcnMgYXJlIGFsbG93ZWQgaW4gdGhpcyBjYXNlXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodW5pZm9ybVswXSkgJiYgdHlwZW9mIHVuaWZvcm1bMF1bMF0gPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZmxvYXQgdmVjdG9ycyAodmVjMiwgdmVjMywgdmVjNClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodW5pZm9ybVswXS5sZW5ndGggPj0gMiAmJiB1bmlmb3JtWzBdLmxlbmd0aCA8PSA0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNldCBlYWNoIHZlY3RvciBpbiB0aGUgYXJyYXlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh1ID0gMDsgdSA8IHVuaWZvcm0ubGVuZ3RoOyB1KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlZC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAndmVjJyArIHVuaWZvcm1bMF0ubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogdW5pZm9ybVt1XS5sZW5ndGggKyAnZnYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUgKyAnWycgKyB1ICsgJ10nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB1bmlmb3JtW3VdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBlbHNlIGVycm9yP1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQXJyYXkgb2Ygc3RydWN0dXJlc1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoX3R5cGVvZih1bmlmb3JtWzBdKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh1ID0gMDsgdSA8IHVuaWZvcm0ubGVuZ3RoOyB1KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNldCBlYWNoIHN0cnVjdCBpbiB0aGUgYXJyYXlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlZC5wdXNoLmFwcGx5KHBhcnNlZCwgdG9Db25zdW1hYmxlQXJyYXkocGFyc2VVbmlmb3Jtcyh1bmlmb3JtW3VdLCBuYW1lICsgJ1snICsgdSArICddJykpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEJvb2xlYW5cbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiB1bmlmb3JtID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Jvb2wnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnMWknLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB1bmlmb3JtXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBUZXh0dXJlXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIHVuaWZvcm0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJzZWQucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3NhbXBsZXIyRCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnMWknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHVuaWZvcm1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIFN0cnVjdHVyZVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICgodHlwZW9mIHVuaWZvcm0gPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHVuaWZvcm0pKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTZXQgZWFjaCBmaWVsZCBpbiB0aGUgc3RydWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VkLnB1c2guYXBwbHkocGFyc2VkLCB0b0NvbnN1bWFibGVBcnJheShwYXJzZVVuaWZvcm1zKHVuaWZvcm0sIG5hbWUpKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgIC8vIFRPRE86IHN1cHBvcnQgb3RoZXIgbm9uLWZsb2F0IHR5cGVzPyAoaW50LCBldGMuKVxuICAgIH1cbiAgICByZXR1cm4gcGFyc2VkO1xufVxuXG5mdW5jdGlvbiBpc0NhbnZhc1Zpc2libGUoY2FudmFzKSB7XG4gICAgcmV0dXJuIGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyBjYW52YXMuaGVpZ2h0ID4gMCAmJiBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIDwgKHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KTtcbn1cblxuZnVuY3Rpb24gaXNQb3dlck9mMih2YWx1ZSkge1xuICAgIHJldHVybiAodmFsdWUgJiB2YWx1ZSAtIDEpID09PSAwO1xufVxuXG5mdW5jdGlvbiBpc1NhZmFyaSgpIHtcbiAgICByZXR1cm4gKC9eKCg/IWNocm9tZXxhbmRyb2lkKS4pKnNhZmFyaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudClcbiAgICApO1xufVxuXG5cblxuXG5cblxuXG5mdW5jdGlvbiBpc0RpZmYoYSwgYikge1xuICAgIGlmIChhICYmIGIpIHtcbiAgICAgICAgcmV0dXJuIGEudG9TdHJpbmcoKSAhPT0gYi50b1N0cmluZygpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHN1YnNjcmliZU1peGluJDEodGFyZ2V0KSB7XG4gICAgdmFyIGxpc3RlbmVycyA9IG5ldyBTZXQoKTtcblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHRhcmdldCwge1xuICAgICAgICBvbjogZnVuY3Rpb24gb24odHlwZSwgZikge1xuICAgICAgICAgICAgdmFyIGxpc3RlbmVyID0ge307XG4gICAgICAgICAgICBsaXN0ZW5lclt0eXBlXSA9IGY7XG4gICAgICAgICAgICBsaXN0ZW5lcnMuYWRkKGxpc3RlbmVyKTtcbiAgICAgICAgfSxcbiAgICAgICAgb2ZmOiBmdW5jdGlvbiBvZmYodHlwZSwgZikge1xuICAgICAgICAgICAgaWYgKGYpIHtcbiAgICAgICAgICAgICAgICB2YXIgbGlzdGVuZXIgPSB7fTtcbiAgICAgICAgICAgICAgICBsaXN0ZW5lclt0eXBlXSA9IGY7XG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzLmRlbGV0ZShsaXN0ZW5lcik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB2YXIgX2l0ZXJhdG9yRXJyb3IgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSBsaXN0ZW5lcnNbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IF9zdGVwLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvcjIgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfaXRlcmF0b3JFcnJvcjIgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yMiA9IE9iamVjdC5rZXlzKGl0ZW0pW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXAyOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yID0gKF9zdGVwMiA9IF9pdGVyYXRvcjIubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgPSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBrZXkgPSBfc3RlcDIudmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGtleSA9PT0gdHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJzLmRlbGV0ZShpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9kaWRJdGVyYXRvckVycm9yMiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2l0ZXJhdG9yRXJyb3IyID0gZXJyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yICYmIF9pdGVyYXRvcjIucmV0dXJuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaXRlcmF0b3IyLnJldHVybigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3IyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIF9kaWRJdGVyYXRvckVycm9yID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgX2l0ZXJhdG9yRXJyb3IgPSBlcnI7XG4gICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiAmJiBfaXRlcmF0b3IucmV0dXJuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2l0ZXJhdG9yLnJldHVybigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGxpc3RTdWJzY3JpcHRpb25zOiBmdW5jdGlvbiBsaXN0U3Vic2NyaXB0aW9ucygpIHtcbiAgICAgICAgICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMyA9IHRydWU7XG4gICAgICAgICAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IzID0gZmFsc2U7XG4gICAgICAgICAgICB2YXIgX2l0ZXJhdG9yRXJyb3IzID0gdW5kZWZpbmVkO1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIF9pdGVyYXRvcjMgPSBsaXN0ZW5lcnNbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDM7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjMgPSAoX3N0ZXAzID0gX2l0ZXJhdG9yMy5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMyA9IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSBfc3RlcDMudmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coaXRlbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBfaXRlcmF0b3JFcnJvcjMgPSBlcnI7XG4gICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjMgJiYgX2l0ZXJhdG9yMy5yZXR1cm4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9pdGVyYXRvcjMucmV0dXJuKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHN1YnNjcmliZTogZnVuY3Rpb24gc3Vic2NyaWJlKGxpc3RlbmVyKSB7XG4gICAgICAgICAgICBsaXN0ZW5lcnMuYWRkKGxpc3RlbmVyKTtcbiAgICAgICAgfSxcbiAgICAgICAgdW5zdWJzY3JpYmU6IGZ1bmN0aW9uIHVuc3Vic2NyaWJlKGxpc3RlbmVyKSB7XG4gICAgICAgICAgICBsaXN0ZW5lcnMuZGVsZXRlKGxpc3RlbmVyKTtcbiAgICAgICAgfSxcbiAgICAgICAgdW5zdWJzY3JpYmVBbGw6IGZ1bmN0aW9uIHVuc3Vic2NyaWJlQWxsKCkge1xuICAgICAgICAgICAgbGlzdGVuZXJzLmNsZWFyKCk7XG4gICAgICAgIH0sXG4gICAgICAgIHRyaWdnZXI6IGZ1bmN0aW9uIHRyaWdnZXIoZXZlbnQpIHtcbiAgICAgICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBkYXRhID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICAgICAgICAgIGRhdGFbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjQgPSB0cnVlO1xuICAgICAgICAgICAgdmFyIF9kaWRJdGVyYXRvckVycm9yNCA9IGZhbHNlO1xuICAgICAgICAgICAgdmFyIF9pdGVyYXRvckVycm9yNCA9IHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3I0ID0gbGlzdGVuZXJzW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXA0OyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb240ID0gKF9zdGVwNCA9IF9pdGVyYXRvcjQubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjQgPSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBsaXN0ZW5lciA9IF9zdGVwNC52YWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGxpc3RlbmVyW2V2ZW50XSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJbZXZlbnRdLmFwcGx5KGxpc3RlbmVyLCB0b0NvbnN1bWFibGVBcnJheShkYXRhKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBfZGlkSXRlcmF0b3JFcnJvcjQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIF9pdGVyYXRvckVycm9yNCA9IGVycjtcbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uNCAmJiBfaXRlcmF0b3I0LnJldHVybikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX2l0ZXJhdG9yNC5yZXR1cm4oKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcjQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yNDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG4vLyBUZXh0dXJlIG1hbmFnZW1lbnRcbnZhciBUZXh0dXJlID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFRleHR1cmUoZ2wsIG5hbWUpIHtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuICAgICAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBUZXh0dXJlKTtcblxuICAgICAgICBzdWJzY3JpYmVNaXhpbiQxKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuZ2wgPSBnbDtcbiAgICAgICAgdGhpcy50ZXh0dXJlID0gZ2wuY3JlYXRlVGV4dHVyZSgpO1xuICAgICAgICBpZiAodGhpcy50ZXh0dXJlKSB7XG4gICAgICAgICAgICB0aGlzLnZhbGlkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJpbmQoKTtcblxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnNvdXJjZSA9IG51bGw7XG4gICAgICAgIHRoaXMuc291cmNlVHlwZSA9IG51bGw7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IG51bGw7IC8vIGEgUHJvbWlzZSBvYmplY3QgdG8gdHJhY2sgdGhlIGxvYWRpbmcgc3RhdGUgb2YgdGhpcyB0ZXh0dXJlXG5cbiAgICAgICAgLy8gRGVmYXVsdCB0byBhIDEtcGl4ZWwgYmxhY2sgdGV4dHVyZSBzbyB3ZSBjYW4gc2FmZWx5IHJlbmRlciB3aGlsZSB3ZSB3YWl0IGZvciBhbiBpbWFnZSB0byBsb2FkXG4gICAgICAgIC8vIFNlZTogaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xOTcyMjI0Ny93ZWJnbC13YWl0LWZvci10ZXh0dXJlLXRvLWxvYWRcbiAgICAgICAgdGhpcy5zZXREYXRhKDEsIDEsIG5ldyBVaW50OEFycmF5KFswLCAwLCAwLCAyNTVdKSwgeyBmaWx0ZXJpbmc6ICdsaW5lYXInIH0pO1xuICAgICAgICB0aGlzLnNldEZpbHRlcmluZyhvcHRpb25zLmZpbHRlcmluZyk7XG5cbiAgICAgICAgdGhpcy5sb2FkKG9wdGlvbnMpO1xuICAgIH1cblxuICAgIC8vIERlc3Ryb3kgYSBzaW5nbGUgdGV4dHVyZSBpbnN0YW5jZVxuXG5cbiAgICBjcmVhdGVDbGFzcyhUZXh0dXJlLCBbe1xuICAgICAgICBrZXk6ICdkZXN0cm95JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMudmFsaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmdsLmRlbGV0ZVRleHR1cmUodGhpcy50ZXh0dXJlKTtcbiAgICAgICAgICAgIHRoaXMudGV4dHVyZSA9IG51bGw7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5kYXRhO1xuICAgICAgICAgICAgdGhpcy5kYXRhID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMudmFsaWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnYmluZCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBiaW5kKHVuaXQpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy52YWxpZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdW5pdCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICBpZiAoVGV4dHVyZS5hY3RpdmVVbml0ICE9PSB1bml0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2wuYWN0aXZlVGV4dHVyZSh0aGlzLmdsLlRFWFRVUkUwICsgdW5pdCk7XG4gICAgICAgICAgICAgICAgICAgIFRleHR1cmUuYWN0aXZlVW5pdCA9IHVuaXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKFRleHR1cmUuYWN0aXZlVGV4dHVyZSAhPT0gdGhpcy50ZXh0dXJlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nbC5iaW5kVGV4dHVyZSh0aGlzLmdsLlRFWFRVUkVfMkQsIHRoaXMudGV4dHVyZSk7XG4gICAgICAgICAgICAgICAgVGV4dHVyZS5hY3RpdmVUZXh0dXJlID0gdGhpcy50ZXh0dXJlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdsb2FkJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGxvYWQoKSB7XG4gICAgICAgICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IG51bGw7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy51cmwgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudXJsID09PSB1bmRlZmluZWQgfHwgb3B0aW9ucy51cmwgIT09IHRoaXMudXJsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0VXJsKG9wdGlvbnMudXJsLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG9wdGlvbnMuZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0RWxlbWVudChvcHRpb25zLmVsZW1lbnQsIG9wdGlvbnMpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChvcHRpb25zLmRhdGEgJiYgb3B0aW9ucy53aWR0aCAmJiBvcHRpb25zLmhlaWdodCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YShvcHRpb25zLndpZHRoLCBvcHRpb25zLmhlaWdodCwgb3B0aW9ucy5kYXRhLCBvcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNldHMgdGV4dHVyZSBmcm9tIGFuIHVybFxuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzZXRVcmwnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0VXJsKHVybCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuXG4gICAgICAgICAgICBpZiAoIXRoaXMudmFsaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMudXJsID0gdXJsOyAvLyBzYXZlIFVSTCByZWZlcmVuY2UgKHdpbGwgYmUgb3ZlcndyaXR0ZW4gd2hlbiBlbGVtZW50IGlzIGxvYWRlZCBiZWxvdylcbiAgICAgICAgICAgIHRoaXMuc291cmNlID0gdGhpcy51cmw7XG4gICAgICAgICAgICB0aGlzLnNvdXJjZVR5cGUgPSAndXJsJztcblxuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgIHZhciBleHQgPSB1cmwuc3BsaXQoJy4nKS5wb3AoKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgIHZhciBpc1ZpZGVvID0gZXh0ID09PSAnb2d2JyB8fCBleHQgPT09ICd3ZWJtJyB8fCBleHQgPT09ICdtcDQnO1xuXG4gICAgICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgaWYgKGlzVmlkZW8pIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZpZGVvJyk7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYXV0b3BsYXkgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLmZpbHRlcmluZyA9ICduZWFyZXN0JztcbiAgICAgICAgICAgICAgICAgICAgLy8gZWxlbWVudC5wcmVsb2FkID0gJ2F1dG8nO1xuICAgICAgICAgICAgICAgICAgICAvLyBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgIC8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGVsZW1lbnQub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2V0RWxlbWVudChlbGVtZW50LCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1RleHR1cmUgXFwnJyArIF90aGlzLm5hbWUgKyAnXFwnOiBmYWlsZWQgdG8gbG9hZCB1cmw6IFxcJycgKyBfdGhpcy5zb3VyY2UgKyAnXFwnJywgZSwgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShfdGhpcyk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBlbGVtZW50Lm9uZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBXYXJuIGFuZCByZXNvbHZlIG9uIGVycm9yXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUZXh0dXJlIFxcJycgKyBfdGhpcy5uYW1lICsgJ1xcJzogZmFpbGVkIHRvIGxvYWQgdXJsOiBcXCcnICsgX3RoaXMuc291cmNlICsgJ1xcJycsIGUsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKF90aGlzKTtcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgLy8gU2FmYXJpIGhhcyBhIGJ1ZyBsb2FkaW5nIGRhdGEtVVJMIGVsZW1lbnRzIHdpdGggQ09SUyBlbmFibGVkLCBzbyBpdCBtdXN0IGJlIGRpc2FibGVkIGluIHRoYXQgY2FzZVxuICAgICAgICAgICAgICAgIC8vIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xMjM5NzhcbiAgICAgICAgICAgICAgICBpZiAoIShpc1NhZmFyaSgpICYmIF90aGlzLnNvdXJjZS5zbGljZSgwLCA1KSA9PT0gJ2RhdGE6JykpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jcm9zc09yaWdpbiA9ICdhbm9ueW1vdXMnO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3JjID0gX3RoaXMuc291cmNlO1xuICAgICAgICAgICAgICAgIGlmIChpc1ZpZGVvKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnNldEVsZW1lbnQoZWxlbWVudCwgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sb2FkaW5nO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2V0cyB0ZXh0dXJlIHRvIGEgcmF3IGltYWdlIGJ1ZmZlclxuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzZXREYXRhJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldERhdGEod2lkdGgsIGhlaWdodCwgZGF0YSkge1xuICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IHt9O1xuXG4gICAgICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcblxuICAgICAgICAgICAgdGhpcy5zb3VyY2UgPSBkYXRhO1xuICAgICAgICAgICAgdGhpcy5zb3VyY2VUeXBlID0gJ2RhdGEnO1xuXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZShvcHRpb25zKTtcbiAgICAgICAgICAgIHRoaXMuc2V0RmlsdGVyaW5nKG9wdGlvbnMpO1xuXG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBQcm9taXNlLnJlc29sdmUodGhpcyk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sb2FkaW5nO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2V0cyB0aGUgdGV4dHVyZSB0byB0cmFjayBhIGVsZW1lbnQgKGNhbnZhcy9pbWFnZSlcblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc2V0RWxlbWVudCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRFbGVtZW50KGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICAgICB2YXIgZWwgPSBlbGVtZW50O1xuXG4gICAgICAgICAgICAvLyBhIHN0cmluZyBlbGVtZW50IGlzIGludGVycGV0ZWQgYXMgYSBDU1Mgc2VsZWN0b3JcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtZW50KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MQ2FudmFzRWxlbWVudCB8fCBlbGVtZW50IGluc3RhbmNlb2YgSFRNTEltYWdlRWxlbWVudCB8fCBlbGVtZW50IGluc3RhbmNlb2YgSFRNTFZpZGVvRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc291cmNlID0gZWxlbWVudDtcbiAgICAgICAgICAgICAgICB0aGlzLnNvdXJjZVR5cGUgPSAnZWxlbWVudCc7XG5cbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxWaWRlb0VsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjYW5wbGF5dGhyb3VnaCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzMi5pbnRlcnZhbElEID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzMi51cGRhdGUob3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAxNSk7XG4gICAgICAgICAgICAgICAgICAgIH0sIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2VuZGVkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jdXJyZW50VGltZSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnBsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGUob3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0RmlsdGVyaW5nKG9wdGlvbnMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgbXNnID0gJ3RoZSBcXCdlbGVtZW50XFwnIHBhcmFtZXRlciAoYGVsZW1lbnQ6ICcgKyBKU09OLnN0cmluZ2lmeShlbCkgKyAnYCkgbXVzdCBiZSBhIENTUyAnO1xuICAgICAgICAgICAgICAgIG1zZyArPSAnc2VsZWN0b3Igc3RyaW5nLCBvciBhIDxjYW52YXM+LCA8aW1hZ2U+IG9yIDx2aWRlbz4gb2JqZWN0JztcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVGV4dHVyZSBcXCcnICsgdGhpcy5uYW1lICsgJ1xcJzogJyArIG1zZywgb3B0aW9ucyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IFByb21pc2UucmVzb2x2ZSh0aGlzKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxvYWRpbmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVcGxvYWRzIGN1cnJlbnQgaW1hZ2Ugb3IgYnVmZmVyIHRvIHRoZSBHUFUgKGNhbiBiZSB1c2VkIHRvIHVwZGF0ZSBhbmltYXRlZCB0ZXh0dXJlcyBvbiB0aGUgZmx5KVxuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICd1cGRhdGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gICAgICAgICAgICBpZiAoIXRoaXMudmFsaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuYmluZCgpO1xuICAgICAgICAgICAgdGhpcy5nbC5waXhlbFN0b3JlaSh0aGlzLmdsLlVOUEFDS19GTElQX1lfV0VCR0wsIG9wdGlvbnMuVU5QQUNLX0ZMSVBfWV9XRUJHTCA9PT0gZmFsc2UgPyBmYWxzZSA6IHRydWUpO1xuICAgICAgICAgICAgdGhpcy5nbC5waXhlbFN0b3JlaSh0aGlzLmdsLlVOUEFDS19QUkVNVUxUSVBMWV9BTFBIQV9XRUJHTCwgb3B0aW9ucy5VTlBBQ0tfUFJFTVVMVElQTFlfQUxQSEFfV0VCR0wgfHwgZmFsc2UpO1xuXG4gICAgICAgICAgICAvLyBJbWFnZSBvciBDYW52YXMgZWxlbWVudFxuICAgICAgICAgICAgaWYgKHRoaXMuc291cmNlVHlwZSA9PT0gJ2VsZW1lbnQnICYmICh0aGlzLnNvdXJjZSBpbnN0YW5jZW9mIEhUTUxDYW52YXNFbGVtZW50IHx8IHRoaXMuc291cmNlIGluc3RhbmNlb2YgSFRNTFZpZGVvRWxlbWVudCB8fCB0aGlzLnNvdXJjZSBpbnN0YW5jZW9mIEhUTUxJbWFnZUVsZW1lbnQgJiYgdGhpcy5zb3VyY2UuY29tcGxldGUpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc291cmNlIGluc3RhbmNlb2YgSFRNTFZpZGVvRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLndpZHRoID0gdGhpcy5zb3VyY2UudmlkZW9XaWR0aDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLnNvdXJjZS52aWRlb0hlaWdodDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLndpZHRoID0gdGhpcy5zb3VyY2Uud2lkdGg7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5zb3VyY2UuaGVpZ2h0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmdsLnRleEltYWdlMkQodGhpcy5nbC5URVhUVVJFXzJELCAwLCB0aGlzLmdsLlJHQkEsIHRoaXMuZ2wuUkdCQSwgdGhpcy5nbC5VTlNJR05FRF9CWVRFLCB0aGlzLnNvdXJjZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBSYXcgaW1hZ2UgYnVmZmVyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLnNvdXJjZVR5cGUgPT09ICdkYXRhJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdsLnRleEltYWdlMkQodGhpcy5nbC5URVhUVVJFXzJELCAwLCB0aGlzLmdsLlJHQkEsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCAwLCB0aGlzLmdsLlJHQkEsIHRoaXMuZ2wuVU5TSUdORURfQllURSwgdGhpcy5zb3VyY2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudHJpZ2dlcignbG9hZGVkJywgdGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBEZXRlcm1pbmVzIGFwcHJvcHJpYXRlIGZpbHRlcmluZyBtb2RlXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3NldEZpbHRlcmluZycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRGaWx0ZXJpbmcoKSB7XG4gICAgICAgICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgICAgICAgICAgIGlmICghdGhpcy52YWxpZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5wb3dlck9mMiA9IGlzUG93ZXJPZjIodGhpcy53aWR0aCkgJiYgaXNQb3dlck9mMih0aGlzLmhlaWdodCk7XG4gICAgICAgICAgICB2YXIgZGVmdWFsdEZpbHRlciA9IHRoaXMucG93ZXJPZjIgPyAnbWlwbWFwJyA6ICdsaW5lYXInO1xuICAgICAgICAgICAgdGhpcy5maWx0ZXJpbmcgPSBvcHRpb25zLmZpbHRlcmluZyB8fCBkZWZ1YWx0RmlsdGVyO1xuXG4gICAgICAgICAgICB2YXIgZ2wgPSB0aGlzLmdsO1xuICAgICAgICAgICAgdGhpcy5iaW5kKCk7XG5cbiAgICAgICAgICAgIC8vIEZvciBwb3dlci1vZi0yIHRleHR1cmVzLCB0aGUgZm9sbG93aW5nIHByZXNldHMgYXJlIGF2YWlsYWJsZTpcbiAgICAgICAgICAgIC8vIG1pcG1hcDogbGluZWFyIGJsZW5kIGZyb20gbmVhcmVzdCBtaXBcbiAgICAgICAgICAgIC8vIGxpbmVhcjogbGluZWFyIGJsZW5kIGZyb20gb3JpZ2luYWwgaW1hZ2UgKG5vIG1pcHMpXG4gICAgICAgICAgICAvLyBuZWFyZXN0OiBuZWFyZXN0IHBpeGVsIGZyb20gb3JpZ2luYWwgaW1hZ2UgKG5vIG1pcHMsICdibG9ja3knIGxvb2spXG4gICAgICAgICAgICBpZiAodGhpcy5wb3dlck9mMikge1xuICAgICAgICAgICAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1MsIG9wdGlvbnMuVEVYVFVSRV9XUkFQX1MgfHwgb3B0aW9ucy5yZXBlYXQgJiYgZ2wuUkVQRUFUIHx8IGdsLkNMQU1QX1RPX0VER0UpO1xuICAgICAgICAgICAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1QsIG9wdGlvbnMuVEVYVFVSRV9XUkFQX1QgfHwgb3B0aW9ucy5yZXBlYXQgJiYgZ2wuUkVQRUFUIHx8IGdsLkNMQU1QX1RPX0VER0UpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZmlsdGVyaW5nID09PSAnbWlwbWFwJykge1xuICAgICAgICAgICAgICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUlOX0ZJTFRFUiwgZ2wuTElORUFSX01JUE1BUF9MSU5FQVIpOyAvLyBUT0RPOiB1c2UgdHJpbGluZWFyIGZpbHRlcmluZyBieSBkZWZ1YWx0IGluc3RlYWQ/XG4gICAgICAgICAgICAgICAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NQUdfRklMVEVSLCBnbC5MSU5FQVIpO1xuICAgICAgICAgICAgICAgICAgICBnbC5nZW5lcmF0ZU1pcG1hcChnbC5URVhUVVJFXzJEKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZmlsdGVyaW5nID09PSAnbGluZWFyJykge1xuICAgICAgICAgICAgICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUlOX0ZJTFRFUiwgZ2wuTElORUFSKTtcbiAgICAgICAgICAgICAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01BR19GSUxURVIsIGdsLkxJTkVBUik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmZpbHRlcmluZyA9PT0gJ25lYXJlc3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NSU5fRklMVEVSLCBnbC5ORUFSRVNUKTtcbiAgICAgICAgICAgICAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01BR19GSUxURVIsIGdsLk5FQVJFU1QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gV2ViR0wgaGFzIHN0cmljdCByZXF1aXJlbWVudHMgb24gbm9uLXBvd2VyLW9mLTIgdGV4dHVyZXM6XG4gICAgICAgICAgICAgICAgLy8gTm8gbWlwbWFwcyBhbmQgbXVzdCBjbGFtcCB0byBlZGdlXG4gICAgICAgICAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfUywgZ2wuQ0xBTVBfVE9fRURHRSk7XG4gICAgICAgICAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfVCwgZ2wuQ0xBTVBfVE9fRURHRSk7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5maWx0ZXJpbmcgPT09ICdtaXBtYXAnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyaW5nID0gJ2xpbmVhcic7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZmlsdGVyaW5nID09PSAnbmVhcmVzdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01JTl9GSUxURVIsIGdsLk5FQVJFU1QpO1xuICAgICAgICAgICAgICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUFHX0ZJTFRFUiwgZ2wuTkVBUkVTVCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZGVmYXVsdCB0byBsaW5lYXIgZm9yIG5vbi1wb3dlci1vZi0yIHRleHR1cmVzXG4gICAgICAgICAgICAgICAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NSU5fRklMVEVSLCBnbC5MSU5FQVIpO1xuICAgICAgICAgICAgICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUFHX0ZJTFRFUiwgZ2wuTElORUFSKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XSk7XG4gICAgcmV0dXJuIFRleHR1cmU7XG59KCk7XG5cbi8vIFJlcG9ydCBtYXggdGV4dHVyZSBzaXplIGZvciBhIEdMIGNvbnRleHRcblxuXG5UZXh0dXJlLmdldE1heFRleHR1cmVTaXplID0gZnVuY3Rpb24gKGdsKSB7XG4gICAgcmV0dXJuIGdsLmdldFBhcmFtZXRlcihnbC5NQVhfVEVYVFVSRV9TSVpFKTtcbn07XG5cbi8vIEdsb2JhbCBzZXQgb2YgdGV4dHVyZXMsIGJ5IG5hbWVcblRleHR1cmUuYWN0aXZlVW5pdCA9IC0xO1xuXG4vKlxuVGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cbkNvcHlyaWdodCAoYykgMjAxNSBQYXRyaWNpbyBHb256YWxleiBWaXZvICggaHR0cDovL3d3dy5wYXRyaWNpb2dvbnphbGV6dml2by5jb20gKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mXG50aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSAnU29mdHdhcmUnKSwgdG8gZGVhbCBpblxudGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0b1xudXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2ZcbnRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbyxcbnN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbmNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCAnQVMgSVMnLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5JTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTU1xuRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SXG5DT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVJcbklOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOXG5DT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxudmFyIEdsc2xDYW52YXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gR2xzbENhbnZhcyhjYW52YXMsIGNvbnRleHRPcHRpb25zLCBvcHRpb25zKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgR2xzbENhbnZhcyk7XG5cbiAgICAgICAgc3Vic2NyaWJlTWl4aW4kMSh0aGlzKTtcblxuICAgICAgICBjb250ZXh0T3B0aW9ucyA9IGNvbnRleHRPcHRpb25zIHx8IHt9O1xuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgICAgICB0aGlzLndpZHRoID0gY2FudmFzLmNsaWVudFdpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGNhbnZhcy5jbGllbnRIZWlnaHQ7XG5cbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuZ2wgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMucHJvZ3JhbSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy50ZXh0dXJlcyA9IHt9O1xuICAgICAgICB0aGlzLmJ1ZmZlcnMgPSB7fTtcbiAgICAgICAgdGhpcy51bmlmb3JtcyA9IHt9O1xuICAgICAgICB0aGlzLnZibyA9IHt9O1xuICAgICAgICB0aGlzLmlzVmFsaWQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLkJVRkZFUl9DT1VOVCA9IDA7XG4gICAgICAgIHRoaXMuVEVYVFVSRV9DT1VOVCA9IDA7XG5cbiAgICAgICAgdGhpcy52ZXJ0ZXhTdHJpbmcgPSBjb250ZXh0T3B0aW9ucy52ZXJ0ZXhTdHJpbmcgfHwgJ1xcbiNpZmRlZiBHTF9FU1xcbnByZWNpc2lvbiBtZWRpdW1wIGZsb2F0O1xcbiNlbmRpZlxcblxcbmF0dHJpYnV0ZSB2ZWMyIGFfcG9zaXRpb247XFxuYXR0cmlidXRlIHZlYzIgYV90ZXhjb29yZDtcXG5cXG52YXJ5aW5nIHZlYzIgdl90ZXhjb29yZDtcXG5cXG52b2lkIG1haW4oKSB7XFxuICAgIGdsX1Bvc2l0aW9uID0gdmVjNChhX3Bvc2l0aW9uLCAwLjAsIDEuMCk7XFxuICAgIHZfdGV4Y29vcmQgPSBhX3RleGNvb3JkO1xcbn1cXG4nO1xuICAgICAgICB0aGlzLmZyYWdtZW50U3RyaW5nID0gY29udGV4dE9wdGlvbnMuZnJhZ21lbnRTdHJpbmcgfHwgJ1xcbiNpZmRlZiBHTF9FU1xcbnByZWNpc2lvbiBtZWRpdW1wIGZsb2F0O1xcbiNlbmRpZlxcblxcbnZhcnlpbmcgdmVjMiB2X3RleGNvb3JkO1xcblxcbnZvaWQgbWFpbigpe1xcbiAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KDAuMCk7XFxufVxcbic7XG5cbiAgICAgICAgLy8gR0wgQ29udGV4dFxuICAgICAgICB2YXIgZ2wgPSBzZXR1cFdlYkdMKGNhbnZhcywgY29udGV4dE9wdGlvbnMsIG9wdGlvbnMub25FcnJvcik7XG4gICAgICAgIGlmICghZ2wpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdsID0gZ2w7XG4gICAgICAgIHRoaXMudGltZUxvYWQgPSB0aGlzLnRpbWVQcmV2ID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAgIHRoaXMudGltZURlbHRhID0gMC4wO1xuICAgICAgICB0aGlzLmZvcmNlUmVuZGVyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wYXVzZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yZWFsVG9DU1NQaXhlbHMgPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxO1xuXG4gICAgICAgIC8vIEFsbG93IGFscGhhXG4gICAgICAgIGNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb250ZXh0T3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3IgfHwgJ3JnYmEoMSwxLDEsMCknO1xuXG4gICAgICAgIC8vIExvYWQgc2hhZGVyXG4gICAgICAgIGlmIChjYW52YXMuaGFzQXR0cmlidXRlKCdkYXRhLWZyYWdtZW50JykpIHtcbiAgICAgICAgICAgIHRoaXMuZnJhZ21lbnRTdHJpbmcgPSBjYW52YXMuZ2V0QXR0cmlidXRlKCdkYXRhLWZyYWdtZW50Jyk7XG4gICAgICAgIH0gZWxzZSBpZiAoY2FudmFzLmhhc0F0dHJpYnV0ZSgnZGF0YS1mcmFnbWVudC11cmwnKSkge1xuICAgICAgICAgICAgdmFyIHNvdXJjZSA9IGNhbnZhcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtZnJhZ21lbnQtdXJsJyk7XG4gICAgICAgICAgICB4aHIuZ2V0KHNvdXJjZSwgZnVuY3Rpb24gKGVycm9yLCByZXNwb25zZSwgYm9keSkge1xuICAgICAgICAgICAgICAgIF90aGlzLmxvYWQoYm9keSwgX3RoaXMudmVydGV4U3RyaW5nKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTG9hZCBzaGFkZXJcbiAgICAgICAgaWYgKGNhbnZhcy5oYXNBdHRyaWJ1dGUoJ2RhdGEtdmVydGV4JykpIHtcbiAgICAgICAgICAgIHRoaXMudmVydGV4U3RyaW5nID0gY2FudmFzLmdldEF0dHJpYnV0ZSgnZGF0YS12ZXJ0ZXgnKTtcbiAgICAgICAgfSBlbHNlIGlmIChjYW52YXMuaGFzQXR0cmlidXRlKCdkYXRhLXZlcnRleC11cmwnKSkge1xuICAgICAgICAgICAgdmFyIF9zb3VyY2UgPSBjYW52YXMuZ2V0QXR0cmlidXRlKCdkYXRhLXZlcnRleC11cmwnKTtcbiAgICAgICAgICAgIHhoci5nZXQoX3NvdXJjZSwgZnVuY3Rpb24gKGVycm9yLCByZXNwb25zZSwgYm9keSkge1xuICAgICAgICAgICAgICAgIF90aGlzLmxvYWQoX3RoaXMuZnJhZ21lbnRTdHJpbmcsIGJvZHkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxvYWQoKTtcblxuICAgICAgICBpZiAoIXRoaXMucHJvZ3JhbSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRGVmaW5lIFZlcnRleCBidWZmZXJcbiAgICAgICAgdmFyIHRleENvb3Jkc0xvYyA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKHRoaXMucHJvZ3JhbSwgJ2FfdGV4Y29vcmQnKTtcbiAgICAgICAgdGhpcy52Ym8udGV4Q29vcmRzID0gZ2wuY3JlYXRlQnVmZmVyKCk7XG4gICAgICAgIHRoaXMuZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHRoaXMudmJvLnRleENvb3Jkcyk7XG4gICAgICAgIHRoaXMuZ2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsIG5ldyBGbG9hdDMyQXJyYXkoWzAuMCwgMC4wLCAxLjAsIDAuMCwgMC4wLCAxLjAsIDAuMCwgMS4wLCAxLjAsIDAuMCwgMS4wLCAxLjBdKSwgZ2wuU1RBVElDX0RSQVcpO1xuICAgICAgICB0aGlzLmdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHRleENvb3Jkc0xvYyk7XG4gICAgICAgIHRoaXMuZ2wudmVydGV4QXR0cmliUG9pbnRlcih0ZXhDb29yZHNMb2MsIDIsIGdsLkZMT0FULCBmYWxzZSwgMCwgMCk7XG5cbiAgICAgICAgdmFyIHZlcnRpY2VzTG9jID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24odGhpcy5wcm9ncmFtLCAnYV9wb3NpdGlvbicpO1xuICAgICAgICB0aGlzLnZiby52ZXJ0aWNlcyA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xuICAgICAgICB0aGlzLmdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCB0aGlzLnZiby52ZXJ0aWNlcyk7XG4gICAgICAgIHRoaXMuZ2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsIG5ldyBGbG9hdDMyQXJyYXkoWy0xLjAsIC0xLjAsIDEuMCwgLTEuMCwgLTEuMCwgMS4wLCAtMS4wLCAxLjAsIDEuMCwgLTEuMCwgMS4wLCAxLjBdKSwgZ2wuU1RBVElDX0RSQVcpO1xuICAgICAgICB0aGlzLmdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHZlcnRpY2VzTG9jKTtcbiAgICAgICAgdGhpcy5nbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHZlcnRpY2VzTG9jLCAyLCBnbC5GTE9BVCwgZmFsc2UsIDAsIDApO1xuXG4gICAgICAgIC8vIGxvYWQgVEVYVFVSRVNcbiAgICAgICAgaWYgKGNhbnZhcy5oYXNBdHRyaWJ1dGUoJ2RhdGEtdGV4dHVyZXMnKSkge1xuICAgICAgICAgICAgdmFyIGltZ0xpc3QgPSBjYW52YXMuZ2V0QXR0cmlidXRlKCdkYXRhLXRleHR1cmVzJykuc3BsaXQoJywnKTtcbiAgICAgICAgICAgIGZvciAodmFyIG5JbWcgaW4gaW1nTGlzdCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0VW5pZm9ybSgndV90ZXgnICsgbkltZywgaW1nTGlzdFtuSW1nXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PSBFVkVOVFNcbiAgICAgICAgdmFyIG1vdXNlID0ge1xuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IDBcbiAgICAgICAgfTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIG1vdXNlLnggPSBlLmNsaWVudFggfHwgZS5wYWdlWDtcbiAgICAgICAgICAgIG1vdXNlLnkgPSBlLmNsaWVudFkgfHwgZS5wYWdlWTtcbiAgICAgICAgfSwgZmFsc2UpO1xuXG4gICAgICAgIHZhciBzYW5kYm94ID0gdGhpcztcbiAgICAgICAgZnVuY3Rpb24gUmVuZGVyTG9vcCgpIHtcbiAgICAgICAgICAgIGlmIChzYW5kYm94Lm5Nb3VzZSA+IDEpIHtcbiAgICAgICAgICAgICAgICBzYW5kYm94LnNldE1vdXNlKG1vdXNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNhbmRib3guZm9yY2VSZW5kZXIgPSBzYW5kYm94LnJlc2l6ZSgpO1xuICAgICAgICAgICAgc2FuZGJveC5yZW5kZXIoKTtcbiAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoUmVuZGVyTG9vcCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTdGFydFxuICAgICAgICB0aGlzLnNldE1vdXNlKHsgeDogMCwgeTogMCB9KTtcbiAgICAgICAgUmVuZGVyTG9vcCgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBjcmVhdGVDbGFzcyhHbHNsQ2FudmFzLCBbe1xuICAgICAgICBrZXk6ICdkZXN0cm95JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGZvciAodmFyIHRleCBpbiB0aGlzLnRleHR1cmVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRleC5kZXN0cm95KSB7XG4gICAgICAgICAgICAgICAgICAgIHRleC5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy50ZXh0dXJlcyA9IHt9O1xuICAgICAgICAgICAgZm9yICh2YXIgYXR0IGluIHRoaXMuYXR0cmlicykge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2wuZGVsZXRlQnVmZmVyKHRoaXMuYXR0cmlic1thdHRdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZ2wudXNlUHJvZ3JhbShudWxsKTtcbiAgICAgICAgICAgIHRoaXMuZ2wuZGVsZXRlUHJvZ3JhbSh0aGlzLnByb2dyYW0pO1xuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMuYnVmZmVycykge1xuICAgICAgICAgICAgICAgIHZhciBidWZmZXIgPSB0aGlzLmJ1ZmZlcnNba2V5XTtcbiAgICAgICAgICAgICAgICB0aGlzLmdsLmRlbGV0ZVByb2dyYW0oYnVmZmVyLnByb2dyYW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wcm9ncmFtID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuZ2wgPSBudWxsO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdsb2FkJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGxvYWQoZnJhZ1N0cmluZywgdmVydFN0cmluZykge1xuXG4gICAgICAgICAgICAvLyBMb2FkIHZlcnRleCBzaGFkZXIgaWYgdGhlcmUgaXMgb25lXG4gICAgICAgICAgICBpZiAodmVydFN0cmluZykge1xuICAgICAgICAgICAgICAgIHRoaXMudmVydGV4U3RyaW5nID0gdmVydFN0cmluZztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gTG9hZCBmcmFnbWVudCBzaGFkZXIgaWYgdGhlcmUgaXMgb25lXG4gICAgICAgICAgICBpZiAoZnJhZ1N0cmluZykge1xuICAgICAgICAgICAgICAgIHRoaXMuZnJhZ21lbnRTdHJpbmcgPSBmcmFnU3RyaW5nO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLm5EZWx0YSA9ICh0aGlzLmZyYWdtZW50U3RyaW5nLm1hdGNoKC91X2RlbHRhL2cpIHx8IFtdKS5sZW5ndGg7XG4gICAgICAgICAgICB0aGlzLm5UaW1lID0gKHRoaXMuZnJhZ21lbnRTdHJpbmcubWF0Y2goL3VfdGltZS9nKSB8fCBbXSkubGVuZ3RoO1xuICAgICAgICAgICAgdGhpcy5uRGF0ZSA9ICh0aGlzLmZyYWdtZW50U3RyaW5nLm1hdGNoKC91X2RhdGUvZykgfHwgW10pLmxlbmd0aDtcbiAgICAgICAgICAgIHRoaXMubk1vdXNlID0gKHRoaXMuZnJhZ21lbnRTdHJpbmcubWF0Y2goL3VfbW91c2UvZykgfHwgW10pLmxlbmd0aDtcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZWQgPSB0aGlzLm5EYXRlID4gMSB8fCB0aGlzLm5UaW1lID4gMSB8fCB0aGlzLm5Nb3VzZSA+IDE7XG5cbiAgICAgICAgICAgIHZhciBuVGV4dHVyZXMgPSB0aGlzLmZyYWdtZW50U3RyaW5nLnNlYXJjaCgvc2FtcGxlcjJEL2cpO1xuICAgICAgICAgICAgaWYgKG5UZXh0dXJlcykge1xuICAgICAgICAgICAgICAgIHZhciBsaW5lcyA9IHRoaXMuZnJhZ21lbnRTdHJpbmcuc3BsaXQoJ1xcbicpO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1hdGNoID0gbGluZXNbaV0ubWF0Y2goL3VuaWZvcm1cXHMqc2FtcGxlcjJEXFxzKihbXFx3XSopO1xccypcXC9cXC9cXHMqKFtcXHd8XFw6XFwvXFwvfFxcLnxcXC18XFxfXSopL2kpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBleHQgPSBtYXRjaFsyXS5zcGxpdCgnLicpLnBvcCgpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2hbMV0gJiYgbWF0Y2hbMl0gJiYgKGV4dCA9PT0gJ2pwZycgfHwgZXh0ID09PSAnanBlZycgfHwgZXh0ID09PSAncG5nJyB8fCBleHQgPT09ICdvZ3YnIHx8IGV4dCA9PT0gJ3dlYm0nIHx8IGV4dCA9PT0gJ21wNCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRVbmlmb3JtKG1hdGNoWzFdLCBtYXRjaFsyXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIG1haW4gPSBsaW5lc1tpXS5tYXRjaCgvXFxzKnZvaWRcXHMqbWFpblxccyovZyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtYWluKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHZlcnRleFNoYWRlciA9IGNyZWF0ZVNoYWRlcih0aGlzLCB0aGlzLnZlcnRleFN0cmluZywgdGhpcy5nbC5WRVJURVhfU0hBREVSKTtcbiAgICAgICAgICAgIHZhciBmcmFnbWVudFNoYWRlciA9IGNyZWF0ZVNoYWRlcih0aGlzLCB0aGlzLmZyYWdtZW50U3RyaW5nLCB0aGlzLmdsLkZSQUdNRU5UX1NIQURFUik7XG5cbiAgICAgICAgICAgIC8vIElmIEZyYWdtZW50IHNoYWRlciBmYWlscyBsb2FkIGEgZW1wdHkgb25lIHRvIHNpZ24gdGhlIGVycm9yXG4gICAgICAgICAgICBpZiAoIWZyYWdtZW50U2hhZGVyKSB7XG4gICAgICAgICAgICAgICAgZnJhZ21lbnRTaGFkZXIgPSBjcmVhdGVTaGFkZXIodGhpcywgJ3ZvaWQgbWFpbigpe1xcblxcdGdsX0ZyYWdDb2xvciA9IHZlYzQoMS4wKTtcXG59JywgdGhpcy5nbC5GUkFHTUVOVF9TSEFERVIpO1xuICAgICAgICAgICAgICAgIHRoaXMuaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzVmFsaWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDcmVhdGUgYW5kIHVzZSBwcm9ncmFtXG4gICAgICAgICAgICB2YXIgcHJvZ3JhbSA9IGNyZWF0ZVByb2dyYW0odGhpcywgW3ZlcnRleFNoYWRlciwgZnJhZ21lbnRTaGFkZXJdKTsgLy8sIFswLDFdLFsnYV90ZXhjb29yZCcsJ2FfcG9zaXRpb24nXSk7XG4gICAgICAgICAgICB0aGlzLmdsLnVzZVByb2dyYW0ocHJvZ3JhbSk7XG5cbiAgICAgICAgICAgIC8vIERlbGV0ZSBzaGFkZXJzXG4gICAgICAgICAgICAvLyB0aGlzLmdsLmRldGFjaFNoYWRlcihwcm9ncmFtLCB2ZXJ0ZXhTaGFkZXIpO1xuICAgICAgICAgICAgLy8gdGhpcy5nbC5kZXRhY2hTaGFkZXIocHJvZ3JhbSwgZnJhZ21lbnRTaGFkZXIpO1xuICAgICAgICAgICAgdGhpcy5nbC5kZWxldGVTaGFkZXIodmVydGV4U2hhZGVyKTtcbiAgICAgICAgICAgIHRoaXMuZ2wuZGVsZXRlU2hhZGVyKGZyYWdtZW50U2hhZGVyKTtcblxuICAgICAgICAgICAgdGhpcy5wcm9ncmFtID0gcHJvZ3JhbTtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlID0gdHJ1ZTtcblxuICAgICAgICAgICAgdGhpcy5CVUZGRVJfQ09VTlQgPSAwO1xuICAgICAgICAgICAgdmFyIGJ1ZmZlcnMgPSB0aGlzLmdldEJ1ZmZlcnModGhpcy5mcmFnbWVudFN0cmluZyk7XG4gICAgICAgICAgICBpZiAoT2JqZWN0LmtleXMoYnVmZmVycykubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkUHJvZ3JhbXMoYnVmZmVycyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmJ1ZmZlcnMgPSBidWZmZXJzO1xuXG4gICAgICAgICAgICAvLyBUcmlnZ2VyIGV2ZW50XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXIoJ2xvYWQnLCB7fSk7XG5cbiAgICAgICAgICAgIHRoaXMuZm9yY2VSZW5kZXIgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICd0ZXN0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHRlc3QoY2FsbGJhY2ssIGZyYWdTdHJpbmcsIHZlcnRTdHJpbmcpIHtcbiAgICAgICAgICAgIC8vIFRoYW5rcyB0byBAdGhlc3BpdGUgZm9yIHRoZSBoZWxwIGhlcmVcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vd3d3Lmtocm9ub3Mub3JnL3JlZ2lzdHJ5L3dlYmdsL2V4dGVuc2lvbnMvRVhUX2Rpc2pvaW50X3RpbWVyX3F1ZXJ5L1xuICAgICAgICAgICAgdmFyIHByZV90ZXN0X3ZlcnQgPSB0aGlzLnZlcnRleFN0cmluZztcbiAgICAgICAgICAgIHZhciBwcmVfdGVzdF9mcmFnID0gdGhpcy5mcmFnbWVudFN0cmluZztcbiAgICAgICAgICAgIHZhciBwcmVfdGVzdF9wYXVzZWQgPSB0aGlzLnBhdXNlZDtcblxuICAgICAgICAgICAgdmFyIGV4dCA9IHRoaXMuZ2wuZ2V0RXh0ZW5zaW9uKCdFWFRfZGlzam9pbnRfdGltZXJfcXVlcnknKTtcbiAgICAgICAgICAgIHZhciBxdWVyeSA9IGV4dC5jcmVhdGVRdWVyeUVYVCgpO1xuICAgICAgICAgICAgdmFyIHdhc1ZhbGlkID0gdGhpcy5pc1ZhbGlkO1xuXG4gICAgICAgICAgICBpZiAoZnJhZ1N0cmluZyB8fCB2ZXJ0U3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkKGZyYWdTdHJpbmcsIHZlcnRTdHJpbmcpO1xuICAgICAgICAgICAgICAgIHdhc1ZhbGlkID0gdGhpcy5pc1ZhbGlkO1xuICAgICAgICAgICAgICAgIHRoaXMuZm9yY2VSZW5kZXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMucGF1c2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIGV4dC5iZWdpblF1ZXJ5RVhUKGV4dC5USU1FX0VMQVBTRURfRVhULCBxdWVyeSk7XG4gICAgICAgICAgICB0aGlzLmZvcmNlUmVuZGVyID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgICAgICBleHQuZW5kUXVlcnlFWFQoZXh0LlRJTUVfRUxBUFNFRF9FWFQpO1xuXG4gICAgICAgICAgICB2YXIgc2FuZGJveCA9IHRoaXM7XG4gICAgICAgICAgICBmdW5jdGlvbiBmaW5pc2hUZXN0KCkge1xuICAgICAgICAgICAgICAgIC8vIFJldmVydCBjaGFuZ2VzLi4uIGdvIGJhY2sgdG8gbm9ybWFsXG4gICAgICAgICAgICAgICAgc2FuZGJveC5wYXVzZWQgPSBwcmVfdGVzdF9wYXVzZWQ7XG4gICAgICAgICAgICAgICAgaWYgKGZyYWdTdHJpbmcgfHwgdmVydFN0cmluZykge1xuICAgICAgICAgICAgICAgICAgICBzYW5kYm94LmxvYWQocHJlX3Rlc3RfZnJhZywgcHJlX3Rlc3RfdmVydCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gd2FpdEZvclRlc3QoKSB7XG4gICAgICAgICAgICAgICAgc2FuZGJveC5mb3JjZVJlbmRlciA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2FuZGJveC5yZW5kZXIoKTtcbiAgICAgICAgICAgICAgICB2YXIgYXZhaWxhYmxlID0gZXh0LmdldFF1ZXJ5T2JqZWN0RVhUKHF1ZXJ5LCBleHQuUVVFUllfUkVTVUxUX0FWQUlMQUJMRV9FWFQpO1xuICAgICAgICAgICAgICAgIHZhciBkaXNqb2ludCA9IHNhbmRib3guZ2wuZ2V0UGFyYW1ldGVyKGV4dC5HUFVfRElTSk9JTlRfRVhUKTtcbiAgICAgICAgICAgICAgICBpZiAoYXZhaWxhYmxlICYmICFkaXNqb2ludCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmV0ID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2FzVmFsaWQ6IHdhc1ZhbGlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgZnJhZzogZnJhZ1N0cmluZyB8fCBzYW5kYm94LmZyYWdtZW50U3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmVydDogdmVydFN0cmluZyB8fCBzYW5kYm94LnZlcnRleFN0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVFbGFwc2VkTXM6IGV4dC5nZXRRdWVyeU9iamVjdEVYVChxdWVyeSwgZXh0LlFVRVJZX1JFU1VMVF9FWFQpIC8gMTAwMDAwMC4wXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGZpbmlzaFRlc3QoKTtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2socmV0KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHdhaXRGb3JUZXN0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3YWl0Rm9yVGVzdCgpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdsb2FkVGV4dHVyZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBsb2FkVGV4dHVyZShuYW1lLCB1cmxFbGVtZW50T3JEYXRhLCBvcHRpb25zKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICAgICAgaWYgKCFvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucyA9IHt9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZW9mIHVybEVsZW1lbnRPckRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy51cmwgPSB1cmxFbGVtZW50T3JEYXRhO1xuICAgICAgICAgICAgfSBlbHNlIGlmICgodHlwZW9mIHVybEVsZW1lbnRPckRhdGEgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHVybEVsZW1lbnRPckRhdGEpKSA9PT0gJ29iamVjdCcgJiYgdXJsRWxlbWVudE9yRGF0YS5kYXRhICYmIHVybEVsZW1lbnRPckRhdGEud2lkdGggJiYgdXJsRWxlbWVudE9yRGF0YS5oZWlnaHQpIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zLmRhdGEgPSB1cmxFbGVtZW50T3JEYXRhLmRhdGE7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy53aWR0aCA9IHVybEVsZW1lbnRPckRhdGEud2lkdGg7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5oZWlnaHQgPSB1cmxFbGVtZW50T3JEYXRhLmhlaWdodDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoKHR5cGVvZiB1cmxFbGVtZW50T3JEYXRhID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZih1cmxFbGVtZW50T3JEYXRhKSkgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5lbGVtZW50ID0gdXJsRWxlbWVudE9yRGF0YTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMudGV4dHVyZXNbbmFtZV0pIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50ZXh0dXJlc1tuYW1lXSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRleHR1cmVzW25hbWVdLmxvYWQob3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGV4dHVyZXNbbmFtZV0ub24oJ2xvYWRlZCcsIGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpczIuZm9yY2VSZW5kZXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudGV4dHVyZXNbbmFtZV0gPSBuZXcgVGV4dHVyZSh0aGlzLmdsLCBuYW1lLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRleHR1cmVzW25hbWVdLm9uKCdsb2FkZWQnLCBmdW5jdGlvbiAoYXJncykge1xuICAgICAgICAgICAgICAgICAgICBfdGhpczIuZm9yY2VSZW5kZXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZWZyZXNoVW5pZm9ybXMnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVmcmVzaFVuaWZvcm1zKCkge1xuICAgICAgICAgICAgdGhpcy51bmlmb3JtcyA9IHt9O1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzZXRVbmlmb3JtJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldFVuaWZvcm0obmFtZSkge1xuICAgICAgICAgICAgdmFyIHUgPSB7fTtcblxuICAgICAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHZhbHVlID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICAgICAgICAgIHZhbHVlW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdVtuYW1lXSA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5zZXRVbmlmb3Jtcyh1KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc2V0VW5pZm9ybXMnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0VW5pZm9ybXModW5pZm9ybXMpIHtcbiAgICAgICAgICAgIHZhciBwYXJzZWQgPSBwYXJzZVVuaWZvcm1zKHVuaWZvcm1zKTtcbiAgICAgICAgICAgIC8vIFNldCBlYWNoIHVuaWZvcm1cbiAgICAgICAgICAgIGZvciAodmFyIHUgaW4gcGFyc2VkKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlZFt1XS50eXBlID09PSAnc2FtcGxlcjJEJykge1xuICAgICAgICAgICAgICAgICAgICAvLyBGb3IgdGV4dHVyZXMsIHdlIG5lZWQgdG8gdHJhY2sgdGV4dHVyZSB1bml0cywgc28gd2UgaGF2ZSBhIHNwZWNpYWwgc2V0dGVyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMudW5pZm9ybVRleHR1cmUocGFyc2VkW3VdLm5hbWUsIHBhcnNlZFt1XS52YWx1ZVswXSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZFRleHR1cmUocGFyc2VkW3VdLm5hbWUsIHBhcnNlZFt1XS52YWx1ZVswXSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51bmlmb3JtKHBhcnNlZFt1XS5tZXRob2QsIHBhcnNlZFt1XS50eXBlLCBwYXJzZWRbdV0ubmFtZSwgcGFyc2VkW3VdLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JjZVJlbmRlciA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzZXRNb3VzZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRNb3VzZShtb3VzZSkge1xuICAgICAgICAgICAgLy8gc2V0IHRoZSBtb3VzZSB1bmlmb3JtXG4gICAgICAgICAgICB2YXIgcmVjdCA9IHRoaXMuY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgaWYgKG1vdXNlICYmIG1vdXNlLnggJiYgbW91c2UueCA+PSByZWN0LmxlZnQgJiYgbW91c2UueCA8PSByZWN0LnJpZ2h0ICYmIG1vdXNlLnkgJiYgbW91c2UueSA+PSByZWN0LnRvcCAmJiBtb3VzZS55IDw9IHJlY3QuYm90dG9tKSB7XG5cbiAgICAgICAgICAgICAgICB2YXIgbW91c2VfeCA9IChtb3VzZS54IC0gcmVjdC5sZWZ0KSAqIHRoaXMucmVhbFRvQ1NTUGl4ZWxzO1xuICAgICAgICAgICAgICAgIHZhciBtb3VzZV95ID0gdGhpcy5jYW52YXMuaGVpZ2h0IC0gKG1vdXNlLnkgLSByZWN0LnRvcCkgKiB0aGlzLnJlYWxUb0NTU1BpeGVscztcblxuICAgICAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiB0aGlzLmJ1ZmZlcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGJ1ZmZlciA9IHRoaXMuYnVmZmVyc1trZXldO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdsLnVzZVByb2dyYW0oYnVmZmVyLnByb2dyYW0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdsLnVuaWZvcm0yZih0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbihidWZmZXIucHJvZ3JhbSwgJ3VfbW91c2UnKSwgbW91c2VfeCwgbW91c2VfeSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuZ2wudXNlUHJvZ3JhbSh0aGlzLnByb2dyYW0pO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2wudW5pZm9ybTJmKHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMucHJvZ3JhbSwgJ3VfbW91c2UnKSwgbW91c2VfeCwgbW91c2VfeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBleDogcHJvZ3JhbS51bmlmb3JtKCczZicsICdwb3NpdGlvbicsIHgsIHksIHopO1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICd1bmlmb3JtJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHVuaWZvcm0obWV0aG9kLCB0eXBlLCBuYW1lKSB7XG4gICAgICAgICAgICAvLyAndmFsdWUnIGlzIGEgbWV0aG9kLWFwcHJvcHJpYXRlIGFyZ3VtZW50cyBsaXN0XG4gICAgICAgICAgICB0aGlzLnVuaWZvcm1zW25hbWVdID0gdGhpcy51bmlmb3Jtc1tuYW1lXSB8fCB7fTtcbiAgICAgICAgICAgIHZhciB1bmlmb3JtID0gdGhpcy51bmlmb3Jtc1tuYW1lXTtcblxuICAgICAgICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCB2YWx1ZSA9IEFycmF5KF9sZW4yID4gMyA/IF9sZW4yIC0gMyA6IDApLCBfa2V5MiA9IDM7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgICAgICAgICB2YWx1ZVtfa2V5MiAtIDNdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGNoYW5nZSA9IGlzRGlmZih1bmlmb3JtLnZhbHVlLCB2YWx1ZSk7XG4gICAgICAgICAgICBpZiAoY2hhbmdlIHx8IHRoaXMuY2hhbmdlIHx8IHVuaWZvcm0ubG9jYXRpb24gPT09IHVuZGVmaW5lZCB8fCB1bmlmb3JtLnZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB1bmlmb3JtLm5hbWUgPSBuYW1lO1xuICAgICAgICAgICAgICAgIHVuaWZvcm0udmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB1bmlmb3JtLnR5cGUgPSB0eXBlO1xuICAgICAgICAgICAgICAgIHVuaWZvcm0ubWV0aG9kID0gJ3VuaWZvcm0nICsgbWV0aG9kO1xuICAgICAgICAgICAgICAgIHVuaWZvcm0ubG9jYXRpb24gPSB0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLnByb2dyYW0sIG5hbWUpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5nbFt1bmlmb3JtLm1ldGhvZF0uYXBwbHkodGhpcy5nbCwgW3VuaWZvcm0ubG9jYXRpb25dLmNvbmNhdCh1bmlmb3JtLnZhbHVlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3VuaWZvcm1UZXh0dXJlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHVuaWZvcm1UZXh0dXJlKG5hbWUsIHRleHR1cmUsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnRleHR1cmVzW25hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRUZXh0dXJlKG5hbWUsIHRleHR1cmUsIG9wdGlvbnMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVzaXplJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlc2l6ZSgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLndpZHRoICE9PSB0aGlzLmNhbnZhcy5jbGllbnRXaWR0aCB8fCB0aGlzLmhlaWdodCAhPT0gdGhpcy5jYW52YXMuY2xpZW50SGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWFsVG9DU1NQaXhlbHMgPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxO1xuXG4gICAgICAgICAgICAgICAgLy8gTG9va3VwIHRoZSBzaXplIHRoZSBicm93c2VyIGlzIGRpc3BsYXlpbmcgdGhlIGNhbnZhcyBpbiBDU1MgcGl4ZWxzXG4gICAgICAgICAgICAgICAgLy8gYW5kIGNvbXB1dGUgYSBzaXplIG5lZWRlZCB0byBtYWtlIG91ciBkcmF3aW5nYnVmZmVyIG1hdGNoIGl0IGluXG4gICAgICAgICAgICAgICAgLy8gZGV2aWNlIHBpeGVscy5cbiAgICAgICAgICAgICAgICB2YXIgZGlzcGxheVdpZHRoID0gTWF0aC5mbG9vcih0aGlzLmdsLmNhbnZhcy5jbGllbnRXaWR0aCAqIHRoaXMucmVhbFRvQ1NTUGl4ZWxzKTtcbiAgICAgICAgICAgICAgICB2YXIgZGlzcGxheUhlaWdodCA9IE1hdGguZmxvb3IodGhpcy5nbC5jYW52YXMuY2xpZW50SGVpZ2h0ICogdGhpcy5yZWFsVG9DU1NQaXhlbHMpO1xuXG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIGNhbnZhcyBpcyBub3QgdGhlIHNhbWUgc2l6ZS5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5nbC5jYW52YXMud2lkdGggIT09IGRpc3BsYXlXaWR0aCB8fCB0aGlzLmdsLmNhbnZhcy5oZWlnaHQgIT09IGRpc3BsYXlIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gTWFrZSB0aGUgY2FudmFzIHRoZSBzYW1lIHNpemVcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nbC5jYW52YXMud2lkdGggPSBkaXNwbGF5V2lkdGg7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2wuY2FudmFzLmhlaWdodCA9IGRpc3BsYXlIZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNldCB0aGUgdmlld3BvcnQgdG8gbWF0Y2hcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nbC52aWV3cG9ydCgwLCAwLCB0aGlzLmdsLmNhbnZhcy53aWR0aCwgdGhpcy5nbC5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5nbC52aWV3cG9ydCgwLCAwLCB0aGlzLmdsLmRyYXdpbmdCdWZmZXJXaWR0aCwgdGhpcy5nbC5kcmF3aW5nQnVmZmVySGVpZ2h0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCA9IHRoaXMuY2FudmFzLmNsaWVudFdpZHRoO1xuICAgICAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5jYW52YXMuY2xpZW50SGVpZ2h0O1xuICAgICAgICAgICAgICAgIHRoaXMucmVzaXplU3dhcHBhYmxlQnVmZmVycygpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgICB0aGlzLnZpc2libGUgPSBpc0NhbnZhc1Zpc2libGUodGhpcy5jYW52YXMpO1xuICAgICAgICAgICAgaWYgKHRoaXMuZm9yY2VSZW5kZXIgfHwgdGhpcy5hbmltYXRlZCAmJiB0aGlzLnZpc2libGUgJiYgIXRoaXMucGF1c2VkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJQcm9ncmFtcygpO1xuICAgICAgICAgICAgICAgIC8vIFRyaWdnZXIgZXZlbnRcbiAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXIoJ3JlbmRlcicsIHt9KTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuZm9yY2VSZW5kZXIgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncGF1c2UnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcGF1c2UoKSB7XG4gICAgICAgICAgICB0aGlzLnBhdXNlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3BsYXknLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcGxheSgpIHtcbiAgICAgICAgICAgIHRoaXMucGF1c2VkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3ZlcnNpb24nLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gdmVyc2lvbigpIHtcbiAgICAgICAgICAgIHJldHVybiAnMC4wLjI3JztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHJlbmRlciBtYWluIGFuZCBidWZmZXJzIHByb2dyYW1zXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlclByb2dyYW1zJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlclByb2dyYW1zKCkge1xuICAgICAgICAgICAgdmFyIGdsID0gdGhpcy5nbCxcbiAgICAgICAgICAgICAgICBXID0gZ2wuY2FudmFzLndpZHRoLFxuICAgICAgICAgICAgICAgIEggPSBnbC5jYW52YXMuaGVpZ2h0O1xuICAgICAgICAgICAgdGhpcy51cGRhdGVWYXJpYWJsZXMoKTtcbiAgICAgICAgICAgIGdsLnZpZXdwb3J0KDAsIDAsIFcsIEgpO1xuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMuYnVmZmVycykge1xuICAgICAgICAgICAgICAgIHZhciBidWZmZXIgPSB0aGlzLmJ1ZmZlcnNba2V5XTtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVVuaWZvcm1zKGJ1ZmZlci5wcm9ncmFtLCBrZXkpO1xuICAgICAgICAgICAgICAgIGJ1ZmZlci5idW5kbGUucmVuZGVyKFcsIEgsIGJ1ZmZlci5wcm9ncmFtLCBidWZmZXIubmFtZSk7XG4gICAgICAgICAgICAgICAgZ2wuYmluZEZyYW1lYnVmZmVyKGdsLkZSQU1FQlVGRkVSLCBudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudXBkYXRlVW5pZm9ybXModGhpcy5wcm9ncmFtLCAnbWFpbicpO1xuICAgICAgICAgICAgZ2wuZHJhd0FycmF5cyhnbC5UUklBTkdMRVMsIDAsIDYpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdXBkYXRlIGdsc2xDYW52YXMgdmFyaWFibGVzXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3VwZGF0ZVZhcmlhYmxlcycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGVWYXJpYWJsZXMoKSB7XG4gICAgICAgICAgICB2YXIgZ2xzbCA9IHRoaXM7XG4gICAgICAgICAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICB2YXIgbm93ID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAgICAgICB2YXIgdmFyaWFibGVzID0gdGhpcy52YXJpYWJsZXMgfHwge307XG4gICAgICAgICAgICB2YXJpYWJsZXMucHJldiA9IHZhcmlhYmxlcy5wcmV2IHx8IG5vdztcbiAgICAgICAgICAgIHZhcmlhYmxlcy5kZWx0YSA9IChub3cgLSB2YXJpYWJsZXMucHJldikgLyAxMDAwLjA7XG4gICAgICAgICAgICB2YXJpYWJsZXMucHJldiA9IG5vdztcbiAgICAgICAgICAgIHZhcmlhYmxlcy5sb2FkID0gZ2xzbC50aW1lTG9hZDtcbiAgICAgICAgICAgIHZhcmlhYmxlcy50aW1lID0gKG5vdyAtIGdsc2wudGltZUxvYWQpIC8gMTAwMC4wO1xuICAgICAgICAgICAgdmFyaWFibGVzLnllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgICAgICB2YXJpYWJsZXMubW9udGggPSBkYXRlLmdldE1vbnRoKCk7XG4gICAgICAgICAgICB2YXJpYWJsZXMuZGF0ZSA9IGRhdGUuZ2V0RGF0ZSgpO1xuICAgICAgICAgICAgdmFyaWFibGVzLmRheXRpbWUgPSBkYXRlLmdldEhvdXJzKCkgKiAzNjAwICsgZGF0ZS5nZXRNaW51dGVzKCkgKiA2MCArIGRhdGUuZ2V0U2Vjb25kcygpICsgZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSAqIDAuMDAxO1xuICAgICAgICAgICAgdGhpcy52YXJpYWJsZXMgPSB2YXJpYWJsZXM7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB1cGRhdGUgdW5pZm9ybXMgcGVyIHByb2dyYW1cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAndXBkYXRlVW5pZm9ybXMnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlVW5pZm9ybXMocHJvZ3JhbSwga2V5KSB7XG4gICAgICAgICAgICB2YXIgZ2wgPSB0aGlzLmdsLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlcyA9IHRoaXMudmFyaWFibGVzO1xuICAgICAgICAgICAgZ2wudXNlUHJvZ3JhbShwcm9ncmFtKTtcbiAgICAgICAgICAgIGlmICh0aGlzLm5EZWx0YSA+IDEpIHtcbiAgICAgICAgICAgICAgICAvLyBzZXQgdGhlIGRlbHRhIHRpbWUgdW5pZm9ybVxuICAgICAgICAgICAgICAgIGdsLnVuaWZvcm0xZihnbC5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgJ3VfZGVsdGEnKSwgdmFyaWFibGVzLmRlbHRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLm5UaW1lID4gMSkge1xuICAgICAgICAgICAgICAgIC8vIHNldCB0aGUgZWxhcHNlZCB0aW1lIHVuaWZvcm1cbiAgICAgICAgICAgICAgICBnbC51bmlmb3JtMWYoZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sICd1X3RpbWUnKSwgdmFyaWFibGVzLnRpbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMubkRhdGUpIHtcbiAgICAgICAgICAgICAgICAvLyBTZXQgZGF0ZSB1bmlmb3JtOiB5ZWFyL21vbnRoL2RheS90aW1lX2luX3NlY1xuICAgICAgICAgICAgICAgIGdsLnVuaWZvcm00ZihnbC5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgJ3VfZGF0ZScpLCB2YXJpYWJsZXMueWVhciwgdmFyaWFibGVzLm1vbnRoLCB2YXJpYWJsZXMuZGF0ZSwgdmFyaWFibGVzLmRheXRpbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gc2V0IHRoZSByZXNvbHV0aW9uIHVuaWZvcm1cbiAgICAgICAgICAgIGdsLnVuaWZvcm0yZihnbC5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgJ3VfcmVzb2x1dGlvbicpLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIC8vIHRoaXMudW5pZm9ybSgnMmYnLCAndmVjMicsICd1X3Jlc29sdXRpb24nLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIGZvciAodmFyIF9rZXkzIGluIHRoaXMuYnVmZmVycykge1xuICAgICAgICAgICAgICAgIHZhciBidWZmZXIgPSB0aGlzLmJ1ZmZlcnNbX2tleTNdO1xuICAgICAgICAgICAgICAgIGdsLnVuaWZvcm0xaShnbC5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgYnVmZmVyLm5hbWUpLCBidWZmZXIuYnVuZGxlLmlucHV0LmluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuVEVYVFVSRV9DT1VOVCA9IHRoaXMuQlVGRkVSX0NPVU5UO1xuICAgICAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzLnRleHR1cmVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudW5pZm9ybVRleHR1cmUobmFtZSwgbnVsbCwge1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJpbmc6ICdtaXBtYXAnLFxuICAgICAgICAgICAgICAgICAgICByZXBlYXQ6IHRydWVcbiAgICAgICAgICAgICAgICB9KSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGV4dHVyZSA9IHRoaXMudGV4dHVyZXNbbmFtZV07XG4gICAgICAgICAgICAgICAgICAgIGdsLmFjdGl2ZVRleHR1cmUoZ2wuVEVYVFVSRTAgKyB0aGlzLlRFWFRVUkVfQ09VTlQpO1xuICAgICAgICAgICAgICAgICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0ZXh0dXJlLnRleHR1cmUpO1xuICAgICAgICAgICAgICAgICAgICBnbC51bmlmb3JtMWkoZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIG5hbWUpLCB0aGlzLlRFWFRVUkVfQ09VTlQpO1xuICAgICAgICAgICAgICAgICAgICBnbC51bmlmb3JtMmYoZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIG5hbWUgKyAnUmVzb2x1dGlvbicpLCB0ZXh0dXJlLndpZHRoLCB0ZXh0dXJlLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuVEVYVFVSRV9DT1VOVCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHBhcnNlIGlucHV0IHN0cmluZ3NcblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0QnVmZmVycycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRCdWZmZXJzKGZyYWdTdHJpbmcpIHtcbiAgICAgICAgICAgIHZhciBidWZmZXJzID0ge307XG4gICAgICAgICAgICBpZiAoZnJhZ1N0cmluZykge1xuICAgICAgICAgICAgICAgIGZyYWdTdHJpbmcucmVwbGFjZSgvKD86XlxccyopKCg/OiNpZnwjZWxpZikoPzpcXHMqKShkZWZpbmVkXFxzKlxcKFxccypCVUZGRVJfKShcXGQrKSg/OlxccypcXCkpfCg/OiNpZmRlZikoPzpcXHMqQlVGRkVSXykoXFxkKykoPzpcXHMqKSkvZ20sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSBhcmd1bWVudHNbM10gfHwgYXJndW1lbnRzWzRdO1xuICAgICAgICAgICAgICAgICAgICBidWZmZXJzWyd1X2J1ZmZlcicgKyBpXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyYWdtZW50OiAnI2RlZmluZSBCVUZGRVJfJyArIGkgKyAnXFxuJyArIGZyYWdTdHJpbmdcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBidWZmZXJzO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbG9hZCBidWZmZXJzIHByb2dyYW1zXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2xvYWRQcm9ncmFtcycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBsb2FkUHJvZ3JhbXMoYnVmZmVycykge1xuICAgICAgICAgICAgdmFyIGdsc2wgPSB0aGlzO1xuICAgICAgICAgICAgdmFyIGdsID0gdGhpcy5nbDtcbiAgICAgICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgICAgIHZhciB2ZXJ0ZXggPSBjcmVhdGVTaGFkZXIoZ2xzbCwgZ2xzbC52ZXJ0ZXhTdHJpbmcsIGdsLlZFUlRFWF9TSEFERVIpO1xuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIGJ1ZmZlcnMpIHtcbiAgICAgICAgICAgICAgICB2YXIgYnVmZmVyID0gYnVmZmVyc1trZXldO1xuICAgICAgICAgICAgICAgIHZhciBmcmFnbWVudCA9IGNyZWF0ZVNoYWRlcihnbHNsLCBidWZmZXIuZnJhZ21lbnQsIGdsLkZSQUdNRU5UX1NIQURFUiwgMSk7XG4gICAgICAgICAgICAgICAgaWYgKCFmcmFnbWVudCkge1xuICAgICAgICAgICAgICAgICAgICBmcmFnbWVudCA9IGNyZWF0ZVNoYWRlcihnbHNsLCAndm9pZCBtYWluKCl7XFxuXFx0Z2xfRnJhZ0NvbG9yID0gdmVjNCgxLjApO1xcbn0nLCBnbC5GUkFHTUVOVF9TSEFERVIpO1xuICAgICAgICAgICAgICAgICAgICBnbHNsLmlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBnbHNsLmlzVmFsaWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgcHJvZ3JhbSA9IGNyZWF0ZVByb2dyYW0oZ2xzbCwgW3ZlcnRleCwgZnJhZ21lbnRdKTtcbiAgICAgICAgICAgICAgICBidWZmZXIubmFtZSA9ICd1X2J1ZmZlcicgKyBpO1xuICAgICAgICAgICAgICAgIGJ1ZmZlci5wcm9ncmFtID0gcHJvZ3JhbTtcbiAgICAgICAgICAgICAgICBidWZmZXIuYnVuZGxlID0gZ2xzbC5jcmVhdGVTd2FwcGFibGVCdWZmZXIoZ2xzbC5jYW52YXMud2lkdGgsIGdsc2wuY2FudmFzLmhlaWdodCwgcHJvZ3JhbSk7XG4gICAgICAgICAgICAgICAgZ2wuZGVsZXRlU2hhZGVyKGZyYWdtZW50KTtcbiAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBnbC5kZWxldGVTaGFkZXIodmVydGV4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNyZWF0ZSBhbiBpbnB1dCAvIG91dHB1dCBzd2FwcGFibGUgYnVmZmVyXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2NyZWF0ZVN3YXBwYWJsZUJ1ZmZlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVTd2FwcGFibGVCdWZmZXIoVywgSCwgcHJvZ3JhbSkge1xuICAgICAgICAgICAgdmFyIGlucHV0ID0gdGhpcy5jcmVhdGVCdWZmZXIoVywgSCwgcHJvZ3JhbSk7XG4gICAgICAgICAgICB2YXIgb3V0cHV0ID0gdGhpcy5jcmVhdGVCdWZmZXIoVywgSCwgcHJvZ3JhbSk7XG4gICAgICAgICAgICB2YXIgZ2wgPSB0aGlzLmdsO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpbnB1dDogaW5wdXQsXG4gICAgICAgICAgICAgICAgb3V0cHV0OiBvdXRwdXQsXG4gICAgICAgICAgICAgICAgc3dhcDogZnVuY3Rpb24gc3dhcCgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRlbXAgPSBpbnB1dDtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQgPSBvdXRwdXQ7XG4gICAgICAgICAgICAgICAgICAgIG91dHB1dCA9IHRlbXA7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5wdXQgPSBpbnB1dDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vdXRwdXQgPSBvdXRwdXQ7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcihXLCBILCBwcm9ncmFtLCBuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGdsLnVzZVByb2dyYW0ocHJvZ3JhbSk7XG4gICAgICAgICAgICAgICAgICAgIGdsLnZpZXdwb3J0KDAsIDAsIFcsIEgpO1xuICAgICAgICAgICAgICAgICAgICBnbC5iaW5kRnJhbWVidWZmZXIoZ2wuRlJBTUVCVUZGRVIsIHRoaXMuaW5wdXQuYnVmZmVyKTtcbiAgICAgICAgICAgICAgICAgICAgZ2wuZnJhbWVidWZmZXJUZXh0dXJlMkQoZ2wuRlJBTUVCVUZGRVIsIGdsLkNPTE9SX0FUVEFDSE1FTlQwLCBnbC5URVhUVVJFXzJELCB0aGlzLm91dHB1dC50ZXh0dXJlLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgZ2wuZHJhd0FycmF5cyhnbC5UUklBTkdMRVMsIDAsIDYpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN3YXAoKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHJlc2l6ZTogZnVuY3Rpb24gcmVzaXplKFcsIEgsIHByb2dyYW0sIG5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgZ2wudXNlUHJvZ3JhbShwcm9ncmFtKTtcbiAgICAgICAgICAgICAgICAgICAgZ2wudmlld3BvcnQoMCwgMCwgVywgSCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5wdXQucmVzaXplKFcsIEgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm91dHB1dC5yZXNpemUoVywgSCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNyZWF0ZSBhIGJ1ZmZlcnNcblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY3JlYXRlQnVmZmVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZUJ1ZmZlcihXLCBILCBwcm9ncmFtKSB7XG4gICAgICAgICAgICB2YXIgZ2wgPSB0aGlzLmdsO1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5CVUZGRVJfQ09VTlQ7XG4gICAgICAgICAgICB0aGlzLkJVRkZFUl9DT1VOVCArPSAyO1xuICAgICAgICAgICAgZ2wuZ2V0RXh0ZW5zaW9uKCdPRVNfdGV4dHVyZV9mbG9hdCcpO1xuICAgICAgICAgICAgdmFyIHRleHR1cmUgPSBnbC5jcmVhdGVUZXh0dXJlKCk7XG4gICAgICAgICAgICBnbC5hY3RpdmVUZXh0dXJlKGdsLlRFWFRVUkUwICsgaW5kZXgpO1xuICAgICAgICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGV4dHVyZSk7XG4gICAgICAgICAgICBnbC50ZXhJbWFnZTJEKGdsLlRFWFRVUkVfMkQsIDAsIGdsLlJHQkEsIFcsIEgsIDAsIGdsLlJHQkEsIGdsLkZMT0FULCBudWxsKTtcbiAgICAgICAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NSU5fRklMVEVSLCBnbC5ORUFSRVNUKTtcbiAgICAgICAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NQUdfRklMVEVSLCBnbC5ORUFSRVNUKTtcbiAgICAgICAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1MsIGdsLkNMQU1QX1RPX0VER0UpO1xuICAgICAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfVCwgZ2wuQ0xBTVBfVE9fRURHRSk7XG4gICAgICAgICAgICB2YXIgYnVmZmVyID0gZ2wuY3JlYXRlRnJhbWVidWZmZXIoKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICAgICAgICAgIHRleHR1cmU6IHRleHR1cmUsXG4gICAgICAgICAgICAgICAgYnVmZmVyOiBidWZmZXIsXG4gICAgICAgICAgICAgICAgVzogVyxcbiAgICAgICAgICAgICAgICBIOiBILFxuICAgICAgICAgICAgICAgIHJlc2l6ZTogZnVuY3Rpb24gcmVzaXplKFcsIEgpIHtcbiAgICAgICAgICAgICAgICAgICAgZ2wuYmluZEZyYW1lYnVmZmVyKGdsLkZSQU1FQlVGRkVSLCBidWZmZXIpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWluVyA9IE1hdGgubWluKFcsIHRoaXMuVyk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW5IID0gTWF0aC5taW4oSCwgdGhpcy5IKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBpeGVscyA9IG5ldyBGbG9hdDMyQXJyYXkobWluVyAqIG1pbkggKiA0KTtcbiAgICAgICAgICAgICAgICAgICAgZ2wucmVhZFBpeGVscygwLCAwLCBtaW5XLCBtaW5ILCBnbC5SR0JBLCBnbC5GTE9BVCwgcGl4ZWxzKTtcbiAgICAgICAgICAgICAgICAgICAgZ2wuYmluZEZyYW1lYnVmZmVyKGdsLkZSQU1FQlVGRkVSLCBudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld0luZGV4ID0gaW5kZXggKyAxO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbmV3VGV4dHVyZSA9IGdsLmNyZWF0ZVRleHR1cmUoKTtcbiAgICAgICAgICAgICAgICAgICAgZ2wuYWN0aXZlVGV4dHVyZShnbC5URVhUVVJFMCArIG5ld0luZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgbmV3VGV4dHVyZSk7XG4gICAgICAgICAgICAgICAgICAgIGdsLnRleEltYWdlMkQoZ2wuVEVYVFVSRV8yRCwgMCwgZ2wuUkdCQSwgVywgSCwgMCwgZ2wuUkdCQSwgZ2wuRkxPQVQsIG51bGwpO1xuICAgICAgICAgICAgICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUlOX0ZJTFRFUiwgZ2wuTkVBUkVTVCk7XG4gICAgICAgICAgICAgICAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NQUdfRklMVEVSLCBnbC5ORUFSRVNUKTtcbiAgICAgICAgICAgICAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfUywgZ2wuQ0xBTVBfVE9fRURHRSk7XG4gICAgICAgICAgICAgICAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1QsIGdsLkNMQU1QX1RPX0VER0UpO1xuICAgICAgICAgICAgICAgICAgICBnbC50ZXhTdWJJbWFnZTJEKGdsLlRFWFRVUkVfMkQsIDAsIDAsIDAsIG1pblcsIG1pbkgsIGdsLlJHQkEsIGdsLkZMT0FULCBwaXhlbHMpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbmV3QnVmZmVyID0gZ2wuY3JlYXRlRnJhbWVidWZmZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgZ2wuYmluZEZyYW1lYnVmZmVyKGdsLkZSQU1FQlVGRkVSLCBudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgZ2wuZGVsZXRlVGV4dHVyZSh0ZXh0dXJlKTtcbiAgICAgICAgICAgICAgICAgICAgZ2wuYWN0aXZlVGV4dHVyZShnbC5URVhUVVJFMCArIGluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgbmV3VGV4dHVyZSk7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4ID0gdGhpcy5pbmRleCA9IGluZGV4O1xuICAgICAgICAgICAgICAgICAgICB0ZXh0dXJlID0gdGhpcy50ZXh0dXJlID0gbmV3VGV4dHVyZTtcbiAgICAgICAgICAgICAgICAgICAgYnVmZmVyID0gdGhpcy5idWZmZXIgPSBuZXdCdWZmZXI7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuVyA9IFc7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuSCA9IEg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHJlc2l6ZSBidWZmZXJzIG9uIGNhbnZhcyByZXNpemVcbiAgICAgICAgLy8gY29uc2lkZXIgYXBwbHlpbmcgYSB0aHJvdHRsZSBvZiA1MCBtcyBvbiBjYW52YXMgcmVzaXplXG4gICAgICAgIC8vIHRvIGF2b2lkIHJlcXVlc3RBbmltYXRpb25GcmFtZSBhbmQgR2wgdmlvbGF0aW9uc1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZXNpemVTd2FwcGFibGVCdWZmZXJzJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlc2l6ZVN3YXBwYWJsZUJ1ZmZlcnMoKSB7XG4gICAgICAgICAgICB2YXIgZ2wgPSB0aGlzLmdsO1xuICAgICAgICAgICAgdmFyIFcgPSBnbC5jYW52YXMud2lkdGgsXG4gICAgICAgICAgICAgICAgSCA9IGdsLmNhbnZhcy5oZWlnaHQ7XG4gICAgICAgICAgICBnbC52aWV3cG9ydCgwLCAwLCBXLCBIKTtcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiB0aGlzLmJ1ZmZlcnMpIHtcbiAgICAgICAgICAgICAgICB2YXIgYnVmZmVyID0gdGhpcy5idWZmZXJzW2tleV07XG4gICAgICAgICAgICAgICAgYnVmZmVyLmJ1bmRsZS5yZXNpemUoVywgSCwgYnVmZmVyLnByb2dyYW0sIGJ1ZmZlci5uYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGdsLnVzZVByb2dyYW0odGhpcy5wcm9ncmFtKTtcbiAgICAgICAgfVxuICAgIH1dKTtcbiAgICByZXR1cm4gR2xzbENhbnZhcztcbn0oKTtcblxuZnVuY3Rpb24gbG9hZEFsbEdsc2xDYW52YXMoKSB7XG4gICAgdmFyIGxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdnbHNsQ2FudmFzJyk7XG4gICAgaWYgKGxpc3QubGVuZ3RoID4gMCkge1xuICAgICAgICB3aW5kb3cuZ2xzbENhbnZhc2VzID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHNhbmRib3ggPSBuZXcgR2xzbENhbnZhcyhsaXN0W2ldKTtcbiAgICAgICAgICAgIGlmIChzYW5kYm94LmlzVmFsaWQpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuZ2xzbENhbnZhc2VzLnB1c2goc2FuZGJveCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgIGxvYWRBbGxHbHNsQ2FudmFzKCk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBHbHNsQ2FudmFzO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBpc0Z1bmN0aW9uXG5cbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdcblxuZnVuY3Rpb24gaXNGdW5jdGlvbiAoZm4pIHtcbiAgaWYgKCFmbikge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG4gIHZhciBzdHJpbmcgPSB0b1N0cmluZy5jYWxsKGZuKVxuICByZXR1cm4gc3RyaW5nID09PSAnW29iamVjdCBGdW5jdGlvbl0nIHx8XG4gICAgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJyAmJiBzdHJpbmcgIT09ICdbb2JqZWN0IFJlZ0V4cF0nKSB8fFxuICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAvLyBJRTggYW5kIGJlbG93XG4gICAgIChmbiA9PT0gd2luZG93LnNldFRpbWVvdXQgfHxcbiAgICAgIGZuID09PSB3aW5kb3cuYWxlcnQgfHxcbiAgICAgIGZuID09PSB3aW5kb3cuY29uZmlybSB8fFxuICAgICAgZm4gPT09IHdpbmRvdy5wcm9tcHQpKVxufTtcbiIsInZhciB0cmltID0gZnVuY3Rpb24oc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpO1xufVxuICAsIGlzQXJyYXkgPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJnKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbiAgICB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGhlYWRlcnMpIHtcbiAgaWYgKCFoZWFkZXJzKVxuICAgIHJldHVybiB7fVxuXG4gIHZhciByZXN1bHQgPSB7fVxuXG4gIHZhciBoZWFkZXJzQXJyID0gdHJpbShoZWFkZXJzKS5zcGxpdCgnXFxuJylcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGhlYWRlcnNBcnIubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgcm93ID0gaGVhZGVyc0FycltpXVxuICAgIHZhciBpbmRleCA9IHJvdy5pbmRleE9mKCc6JylcbiAgICAsIGtleSA9IHRyaW0ocm93LnNsaWNlKDAsIGluZGV4KSkudG9Mb3dlckNhc2UoKVxuICAgICwgdmFsdWUgPSB0cmltKHJvdy5zbGljZShpbmRleCArIDEpKVxuXG4gICAgaWYgKHR5cGVvZihyZXN1bHRba2V5XSkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXN1bHRba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChpc0FycmF5KHJlc3VsdFtrZXldKSkge1xuICAgICAgcmVzdWx0W2tleV0ucHVzaCh2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0W2tleV0gPSBbIHJlc3VsdFtrZXldLCB2YWx1ZSBdXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgd2luZG93ID0gcmVxdWlyZShcImdsb2JhbC93aW5kb3dcIilcbnZhciBvbmNlID0gcmVxdWlyZShcIm9uY2VcIilcbnZhciBpc0Z1bmN0aW9uID0gcmVxdWlyZShcImlzLWZ1bmN0aW9uXCIpXG52YXIgcGFyc2VIZWFkZXJzID0gcmVxdWlyZShcInBhcnNlLWhlYWRlcnNcIilcbnZhciB4dGVuZCA9IHJlcXVpcmUoXCJ4dGVuZFwiKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZVhIUlxuY3JlYXRlWEhSLlhNTEh0dHBSZXF1ZXN0ID0gd2luZG93LlhNTEh0dHBSZXF1ZXN0IHx8IG5vb3BcbmNyZWF0ZVhIUi5YRG9tYWluUmVxdWVzdCA9IFwid2l0aENyZWRlbnRpYWxzXCIgaW4gKG5ldyBjcmVhdGVYSFIuWE1MSHR0cFJlcXVlc3QoKSkgPyBjcmVhdGVYSFIuWE1MSHR0cFJlcXVlc3QgOiB3aW5kb3cuWERvbWFpblJlcXVlc3RcblxuZm9yRWFjaEFycmF5KFtcImdldFwiLCBcInB1dFwiLCBcInBvc3RcIiwgXCJwYXRjaFwiLCBcImhlYWRcIiwgXCJkZWxldGVcIl0sIGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgIGNyZWF0ZVhIUlttZXRob2QgPT09IFwiZGVsZXRlXCIgPyBcImRlbFwiIDogbWV0aG9kXSA9IGZ1bmN0aW9uKHVyaSwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICAgICAgb3B0aW9ucyA9IGluaXRQYXJhbXModXJpLCBvcHRpb25zLCBjYWxsYmFjaylcbiAgICAgICAgb3B0aW9ucy5tZXRob2QgPSBtZXRob2QudG9VcHBlckNhc2UoKVxuICAgICAgICByZXR1cm4gX2NyZWF0ZVhIUihvcHRpb25zKVxuICAgIH1cbn0pXG5cbmZ1bmN0aW9uIGZvckVhY2hBcnJheShhcnJheSwgaXRlcmF0b3IpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGl0ZXJhdG9yKGFycmF5W2ldKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gaXNFbXB0eShvYmope1xuICAgIGZvcih2YXIgaSBpbiBvYmope1xuICAgICAgICBpZihvYmouaGFzT3duUHJvcGVydHkoaSkpIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpbml0UGFyYW1zKHVyaSwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICB2YXIgcGFyYW1zID0gdXJpXG5cbiAgICBpZiAoaXNGdW5jdGlvbihvcHRpb25zKSkge1xuICAgICAgICBjYWxsYmFjayA9IG9wdGlvbnNcbiAgICAgICAgaWYgKHR5cGVvZiB1cmkgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHBhcmFtcyA9IHt1cmk6dXJpfVxuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcGFyYW1zID0geHRlbmQob3B0aW9ucywge3VyaTogdXJpfSlcbiAgICB9XG5cbiAgICBwYXJhbXMuY2FsbGJhY2sgPSBjYWxsYmFja1xuICAgIHJldHVybiBwYXJhbXNcbn1cblxuZnVuY3Rpb24gY3JlYXRlWEhSKHVyaSwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICBvcHRpb25zID0gaW5pdFBhcmFtcyh1cmksIG9wdGlvbnMsIGNhbGxiYWNrKVxuICAgIHJldHVybiBfY3JlYXRlWEhSKG9wdGlvbnMpXG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVYSFIob3B0aW9ucykge1xuICAgIHZhciBjYWxsYmFjayA9IG9wdGlvbnMuY2FsbGJhY2tcbiAgICBpZih0eXBlb2YgY2FsbGJhY2sgPT09IFwidW5kZWZpbmVkXCIpe1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJjYWxsYmFjayBhcmd1bWVudCBtaXNzaW5nXCIpXG4gICAgfVxuICAgIGNhbGxiYWNrID0gb25jZShjYWxsYmFjaylcblxuICAgIGZ1bmN0aW9uIHJlYWR5c3RhdGVjaGFuZ2UoKSB7XG4gICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICAgICAgbG9hZEZ1bmMoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Qm9keSgpIHtcbiAgICAgICAgLy8gQ2hyb21lIHdpdGggcmVxdWVzdFR5cGU9YmxvYiB0aHJvd3MgZXJyb3JzIGFycm91bmQgd2hlbiBldmVuIHRlc3RpbmcgYWNjZXNzIHRvIHJlc3BvbnNlVGV4dFxuICAgICAgICB2YXIgYm9keSA9IHVuZGVmaW5lZFxuXG4gICAgICAgIGlmICh4aHIucmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGJvZHkgPSB4aHIucmVzcG9uc2VcbiAgICAgICAgfSBlbHNlIGlmICh4aHIucmVzcG9uc2VUeXBlID09PSBcInRleHRcIiB8fCAheGhyLnJlc3BvbnNlVHlwZSkge1xuICAgICAgICAgICAgYm9keSA9IHhoci5yZXNwb25zZVRleHQgfHwgeGhyLnJlc3BvbnNlWE1MXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNKc29uKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGJvZHkgPSBKU09OLnBhcnNlKGJvZHkpXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGJvZHlcbiAgICB9XG5cbiAgICB2YXIgZmFpbHVyZVJlc3BvbnNlID0ge1xuICAgICAgICAgICAgICAgIGJvZHk6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7fSxcbiAgICAgICAgICAgICAgICBzdGF0dXNDb2RlOiAwLFxuICAgICAgICAgICAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgICAgICAgICAgIHVybDogdXJpLFxuICAgICAgICAgICAgICAgIHJhd1JlcXVlc3Q6IHhoclxuICAgICAgICAgICAgfVxuXG4gICAgZnVuY3Rpb24gZXJyb3JGdW5jKGV2dCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dFRpbWVyKVxuICAgICAgICBpZighKGV2dCBpbnN0YW5jZW9mIEVycm9yKSl7XG4gICAgICAgICAgICBldnQgPSBuZXcgRXJyb3IoXCJcIiArIChldnQgfHwgXCJVbmtub3duIFhNTEh0dHBSZXF1ZXN0IEVycm9yXCIpIClcbiAgICAgICAgfVxuICAgICAgICBldnQuc3RhdHVzQ29kZSA9IDBcbiAgICAgICAgY2FsbGJhY2soZXZ0LCBmYWlsdXJlUmVzcG9uc2UpXG4gICAgfVxuXG4gICAgLy8gd2lsbCBsb2FkIHRoZSBkYXRhICYgcHJvY2VzcyB0aGUgcmVzcG9uc2UgaW4gYSBzcGVjaWFsIHJlc3BvbnNlIG9iamVjdFxuICAgIGZ1bmN0aW9uIGxvYWRGdW5jKCkge1xuICAgICAgICBpZiAoYWJvcnRlZCkgcmV0dXJuXG4gICAgICAgIHZhciBzdGF0dXNcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRUaW1lcilcbiAgICAgICAgaWYob3B0aW9ucy51c2VYRFIgJiYgeGhyLnN0YXR1cz09PXVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy9JRTggQ09SUyBHRVQgc3VjY2Vzc2Z1bCByZXNwb25zZSBkb2Vzbid0IGhhdmUgYSBzdGF0dXMgZmllbGQsIGJ1dCBib2R5IGlzIGZpbmVcbiAgICAgICAgICAgIHN0YXR1cyA9IDIwMFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RhdHVzID0gKHhoci5zdGF0dXMgPT09IDEyMjMgPyAyMDQgOiB4aHIuc3RhdHVzKVxuICAgICAgICB9XG4gICAgICAgIHZhciByZXNwb25zZSA9IGZhaWx1cmVSZXNwb25zZVxuICAgICAgICB2YXIgZXJyID0gbnVsbFxuXG4gICAgICAgIGlmIChzdGF0dXMgIT09IDApe1xuICAgICAgICAgICAgcmVzcG9uc2UgPSB7XG4gICAgICAgICAgICAgICAgYm9keTogZ2V0Qm9keSgpLFxuICAgICAgICAgICAgICAgIHN0YXR1c0NvZGU6IHN0YXR1cyxcbiAgICAgICAgICAgICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7fSxcbiAgICAgICAgICAgICAgICB1cmw6IHVyaSxcbiAgICAgICAgICAgICAgICByYXdSZXF1ZXN0OiB4aHJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMpeyAvL3JlbWVtYmVyIHhociBjYW4gaW4gZmFjdCBiZSBYRFIgZm9yIENPUlMgaW4gSUVcbiAgICAgICAgICAgICAgICByZXNwb25zZS5oZWFkZXJzID0gcGFyc2VIZWFkZXJzKHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVyciA9IG5ldyBFcnJvcihcIkludGVybmFsIFhNTEh0dHBSZXF1ZXN0IEVycm9yXCIpXG4gICAgICAgIH1cbiAgICAgICAgY2FsbGJhY2soZXJyLCByZXNwb25zZSwgcmVzcG9uc2UuYm9keSlcblxuICAgIH1cblxuICAgIHZhciB4aHIgPSBvcHRpb25zLnhociB8fCBudWxsXG5cbiAgICBpZiAoIXhocikge1xuICAgICAgICBpZiAob3B0aW9ucy5jb3JzIHx8IG9wdGlvbnMudXNlWERSKSB7XG4gICAgICAgICAgICB4aHIgPSBuZXcgY3JlYXRlWEhSLlhEb21haW5SZXF1ZXN0KClcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB4aHIgPSBuZXcgY3JlYXRlWEhSLlhNTEh0dHBSZXF1ZXN0KClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBrZXlcbiAgICB2YXIgYWJvcnRlZFxuICAgIHZhciB1cmkgPSB4aHIudXJsID0gb3B0aW9ucy51cmkgfHwgb3B0aW9ucy51cmxcbiAgICB2YXIgbWV0aG9kID0geGhyLm1ldGhvZCA9IG9wdGlvbnMubWV0aG9kIHx8IFwiR0VUXCJcbiAgICB2YXIgYm9keSA9IG9wdGlvbnMuYm9keSB8fCBvcHRpb25zLmRhdGEgfHwgbnVsbFxuICAgIHZhciBoZWFkZXJzID0geGhyLmhlYWRlcnMgPSBvcHRpb25zLmhlYWRlcnMgfHwge31cbiAgICB2YXIgc3luYyA9ICEhb3B0aW9ucy5zeW5jXG4gICAgdmFyIGlzSnNvbiA9IGZhbHNlXG4gICAgdmFyIHRpbWVvdXRUaW1lclxuXG4gICAgaWYgKFwianNvblwiIGluIG9wdGlvbnMpIHtcbiAgICAgICAgaXNKc29uID0gdHJ1ZVxuICAgICAgICBoZWFkZXJzW1wiYWNjZXB0XCJdIHx8IGhlYWRlcnNbXCJBY2NlcHRcIl0gfHwgKGhlYWRlcnNbXCJBY2NlcHRcIl0gPSBcImFwcGxpY2F0aW9uL2pzb25cIikgLy9Eb24ndCBvdmVycmlkZSBleGlzdGluZyBhY2NlcHQgaGVhZGVyIGRlY2xhcmVkIGJ5IHVzZXJcbiAgICAgICAgaWYgKG1ldGhvZCAhPT0gXCJHRVRcIiAmJiBtZXRob2QgIT09IFwiSEVBRFwiKSB7XG4gICAgICAgICAgICBoZWFkZXJzW1wiY29udGVudC10eXBlXCJdIHx8IGhlYWRlcnNbXCJDb250ZW50LVR5cGVcIl0gfHwgKGhlYWRlcnNbXCJDb250ZW50LVR5cGVcIl0gPSBcImFwcGxpY2F0aW9uL2pzb25cIikgLy9Eb24ndCBvdmVycmlkZSBleGlzdGluZyBhY2NlcHQgaGVhZGVyIGRlY2xhcmVkIGJ5IHVzZXJcbiAgICAgICAgICAgIGJvZHkgPSBKU09OLnN0cmluZ2lmeShvcHRpb25zLmpzb24pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gcmVhZHlzdGF0ZWNoYW5nZVxuICAgIHhoci5vbmxvYWQgPSBsb2FkRnVuY1xuICAgIHhoci5vbmVycm9yID0gZXJyb3JGdW5jXG4gICAgLy8gSUU5IG11c3QgaGF2ZSBvbnByb2dyZXNzIGJlIHNldCB0byBhIHVuaXF1ZSBmdW5jdGlvbi5cbiAgICB4aHIub25wcm9ncmVzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gSUUgbXVzdCBkaWVcbiAgICB9XG4gICAgeGhyLm9udGltZW91dCA9IGVycm9yRnVuY1xuICAgIHhoci5vcGVuKG1ldGhvZCwgdXJpLCAhc3luYywgb3B0aW9ucy51c2VybmFtZSwgb3B0aW9ucy5wYXNzd29yZClcbiAgICAvL2hhcyB0byBiZSBhZnRlciBvcGVuXG4gICAgaWYoIXN5bmMpIHtcbiAgICAgICAgeGhyLndpdGhDcmVkZW50aWFscyA9ICEhb3B0aW9ucy53aXRoQ3JlZGVudGlhbHNcbiAgICB9XG4gICAgLy8gQ2Fubm90IHNldCB0aW1lb3V0IHdpdGggc3luYyByZXF1ZXN0XG4gICAgLy8gbm90IHNldHRpbmcgdGltZW91dCBvbiB0aGUgeGhyIG9iamVjdCwgYmVjYXVzZSBvZiBvbGQgd2Via2l0cyBldGMuIG5vdCBoYW5kbGluZyB0aGF0IGNvcnJlY3RseVxuICAgIC8vIGJvdGggbnBtJ3MgcmVxdWVzdCBhbmQganF1ZXJ5IDEueCB1c2UgdGhpcyBraW5kIG9mIHRpbWVvdXQsIHNvIHRoaXMgaXMgYmVpbmcgY29uc2lzdGVudFxuICAgIGlmICghc3luYyAmJiBvcHRpb25zLnRpbWVvdXQgPiAwICkge1xuICAgICAgICB0aW1lb3V0VGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBhYm9ydGVkPXRydWUvL0lFOSBtYXkgc3RpbGwgY2FsbCByZWFkeXN0YXRlY2hhbmdlXG4gICAgICAgICAgICB4aHIuYWJvcnQoXCJ0aW1lb3V0XCIpXG4gICAgICAgICAgICB2YXIgZSA9IG5ldyBFcnJvcihcIlhNTEh0dHBSZXF1ZXN0IHRpbWVvdXRcIilcbiAgICAgICAgICAgIGUuY29kZSA9IFwiRVRJTUVET1VUXCJcbiAgICAgICAgICAgIGVycm9yRnVuYyhlKVxuICAgICAgICB9LCBvcHRpb25zLnRpbWVvdXQgKVxuICAgIH1cblxuICAgIGlmICh4aHIuc2V0UmVxdWVzdEhlYWRlcikge1xuICAgICAgICBmb3Ioa2V5IGluIGhlYWRlcnMpe1xuICAgICAgICAgICAgaWYoaGVhZGVycy5oYXNPd25Qcm9wZXJ0eShrZXkpKXtcbiAgICAgICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihrZXksIGhlYWRlcnNba2V5XSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAob3B0aW9ucy5oZWFkZXJzICYmICFpc0VtcHR5KG9wdGlvbnMuaGVhZGVycykpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSGVhZGVycyBjYW5ub3QgYmUgc2V0IG9uIGFuIFhEb21haW5SZXF1ZXN0IG9iamVjdFwiKVxuICAgIH1cblxuICAgIGlmIChcInJlc3BvbnNlVHlwZVwiIGluIG9wdGlvbnMpIHtcbiAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9IG9wdGlvbnMucmVzcG9uc2VUeXBlXG4gICAgfVxuXG4gICAgaWYgKFwiYmVmb3JlU2VuZFwiIGluIG9wdGlvbnMgJiZcbiAgICAgICAgdHlwZW9mIG9wdGlvbnMuYmVmb3JlU2VuZCA9PT0gXCJmdW5jdGlvblwiXG4gICAgKSB7XG4gICAgICAgIG9wdGlvbnMuYmVmb3JlU2VuZCh4aHIpXG4gICAgfVxuXG4gICAgeGhyLnNlbmQoYm9keSlcblxuICAgIHJldHVybiB4aHJcblxuXG59XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuIiwibW9kdWxlLmV4cG9ydHMgPSBvbmNlXG5cbm9uY2UucHJvdG8gPSBvbmNlKGZ1bmN0aW9uICgpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZ1bmN0aW9uLnByb3RvdHlwZSwgJ29uY2UnLCB7XG4gICAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBvbmNlKHRoaXMpXG4gICAgfSxcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIG9uY2UgKGZuKSB7XG4gIHZhciBjYWxsZWQgPSBmYWxzZVxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGlmIChjYWxsZWQpIHJldHVyblxuICAgIGNhbGxlZCA9IHRydWVcbiAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKVxuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGV4dGVuZFxuXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG5mdW5jdGlvbiBleHRlbmQoKSB7XG4gICAgdmFyIHRhcmdldCA9IHt9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldXG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldFxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3BlbkZyYW1lSWNvbiB7XG4gICAgY29uc3RydWN0b3IgKHBhcmVudCkge1xuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcblxuICAgICAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKCdjbGFzcycsICdnbHNsR2FsbGVyeV9vcGVuRnJhbWVJY29uJyk7XG4gICAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gJ1tvXSc7XG4gICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjcmVhdGVPcGVuRnJhbWVBcnR3b3JrKHRoaXMucGFyZW50LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIHRydWUpO1xuXG4gICAgICAgIHRoaXMucGFyZW50LmVsLmFwcGVuZENoaWxkKHRoaXMuZWwpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU9wZW5GcmFtZUFydHdvcmsoaXRlbSwgY2FsbGJhY2spIHtcbiAgICBsZXQgaWQgPSBpdGVtLmlkO1xuICAgIGxldCB0aXRsZSA9IGl0ZW0udGl0bGUgfHwgJ3Vua25vdyc7XG4gICAgbGV0IGF1dGhvciA9IGl0ZW0uYXV0aG9yIHx8ICd1bmtub3cnO1xuICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICBjYWxsYmFjayA9IGNhbGxiYWNrIHx8ICgpID0+IHt9O1xuICAgIC8vIGFueXdoZXJlIGluIHRoZSBBUEkgdGhhdCB1c2VyIHtpZH0gaXMgbmVlZGVkLCB0aGUgYWxpYXMgJ2N1cnJlbnQnIGNhbiBiZSB1c2VkIGZvciB0aGUgbG9nZ2VkLWluIHVzZXJcbiAgICB4aHIub3BlbignUE9TVCcsICdodHRwOi8vb3BlbmZyYW1lLmlvL2FwaS91c2Vycy9jdXJyZW50L293bmVkX2FydHdvcmsnLCBmYWxzZSk7XG4gICAgLy8gc2V0IGNvbnRlbnQgdHlwZSB0byBKU09OLi4uXG4gICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9VVRGLTgnKTtcbiAgICAvLyBUaGlzIGlzIGVzc2VudGlhbCBpbiBvcmRlciB0byBpbmNsdWRlIGF1dGggY29va2llczpcbiAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgICB4aHIub25sb2FkID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgICAgICB3aW5kb3cub3BlbignaHR0cDovL29wZW5mcmFtZS5pby9sb2dpbi1wb3B1cCcsICdsb2dpbicsICd3aWR0aD01MDAsaGVpZ2h0PTYwMCcpO1xuICAgICAgICAgICAgbGV0IHN1Y2Nlc3NMaXN0ZW5lciA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoZS5kYXRhID09PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlT3BlbkZyYW1lQXJ0d29yayhpdGVtLCBjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgc3VjY2Vzc0xpc3RlbmVyKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIHN1Y2Nlc3NMaXN0ZW5lciwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2FsbGJhY2soZmFsc2UpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB4aHIub25lcnJvciA9IChldmVudCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhldmVudC5jdXJyZW50VGFyZ2V0LnN0YXR1cyk7XG4gICAgfTtcblxuICAgIGxldCB1cmwgPSAnJztcbiAgICBpZiAoaWQubWF0Y2goL1xcZFxcZFxcLy4qLykpIHtcbiAgICAgICAgdXJsID0gJ2h0dHBzOi8vdGhlYm9va29mc2hhZGVycy5jb20vJyArIGlkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdXJsID0gJ2h0dHBzOi8vdGhlYm9va29mc2hhZGVycy5jb20vbG9nLycgKyBpZDtcbiAgICB9XG5cbiAgICB4aHIuc2VuZChKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgYXV0aG9yX25hbWU6IGF1dGhvcixcbiAgICAgICAgaXNfcHVibGljOiBmYWxzZSxcbiAgICAgICAgZm9ybWF0OiAnb3BlbmZyYW1lLWdsc2x2aWV3ZXInLFxuICAgICAgICB1cmw6IHVybCArICcuZnJhZycsXG4gICAgICAgIHRodW1iX3VybDogdXJsICsgJy5wbmcnXG4gICAgfSkpO1xufVxuIiwiaW1wb3J0IHhociBmcm9tICd4aHInO1xuaW1wb3J0IEdsc2xDYW52YXMgZnJvbSAnZ2xzbENhbnZhcyc7XG5pbXBvcnQgT3BlbkZyYW1lSWNvbiBmcm9tICcuLi9hZGRvbnMvb3BlbkZyYW1lSWNvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbGxlcnlJdGVtIHtcbiAgICBjb25zdHJ1Y3RvciAoaWQsIG1haW4sIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLm1haW4gPSBtYWluO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXG4gICAgICAgIC8vIENvbnN0cnVjdCBJdGVtXG4gICAgICAgIHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2dsc2xHYWxsZXJ5X2l0ZW0nKTtcblxuICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG5cbiAgICAgICAgdGhpcy5pbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgdGhpcy5pbWcuc2V0QXR0cmlidXRlKCdjbGFzcycsICdnbHNsR2FsbGVyeV90aHVtYicpO1xuXG4gICAgICAgIHRoaXMuY3JlZGl0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLmNyZWRpdHMuc2V0QXR0cmlidXRlKCdjbGFzcycsICdnbHNsR2FsbGVyeV9jcmVkaXRzJyk7XG4gICAgICAgIHRoaXMuY3JlZGl0cy5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG5cbiAgICAgICAgLy8gaWYgKHRoaXMuaWQubWF0Y2goL1xcZFxcZFxcLy4qLykpIHtcbiAgICAgICAgLy8gICAgIHRoaXMubGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnaHR0cHM6Ly90aGVib29rb2ZzaGFkZXJzLmNvbS9lZGl0LnBocCMnICsgdGhpcy5pZCArICcuZnJhZycpO1xuICAgICAgICAvLyAgICAgdGhpcy5pbWcuc3JjID0gJ2h0dHBzOi8vdGhlYm9va29mc2hhZGVycy5jb20vJyArIHRoaXMuaWQgKyAnLnBuZyc7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gZWxzZSB7XG4gICAgICAgIC8vICAgICBpZiAodGhpcy5vcHRpb25zLmNsaWNrUnVuID09PSBcImVkaXRvclwiKSB7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5saW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsICdodHRwczovL3RoZWJvb2tvZnNoYWRlcnMuY29tL2VkaXQucGhwP2xvZz0nICsgdGhpcy5pZCk7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5pbWcuc3JjID0gJ2h0dHBzOi8vdGhlYm9va29mc2hhZGVycy5jb20vbG9nLycgKyB0aGlzLmlkICsgJy5wbmcnO1xuICAgICAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgJ2h0dHA6Ly8nICsgdGhpcy5vcHRpb25zLmNsaWNrUnVuICsgJy50aGVib29rb2ZzaGFkZXJzLmNvbS8/bG9nPScgKyB0aGlzLmlkKTtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmltZy5zcmMgPSAnaHR0cHM6Ly90aGVib29rb2ZzaGFkZXJzLmNvbS9sb2cvJyArIHRoaXMuaWQgKyAnLnBuZyc7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cblxuICAgICAgICAvLyB0aGlzLmxpbmsuYXBwZW5kQ2hpbGQodGhpcy5pbWcpO1xuICAgICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKHRoaXMuY3JlZGl0cyk7XG4gICAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy5jYW52YXMpO1xuICAgICAgICB0aGlzLm1haW4uY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZWwpO1xuXG4gICAgICAgIC8vIEFkZCBldmVudHNcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5ob3ZlclByZXZpZXcpIHtcbiAgICAgICAgICAgIC8vIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsICgpID0+IHtcbiAgICAgICAgICAgIC8vICAgICBoYW5kbGVNb3VzZUVudGVyKHRoaXMpO1xuICAgICAgICAgICAgLy8gfSk7XG4gICAgICAgICAgICAvLyB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG4gICAgICAgICAgICAvLyAgICAgaGFuZGxlTW91c2VMZWF2ZSh0aGlzKTtcbiAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5vcGVuRnJhbWVJY29uKSB7XG4gICAgICAgICAgICB0aGlzLm9wZW5GcmFtZUljb24gPSBuZXcgT3BlbkZyYW1lSWNvbih0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHRoaXMuaW5pdCgpO1xuICAgICAgICB0aGlzLnJlcXVlc3RTb3VyY2UodGhpcy5pZClcbiAgICB9XG5cbiAgICBpbml0ICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnNvdXJjZSB8fCB0aGlzLnNvdXJjZSA9PT0gJycpIHtcbiAgICAgICAgICAgIHZhciB1cmwgPSAnJztcbiAgICAgICAgICAgIGlmICh0aGlzLmlkLm1hdGNoKC9cXGRcXGRcXC8uKi8pKSB7XG4gICAgICAgICAgICAgICAgdXJsID0gJ2h0dHBzOi8vdGhlYm9va29mc2hhZGVycy5jb20vJyArIHRoaXMuaWQgKyAnLmZyYWcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdXJsID0gJ2h0dHBzOi8vdGhlYm9va29mc2hhZGVycy5jb20vbG9nLycgKyB0aGlzLmlkICsgJy5mcmFnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBpdGVtID0gdGhpcztcbiAgICAgICAgICAgIHhoci5nZXQodXJsLCAoZXJyb3IsIHJlcywgYm9keSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkb3dubG9hZGluZyAnLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaXRlbS5zZXRDb2RlKGJvZHkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXF1ZXN0U291cmNlIChpZCkge1xuICAgICAgICBsZXQgdXJsID0nL3BoYXUvZGljdC8nICsgaWQgKyAnLmZyYWcnO1xuICAgICAgICB4aHIuZ2V0KHVybCwgKGVycm9yLCByZXMsIGJvZHkpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRvd25sb2FkaW5nICcsIGVycm9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHNhbmRib3ggPSBuZXcgR2xzbENhbnZhcyh0aGlzLmNhbnZhcyk7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2dsc2xHYWxsZXJ5X2NhbnZhcycpO1xuICAgICAgICAgICAgc2FuZGJveC5sb2FkKGJvZHkpO1xuICAgICAgICAgICAgdGhpcy5zZXRDb2RlKGJvZHkpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGxvYWQgKGNvZGUpIHtcbiAgICAgICAgdGhpcy5zZXRDb2RlKGNvZGUpO1xuICAgICAgICB3aW5kb3cuZ2xzbEdhbGxlcnlfY2FudmFzLmxvYWQoY29kZSk7XG4gICAgICAgIHdpbmRvdy5nbHNsR2FsbGVyeV9jYW52YXMuY2FudmFzLnN0eWxlLmhlaWdodCA9IHRoaXMuaW1nLm9mZnNldEhlaWdodCArICdweCc7XG4gICAgICAgIHRoaXMubGluay5hcHBlbmRDaGlsZCh3aW5kb3cuZ2xzbEdhbGxlcnlfY2FudmFzLmNhbnZhcyk7XG4gICAgfVxuXG4gICAgc2V0Q29kZSAoY29kZSkge1xuICAgICAgICB0aGlzLnNvdXJjZSA9IGNvZGU7XG5cbiAgICAgICAgaWYgKCF0aGlzLmF1dGhvciAmJiB0aGlzLm9wdGlvbnMuc2hvd0F1dGhvcikge1xuICAgICAgICAgICAgdGhpcy5hdXRob3IgPSB0aGlzLmdldEF1dGhvcigpO1xuICAgICAgICAgICAgLy8gaWYgKHRoaXMuYXV0aG9yICE9PSAndW5rbm93bicpIHtcbiAgICAgICAgICAgICAgICBsZXQgYXV0aG9yRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICAgICAgYXV0aG9yRWwuc2V0QXR0cmlidXRlKCdjbGFzcycsICdnbHNsR2FsbGVyeV9sYWJlbCBnbHNsR2FsbGVyeV9hdXRob3InKTtcbiAgICAgICAgICAgICAgICBhdXRob3JFbC5pbm5lckhUTUwgPSB0aGlzLmF1dGhvcjtcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWRpdHMuYXBwZW5kQ2hpbGQoYXV0aG9yRWwpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3JlZGl0cy5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLnRpdGxlICYmIHRoaXMub3B0aW9ucy5zaG93VGl0bGUpIHtcbiAgICAgICAgICAgIHRoaXMudGl0bGUgPSB0aGlzLmdldFRpdGxlKCk7XG4gICAgICAgICAgICAvLyBpZiAodGhpcy50aXRsZSAhPT0gJ3Vua25vd24nKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRpdGxlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICAgICAgdGl0bGVFbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2dsc2xHYWxsZXJ5X2xhYmVsIGdsc2xHYWxsZXJ5X3RpdGxlJyk7XG4gICAgICAgICAgICAgICAgdGl0bGVFbC5pbm5lckhUTUwgPSB0aGlzLnRpdGxlO1xuICAgICAgICAgICAgICAgIHRoaXMuY3JlZGl0cy5hcHBlbmRDaGlsZCh0aXRsZUVsKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWRpdHMuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5sZXNzb24gJiYgdGhpcy5vcHRpb25zLnNob3dUaXRsZSkge1xuICAgICAgICAgICAgdGhpcy5sZXNzb24gPSB0aGlzLmdldExlc3NvbigpO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5sZXNzb24pXG4gICAgICAgICAgICAvLyBpZiAodGhpcy50aXRsZSAhPT0gJ3Vua25vd24nKSB7XG4gICAgICAgICAgICAgICAgbGV0IGxlc3NvbkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgICAgIGxlc3NvbkVsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZ2xzbEdhbGxlcnlfbGFiZWwgZ2xzbEdhbGxlcnlfbGVzc29uJyk7XG4gICAgICAgICAgICAgICAgbGVzc29uRWwuaW5uZXJIVE1MID0gdGhpcy5sZXNzb247XG4gICAgICAgICAgICAgICAgdGhpcy5jcmVkaXRzLmFwcGVuZENoaWxkKGxlc3NvbkVsKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWRpdHMuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMubGVzc29uMiAmJiB0aGlzLm9wdGlvbnMuc2hvd1RpdGxlKSB7XG4gICAgICAgICAgICB0aGlzLmxlc3NvbjIgPSB0aGlzLmdldExlc3NvbjIoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMubGVzc29uMilcbiAgICAgICAgICAgIC8vIGlmICh0aGlzLnRpdGxlICE9PSAndW5rbm93bicpIHtcbiAgICAgICAgICAgICAgICBsZXQgbGVzc29uRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICAgICAgbGVzc29uRWwuc2V0QXR0cmlidXRlKCdjbGFzcycsICdnbHNsR2FsbGVyeV9sYWJlbCBnbHNsR2FsbGVyeV9sZXNzb24nKTtcbiAgICAgICAgICAgICAgICBsZXNzb25FbC5pbm5lckhUTUwgPSB0aGlzLmxlc3NvbjI7XG4gICAgICAgICAgICAgICAgdGhpcy5jcmVkaXRzLmFwcGVuZENoaWxkKGxlc3NvbkVsKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWRpdHMuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldENvZGUgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zb3VyY2U7XG4gICAgfVxuXG4gICAgZ2V0VGl0bGUoKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSB0aGlzLnNvdXJjZS5tYXRjaCgvXFwvXFwvXFxzKltUfHRdaXRsZVxccyo6XFxzKihbXFx3fFxcc3xcXEB8XFwofFxcKXxcXC18XFxfXSopL2kpO1xuICAgICAgICBpZiAocmVzdWx0ICYmICEocmVzdWx0WzFdID09PSAnICcgfHwgcmVzdWx0WzFdID09PSAnJykpIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHRbMV0ucmVwbGFjZSgvKFxcclxcbnxcXG58XFxyKS9nbSwgJycpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICd1bnRpdGxlZCc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRMZXNzb24yKCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy5zb3VyY2UubWF0Y2goL1xcL1xcL1xccypbU3xzXWVjb25kXFxzKjpcXHMqKFtcXHd8XFxkfFxcLnxcXHN8XFxAfFxcKHxcXCl8XFwtfFxcX10qKS9pKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0KVxuICAgICAgICBpZiAocmVzdWx0ICYmICEocmVzdWx0WzFdID09PSAnICcgfHwgcmVzdWx0WzFdID09PSAnJykpIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHRbMV0ucmVwbGFjZSgvKFxcclxcbnxcXG58XFxyKS9nbSwgJycpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0TGVzc29uKCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy5zb3VyY2UubWF0Y2goL1xcL1xcL1xccypbTHxsXWVzc29uXFxzKjpcXHMqKFtcXHd8XFxkfFxcLnxcXHN8XFxAfFxcKHxcXCl8XFwtfFxcX10qKS9pKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0KVxuICAgICAgICBpZiAocmVzdWx0ICYmICEocmVzdWx0WzFdID09PSAnICcgfHwgcmVzdWx0WzFdID09PSAnJykpIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHRbMV0ucmVwbGFjZSgvKFxcclxcbnxcXG58XFxyKS9nbSwgJycpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0QXV0aG9yKCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy5zb3VyY2UubWF0Y2goL1xcL1xcL1xccypbQXxhXXV0aG9yXFxzKltcXDpdP1xccyooW1xcd3xcXHN8XFxAfFxcKHxcXCl8XFwtfFxcX10qKS9pKTtcbiAgICAgICAgaWYgKHJlc3VsdCAmJiAhKHJlc3VsdFsxXSA9PT0gJyAnIHx8IHJlc3VsdFsxXSA9PT0gJycpKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0WzFdLnJlcGxhY2UoLyhcXHJcXG58XFxufFxccikvZ20sICcnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAnYW5vbnltb3VzJztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gaW5pdENhbnZhcygpIHtcbiAgICBpZiAoIXdpbmRvdy5nbHNsR2FsbGVyeV9jYW52YXMpIHtcbiAgICAgICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICBjYW52YXMuc2V0QXR0cmlidXRlKCdjbGFzcycsICdnbHNsR2FsbGVyeV9jYW52YXMnKTtcbiAgICAgICAgY2FudmFzLnN0eWxlLndpZHRoID0gJzI1MHB4JztcbiAgICAgICAgY2FudmFzLnN0eWxlLmhlaWdodCA9ICcyNTBweCc7XG4gICAgICAgIGNhbnZhcy53aWR0aCA9ICcyNTBweCc7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSAnMjUwcHgnO1xuICAgICAgICB3aW5kb3cuZ2xzbEdhbGxlcnlfY2FudmFzID0gbmV3IEdsc2xDYW52YXMoY2FudmFzKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZU1vdXNlRW50ZXIgKGl0ZW0pIHtcbiAgICAvLyBjb25zb2xlLmxvZygnamFtb24nLCBpdGVtKVxuICAgIGluaXRDYW52YXMoKTtcblxuICAgIGlmIChpdGVtLmdldENvZGUoKSkge1xuICAgICAgICBjb25zb2xlLmxvZygnZ2V0JywgaXRlbS5nZXRDb2RlKCkpXG4gICAgICAgIGl0ZW0ubG9hZChpdGVtLmdldENvZGUoKSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgdXJsID0gJyc7XG4gICAgICAgIGlmIChpdGVtLmlkLm1hdGNoKC9cXGRcXGRcXC8uKi8pKSB7XG4gICAgICAgICAgICB1cmwgPSAnL3BoYXUvJyArIGl0ZW0uaWQgKyAnLmZyYWcnO1xuICAgICAgICB9XG5cbiAgICAgICAgeGhyLmdldCh1cmwsIChlcnJvciwgcmVzLCBib2R5KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkb3dubG9hZGluZyAnLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaXRlbS5sb2FkKGJvZHkpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZU1vdXNlTGVhdmUgKGl0ZW0pIHtcbiAgICBpbml0Q2FudmFzKCk7XG5cbiAgICBpZiAoaXRlbS5lbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdnbHNsR2FsbGVyeV9jYW52YXMnKSA+IDApIHtcbiAgICAgICAgLy8gUmVtb3ZlIGdsc2xDYW52YXMgaW5zdGFuY2UgZnJvbSBpdGVtXG4gICAgICAgIGl0ZW0uZWwucmVtb3ZlQ2hpbGQod2luZG93Lmdsc2xHYWxsZXJ5X2NhbnZhcy5jYW52YXMpO1xuICAgIH1cbn1cbiIsIi8qXG5UaGUgTUlUIExpY2Vuc2UgKE1JVClcblxuQ29weXJpZ2h0IChjKSAyMDE2IFBhdHJpY2lvIEdvbnphbGV6IFZpdm8gKCBodHRwOi8vd3d3LnBhdHJpY2lvZ29uemFsZXp2aXZvLmNvbSApXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2ZcbnRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlICdTb2Z0d2FyZScpLCB0byBkZWFsIGluXG50aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvXG51c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZlxudGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLFxuc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEICdBUyBJUycsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbklNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTXG5GT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1JcbkNPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUlxuSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU5cbkNPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG5pbXBvcnQgR2FsbGVyeUl0ZW0gZnJvbSAnYXBwL2NvcmUvR2FsbGVyeUl0ZW0nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHbHNsR2FsbGVyeSB7XG4gICAgY29uc3RydWN0b3IgKHNlbGVjdG9yLCBvcHRpb25zKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2VsZWN0b3IgPT09ICdvYmplY3QnICYmIHNlbGVjdG9yLm5vZGVUeXBlICYmIHNlbGVjdG9yLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lciA9IHNlbGVjdG9yO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBzZWxlY3RvciA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IsIHR5cGUgJyArIHR5cGVvZiBzZWxlY3RvciArICcgb2YgJyArIHNlbGVjdG9yICsgJyBpcyB1bmtub3duJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgICAgIGlmICghdGhpcy5vcHRpb25zLnNob3dBdXRob3IpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5zaG93QXV0aG9yID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5vcHRpb25zLnNob3dUaXRsZSkge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLnNob3dUaXRsZSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5ob3ZlclByZXZpZXcpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5ob3ZlclByZXZpZXcgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLm9wdGlvbnMub3BlbkZyYW1lSWNvbikge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLm9wZW5GcmFtZUljb24gPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLm9wdGlvbnMuY2xpY2tSdW4pIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5jbGlja1J1biA9ICdwbGF5ZXInO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pdGVtcyA9IFtdO1xuXG4gICAgICAgIGlmIChzZWxlY3Rvci5oYXNBdHRyaWJ1dGUoJ2RhdGEtcHJvcGVydGllcycpKSB7XG4gICAgICAgICAgICBsZXQgcHJvcCA9IHNlbGVjdG9yLmdldEF0dHJpYnV0ZSgnZGF0YS1wcm9wZXJ0aWVzJykuc3BsaXQoJywnKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgaW4gcHJvcCkge1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZXMgPSBwcm9wW2ldLnNwbGl0KCc6Jyk7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zW3ZhbHVlc1swXV0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh2YWx1ZXMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9uc1t2YWx1ZXNbMF1dID0gKHZhbHVlc1sxXSA9PT0gJ3RydWUnIHx8IHZhbHVlc1sxXSA9PT0gJ2ZhbHNlJykgPyAodmFsdWVzWzFdID09PSAndHJ1ZScpIDogdmFsdWVzWzFdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZWxlY3Rvci5oYXNBdHRyaWJ1dGUoJ2RhdGEnKSkge1xuICAgICAgICAgICAgdGhpcy5hZGRJdGVtcyhzZWxlY3Rvci5nZXRBdHRyaWJ1dGUoJ2RhdGEnKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmxvZ3MpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkSXRlbXModGhpcy5vcHRpb25zLmxvZ3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgYWRkSXRlbSAobG9nKSB7XG4gICAgICAgIGlmICh0eXBlb2YgbG9nID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgbG9nID0gbG9nLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pdGVtcy5wdXNoKG5ldyBHYWxsZXJ5SXRlbShsb2csIHRoaXMsIHRoaXMub3B0aW9ucykpO1xuICAgIH1cblxuICAgIGFkZEl0ZW1zIChsb2dzKSB7XG4gICAgICAgIGlmICh0eXBlb2YgbG9ncyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGxvZ3MgPSBsb2dzLnNwbGl0KCcsJyk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSBpbiBsb2dzKSB7XG4gICAgICAgICAgICB0aGlzLmFkZEl0ZW0obG9nc1tpXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2ZXJzaW9uKCkge1xuICAgICAgICByZXR1cm4gJzAuMC42JztcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdsc2xHYWxsZXJ5TG9hZEFsbCgpIHtcbiAgICBpZiAoIXdpbmRvdy5HbHNsR2FsbGVyeSkge1xuICAgICAgICB3aW5kb3cuR2xzbEdhbGxlcnkgPSBHbHNsR2FsbGVyeTtcbiAgICB9XG5cbiAgICB2YXIgbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2dsc2xHYWxsZXJ5Jyk7XG4gICAgaWYgKGxpc3QubGVuZ3RoID4gMCkge1xuICAgICAgICB3aW5kb3cuZ2xzbEdhbGxlcmllcyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBnYWxsZXJ5ID0gbmV3IEdsc2xHYWxsZXJ5KGxpc3RbaV0pO1xuICAgICAgICAgICAgd2luZG93Lmdsc2xHYWxsZXJpZXMucHVzaChnYWxsZXJ5KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgZ2xzbEdhbGxlcnlMb2FkQWxsKCk7XG59KTtcbiJdfQ==
