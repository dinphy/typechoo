!function(){var t=function(){var m,r,h,o,c,w,k;return k=function(t){return t.charAt(0).toUpperCase()+t.substring(1)},o=function(t){return t.replace(/[-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")},c=function(t,e,s){var r,i,l,n,a,h;if(t instanceof Array)if(e instanceof Array)for(r=i=0,n=t.length;i<n;r=++i)h=t[r],s=c(h,e[r],s);else for(l=0,a=t.length;l<a;l++)h=t[l],s=c(h,e,s);else t=o(t),s=s.replace(new RegExp(t,"g"),e.replace(/\$/g,"$$$$"));return s},h=function(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")},w=function(t,e=null){var s,r,i,l,n;if(null==e)return t.replace(/^\s*/,"").replace(/\s*$/,"");for(n="",r=i=0,l=e.length-1;0<=l?i<=l:l<=i;r=0<=l?++i:--i)s=e[r],n+=o(s);return n="["+n+"]*",t.replace(new RegExp("^"+n),"").replace(new RegExp(n+"$"),"")},m=function(t){var e,s,r,i=[];if(t instanceof Array)for(s=e=0,r=t.length;e<r;s=++e)t[s],i.push(s);else for(s in t)i.push(s);return i},r=function(t){var e,s,r,i,l=[];if(t instanceof Array)for(s=0,r=t.length;s<r;s++)i=t[s],l.push(i);else for(e in t)i=t[e],l.push(i);return l},class{constructor(){this.commonWhiteList="kbd|b|i|strong|em|sup|sub|br|code|del|a|hr|small",this.blockHtmlTags="p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|address|form|fieldset|iframe|hr|legend|article|section|nav|aside|hgroup|header|footer|figcaption|svg|script|noscript",this.specialWhiteList={table:"table|tbody|thead|tfoot|tr|td|th"},this.hooks={},this.html=!1,this.line=!1,this.blockParsers=[["code",10],["shtml",20],["pre",30],["ahtml",40],["shr",50],["list",60],["math",70],["html",80],["footnote",90],["definition",100],["quote",110],["table",120],["sh",130],["mh",140],["dhr",150],["default",9999]],this.parsers={}}makeHtml(t){var e,s,r,i,l;for(this.footnotes=[],this.definitions={},this.holders={},this.uniqid=Math.ceil(1e7*Math.random())+Math.ceil(1e7*Math.random()),this.id=0,this.blockParsers.sort(function(t,e){return t[1]<e[1]?-1:1}),e=0,s=(l=this.blockParsers).length;e<s;e++)[r]=i=l[e],void 0!==i[2]?this.parsers[r]=i[2]:this.parsers[r]=this["parseBlock"+k(r)].bind(this);return t=this.initText(t),t=this.parse(t),t=this.makeFootnotes(t),t=this.optimizeLines(t),this.call("makeHtml",t)}enableHtml(t=!0){this.html=t}enableLine(t=!0){this.line=t}hook(t,e){return null==this.hooks[t]&&(this.hooks[t]=[]),this.hooks[t].push(e)}makeHolder(t){var e="|\r"+this.uniqid+this.id+"\r|";return this.id+=1,this.holders[e]=t,e}initText(t){return t.replace(/\t/g,"    ").replace(/\r/g,"").replace(/(\u000A|\u000D|\u2028|\u2029)/g,"\n")}makeFootnotes(t){var e,s;if(0<this.footnotes.length){for(t+='<div class="footnotes"><hr><ol>',e=1;s=this.footnotes.shift();)"string"==typeof s?s+=` <a href=\"#fnref-${e}\" class=\"footnote-backref\">&#8617;</a>`:(s[s.length-1]+=` <a href=\"#fnref-${e}\" class=\"footnote-backref\">&#8617;</a>`,s=1<s.length?this.parse(s.join("\n")):this.parseInline(s[0])),t+=`<li id=\"fn-${e}\">${s}</li>`,e+=1;t+="</ol></div>"}return t}parse(t,e=!1,s=0){var r,i,l,n,a,h,o,c=[],p=this.parseBlock(t,c),u="";for(e&&1===p.length&&"normal"===p[0][0]&&(p[0][3]=!0),i=0,l=p.length;i<l;i++)[h,a,n,o]=p[i],r=c.slice(a,n+1),h="parse"+k(h),r=this.call("before"+k(h),r,o),n=this[h](r,o,a+s,n+s),u+=n=this.call("after"+k(h),n,o);return u}call(t,...e){var s,r,i,l;if([l]=e,null==this.hooks[t])return l;for(s=0,r=(i=this.hooks[t]).length;s<r;s++)l=i[s].apply(this,e),e[0]=l;return l}releaseHolder(t,e=!0){for(var s=0;0<=t.indexOf("\r")&&s<10;)t=c(m(this.holders),r(this.holders),t),s+=1;return e&&(this.holders={}),t}markLine(t,e=-1){return this.line?'<span class="line" data-start="'+t+'" data-end="'+(e=e<0?t:e)+'" data-id="'+this.uniqid+'"></span>':""}markLines(t,e){var s=-1;return this.line?t.map(t=>(s+=1,this.markLine(e+s)+t)):t}optimizeLines(t){var s=0,e=new RegExp(`class=\"line\" data\\-start=\"([0-9]+)\" data\\-end=\"([0-9]+)\" (data\\-id=\"${this.uniqid}\")`,"g");return this.line?t.replace(e,function(...t){var e=s!==parseInt(t[1])?'class="line" data-start="'+s+'" data-start-original="'+t[1]+'" data-end="'+t[2]+'" '+t[3]:t[0];return s=1+parseInt(t[2]),e}):t}parseInline(t,e="",s=!0,r=!0){return t=(t=(t=(t=(t=(t=this.call("beforeParseInline",t)).replace(/(^|[^\\])(`+)(.+?)\2/gm,(...t)=>t[1]+this.makeHolder("<code>"+h(t[3])+"</code>"))).replace(/(^|[^\\])(\$+)(.+?)\2/gm,(...t)=>t[1]+this.makeHolder(t[2]+h(t[3])+t[2]))).replace(/\\(.)/g,(...t)=>{var e=t[1].match(/^[-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]$/)?"":"\\",t=h(t[1]);return t=t.replace(/\$/g,"&dollar;"),this.makeHolder(e+t)})).replace(/<(https?:\/\/.+|(?:mailto:)?[_a-z0-9-\.\+]+@[_\w-]+(?:\.[a-z]{2,})+)>/gi,(...t)=>{var e=this.cleanUrl(t[1]),t=this.call("parseLink",e);return this.makeHolder(`<a href=\"${e}\">${t}</a>`)})).replace(/<(\/?)([a-z0-9-]+)(\s+[^>]*)?>/gi,(...t)=>this.html||0<=("|"+this.commonWhiteList+"|"+e+"|").indexOf("|"+t[2].toLowerCase()+"|")?this.makeHolder(t[0]):this.makeHolder(h(t[0]))),this.html&&(t=t.replace(/<!\-\-(.*?)\-\->/g,(...t)=>this.makeHolder(t[0]))),t=(t=(t=(t=(t=(t=c(["<",">"],["&lt;","&gt;"],t)).replace(/\[\^((?:[^\]]|\\\]|\\\[)+?)\]/g,(...t)=>{var e=this.footnotes.indexOf(t[1]);return e<0&&(e=this.footnotes.length+1,this.footnotes.push(this.parseInline(t[1],"",!1))),this.makeHolder(`<sup id=\"fnref-${e}\"><a href=\"#fn-${e}\" class=\"footnote-ref\">${e}</a></sup>`)})).replace(/!\[((?:[^\]]|\\\]|\\\[)*?)\]\(((?:[^\)]|\\\)|\\\()+?)\)/g,(...t)=>{var e=h(this.escapeBracket(t[1])),s=this.escapeBracket(t[2]);return[s,t]=this.cleanUrl(s,!0),this.makeHolder(`<img src=\"${s}\" alt=\"${t=null==t?e:` title=\"${t}\"`}\" title=\"${t}\">`)})).replace(/!\[((?:[^\]]|\\\]|\\\[)*?)\]\[((?:[^\]]|\\\]|\\\[)+?)\]/g,(...t)=>{var e=h(this.escapeBracket(t[1])),e=null!=this.definitions[t[2]]?`<img src=\"${this.definitions[t[2]]}\" alt=\"${e}\" title=\"${e}\">`:e;return this.makeHolder(e)})).replace(/\[((?:[^\]]|\\\]|\\\[)+?)\]\(((?:[^\)]|\\\)|\\\()+?)\)/g,(...t)=>{var e=this.parseInline(this.escapeBracket(t[1]),"",!1,!1),s=this.escapeBracket(t[2]);return[s,t]=this.cleanUrl(s,!0),this.makeHolder(`<a href=\"${s}\"${t=null==t?"":` title=\"${t}\"`}>${e}</a>`)})).replace(/\[((?:[^\]]|\\\]|\\\[)+?)\]\[((?:[^\]]|\\\]|\\\[)+?)\]/g,(...t)=>{var e=this.parseInline(this.escapeBracket(t[1]),"",!1,!1),e=null!=this.definitions[t[2]]?`<a href=\"${this.definitions[t[2]]}\">${e}</a>`:e;return this.makeHolder(e)}),t=this.parseInlineCallback(t),r&&(t=t.replace(/(^|[^\"])(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\b([-a-zA-Z0-9@:%_\+.~#?&\/=]*)|(?:mailto:)?[_a-z0-9-\.\+]+@[_\w-]+(?:\.[a-z]{2,})+)($|[^\"])/g,(...t)=>{var e=this.cleanUrl(t[2]),s=this.call("parseLink",t[2]);return`${t[1]}<a href=\"${e}\">${s}</a>${t[5]}`})),t=this.call("afterParseInlineBeforeRelease",t),t=this.releaseHolder(t,s),t=this.call("afterParseInline",t)}parseInlineCallback(t){return t=(t=(t=(t=(t=(t=(t=t.replace(/(\*{3})((?:.|\r)+?)\1/gm,(...t)=>"<strong><em>"+this.parseInlineCallback(t[2])+"</em></strong>")).replace(/(\*{2})((?:.|\r)+?)\1/gm,(...t)=>"<strong>"+this.parseInlineCallback(t[2])+"</strong>")).replace(/(\*)((?:.|\r)+?)\1/gm,(...t)=>"<em>"+this.parseInlineCallback(t[2])+"</em>")).replace(/(\s+|^)(_{3})((?:.|\r)+?)\2(\s+|$)/gm,(...t)=>t[1]+"<strong><em>"+this.parseInlineCallback(t[3])+"</em></strong>"+t[4])).replace(/(\s+|^)(_{2})((?:.|\r)+?)\2(\s+|$)/gm,(...t)=>t[1]+"<strong>"+this.parseInlineCallback(t[3])+"</strong>"+t[4])).replace(/(\s+|^)(_)((?:.|\r)+?)\2(\s+|$)/gm,(...t)=>t[1]+"<em>"+this.parseInlineCallback(t[3])+"</em>"+t[4])).replace(/(~{2})((?:.|\r)+?)\1/gm,(...t)=>"<del>"+this.parseInlineCallback(t[2])+"</del>")}parseBlock(t,e){for(var s,r,i,l,n,a,h,o,c,p=t.split("\n"),u=0,k=p.length;u<k;u++)n=p[u],e.push(n);for(this.blocks=[],this.current="normal",this.pos=-1,c={special:m(this.specialWhiteList).join("|"),empty:0,html:!1},r=i=0,l=e.length;i<l;r=++i)if(n=e[r],null!=(s=this.getBlock())&&(s=s.slice(0)),"normal"===this.current||this.parsers[this.current](s,r,n,c,e))for(a in o=this.parsers)if(h=o[a],a!==this.current&&!h(s,r,n,c,e))break;return this.optimizeBlocks(this.blocks,e)}parseBlockList(t,e,s,r){var i,l;if(this.isBlock("list")&&!s.match(/^\s*\[((?:[^\]]|\\\]|\\\[)+?)\]:\s*(.+)$/)){if(s.match(/^(\s*)(~{3,}|`{3,})([^`~]*)$/i))return!0;if(r.empty<=1&&(l=s.match(/^(\s*)\S+/))&&l[1].length>=t[3][0]+r.empty)return r.empty=0,this.setBlock(e),!1;if(s.match(/^\s*$/)&&0===r.empty)return r.empty+=1,this.setBlock(e),!1}return!(l=s.match(/^(\s*)((?:[0-9]+\.)|\-|\+|\*)\s+/i))||(i=l[1].length,s=l[0].length-i,l=(r.empty=0)<="+-*".indexOf(l[2])?"ul":"ol",!this.isBlock("list")||i<t[3][0]||i===t[3][0]&&l!==t[3][1]?this.startBlock("list",e,[i,l,s]):this.setBlock(e),!1)}parseBlockCode(t,e,s,r){var i;if(s=s.match(/^(\s*)(~{3,}|`{3,})([^`~]*)$/i)){if(this.isBlock("code")){if(r.code!==s[2])return this.setBlock(e),!1;(i=t[3][2])?(r.empty=0,this.combineBlock().setBlock(e)):this.setBlock(e).endBlock()}else i=!1,this.isBlock("list")&&(t=t[3][0],i=s[1].length>=t+r.empty),r.code=s[2],this.startBlock("code",e,[s[1],s[3],i]);return!1}return!this.isBlock("code")||(this.setBlock(e),!1)}parseBlockShtml(t,e,s,r){if(this.html){if(s.match(/^(\s*)!!!(\s*)$/))return this.isBlock("shtml")?this.setBlock(e).endBlock():this.startBlock("shtml",e),!1;if(this.isBlock("shtml"))return this.setBlock(e),!1}return!0}parseBlockAhtml(t,e,s,r){var i,l,n,a;if(this.html)if(a=new RegExp(`^\\s*<(${this.blockHtmlTags})(\\s+[^>]*)?>`,"i"),a=s.match(a)){if(this.isBlock("ahtml"))return this.setBlock(e),!1;if(void 0===a[2]||"/"!==a[2]){for(this.startBlock("ahtml",e),i=new RegExp(`\\s*<(${this.blockHtmlTags})(\\s+[^>]*)?>`,"ig");;){if(!(n=i.exec(s)))break;l=n[1]}return 0<=s.indexOf(`</${l}>`)?this.endBlock():r.html=l,!1}}else{if(r.html&&0<=s.indexOf(`</${r.html}>`))return this.setBlock(e).endBlock(),r.html=!1;if(this.isBlock("ahtml"))return this.setBlock(e),!1;if(a=s.match(/^\s*<!\-\-(.*?)\-\->\s*$/))return this.startBlock("ahtml",e).endBlock(),!1}return!0}parseBlockMath(t,e,s){return s.match(/^(\s*)\$\$(\s*)$/)?(this.isBlock("math")?this.setBlock(e).endBlock():this.startBlock("math",e),!1):!this.isBlock("math")||(this.setBlock(e),!1)}parseBlockPre(t,e,s,r){return s.match(/^ {4}/)?(this.isBlock("pre")?this.setBlock(e):this.startBlock("pre",e),!1):!this.isBlock("pre")||!s.match(/^\s*$/)||(this.setBlock(e),!1)}parseBlockHtml(t,e,s,r){var i,l;return(i=s.match(new RegExp(`^\\s*<(${r.special})(\\s+[^>]*)?>`,"i")))?(l=i[1].toLowerCase(),this.isBlock("html",l)||this.isBlock("pre")||this.startBlock("html",e,l),!1):(i=s.match(new RegExp(`</(${r.special})>\\s*$`,"i")))?(l=i[1].toLowerCase(),this.isBlock("html",l)&&this.setBlock(e).endBlock(),!1):!this.isBlock("html")||(this.setBlock(e),!1)}parseBlockFootnote(t,e,s){var r;return!(r=s.match(/^\[\^((?:[^\]]|\\\]|\\\[)+?)\]:/))||(s=r[0].length-1,this.startBlock("footnote",e,[s,r[1]]),!1)}parseBlockDefinition(t,e,s){return!(s=s.match(/^\s*\[((?:[^\]]|\\\]|\\\[)+?)\]:\s*(.+)$/))||(this.definitions[s[1]]=this.cleanUrl(s[2]),this.startBlock("definition",e).endBlock(),!1)}parseBlockQuote(t,e,s){return!(s=s.match(/^(\s*)>/))||(this.isBlock("list")&&0<s[1].length||this.isBlock("quote")?this.setBlock(e):this.startBlock("quote",e),!1)}parseBlockTable(t,e,s,r,i){var l,n,a,h,o,c;if(o=s.match(/^((?:(?:(?:\||\+)(?:[ :]*\-+[ :]*)(?:\||\+))|(?:(?:[ :]*\-+[ :]*)(?:\||\+)(?:[ :]*\-+[ :]*))|(?:(?:[ :]*\-+[ :]*)(?:\||\+))|(?:(?:\||\+)(?:[ :]*\-+[ :]*)))+)$/)){if(this.isBlock("table"))t[3][0].push(t[3][2]),t[3][2]+=1,this.setBlock(e,t[3]);else{for(s=0,null==t||"normal"!==t[0]||i[t[2]].match(/^\s*$/)?this.startBlock("table",e):this.backBlock(s=1,"table"),"|"===o[1][0]&&(o[1]=o[1].substring(1),"|"===o[1][o[1].length-1]&&(o[1]=o[1].substring(0,o[1].length-1))),n=[],a=0,h=(c=o[1].split(/\+|\|/)).length;a<h;a++)l="none",(o=c[a].match(/^\s*(:?)\-+(:?)\s*$/))&&(o[1]&&o[2]?l="center":o[1]?l="left":o[2]&&(l="right")),n.push(l);this.setBlock(e,[[s],n,s+1])}return!1}return!0}parseBlockSh(t,e,s){return!(s=s.match(/^(#+)(.*)$/))||(s=Math.min(s[1].length,6),this.startBlock("sh",e,s).endBlock(),!1)}parseBlockMh(t,e,s,r,i){return!((s=s.match(/^\s*((=|-){2,})\s*$/))&&null!=t&&"normal"===t[0]&&!i[t[2]].match(/^\s*$/))||(this.isBlock("normal")?this.backBlock(1,"mh","="===s[1][0]?1:2).setBlock(e).endBlock():this.startBlock("normal",e),!1)}parseBlockShr(t,e,s){return!s.match(/^(\* *){3,}\s*$/)||(this.startBlock("hr",e).endBlock(),!1)}parseBlockDhr(t,e,s){return!s.match(/^(- *){3,}\s*$/)||(this.startBlock("hr",e).endBlock(),!1)}parseBlockDefault(t,e,s,r){return this.isBlock("footnote")?s.match(/^(\s*)/)[1].length>=t[3][0]?this.setBlock(e):this.startBlock("normal",e):this.isBlock("table")?0<=s.indexOf("|")?(t[3][2]+=1,this.setBlock(e,t[3])):this.startBlock("normal",e):this.isBlock("quote")?s.match(/^(\s*)$/)?this.startBlock("normal",e):this.setBlock(e):null==t||"normal"!==t[0]?this.startBlock("normal",e):this.setBlock(e),!0}optimizeBlocks(t,e){var s,r,i,l,n,a,h,o,c=t.slice(0),p=e.slice(0);for(c=this.call("beforeOptimizeBlocks",c,p),i=0;null!=c[i];)l=!1,s=c[i],a=null!=c[i-1]?c[i-1]:null,n=null!=c[i+1]?c[i+1]:null,[o,r,h]=s,"pre"===o&&p.slice(s[1],s[2]+1).reduce(function(t,e){return e.match(/^\s*$/)&&t},!0)&&(s[0]=o="normal"),"normal"===o&&(o=["list","quote"],r===h&&p[r].match(/^\s*$/)&&null!=a&&null!=n&&a[0]===n[0]&&0<=o.indexOf(a[0])&&("list"!==a[0]||a[3][0]===n[3][0]&&a[3][1]===n[3][1])&&(c[i-1]=[a[0],a[1],n[2],null!=a[3]?a[3]:null],c.splice(i,2),l=!0)),l||(i+=1);return this.call("afterOptimizeBlocks",c,p)}parseCode(t,e,s){var r,i,l,n,a;return[r,n]=e,n=w(n),i=r.length,n.match(/^[_a-z0-9-\+\#\:\.]+$/i)?1<(e=n.split(":")).length&&([n,a]=e,n=w(n),a=w(a)):n=null,l=!0,t=t.slice(1,-1).map(function(t){return t=t.replace(new RegExp(`^[ ]{${i}}`),""),l&&!t.match(/^\s*$/)&&(l=!1),h(t)}),s=this.markLines(t,s+1).join("\n"),l?"":"<pre><code"+(n?` class=\"${n}\"`:"")+(a?` rel=\"${a}\"`:"")+">"+s+"</code></pre>"}parsePre(t,e,s){return t=t.map(function(t){return h(t.substring(4))}),(s=this.markLines(t,s).join("\n")).match(/^\s*$/)?"":"<pre><code>"+s+"</code></pre>"}parseAhtml(t,e,s){return w(this.markLines(t,s).join("\n"))}parseShtml(t,e,s){return w(this.markLines(t.slice(1,-1),s+1).join("\n"))}parseMath(t,e,s,r){return"<p>"+this.markLine(s,r)+h(t.join("\n"))+"</p>"}parseSh(t,e,s,r){t=this.markLine(s,r)+this.parseInline(w(t[0],"# "));return t.match(/^\s*$/)?"":`<h${e}>${t}</h${e}>`}parseMh(t,e,s,r){return this.parseSh(t,e,s,r)}parseQuote(t,e,s){return(t=(t=t.map(function(t){return t.replace(/^\s*> ?/,"")})).join("\n")).match(/^\s*$/)?"":"<blockquote>"+this.parse(t,!0,s)+"</blockquote>"}parseList(t,e,s){var r,i,l,n,a,h,o,c,p,u,k,m,f,d,B="";for([k,d,f]=e,u=[],m="",i=r=n=0,a=t.length;r<a;i=++r)(c=(o=t[i]).match(new RegExp(`^(\\s{${k}})((?:[0-9]+\\.?)|\\-|\\+|\\*)(\\s+)(.*)$`)))?("ol"===d&&0===i&&1!==(s=parseInt(c[2]))&&(m=' start="'+s+'"'),u.push([c[4]]),n=u.length-1):u[n].push(o.replace(new RegExp(`^\\s{${f+k}}`),""));for(l=0,h=u.length;l<h;l++)p=u[l],B+="<li>"+this.parse(p.join("\n"),!0,s)+"</li>",s+=p.length;return`<${d}${m}>${B}</${d}>`}parseTable(t,e,s){var r,i,l,n,a,h,o,c,p,u,k,m,f,d,B,g,$,b,v;for([h,r]=e,i=!(n=0<h.length&&0<h.reduce(function(t,e){return e+t}))||null,B=!(a="<table>"),c=o=0,k=t.length;o<k;c=++o)if(f=t[c],0<=h.indexOf(c))n&&B&&(i=!(n=!1));else{for(B=!0,l={},u=-1,p=0,m=($=(f="|"===(f=w(f))[0]&&"|"===(f=f.substring(1))[f.length-1]?f.substring(0,f.length-1):f).split("|").map(function(t){return t.match(/^\s*$/)?" ":w(t)})).length;p<m;p++)0<(g=$[p]).length?l[u+=1]=[null!=l[u]?l[u][0]+1:1,g]:null!=l[u]?l[u][0]+=1:l[0]=[1,g];for(c in n?a+="<thead>":i&&(a+="<tbody>"),a+="<tr",this.line&&(a+=' class="line" data-start="'+(s+c)+'" data-end="'+(s+c)+'" data-id="'+this.uniqid+'"'),a+=">",l)[d,v]=l[c],a+=`<${b=n?"th":"td"}`,1<d&&(a+=` colspan=\"${d}\"`),null!=r[c]&&"none"!==r[c]&&(a+=` align=\"${r[c]}\"`),a+=">"+this.parseInline(v)+`</${b}>`;a+="</tr>",n?a+="</thead>":i=i&&!1}return null!==i&&(a+="</tbody>"),a+"</table>"}parseHr(t,e,s){return this.line?'<hr class="line" data-start="'+s+'" data-end="'+s+'">':"<hr>"}parseNormal(t,e,s){var r=0;return t=t.map(t=>((t=this.parseInline(t)).match(/^\s*$/)||(t=this.markLine(s+r)+t),r+=1,t)),(t=(t=(t=w(t.join("\n"))).replace(/(\n\s*){2,}/g,()=>(e=!1,"</p><p>"))).replace(/\n/g,"<br>")).match(/^\s*$/)?"":e?t:`<p>${t}</p>`}parseFootnote(t,e){var s;return[s,e]=e,0<=(e=this.footnotes.indexOf(e))&&((t=t.slice(0))[0]=t[0].replace(/^\[\^((?:[^\]]|\]|\[)+?)\]:/,""),this.footnotes[e]=t),""}parseDefinition(){return""}parseHtml(t,e,s){return t=t.map(t=>this.parseInline(t,null!=this.specialWhiteList[e]?this.specialWhiteList[e]:"")),this.markLines(t,s).join("\n")}cleanUrl(t,e=!1){var s,r=null;return t=w(t),e&&0<=(s=t.indexOf(" "))&&(r=h(w(t.substring(s+1)," \"'")),t=t.substring(0,s)),(t=(s=(t=t.replace(/["'<>\s]/g,"")).match(/^(mailto:)?[_a-z0-9-\.\+]+@[_\w-]+(?:\.[a-z]{2,})+$/i))&&null==s[1]?"mailto:"+t:t).match(/^\w+:/i)&&!t.match(/^(https?|mailto):/i)?"#":e?[t,r]:t}escapeBracket(t){return c(["\\[","\\]","\\(","\\)"],["[","]","(",")"],t)}startBlock(t,e,s=null){return this.pos+=1,this.current=t,this.blocks.push([t,e,e,s]),this}endBlock(){return this.current="normal",this}isBlock(t,e=null){return this.current===t&&(null===e||this.blocks[this.pos][3]===e)}getBlock(){return null!=this.blocks[this.pos]?this.blocks[this.pos]:null}setBlock(t=null,e=null){return null!==t&&(this.blocks[this.pos][2]=t),null!==e&&(this.blocks[this.pos][3]=e),this}backBlock(t,e,s=null){var r;return this.pos<0?this.startBlock(e,0,s):(r=this.blocks[this.pos][2],this.blocks[this.pos][2]=r-t,s=[e,r-t+1,r,s],this.blocks[this.pos][1]<=this.blocks[this.pos][2]?(this.pos+=1,this.blocks.push(s)):this.blocks[this.pos]=s,this.current=e,this)}combineBlock(){var t,e;return this.pos<1||(e=this.blocks[this.pos-1].slice(0),t=this.blocks[this.pos].slice(0),e[2]=t[2],this.blocks[this.pos-1]=e,this.current=e[0],this.blocks=this.blocks.slice(0,-1),--this.pos),this}}}.call(this);"undefined"!=typeof module&&null!==module?module.exports=t:"undefined"!=typeof window&&null!==window&&(window.HyperDown=t)}.call(this);
