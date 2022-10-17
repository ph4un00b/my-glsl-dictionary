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

//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzLWNhbGwtY2hlY2suanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZS1jbGFzcy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvaW50ZXJvcC1yZXF1aXJlLWRlZmF1bHQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5qcyIsIm5vZGVfbW9kdWxlcy9nbG9iYWwvd2luZG93LmpzIiwibm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvbGliL0dsc2xDYW52YXMuanMiLCJub2RlX21vZHVsZXMvaXMtZnVuY3Rpb24vaW5kZXguanMiLCJub2RlX21vZHVsZXMvcGFyc2UtaGVhZGVycy9wYXJzZS1oZWFkZXJzLmpzIiwibm9kZV9tb2R1bGVzL3hoci9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy94aHIvbm9kZV9tb2R1bGVzL29uY2Uvb25jZS5qcyIsIm5vZGVfbW9kdWxlcy94dGVuZC9pbW11dGFibGUuanMiLCIvaG9tZS9waDR1MjAvcHJvamVjdHMvZ2xzbEdhbGxlcnkvc3JjL2pzL2FkZG9ucy9vcGVuRnJhbWVJY29uLmpzIiwiL2hvbWUvcGg0dTIwL3Byb2plY3RzL2dsc2xHYWxsZXJ5L3NyYy9qcy9jb3JlL0dhbGxlcnlJdGVtLmpzIiwiL2hvbWUvcGg0dTIwL3Byb2plY3RzL2dsc2xHYWxsZXJ5L3NyYy9qcy9nbHNsR2FsbGVyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDaGlFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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a0IsRUFBRSxDQUFDO0NBQ3hCLENBQUMsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX09iamVjdCRkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKVtcImRlZmF1bHRcIl07XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG5cbiAgICAgIF9PYmplY3QkZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICAgIGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwidmFyICQgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzLyQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgZGVzYyl7XG4gIHJldHVybiAkLnNldERlc2MoaXQsIGtleSwgZGVzYyk7XG59OyIsInZhciAkT2JqZWN0ID0gT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNyZWF0ZTogICAgICRPYmplY3QuY3JlYXRlLFxuICBnZXRQcm90bzogICAkT2JqZWN0LmdldFByb3RvdHlwZU9mLFxuICBpc0VudW06ICAgICB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZSxcbiAgZ2V0RGVzYzogICAgJE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG4gIHNldERlc2M6ICAgICRPYmplY3QuZGVmaW5lUHJvcGVydHksXG4gIHNldERlc2NzOiAgICRPYmplY3QuZGVmaW5lUHJvcGVydGllcyxcbiAgZ2V0S2V5czogICAgJE9iamVjdC5rZXlzLFxuICBnZXROYW1lczogICAkT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMsXG4gIGdldFN5bWJvbHM6ICRPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzLFxuICBlYWNoOiAgICAgICBbXS5mb3JFYWNoXG59OyIsInZhciB3aW47XG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgd2luID0gd2luZG93O1xufSBlbHNlIGlmICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgd2luID0gZ2xvYmFsO1xufSBlbHNlIGlmICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIil7XG4gICAgd2luID0gc2VsZjtcbn0gZWxzZSB7XG4gICAgd2luID0ge307XG59XG5cbm1vZHVsZS5leHBvcnRzID0gd2luO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY29tbW9uanNHbG9iYWwgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDogdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHt9O1xuXG5cblxuXG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZuLCBtb2R1bGUpIHtcblx0cmV0dXJuIG1vZHVsZSA9IHsgZXhwb3J0czoge30gfSwgZm4obW9kdWxlLCBtb2R1bGUuZXhwb3J0cyksIG1vZHVsZS5leHBvcnRzO1xufVxuXG52YXIgd2luO1xuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHdpbiA9IHdpbmRvdztcbn0gZWxzZSBpZiAodHlwZW9mIGNvbW1vbmpzR2xvYmFsICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgd2luID0gY29tbW9uanNHbG9iYWw7XG59IGVsc2UgaWYgKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiKXtcbiAgICB3aW4gPSBzZWxmO1xufSBlbHNlIHtcbiAgICB3aW4gPSB7fTtcbn1cblxudmFyIHdpbmRvd18xID0gd2luO1xuXG52YXIgaXNGdW5jdGlvbl8xID0gaXNGdW5jdGlvbjtcblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuZnVuY3Rpb24gaXNGdW5jdGlvbiAoZm4pIHtcbiAgdmFyIHN0cmluZyA9IHRvU3RyaW5nLmNhbGwoZm4pO1xuICByZXR1cm4gc3RyaW5nID09PSAnW29iamVjdCBGdW5jdGlvbl0nIHx8XG4gICAgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJyAmJiBzdHJpbmcgIT09ICdbb2JqZWN0IFJlZ0V4cF0nKSB8fFxuICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAvLyBJRTggYW5kIGJlbG93XG4gICAgIChmbiA9PT0gd2luZG93LnNldFRpbWVvdXQgfHxcbiAgICAgIGZuID09PSB3aW5kb3cuYWxlcnQgfHxcbiAgICAgIGZuID09PSB3aW5kb3cuY29uZmlybSB8fFxuICAgICAgZm4gPT09IHdpbmRvdy5wcm9tcHQpKVxufVxuXG52YXIgdHJpbV8xID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSwgZXhwb3J0cykge1xuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gdHJpbTtcblxuZnVuY3Rpb24gdHJpbShzdHIpe1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMqfFxccyokL2csICcnKTtcbn1cblxuZXhwb3J0cy5sZWZ0ID0gZnVuY3Rpb24oc3RyKXtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzKi8sICcnKTtcbn07XG5cbmV4cG9ydHMucmlnaHQgPSBmdW5jdGlvbihzdHIpe1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1xccyokLywgJycpO1xufTtcbn0pO1xuXG52YXIgZm9yRWFjaF8xID0gZm9yRWFjaDtcblxudmFyIHRvU3RyaW5nJDEgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxuZnVuY3Rpb24gZm9yRWFjaChsaXN0LCBpdGVyYXRvciwgY29udGV4dCkge1xuICAgIGlmICghaXNGdW5jdGlvbl8xKGl0ZXJhdG9yKSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdpdGVyYXRvciBtdXN0IGJlIGEgZnVuY3Rpb24nKVxuICAgIH1cblxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMykge1xuICAgICAgICBjb250ZXh0ID0gdGhpcztcbiAgICB9XG4gICAgXG4gICAgaWYgKHRvU3RyaW5nJDEuY2FsbChsaXN0KSA9PT0gJ1tvYmplY3QgQXJyYXldJylcbiAgICAgICAgZm9yRWFjaEFycmF5JDEobGlzdCwgaXRlcmF0b3IsIGNvbnRleHQpO1xuICAgIGVsc2UgaWYgKHR5cGVvZiBsaXN0ID09PSAnc3RyaW5nJylcbiAgICAgICAgZm9yRWFjaFN0cmluZyhsaXN0LCBpdGVyYXRvciwgY29udGV4dCk7XG4gICAgZWxzZVxuICAgICAgICBmb3JFYWNoT2JqZWN0KGxpc3QsIGl0ZXJhdG9yLCBjb250ZXh0KTtcbn1cblxuZnVuY3Rpb24gZm9yRWFjaEFycmF5JDEoYXJyYXksIGl0ZXJhdG9yLCBjb250ZXh0KSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGFycmF5Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGFycmF5LCBpKSkge1xuICAgICAgICAgICAgaXRlcmF0b3IuY2FsbChjb250ZXh0LCBhcnJheVtpXSwgaSwgYXJyYXkpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBmb3JFYWNoU3RyaW5nKHN0cmluZywgaXRlcmF0b3IsIGNvbnRleHQpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gc3RyaW5nLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIC8vIG5vIHN1Y2ggdGhpbmcgYXMgYSBzcGFyc2Ugc3RyaW5nLlxuICAgICAgICBpdGVyYXRvci5jYWxsKGNvbnRleHQsIHN0cmluZy5jaGFyQXQoaSksIGksIHN0cmluZyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBmb3JFYWNoT2JqZWN0KG9iamVjdCwgaXRlcmF0b3IsIGNvbnRleHQpIHtcbiAgICBmb3IgKHZhciBrIGluIG9iamVjdCkge1xuICAgICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGspKSB7XG4gICAgICAgICAgICBpdGVyYXRvci5jYWxsKGNvbnRleHQsIG9iamVjdFtrXSwgaywgb2JqZWN0KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxudmFyIGlzQXJyYXkgPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJnKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbiAgICB9O1xuXG52YXIgcGFyc2VIZWFkZXJzID0gZnVuY3Rpb24gKGhlYWRlcnMpIHtcbiAgaWYgKCFoZWFkZXJzKVxuICAgIHJldHVybiB7fVxuXG4gIHZhciByZXN1bHQgPSB7fTtcblxuICBmb3JFYWNoXzEoXG4gICAgICB0cmltXzEoaGVhZGVycykuc3BsaXQoJ1xcbicpXG4gICAgLCBmdW5jdGlvbiAocm93KSB7XG4gICAgICAgIHZhciBpbmRleCA9IHJvdy5pbmRleE9mKCc6JylcbiAgICAgICAgICAsIGtleSA9IHRyaW1fMShyb3cuc2xpY2UoMCwgaW5kZXgpKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgLCB2YWx1ZSA9IHRyaW1fMShyb3cuc2xpY2UoaW5kZXggKyAxKSk7XG5cbiAgICAgICAgaWYgKHR5cGVvZihyZXN1bHRba2V5XSkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgcmVzdWx0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChpc0FycmF5KHJlc3VsdFtrZXldKSkge1xuICAgICAgICAgIHJlc3VsdFtrZXldLnB1c2godmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc3VsdFtrZXldID0gWyByZXN1bHRba2V5XSwgdmFsdWUgXTtcbiAgICAgICAgfVxuICAgICAgfVxuICApO1xuXG4gIHJldHVybiByZXN1bHRcbn07XG5cbnZhciBpbW11dGFibGUgPSBleHRlbmQ7XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSQxID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxuZnVuY3Rpb24gZXh0ZW5kKCkge1xuICAgIHZhciB0YXJnZXQgPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICAgICAgaWYgKGhhc093blByb3BlcnR5JDEuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldFxufVxuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5cblxuXG52YXIgeGhyID0gY3JlYXRlWEhSO1xuLy8gQWxsb3cgdXNlIG9mIGRlZmF1bHQgaW1wb3J0IHN5bnRheCBpbiBUeXBlU2NyaXB0XG52YXIgZGVmYXVsdF8xID0gY3JlYXRlWEhSO1xuY3JlYXRlWEhSLlhNTEh0dHBSZXF1ZXN0ID0gd2luZG93XzEuWE1MSHR0cFJlcXVlc3QgfHwgbm9vcDtcbmNyZWF0ZVhIUi5YRG9tYWluUmVxdWVzdCA9IFwid2l0aENyZWRlbnRpYWxzXCIgaW4gKG5ldyBjcmVhdGVYSFIuWE1MSHR0cFJlcXVlc3QoKSkgPyBjcmVhdGVYSFIuWE1MSHR0cFJlcXVlc3QgOiB3aW5kb3dfMS5YRG9tYWluUmVxdWVzdDtcblxuZm9yRWFjaEFycmF5KFtcImdldFwiLCBcInB1dFwiLCBcInBvc3RcIiwgXCJwYXRjaFwiLCBcImhlYWRcIiwgXCJkZWxldGVcIl0sIGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgIGNyZWF0ZVhIUlttZXRob2QgPT09IFwiZGVsZXRlXCIgPyBcImRlbFwiIDogbWV0aG9kXSA9IGZ1bmN0aW9uKHVyaSwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICAgICAgb3B0aW9ucyA9IGluaXRQYXJhbXModXJpLCBvcHRpb25zLCBjYWxsYmFjayk7XG4gICAgICAgIG9wdGlvbnMubWV0aG9kID0gbWV0aG9kLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIHJldHVybiBfY3JlYXRlWEhSKG9wdGlvbnMpXG4gICAgfTtcbn0pO1xuXG5mdW5jdGlvbiBmb3JFYWNoQXJyYXkoYXJyYXksIGl0ZXJhdG9yKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpdGVyYXRvcihhcnJheVtpXSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBpc0VtcHR5KG9iail7XG4gICAgZm9yKHZhciBpIGluIG9iail7XG4gICAgICAgIGlmKG9iai5oYXNPd25Qcm9wZXJ0eShpKSkgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIHJldHVybiB0cnVlXG59XG5cbmZ1bmN0aW9uIGluaXRQYXJhbXModXJpLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIHZhciBwYXJhbXMgPSB1cmk7XG5cbiAgICBpZiAoaXNGdW5jdGlvbl8xKG9wdGlvbnMpKSB7XG4gICAgICAgIGNhbGxiYWNrID0gb3B0aW9ucztcbiAgICAgICAgaWYgKHR5cGVvZiB1cmkgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHBhcmFtcyA9IHt1cmk6dXJpfTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcmFtcyA9IGltbXV0YWJsZShvcHRpb25zLCB7dXJpOiB1cml9KTtcbiAgICB9XG5cbiAgICBwYXJhbXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICByZXR1cm4gcGFyYW1zXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVhIUih1cmksIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgb3B0aW9ucyA9IGluaXRQYXJhbXModXJpLCBvcHRpb25zLCBjYWxsYmFjayk7XG4gICAgcmV0dXJuIF9jcmVhdGVYSFIob3B0aW9ucylcbn1cblxuZnVuY3Rpb24gX2NyZWF0ZVhIUihvcHRpb25zKSB7XG4gICAgaWYodHlwZW9mIG9wdGlvbnMuY2FsbGJhY2sgPT09IFwidW5kZWZpbmVkXCIpe1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJjYWxsYmFjayBhcmd1bWVudCBtaXNzaW5nXCIpXG4gICAgfVxuXG4gICAgdmFyIGNhbGxlZCA9IGZhbHNlO1xuICAgIHZhciBjYWxsYmFjayA9IGZ1bmN0aW9uIGNiT25jZShlcnIsIHJlc3BvbnNlLCBib2R5KXtcbiAgICAgICAgaWYoIWNhbGxlZCl7XG4gICAgICAgICAgICBjYWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgb3B0aW9ucy5jYWxsYmFjayhlcnIsIHJlc3BvbnNlLCBib2R5KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiByZWFkeXN0YXRlY2hhbmdlKCkge1xuICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQobG9hZEZ1bmMsIDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Qm9keSgpIHtcbiAgICAgICAgLy8gQ2hyb21lIHdpdGggcmVxdWVzdFR5cGU9YmxvYiB0aHJvd3MgZXJyb3JzIGFycm91bmQgd2hlbiBldmVuIHRlc3RpbmcgYWNjZXNzIHRvIHJlc3BvbnNlVGV4dFxuICAgICAgICB2YXIgYm9keSA9IHVuZGVmaW5lZDtcblxuICAgICAgICBpZiAoeGhyLnJlc3BvbnNlKSB7XG4gICAgICAgICAgICBib2R5ID0geGhyLnJlc3BvbnNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYm9keSA9IHhoci5yZXNwb25zZVRleHQgfHwgZ2V0WG1sKHhocik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNKc29uKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGJvZHkgPSBKU09OLnBhcnNlKGJvZHkpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBib2R5XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZXJyb3JGdW5jKGV2dCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dFRpbWVyKTtcbiAgICAgICAgaWYoIShldnQgaW5zdGFuY2VvZiBFcnJvcikpe1xuICAgICAgICAgICAgZXZ0ID0gbmV3IEVycm9yKFwiXCIgKyAoZXZ0IHx8IFwiVW5rbm93biBYTUxIdHRwUmVxdWVzdCBFcnJvclwiKSApO1xuICAgICAgICB9XG4gICAgICAgIGV2dC5zdGF0dXNDb2RlID0gMDtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGV2dCwgZmFpbHVyZVJlc3BvbnNlKVxuICAgIH1cblxuICAgIC8vIHdpbGwgbG9hZCB0aGUgZGF0YSAmIHByb2Nlc3MgdGhlIHJlc3BvbnNlIGluIGEgc3BlY2lhbCByZXNwb25zZSBvYmplY3RcbiAgICBmdW5jdGlvbiBsb2FkRnVuYygpIHtcbiAgICAgICAgaWYgKGFib3J0ZWQpIHJldHVyblxuICAgICAgICB2YXIgc3RhdHVzO1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dFRpbWVyKTtcbiAgICAgICAgaWYob3B0aW9ucy51c2VYRFIgJiYgeGhyLnN0YXR1cz09PXVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy9JRTggQ09SUyBHRVQgc3VjY2Vzc2Z1bCByZXNwb25zZSBkb2Vzbid0IGhhdmUgYSBzdGF0dXMgZmllbGQsIGJ1dCBib2R5IGlzIGZpbmVcbiAgICAgICAgICAgIHN0YXR1cyA9IDIwMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0YXR1cyA9ICh4aHIuc3RhdHVzID09PSAxMjIzID8gMjA0IDogeGhyLnN0YXR1cyk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJlc3BvbnNlID0gZmFpbHVyZVJlc3BvbnNlO1xuICAgICAgICB2YXIgZXJyID0gbnVsbDtcblxuICAgICAgICBpZiAoc3RhdHVzICE9PSAwKXtcbiAgICAgICAgICAgIHJlc3BvbnNlID0ge1xuICAgICAgICAgICAgICAgIGJvZHk6IGdldEJvZHkoKSxcbiAgICAgICAgICAgICAgICBzdGF0dXNDb2RlOiBzdGF0dXMsXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge30sXG4gICAgICAgICAgICAgICAgdXJsOiB1cmksXG4gICAgICAgICAgICAgICAgcmF3UmVxdWVzdDogeGhyXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYoeGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycyl7IC8vcmVtZW1iZXIgeGhyIGNhbiBpbiBmYWN0IGJlIFhEUiBmb3IgQ09SUyBpbiBJRVxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmhlYWRlcnMgPSBwYXJzZUhlYWRlcnMoeGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVyciA9IG5ldyBFcnJvcihcIkludGVybmFsIFhNTEh0dHBSZXF1ZXN0IEVycm9yXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjYWxsYmFjayhlcnIsIHJlc3BvbnNlLCByZXNwb25zZS5ib2R5KVxuICAgIH1cblxuICAgIHZhciB4aHIgPSBvcHRpb25zLnhociB8fCBudWxsO1xuXG4gICAgaWYgKCF4aHIpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMuY29ycyB8fCBvcHRpb25zLnVzZVhEUikge1xuICAgICAgICAgICAgeGhyID0gbmV3IGNyZWF0ZVhIUi5YRG9tYWluUmVxdWVzdCgpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHhociA9IG5ldyBjcmVhdGVYSFIuWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBrZXk7XG4gICAgdmFyIGFib3J0ZWQ7XG4gICAgdmFyIHVyaSA9IHhoci51cmwgPSBvcHRpb25zLnVyaSB8fCBvcHRpb25zLnVybDtcbiAgICB2YXIgbWV0aG9kID0geGhyLm1ldGhvZCA9IG9wdGlvbnMubWV0aG9kIHx8IFwiR0VUXCI7XG4gICAgdmFyIGJvZHkgPSBvcHRpb25zLmJvZHkgfHwgb3B0aW9ucy5kYXRhO1xuICAgIHZhciBoZWFkZXJzID0geGhyLmhlYWRlcnMgPSBvcHRpb25zLmhlYWRlcnMgfHwge307XG4gICAgdmFyIHN5bmMgPSAhIW9wdGlvbnMuc3luYztcbiAgICB2YXIgaXNKc29uID0gZmFsc2U7XG4gICAgdmFyIHRpbWVvdXRUaW1lcjtcbiAgICB2YXIgZmFpbHVyZVJlc3BvbnNlID0ge1xuICAgICAgICBib2R5OiB1bmRlZmluZWQsXG4gICAgICAgIGhlYWRlcnM6IHt9LFxuICAgICAgICBzdGF0dXNDb2RlOiAwLFxuICAgICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgICAgdXJsOiB1cmksXG4gICAgICAgIHJhd1JlcXVlc3Q6IHhoclxuICAgIH07XG5cbiAgICBpZiAoXCJqc29uXCIgaW4gb3B0aW9ucyAmJiBvcHRpb25zLmpzb24gIT09IGZhbHNlKSB7XG4gICAgICAgIGlzSnNvbiA9IHRydWU7XG4gICAgICAgIGhlYWRlcnNbXCJhY2NlcHRcIl0gfHwgaGVhZGVyc1tcIkFjY2VwdFwiXSB8fCAoaGVhZGVyc1tcIkFjY2VwdFwiXSA9IFwiYXBwbGljYXRpb24vanNvblwiKTsgLy9Eb24ndCBvdmVycmlkZSBleGlzdGluZyBhY2NlcHQgaGVhZGVyIGRlY2xhcmVkIGJ5IHVzZXJcbiAgICAgICAgaWYgKG1ldGhvZCAhPT0gXCJHRVRcIiAmJiBtZXRob2QgIT09IFwiSEVBRFwiKSB7XG4gICAgICAgICAgICBoZWFkZXJzW1wiY29udGVudC10eXBlXCJdIHx8IGhlYWRlcnNbXCJDb250ZW50LVR5cGVcIl0gfHwgKGhlYWRlcnNbXCJDb250ZW50LVR5cGVcIl0gPSBcImFwcGxpY2F0aW9uL2pzb25cIik7IC8vRG9uJ3Qgb3ZlcnJpZGUgZXhpc3RpbmcgYWNjZXB0IGhlYWRlciBkZWNsYXJlZCBieSB1c2VyXG4gICAgICAgICAgICBib2R5ID0gSlNPTi5zdHJpbmdpZnkob3B0aW9ucy5qc29uID09PSB0cnVlID8gYm9keSA6IG9wdGlvbnMuanNvbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gcmVhZHlzdGF0ZWNoYW5nZTtcbiAgICB4aHIub25sb2FkID0gbG9hZEZ1bmM7XG4gICAgeGhyLm9uZXJyb3IgPSBlcnJvckZ1bmM7XG4gICAgLy8gSUU5IG11c3QgaGF2ZSBvbnByb2dyZXNzIGJlIHNldCB0byBhIHVuaXF1ZSBmdW5jdGlvbi5cbiAgICB4aHIub25wcm9ncmVzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gSUUgbXVzdCBkaWVcbiAgICB9O1xuICAgIHhoci5vbmFib3J0ID0gZnVuY3Rpb24oKXtcbiAgICAgICAgYWJvcnRlZCA9IHRydWU7XG4gICAgfTtcbiAgICB4aHIub250aW1lb3V0ID0gZXJyb3JGdW5jO1xuICAgIHhoci5vcGVuKG1ldGhvZCwgdXJpLCAhc3luYywgb3B0aW9ucy51c2VybmFtZSwgb3B0aW9ucy5wYXNzd29yZCk7XG4gICAgLy9oYXMgdG8gYmUgYWZ0ZXIgb3BlblxuICAgIGlmKCFzeW5jKSB7XG4gICAgICAgIHhoci53aXRoQ3JlZGVudGlhbHMgPSAhIW9wdGlvbnMud2l0aENyZWRlbnRpYWxzO1xuICAgIH1cbiAgICAvLyBDYW5ub3Qgc2V0IHRpbWVvdXQgd2l0aCBzeW5jIHJlcXVlc3RcbiAgICAvLyBub3Qgc2V0dGluZyB0aW1lb3V0IG9uIHRoZSB4aHIgb2JqZWN0LCBiZWNhdXNlIG9mIG9sZCB3ZWJraXRzIGV0Yy4gbm90IGhhbmRsaW5nIHRoYXQgY29ycmVjdGx5XG4gICAgLy8gYm90aCBucG0ncyByZXF1ZXN0IGFuZCBqcXVlcnkgMS54IHVzZSB0aGlzIGtpbmQgb2YgdGltZW91dCwgc28gdGhpcyBpcyBiZWluZyBjb25zaXN0ZW50XG4gICAgaWYgKCFzeW5jICYmIG9wdGlvbnMudGltZW91dCA+IDAgKSB7XG4gICAgICAgIHRpbWVvdXRUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGlmIChhYm9ydGVkKSByZXR1cm5cbiAgICAgICAgICAgIGFib3J0ZWQgPSB0cnVlOy8vSUU5IG1heSBzdGlsbCBjYWxsIHJlYWR5c3RhdGVjaGFuZ2VcbiAgICAgICAgICAgIHhoci5hYm9ydChcInRpbWVvdXRcIik7XG4gICAgICAgICAgICB2YXIgZSA9IG5ldyBFcnJvcihcIlhNTEh0dHBSZXF1ZXN0IHRpbWVvdXRcIik7XG4gICAgICAgICAgICBlLmNvZGUgPSBcIkVUSU1FRE9VVFwiO1xuICAgICAgICAgICAgZXJyb3JGdW5jKGUpO1xuICAgICAgICB9LCBvcHRpb25zLnRpbWVvdXQgKTtcbiAgICB9XG5cbiAgICBpZiAoeGhyLnNldFJlcXVlc3RIZWFkZXIpIHtcbiAgICAgICAgZm9yKGtleSBpbiBoZWFkZXJzKXtcbiAgICAgICAgICAgIGlmKGhlYWRlcnMuaGFzT3duUHJvcGVydHkoa2V5KSl7XG4gICAgICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoa2V5LCBoZWFkZXJzW2tleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChvcHRpb25zLmhlYWRlcnMgJiYgIWlzRW1wdHkob3B0aW9ucy5oZWFkZXJzKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJIZWFkZXJzIGNhbm5vdCBiZSBzZXQgb24gYW4gWERvbWFpblJlcXVlc3Qgb2JqZWN0XCIpXG4gICAgfVxuXG4gICAgaWYgKFwicmVzcG9uc2VUeXBlXCIgaW4gb3B0aW9ucykge1xuICAgICAgICB4aHIucmVzcG9uc2VUeXBlID0gb3B0aW9ucy5yZXNwb25zZVR5cGU7XG4gICAgfVxuXG4gICAgaWYgKFwiYmVmb3JlU2VuZFwiIGluIG9wdGlvbnMgJiZcbiAgICAgICAgdHlwZW9mIG9wdGlvbnMuYmVmb3JlU2VuZCA9PT0gXCJmdW5jdGlvblwiXG4gICAgKSB7XG4gICAgICAgIG9wdGlvbnMuYmVmb3JlU2VuZCh4aHIpO1xuICAgIH1cblxuICAgIC8vIE1pY3Jvc29mdCBFZGdlIGJyb3dzZXIgc2VuZHMgXCJ1bmRlZmluZWRcIiB3aGVuIHNlbmQgaXMgY2FsbGVkIHdpdGggdW5kZWZpbmVkIHZhbHVlLlxuICAgIC8vIFhNTEh0dHBSZXF1ZXN0IHNwZWMgc2F5cyB0byBwYXNzIG51bGwgYXMgYm9keSB0byBpbmRpY2F0ZSBubyBib2R5XG4gICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9uYXVndHVyL3hoci9pc3N1ZXMvMTAwLlxuICAgIHhoci5zZW5kKGJvZHkgfHwgbnVsbCk7XG5cbiAgICByZXR1cm4geGhyXG5cblxufVxuXG5mdW5jdGlvbiBnZXRYbWwoeGhyKSB7XG4gICAgLy8geGhyLnJlc3BvbnNlWE1MIHdpbGwgdGhyb3cgRXhjZXB0aW9uIFwiSW52YWxpZFN0YXRlRXJyb3JcIiBvciBcIkRPTUV4Y2VwdGlvblwiXG4gICAgLy8gU2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9YTUxIdHRwUmVxdWVzdC9yZXNwb25zZVhNTC5cbiAgICB0cnkge1xuICAgICAgICBpZiAoeGhyLnJlc3BvbnNlVHlwZSA9PT0gXCJkb2N1bWVudFwiKSB7XG4gICAgICAgICAgICByZXR1cm4geGhyLnJlc3BvbnNlWE1MXG4gICAgICAgIH1cbiAgICAgICAgdmFyIGZpcmVmb3hCdWdUYWtlbkVmZmVjdCA9IHhoci5yZXNwb25zZVhNTCAmJiB4aHIucmVzcG9uc2VYTUwuZG9jdW1lbnRFbGVtZW50Lm5vZGVOYW1lID09PSBcInBhcnNlcmVycm9yXCI7XG4gICAgICAgIGlmICh4aHIucmVzcG9uc2VUeXBlID09PSBcIlwiICYmICFmaXJlZm94QnVnVGFrZW5FZmZlY3QpIHtcbiAgICAgICAgICAgIHJldHVybiB4aHIucmVzcG9uc2VYTUxcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHt9XG5cbiAgICByZXR1cm4gbnVsbFxufVxuXG5mdW5jdGlvbiBub29wKCkge31cblxueGhyLmRlZmF1bHQgPSBkZWZhdWx0XzE7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqO1xufSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG59O1xuXG5cblxuXG5cbnZhciBhc3luY0dlbmVyYXRvciA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQXdhaXRWYWx1ZSh2YWx1ZSkge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIEFzeW5jR2VuZXJhdG9yKGdlbikge1xuICAgIHZhciBmcm9udCwgYmFjaztcblxuICAgIGZ1bmN0aW9uIHNlbmQoa2V5LCBhcmcpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHZhciByZXF1ZXN0ID0ge1xuICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgIGFyZzogYXJnLFxuICAgICAgICAgIHJlc29sdmU6IHJlc29sdmUsXG4gICAgICAgICAgcmVqZWN0OiByZWplY3QsXG4gICAgICAgICAgbmV4dDogbnVsbFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChiYWNrKSB7XG4gICAgICAgICAgYmFjayA9IGJhY2submV4dCA9IHJlcXVlc3Q7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZnJvbnQgPSBiYWNrID0gcmVxdWVzdDtcbiAgICAgICAgICByZXN1bWUoa2V5LCBhcmcpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXN1bWUoa2V5LCBhcmcpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBnZW5ba2V5XShhcmcpO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG5cbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgQXdhaXRWYWx1ZSkge1xuICAgICAgICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZS52YWx1ZSkudGhlbihmdW5jdGlvbiAoYXJnKSB7XG4gICAgICAgICAgICByZXN1bWUoXCJuZXh0XCIsIGFyZyk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24gKGFyZykge1xuICAgICAgICAgICAgcmVzdW1lKFwidGhyb3dcIiwgYXJnKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZXR0bGUocmVzdWx0LmRvbmUgPyBcInJldHVyblwiIDogXCJub3JtYWxcIiwgcmVzdWx0LnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHNldHRsZShcInRocm93XCIsIGVycik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0dGxlKHR5cGUsIHZhbHVlKSB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSBcInJldHVyblwiOlxuICAgICAgICAgIGZyb250LnJlc29sdmUoe1xuICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgZG9uZTogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgXCJ0aHJvd1wiOlxuICAgICAgICAgIGZyb250LnJlamVjdCh2YWx1ZSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBmcm9udC5yZXNvbHZlKHtcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgIGRvbmU6IGZhbHNlXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGZyb250ID0gZnJvbnQubmV4dDtcblxuICAgICAgaWYgKGZyb250KSB7XG4gICAgICAgIHJlc3VtZShmcm9udC5rZXksIGZyb250LmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBiYWNrID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9pbnZva2UgPSBzZW5kO1xuXG4gICAgaWYgKHR5cGVvZiBnZW4ucmV0dXJuICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIHRoaXMucmV0dXJuID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHtcbiAgICBBc3luY0dlbmVyYXRvci5wcm90b3R5cGVbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgfVxuXG4gIEFzeW5jR2VuZXJhdG9yLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKGFyZykge1xuICAgIHJldHVybiB0aGlzLl9pbnZva2UoXCJuZXh0XCIsIGFyZyk7XG4gIH07XG5cbiAgQXN5bmNHZW5lcmF0b3IucHJvdG90eXBlLnRocm93ID0gZnVuY3Rpb24gKGFyZykge1xuICAgIHJldHVybiB0aGlzLl9pbnZva2UoXCJ0aHJvd1wiLCBhcmcpO1xuICB9O1xuXG4gIEFzeW5jR2VuZXJhdG9yLnByb3RvdHlwZS5yZXR1cm4gPSBmdW5jdGlvbiAoYXJnKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ludm9rZShcInJldHVyblwiLCBhcmcpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgd3JhcDogZnVuY3Rpb24gKGZuKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmV3IEFzeW5jR2VuZXJhdG9yKGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgICAgfTtcbiAgICB9LFxuICAgIGF3YWl0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHJldHVybiBuZXcgQXdhaXRWYWx1ZSh2YWx1ZSk7XG4gICAgfVxuICB9O1xufSgpO1xuXG5cblxuXG5cbnZhciBjbGFzc0NhbGxDaGVjayA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59O1xuXG52YXIgY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gIH07XG59KCk7XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxudmFyIHRvQ29uc3VtYWJsZUFycmF5ID0gZnVuY3Rpb24gKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykgYXJyMltpXSA9IGFycltpXTtcblxuICAgIHJldHVybiBhcnIyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBBcnJheS5mcm9tKGFycik7XG4gIH1cbn07XG5cbnZhciBsYXN0RXJyb3IgPSAnJztcblxuLyoqXG4gKiBDcmVhdGVzIHRoZSBIVExNIGZvciBhIGZhaWx1cmUgbWVzc2FnZVxuICogQHBhcmFtIHtzdHJpbmd9IGNhbnZhc0NvbnRhaW5lcklkIGlkIG9mIGNvbnRhaW5lciBvZiB0aFxuICogICAgICAgIGNhbnZhcy5cbiAqIEByZXR1cm4ge3N0cmluZ30gVGhlIGh0bWwuXG4gKi9cbmZ1bmN0aW9uIG1ha2VGYWlsSFRNTChtc2cpIHtcbiAgICByZXR1cm4gJ1xcbjx0YWJsZSBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICM4Q0U7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7XCI+PHRyPlxcbjx0ZCBhbGlnbj1cImNlbnRlclwiPlxcbjxkaXYgc3R5bGU9XCJkaXNwbGF5OiB0YWJsZS1jZWxsOyB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1wiPlxcbjxkaXYgc3R5bGU9XCJcIj4nICsgbXNnICsgJzwvZGl2PlxcbjwvZGl2PlxcbjwvdGQ+PC90cj48L3RhYmxlPlxcbic7XG59XG5cbi8qKlxuICogTWVzc2FnZSBmb3IgZ2V0dGluZyBhIHdlYmdsIGJyb3dzZXJcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbnZhciBHRVRfQV9XRUJHTF9CUk9XU0VSID0gJ1xcblxcdFRoaXMgcGFnZSByZXF1aXJlcyBhIGJyb3dzZXIgdGhhdCBzdXBwb3J0cyBXZWJHTC48YnIvPlxcblxcdDxhIGhyZWY9XCJodHRwOi8vZ2V0LndlYmdsLm9yZ1wiPkNsaWNrIGhlcmUgdG8gdXBncmFkZSB5b3VyIGJyb3dzZXIuPC9hPlxcbic7XG5cbi8qKlxuICogTWVzc2FnZSBmb3IgbmVlZCBiZXR0ZXIgaGFyZHdhcmVcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbnZhciBPVEhFUl9QUk9CTEVNID0gJ1xcblxcdEl0IGRvZXMgbm90IGFwcGVhciB5b3VyIGNvbXB1dGVyIGNhbiBzdXBwb3J0IFdlYkdMLjxici8+XFxuXFx0PGEgaHJlZj1cImh0dHA6Ly9nZXQud2ViZ2wub3JnL3Ryb3VibGVzaG9vdGluZy9cIj5DbGljayBoZXJlIGZvciBtb3JlIGluZm9ybWF0aW9uLjwvYT5cXG4nO1xuXG4vKipcbiAqIENvZGUgdG8gcmV0dXJuIGluIGBvbkVycm9yYCBjYWxsYmFjayB3aGVuIHRoZSBicm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCB3ZWJnbFxuICogQHR5cGUge251bWJlcn1cbiAqL1xudmFyIEVSUk9SX0JST1dTRVJfU1VQUE9SVCA9IDE7XG5cbi8qKlxuICogQ29kZSB0byByZXR1cm4gaW4gYG9uRXJyb3JgIGNhbGxiYWNrIHRoZXJlJ3MgYW55IG90aGVyIHByb2JsZW0gcmVsYXRlZCB0byB3ZWJnbFxuICogQHR5cGUge251bWJlcn1cbiAqL1xudmFyIEVSUk9SX09USEVSID0gMjtcblxuLyoqXG4gKiBDcmVhdGVzIGEgd2ViZ2wgY29udGV4dC4gSWYgY3JlYXRpb24gZmFpbHMgaXQgd2lsbFxuICogY2hhbmdlIHRoZSBjb250ZW50cyBvZiB0aGUgY29udGFpbmVyIG9mIHRoZSA8Y2FudmFzPlxuICogdGFnIHRvIGFuIGVycm9yIG1lc3NhZ2Ugd2l0aCB0aGUgY29ycmVjdCBsaW5rcyBmb3IgV2ViR0wsXG4gKiB1bmxlc3MgYG9uRXJyb3JgIG9wdGlvbiBpcyBkZWZpbmVkIHRvIGEgY2FsbGJhY2ssXG4gKiB3aGljaCBhbGxvd3MgZm9yIGN1c3RvbSBlcnJvciBoYW5kbGluZy4uXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGNhbnZhcy4gVGhlIGNhbnZhcyBlbGVtZW50IHRvIGNyZWF0ZSBhXG4gKiAgICAgY29udGV4dCBmcm9tLlxuICogQHBhcmFtIHtXZWJHTENvbnRleHRDcmVhdGlvbkF0dHJpYnV0ZXN9IG9wdEF0dHJpYnMgQW55XG4gKiAgICAgY3JlYXRpb24gYXR0cmlidXRlcyB5b3Ugd2FudCB0byBwYXNzIGluLlxuICogQHJldHVybiB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBUaGUgY3JlYXRlZCBjb250ZXh0LlxuICovXG5mdW5jdGlvbiBzZXR1cFdlYkdMKGNhbnZhcywgb3B0QXR0cmlicywgb25FcnJvcikge1xuICAgIGZ1bmN0aW9uIHNob3dMaW5rKHN0cikge1xuICAgICAgICB2YXIgY29udGFpbmVyID0gY2FudmFzLnBhcmVudE5vZGU7XG4gICAgICAgIGlmIChjb250YWluZXIpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBtYWtlRmFpbEhUTUwoc3RyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZUVycm9yKGVycm9yQ29kZSwgbXNnKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygb25FcnJvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgb25FcnJvcihlcnJvckNvZGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2hvd0xpbmsobXNnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmICghd2luZG93LldlYkdMUmVuZGVyaW5nQ29udGV4dCkge1xuICAgICAgICBoYW5kbGVFcnJvcihFUlJPUl9CUk9XU0VSX1NVUFBPUlQsIEdFVF9BX1dFQkdMX0JST1dTRVIpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgY29udGV4dCA9IGNyZWF0ZTNEQ29udGV4dChjYW52YXMsIG9wdEF0dHJpYnMpO1xuICAgIGlmICghY29udGV4dCkge1xuICAgICAgICBoYW5kbGVFcnJvcihFUlJPUl9PVEhFUiwgT1RIRVJfUFJPQkxFTSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29udGV4dC5nZXRFeHRlbnNpb24oJ09FU19zdGFuZGFyZF9kZXJpdmF0aXZlcycpO1xuICAgIH1cbiAgICByZXR1cm4gY29udGV4dDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgd2ViZ2wgY29udGV4dC5cbiAqIEBwYXJhbSB7IUNhbnZhc30gY2FudmFzIFRoZSBjYW52YXMgdGFnIHRvIGdldCBjb250ZXh0XG4gKiAgICAgZnJvbS4gSWYgb25lIGlzIG5vdCBwYXNzZWQgaW4gb25lIHdpbGwgYmUgY3JlYXRlZC5cbiAqIEByZXR1cm4geyFXZWJHTENvbnRleHR9IFRoZSBjcmVhdGVkIGNvbnRleHQuXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZTNEQ29udGV4dChjYW52YXMsIG9wdEF0dHJpYnMpIHtcbiAgICB2YXIgbmFtZXMgPSBbJ3dlYmdsJywgJ2V4cGVyaW1lbnRhbC13ZWJnbCddO1xuICAgIHZhciBjb250ZXh0ID0gbnVsbDtcbiAgICBmb3IgKHZhciBpaSA9IDA7IGlpIDwgbmFtZXMubGVuZ3RoOyArK2lpKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQobmFtZXNbaWldLCBvcHRBdHRyaWJzKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgaWYgKGNvbnRleHQpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY29udGV4dDtcbn1cblxuLypcbiAqXHRDcmVhdGUgYSBWZXJ0ZXggb2YgYSBzcGVjaWZpYyB0eXBlIChnbC5WRVJURVhfU0hBREVSLylcbiAqL1xuZnVuY3Rpb24gY3JlYXRlU2hhZGVyKG1haW4sIHNvdXJjZSwgdHlwZSwgb2Zmc2V0KSB7XG4gICAgdmFyIGdsID0gbWFpbi5nbDtcblxuICAgIHZhciBzaGFkZXIgPSBnbC5jcmVhdGVTaGFkZXIodHlwZSk7XG4gICAgZ2wuc2hhZGVyU291cmNlKHNoYWRlciwgc291cmNlKTtcbiAgICBnbC5jb21waWxlU2hhZGVyKHNoYWRlcik7XG5cbiAgICB2YXIgY29tcGlsZWQgPSBnbC5nZXRTaGFkZXJQYXJhbWV0ZXIoc2hhZGVyLCBnbC5DT01QSUxFX1NUQVRVUyk7XG5cbiAgICBpZiAoIWNvbXBpbGVkKSB7XG4gICAgICAgIC8vIFNvbWV0aGluZyB3ZW50IHdyb25nIGR1cmluZyBjb21waWxhdGlvbjsgZ2V0IHRoZSBlcnJvclxuICAgICAgICBsYXN0RXJyb3IgPSBnbC5nZXRTaGFkZXJJbmZvTG9nKHNoYWRlcik7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJyoqKiBFcnJvciBjb21waWxpbmcgc2hhZGVyICcgKyBzaGFkZXIgKyAnOicgKyBsYXN0RXJyb3IpO1xuICAgICAgICBtYWluLnRyaWdnZXIoJ2Vycm9yJywge1xuICAgICAgICAgICAgc2hhZGVyOiBzaGFkZXIsXG4gICAgICAgICAgICBzb3VyY2U6IHNvdXJjZSxcbiAgICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgICBlcnJvcjogbGFzdEVycm9yLFxuICAgICAgICAgICAgb2Zmc2V0OiBvZmZzZXQgfHwgMFxuICAgICAgICB9KTtcbiAgICAgICAgZ2wuZGVsZXRlU2hhZGVyKHNoYWRlcik7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBzaGFkZXI7XG59XG5cbi8qKlxuICogTG9hZHMgYSBzaGFkZXIuXG4gKiBAcGFyYW0geyFXZWJHTENvbnRleHR9IGdsIFRoZSBXZWJHTENvbnRleHQgdG8gdXNlLlxuICogQHBhcmFtIHtzdHJpbmd9IHNoYWRlclNvdXJjZSBUaGUgc2hhZGVyIHNvdXJjZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzaGFkZXJUeXBlIFRoZSB0eXBlIG9mIHNoYWRlci5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oc3RyaW5nKTogdm9pZCkgb3B0X2Vycm9yQ2FsbGJhY2sgY2FsbGJhY2sgZm9yIGVycm9ycy5cbiAqIEByZXR1cm4geyFXZWJHTFNoYWRlcn0gVGhlIGNyZWF0ZWQgc2hhZGVyLlxuICovXG5mdW5jdGlvbiBjcmVhdGVQcm9ncmFtKG1haW4sIHNoYWRlcnMsIG9wdEF0dHJpYnMsIG9wdExvY2F0aW9ucykge1xuICAgIHZhciBnbCA9IG1haW4uZ2w7XG5cbiAgICB2YXIgcHJvZ3JhbSA9IGdsLmNyZWF0ZVByb2dyYW0oKTtcbiAgICBmb3IgKHZhciBpaSA9IDA7IGlpIDwgc2hhZGVycy5sZW5ndGg7ICsraWkpIHtcbiAgICAgICAgZ2wuYXR0YWNoU2hhZGVyKHByb2dyYW0sIHNoYWRlcnNbaWldKTtcbiAgICB9XG4gICAgaWYgKG9wdEF0dHJpYnMpIHtcbiAgICAgICAgZm9yICh2YXIgX2lpID0gMDsgX2lpIDwgb3B0QXR0cmlicy5sZW5ndGg7ICsrX2lpKSB7XG4gICAgICAgICAgICBnbC5iaW5kQXR0cmliTG9jYXRpb24ocHJvZ3JhbSwgb3B0TG9jYXRpb25zID8gb3B0TG9jYXRpb25zW19paV0gOiBfaWksIG9wdEF0dHJpYnNbX2lpXSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2wubGlua1Byb2dyYW0ocHJvZ3JhbSk7XG5cbiAgICAvLyBDaGVjayB0aGUgbGluayBzdGF0dXNcbiAgICB2YXIgbGlua2VkID0gZ2wuZ2V0UHJvZ3JhbVBhcmFtZXRlcihwcm9ncmFtLCBnbC5MSU5LX1NUQVRVUyk7XG4gICAgaWYgKCFsaW5rZWQpIHtcbiAgICAgICAgLy8gc29tZXRoaW5nIHdlbnQgd3Jvbmcgd2l0aCB0aGUgbGlua1xuICAgICAgICBsYXN0RXJyb3IgPSBnbC5nZXRQcm9ncmFtSW5mb0xvZyhwcm9ncmFtKTtcbiAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIGluIHByb2dyYW0gbGlua2luZzonICsgbGFzdEVycm9yKTtcbiAgICAgICAgZ2wuZGVsZXRlUHJvZ3JhbShwcm9ncmFtKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBwcm9ncmFtO1xufVxuXG4vLyBCeSBCcmV0dCBDYW1iZXIgb25cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YW5ncmFtcy90YW5ncmFtL2Jsb2IvbWFzdGVyL3NyYy9nbC9nbHNsLmpzXG5mdW5jdGlvbiBwYXJzZVVuaWZvcm1zKHVuaWZvcm1zKSB7XG4gICAgdmFyIHByZWZpeCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogbnVsbDtcblxuICAgIHZhciBwYXJzZWQgPSBbXTtcblxuICAgIGZvciAodmFyIG5hbWUgaW4gdW5pZm9ybXMpIHtcbiAgICAgICAgdmFyIHVuaWZvcm0gPSB1bmlmb3Jtc1tuYW1lXTtcbiAgICAgICAgdmFyIHUgPSB2b2lkIDA7XG5cbiAgICAgICAgaWYgKHByZWZpeCkge1xuICAgICAgICAgICAgbmFtZSA9IHByZWZpeCArICcuJyArIG5hbWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTaW5nbGUgZmxvYXRcbiAgICAgICAgaWYgKHR5cGVvZiB1bmlmb3JtID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgcGFyc2VkLnB1c2goe1xuICAgICAgICAgICAgICAgIHR5cGU6ICdmbG9hdCcsXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnMWYnLFxuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHVuaWZvcm1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIEFycmF5OiB2ZWN0b3IsIGFycmF5IG9mIGZsb2F0cywgYXJyYXkgb2YgdGV4dHVyZXMsIG9yIGFycmF5IG9mIHN0cnVjdHNcbiAgICAgICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh1bmlmb3JtKSkge1xuICAgICAgICAgICAgICAgIC8vIE51bWVyaWMgdmFsdWVzXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB1bmlmb3JtWzBdID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgICAgICAvLyBmbG9hdCB2ZWN0b3JzICh2ZWMyLCB2ZWMzLCB2ZWM0KVxuICAgICAgICAgICAgICAgICAgICBpZiAodW5pZm9ybS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlZC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZmxvYXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJzFmJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB1bmlmb3JtXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBmbG9hdCB2ZWN0b3JzICh2ZWMyLCB2ZWMzLCB2ZWM0KVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh1bmlmb3JtLmxlbmd0aCA+PSAyICYmIHVuaWZvcm0ubGVuZ3RoIDw9IDQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJzZWQucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICd2ZWMnICsgdW5pZm9ybS5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogdW5pZm9ybS5sZW5ndGggKyAnZnYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdW5pZm9ybVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZmxvYXQgYXJyYXlcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHVuaWZvcm0ubGVuZ3RoID4gNCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJzZWQucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZmxvYXRbXScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICcxZnYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogbmFtZSArICdbMF0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHVuaWZvcm1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBhc3N1bWUgbWF0cml4IGZvciAodHlwZW9mID09IEZsb2F0MzJBcnJheSAmJiBsZW5ndGggPT0gMTYpP1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBBcnJheSBvZiB0ZXh0dXJlc1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiB1bmlmb3JtWzBdID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VkLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzYW1wbGVyMkQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJzFpJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB1bmlmb3JtXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBBcnJheSBvZiBhcnJheXMgLSBidXQgb25seSBhcnJheXMgb2YgdmVjdG9ycyBhcmUgYWxsb3dlZCBpbiB0aGlzIGNhc2VcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh1bmlmb3JtWzBdKSAmJiB0eXBlb2YgdW5pZm9ybVswXVswXSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBmbG9hdCB2ZWN0b3JzICh2ZWMyLCB2ZWMzLCB2ZWM0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1bmlmb3JtWzBdLmxlbmd0aCA+PSAyICYmIHVuaWZvcm1bMF0ubGVuZ3RoIDw9IDQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2V0IGVhY2ggdmVjdG9yIGluIHRoZSBhcnJheVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHUgPSAwOyB1IDwgdW5pZm9ybS5sZW5ndGg7IHUrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VkLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICd2ZWMnICsgdW5pZm9ybVswXS5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiB1bmlmb3JtW3VdLmxlbmd0aCArICdmdicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogbmFtZSArICdbJyArIHUgKyAnXScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHVuaWZvcm1bdV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVsc2UgZXJyb3I/XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBcnJheSBvZiBzdHJ1Y3R1cmVzXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChfdHlwZW9mKHVuaWZvcm1bMF0pID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHUgPSAwOyB1IDwgdW5pZm9ybS5sZW5ndGg7IHUrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2V0IGVhY2ggc3RydWN0IGluIHRoZSBhcnJheVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VkLnB1c2guYXBwbHkocGFyc2VkLCB0b0NvbnN1bWFibGVBcnJheShwYXJzZVVuaWZvcm1zKHVuaWZvcm1bdV0sIG5hbWUgKyAnWycgKyB1ICsgJ10nKSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQm9vbGVhblxuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIHVuaWZvcm0gPT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWQucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYm9vbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICcxaScsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHVuaWZvcm1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFRleHR1cmVcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgdW5pZm9ybSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlZC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc2FtcGxlcjJEJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICcxaScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdW5pZm9ybVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gU3RydWN0dXJlXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCh0eXBlb2YgdW5pZm9ybSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YodW5pZm9ybSkpID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNldCBlYWNoIGZpZWxkIGluIHRoZSBzdHJ1Y3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJzZWQucHVzaC5hcHBseShwYXJzZWQsIHRvQ29uc3VtYWJsZUFycmF5KHBhcnNlVW5pZm9ybXModW5pZm9ybSwgbmFtZSkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgLy8gVE9ETzogc3VwcG9ydCBvdGhlciBub24tZmxvYXQgdHlwZXM/IChpbnQsIGV0Yy4pXG4gICAgfVxuICAgIHJldHVybiBwYXJzZWQ7XG59XG5cbmZ1bmN0aW9uIGlzQ2FudmFzVmlzaWJsZShjYW52YXMpIHtcbiAgICByZXR1cm4gY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIGNhbnZhcy5oZWlnaHQgPiAwICYmIGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgPCAod2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpO1xufVxuXG5mdW5jdGlvbiBpc1Bvd2VyT2YyKHZhbHVlKSB7XG4gICAgcmV0dXJuICh2YWx1ZSAmIHZhbHVlIC0gMSkgPT09IDA7XG59XG5cbmZ1bmN0aW9uIGlzU2FmYXJpKCkge1xuICAgIHJldHVybiAoL14oKD8hY2hyb21lfGFuZHJvaWQpLikqc2FmYXJpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KVxuICAgICk7XG59XG5cblxuXG5cblxuXG5cbmZ1bmN0aW9uIGlzRGlmZihhLCBiKSB7XG4gICAgaWYgKGEgJiYgYikge1xuICAgICAgICByZXR1cm4gYS50b1N0cmluZygpICE9PSBiLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gc3Vic2NyaWJlTWl4aW4kMSh0YXJnZXQpIHtcbiAgICB2YXIgbGlzdGVuZXJzID0gbmV3IFNldCgpO1xuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24odGFyZ2V0LCB7XG4gICAgICAgIG9uOiBmdW5jdGlvbiBvbih0eXBlLCBmKSB7XG4gICAgICAgICAgICB2YXIgbGlzdGVuZXIgPSB7fTtcbiAgICAgICAgICAgIGxpc3RlbmVyW3R5cGVdID0gZjtcbiAgICAgICAgICAgIGxpc3RlbmVycy5hZGQobGlzdGVuZXIpO1xuICAgICAgICB9LFxuICAgICAgICBvZmY6IGZ1bmN0aW9uIG9mZih0eXBlLCBmKSB7XG4gICAgICAgICAgICBpZiAoZikge1xuICAgICAgICAgICAgICAgIHZhciBsaXN0ZW5lciA9IHt9O1xuICAgICAgICAgICAgICAgIGxpc3RlbmVyW3R5cGVdID0gZjtcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnMuZGVsZXRlKGxpc3RlbmVyKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHZhciBfaXRlcmF0b3JFcnJvciA9IHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9pdGVyYXRvciA9IGxpc3RlbmVyc1tTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSAoX3N0ZXAgPSBfaXRlcmF0b3IubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpdGVtID0gX3N0ZXAudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9kaWRJdGVyYXRvckVycm9yMiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9pdGVyYXRvckVycm9yMiA9IHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IyID0gT2JqZWN0LmtleXMoaXRlbSlbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDI7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgPSAoX3N0ZXAyID0gX2l0ZXJhdG9yMi5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiA9IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGtleSA9IF9zdGVwMi52YWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSB0eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcnMuZGVsZXRlKGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaXRlcmF0b3JFcnJvcjIgPSBlcnI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgJiYgX2l0ZXJhdG9yMi5yZXR1cm4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9pdGVyYXRvcjIucmV0dXJuKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBfaXRlcmF0b3JFcnJvciA9IGVycjtcbiAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uICYmIF9pdGVyYXRvci5yZXR1cm4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaXRlcmF0b3IucmV0dXJuKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbGlzdFN1YnNjcmlwdGlvbnM6IGZ1bmN0aW9uIGxpc3RTdWJzY3JpcHRpb25zKCkge1xuICAgICAgICAgICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24zID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvcjMgPSBmYWxzZTtcbiAgICAgICAgICAgIHZhciBfaXRlcmF0b3JFcnJvcjMgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yMyA9IGxpc3RlbmVyc1tTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwMzsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMyA9IChfc3RlcDMgPSBfaXRlcmF0b3IzLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24zID0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IF9zdGVwMy52YWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBfZGlkSXRlcmF0b3JFcnJvcjMgPSB0cnVlO1xuICAgICAgICAgICAgICAgIF9pdGVyYXRvckVycm9yMyA9IGVycjtcbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMyAmJiBfaXRlcmF0b3IzLnJldHVybikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX2l0ZXJhdG9yMy5yZXR1cm4oKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcjMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yMztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgc3Vic2NyaWJlOiBmdW5jdGlvbiBzdWJzY3JpYmUobGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGxpc3RlbmVycy5hZGQobGlzdGVuZXIpO1xuICAgICAgICB9LFxuICAgICAgICB1bnN1YnNjcmliZTogZnVuY3Rpb24gdW5zdWJzY3JpYmUobGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGxpc3RlbmVycy5kZWxldGUobGlzdGVuZXIpO1xuICAgICAgICB9LFxuICAgICAgICB1bnN1YnNjcmliZUFsbDogZnVuY3Rpb24gdW5zdWJzY3JpYmVBbGwoKSB7XG4gICAgICAgICAgICBsaXN0ZW5lcnMuY2xlYXIoKTtcbiAgICAgICAgfSxcbiAgICAgICAgdHJpZ2dlcjogZnVuY3Rpb24gdHJpZ2dlcihldmVudCkge1xuICAgICAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGRhdGEgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgICAgICAgICAgZGF0YVtfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uNCA9IHRydWU7XG4gICAgICAgICAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3I0ID0gZmFsc2U7XG4gICAgICAgICAgICB2YXIgX2l0ZXJhdG9yRXJyb3I0ID0gdW5kZWZpbmVkO1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIF9pdGVyYXRvcjQgPSBsaXN0ZW5lcnNbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDQ7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjQgPSAoX3N0ZXA0ID0gX2l0ZXJhdG9yNC5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uNCA9IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxpc3RlbmVyID0gX3N0ZXA0LnZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXJbZXZlbnRdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcltldmVudF0uYXBwbHkobGlzdGVuZXIsIHRvQ29uc3VtYWJsZUFycmF5KGRhdGEpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIF9kaWRJdGVyYXRvckVycm9yNCA9IHRydWU7XG4gICAgICAgICAgICAgICAgX2l0ZXJhdG9yRXJyb3I0ID0gZXJyO1xuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb240ICYmIF9pdGVyYXRvcjQucmV0dXJuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfaXRlcmF0b3I0LnJldHVybigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yNCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5cbi8vIFRleHR1cmUgbWFuYWdlbWVudFxudmFyIFRleHR1cmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVGV4dHVyZShnbCwgbmFtZSkge1xuICAgICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gICAgICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIFRleHR1cmUpO1xuXG4gICAgICAgIHN1YnNjcmliZU1peGluJDEodGhpcyk7XG5cbiAgICAgICAgdGhpcy5nbCA9IGdsO1xuICAgICAgICB0aGlzLnRleHR1cmUgPSBnbC5jcmVhdGVUZXh0dXJlKCk7XG4gICAgICAgIGlmICh0aGlzLnRleHR1cmUpIHtcbiAgICAgICAgICAgIHRoaXMudmFsaWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYmluZCgpO1xuXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuc291cmNlID0gbnVsbDtcbiAgICAgICAgdGhpcy5zb3VyY2VUeXBlID0gbnVsbDtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gbnVsbDsgLy8gYSBQcm9taXNlIG9iamVjdCB0byB0cmFjayB0aGUgbG9hZGluZyBzdGF0ZSBvZiB0aGlzIHRleHR1cmVcblxuICAgICAgICAvLyBEZWZhdWx0IHRvIGEgMS1waXhlbCBibGFjayB0ZXh0dXJlIHNvIHdlIGNhbiBzYWZlbHkgcmVuZGVyIHdoaWxlIHdlIHdhaXQgZm9yIGFuIGltYWdlIHRvIGxvYWRcbiAgICAgICAgLy8gU2VlOiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzE5NzIyMjQ3L3dlYmdsLXdhaXQtZm9yLXRleHR1cmUtdG8tbG9hZFxuICAgICAgICB0aGlzLnNldERhdGEoMSwgMSwgbmV3IFVpbnQ4QXJyYXkoWzAsIDAsIDAsIDI1NV0pLCB7IGZpbHRlcmluZzogJ2xpbmVhcicgfSk7XG4gICAgICAgIHRoaXMuc2V0RmlsdGVyaW5nKG9wdGlvbnMuZmlsdGVyaW5nKTtcblxuICAgICAgICB0aGlzLmxvYWQob3B0aW9ucyk7XG4gICAgfVxuXG4gICAgLy8gRGVzdHJveSBhIHNpbmdsZSB0ZXh0dXJlIGluc3RhbmNlXG5cblxuICAgIGNyZWF0ZUNsYXNzKFRleHR1cmUsIFt7XG4gICAgICAgIGtleTogJ2Rlc3Ryb3knLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy52YWxpZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZ2wuZGVsZXRlVGV4dHVyZSh0aGlzLnRleHR1cmUpO1xuICAgICAgICAgICAgdGhpcy50ZXh0dXJlID0gbnVsbDtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmRhdGE7XG4gICAgICAgICAgICB0aGlzLmRhdGEgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy52YWxpZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdiaW5kJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGJpbmQodW5pdCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnZhbGlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB1bml0ID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgIGlmIChUZXh0dXJlLmFjdGl2ZVVuaXQgIT09IHVuaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nbC5hY3RpdmVUZXh0dXJlKHRoaXMuZ2wuVEVYVFVSRTAgKyB1bml0KTtcbiAgICAgICAgICAgICAgICAgICAgVGV4dHVyZS5hY3RpdmVVbml0ID0gdW5pdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoVGV4dHVyZS5hY3RpdmVUZXh0dXJlICE9PSB0aGlzLnRleHR1cmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdsLmJpbmRUZXh0dXJlKHRoaXMuZ2wuVEVYVFVSRV8yRCwgdGhpcy50ZXh0dXJlKTtcbiAgICAgICAgICAgICAgICBUZXh0dXJlLmFjdGl2ZVRleHR1cmUgPSB0aGlzLnRleHR1cmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2xvYWQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gbG9hZCgpIHtcbiAgICAgICAgICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gbnVsbDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLnVybCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy51cmwgPT09IHVuZGVmaW5lZCB8fCBvcHRpb25zLnVybCAhPT0gdGhpcy51cmwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRVcmwob3B0aW9ucy51cmwsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAob3B0aW9ucy5lbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRFbGVtZW50KG9wdGlvbnMuZWxlbWVudCwgb3B0aW9ucyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG9wdGlvbnMuZGF0YSAmJiBvcHRpb25zLndpZHRoICYmIG9wdGlvbnMuaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKG9wdGlvbnMud2lkdGgsIG9wdGlvbnMuaGVpZ2h0LCBvcHRpb25zLmRhdGEsIG9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2V0cyB0ZXh0dXJlIGZyb20gYW4gdXJsXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3NldFVybCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRVcmwodXJsKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG5cbiAgICAgICAgICAgIGlmICghdGhpcy52YWxpZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy51cmwgPSB1cmw7IC8vIHNhdmUgVVJMIHJlZmVyZW5jZSAod2lsbCBiZSBvdmVyd3JpdHRlbiB3aGVuIGVsZW1lbnQgaXMgbG9hZGVkIGJlbG93KVxuICAgICAgICAgICAgdGhpcy5zb3VyY2UgPSB0aGlzLnVybDtcbiAgICAgICAgICAgIHRoaXMuc291cmNlVHlwZSA9ICd1cmwnO1xuXG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgdmFyIGV4dCA9IHVybC5zcGxpdCgnLicpLnBvcCgpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgdmFyIGlzVmlkZW8gPSBleHQgPT09ICdvZ3YnIHx8IGV4dCA9PT0gJ3dlYm0nIHx8IGV4dCA9PT0gJ21wNCc7XG5cbiAgICAgICAgICAgICAgICB2YXIgZWxlbWVudCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICBpZiAoaXNWaWRlbykge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndmlkZW8nKTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5hdXRvcGxheSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuZmlsdGVyaW5nID0gJ25lYXJlc3QnO1xuICAgICAgICAgICAgICAgICAgICAvLyBlbGVtZW50LnByZWxvYWQgPSAnYXV0byc7XG4gICAgICAgICAgICAgICAgICAgIC8vIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgLy8gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50ID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZWxlbWVudC5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5zZXRFbGVtZW50KGVsZW1lbnQsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVGV4dHVyZSBcXCcnICsgX3RoaXMubmFtZSArICdcXCc6IGZhaWxlZCB0byBsb2FkIHVybDogXFwnJyArIF90aGlzLnNvdXJjZSArICdcXCcnLCBlLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKF90aGlzKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGVsZW1lbnQub25lcnJvciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFdhcm4gYW5kIHJlc29sdmUgb24gZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1RleHR1cmUgXFwnJyArIF90aGlzLm5hbWUgKyAnXFwnOiBmYWlsZWQgdG8gbG9hZCB1cmw6IFxcJycgKyBfdGhpcy5zb3VyY2UgKyAnXFwnJywgZSwgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoX3RoaXMpO1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAvLyBTYWZhcmkgaGFzIGEgYnVnIGxvYWRpbmcgZGF0YS1VUkwgZWxlbWVudHMgd2l0aCBDT1JTIGVuYWJsZWQsIHNvIGl0IG11c3QgYmUgZGlzYWJsZWQgaW4gdGhhdCBjYXNlXG4gICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTEyMzk3OFxuICAgICAgICAgICAgICAgIGlmICghKGlzU2FmYXJpKCkgJiYgX3RoaXMuc291cmNlLnNsaWNlKDAsIDUpID09PSAnZGF0YTonKSkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNyb3NzT3JpZ2luID0gJ2Fub255bW91cyc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zcmMgPSBfdGhpcy5zb3VyY2U7XG4gICAgICAgICAgICAgICAgaWYgKGlzVmlkZW8pIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2V0RWxlbWVudChlbGVtZW50LCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxvYWRpbmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTZXRzIHRleHR1cmUgdG8gYSByYXcgaW1hZ2UgYnVmZmVyXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3NldERhdGEnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0RGF0YSh3aWR0aCwgaGVpZ2h0LCBkYXRhKSB7XG4gICAgICAgICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDoge307XG5cbiAgICAgICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuXG4gICAgICAgICAgICB0aGlzLnNvdXJjZSA9IGRhdGE7XG4gICAgICAgICAgICB0aGlzLnNvdXJjZVR5cGUgPSAnZGF0YSc7XG5cbiAgICAgICAgICAgIHRoaXMudXBkYXRlKG9wdGlvbnMpO1xuICAgICAgICAgICAgdGhpcy5zZXRGaWx0ZXJpbmcob3B0aW9ucyk7XG5cbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IFByb21pc2UucmVzb2x2ZSh0aGlzKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxvYWRpbmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTZXRzIHRoZSB0ZXh0dXJlIHRvIHRyYWNrIGEgZWxlbWVudCAoY2FudmFzL2ltYWdlKVxuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzZXRFbGVtZW50JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldEVsZW1lbnQoZWxlbWVudCwgb3B0aW9ucykge1xuICAgICAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgICAgIHZhciBlbCA9IGVsZW1lbnQ7XG5cbiAgICAgICAgICAgIC8vIGEgc3RyaW5nIGVsZW1lbnQgaXMgaW50ZXJwZXRlZCBhcyBhIENTUyBzZWxlY3RvclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxDYW52YXNFbGVtZW50IHx8IGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW1hZ2VFbGVtZW50IHx8IGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MVmlkZW9FbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zb3VyY2UgPSBlbGVtZW50O1xuICAgICAgICAgICAgICAgIHRoaXMuc291cmNlVHlwZSA9ICdlbGVtZW50JztcblxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTFZpZGVvRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NhbnBsYXl0aHJvdWdoJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMyLmludGVydmFsSUQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMyLnVwZGF0ZShvcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDE1KTtcbiAgICAgICAgICAgICAgICAgICAgfSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZW5kZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmN1cnJlbnRUaW1lID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucGxheSgpO1xuICAgICAgICAgICAgICAgICAgICB9LCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZShvcHRpb25zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRGaWx0ZXJpbmcob3B0aW9ucyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBtc2cgPSAndGhlIFxcJ2VsZW1lbnRcXCcgcGFyYW1ldGVyIChgZWxlbWVudDogJyArIEpTT04uc3RyaW5naWZ5KGVsKSArICdgKSBtdXN0IGJlIGEgQ1NTICc7XG4gICAgICAgICAgICAgICAgbXNnICs9ICdzZWxlY3RvciBzdHJpbmcsIG9yIGEgPGNhbnZhcz4sIDxpbWFnZT4gb3IgPHZpZGVvPiBvYmplY3QnO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUZXh0dXJlIFxcJycgKyB0aGlzLm5hbWUgKyAnXFwnOiAnICsgbXNnLCBvcHRpb25zKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gUHJvbWlzZS5yZXNvbHZlKHRoaXMpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubG9hZGluZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVwbG9hZHMgY3VycmVudCBpbWFnZSBvciBidWZmZXIgdG8gdGhlIEdQVSAoY2FuIGJlIHVzZWQgdG8gdXBkYXRlIGFuaW1hdGVkIHRleHR1cmVzIG9uIHRoZSBmbHkpXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3VwZGF0ZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgICAgICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgICAgICAgICAgIGlmICghdGhpcy52YWxpZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5iaW5kKCk7XG4gICAgICAgICAgICB0aGlzLmdsLnBpeGVsU3RvcmVpKHRoaXMuZ2wuVU5QQUNLX0ZMSVBfWV9XRUJHTCwgb3B0aW9ucy5VTlBBQ0tfRkxJUF9ZX1dFQkdMID09PSBmYWxzZSA/IGZhbHNlIDogdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLmdsLnBpeGVsU3RvcmVpKHRoaXMuZ2wuVU5QQUNLX1BSRU1VTFRJUExZX0FMUEhBX1dFQkdMLCBvcHRpb25zLlVOUEFDS19QUkVNVUxUSVBMWV9BTFBIQV9XRUJHTCB8fCBmYWxzZSk7XG5cbiAgICAgICAgICAgIC8vIEltYWdlIG9yIENhbnZhcyBlbGVtZW50XG4gICAgICAgICAgICBpZiAodGhpcy5zb3VyY2VUeXBlID09PSAnZWxlbWVudCcgJiYgKHRoaXMuc291cmNlIGluc3RhbmNlb2YgSFRNTENhbnZhc0VsZW1lbnQgfHwgdGhpcy5zb3VyY2UgaW5zdGFuY2VvZiBIVE1MVmlkZW9FbGVtZW50IHx8IHRoaXMuc291cmNlIGluc3RhbmNlb2YgSFRNTEltYWdlRWxlbWVudCAmJiB0aGlzLnNvdXJjZS5jb21wbGV0ZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zb3VyY2UgaW5zdGFuY2VvZiBIVE1MVmlkZW9FbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2lkdGggPSB0aGlzLnNvdXJjZS52aWRlb1dpZHRoO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhlaWdodCA9IHRoaXMuc291cmNlLnZpZGVvSGVpZ2h0O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2lkdGggPSB0aGlzLnNvdXJjZS53aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLnNvdXJjZS5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuZ2wudGV4SW1hZ2UyRCh0aGlzLmdsLlRFWFRVUkVfMkQsIDAsIHRoaXMuZ2wuUkdCQSwgdGhpcy5nbC5SR0JBLCB0aGlzLmdsLlVOU0lHTkVEX0JZVEUsIHRoaXMuc291cmNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFJhdyBpbWFnZSBidWZmZXJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuc291cmNlVHlwZSA9PT0gJ2RhdGEnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2wudGV4SW1hZ2UyRCh0aGlzLmdsLlRFWFRVUkVfMkQsIDAsIHRoaXMuZ2wuUkdCQSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIDAsIHRoaXMuZ2wuUkdCQSwgdGhpcy5nbC5VTlNJR05FRF9CWVRFLCB0aGlzLnNvdXJjZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy50cmlnZ2VyKCdsb2FkZWQnLCB0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERldGVybWluZXMgYXBwcm9wcmlhdGUgZmlsdGVyaW5nIG1vZGVcblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc2V0RmlsdGVyaW5nJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldEZpbHRlcmluZygpIHtcbiAgICAgICAgICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICAgICAgICAgICAgaWYgKCF0aGlzLnZhbGlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnBvd2VyT2YyID0gaXNQb3dlck9mMih0aGlzLndpZHRoKSAmJiBpc1Bvd2VyT2YyKHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIHZhciBkZWZ1YWx0RmlsdGVyID0gdGhpcy5wb3dlck9mMiA/ICdtaXBtYXAnIDogJ2xpbmVhcic7XG4gICAgICAgICAgICB0aGlzLmZpbHRlcmluZyA9IG9wdGlvbnMuZmlsdGVyaW5nIHx8IGRlZnVhbHRGaWx0ZXI7XG5cbiAgICAgICAgICAgIHZhciBnbCA9IHRoaXMuZ2w7XG4gICAgICAgICAgICB0aGlzLmJpbmQoKTtcblxuICAgICAgICAgICAgLy8gRm9yIHBvd2VyLW9mLTIgdGV4dHVyZXMsIHRoZSBmb2xsb3dpbmcgcHJlc2V0cyBhcmUgYXZhaWxhYmxlOlxuICAgICAgICAgICAgLy8gbWlwbWFwOiBsaW5lYXIgYmxlbmQgZnJvbSBuZWFyZXN0IG1pcFxuICAgICAgICAgICAgLy8gbGluZWFyOiBsaW5lYXIgYmxlbmQgZnJvbSBvcmlnaW5hbCBpbWFnZSAobm8gbWlwcylcbiAgICAgICAgICAgIC8vIG5lYXJlc3Q6IG5lYXJlc3QgcGl4ZWwgZnJvbSBvcmlnaW5hbCBpbWFnZSAobm8gbWlwcywgJ2Jsb2NreScgbG9vaylcbiAgICAgICAgICAgIGlmICh0aGlzLnBvd2VyT2YyKSB7XG4gICAgICAgICAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfUywgb3B0aW9ucy5URVhUVVJFX1dSQVBfUyB8fCBvcHRpb25zLnJlcGVhdCAmJiBnbC5SRVBFQVQgfHwgZ2wuQ0xBTVBfVE9fRURHRSk7XG4gICAgICAgICAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfVCwgb3B0aW9ucy5URVhUVVJFX1dSQVBfVCB8fCBvcHRpb25zLnJlcGVhdCAmJiBnbC5SRVBFQVQgfHwgZ2wuQ0xBTVBfVE9fRURHRSk7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5maWx0ZXJpbmcgPT09ICdtaXBtYXAnKSB7XG4gICAgICAgICAgICAgICAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NSU5fRklMVEVSLCBnbC5MSU5FQVJfTUlQTUFQX0xJTkVBUik7IC8vIFRPRE86IHVzZSB0cmlsaW5lYXIgZmlsdGVyaW5nIGJ5IGRlZnVhbHQgaW5zdGVhZD9cbiAgICAgICAgICAgICAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01BR19GSUxURVIsIGdsLkxJTkVBUik7XG4gICAgICAgICAgICAgICAgICAgIGdsLmdlbmVyYXRlTWlwbWFwKGdsLlRFWFRVUkVfMkQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5maWx0ZXJpbmcgPT09ICdsaW5lYXInKSB7XG4gICAgICAgICAgICAgICAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NSU5fRklMVEVSLCBnbC5MSU5FQVIpO1xuICAgICAgICAgICAgICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUFHX0ZJTFRFUiwgZ2wuTElORUFSKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZmlsdGVyaW5nID09PSAnbmVhcmVzdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01JTl9GSUxURVIsIGdsLk5FQVJFU1QpO1xuICAgICAgICAgICAgICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUFHX0ZJTFRFUiwgZ2wuTkVBUkVTVCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBXZWJHTCBoYXMgc3RyaWN0IHJlcXVpcmVtZW50cyBvbiBub24tcG93ZXItb2YtMiB0ZXh0dXJlczpcbiAgICAgICAgICAgICAgICAvLyBObyBtaXBtYXBzIGFuZCBtdXN0IGNsYW1wIHRvIGVkZ2VcbiAgICAgICAgICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9TLCBnbC5DTEFNUF9UT19FREdFKTtcbiAgICAgICAgICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9ULCBnbC5DTEFNUF9UT19FREdFKTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpbHRlcmluZyA9PT0gJ21pcG1hcCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJpbmcgPSAnbGluZWFyJztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5maWx0ZXJpbmcgPT09ICduZWFyZXN0Jykge1xuICAgICAgICAgICAgICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUlOX0ZJTFRFUiwgZ2wuTkVBUkVTVCk7XG4gICAgICAgICAgICAgICAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NQUdfRklMVEVSLCBnbC5ORUFSRVNUKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBkZWZhdWx0IHRvIGxpbmVhciBmb3Igbm9uLXBvd2VyLW9mLTIgdGV4dHVyZXNcbiAgICAgICAgICAgICAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01JTl9GSUxURVIsIGdsLkxJTkVBUik7XG4gICAgICAgICAgICAgICAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NQUdfRklMVEVSLCBnbC5MSU5FQVIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1dKTtcbiAgICByZXR1cm4gVGV4dHVyZTtcbn0oKTtcblxuLy8gUmVwb3J0IG1heCB0ZXh0dXJlIHNpemUgZm9yIGEgR0wgY29udGV4dFxuXG5cblRleHR1cmUuZ2V0TWF4VGV4dHVyZVNpemUgPSBmdW5jdGlvbiAoZ2wpIHtcbiAgICByZXR1cm4gZ2wuZ2V0UGFyYW1ldGVyKGdsLk1BWF9URVhUVVJFX1NJWkUpO1xufTtcblxuLy8gR2xvYmFsIHNldCBvZiB0ZXh0dXJlcywgYnkgbmFtZVxuVGV4dHVyZS5hY3RpdmVVbml0ID0gLTE7XG5cbi8qXG5UaGUgTUlUIExpY2Vuc2UgKE1JVClcblxuQ29weXJpZ2h0IChjKSAyMDE1IFBhdHJpY2lvIEdvbnphbGV6IFZpdm8gKCBodHRwOi8vd3d3LnBhdHJpY2lvZ29uemFsZXp2aXZvLmNvbSApXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2ZcbnRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlICdTb2Z0d2FyZScpLCB0byBkZWFsIGluXG50aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvXG51c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZlxudGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLFxuc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEICdBUyBJUycsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbklNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTXG5GT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1JcbkNPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUlxuSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU5cbkNPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG52YXIgR2xzbENhbnZhcyA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBHbHNsQ2FudmFzKGNhbnZhcywgY29udGV4dE9wdGlvbnMsIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBHbHNsQ2FudmFzKTtcblxuICAgICAgICBzdWJzY3JpYmVNaXhpbiQxKHRoaXMpO1xuXG4gICAgICAgIGNvbnRleHRPcHRpb25zID0gY29udGV4dE9wdGlvbnMgfHwge307XG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgICAgIHRoaXMud2lkdGggPSBjYW52YXMuY2xpZW50V2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gY2FudmFzLmNsaWVudEhlaWdodDtcblxuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5nbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5wcm9ncmFtID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLnRleHR1cmVzID0ge307XG4gICAgICAgIHRoaXMuYnVmZmVycyA9IHt9O1xuICAgICAgICB0aGlzLnVuaWZvcm1zID0ge307XG4gICAgICAgIHRoaXMudmJvID0ge307XG4gICAgICAgIHRoaXMuaXNWYWxpZCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuQlVGRkVSX0NPVU5UID0gMDtcbiAgICAgICAgdGhpcy5URVhUVVJFX0NPVU5UID0gMDtcblxuICAgICAgICB0aGlzLnZlcnRleFN0cmluZyA9IGNvbnRleHRPcHRpb25zLnZlcnRleFN0cmluZyB8fCAnXFxuI2lmZGVmIEdMX0VTXFxucHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7XFxuI2VuZGlmXFxuXFxuYXR0cmlidXRlIHZlYzIgYV9wb3NpdGlvbjtcXG5hdHRyaWJ1dGUgdmVjMiBhX3RleGNvb3JkO1xcblxcbnZhcnlpbmcgdmVjMiB2X3RleGNvb3JkO1xcblxcbnZvaWQgbWFpbigpIHtcXG4gICAgZ2xfUG9zaXRpb24gPSB2ZWM0KGFfcG9zaXRpb24sIDAuMCwgMS4wKTtcXG4gICAgdl90ZXhjb29yZCA9IGFfdGV4Y29vcmQ7XFxufVxcbic7XG4gICAgICAgIHRoaXMuZnJhZ21lbnRTdHJpbmcgPSBjb250ZXh0T3B0aW9ucy5mcmFnbWVudFN0cmluZyB8fCAnXFxuI2lmZGVmIEdMX0VTXFxucHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7XFxuI2VuZGlmXFxuXFxudmFyeWluZyB2ZWMyIHZfdGV4Y29vcmQ7XFxuXFxudm9pZCBtYWluKCl7XFxuICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQoMC4wKTtcXG59XFxuJztcblxuICAgICAgICAvLyBHTCBDb250ZXh0XG4gICAgICAgIHZhciBnbCA9IHNldHVwV2ViR0woY2FudmFzLCBjb250ZXh0T3B0aW9ucywgb3B0aW9ucy5vbkVycm9yKTtcbiAgICAgICAgaWYgKCFnbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ2wgPSBnbDtcbiAgICAgICAgdGhpcy50aW1lTG9hZCA9IHRoaXMudGltZVByZXYgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgICAgdGhpcy50aW1lRGVsdGEgPSAwLjA7XG4gICAgICAgIHRoaXMuZm9yY2VSZW5kZXIgPSB0cnVlO1xuICAgICAgICB0aGlzLnBhdXNlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJlYWxUb0NTU1BpeGVscyA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDE7XG5cbiAgICAgICAgLy8gQWxsb3cgYWxwaGFcbiAgICAgICAgY2FudmFzLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbnRleHRPcHRpb25zLmJhY2tncm91bmRDb2xvciB8fCAncmdiYSgxLDEsMSwwKSc7XG5cbiAgICAgICAgLy8gTG9hZCBzaGFkZXJcbiAgICAgICAgaWYgKGNhbnZhcy5oYXNBdHRyaWJ1dGUoJ2RhdGEtZnJhZ21lbnQnKSkge1xuICAgICAgICAgICAgdGhpcy5mcmFnbWVudFN0cmluZyA9IGNhbnZhcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtZnJhZ21lbnQnKTtcbiAgICAgICAgfSBlbHNlIGlmIChjYW52YXMuaGFzQXR0cmlidXRlKCdkYXRhLWZyYWdtZW50LXVybCcpKSB7XG4gICAgICAgICAgICB2YXIgc291cmNlID0gY2FudmFzLmdldEF0dHJpYnV0ZSgnZGF0YS1mcmFnbWVudC11cmwnKTtcbiAgICAgICAgICAgIHhoci5nZXQoc291cmNlLCBmdW5jdGlvbiAoZXJyb3IsIHJlc3BvbnNlLCBib2R5KSB7XG4gICAgICAgICAgICAgICAgX3RoaXMubG9hZChib2R5LCBfdGhpcy52ZXJ0ZXhTdHJpbmcpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBMb2FkIHNoYWRlclxuICAgICAgICBpZiAoY2FudmFzLmhhc0F0dHJpYnV0ZSgnZGF0YS12ZXJ0ZXgnKSkge1xuICAgICAgICAgICAgdGhpcy52ZXJ0ZXhTdHJpbmcgPSBjYW52YXMuZ2V0QXR0cmlidXRlKCdkYXRhLXZlcnRleCcpO1xuICAgICAgICB9IGVsc2UgaWYgKGNhbnZhcy5oYXNBdHRyaWJ1dGUoJ2RhdGEtdmVydGV4LXVybCcpKSB7XG4gICAgICAgICAgICB2YXIgX3NvdXJjZSA9IGNhbnZhcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmVydGV4LXVybCcpO1xuICAgICAgICAgICAgeGhyLmdldChfc291cmNlLCBmdW5jdGlvbiAoZXJyb3IsIHJlc3BvbnNlLCBib2R5KSB7XG4gICAgICAgICAgICAgICAgX3RoaXMubG9hZChfdGhpcy5mcmFnbWVudFN0cmluZywgYm9keSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubG9hZCgpO1xuXG4gICAgICAgIGlmICghdGhpcy5wcm9ncmFtKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBEZWZpbmUgVmVydGV4IGJ1ZmZlclxuICAgICAgICB2YXIgdGV4Q29vcmRzTG9jID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24odGhpcy5wcm9ncmFtLCAnYV90ZXhjb29yZCcpO1xuICAgICAgICB0aGlzLnZiby50ZXhDb29yZHMgPSBnbC5jcmVhdGVCdWZmZXIoKTtcbiAgICAgICAgdGhpcy5nbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgdGhpcy52Ym8udGV4Q29vcmRzKTtcbiAgICAgICAgdGhpcy5nbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgbmV3IEZsb2F0MzJBcnJheShbMC4wLCAwLjAsIDEuMCwgMC4wLCAwLjAsIDEuMCwgMC4wLCAxLjAsIDEuMCwgMC4wLCAxLjAsIDEuMF0pLCBnbC5TVEFUSUNfRFJBVyk7XG4gICAgICAgIHRoaXMuZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkodGV4Q29vcmRzTG9jKTtcbiAgICAgICAgdGhpcy5nbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHRleENvb3Jkc0xvYywgMiwgZ2wuRkxPQVQsIGZhbHNlLCAwLCAwKTtcblxuICAgICAgICB2YXIgdmVydGljZXNMb2MgPSBnbC5nZXRBdHRyaWJMb2NhdGlvbih0aGlzLnByb2dyYW0sICdhX3Bvc2l0aW9uJyk7XG4gICAgICAgIHRoaXMudmJvLnZlcnRpY2VzID0gZ2wuY3JlYXRlQnVmZmVyKCk7XG4gICAgICAgIHRoaXMuZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHRoaXMudmJvLnZlcnRpY2VzKTtcbiAgICAgICAgdGhpcy5nbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgbmV3IEZsb2F0MzJBcnJheShbLTEuMCwgLTEuMCwgMS4wLCAtMS4wLCAtMS4wLCAxLjAsIC0xLjAsIDEuMCwgMS4wLCAtMS4wLCAxLjAsIDEuMF0pLCBnbC5TVEFUSUNfRFJBVyk7XG4gICAgICAgIHRoaXMuZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkodmVydGljZXNMb2MpO1xuICAgICAgICB0aGlzLmdsLnZlcnRleEF0dHJpYlBvaW50ZXIodmVydGljZXNMb2MsIDIsIGdsLkZMT0FULCBmYWxzZSwgMCwgMCk7XG5cbiAgICAgICAgLy8gbG9hZCBURVhUVVJFU1xuICAgICAgICBpZiAoY2FudmFzLmhhc0F0dHJpYnV0ZSgnZGF0YS10ZXh0dXJlcycpKSB7XG4gICAgICAgICAgICB2YXIgaW1nTGlzdCA9IGNhbnZhcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGV4dHVyZXMnKS5zcGxpdCgnLCcpO1xuICAgICAgICAgICAgZm9yICh2YXIgbkltZyBpbiBpbWdMaXN0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRVbmlmb3JtKCd1X3RleCcgKyBuSW1nLCBpbWdMaXN0W25JbWddKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09IEVWRU5UU1xuICAgICAgICB2YXIgbW91c2UgPSB7XG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogMFxuICAgICAgICB9O1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgbW91c2UueCA9IGUuY2xpZW50WCB8fCBlLnBhZ2VYO1xuICAgICAgICAgICAgbW91c2UueSA9IGUuY2xpZW50WSB8fCBlLnBhZ2VZO1xuICAgICAgICB9LCBmYWxzZSk7XG5cbiAgICAgICAgdmFyIHNhbmRib3ggPSB0aGlzO1xuICAgICAgICBmdW5jdGlvbiBSZW5kZXJMb29wKCkge1xuICAgICAgICAgICAgaWYgKHNhbmRib3gubk1vdXNlID4gMSkge1xuICAgICAgICAgICAgICAgIHNhbmRib3guc2V0TW91c2UobW91c2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2FuZGJveC5mb3JjZVJlbmRlciA9IHNhbmRib3gucmVzaXplKCk7XG4gICAgICAgICAgICBzYW5kYm94LnJlbmRlcigpO1xuICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShSZW5kZXJMb29wKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFN0YXJ0XG4gICAgICAgIHRoaXMuc2V0TW91c2UoeyB4OiAwLCB5OiAwIH0pO1xuICAgICAgICBSZW5kZXJMb29wKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGNyZWF0ZUNsYXNzKEdsc2xDYW52YXMsIFt7XG4gICAgICAgIGtleTogJ2Rlc3Ryb3knLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgZm9yICh2YXIgdGV4IGluIHRoaXMudGV4dHVyZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAodGV4LmRlc3Ryb3kpIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4LmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnRleHR1cmVzID0ge307XG4gICAgICAgICAgICBmb3IgKHZhciBhdHQgaW4gdGhpcy5hdHRyaWJzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nbC5kZWxldGVCdWZmZXIodGhpcy5hdHRyaWJzW2F0dF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5nbC51c2VQcm9ncmFtKG51bGwpO1xuICAgICAgICAgICAgdGhpcy5nbC5kZWxldGVQcm9ncmFtKHRoaXMucHJvZ3JhbSk7XG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5idWZmZXJzKSB7XG4gICAgICAgICAgICAgICAgdmFyIGJ1ZmZlciA9IHRoaXMuYnVmZmVyc1trZXldO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2wuZGVsZXRlUHJvZ3JhbShidWZmZXIucHJvZ3JhbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnByb2dyYW0gPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5nbCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2xvYWQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gbG9hZChmcmFnU3RyaW5nLCB2ZXJ0U3RyaW5nKSB7XG5cbiAgICAgICAgICAgIC8vIExvYWQgdmVydGV4IHNoYWRlciBpZiB0aGVyZSBpcyBvbmVcbiAgICAgICAgICAgIGlmICh2ZXJ0U3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52ZXJ0ZXhTdHJpbmcgPSB2ZXJ0U3RyaW5nO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBMb2FkIGZyYWdtZW50IHNoYWRlciBpZiB0aGVyZSBpcyBvbmVcbiAgICAgICAgICAgIGlmIChmcmFnU3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mcmFnbWVudFN0cmluZyA9IGZyYWdTdHJpbmc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMubkRlbHRhID0gKHRoaXMuZnJhZ21lbnRTdHJpbmcubWF0Y2goL3VfZGVsdGEvZykgfHwgW10pLmxlbmd0aDtcbiAgICAgICAgICAgIHRoaXMublRpbWUgPSAodGhpcy5mcmFnbWVudFN0cmluZy5tYXRjaCgvdV90aW1lL2cpIHx8IFtdKS5sZW5ndGg7XG4gICAgICAgICAgICB0aGlzLm5EYXRlID0gKHRoaXMuZnJhZ21lbnRTdHJpbmcubWF0Y2goL3VfZGF0ZS9nKSB8fCBbXSkubGVuZ3RoO1xuICAgICAgICAgICAgdGhpcy5uTW91c2UgPSAodGhpcy5mcmFnbWVudFN0cmluZy5tYXRjaCgvdV9tb3VzZS9nKSB8fCBbXSkubGVuZ3RoO1xuICAgICAgICAgICAgdGhpcy5hbmltYXRlZCA9IHRoaXMubkRhdGUgPiAxIHx8IHRoaXMublRpbWUgPiAxIHx8IHRoaXMubk1vdXNlID4gMTtcblxuICAgICAgICAgICAgdmFyIG5UZXh0dXJlcyA9IHRoaXMuZnJhZ21lbnRTdHJpbmcuc2VhcmNoKC9zYW1wbGVyMkQvZyk7XG4gICAgICAgICAgICBpZiAoblRleHR1cmVzKSB7XG4gICAgICAgICAgICAgICAgdmFyIGxpbmVzID0gdGhpcy5mcmFnbWVudFN0cmluZy5zcGxpdCgnXFxuJyk7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWF0Y2ggPSBsaW5lc1tpXS5tYXRjaCgvdW5pZm9ybVxccypzYW1wbGVyMkRcXHMqKFtcXHddKik7XFxzKlxcL1xcL1xccyooW1xcd3xcXDpcXC9cXC98XFwufFxcLXxcXF9dKikvaSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV4dCA9IG1hdGNoWzJdLnNwbGl0KCcuJykucG9wKCkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaFsxXSAmJiBtYXRjaFsyXSAmJiAoZXh0ID09PSAnanBnJyB8fCBleHQgPT09ICdqcGVnJyB8fCBleHQgPT09ICdwbmcnIHx8IGV4dCA9PT0gJ29ndicgfHwgZXh0ID09PSAnd2VibScgfHwgZXh0ID09PSAnbXA0JykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFVuaWZvcm0obWF0Y2hbMV0sIG1hdGNoWzJdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgbWFpbiA9IGxpbmVzW2ldLm1hdGNoKC9cXHMqdm9pZFxccyptYWluXFxzKi9nKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1haW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgdmVydGV4U2hhZGVyID0gY3JlYXRlU2hhZGVyKHRoaXMsIHRoaXMudmVydGV4U3RyaW5nLCB0aGlzLmdsLlZFUlRFWF9TSEFERVIpO1xuICAgICAgICAgICAgdmFyIGZyYWdtZW50U2hhZGVyID0gY3JlYXRlU2hhZGVyKHRoaXMsIHRoaXMuZnJhZ21lbnRTdHJpbmcsIHRoaXMuZ2wuRlJBR01FTlRfU0hBREVSKTtcblxuICAgICAgICAgICAgLy8gSWYgRnJhZ21lbnQgc2hhZGVyIGZhaWxzIGxvYWQgYSBlbXB0eSBvbmUgdG8gc2lnbiB0aGUgZXJyb3JcbiAgICAgICAgICAgIGlmICghZnJhZ21lbnRTaGFkZXIpIHtcbiAgICAgICAgICAgICAgICBmcmFnbWVudFNoYWRlciA9IGNyZWF0ZVNoYWRlcih0aGlzLCAndm9pZCBtYWluKCl7XFxuXFx0Z2xfRnJhZ0NvbG9yID0gdmVjNCgxLjApO1xcbn0nLCB0aGlzLmdsLkZSQUdNRU5UX1NIQURFUik7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNWYWxpZCA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENyZWF0ZSBhbmQgdXNlIHByb2dyYW1cbiAgICAgICAgICAgIHZhciBwcm9ncmFtID0gY3JlYXRlUHJvZ3JhbSh0aGlzLCBbdmVydGV4U2hhZGVyLCBmcmFnbWVudFNoYWRlcl0pOyAvLywgWzAsMV0sWydhX3RleGNvb3JkJywnYV9wb3NpdGlvbiddKTtcbiAgICAgICAgICAgIHRoaXMuZ2wudXNlUHJvZ3JhbShwcm9ncmFtKTtcblxuICAgICAgICAgICAgLy8gRGVsZXRlIHNoYWRlcnNcbiAgICAgICAgICAgIC8vIHRoaXMuZ2wuZGV0YWNoU2hhZGVyKHByb2dyYW0sIHZlcnRleFNoYWRlcik7XG4gICAgICAgICAgICAvLyB0aGlzLmdsLmRldGFjaFNoYWRlcihwcm9ncmFtLCBmcmFnbWVudFNoYWRlcik7XG4gICAgICAgICAgICB0aGlzLmdsLmRlbGV0ZVNoYWRlcih2ZXJ0ZXhTaGFkZXIpO1xuICAgICAgICAgICAgdGhpcy5nbC5kZWxldGVTaGFkZXIoZnJhZ21lbnRTaGFkZXIpO1xuXG4gICAgICAgICAgICB0aGlzLnByb2dyYW0gPSBwcm9ncmFtO1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2UgPSB0cnVlO1xuXG4gICAgICAgICAgICB0aGlzLkJVRkZFUl9DT1VOVCA9IDA7XG4gICAgICAgICAgICB2YXIgYnVmZmVycyA9IHRoaXMuZ2V0QnVmZmVycyh0aGlzLmZyYWdtZW50U3RyaW5nKTtcbiAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhidWZmZXJzKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRQcm9ncmFtcyhidWZmZXJzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuYnVmZmVycyA9IGJ1ZmZlcnM7XG5cbiAgICAgICAgICAgIC8vIFRyaWdnZXIgZXZlbnRcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlcignbG9hZCcsIHt9KTtcblxuICAgICAgICAgICAgdGhpcy5mb3JjZVJlbmRlciA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3Rlc3QnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gdGVzdChjYWxsYmFjaywgZnJhZ1N0cmluZywgdmVydFN0cmluZykge1xuICAgICAgICAgICAgLy8gVGhhbmtzIHRvIEB0aGVzcGl0ZSBmb3IgdGhlIGhlbHAgaGVyZVxuICAgICAgICAgICAgLy8gaHR0cHM6Ly93d3cua2hyb25vcy5vcmcvcmVnaXN0cnkvd2ViZ2wvZXh0ZW5zaW9ucy9FWFRfZGlzam9pbnRfdGltZXJfcXVlcnkvXG4gICAgICAgICAgICB2YXIgcHJlX3Rlc3RfdmVydCA9IHRoaXMudmVydGV4U3RyaW5nO1xuICAgICAgICAgICAgdmFyIHByZV90ZXN0X2ZyYWcgPSB0aGlzLmZyYWdtZW50U3RyaW5nO1xuICAgICAgICAgICAgdmFyIHByZV90ZXN0X3BhdXNlZCA9IHRoaXMucGF1c2VkO1xuXG4gICAgICAgICAgICB2YXIgZXh0ID0gdGhpcy5nbC5nZXRFeHRlbnNpb24oJ0VYVF9kaXNqb2ludF90aW1lcl9xdWVyeScpO1xuICAgICAgICAgICAgdmFyIHF1ZXJ5ID0gZXh0LmNyZWF0ZVF1ZXJ5RVhUKCk7XG4gICAgICAgICAgICB2YXIgd2FzVmFsaWQgPSB0aGlzLmlzVmFsaWQ7XG5cbiAgICAgICAgICAgIGlmIChmcmFnU3RyaW5nIHx8IHZlcnRTdHJpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWQoZnJhZ1N0cmluZywgdmVydFN0cmluZyk7XG4gICAgICAgICAgICAgICAgd2FzVmFsaWQgPSB0aGlzLmlzVmFsaWQ7XG4gICAgICAgICAgICAgICAgdGhpcy5mb3JjZVJlbmRlciA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5wYXVzZWQgPSB0cnVlO1xuICAgICAgICAgICAgZXh0LmJlZ2luUXVlcnlFWFQoZXh0LlRJTUVfRUxBUFNFRF9FWFQsIHF1ZXJ5KTtcbiAgICAgICAgICAgIHRoaXMuZm9yY2VSZW5kZXIgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgICAgIGV4dC5lbmRRdWVyeUVYVChleHQuVElNRV9FTEFQU0VEX0VYVCk7XG5cbiAgICAgICAgICAgIHZhciBzYW5kYm94ID0gdGhpcztcbiAgICAgICAgICAgIGZ1bmN0aW9uIGZpbmlzaFRlc3QoKSB7XG4gICAgICAgICAgICAgICAgLy8gUmV2ZXJ0IGNoYW5nZXMuLi4gZ28gYmFjayB0byBub3JtYWxcbiAgICAgICAgICAgICAgICBzYW5kYm94LnBhdXNlZCA9IHByZV90ZXN0X3BhdXNlZDtcbiAgICAgICAgICAgICAgICBpZiAoZnJhZ1N0cmluZyB8fCB2ZXJ0U3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHNhbmRib3gubG9hZChwcmVfdGVzdF9mcmFnLCBwcmVfdGVzdF92ZXJ0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiB3YWl0Rm9yVGVzdCgpIHtcbiAgICAgICAgICAgICAgICBzYW5kYm94LmZvcmNlUmVuZGVyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzYW5kYm94LnJlbmRlcigpO1xuICAgICAgICAgICAgICAgIHZhciBhdmFpbGFibGUgPSBleHQuZ2V0UXVlcnlPYmplY3RFWFQocXVlcnksIGV4dC5RVUVSWV9SRVNVTFRfQVZBSUxBQkxFX0VYVCk7XG4gICAgICAgICAgICAgICAgdmFyIGRpc2pvaW50ID0gc2FuZGJveC5nbC5nZXRQYXJhbWV0ZXIoZXh0LkdQVV9ESVNKT0lOVF9FWFQpO1xuICAgICAgICAgICAgICAgIGlmIChhdmFpbGFibGUgJiYgIWRpc2pvaW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXQgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3YXNWYWxpZDogd2FzVmFsaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBmcmFnOiBmcmFnU3RyaW5nIHx8IHNhbmRib3guZnJhZ21lbnRTdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0OiB2ZXJ0U3RyaW5nIHx8IHNhbmRib3gudmVydGV4U3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZUVsYXBzZWRNczogZXh0LmdldFF1ZXJ5T2JqZWN0RVhUKHF1ZXJ5LCBleHQuUVVFUllfUkVTVUxUX0VYVCkgLyAxMDAwMDAwLjBcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgZmluaXNoVGVzdCgpO1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUod2FpdEZvclRlc3QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdhaXRGb3JUZXN0KCk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2xvYWRUZXh0dXJlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGxvYWRUZXh0dXJlKG5hbWUsIHVybEVsZW1lbnRPckRhdGEsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zID0ge307XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdXJsRWxlbWVudE9yRGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zLnVybCA9IHVybEVsZW1lbnRPckRhdGE7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCh0eXBlb2YgdXJsRWxlbWVudE9yRGF0YSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YodXJsRWxlbWVudE9yRGF0YSkpID09PSAnb2JqZWN0JyAmJiB1cmxFbGVtZW50T3JEYXRhLmRhdGEgJiYgdXJsRWxlbWVudE9yRGF0YS53aWR0aCAmJiB1cmxFbGVtZW50T3JEYXRhLmhlaWdodCkge1xuICAgICAgICAgICAgICAgIG9wdGlvbnMuZGF0YSA9IHVybEVsZW1lbnRPckRhdGEuZGF0YTtcbiAgICAgICAgICAgICAgICBvcHRpb25zLndpZHRoID0gdXJsRWxlbWVudE9yRGF0YS53aWR0aDtcbiAgICAgICAgICAgICAgICBvcHRpb25zLmhlaWdodCA9IHVybEVsZW1lbnRPckRhdGEuaGVpZ2h0O1xuICAgICAgICAgICAgfSBlbHNlIGlmICgodHlwZW9mIHVybEVsZW1lbnRPckRhdGEgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHVybEVsZW1lbnRPckRhdGEpKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zLmVsZW1lbnQgPSB1cmxFbGVtZW50T3JEYXRhO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy50ZXh0dXJlc1tuYW1lXSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRleHR1cmVzW25hbWVdKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGV4dHVyZXNbbmFtZV0ubG9hZChvcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50ZXh0dXJlc1tuYW1lXS5vbignbG9hZGVkJywgZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzMi5mb3JjZVJlbmRlciA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0dXJlc1tuYW1lXSA9IG5ldyBUZXh0dXJlKHRoaXMuZ2wsIG5hbWUsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIHRoaXMudGV4dHVyZXNbbmFtZV0ub24oJ2xvYWRlZCcsIGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzMi5mb3JjZVJlbmRlciA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlZnJlc2hVbmlmb3JtcycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZWZyZXNoVW5pZm9ybXMoKSB7XG4gICAgICAgICAgICB0aGlzLnVuaWZvcm1zID0ge307XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3NldFVuaWZvcm0nLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0VW5pZm9ybShuYW1lKSB7XG4gICAgICAgICAgICB2YXIgdSA9IHt9O1xuXG4gICAgICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgdmFsdWUgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgICAgICAgICAgdmFsdWVbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB1W25hbWVdID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLnNldFVuaWZvcm1zKHUpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzZXRVbmlmb3JtcycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRVbmlmb3Jtcyh1bmlmb3Jtcykge1xuICAgICAgICAgICAgdmFyIHBhcnNlZCA9IHBhcnNlVW5pZm9ybXModW5pZm9ybXMpO1xuICAgICAgICAgICAgLy8gU2V0IGVhY2ggdW5pZm9ybVxuICAgICAgICAgICAgZm9yICh2YXIgdSBpbiBwYXJzZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VkW3VdLnR5cGUgPT09ICdzYW1wbGVyMkQnKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEZvciB0ZXh0dXJlcywgd2UgbmVlZCB0byB0cmFjayB0ZXh0dXJlIHVuaXRzLCBzbyB3ZSBoYXZlIGEgc3BlY2lhbCBzZXR0ZXJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy51bmlmb3JtVGV4dHVyZShwYXJzZWRbdV0ubmFtZSwgcGFyc2VkW3VdLnZhbHVlWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkVGV4dHVyZShwYXJzZWRbdV0ubmFtZSwgcGFyc2VkW3VdLnZhbHVlWzBdKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVuaWZvcm0ocGFyc2VkW3VdLm1ldGhvZCwgcGFyc2VkW3VdLnR5cGUsIHBhcnNlZFt1XS5uYW1lLCBwYXJzZWRbdV0udmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcmNlUmVuZGVyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3NldE1vdXNlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldE1vdXNlKG1vdXNlKSB7XG4gICAgICAgICAgICAvLyBzZXQgdGhlIG1vdXNlIHVuaWZvcm1cbiAgICAgICAgICAgIHZhciByZWN0ID0gdGhpcy5jYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICBpZiAobW91c2UgJiYgbW91c2UueCAmJiBtb3VzZS54ID49IHJlY3QubGVmdCAmJiBtb3VzZS54IDw9IHJlY3QucmlnaHQgJiYgbW91c2UueSAmJiBtb3VzZS55ID49IHJlY3QudG9wICYmIG1vdXNlLnkgPD0gcmVjdC5ib3R0b20pIHtcblxuICAgICAgICAgICAgICAgIHZhciBtb3VzZV94ID0gKG1vdXNlLnggLSByZWN0LmxlZnQpICogdGhpcy5yZWFsVG9DU1NQaXhlbHM7XG4gICAgICAgICAgICAgICAgdmFyIG1vdXNlX3kgPSB0aGlzLmNhbnZhcy5oZWlnaHQgLSAobW91c2UueSAtIHJlY3QudG9wKSAqIHRoaXMucmVhbFRvQ1NTUGl4ZWxzO1xuXG4gICAgICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMuYnVmZmVycykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYnVmZmVyID0gdGhpcy5idWZmZXJzW2tleV07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2wudXNlUHJvZ3JhbShidWZmZXIucHJvZ3JhbSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2wudW5pZm9ybTJmKHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKGJ1ZmZlci5wcm9ncmFtLCAndV9tb3VzZScpLCBtb3VzZV94LCBtb3VzZV95KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5nbC51c2VQcm9ncmFtKHRoaXMucHJvZ3JhbSk7XG4gICAgICAgICAgICAgICAgdGhpcy5nbC51bmlmb3JtMmYodGhpcy5nbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5wcm9ncmFtLCAndV9tb3VzZScpLCBtb3VzZV94LCBtb3VzZV95KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGV4OiBwcm9ncmFtLnVuaWZvcm0oJzNmJywgJ3Bvc2l0aW9uJywgeCwgeSwgeik7XG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3VuaWZvcm0nLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gdW5pZm9ybShtZXRob2QsIHR5cGUsIG5hbWUpIHtcbiAgICAgICAgICAgIC8vICd2YWx1ZScgaXMgYSBtZXRob2QtYXBwcm9wcmlhdGUgYXJndW1lbnRzIGxpc3RcbiAgICAgICAgICAgIHRoaXMudW5pZm9ybXNbbmFtZV0gPSB0aGlzLnVuaWZvcm1zW25hbWVdIHx8IHt9O1xuICAgICAgICAgICAgdmFyIHVuaWZvcm0gPSB0aGlzLnVuaWZvcm1zW25hbWVdO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIHZhbHVlID0gQXJyYXkoX2xlbjIgPiAzID8gX2xlbjIgLSAzIDogMCksIF9rZXkyID0gMzsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICAgICAgICAgIHZhbHVlW19rZXkyIC0gM10gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgY2hhbmdlID0gaXNEaWZmKHVuaWZvcm0udmFsdWUsIHZhbHVlKTtcbiAgICAgICAgICAgIGlmIChjaGFuZ2UgfHwgdGhpcy5jaGFuZ2UgfHwgdW5pZm9ybS5sb2NhdGlvbiA9PT0gdW5kZWZpbmVkIHx8IHVuaWZvcm0udmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHVuaWZvcm0ubmFtZSA9IG5hbWU7XG4gICAgICAgICAgICAgICAgdW5pZm9ybS52YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHVuaWZvcm0udHlwZSA9IHR5cGU7XG4gICAgICAgICAgICAgICAgdW5pZm9ybS5tZXRob2QgPSAndW5pZm9ybScgKyBtZXRob2Q7XG4gICAgICAgICAgICAgICAgdW5pZm9ybS5sb2NhdGlvbiA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMucHJvZ3JhbSwgbmFtZSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmdsW3VuaWZvcm0ubWV0aG9kXS5hcHBseSh0aGlzLmdsLCBbdW5pZm9ybS5sb2NhdGlvbl0uY29uY2F0KHVuaWZvcm0udmFsdWUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAndW5pZm9ybVRleHR1cmUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gdW5pZm9ybVRleHR1cmUobmFtZSwgdGV4dHVyZSwgb3B0aW9ucykge1xuICAgICAgICAgICAgaWYgKHRoaXMudGV4dHVyZXNbbmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZFRleHR1cmUobmFtZSwgdGV4dHVyZSwgb3B0aW9ucyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZXNpemUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVzaXplKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMud2lkdGggIT09IHRoaXMuY2FudmFzLmNsaWVudFdpZHRoIHx8IHRoaXMuaGVpZ2h0ICE9PSB0aGlzLmNhbnZhcy5jbGllbnRIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWxUb0NTU1BpeGVscyA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDE7XG5cbiAgICAgICAgICAgICAgICAvLyBMb29rdXAgdGhlIHNpemUgdGhlIGJyb3dzZXIgaXMgZGlzcGxheWluZyB0aGUgY2FudmFzIGluIENTUyBwaXhlbHNcbiAgICAgICAgICAgICAgICAvLyBhbmQgY29tcHV0ZSBhIHNpemUgbmVlZGVkIHRvIG1ha2Ugb3VyIGRyYXdpbmdidWZmZXIgbWF0Y2ggaXQgaW5cbiAgICAgICAgICAgICAgICAvLyBkZXZpY2UgcGl4ZWxzLlxuICAgICAgICAgICAgICAgIHZhciBkaXNwbGF5V2lkdGggPSBNYXRoLmZsb29yKHRoaXMuZ2wuY2FudmFzLmNsaWVudFdpZHRoICogdGhpcy5yZWFsVG9DU1NQaXhlbHMpO1xuICAgICAgICAgICAgICAgIHZhciBkaXNwbGF5SGVpZ2h0ID0gTWF0aC5mbG9vcih0aGlzLmdsLmNhbnZhcy5jbGllbnRIZWlnaHQgKiB0aGlzLnJlYWxUb0NTU1BpeGVscyk7XG5cbiAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiB0aGUgY2FudmFzIGlzIG5vdCB0aGUgc2FtZSBzaXplLlxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmdsLmNhbnZhcy53aWR0aCAhPT0gZGlzcGxheVdpZHRoIHx8IHRoaXMuZ2wuY2FudmFzLmhlaWdodCAhPT0gZGlzcGxheUhlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBNYWtlIHRoZSBjYW52YXMgdGhlIHNhbWUgc2l6ZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdsLmNhbnZhcy53aWR0aCA9IGRpc3BsYXlXaWR0aDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nbC5jYW52YXMuaGVpZ2h0ID0gZGlzcGxheUhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgLy8gU2V0IHRoZSB2aWV3cG9ydCB0byBtYXRjaFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdsLnZpZXdwb3J0KDAsIDAsIHRoaXMuZ2wuY2FudmFzLndpZHRoLCB0aGlzLmdsLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmdsLnZpZXdwb3J0KDAsIDAsIHRoaXMuZ2wuZHJhd2luZ0J1ZmZlcldpZHRoLCB0aGlzLmdsLmRyYXdpbmdCdWZmZXJIZWlnaHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLndpZHRoID0gdGhpcy5jYW52YXMuY2xpZW50V2lkdGg7XG4gICAgICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLmNhbnZhcy5jbGllbnRIZWlnaHQ7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNpemVTd2FwcGFibGVCdWZmZXJzKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHRoaXMudmlzaWJsZSA9IGlzQ2FudmFzVmlzaWJsZSh0aGlzLmNhbnZhcyk7XG4gICAgICAgICAgICBpZiAodGhpcy5mb3JjZVJlbmRlciB8fCB0aGlzLmFuaW1hdGVkICYmIHRoaXMudmlzaWJsZSAmJiAhdGhpcy5wYXVzZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclByb2dyYW1zKCk7XG4gICAgICAgICAgICAgICAgLy8gVHJpZ2dlciBldmVudFxuICAgICAgICAgICAgICAgIHRoaXMudHJpZ2dlcigncmVuZGVyJywge30pO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5mb3JjZVJlbmRlciA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdwYXVzZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwYXVzZSgpIHtcbiAgICAgICAgICAgIHRoaXMucGF1c2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncGxheScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwbGF5KCkge1xuICAgICAgICAgICAgdGhpcy5wYXVzZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAndmVyc2lvbicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiB2ZXJzaW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuICcwLjAuMjcnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcmVuZGVyIG1haW4gYW5kIGJ1ZmZlcnMgcHJvZ3JhbXNcblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVuZGVyUHJvZ3JhbXMnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyUHJvZ3JhbXMoKSB7XG4gICAgICAgICAgICB2YXIgZ2wgPSB0aGlzLmdsLFxuICAgICAgICAgICAgICAgIFcgPSBnbC5jYW52YXMud2lkdGgsXG4gICAgICAgICAgICAgICAgSCA9IGdsLmNhbnZhcy5oZWlnaHQ7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZhcmlhYmxlcygpO1xuICAgICAgICAgICAgZ2wudmlld3BvcnQoMCwgMCwgVywgSCk7XG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5idWZmZXJzKSB7XG4gICAgICAgICAgICAgICAgdmFyIGJ1ZmZlciA9IHRoaXMuYnVmZmVyc1trZXldO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVW5pZm9ybXMoYnVmZmVyLnByb2dyYW0sIGtleSk7XG4gICAgICAgICAgICAgICAgYnVmZmVyLmJ1bmRsZS5yZW5kZXIoVywgSCwgYnVmZmVyLnByb2dyYW0sIGJ1ZmZlci5uYW1lKTtcbiAgICAgICAgICAgICAgICBnbC5iaW5kRnJhbWVidWZmZXIoZ2wuRlJBTUVCVUZGRVIsIG51bGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy51cGRhdGVVbmlmb3Jtcyh0aGlzLnByb2dyYW0sICdtYWluJyk7XG4gICAgICAgICAgICBnbC5kcmF3QXJyYXlzKGdsLlRSSUFOR0xFUywgMCwgNik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB1cGRhdGUgZ2xzbENhbnZhcyB2YXJpYWJsZXNcblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAndXBkYXRlVmFyaWFibGVzJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZVZhcmlhYmxlcygpIHtcbiAgICAgICAgICAgIHZhciBnbHNsID0gdGhpcztcbiAgICAgICAgICAgIHZhciBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgIHZhciBub3cgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgICAgICAgIHZhciB2YXJpYWJsZXMgPSB0aGlzLnZhcmlhYmxlcyB8fCB7fTtcbiAgICAgICAgICAgIHZhcmlhYmxlcy5wcmV2ID0gdmFyaWFibGVzLnByZXYgfHwgbm93O1xuICAgICAgICAgICAgdmFyaWFibGVzLmRlbHRhID0gKG5vdyAtIHZhcmlhYmxlcy5wcmV2KSAvIDEwMDAuMDtcbiAgICAgICAgICAgIHZhcmlhYmxlcy5wcmV2ID0gbm93O1xuICAgICAgICAgICAgdmFyaWFibGVzLmxvYWQgPSBnbHNsLnRpbWVMb2FkO1xuICAgICAgICAgICAgdmFyaWFibGVzLnRpbWUgPSAobm93IC0gZ2xzbC50aW1lTG9hZCkgLyAxMDAwLjA7XG4gICAgICAgICAgICB2YXJpYWJsZXMueWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgICAgIHZhcmlhYmxlcy5tb250aCA9IGRhdGUuZ2V0TW9udGgoKTtcbiAgICAgICAgICAgIHZhcmlhYmxlcy5kYXRlID0gZGF0ZS5nZXREYXRlKCk7XG4gICAgICAgICAgICB2YXJpYWJsZXMuZGF5dGltZSA9IGRhdGUuZ2V0SG91cnMoKSAqIDM2MDAgKyBkYXRlLmdldE1pbnV0ZXMoKSAqIDYwICsgZGF0ZS5nZXRTZWNvbmRzKCkgKyBkYXRlLmdldE1pbGxpc2Vjb25kcygpICogMC4wMDE7XG4gICAgICAgICAgICB0aGlzLnZhcmlhYmxlcyA9IHZhcmlhYmxlcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHVwZGF0ZSB1bmlmb3JtcyBwZXIgcHJvZ3JhbVxuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICd1cGRhdGVVbmlmb3JtcycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGVVbmlmb3Jtcyhwcm9ncmFtLCBrZXkpIHtcbiAgICAgICAgICAgIHZhciBnbCA9IHRoaXMuZ2wsXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzID0gdGhpcy52YXJpYWJsZXM7XG4gICAgICAgICAgICBnbC51c2VQcm9ncmFtKHByb2dyYW0pO1xuICAgICAgICAgICAgaWYgKHRoaXMubkRlbHRhID4gMSkge1xuICAgICAgICAgICAgICAgIC8vIHNldCB0aGUgZGVsdGEgdGltZSB1bmlmb3JtXG4gICAgICAgICAgICAgICAgZ2wudW5pZm9ybTFmKGdsLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCAndV9kZWx0YScpLCB2YXJpYWJsZXMuZGVsdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMublRpbWUgPiAxKSB7XG4gICAgICAgICAgICAgICAgLy8gc2V0IHRoZSBlbGFwc2VkIHRpbWUgdW5pZm9ybVxuICAgICAgICAgICAgICAgIGdsLnVuaWZvcm0xZihnbC5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgJ3VfdGltZScpLCB2YXJpYWJsZXMudGltZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5uRGF0ZSkge1xuICAgICAgICAgICAgICAgIC8vIFNldCBkYXRlIHVuaWZvcm06IHllYXIvbW9udGgvZGF5L3RpbWVfaW5fc2VjXG4gICAgICAgICAgICAgICAgZ2wudW5pZm9ybTRmKGdsLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCAndV9kYXRlJyksIHZhcmlhYmxlcy55ZWFyLCB2YXJpYWJsZXMubW9udGgsIHZhcmlhYmxlcy5kYXRlLCB2YXJpYWJsZXMuZGF5dGltZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBzZXQgdGhlIHJlc29sdXRpb24gdW5pZm9ybVxuICAgICAgICAgICAgZ2wudW5pZm9ybTJmKGdsLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCAndV9yZXNvbHV0aW9uJyksIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICAgICAgLy8gdGhpcy51bmlmb3JtKCcyZicsICd2ZWMyJywgJ3VfcmVzb2x1dGlvbicsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICAgICAgZm9yICh2YXIgX2tleTMgaW4gdGhpcy5idWZmZXJzKSB7XG4gICAgICAgICAgICAgICAgdmFyIGJ1ZmZlciA9IHRoaXMuYnVmZmVyc1tfa2V5M107XG4gICAgICAgICAgICAgICAgZ2wudW5pZm9ybTFpKGdsLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBidWZmZXIubmFtZSksIGJ1ZmZlci5idW5kbGUuaW5wdXQuaW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5URVhUVVJFX0NPVU5UID0gdGhpcy5CVUZGRVJfQ09VTlQ7XG4gICAgICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMudGV4dHVyZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy51bmlmb3JtVGV4dHVyZShuYW1lLCBudWxsLCB7XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcmluZzogJ21pcG1hcCcsXG4gICAgICAgICAgICAgICAgICAgIHJlcGVhdDogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0ZXh0dXJlID0gdGhpcy50ZXh0dXJlc1tuYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgZ2wuYWN0aXZlVGV4dHVyZShnbC5URVhUVVJFMCArIHRoaXMuVEVYVFVSRV9DT1VOVCk7XG4gICAgICAgICAgICAgICAgICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIHRleHR1cmUudGV4dHVyZSk7XG4gICAgICAgICAgICAgICAgICAgIGdsLnVuaWZvcm0xaShnbC5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgbmFtZSksIHRoaXMuVEVYVFVSRV9DT1VOVCk7XG4gICAgICAgICAgICAgICAgICAgIGdsLnVuaWZvcm0yZihnbC5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgbmFtZSArICdSZXNvbHV0aW9uJyksIHRleHR1cmUud2lkdGgsIHRleHR1cmUuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5URVhUVVJFX0NPVU5UKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gcGFyc2UgaW5wdXQgc3RyaW5nc1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdnZXRCdWZmZXJzJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldEJ1ZmZlcnMoZnJhZ1N0cmluZykge1xuICAgICAgICAgICAgdmFyIGJ1ZmZlcnMgPSB7fTtcbiAgICAgICAgICAgIGlmIChmcmFnU3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgZnJhZ1N0cmluZy5yZXBsYWNlKC8oPzpeXFxzKikoKD86I2lmfCNlbGlmKSg/OlxccyopKGRlZmluZWRcXHMqXFwoXFxzKkJVRkZFUl8pKFxcZCspKD86XFxzKlxcKSl8KD86I2lmZGVmKSg/OlxccypCVUZGRVJfKShcXGQrKSg/OlxccyopKS9nbSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IGFyZ3VtZW50c1szXSB8fCBhcmd1bWVudHNbNF07XG4gICAgICAgICAgICAgICAgICAgIGJ1ZmZlcnNbJ3VfYnVmZmVyJyArIGldID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZnJhZ21lbnQ6ICcjZGVmaW5lIEJVRkZFUl8nICsgaSArICdcXG4nICsgZnJhZ1N0cmluZ1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGJ1ZmZlcnM7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBsb2FkIGJ1ZmZlcnMgcHJvZ3JhbXNcblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnbG9hZFByb2dyYW1zJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGxvYWRQcm9ncmFtcyhidWZmZXJzKSB7XG4gICAgICAgICAgICB2YXIgZ2xzbCA9IHRoaXM7XG4gICAgICAgICAgICB2YXIgZ2wgPSB0aGlzLmdsO1xuICAgICAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICAgICAgdmFyIHZlcnRleCA9IGNyZWF0ZVNoYWRlcihnbHNsLCBnbHNsLnZlcnRleFN0cmluZywgZ2wuVkVSVEVYX1NIQURFUik7XG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gYnVmZmVycykge1xuICAgICAgICAgICAgICAgIHZhciBidWZmZXIgPSBidWZmZXJzW2tleV07XG4gICAgICAgICAgICAgICAgdmFyIGZyYWdtZW50ID0gY3JlYXRlU2hhZGVyKGdsc2wsIGJ1ZmZlci5mcmFnbWVudCwgZ2wuRlJBR01FTlRfU0hBREVSLCAxKTtcbiAgICAgICAgICAgICAgICBpZiAoIWZyYWdtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGZyYWdtZW50ID0gY3JlYXRlU2hhZGVyKGdsc2wsICd2b2lkIG1haW4oKXtcXG5cXHRnbF9GcmFnQ29sb3IgPSB2ZWM0KDEuMCk7XFxufScsIGdsLkZSQUdNRU5UX1NIQURFUik7XG4gICAgICAgICAgICAgICAgICAgIGdsc2wuaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGdsc2wuaXNWYWxpZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBwcm9ncmFtID0gY3JlYXRlUHJvZ3JhbShnbHNsLCBbdmVydGV4LCBmcmFnbWVudF0pO1xuICAgICAgICAgICAgICAgIGJ1ZmZlci5uYW1lID0gJ3VfYnVmZmVyJyArIGk7XG4gICAgICAgICAgICAgICAgYnVmZmVyLnByb2dyYW0gPSBwcm9ncmFtO1xuICAgICAgICAgICAgICAgIGJ1ZmZlci5idW5kbGUgPSBnbHNsLmNyZWF0ZVN3YXBwYWJsZUJ1ZmZlcihnbHNsLmNhbnZhcy53aWR0aCwgZ2xzbC5jYW52YXMuaGVpZ2h0LCBwcm9ncmFtKTtcbiAgICAgICAgICAgICAgICBnbC5kZWxldGVTaGFkZXIoZnJhZ21lbnQpO1xuICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGdsLmRlbGV0ZVNoYWRlcih2ZXJ0ZXgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY3JlYXRlIGFuIGlucHV0IC8gb3V0cHV0IHN3YXBwYWJsZSBidWZmZXJcblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY3JlYXRlU3dhcHBhYmxlQnVmZmVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZVN3YXBwYWJsZUJ1ZmZlcihXLCBILCBwcm9ncmFtKSB7XG4gICAgICAgICAgICB2YXIgaW5wdXQgPSB0aGlzLmNyZWF0ZUJ1ZmZlcihXLCBILCBwcm9ncmFtKTtcbiAgICAgICAgICAgIHZhciBvdXRwdXQgPSB0aGlzLmNyZWF0ZUJ1ZmZlcihXLCBILCBwcm9ncmFtKTtcbiAgICAgICAgICAgIHZhciBnbCA9IHRoaXMuZ2w7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGlucHV0OiBpbnB1dCxcbiAgICAgICAgICAgICAgICBvdXRwdXQ6IG91dHB1dCxcbiAgICAgICAgICAgICAgICBzd2FwOiBmdW5jdGlvbiBzd2FwKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGVtcCA9IGlucHV0O1xuICAgICAgICAgICAgICAgICAgICBpbnB1dCA9IG91dHB1dDtcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0ID0gdGVtcDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnB1dCA9IGlucHV0O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm91dHB1dCA9IG91dHB1dDtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKFcsIEgsIHByb2dyYW0sIG5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgZ2wudXNlUHJvZ3JhbShwcm9ncmFtKTtcbiAgICAgICAgICAgICAgICAgICAgZ2wudmlld3BvcnQoMCwgMCwgVywgSCk7XG4gICAgICAgICAgICAgICAgICAgIGdsLmJpbmRGcmFtZWJ1ZmZlcihnbC5GUkFNRUJVRkZFUiwgdGhpcy5pbnB1dC5idWZmZXIpO1xuICAgICAgICAgICAgICAgICAgICBnbC5mcmFtZWJ1ZmZlclRleHR1cmUyRChnbC5GUkFNRUJVRkZFUiwgZ2wuQ09MT1JfQVRUQUNITUVOVDAsIGdsLlRFWFRVUkVfMkQsIHRoaXMub3V0cHV0LnRleHR1cmUsIDApO1xuICAgICAgICAgICAgICAgICAgICBnbC5kcmF3QXJyYXlzKGdsLlRSSUFOR0xFUywgMCwgNik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3dhcCgpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcmVzaXplOiBmdW5jdGlvbiByZXNpemUoVywgSCwgcHJvZ3JhbSwgbmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBnbC51c2VQcm9ncmFtKHByb2dyYW0pO1xuICAgICAgICAgICAgICAgICAgICBnbC52aWV3cG9ydCgwLCAwLCBXLCBIKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnB1dC5yZXNpemUoVywgSCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3V0cHV0LnJlc2l6ZShXLCBIKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY3JlYXRlIGEgYnVmZmVyc1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjcmVhdGVCdWZmZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlQnVmZmVyKFcsIEgsIHByb2dyYW0pIHtcbiAgICAgICAgICAgIHZhciBnbCA9IHRoaXMuZ2w7XG4gICAgICAgICAgICB2YXIgaW5kZXggPSB0aGlzLkJVRkZFUl9DT1VOVDtcbiAgICAgICAgICAgIHRoaXMuQlVGRkVSX0NPVU5UICs9IDI7XG4gICAgICAgICAgICBnbC5nZXRFeHRlbnNpb24oJ09FU190ZXh0dXJlX2Zsb2F0Jyk7XG4gICAgICAgICAgICB2YXIgdGV4dHVyZSA9IGdsLmNyZWF0ZVRleHR1cmUoKTtcbiAgICAgICAgICAgIGdsLmFjdGl2ZVRleHR1cmUoZ2wuVEVYVFVSRTAgKyBpbmRleCk7XG4gICAgICAgICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0ZXh0dXJlKTtcbiAgICAgICAgICAgIGdsLnRleEltYWdlMkQoZ2wuVEVYVFVSRV8yRCwgMCwgZ2wuUkdCQSwgVywgSCwgMCwgZ2wuUkdCQSwgZ2wuRkxPQVQsIG51bGwpO1xuICAgICAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01JTl9GSUxURVIsIGdsLk5FQVJFU1QpO1xuICAgICAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01BR19GSUxURVIsIGdsLk5FQVJFU1QpO1xuICAgICAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfUywgZ2wuQ0xBTVBfVE9fRURHRSk7XG4gICAgICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9ULCBnbC5DTEFNUF9UT19FREdFKTtcbiAgICAgICAgICAgIHZhciBidWZmZXIgPSBnbC5jcmVhdGVGcmFtZWJ1ZmZlcigpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgICAgICAgICAgdGV4dHVyZTogdGV4dHVyZSxcbiAgICAgICAgICAgICAgICBidWZmZXI6IGJ1ZmZlcixcbiAgICAgICAgICAgICAgICBXOiBXLFxuICAgICAgICAgICAgICAgIEg6IEgsXG4gICAgICAgICAgICAgICAgcmVzaXplOiBmdW5jdGlvbiByZXNpemUoVywgSCkge1xuICAgICAgICAgICAgICAgICAgICBnbC5iaW5kRnJhbWVidWZmZXIoZ2wuRlJBTUVCVUZGRVIsIGJ1ZmZlcik7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW5XID0gTWF0aC5taW4oVywgdGhpcy5XKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbkggPSBNYXRoLm1pbihILCB0aGlzLkgpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGl4ZWxzID0gbmV3IEZsb2F0MzJBcnJheShtaW5XICogbWluSCAqIDQpO1xuICAgICAgICAgICAgICAgICAgICBnbC5yZWFkUGl4ZWxzKDAsIDAsIG1pblcsIG1pbkgsIGdsLlJHQkEsIGdsLkZMT0FULCBwaXhlbHMpO1xuICAgICAgICAgICAgICAgICAgICBnbC5iaW5kRnJhbWVidWZmZXIoZ2wuRlJBTUVCVUZGRVIsIG51bGwpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbmV3SW5kZXggPSBpbmRleCArIDE7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdUZXh0dXJlID0gZ2wuY3JlYXRlVGV4dHVyZSgpO1xuICAgICAgICAgICAgICAgICAgICBnbC5hY3RpdmVUZXh0dXJlKGdsLlRFWFRVUkUwICsgbmV3SW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCBuZXdUZXh0dXJlKTtcbiAgICAgICAgICAgICAgICAgICAgZ2wudGV4SW1hZ2UyRChnbC5URVhUVVJFXzJELCAwLCBnbC5SR0JBLCBXLCBILCAwLCBnbC5SR0JBLCBnbC5GTE9BVCwgbnVsbCk7XG4gICAgICAgICAgICAgICAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NSU5fRklMVEVSLCBnbC5ORUFSRVNUKTtcbiAgICAgICAgICAgICAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01BR19GSUxURVIsIGdsLk5FQVJFU1QpO1xuICAgICAgICAgICAgICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9TLCBnbC5DTEFNUF9UT19FREdFKTtcbiAgICAgICAgICAgICAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfVCwgZ2wuQ0xBTVBfVE9fRURHRSk7XG4gICAgICAgICAgICAgICAgICAgIGdsLnRleFN1YkltYWdlMkQoZ2wuVEVYVFVSRV8yRCwgMCwgMCwgMCwgbWluVywgbWluSCwgZ2wuUkdCQSwgZ2wuRkxPQVQsIHBpeGVscyk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdCdWZmZXIgPSBnbC5jcmVhdGVGcmFtZWJ1ZmZlcigpO1xuICAgICAgICAgICAgICAgICAgICBnbC5iaW5kRnJhbWVidWZmZXIoZ2wuRlJBTUVCVUZGRVIsIG51bGwpO1xuICAgICAgICAgICAgICAgICAgICBnbC5kZWxldGVUZXh0dXJlKHRleHR1cmUpO1xuICAgICAgICAgICAgICAgICAgICBnbC5hY3RpdmVUZXh0dXJlKGdsLlRFWFRVUkUwICsgaW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCBuZXdUZXh0dXJlKTtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXggPSB0aGlzLmluZGV4ID0gaW5kZXg7XG4gICAgICAgICAgICAgICAgICAgIHRleHR1cmUgPSB0aGlzLnRleHR1cmUgPSBuZXdUZXh0dXJlO1xuICAgICAgICAgICAgICAgICAgICBidWZmZXIgPSB0aGlzLmJ1ZmZlciA9IG5ld0J1ZmZlcjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5XID0gVztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5IID0gSDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcmVzaXplIGJ1ZmZlcnMgb24gY2FudmFzIHJlc2l6ZVxuICAgICAgICAvLyBjb25zaWRlciBhcHBseWluZyBhIHRocm90dGxlIG9mIDUwIG1zIG9uIGNhbnZhcyByZXNpemVcbiAgICAgICAgLy8gdG8gYXZvaWQgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIGFuZCBHbCB2aW9sYXRpb25zXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3Jlc2l6ZVN3YXBwYWJsZUJ1ZmZlcnMnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVzaXplU3dhcHBhYmxlQnVmZmVycygpIHtcbiAgICAgICAgICAgIHZhciBnbCA9IHRoaXMuZ2w7XG4gICAgICAgICAgICB2YXIgVyA9IGdsLmNhbnZhcy53aWR0aCxcbiAgICAgICAgICAgICAgICBIID0gZ2wuY2FudmFzLmhlaWdodDtcbiAgICAgICAgICAgIGdsLnZpZXdwb3J0KDAsIDAsIFcsIEgpO1xuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMuYnVmZmVycykge1xuICAgICAgICAgICAgICAgIHZhciBidWZmZXIgPSB0aGlzLmJ1ZmZlcnNba2V5XTtcbiAgICAgICAgICAgICAgICBidWZmZXIuYnVuZGxlLnJlc2l6ZShXLCBILCBidWZmZXIucHJvZ3JhbSwgYnVmZmVyLm5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZ2wudXNlUHJvZ3JhbSh0aGlzLnByb2dyYW0pO1xuICAgICAgICB9XG4gICAgfV0pO1xuICAgIHJldHVybiBHbHNsQ2FudmFzO1xufSgpO1xuXG5mdW5jdGlvbiBsb2FkQWxsR2xzbENhbnZhcygpIHtcbiAgICB2YXIgbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2dsc2xDYW52YXMnKTtcbiAgICBpZiAobGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICAgIHdpbmRvdy5nbHNsQ2FudmFzZXMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgc2FuZGJveCA9IG5ldyBHbHNsQ2FudmFzKGxpc3RbaV0pO1xuICAgICAgICAgICAgaWYgKHNhbmRib3guaXNWYWxpZCkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5nbHNsQ2FudmFzZXMucHVzaChzYW5kYm94KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgbG9hZEFsbEdsc2xDYW52YXMoKTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEdsc2xDYW52YXM7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGlzRnVuY3Rpb25cblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ1xuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uIChmbikge1xuICBpZiAoIWZuKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbiAgdmFyIHN0cmluZyA9IHRvU3RyaW5nLmNhbGwoZm4pXG4gIHJldHVybiBzdHJpbmcgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXScgfHxcbiAgICAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nICYmIHN0cmluZyAhPT0gJ1tvYmplY3QgUmVnRXhwXScpIHx8XG4gICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICAgIC8vIElFOCBhbmQgYmVsb3dcbiAgICAgKGZuID09PSB3aW5kb3cuc2V0VGltZW91dCB8fFxuICAgICAgZm4gPT09IHdpbmRvdy5hbGVydCB8fFxuICAgICAgZm4gPT09IHdpbmRvdy5jb25maXJtIHx8XG4gICAgICBmbiA9PT0gd2luZG93LnByb21wdCkpXG59O1xuIiwidmFyIHRyaW0gPSBmdW5jdGlvbihzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJyk7XG59XG4gICwgaXNBcnJheSA9IGZ1bmN0aW9uKGFyZykge1xuICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmcpID09PSAnW29iamVjdCBBcnJheV0nO1xuICAgIH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaGVhZGVycykge1xuICBpZiAoIWhlYWRlcnMpXG4gICAgcmV0dXJuIHt9XG5cbiAgdmFyIHJlc3VsdCA9IHt9XG5cbiAgdmFyIGhlYWRlcnNBcnIgPSB0cmltKGhlYWRlcnMpLnNwbGl0KCdcXG4nKVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgaGVhZGVyc0Fyci5sZW5ndGg7IGkrKykge1xuICAgIHZhciByb3cgPSBoZWFkZXJzQXJyW2ldXG4gICAgdmFyIGluZGV4ID0gcm93LmluZGV4T2YoJzonKVxuICAgICwga2V5ID0gdHJpbShyb3cuc2xpY2UoMCwgaW5kZXgpKS50b0xvd2VyQ2FzZSgpXG4gICAgLCB2YWx1ZSA9IHRyaW0ocm93LnNsaWNlKGluZGV4ICsgMSkpXG5cbiAgICBpZiAodHlwZW9mKHJlc3VsdFtrZXldKSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gdmFsdWVcbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkocmVzdWx0W2tleV0pKSB7XG4gICAgICByZXN1bHRba2V5XS5wdXNoKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRba2V5XSA9IFsgcmVzdWx0W2tleV0sIHZhbHVlIF1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciB3aW5kb3cgPSByZXF1aXJlKFwiZ2xvYmFsL3dpbmRvd1wiKVxudmFyIG9uY2UgPSByZXF1aXJlKFwib25jZVwiKVxudmFyIGlzRnVuY3Rpb24gPSByZXF1aXJlKFwiaXMtZnVuY3Rpb25cIilcbnZhciBwYXJzZUhlYWRlcnMgPSByZXF1aXJlKFwicGFyc2UtaGVhZGVyc1wiKVxudmFyIHh0ZW5kID0gcmVxdWlyZShcInh0ZW5kXCIpXG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlWEhSXG5jcmVhdGVYSFIuWE1MSHR0cFJlcXVlc3QgPSB3aW5kb3cuWE1MSHR0cFJlcXVlc3QgfHwgbm9vcFxuY3JlYXRlWEhSLlhEb21haW5SZXF1ZXN0ID0gXCJ3aXRoQ3JlZGVudGlhbHNcIiBpbiAobmV3IGNyZWF0ZVhIUi5YTUxIdHRwUmVxdWVzdCgpKSA/IGNyZWF0ZVhIUi5YTUxIdHRwUmVxdWVzdCA6IHdpbmRvdy5YRG9tYWluUmVxdWVzdFxuXG5mb3JFYWNoQXJyYXkoW1wiZ2V0XCIsIFwicHV0XCIsIFwicG9zdFwiLCBcInBhdGNoXCIsIFwiaGVhZFwiLCBcImRlbGV0ZVwiXSwgZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgY3JlYXRlWEhSW21ldGhvZCA9PT0gXCJkZWxldGVcIiA/IFwiZGVsXCIgOiBtZXRob2RdID0gZnVuY3Rpb24odXJpLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICAgICAgICBvcHRpb25zID0gaW5pdFBhcmFtcyh1cmksIG9wdGlvbnMsIGNhbGxiYWNrKVxuICAgICAgICBvcHRpb25zLm1ldGhvZCA9IG1ldGhvZC50b1VwcGVyQ2FzZSgpXG4gICAgICAgIHJldHVybiBfY3JlYXRlWEhSKG9wdGlvbnMpXG4gICAgfVxufSlcblxuZnVuY3Rpb24gZm9yRWFjaEFycmF5KGFycmF5LCBpdGVyYXRvcikge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaXRlcmF0b3IoYXJyYXlbaV0pXG4gICAgfVxufVxuXG5mdW5jdGlvbiBpc0VtcHR5KG9iail7XG4gICAgZm9yKHZhciBpIGluIG9iail7XG4gICAgICAgIGlmKG9iai5oYXNPd25Qcm9wZXJ0eShpKSkgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIHJldHVybiB0cnVlXG59XG5cbmZ1bmN0aW9uIGluaXRQYXJhbXModXJpLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIHZhciBwYXJhbXMgPSB1cmlcblxuICAgIGlmIChpc0Z1bmN0aW9uKG9wdGlvbnMpKSB7XG4gICAgICAgIGNhbGxiYWNrID0gb3B0aW9uc1xuICAgICAgICBpZiAodHlwZW9mIHVyaSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcGFyYW1zID0ge3VyaTp1cml9XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBwYXJhbXMgPSB4dGVuZChvcHRpb25zLCB7dXJpOiB1cml9KVxuICAgIH1cblxuICAgIHBhcmFtcy5jYWxsYmFjayA9IGNhbGxiYWNrXG4gICAgcmV0dXJuIHBhcmFtc1xufVxuXG5mdW5jdGlvbiBjcmVhdGVYSFIodXJpLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIG9wdGlvbnMgPSBpbml0UGFyYW1zKHVyaSwgb3B0aW9ucywgY2FsbGJhY2spXG4gICAgcmV0dXJuIF9jcmVhdGVYSFIob3B0aW9ucylcbn1cblxuZnVuY3Rpb24gX2NyZWF0ZVhIUihvcHRpb25zKSB7XG4gICAgdmFyIGNhbGxiYWNrID0gb3B0aW9ucy5jYWxsYmFja1xuICAgIGlmKHR5cGVvZiBjYWxsYmFjayA9PT0gXCJ1bmRlZmluZWRcIil7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImNhbGxiYWNrIGFyZ3VtZW50IG1pc3NpbmdcIilcbiAgICB9XG4gICAgY2FsbGJhY2sgPSBvbmNlKGNhbGxiYWNrKVxuXG4gICAgZnVuY3Rpb24gcmVhZHlzdGF0ZWNoYW5nZSgpIHtcbiAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgICAgICBsb2FkRnVuYygpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRCb2R5KCkge1xuICAgICAgICAvLyBDaHJvbWUgd2l0aCByZXF1ZXN0VHlwZT1ibG9iIHRocm93cyBlcnJvcnMgYXJyb3VuZCB3aGVuIGV2ZW4gdGVzdGluZyBhY2Nlc3MgdG8gcmVzcG9uc2VUZXh0XG4gICAgICAgIHZhciBib2R5ID0gdW5kZWZpbmVkXG5cbiAgICAgICAgaWYgKHhoci5yZXNwb25zZSkge1xuICAgICAgICAgICAgYm9keSA9IHhoci5yZXNwb25zZVxuICAgICAgICB9IGVsc2UgaWYgKHhoci5yZXNwb25zZVR5cGUgPT09IFwidGV4dFwiIHx8ICF4aHIucmVzcG9uc2VUeXBlKSB7XG4gICAgICAgICAgICBib2R5ID0geGhyLnJlc3BvbnNlVGV4dCB8fCB4aHIucmVzcG9uc2VYTUxcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0pzb24pIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgYm9keSA9IEpTT04ucGFyc2UoYm9keSlcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYm9keVxuICAgIH1cblxuICAgIHZhciBmYWlsdXJlUmVzcG9uc2UgPSB7XG4gICAgICAgICAgICAgICAgYm9keTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHt9LFxuICAgICAgICAgICAgICAgIHN0YXR1c0NvZGU6IDAsXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICAgICAgICAgICAgdXJsOiB1cmksXG4gICAgICAgICAgICAgICAgcmF3UmVxdWVzdDogeGhyXG4gICAgICAgICAgICB9XG5cbiAgICBmdW5jdGlvbiBlcnJvckZ1bmMoZXZ0KSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0VGltZXIpXG4gICAgICAgIGlmKCEoZXZ0IGluc3RhbmNlb2YgRXJyb3IpKXtcbiAgICAgICAgICAgIGV2dCA9IG5ldyBFcnJvcihcIlwiICsgKGV2dCB8fCBcIlVua25vd24gWE1MSHR0cFJlcXVlc3QgRXJyb3JcIikgKVxuICAgICAgICB9XG4gICAgICAgIGV2dC5zdGF0dXNDb2RlID0gMFxuICAgICAgICBjYWxsYmFjayhldnQsIGZhaWx1cmVSZXNwb25zZSlcbiAgICB9XG5cbiAgICAvLyB3aWxsIGxvYWQgdGhlIGRhdGEgJiBwcm9jZXNzIHRoZSByZXNwb25zZSBpbiBhIHNwZWNpYWwgcmVzcG9uc2Ugb2JqZWN0XG4gICAgZnVuY3Rpb24gbG9hZEZ1bmMoKSB7XG4gICAgICAgIGlmIChhYm9ydGVkKSByZXR1cm5cbiAgICAgICAgdmFyIHN0YXR1c1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dFRpbWVyKVxuICAgICAgICBpZihvcHRpb25zLnVzZVhEUiAmJiB4aHIuc3RhdHVzPT09dW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAvL0lFOCBDT1JTIEdFVCBzdWNjZXNzZnVsIHJlc3BvbnNlIGRvZXNuJ3QgaGF2ZSBhIHN0YXR1cyBmaWVsZCwgYnV0IGJvZHkgaXMgZmluZVxuICAgICAgICAgICAgc3RhdHVzID0gMjAwXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdGF0dXMgPSAoeGhyLnN0YXR1cyA9PT0gMTIyMyA/IDIwNCA6IHhoci5zdGF0dXMpXG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJlc3BvbnNlID0gZmFpbHVyZVJlc3BvbnNlXG4gICAgICAgIHZhciBlcnIgPSBudWxsXG5cbiAgICAgICAgaWYgKHN0YXR1cyAhPT0gMCl7XG4gICAgICAgICAgICByZXNwb25zZSA9IHtcbiAgICAgICAgICAgICAgICBib2R5OiBnZXRCb2R5KCksXG4gICAgICAgICAgICAgICAgc3RhdHVzQ29kZTogc3RhdHVzLFxuICAgICAgICAgICAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHt9LFxuICAgICAgICAgICAgICAgIHVybDogdXJpLFxuICAgICAgICAgICAgICAgIHJhd1JlcXVlc3Q6IHhoclxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoeGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycyl7IC8vcmVtZW1iZXIgeGhyIGNhbiBpbiBmYWN0IGJlIFhEUiBmb3IgQ09SUyBpbiBJRVxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmhlYWRlcnMgPSBwYXJzZUhlYWRlcnMoeGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXJyID0gbmV3IEVycm9yKFwiSW50ZXJuYWwgWE1MSHR0cFJlcXVlc3QgRXJyb3JcIilcbiAgICAgICAgfVxuICAgICAgICBjYWxsYmFjayhlcnIsIHJlc3BvbnNlLCByZXNwb25zZS5ib2R5KVxuXG4gICAgfVxuXG4gICAgdmFyIHhociA9IG9wdGlvbnMueGhyIHx8IG51bGxcblxuICAgIGlmICgheGhyKSB7XG4gICAgICAgIGlmIChvcHRpb25zLmNvcnMgfHwgb3B0aW9ucy51c2VYRFIpIHtcbiAgICAgICAgICAgIHhociA9IG5ldyBjcmVhdGVYSFIuWERvbWFpblJlcXVlc3QoKVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHhociA9IG5ldyBjcmVhdGVYSFIuWE1MSHR0cFJlcXVlc3QoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGtleVxuICAgIHZhciBhYm9ydGVkXG4gICAgdmFyIHVyaSA9IHhoci51cmwgPSBvcHRpb25zLnVyaSB8fCBvcHRpb25zLnVybFxuICAgIHZhciBtZXRob2QgPSB4aHIubWV0aG9kID0gb3B0aW9ucy5tZXRob2QgfHwgXCJHRVRcIlxuICAgIHZhciBib2R5ID0gb3B0aW9ucy5ib2R5IHx8IG9wdGlvbnMuZGF0YSB8fCBudWxsXG4gICAgdmFyIGhlYWRlcnMgPSB4aHIuaGVhZGVycyA9IG9wdGlvbnMuaGVhZGVycyB8fCB7fVxuICAgIHZhciBzeW5jID0gISFvcHRpb25zLnN5bmNcbiAgICB2YXIgaXNKc29uID0gZmFsc2VcbiAgICB2YXIgdGltZW91dFRpbWVyXG5cbiAgICBpZiAoXCJqc29uXCIgaW4gb3B0aW9ucykge1xuICAgICAgICBpc0pzb24gPSB0cnVlXG4gICAgICAgIGhlYWRlcnNbXCJhY2NlcHRcIl0gfHwgaGVhZGVyc1tcIkFjY2VwdFwiXSB8fCAoaGVhZGVyc1tcIkFjY2VwdFwiXSA9IFwiYXBwbGljYXRpb24vanNvblwiKSAvL0Rvbid0IG92ZXJyaWRlIGV4aXN0aW5nIGFjY2VwdCBoZWFkZXIgZGVjbGFyZWQgYnkgdXNlclxuICAgICAgICBpZiAobWV0aG9kICE9PSBcIkdFVFwiICYmIG1ldGhvZCAhPT0gXCJIRUFEXCIpIHtcbiAgICAgICAgICAgIGhlYWRlcnNbXCJjb250ZW50LXR5cGVcIl0gfHwgaGVhZGVyc1tcIkNvbnRlbnQtVHlwZVwiXSB8fCAoaGVhZGVyc1tcIkNvbnRlbnQtVHlwZVwiXSA9IFwiYXBwbGljYXRpb24vanNvblwiKSAvL0Rvbid0IG92ZXJyaWRlIGV4aXN0aW5nIGFjY2VwdCBoZWFkZXIgZGVjbGFyZWQgYnkgdXNlclxuICAgICAgICAgICAgYm9keSA9IEpTT04uc3RyaW5naWZ5KG9wdGlvbnMuanNvbilcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSByZWFkeXN0YXRlY2hhbmdlXG4gICAgeGhyLm9ubG9hZCA9IGxvYWRGdW5jXG4gICAgeGhyLm9uZXJyb3IgPSBlcnJvckZ1bmNcbiAgICAvLyBJRTkgbXVzdCBoYXZlIG9ucHJvZ3Jlc3MgYmUgc2V0IHRvIGEgdW5pcXVlIGZ1bmN0aW9uLlxuICAgIHhoci5vbnByb2dyZXNzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBJRSBtdXN0IGRpZVxuICAgIH1cbiAgICB4aHIub250aW1lb3V0ID0gZXJyb3JGdW5jXG4gICAgeGhyLm9wZW4obWV0aG9kLCB1cmksICFzeW5jLCBvcHRpb25zLnVzZXJuYW1lLCBvcHRpb25zLnBhc3N3b3JkKVxuICAgIC8vaGFzIHRvIGJlIGFmdGVyIG9wZW5cbiAgICBpZighc3luYykge1xuICAgICAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gISFvcHRpb25zLndpdGhDcmVkZW50aWFsc1xuICAgIH1cbiAgICAvLyBDYW5ub3Qgc2V0IHRpbWVvdXQgd2l0aCBzeW5jIHJlcXVlc3RcbiAgICAvLyBub3Qgc2V0dGluZyB0aW1lb3V0IG9uIHRoZSB4aHIgb2JqZWN0LCBiZWNhdXNlIG9mIG9sZCB3ZWJraXRzIGV0Yy4gbm90IGhhbmRsaW5nIHRoYXQgY29ycmVjdGx5XG4gICAgLy8gYm90aCBucG0ncyByZXF1ZXN0IGFuZCBqcXVlcnkgMS54IHVzZSB0aGlzIGtpbmQgb2YgdGltZW91dCwgc28gdGhpcyBpcyBiZWluZyBjb25zaXN0ZW50XG4gICAgaWYgKCFzeW5jICYmIG9wdGlvbnMudGltZW91dCA+IDAgKSB7XG4gICAgICAgIHRpbWVvdXRUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGFib3J0ZWQ9dHJ1ZS8vSUU5IG1heSBzdGlsbCBjYWxsIHJlYWR5c3RhdGVjaGFuZ2VcbiAgICAgICAgICAgIHhoci5hYm9ydChcInRpbWVvdXRcIilcbiAgICAgICAgICAgIHZhciBlID0gbmV3IEVycm9yKFwiWE1MSHR0cFJlcXVlc3QgdGltZW91dFwiKVxuICAgICAgICAgICAgZS5jb2RlID0gXCJFVElNRURPVVRcIlxuICAgICAgICAgICAgZXJyb3JGdW5jKGUpXG4gICAgICAgIH0sIG9wdGlvbnMudGltZW91dCApXG4gICAgfVxuXG4gICAgaWYgKHhoci5zZXRSZXF1ZXN0SGVhZGVyKSB7XG4gICAgICAgIGZvcihrZXkgaW4gaGVhZGVycyl7XG4gICAgICAgICAgICBpZihoZWFkZXJzLmhhc093blByb3BlcnR5KGtleSkpe1xuICAgICAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgaGVhZGVyc1trZXldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChvcHRpb25zLmhlYWRlcnMgJiYgIWlzRW1wdHkob3B0aW9ucy5oZWFkZXJzKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJIZWFkZXJzIGNhbm5vdCBiZSBzZXQgb24gYW4gWERvbWFpblJlcXVlc3Qgb2JqZWN0XCIpXG4gICAgfVxuXG4gICAgaWYgKFwicmVzcG9uc2VUeXBlXCIgaW4gb3B0aW9ucykge1xuICAgICAgICB4aHIucmVzcG9uc2VUeXBlID0gb3B0aW9ucy5yZXNwb25zZVR5cGVcbiAgICB9XG5cbiAgICBpZiAoXCJiZWZvcmVTZW5kXCIgaW4gb3B0aW9ucyAmJlxuICAgICAgICB0eXBlb2Ygb3B0aW9ucy5iZWZvcmVTZW5kID09PSBcImZ1bmN0aW9uXCJcbiAgICApIHtcbiAgICAgICAgb3B0aW9ucy5iZWZvcmVTZW5kKHhocilcbiAgICB9XG5cbiAgICB4aHIuc2VuZChib2R5KVxuXG4gICAgcmV0dXJuIHhoclxuXG5cbn1cblxuZnVuY3Rpb24gbm9vcCgpIHt9XG4iLCJtb2R1bGUuZXhwb3J0cyA9IG9uY2Vcblxub25jZS5wcm90byA9IG9uY2UoZnVuY3Rpb24gKCkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRnVuY3Rpb24ucHJvdG90eXBlLCAnb25jZScsIHtcbiAgICB2YWx1ZTogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIG9uY2UodGhpcylcbiAgICB9LFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KVxufSlcblxuZnVuY3Rpb24gb25jZSAoZm4pIHtcbiAgdmFyIGNhbGxlZCA9IGZhbHNlXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGNhbGxlZCkgcmV0dXJuXG4gICAgY2FsbGVkID0gdHJ1ZVxuICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZXh0ZW5kXG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbmZ1bmN0aW9uIGV4dGVuZCgpIHtcbiAgICB2YXIgdGFyZ2V0ID0ge31cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV1cblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBPcGVuRnJhbWVJY29uIHtcbiAgICBjb25zdHJ1Y3RvciAocGFyZW50KSB7XG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuXG4gICAgICAgIHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2dsc2xHYWxsZXJ5X29wZW5GcmFtZUljb24nKTtcbiAgICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSAnW29dJztcbiAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNyZWF0ZU9wZW5GcmFtZUFydHdvcmsodGhpcy5wYXJlbnQsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhldmVudCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgdHJ1ZSk7XG5cbiAgICAgICAgdGhpcy5wYXJlbnQuZWwuYXBwZW5kQ2hpbGQodGhpcy5lbCk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlT3BlbkZyYW1lQXJ0d29yayhpdGVtLCBjYWxsYmFjaykge1xuICAgIGxldCBpZCA9IGl0ZW0uaWQ7XG4gICAgbGV0IHRpdGxlID0gaXRlbS50aXRsZSB8fCAndW5rbm93JztcbiAgICBsZXQgYXV0aG9yID0gaXRlbS5hdXRob3IgfHwgJ3Vua25vdyc7XG4gICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIGNhbGxiYWNrID0gY2FsbGJhY2sgfHwgKCkgPT4ge307XG4gICAgLy8gYW55d2hlcmUgaW4gdGhlIEFQSSB0aGF0IHVzZXIge2lkfSBpcyBuZWVkZWQsIHRoZSBhbGlhcyAnY3VycmVudCcgY2FuIGJlIHVzZWQgZm9yIHRoZSBsb2dnZWQtaW4gdXNlclxuICAgIHhoci5vcGVuKCdQT1NUJywgJ2h0dHA6Ly9vcGVuZnJhbWUuaW8vYXBpL3VzZXJzL2N1cnJlbnQvb3duZWRfYXJ0d29yaycsIGZhbHNlKTtcbiAgICAvLyBzZXQgY29udGVudCB0eXBlIHRvIEpTT04uLi5cbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD1VVEYtOCcpO1xuICAgIC8vIFRoaXMgaXMgZXNzZW50aWFsIGluIG9yZGVyIHRvIGluY2x1ZGUgYXV0aCBjb29raWVzOlxuICAgIHhoci53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuICAgIHhoci5vbmxvYWQgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgICAgIHdpbmRvdy5vcGVuKCdodHRwOi8vb3BlbmZyYW1lLmlvL2xvZ2luLXBvcHVwJywgJ2xvZ2luJywgJ3dpZHRoPTUwMCxoZWlnaHQ9NjAwJyk7XG4gICAgICAgICAgICBsZXQgc3VjY2Vzc0xpc3RlbmVyID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIGlmIChlLmRhdGEgPT09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgICAgICAgICBjcmVhdGVPcGVuRnJhbWVBcnR3b3JrKGl0ZW0sIGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBzdWNjZXNzTGlzdGVuZXIpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgc3VjY2Vzc0xpc3RlbmVyLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZXZlbnQuY3VycmVudFRhcmdldC5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgY2FsbGJhY2sodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjYWxsYmFjayhmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHhoci5vbmVycm9yID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50LmN1cnJlbnRUYXJnZXQuc3RhdHVzKTtcbiAgICB9O1xuXG4gICAgbGV0IHVybCA9ICcnO1xuICAgIGlmIChpZC5tYXRjaCgvXFxkXFxkXFwvLiovKSkge1xuICAgICAgICB1cmwgPSAnaHR0cHM6Ly90aGVib29rb2ZzaGFkZXJzLmNvbS8nICsgaWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB1cmwgPSAnaHR0cHM6Ly90aGVib29rb2ZzaGFkZXJzLmNvbS9sb2cvJyArIGlkO1xuICAgIH1cblxuICAgIHhoci5zZW5kKEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICBhdXRob3JfbmFtZTogYXV0aG9yLFxuICAgICAgICBpc19wdWJsaWM6IGZhbHNlLFxuICAgICAgICBmb3JtYXQ6ICdvcGVuZnJhbWUtZ2xzbHZpZXdlcicsXG4gICAgICAgIHVybDogdXJsICsgJy5mcmFnJyxcbiAgICAgICAgdGh1bWJfdXJsOiB1cmwgKyAnLnBuZydcbiAgICB9KSk7XG59XG4iLCJpbXBvcnQgeGhyIGZyb20gJ3hocic7XG5pbXBvcnQgR2xzbENhbnZhcyBmcm9tICdnbHNsQ2FudmFzJztcbmltcG9ydCBPcGVuRnJhbWVJY29uIGZyb20gJy4uL2FkZG9ucy9vcGVuRnJhbWVJY29uJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FsbGVyeUl0ZW0ge1xuICAgIGNvbnN0cnVjdG9yIChpZCwgbWFpbiwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMubWFpbiA9IG1haW47XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG5cbiAgICAgICAgLy8gQ29uc3RydWN0IEl0ZW1cbiAgICAgICAgdGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZ2xzbEdhbGxlcnlfaXRlbScpO1xuXG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcblxuICAgICAgICB0aGlzLmltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICB0aGlzLmltZy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2dsc2xHYWxsZXJ5X3RodW1iJyk7XG5cbiAgICAgICAgdGhpcy5jcmVkaXRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMuY3JlZGl0cy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2dsc2xHYWxsZXJ5X2NyZWRpdHMnKTtcbiAgICAgICAgdGhpcy5jcmVkaXRzLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcblxuICAgICAgICAvLyBpZiAodGhpcy5pZC5tYXRjaCgvXFxkXFxkXFwvLiovKSkge1xuICAgICAgICAvLyAgICAgdGhpcy5saW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsICdodHRwczovL3RoZWJvb2tvZnNoYWRlcnMuY29tL2VkaXQucGhwIycgKyB0aGlzLmlkICsgJy5mcmFnJyk7XG4gICAgICAgIC8vICAgICB0aGlzLmltZy5zcmMgPSAnaHR0cHM6Ly90aGVib29rb2ZzaGFkZXJzLmNvbS8nICsgdGhpcy5pZCArICcucG5nJztcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBlbHNlIHtcbiAgICAgICAgLy8gICAgIGlmICh0aGlzLm9wdGlvbnMuY2xpY2tSdW4gPT09IFwiZWRpdG9yXCIpIHtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgJ2h0dHBzOi8vdGhlYm9va29mc2hhZGVycy5jb20vZWRpdC5waHA/bG9nPScgKyB0aGlzLmlkKTtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmltZy5zcmMgPSAnaHR0cHM6Ly90aGVib29rb2ZzaGFkZXJzLmNvbS9sb2cvJyArIHRoaXMuaWQgKyAnLnBuZyc7XG4gICAgICAgIC8vICAgICB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgICAgIHRoaXMubGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnaHR0cDovLycgKyB0aGlzLm9wdGlvbnMuY2xpY2tSdW4gKyAnLnRoZWJvb2tvZnNoYWRlcnMuY29tLz9sb2c9JyArIHRoaXMuaWQpO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuaW1nLnNyYyA9ICdodHRwczovL3RoZWJvb2tvZnNoYWRlcnMuY29tL2xvZy8nICsgdGhpcy5pZCArICcucG5nJztcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfVxuXG4gICAgICAgIC8vIHRoaXMubGluay5hcHBlbmRDaGlsZCh0aGlzLmltZyk7XG4gICAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy5jcmVkaXRzKTtcbiAgICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZCh0aGlzLmNhbnZhcyk7XG4gICAgICAgIHRoaXMubWFpbi5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5lbCk7XG5cbiAgICAgICAgLy8gQWRkIGV2ZW50c1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmhvdmVyUHJldmlldykge1xuICAgICAgICAgICAgLy8gdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4ge1xuICAgICAgICAgICAgLy8gICAgIGhhbmRsZU1vdXNlRW50ZXIodGhpcyk7XG4gICAgICAgICAgICAvLyB9KTtcbiAgICAgICAgICAgIC8vIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcbiAgICAgICAgICAgIC8vICAgICBoYW5kbGVNb3VzZUxlYXZlKHRoaXMpO1xuICAgICAgICAgICAgLy8gfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLm9wZW5GcmFtZUljb24pIHtcbiAgICAgICAgICAgIHRoaXMub3BlbkZyYW1lSWNvbiA9IG5ldyBPcGVuRnJhbWVJY29uKHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdGhpcy5pbml0KCk7XG4gICAgICAgIHRoaXMucmVxdWVzdFNvdXJjZSh0aGlzLmlkKVxuICAgIH1cblxuICAgIGluaXQgKCkge1xuICAgICAgICBpZiAoIXRoaXMuc291cmNlIHx8IHRoaXMuc291cmNlID09PSAnJykge1xuICAgICAgICAgICAgdmFyIHVybCA9ICcnO1xuICAgICAgICAgICAgaWYgKHRoaXMuaWQubWF0Y2goL1xcZFxcZFxcLy4qLykpIHtcbiAgICAgICAgICAgICAgICB1cmwgPSAnaHR0cHM6Ly90aGVib29rb2ZzaGFkZXJzLmNvbS8nICsgdGhpcy5pZCArICcuZnJhZyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB1cmwgPSAnaHR0cHM6Ly90aGVib29rb2ZzaGFkZXJzLmNvbS9sb2cvJyArIHRoaXMuaWQgKyAnLmZyYWcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGl0ZW0gPSB0aGlzO1xuICAgICAgICAgICAgeGhyLmdldCh1cmwsIChlcnJvciwgcmVzLCBib2R5KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRvd25sb2FkaW5nICcsIGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpdGVtLnNldENvZGUoYm9keSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlcXVlc3RTb3VyY2UgKGlkKSB7XG4gICAgICAgIGxldCB1cmwgPScvcGhhdS9kaWN0LycgKyBpZCArICcuZnJhZyc7XG4gICAgICAgIHhoci5nZXQodXJsLCAoZXJyb3IsIHJlcywgYm9keSkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZG93bmxvYWRpbmcgJywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3Qgc2FuZGJveCA9IG5ldyBHbHNsQ2FudmFzKHRoaXMuY2FudmFzKTtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZ2xzbEdhbGxlcnlfY2FudmFzJyk7XG4gICAgICAgICAgICBzYW5kYm94LmxvYWQoYm9keSk7XG4gICAgICAgICAgICB0aGlzLnNldENvZGUoYm9keSlcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbG9hZCAoY29kZSkge1xuICAgICAgICB0aGlzLnNldENvZGUoY29kZSk7XG4gICAgICAgIHdpbmRvdy5nbHNsR2FsbGVyeV9jYW52YXMubG9hZChjb2RlKTtcbiAgICAgICAgd2luZG93Lmdsc2xHYWxsZXJ5X2NhbnZhcy5jYW52YXMuc3R5bGUuaGVpZ2h0ID0gdGhpcy5pbWcub2Zmc2V0SGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgdGhpcy5saW5rLmFwcGVuZENoaWxkKHdpbmRvdy5nbHNsR2FsbGVyeV9jYW52YXMuY2FudmFzKTtcbiAgICB9XG5cbiAgICBzZXRDb2RlIChjb2RlKSB7XG4gICAgICAgIHRoaXMuc291cmNlID0gY29kZTtcblxuICAgICAgICBpZiAoIXRoaXMuYXV0aG9yICYmIHRoaXMub3B0aW9ucy5zaG93QXV0aG9yKSB7XG4gICAgICAgICAgICB0aGlzLmF1dGhvciA9IHRoaXMuZ2V0QXV0aG9yKCk7XG4gICAgICAgICAgICAvLyBpZiAodGhpcy5hdXRob3IgIT09ICd1bmtub3duJykge1xuICAgICAgICAgICAgICAgIGxldCBhdXRob3JFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgICAgICBhdXRob3JFbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2dsc2xHYWxsZXJ5X2xhYmVsIGdsc2xHYWxsZXJ5X2F1dGhvcicpO1xuICAgICAgICAgICAgICAgIGF1dGhvckVsLmlubmVySFRNTCA9IHRoaXMuYXV0aG9yO1xuICAgICAgICAgICAgICAgIHRoaXMuY3JlZGl0cy5hcHBlbmRDaGlsZChhdXRob3JFbCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jcmVkaXRzLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMudGl0bGUgJiYgdGhpcy5vcHRpb25zLnNob3dUaXRsZSkge1xuICAgICAgICAgICAgdGhpcy50aXRsZSA9IHRoaXMuZ2V0VGl0bGUoKTtcbiAgICAgICAgICAgIC8vIGlmICh0aGlzLnRpdGxlICE9PSAndW5rbm93bicpIHtcbiAgICAgICAgICAgICAgICBsZXQgdGl0bGVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgICAgICB0aXRsZUVsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZ2xzbEdhbGxlcnlfbGFiZWwgZ2xzbEdhbGxlcnlfdGl0bGUnKTtcbiAgICAgICAgICAgICAgICB0aXRsZUVsLmlubmVySFRNTCA9IHRoaXMudGl0bGU7XG4gICAgICAgICAgICAgICAgdGhpcy5jcmVkaXRzLmFwcGVuZENoaWxkKHRpdGxlRWwpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3JlZGl0cy5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0Q29kZSAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNvdXJjZTtcbiAgICB9XG5cbiAgICBnZXRUaXRsZSgpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMuc291cmNlLm1hdGNoKC9cXC9cXC9cXHMqW1R8dF1pdGxlXFxzKjpcXHMqKFtcXHd8XFxzfFxcQHxcXCh8XFwpfFxcLXxcXF9dKikvaSk7XG4gICAgICAgIGlmIChyZXN1bHQgJiYgIShyZXN1bHRbMV0gPT09ICcgJyB8fCByZXN1bHRbMV0gPT09ICcnKSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdFsxXS5yZXBsYWNlKC8oXFxyXFxufFxcbnxcXHIpL2dtLCAnJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gJ3VudGl0bGVkJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEF1dGhvcigpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMuc291cmNlLm1hdGNoKC9cXC9cXC9cXHMqW0F8YV11dGhvclxccypbXFw6XT9cXHMqKFtcXHd8XFxzfFxcQHxcXCh8XFwpfFxcLXxcXF9dKikvaSk7XG4gICAgICAgIGlmIChyZXN1bHQgJiYgIShyZXN1bHRbMV0gPT09ICcgJyB8fCByZXN1bHRbMV0gPT09ICcnKSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdFsxXS5yZXBsYWNlKC8oXFxyXFxufFxcbnxcXHIpL2dtLCAnJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gJ2Fub255bW91cyc7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGluaXRDYW52YXMoKSB7XG4gICAgaWYgKCF3aW5kb3cuZ2xzbEdhbGxlcnlfY2FudmFzKSB7XG4gICAgICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgY2FudmFzLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZ2xzbEdhbGxlcnlfY2FudmFzJyk7XG4gICAgICAgIGNhbnZhcy5zdHlsZS53aWR0aCA9ICcyNTBweCc7XG4gICAgICAgIGNhbnZhcy5zdHlsZS5oZWlnaHQgPSAnMjUwcHgnO1xuICAgICAgICBjYW52YXMud2lkdGggPSAnMjUwcHgnO1xuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gJzI1MHB4JztcbiAgICAgICAgd2luZG93Lmdsc2xHYWxsZXJ5X2NhbnZhcyA9IG5ldyBHbHNsQ2FudmFzKGNhbnZhcyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVNb3VzZUVudGVyIChpdGVtKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2phbW9uJywgaXRlbSlcbiAgICBpbml0Q2FudmFzKCk7XG5cbiAgICBpZiAoaXRlbS5nZXRDb2RlKCkpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2dldCcsIGl0ZW0uZ2V0Q29kZSgpKVxuICAgICAgICBpdGVtLmxvYWQoaXRlbS5nZXRDb2RlKCkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIHVybCA9ICcnO1xuICAgICAgICBpZiAoaXRlbS5pZC5tYXRjaCgvXFxkXFxkXFwvLiovKSkge1xuICAgICAgICAgICAgdXJsID0gJy9waGF1LycgKyBpdGVtLmlkICsgJy5mcmFnJztcbiAgICAgICAgfVxuXG4gICAgICAgIHhoci5nZXQodXJsLCAoZXJyb3IsIHJlcywgYm9keSkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZG93bmxvYWRpbmcgJywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGl0ZW0ubG9hZChib2R5KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVNb3VzZUxlYXZlIChpdGVtKSB7XG4gICAgaW5pdENhbnZhcygpO1xuXG4gICAgaWYgKGl0ZW0uZWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZ2xzbEdhbGxlcnlfY2FudmFzJykgPiAwKSB7XG4gICAgICAgIC8vIFJlbW92ZSBnbHNsQ2FudmFzIGluc3RhbmNlIGZyb20gaXRlbVxuICAgICAgICBpdGVtLmVsLnJlbW92ZUNoaWxkKHdpbmRvdy5nbHNsR2FsbGVyeV9jYW52YXMuY2FudmFzKTtcbiAgICB9XG59XG4iLCIvKlxuVGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cbkNvcHlyaWdodCAoYykgMjAxNiBQYXRyaWNpbyBHb256YWxleiBWaXZvICggaHR0cDovL3d3dy5wYXRyaWNpb2dvbnphbGV6dml2by5jb20gKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mXG50aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSAnU29mdHdhcmUnKSwgdG8gZGVhbCBpblxudGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0b1xudXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2ZcbnRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbyxcbnN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbmNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCAnQVMgSVMnLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5JTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTU1xuRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SXG5DT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVJcbklOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOXG5DT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuaW1wb3J0IEdhbGxlcnlJdGVtIGZyb20gJ2FwcC9jb3JlL0dhbGxlcnlJdGVtJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2xzbEdhbGxlcnkge1xuICAgIGNvbnN0cnVjdG9yIChzZWxlY3Rvciwgb3B0aW9ucykge1xuICAgICAgICBpZiAodHlwZW9mIHNlbGVjdG9yID09PSAnb2JqZWN0JyAmJiBzZWxlY3Rvci5ub2RlVHlwZSAmJiBzZWxlY3Rvci5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXIgPSBzZWxlY3RvcjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2Ygc2VsZWN0b3IgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yLCB0eXBlICcgKyB0eXBlb2Ygc2VsZWN0b3IgKyAnIG9mICcgKyBzZWxlY3RvciArICcgaXMgdW5rbm93bicpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5zaG93QXV0aG9yKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuc2hvd0F1dGhvciA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5zaG93VGl0bGUpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5zaG93VGl0bGUgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLm9wdGlvbnMuaG92ZXJQcmV2aWV3KSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuaG92ZXJQcmV2aWV3ID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5vcHRpb25zLm9wZW5GcmFtZUljb24pIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5vcGVuRnJhbWVJY29uID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5vcHRpb25zLmNsaWNrUnVuKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuY2xpY2tSdW4gPSAncGxheWVyJztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXRlbXMgPSBbXTtcblxuICAgICAgICBpZiAoc2VsZWN0b3IuaGFzQXR0cmlidXRlKCdkYXRhLXByb3BlcnRpZXMnKSkge1xuICAgICAgICAgICAgbGV0IHByb3AgPSBzZWxlY3Rvci5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvcGVydGllcycpLnNwbGl0KCcsJyk7XG4gICAgICAgICAgICBmb3IgKGxldCBpIGluIHByb3ApIHtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWVzID0gcHJvcFtpXS5zcGxpdCgnOicpO1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9uc1t2YWx1ZXNbMF1dID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodmFsdWVzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnNbdmFsdWVzWzBdXSA9ICh2YWx1ZXNbMV0gPT09ICd0cnVlJyB8fCB2YWx1ZXNbMV0gPT09ICdmYWxzZScpID8gKHZhbHVlc1sxXSA9PT0gJ3RydWUnKSA6IHZhbHVlc1sxXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VsZWN0b3IuaGFzQXR0cmlidXRlKCdkYXRhJykpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkSXRlbXMoc2VsZWN0b3IuZ2V0QXR0cmlidXRlKCdkYXRhJykpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5sb2dzKSB7XG4gICAgICAgICAgICB0aGlzLmFkZEl0ZW1zKHRoaXMub3B0aW9ucy5sb2dzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGFkZEl0ZW0gKGxvZykge1xuICAgICAgICBpZiAodHlwZW9mIGxvZyA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGxvZyA9IGxvZy50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXRlbXMucHVzaChuZXcgR2FsbGVyeUl0ZW0obG9nLCB0aGlzLCB0aGlzLm9wdGlvbnMpKTtcbiAgICB9XG5cbiAgICBhZGRJdGVtcyAobG9ncykge1xuICAgICAgICBpZiAodHlwZW9mIGxvZ3MgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBsb2dzID0gbG9ncy5zcGxpdCgnLCcpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgaW4gbG9ncykge1xuICAgICAgICAgICAgdGhpcy5hZGRJdGVtKGxvZ3NbaV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmVyc2lvbigpIHtcbiAgICAgICAgcmV0dXJuICcwLjAuNic7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnbHNsR2FsbGVyeUxvYWRBbGwoKSB7XG4gICAgaWYgKCF3aW5kb3cuR2xzbEdhbGxlcnkpIHtcbiAgICAgICAgd2luZG93Lkdsc2xHYWxsZXJ5ID0gR2xzbEdhbGxlcnk7XG4gICAgfVxuXG4gICAgdmFyIGxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdnbHNsR2FsbGVyeScpO1xuICAgIGlmIChsaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgd2luZG93Lmdsc2xHYWxsZXJpZXMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgZ2FsbGVyeSA9IG5ldyBHbHNsR2FsbGVyeShsaXN0W2ldKTtcbiAgICAgICAgICAgIHdpbmRvdy5nbHNsR2FsbGVyaWVzLnB1c2goZ2FsbGVyeSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgIGdsc2xHYWxsZXJ5TG9hZEFsbCgpO1xufSk7XG4iXX0=
