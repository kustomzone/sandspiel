(window.webpackJsonp=window.webpackJsonp||[]).push([[1],[,function(e,n,t){"use strict";t.r(n);var r=t(2),i=t(3),o=t(6),a=t(7),u=t(8),c=t(4),s=t.n(c),l=t(10),v=t.n(l);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function m(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,n,t){return n&&m(e.prototype,n),t&&m(e,t),e}function x(e,n){return!n||"object"!==f(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,n){return(g=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var y=document.getElementById("sand-canvas"),E=function(e,n){return Math.sqrt(Math.pow(e.clientX-n.clientX,2)+Math.pow(e.clientY-n.clientY,2),2)},T=function(e){var n=function(e){return Math.sqrt(Math.pow(e.clientX,2)+Math.pow(e.clientY,2),2)}(e);return{clientX:e.clientX/n,clientY:e.clientY/n}},w=function(e,n){return{clientX:e.clientX*n,clientY:e.clientY*n}},_=function(e,n){return{clientX:e.clientX+n.clientX,clientY:e.clientY+n.clientY}},R=function(e,n){return{clientX:e.clientX-n.clientX,clientY:e.clientY-n.clientY}},b=!1,D=null,S=null;function U(e){S=window.setInterval(function(){return F(e)},100);var n={clientX:e.clientX,clientY:e.clientY};if(b){var t=L[window.UI.state.size],r=0;if(F(n),D)for(;E(n,D)>t/2;){var i=E(n,D);if(n=_(n,w(T(R(D,e)),Math.min(t/2,i))),++r>1e3)break;F(n)}D=e}}y.addEventListener("mousedown",function(e){e.preventDefault(),b=!0,clearInterval(S),S=window.setInterval(function(){return F(e)},100),F(e),D=e}),y.addEventListener("mouseup",function(e){e.preventDefault(),D=null,clearInterval(S),b=!1}),y.addEventListener("mousemove",function(e){clearInterval(S),U(e)}),y.addEventListener("mouseleave",function(e){clearInterval(S),D=null}),y.addEventListener("touchstart",function(e){e.preventDefault(),b=!0,D=e,A(e)}),y.addEventListener("touchend",function(e){e.preventDefault(),D=null,b=!1,clearInterval(S)}),y.addEventListener("touchmove",function(e){e.preventDefault(),clearInterval(S),A(e)});var A=function(e){var n=Array.from(e.touches);1==n.length?U(n[0]):n.forEach(F)},F=function(e){if(b){var n=y.getBoundingClientRect(),t=y.width/window.devicePixelRatio/n.width,r=y.height/window.devicePixelRatio/n.height,i=(e.clientX-n.left)*t,o=(e.clientY-n.top)*r,a=Math.min(Math.floor(i),ne-1),u=Math.min(Math.floor(o),te-1);window.UI.state.selectedElement<0||ee.paint(a,u,L[window.UI.state.size],window.UI.state.selectedElement)}},L=[2,5,10,18,30,45],I=function(e){function n(e){var t;return d(this,n),(t=x(this,h(n).call(this,e))).state={paused:!1,size:2,selectedElement:r.a.Water},t}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&g(e,n)}(n,s.a.Component),p(n,[{key:"playPause",value:function(){this.state.paused?Te():(cancelAnimationFrame(window.animationId),window.animationId=null),this.setState({paused:!this.state.paused})}},{key:"setSize",value:function(e,n){e.preventDefault(),this.setState({size:n})}},{key:"reset",value:function(){window.confirm("Reset?")&&ee.reset()}},{key:"render",value:function(){var e=this,n=this.state,t=(n.size,n.paused),i=n.selectedElement;return s.a.createElement(s.a.Fragment,null,s.a.createElement("button",{onClick:function(){return e.reset()}},"Reset"),s.a.createElement("button",{onClick:function(){return e.playPause()}},t?"▶︎":s.a.createElement("svg",{height:"10",width:"10",id:"d",viewBox:"0 0 300 300"},s.a.createElement("polygon",{id:"shape1",points:"0,0 110,0 110,300 0,300"}),s.a.createElement("polygon",{id:"shape2",points:"190,0 300,0 300,300 190,300"}))),t&&s.a.createElement("button",{onClick:function(){return ee.tick()}},"Tick"),s.a.createElement("span",null,L.map(function(n,t){return s.a.createElement("button",{key:t,className:t==e.state.size?"selected":"",onClick:function(n){return e.setSize(n,t)},style:{padding:"0px"}},s.a.createElement("svg",{height:"24",width:"24",id:"d",viewBox:"0 0 100 100"},s.a.createElement("circle",{cx:"50",cy:"50",r:2+n})))})),Object.keys(r.a).map(function(n){return function(e,n,t){var i=r.a[e];return s.a.createElement("button",{className:i==n?"selected":"",key:e,onClick:function(){t(i)}},"  ",e,"  ")}(n,i,function(n){return e.setState({selectedElement:n})})}),s.a.createElement("button",{className:-1==i?"selected":"",key:name,onClick:function(){e.setState({selectedElement:-1})}},"Wind"))}}]),n}();v.a.render(s.a.createElement(I,{ref:function(e){window.UI=e}}),document.getElementById("ui"));var P=new(function(){function e(){d(this,e),this.fps=document.getElementById("fps"),this.frames=[],this.lastFrameTimeStamp=performance.now()}return p(e,[{key:"render",value:function(){var e=performance.now(),n=e-this.lastFrameTimeStamp;this.lastFrameTimeStamp=e;var t=1/n*1e3;this.frames.push(t),this.frames.length>30&&this.frames.shift();for(var r=1/0,i=-1/0,o=0,a=0;a<this.frames.length;a++)o+=this.frames[a],r=Math.min(this.frames[a],r),i=Math.max(this.frames[a],i);var u=o/this.frames.length;this.fps.textContent="FPS:".concat(Math.round(u))}}]),e}()),C=t(14),X=t(15),B=t(16),z=t(17),k=t(18),M=t(19),N=t(20),G=t(21),O=t(22),Y=t(23),V=t(24),W=t(25),H=t(26);var j=4;function q(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}window.devicePixelRatio>1&&(j=3);var K,J,Q=document.getElementById("fluid-canvas"),Z=document.getElementById("sand-canvas"),$=[1,1,.8];t.d(n,"renderLoop",function(){return Te}),t.d(n,"canvas",function(){return re}),t.d(n,"width",function(){return ne}),t.d(n,"height",function(){return te}),t.d(n,"universe",function(){return ee}),t.d(n,"ratio",function(){return j}),window.safari&&(history.pushState(null,null,location.href),window.onpopstate=function(e){history.go(1)}),J=!1,K=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(K)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(K.substr(0,4)))&&(J=!0),J&&(window.onbeforeunload=function(){return!0});var ee=r.b.new(300,300),ne=ee.width(),te=ee.height(),re=document.getElementById("sand-canvas"),ie=document.getElementById("fluid-canvas");re.height=te*window.devicePixelRatio,re.width=ne*window.devicePixelRatio,document.getElementById("background").addEventListener("touchmove",function(e){e.preventDefault()});var oe=document.getElementById("ui"),ae=window.innerWidth,ue=oe.offsetHeight,ce="";ae>window.innerHeight-ue?ae-window.innerHeight<225?(ce="height: ".concat(window.innerHeight,"px; margin:3px"),oe.style="width: ".concat(ae-window.innerHeight-11,"px; margin: 3px;")):(ce="height: ".concat(window.innerHeight,"px"),oe.style="width: ".concat((ae-window.innerHeight)/2-7,"px; margin: 3px;")):ce="width: ".concat(ae,"px; bottom:3px;"),re.style=ce,ie.style=ce;var se,le,ve,fe,de,me,pe,xe,he,ge,ye,Ee=function(e){var n=e.universe;Q.width=n.width(),Q.height=n.height();var t,r={TEXTURE_DOWNSAMPLE:0,DENSITY_DISSIPATION:.98,VELOCITY_DISSIPATION:.99,PRESSURE_DISSIPATION:.8,PRESSURE_ITERATIONS:25,CURL:30,SPLAT_RADIUS:.005},o=[],a=[],u=function(e){var n,t,r={alpha:!1,depth:!1,stencil:!1,antialias:!1,preserveDrawingBuffer:!1},i=e.getContext("webgl2",r),o=!!i;o||(i=e.getContext("webgl",r)||e.getContext("experimental-webgl",r)),o?(i.getExtension("EXT_color_buffer_float"),t=i.getExtension("OES_texture_float_linear")):(n=i.getExtension("OES_texture_half_float"),t=i.getExtension("OES_texture_half_float_linear")),i.clearColor(0,0,0,0);var a,u,c,s=o?i.HALF_FLOAT:n.HALF_FLOAT_OES;return o?(a=_(i,i.RGBA16F,i.RGBA,s),u=_(i,i.RG16F,i.RG,s),c=_(i,i.R16F,i.RED,s)):(a=_(i,i.RGBA,i.RGBA,s),u=_(i,i.RGBA,i.RGBA,s),c=_(i,i.RGBA,i.RGBA,s)),{gl:i,ext:{formatRGBA:a,formatRG:u,formatR:c,halfFloatTexType:s,supportLinearFiltering:t}}}(Q),c=u.gl,s=u.ext,l=function(e){function n(n,t){var r=e.createShader(n);if(e.shaderSource(r,t),e.compileShader(r),!e.getShaderParameter(r,e.COMPILE_STATUS))throw e.getShaderInfoLog(r);return r}return{baseVertexShader:n(e.VERTEX_SHADER,X),clearShader:n(e.FRAGMENT_SHADER,B),displayShader:n(e.FRAGMENT_SHADER,z),splatShader:n(e.FRAGMENT_SHADER,k),advectionManualFilteringShader:n(e.FRAGMENT_SHADER,M),advectionShader:n(e.FRAGMENT_SHADER,N),divergenceShader:n(e.FRAGMENT_SHADER,G),curlShader:n(e.FRAGMENT_SHADER,O),vorticityShader:n(e.FRAGMENT_SHADER,Y),pressureShader:n(e.FRAGMENT_SHADER,V),gradientSubtractShader:n(e.FRAGMENT_SHADER,W),velocityOutShader:n(e.FRAGMENT_SHADER,H)}}(c),v=l.baseVertexShader,f=l.clearShader,d=l.displayShader,m=l.splatShader,p=l.advectionManualFilteringShader,x=l.advectionShader,h=l.divergenceShader,g=l.curlShader,y=l.vorticityShader,E=l.pressureShader,T=l.gradientSubtractShader,w=l.velocityOutShader;function _(e,n,t,r){if(!function(e,n,t,r){var i=e.createTexture();e.bindTexture(e.TEXTURE_2D,i),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texImage2D(e.TEXTURE_2D,0,n,4,4,0,t,r,null);var o=e.createFramebuffer();return e.bindFramebuffer(e.FRAMEBUFFER,o),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,i,0),e.checkFramebufferStatus(e.FRAMEBUFFER)==e.FRAMEBUFFER_COMPLETE}(e,n,t,r))switch(n){case e.R16F:return _(e,e.RG16F,e.RG,r);case e.RG16F:return _(e,e.RGBA16F,e.RGBA,r);default:return null}return{internalFormat:n,format:t}}function R(){this.id=-1,this.x=0,this.y=0,this.dx=0,this.dy=0,this.down=!1,this.moved=!1,this.color=[30,300,30]}(t=new C.a({width:300})).add(r,"TEXTURE_DOWNSAMPLE",{Full:0,Half:1,Quarter:2}).name("resolution").onFinishChange(ce),t.add(r,"DENSITY_DISSIPATION",.9,1).name("density diffusion"),t.add(r,"VELOCITY_DISSIPATION",.9,1).name("velocity diffusion"),t.add(r,"PRESSURE_DISSIPATION",0,1).name("pressure diffusion"),t.add(r,"PRESSURE_ITERATIONS",1,60).name("iterations"),t.add(r,"CURL",0,50).name("vorticity").step(1),t.add(r,"SPLAT_RADIUS",1e-4,.01).name("splat radius"),t.add({fun:function(){a.push(parseInt(20*Math.random())+5)}},"fun").name("Random splats"),t.close(),o.push(new R);var b,D,S,U,A,F,L,I,P,j=function(){function e(n,t){if(function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.uniforms={},this.program=c.createProgram(),c.attachShader(this.program,n),c.attachShader(this.program,t),c.linkProgram(this.program),!c.getProgramParameter(this.program,c.LINK_STATUS))throw c.getProgramInfoLog(this.program);for(var r=c.getProgramParameter(this.program,c.ACTIVE_UNIFORMS),i=0;i<r;i++){var o=c.getActiveUniform(this.program,i).name;this.uniforms[o]=c.getUniformLocation(this.program,o)}}var n,t,r;return n=e,(t=[{key:"bind",value:function(){c.useProgram(this.program)}}])&&q(n.prototype,t),r&&q(n,r),e}();ce();var K=new j(v,f),J=new j(v,d),ee=new j(v,w),ne=new j(v,m),te=new j(v,s.supportLinearFiltering?x:p),re=new j(v,h),ie=new j(v,g),oe=new j(v,y),ae=new j(v,E),ue=new j(v,T);function ce(){b=c.drawingBufferWidth>>r.TEXTURE_DOWNSAMPLE,D=c.drawingBufferHeight>>r.TEXTURE_DOWNSAMPLE;var e=s.halfFloatTexType,n=s.formatRGBA,t=s.formatRG,i=s.formatR;U=le(0,b,D,t.internalFormat,t.format,e,s.supportLinearFiltering?c.LINEAR:c.NEAREST),S=le(2,b,D,n.internalFormat,n.format,e,s.supportLinearFiltering?c.LINEAR:c.NEAREST),L=se(4,b,D,i.internalFormat,i.format,e,c.NEAREST),I=se(5,b,D,i.internalFormat,i.format,e,c.NEAREST),P=le(6,b,D,i.internalFormat,i.format,e,c.NEAREST),F=se(8,b,D,t.internalFormat,t.format,e,s.supportLinearFiltering?c.LINEAR:c.NEAREST),A=se(9,b,D,c.RGBA,c.RGBA,c.UNSIGNED_BYTE,s.supportLinearFiltering?c.LINEAR:c.NEAREST)}function se(e,n,t,r,i,o,a){c.activeTexture(c.TEXTURE0+e);var u=c.createTexture();c.bindTexture(c.TEXTURE_2D,u),c.texParameteri(c.TEXTURE_2D,c.TEXTURE_MIN_FILTER,a),c.texParameteri(c.TEXTURE_2D,c.TEXTURE_MAG_FILTER,a),c.texParameteri(c.TEXTURE_2D,c.TEXTURE_WRAP_S,c.CLAMP_TO_EDGE),c.texParameteri(c.TEXTURE_2D,c.TEXTURE_WRAP_T,c.CLAMP_TO_EDGE),c.texImage2D(c.TEXTURE_2D,0,r,n,t,0,i,o,null);var s=c.createFramebuffer();return c.bindFramebuffer(c.FRAMEBUFFER,s),c.framebufferTexture2D(c.FRAMEBUFFER,c.COLOR_ATTACHMENT0,c.TEXTURE_2D,u,0),c.viewport(0,0,n,t),c.clear(c.COLOR_BUFFER_BIT),[u,s,e]}function le(e,n,t,r,i,o,a){var u=se(e,n,t,r,i,o,a),c=se(e+1,n,t,r,i,o,a);return{get read(){return u},get write(){return c},swap:function(){var e=u;u=c,c=e}}}var ve=(c.bindBuffer(c.ARRAY_BUFFER,c.createBuffer()),c.bufferData(c.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),c.STATIC_DRAW),c.bindBuffer(c.ELEMENT_ARRAY_BUFFER,c.createBuffer()),c.bufferData(c.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,0,2,3]),c.STATIC_DRAW),c.vertexAttribPointer(0,2,c.FLOAT,!1,0,0),c.enableVertexAttribArray(0),function(e){c.bindFramebuffer(c.FRAMEBUFFER,e),c.drawElements(c.TRIANGLES,6,c.UNSIGNED_SHORT,0)}),fe=Date.now(),de=n.width(),me=n.height(),pe=new Uint8Array(i.d.buffer,n.winds(),de*me*4),xe=new Uint8Array(i.d.buffer,n.burns(),de*me*4);function he(e,n,t,r,i){ne.bind();var o=0;c.activeTexture(c.TEXTURE0+o),c.bindTexture(c.TEXTURE_2D,U.read[0]),c.uniform1i(ne.uniforms.uTarget,o++),c.uniform1f(ne.uniforms.aspectRatio,Q.width/Q.height),c.uniform2f(ne.uniforms.point,e/Q.width,1-n/Q.height),c.uniform3f(ne.uniforms.color,t,-r,1),c.uniform1f(ne.uniforms.radius,(window.UI.state.size+1)/700),ve(U.write[1]),U.swap(),c.activeTexture(c.TEXTURE0+o),c.bindTexture(c.TEXTURE_2D,S.read[0]),c.uniform1i(ne.uniforms.uTarget,o++),c.uniform3f(ne.uniforms.color,i[0],i[1],i[2]),ve(S.write[1]),S.swap()}var ge=Z.getBoundingClientRect(),ye=Z.width/window.devicePixelRatio/ge.width,Ee=Z.height/window.devicePixelRatio/ge.height;return Z.addEventListener("mousemove",function(e){var n=(e.clientX-ge.left)*ye,t=(e.clientY-ge.top)*Ee;o[0].moved=o[0].down,o[0].dx=10*(n-o[0].x),o[0].dy=10*(t-o[0].y),o[0].x=n,o[0].y=t}),Z.addEventListener("touchmove",function(e){e.preventDefault();for(var n=e.targetTouches,t=0;t<n.length;t++){var r=o[t];r.moved=r.down;var i=(n[t].clientX-ge.left)*ye,a=(n[t].clientY-ge.top)*Ee;r.dx=10*(i-r.x),r.dy=10*(a-r.y),r.x=i,r.y=a}},!1),Z.addEventListener("mousedown",function(){o[0].down=!0,o[0].color=$}),Z.addEventListener("touchstart",function(e){e.preventDefault();for(var n=e.targetTouches,t=0;t<n.length;t++){t>=o.length&&o.push(new R);var r=(n[t].clientX-ge.left)*ye,i=(n[t].clientY-ge.top)*Ee;o[t].id=n[t].identifier,o[t].down=!0,o[t].x=r,o[t].y=i,o[t].color=$}}),window.addEventListener("mouseup",function(){o[0].down=!1}),window.addEventListener("touchend",function(e){for(var n=e.changedTouches,t=0;t<n.length;t++)for(var r=0;r<o.length;r++)n[t].identifier==o[r].id&&(o[r].down=!1)}),function(){var e=Math.min((Date.now()-fe)/1e3,.016);fe=Date.now(),c.viewport(0,0,b,D),a.length>0&&function(e){for(var n=0;n<e;n++){var t=$,r=Q.width*Math.random(),i=Q.height*Math.random(),o=1e3*(Math.random()-.5),a=1e3*(Math.random()-.5);he(r,i,o,a,t)}}(a),te.bind();var n,t=0;c.activeTexture(c.TEXTURE0+t),c.bindTexture(c.TEXTURE_2D,U.read[0]),c.uniform1i(te.uniforms.uVelocity,t++),c.activeTexture(c.TEXTURE0+t),c.bindTexture(c.TEXTURE_2D,U.read[0]),c.uniform1i(te.uniforms.uSource,t++),c.uniform2f(te.uniforms.texelSize,1/b,1/D),c.uniform1f(te.uniforms.dt,e),c.uniform1f(te.uniforms.dissipation,r.VELOCITY_DISSIPATION),ve(U.write[1]),U.swap(),c.bindTexture(c.TEXTURE_2D,F[0]),c.texImage2D(c.TEXTURE_2D,0,c.RGBA,de,me,0,c.RGBA,c.UNSIGNED_BYTE,xe),t=0,c.activeTexture(c.TEXTURE0+t),c.bindTexture(c.TEXTURE_2D,F[0]),c.uniform1i(te.uniforms.uWind,t++),c.activeTexture(c.TEXTURE0+t),c.bindTexture(c.TEXTURE_2D,U.read[0]),c.uniform1i(te.uniforms.uVelocity,t++),c.activeTexture(c.TEXTURE0+t),c.bindTexture(c.TEXTURE_2D,S.read[0]),c.uniform1i(te.uniforms.uSource,t++),c.uniform1f(te.uniforms.dissipation,r.DENSITY_DISSIPATION),ve(S.write[1]),S.swap();for(var i=0;i<o.length;i++){var u=o[i];u.moved&&window.UI.state.selectedElement<0&&(he(u.x,u.y,u.dx,u.dy,u.color),u.moved=!1)}ie.bind(),t=0,c.activeTexture(c.TEXTURE0+t),c.bindTexture(c.TEXTURE_2D,U.read[0]),c.uniform1i(ie.uniforms.uVelocity,t++),c.uniform2f(ie.uniforms.texelSize,1/b,1/D),ve(I[1]),oe.bind(),t=0,c.activeTexture(c.TEXTURE0+t),c.bindTexture(c.TEXTURE_2D,U.read[0]),c.uniform1i(oe.uniforms.uVelocity,t++),c.activeTexture(c.TEXTURE0+t),c.bindTexture(c.TEXTURE_2D,I[0]),c.uniform1i(oe.uniforms.uCurl,t++),c.uniform2f(oe.uniforms.texelSize,1/b,1/D),c.uniform1f(oe.uniforms.curl,r.CURL),c.uniform1f(oe.uniforms.dt,e),ve(U.write[1]),U.swap(),re.bind(),t=0,c.activeTexture(c.TEXTURE0+t),c.bindTexture(c.TEXTURE_2D,U.read[0]),c.uniform1i(re.uniforms.uVelocity,t++),c.uniform2f(re.uniforms.texelSize,1/b,1/D),ve(L[1]),K.bind(),t=0,c.activeTexture(c.TEXTURE0+t),c.bindTexture(c.TEXTURE_2D,F[0]),c.uniform1i(K.uniforms.uWind,t++),c.activeTexture(c.TEXTURE0+t),c.bindTexture(c.TEXTURE_2D,P.read[0]),c.uniform1i(K.uniforms.uTexture,t++),c.uniform1f(K.uniforms.value,r.PRESSURE_DISSIPATION),ve(P.write[1]),P.swap(),ae.bind(),t=0,c.activeTexture(c.TEXTURE0+t),c.bindTexture(c.TEXTURE_2D,L[0]),c.uniform1i(ae.uniforms.uDivergence,t++),c.uniform2f(ae.uniforms.texelSize,1/b,1/D),n=P.read[2],c.uniform1i(ae.uniforms.uPressure,n),c.activeTexture(c.TEXTURE0+n);for(var s=0;s<r.PRESSURE_ITERATIONS;s++)c.bindTexture(c.TEXTURE_2D,P.read[0]),ve(P.write[1]),P.swap();ee.bind(),t=0,c.activeTexture(c.TEXTURE0+t),c.bindTexture(c.TEXTURE_2D,U.read[0]),c.uniform1i(ee.uniforms.uTexture,t++),c.activeTexture(c.TEXTURE0+t),c.bindTexture(c.TEXTURE_2D,P.read[0]),c.uniform1i(ee.uniforms.uPressure,t++),ve(A[1]),c.readPixels(0,0,de,me,c.RGBA,c.UNSIGNED_BYTE,pe),ue.bind(),t=0,c.activeTexture(c.TEXTURE0+t),c.bindTexture(c.TEXTURE_2D,F[0]),c.uniform1i(ue.uniforms.uWind,t++),c.activeTexture(c.TEXTURE0+t),c.bindTexture(c.TEXTURE_2D,P.read[0]),c.uniform1i(ue.uniforms.uPressure,t++),c.activeTexture(c.TEXTURE0+t),c.bindTexture(c.TEXTURE_2D,U.read[0]),c.uniform1i(ue.uniforms.uVelocity,t++),c.uniform2f(ue.uniforms.texelSize,1/b,1/D),ve(U.write[1]),U.swap(),c.viewport(0,0,c.drawingBufferWidth,c.drawingBufferHeight),J.bind(),t=0,c.activeTexture(c.TEXTURE0+t),c.bindTexture(c.TEXTURE_2D,S.read[0]),c.uniform1i(J.uniforms.uTexture,t++),ve(null)}}({universe:ee}),Te=function e(){P.render(),ee.tick(),Ee(),window.animationId=requestAnimationFrame(e)};le=(se={canvas:re,universe:ee}).canvas,ve=se.universe,fe=o({canvas:le}),de=fe.texture(),me=ve.cells(),pe=ve.width(),xe=ve.height(),he=new Uint8Array(i.d.buffer,me,pe*xe*4),ge=fe.texture({width:pe,height:xe,data:he}),ye=fe({frag:a,uniforms:{t:function(e){return e.tick},data:function(){return ge({width:pe,height:xe,data:he})},resolution:function(e){return[e.viewportWidth,e.viewportHeight]},dpi:2*window.devicePixelRatio,backBuffer:de},vert:u,attributes:{position:[[-1,4],[-1,-1],[4,-1]]},count:3}),fe.frame(function(e){ye()}),Te()},function(e,n,t){"use strict";t.d(n,"a",function(){return u}),t.d(n,"c",function(){return c}),t.d(n,"b",function(){return s}),t.d(n,"d",function(){return d});var r=t(3);function i(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,n,t){return n&&o(e.prototype,n),t&&o(e,t),e}var u=Object.freeze({Empty:0,Wall:1,Sand:2,Water:3,Gas:4,Cloner:5,Fire:6,Wood:7,Lava:8,Ice:9,Sink:10,Plant:11,Acid:12,Stone:13,Dust:14,Mite:15,Oil:16});function c(){return Math.random()}var s=function(){function e(){i(this,e)}return a(e,[{key:"free",value:function(){var e=this.ptr;this.ptr=0,function(e){r.b(e)}(e)}},{key:"reset",value:function(){return r.j(this.ptr)}},{key:"tick",value:function(){return r.k(this.ptr)}},{key:"width",value:function(){return r.l(this.ptr)}},{key:"height",value:function(){return r.g(this.ptr)}},{key:"cells",value:function(){return r.f(this.ptr)}},{key:"winds",value:function(){return r.m(this.ptr)}},{key:"burns",value:function(){return r.e(this.ptr)}},{key:"paint",value:function(e,n,t,i){return r.i(this.ptr,e,n,t,i)}}],[{key:"__wrap",value:function(n){var t=Object.create(e.prototype);return t.ptr=n,t}},{key:"new",value:function(n,t){return e.__wrap(r.h(n,t))}}]),e}(),l=new TextDecoder("utf-8"),v=null;function f(e,n){return l.decode((null!==v&&v.buffer===r.d.buffer||(v=new Uint8Array(r.d.buffer)),v).subarray(e,e+n))}function d(e,n){throw new Error(f(e,n))}},function(e,n,t){"use strict";var r=t.w[e.i];e.exports=r;t(2);r.n()},,,,function(e,n){e.exports="precision highp float;\n#define GLSLIFY 1\nuniform float t;\nuniform float dpi;\nuniform vec2 resolution;\nuniform sampler2D backBuffer;\nuniform sampler2D data;\n\nvarying vec2 uv;\n\n// clang-format off\nvec3 hsv2rgb_3_0(vec3 c) {\n  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);\n  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);\n  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);\n}\n\n\n\n//\n// Description : Array and textureless GLSL 2D/3D/4D simplex\n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289_1_1(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289_1_1(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute_1_2(vec4 x) {\n     return mod289_1_1(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt_1_3(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat snoise_1_4(vec3 v)\n  {\n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D_1_5 = vec4(0.0, 0.5, 1.0, 2.0);\n\n// First corner\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n// Other corners\n  vec3 g_1_6 = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g_1_6;\n  vec3 i1 = min( g_1_6.xyz, l.zxy );\n  vec3 i2 = max( g_1_6.xyz, l.zxy );\n\n  //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n  //   x1 = x0 - i1  + 1.0 * C.xxx;\n  //   x2 = x0 - i2  + 2.0 * C.xxx;\n  //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n  vec3 x1 = x0 - i1 + C.xxx;\n  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n  vec3 x3 = x0 - D_1_5.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n// Permutations\n  i = mod289_1_1(i);\n  vec4 p = permute_1_2( permute_1_2( permute_1_2(\n             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n// Gradients: 7x7 points over a square, mapped onto an octahedron.\n// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3  ns = n_ * D_1_5.wyz - D_1_5.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1_1_7 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0_1_8 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1_1_7.xy,h.z);\n  vec3 p3 = vec3(a1_1_7.zw,h.w);\n\n//Normalise gradients\n  vec4 norm = taylorInvSqrt_1_3(vec4(dot(p0_1_8,p0_1_8), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0_1_8 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n// Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot( m*m, vec4( dot(p0_1_8,x0), dot(p1,x1),\n                                dot(p2,x2), dot(p3,x3) ) );\n  }\n\n\n\n//\n// Description : Array and textureless GLSL 2D simplex noise function.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289_2_9(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec2 mod289_2_9(vec2 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec3 permute_2_10(vec3 x) {\n  return mod289_2_9(((x*34.0)+1.0)*x);\n}\n\nfloat snoise_2_11(vec2 v)\n  {\n  const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0\n                      0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)\n                     -0.577350269189626,  // -1.0 + 2.0 * C.x\n                      0.024390243902439); // 1.0 / 41.0\n// First corner\n  vec2 i  = floor(v + dot(v, C.yy) );\n  vec2 x0 = v -   i + dot(i, C.xx);\n\n// Other corners\n  vec2 i1;\n  //i1.x = step( x0.y, x0.x ); // x0.x > x0.y ? 1.0 : 0.0\n  //i1.y = 1.0 - i1.x;\n  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);\n  // x0 = x0 - 0.0 + 0.0 * C.xx ;\n  // x1 = x0 - i1 + 1.0 * C.xx ;\n  // x2 = x0 - 1.0 + 2.0 * C.xx ;\n  vec4 x12 = x0.xyxy + C.xxzz;\n  x12.xy -= i1;\n\n// Permutations\n  i = mod289_2_9(i); // Avoid truncation effects in permutation\n  vec3 p = permute_2_10( permute_2_10( i.y + vec3(0.0, i1.y, 1.0 ))\n    + i.x + vec3(0.0, i1.x, 1.0 ));\n\n  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);\n  m = m*m ;\n  m = m*m ;\n\n// Gradients: 41 points uniformly over a line, mapped onto a diamond.\n// The ring size 17*17 = 289 is close to a multiple of 41 (41*7 = 287)\n\n  vec3 x = 2.0 * fract(p * C.www) - 1.0;\n  vec3 h = abs(x) - 0.5;\n  vec3 ox = floor(x + 0.5);\n  vec3 a0 = x - ox;\n\n// Normalise gradients implicitly by scaling m\n// Approximation of: m *= inversesqrt( a0*a0 + h*h );\n  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );\n\n// Compute final noise value at P\n  vec3 g;\n  g.x  = a0.x  * x0.x  + h.x  * x0.y;\n  g.yz = a0.yz * x12.xz + h.yz * x12.yw;\n  return 130.0 * dot(m, g);\n}\n\n\n\nhighp float random_4_12(vec2 co)\n{\n    highp float a = 12.9898;\n    highp float b = 78.233;\n    highp float c = 43758.5453;\n    highp float dt= dot(co.xy ,vec2(a,b));\n    highp float sn= mod(dt,3.14);\n    return fract(sin(sn) * c);\n}\n\n\n\n// clang-format on\n\nvoid main() {\n  vec3 color;\n  //   float r = abs(sin(t / 25.));\n  //   if (length(uv) < r && length(uv) > r - 0.1) {\n  // color = hsv2rgb(vec3(sin(t * 0.01), 0.5, 0.5));\n\n  vec2 textCoord = (uv * vec2(0.5, -0.5)) + vec2(0.5);\n  vec4 data = texture2D(data, textCoord);\n  int type = int((data.r * 255.) + 0.1);\n  float hue = 0.0;\n  float saturation = 0.6;\n  float lightness = 0.3 + data.g * 0.5;\n  float noise = snoise_1_4(vec3(floor(uv * resolution / dpi), t * 0.05));\n  float a = 1.0;\n\n  if (type == 0) {\n    hue = 0.1;\n    saturation = 0.1;\n    lightness = 0.1;\n    a = 0.1;\n  } else if (type == 1) {\n    hue = 0.1;\n    saturation = 0.1;\n    lightness = 0.4;\n  } else if (type == 2) {\n    hue = 0.1;\n    saturation = 0.5;\n    lightness += 0.3;\n  } else if (type == 3) { // water\n    hue = 0.6;\n    lightness = 0.7 + data.g * 0.25 + noise * 0.1;\n  } else if (type == 4) { // gas\n    hue = 0.0;\n    lightness += 0.4;\n    saturation = 0.2;\n  } else if (type == 5) { // clone\n    hue = 0.9;\n    saturation = 0.3;\n  } else if (type == 6) { // fire\n    hue = (data.g * 0.1);\n    saturation = 0.7;\n\n    lightness = 0.7 + (data.g * 0.3) + ((noise + 0.8) * 0.5);\n  } else if (type == 7) { // wood\n    hue = (data.g * 0.1);\n    saturation = 0.3;\n    lightness = 0.3 + data.g * 0.3;\n  } else if (type == 8) { // lava\n    hue = (data.g * 0.1);\n    lightness = 0.7 + data.g * 0.25 + noise * 0.1;\n  } else if (type == 9) { // ice\n    hue = 0.6;\n    saturation = 0.4;\n    lightness = 0.7 + data.g * 0.5;\n  } else if (type == 10) { // sink\n    hue = 0.9;\n    saturation = 0.4;\n    lightness = 1.0;\n  } else if (type == 11) { // plant\n    hue = 0.4;\n    saturation = 0.4;\n  } else if (type == 12) { // acid\n    hue = 0.18;\n    saturation = 0.9;\n    lightness = 0.8 + data.g * 0.2 + noise * 0.05;\n  } else if (type == 13) { // stone\n    hue = -0.4 + (data.g * 0.5);\n    saturation = 0.1;\n    // lightness = 0.2 + data.g * 0.5;\n  } else if (type == 14) { // dust\n    hue = (data.g * 2.0) + t * .0008;\n    saturation = 0.4;\n    lightness = 0.8;\n  } else if (type == 15) { // mite\n    hue = 0.8;\n    saturation = 0.3;\n    lightness = 0.8;\n  } else if (type == 16) { // oil\n    hue = (data.g * 5.0) + t * .008;\n\n    saturation = 0.2;\n    lightness = 0.3;\n  }\n  lightness *= (0.95 + snoise_2_11(floor(uv * resolution / dpi)) * 0.05);\n\n  color = hsv2rgb_3_0(vec3(hue, saturation, lightness));\n  gl_FragColor = vec4(color, a);\n}"},function(e,n){e.exports='\n// boring "pass-through" vertex shader\nprecision mediump float;\n#define GLSLIFY 1\nattribute vec2 position;\nvarying vec2 uv;\nvoid main() {\n  uv = position;\n  gl_Position = vec4(position, 0, 1);\n}'},,,,,,,function(e,n){e.exports="precision highp float;\nprecision mediump sampler2D;\n#define GLSLIFY 1\nattribute vec2 aPosition;\nvarying vec2 vUv;\nvarying vec2 vL;\nvarying vec2 vR;\nvarying vec2 vT;\nvarying vec2 vB;\nuniform vec2 texelSize;\nvoid main() {\n  vUv = aPosition * 0.5 + 0.5;\n  vL = vUv - vec2(texelSize.x, 0.0);\n  vR = vUv + vec2(texelSize.x, 0.0);\n  vT = vUv + vec2(0.0, texelSize.y);\n  vB = vUv - vec2(0.0, texelSize.y);\n  gl_Position = vec4(aPosition, 0.0, 1.0);\n}\n"},function(e,n){e.exports="precision highp float;\nprecision mediump sampler2D;\n#define GLSLIFY 1\nvarying vec2 vUv;\nuniform sampler2D uTexture;\nuniform sampler2D uWind;\nuniform float value;\nvoid main() {\n  float pressure = texture2D(uWind, vUv).z;\n  pressure *= 512.;\n  pressure *= pressure;\n  gl_FragColor = value * (texture2D(uTexture, vUv) + vec4(pressure));\n}"},function(e,n){e.exports="precision highp float;\nprecision mediump sampler2D;\n#define GLSLIFY 1\nvarying vec2 vUv;\nuniform sampler2D uTexture;\nvoid main() {\n  vec3 color = texture2D(uTexture, vUv).rgb * 0.1;\n  color *= 0.5;\n  color = min(color, 0.9);\n  color = vec3(1.0) - color;\n  color *= vec3(0.95, 0.9, 0.9);\n  // color *= 0.5;\n  gl_FragColor = vec4(color, 1.0);\n}\n"},function(e,n){e.exports="precision highp float;\nprecision mediump sampler2D;\n#define GLSLIFY 1\nvarying vec2 vUv;\nuniform sampler2D uTarget;\nuniform float aspectRatio;\nuniform vec3 color;\nuniform vec2 point;\nuniform float radius;\nvoid main() {\n  vec2 p = vUv - point.xy;\n  p.x *= aspectRatio;\n  vec3 splat = exp(-dot(p, p) / radius) * color;\n  vec3 base = texture2D(uTarget, vUv).xyz;\n  gl_FragColor = vec4(base + splat, 1.0);\n}"},function(e,n){e.exports="precision highp float;\nprecision mediump sampler2D;\n#define GLSLIFY 1\nvarying vec2 vUv;\nuniform sampler2D uVelocity;\nuniform sampler2D uSource;\nuniform sampler2D uWind;\nuniform vec2 texelSize;\nuniform float dt;\nuniform float dissipation;\nvec4 bilerp(in sampler2D sam, in vec2 p) {\n  vec4 st;\n  st.xy = floor(p - 0.5) + 0.5;\n  st.zw = st.xy + 1.0;\n  vec4 uv = st * texelSize.xyxy;\n  vec4 a = texture2D(sam, uv.xy);\n  vec4 b = texture2D(sam, uv.zy);\n  vec4 c = texture2D(sam, uv.xw);\n  vec4 d = texture2D(sam, uv.zw);\n  vec2 f = p - st.xy;\n  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);\n}\nvoid main() {\n  vec2 coord = gl_FragCoord.xy - dt * texture2D(uVelocity, vUv).xy;\n  float density = texture2D(uWind, vUv).w;\n  if (density > 0.99) {\n    density = 0.;\n  }\n  gl_FragColor = dissipation * (bilerp(uSource, coord) + vec4(density));\n  gl_FragColor.a = 1.0;\n}"},function(e,n){e.exports="\nprecision highp float;\nprecision mediump sampler2D;\n#define GLSLIFY 1\nvarying vec2 vUv;\nuniform sampler2D uVelocity;\nuniform sampler2D uSource;\nuniform sampler2D uWind;\nuniform vec2 texelSize;\nuniform float dt;\nuniform float dissipation;\nvoid main() {\n  vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;\n  float density = texture2D(uWind, vUv).w * 1.;\n  if (density > 0.99) {\n    density = 0.;\n  }\n\n  gl_FragColor = dissipation * (texture2D(uSource, coord) + vec4(density));\n  gl_FragColor.a = 1.0;\n}\n"},function(e,n){e.exports="precision highp float;\nprecision mediump sampler2D;\n#define GLSLIFY 1\nvarying vec2 vUv;\nvarying vec2 vL;\nvarying vec2 vR;\nvarying vec2 vT;\nvarying vec2 vB;\nuniform sampler2D uVelocity;\nvec2 sampleVelocity(in vec2 uv) {\n  vec2 multiplier = vec2(1.0, 1.0);\n  if (uv.x < 0.0) {\n    uv.x = 0.0;\n    multiplier.x = -1.0;\n  }\n  if (uv.x > 1.0) {\n    uv.x = 1.0;\n    multiplier.x = -1.0;\n  }\n  if (uv.y < 0.0) {\n    uv.y = 0.0;\n    multiplier.y = -1.0;\n  }\n  if (uv.y > 1.0) {\n    uv.y = 1.0;\n    multiplier.y = -1.0;\n  }\n  return multiplier * texture2D(uVelocity, uv).xy;\n}\nvoid main() {\n  float L = sampleVelocity(vL).x;\n  float R = sampleVelocity(vR).x;\n  float T = sampleVelocity(vT).y;\n  float B = sampleVelocity(vB).y;\n  float div = 0.5 * (R - L + T - B);\n  gl_FragColor = vec4(div, 0.0, 0.0, 1.0);\n}\n"},function(e,n){e.exports="precision highp float;\nprecision mediump sampler2D;\n#define GLSLIFY 1\nvarying vec2 vUv;\nvarying vec2 vL;\nvarying vec2 vR;\nvarying vec2 vT;\nvarying vec2 vB;\nuniform sampler2D uVelocity;\nvoid main() {\n  float L = texture2D(uVelocity, vL).y;\n  float R = texture2D(uVelocity, vR).y;\n  float T = texture2D(uVelocity, vT).x;\n  float B = texture2D(uVelocity, vB).x;\n  float vorticity = R - L - T + B;\n  gl_FragColor = vec4(vorticity, 0.0, 0.0, 1.0);\n}"},function(e,n){e.exports="precision highp float;\nprecision mediump sampler2D;\n#define GLSLIFY 1\nvarying vec2 vUv;\nvarying vec2 vT;\nvarying vec2 vB;\nuniform sampler2D uVelocity;\nuniform sampler2D uCurl;\nuniform float curl;\nuniform float dt;\nvoid main() {\n  float T = texture2D(uCurl, vT).x;\n  float B = texture2D(uCurl, vB).x;\n  float C = texture2D(uCurl, vUv).x;\n  vec2 force = vec2(abs(T) - abs(B), 0.0);\n  force *= 1.0 / length(force + 0.00001) * curl * C;\n  vec2 vel = texture2D(uVelocity, vUv).xy;\n  gl_FragColor = vec4(vel + force * dt, 0.0, 1.0);\n}"},function(e,n){e.exports="precision highp float;\nprecision mediump sampler2D;\n#define GLSLIFY 1\nvarying vec2 vUv;\nvarying vec2 vL;\nvarying vec2 vR;\nvarying vec2 vT;\nvarying vec2 vB;\nuniform sampler2D uPressure;\nuniform sampler2D uDivergence;\nvec2 boundary(in vec2 uv) {\n  uv = min(max(uv, 0.0), 1.0);\n  return uv;\n}\nvoid main() {\n  float L = texture2D(uPressure, boundary(vL)).x;\n  float R = texture2D(uPressure, boundary(vR)).x;\n  float T = texture2D(uPressure, boundary(vT)).x;\n  float B = texture2D(uPressure, boundary(vB)).x;\n  float C = texture2D(uPressure, vUv).x;\n  float divergence = texture2D(uDivergence, vUv).x;\n  float pressure = (L + R + B + T - divergence) * 0.25;\n  gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);\n}"},function(e,n){e.exports="precision highp float;\nprecision mediump sampler2D;\n#define GLSLIFY 1\nvarying vec2 vUv;\nvarying vec2 vL;\nvarying vec2 vR;\nvarying vec2 vT;\nvarying vec2 vB;\nuniform sampler2D uPressure;\nuniform sampler2D uVelocity;\nuniform sampler2D uWind;\nvec2 boundary(in vec2 uv) {\n  uv = min(max(uv, 0.0), 1.0);\n  return uv;\n}\nvoid main() {\n  float L = texture2D(uPressure, boundary(vL)).x;\n  float R = texture2D(uPressure, boundary(vR)).x;\n  float T = texture2D(uPressure, boundary(vT)).x;\n  float B = texture2D(uPressure, boundary(vB)).x;\n  vec2 velocity = texture2D(uVelocity, vUv).xy;\n  vec2 wind = texture2D(uWind, vUv).xy;\n  velocity.xy -= vec2(R - L, T - B);\n  velocity.xy += wind * 25.;\n  gl_FragColor = vec4(velocity, 0.0, 1.0);\n}"},function(e,n){e.exports="precision highp float;\nprecision mediump sampler2D;\n#define GLSLIFY 1\nvarying vec2 vUv;\nuniform sampler2D uTexture;\nuniform sampler2D uPressure;\nvoid main() {\n  vec2 v = texture2D(uTexture, vUv).rg;\n  float p = texture2D(uPressure, vUv).r;\n  vec3 vp = vec3(v, p);\n  vp = max(vp, vec3(-250.));\n  vp = min(vp, vec3(250.));\n  vp /= 500.;\n  vp += vec3(0.5, 0.5, 0.);\n  // v = vec2(0.5);\n  gl_FragColor = vec4(vp, 0.0);\n}\n"}]]);