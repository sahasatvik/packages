/*! Bundled license information:

shallow-clone/index.js:
  (*!
   * shallow-clone <https://github.com/jonschlinkert/shallow-clone>
   *
   * Copyright (c) 2015-present, Jon Schlinkert.
   * Released under the MIT License.
   *)

isobject/index.js:
  (*!
   * isobject <https://github.com/jonschlinkert/isobject>
   *
   * Copyright (c) 2014-2017, Jon Schlinkert.
   * Released under the MIT License.
   *)

is-plain-object/index.js:
  (*!
   * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
   *
   * Copyright (c) 2014-2017, Jon Schlinkert.
   * Released under the MIT License.
   *)

punycode/punycode.js:
  (*! https://mths.be/punycode v1.4.1 by @mathias *)

ieee754/index.js:
  (*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)

buffer/index.js:
  (*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   *)

safe-buffer/index.js:
  (*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> *)

sax/lib/sax.js:
  (*! http://mths.be/fromcodepoint v0.1.0 by @mathias *)
*/csrc.dataset=[];var rslt=document.createElement("svg");function PintoraRender(e,t="default",A="Source Code Pro, sans-serif"){csrc.dataset.theme=t;var n=config;if(n.core.defaultFontFamily=A,configApi.setConfig(n),runtime_default.setConfig(n),console=new ConsoleStub,csrc.innerText=e,pintoraStandalone.renderContentOf(csrc,{resultContainer:rslt}),""===rslt.innerHTML)throw errorString="\n "+String(console.warnHistory.slice(-1)),new Error(errorString);return rslt.firstChild.setAttribute("xmlns","http://www.w3.org/2000/svg"),rslt.innerHTML}csrc.dataset.renderer,csrc.dataset.theme="default";