(()=>{"use strict";var e={132:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.DisWasm=void 0;const n=new Map([[0,{op:"unreachable"}],[1,{op:"nop"}],[2,{op:"block",operands:[0],opKind:1}],[3,{op:"loop",operands:[0],opKind:1}],[4,{op:"if",operands:[0],opKind:1}],[5,{op:"else"}],[11,{op:"end"}],[12,{op:"br",operands:[1]}],[13,{op:"br_if",operands:[1]}],[14,{op:"br_table",operands:[2,1],opKind:4}],[15,{op:"return"}],[16,{op:"call",operands:[1]}],[17,{op:"call_indirect",operands:[1,1]}],[26,{op:"drop"}],[27,{op:"select"}],[32,{op:"local.get",operands:[1]}],[33,{op:"local.set",operands:[1]}],[34,{op:"local.tee",operands:[1]}],[35,{op:"global.get",operands:[1]}],[36,{op:"global.set",operands:[1]}],[40,{op:"i32.load",operands:[1,1],opKind:2}],[41,{op:"i64.load",operands:[1,1],opKind:2}],[42,{op:"f32.load",operands:[1,1],opKind:2}],[43,{op:"f64.load",operands:[1,1],opKind:2}],[54,{op:"i32.store",operands:[1,1],opKind:3}],[55,{op:"i64.store",operands:[1,1],opKind:3}],[56,{op:"f32.store",operands:[1,1],opKind:3}],[57,{op:"f64.store",operands:[1,1],opKind:3}],[44,{op:"i32.load8_s",operands:[1,1],opKind:2}],[45,{op:"i32.load8_u",operands:[1,1],opKind:2}],[46,{op:"i32.load16_s",operands:[1,1],opKind:2}],[47,{op:"i32.load16_u",operands:[1,1],opKind:2}],[58,{op:"i32.store8",operands:[1,1],opKind:3}],[59,{op:"i32.store16",operands:[1,1],opKind:3}],[60,{op:"i64.store8",operands:[1,1],opKind:3}],[61,{op:"i64.store16",operands:[1,1],opKind:3}],[62,{op:"i64.store32",operands:[1,1],opKind:3}],[63,{op:"memory.size",operands:[1]}],[64,{op:"memory.grow",operands:[1]}],[65,{op:"i32.const",operands:[3]}],[66,{op:"i64.const",operands:[4]}],[67,{op:"f32.const",operands:[5]}],[68,{op:"f64.const",operands:[6]}],[69,{op:"i32.eqz"}],[70,{op:"i32.eq"}],[71,{op:"i32.ne"}],[72,{op:"i32.lt_s"}],[73,{op:"i32.lt_u"}],[74,{op:"i32.gt_s"}],[75,{op:"i32.gt_u"}],[76,{op:"i32.le_s"}],[77,{op:"i32.le_u"}],[78,{op:"i32.ge_s"}],[79,{op:"i32.ge_u"}],[80,{op:"i64.eqz"}],[81,{op:"i64.eq"}],[82,{op:"i64.ne"}],[83,{op:"i64.lt_s"}],[84,{op:"i64.lt_u"}],[85,{op:"i64.gt_s"}],[86,{op:"i64.gt_u"}],[87,{op:"i64.le_s"}],[88,{op:"i64.le_u"}],[89,{op:"i64.ge_s"}],[90,{op:"i64.ge_u"}],[91,{op:"f32.eq"}],[92,{op:"f32.ne"}],[93,{op:"f32.lt"}],[94,{op:"f32.gt"}],[95,{op:"f32.le"}],[96,{op:"f32.ge"}],[97,{op:"f64.eq"}],[98,{op:"f64.ne"}],[99,{op:"f64.lt"}],[100,{op:"f64.gt"}],[101,{op:"f64.le"}],[102,{op:"f64.ge"}],[106,{op:"i32.add"}],[107,{op:"i32.sub"}],[108,{op:"i32.mul"}],[109,{op:"i32.div_s"}],[110,{op:"i32.div_u"}],[111,{op:"i32.rem_s"}],[112,{op:"i32.rem_u"}],[113,{op:"i32.and"}],[114,{op:"i32.or"}],[115,{op:"i32.xor"}],[116,{op:"i32.shl"}],[117,{op:"i32.shr_s"}],[118,{op:"i32.shr_u"}],[119,{op:"i32.rotl"}],[120,{op:"i32.rotr"}],[124,{op:"i64.add"}],[125,{op:"i64.sub"}],[126,{op:"i64.mul"}],[127,{op:"i64.div_s"}],[128,{op:"i64.div_u"}],[129,{op:"i64.rem_s"}],[130,{op:"i64.rem_u"}],[131,{op:"i64.and"}],[132,{op:"i64.or"}],[133,{op:"i64.xor"}],[134,{op:"i64.shl"}],[135,{op:"i64.shr_s"}],[136,{op:"i64.shr_u"}],[137,{op:"i64.rotl"}],[138,{op:"i64.rotr"}],[139,{op:"f32.abs"}],[140,{op:"f32.neg"}],[146,{op:"f32.add"}],[147,{op:"f32.sub"}],[148,{op:"f32.mul"}],[149,{op:"f32.div"}],[153,{op:"f64.abs"}],[154,{op:"f64.neg"}],[160,{op:"f64.add"}],[161,{op:"f64.sub"}],[162,{op:"f64.mul"}],[163,{op:"f64.div"}],[167,{op:"i32.wrap_i64"}],[168,{op:"i32.trunc_f32_s"}],[169,{op:"i32.trunc_f32_u"}],[170,{op:"i32.trunc_f64_s"}],[171,{op:"i32.trunc_f64_u"}],[172,{op:"i64.extend_i32_s"}],[173,{op:"i64.extend_i32_u"}],[174,{op:"i64.trunc_f32_s"}],[175,{op:"i64.trunc_f32_u"}],[176,{op:"i64.trunc_f64_s"}],[177,{op:"i64.trunc_f64_u"}],[178,{op:"f32.convert_i32_s"}],[179,{op:"f32.convert_i32_u"}],[182,{op:"f32.demote_f64"}],[180,{op:"f32.convert_i64_s"}],[181,{op:"f32.convert_i64_u"}],[183,{op:"f64.convert_i32_s"}],[184,{op:"f64.convert_i32_u"}],[185,{op:"f64.convert_i64_s"}],[186,{op:"f64.convert_i64_u"}],[187,{op:"f64.promote_f32"}],[188,{op:"i32.reinterpret_f32"}],[189,{op:"i64.reinterpret_f64"}]]);class r{constructor(e){this.offset=0,this.byteArray=new Uint8Array(e)}getOffset(){return this.offset}setOffset(e){this.offset=e}isEof(){return this.offset>=this.byteArray.byteLength}readu8(){return this.byteArray[this.offset++]}readi32(){const e=new Int32Array(this.byteArray.buffer,this.offset,1)[0];return this.offset+=4,e}readiconst(){let e=0,t=0,n=this.offset;for(;n<this.byteArray.byteLength;){if(t>=25)return this.readiconstBig(BigInt(e),t,n);const r=this.byteArray[n++];if(e|=(127&r)<<t,t+=7,0==(128&r)){0!=(64&r)&&(e-=1<<t);break}}return this.offset=n,e}readiconstBig(e,t,n){for(;n<this.byteArray.byteLength;){const r=this.byteArray[n++];if(e+=BigInt(127&r)<<BigInt(t),t+=7,0==(128&r)){0!=(64&r)&&(e-=BigInt(1<<t));break}}return this.offset=n,e}readf32(){let e=this.byteArray.buffer,t=this.offset;0!=(3&t)&&(e=this.byteArray.slice(t,t+4).buffer,t=0);const n=new Float32Array(e,t,1)[0];return this.offset+=4,n}readf64(){let e=this.byteArray.buffer,t=this.offset;0!=(7&t)&&(e=this.byteArray.slice(t,t+8).buffer,t=0);const n=new Float64Array(e,t,1)[0];return this.offset+=8,n}readLeb128(){let e=0,t=0,n=this.offset;for(;n<this.byteArray.byteLength;){const r=this.byteArray[n++];if(e|=(127&r)<<t,t+=7,0==(128&r)){0!=(64&r)&&(e-=1<<t);break}}return this.offset=n,e}readUleb128(){let e=0,t=0,n=this.offset;for(;n<this.byteArray.byteLength;){const r=this.byteArray[n++];if(e|=(127&r)<<t,t+=7,0==(128&r))break}return this.offset=n,e}readString(){const e=this.readUleb128(),t=this.byteArray.slice(this.offset,this.offset+e);return this.offset+=e,new TextDecoder("utf-8").decode(t)}u8array(e){const t=this.byteArray.slice(this.offset,e);return this.offset+=e,t}}class s{constructor(e){this.type=e}getType(){return this.type}toString(){if("object"==typeof this.type)return`(func${0===this.type.params.length?"":` (param ${this.type.params.map((e=>`${e}`)).join(" ")})`}${0===this.type.results.length?"":` (result ${this.type.results.map((e=>`${e}`)).join(" ")})`})`;switch(this.type){case 64:return"void";case 127:return"i32";case 126:return"i64";case 125:return"f32";case 124:return"f64";default:throw`Unhandled: ${this.type}`}}}function o(e){const t=e.readu8();switch(t){case 64:case 127:case 126:case 125:case 124:return new s(t);case 96:{const t=e.readUleb128(),n=[...Array(t)].map((()=>o(e))),r=e.readUleb128(),i=[...Array(r)].map((()=>o(e)));return new s({type:"func",params:n,results:i})}default:throw`Unhnadled type: at 0x${(e.getOffset()-1).toString(16)}`}}function i(e){const t=e.readu8();switch(t){case 65:case 66:return e.readiconst();case 67:return e.readf32();case 68:return e.readf64();default:throw`Unhnadled type: ${t} at ${(e.getOffset()-1).toString(16)}`}}function a(e){const t=e.readu8(),r=n.get(t);if(null==r)throw`Unhandled op: 0x${t.toString(16).padStart(2,"0")} at 0x${e.getOffset().toString(16)}`;const s={opcode:t,opKind:r.opKind||0,opstr:r.op};return null!=r.operands&&(s.operandKinds=r.operands,s.operands=r.operands.map((t=>function(e,t){switch(t){case 0:return o(e);case 1:return e.readUleb128();case 2:{const t=e.readUleb128();return[...Array(t)].map((t=>e.readUleb128()))}case 3:case 4:return e.readiconst();case 5:return e.readf32();case 6:return e.readf64();default:throw`Unhandled operand: ${t} at 0x${e.getOffset().toString(16)}`}}(e,t)))),s}let c="    ";function l(e){const t=2*e;for(;t>c.length;)c+=c;return c.slice(0,t)}function d(e){return`(;${e.toString(16).padStart(5,"0")};)`}t.DisWasm=class{constructor(e){this.version=-1,this.types=new Array,this.functions=new Array,this.codes=new Array,this.importFuncCount=0,this.log=console.log,this.bufferReader=new r(e)}setLogFunc(e){this.log=e}dump(){if(!this.checkHeader())throw Error("No wasm header");this.log("(module"),this.log(`;; WASM version: ${this.version}`),this.loadSections(),this.log(")")}checkHeader(){const e=this.bufferReader.u8array(4);return"\0asm"===new TextDecoder("utf-8").decode(e)&&(this.version=this.bufferReader.readi32(),!0)}loadSections(){const e=[null,"TYPE","IMPORT","FUNC","TABLE","MEMORY","GLOBAL","EXPORT",null,"ELEM","CODE","DATA"];for(;!this.bufferReader.isEof();){const t=this.bufferReader.getOffset(),n=this.bufferReader.readu8(),r=this.bufferReader.readUleb128(),s=this.bufferReader.getOffset();switch(this.log(`\n;;=== 0x${t.toString(16)}: ${e[n]||`(section ${n})`}, len=${r}`),n){case 4:case 9:break;case 1:this.readTypeSection();break;case 2:this.readImportSection();break;case 3:this.readFuncSection();break;case 5:this.readMemorySection();break;case 6:this.readGlobalSection();break;case 7:this.readExportSection();break;case 10:this.readCodeSection();break;case 11:this.readDataSection();break;default:throw`Unhandled section: ${n}, offset=0x${t.toString(16)}, len=${r}`}this.bufferReader.setOffset(s+r)}}readTypeSection(){const e=this.bufferReader.readUleb128();for(let t=0;t<e;++t){const e=this.bufferReader.getOffset(),n=o(this.bufferReader);this.types.push(n),this.log(`${d(e)} (type (;${t};) ${n.toString()})`)}}readImportSection(){const e=this.bufferReader.readUleb128();for(let t=0;t<e;++t){const e=this.bufferReader.getOffset(),t=this.bufferReader.readString(),n=this.bufferReader.readString(),r=this.bufferReader.readu8();if(0!==r)throw`Illegal import kind: ${r}`;const s=this.bufferReader.readUleb128();this.log(`${d(e)} (import "${t}" "${n}" (func (;${this.importFuncCount};) (type ${s})))`),this.importFuncCount+=1}}readFuncSection(){const e=this.bufferReader.readUleb128();for(let t=0;t<e;++t){const e=this.bufferReader.readUleb128();this.functions.push(e)}}readMemorySection(){const e=this.bufferReader.readUleb128();for(let t=0;t<e;++t){const e=this.bufferReader.getOffset(),t=this.bufferReader.readUleb128(),n=this.bufferReader.readUleb128();this.log(`${d(e)} (memory (;${t};) ${n})`)}}readGlobalSection(){const e=this.bufferReader.readUleb128();for(let t=0;t<e;++t){const e=this.bufferReader.getOffset(),n=o(this.bufferReader),r=this.bufferReader.readu8(),s=i(this.bufferReader);this.log(`${d(e)} (global (;${t};) ${0!==r?`(mut ${n})`:`${n}`} (${n}.const ${s}))`),this.bufferReader.readu8()}}readExportSection(){const e=["func",null,"memory","global"],t=this.bufferReader.readUleb128();for(let n=0;n<t;++n){const t=this.bufferReader.getOffset(),n=this.bufferReader.readString(),r=this.bufferReader.readu8(),s=this.bufferReader.readUleb128();this.log(`${d(t)} (export "${n}" (${e[r]||`kind=${r}`} ${s}))`)}}readCodeSection(){const e=this.bufferReader.readUleb128();for(let t=0;t<e;++t){const e=this.bufferReader.getOffset(),n=this.functions[t];this.log(`${d(e)} (func (;${t+this.importFuncCount};) (type ${n})`);const r=this.readCode();this.codes.push(r)}}readCode(){const e=this.bufferReader.readUleb128(),t=this.bufferReader.getOffset()+e,n=this.bufferReader.readUleb128();if(n>0)for(let e=0;e<n;++e){const e=this.bufferReader.getOffset(),t=this.bufferReader.readUleb128(),n=o(this.bufferReader);this.log(`${d(e)}   ${[...Array(t)].map((e=>`(local ${n})`)).join(" ")}`)}const r=new Array;let s=1;for(;this.bufferReader.getOffset()<t;){const e=this.bufferReader.getOffset(),t=a(this.bufferReader);switch(r.push(t),t.opcode){case 5:case 11:if(--s,0===s&&11===t.opcode){this.log(`${d(e)} )`);continue}}const n=l(s);let o="";if(null!=t.operands)switch(t.opKind){case 1:{const e=t.operands[0];64!==e.getType()&&(o=`(result ${e.toString()})`)}break;case 2:case 3:break;case 4:o=`${t.operands[0].join(" ")} ${t.operands[1]}`;break;default:o=t.operands.map((e=>e.toString())).join(" ")}switch(this.log(`${d(e)} ${n}${t.opstr} ${o}`.trimEnd()),t.opcode){case 4:case 2:case 3:case 5:++s}}return r}readDataSection(){const e=this.bufferReader.readUleb128();for(let t=0;t<e;++t){const e=this.bufferReader.getOffset();if(this.bufferReader.readUleb128(),65!==this.bufferReader.readu8()||0!==this.bufferReader.readu8()||11!==this.bufferReader.readu8())throw"Illegal data";const n=this.bufferReader.readUleb128(),r=new Array(n);for(let e=0;e<n;++e){const t=this.bufferReader.readu8();r[e]=32<=t&&t<=126?String.fromCharCode(t):`\\${t.toString(16).padStart(2,"0")}`}this.log(`${d(e)} (data (;${t};) (i32.const 0) "${r.join("")}")`)}}}},386:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.DomUtil=void 0;const r=n(507);class s{static setStyles(e,t){Object.assign(e.style,t)}static setMouseDragListener(e,t,n){let r=null,s=null;if("object"==typeof e){const o=e;e=o.move,t=o.up,r=o.leave,n=o.useCapture,s=null==r?null:o.leaveTarget||document}const o=()=>{document.removeEventListener("mousemove",e,n),document.removeEventListener("mouseup",i,n),document.removeEventListener("touchmove",e,n),document.removeEventListener("touchend",i,n),a&&s&&(s.removeEventListener("mouseleave",a,n),s.removeEventListener("touchcancel",a,n))},i=e=>{t&&t(e),o()},a=null==r?null:e=>{r&&r(e)&&o()};document.addEventListener("mousemove",e,n),document.addEventListener("mouseup",i,n),document.addEventListener("touchmove",e,n),document.addEventListener("touchend",i,n),a&&s&&(s.addEventListener("mouseleave",a,n),s.addEventListener("touchcancel",a,n))}static getMousePosIn(e,t){const n=t.getBoundingClientRect(),r=document.body.scrollLeft,s=document.body.scrollTop,o=e.changedTouches;let i,a;if(o){const e=o[0];if(0!==e.identifier)return null;i=e.clientX,a=e.clientY}else{const t=e;i=t.pageX,a=t.pageY}return[i-n.left-r,a-n.top-s]}static createCanvas(e,t){const n=document.createElement("canvas");return n.width=e,n.height=t,n}static makeDraggable(e){const t=t=>{if("mousedown"===t.type&&0!==t.button)return!1;const n=document.body.getBoundingClientRect();t.preventDefault();const[o,i]=s.getMousePosIn(t,e),a=-o,c=-i,l=e.getBoundingClientRect(),d=l.width,u=l.height,f={x:o,y:i};return s.setMouseDragListener({move:t=>{const o=s.getMousePosIn(t,e.parentNode);null!=o&&(f.x=r.Util.clamp(o[0]+a,0,Math.floor(n.width-d)),f.y=r.Util.clamp(o[1]+c,0,Math.floor(n.height-u)),s.setStyles(e,{left:`${Math.round(f.x)}px`,top:`${Math.round(f.y)}px`}))},up:e=>{}}),!0};e.addEventListener("mousedown",t),e.addEventListener("touchstart",t)}static addDivButton(e,t){const n=document.createElement("div");return s.setStyles(n,{position:"absolute",right:0,top:0}),n.addEventListener("click",t),n.addEventListener("mousedown",(e=>0===e.button&&(e.stopPropagation(),!0))),n.addEventListener("touchstart",t),e.appendChild(n),n}static putOnCenter(e){const t=document.body.getBoundingClientRect(),n=e.getBoundingClientRect(),o=n.width,i=n.height,a=r.Util.clamp(.5*(t.width-o),0,Math.floor(t.width-o)),c=r.Util.clamp(.5*(t.height-i),0,Math.floor(t.height-i));s.setStyles(e,{left:`${Math.round(a)}px`,top:`${Math.round(c)}px`})}}t.DomUtil=s},110:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ExampleCodes=void 0;const r=n(834),s=n(581),o=n(485),i=n(395);t.ExampleCodes={hello:r,sieve:s,qsort:o,aobench:i}},949:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.FileSystem=t.WaStorage=void 0;const r=n(507),s={0:"r",1:"w",2:"w+",577:"w"};t.WaStorage=class{constructor(){this.files={}}putFile(e,t){"string"==typeof t&&(t=r.Util.encode(t)),console.assert(t.constructor===Uint8Array,t),this.files[e]=t}getFile(e){return this.files[e]}contains(e){return e in this.files}delete(e){delete this.files[e]}},t.FileSystem=class{constructor(e){this.storage=e,this.fileDescs=["stdin","stdout","stderr"]}saveFile(e,t){this.storage.putFile(e,t)}loadFile(e){return this.storage.getFile(e)}open(e,t,n){if(null==e||0===e.length)return-1;if(0==(3&t)&&!this.storage.contains(e))return-1;null==s[t]&&(console.error(`Unsupported open flag: ${t}`),process.exit(1));const r=this.allocFd(),o={absPath:e,rp:0};return 0!=(3&t)&&(o.write=[],o.writeTotal=0),this.fileDescs[r]=o,r}close(e){return null==this.fileDescs[e]?-1:(this.commitDesc(e),this.fileDescs[e]=null,0)}read(e,t){if(e<0||e>=this.fileDescs.length)return 0;const n=this.fileDescs[e];if(null==n)return 0;const r=null!=n.absPath?this.storage.getFile(n.absPath):n.written;if(null==r||n.rp>=r.length)return 0;const s=Math.min(r.length,n.rp+t.length);t.set(r.subarray(n.rp,s));const o=s-n.rp;return n.rp=s,o}write(e,t){if(e<0||e>=this.fileDescs.length)return 0;if(e<3){const n=r.Util.decodeString(t,0,t.length);return 1!==e&&2!==e||r.Util.putTerminal(n),t.length}const n=this.fileDescs[e];return null==n?0:(n.write.push(t.slice(0)),n.writeTotal+=t.byteLength,t.length)}lseek(e,t,n){const r=this.fileDescs[e];if(null==r)return-1;let s;switch(this.commitDesc(e),n){default:case 0:s=t;break;case 1:s=this.fileDescs[e].position+t;break;case 2:console.assert(!1,"TODO: Implement")}return r.rp=s,s}delete(e){this.storage.delete(e)}tmpfile(){const e=this.allocFd();return this.fileDescs[e]={absPath:null,rp:0,write:[],writeTotal:0},e}allocFd(){const e=this.fileDescs.length;for(let t=0;t<e;++t)if(null==this.fileDescs[t])return t;return this.fileDescs.push(null),e}commitDesc(e){if(0<=e&&e<this.fileDescs.length){const t=this.fileDescs[e];if(null!=t&&null!=t.write&&t.write.length>0){const e=new Uint8Array(t.writeTotal);let n=0;for(let r=0;r<t.write.length;++r){const s=t.write[r];new Uint8Array(e.buffer,n,s.byteLength).set(s),n+=s.byteLength}null!=t.absPath?this.saveFile(t.absPath,e):t.written=e,t.write.length=0}}}}},507:(e,t)=>{let n;Object.defineProperty(t,"__esModule",{value:!0}),t.Util=void 0;class r{static clamp(e,t,n){return n<t||e<t?t:e>n?n:e}static decodeString(e,t,n){const r=new Uint8Array(e,t,n);let s;for(s=0;s<r.length&&0!==r[s];++s);const o=new Uint8Array(e,t,s);return new TextDecoder("utf-8").decode(o)}static async loadFromServer(e,t=null){const n=await fetch(e,{method:"GET"});return n.ok?null!=t&&t.binary?await n.arrayBuffer():await n.text():Promise.reject(n)}static encode(e){return(new TextEncoder).encode(e)}static setTerminal(e){n=e}static putTerminal(e){n.session.insert(n.getCursorPosition(),e.toString())}static putTerminalError(e){console.error(e),r.putTerminal(e)}static clearTerminal(){n.setValue("",-1)}}t.Util=r},695:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.WaProc=t.ExitCalledError=void 0;const r=n(949),s=n(507);class o extends Error{constructor(e){super(`Exit code: ${e}`),this.code=e}}t.ExitCalledError=o,t.WaProc=class{constructor(e){this.cwd="/",this.encodedArgs=new Array,this.totalArgsBytes=0,this.fs=new r.FileSystem(e),this.imports=this.createImports()}getAbsPath(e){return e.length>0&&"/"===e[0]?e:`${this.cwd}${"/"===this.cwd?"":"/"}${e}`}chdir(e){this.cwd=e}saveFile(e,t){this.fs.saveFile(this.getAbsPath(e),t)}loadFile(e){return this.fs.loadFile(this.getAbsPath(e))}async runWasmEntry(e,t,n){const r=new TextEncoder;return this.encodedArgs=n.map((e=>r.encode(e))),this.totalArgsBytes=this.encodedArgs.reduce(((e,t)=>e+t.length+1),0),(await this.loadWasm(e)).exports[t]()}async loadWasm(e){let t;if("string"==typeof e)if(WebAssembly.instantiateStreaming)t=await WebAssembly.instantiateStreaming(fetch(e),this.imports);else{const n=await fetch(e),r=await n.arrayBuffer();t=await WebAssembly.instantiate(r,this.imports)}else{if(e.constructor!==Uint8Array)return console.error(`Path or buffer required: ${e}`),null;t=await WebAssembly.instantiate(e,this.imports)}const n=t.instance;return n.exports.memory&&(this.memory=n.exports.memory),n}registerCFunction(e,t){this.imports.c[e]=t}getLinearMemory(){return this.memory}createImports(){return{c:{args_sizes_get:(e,t)=>{new Uint32Array(this.memory.buffer,e,1)[0]=this.encodedArgs.length,new Uint32Array(this.memory.buffer,t,1)[0]=this.totalArgsBytes},args_get:(e,t)=>{const n=new Uint32Array(this.memory.buffer,e,this.encodedArgs.length),r=new Uint8Array(this.memory.buffer,t,this.totalArgsBytes);let s=0;for(let e=0;e<this.encodedArgs.length;++e){n[e]=t+s;const o=this.encodedArgs[e],i=o.length;for(let e=0;e<i;++e)r[e+s]=o[e];r[i+s]=0,s+=i+1}},read:(e,t,n)=>{const r=new Uint8Array(this.memory.buffer,t,n);return this.fs.read(e,r)},write:(e,t,n)=>{const r=new Uint8Array(this.memory.buffer,t,n);return this.fs.write(e,r)},open:(e,t,n)=>{if(0===e)return-1;const r=s.Util.decodeString(this.memory.buffer,e);if(null==r||""===r)return-1;const o=this.getAbsPath(r);return this.fs.open(o,t,n)},close:e=>this.fs.close(e),lseek:(e,t,n)=>this.fs.lseek(e,t,n),unlink:e=>{const t=s.Util.decodeString(this.memory.buffer,e);if(null==t||""===t)return-1;const n=this.getAbsPath(t);return this.fs.delete(n),0},_tmpfile:()=>this.fs.tmpfile(),_getcwd:(e,t)=>{const n=s.Util.encode(this.cwd),r=n.length;if(r+1>t)return-34;const o=new Uint8Array(this.memory.buffer,e,r+1);for(let e=0;e<r;++e)o[e]=n[e];return o[r]=0,r+1},sin:Math.sin,cos:Math.cos,tan:Math.tan,atan:Math.atan,sqrt:Math.sqrt,log:Math.log,exp:Math.exp,pow:Math.pow,fabs:Math.abs,floor:Math.floor,ceil:Math.ceil,fmod:(e,t)=>e%t,drand48:Math.random,erand48:Math.random,putstr:e=>{const t=s.Util.decodeString(this.memory.buffer,e);s.Util.putTerminal(t)},puti:e=>{s.Util.putTerminal(e)},exit:e=>{throw new o(e)},_memcpy:(e,t,n)=>{new Uint8Array(this.memory.buffer).copyWithin(e,t,t+n)},_memset:(e,t,n)=>{const r=new Uint8Array(this.memory.buffer);for(let s=0;s<n;++s)r[e++]=t}},env:{memory:this.memory}}}}},395:e=>{e.exports="#include <math.h>\n#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n#define WIDTH        (256)\n#define HEIGHT       (256)\n#define NSUBSAMPLES  (2)\n#define NAO_SAMPLES  (8)\n\ntypedef struct {double x, y, z;} vec;\n\nstatic double vdot(const vec *v0, const vec *v1) {\n  return v0->x * v1->x + v0->y * v1->y + v0->z * v1->z;\n}\n\nstatic void vnormalize(vec *c) {\n  double length = sqrt(vdot(c, c));\n  if (length > 1.0e-17) {\n    c->x /= length;\n    c->y /= length;\n    c->z /= length;\n  }\n}\n\ndouble EPS = 1.0e-6;\n\ntypedef struct {\n  double t;\n  vec p;\n  vec n;\n} Isect;\n\ntypedef struct {\n  vec center;\n  double radius;\n} Sphere;\n\ntypedef struct {\n  vec p;\n  vec n;\n} Plane;\n\ntypedef struct {\n  vec org;\n  vec dir;\n} Ray;\n\nvoid ray_sphere_intersect(Isect *isect, const Ray *ray, const Sphere *sphere) {\n  vec rs;\n  rs.x = ray->org.x - sphere->center.x;\n  rs.y = ray->org.y - sphere->center.y;\n  rs.z = ray->org.z - sphere->center.z;\n\n  double B = vdot(&rs, &ray->dir);\n  double C = vdot(&rs, &rs) - sphere->radius * sphere->radius;\n  double D = B * B - C;\n  if (D > 0.0) {\n    double t = -B - sqrt(D);\n    if (t > EPS && t < isect->t) {\n      isect->t = t;\n\n      isect->p.x = ray->org.x + ray->dir.x * t;\n      isect->p.y = ray->org.y + ray->dir.y * t;\n      isect->p.z = ray->org.z + ray->dir.z * t;\n\n      isect->n.x = isect->p.x - sphere->center.x;\n      isect->n.y = isect->p.y - sphere->center.y;\n      isect->n.z = isect->p.z - sphere->center.z;\n      vnormalize(&isect->n);\n    }\n  }\n}\n\nvoid ray_plane_intersect(Isect *isect, const Ray *ray, const Plane *plane) {\n  double d = -vdot(&plane->p, &plane->n);\n  double v = vdot(&ray->dir, &plane->n);\n\n  if (fabs(v) < EPS)\n    return;\n\n  double t = -(vdot(&ray->org, &plane->n) + d) / v;\n  if (t > EPS && t < isect->t) {\n    isect->t = t;\n\n    isect->p.x = ray->org.x + ray->dir.x * t;\n    isect->p.y = ray->org.y + ray->dir.y * t;\n    isect->p.z = ray->org.z + ray->dir.z * t;\n\n    isect->n = plane->n;\n  }\n}\n\ndouble copysign(double x, double f) {\n  return f >= 0 ? x : -x;\n}\n\nvoid orthoBasis(vec *basis, const vec *n) {\n  basis[2] = *n;\n  double sign = copysign(1.0, n->z);\n  const double a = -1.0 / (sign + n->z);\n  const double b = n->x * n->y * a;\n  basis[0].x = 1.0 + sign * n->x * n->x * a;\n  basis[0].y = sign * b;\n  basis[0].z = -sign * n->x;\n  basis[1].x = b;\n  basis[1].y = sign + n->y * n->y * a;\n  basis[1].z = -n->y;\n}\n\nconst Sphere spheres[3] = {\n  {{-2.0, 0, -3.5},  0.5},\n  {{-0.5, 0, -3.0},  0.5},\n  {{ 1.0, 0, -2.2},  0.5},\n};\n\nconst Plane plane = {\n  {0.0, -0.5, 0.0},\n  {0.0,  1.0, 0.0},\n};\n\nvec ambient_occlusion(const Isect *isect) {\n  int ntheta = NAO_SAMPLES;\n  int nphi   = NAO_SAMPLES;\n\n  vec basis[3];\n  orthoBasis(basis, &isect->n);\n\n  int occlusion = 0;\n  for (int j = 0; j < ntheta; ++j) {\n    for (int i = 0; i < nphi; ++i) {\n      double theta = sqrt(drand48());\n      double phi   = 2.0 * M_PI * drand48();\n\n      double x = cos(phi) * theta;\n      double y = sin(phi) * theta;\n      double z = sqrt(1.0 - theta * theta);\n\n      // local -> global\n      double rx = x * basis[0].x + y * basis[1].x + z * basis[2].x;\n      double ry = x * basis[0].y + y * basis[1].y + z * basis[2].y;\n      double rz = x * basis[0].z + y * basis[1].z + z * basis[2].z;\n\n      Ray ray;\n      ray.org = isect->p;\n      ray.dir.x = rx;\n      ray.dir.y = ry;\n      ray.dir.z = rz;\n\n      Isect occIsect;\n      occIsect.t   = HUGE_VAL;\n\n      ray_sphere_intersect(&occIsect, &ray, &spheres[0]);\n      ray_sphere_intersect(&occIsect, &ray, &spheres[1]);\n      ray_sphere_intersect(&occIsect, &ray, &spheres[2]);\n      ray_plane_intersect (&occIsect, &ray, &plane);\n\n      if (occIsect.t < HUGE_VAL)\n        ++occlusion;\n    }\n  }\n\n  double c = (ntheta * nphi - occlusion) / (double)(ntheta * nphi);\n  return (vec){c, c, c};\n}\n\nunsigned char clamp(double f) {\n  int i = (int)(f * 255.5);\n  if (i < 0) i = 0;\n  else if (i > 255) i = 255;\n  return i;\n}\n\nvoid render(unsigned char *img, int w, int h, int nsubsamples) {\n  double coeff = 1.0 / (nsubsamples * nsubsamples);\n  unsigned char *dst = img;\n  for (int y = 0; y < h; ++y) {\n    for (int x = 0; x < w; ++x) {\n      double cr = 0, cg = 0, cb = 0;\n      for (int v = 0; v < nsubsamples; ++v) {\n        for (int u = 0; u < nsubsamples; ++u) {\n          double px =  (x + (u / (double)nsubsamples) - (w / 2.0)) / (w / 2.0);\n          double py = -(y + (v / (double)nsubsamples) - (h / 2.0)) / (h / 2.0);\n\n          Ray ray;\n          ray.org.x = 0.0;\n          ray.org.y = 0.0;\n          ray.org.z = 0.0;\n\n          ray.dir.x = px;\n          ray.dir.y = py;\n          ray.dir.z = -1.0;\n          vnormalize(&ray.dir);\n\n          Isect isect;\n          isect.t = HUGE_VAL;\n\n          ray_sphere_intersect(&isect, &ray, &spheres[0]);\n          ray_sphere_intersect(&isect, &ray, &spheres[1]);\n          ray_sphere_intersect(&isect, &ray, &spheres[2]);\n          ray_plane_intersect (&isect, &ray, &plane);\n\n          if (isect.t < HUGE_VAL) {\n            vec col = ambient_occlusion(&isect);\n            cr += col.x;\n            cg += col.y;\n            cb += col.z;\n          }\n        }\n      }\n\n      *dst++ = clamp(cr * coeff);\n      *dst++ = clamp(cg * coeff);\n      *dst++ = clamp(cb * coeff);\n      *dst++ = 255;\n    }\n  }\n}\n\nextern void showGraphic(int width, int height, void *img);\n\nint main(void) {\n  unsigned char *img = malloc(WIDTH * HEIGHT * 4);\n  render(img, WIDTH, HEIGHT, NSUBSAMPLES);\n  showGraphic(WIDTH, HEIGHT, img);\n  return 0;\n}"},834:e=>{e.exports='#include <stdio.h>\n\nint main(void) {\n  printf("Hello, world!\\n");\n  return 0;\n}\n'},485:e=>{e.exports='#include <stdio.h>\n#include <stdlib.h>\n\nint compare(const void *va, const void *vb) {\n  const int *pa = va;\n  const int *pb = vb;\n  return *pa - *pb;\n}\n\nint main(int argc, char *argv[]) {\n  int array[] = {5, 9, 3, 8, 4, 0, 7, 1, 6, 2};\n\n  qsort(array, sizeof(array) / sizeof(*array), sizeof(*array), compare);\n\n  for (int i = 0; i < sizeof(array) / sizeof(*array); ++i)\n    printf("%d ", array[i]);\n  printf("\\n");\n  return 0;\n}'},581:e=>{e.exports='#include <stdbool.h>\n#include <stdint.h>\n#include <stdio.h>\n#include <stdlib.h>\n\nvoid sieve(int n) {\n  uint8_t *notprime = calloc(sizeof(*notprime), n);\n  if (notprime == NULL) {\n    exit(1);\n  }\n\n  for (int i = 2; i < n; ++i) {\n    if (notprime[i])\n      continue;\n    printf("%d\\n", i);\n    for (int j = i * i; j < n; j += i)\n      notprime[j] = true;\n  }\n  free(notprime);\n}\n\nint main(int argc, char *argv[]) {\n  int n = 100;\n  if (argc > 1) {\n    n = atoi(argv[1]);\n    if (n < 2) {\n      return 1;\n    }\n  }\n  sieve(n);\n  return 0;\n}\n'}},t={};function n(r){var s=t[r];if(void 0!==s)return s.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}(()=>{const e=n(132),t=n(386),r=n(507),s=n(695),o=n(949),i=n(110),a="wcc-code",c=new(ace.require("ace/ext/split").Split)(document.getElementById("editor"));c.setOrientation(c.BESIDE),c.setSplits(2),c.setFontSize(16);const l=ace.require("ace/undomanager").UndoManager,d=(()=>{const e=c.getEditor(0);e.setOptions({tabSize:2,useSoftTabs:!0,printMarginColumn:!1}),e.setTheme("ace/theme/monokai"),e.getSession().setMode("ace/mode/c_cpp"),e.renderer.$cursorLayer.setBlinking(!0),e.container.classList.add("code-editor");const t=document.getElementById("default-code");t&&e.setValue(t.innerText.trim()+"\n",-1),e.gotoLine(0,0,!1),e.focus();const n=new l;return e.getSession().setUndoManager(n),e.commands.addCommands([{name:"Undo",bindKey:{win:"Ctrl-Z",mac:"Command-Z"},exec:e=>e.session.getUndoManager().undo()},{name:"Redo",bindKey:{win:"Ctrl-Shift-Z",mac:"Command-Shift-Z"},exec:e=>e.session.getUndoManager().redo()}]),e})();function u(){return!d.session.getUndoManager().isAtBookmark()}function f(){d.session.getUndoManager().bookmark()}function h(e,t){return!(null==e||u()&&!window.confirm(`Buffer modified. ${t} anyway?`)||(r.Util.clearTerminal(),""!==e&&(e=e.trim()+"\n"),d.setValue(e,-1),d.session.getUndoManager().reset(),d.gotoLine(0,0,!1),d.focus(),0))}const p=(()=>{const e=c.getEditor(1);return e.$blockScrolling=1/0,e.setOptions({tabSize:2,useSoftTabs:!0,printMarginColumn:!1}),e.setReadOnly(!0),e.getSession().setMode("ace/mode/text"),e.setValue("XCC browser version.\n",-1),e})();function m(e){return encodeURIComponent(e).replace(/[!'()*]/g,(e=>"%"+e.charCodeAt(0).toString(16)))}function y(){""!==window.location.search&&window.history.replaceState(null,document.title,window.location.pathname)}async function g(e){try{const t=await e.createWritable(),n=d.getValue();return await t.write(n),await t.close(),f(),alert(`${e.name} Saved!`),!0}catch(e){return console.error(e),!1}}r.Util.setTerminal(p);const b=new o.WaStorage;let w;async function v(n,o){if(null==w)return;let i;r.Util.clearTerminal(),d.focus();try{const e=o?["-nodefaultlibs"]:void 0;if(i=await async function(e,t){const n="main.c",r=new s.WaProc(b);r.chdir("/home/wasm"),r.saveFile(n,e);let o=["cc","-I/usr/include","-L/usr/lib"];return null!=t&&(o=o.concat(t)),o.push(n),0!==await r.runWasmEntry(w,"_start",o)?null:r.loadFile("a.wasm")}(d.getValue(),e),null==i)return}catch(e){return void(e instanceof s.ExitCalledError||r.Util.putTerminalError(e))}if(o){const t=new e.DisWasm(i.buffer);return t.setLogFunc((e=>r.Util.putTerminal(`${e}\n`))),void t.dump()}const a=new s.WaProc(b);a.chdir("/home/wasm"),a.registerCFunction("showGraphic",((e,n,r)=>{const s=t.DomUtil.createCanvas(e,n);t.DomUtil.setStyles(s,{display:"block"}),function(e,t,n){const r=e.getContext("2d"),s=r.getImageData(0,0,e.width,e.height);s.data.set(new Uint8Array(t.buffer,n,e.width*e.height*4)),r.putImageData(s,0,0)}(s,a.getLinearMemory(),r);const o=document.createElement("div");o.className="wnd draggable",t.DomUtil.setStyles(o,{zIndex:1e4}),o.appendChild(s),t.DomUtil.makeDraggable(o),t.DomUtil.addDivButton(o,(()=>{var e;null===(e=o.parentNode)||void 0===e||e.removeChild(o)})).className="close-button",document.body.appendChild(o),t.DomUtil.putOnCenter(o)}));const c=""===n?[]:n.trim().split(/\s+/);c.unshift("a.wasm");try{const e=await a.runWasmEntry(i,"_start",c);0!==e&&console.error(`Exit code=${e}`)}catch(e){return void(e instanceof s.ExitCalledError||r.Util.putTerminalError(e))}}window.addEventListener("load",(()=>{window.addEventListener("resize",(()=>{c.resize()}),!1),window.addEventListener("beforeunload",(e=>{u()&&(e.preventDefault(),e.returnValue="")}))}));const _={types:[{description:"C source",accept:{"text/c":[".c"]}}]},S="Compile";window.initialData={showSysmenu:!1,example:"",shareUrl:null,args:"",loaded:!1,canAccessLocalFile:!!window.showOpenFilePicker,fileHandle:null,runMode:"Run",showRunModeDropdown:!1,init(){Promise.all([r.Util.loadFromServer("cc.wasm",{binary:!0}).then((e=>w=new Uint8Array(e))).catch((e=>{throw r.Util.putTerminalError("Failed to load compiler.wasm\n"),e})),r.Util.loadFromServer("libs.json").then((e=>{!function e(t,n){for(const r of Object.keys(n)){const s=`${t}/${r}`;"string"==typeof n[r]?b.putFile(s,n[r]):e(s,n[r])}}("",JSON.parse(e))})).catch((e=>{throw r.Util.putTerminalError("Failed to load libs\n"),e}))]).then((e=>{this.loaded=!0}));const e=new URLSearchParams(window.location.search);e.has("code")?(h(e.get("code")||"",""),this.args=e.get("args")||""):function(){const e=localStorage.getItem(a);return null!=e&&(h(e,""),!0)}()||h(i.ExampleCodes.hello,"Hello"),d.commands.addCommands([{name:"Run",bindKey:{win:"Ctrl-Enter",mac:"Command-Enter"},exec:e=>this.loaded&&v(this.args,this.runMode===S)},{name:"Save",bindKey:{win:"Ctrl-S",mac:"Command-S"},exec:(e,t)=>this.saveFile()}]),this.$watch("example",(e=>{this.closeSysmenu(),y();const t=i.ExampleCodes[e],n=document.getElementById("example-select");h(t,`Load "${[].slice.call(n.options).find((t=>t.value===e)).text}"`),this.args="",this.example="",this.fileHandle=null}))},onClickNavOpen(){const e=d.getValue().trim();if(""!==e){const t=this.args.trim();this.shareUrl=`?code=${m(e)}&args=${m(t)}`}else this.shareUrl=null;this.showSysmenu=!0},closeSysmenu(){this.showSysmenu=!1},newFile(e){e.preventDefault(),this.closeSysmenu(),h("","New"),this.fileHandle=null,y()},async loadFile(e){e.preventDefault();try{const[e]=await window.showOpenFilePicker(_),t=await e.getFile();h(await t.text(),`Load "${e.name}"`),this.fileHandle=e}finally{this.closeSysmenu(),y()}},async saveFile(e){null==e||e.preventDefault();let t=!1;if(this.canAccessLocalFile){if(null==this.fileHandle)return await this.saveFileAs(e);this.closeSysmenu(),t=await g(this.fileHandle)}else this.closeSysmenu(),function(){const e=d.getValue();localStorage.setItem(a,e),f()}(),alert("Saved!"),window.location.hash="",t=!0;return t&&y(),t},async saveFileAs(e){null==e||e.preventDefault();let t=!1;try{const e=await window.showSaveFilePicker(_);t=await g(e),t&&(this.fileHandle=e)}catch(e){console.error(e)}return this.closeSysmenu(),t&&y(),t},shareLink(e){if(e.preventDefault(),null!=this.shareUrl){this.closeSysmenu();const e=new URL(this.shareUrl,window.location.href);let t=e.pathname;e.search&&(t+=e.search),window.history.replaceState(null,document.title,t),navigator.clipboard.writeText(e.toString()).then((e=>alert("URL copied!")))}return!1},runCode(){this.loaded&&v(this.args,this.runMode===S)},toggleRunModeDropdown(){this.showRunModeDropdown=!this.showRunModeDropdown,this.showRunModeDropdown||d.focus()},setRunMode(e){this.runMode=e,d.focus()}}})()})();