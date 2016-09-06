/*!-----------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.6.1(ada2ad77ff51ca8550cd47bdaa4520df66c9519d)
 * Released under the MIT license
 * https://github.com/Microsoft/vscode/blob/master/LICENSE.txt
 *-----------------------------------------------------------*/
(function(){var e=["vs/editor/common/services/modeService","vs/languages/php/common/php","exports","vs/base/common/objects","vs/editor/common/modes","vs/editor/common/modes/abstractMode","vs/editor/common/modes/abstractState","require","vs/editor/common/modes/languageConfigurationRegistry","vs/editor/common/modes/supports/tokenizationSupport","vs/editor/common/modes/supports/suggestSupport","vs/editor/common/services/editorWorkerService","vs/platform/configuration/common/configuration","vs/editor/common/services/compatWorkerService"],t=function(t){for(var n=[],r=0,o=t.length;r<o;r++)n[r]=e[t[r]];return n},n=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},r=this&&this.__decorate||function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},o=this&&this.__param||function(e,t){return function(n,r){t(n,r,e)}};define(e[1],t([7,2,3,4,5,6,0,8,9,10,11,12,13]),function(e,t,i,s,a,p,c,u,l,f,h,g,d){"use strict";var m=function(){for(var e=[{tokenType:"delimiter.bracket.php",open:"{",close:"}"},{tokenType:"delimiter.array.php",open:"[",close:"]"},{tokenType:"delimiter.parenthesis.php",open:"(",close:")"}],t=Object.create(null),n=0;n<e.length;n++){var r=e[n];t[r.open]={tokenType:r.tokenType},t[r.close]={tokenType:r.tokenType}}return{stringIsBracket:function(e){return!!t[e]},tokenTypeFromString:function(e){return t[e].tokenType}}}(),y="+-*%&|^~!=<>(){}[]/?;:.,@",S="+-*/%&|^~!=<>(){}[]\"'\\/?;:.,#",v="\t ",k=i.createKeywordMatcher(["abstract","and","array","as","break","callable","case","catch","cfunction","class","clone","const","continue","declare","default","do","else","elseif","enddeclare","endfor","endforeach","endif","endswitch","endwhile","extends","false","final","for","foreach","function","global","goto","if","implements","interface","instanceof","insteadof","namespace","new","null","object","old_function","or","private","protected","public","resource","static","switch","throw","trait","try","true","use","var","while","xor","die","echo","empty","exit","eval","include","include_once","isset","list","require","require_once","return","print","unset","yield","__construct"]),_=i.createKeywordMatcher(["__CLASS__","__DIR__","__FILE__","__LINE__","__NAMESPACE__","__METHOD__","__FUNCTION__","__TRAIT__"]),x=i.createKeywordMatcher(["$GLOBALS","$_SERVER","$_GET","$_POST","$_FILES","$_REQUEST","$_SESSION","$_ENV","$_COOKIE","$php_errormsg","$HTTP_RAW_POST_DATA","$http_response_header","$argc","$argv"]),w=function(e){return y.indexOf(e)>-1},T=function(e){return"$"===e[0]},b=function(e){function t(t,n,r,o){void 0===o&&(o=""),e.call(this,t),this.name=n,this.parent=r,this.whitespaceTokenType=o}return n(t,e),t.prototype.equals=function(n){return n instanceof t&&(e.prototype.equals.call(this,n)&&this.name===n.name&&this.whitespaceTokenType===n.whitespaceTokenType&&p.AbstractState.safeEquals(this.parent,n.parent))},t.prototype.tokenize=function(e){return e.setTokenRules(S,v),e.skipWhitespace().length>0?{type:this.whitespaceTokenType}:this.stateTokenize(e)},t.prototype.stateTokenize=function(e){throw new Error("To be implemented")},t}(p.AbstractState);t.PHPState=b;var C=function(e){function t(t,n,r,o){void 0===o&&(o=!0),e.call(this,t,"string",n,"string.php"),this.delimiter=r,this.isAtBeginning=o}return n(t,e),t.prototype.makeClone=function(){return new t(this.getMode(),p.AbstractState.safeClone(this.parent),this.delimiter,this.isAtBeginning)},t.prototype.equals=function(n){return n instanceof t&&(e.prototype.equals.call(this,n)&&this.delimiter===n.delimiter&&this.isAtBeginning===n.isAtBeginning)},t.prototype.tokenize=function(e){var t=this.isAtBeginning?1:0;for(this.isAtBeginning=!1;!e.eos();){var n=e.next();if("\\"===n){if(0!==t)return e.goBack(1),{type:"string.php"};if(e.eos())return{type:"string.php",nextState:this.parent};e.next()}else if(n===this.delimiter)return{type:"string.php",nextState:this.parent};t+=1}return{type:"string.php"}},t}(b);t.PHPString=C;var M=function(e){function t(t,n,r){e.call(this,t,"number",n),this.firstDigit=r}return n(t,e),t.prototype.makeClone=function(){return new t(this.getMode(),p.AbstractState.safeClone(this.parent),this.firstDigit)},t.prototype.equals=function(n){return n instanceof t&&(e.prototype.equals.call(this,n)&&this.firstDigit===n.firstDigit)},t.prototype.tokenize=function(e){var t=this.firstDigit,n=10,r=!1,o=!1;if("0"===t&&!e.eos()){if(t=e.peek(),"x"===t.toLowerCase())n=16;else if("b"===t.toLowerCase())n=2;else if("."===t)n=10;else{if(!a.isDigit(t,8))return{type:"number.php",nextState:this.parent};n=8}e.next()}for(;!e.eos();)if(t=e.peek(),a.isDigit(t,n))e.next();else if(10===n)if("."!==t||o||r){if("e"!==t||o)break;o=!0,e.next(),e.eos()||"-"!==e.peek()||e.next()}else r=!0,e.next();else{if(8!==n||!a.isDigit(t,10))break;n=10,e.next()}var i="number";return 16===n?i+=".hex":8===n?i+=".octal":2===n&&(i+=".binary"),{type:i+".php",nextState:this.parent}},t}(b);t.PHPNumber=M;var I=function(e){function t(t,n){e.call(this,t,"comment",n,"comment.php")}return n(t,e),t.prototype.makeClone=function(){return new P(this.getMode(),p.AbstractState.safeClone(this.parent))},t.prototype.equals=function(n){return n instanceof t&&e.prototype.equals.call(this,n)},t.prototype.tokenize=function(e){for(;!e.eos();){var t=e.next();if("?"===t&&!e.eos()&&">"===e.peek())return e.goBack(1),{type:"comment.php",nextState:this.parent}}return{type:"comment.php",nextState:this.parent}},t}(b);t.PHPLineComment=I;var P=function(e){function t(t,n){e.call(this,t,"comment",n,"comment.php")}return n(t,e),t.prototype.makeClone=function(){return new t(this.getMode(),p.AbstractState.safeClone(this.parent))},t.prototype.equals=function(n){return n instanceof t&&e.prototype.equals.call(this,n)},t.prototype.tokenize=function(e){for(;!e.eos();){var t=e.next();if("*"===t&&!e.eos()&&!e.peekWhitespace()&&"/"===e.peek())return e.next(),{type:"comment.php",nextState:this.parent}}return{type:"comment.php"}},t}(b);t.PHPDocComment=P;var A=function(e){function t(t,n){e.call(this,t,"expression",n)}return n(t,e),t.prototype.makeClone=function(){return new t(this.getMode(),p.AbstractState.safeClone(this.parent))},t.prototype.equals=function(n){return n instanceof t&&e.prototype.equals.call(this,n)},t.prototype.stateTokenize=function(e){if(a.isDigit(e.peek(),10))return{nextState:new M(this.getMode(),this,e.next())};if(e.advanceIfString("?>").length)return{type:"metatag.php",nextState:this.parent};var t=e.nextToken();if(k(t.toString().toLowerCase()))return{type:"keyword.php"};if(_(t))return{type:"constant.php"};if(x(t))return{type:"variable.predefined.php"};if(T(t))return{type:"variable.php"};if("/"===t){if(!e.eos()&&!e.peekWhitespace())switch(e.peekToken()){case"/":return{nextState:new I(this.getMode(),this)};case"*":return e.nextToken(),{nextState:new P(this.getMode(),this)}}}else{if("#"===t)return{nextState:new I(this.getMode(),this)};if('"'===t||"'"===t)return{nextState:new C(this.getMode(),this,t)};if(m.stringIsBracket(t))return{type:m.tokenTypeFromString(t)};if(w(t))return{type:"delimiter.php"}}return{type:""}},t}(b);t.PHPStatement=A;var q=function(e){function t(t,n){e.call(this,t,"plain",n)}return n(t,e),t.prototype.makeClone=function(){return new t(this.getMode(),p.AbstractState.safeClone(this.parent))},t.prototype.equals=function(n){return n instanceof t&&e.prototype.equals.call(this,n)},t.prototype.stateTokenize=function(e){return e.advanceIfStringCaseInsensitive("<?php").length||e.advanceIfString("<?=").length||e.advanceIfString("<%=").length||e.advanceIfString("<?").length||e.advanceIfString("<%").length?{type:"metatag.php",nextState:new A(this.getMode(),new E(this.getMode(),this.parent))}:(e.next(),{type:""})},t}(b);t.PHPPlain=q;var E=function(e){function t(t,n){e.call(this,t,"enterHTML",n)}return n(t,e),t.prototype.makeClone=function(){return new t(this.getMode(),p.AbstractState.safeClone(this.parent))},t.prototype.equals=function(n){return n instanceof t&&e.prototype.equals.call(this,n)},t}(b);t.PHPEnterHTMLState=E;var N=function(e){function t(n,r,o,i,a){e.call(this,n.id,a),this.modeService=r,this.tokenizationSupport=new l.TokenizationSupport(this,this,(!0)),u.LanguageConfigurationRegistry.register(this.getId(),t.LANG_CONFIG),i&&s.SuggestRegistry.register(this.getId(),new f.TextualSuggestSupport(i,o),!0)}return n(t,e),t.prototype.getInitialState=function(){var e=this.modeService.getMode("text/html"),t=e.tokenizationSupport.getInitialState();return t.setStateData(new E(this,null)),t},t.prototype.enterNestedMode=function(e){return e instanceof E},t.prototype.getNestedModeInitialState=function(e){var t=e.parent;return e.parent=null,{state:t,missingModePromise:null}},t.prototype.getLeavingNestedModeData=function(e,t){var n=/<\?/i.exec(e);return null!==n?{nestedModeBuffer:e.substring(0,n.index),bufferAfterNestedMode:e.substring(n.index),stateAfterNestedMode:new q(this,null)}:null},t.prototype.onReturningFromNestedMode=function(e,t){e.parent=t},t.LANG_CONFIG={wordPattern:a.createWordRegExp("$_"),comments:{lineComment:"//",blockComment:["/*","*/"]},brackets:[["{","}"],["[","]"],["(",")"]],autoClosingPairs:[{open:"{",close:"}",notIn:["string.php"]},{open:"[",close:"]",notIn:["string.php"]},{open:"(",close:")",notIn:["string.php"]},{open:'"',close:'"',notIn:["string.php"]},{open:"'",close:"'",notIn:["string.php"]}]},t=r([o(1,c.IModeService),o(2,g.IConfigurationService),o(3,h.IEditorWorkerService),o(4,d.ICompatWorkerService)],t)}(a.CompatMode);t.PHPMode=N})}).call(this);
//# sourceMappingURL=../../../../../min-maps/vs/languages/php/common/php.js.map