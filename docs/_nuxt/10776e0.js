(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{233:function(n,t,e){var content=e(235);"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(85).default)("f6d63496",content,!0,{sourceMap:!1})},234:function(n,t,e){"use strict";var o=e(233);e.n(o).a},235:function(n,t,e){(t=e(84)(!1)).push([n.i,'*{-webkit-user-select:none}:focus{outline:none!important}body,html{margin:0;padding:0;overflow:hidden}.container{pointer-events:none}.title{margin:32px 0 0 32px;padding:0;line-height:1;font-family:"Lato",sans-serif;font-weight:400;font-size:16px;letter-spacing:.4em}.title,pre{color:#fff;pointer-events:none}pre{padding:12px;font-size:12px;margin:32px;background:rgba(0,0,0,.2);border-radius:8px}code{font-family:"Lato",sans-serif;font-weight:100;pointer-events:none}',""]),n.exports=t},236:function(n,t,e){"use strict";e.r(t);var o={},r=(e(234),e(30)),component=Object(r.a)(o,(function(){var n=this.$createElement;this._self._c;return this._m(0)}),[function(){var n=this.$createElement,t=this._self._c||n;return t("div",{staticClass:"container"},[t("div",[t("h1",{staticClass:"title"},[this._v("WebGLUtils - Prototyping BASE.")]),this._v(" "),t("pre",[t("code",[this._v("var _s = Math.random() + 0.5;\nTweener.addTween( _mesh,\n{\n  position: new THREE.Vector3( (Math.random()-0.5)*200,(Math.random()-0.5)*200,(Math.random()-0.5)*200  ),\n  rotation: new THREE.Vector3( (Math.random()-0.5)*Math.PI*2.0, (Math.random()-0.5)*Math.PI*2.0, (Math.random()-0.5)*Math.PI*2.0 ),\n  scale: new THREE.Vector3( _s, _s, _s ),\n  color: new THREE.Color( Math.random(), Math.random(), Math.random() ),\n  opacity: Math.random()*0.5 + .25,\n\n  transition: 'easeInOutExpo',\n  duration: Math.random()*2+1,\n  delay: 0.2,\n  onComplete: (e) => {\n    add( _mesh )\n    console.log( 'static.');\n  }\n});")]),this._v("\n      ")])])])}],!1,null,null,null);t.default=component.exports}}]);