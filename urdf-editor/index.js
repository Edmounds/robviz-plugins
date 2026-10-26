import { createContext as e, createElement as t, forwardRef as n, useCallback as r, useContext as i, useEffect as a, useRef as o, useState as s } from "react";
import { Button as c, Checkbox as l, EmptyState as u, NumberInput as d, Page as f, SceneManager as p, SplitGroup as m, SplitHandle as h, SplitPanel as g, TfBuffer as _, Toolbar as v, useI18n as y, useSplitGroupRef as ee } from "@robviz/core";
import * as b from "three";
import { AmbientLight as x, AnimationClip as S, Bone as C, BufferAttribute as w, BufferGeometry as te, ClampToEdgeWrapping as T, Color as E, ColorManagement as ne, DataTextureLoader as re, DirectionalLight as ie, DoubleSide as ae, Euler as oe, FileLoader as se, Float32BufferAttribute as ce, FrontSide as D, Group as le, InterpolateBezier as ue, InterpolateDiscrete as de, Line as fe, LineBasicMaterial as pe, LineSegments as me, LinearMipmapLinearFilter as he, Loader as ge, LoaderUtils as _e, Material as ve, MathUtils as ye, Matrix4 as be, Mesh as xe, MeshBasicMaterial as Se, MeshLambertMaterial as Ce, MeshPhongMaterial as we, Object3D as Te, OrthographicCamera as Ee, PerspectiveCamera as De, PointLight as Oe, Points as ke, PointsMaterial as Ae, Quaternion as je, QuaternionKeyframeTrack as Me, RepeatWrapping as Ne, SRGBColorSpace as Pe, Scene as Fe, ShapeUtils as Ie, Skeleton as Le, SkinnedMesh as Re, SpotLight as ze, TextureLoader as Be, Triangle as Ve, Vector2 as He, Vector3 as O, VectorKeyframeTrack as Ue } from "three";
import { jsx as k, jsxs as A } from "react/jsx-runtime";
// node_modules/@marijn/find-cluster-break/src/index.js
var We = [], Ge = [];
(() => {
	let e = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,1n,9,16,o,,x,1i,3,,i,,7,a,2,t,3,1k,,,7,2,2,2,3,9,,a,2,q,,2,3,1k,,,5,4,2,2,3,3,,u,2,3,,b,3,1k,,,8,,3,,3,k,2,m,6,,3,1k,,,7,2,2,2,3,7,3,a,2,u,,1n,5,3,3,,4,9,,14,5,1j,,,7,,3,,4,7,2,b,2,t,3,1k,,,7,,3,,4,7,2,b,2,f,,c,4,1j,2,,7,,3,,4,9,,a,2,t,3,1y,,4,6,,,,8,i,2,1p,,,8,c,8,2q,,,a,b,7,21,2,r,,,,,,4,2,1d,k,,2,5,b,,10,9,,2u,b,,6,n,4,4,3,g,4,d,,,3,6,,f,,jj,3,qa,4,s,3,t,2,u,2,1s,w,9,,19,3,,,39,2,y,,3a,c,4,c,63,5,1l,a,,,,,2,o,2,,1c,1a,2,c,k,5,1b,h,12,9,c,3,u,d,1k,e,1c,k,48,3,,l,4,,6,,2,3,5i,1s,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,n,5,4,,2b,2,1e,i,q,i,d,,12,8,p,d,18,4,1b,e,10,,1v,e,c,,8,2,1a,,1f,,,3,2,2,5,2,,,15,5,5,2,6k,8,,2,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,1t,5,8t,2,25,6,1y,b,1d,4,3e,3,1h,f,15,,2,2,a,4,19,b,7,,1p,3,10,e,g,2,18,,c,3,1c,e,8,4,,2,2k,c,6,,2,,4d,c,l,4,1j,2,,7,2,2,2,3,9,,a,2,2,7,3,5,1v,9,,,2,,,4,,5,,,e,2,2a,i,n,,29,k,6j,7,2,9,r,2,2a,h,2y,d,2t,3,2,a,74,f,6t,6,,2,2,4,,,,2,3x,7,2,7,3,,s,a,14,7,,4,8,,9,b,1a,g,5i,8,5j,8,,8,2a,m,,e,3e,6,3,,,2,,7,,,1u,5,,2,,5,9n,4,9,2,,,1c,7,3,5,n,,44l,,6,f,8ug,i,1xc,5,1n,7,t4,,,1j,7,4,29,,b,2,f57,2,3mp,1a,2,n,f2,5,3,6,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,2s,,4g,7,af,,1p,4,e4,4,72,2,6r,,2,,7,2,5,,d6,7,31,7,240,5".split(",").map((e) => e ? parseInt(e, 36) : 1);
	for (let t = 0, n = 0; t < e.length; t++) (t % 2 ? Ge : We).push(n += e[t]);
})();
function Ke(e) {
	if (e < 768) return !1;
	for (let t = 0, n = We.length;;) {
		let r = t + n >> 1;
		if (e < We[r]) n = r;
		else if (e >= Ge[r]) t = r + 1;
		else return !0;
		if (t == n) return !1;
	}
}
function qe(e) {
	return e >= 127462 && e <= 127487;
}
var Je = 8205;
function Ye(e, t, n = !0, r = !0) {
	return (n ? Xe : Ze)(e, t, r);
}
function Xe(e, t, n) {
	if (t == e.length) return t;
	t && $e(e.charCodeAt(t)) && et(e.charCodeAt(t - 1)) && t--;
	let r = Qe(e, t);
	for (t += tt(r); t < e.length;) {
		let i = Qe(e, t);
		if (r == Je || i == Je || n && Ke(i)) t += tt(i), r = i;
		else if (qe(i)) {
			let n = 0, r = t - 2;
			for (; r >= 0 && qe(Qe(e, r));) n++, r -= 2;
			if (n % 2 == 0) break;
			t += 2;
		} else break;
	}
	return t;
}
function Ze(e, t, n) {
	for (; t > 1;) {
		let r = Xe(e, t - 2, n);
		if (r < t) return r;
		t--;
	}
	return 0;
}
function Qe(e, t) {
	let n = e.charCodeAt(t);
	if (!et(n) || t + 1 == e.length) return n;
	let r = e.charCodeAt(t + 1);
	return $e(r) ? (n - 55296 << 10) + (r - 56320) + 65536 : n;
}
function $e(e) {
	return e >= 56320 && e < 57344;
}
function et(e) {
	return e >= 55296 && e < 56320;
}
function tt(e) {
	return e < 65536 ? 1 : 2;
}
// node_modules/@codemirror/state/dist/index.js
var j = class e {
	lineAt(e) {
		if (e < 0 || e > this.length) throw RangeError(`Invalid position ${e} in document of length ${this.length}`);
		return this.lineInner(e, !1, 1, 0);
	}
	line(e) {
		if (e < 1 || e > this.lines) throw RangeError(`Invalid line number ${e} in ${this.lines}-line document`);
		return this.lineInner(e, !0, 1, 0);
	}
	replace(e, t, n) {
		[e, t] = dt(this, e, t);
		let r = [];
		return this.decompose(0, e, r, 2), n.length && n.decompose(0, n.length, r, 3), this.decompose(t, this.length, r, 1), rt.from(r, this.length - (t - e) + n.length);
	}
	append(e) {
		return this.replace(this.length, this.length, e);
	}
	slice(e, t = this.length) {
		[e, t] = dt(this, e, t);
		let n = [];
		return this.decompose(e, t, n, 0), rt.from(n, t - e);
	}
	eq(e) {
		if (e == this) return !0;
		if (e.length != this.length || e.lines != this.lines) return !1;
		let t = this.scanIdentical(e, 1), n = this.length - this.scanIdentical(e, -1), r = new st(this), i = new st(e);
		for (let e = t, a = t;;) {
			if (r.next(e), i.next(e), e = 0, r.lineBreak != i.lineBreak || r.done != i.done || r.value != i.value) return !1;
			if (a += r.value.length, r.done || a >= n) return !0;
		}
	}
	iter(e = 1) {
		return new st(this, e);
	}
	iterRange(e, t = this.length) {
		return new ct(this, e, t);
	}
	iterLines(e, t) {
		let n;
		if (e == null) n = this.iter();
		else {
			t ??= this.lines + 1;
			let r = this.line(e).from;
			n = this.iterRange(r, Math.max(r, t == this.lines + 1 ? this.length : t <= 1 ? 0 : this.line(t - 1).to));
		}
		return new lt(n);
	}
	toString() {
		return this.sliceString(0);
	}
	toJSON() {
		let e = [];
		return this.flatten(e), e;
	}
	constructor() {}
	static of(t) {
		if (t.length == 0) throw RangeError("A document must have at least one line");
		return t.length == 1 && !t[0] ? e.empty : t.length <= 32 ? new nt(t) : rt.from(nt.split(t, []));
	}
}, nt = class e extends j {
	constructor(e, t = it(e)) {
		super(), this.text = e, this.length = t;
	}
	get lines() {
		return this.text.length;
	}
	get children() {
		return null;
	}
	lineInner(e, t, n, r) {
		for (let i = 0;; i++) {
			let a = this.text[i], o = r + a.length;
			if ((t ? n : o) >= e) return new ut(r, o, n, a);
			r = o + 1, n++;
		}
	}
	decompose(t, n, r, i) {
		let a = t <= 0 && n >= this.length ? this : new e(ot(this.text, t, n), Math.min(n, this.length) - Math.max(0, t));
		if (i & 1) {
			let t = r.pop(), n = at(a.text, t.text.slice(), 0, a.length);
			if (n.length <= 32) r.push(new e(n, t.length + a.length));
			else {
				let t = n.length >> 1;
				r.push(new e(n.slice(0, t)), new e(n.slice(t)));
			}
		} else r.push(a);
	}
	replace(t, n, r) {
		if (!(r instanceof e)) return super.replace(t, n, r);
		[t, n] = dt(this, t, n);
		let i = at(this.text, at(r.text, ot(this.text, 0, t)), n), a = this.length + r.length - (n - t);
		return i.length <= 32 ? new e(i, a) : rt.from(e.split(i, []), a);
	}
	sliceString(e, t = this.length, n = "\n") {
		[e, t] = dt(this, e, t);
		let r = "";
		for (let i = 0, a = 0; i <= t && a < this.text.length; a++) {
			let o = this.text[a], s = i + o.length;
			i > e && a && (r += n), e < s && t > i && (r += o.slice(Math.max(0, e - i), t - i)), i = s + 1;
		}
		return r;
	}
	flatten(e) {
		for (let t of this.text) e.push(t);
	}
	scanIdentical() {
		return 0;
	}
	static split(t, n) {
		let r = [], i = -1;
		for (let a of t) r.push(a), i += a.length + 1, r.length == 32 && (n.push(new e(r, i)), r = [], i = -1);
		return i > -1 && n.push(new e(r, i)), n;
	}
}, rt = class e extends j {
	constructor(e, t) {
		super(), this.children = e, this.length = t, this.lines = 0;
		for (let t of e) this.lines += t.lines;
	}
	lineInner(e, t, n, r) {
		for (let i = 0;; i++) {
			let a = this.children[i], o = r + a.length, s = n + a.lines - 1;
			if ((t ? s : o) >= e) return a.lineInner(e, t, n, r);
			r = o + 1, n = s + 1;
		}
	}
	decompose(e, t, n, r) {
		for (let i = 0, a = 0; a <= t && i < this.children.length; i++) {
			let o = this.children[i], s = a + o.length;
			if (e <= s && t >= a) {
				let i = r & (a <= e | (s >= t ? 2 : 0));
				a >= e && s <= t && !i ? n.push(o) : o.decompose(e - a, t - a, n, i);
			}
			a = s + 1;
		}
	}
	replace(t, n, r) {
		if ([t, n] = dt(this, t, n), r.lines < this.lines) for (let i = 0, a = 0; i < this.children.length; i++) {
			let o = this.children[i], s = a + o.length;
			if (t >= a && n <= s) {
				let c = o.replace(t - a, n - a, r), l = this.lines - o.lines + c.lines;
				if (c.lines < l >> 4 && c.lines > l >> 6) {
					let a = this.children.slice();
					return a[i] = c, new e(a, this.length - (n - t) + r.length);
				}
				return super.replace(a, s, c);
			}
			a = s + 1;
		}
		return super.replace(t, n, r);
	}
	sliceString(e, t = this.length, n = "\n") {
		[e, t] = dt(this, e, t);
		let r = "";
		for (let i = 0, a = 0; i < this.children.length && a <= t; i++) {
			let o = this.children[i], s = a + o.length;
			a > e && i && (r += n), e < s && t > a && (r += o.sliceString(e - a, t - a, n)), a = s + 1;
		}
		return r;
	}
	flatten(e) {
		for (let t of this.children) t.flatten(e);
	}
	scanIdentical(t, n) {
		if (!(t instanceof e)) return 0;
		let r = 0, [i, a, o, s] = n > 0 ? [
			0,
			0,
			this.children.length,
			t.children.length
		] : [
			this.children.length - 1,
			t.children.length - 1,
			-1,
			-1
		];
		for (;; i += n, a += n) {
			if (i == o || a == s) return r;
			let e = this.children[i], c = t.children[a];
			if (e != c) return r + e.scanIdentical(c, n);
			r += e.length + 1;
		}
	}
	static from(t, n = t.reduce((e, t) => e + t.length + 1, -1)) {
		let r = 0;
		for (let e of t) r += e.lines;
		if (r < 32) {
			let e = [];
			for (let n of t) n.flatten(e);
			return new nt(e, n);
		}
		let i = Math.max(32, r >> 5), a = i << 1, o = i >> 1, s = [], c = 0, l = -1, u = [];
		function d(t) {
			let n;
			if (t.lines > a && t instanceof e) for (let e of t.children) d(e);
			else t.lines > o && (c > o || !c) ? (f(), s.push(t)) : t instanceof nt && c && (n = u[u.length - 1]) instanceof nt && t.lines + n.lines <= 32 ? (c += t.lines, l += t.length + 1, u[u.length - 1] = new nt(n.text.concat(t.text), n.length + 1 + t.length)) : (c + t.lines > i && f(), c += t.lines, l += t.length + 1, u.push(t));
		}
		function f() {
			c != 0 && (s.push(u.length == 1 ? u[0] : e.from(u, l)), l = -1, c = u.length = 0);
		}
		for (let e of t) d(e);
		return f(), s.length == 1 ? s[0] : new e(s, n);
	}
};
j.empty = /*@__PURE__*/ new nt([""], 0);
function it(e) {
	let t = -1;
	for (let n of e) t += n.length + 1;
	return t;
}
function at(e, t, n = 0, r = 1e9) {
	for (let i = 0, a = 0, o = !0; a < e.length && i <= r; a++) {
		let s = e[a], c = i + s.length;
		c >= n && (c > r && (s = s.slice(0, r - i)), i < n && (s = s.slice(n - i)), o ? (t[t.length - 1] += s, o = !1) : t.push(s)), i = c + 1;
	}
	return t;
}
function ot(e, t, n) {
	return at(e, [""], t, n);
}
var st = class {
	constructor(e, t = 1) {
		this.dir = t, this.done = !1, this.lineBreak = !1, this.value = "", this.nodes = [e], this.offsets = [t > 0 ? 1 : (e instanceof nt ? e.text.length : e.children.length) << 1];
	}
	nextInner(e, t) {
		for (this.done = this.lineBreak = !1;;) {
			let n = this.nodes.length - 1, r = this.nodes[n], i = this.offsets[n], a = i >> 1, o = r instanceof nt ? r.text.length : r.children.length;
			if (a == (t > 0 ? o : 0)) {
				if (n == 0) return this.done = !0, this.value = "", this;
				t > 0 && this.offsets[n - 1]++, this.nodes.pop(), this.offsets.pop();
			} else if ((i & 1) == (t > 0 ? 0 : 1)) {
				if (this.offsets[n] += t, e == 0) return this.lineBreak = !0, this.value = "\n", this;
				e--;
			} else if (r instanceof nt) {
				let i = r.text[a + (t < 0 ? -1 : 0)];
				if (this.offsets[n] += t, i.length > Math.max(0, e)) return this.value = e == 0 ? i : t > 0 ? i.slice(e) : i.slice(0, i.length - e), this;
				e -= i.length;
			} else {
				let i = r.children[a + (t < 0 ? -1 : 0)];
				e > i.length ? (e -= i.length, this.offsets[n] += t) : (t < 0 && this.offsets[n]--, this.nodes.push(i), this.offsets.push(t > 0 ? 1 : (i instanceof nt ? i.text.length : i.children.length) << 1));
			}
		}
	}
	next(e = 0) {
		return e < 0 && (this.nextInner(-e, -this.dir), e = this.value.length), this.nextInner(e, this.dir);
	}
}, ct = class {
	constructor(e, t, n) {
		this.value = "", this.done = !1, this.cursor = new st(e, t > n ? -1 : 1), this.pos = t > n ? e.length : 0, this.from = Math.min(t, n), this.to = Math.max(t, n);
	}
	nextInner(e, t) {
		if (t < 0 ? this.pos <= this.from : this.pos >= this.to) return this.value = "", this.done = !0, this;
		e += Math.max(0, t < 0 ? this.pos - this.to : this.from - this.pos);
		let n = t < 0 ? this.pos - this.from : this.to - this.pos;
		e > n && (e = n), n -= e;
		let { value: r } = this.cursor.next(e);
		return this.pos += (r.length + e) * t, this.value = r.length <= n ? r : t < 0 ? r.slice(r.length - n) : r.slice(0, n), this.done = !this.value, this;
	}
	next(e = 0) {
		return e < 0 ? e = Math.max(e, this.from - this.pos) : e > 0 && (e = Math.min(e, this.to - this.pos)), this.nextInner(e, this.cursor.dir);
	}
	get lineBreak() {
		return this.cursor.lineBreak && this.value != "";
	}
}, lt = class {
	constructor(e) {
		this.inner = e, this.afterBreak = !0, this.value = "", this.done = !1;
	}
	next(e = 0) {
		let { done: t, lineBreak: n, value: r } = this.inner.next(e);
		return t && this.afterBreak ? (this.value = "", this.afterBreak = !1) : t ? (this.done = !0, this.value = "") : n ? this.afterBreak ? this.value = "" : (this.afterBreak = !0, this.next()) : (this.value = r, this.afterBreak = !1), this;
	}
	get lineBreak() {
		return !1;
	}
};
typeof Symbol < "u" && (j.prototype[Symbol.iterator] = function() {
	return this.iter();
}, st.prototype[Symbol.iterator] = ct.prototype[Symbol.iterator] = lt.prototype[Symbol.iterator] = function() {
	return this;
});
var ut = class {
	constructor(e, t, n, r) {
		this.from = e, this.to = t, this.number = n, this.text = r;
	}
	get length() {
		return this.to - this.from;
	}
};
function dt(e, t, n) {
	return t = Math.max(0, Math.min(e.length, t)), [t, Math.max(t, Math.min(e.length, n))];
}
function M(e, t, n = !0, r = !0) {
	return Ye(e, t, n, r);
}
function ft(e) {
	return e >= 56320 && e < 57344;
}
function pt(e) {
	return e >= 55296 && e < 56320;
}
function mt(e, t) {
	let n = e.charCodeAt(t);
	if (!pt(n) || t + 1 == e.length) return n;
	let r = e.charCodeAt(t + 1);
	return ft(r) ? (n - 55296 << 10) + (r - 56320) + 65536 : n;
}
function ht(e) {
	return e <= 65535 ? String.fromCharCode(e) : (e -= 65536, String.fromCharCode((e >> 10) + 55296, (e & 1023) + 56320));
}
function gt(e) {
	return e < 65536 ? 1 : 2;
}
var _t = /\r\n?|\n/, vt = /*@__PURE__*/ (function(e) {
	return e[e.Simple = 0] = "Simple", e[e.TrackDel = 1] = "TrackDel", e[e.TrackBefore = 2] = "TrackBefore", e[e.TrackAfter = 3] = "TrackAfter", e;
})(vt ||= {}), yt = class e {
	constructor(e) {
		this.sections = e;
	}
	get length() {
		let e = 0;
		for (let t = 0; t < this.sections.length; t += 2) e += this.sections[t];
		return e;
	}
	get newLength() {
		let e = 0;
		for (let t = 0; t < this.sections.length; t += 2) {
			let n = this.sections[t + 1];
			e += n < 0 ? this.sections[t] : n;
		}
		return e;
	}
	get empty() {
		return this.sections.length == 0 || this.sections.length == 2 && this.sections[1] < 0;
	}
	iterGaps(e) {
		for (let t = 0, n = 0, r = 0; t < this.sections.length;) {
			let i = this.sections[t++], a = this.sections[t++];
			a < 0 ? (e(n, r, i), r += i) : r += a, n += i;
		}
	}
	iterChangedRanges(e, t = !1) {
		Ct(this, e, t);
	}
	get invertedDesc() {
		let t = [];
		for (let e = 0; e < this.sections.length;) {
			let n = this.sections[e++], r = this.sections[e++];
			r < 0 ? t.push(n, r) : t.push(r, n);
		}
		return new e(t);
	}
	composeDesc(e) {
		return this.empty ? e : e.empty ? this : Tt(this, e);
	}
	mapDesc(e, t = !1) {
		return e.empty ? this : wt(this, e, t);
	}
	mapPos(e, t = -1, n = vt.Simple) {
		let r = 0, i = 0;
		for (let a = 0; a < this.sections.length;) {
			let o = this.sections[a++], s = this.sections[a++], c = r + o;
			if (s < 0) {
				if (c > e) return i + (e - r);
				i += o;
			} else {
				if (n != vt.Simple && c >= e && (n == vt.TrackDel && r < e && c > e || n == vt.TrackBefore && r < e || n == vt.TrackAfter && c > e)) return null;
				if (c > e || c == e && t < 0 && !o) return e == r || t < 0 ? i : i + s;
				i += s;
			}
			r = c;
		}
		if (e > r) throw RangeError(`Position ${e} is out of range for changeset of length ${r}`);
		return i;
	}
	touchesRange(e, t = e) {
		for (let n = 0, r = 0; n < this.sections.length && r <= t;) {
			let i = this.sections[n++], a = this.sections[n++], o = r + i;
			if (a >= 0 && r <= t && o >= e) return r < e && o > t ? "cover" : !0;
			r = o;
		}
		return !1;
	}
	toString() {
		let e = "";
		for (let t = 0; t < this.sections.length;) {
			let n = this.sections[t++], r = this.sections[t++];
			e += (e ? " " : "") + n + (r >= 0 ? ":" + r : "");
		}
		return e;
	}
	toJSON() {
		return this.sections;
	}
	static fromJSON(t) {
		if (!Array.isArray(t) || t.length % 2 || t.some((e) => typeof e != "number")) throw RangeError("Invalid JSON representation of ChangeDesc");
		return new e(t);
	}
	static create(t) {
		return new e(t);
	}
}, bt = class e extends yt {
	constructor(e, t) {
		super(e), this.inserted = t;
	}
	apply(e) {
		if (this.length != e.length) throw RangeError("Applying change set to a document with the wrong length");
		return Ct(this, (t, n, r, i, a) => e = e.replace(r, r + (n - t), a), !1), e;
	}
	mapDesc(e, t = !1) {
		return wt(this, e, t, !0);
	}
	invert(t) {
		let n = this.sections.slice(), r = [];
		for (let e = 0, i = 0; e < n.length; e += 2) {
			let a = n[e], o = n[e + 1];
			if (o >= 0) {
				n[e] = o, n[e + 1] = a;
				let s = e >> 1;
				for (; r.length < s;) r.push(j.empty);
				r.push(a ? t.slice(i, i + a) : j.empty);
			}
			i += a;
		}
		return new e(n, r);
	}
	compose(e) {
		return this.empty ? e : e.empty ? this : Tt(this, e, !0);
	}
	map(e, t = !1) {
		return e.empty ? this : wt(this, e, t, !0);
	}
	iterChanges(e, t = !1) {
		Ct(this, e, t);
	}
	get desc() {
		return yt.create(this.sections);
	}
	filter(t) {
		let n = [], r = [], i = [], a = new Et(this);
		done: for (let e = 0, o = 0;;) {
			let s = e == t.length ? 1e9 : t[e++];
			for (; o < s || o == s && a.len == 0;) {
				if (a.done) break done;
				let e = Math.min(a.len, s - o);
				xt(i, e, -1);
				let t = a.ins == -1 ? -1 : a.off == 0 ? a.ins : 0;
				xt(n, e, t), t > 0 && St(r, n, a.text), a.forward(e), o += e;
			}
			let c = t[e++];
			for (; o < c;) {
				if (a.done) break done;
				let e = Math.min(a.len, c - o);
				xt(n, e, -1), xt(i, e, a.ins == -1 ? -1 : a.off == 0 ? a.ins : 0), a.forward(e), o += e;
			}
		}
		return {
			changes: new e(n, r),
			filtered: yt.create(i)
		};
	}
	toJSON() {
		let e = [];
		for (let t = 0; t < this.sections.length; t += 2) {
			let n = this.sections[t], r = this.sections[t + 1];
			r < 0 ? e.push(n) : r == 0 ? e.push([n]) : e.push([n].concat(this.inserted[t >> 1].toJSON()));
		}
		return e;
	}
	static of(t, n, r) {
		let i = [], a = [], o = 0, s = null;
		function c(t = !1) {
			if (!t && !i.length) return;
			o < n && xt(i, n - o, -1);
			let r = new e(i, a);
			s = s ? s.compose(r.map(s)) : r, i = [], a = [], o = 0;
		}
		function l(t) {
			if (Array.isArray(t)) for (let e of t) l(e);
			else if (t instanceof e) {
				if (t.length != n) throw RangeError(`Mismatched change set length (got ${t.length}, expected ${n})`);
				c(), s = s ? s.compose(t.map(s)) : t;
			} else {
				let { from: e, to: s = e, insert: l } = t;
				if (e > s || e < 0 || s > n) throw RangeError(`Invalid change range ${e} to ${s} (in doc of length ${n})`);
				let u = l ? typeof l == "string" ? j.of(l.split(r || _t)) : l : j.empty, d = u.length;
				if (e == s && d == 0) return;
				e < o && c(), e > o && xt(i, e - o, -1), xt(i, s - e, d), St(a, i, u), o = s;
			}
		}
		return l(t), c(!s), s;
	}
	static empty(t) {
		return new e(t ? [t, -1] : [], []);
	}
	static fromJSON(t) {
		if (!Array.isArray(t)) throw RangeError("Invalid JSON representation of ChangeSet");
		let n = [], r = [];
		for (let e = 0; e < t.length; e++) {
			let i = t[e];
			if (typeof i == "number") n.push(i, -1);
			else if (!Array.isArray(i) || typeof i[0] != "number" || i.some((e, t) => t && typeof e != "string")) throw RangeError("Invalid JSON representation of ChangeSet");
			else if (i.length == 1) n.push(i[0], 0);
			else {
				for (; r.length < e;) r.push(j.empty);
				r[e] = j.of(i.slice(1)), n.push(i[0], r[e].length);
			}
		}
		return new e(n, r);
	}
	static createSet(t, n) {
		return new e(t, n);
	}
};
function xt(e, t, n, r = !1) {
	if (t == 0 && n <= 0) return;
	let i = e.length - 2;
	i >= 0 && n <= 0 && n == e[i + 1] ? e[i] += t : i >= 0 && t == 0 && e[i] == 0 ? e[i + 1] += n : r ? (e[i] += t, e[i + 1] += n) : e.push(t, n);
}
function St(e, t, n) {
	if (n.length == 0) return;
	let r = t.length - 2 >> 1;
	if (r < e.length) e[e.length - 1] = e[e.length - 1].append(n);
	else {
		for (; e.length < r;) e.push(j.empty);
		e.push(n);
	}
}
function Ct(e, t, n) {
	let r = e.inserted;
	for (let i = 0, a = 0, o = 0; o < e.sections.length;) {
		let s = e.sections[o++], c = e.sections[o++];
		if (c < 0) i += s, a += s;
		else {
			let l = i, u = a, d = j.empty;
			for (; l += s, u += c, c && r && (d = d.append(r[o - 2 >> 1])), !(n || o == e.sections.length || e.sections[o + 1] < 0);) s = e.sections[o++], c = e.sections[o++];
			t(i, l, a, u, d), i = l, a = u;
		}
	}
}
function wt(e, t, n, r = !1) {
	let i = [], a = r ? [] : null, o = new Et(e), s = new Et(t);
	for (let e = -1;;) if (o.done && s.len || s.done && o.len) throw Error("Mismatched change set lengths");
	else if (o.ins == -1 && s.ins == -1) {
		let e = Math.min(o.len, s.len);
		xt(i, e, -1), o.forward(e), s.forward(e);
	} else if (s.ins >= 0 && (o.ins < 0 || e == o.i || o.off == 0 && (s.len < o.len || s.len == o.len && !n))) {
		let t = s.len;
		for (xt(i, s.ins, -1); t;) {
			let n = Math.min(o.len, t);
			o.ins >= 0 && e < o.i && o.len <= n && (xt(i, 0, o.ins), a && St(a, i, o.text), e = o.i), o.forward(n), t -= n;
		}
		s.next();
	} else if (o.ins >= 0) {
		let t = 0, n = o.len;
		for (; n;) if (s.ins == -1) {
			let e = Math.min(n, s.len);
			t += e, n -= e, s.forward(e);
		} else if (s.ins == 0 && s.len < n) n -= s.len, s.next();
		else break;
		xt(i, t, e < o.i ? o.ins : 0), a && e < o.i && St(a, i, o.text), e = o.i, o.forward(o.len - n);
	} else if (o.done && s.done) return a ? bt.createSet(i, a) : yt.create(i);
	else throw Error("Mismatched change set lengths");
}
function Tt(e, t, n = !1) {
	let r = [], i = n ? [] : null, a = new Et(e), o = new Et(t);
	for (let e = !1;;) if (a.done && o.done) return i ? bt.createSet(r, i) : yt.create(r);
	else if (a.ins == 0) xt(r, a.len, 0, e), a.next();
	else if (o.len == 0 && !o.done) xt(r, 0, o.ins, e), i && St(i, r, o.text), o.next();
	else if (a.done || o.done) throw Error("Mismatched change set lengths");
	else {
		let t = Math.min(a.len2, o.len), n = r.length;
		if (a.ins == -1) {
			let n = o.ins == -1 ? -1 : o.off ? 0 : o.ins;
			xt(r, t, n, e), i && n && St(i, r, o.text);
		} else o.ins == -1 ? (xt(r, a.off ? 0 : a.len, t, e), i && St(i, r, a.textBit(t))) : (xt(r, a.off ? 0 : a.len, o.off ? 0 : o.ins, e), i && !o.off && St(i, r, o.text));
		e = (a.ins > t || o.ins >= 0 && o.len > t) && (e || r.length > n), a.forward2(t), o.forward(t);
	}
}
var Et = class {
	constructor(e) {
		this.set = e, this.i = 0, this.next();
	}
	next() {
		let { sections: e } = this.set;
		this.i < e.length ? (this.len = e[this.i++], this.ins = e[this.i++]) : (this.len = 0, this.ins = -2), this.off = 0;
	}
	get done() {
		return this.ins == -2;
	}
	get len2() {
		return this.ins < 0 ? this.len : this.ins;
	}
	get text() {
		let { inserted: e } = this.set, t = this.i - 2 >> 1;
		return t >= e.length ? j.empty : e[t];
	}
	textBit(e) {
		let { inserted: t } = this.set, n = this.i - 2 >> 1;
		return n >= t.length && !e ? j.empty : t[n].slice(this.off, e == null ? void 0 : this.off + e);
	}
	forward(e) {
		e == this.len ? this.next() : (this.len -= e, this.off += e);
	}
	forward2(e) {
		this.ins == -1 ? this.forward(e) : e == this.ins ? this.next() : (this.ins -= e, this.off += e);
	}
}, Dt = class e {
	constructor(e, t, n, r) {
		this.from = e, this.to = t, this.flags = n, this.goalColumn = r;
	}
	get anchor() {
		return this.flags & 32 ? this.to : this.from;
	}
	get head() {
		return this.flags & 32 ? this.from : this.to;
	}
	get empty() {
		return this.from == this.to;
	}
	get assoc() {
		return this.flags & 8 ? -1 : this.flags & 16 ? 1 : 0;
	}
	get undirectional() {
		return (this.flags & 64) > 0;
	}
	get bidiLevel() {
		let e = this.flags & 7;
		return e == 7 ? null : e;
	}
	map(t, n = -1) {
		let r, i;
		return this.empty ? r = i = t.mapPos(this.from, n) : (r = t.mapPos(this.from, 1), i = t.mapPos(this.to, -1)), r == this.from && i == this.to ? this : new e(r, i, this.flags, this.goalColumn);
	}
	extend(e, t = e, n = 0) {
		if (e <= this.anchor && t >= this.anchor) return N.range(e, t, void 0, void 0, n);
		let r = Math.abs(e - this.anchor) > Math.abs(t - this.anchor) ? e : t;
		return N.range(this.anchor, r, void 0, void 0, n);
	}
	eq(e, t = !1) {
		return this.anchor == e.anchor && this.head == e.head && this.goalColumn == e.goalColumn && (!t || !this.empty || this.assoc == e.assoc);
	}
	toJSON() {
		return {
			anchor: this.anchor,
			head: this.head
		};
	}
	static fromJSON(e) {
		if (!e || typeof e.anchor != "number" || typeof e.head != "number") throw RangeError("Invalid JSON representation for SelectionRange");
		return N.range(e.anchor, e.head);
	}
	static create(t, n, r, i) {
		return new e(t, n, r, i);
	}
}, N = class e {
	constructor(e, t) {
		this.ranges = e, this.mainIndex = t;
	}
	map(t, n = -1) {
		return t.empty ? this : e.create(this.ranges.map((e) => e.map(t, n)), this.mainIndex);
	}
	eq(e, t = !1) {
		if (this.ranges.length != e.ranges.length || this.mainIndex != e.mainIndex) return !1;
		for (let n = 0; n < this.ranges.length; n++) if (!this.ranges[n].eq(e.ranges[n], t)) return !1;
		return !0;
	}
	get main() {
		return this.ranges[this.mainIndex];
	}
	asSingle() {
		return this.ranges.length == 1 ? this : new e([this.main], 0);
	}
	addRange(t, n = !0) {
		return e.create([t].concat(this.ranges), n ? 0 : this.mainIndex + 1);
	}
	replaceRange(t, n = this.mainIndex) {
		let r = this.ranges.slice();
		return r[n] = t, e.create(r, this.mainIndex);
	}
	toJSON() {
		return {
			ranges: this.ranges.map((e) => e.toJSON()),
			main: this.mainIndex
		};
	}
	static fromJSON(t) {
		if (!t || !Array.isArray(t.ranges) || typeof t.main != "number" || t.main >= t.ranges.length) throw RangeError("Invalid JSON representation for EditorSelection");
		return new e(t.ranges.map((e) => Dt.fromJSON(e)), t.main);
	}
	static single(t, n = t) {
		return new e([e.range(t, n)], 0);
	}
	static create(t, n = 0) {
		if (t.length == 0) throw RangeError("A selection needs at least one range");
		for (let r = 0, i = 0; i < t.length; i++) {
			let a = t[i];
			if (a.empty ? a.from <= r : a.from < r) return e.normalized(t.slice(), n);
			r = a.to;
		}
		return new e(t, n);
	}
	static cursor(e, t = 0, n, r) {
		return Dt.create(e, e, (t == 0 ? 0 : t < 0 ? 8 : 16) | (n == null ? 7 : Math.min(6, n)), r);
	}
	static range(e, t, n, r, i) {
		let a = r == null ? 7 : Math.min(6, r);
		return !i && e != t && (i = t < e ? 1 : -1), i && (a |= i < 0 ? 8 : 16), t < e ? Dt.create(t, e, a | 32, n) : Dt.create(e, t, a, n);
	}
	static undirectionalRange(e, t) {
		return Dt.create(e, t, 64, void 0);
	}
	static normalized(t, n = 0) {
		let r = t[n];
		t.sort((e, t) => e.from - t.from), n = t.indexOf(r);
		for (let r = 1; r < t.length; r++) {
			let i = t[r], a = t[r - 1];
			if (i.empty ? i.from <= a.to : i.from < a.to) {
				let o = a.from, s = Math.max(i.to, a.to);
				r <= n && n--, t.splice(--r, 2, i.anchor > i.head ? e.range(s, o) : e.range(o, s));
			}
		}
		return new e(t, n);
	}
};
function Ot(e, t) {
	for (let n of e.ranges) if (n.to > t) throw RangeError("Selection points outside of document");
}
var kt = 0, P = class e {
	constructor(e, t, n, r, i) {
		this.combine = e, this.compareInput = t, this.compare = n, this.isStatic = r, this.id = kt++, this.default = e([]), this.extensions = typeof i == "function" ? i(this) : i;
	}
	get reader() {
		return this;
	}
	static define(t = {}) {
		return new e(t.combine || ((e) => e), t.compareInput || ((e, t) => e === t), t.compare || (t.combine ? (e, t) => e === t : At), !!t.static, t.enables);
	}
	of(e) {
		return new jt([], this, 0, e);
	}
	compute(e, t) {
		if (this.isStatic) throw Error("Can't compute a static facet");
		return new jt(e, this, 1, t);
	}
	computeN(e, t) {
		if (this.isStatic) throw Error("Can't compute a static facet");
		return new jt(e, this, 2, t);
	}
	from(e, t) {
		return t ||= (e) => e, this.compute([e], (n) => t(n.field(e)));
	}
};
function At(e, t) {
	return e == t || e.length == t.length && e.every((e, n) => e === t[n]);
}
var jt = class {
	constructor(e, t, n, r) {
		this.dependencies = e, this.facet = t, this.type = n, this.value = r, this.id = kt++;
	}
	dynamicSlot(e) {
		let t = this.value, n = this.facet.compareInput, r = this.id, i = e[r] >> 1, a = this.type == 2, o = !1, s = !1, c = [];
		for (let t of this.dependencies) t == "doc" ? o = !0 : t == "selection" ? s = !0 : (e[t.id] ?? 1) & 1 || c.push(e[t.id]);
		return {
			create(e) {
				return e.values[i] = t(e), 1;
			},
			update(e, r) {
				if (o && r.docChanged || s && (r.docChanged || r.selection) || Nt(e, c)) {
					let r = t(e);
					if (a ? !Mt(r, e.values[i], n) : !n(r, e.values[i])) return e.values[i] = r, 1;
				}
				return 0;
			},
			reconfigure: (e, o) => {
				let s, c = o.config.address[r];
				if (c != null) {
					let r = Kt(o, c);
					if (this.dependencies.every((t) => t instanceof P ? o.facet(t) === e.facet(t) : t instanceof It ? o.field(t, !1) == e.field(t, !1) : !0) || (a ? Mt(s = t(e), r, n) : n(s = t(e), r))) return e.values[i] = r, 0;
				} else s = t(e);
				return e.values[i] = s, 1;
			}
		};
	}
	get extension() {
		return this;
	}
};
function Mt(e, t, n) {
	if (e.length != t.length) return !1;
	for (let r = 0; r < e.length; r++) if (!n(e[r], t[r])) return !1;
	return !0;
}
function Nt(e, t) {
	let n = !1;
	for (let r of t) Gt(e, r) & 1 && (n = !0);
	return n;
}
function Pt(e, t, n) {
	let r = n.map((t) => e[t.id]), i = n.map((e) => e.type), a = r.filter((e) => !(e & 1)), o = e[t.id] >> 1;
	function s(e) {
		let n = [];
		for (let t = 0; t < r.length; t++) {
			let a = Kt(e, r[t]);
			if (i[t] == 2) for (let e of a) n.push(e);
			else n.push(a);
		}
		return t.combine(n);
	}
	return {
		create(e) {
			for (let t of r) Gt(e, t);
			return e.values[o] = s(e), 1;
		},
		update(e, n) {
			if (!Nt(e, a)) return 0;
			let r = s(e);
			return t.compare(r, e.values[o]) ? 0 : (e.values[o] = r, 1);
		},
		reconfigure(e, i) {
			let a = Nt(e, r), c = i.config.facets[t.id], l = i.facet(t);
			if (c && !a && At(n, c)) return e.values[o] = l, 0;
			let u = s(e);
			return t.compare(u, l) ? (e.values[o] = l, 0) : (e.values[o] = u, 1);
		}
	};
}
var Ft = /*@__PURE__*/ P.define({ static: !0 }), It = class e {
	constructor(e, t, n, r, i) {
		this.id = e, this.createF = t, this.updateF = n, this.compareF = r, this.spec = i, this.provides = void 0;
	}
	static define(t) {
		let n = new e(kt++, t.create, t.update, t.compare || ((e, t) => e === t), t);
		return t.provide && (n.provides = t.provide(n)), n;
	}
	create(e) {
		return (e.facet(Ft).find((e) => e.field == this)?.create || this.createF)(e);
	}
	slot(e) {
		let t = e[this.id] >> 1;
		return {
			create: (e) => (e.values[t] = this.create(e), 1),
			update: (e, n) => {
				let r = e.values[t], i = this.updateF(r, n);
				return this.compareF(r, i) ? 0 : (e.values[t] = i, 1);
			},
			reconfigure: (e, n) => {
				let r = e.facet(Ft), i = n.facet(Ft), a;
				return (a = r.find((e) => e.field == this)) && a != i.find((e) => e.field == this) ? (e.values[t] = a.create(e), 1) : n.config.address[this.id] == null ? (e.values[t] = this.create(e), 1) : (e.values[t] = n.field(this), 0);
			}
		};
	}
	init(e) {
		return [this, Ft.of({
			field: this,
			create: e
		})];
	}
	get extension() {
		return this;
	}
}, Lt = {
	lowest: 4,
	low: 3,
	default: 2,
	high: 1,
	highest: 0
};
function Rt(e) {
	return (t) => new Bt(t, e);
}
var zt = {
	highest: /*@__PURE__*/ Rt(Lt.highest),
	high: /*@__PURE__*/ Rt(Lt.high),
	default: /*@__PURE__*/ Rt(Lt.default),
	low: /*@__PURE__*/ Rt(Lt.low),
	lowest: /*@__PURE__*/ Rt(Lt.lowest)
}, Bt = class {
	constructor(e, t) {
		this.inner = e, this.prec = t;
	}
	get extension() {
		return this;
	}
}, Vt = class e {
	of(e) {
		return new Ht(this, e);
	}
	reconfigure(t) {
		return e.reconfigure.of({
			compartment: this,
			extension: t
		});
	}
	get(e) {
		return e.config.compartments.get(this);
	}
}, Ht = class {
	constructor(e, t) {
		this.compartment = e, this.inner = t;
	}
	get extension() {
		return this;
	}
}, Ut = class e {
	constructor(e, t, n, r, i, a) {
		for (this.base = e, this.compartments = t, this.dynamicSlots = n, this.address = r, this.staticValues = i, this.facets = a, this.statusTemplate = []; this.statusTemplate.length < n.length;) this.statusTemplate.push(0);
	}
	staticFacet(e) {
		let t = this.address[e.id];
		return t == null ? e.default : this.staticValues[t >> 1];
	}
	static resolve(t, n, r) {
		let i = [], a = Object.create(null), o = /* @__PURE__ */ new Map();
		for (let e of Wt(t, n, o)) e instanceof It ? i.push(e) : (a[e.facet.id] || (a[e.facet.id] = [])).push(e);
		let s = Object.create(null), c = [], l = [];
		for (let e of i) s[e.id] = l.length << 1, l.push((t) => e.slot(t));
		let u = r?.config.facets;
		for (let e in a) {
			let t = a[e], n = t[0].facet, i = u && u[e] || [];
			if (t.every((e) => e.type == 0)) {
				if (s[n.id] = c.length << 1 | 1, At(i, t)) c.push(r.facet(n));
				else {
					let e = n.combine(t.map((e) => e.value));
					c.push(r && n.compare(e, r.facet(n)) ? r.facet(n) : e);
				}
			} else {
				for (let e of t) e.type == 0 ? (s[e.id] = c.length << 1 | 1, c.push(e.value)) : (s[e.id] = l.length << 1, l.push((t) => e.dynamicSlot(t)));
				s[n.id] = l.length << 1, l.push((e) => Pt(e, n, t));
			}
		}
		let d = l.map((e) => e(s));
		return new e(t, o, d, s, c, a);
	}
};
function Wt(e, t, n) {
	let r = [
		[],
		[],
		[],
		[],
		[]
	], i = /* @__PURE__ */ new Map();
	function a(e, o) {
		let s = i.get(e);
		if (s != null) {
			if (s <= o) return;
			let t = r[s].indexOf(e);
			t > -1 && r[s].splice(t, 1), e instanceof Ht && n.delete(e.compartment);
		}
		if (i.set(e, o), Array.isArray(e)) for (let t of e) a(t, o);
		else if (e instanceof Ht) {
			if (n.has(e.compartment)) throw RangeError("Duplicate use of compartment in extensions");
			let r = t.get(e.compartment) || e.inner;
			n.set(e.compartment, r), a(r, o);
		} else if (e instanceof Bt) a(e.inner, e.prec);
		else if (e instanceof It) r[o].push(e), e.provides && a(e.provides, o);
		else if (e instanceof jt) r[o].push(e), e.facet.extensions && a(e.facet.extensions, Lt.default);
		else {
			let t = e.extension;
			if (!t) throw Error(`Unrecognized extension value in extension set (${e}).`);
			if (t == e) throw Error(`Unrecognized extension value in extension set (${e}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
			a(t, o);
		}
	}
	return a(e, Lt.default), r.reduce((e, t) => e.concat(t));
}
function Gt(e, t) {
	if (t & 1) return 2;
	let n = t >> 1, r = e.status[n];
	if (r == 4) throw Error("Cyclic dependency between fields and/or facets");
	if (r & 2) return r;
	e.status[n] = 4;
	let i = e.computeSlot(e, e.config.dynamicSlots[n]);
	return e.status[n] = 2 | i;
}
function Kt(e, t) {
	return t & 1 ? e.config.staticValues[t >> 1] : e.values[t >> 1];
}
var qt = /*@__PURE__*/ P.define(), Jt = /*@__PURE__*/ P.define({
	combine: (e) => e.some((e) => e),
	static: !0
}), Yt = /*@__PURE__*/ P.define({
	combine: (e) => e.length ? e[0] : void 0,
	static: !0
}), Xt = /*@__PURE__*/ P.define(), Zt = /*@__PURE__*/ P.define(), Qt = /*@__PURE__*/ P.define(), $t = /*@__PURE__*/ P.define({ combine: (e) => e.length ? e[0] : !1 }), en = class {
	constructor(e, t) {
		this.type = e, this.value = t;
	}
	static define() {
		return new tn();
	}
}, tn = class {
	of(e) {
		return new en(this, e);
	}
}, nn = class {
	constructor(e) {
		this.map = e;
	}
	of(e) {
		return new F(this, e);
	}
}, F = class e {
	constructor(e, t) {
		this.type = e, this.value = t;
	}
	map(t) {
		let n = this.type.map(this.value, t);
		return n === void 0 ? void 0 : n == this.value ? this : new e(this.type, n);
	}
	is(e) {
		return this.type == e;
	}
	static define(e = {}) {
		return new nn(e.map || ((e) => e));
	}
	static mapEffects(e, t) {
		if (!e.length) return e;
		let n = [];
		for (let r of e) {
			let e = r.map(t);
			e && n.push(e);
		}
		return n;
	}
};
F.reconfigure = /*@__PURE__*/ F.define(), F.appendConfig = /*@__PURE__*/ F.define();
var rn = class e {
	constructor(t, n, r, i, a, o) {
		this.startState = t, this.changes = n, this.selection = r, this.effects = i, this.annotations = a, this.scrollIntoView = o, this._doc = null, this._state = null, r && Ot(r, n.newLength), a.some((t) => t.type == e.time) || (this.annotations = a.concat(e.time.of(Date.now())));
	}
	static create(t, n, r, i, a, o) {
		return new e(t, n, r, i, a, o);
	}
	get newDoc() {
		return this._doc ||= this.changes.apply(this.startState.doc);
	}
	get newSelection() {
		return this.selection || this.startState.selection.map(this.changes);
	}
	get state() {
		return this._state || this.startState.applyTransaction(this), this._state;
	}
	annotation(e) {
		for (let t of this.annotations) if (t.type == e) return t.value;
	}
	get docChanged() {
		return !this.changes.empty;
	}
	get reconfigured() {
		return this.startState.config != this.state.config;
	}
	isUserEvent(t) {
		let n = this.annotation(e.userEvent);
		return !!(n && (n == t || n.length > t.length && n.slice(0, t.length) == t && n[t.length] == "."));
	}
};
rn.time = /*@__PURE__*/ en.define(), rn.userEvent = /*@__PURE__*/ en.define(), rn.addToHistory = /*@__PURE__*/ en.define(), rn.remote = /*@__PURE__*/ en.define();
function an(e, t) {
	let n = [];
	for (let r = 0, i = 0;;) {
		let a, o;
		if (r < e.length && (i == t.length || t[i] >= e[r])) a = e[r++], o = e[r++];
		else if (i < t.length) a = t[i++], o = t[i++];
		else return n;
		!n.length || n[n.length - 1] < a ? n.push(a, o) : n[n.length - 1] < o && (n[n.length - 1] = o);
	}
}
function on(e, t, n) {
	let r, i, a;
	return n ? (r = t.changes, i = bt.empty(t.changes.length), a = e.changes.compose(t.changes)) : (r = t.changes.map(e.changes), i = e.changes.mapDesc(t.changes, !0), a = e.changes.compose(r)), {
		changes: a,
		selection: t.selection ? t.selection.map(i) : e.selection?.map(r),
		effects: F.mapEffects(e.effects, r).concat(F.mapEffects(t.effects, i)),
		annotations: e.annotations.length ? e.annotations.concat(t.annotations) : t.annotations,
		scrollIntoView: e.scrollIntoView || t.scrollIntoView
	};
}
function sn(e, t, n) {
	let r = t.selection, i = fn(t.annotations);
	return t.userEvent && (i = i.concat(rn.userEvent.of(t.userEvent))), {
		changes: t.changes instanceof bt ? t.changes : bt.of(t.changes || [], n, e.facet(Yt)),
		selection: r && (r instanceof N ? r : N.single(r.anchor, r.head)),
		effects: fn(t.effects),
		annotations: i,
		scrollIntoView: !!t.scrollIntoView
	};
}
function cn(e, t, n) {
	let r = sn(e, t.length ? t[0] : {}, e.doc.length);
	t.length && t[0].filter === !1 && (n = !1);
	for (let i = 1; i < t.length; i++) {
		t[i].filter === !1 && (n = !1);
		let a = !!t[i].sequential;
		r = on(r, sn(e, t[i], a ? r.changes.newLength : e.doc.length), a);
	}
	let i = rn.create(e, r.changes, r.selection, r.effects, r.annotations, r.scrollIntoView);
	return un(n ? ln(i) : i);
}
function ln(e) {
	let t = e.startState, n = !0;
	for (let r of t.facet(Xt)) {
		let t = r(e);
		if (t === !1) {
			n = !1;
			break;
		}
		Array.isArray(t) && (n = n === !0 ? t : an(n, t));
	}
	if (n !== !0) {
		let r, i;
		if (n === !1) i = e.changes.invertedDesc, r = bt.empty(t.doc.length);
		else {
			let t = e.changes.filter(n);
			r = t.changes, i = t.filtered.mapDesc(t.changes).invertedDesc;
		}
		e = rn.create(t, r, e.selection && e.selection.map(i), F.mapEffects(e.effects, i), e.annotations, e.scrollIntoView);
	}
	let r = t.facet(Zt);
	for (let n = r.length - 1; n >= 0; n--) {
		let i = r[n](e);
		e = i instanceof rn ? i : Array.isArray(i) && i.length == 1 && i[0] instanceof rn ? i[0] : cn(t, fn(i), !1);
	}
	return e;
}
function un(e) {
	let t = e.startState, n = t.facet(Qt), r = e;
	for (let i = n.length - 1; i >= 0; i--) {
		let a = n[i](e);
		a && Object.keys(a).length && (r = on(r, sn(t, a, e.changes.newLength), !0));
	}
	return r == e ? e : rn.create(t, e.changes, e.selection, r.effects, r.annotations, r.scrollIntoView);
}
var dn = [];
function fn(e) {
	return e == null ? dn : Array.isArray(e) ? e : [e];
}
var I = /*@__PURE__*/ (function(e) {
	return e[e.Word = 0] = "Word", e[e.Space = 1] = "Space", e[e.Other = 2] = "Other", e;
})(I ||= {}), pn = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/, mn;
try {
	mn = /*@__PURE__*/ RegExp("[\\p{Alphabetic}\\p{Number}_]", "u");
} catch {}
function hn(e) {
	if (mn) return mn.test(e);
	for (let t = 0; t < e.length; t++) {
		let n = e[t];
		if (/\w/.test(n) || n > "" && (n.toUpperCase() != n.toLowerCase() || pn.test(n))) return !0;
	}
	return !1;
}
function gn(e) {
	return (t) => {
		if (!/\S/.test(t)) return I.Space;
		if (hn(t)) return I.Word;
		for (let n = 0; n < e.length; n++) if (t.indexOf(e[n]) > -1) return I.Word;
		return I.Other;
	};
}
var L = class e {
	constructor(e, t, n, r, i, a) {
		this.config = e, this.doc = t, this.selection = n, this.values = r, this.status = e.statusTemplate.slice(), this.computeSlot = i, a && (a._state = this);
		for (let e = 0; e < this.config.dynamicSlots.length; e++) Gt(this, e << 1);
		this.computeSlot = null;
	}
	field(e, t = !0) {
		let n = this.config.address[e.id];
		if (n == null) {
			if (t) throw RangeError("Field is not present in this state");
		} else return Gt(this, n), Kt(this, n);
	}
	update(...e) {
		return cn(this, e, !0);
	}
	applyTransaction(t) {
		let n = this.config, { base: r, compartments: i } = n;
		for (let e of t.effects) e.is(Vt.reconfigure) ? (n &&= (i = /* @__PURE__ */ new Map(), n.compartments.forEach((e, t) => i.set(t, e)), null), i.set(e.value.compartment, e.value.extension)) : e.is(F.reconfigure) ? (n = null, r = e.value) : e.is(F.appendConfig) && (n = null, r = fn(r).concat(e.value));
		let a;
		n ? a = t.startState.values.slice() : (n = Ut.resolve(r, i, this), a = new e(n, this.doc, this.selection, n.dynamicSlots.map(() => null), (e, t) => t.reconfigure(e, this), null).values);
		let o = t.startState.facet(Jt) ? t.newSelection : t.newSelection.asSingle();
		new e(n, t.newDoc, o, a, (e, n) => n.update(e, t), t);
	}
	replaceSelection(e) {
		return typeof e == "string" && (e = this.toText(e)), this.changeByRange((t) => ({
			changes: {
				from: t.from,
				to: t.to,
				insert: e
			},
			range: N.cursor(t.from + e.length, -1)
		}));
	}
	changeByRange(e) {
		let t = this.selection, n = e(t.ranges[0]), r = this.changes(n.changes), i = [n.range], a = fn(n.effects);
		for (let n = 1; n < t.ranges.length; n++) {
			let o = e(t.ranges[n]), s = this.changes(o.changes), c = s.map(r);
			for (let e = 0; e < n; e++) i[e] = i[e].map(c);
			let l = r.mapDesc(s, !0);
			i.push(o.range.map(l)), r = r.compose(c), a = F.mapEffects(a, c).concat(F.mapEffects(fn(o.effects), l));
		}
		return {
			changes: r,
			selection: N.create(i, t.mainIndex),
			effects: a
		};
	}
	changes(t = []) {
		return t instanceof bt ? t : bt.of(t, this.doc.length, this.facet(e.lineSeparator));
	}
	toText(t) {
		return j.of(t.split(this.facet(e.lineSeparator) || _t));
	}
	sliceDoc(e = 0, t = this.doc.length) {
		return this.doc.sliceString(e, t, this.lineBreak);
	}
	facet(e) {
		let t = this.config.address[e.id];
		return t == null ? e.default : (Gt(this, t), Kt(this, t));
	}
	toJSON(e) {
		let t = {
			doc: this.sliceDoc(),
			selection: this.selection.toJSON()
		};
		if (e) for (let n in e) {
			let r = e[n];
			r instanceof It && this.config.address[r.id] != null && (t[n] = r.spec.toJSON(this.field(e[n]), this));
		}
		return t;
	}
	static fromJSON(t, n = {}, r) {
		if (!t || typeof t.doc != "string") throw RangeError("Invalid JSON representation for EditorState");
		let i = [];
		if (r) {
			for (let e in r) if (Object.prototype.hasOwnProperty.call(t, e)) {
				let n = r[e], a = t[e];
				i.push(n.init((e) => n.spec.fromJSON(a, e)));
			}
		}
		return e.create({
			doc: t.doc,
			selection: N.fromJSON(t.selection),
			extensions: n.extensions ? i.concat([n.extensions]) : i
		});
	}
	static create(t = {}) {
		let n = Ut.resolve(t.extensions || [], /* @__PURE__ */ new Map()), r = t.doc instanceof j ? t.doc : j.of((t.doc || "").split(n.staticFacet(e.lineSeparator) || _t)), i = t.selection ? t.selection instanceof N ? t.selection : N.single(t.selection.anchor, t.selection.head) : N.single(0);
		return Ot(i, r.length), n.staticFacet(Jt) || (i = i.asSingle()), new e(n, r, i, n.dynamicSlots.map(() => null), (e, t) => t.create(e), null);
	}
	get tabSize() {
		return this.facet(e.tabSize);
	}
	get lineBreak() {
		return this.facet(e.lineSeparator) || "\n";
	}
	get readOnly() {
		return this.facet($t);
	}
	phrase(t, ...n) {
		for (let n of this.facet(e.phrases)) if (Object.prototype.hasOwnProperty.call(n, t)) {
			t = n[t];
			break;
		}
		return n.length && (t = t.replace(/\$(\$|\d*)/g, (e, t) => {
			if (t == "$") return "$";
			let r = +(t || 1);
			return !r || r > n.length ? e : n[r - 1];
		})), t;
	}
	languageDataAt(e, t, n = -1) {
		let r = [];
		for (let i of this.facet(qt)) for (let a of i(this, t, n)) Object.prototype.hasOwnProperty.call(a, e) && r.push(a[e]);
		return r;
	}
	charCategorizer(e) {
		let t = this.languageDataAt("wordChars", e);
		return gn(t.length ? t[0] : "");
	}
	wordAt(e) {
		let { text: t, from: n, length: r } = this.doc.lineAt(e), i = this.charCategorizer(e), a = e - n, o = e - n;
		for (; a > 0;) {
			let e = M(t, a, !1);
			if (i(t.slice(e, a)) != I.Word) break;
			a = e;
		}
		for (; o < r;) {
			let e = M(t, o);
			if (i(t.slice(o, e)) != I.Word) break;
			o = e;
		}
		return a == o ? null : N.range(a + n, o + n);
	}
};
L.allowMultipleSelections = Jt, L.tabSize = /*@__PURE__*/ P.define({ combine: (e) => e.length ? e[0] : 4 }), L.lineSeparator = Yt, L.readOnly = $t, L.phrases = /*@__PURE__*/ P.define({ compare(e, t) {
	let n = Object.keys(e), r = Object.keys(t);
	return n.length == r.length && n.every((n) => e[n] == t[n]);
} }), L.languageData = qt, L.changeFilter = Xt, L.transactionFilter = Zt, L.transactionExtender = Qt, Vt.reconfigure = /*@__PURE__*/ F.define();
function _n(e, t, n = {}) {
	let r = {};
	for (let t of e) for (let e of Object.keys(t)) {
		let i = t[e], a = r[e];
		if (a === void 0) r[e] = i;
		else if (a !== i && i !== void 0) {
			if (Object.hasOwnProperty.call(n, e)) r[e] = n[e](a, i);
			else throw Error("Config merge conflict for field " + e);
		}
	}
	for (let e in t) r[e] === void 0 && (r[e] = t[e]);
	return r;
}
var vn = class {
	eq(e) {
		return this == e;
	}
	range(e, t = e) {
		return bn.create(e, t, this);
	}
};
vn.prototype.startSide = vn.prototype.endSide = 0, vn.prototype.point = !1, vn.prototype.mapMode = vt.TrackDel;
function yn(e, t) {
	return e == t || e.constructor == t.constructor && e.eq(t);
}
var bn = class e {
	constructor(e, t, n) {
		this.from = e, this.to = t, this.value = n;
	}
	static create(t, n, r) {
		return new e(t, n, r);
	}
};
function xn(e, t) {
	return e.from - t.from || e.value.startSide - t.value.startSide;
}
var Sn = class e {
	constructor(e, t, n, r) {
		this.from = e, this.to = t, this.value = n, this.maxPoint = r;
	}
	get length() {
		return Cn(this.to);
	}
	findIndex(e, t, n, r = 0) {
		let i = n ? this.to : this.from;
		for (let a = r, o = i.length;;) {
			if (a == o) return a;
			let r = a + o >> 1, s = i[r] - e || (n ? this.value[r].endSide : this.value[r].startSide) - t;
			if (r == a) return s >= 0 ? a : o;
			s >= 0 ? o = r : a = r + 1;
		}
	}
	between(e, t, n, r) {
		for (let i = this.findIndex(t, -1e9, !0), a = this.findIndex(n, 1e9, !1, i); i < a; i++) if (r(this.from[i] + e, this.to[i] + e, this.value[i]) === !1) return !1;
	}
	map(t, n, r, i, a) {
		let o = [], s = [], c = [], l = -1, u = -1;
		iter: for (let e = 0; e < this.value.length; e++) {
			let d = this.value[e], f = this.from[e] + t, p = this.to[e] + t, m, h;
			if (f == p) {
				let e = n.mapPos(f, d.startSide, d.mapMode);
				if (e == null || (m = h = e, d.startSide != d.endSide && (h = n.mapPos(f, d.endSide), h < m))) continue;
			} else if (m = n.mapPos(f, d.startSide), h = n.mapPos(p, d.endSide), m > h || m == h && d.startSide > 0 && d.endSide <= 0) continue;
			if (!((h - m || d.endSide - d.startSide) < 0)) {
				if (l < 0 && (l = m), d.point && (u = Math.max(u, h - m)), (m - r || d.startSide - i) >= 0) o.push(d), s.push(m - l), c.push(h - l), r = h, i = d.endSide;
				else {
					if (m == h) for (let e = o.length; e > 0; e--) {
						if ((m - (c[e - 1] + l) || d.startSide - o[e - 1].endSide) >= 0) {
							o.splice(e, 0, d), s.splice(e, 0, m - l), c.splice(e, 0, h - l);
							continue iter;
						}
						if ((m - (s[e - 1] + l) || d.endSide - o[e - 1].startSide) > 0) break;
					}
					a(m, h, d);
				}
			}
		}
		return {
			mapped: o.length ? new e(s, c, o, u) : null,
			pos: l
		};
	}
}, R = class e {
	constructor(e, t, n, r) {
		this.chunkPos = e, this.chunk = t, this.nextLayer = n, this.maxPoint = r;
	}
	static create(t, n, r, i) {
		return new e(t, n, r, i);
	}
	get length() {
		let e = this.chunk.length - 1;
		return e < 0 ? 0 : Math.max(this.chunkEnd(e), this.nextLayer.length);
	}
	get size() {
		if (this.isEmpty) return 0;
		let e = this.nextLayer.size;
		for (let t of this.chunk) e += t.value.length;
		return e;
	}
	chunkEnd(e) {
		return this.chunkPos[e] + this.chunk[e].length;
	}
	update(t) {
		let { add: n = [], sort: r = !1, filterFrom: i = 0, filterTo: a = this.length } = t, o = t.filter;
		if (n.length == 0 && !o) return this;
		if (r && (n = n.slice().sort(xn)), this.isEmpty) return n.length ? e.of(n) : this;
		let s = new Dn(this, null, -1).goto(0), c = 0, l = [], u = new Tn();
		for (; s.value || c < n.length;) if (c < n.length && (s.from - n[c].from || s.startSide - n[c].value.startSide) >= 0) {
			let e = n[c++];
			u.addInner(e.from, e.to, e.value, !1) || l.push(e);
		} else s.rangeIndex == 1 && s.chunkIndex < this.chunk.length && (c == n.length || this.chunkEnd(s.chunkIndex) < n[c].from) && (!o || i > this.chunkEnd(s.chunkIndex) || a < this.chunkPos[s.chunkIndex]) && u.addChunk(this.chunkPos[s.chunkIndex], this.chunk[s.chunkIndex]) ? s.nextChunk() : ((!o || i > s.to || a < s.from || o(s.from, s.to, s.value)) && (u.addInner(s.from, s.to, s.value, !1) || l.push(bn.create(s.from, s.to, s.value))), s.next());
		return u.finishInner(this.nextLayer.isEmpty && !l.length ? e.empty : this.nextLayer.update({
			add: l,
			filter: o,
			filterFrom: i,
			filterTo: a
		}));
	}
	map(t) {
		if (t.empty || this.isEmpty) return this;
		let n = [], r = [], i = -1, a, o = (e, t, n) => {
			a ||= new Tn(), a.addRange(e, t, n, !1);
		};
		for (let e = 0; e < this.chunk.length; e++) {
			let a = this.chunkPos[e], s = this.chunk[e], c = t.touchesRange(a, a + s.length);
			if (c === !1) i = Math.max(i, s.maxPoint), n.push(s), r.push(t.mapPos(a));
			else if (c === !0) {
				let [e, c] = n.length ? [Cn(r) + Cn(n).length, Cn(Cn(n).value).endSide] : [-1, -1], { mapped: l, pos: u } = s.map(a, t, e, c, o);
				l && (i = Math.max(i, l.maxPoint), n.push(l), r.push(u));
			}
		}
		let s = this.nextLayer.map(t);
		return a && (s = a.finishInner(s)), n.length == 0 ? s : new e(r, n, s || e.empty, i);
	}
	between(e, t, n) {
		if (!this.isEmpty) {
			for (let r = 0; r < this.chunk.length; r++) {
				let i = this.chunkPos[r], a = this.chunk[r];
				if (t >= i && e <= i + a.length && a.between(i, e - i, t - i, n) === !1) return;
			}
			this.nextLayer.between(e, t, n);
		}
	}
	iter(e = 0) {
		return On.from([this]).goto(e);
	}
	get isEmpty() {
		return this.nextLayer == this;
	}
	static iter(e, t = 0) {
		return On.from(e).goto(t);
	}
	static compare(e, t, n, r, i = -1) {
		let a = e.filter((e) => e.maxPoint > 0 || !e.isEmpty && e.maxPoint >= i), o = t.filter((e) => e.maxPoint > 0 || !e.isEmpty && e.maxPoint >= i), s = En(a, o, n), c = new An(a, s, i), l = new An(o, s, i);
		n.iterGaps((e, t, n) => jn(c, e, l, t, n, r)), n.empty && n.length == 0 && jn(c, 0, l, 0, 0, r);
	}
	static eq(e, t, n = 0, r) {
		r ??= 1e9 - 1;
		let i = e.filter((e) => !e.isEmpty && t.indexOf(e) < 0), a = t.filter((t) => !t.isEmpty && e.indexOf(t) < 0);
		if (i.length != a.length) return !1;
		if (!i.length) return !0;
		let o = En(i, a), s = new An(i, o, 0).goto(n), c = new An(a, o, 0).goto(n);
		for (;;) {
			if (s.to != c.to || !Mn(s.active, c.active) || s.point && (!c.point || !yn(s.point, c.point))) return !1;
			if (s.to > r) return !0;
			s.next(), c.next();
		}
	}
	static spans(e, t, n, r, i = -1) {
		let a = new An(e, null, i).goto(t), o = t, s = a.openStart;
		for (;;) {
			let e = Math.min(a.to, n);
			if (a.point) {
				let n = a.activeForPoint(a.to), i = a.pointFrom < t ? n.length + 1 : a.point.startSide < 0 ? n.length : Math.min(n.length, s);
				r.point(o, e, a.point, n, i, a.pointRank), s = Math.min(a.openEnd(e), n.length);
			} else e > o && (r.span(o, e, a.active, s), s = a.openEnd(e));
			if (a.to > n) return s + (a.point && a.to > n ? 1 : 0);
			o = a.to, a.next();
		}
	}
	static of(e, t = !1) {
		let n = new Tn();
		for (let r of e instanceof bn ? [e] : t ? wn(e) : e) n.add(r.from, r.to, r.value);
		return n.finish();
	}
	static join(t) {
		if (!t.length) return e.empty;
		let n = Cn(t);
		for (let r = t.length - 2; r >= 0; r--) for (let i = t[r]; i != e.empty; i = i.nextLayer) n = new e(i.chunkPos, i.chunk, n, Math.max(i.maxPoint, n.maxPoint));
		return n;
	}
};
R.empty = /*@__PURE__*/ new R([], [], null, -1);
function Cn(e) {
	return e[e.length - 1];
}
function wn(e) {
	if (e.length > 1) for (let t = e[0], n = 1; n < e.length; n++) {
		let r = e[n];
		if (xn(t, r) > 0) return e.slice().sort(xn);
		t = r;
	}
	return e;
}
R.empty.nextLayer = R.empty;
var Tn = class e {
	finishChunk(e) {
		this.chunks.push(new Sn(this.from, this.to, this.value, this.maxPoint)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.maxPoint), this.maxPoint = -1, e && (this.from = [], this.to = [], this.value = []);
	}
	constructor() {
		this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1e9, this.lastTo = -1e9, this.from = [], this.to = [], this.value = [], this.maxPoint = -1, this.setMaxPoint = -1, this.nextLayer = null;
	}
	add(e, t, n) {
		this.addRange(e, t, n, !0);
	}
	addRange(t, n, r, i) {
		this.addInner(t, n, r, i) || (this.nextLayer ||= new e()).addRange(t, n, r, i);
	}
	addInner(e, t, n, r) {
		let i = e - this.lastTo || n.startSide - this.last.endSide;
		if (r && i <= 0 && (e - this.lastFrom || n.startSide - this.last.startSide) < 0) throw Error("Ranges must be added sorted by `from` position and `startSide`");
		return i < 0 ? !1 : (this.from.length == 250 && this.finishChunk(!0), this.chunkStart < 0 && (this.chunkStart = e), this.from.push(e - this.chunkStart), this.to.push(t - this.chunkStart), this.last = n, this.lastFrom = e, this.lastTo = t, this.value.push(n), n.point && (this.maxPoint = Math.max(this.maxPoint, t - e)), !0);
	}
	addChunk(e, t) {
		if ((e - this.lastTo || t.value[0].startSide - this.last.endSide) < 0) return !1;
		this.from.length && this.finishChunk(!0), this.setMaxPoint = Math.max(this.setMaxPoint, t.maxPoint), this.chunks.push(t), this.chunkPos.push(e);
		let n = t.value.length - 1;
		return this.last = t.value[n], this.lastFrom = t.from[n] + e, this.lastTo = t.to[n] + e, !0;
	}
	finish() {
		return this.finishInner(R.empty);
	}
	finishInner(e) {
		if (this.from.length && this.finishChunk(!1), this.chunks.length == 0) return e;
		let t = R.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(e) : e, this.setMaxPoint);
		return this.from = null, t;
	}
};
function En(e, t, n) {
	let r = /* @__PURE__ */ new Map();
	for (let t of e) for (let e = 0; e < t.chunk.length; e++) t.chunk[e].maxPoint <= 0 && r.set(t.chunk[e], t.chunkPos[e]);
	let i = /* @__PURE__ */ new Set();
	for (let e of t) for (let t = 0; t < e.chunk.length; t++) {
		let a = r.get(e.chunk[t]);
		a != null && (n ? n.mapPos(a) : a) == e.chunkPos[t] && !n?.touchesRange(a, a + e.chunk[t].length) && i.add(e.chunk[t]);
	}
	return i;
}
var Dn = class {
	constructor(e, t, n, r = 0) {
		this.layer = e, this.skip = t, this.minPoint = n, this.rank = r;
	}
	get startSide() {
		return this.value ? this.value.startSide : 0;
	}
	get endSide() {
		return this.value ? this.value.endSide : 0;
	}
	goto(e, t = -1e9) {
		return this.chunkIndex = this.rangeIndex = 0, this.gotoInner(e, t, !1), this;
	}
	gotoInner(e, t, n) {
		for (; this.chunkIndex < this.layer.chunk.length;) {
			let t = this.layer.chunk[this.chunkIndex];
			if (!(this.skip && this.skip.has(t) || this.layer.chunkEnd(this.chunkIndex) < e || t.maxPoint < this.minPoint)) break;
			this.chunkIndex++, n = !1;
		}
		if (this.chunkIndex < this.layer.chunk.length) {
			let r = this.layer.chunk[this.chunkIndex].findIndex(e - this.layer.chunkPos[this.chunkIndex], t, !0);
			(!n || this.rangeIndex < r) && this.setRangeIndex(r);
		}
		this.next();
	}
	forward(e, t) {
		(this.to - e || this.endSide - t) < 0 && this.gotoInner(e, t, !0);
	}
	next() {
		for (;;) if (this.chunkIndex == this.layer.chunk.length) {
			this.from = this.to = 1e9, this.value = null;
			break;
		} else {
			let e = this.layer.chunkPos[this.chunkIndex], t = this.layer.chunk[this.chunkIndex], n = e + t.from[this.rangeIndex];
			if (this.from = n, this.to = e + t.to[this.rangeIndex], this.value = t.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.minPoint < 0 || this.value.point && this.to - this.from >= this.minPoint) break;
		}
	}
	setRangeIndex(e) {
		if (e == this.layer.chunk[this.chunkIndex].value.length) {
			if (this.chunkIndex++, this.skip) for (; this.chunkIndex < this.layer.chunk.length && this.skip.has(this.layer.chunk[this.chunkIndex]);) this.chunkIndex++;
			this.rangeIndex = 0;
		} else this.rangeIndex = e;
	}
	nextChunk() {
		this.chunkIndex++, this.rangeIndex = 0, this.next();
	}
	compare(e) {
		return this.from - e.from || this.startSide - e.startSide || this.rank - e.rank || this.to - e.to || this.endSide - e.endSide;
	}
}, On = class e {
	constructor(e) {
		this.heap = e;
	}
	static from(t, n = null, r = -1) {
		let i = [];
		for (let e = 0; e < t.length; e++) for (let a = t[e]; !a.isEmpty; a = a.nextLayer) a.maxPoint >= r && i.push(new Dn(a, n, r, e));
		return i.length == 1 ? i[0] : new e(i);
	}
	get startSide() {
		return this.value ? this.value.startSide : 0;
	}
	goto(e, t = -1e9) {
		for (let n of this.heap) n.goto(e, t);
		for (let e = this.heap.length >> 1; e >= 0; e--) kn(this.heap, e);
		return this.next(), this;
	}
	forward(e, t) {
		for (let n of this.heap) n.forward(e, t);
		for (let e = this.heap.length >> 1; e >= 0; e--) kn(this.heap, e);
		(this.to - e || this.value.endSide - t) < 0 && this.next();
	}
	next() {
		if (this.heap.length == 0) this.from = this.to = 1e9, this.value = null, this.rank = -1;
		else {
			let e = this.heap[0];
			this.from = e.from, this.to = e.to, this.value = e.value, this.rank = e.rank, e.value && e.next(), kn(this.heap, 0);
		}
	}
};
function kn(e, t) {
	for (let n = e[t];;) {
		let r = (t << 1) + 1;
		if (r >= e.length) break;
		let i = e[r];
		if (r + 1 < e.length && i.compare(e[r + 1]) >= 0 && (i = e[r + 1], r++), n.compare(i) < 0) break;
		e[r] = n, e[t] = i, t = r;
	}
}
var An = class {
	constructor(e, t, n) {
		this.minPoint = n, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = On.from(e, t, n);
	}
	goto(e, t = -1e9) {
		return this.cursor.goto(e, t), this.active.length = this.activeTo.length = this.activeRank.length = 0, this.minActive = -1, this.to = e, this.endSide = t, this.openStart = -1, this.next(), this;
	}
	forward(e, t) {
		for (; this.minActive > -1 && (this.activeTo[this.minActive] - e || this.active[this.minActive].endSide - t) < 0;) this.removeActive(this.minActive);
		this.cursor.forward(e, t);
	}
	removeActive(e) {
		Nn(this.active, e), Nn(this.activeTo, e), Nn(this.activeRank, e), this.minActive = Fn(this.active, this.activeTo);
	}
	addActive(e) {
		let t = 0, { value: n, to: r, rank: i } = this.cursor;
		for (; t < this.activeRank.length && (i - this.activeRank[t] || r - this.activeTo[t]) > 0;) t++;
		Pn(this.active, t, n), Pn(this.activeTo, t, r), Pn(this.activeRank, t, i), e && Pn(e, t, this.cursor.from), this.minActive = Fn(this.active, this.activeTo);
	}
	next() {
		let e = this.to, t = this.point;
		this.point = null;
		let n = this.openStart < 0 ? [] : null;
		for (;;) {
			let r = this.minActive;
			if (r > -1 && (this.activeTo[r] - this.cursor.from || this.active[r].endSide - this.cursor.startSide) < 0) {
				if (this.activeTo[r] > e) {
					this.to = this.activeTo[r], this.endSide = this.active[r].endSide;
					break;
				}
				this.removeActive(r), n && Nn(n, r);
			} else if (!this.cursor.value) {
				this.to = this.endSide = 1e9;
				break;
			} else if (this.cursor.from > e) {
				this.to = this.cursor.from, this.endSide = this.cursor.startSide;
				break;
			} else {
				let e = this.cursor.value;
				if (!e.point) this.addActive(n), this.cursor.next();
				else if (t && this.cursor.to == this.to && this.cursor.from < this.cursor.to) this.cursor.next();
				else {
					this.point = e, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = e.endSide, this.cursor.next(), this.forward(this.to, this.endSide);
					break;
				}
			}
		}
		if (n) {
			this.openStart = 0;
			for (let t = n.length - 1; t >= 0 && n[t] < e; t--) this.openStart++;
		}
	}
	activeForPoint(e) {
		if (!this.active.length) return this.active;
		let t = [];
		for (let n = this.active.length - 1; n >= 0 && !(this.activeRank[n] < this.pointRank); n--) (this.activeTo[n] > e || this.activeTo[n] == e && this.active[n].endSide >= this.point.endSide) && t.push(this.active[n]);
		return t.reverse();
	}
	openEnd(e) {
		let t = 0;
		for (let n = this.activeTo.length - 1; n >= 0 && this.activeTo[n] > e; n--) t++;
		return t;
	}
};
function jn(e, t, n, r, i, a) {
	e.goto(t), n.goto(r);
	let o = r + i, s = r, c = r - t, l = !!a.boundChange;
	for (let t = !1;;) {
		let r = e.to + c - n.to, i = r || e.endSide - n.endSide, u = i < 0 ? e.to + c : n.to, d = Math.min(u, o);
		if (e.point || n.point ? (e.point && n.point && yn(e.point, n.point) && Mn(e.activeForPoint(e.to), n.activeForPoint(n.to)) || a.comparePoint(s, d, e.point, n.point), t = !1) : (t &&= (a.boundChange(s), !1), d > s && !Mn(e.active, n.active) && a.compareRange(s, d, e.active, n.active), l && d < o && (r || e.openEnd(u) != n.openEnd(u)) && (t = !0)), u > o) break;
		s = u, i <= 0 && e.next(), i >= 0 && n.next();
	}
}
function Mn(e, t) {
	if (e.length != t.length) return !1;
	for (let n = 0; n < e.length; n++) if (e[n] != t[n] && !yn(e[n], t[n])) return !1;
	return !0;
}
function Nn(e, t) {
	for (let n = t, r = e.length - 1; n < r; n++) e[n] = e[n + 1];
	e.pop();
}
function Pn(e, t, n) {
	for (let n = e.length - 1; n >= t; n--) e[n + 1] = e[n];
	e[t] = n;
}
function Fn(e, t) {
	let n = -1, r = 1e9;
	for (let i = 0; i < t.length; i++) (t[i] - r || e[i].endSide - e[n].endSide) < 0 && (n = i, r = t[i]);
	return n;
}
function In(e, t, n = e.length) {
	let r = 0;
	for (let i = 0; i < n && i < e.length;) e.charCodeAt(i) == 9 ? (r += t - r % t, i++) : (r++, i = M(e, i));
	return r;
}
function Ln(e, t, n, r) {
	for (let r = 0, i = 0;;) {
		if (i >= t) return r;
		if (r == e.length) break;
		i += e.charCodeAt(r) == 9 ? n - i % n : 1, r = M(e, r);
	}
	return r === !0 ? -1 : e.length;
}
for (var Rn = "ͼ", zn = typeof Symbol > "u" ? "__ͼ" : Symbol.for(Rn), Bn = typeof Symbol > "u" ? "__styleSet" + Math.floor(Math.random() * 1e8) : Symbol("styleSet"), Vn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : {}, Hn = class {
	constructor(e, t) {
		this.rules = [];
		let { finish: n } = t || {};
		function r(e) {
			return /^@/.test(e) ? [e] : e.split(/,\s*/);
		}
		function i(e, t, a, o) {
			let s = [], c = /^@(\w+)\b/.exec(e[0]), l = c && c[1] == "keyframes";
			if (c && t == null) return a.push(e[0] + ";");
			for (let n in t) {
				let o = t[n];
				if (/&/.test(n)) i(n.split(/,\s*/).map((t) => e.map((e) => t.replace(/&/, e))).reduce((e, t) => e.concat(t)), o, a);
				else if (o && typeof o == "object") {
					if (!c) throw RangeError("The value of a property (" + n + ") should be a primitive value.");
					i(r(n), o, s, l);
				} else o != null && s.push(n.replace(/_.*/, "").replace(/[A-Z]/g, (e) => "-" + e.toLowerCase()) + ": " + o + ";");
			}
			(s.length || l) && a.push((n && !c && !o ? e.map(n) : e).join(", ") + " {" + s.join(" ") + "}");
		}
		for (let t in e) i(r(t), e[t], this.rules);
	}
	getRules() {
		return this.rules.join("\n");
	}
	static newName() {
		let e = Vn[zn] || 1;
		return Vn[zn] = e + 1, Rn + e.toString(36);
	}
	static mount(e, t, n) {
		let r = e[Bn], i = n && n.nonce;
		r ? i && r.setNonce(i) : r = new Wn(e, i), r.mount(Array.isArray(t) ? t : [t], e);
	}
}, Un = /* @__PURE__ */ new Map(), Wn = class {
	constructor(e, t) {
		let n = e.ownerDocument || e, r = n.defaultView;
		if (!e.head && e.adoptedStyleSheets && r.CSSStyleSheet) {
			let t = Un.get(n);
			if (t) return e[Bn] = t;
			this.sheet = new r.CSSStyleSheet(), Un.set(n, this);
		} else this.styleTag = n.createElement("style"), t && this.styleTag.setAttribute("nonce", t);
		this.modules = [], e[Bn] = this;
	}
	mount(e, t) {
		let n = this.sheet, r = 0, i = 0, a = !1;
		for (let t = 0; t < e.length; t++) {
			let o = e[t], s = this.modules.indexOf(o);
			if (s < i && s > -1 && (this.modules.splice(s, 1), a = !0, i--, s = -1), s == -1) {
				if (this.modules.splice(i++, 0, o), a = !0, n) for (let e = 0; e < o.rules.length; e++) n.insertRule(o.rules[e], r++);
			} else {
				for (; i < s;) r += this.modules[i++].rules.length;
				r += o.rules.length, i++;
			}
		}
		if (n) t.adoptedStyleSheets.indexOf(this.sheet) < 0 && (t.adoptedStyleSheets = [this.sheet, ...t.adoptedStyleSheets]);
		else {
			if (a) {
				let e = "";
				for (let t = 0; t < this.modules.length; t++) e += this.modules[t].getRules() + "\n";
				this.styleTag.textContent = e;
			}
			let e = t.head || t;
			this.styleTag.parentNode != e && e.insertBefore(this.styleTag, e.firstChild);
		}
	}
	setNonce(e) {
		this.styleTag && this.styleTag.getAttribute("nonce") != e && this.styleTag.setAttribute("nonce", e);
	}
}, Gn = {
	8: "Backspace",
	9: "Tab",
	10: "Enter",
	12: "NumLock",
	13: "Enter",
	16: "Shift",
	17: "Control",
	18: "Alt",
	20: "CapsLock",
	27: "Escape",
	32: " ",
	33: "PageUp",
	34: "PageDown",
	35: "End",
	36: "Home",
	37: "ArrowLeft",
	38: "ArrowUp",
	39: "ArrowRight",
	40: "ArrowDown",
	44: "PrintScreen",
	45: "Insert",
	46: "Delete",
	59: ";",
	61: "=",
	91: "Meta",
	92: "Meta",
	106: "*",
	107: "+",
	108: ",",
	109: "-",
	110: ".",
	111: "/",
	144: "NumLock",
	145: "ScrollLock",
	160: "Shift",
	161: "Shift",
	162: "Control",
	163: "Control",
	164: "Alt",
	165: "Alt",
	173: "-",
	186: ";",
	187: "=",
	188: ",",
	189: "-",
	190: ".",
	191: "/",
	192: "`",
	219: "[",
	220: "\\",
	221: "]",
	222: "'"
}, Kn = {
	48: ")",
	49: "!",
	50: "@",
	51: "#",
	52: "$",
	53: "%",
	54: "^",
	55: "&",
	56: "*",
	57: "(",
	59: ":",
	61: "+",
	173: "_",
	186: ":",
	187: "+",
	188: "<",
	189: "_",
	190: ">",
	191: "?",
	192: "~",
	219: "{",
	220: "|",
	221: "}",
	222: "\""
}, qn = typeof navigator < "u" && /Mac/.test(navigator.platform), Jn = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent), Yn = 0; Yn < 10; Yn++) Gn[48 + Yn] = Gn[96 + Yn] = String(Yn);
for (var Yn = 1; Yn <= 24; Yn++) Gn[Yn + 111] = "F" + Yn;
for (var Yn = 65; Yn <= 90; Yn++) Gn[Yn] = String.fromCharCode(Yn + 32), Kn[Yn] = String.fromCharCode(Yn);
for (var Xn in Gn) Kn.hasOwnProperty(Xn) || (Kn[Xn] = Gn[Xn]);
function Zn(e) {
	var t = !(qn && e.metaKey && e.shiftKey && !e.ctrlKey && !e.altKey || Jn && e.shiftKey && e.key && e.key.length == 1 || e.key == "Unidentified") && e.key || (e.shiftKey ? Kn : Gn)[e.keyCode] || e.key || "Unidentified";
	return t == "Esc" && (t = "Escape"), t == "Del" && (t = "Delete"), t == "Left" && (t = "ArrowLeft"), t == "Up" && (t = "ArrowUp"), t == "Right" && (t = "ArrowRight"), t == "Down" && (t = "ArrowDown"), t;
}
// node_modules/crelt/index.js
function z() {
	var e = arguments[0];
	typeof e == "string" && (e = document.createElement(e));
	var t = 1, n = arguments[1];
	if (n && typeof n == "object" && n.nodeType == null && !Array.isArray(n)) {
		for (var r in n) if (Object.prototype.hasOwnProperty.call(n, r)) {
			var i = n[r];
			typeof i == "string" ? e.setAttribute(r, i) : i != null && (e[r] = i);
		}
		t++;
	}
	for (; t < arguments.length; t++) Qn(e, arguments[t]);
	return e;
}
function Qn(e, t) {
	if (typeof t == "string") e.appendChild(document.createTextNode(t));
	else if (t != null) {
		if (t.nodeType != null) e.appendChild(t);
		else if (Array.isArray(t)) for (var n = 0; n < t.length; n++) Qn(e, t[n]);
		else throw RangeError("Unsupported child node: " + t);
	}
}
// node_modules/@codemirror/view/dist/index.js
var $n = typeof navigator < "u" ? navigator : {
	userAgent: "",
	vendor: "",
	platform: ""
}, er = typeof document < "u" ? document : { documentElement: { style: {} } }, tr = /*@__PURE__*/ /Edge\/(\d+)/.exec($n.userAgent), nr = /*@__PURE__*/ /MSIE \d/.test($n.userAgent), rr = /*@__PURE__*/ /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec($n.userAgent), ir = !!(nr || rr || tr), ar = !ir && /*@__PURE__*/ /gecko\/(\d+)/i.test($n.userAgent), or = !ir && /*@__PURE__*/ /Chrome\/(\d+)/.exec($n.userAgent), sr = "webkitFontSmoothing" in er.documentElement.style, cr = !ir && /*@__PURE__*/ /Apple Computer/.test($n.vendor), lr = cr && (/*@__PURE__*/ /Mobile\/\w+/.test($n.userAgent) || $n.maxTouchPoints > 2), B = {
	mac: lr || /*@__PURE__*/ /Mac/.test($n.platform),
	windows: /*@__PURE__*/ /Win/.test($n.platform),
	linux: /*@__PURE__*/ /Linux|X11/.test($n.platform),
	ie: ir,
	ie_version: nr ? er.documentMode || 6 : rr ? +rr[1] : tr ? +tr[1] : 0,
	gecko: ar,
	gecko_version: ar ? +(/*@__PURE__*/ /Firefox\/(\d+)/.exec($n.userAgent) || [0, 0])[1] : 0,
	chrome: !!or,
	chrome_version: or ? +or[1] : 0,
	ios: lr,
	android: /*@__PURE__*/ /Android\b/.test($n.userAgent),
	webkit: sr,
	webkit_version: sr ? +(/*@__PURE__*/ /\bAppleWebKit\/(\d+)/.exec($n.userAgent) || [0, 0])[1] : 0,
	safari: cr,
	safari_version: cr ? +(/*@__PURE__*/ /\bVersion\/(\d+(\.\d+)?)/.exec($n.userAgent) || [0, 0])[1] : 0,
	tabSize: er.documentElement.style.tabSize == null ? "-moz-tab-size" : "tab-size"
};
function ur(e, t) {
	for (let n in e) n == "class" && t.class ? t.class += " " + e.class : n == "style" && t.style ? t.style += ";" + e.style : t[n] = e[n];
	return t;
}
var dr = /*@__PURE__*/ Object.create(null);
function fr(e, t, n) {
	if (e == t) return !0;
	e ||= dr, t ||= dr;
	let r = Object.keys(e), i = Object.keys(t);
	if (r.length - 0 != i.length - 0) return !1;
	for (let a of r) if (a != n && (i.indexOf(a) == -1 || e[a] !== t[a])) return !1;
	return !0;
}
function pr(e, t) {
	for (let n = e.attributes.length - 1; n >= 0; n--) {
		let r = e.attributes[n].name;
		t[r] ?? e.removeAttribute(r);
	}
	for (let n in t) {
		let r = t[n];
		n == "style" ? e.style.cssText = r : e.getAttribute(n) != r && e.setAttribute(n, r);
	}
}
function mr(e, t, n) {
	let r = !1;
	if (t) for (let i in t) n && i in n || (r = !0, i == "style" ? e.style.cssText = "" : e.removeAttribute(i));
	if (n) for (let i in n) t && t[i] == n[i] || (r = !0, i == "style" ? e.style.cssText = n[i] : e.setAttribute(i, n[i]));
	return r;
}
function hr(e) {
	let t = Object.create(null);
	for (let n = 0; n < e.attributes.length; n++) {
		let r = e.attributes[n];
		t[r.name] = r.value;
	}
	return t;
}
var gr = class {
	eq(e) {
		return !1;
	}
	updateDOM(e, t, n) {
		return !1;
	}
	compare(e) {
		return this == e || this.constructor == e.constructor && this.eq(e);
	}
	get estimatedHeight() {
		return -1;
	}
	get lineBreaks() {
		return 0;
	}
	ignoreEvent(e) {
		return !0;
	}
	coordsAt(e, t, n) {
		return null;
	}
	get isHidden() {
		return !1;
	}
	get editable() {
		return !1;
	}
	destroy(e) {}
}, _r = /*@__PURE__*/ (function(e) {
	return e[e.Text = 0] = "Text", e[e.WidgetBefore = 1] = "WidgetBefore", e[e.WidgetAfter = 2] = "WidgetAfter", e[e.WidgetRange = 3] = "WidgetRange", e;
})(_r ||= {}), V = class extends vn {
	constructor(e, t, n, r) {
		super(), this.startSide = e, this.endSide = t, this.widget = n, this.spec = r;
	}
	get heightRelevant() {
		return !1;
	}
	static mark(e) {
		return new vr(e);
	}
	static widget(e) {
		let t = Math.max(-1e4, Math.min(1e4, e.side || 0)), n = !!e.block;
		return t += n && !e.inlineOrder ? t > 0 ? 3e8 : -4e8 : t > 0 ? 1e8 : -1e8, new br(e, t, t, n, e.widget || null, !1);
	}
	static replace(e) {
		let t = !!e.block, n, r;
		if (e.isBlockGap) n = -5e8, r = 4e8;
		else {
			let { start: i, end: a } = xr(e, t);
			n = (i ? t ? -3e8 : -1 : 5e8) - 1, r = (a ? t ? 2e8 : 1 : -6e8) + 1;
		}
		return new br(e, n, r, t, e.widget || null, !0);
	}
	static line(e) {
		return new yr(e);
	}
	static set(e, t = !1) {
		return R.of(e, t);
	}
	hasHeight() {
		return this.widget ? this.widget.estimatedHeight > -1 : !1;
	}
};
V.none = R.empty;
var vr = class e extends V {
	constructor(e) {
		let { start: t, end: n } = xr(e);
		super(t ? -1 : 5e8, n ? 1 : -6e8, null, e), this.tagName = e.tagName || "span", this.attrs = e.class && e.attributes ? ur(e.attributes, { class: e.class }) : e.class ? { class: e.class } : e.attributes || dr;
	}
	eq(t) {
		return this == t || t instanceof e && this.tagName == t.tagName && fr(this.attrs, t.attrs);
	}
	range(e, t = e) {
		if (e >= t) throw RangeError("Mark decorations may not be empty");
		return super.range(e, t);
	}
};
vr.prototype.point = !1;
var yr = class e extends V {
	constructor(e) {
		super(-2e8, -2e8, null, e);
	}
	eq(t) {
		return t instanceof e && this.spec.class == t.spec.class && fr(this.spec.attributes, t.spec.attributes);
	}
	range(e, t = e) {
		if (t != e) throw RangeError("Line decoration ranges must be zero-length");
		return super.range(e, t);
	}
};
yr.prototype.mapMode = vt.TrackBefore, yr.prototype.point = !0;
var br = class e extends V {
	constructor(e, t, n, r, i, a) {
		super(t, n, i, e), this.block = r, this.isReplace = a, this.mapMode = r ? t <= 0 ? vt.TrackBefore : vt.TrackAfter : vt.TrackDel;
	}
	get type() {
		return this.startSide == this.endSide ? this.startSide <= 0 ? _r.WidgetBefore : _r.WidgetAfter : _r.WidgetRange;
	}
	get heightRelevant() {
		return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0);
	}
	eq(t) {
		return t instanceof e && Sr(this.widget, t.widget) && this.block == t.block && this.startSide == t.startSide && this.endSide == t.endSide;
	}
	range(e, t = e) {
		if (this.isReplace && (e > t || e == t && this.startSide > 0 && this.endSide <= 0)) throw RangeError("Invalid range for replacement decoration");
		if (!this.isReplace && t != e) throw RangeError("Widget decorations can only have zero-length ranges");
		return super.range(e, t);
	}
};
br.prototype.point = !0;
function xr(e, t = !1) {
	let { inclusiveStart: n, inclusiveEnd: r } = e;
	return n ??= e.inclusive, r ??= e.inclusive, {
		start: n ?? t,
		end: r ?? t
	};
}
function Sr(e, t) {
	return e == t || !!(e && t && e.compare(t));
}
function Cr(e, t, n, r = 0) {
	let i = n.length - 1;
	i >= 0 && n[i] + r >= e ? n[i] = Math.max(n[i], t) : n.push(e, t);
}
var wr = class e extends vn {
	constructor(e, t, n) {
		super(), this.tagName = e, this.attributes = t, this.rank = n;
	}
	eq(t) {
		return t == this || t instanceof e && this.tagName == t.tagName && fr(this.attributes, t.attributes);
	}
	static create(t) {
		return new e(t.tagName, t.attributes || dr, t.rank == null ? 50 : Math.max(0, Math.min(t.rank, 100)));
	}
	static set(e, t = !1) {
		return R.of(e, t);
	}
};
wr.prototype.startSide = wr.prototype.endSide = -1;
var H = (e) => e.nodeType == 1, Tr = (e) => e.nodeType == 3;
function Er(e) {
	let t;
	return t = e.nodeType == 11 ? e.getSelection ? e : e.ownerDocument : e, t.getSelection();
}
function Dr(e, t) {
	return t ? e == t || e.contains(t.nodeType == 1 ? t : t.parentNode) : !1;
}
function Or(e, t) {
	if (!t.anchorNode) return !1;
	try {
		return Dr(e, t.anchorNode);
	} catch {
		return !1;
	}
}
function kr(e) {
	return Tr(e) ? Kr(e, 0, e.nodeValue.length).getClientRects() : H(e) ? e.getClientRects() : [];
}
function Ar(e, t, n, r) {
	return n ? Nr(e, t, n, r, -1) || Nr(e, t, n, r, 1) : !1;
}
function jr(e) {
	for (var t = 0;; t++) if (e = e.previousSibling, !e) return t;
}
function Mr(e) {
	return H(e) && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(e.nodeName);
}
function Nr(e, t, n, r, i) {
	for (;;) {
		if (e == n && t == r) return !0;
		if (t == (i < 0 ? 0 : Pr(e))) {
			if (e.nodeName == "DIV") return !1;
			let n = e.parentNode;
			if (!n || !H(n)) return !1;
			t = jr(e) + (i < 0 ? 0 : 1), e = n;
		} else if (H(e)) {
			if (e = e.childNodes[t + (i < 0 ? -1 : 0)], H(e) && (e.nodeName == "IMG" || e.nodeName == "BR" || e.contentEditable == "false")) return !1;
			t = i < 0 ? Pr(e) : 0;
		} else return !1;
	}
}
function Pr(e) {
	return Tr(e) ? e.nodeValue.length : e.childNodes.length;
}
function Fr(e, t) {
	let { left: n, right: r } = e;
	if (n == r) return e;
	let i = t ? n : r;
	return {
		left: i,
		right: i,
		top: e.top,
		bottom: e.bottom
	};
}
function Ir(e) {
	let t = e.visualViewport;
	return t ? {
		left: 0,
		right: t.width,
		top: 0,
		bottom: t.height
	} : {
		left: 0,
		right: e.innerWidth,
		top: 0,
		bottom: e.innerHeight
	};
}
function Lr(e, t) {
	let n = t.width / e.offsetWidth, r = t.height / e.offsetHeight;
	return (n > .995 && n < 1.005 || !isFinite(n) || Math.abs(t.width - e.offsetWidth) < 1) && (n = 1), (r > .995 && r < 1.005 || !isFinite(r) || Math.abs(t.height - e.offsetHeight) < 1) && (r = 1), {
		scaleX: n,
		scaleY: r
	};
}
function Rr(e, t, n, r, i, a, o, s) {
	let c = e.ownerDocument, l = c.defaultView || window;
	for (let u = e, d = !1; u && !d;) if (H(u)) {
		let e, f = u == c.body, p = 1, m = 1, h = !0, g = !0;
		if (f) e = Ir(l);
		else {
			let t = getComputedStyle(u);
			if (/^(fixed|sticky)$/.test(t.position) && (d = !0), (u.scrollHeight <= u.clientHeight || !/auto|scroll/.test(t.overflowY)) && (g = !1), (u.scrollWidth <= u.clientWidth || !/auto|scroll/.test(t.overflowX)) && (h = !1), !h && !g) {
				u = u.assignedSlot || u.parentNode;
				continue;
			}
			let n = u.getBoundingClientRect();
			({scaleX: p, scaleY: m} = Lr(u, n)), e = {
				left: n.left,
				right: n.left + u.clientWidth * p,
				top: n.top,
				bottom: n.top + u.clientHeight * m
			};
		}
		let _ = 0, v = 0;
		if (g) {
			if (i == "nearest") t.top < e.top + o ? (v = t.top - (e.top + o), n > 0 && t.bottom > e.bottom + v && (v = t.bottom - e.bottom + o)) : t.bottom > e.bottom - o && (v = t.bottom - e.bottom + o, n < 0 && t.top - v < e.top && (v = t.top - (e.top + o)));
			else {
				let r = t.bottom - t.top, a = e.bottom - e.top;
				v = (i == "center" && r <= a ? t.top + r / 2 - a / 2 : i == "start" || i == "center" && n < 0 ? t.top - o : t.bottom - a + o) - e.top;
			}
		}
		if (h && (r == "nearest" ? t.left < e.left + a ? (_ = t.left - (e.left + a), n > 0 && t.right > e.right + _ && (_ = t.right - e.right + a)) : t.right > e.right - a && (_ = t.right - e.right + a, n < 0 && t.left < e.left + _ && (_ = t.left - (e.left + a))) : _ = (r == "center" ? t.left + (t.right - t.left) / 2 - (e.right - e.left) / 2 : r == "start" == s ? t.left - a : t.right - (e.right - e.left) + a) - e.left), _ || v) {
			if (f) l.scrollBy(_, v);
			else {
				let e = 0, n = 0;
				if (v) {
					let e = u.scrollTop;
					u.scrollTop += v / m, n = (u.scrollTop - e) * m;
				}
				if (_) {
					let t = u.scrollLeft;
					u.scrollLeft += _ / p, e = (u.scrollLeft - t) * p;
				}
				t = {
					left: t.left - e,
					top: t.top - n,
					right: t.right - e,
					bottom: t.bottom - n
				}, e && Math.abs(e - _) < 1 && (r = "nearest"), n && Math.abs(n - v) < 1 && (i = "nearest");
			}
		}
		if (f) break;
		(t.top < e.top || t.bottom > e.bottom || t.left < e.left || t.right > e.right) && (t = {
			left: Math.max(t.left, e.left),
			right: Math.min(t.right, e.right),
			top: Math.max(t.top, e.top),
			bottom: Math.min(t.bottom, e.bottom)
		}), u = u.assignedSlot || u.parentNode;
	} else if (u.nodeType == 11) u = u.host;
	else break;
}
function zr(e, t = !0) {
	let n = e.ownerDocument, r = null, i = null;
	for (let a = e.parentNode; a && !(a == n.body || (!t || r) && i);) if (H(a)) !i && a.scrollHeight > a.clientHeight && /scroll|auto/.test(getComputedStyle(a).overflowY) && (i = a), t && !r && a.scrollWidth > a.clientWidth && /scroll|auto/.test(getComputedStyle(a).overflowX) && (r = a), a = a.assignedSlot || a.parentNode;
	else if (a.nodeType == 11) a = a.host;
	else break;
	return {
		x: r,
		y: i
	};
}
var Br = class {
	constructor() {
		this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0;
	}
	eq(e) {
		return this.anchorNode == e.anchorNode && this.anchorOffset == e.anchorOffset && this.focusNode == e.focusNode && this.focusOffset == e.focusOffset;
	}
	setRange(e) {
		let { anchorNode: t, focusNode: n } = e;
		this.set(t, Math.min(e.anchorOffset, t ? Pr(t) : 0), n, Math.min(e.focusOffset, n ? Pr(n) : 0));
	}
	set(e, t, n, r) {
		this.anchorNode = e, this.anchorOffset = t, this.focusNode = n, this.focusOffset = r;
	}
};
function Vr(e) {
	let t = [];
	for (let n = e; n; n = n.nodeType == 11 ? n.host : n.parentNode) H(n) && t.push({
		node: n,
		left: n.scrollLeft,
		top: n.scrollTop
	});
	return t;
}
function Hr(e, t = !0) {
	for (let { node: n, left: r, top: i } of e) t && n.scrollTop != i && (n.scrollTop = i), n.scrollLeft != r && (n.scrollLeft = r);
}
var Ur = null;
B.safari && B.safari_version >= 26 && (Ur = !1);
function Wr(e) {
	if (e.setActive) return e.setActive();
	if (Ur) return e.focus(Ur);
	let t = Vr(e);
	e.focus(Ur == null ? { get preventScroll() {
		return Ur = { preventScroll: !0 }, !0;
	} } : void 0), Ur || (Ur = !1, Hr(t));
}
var Gr;
function Kr(e, t, n = t) {
	let r = Gr ||= document.createRange();
	return r.setEnd(e, n), r.setStart(e, t), r;
}
function qr(e, t, n, r) {
	let i = {
		key: t,
		code: t,
		keyCode: n,
		which: n,
		cancelable: !0
	};
	r && ({altKey: i.altKey, ctrlKey: i.ctrlKey, shiftKey: i.shiftKey, metaKey: i.metaKey} = r);
	let a = new KeyboardEvent("keydown", i);
	a.synthetic = !0, e.dispatchEvent(a);
	let o = new KeyboardEvent("keyup", i);
	return o.synthetic = !0, e.dispatchEvent(o), a.defaultPrevented || o.defaultPrevented;
}
function Jr(e) {
	for (; e;) {
		if (e && (e.nodeType == 9 || e.nodeType == 11 && e.host)) return e;
		e = e.assignedSlot || e.parentNode;
	}
	return null;
}
function Yr(e, t) {
	let n = t.focusNode, r = t.focusOffset;
	if (!n || t.anchorNode != n || t.anchorOffset != r) return !1;
	for (r = Math.min(r, Pr(n));;) if (r) {
		if (!H(n)) return !1;
		let e = n.childNodes[r - 1];
		e.contentEditable == "false" ? r-- : (n = e, r = Pr(n));
	} else if (n == e) return !0;
	else r = jr(n), n = n.parentNode;
}
function Xr(e) {
	return e instanceof Window ? e.pageYOffset > Math.max(0, e.document.documentElement.scrollHeight - e.innerHeight - 4) : e.scrollTop > Math.max(1, e.scrollHeight - e.clientHeight - 4);
}
function Zr(e, t) {
	for (let n = e, r = t;;) if (Tr(n) && r > 0) return {
		node: n,
		offset: r
	};
	else if (H(n) && r > 0) {
		if (n.contentEditable == "false") return null;
		n = n.childNodes[r - 1], r = Pr(n);
	} else if (n.parentNode && !Mr(n)) r = jr(n), n = n.parentNode;
	else return null;
}
function Qr(e, t) {
	for (let n = e, r = t;;) if (Tr(n) && r < n.nodeValue.length) return {
		node: n,
		offset: r
	};
	else if (H(n) && r < n.childNodes.length) {
		if (n.contentEditable == "false") return null;
		n = n.childNodes[r], r = 0;
	} else if (n.parentNode && !Mr(n)) r = jr(n) + 1, n = n.parentNode;
	else return null;
}
var $r = class e {
	constructor(e, t, n = !0) {
		this.node = e, this.offset = t, this.precise = n;
	}
	static before(t, n) {
		return new e(t.parentNode, jr(t), n);
	}
	static after(t, n) {
		return new e(t.parentNode, jr(t) + 1, n);
	}
}, U = /*@__PURE__*/ (function(e) {
	return e[e.LTR = 0] = "LTR", e[e.RTL = 1] = "RTL", e;
})(U ||= {}), ei = U.LTR, ti = U.RTL;
function ni(e) {
	let t = [];
	for (let n = 0; n < e.length; n++) t.push(1 << e[n]);
	return t;
}
var ri = /*@__PURE__*/ ni("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"), ii = /*@__PURE__*/ ni("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"), ai = /*@__PURE__*/ Object.create(null), oi = [];
for (let e of [
	"()",
	"[]",
	"{}"
]) {
	let t = /*@__PURE__*/ e.charCodeAt(0), n = /*@__PURE__*/ e.charCodeAt(1);
	ai[t] = n, ai[n] = -t;
}
function si(e) {
	return e <= 247 ? ri[e] : 1424 <= e && e <= 1524 ? 2 : 1536 <= e && e <= 1785 ? ii[e - 1536] : 1774 <= e && e <= 2220 ? 4 : 8192 <= e && e <= 8204 ? 256 : 64336 <= e && e <= 65023 ? 4 : 1;
}
var ci = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/, li = class {
	get dir() {
		return this.level % 2 ? ti : ei;
	}
	constructor(e, t, n) {
		this.from = e, this.to = t, this.level = n;
	}
	side(e, t) {
		return this.dir == t == e ? this.to : this.from;
	}
	forward(e, t) {
		return e == (this.dir == t);
	}
	static find(e, t, n, r) {
		let i = -1;
		for (let a = 0; a < e.length; a++) {
			let o = e[a];
			if (o.from <= t && o.to >= t) {
				if (o.level == n) return a;
				(i < 0 || (r == 0 ? e[i].level > o.level : r < 0 ? o.from < t : o.to > t)) && (i = a);
			}
		}
		if (i < 0) throw RangeError("Index out of range");
		return i;
	}
};
function ui(e, t) {
	if (e.length != t.length) return !1;
	for (let n = 0; n < e.length; n++) {
		let r = e[n], i = t[n];
		if (r.from != i.from || r.to != i.to || r.direction != i.direction || !ui(r.inner, i.inner)) return !1;
	}
	return !0;
}
var W = [];
function di(e, t, n, r, i) {
	for (let a = 0; a <= r.length; a++) {
		let o = a ? r[a - 1].to : t, s = a < r.length ? r[a].from : n, c = a ? 256 : i;
		for (let t = o, n = c, r = c; t < s; t++) {
			let i = si(e.charCodeAt(t));
			i == 512 ? i = n : i == 8 && r == 4 && (i = 16), W[t] = i == 4 ? 2 : i, i & 7 && (r = i), n = i;
		}
		for (let e = o, t = c, r = c; e < s; e++) {
			let i = W[e];
			if (i == 128) e < s - 1 && t == W[e + 1] && t & 24 ? i = W[e] = t : W[e] = 256;
			else if (i == 64) {
				let i = e + 1;
				for (; i < s && W[i] == 64;) i++;
				let a = e && t == 8 || i < n && W[i] == 8 ? r == 1 ? 1 : 8 : 256;
				for (let t = e; t < i; t++) W[t] = a;
				e = i - 1;
			} else i == 8 && r == 1 && (W[e] = 1);
			t = i, i & 7 && (r = i);
		}
	}
}
function fi(e, t, n, r, i) {
	let a = i == 1 ? 2 : 1;
	for (let o = 0, s = 0, c = 0; o <= r.length; o++) {
		let l = o ? r[o - 1].to : t, u = o < r.length ? r[o].from : n;
		for (let t = l, n, r, o; t < u; t++) if (r = ai[n = e.charCodeAt(t)]) {
			if (r < 0) {
				for (let e = s - 3; e >= 0; e -= 3) if (oi[e + 1] == -r) {
					let n = oi[e + 2], r = n & 2 ? i : n & 4 ? n & 1 ? a : i : 0;
					r && (W[t] = W[oi[e]] = r), s = e;
					break;
				}
			} else if (oi.length == 189) break;
			else oi[s++] = t, oi[s++] = n, oi[s++] = c;
		} else if ((o = W[t]) == 2 || o == 1) {
			let e = o == i;
			c = +!e;
			for (let t = s - 3; t >= 0; t -= 3) {
				let n = oi[t + 2];
				if (n & 2) break;
				if (e) oi[t + 2] |= 2;
				else {
					if (n & 4) break;
					oi[t + 2] |= 4;
				}
			}
		}
	}
}
function pi(e, t, n, r) {
	for (let i = 0, a = r; i <= n.length; i++) {
		let o = i ? n[i - 1].to : e, s = i < n.length ? n[i].from : t;
		for (let c = o; c < s;) {
			let o = W[c];
			if (o == 256) {
				let o = c + 1;
				for (;;) if (o == s) {
					if (i == n.length) break;
					o = n[i++].to, s = i < n.length ? n[i].from : t;
				} else if (W[o] == 256) o++;
				else break;
				let l = a == 1, u = l == ((o < t ? W[o] : r) == 1) ? l ? 1 : 2 : r;
				for (let t = o, r = i, a = r ? n[r - 1].to : e; t > c;) t == a && (t = n[--r].from, a = r ? n[r - 1].to : e), W[--t] = u;
				c = o;
			} else a = o, c++;
		}
	}
}
function mi(e, t, n, r, i, a, o) {
	let s = r % 2 ? 2 : 1;
	if (r % 2 == i % 2) for (let c = t, l = 0; c < n;) {
		let t = !0, u = !1;
		if (l == a.length || c < a[l].from) {
			let e = W[c];
			e != s && (t = !1, u = e == 16);
		}
		let d = !t && s == 1 ? [] : null, f = t ? r : r + 1, p = c;
		run: for (;;) if (l < a.length && p == a[l].from) {
			if (u) break run;
			let m = a[l];
			if (!t) for (let e = m.to, t = l + 1;;) {
				if (e == n) break run;
				if (t < a.length && a[t].from == e) e = a[t++].to;
				else if (W[e] == s) break run;
				else break;
			}
			l++, d ? d.push(m) : (m.from > c && o.push(new li(c, m.from, f)), hi(e, m.direction == ei == !(f % 2) ? r : r + 1, i, m.inner, m.from, m.to, o), c = m.to), p = m.to;
		} else if (p == n || (t ? W[p] != s : W[p] == s)) break;
		else p++;
		d ? mi(e, c, p, r + 1, i, d, o) : c < p && o.push(new li(c, p, f)), c = p;
	}
	else for (let c = n, l = a.length; c > t;) {
		let n = !0, u = !1;
		if (!l || c > a[l - 1].to) {
			let e = W[c - 1];
			e != s && (n = !1, u = e == 16);
		}
		let d = !n && s == 1 ? [] : null, f = n ? r : r + 1, p = c;
		run: for (;;) if (l && p == a[l - 1].to) {
			if (u) break run;
			let m = a[--l];
			if (!n) for (let e = m.from, n = l;;) {
				if (e == t) break run;
				if (n && a[n - 1].to == e) e = a[--n].from;
				else if (W[e - 1] == s) break run;
				else break;
			}
			d ? d.push(m) : (m.to < c && o.push(new li(m.to, c, f)), hi(e, m.direction == ei == !(f % 2) ? r : r + 1, i, m.inner, m.from, m.to, o), c = m.from), p = m.from;
		} else if (p == t || (n ? W[p - 1] != s : W[p - 1] == s)) break;
		else p--;
		d ? mi(e, p, c, r + 1, i, d, o) : p < c && o.push(new li(p, c, f)), c = p;
	}
}
function hi(e, t, n, r, i, a, o) {
	let s = t % 2 ? 2 : 1;
	di(e, i, a, r, s), fi(e, i, a, r, s), pi(i, a, r, s), mi(e, i, a, t, n, r, o);
}
function gi(e, t, n) {
	if (!e) return [new li(0, 0, +(t == ti))];
	if (t == ei && !n.length && !ci.test(e)) return _i(e.length);
	if (n.length) for (; e.length > W.length;) W[W.length] = 256;
	let r = [], i = t == ei ? 0 : 1;
	return hi(e, i, i, n, 0, e.length, r), r;
}
function _i(e) {
	return [new li(0, e, 0)];
}
var vi = "";
function yi(e, t, n, r, i) {
	if (!e.length) return null;
	let a = r.head - e.from, o;
	if (r.head == e.from && r.assoc < 0) {
		if (!i) return null;
		a = t[o = 0].side(!1, n);
	} else if (r.head == e.to && r.assoc > 0) {
		if (i) return null;
		a = t[o = t.length - 1].side(!0, n);
	} else o = li.find(t, a, r.bidiLevel ?? -1, r.assoc);
	let s = t[o], c = s.side(i, n);
	if (a == c) {
		let e = o += i ? 1 : -1;
		if (e < 0 || e >= t.length) return null;
		s = t[o = e], a = s.side(!i, n), c = s.side(i, n);
	}
	let l = M(e.text, a, s.forward(i, n));
	(l < s.from || l > s.to) && (l = c), vi = e.text.slice(Math.min(a, l), Math.max(a, l));
	let u = o == (i ? t.length - 1 : 0) ? null : t[o + (i ? 1 : -1)];
	if (l == c) {
		if (!u) return i ? N.cursor(e.to, 1) : N.cursor(e.from, -1);
		if (u.level + +!i < s.level) return N.cursor(u.side(!i, n) + e.from, u.forward(i, n) ? 1 : -1, u.level);
	}
	return N.cursor(l + e.from, s.forward(i, n) ? -1 : 1, s.level);
}
function bi(e, t, n) {
	for (let r = t; r < n; r++) {
		let t = si(e.charCodeAt(r));
		if (t == 1) return ei;
		if (t == 2 || t == 4) return ti;
	}
}
var xi = /*@__PURE__*/ P.define(), Si = /*@__PURE__*/ P.define(), Ci = /*@__PURE__*/ P.define(), wi = /*@__PURE__*/ P.define(), Ti = /*@__PURE__*/ P.define(), Ei = /*@__PURE__*/ P.define(), Di = /*@__PURE__*/ P.define(), Oi = /*@__PURE__*/ P.define(), ki = /*@__PURE__*/ P.define(), Ai = /*@__PURE__*/ P.define({ combine: (e) => e.some((e) => e) }), ji = /*@__PURE__*/ P.define({ combine: (e) => e.some((e) => e) }), Mi = /*@__PURE__*/ P.define(), Ni = class e {
	constructor(e, t, n, r, i, a = !1) {
		this.range = e, this.y = t, this.x = n, this.yMargin = r, this.xMargin = i, this.isSnapshot = a;
	}
	map(t) {
		return t.empty ? this : new e(this.range.map(t), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
	}
	clip(t) {
		return this.range.to <= t.doc.length ? this : new e(N.cursor(t.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
	}
}, Pi = /*@__PURE__*/ F.define({ map: (e, t) => e.map(t) }), Fi = /*@__PURE__*/ F.define();
function Ii(e, t, n) {
	let r = e.facet(wi);
	r.length ? r[0](t) : window.onerror && window.onerror(String(t), n, void 0, void 0, t) || (n ? console.error(n + ":", t) : console.error(t));
}
var Li = /*@__PURE__*/ P.define({ combine: (e) => !e.length || e[0] }), Ri = 0, zi = /*@__PURE__*/ P.define({ combine(e) {
	return e.filter((t, n) => {
		for (let r = 0; r < n; r++) if (e[r].plugin == t.plugin) return !1;
		return !0;
	});
} }), G = class e {
	constructor(e, t, n, r, i) {
		this.id = e, this.create = t, this.domEventHandlers = n, this.domEventObservers = r, this.baseExtensions = i(this), this.extension = this.baseExtensions.concat(zi.of({
			plugin: this,
			arg: void 0
		}));
	}
	of(e) {
		return this.baseExtensions.concat(zi.of({
			plugin: this,
			arg: e
		}));
	}
	static define(t, n) {
		let { eventHandlers: r, eventObservers: i, provide: a, decorations: o } = n || {};
		return new e(Ri++, t, r, i, (e) => {
			let t = [];
			return o && t.push(Ui.of((t) => {
				let n = t.plugin(e);
				return n ? o(n) : V.none;
			})), a && t.push(a(e)), t;
		});
	}
	static fromClass(t, n) {
		return e.define((e, n) => new t(e, n), n);
	}
}, Bi = class {
	constructor(e) {
		this.spec = e, this.mustUpdate = null, this.value = null;
	}
	get plugin() {
		return this.spec && this.spec.plugin;
	}
	update(e) {
		if (!this.value) {
			if (this.spec) try {
				this.value = this.spec.plugin.create(e, this.spec.arg);
			} catch (t) {
				Ii(e.state, t, "CodeMirror plugin crashed"), this.deactivate();
			}
		} else if (this.mustUpdate) {
			let e = this.mustUpdate;
			if (this.mustUpdate = null, this.value.update) try {
				this.value.update(e);
			} catch (t) {
				if (Ii(e.state, t, "CodeMirror plugin crashed"), this.value.destroy) try {
					this.value.destroy();
				} catch {}
				this.deactivate();
			}
		}
		return this;
	}
	destroy(e) {
		if (this.value?.destroy) try {
			this.value.destroy();
		} catch (t) {
			Ii(e.state, t, "CodeMirror plugin crashed");
		}
	}
	deactivate() {
		this.spec = this.value = null;
	}
}, Vi = /*@__PURE__*/ P.define(), Hi = /*@__PURE__*/ P.define(), Ui = /*@__PURE__*/ P.define(), Wi = /*@__PURE__*/ P.define(), Gi = /*@__PURE__*/ P.define(), Ki = /*@__PURE__*/ P.define(), qi = /*@__PURE__*/ P.define();
function Ji(e, t) {
	let n = e.state.facet(qi);
	if (!n.length) return n;
	let r = n.map((t) => t instanceof Function ? t(e) : t), i = [];
	return R.spans(r, t.from, t.to, {
		point() {},
		span(e, n, r, a) {
			let o = e - t.from, s = n - t.from, c = i;
			for (let e = r.length - 1; e >= 0; e--, a--) {
				let t = r[e].spec.bidiIsolate, n;
				if (a > 0 && c.length && (n = c[c.length - 1]).to == o && n.direction == t) n.to = s, c = n.inner;
				else {
					let e = {
						from: o,
						to: s,
						direction: t,
						inner: []
					};
					c.push(e), c = e.inner;
				}
			}
		}
	}), Yi(t.text, i);
}
function Yi(e, t) {
	for (let n of t) {
		if (n.direction == null) {
			for (let t = n.from, r = 0; t < n.to; r++) {
				let i = r < n.inner.length ? n.inner[r] : null, a = bi(e, t, i ? i.from : n.to);
				if (a) {
					n.direction = a;
					break;
				}
				if (!i) break;
				t = i.to;
			}
			n.direction ??= U.LTR;
		}
		Yi(e, n.inner);
	}
	return t;
}
var Xi = /*@__PURE__*/ P.define();
function Zi(e) {
	let t = 0, n = 0, r = 0, i = 0;
	for (let a of e.state.facet(Xi)) {
		let o = a(e);
		o && (o.left != null && (t = Math.max(t, o.left)), o.right != null && (n = Math.max(n, o.right)), o.top != null && (r = Math.max(r, o.top)), o.bottom != null && (i = Math.max(i, o.bottom)));
	}
	return {
		left: t,
		right: n,
		top: r,
		bottom: i
	};
}
var Qi = /*@__PURE__*/ P.define(), $i = class e {
	constructor(e, t, n, r) {
		this.fromA = e, this.toA = t, this.fromB = n, this.toB = r;
	}
	join(t) {
		return new e(Math.min(this.fromA, t.fromA), Math.max(this.toA, t.toA), Math.min(this.fromB, t.fromB), Math.max(this.toB, t.toB));
	}
	addToSet(e) {
		let t = e.length, n = this;
		for (; t > 0; t--) {
			let r = e[t - 1];
			if (!(r.fromA > n.toA)) {
				if (r.toA < n.fromA) break;
				n = n.join(r), e.splice(t - 1, 1);
			}
		}
		return e.splice(t, 0, n), e;
	}
	static extendWithRanges(t, n) {
		if (n.length == 0) return t;
		let r = [];
		for (let i = 0, a = 0, o = 0;;) {
			let s = i < t.length ? t[i].fromB : 1e9, c = a < n.length ? n[a] : 1e9, l = Math.min(s, c);
			if (l == 1e9) break;
			let u = l + o, d = l, f = u;
			for (;;) if (a < n.length && n[a] <= d) {
				let e = n[a + 1];
				a += 2, d = Math.max(d, e);
				for (let e = i; e < t.length && t[e].fromB <= d; e++) o = t[e].toA - t[e].toB;
				f = Math.max(f, e + o);
			} else if (i < t.length && t[i].fromB <= d) {
				let e = t[i++];
				d = Math.max(d, e.toB), f = Math.max(f, e.toA), o = e.toA - e.toB;
			} else break;
			r.push(new e(u, f, l, d));
		}
		return r;
	}
}, ea = class e {
	constructor(e, t, n) {
		this.view = e, this.state = t, this.transactions = n, this.flags = 0, this.startState = e.state, this.changes = bt.empty(this.startState.doc.length);
		for (let e of n) this.changes = this.changes.compose(e.changes);
		let r = [];
		this.changes.iterChangedRanges((e, t, n, i) => r.push(new $i(e, t, n, i))), this.changedRanges = r;
	}
	static create(t, n, r) {
		return new e(t, n, r);
	}
	get viewportChanged() {
		return (this.flags & 4) > 0;
	}
	get viewportMoved() {
		return (this.flags & 8) > 0;
	}
	get heightChanged() {
		return (this.flags & 2) > 0;
	}
	get geometryChanged() {
		return this.docChanged || (this.flags & 18) > 0;
	}
	get focusChanged() {
		return (this.flags & 1) > 0;
	}
	get docChanged() {
		return !this.changes.empty;
	}
	get selectionSet() {
		return this.transactions.some((e) => e.selection);
	}
	get empty() {
		return this.flags == 0 && this.transactions.length == 0;
	}
}, ta = [], K = class {
	constructor(e, t, n = 0) {
		this.dom = e, this.length = t, this.flags = n, this.parent = null, e.cmTile = this;
	}
	get breakAfter() {
		return this.flags & 1;
	}
	get children() {
		return ta;
	}
	isWidget() {
		return !1;
	}
	get isHidden() {
		return !1;
	}
	isComposite() {
		return !1;
	}
	isLine() {
		return !1;
	}
	isText() {
		return !1;
	}
	isBlock() {
		return !1;
	}
	get domAttrs() {
		return null;
	}
	sync(e) {
		if (this.flags |= 2, this.flags & 4) {
			this.flags &= -5;
			let e = this.domAttrs;
			e && pr(this.dom, e);
		}
	}
	toString() {
		return this.constructor.name + (this.children.length ? `(${this.children})` : "") + (this.breakAfter ? "#" : "");
	}
	destroy() {
		this.parent = null;
	}
	setDOM(e) {
		this.dom = e, e.cmTile = this;
	}
	get posAtStart() {
		return this.parent ? this.parent.posBefore(this) : 0;
	}
	get posAtEnd() {
		return this.posAtStart + this.length;
	}
	posBefore(e, t = this.posAtStart) {
		let n = t;
		for (let t of this.children) {
			if (t == e) return n;
			n += t.length + t.breakAfter;
		}
		throw RangeError("Invalid child in posBefore");
	}
	posAfter(e) {
		return this.posBefore(e) + e.length;
	}
	covers(e) {
		return !0;
	}
	coordsIn(e, t, n) {
		return null;
	}
	domPosFor(e, t) {
		let n = jr(this.dom), r = this.length ? e > 0 : t > 0;
		return new $r(this.parent.dom, n + +!!r, e == 0 || e == this.length);
	}
	markDirty(e) {
		this.flags &= -3, e && (this.flags |= 4), this.parent && this.parent.flags & 2 && this.parent.markDirty(!1);
	}
	get overrideDOMText() {
		return null;
	}
	get root() {
		for (let e = this; e; e = e.parent) if (e instanceof ia) return e;
		return null;
	}
	static get(e) {
		return e.cmTile;
	}
}, na = class extends K {
	constructor(e) {
		super(e, 0), this._children = [];
	}
	isComposite() {
		return !0;
	}
	get children() {
		return this._children;
	}
	get lastChild() {
		return this.children.length ? this.children[this.children.length - 1] : null;
	}
	append(e) {
		this.children.push(e), e.parent = this;
	}
	sync(e) {
		if (this.flags & 2) return;
		super.sync(e);
		let t = this.dom, n = null, r, i = e?.node == t ? e : null, a = 0;
		for (let o of this.children) {
			if (o.sync(e), a += o.length + o.breakAfter, r = n ? n.nextSibling : t.firstChild, i && r != o.dom && (i.written = !0), o.dom.parentNode == t) for (; r && r != o.dom;) r = ra(r);
			else t.insertBefore(o.dom, r);
			n = o.dom;
		}
		for (r = n ? n.nextSibling : t.firstChild, i && r && (i.written = !0); r;) r = ra(r);
		this.length = a;
	}
};
function ra(e) {
	let t = e.nextSibling;
	return e.parentNode.removeChild(e), t;
}
var ia = class extends na {
	constructor(e, t) {
		super(t), this.view = e;
	}
	owns(e) {
		for (; e; e = e.parent) if (e == this) return !0;
		return !1;
	}
	isBlock() {
		return !0;
	}
	nearest(e) {
		for (;;) {
			if (!e) return null;
			let t = K.get(e);
			if (t && this.owns(t)) return t;
			e = e.parentNode;
		}
	}
	blockTiles(e) {
		for (let t = [], n = this, r = 0, i = 0;;) if (r == n.children.length) {
			if (!t.length) return;
			n = n.parent, n.breakAfter && i++, r = t.pop();
		} else {
			let a = n.children[r++];
			if (a instanceof aa) t.push(r), n = a, r = 0;
			else {
				let t = i + a.length, n = e(a, i);
				if (n !== void 0) return n;
				i = t + a.breakAfter;
			}
		}
	}
	resolveBlock(e, t) {
		let n, r = -1, i, a = -1;
		if (this.blockTiles((o, s) => {
			let c = s + o.length;
			if (e >= s && e <= c) {
				if (o.isWidget() && t >= -1 && t <= 1) {
					if (o.flags & 32) return !0;
					o.flags & 16 && (n = void 0);
				}
				(s < e || e == c && (t < -1 ? o.length : o.covers(1))) && (!n || !o.isWidget() && n.isWidget()) && (n = o, r = e - s), (c > e || e == s && (t > 1 ? o.length : o.covers(-1))) && (!i || !o.isWidget() && i.isWidget()) && (i = o, a = e - s);
			}
		}), !n && !i) throw Error("No tile at position " + e);
		return n && t < 0 || !i ? {
			tile: n,
			offset: r
		} : {
			tile: i,
			offset: a
		};
	}
}, aa = class e extends na {
	constructor(e, t) {
		super(e), this.wrapper = t;
	}
	isBlock() {
		return !0;
	}
	covers(e) {
		return this.children.length ? e < 0 ? this.children[0].covers(-1) : this.lastChild.covers(1) : !1;
	}
	get domAttrs() {
		return this.wrapper.attributes;
	}
	static of(t, n) {
		let r = new e(n || document.createElement(t.tagName), t);
		return n || (r.flags |= 4), r;
	}
}, oa = class e extends na {
	constructor(e, t) {
		super(e), this.attrs = t;
	}
	isLine() {
		return !0;
	}
	static start(t, n, r) {
		let i = new e(n || document.createElement("div"), t);
		return n && r || (i.flags |= 4), i;
	}
	get domAttrs() {
		return this.attrs;
	}
	resolveInline(e, t, n = !1) {
		let r = null, i = -1, a = null, o = -1;
		function s(e, c) {
			for (let l = 0, u = 0; l < e.children.length && u <= c; l++) {
				let d = e.children[l], f = u + d.length;
				f >= c && (d.isComposite() ? s(d, c - u) : (!a || n && a.isHidden && (t > 0 && !(a.flags & 32) || n && ca(a, d))) && (f > c || d.flags & 32 && t <= 1) ? (a = d, o = c - u) : (u < c || d.flags & 16 && !(n && d.isHidden) && t >= -1) && (r = d, i = c - u)), u = f;
			}
		}
		s(this, e);
		let c = (t < 0 ? r : a) || r || a;
		return c ? {
			tile: c,
			offset: c == r ? i : o
		} : null;
	}
	coordsIn(e, t, n) {
		let r = this.resolveInline(e, t, !0);
		return r ? r.tile.coordsIn(Math.max(0, r.offset), t, n) : sa(this);
	}
	domIn(e, t) {
		let n = this.resolveInline(e, t);
		if (n) {
			let { tile: e, offset: r } = n;
			if (this.dom.contains(e.dom)) return e.isText() ? new $r(e.dom, Math.min(e.dom.nodeValue.length, r)) : e.domPosFor(r, e.flags & 16 ? 1 : e.flags & 32 ? -1 : t);
			let i = n.tile.parent, a = !1;
			for (let e of i.children) {
				if (a) return new $r(e.dom, 0);
				e == n.tile && (a = !0);
			}
		}
		return new $r(this.dom, 0);
	}
};
function sa(e) {
	let t = e.dom.lastChild;
	if (!t) return e.dom.getBoundingClientRect();
	let n = kr(t);
	return n[n.length - 1] || null;
}
function ca(e, t) {
	let n = e.coordsIn(0, 1), r = t.coordsIn(0, 1);
	return n && r && r.top < n.bottom;
}
var la = class e extends na {
	constructor(e, t) {
		super(e), this.mark = t;
	}
	get domAttrs() {
		return this.mark.attrs;
	}
	static of(t, n) {
		let r = new e(n || document.createElement(t.tagName), t);
		return n || (r.flags |= 4), r;
	}
}, ua = class e extends K {
	constructor(e, t) {
		super(e, t.length), this.text = t;
	}
	sync(e) {
		this.flags & 2 || (super.sync(e), this.dom.nodeValue != this.text && (e && e.node == this.dom && (e.written = !0), this.dom.nodeValue = this.text));
	}
	isText() {
		return !0;
	}
	toString() {
		return JSON.stringify(this.text);
	}
	coordsIn(e, t, n) {
		let r = this.dom.nodeValue.length;
		e > r && (e = r);
		let i = e, a = e, o = 0;
		e == 0 && t < 0 || e == r && t >= 0 ? B.chrome || B.gecko || (e ? (i--, o = 1) : a < r && (a++, o = -1)) : t < 0 ? i-- : a < r && a++;
		let s = Kr(this.dom, i, a).getClientRects();
		if (!s.length) return null;
		let c = s[(o ? o < 0 : t >= 0) ? 0 : s.length - 1];
		return B.safari && !o && c.width == 0 && (c = Array.prototype.find.call(s, (e) => e.width) || c), n == null ? c : Fr(c, (o ? o > 0 : t < 0) == n);
	}
	static of(t, n) {
		let r = new e(n || document.createTextNode(t), t);
		return n || (r.flags |= 2), r;
	}
}, da = class e extends K {
	constructor(e, t, n, r) {
		super(e, t, r), this.widget = n;
	}
	isWidget() {
		return !0;
	}
	get isHidden() {
		return this.widget.isHidden;
	}
	covers(e) {
		return this.flags & 48 ? !1 : (this.flags & (e < 0 ? 64 : 128)) > 0;
	}
	coordsIn(e, t) {
		return this.coordsInWidget(e, t, !1);
	}
	coordsInWidget(e, t, n) {
		let r = this.widget.coordsAt(this.dom, e, t);
		if (r) return r;
		if (n) return Fr(this.dom.getBoundingClientRect(), this.length ? e == 0 : t <= 0);
		{
			let t = this.dom.getClientRects(), n = null;
			if (!t.length) return null;
			let r = this.flags & 16 ? !0 : this.flags & 32 ? !1 : e > 0;
			for (let i = r ? t.length - 1 : 0; n = t[i], !(e > 0 ? i == 0 : i == t.length - 1 || n.top < n.bottom); i += r ? -1 : 1);
			return Fr(n, !r);
		}
	}
	get overrideDOMText() {
		if (!this.length) return j.empty;
		let { root: e } = this;
		if (!e) return j.empty;
		let t = this.posAtStart;
		return e.view.state.doc.slice(t, t + this.length);
	}
	destroy() {
		super.destroy(), this.widget.destroy(this.dom);
	}
	static of(t, n, r, i, a) {
		return a || (a = t.toDOM(n), t.editable || (a.contentEditable = "false")), new e(a, r, t, i);
	}
}, fa = class extends K {
	constructor(e) {
		let t = document.createElement("img");
		t.className = "cm-widgetBuffer", t.setAttribute("aria-hidden", "true"), super(t, 0, e);
	}
	get isHidden() {
		return !0;
	}
	get overrideDOMText() {
		return j.empty;
	}
	coordsIn(e, t, n) {
		let r = this.dom.getBoundingClientRect();
		return n == null ? r : Fr(r, t > 0 == n);
	}
}, pa = class {
	constructor(e) {
		this.index = 0, this.beforeBreak = !1, this.parents = [], this.tile = e;
	}
	advance(e, t, n) {
		let { tile: r, index: i, beforeBreak: a, parents: o } = this;
		for (; e || t > 0;) if (!r.isComposite()) {
			let t = r.length;
			if (i < t && e) {
				let a = Math.min(e, t - i);
				n && n.skip(r, i, i + a), e -= a, i += a;
			}
			if (i == t) a = !!r.breakAfter, {tile: r, index: i} = o.pop(), i++;
			else if (!e) break;
		} else if (a) {
			if (!e) break;
			n && n.break(), e--, a = !1;
		} else if (i == r.children.length) {
			if (!e && !o.length) break;
			n && n.leave(r), a = !!r.breakAfter, {tile: r, index: i} = o.pop(), i++;
		} else {
			let s = r.children[i], c = s.breakAfter;
			(t > 0 ? s.length <= e : s.length < e) && (!n || n.skip(s, 0, s.length) !== !1 || !s.isComposite) ? (a = !!c, i++, e -= s.length) : (o.push({
				tile: r,
				index: i
			}), r = s, i = 0, n && s.isComposite() && n.enter(s));
		}
		return this.tile = r, this.index = i, this.beforeBreak = a, this;
	}
	get root() {
		return this.parents.length ? this.parents[0].tile : this.tile;
	}
}, ma = class {
	constructor(e, t, n, r) {
		this.from = e, this.to = t, this.wrapper = n, this.rank = r;
	}
}, ha = class {
	constructor(e, t, n) {
		this.cache = e, this.root = t, this.blockWrappers = n, this.curLine = null, this.lastBlock = null, this.afterWidget = null, this.pos = 0, this.wrappers = [], this.wrapperPos = 0;
	}
	addText(e, t, n, r) {
		this.flushBuffer();
		let i = this.ensureMarks(t, n), a = i.lastChild;
		if (a && a.isText() && !(a.flags & 8) && a.length + e.length < 512) {
			this.cache.reused.set(a, 2);
			let t = i.children[i.children.length - 1] = new ua(a.dom, a.text + e);
			t.parent = i;
		} else i.append(r || ua.of(e, this.cache.find(ua)?.dom));
		this.pos += e.length, this.afterWidget = null;
	}
	addComposition(e, t) {
		let n = this.curLine;
		n.dom != t.line.dom && (n.setDOM(this.cache.reused.has(t.line) ? Ta(t.line.dom) : t.line.dom), this.cache.reused.set(t.line, 2));
		let r = n;
		for (let e = t.marks.length - 1; e >= 0; e--) {
			let n = t.marks[e], i = r.lastChild;
			if (i instanceof la && i.mark.eq(n.mark)) i.dom != n.dom && i.setDOM(Ta(n.dom)), r = i;
			else {
				let { dom: e } = n;
				this.cache.reused.get(n) && K.get(n.dom) && (e = Ta(n.dom));
				let t = la.of(n.mark, e);
				r.append(t), r = t;
			}
			this.cache.reused.set(n, 2);
		}
		let i = K.get(e.text);
		i && this.cache.reused.set(i, 2);
		let a = new ua(e.text, e.text.nodeValue);
		a.flags |= 8, this.pos = e.range.toB, r.append(a);
	}
	addInlineWidget(e, t, n) {
		let r = this.afterWidget && e.flags & 48 && (this.afterWidget.flags & 48) == (e.flags & 48);
		r || this.flushBuffer();
		let i = this.ensureMarks(t, n);
		!r && !(e.flags & 16) && i.append(this.getBuffer(1)), i.append(e), this.pos += e.length, this.afterWidget = e;
	}
	addMark(e, t, n) {
		this.flushBuffer(), this.ensureMarks(t, n).append(e), this.pos += e.length, this.afterWidget = null;
	}
	addBlockWidget(e) {
		this.getBlockPos().append(e), this.pos += e.length, this.lastBlock = e, this.endLine();
	}
	continueWidget(e) {
		let t = this.afterWidget || this.lastBlock;
		t.length += e, this.pos += e;
	}
	addLineStart(e, t) {
		e ||= Sa;
		let n = oa.start(e, t || this.cache.find(oa)?.dom, !!t);
		this.getBlockPos().append(this.lastBlock = this.curLine = n);
	}
	addLine(e) {
		this.getBlockPos().append(e), this.pos += e.length, this.lastBlock = e, this.endLine();
	}
	addBreak() {
		this.lastBlock.flags |= 1, this.endLine(), this.pos++;
	}
	addLineStartIfNotCovered(e) {
		this.blockPosCovered() || this.addLineStart(e);
	}
	ensureLine(e) {
		this.curLine || this.addLineStart(e);
	}
	ensureMarks(e, t) {
		let n = this.curLine;
		for (let r = e.length - 1; r >= 0; r--) {
			let i = e[r], a;
			if (t > 0 && (a = n.lastChild) && a instanceof la && a.mark.eq(i)) n = a, t--;
			else {
				let e = la.of(i, this.cache.find(la, (e) => e.mark.eq(i))?.dom);
				n.append(e), n = e, t = 0;
			}
		}
		return n;
	}
	endLine() {
		if (this.curLine) {
			this.flushBuffer();
			let e = this.curLine.lastChild;
			(!e || !ba(this.curLine, !1) || e.dom.nodeName != "BR" && e.isWidget() && !(B.ios && ba(this.curLine, !0))) && this.curLine.append(this.cache.findWidget(Da, 0, 32) || new da(Da.toDOM(), 0, Da, 32)), this.curLine = this.afterWidget = null;
		}
	}
	updateBlockWrappers() {
		this.wrapperPos > this.pos + 1e4 && (this.blockWrappers.goto(this.pos), this.wrappers.length = 0);
		for (let e = this.wrappers.length - 1; e >= 0; e--) this.wrappers[e].to < this.pos && this.wrappers.splice(e, 1);
		for (let e = this.blockWrappers; e.value && e.from <= this.pos; e.next()) if (e.to >= this.pos) {
			let t = e.rank * 102 + e.value.rank, n = new ma(e.from, e.to, e.value, t), r = this.wrappers.length;
			for (; r > 0 && (this.wrappers[r - 1].rank - n.rank || this.wrappers[r - 1].to - n.to) < 0;) r--;
			this.wrappers.splice(r, 0, n);
		}
		this.wrapperPos = this.pos;
	}
	getBlockPos() {
		this.updateBlockWrappers();
		let e = this.root;
		for (let t of this.wrappers) {
			let n = e.lastChild;
			if (t.from < this.pos && n instanceof aa && n.wrapper.eq(t.wrapper)) e = n;
			else {
				let n = aa.of(t.wrapper, this.cache.find(aa, (e) => e.wrapper.eq(t.wrapper))?.dom);
				e.append(n), e = n;
			}
		}
		return e;
	}
	blockPosCovered() {
		let e = this.lastBlock;
		return e != null && !e.breakAfter && (!e.isWidget() || (e.flags & 160) > 0);
	}
	getBuffer(e) {
		let t = 2 | (e < 0 ? 16 : 32), n = this.cache.find(fa, void 0, 1);
		return n && (n.flags = t), n || new fa(t);
	}
	flushBuffer() {
		this.afterWidget && !(this.afterWidget.flags & 32) && (this.afterWidget.parent.append(this.getBuffer(-1)), this.afterWidget = null);
	}
}, ga = class {
	constructor(e) {
		this.skipCount = 0, this.text = "", this.textOff = 0, this.cursor = e.iter();
	}
	skip(e) {
		this.textOff + e <= this.text.length ? this.textOff += e : (this.skipCount += e - (this.text.length - this.textOff), this.text = "", this.textOff = 0);
	}
	next(e) {
		if (this.textOff == this.text.length) {
			let { value: t, lineBreak: n, done: r } = this.cursor.next(this.skipCount);
			if (this.skipCount = 0, r) throw Error("Ran out of text content when drawing inline views");
			this.text = t;
			let i = this.textOff = Math.min(e, t.length);
			return n ? null : t.slice(0, i);
		}
		let t = Math.min(this.text.length, this.textOff + e), n = this.text.slice(this.textOff, t);
		return this.textOff = t, n;
	}
}, _a = [
	da,
	oa,
	ua,
	la,
	fa,
	aa,
	ia
];
for (let e = 0; e < _a.length; e++) _a[e].bucket = e;
var va = class {
	constructor(e) {
		this.view = e, this.buckets = _a.map(() => []), this.index = _a.map(() => 0), this.reused = /* @__PURE__ */ new Map();
	}
	add(e) {
		let t = e.constructor.bucket, n = this.buckets[t];
		n.length < 6 ? n.push(e) : n[this.index[t] = (this.index[t] + 1) % 6] = e;
	}
	find(e, t, n = 2) {
		let r = e.bucket, i = this.buckets[r], a = this.index[r];
		for (let e = 0; e < i.length; e++) {
			let o = (e + a) % i.length, s = i[o];
			if ((!t || t(s)) && !this.reused.has(s)) return i.splice(o, 1), o < a && this.index[r]--, this.reused.set(s, n), s;
		}
		return null;
	}
	findWidget(e, t, n) {
		let r = this.buckets[0];
		if (r.length) for (let i = 0, a = 0;; i++) {
			if (i == r.length) {
				if (a) return null;
				a = 1, i = 0;
			}
			let o = r[i];
			if (!this.reused.has(o) && (a == 0 ? o.widget.compare(e) : o.widget.constructor == e.constructor && e.updateDOM(o.dom, this.view, o.widget))) return r.splice(i, 1), i < this.index[0] && this.index[0]--, o.widget == e && o.length == t && (o.flags & 497) == n ? (this.reused.set(o, 1), o) : (this.reused.set(o, 2), new da(o.dom, t, e, o.flags & -498 | n));
		}
	}
	reuse(e) {
		return this.reused.set(e, 1), e;
	}
	maybeReuse(e, t = 2) {
		if (!this.reused.has(e)) return this.reused.set(e, t), e.dom;
	}
	clear() {
		for (let e = 0; e < this.buckets.length; e++) this.buckets[e].length = this.index[e] = 0;
	}
}, ya = class {
	constructor(e, t, n, r, i) {
		this.view = e, this.decorations = r, this.disallowBlockEffectsFor = i, this.openWidget = !1, this.openMarks = 0, this.cache = new va(e), this.text = new ga(e.state.doc), this.builder = new ha(this.cache, new ia(e, e.contentDOM), R.iter(n)), this.cache.reused.set(t, 2), this.old = new pa(t), this.reuseWalker = {
			skip: (e, t, n) => {
				if (this.cache.add(e), e.isComposite()) return !1;
			},
			enter: (e) => this.cache.add(e),
			leave: () => {},
			break: () => {}
		};
	}
	run(e, t) {
		let n = t && this.getCompositionContext(t.text);
		for (let r = 0, i = 0, a = 0;;) {
			let o = a < e.length ? e[a++] : null, s = o ? o.fromA : this.old.root.length;
			if (s > r) {
				let e = s - r;
				this.preserve(e, !a, !o), r = s, i += e;
			}
			if (!o) break;
			t && o.fromA <= t.range.fromA && o.toA >= t.range.toA ? (this.forward(o.fromA, t.range.fromA, t.range.fromA < t.range.toA ? 1 : -1), this.emit(i, t.range.fromB), this.builder.flushBuffer(), this.cache.clear(), this.builder.addComposition(t, n), this.text.skip(t.range.toB - t.range.fromB), this.forward(t.range.fromA, o.toA), this.emit(t.range.toB, o.toB)) : (this.forward(o.fromA, o.toA), this.emit(i, o.toB)), i = o.toB, r = o.toA;
		}
		return this.builder.curLine && this.builder.endLine(), this.builder.root;
	}
	preserve(e, t, n) {
		let r = wa(this.old), i = this.openMarks;
		this.old.advance(e, n ? 1 : -1, {
			skip: (e, t, n) => {
				if (e.isWidget()) {
					if (this.openWidget) this.builder.continueWidget(n - t);
					else {
						let a = n > 0 || t < e.length ? da.of(e.widget, this.view, n - t, e.flags & 496, this.cache.maybeReuse(e)) : this.cache.reuse(e);
						a.flags & 256 ? (a.flags &= -2, this.builder.addBlockWidget(a)) : (this.builder.ensureLine(null), this.builder.addInlineWidget(a, r, i), i = r.length);
					}
				} else if (e.isText()) this.builder.ensureLine(null), !t && n == e.length && !this.cache.reused.has(e) ? this.builder.addText(e.text, r, i, this.cache.reuse(e)) : (this.cache.add(e), this.builder.addText(e.text.slice(t, n), r, i)), i = r.length;
				else if (e.isLine()) e.flags &= -2, this.cache.reused.set(e, 1), this.builder.addLine(e);
				else if (e instanceof fa) this.cache.add(e);
				else if (e instanceof la) this.builder.ensureLine(null), this.builder.addMark(e, r, i), this.cache.reused.set(e, 1), i = r.length;
				else return !1;
				this.openWidget = !1;
			},
			enter: (e) => {
				e.isLine() ? this.builder.addLineStart(e.attrs, this.cache.maybeReuse(e)) : (this.cache.add(e), e instanceof la && r.unshift(e.mark)), this.openWidget = !1;
			},
			leave: (e) => {
				e.isLine() ? r.length &&= i = 0 : e instanceof la && (r.shift(), i = Math.min(i, r.length));
			},
			break: () => {
				this.builder.addBreak(), this.openWidget = !1;
			}
		}), this.text.skip(e);
	}
	emit(e, t) {
		let n = null, r = this.builder, i = -1, a = R.spans(this.decorations, e, t, {
			point: (e, t, a, o, s, c) => {
				if (a instanceof br) {
					if (this.disallowBlockEffectsFor[c]) {
						if (a.block) throw RangeError("Block decorations may not be specified via plugins");
						if (t > this.view.state.doc.lineAt(e).to) throw RangeError("Decorations that replace line breaks may not be specified via plugins");
					}
					if (i = o.length, s > o.length) r.continueWidget(t - e);
					else {
						let i = a.widget || (a.block ? Ea.block : Ea.inline), c = xa(a), l = this.cache.findWidget(i, t - e, c) || da.of(i, this.view, t - e, c);
						a.block ? (a.startSide > 0 && r.addLineStartIfNotCovered(n), r.addBlockWidget(l)) : (r.ensureLine(n), r.addInlineWidget(l, o, s));
					}
					n = null;
				} else n = Ca(n, a);
				t > e && this.text.skip(t - e);
			},
			span: (e, t, a, o) => {
				for (let i = e; i < t;) {
					let s = this.text.next(Math.min(512, t - i));
					s == null ? (r.addLineStartIfNotCovered(n), r.addBreak(), i++) : (r.ensureLine(n), r.addText(s, a, i == e ? o : a.length), i += s.length), n = null;
				}
				i = a.length;
			}
		});
		i > -1 && (this.openWidget = a > i), this.openWidget || r.addLineStartIfNotCovered(n), this.openMarks = a;
	}
	forward(e, t, n = 1) {
		t - e <= 10 ? this.old.advance(t - e, n, this.reuseWalker) : (this.old.advance(5, -1, this.reuseWalker), this.old.advance(t - e - 10, -1), this.old.advance(5, n, this.reuseWalker));
	}
	getCompositionContext(e) {
		let t = [], n = null;
		for (let r = e.parentNode;; r = r.parentNode) {
			let e = K.get(r);
			if (r == this.view.contentDOM) break;
			e instanceof la ? t.push(e) : e?.isLine() ? n = e : e instanceof aa || (r.nodeName == "DIV" && !n ? n = new oa(r, Sa) : n || t.push(la.of(new vr({
				tagName: r.nodeName.toLowerCase(),
				attributes: hr(r)
			}), r)));
		}
		return n ? {
			line: n,
			marks: t
		} : null;
	}
};
function ba(e, t) {
	let n = (e) => {
		for (let r of e.children) if ((t ? r.isText() : r.length) || n(r)) return !0;
		return !1;
	};
	return n(e);
}
function xa(e) {
	let t = e.isReplace ? (e.startSide < 0 ? 64 : 0) | (e.endSide > 0 ? 128 : 0) : e.startSide > 0 ? 32 : 16;
	return e.block && (t |= 256), t;
}
var Sa = { class: "cm-line" };
function Ca(e, t) {
	let n = t.spec.attributes, r = t.spec.class;
	return !n && !r || (e ||= { class: "cm-line" }, n && ur(n, e), r && (e.class += " " + r)), e;
}
function wa(e) {
	let t = [];
	for (let n = e.parents.length; n > 1; n--) {
		let r = n == e.parents.length ? e.tile : e.parents[n].tile;
		r instanceof la && t.push(r.mark);
	}
	return t;
}
function Ta(e) {
	let t = K.get(e);
	return t && t.setDOM(e.cloneNode()), e;
}
var Ea = class extends gr {
	constructor(e) {
		super(), this.tag = e;
	}
	eq(e) {
		return e.tag == this.tag;
	}
	toDOM() {
		return document.createElement(this.tag);
	}
	updateDOM(e) {
		return e.nodeName.toLowerCase() == this.tag;
	}
	get isHidden() {
		return !0;
	}
};
Ea.inline = /*@__PURE__*/ new Ea("span"), Ea.block = /*@__PURE__*/ new Ea("div");
var Da = /*@__PURE__*/ new class extends gr {
	toDOM() {
		return document.createElement("br");
	}
	get isHidden() {
		return !0;
	}
	get editable() {
		return !0;
	}
}(), Oa = class {
	constructor(e) {
		this.view = e, this.decorations = [], this.blockWrappers = [], this.dynamicDecorationMap = [!1], this.domChanged = null, this.hasComposition = null, this.editContextFormatting = V.none, this.lastCompositionAfterCursor = !1, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = !1, this.lastUpdate = Date.now(), this.updateDeco(), this.tile = new ia(e, e.contentDOM), this.updateInner([new $i(0, 0, 0, e.state.doc.length)], null);
	}
	update(e) {
		let t = e.changedRanges;
		this.minWidth > 0 && t.length && (t.every(({ fromA: e, toA: t }) => t < this.minWidthFrom || e > this.minWidthTo) ? (this.minWidthFrom = e.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = e.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0), this.updateEditContextFormatting(e);
		let n = -1;
		this.view.inputState.composing >= 0 && !this.view.observer.editContext && (this.domChanged?.newSel ? n = this.domChanged.newSel.head : !za(e.changes, this.hasComposition) && !e.selectionSet && (n = e.state.selection.main.head));
		let r = n > -1 ? Ma(this.view, e.changes, n) : null;
		if (this.domChanged = null, this.hasComposition) {
			let { from: n, to: r } = this.hasComposition;
			t = new $i(n, r, e.changes.mapPos(n, -1), e.changes.mapPos(r, 1)).addToSet(t.slice());
		}
		this.hasComposition = r ? {
			from: r.range.fromB,
			to: r.range.toB
		} : null, (B.ie || B.chrome) && !r && e && e.state.doc.lines != e.startState.doc.lines && (this.forceSelection = !0);
		let i = this.decorations, a = this.blockWrappers;
		this.updateDeco();
		let o = Fa(i, this.decorations, e.changes);
		o.length && (t = $i.extendWithRanges(t, o));
		let s = La(a, this.blockWrappers, e.changes);
		return s.length && (t = $i.extendWithRanges(t, s)), r && !t.some((e) => e.fromA <= r.range.fromA && e.toA >= r.range.toA) && (t = r.range.addToSet(t.slice())), this.tile.flags & 2 && t.length == 0 ? !1 : (this.updateInner(t, r), e.transactions.length && (this.lastUpdate = Date.now()), !0);
	}
	updateInner(e, t) {
		this.view.viewState.mustMeasureContent = !0;
		let { observer: n } = this.view;
		n.ignore(() => {
			if (t || e.length) {
				let n = this.tile, r = new ya(this.view, n, this.blockWrappers, this.decorations, this.dynamicDecorationMap);
				t && K.get(t.text) && r.cache.reused.set(K.get(t.text), 2), this.tile = r.run(e, t), ka(n, r.cache.reused);
			}
			this.tile.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px", this.tile.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
			let r = B.chrome || B.ios ? {
				node: n.selectionRange.focusNode,
				written: !1
			} : void 0;
			this.tile.sync(r), r && (r.written || n.selectionRange.focusNode != r.node || !this.tile.dom.contains(r.node)) && (this.forceSelection = !0), this.tile.dom.style.height = "";
		});
		let r = [];
		if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length) for (let e of this.tile.children) e.isWidget() && e.widget instanceof Ba && r.push(e.dom);
		n.updateGaps(r);
	}
	updateEditContextFormatting(e) {
		this.editContextFormatting = this.editContextFormatting.map(e.changes);
		for (let t of e.transactions) for (let e of t.effects) e.is(Fi) && (this.editContextFormatting = e.value);
	}
	updateSelection(e = !1, t = !1) {
		(e || !this.view.observer.selectionRange.focusNode) && this.view.observer.readSelectionRange();
		let { dom: n } = this.tile, r = this.view.root.activeElement, i = r == n, a = !i && !(this.view.state.facet(Li) || n.tabIndex > -1) && Or(n, this.view.observer.selectionRange) && !(r && n.contains(r));
		if (!(i || t || a)) return;
		let o = this.forceSelection;
		this.forceSelection = !1;
		let s = this.view.state.selection.main, c, l;
		if (s.empty ? l = c = this.inlineDOMNearPos(s.anchor, s.assoc || 1) : (l = this.inlineDOMNearPos(s.head, s.head == s.from ? 1 : -1), c = this.inlineDOMNearPos(s.anchor, s.anchor == s.from ? 1 : -1)), B.gecko && s.empty && !this.hasComposition && Aa(c)) {
			let e = document.createTextNode("");
			this.view.observer.ignore(() => c.node.insertBefore(e, c.node.childNodes[c.offset] || null)), c = l = new $r(e, 0), o = !0;
		}
		let u = this.view.observer.selectionRange;
		!o && u.focusNode && (Ar(c.node, c.offset, u.anchorNode, u.anchorOffset) && Ar(l.node, l.offset, u.focusNode, u.focusOffset) || this.suppressWidgetCursorChange(u, s)) || (this.view.observer.ignore(() => {
			B.android && B.chrome && n.contains(u.focusNode) && Ra(u.focusNode, n) && (n.blur(), n.focus({ preventScroll: !0 }));
			let e = Er(this.view.root);
			if (e) {
				if (s.empty) {
					if (B.gecko) {
						let e = Na(c.node, c.offset);
						if (e && e != 3) {
							let t = (e == 1 ? Zr : Qr)(c.node, c.offset);
							t && (c = new $r(t.node, t.offset));
						}
					}
					e.collapse(c.node, c.offset), s.bidiLevel != null && e.caretBidiLevel !== void 0 && (e.caretBidiLevel = s.bidiLevel);
				} else if (e.extend) {
					e.collapse(c.node, c.offset);
					try {
						e.extend(l.node, l.offset);
					} catch {}
				} else {
					let t = document.createRange();
					s.anchor > s.head && ([c, l] = [l, c]), t.setEnd(l.node, l.offset), t.setStart(c.node, c.offset), e.removeAllRanges(), e.addRange(t);
				}
			}
			a && this.view.root.activeElement == n && (n.blur(), r && r.focus());
		}), this.view.observer.setSelectionRange(c, l)), this.impreciseAnchor = c.precise ? null : new $r(u.anchorNode, u.anchorOffset), this.impreciseHead = l.precise ? null : new $r(u.focusNode, u.focusOffset);
	}
	suppressWidgetCursorChange(e, t) {
		return this.hasComposition && t.empty && Ar(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset) && this.posFromDOM(e.focusNode, e.focusOffset) == t.head;
	}
	enforceCursorAssoc() {
		if (this.hasComposition) return;
		let { view: e } = this, t = e.state.selection.main, n = Er(e.root), { anchorNode: r, anchorOffset: i } = e.observer.selectionRange;
		if (!n || !t.empty || !t.assoc || !n.modify) return;
		let a = this.lineAt(t.head, t.assoc);
		if (!a) return;
		let o = a.posAtStart;
		if (t.head == o || t.head == o + a.length) return;
		let s = this.coordsAt(t.head, -1), c = this.coordsAt(t.head, 1);
		if (!s || !c || s.bottom > c.top) return;
		let l = this.domAtPos(t.head + t.assoc, t.assoc);
		n.collapse(l.node, l.offset), n.modify("move", t.assoc < 0 ? "forward" : "backward", "lineboundary"), e.observer.readSelectionRange();
		let u = e.observer.selectionRange;
		e.docView.posFromDOM(u.anchorNode, u.anchorOffset) != t.from && n.collapse(r, i);
	}
	posFromDOM(e, t) {
		let n = this.tile.nearest(e);
		if (!n) return this.tile.dom.compareDocumentPosition(e) & 2 ? 0 : this.view.state.doc.length;
		let r = n.posAtStart;
		if (n.isComposite()) {
			let i;
			if (e == n.dom) i = n.dom.childNodes[t];
			else {
				let r = Pr(e) == 0 ? 0 : t == 0 ? -1 : 1;
				for (;;) {
					let t = e.parentNode;
					if (t == n.dom) break;
					r == 0 && t.firstChild != t.lastChild && (r = e == t.firstChild ? -1 : 1), e = t;
				}
				i = r < 0 ? e : e.nextSibling;
			}
			if (i == n.dom.firstChild) return r;
			for (; i && !K.get(i);) i = i.nextSibling;
			if (!i) return r + n.length;
			for (let e = 0, t = r;; e++) {
				let r = n.children[e];
				if (r.dom == i) return t;
				t += r.length + r.breakAfter;
			}
		} else if (n.isText()) return e == n.dom ? r + t : r + (t ? n.length : 0);
		else return r;
	}
	domAtPos(e, t) {
		let { tile: n, offset: r } = this.tile.resolveBlock(e, t);
		return n.isWidget() ? n.domPosFor(r, t) : n.domIn(r, t);
	}
	inlineDOMNearPos(e, t) {
		let n, r = -1, i = !1, a, o = -1, s = !1;
		return this.tile.blockTiles((t, c) => {
			if (t.isWidget()) {
				if (t.flags & 32 && c >= e) return !0;
				t.flags & 16 && (i = !0);
			} else {
				let l = c + t.length;
				if (c <= e && (n = t, r = e - c, i = l < e), l >= e && !a && (a = t, o = e - c, s = c > e), c > e && a) return !0;
			}
		}), !n && !a ? this.domAtPos(e, t) : (i && a ? n = null : s && n && (a = null), n && t < 0 || !a ? n.domIn(r, t) : a.domIn(o, t));
	}
	coordsAt(e, t, n) {
		let { tile: r, offset: i } = this.tile.resolveBlock(e, t);
		return r.isWidget() ? r.widget instanceof Ba ? null : r.coordsInWidget(i, t, !0) : r.coordsIn(i, t, n);
	}
	lineAt(e, t) {
		let { tile: n } = this.tile.resolveBlock(e, t);
		return n.isLine() ? n : null;
	}
	coordsForChar(e) {
		let { tile: t, offset: n } = this.tile.resolveBlock(e, 1);
		if (!t.isLine()) return null;
		function r(e, t) {
			if (e.isComposite()) for (let n of e.children) {
				if (n.length >= t) {
					let e = r(n, t);
					if (e) return e;
				}
				if (t -= n.length, t < 0) break;
			}
			else if (e.isText() && t < e.length) {
				let n = M(e.text, t);
				if (n == t) return null;
				let r = Kr(e.dom, t, n).getClientRects();
				for (let e = 0; e < r.length; e++) {
					let t = r[e];
					if (e == r.length - 1 || t.top < t.bottom && t.left < t.right) return t;
				}
			}
			return null;
		}
		return r(t, n);
	}
	measureVisibleLineHeights(e) {
		let t = [], { from: n, to: r } = e, i = this.view.contentDOM.clientWidth, a = i > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1, o = -1, s = this.view.textDirection == U.LTR, c = 0, l = (e, u, d) => {
			for (let f = 0; f < e.children.length && !(u > r); f++) {
				let r = e.children[f], p = u + r.length, m = r.dom.getBoundingClientRect(), { height: h } = m;
				if (d && !f && (c += m.top - d.top), r instanceof aa) p > n && l(r, u, m);
				else if (u >= n && (c > 0 && t.push(-c), t.push(h + c), c = 0, a)) {
					let e = r.dom.lastChild, t = e ? kr(e) : [];
					if (t.length) {
						let e = t[t.length - 1], n = s ? e.right - m.left : m.right - e.left;
						n > o && (o = n, this.minWidth = i, this.minWidthFrom = u, this.minWidthTo = p);
					}
				}
				d && f == e.children.length - 1 && (c += d.bottom - m.bottom), u = p + r.breakAfter;
			}
		};
		return l(this.tile, 0, null), t;
	}
	textDirectionAt(e) {
		let { tile: t } = this.tile.resolveBlock(e, 1);
		return getComputedStyle(t.dom).direction == "rtl" ? U.RTL : U.LTR;
	}
	measureTextSize() {
		let e = this.tile.blockTiles((e) => {
			if (e.isLine() && e.children.length && e.length <= 20) {
				let t = 0, n;
				for (let r of e.children) {
					if (!r.isText() || /[^ -~]/.test(r.text)) return;
					let e = kr(r.dom);
					if (e.length != 1) return;
					t += e[0].width, n = e[0].height;
				}
				if (t) return {
					lineHeight: e.dom.getBoundingClientRect().height,
					charWidth: t / e.length,
					textHeight: n
				};
			}
		});
		if (e) return e;
		let t = document.createElement("div"), n, r, i;
		return t.className = "cm-line", t.style.width = "99999px", t.style.position = "absolute", t.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore(() => {
			this.tile.dom.appendChild(t);
			let e = kr(t.firstChild)[0];
			n = t.getBoundingClientRect().height, r = e && e.width ? e.width / 27 : 7, i = e && e.height ? e.height : n, t.remove();
		}), {
			lineHeight: n,
			charWidth: r,
			textHeight: i
		};
	}
	computeBlockGapDeco() {
		let e = [], t = this.view.viewState;
		for (let n = 0, r = 0;; r++) {
			let i = r == t.viewports.length ? null : t.viewports[r], a = i ? i.from - 1 : this.view.state.doc.length;
			if (a > n) {
				let r = (t.lineBlockAt(a).bottom - t.lineBlockAt(n).top) / this.view.scaleY;
				e.push(V.replace({
					widget: new Ba(r),
					block: !0,
					inclusive: !0,
					isBlockGap: !0
				}).range(n, a));
			}
			if (!i) break;
			n = i.to + 1;
		}
		return V.set(e);
	}
	updateDeco() {
		let e = 1, t = this.view.state.facet(Ui).map((t) => (this.dynamicDecorationMap[e++] = typeof t == "function") ? t(this.view) : t), n = !1, r = this.view.state.facet(Gi).map((e, t) => {
			let r = typeof e == "function";
			return r && (n = !0), r ? e(this.view) : e;
		});
		for (r.length && (this.dynamicDecorationMap[e++] = n, t.push(R.join(r))), this.decorations = [
			this.editContextFormatting,
			...t,
			this.computeBlockGapDeco(),
			this.view.viewState.lineGapDeco
		]; e < this.decorations.length;) this.dynamicDecorationMap[e++] = !1;
		this.blockWrappers = this.view.state.facet(Wi).map((e) => typeof e == "function" ? e(this.view) : e);
	}
	scrollIntoView(e) {
		if (e.isSnapshot) {
			let t = this.view.viewState.lineBlockAt(e.range.head);
			this.view.scrollDOM.scrollTop = t.top - e.yMargin, this.view.scrollDOM.scrollLeft = e.xMargin;
			return;
		}
		for (let t of this.view.state.facet(Mi)) try {
			if (t(this.view, e.range, e)) return !0;
		} catch (e) {
			Ii(this.view.state, e, "scroll handler");
		}
		let { range: t } = e, n = this.coordsAt(t.head, t.assoc || (t.head > t.anchor ? -1 : 1)), r;
		if (!n) return;
		!t.empty && (r = this.coordsAt(t.anchor, t.anchor > t.head ? -1 : 1)) && (n = {
			left: Math.min(n.left, r.left),
			top: Math.min(n.top, r.top),
			right: Math.max(n.right, r.right),
			bottom: Math.max(n.bottom, r.bottom)
		});
		let i = Zi(this.view), a = {
			left: n.left - i.left,
			top: n.top - i.top,
			right: n.right + i.right,
			bottom: n.bottom + i.bottom
		}, { offsetWidth: o, offsetHeight: s } = this.view.scrollDOM;
		if (Rr(this.view.scrollDOM, a, t.head < t.anchor ? -1 : 1, e.x, e.y, Math.max(Math.min(e.xMargin, o), -o), Math.max(Math.min(e.yMargin, s), -s), this.view.textDirection == U.LTR), window.visualViewport && window.innerHeight - window.visualViewport.height > 1 && (n.top > window.visualViewport.offsetTop + window.visualViewport.height || n.bottom < window.visualViewport.offsetTop)) {
			let e = this.view.docView.lineAt(t.head, 1);
			if (e) {
				let t = Vr(e.dom);
				e.dom.scrollIntoView({ block: "nearest" }), Hr(t, !1);
			}
		}
	}
	lineHasWidget(e) {
		let t = (e) => e.isWidget() || e.children.some(t);
		return t(this.tile.resolveBlock(e, 1).tile);
	}
	destroy() {
		ka(this.tile);
	}
};
function ka(e, t) {
	let n = t?.get(e);
	if (n != 1) {
		n ?? e.destroy();
		for (let n of e.children) ka(n, t);
	}
}
function Aa(e) {
	return H(e.node) && e.node.firstChild && (e.offset == 0 || e.node.childNodes[e.offset - 1].contentEditable == "false") && (e.offset == e.node.childNodes.length || e.node.childNodes[e.offset].contentEditable == "false");
}
function ja(e, t) {
	let n = e.observer.selectionRange;
	if (!n.focusNode) return null;
	let r = Zr(n.focusNode, n.focusOffset), i = Qr(n.focusNode, n.focusOffset), a = r || i;
	if (i && r && i.node != r.node) {
		let t = K.get(i.node);
		if (!t || t.isText() && t.text != i.node.nodeValue) a = i;
		else if (e.docView.lastCompositionAfterCursor) {
			let e = K.get(r.node);
			!e || e.isText() && e.text != r.node.nodeValue || (a = i);
		}
	}
	if (e.docView.lastCompositionAfterCursor = a != r, !a) return null;
	let o = t - a.offset;
	return {
		from: o,
		to: o + a.node.nodeValue.length,
		node: a.node
	};
}
function Ma(e, t, n) {
	let r = ja(e, n);
	if (!r) return null;
	let { node: i, from: a, to: o } = r, s = i.nodeValue;
	if (/[\n\r]/.test(s) || e.state.doc.sliceString(r.from, r.to) != s) return null;
	let c = t.invertedDesc;
	return {
		range: new $i(c.mapPos(a), c.mapPos(o), a, o),
		text: i
	};
}
function Na(e, t) {
	return H(e) ? (t && e.childNodes[t - 1].contentEditable == "false" ? 1 : 0) | (t < e.childNodes.length && e.childNodes[t].contentEditable == "false" ? 2 : 0) : 0;
}
var Pa = class {
	constructor() {
		this.changes = [];
	}
	compareRange(e, t) {
		Cr(e, t, this.changes);
	}
	comparePoint(e, t) {
		Cr(e, t, this.changes);
	}
	boundChange(e) {
		Cr(e, e, this.changes);
	}
};
function Fa(e, t, n) {
	let r = new Pa();
	return R.compare(e, t, n, r), r.changes;
}
var Ia = class {
	constructor() {
		this.changes = [];
	}
	compareRange(e, t) {
		Cr(e, t, this.changes);
	}
	comparePoint() {}
	boundChange(e) {
		Cr(e, e, this.changes);
	}
};
function La(e, t, n) {
	let r = new Ia();
	return R.compare(e, t, n, r), r.changes;
}
function Ra(e, t) {
	for (let n = e; n && n != t; n = n.assignedSlot || n.parentNode) if (H(n) && n.contentEditable == "false") return !0;
	return !1;
}
function za(e, t) {
	let n = !1;
	return t && e.iterChangedRanges((e, r) => {
		e < t.to && r > t.from && (n = !0);
	}), n;
}
var Ba = class extends gr {
	constructor(e) {
		super(), this.height = e;
	}
	toDOM() {
		let e = document.createElement("div");
		return e.className = "cm-gap", this.updateDOM(e), e;
	}
	eq(e) {
		return e.height == this.height;
	}
	updateDOM(e) {
		return e.style.height = this.height + "px", !0;
	}
	get editable() {
		return !0;
	}
	get estimatedHeight() {
		return this.height;
	}
	ignoreEvent() {
		return !1;
	}
};
function Va(e, t, n = 1) {
	let r = e.charCategorizer(t), i = e.doc.lineAt(t), a = t - i.from;
	if (i.length == 0) return N.cursor(t);
	a == 0 ? n = 1 : a == i.length && (n = -1);
	let o = a, s = a;
	n < 0 ? o = M(i.text, a, !1) : s = M(i.text, a);
	let c = r(i.text.slice(o, s));
	for (; o > 0;) {
		let e = M(i.text, o, !1);
		if (r(i.text.slice(e, o)) != c) break;
		o = e;
	}
	for (; s < i.length;) {
		let e = M(i.text, s);
		if (r(i.text.slice(s, e)) != c) break;
		s = e;
	}
	return N.undirectionalRange(o + i.from, s + i.from);
}
function Ha(e, t, n, r, i) {
	let a = Math.round((r - t.left) * e.defaultCharacterWidth);
	if (e.lineWrapping && n.height > e.defaultLineHeight * 1.5) {
		let t = e.viewState.heightOracle.textHeight, r = Math.floor((i - n.top - (e.defaultLineHeight - t) * .5) / t);
		a += r * e.viewState.heightOracle.lineLength;
	}
	let o = e.state.sliceDoc(n.from, n.to);
	return n.from + Ln(o, a, e.state.tabSize);
}
function Ua(e, t, n) {
	let r = e.lineBlockAt(t);
	if (Array.isArray(r.type)) {
		let e;
		for (let i of r.type) {
			if (i.from > t) break;
			if (!(i.to < t)) {
				if (i.from < t && i.to > t) return i;
				(!e || i.type == _r.Text && (e.type != i.type || (n < 0 ? i.from < t : i.to > t))) && (e = i);
			}
		}
		return e || r;
	}
	return r;
}
function Wa(e, t, n, r) {
	let i = Ua(e, t.head, t.assoc || -1), a = !r || i.type != _r.Text || !(e.lineWrapping || i.widgetLineBreaks) ? null : e.coordsAtPos(t.assoc < 0 && t.head > i.from ? t.head - 1 : t.head);
	if (a) {
		let t = e.dom.getBoundingClientRect(), r = e.textDirectionAt(i.from), o = e.posAndSideAtCoords({
			x: n == (r == U.LTR) ? t.right - 1 : t.left + 1,
			y: (a.top + a.bottom) / 2
		});
		if (o) return N.cursor(o.pos, o.assoc);
	}
	return N.cursor(n ? i.to : i.from, n ? 1 : -1);
}
function Ga(e, t, n, r) {
	let i = e.state.doc.lineAt(t.head), a = e.bidiSpans(i), o = e.textDirectionAt(i.from);
	for (let s = t, c = null;;) {
		let t = yi(i, a, o, s, n), l = vi;
		if (!t) {
			if (i.number == (n ? e.state.doc.lines : 1)) return s;
			l = "\n", i = e.state.doc.line(i.number + (n ? 1 : -1)), a = e.bidiSpans(i), t = n ? N.cursor(i.from, -1) : N.cursor(i.to, 1);
		}
		if (!c) {
			if (!r) return t;
			c = r(l);
		} else if (!c(l)) return s;
		s = t;
	}
}
function Ka(e, t, n) {
	let r = e.state.charCategorizer(t), i = r(n);
	return (e) => {
		let t = r(e);
		return i == I.Space && (i = t), i == t;
	};
}
function qa(e, t, n, r) {
	let i = t.head, a = n ? 1 : -1;
	if (i == (n ? e.state.doc.length : 0)) return N.cursor(i, t.assoc);
	let o = t.goalColumn, s, c = e.contentDOM.getBoundingClientRect(), l = e.coordsAtPos(i, t.assoc || ((t.empty ? n : t.head == t.from) ? 1 : -1)), u = e.documentTop;
	if (l) o ??= l.left - c.left, s = a < 0 ? l.top : l.bottom;
	else {
		let t = e.viewState.lineBlockAt(i);
		o ??= Math.min(c.right - c.left, e.defaultCharacterWidth * (i - t.from)), s = (a < 0 ? t.top : t.bottom) + u;
	}
	let d = c.left + o, f = e.viewState.heightOracle.textHeight >> 1, p = r ?? f;
	for (let t = 0;; t += f) {
		let r = s + (p + t) * a, i = Qa(e, {
			x: d,
			y: r
		}, !1, a);
		if (n ? r > c.bottom : r < c.top) return N.cursor(i.pos, i.assoc);
		let l = e.coordsAtPos(i.pos, i.assoc), u = l ? (l.top + l.bottom) / 2 : 0;
		if (!l || (n ? u > s : u < s)) return N.cursor(i.pos, i.assoc, void 0, o);
	}
}
function Ja(e, t, n) {
	for (;;) {
		let r = 0;
		for (let i of e) i.between(t - 1, t + 1, (e, i, a) => {
			if (t > e && t < i) {
				let a = r || n || (t - e < i - t ? -1 : 1);
				t = a < 0 ? e : i, r = a;
			}
		});
		if (!r) return t;
	}
}
function Ya(e, t) {
	let n = null;
	for (let r = 0; r < t.ranges.length; r++) {
		let i = t.ranges[r], a = null;
		if (i.empty) {
			let t = Ja(e, i.from, 0);
			t != i.from && (a = N.cursor(t, -1));
		} else {
			let t = Ja(e, i.from, -1), n = Ja(e, i.to, 1);
			(t != i.from || n != i.to) && (a = i.undirectional ? N.undirectionalRange(i.from, i.to) : N.range(i.from == i.anchor ? t : n, i.from == i.head ? t : n));
		}
		a && (n ||= t.ranges.slice(), n[r] = a);
	}
	return n ? N.create(n, t.mainIndex) : t;
}
function Xa(e, t, n) {
	let r = Ja(e.state.facet(Ki).map((t) => t(e)), n.from, t.head > n.from ? -1 : 1);
	return r == n.from ? n : N.cursor(r, r < n.from ? 1 : -1);
}
var Za = class {
	constructor(e, t) {
		this.pos = e, this.assoc = t;
	}
};
function Qa(e, t, n, r) {
	let i = e.contentDOM.getBoundingClientRect(), a = i.top + e.viewState.paddingTop, { x: o, y: s } = t, c = s - a, l;
	for (;;) {
		if (c < 0) return new Za(0, 1);
		if (c > e.viewState.docHeight) return new Za(e.state.doc.length, -1);
		if (l = e.elementAtHeight(c), r == null) break;
		if (l.type == _r.Text) {
			if (r < 0 ? l.to < e.viewport.from : l.from > e.viewport.to) break;
			let t = e.docView.coordsAt(r < 0 ? l.from : l.to, r > 0 ? -1 : 1);
			if (t && (r < 0 ? t.top <= c + a : t.bottom >= c + a)) break;
		}
		let t = e.viewState.heightOracle.textHeight / 2;
		c = r > 0 ? l.bottom + t : l.top - t;
	}
	if (e.viewport.from >= l.to || e.viewport.to <= l.from) {
		if (n) return null;
		if (l.type == _r.Text) {
			let t = Ha(e, i, l, o, s);
			return new Za(t, t == l.from ? 1 : -1);
		}
	}
	if (l.type != _r.Text) return c < (l.top + l.bottom) / 2 ? new Za(l.from, 1) : new Za(l.to, -1);
	let u = e.docView.lineAt(l.from, 2);
	return u && u.length == l.length || (u = e.docView.lineAt(l.from, -2)), new $a(e, o, s, e.textDirectionAt(l.from)).scanTile(u, l.from);
}
var $a = class {
	constructor(e, t, n, r) {
		this.view = e, this.x = t, this.y = n, this.baseDir = r, this.line = null, this.spans = null;
	}
	bidiSpansAt(e) {
		return (!this.line || this.line.from > e || this.line.to < e) && (this.line = this.view.state.doc.lineAt(e), this.spans = this.view.bidiSpans(this.line)), this;
	}
	baseDirAt(e, t) {
		let { line: n, spans: r } = this.bidiSpansAt(e);
		return r[li.find(r, e - n.from, -1, t)].level == this.baseDir;
	}
	dirAt(e, t) {
		let { line: n, spans: r } = this.bidiSpansAt(e);
		return r[li.find(r, e - n.from, -1, t)].dir;
	}
	bidiIn(e, t) {
		let { spans: n, line: r } = this.bidiSpansAt(e);
		return n.length > 1 || n.length && (n[0].level != this.baseDir || n[0].to + r.from < t);
	}
	scan(e, t, n = !1) {
		let r = 0, i = e.length - 1, a = /* @__PURE__ */ new Set(), o = this.bidiIn(e[0], e[i]), s, c, l = -1, u = 1e9, d;
		search: for (; r < i;) {
			let n = i - r, f = r + i >> 1;
			adjust: if (a.has(f)) {
				for (let e = 1; e < n; e++) {
					let t = f + e;
					if (t >= i && (t -= n), !a.has(t)) {
						f = t;
						break adjust;
					}
				}
				break search;
			}
			a.add(f);
			let p = t(f), m = 0;
			if (p) for (let e = 0; e < p.length; e++) {
				let t = p[e];
				if (!(t.width == 0 && p.length > 1)) {
					if (t.bottom < this.y) (!s || s.bottom < t.bottom) && (s = t), m = 1;
					else if (t.top > this.y) (!c || c.top > t.top) && (c = t), m = -1;
					else {
						let e = t.left > this.x ? this.x - t.left : t.right < this.x ? this.x - t.right : 0, n = Math.abs(e);
						n < u && (l = f, u = n, d = t), e && (m = e < 0 == (this.baseDir == U.LTR) ? -1 : 1);
					}
				}
			}
			m == -1 && (!o || this.baseDirAt(e[f], 1)) ? i = f : m == 1 && (!o || this.baseDirAt(e[f + 1], -1)) && (r = f + 1);
		}
		if (!d) {
			if (!c && !s) return {
				i: 0,
				after: !1
			};
			let n = s && (!c || this.y - s.bottom < c.top - this.y) ? s : c;
			return this.y = (n.top + n.bottom) / 2, this.scan(e, t, !0);
		}
		if (u && !n) {
			let { top: n, bottom: r } = d;
			if (s && s.bottom > (n + n + r) / 3) return this.y = s.bottom - 1, this.scan(e, t, !0);
			if (c && c.top < (n + r + r) / 3) return this.y = c.top + 1, this.scan(e, t, !0);
		}
		let f = (o ? this.dirAt(e[l], 1) : this.baseDir) == U.LTR;
		return {
			i: l,
			after: this.x > (d.left + d.right) / 2 == f
		};
	}
	scanText(e, t) {
		let n = [];
		for (let r = 0; r < e.length; r = M(e.text, r)) n.push(t + r);
		n.push(t + e.length);
		let r = this.scan(n, (r) => {
			let i = n[r] - t, a = n[r + 1] - t;
			return Kr(e.dom, i, a).getClientRects();
		});
		return r.after ? new Za(n[r.i + 1], -1) : new Za(n[r.i], 1);
	}
	scanTile(e, t) {
		if (!e.length) return new Za(t, 1);
		if (e.children.length == 1) {
			let n = e.children[0];
			if (n.isText()) return this.scanText(n, t);
			if (n.isComposite()) return this.scanTile(n, t);
		}
		let n = [t];
		for (let r = 0, i = t; r < e.children.length; r++) n.push(i += e.children[r].length);
		let r = this.scan(n, (t) => {
			let n = e.children[t];
			return n.flags & 48 ? null : (H(n.dom) ? n.dom : Kr(n.dom, 0, n.length)).getClientRects();
		}), i = e.children[r.i], a = n[r.i];
		return i.isText() ? this.scanText(i, a) : i.isComposite() ? this.scanTile(i, a) : r.after ? new Za(n[r.i + 1], -1) : new Za(a, 1);
	}
}, eo = "￿", to = class {
	constructor(e, t) {
		this.points = e, this.view = t, this.text = "", this.lineSeparator = t.state.facet(L.lineSeparator);
	}
	append(e) {
		this.text += e;
	}
	lineBreak() {
		this.text += eo;
	}
	readRange(e, t) {
		if (!e) return this;
		let n = e.parentNode;
		for (let r = e;;) {
			this.findPointBefore(n, r);
			let e = this.text.length;
			this.readNode(r);
			let i = K.get(r), a = r.nextSibling;
			if (a == t) {
				i?.breakAfter && !a && n != this.view.contentDOM && this.lineBreak();
				break;
			}
			let o = K.get(a);
			(i && o ? i.breakAfter : (i ? i.breakAfter : Mr(r)) || Mr(a) && (r.nodeName != "BR" || i?.isWidget()) && this.text.length > e) && !ro(a, t) && this.lineBreak(), r = a;
		}
		return this.findPointBefore(n, t), this;
	}
	readTextNode(e) {
		let t = e.nodeValue;
		for (let n of this.points) n.node == e && (n.pos = this.text.length + Math.min(n.offset, t.length));
		for (let n = 0, r = this.lineSeparator ? null : /\r\n?|\n/g;;) {
			let i = -1, a = 1, o;
			if (this.lineSeparator ? (i = t.indexOf(this.lineSeparator, n), a = this.lineSeparator.length) : (o = r.exec(t)) && (i = o.index, a = o[0].length), this.append(t.slice(n, i < 0 ? t.length : i)), i < 0) break;
			if (this.lineBreak(), a > 1) for (let t of this.points) t.node == e && t.pos > this.text.length && (t.pos -= a - 1);
			n = i + a;
		}
	}
	readNode(e) {
		let t = K.get(e), n = t && t.overrideDOMText;
		if (n != null) {
			this.findPointInside(e, n.length);
			for (let e = n.iter(); !e.next().done;) e.lineBreak ? this.lineBreak() : this.append(e.value);
		} else Tr(e) ? this.readTextNode(e) : e.nodeName == "BR" ? e.nextSibling && this.lineBreak() : H(e) && this.readRange(e.firstChild, null);
	}
	findPointBefore(e, t) {
		for (let n of this.points) n.node == e && e.childNodes[n.offset] == t && (n.pos = this.text.length);
	}
	findPointInside(e, t) {
		for (let n of this.points) (Tr(e) ? n.node == e : e.contains(n.node)) && (n.pos = this.text.length + (no(e, n.node, n.offset) ? t : 0));
	}
};
function no(e, t, n) {
	for (;;) {
		if (!t || n < Pr(t)) return !1;
		if (t == e) return !0;
		n = jr(t) + 1, t = t.parentNode;
	}
}
function ro(e, t) {
	let n;
	for (; e != t && e; e = e.nextSibling) {
		let t = K.get(e);
		if (!t?.isWidget()) return !1;
		t && (n ||= []).push(t);
	}
	if (n) {
		for (let e of n) if (e.overrideDOMText?.length) return !1;
	}
	return !0;
}
var io = class {
	constructor(e, t) {
		this.node = e, this.offset = t, this.pos = -1;
	}
}, ao = class {
	constructor(e, t, n, r) {
		this.typeOver = r, this.bounds = null, this.text = "", this.domChanged = t > -1;
		let { impreciseHead: i, impreciseAnchor: a } = e.docView, o = e.state.selection;
		if (e.state.readOnly && t > -1) this.newSel = null;
		else if (t > -1 && (this.bounds = oo(e.docView.tile, t, n, 0))) {
			let t = i || a ? [] : fo(e), n = new to(t, e);
			n.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = n.text, this.newSel = po(t, this.bounds.from);
		} else {
			let t = e.observer.selectionRange, n = i && i.node == t.focusNode && i.offset == t.focusOffset || !Dr(e.contentDOM, t.focusNode) ? o.main.head : e.docView.posFromDOM(t.focusNode, t.focusOffset), r = a && a.node == t.anchorNode && a.offset == t.anchorOffset || !Dr(e.contentDOM, t.anchorNode) ? o.main.anchor : e.docView.posFromDOM(t.anchorNode, t.anchorOffset), s = e.viewport;
			if ((B.ios || B.chrome) && n != r && Math.min(n, r) <= o.main.from && Math.max(n, r) >= o.main.to && (s.from > 0 || s.to < e.state.doc.length)) {
				let t = Math.min(n, r), i = Math.max(n, r), a = s.from - t, o = s.to - i;
				a != 0 && a != 1 && t != 0 || o != 0 && o != -1 && i != e.state.doc.length || (n = 0, r = e.state.doc.length);
			}
			if (e.inputState.composing > -1 && o.ranges.length > 1) this.newSel = o.replaceRange(N.range(r, n));
			else if (e.lineWrapping && r == n && !(o.main.empty && o.main.head == n) && e.inputState.lastTouchTime > Date.now() - 100) {
				let t = e.coordsAtPos(n, -1), r = 0;
				t && (r = e.inputState.lastTouchY <= t.bottom ? -1 : 1), this.newSel = N.create([N.cursor(n, r)]);
			} else this.newSel = N.single(r, n);
		}
	}
};
function oo(e, t, n, r) {
	if (e.isComposite()) {
		let i = -1, a = -1, o = -1, s = -1;
		for (let c = 0, l = r, u = r; c < e.children.length; c++) {
			let r = e.children[c], d = l + r.length;
			if (l < t && d > n) return oo(r, t, n, l);
			if (d >= t && i == -1 && (i = c, a = l), l > n && r.dom.parentNode == e.dom) {
				o = c, s = u;
				break;
			}
			u = d, l = d + r.breakAfter;
		}
		return {
			from: a,
			to: s < 0 ? r + e.length : s,
			startDOM: (i ? e.children[i - 1].dom.nextSibling : null) || e.dom.firstChild,
			endDOM: o < e.children.length && o >= 0 ? e.children[o].dom : null
		};
	}
	return e.isText() ? {
		from: r,
		to: r + e.length,
		startDOM: e.dom,
		endDOM: e.dom.nextSibling
	} : null;
}
function so(e, t) {
	let n, { newSel: r } = t, { state: i } = e, a = i.selection.main, o = e.inputState.lastKeyTime > Date.now() - 100 ? e.inputState.lastKeyCode : -1;
	if (t.bounds) {
		let { from: e, to: r } = t.bounds, s = a.from, c = null;
		(o === 8 || B.android && t.text.length < r - e) && (s = a.to, c = "end");
		let l = i.doc.sliceString(e, r, eo), u, d;
		!a.empty && a.from >= e && a.to <= r && (t.typeOver || l != t.text) && l.slice(0, a.from - e) == t.text.slice(0, a.from - e) && l.slice(a.to - e) == t.text.slice(u = t.text.length - (l.length - (a.to - e))) ? n = {
			from: a.from,
			to: a.to,
			insert: j.of(t.text.slice(a.from - e, u).split(eo))
		} : (d = uo(l, t.text, s - e, c)) && (B.chrome && o == 13 && d.toB == d.from + 2 && t.text.slice(d.from, d.toB) == "￿￿" && d.toB--, n = {
			from: e + d.from,
			to: e + d.toA,
			insert: j.of(t.text.slice(d.from, d.toB).split(eo))
		});
	} else r && (!e.hasFocus && i.facet(Li) || mo(r, a)) && (r = null);
	if (!n && !r) return !1;
	if ((B.mac || B.android) && n && n.from == n.to && n.from == a.head - 1 && /^\. ?$/.test(n.insert.toString()) && e.contentDOM.getAttribute("autocorrect") == "off" ? (r && n.insert.length == 2 && (r = N.single(r.main.anchor - 1, r.main.head - 1)), n = {
		from: n.from,
		to: n.to,
		insert: j.of([n.insert.toString().replace(".", " ")])
	}) : i.doc.lineAt(a.from).to < a.to && e.docView.lineHasWidget(a.to) && e.inputState.insertingTextAt > Date.now() - 50 ? n = {
		from: a.from,
		to: a.to,
		insert: i.toText(e.inputState.insertingText)
	} : B.chrome && n && n.from == n.to && n.from == a.head && n.insert.toString() == "\n " && e.lineWrapping && (r &&= N.single(r.main.anchor - 1, r.main.head - 1), n = {
		from: a.from,
		to: a.to,
		insert: j.of([" "])
	}), n) return co(e, n, r, o);
	if (r && !mo(r, a)) {
		let t = !1, n = "select";
		return e.inputState.lastSelectionTime > Date.now() - 50 && (e.inputState.lastSelectionOrigin == "select" && (t = !0), n = e.inputState.lastSelectionOrigin, n == "select.pointer" && (r = Ya(i.facet(Ki).map((t) => t(e)), r))), e.dispatch({
			selection: r,
			scrollIntoView: t,
			userEvent: n
		}), !0;
	}
	return !1;
}
function co(e, t, n, r = -1) {
	if (B.ios && e.inputState.flushIOSKey(t)) return !0;
	let i = e.state.selection.main;
	if (B.android && (t.to == i.to && (t.from == i.from || t.from == i.from - 1 && e.state.sliceDoc(t.from, i.from) == " ") && t.insert.length == 1 && t.insert.lines == 2 && qr(e.contentDOM, "Enter", 13) || (t.from == i.from - 1 && t.to == i.to && t.insert.length == 0 || r == 8 && t.insert.length < t.to - t.from && t.to > i.head) && qr(e.contentDOM, "Backspace", 8) || t.from == i.from && t.to == i.to + 1 && t.insert.length == 0 && qr(e.contentDOM, "Delete", 46))) return !0;
	let a = t.insert.toString();
	e.inputState.composing >= 0 && e.inputState.composing++;
	let o, s = () => o ||= lo(e, t, n);
	return e.state.facet(Ei).some((n) => n(e, t.from, t.to, a, s)) || e.dispatch(s()), !0;
}
function lo(e, t, n) {
	let r, i = e.state, a = i.selection.main, o = -1;
	if (t.from == t.to && t.from < a.from || t.from > a.to) {
		let n = t.from < a.from ? -1 : 1, r = n < 0 ? a.from : a.to, s = Ja(i.facet(Ki).map((t) => t(e)), r, n);
		t.from == s && (o = s);
	}
	if (o > -1) r = {
		changes: t,
		selection: N.cursor(t.from + t.insert.length, -1)
	};
	else if (t.from >= a.from && t.to <= a.to && t.to - t.from >= (a.to - a.from) / 3 && (!n || n.main.empty && n.main.from == t.from + t.insert.length) && e.inputState.composing < 0) {
		let n = a.from < t.from ? i.sliceDoc(a.from, t.from) : "", o = a.to > t.to ? i.sliceDoc(t.to, a.to) : "";
		r = i.replaceSelection(e.state.toText(n + t.insert.sliceString(0, void 0, e.state.lineBreak) + o));
	} else {
		let o = i.changes(t), s = n && n.main.to <= o.newLength ? n.main : void 0;
		if (i.selection.ranges.length > 1 && (e.inputState.composing >= 0 || e.inputState.compositionPendingChange) && t.to <= a.to + 10 && t.to >= a.to - 10) {
			let c = e.state.sliceDoc(t.from, t.to), l, u = n && ja(e, n.main.head);
			if (u) {
				let e = t.insert.length - (t.to - t.from);
				l = {
					from: u.from,
					to: u.to - e
				};
			} else l = e.state.doc.lineAt(a.head);
			let d = a.to - t.to;
			r = i.changeByRange((n) => {
				if (n.from == a.from && n.to == a.to) return {
					changes: o,
					range: s || n.map(o)
				};
				let r = n.to - d, u = r - c.length;
				if (e.state.sliceDoc(u, r) != c || r >= l.from && u <= l.to) return { range: n };
				let f = i.changes({
					from: u,
					to: r,
					insert: t.insert
				}), p = n.to - a.to;
				return {
					changes: f,
					range: s ? N.range(Math.max(0, s.anchor + p), Math.max(0, s.head + p)) : n.map(f)
				};
			});
		} else r = {
			changes: o,
			selection: s && i.selection.replaceRange(s)
		};
	}
	let s = "input.type";
	return (e.composing || e.inputState.compositionPendingChange && e.inputState.compositionEndedAt > Date.now() - 50) && (e.inputState.compositionPendingChange = !1, s += ".compose", e.inputState.compositionFirstChange && (s += ".start", e.inputState.compositionFirstChange = !1)), i.update(r, {
		userEvent: s,
		scrollIntoView: !0
	});
}
function uo(e, t, n, r) {
	let i = Math.min(e.length, t.length), a = 0;
	for (; a < i && e.charCodeAt(a) == t.charCodeAt(a);) a++;
	if (a == i && e.length == t.length) return null;
	let o = e.length, s = t.length;
	for (; o > 0 && s > 0 && e.charCodeAt(o - 1) == t.charCodeAt(s - 1);) o--, s--;
	if (r == "end") {
		let e = Math.max(0, a - Math.min(o, s));
		n -= o + e - a;
	}
	if (o < a && e.length < t.length) {
		let e = n <= a && n >= o ? a - n : 0;
		a -= e, s = a + (s - o), o = a;
	} else if (s < a) {
		let e = n <= a && n >= s ? a - n : 0;
		a -= e, o = a + (o - s), s = a;
	}
	return {
		from: a,
		toA: o,
		toB: s
	};
}
function fo(e) {
	let t = [];
	if (e.root.activeElement != e.contentDOM) return t;
	let { anchorNode: n, anchorOffset: r, focusNode: i, focusOffset: a } = e.observer.selectionRange;
	return n && (t.push(new io(n, r)), (i != n || a != r) && t.push(new io(i, a))), t;
}
function po(e, t) {
	if (e.length == 0) return null;
	let n = e[0].pos, r = e.length == 2 ? e[1].pos : n;
	return n < 0 || r < 0 ? null : n == r ? N.create([N.cursor(r + t, -1)]) : N.single(n + t, r + t);
}
function mo(e, t) {
	return t.head == e.main.head && t.anchor == e.main.anchor;
}
var ho = class {
	setSelectionOrigin(e) {
		this.lastSelectionOrigin = e, this.lastSelectionTime = Date.now();
	}
	constructor(e) {
		this.view = e, this.lastKeyCode = 0, this.lastKeyTime = 0, this.touchActive = !1, this.lastTouchTime = 0, this.lastTouchX = 0, this.lastTouchY = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.lastWheelEvent = 0, this.pendingIOSKey = void 0, this.lastIOSMomentumScroll = 0, this.tabFocusMode = -1, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.handlers = Object.create(null), this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = !1, this.compositionPendingChange = !1, this.insertingText = "", this.insertingTextAt = 0, this.mouseSelection = null, this.draggedContent = null, this.handleEvent = this.handleEvent.bind(this), this.notifiedFocused = e.hasFocus, B.safari && e.contentDOM.addEventListener("input", () => null), B.gecko && Qo(e.contentDOM.ownerDocument);
	}
	handleEvent(e) {
		ko(this.view, e) && !this.ignoreDuringComposition(e) && (e.type == "keydown" && this.keydown(e) || (this.view.updateState == 0 ? this.runHandlers(e.type, e) : Promise.resolve().then(() => this.runHandlers(e.type, e))));
	}
	runHandlers(e, t) {
		let n = this.handlers[e];
		if (n) {
			for (let e of n.observers) e(this.view, t);
			for (let e of n.handlers) {
				if (t.defaultPrevented) break;
				if (e(this.view, t)) {
					t.preventDefault();
					break;
				}
			}
		}
	}
	ensureHandlers(e) {
		let t = vo(e), n = this.handlers, r = this.view.contentDOM;
		for (let e in t) if (e != "scroll") {
			let i = !t[e].handlers.length, a = n[e];
			a && i != !a.handlers.length && (r.removeEventListener(e, this.handleEvent), a = null), a || r.addEventListener(e, this.handleEvent, { passive: i });
		}
		for (let e in n) e != "scroll" && !t[e] && r.removeEventListener(e, this.handleEvent);
		this.handlers = t;
	}
	keydown(e) {
		if (this.lastKeyCode = e.keyCode, this.lastKeyTime = Date.now(), e.keyCode == 9 && this.tabFocusMode > -1 && (!this.tabFocusMode || Date.now() <= this.tabFocusMode)) return !0;
		if (this.tabFocusMode > 0 && e.keyCode != 27 && xo.indexOf(e.keyCode) < 0 && (this.tabFocusMode = -1), B.android && B.chrome && !e.synthetic && (e.keyCode == 13 || e.keyCode == 8)) return this.view.observer.delayAndroidKey(e.key, e.keyCode), !0;
		if (B.ios && !e.synthetic && !e.altKey && !e.metaKey && (yo.some((t) => t.keyCode == e.keyCode) && !e.ctrlKey || bo.indexOf(e.key) > -1 && e.ctrlKey)) {
			let t = {
				ctrlKey: e.ctrlKey,
				altKey: e.altKey,
				metaKey: e.metaKey,
				shiftKey: e.shiftKey
			};
			t.shiftKey && B.ios && !/^(off|none)$/.test(this.view.contentDOM.autocapitalize) && go(this.view.win) && (t.shiftKey = !1);
			let n = this.pendingIOSKey = {
				key: e.key,
				keyCode: e.keyCode,
				mods: t
			};
			return setTimeout(() => {
				this.pendingIOSKey == n && this.flushIOSKey();
			}, 50), !0;
		}
		return e.keyCode != 229 && this.view.observer.forceFlush(), !1;
	}
	flushIOSKey(e) {
		let t = this.pendingIOSKey;
		return !t || this.view.observer.pendingRecords().length || t.key == "Enter" && e && e.from < e.to && /^\S+$/.test(e.insert.toString()) ? !1 : (this.pendingIOSKey = void 0, qr(this.view.contentDOM, t.key, t.keyCode, t.mods));
	}
	ignoreDuringComposition(e) {
		return !/^key/.test(e.type) || e.synthetic ? !1 : this.composing > 0 ? !0 : B.safari && !B.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100 ? (this.compositionPendingKey = !1, !0) : !1;
	}
	startMouseSelection(e) {
		this.mouseSelection && this.mouseSelection.destroy(), this.mouseSelection = e;
	}
	update(e) {
		this.view.observer.update(e), this.mouseSelection && this.mouseSelection.update(e), this.draggedContent && e.docChanged && (this.draggedContent = this.draggedContent.map(e.changes)), e.transactions.length && (this.lastKeyCode = this.lastSelectionTime = 0);
	}
	destroy() {
		this.mouseSelection && this.mouseSelection.destroy();
	}
};
function go(e) {
	return e.visualViewport ? e.visualViewport.height * e.visualViewport.scale / e.document.documentElement.clientHeight < .85 : !1;
}
function _o(e, t) {
	return (n, r) => {
		try {
			return t.call(e, r, n);
		} catch (e) {
			Ii(n.state, e);
		}
	};
}
function vo(e) {
	let t = Object.create(null);
	function n(e) {
		return t[e] || (t[e] = {
			observers: [],
			handlers: []
		});
	}
	for (let t of e) {
		let e = t.spec, r = e && e.plugin.domEventHandlers, i = e && e.plugin.domEventObservers;
		if (r) for (let e in r) {
			let i = r[e];
			i && n(e).handlers.push(_o(t.value, i));
		}
		if (i) for (let e in i) {
			let r = i[e];
			r && n(e).observers.push(_o(t.value, r));
		}
	}
	for (let e in Ao) n(e).handlers.push(Ao[e]);
	for (let e in jo) n(e).observers.push(jo[e]);
	return t;
}
var yo = [
	{
		key: "Backspace",
		keyCode: 8,
		inputType: "deleteContentBackward"
	},
	{
		key: "Enter",
		keyCode: 13,
		inputType: "insertParagraph"
	},
	{
		key: "Enter",
		keyCode: 13,
		inputType: "insertLineBreak"
	},
	{
		key: "Delete",
		keyCode: 46,
		inputType: "deleteContentForward"
	}
], bo = "dthko", xo = [
	16,
	17,
	18,
	20,
	91,
	92,
	224,
	225
], So = 6;
function Co(e) {
	return Math.max(0, e) * .7 + 8;
}
function wo(e, t) {
	return Math.max(Math.abs(e.clientX - t.clientX), Math.abs(e.clientY - t.clientY));
}
var To = class {
	constructor(e, t, n, r) {
		this.view = e, this.startEvent = t, this.style = n, this.mustSelect = r, this.scrollSpeed = {
			x: 0,
			y: 0
		}, this.scrolling = -1, this.lastEvent = t, this.scrollParents = zr(e.contentDOM), this.atoms = e.state.facet(Ki).map((t) => t(e));
		let i = e.contentDOM.ownerDocument;
		i.addEventListener("mousemove", this.move = this.move.bind(this)), i.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = t.shiftKey, this.multiple = e.state.facet(L.allowMultipleSelections) && Eo(e, t), this.dragging = Oo(e, t) && Vo(t) == 1 ? null : !1;
	}
	start(e) {
		this.dragging === !1 && this.select(e);
	}
	move(e) {
		if (e.buttons == 0) return this.destroy();
		if (this.dragging || this.dragging == null && wo(this.startEvent, e) < 10) return;
		this.select(this.lastEvent = e);
		let t = 0, n = 0, r = 0, i = 0, a = this.view.win.innerWidth, o = this.view.win.innerHeight;
		this.scrollParents.x && ({left: r, right: a} = this.scrollParents.x.getBoundingClientRect()), this.scrollParents.y && ({top: i, bottom: o} = this.scrollParents.y.getBoundingClientRect());
		let s = Zi(this.view);
		e.clientX - s.left <= r + So ? t = -Co(r - e.clientX) : e.clientX + s.right >= a - So && (t = Co(e.clientX - a)), e.clientY - s.top <= i + So ? n = -Co(i - e.clientY) : e.clientY + s.bottom >= o - So && (n = Co(e.clientY - o)), this.setScrollSpeed(t, n);
	}
	up(e) {
		this.dragging ?? this.select(this.lastEvent), this.dragging || e.preventDefault(), this.destroy();
	}
	destroy() {
		this.setScrollSpeed(0, 0);
		let e = this.view.contentDOM.ownerDocument;
		e.removeEventListener("mousemove", this.move), e.removeEventListener("mouseup", this.up), this.view.inputState.mouseSelection = this.view.inputState.draggedContent = null;
	}
	setScrollSpeed(e, t) {
		this.scrollSpeed = {
			x: e,
			y: t
		}, e || t ? this.scrolling < 0 && (this.scrolling = setInterval(() => this.scroll(), 50)) : this.scrolling > -1 && (clearInterval(this.scrolling), this.scrolling = -1);
	}
	scroll() {
		let { x: e, y: t } = this.scrollSpeed;
		e && this.scrollParents.x && (this.scrollParents.x.scrollLeft += e, e = 0), t && this.scrollParents.y && (this.scrollParents.y.scrollTop += t, t = 0), (e || t) && this.view.win.scrollBy(e, t), this.dragging === !1 && this.select(this.lastEvent);
	}
	select(e) {
		let { view: t } = this, n = Ya(this.atoms, this.style.get(e, this.extend, this.multiple));
		(this.mustSelect || !n.eq(t.state.selection, this.dragging === !1)) && this.view.dispatch({
			selection: n,
			userEvent: "select.pointer"
		}), this.mustSelect = !1;
	}
	update(e) {
		e.transactions.some((e) => e.isUserEvent("input.type")) ? this.destroy() : this.style.update(e) && setTimeout(() => this.select(this.lastEvent), 20);
	}
};
function Eo(e, t) {
	let n = e.state.facet(xi);
	return n.length ? n[0](t) : B.mac ? t.metaKey : t.ctrlKey;
}
function Do(e, t) {
	let n = e.state.facet(Si);
	return n.length ? n[0](t) : B.mac ? !t.altKey : !t.ctrlKey;
}
function Oo(e, t) {
	let { main: n } = e.state.selection;
	if (n.empty) return !1;
	let r = Er(e.root);
	if (!r || r.rangeCount == 0) return !0;
	let i = r.getRangeAt(0).getClientRects();
	for (let e = 0; e < i.length; e++) {
		let n = i[e];
		if (n.left <= t.clientX && n.right >= t.clientX && n.top <= t.clientY && n.bottom >= t.clientY) return !0;
	}
	return !1;
}
function ko(e, t) {
	if (!t.bubbles) return !0;
	if (t.defaultPrevented) return !1;
	for (let n = t.target, r; n != e.contentDOM; n = n.parentNode) if (!n || n.nodeType == 11 || (r = K.get(n)) && r.isWidget() && !r.isHidden && r.widget.ignoreEvent(t)) return !1;
	return !0;
}
var Ao = /*@__PURE__*/ Object.create(null), jo = /*@__PURE__*/ Object.create(null), Mo = B.ie && B.ie_version < 15 || B.ios && B.webkit_version < 604;
function No(e) {
	let t = e.dom.parentNode;
	if (!t) return;
	let n = t.appendChild(document.createElement("textarea"));
	n.style.cssText = "position: fixed; left: -10000px; top: 10px", n.focus(), setTimeout(() => {
		e.focus(), n.remove(), Fo(e, n.value);
	}, 50);
}
function Po(e, t, n) {
	for (let r of e.facet(t)) n = r(n, e);
	return n;
}
function Fo(e, t) {
	t = Po(e.state, Oi, t);
	let { state: n } = e, r, i = 1, a = n.toText(t), o = a.lines == n.selection.ranges.length;
	if (qo != null && n.selection.ranges.every((e) => e.empty) && qo == a.toString()) {
		let e = -1;
		r = n.changeByRange((r) => {
			let s = n.doc.lineAt(r.from);
			if (s.from == e) return { range: r };
			e = s.from;
			let c = n.toText((o ? a.line(i++).text : t) + n.lineBreak);
			return {
				changes: {
					from: s.from,
					insert: c
				},
				range: N.cursor(r.from + c.length, -1)
			};
		});
	} else r = o ? n.changeByRange((e) => {
		let t = a.line(i++);
		return {
			changes: {
				from: e.from,
				to: e.to,
				insert: t.text
			},
			range: N.cursor(e.from + t.length, -1)
		};
	}) : n.replaceSelection(a);
	e.dispatch(r, {
		userEvent: "input.paste",
		scrollIntoView: !0
	});
}
jo.scroll = (e) => {
	let t = e.inputState;
	t.lastScrollTop = e.scrollDOM.scrollTop, t.lastScrollLeft = e.scrollDOM.scrollLeft, B.ios && !t.touchActive && (t.lastIOSMomentumScroll = Date.now());
}, jo.wheel = jo.mousewheel = (e) => {
	e.inputState.lastWheelEvent = Date.now();
}, Ao.keydown = (e, t) => (e.inputState.setSelectionOrigin("select"), t.keyCode == 27 && e.inputState.tabFocusMode != 0 && (e.inputState.tabFocusMode = Date.now() + 2e3), !1), jo.touchstart = (e, t) => {
	let n = e.inputState, r = t.targetTouches[0];
	n.touchActive = !0, n.lastTouchTime = Date.now(), r && (n.lastTouchX = r.clientX, n.lastTouchY = r.clientY), n.setSelectionOrigin("select.pointer");
}, jo.touchmove = (e) => {
	e.inputState.setSelectionOrigin("select.pointer");
}, jo.touchend = (e, t) => {
	e.inputState.touchActive = !1;
}, Ao.mousedown = (e, t) => {
	if (e.observer.flush(), e.inputState.lastTouchTime > Date.now() - 2e3) return !1;
	let n = null;
	for (let r of e.state.facet(Ci)) if (n = r(e, t), n) break;
	if (!n && t.button == 0 && (n = Ho(e, t)), n) {
		let r = !e.hasFocus;
		e.inputState.startMouseSelection(new To(e, t, n, r)), r && e.observer.ignore(() => {
			Wr(e.contentDOM);
			let t = e.root.activeElement;
			t && !t.contains(e.contentDOM) && t.blur();
		});
		let i = e.inputState.mouseSelection;
		if (i) return i.start(t), i.dragging === !1;
	} else e.inputState.setSelectionOrigin("select.pointer");
	return !1;
};
function Io(e, t, n, r) {
	if (r == 1) return N.cursor(t, n);
	if (r == 2) return Va(e.state, t, n);
	{
		let r = e.docView.lineAt(t, n), i = e.state.doc.lineAt(r ? r.posAtEnd : t), a = r ? r.posAtStart : i.from, o = r ? r.posAtEnd : i.to;
		return o < e.state.doc.length && o == i.to && o++, N.undirectionalRange(a, o);
	}
}
var Lo = B.ie && B.ie_version <= 11, Ro = null, zo = 0, Bo = 0;
function Vo(e) {
	if (!Lo) return e.detail;
	let t = Ro, n = Bo;
	return Ro = e, Bo = Date.now(), zo = !t || n > Date.now() - 400 && Math.abs(t.clientX - e.clientX) < 2 && Math.abs(t.clientY - e.clientY) < 2 ? (zo + 1) % 3 : 1;
}
function Ho(e, t) {
	let n = e.posAndSideAtCoords({
		x: t.clientX,
		y: t.clientY
	}, !1), r = Vo(t), i = e.state.selection;
	return {
		update(e) {
			e.docChanged && (n.pos = e.changes.mapPos(n.pos), i = i.map(e.changes));
		},
		get(t, a, o) {
			let s = e.posAndSideAtCoords({
				x: t.clientX,
				y: t.clientY
			}, !1), c, l = Io(e, s.pos, s.assoc, r);
			if (n.pos != s.pos && !a) {
				let t = Io(e, n.pos, n.assoc, r), i = Math.min(t.from, l.from), a = Math.max(t.to, l.to);
				l = i < l.from ? N.range(i, a, l.assoc) : N.range(a, i, l.assoc);
			}
			return a ? i.replaceRange(i.main.extend(l.from, l.to, l.assoc)) : o && r == 1 && i.ranges.length > 1 && (c = Uo(i, s.pos)) ? c : o ? i.addRange(l) : N.create([l]);
		}
	};
}
function Uo(e, t) {
	for (let n = 0; n < e.ranges.length; n++) {
		let { from: r, to: i } = e.ranges[n];
		if (r <= t && i >= t) return N.create(e.ranges.slice(0, n).concat(e.ranges.slice(n + 1)), e.mainIndex == n ? 0 : e.mainIndex - +(e.mainIndex > n));
	}
	return null;
}
Ao.dragstart = (e, t) => {
	let { selection: { main: n } } = e.state;
	if (t.target.draggable) {
		let r = e.docView.tile.nearest(t.target);
		if (r && r.isWidget()) {
			let e = r.posAtStart, t = e + r.length;
			(e >= n.to || t <= n.from) && (n = N.undirectionalRange(e, t));
		}
	}
	let { inputState: r } = e;
	return r.mouseSelection && (r.mouseSelection.dragging = !0), r.draggedContent = n, t.dataTransfer && (t.dataTransfer.setData("Text", Po(e.state, ki, e.state.sliceDoc(n.from, n.to))), t.dataTransfer.effectAllowed = "copyMove"), !1;
}, Ao.dragend = (e) => (e.inputState.draggedContent = null, !1);
function Wo(e, t, n, r) {
	if (n = Po(e.state, Oi, n), !n) return;
	let i = e.posAtCoords({
		x: t.clientX,
		y: t.clientY
	}, !1), { draggedContent: a } = e.inputState, o = r && a && Do(e, t) ? {
		from: a.from,
		to: a.to
	} : null, s = {
		from: i,
		insert: n
	}, c = e.state.changes(o ? [o, s] : s);
	e.focus(), e.dispatch({
		changes: c,
		selection: {
			anchor: c.mapPos(i, -1),
			head: c.mapPos(i, 1)
		},
		userEvent: o ? "move.drop" : "input.drop"
	}), e.inputState.draggedContent = null;
}
Ao.drop = (e, t) => {
	if (!t.dataTransfer) return !1;
	if (e.state.readOnly) return !0;
	let n = t.dataTransfer.files;
	if (n && n.length) {
		let r = Array(n.length), i = 0, a = () => {
			++i == n.length && Wo(e, t, r.filter((e) => e != null).join(e.state.lineBreak), !1);
		};
		for (let e = 0; e < n.length; e++) {
			let t = new FileReader();
			t.onerror = a, t.onload = () => {
				/[\x00-\x08\x0e-\x1f]{2}/.test(t.result) || (r[e] = t.result), a();
			}, t.readAsText(n[e]);
		}
		return !0;
	}
	{
		let n = t.dataTransfer.getData("Text");
		if (n) return Wo(e, t, n, !0), !0;
	}
	return !1;
}, Ao.paste = (e, t) => {
	if (e.state.readOnly) return !0;
	e.observer.flush();
	let n = Mo ? null : t.clipboardData;
	return n ? (Fo(e, n.getData("text/plain") || n.getData("text/uri-list")), !0) : (No(e), !1);
};
function Go(e, t) {
	let n = e.dom.parentNode;
	if (!n) return;
	let r = n.appendChild(document.createElement("textarea"));
	r.style.cssText = "position: fixed; left: -10000px; top: 10px", r.value = t, r.focus(), r.selectionEnd = t.length, r.selectionStart = 0, setTimeout(() => {
		r.remove(), e.focus();
	}, 50);
}
function Ko(e) {
	let t = [], n = [], r = !1;
	for (let r of e.selection.ranges) r.empty || (t.push(e.sliceDoc(r.from, r.to)), n.push(r));
	if (!t.length) {
		let i = -1;
		for (let { from: r } of e.selection.ranges) {
			let a = e.doc.lineAt(r);
			a.number > i && (t.push(a.text), n.push({
				from: a.from,
				to: Math.min(e.doc.length, a.to + 1)
			})), i = a.number;
		}
		r = !0;
	}
	return {
		text: Po(e, ki, t.join(e.lineBreak)),
		ranges: n,
		linewise: r
	};
}
var qo = null;
Ao.copy = Ao.cut = (e, t) => {
	if (!Or(e.contentDOM, e.observer.selectionRange)) return !1;
	let { text: n, ranges: r, linewise: i } = Ko(e.state);
	if (!n && !i) return !1;
	qo = i ? n : null, t.type == "cut" && !e.state.readOnly && e.dispatch({
		changes: r,
		scrollIntoView: !0,
		userEvent: "delete.cut"
	});
	let a = Mo ? null : t.clipboardData;
	return a ? (a.clearData(), a.setData("text/plain", n), !0) : (Go(e, n), !1);
};
var Jo = /*@__PURE__*/ en.define();
function Yo(e, t) {
	let n = [];
	for (let r of e.facet(Di)) {
		let i = r(e, t);
		i && n.push(i);
	}
	return n.length ? e.update({
		effects: n,
		annotations: Jo.of(!0)
	}) : null;
}
function Xo(e) {
	setTimeout(() => {
		let t = e.hasFocus;
		if (t != e.inputState.notifiedFocused) {
			let n = Yo(e.state, t);
			n ? e.dispatch(n) : e.update([]);
		}
	}, 10);
}
jo.focus = (e) => {
	e.inputState.lastFocusTime = Date.now(), !e.scrollDOM.scrollTop && (e.inputState.lastScrollTop || e.inputState.lastScrollLeft) && (e.scrollDOM.scrollTop = e.inputState.lastScrollTop, e.scrollDOM.scrollLeft = e.inputState.lastScrollLeft), Xo(e);
}, jo.blur = (e) => {
	e.observer.clearSelectionRange(), Xo(e);
}, jo.compositionstart = jo.compositionupdate = (e, t) => {
	if (!e.observer.editContext && (e.inputState.compositionFirstChange ?? (e.inputState.compositionFirstChange = !0), e.inputState.composing < 0)) {
		let { main: t } = e.state.selection;
		!t.empty && e.lineBlockAt(t.from).from != e.lineBlockAt(t.to).from && !e.state.readOnly && e.dispatch({
			changes: e.state.selection.ranges.filter((e) => !e.empty).map((e) => ({
				from: e.from,
				to: e.to
			})),
			userEvent: "input"
		}), e.inputState.composing = 0;
	}
}, jo.compositionend = (e) => {
	e.observer.editContext || (e.inputState.composing = -1, e.inputState.compositionEndedAt = Date.now(), e.inputState.compositionPendingKey = !0, e.inputState.compositionPendingChange = e.observer.pendingRecords().length > 0, e.inputState.compositionFirstChange = null, B.chrome && B.android ? e.observer.flushSoon() : e.inputState.compositionPendingChange ? Promise.resolve().then(() => e.observer.flush()) : setTimeout(() => {
		e.inputState.composing < 0 && e.docView.hasComposition && e.update([]);
	}, 50));
}, jo.contextmenu = (e) => {
	e.inputState.lastContextMenu = Date.now();
}, Ao.beforeinput = (e, t) => {
	if ((t.inputType == "insertText" || t.inputType == "insertCompositionText") && (e.inputState.insertingText = t.data, e.inputState.insertingTextAt = Date.now()), t.inputType == "insertReplacementText" && e.observer.editContext) {
		let n = t.dataTransfer?.getData("text/plain"), r = t.getTargetRanges();
		if (n && r.length) {
			let t = r[0];
			return co(e, {
				from: e.posAtDOM(t.startContainer, t.startOffset),
				to: e.posAtDOM(t.endContainer, t.endOffset),
				insert: e.state.toText(n)
			}, null), !0;
		}
	}
	let n;
	if (B.chrome && B.android && (n = yo.find((e) => e.inputType == t.inputType)) && (e.observer.delayAndroidKey(n.key, n.keyCode), n.key == "Backspace" || n.key == "Delete")) {
		let t = window.visualViewport?.height || 0;
		setTimeout(() => {
			(window.visualViewport?.height || 0) > t + 10 && e.hasFocus && (e.contentDOM.blur(), e.focus());
		}, 100);
	}
	return B.ios && t.inputType == "deleteContentForward" && e.observer.flushSoon(), B.safari && t.inputType == "insertText" && e.inputState.composing >= 0 && setTimeout(() => jo.compositionend(e, t), 20), !1;
};
var Zo = /*@__PURE__*/ new Set();
function Qo(e) {
	Zo.has(e) || (Zo.add(e), e.addEventListener("copy", () => {}), e.addEventListener("cut", () => {}));
}
var $o = [
	"pre-wrap",
	"normal",
	"pre-line",
	"break-spaces"
], es = !1;
function ts() {
	es = !1;
}
var ns = class {
	constructor(e) {
		this.lineWrapping = e, this.doc = j.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30;
	}
	heightForGap(e, t) {
		let n = this.doc.lineAt(t).number - this.doc.lineAt(e).number + 1;
		return this.lineWrapping && (n += Math.max(0, Math.ceil((t - e - n * this.lineLength * .5) / this.lineLength))), this.lineHeight * n;
	}
	heightForLine(e) {
		return this.lineWrapping ? (1 + Math.max(0, Math.ceil((e - this.lineLength) / Math.max(1, this.lineLength - 5)))) * this.lineHeight : this.lineHeight;
	}
	setDoc(e) {
		return this.doc = e, this;
	}
	mustRefreshForWrapping(e) {
		return $o.indexOf(e) > -1 != this.lineWrapping;
	}
	mustRefreshForHeights(e) {
		let t = !1;
		for (let n = 0; n < e.length; n++) {
			let r = e[n];
			r < 0 ? n++ : this.heightSamples[Math.floor(r * 10)] || (t = !0, this.heightSamples[Math.floor(r * 10)] = !0);
		}
		return t;
	}
	refresh(e, t, n, r, i, a) {
		let o = $o.indexOf(e) > -1, s = Math.abs(t - this.lineHeight) > .3 || this.lineWrapping != o;
		if (this.lineWrapping = o, this.lineHeight = t, this.charWidth = n, this.textHeight = r, this.lineLength = i, s) {
			this.heightSamples = {};
			for (let e = 0; e < a.length; e++) {
				let t = a[e];
				t < 0 ? e++ : this.heightSamples[Math.floor(t * 10)] = !0;
			}
		}
		return s;
	}
}, rs = class {
	constructor(e, t) {
		this.from = e, this.heights = t, this.index = 0;
	}
	get more() {
		return this.index < this.heights.length;
	}
}, is = class e {
	constructor(e, t, n, r, i) {
		this.from = e, this.length = t, this.top = n, this.height = r, this._content = i;
	}
	get type() {
		return typeof this._content == "number" ? _r.Text : Array.isArray(this._content) ? this._content : this._content.type;
	}
	get to() {
		return this.from + this.length;
	}
	get bottom() {
		return this.top + this.height;
	}
	get widget() {
		return this._content instanceof br ? this._content.widget : null;
	}
	get widgetLineBreaks() {
		return typeof this._content == "number" ? this._content : 0;
	}
	join(t) {
		let n = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(t._content) ? t._content : [t]);
		return new e(this.from, this.length + t.length, this.top, this.height + t.height, n);
	}
}, q = /*@__PURE__*/ (function(e) {
	return e[e.ByPos = 0] = "ByPos", e[e.ByHeight = 1] = "ByHeight", e[e.ByPosNoHeight = 2] = "ByPosNoHeight", e;
})(q ||= {}), as = .001, os = class e {
	constructor(e, t, n = 2) {
		this.length = e, this.height = t, this.flags = n;
	}
	get outdated() {
		return (this.flags & 2) > 0;
	}
	set outdated(e) {
		this.flags = (e ? 2 : 0) | this.flags & -3;
	}
	setHeight(e) {
		this.height != e && (Math.abs(this.height - e) > as && (es = !0), this.height = e);
	}
	replace(t, n, r) {
		return e.of(r);
	}
	decomposeLeft(e, t) {
		t.push(this);
	}
	decomposeRight(e, t) {
		t.push(this);
	}
	applyChanges(e, t, n, r) {
		let i = this, a = n.doc;
		for (let o = r.length - 1; o >= 0; o--) {
			let { fromA: s, toA: c, fromB: l, toB: u } = r[o], d = i.lineAt(s, q.ByPosNoHeight, n.setDoc(t), 0, 0), f = d.to >= c ? d : i.lineAt(c, q.ByPosNoHeight, n, 0, 0);
			for (u += f.to - c, c = f.to; o > 0 && d.from <= r[o - 1].toA;) s = r[o - 1].fromA, l = r[o - 1].fromB, o--, s < d.from && (d = i.lineAt(s, q.ByPosNoHeight, n, 0, 0));
			l += d.from - s, s = d.from;
			let p = hs.build(n.setDoc(a), e, l, u);
			i = ss(i, i.replace(s, c, p));
		}
		return i.updateHeight(n, 0);
	}
	static empty() {
		return new us(0, 0, 0);
	}
	static of(t) {
		if (t.length == 1) return t[0];
		let n = 0, r = t.length, i = 0, a = 0;
		for (;;) if (n == r) {
			if (i > a * 2) {
				let e = t[n - 1];
				e.break ? t.splice(--n, 1, e.left, null, e.right) : t.splice(--n, 1, e.left, e.right), r += 1 + e.break, i -= e.size;
			} else if (a > i * 2) {
				let e = t[r];
				e.break ? t.splice(r, 1, e.left, null, e.right) : t.splice(r, 1, e.left, e.right), r += 2 + e.break, a -= e.size;
			} else break;
		} else if (i < a) {
			let e = t[n++];
			e && (i += e.size);
		} else {
			let e = t[--r];
			e && (a += e.size);
		}
		let o = !1;
		return t[n - 1] == null ? (o = !0, n--) : t[n] ?? (o = !0, r++), new fs(e.of(t.slice(0, n)), o, e.of(t.slice(r)));
	}
};
function ss(e, t) {
	return e == t ? e : (e.constructor != t.constructor && (es = !0), t);
}
os.prototype.size = 1;
var cs = /*@__PURE__*/ V.replace({}), ls = class extends os {
	constructor(e, t, n) {
		super(e, t), this.deco = n, this.spaceAbove = 0;
	}
	mainBlock(e, t) {
		return new is(t, this.length, e + this.spaceAbove, this.height - this.spaceAbove, this.deco || 0);
	}
	blockAt(e, t, n, r) {
		return this.spaceAbove && e < n + this.spaceAbove ? new is(r, 0, n, this.spaceAbove, cs) : this.mainBlock(n, r);
	}
	lineAt(e, t, n, r, i) {
		let a = this.mainBlock(r, i);
		return this.spaceAbove ? this.blockAt(0, n, r, i).join(a) : a;
	}
	forEachLine(e, t, n, r, i, a) {
		e <= i + this.length && t >= i && a(this.lineAt(0, q.ByPos, n, r, i));
	}
	setMeasuredHeight(e) {
		let t = e.heights[e.index++];
		t < 0 ? (this.spaceAbove = -t, t = e.heights[e.index++]) : this.spaceAbove = 0, this.setHeight(t);
	}
	updateHeight(e, t = 0, n = !1, r) {
		return r && r.from <= t && r.more && this.setMeasuredHeight(r), this.outdated = !1, this;
	}
	toString() {
		return `block(${this.length})`;
	}
}, us = class e extends ls {
	constructor(e, t, n) {
		super(e, t, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0, this.spaceAbove = n;
	}
	mainBlock(e, t) {
		return new is(t, this.length, e + this.spaceAbove, this.height - this.spaceAbove, this.breaks);
	}
	replace(t, n, r) {
		let i = r[0];
		return r.length == 1 && (i instanceof e || i instanceof ds && i.flags & 4) && Math.abs(this.length - i.length) < 10 ? (i instanceof ds ? i = new e(i.length, this.height, this.spaceAbove) : i.height = this.height, this.outdated || (i.outdated = !1), i) : os.of(r);
	}
	updateHeight(e, t = 0, n = !1, r) {
		return r && r.from <= t && r.more ? this.setMeasuredHeight(r) : (n || this.outdated) && (this.spaceAbove = 0, this.setHeight(Math.max(this.widgetHeight, e.heightForLine(this.length - this.collapsed)) + this.breaks * e.lineHeight)), this.outdated = !1, this;
	}
	toString() {
		return `line(${this.length}${this.collapsed ? -this.collapsed : ""}${this.widgetHeight ? ":" + this.widgetHeight : ""})`;
	}
}, ds = class e extends os {
	constructor(e) {
		super(e, 0);
	}
	heightMetrics(e, t) {
		let n = e.doc.lineAt(t).number, r = e.doc.lineAt(t + this.length).number, i = r - n + 1, a, o = 0;
		if (e.lineWrapping) {
			let t = Math.min(this.height, e.lineHeight * i);
			a = t / i, this.length > i + 1 && (o = (this.height - t) / (this.length - i - 1));
		} else a = this.height / i;
		return {
			firstLine: n,
			lastLine: r,
			perLine: a,
			perChar: o
		};
	}
	blockAt(e, t, n, r) {
		let { firstLine: i, lastLine: a, perLine: o, perChar: s } = this.heightMetrics(t, r);
		if (t.lineWrapping) {
			let i = r + (e < t.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (e - n) / this.height)) * this.length)), a = t.doc.lineAt(i), c = o + a.length * s, l = Math.max(n, e - c / 2);
			return new is(a.from, a.length, l, c, 0);
		}
		{
			let r = Math.max(0, Math.min(a - i, Math.floor((e - n) / o))), { from: s, length: c } = t.doc.line(i + r);
			return new is(s, c, n + o * r, o, 0);
		}
	}
	lineAt(e, t, n, r, i) {
		if (t == q.ByHeight) return this.blockAt(e, n, r, i);
		if (t == q.ByPosNoHeight) {
			let { from: t, to: r } = n.doc.lineAt(e);
			return new is(t, r - t, 0, 0, 0);
		}
		let { firstLine: a, perLine: o, perChar: s } = this.heightMetrics(n, i), c = n.doc.lineAt(e), l = o + c.length * s, u = c.number - a, d = r + o * u + s * (c.from - i - u);
		return new is(c.from, c.length, Math.max(r, Math.min(d, r + this.height - l)), l, 0);
	}
	forEachLine(e, t, n, r, i, a) {
		e = Math.max(e, i), t = Math.min(t, i + this.length);
		let { firstLine: o, perLine: s, perChar: c } = this.heightMetrics(n, i);
		for (let l = e, u = r; l <= t;) {
			let t = n.doc.lineAt(l);
			if (l == e) {
				let n = t.number - o;
				u += s * n + c * (e - i - n);
			}
			let r = s + c * t.length;
			a(new is(t.from, t.length, u, r, 0)), u += r, l = t.to + 1;
		}
	}
	replace(t, n, r) {
		let i = this.length - n;
		if (i > 0) {
			let t = r[r.length - 1];
			t instanceof e ? r[r.length - 1] = new e(t.length + i) : r.push(null, new e(i - 1));
		}
		if (t > 0) {
			let n = r[0];
			n instanceof e ? r[0] = new e(t + n.length) : r.unshift(new e(t - 1), null);
		}
		return os.of(r);
	}
	decomposeLeft(t, n) {
		n.push(new e(t - 1), null);
	}
	decomposeRight(t, n) {
		n.push(null, new e(this.length - t - 1));
	}
	updateHeight(t, n = 0, r = !1, i) {
		let a = n + this.length;
		if (i && i.from <= n + this.length && i.more) {
			let r = [], o = Math.max(n, i.from), s = -1;
			for (i.from > n && r.push(new e(i.from - n - 1).updateHeight(t, n)); o <= a && i.more;) {
				let e = t.doc.lineAt(o).length;
				r.length && r.push(null);
				let n = i.heights[i.index++], a = 0;
				n < 0 && (a = -n, n = i.heights[i.index++]), s == -1 ? s = n : Math.abs(n - s) >= as && (s = -2);
				let c = new us(e, n, a);
				c.outdated = !1, r.push(c), o += e + 1;
			}
			o <= a && r.push(null, new e(a - o).updateHeight(t, o));
			let c = os.of(r);
			return (s < 0 || Math.abs(c.height - this.height) >= as || Math.abs(s - this.heightMetrics(t, n).perLine) >= as) && (es = !0), ss(this, c);
		}
		return (r || this.outdated) && (this.setHeight(t.heightForGap(n, n + this.length)), this.outdated = !1), this;
	}
	toString() {
		return `gap(${this.length})`;
	}
}, fs = class extends os {
	constructor(e, t, n) {
		super(e.length + +!!t + n.length, e.height + n.height, +!!t | (e.outdated || n.outdated ? 2 : 0)), this.left = e, this.right = n, this.size = e.size + n.size;
	}
	get break() {
		return this.flags & 1;
	}
	blockAt(e, t, n, r) {
		let i = n + this.left.height;
		return e < i ? this.left.blockAt(e, t, n, r) : this.right.blockAt(e, t, i, r + this.left.length + this.break);
	}
	lineAt(e, t, n, r, i) {
		let a = r + this.left.height, o = i + this.left.length + this.break, s = t == q.ByHeight ? e < a : e < o, c = s ? this.left.lineAt(e, t, n, r, i) : this.right.lineAt(e, t, n, a, o);
		if (this.break || (s ? c.to < o : c.from > o)) return c;
		let l = t == q.ByPosNoHeight ? q.ByPosNoHeight : q.ByPos;
		return s ? c.join(this.right.lineAt(o, l, n, a, o)) : this.left.lineAt(o, l, n, r, i).join(c);
	}
	forEachLine(e, t, n, r, i, a) {
		let o = r + this.left.height, s = i + this.left.length + this.break;
		if (this.break) e < s && this.left.forEachLine(e, t, n, r, i, a), t >= s && this.right.forEachLine(e, t, n, o, s, a);
		else {
			let c = this.lineAt(s, q.ByPos, n, r, i);
			e < c.from && this.left.forEachLine(e, Math.min(t, c.from - 1), n, r, i, a), c.to >= e && c.from <= t && a(c), t > c.to && this.right.forEachLine(Math.max(e, c.to + 1), t, n, o, s, a);
		}
	}
	replace(e, t, n) {
		let r = this.left.length + this.break;
		if (t < r) return this.balanced(this.left.replace(e, t, n), this.right);
		if (e > this.left.length) return this.balanced(this.left, this.right.replace(e - r, t - r, n));
		let i = [];
		e > 0 && this.decomposeLeft(e, i);
		let a = i.length;
		for (let e of n) i.push(e);
		if (e > 0 && ps(i, a - 1), t < this.length) {
			let e = i.length;
			this.decomposeRight(t, i), ps(i, e);
		}
		return os.of(i);
	}
	decomposeLeft(e, t) {
		let n = this.left.length;
		if (e <= n) return this.left.decomposeLeft(e, t);
		t.push(this.left), this.break && (n++, e >= n && t.push(null)), e > n && this.right.decomposeLeft(e - n, t);
	}
	decomposeRight(e, t) {
		let n = this.left.length, r = n + this.break;
		if (e >= r) return this.right.decomposeRight(e - r, t);
		e < n && this.left.decomposeRight(e, t), this.break && e < r && t.push(null), t.push(this.right);
	}
	balanced(e, t) {
		return e.size > 2 * t.size || t.size > 2 * e.size ? os.of(this.break ? [
			e,
			null,
			t
		] : [e, t]) : (this.left = ss(this.left, e), this.right = ss(this.right, t), this.setHeight(e.height + t.height), this.outdated = e.outdated || t.outdated, this.size = e.size + t.size, this.length = e.length + this.break + t.length, this);
	}
	updateHeight(e, t = 0, n = !1, r) {
		let { left: i, right: a } = this, o = t + i.length + this.break, s = null;
		return r && r.from <= t + i.length && r.more ? s = i = i.updateHeight(e, t, n, r) : i.updateHeight(e, t, n), r && r.from <= o + a.length && r.more ? s = a = a.updateHeight(e, o, n, r) : a.updateHeight(e, o, n), s ? this.balanced(i, a) : (this.height = this.left.height + this.right.height, this.outdated = !1, this);
	}
	toString() {
		return this.left + (this.break ? " " : "-") + this.right;
	}
};
function ps(e, t) {
	let n, r;
	e[t] == null && (n = e[t - 1]) instanceof ds && (r = e[t + 1]) instanceof ds && e.splice(t - 1, 3, new ds(n.length + 1 + r.length));
}
var ms = 5, hs = class e {
	constructor(e, t) {
		this.pos = e, this.oracle = t, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = e;
	}
	get isCovered() {
		return this.covering && this.nodes[this.nodes.length - 1] == this.covering;
	}
	span(e, t) {
		if (this.lineStart > -1) {
			let e = Math.min(t, this.lineEnd), n = this.nodes[this.nodes.length - 1];
			n instanceof us ? n.length += e - this.pos : (e > this.pos || !this.isCovered) && this.nodes.push(new us(e - this.pos, -1, 0)), this.writtenTo = e, t > e && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1);
		}
		this.pos = t;
	}
	point(e, t, n) {
		if (e < t || n.heightRelevant) {
			let r = n.widget ? n.widget.estimatedHeight : 0, i = n.widget ? n.widget.lineBreaks : 0;
			r < 0 && (r = this.oracle.lineHeight);
			let a = t - e;
			n.block ? this.addBlock(new ls(a, r, n)) : (a || i || r >= ms) && this.addLineDeco(r, i, a);
		} else t > e && this.span(e, t);
		this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to);
	}
	enterLine() {
		if (this.lineStart > -1) return;
		let { from: e, to: t } = this.oracle.doc.lineAt(this.pos);
		this.lineStart = e, this.lineEnd = t, this.writtenTo < e && ((this.writtenTo < e - 1 || this.nodes[this.nodes.length - 1] == null) && this.nodes.push(this.blankContent(this.writtenTo, e - 1)), this.nodes.push(null)), this.pos > e && this.nodes.push(new us(this.pos - e, -1, 0)), this.writtenTo = this.pos;
	}
	blankContent(e, t) {
		let n = new ds(t - e);
		return this.oracle.doc.lineAt(e).to == t && (n.flags |= 4), n;
	}
	ensureLine() {
		this.enterLine();
		let e = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
		if (e instanceof us) return e;
		let t = new us(0, -1, 0);
		return this.nodes.push(t), t;
	}
	addBlock(e) {
		this.enterLine();
		let t = e.deco;
		t && t.startSide > 0 && !this.isCovered && this.ensureLine(), this.nodes.push(e), this.writtenTo = this.pos += e.length, t && t.endSide > 0 && (this.covering = e);
	}
	addLineDeco(e, t, n) {
		let r = this.ensureLine();
		r.length += n, r.collapsed += n, r.widgetHeight = Math.max(r.widgetHeight, e), r.breaks += t, this.writtenTo = this.pos += n;
	}
	finish(e) {
		let t = this.nodes.length == 0 ? null : this.nodes[this.nodes.length - 1];
		this.lineStart > -1 && !(t instanceof us) && !this.isCovered ? this.nodes.push(new us(0, -1, 0)) : (this.writtenTo < this.pos || t == null) && this.nodes.push(this.blankContent(this.writtenTo, this.pos));
		let n = e;
		for (let e of this.nodes) e instanceof us && e.updateHeight(this.oracle, n), n += e ? e.length : 1;
		return this.nodes;
	}
	static build(t, n, r, i) {
		let a = new e(r, t);
		return R.spans(n, r, i, a, 0), a.finish(r);
	}
};
function gs(e, t, n) {
	let r = new _s();
	return R.compare(e, t, n, r, 0), r.changes;
}
var _s = class {
	constructor() {
		this.changes = [];
	}
	compareRange() {}
	comparePoint(e, t, n, r) {
		(e < t || n && n.heightRelevant || r && r.heightRelevant) && Cr(e, t, this.changes, 5);
	}
};
function vs(e, t) {
	let n = e.getBoundingClientRect(), r = e.ownerDocument, i = r.defaultView || window, a = Math.max(0, n.left), o = Math.min(i.innerWidth, n.right), s = Math.max(0, n.top), c = Math.min(i.innerHeight, n.bottom);
	for (let t = e.parentNode; t && t != r.body;) if (H(t)) {
		let n = window.getComputedStyle(t);
		if ((t.scrollHeight > t.clientHeight || t.scrollWidth > t.clientWidth) && n.overflow != "visible") {
			let n = t.getBoundingClientRect();
			a = Math.max(a, n.left), o = Math.min(o, n.right), s = Math.max(s, n.top), c = Math.min(t == e.parentNode ? i.innerHeight : c, n.bottom);
		}
		t = n.position == "absolute" || n.position == "fixed" ? t.offsetParent : t.parentNode;
	} else if (t.nodeType == 11) t = t.host;
	else break;
	return {
		left: a - n.left,
		right: Math.max(a, o) - n.left,
		top: s - (n.top + t),
		bottom: Math.max(s, c) - (n.top + t)
	};
}
function ys(e) {
	let t = e.getBoundingClientRect(), n = e.ownerDocument.defaultView || window;
	return t.left < n.innerWidth && t.right > 0 && t.top < n.innerHeight && t.bottom > 0;
}
function bs(e, t) {
	let n = e.getBoundingClientRect();
	return {
		left: 0,
		right: n.right - n.left,
		top: t,
		bottom: n.bottom - (n.top + t)
	};
}
var xs = class {
	constructor(e, t, n, r) {
		this.from = e, this.to = t, this.size = n, this.displaySize = r;
	}
	static same(e, t) {
		if (e.length != t.length) return !1;
		for (let n = 0; n < e.length; n++) {
			let r = e[n], i = t[n];
			if (r.from != i.from || r.to != i.to || r.size != i.size) return !1;
		}
		return !0;
	}
	draw(e, t) {
		return V.replace({ widget: new Ss(this.displaySize * (t ? e.scaleY : e.scaleX), t) }).range(this.from, this.to);
	}
}, Ss = class extends gr {
	constructor(e, t) {
		super(), this.size = e, this.vertical = t;
	}
	eq(e) {
		return e.size == this.size && e.vertical == this.vertical;
	}
	toDOM() {
		let e = document.createElement("div");
		return this.vertical ? e.style.height = this.size + "px" : (e.style.width = this.size + "px", e.style.height = "2px", e.style.display = "inline-block"), e;
	}
	get estimatedHeight() {
		return this.vertical ? this.size : -1;
	}
}, Cs = class {
	constructor(e, t) {
		this.view = e, this.state = t, this.pixelViewport = {
			left: 0,
			right: window.innerWidth,
			top: 0,
			bottom: 0
		}, this.inView = !0, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scaleX = 1, this.scaleY = 1, this.scrollOffset = 0, this.scrolledToBottom = !1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = ks, this.scrollTarget = null, this.printing = !1, this.mustMeasureContent = !0, this.defaultTextDirection = U.LTR, this.visibleRanges = [], this.mustEnforceCursorAssoc = !1;
		let n = t.facet(Hi).some((e) => typeof e != "function" && e.class == "cm-lineWrapping");
		this.heightOracle = new ns(n), this.stateDeco = As(t), this.heightMap = os.empty().applyChanges(this.stateDeco, j.empty, this.heightOracle.setDoc(t.doc), [new $i(0, 0, 0, t.doc.length)]);
		for (let e = 0; e < 2 && (this.viewport = this.getViewport(0, null), this.updateForViewport()); e++);
		this.updateViewportLines(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = V.set(this.lineGaps.map((e) => e.draw(this, !1))), this.scrollParent = e.scrollDOM, this.computeVisibleRanges();
	}
	updateForViewport() {
		let e = [this.viewport], { main: t } = this.state.selection;
		for (let n = 0; n <= 1; n++) {
			let r = n ? t.head : t.anchor;
			if (!e.some(({ from: e, to: t }) => r >= e && r <= t)) {
				let { from: t, to: n } = this.lineBlockAt(r);
				e.push(new ws(t, n));
			}
		}
		return this.viewports = e.sort((e, t) => e.from - t.from), this.updateScaler();
	}
	updateScaler() {
		let e = this.scaler;
		return this.scaler = this.heightMap.height <= 7e6 ? ks : js.get(this.heightOracle, this.heightMap, this.viewports), e.eq(this.scaler) ? 0 : 2;
	}
	updateViewportLines() {
		this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (e) => {
			this.viewportLines.push(Ms(e, this.scaler));
		});
	}
	update(e, t = null) {
		this.state = e.state;
		let n = this.stateDeco;
		this.stateDeco = As(this.state);
		let r = e.changedRanges, i = $i.extendWithRanges(r, gs(n, this.stateDeco, e ? e.changes : bt.empty(this.state.doc.length))), a = this.heightMap.height, o = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollOffset);
		ts(), this.heightMap = this.heightMap.applyChanges(this.stateDeco, e.startState.doc, this.heightOracle.setDoc(this.state.doc), i), (this.heightMap.height != a || es) && (e.flags |= 2), o ? (this.scrollAnchorPos = e.changes.mapPos(o.from, -1), this.scrollAnchorHeight = o.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = a);
		let s = i.length ? this.mapViewport(this.viewport, e.changes) : this.viewport;
		(t && (t.range.head < s.from || t.range.head > s.to) || !this.viewportIsAppropriate(s)) && (s = this.getViewport(0, t));
		let c = s.from != this.viewport.from || s.to != this.viewport.to;
		this.viewport = s, e.flags |= this.updateForViewport(), (c || !e.changes.empty || e.flags & 2) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, e.changes))), e.flags |= this.computeVisibleRanges(e.changes), t && (this.scrollTarget = t), !this.mustEnforceCursorAssoc && (e.selectionSet || e.focusChanged) && e.view.lineWrapping && e.state.selection.main.empty && e.state.selection.main.assoc && !e.state.facet(ji) && (this.mustEnforceCursorAssoc = !0);
	}
	measure() {
		let { view: e } = this, t = e.contentDOM, n = window.getComputedStyle(t), r = this.heightOracle, i = n.whiteSpace;
		this.defaultTextDirection = n.direction == "rtl" ? U.RTL : U.LTR;
		let a = this.heightOracle.mustRefreshForWrapping(i) || this.mustMeasureContent === "refresh", o = t.getBoundingClientRect(), s = a || this.mustMeasureContent || this.contentDOMHeight != o.height;
		this.contentDOMHeight = o.height, this.mustMeasureContent = !1;
		let c = 0, l = 0;
		if (o.width && o.height) {
			let { scaleX: e, scaleY: n } = Lr(t, o);
			(e > .005 && Math.abs(this.scaleX - e) > .005 || n > .005 && Math.abs(this.scaleY - n) > .005) && (this.scaleX = e, this.scaleY = n, c |= 16, a = s = !0);
		}
		let u = (parseInt(n.paddingTop) || 0) * this.scaleY, d = (parseInt(n.paddingBottom) || 0) * this.scaleY;
		(this.paddingTop != u || this.paddingBottom != d) && (this.paddingTop = u, this.paddingBottom = d, c |= 18), this.editorWidth != e.scrollDOM.clientWidth && (r.lineWrapping && (s = !0), this.editorWidth = e.scrollDOM.clientWidth, c |= 16);
		let f = zr(this.view.contentDOM, !1).y;
		f != this.scrollParent && (this.scrollParent = f, this.scrollAnchorHeight = -1, this.scrollOffset = 0);
		let p = this.getScrollOffset();
		this.scrollOffset != p && (this.scrollAnchorHeight = -1, this.scrollOffset = p), this.scrolledToBottom = Xr(this.scrollParent || e.win);
		let m = (this.printing ? bs : vs)(t, this.paddingTop), h = m.top - this.pixelViewport.top, g = m.bottom - this.pixelViewport.bottom;
		this.pixelViewport = m;
		let _ = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
		if (_ != this.inView && (this.inView = _, _ && (s = !0)), !this.inView && !this.scrollTarget && !ys(e.dom)) return 0;
		let v = o.width;
		if ((this.contentDOMWidth != v || this.editorHeight != e.scrollDOM.clientHeight) && (this.contentDOMWidth = o.width, this.editorHeight = e.scrollDOM.clientHeight, c |= 16), s) {
			let t = e.docView.measureVisibleLineHeights(this.viewport);
			if (r.mustRefreshForHeights(t) && (a = !0), a || r.lineWrapping && Math.abs(v - this.contentDOMWidth) > r.charWidth) {
				let { lineHeight: n, charWidth: o, textHeight: s } = e.docView.measureTextSize();
				a = n > 0 && r.refresh(i, n, o, s, Math.max(5, v / o), t), a && (e.docView.minWidth = 0, c |= 16);
			}
			h > 0 && g > 0 ? l = Math.max(h, g) : h < 0 && g < 0 && (l = Math.min(h, g)), ts();
			for (let n of this.viewports) {
				let i = n.from == this.viewport.from ? t : e.docView.measureVisibleLineHeights(n);
				this.heightMap = (a ? os.empty().applyChanges(this.stateDeco, j.empty, this.heightOracle, [new $i(0, 0, 0, e.state.doc.length)]) : this.heightMap).updateHeight(r, 0, a, new rs(n.from, i));
			}
			es && (c |= 2);
		}
		let y = !this.viewportIsAppropriate(this.viewport, l) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
		return y && (c & 2 && (c |= this.updateScaler()), this.viewport = this.getViewport(l, this.scrollTarget), c |= this.updateForViewport()), (c & 2 || y) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(a ? [] : this.lineGaps, e)), c |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = !1, e.docView.enforceCursorAssoc()), c;
	}
	get visibleTop() {
		return this.scaler.fromDOM(this.pixelViewport.top);
	}
	get visibleBottom() {
		return this.scaler.fromDOM(this.pixelViewport.bottom);
	}
	getViewport(e, t) {
		let n = .5 - Math.max(-.5, Math.min(.5, e / 1e3 / 2)), r = this.heightMap, i = this.heightOracle, { visibleTop: a, visibleBottom: o } = this, s = new ws(r.lineAt(a - n * 1e3, q.ByHeight, i, 0, 0).from, r.lineAt(o + (1 - n) * 1e3, q.ByHeight, i, 0, 0).to);
		if (t) {
			let { head: e } = t.range;
			if (e < s.from || e > s.to) {
				let n = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top), a = r.lineAt(e, q.ByPos, i, 0, 0), o;
				o = t.y == "center" ? (a.top + a.bottom) / 2 - n / 2 : t.y == "start" || t.y == "nearest" && e < s.from ? a.top : a.bottom - n, s = new ws(r.lineAt(o - 500, q.ByHeight, i, 0, 0).from, r.lineAt(o + n + 500, q.ByHeight, i, 0, 0).to);
			}
		}
		return s;
	}
	mapViewport(e, t) {
		let n = t.mapPos(e.from, -1), r = t.mapPos(e.to, 1);
		return new ws(this.heightMap.lineAt(n, q.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(r, q.ByPos, this.heightOracle, 0, 0).to);
	}
	viewportIsAppropriate({ from: e, to: t }, n = 0) {
		if (!this.inView) return !0;
		let { top: r } = this.heightMap.lineAt(e, q.ByPos, this.heightOracle, 0, 0), { bottom: i } = this.heightMap.lineAt(t, q.ByPos, this.heightOracle, 0, 0), { visibleTop: a, visibleBottom: o } = this;
		return (e == 0 || r <= a - Math.max(10, Math.min(-n, 250))) && (t == this.state.doc.length || i >= o + Math.max(10, Math.min(n, 250))) && r > a - 2e3 && i < o + 2e3;
	}
	mapLineGaps(e, t) {
		if (!e.length || t.empty) return e;
		let n = [];
		for (let r of e) t.touchesRange(r.from, r.to) || n.push(new xs(t.mapPos(r.from), t.mapPos(r.to), r.size, r.displaySize));
		return n;
	}
	ensureLineGaps(e, t) {
		let n = this.heightOracle.lineWrapping, r = n ? 1e4 : 2e3, i = r >> 1, a = r << 1;
		if (this.defaultTextDirection != U.LTR && !n) return [];
		let o = [], s = (r, a, c, l) => {
			if (a - r < i) return;
			let u = this.state.selection.main, d = [u.from];
			u.empty || d.push(u.to);
			for (let e of d) if (e > r && e < a) {
				s(r, e - 10, c, l), s(e + 10, a, c, l);
				return;
			}
			let f = Os(e, (e) => e.from >= c.from && e.to <= c.to && Math.abs(e.from - r) < i && Math.abs(e.to - a) < i && !d.some((t) => e.from < t && e.to > t));
			if (!f) {
				if (a < c.to && t && n && t.visibleRanges.some((e) => e.from <= a && e.to >= a)) {
					let e = t.moveToLineBoundary(N.cursor(a), !1, !0).head;
					e > r && (a = e);
				}
				let e = this.gapSize(c, r, a, l);
				f = new xs(r, a, e, n || e < 2e6 ? e : 2e6);
			}
			o.push(f);
		}, c = (t) => {
			if (t.length < a || t.type != _r.Text) return;
			let i = Ts(t.from, t.to, this.stateDeco);
			if (i.total < a) return;
			let o = this.scrollTarget ? this.scrollTarget.range.head : null, c, l;
			if (n) {
				let e = r / this.heightOracle.lineLength * this.heightOracle.lineHeight, n, a;
				if (o != null) {
					let r = Ds(i, o), s = ((this.visibleBottom - this.visibleTop) / 2 + e) / t.height;
					n = r - s, a = r + s;
				} else n = (this.visibleTop - t.top - e) / t.height, a = (this.visibleBottom - t.top + e) / t.height;
				c = Es(i, n), l = Es(i, a);
			} else {
				let n = i.total * this.heightOracle.charWidth, a = r * this.heightOracle.charWidth, s = 0;
				if (n > 2e6) for (let n of e) n.from >= t.from && n.from < t.to && n.size != n.displaySize && n.from * this.heightOracle.charWidth + s < this.pixelViewport.left && (s = n.size - n.displaySize);
				let u = this.pixelViewport.left + s, d = this.pixelViewport.right + s, f, p;
				if (o != null) {
					let e = Ds(i, o), t = ((d - u) / 2 + a) / n;
					f = e - t, p = e + t;
				} else f = (u - a) / n, p = (d + a) / n;
				c = Es(i, f), l = Es(i, p);
			}
			c > t.from && s(t.from, c, t, i), l < t.to && s(l, t.to, t, i);
		};
		for (let e of this.viewportLines) Array.isArray(e.type) ? e.type.forEach(c) : c(e);
		return o;
	}
	gapSize(e, t, n, r) {
		let i = Ds(r, n) - Ds(r, t);
		return this.heightOracle.lineWrapping ? e.height * i : r.total * this.heightOracle.charWidth * i;
	}
	updateLineGaps(e) {
		xs.same(e, this.lineGaps) || (this.lineGaps = e, this.lineGapDeco = V.set(e.map((e) => e.draw(this, this.heightOracle.lineWrapping))));
	}
	computeVisibleRanges(e) {
		let t = this.stateDeco;
		this.lineGaps.length && (t = t.concat(this.lineGapDeco));
		let n = [];
		R.spans(t, this.viewport.from, this.viewport.to, {
			span(e, t) {
				n.push({
					from: e,
					to: t
				});
			},
			point() {}
		}, 20);
		let r = 0;
		if (n.length != this.visibleRanges.length) r = 12;
		else for (let t = 0; t < n.length && !(r & 8); t++) {
			let i = this.visibleRanges[t], a = n[t];
			(i.from != a.from || i.to != a.to) && (r |= 4, e && e.mapPos(i.from, -1) == a.from && e.mapPos(i.to, 1) == a.to || (r |= 8));
		}
		return this.visibleRanges = n, r;
	}
	lineBlockAt(e) {
		return e >= this.viewport.from && e <= this.viewport.to && this.viewportLines.find((t) => t.from <= e && t.to >= e) || Ms(this.heightMap.lineAt(e, q.ByPos, this.heightOracle, 0, 0), this.scaler);
	}
	lineBlockAtHeight(e) {
		return e >= this.viewportLines[0].top && e <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find((t) => t.top <= e && t.bottom >= e) || Ms(this.heightMap.lineAt(this.scaler.fromDOM(e), q.ByHeight, this.heightOracle, 0, 0), this.scaler);
	}
	getScrollOffset() {
		return this.scrollParent == this.view.scrollDOM ? this.scrollParent.scrollTop * this.scaleY : (this.scrollParent ? this.scrollParent.getBoundingClientRect().top : 0) - this.view.contentDOM.getBoundingClientRect().top;
	}
	scrollAnchorAt(e) {
		let t = this.lineBlockAtHeight(e + 12 - this.paddingTop);
		return t.from >= this.viewport.from || this.viewportLines[0].top - e > 200 ? t : this.viewportLines[0];
	}
	elementAtHeight(e) {
		return Ms(this.heightMap.blockAt(this.scaler.fromDOM(e), this.heightOracle, 0, 0), this.scaler);
	}
	get docHeight() {
		return this.scaler.toDOM(this.heightMap.height);
	}
	get contentHeight() {
		return this.docHeight + this.paddingTop + this.paddingBottom;
	}
}, ws = class {
	constructor(e, t) {
		this.from = e, this.to = t;
	}
};
function Ts(e, t, n) {
	let r = [], i = e, a = 0;
	return R.spans(n, e, t, {
		span() {},
		point(e, t) {
			e > i && (r.push({
				from: i,
				to: e
			}), a += e - i), i = t;
		}
	}, 20), i < t && (r.push({
		from: i,
		to: t
	}), a += t - i), {
		total: a,
		ranges: r
	};
}
function Es({ total: e, ranges: t }, n) {
	if (n <= 0) return t[0].from;
	if (n >= 1) return t[t.length - 1].to;
	let r = Math.floor(e * n);
	for (let e = 0;; e++) {
		let { from: n, to: i } = t[e], a = i - n;
		if (r <= a) return n + r;
		r -= a;
	}
}
function Ds(e, t) {
	let n = 0;
	for (let { from: r, to: i } of e.ranges) {
		if (t <= i) {
			n += t - r;
			break;
		}
		n += i - r;
	}
	return n / e.total;
}
function Os(e, t) {
	for (let n of e) if (t(n)) return n;
}
var ks = {
	toDOM(e) {
		return e;
	},
	fromDOM(e) {
		return e;
	},
	scale: 1,
	eq(e) {
		return e == this;
	}
};
function As(e) {
	let t = e.facet(Ui).filter((e) => typeof e != "function"), n = e.facet(Gi).filter((e) => typeof e != "function");
	return n.length && t.push(R.join(n)), t;
}
var js = class e {
	constructor(e, t) {
		this.scale = e, this.viewports = t;
	}
	static get(t, n, r) {
		let i = 0, a = 0, o = 0, s = r.map(({ from: e, to: r }) => {
			let a = n.lineAt(e, q.ByPos, t, 0, 0).top, o = n.lineAt(r, q.ByPos, t, 0, 0).bottom;
			return i += o - a, {
				from: e,
				to: r,
				top: a,
				bottom: o,
				domTop: 0,
				domBottom: 0
			};
		});
		if (n.height - i < 10) return ks;
		let c = (7e6 - i) / (n.height - i);
		for (let e of s) e.domTop = o + (e.top - a) * c, o = e.domBottom = e.domTop + (e.bottom - e.top), a = e.bottom;
		return new e(c, s);
	}
	toDOM(e) {
		for (let t = 0, n = 0, r = 0;; t++) {
			let i = t < this.viewports.length ? this.viewports[t] : null;
			if (!i || e < i.top) return r + (e - n) * this.scale;
			if (e <= i.bottom) return i.domTop + (e - i.top);
			n = i.bottom, r = i.domBottom;
		}
	}
	fromDOM(e) {
		for (let t = 0, n = 0, r = 0;; t++) {
			let i = t < this.viewports.length ? this.viewports[t] : null;
			if (!i || e < i.domTop) return n + (e - r) / this.scale;
			if (e <= i.domBottom) return i.top + (e - i.domTop);
			n = i.bottom, r = i.domBottom;
		}
	}
	eq(t) {
		return t instanceof e && this.scale == t.scale && this.viewports.length == t.viewports.length && this.viewports.every((e, n) => e.from == t.viewports[n].from && e.to == t.viewports[n].to);
	}
};
function Ms(e, t) {
	if (t.scale == 1) return e;
	let n = t.toDOM(e.top), r = t.toDOM(e.bottom);
	return new is(e.from, e.length, n, r - n, Array.isArray(e._content) ? e._content.map((e) => Ms(e, t)) : e._content);
}
var Ns = /*@__PURE__*/ P.define({ combine: (e) => e.join(" ") }), Ps = /*@__PURE__*/ P.define({ combine: (e) => e.indexOf(!0) > -1 }), Fs = /*@__PURE__*/ Hn.newName(), Is = /*@__PURE__*/ Hn.newName(), Ls = /*@__PURE__*/ Hn.newName(), Rs = {
	"&light": "." + Is,
	"&dark": "." + Ls
};
function zs(e, t, n) {
	return new Hn(t, { finish(t) {
		return /&/.test(t) ? t.replace(/&\w*/, (t) => {
			if (t == "&") return e;
			if (!n || !n[t]) throw RangeError(`Unsupported selector: ${t}`);
			return n[t];
		}) : e + " " + t;
	} });
}
var Bs = /*@__PURE__*/ zs("." + Fs, {
	"&": {
		position: "relative !important",
		boxSizing: "border-box",
		"&.cm-focused": { outline: "1px dotted #212121" },
		display: "flex !important",
		flexDirection: "column"
	},
	".cm-scroller": {
		display: "flex !important",
		alignItems: "flex-start !important",
		fontFamily: "monospace",
		lineHeight: 1.4,
		height: "100%",
		overflowX: "auto",
		position: "relative",
		zIndex: 0,
		overflowAnchor: "none"
	},
	".cm-content": {
		margin: 0,
		flexGrow: 2,
		flexShrink: 0,
		display: "block",
		whiteSpace: "pre",
		wordWrap: "normal",
		boxSizing: "border-box",
		minHeight: "100%",
		padding: "4px 0",
		outline: "none",
		"&[contenteditable=true]": { WebkitUserModify: "read-write-plaintext-only" }
	},
	".cm-lineWrapping": {
		whiteSpace_fallback: "pre-wrap",
		whiteSpace: "break-spaces",
		wordBreak: "break-word",
		overflowWrap: "anywhere",
		flexShrink: 1
	},
	"&light .cm-content": { caretColor: "black" },
	"&dark .cm-content": { caretColor: "white" },
	".cm-line": {
		display: "block",
		padding: "0 2px 0 6px"
	},
	".cm-layer": {
		userSelect: "none",
		position: "absolute",
		left: 0,
		top: 0,
		contain: "size style",
		"& > *": { position: "absolute" }
	},
	"&light .cm-selectionBackground": { background: "#d9d9d9" },
	"&dark .cm-selectionBackground": { background: "#222" },
	"&light.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": { background: "#d7d4f0" },
	"&dark.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": { background: "#233" },
	".cm-cursorLayer": { pointerEvents: "none" },
	"&.cm-focused > .cm-scroller > .cm-cursorLayer": { animation: "steps(1) cm-blink 1.2s infinite" },
	"@keyframes cm-blink": {
		"0%": {},
		"50%": { opacity: 0 },
		"100%": {}
	},
	"@keyframes cm-blink2": {
		"0%": {},
		"50%": { opacity: 0 },
		"100%": {}
	},
	".cm-cursor, .cm-dropCursor": {
		borderLeft: "1.2px solid black",
		marginLeft: "-0.6px",
		pointerEvents: "none"
	},
	".cm-cursor": { display: "none" },
	"&dark .cm-cursor": { borderLeftColor: "#ddd" },
	".cm-selectionHandle": {
		backgroundColor: "currentColor",
		width: "1.5px"
	},
	".cm-selectionHandle-start::before, .cm-selectionHandle-end::before": {
		content: "\"\"",
		backgroundColor: "inherit",
		borderRadius: "50%",
		width: "8px",
		height: "8px",
		position: "absolute",
		left: "-3.25px"
	},
	".cm-selectionHandle-start::before": { top: "-8px" },
	".cm-selectionHandle-end::before": { bottom: "-8px" },
	".cm-dropCursor": { position: "absolute" },
	"&.cm-focused > .cm-scroller > .cm-cursorLayer .cm-cursor": { display: "block" },
	".cm-iso": { unicodeBidi: "isolate" },
	".cm-announced": {
		position: "fixed",
		top: "-10000px"
	},
	"@media print": { ".cm-announced": { display: "none" } },
	"&light .cm-activeLine": { backgroundColor: "#cceeff44" },
	"&dark .cm-activeLine": { backgroundColor: "#99eeff33" },
	"&light .cm-specialChar": { color: "red" },
	"&dark .cm-specialChar": { color: "#f78" },
	".cm-gutters": {
		flexShrink: 0,
		display: "flex",
		height: "100%",
		boxSizing: "border-box",
		zIndex: 200
	},
	".cm-gutters-before": { insetInlineStart: 0 },
	".cm-gutters-after": { insetInlineEnd: 0 },
	"&light .cm-gutters": {
		backgroundColor: "#f5f5f5",
		color: "#6c6c6c",
		border: "0px solid #ddd",
		"&.cm-gutters-before": { borderRightWidth: "1px" },
		"&.cm-gutters-after": { borderLeftWidth: "1px" }
	},
	"&dark .cm-gutters": {
		backgroundColor: "#333338",
		color: "#ccc"
	},
	".cm-gutter": {
		display: "flex !important",
		flexDirection: "column",
		flexShrink: 0,
		boxSizing: "border-box",
		minHeight: "100%",
		overflow: "hidden"
	},
	".cm-gutterElement": { boxSizing: "border-box" },
	".cm-lineNumbers .cm-gutterElement": {
		padding: "0 3px 0 5px",
		minWidth: "20px",
		textAlign: "right",
		whiteSpace: "nowrap"
	},
	"&light .cm-activeLineGutter": { backgroundColor: "#e2f2ff" },
	"&dark .cm-activeLineGutter": { backgroundColor: "#222227" },
	".cm-panels": {
		boxSizing: "border-box",
		position: "sticky",
		left: 0,
		right: 0,
		zIndex: 300
	},
	"&light .cm-panels": {
		backgroundColor: "#f5f5f5",
		color: "black"
	},
	".cm-panels-top": { top: "0" },
	".cm-panels-bottom": { bottom: "0" },
	"&light .cm-panels-top": { borderBottom: "1px solid #ddd" },
	"&light .cm-panels-bottom": { borderTop: "1px solid #ddd" },
	"&dark .cm-panels": {
		backgroundColor: "#333338",
		color: "white"
	},
	".cm-dialog": {
		padding: "2px 19px 4px 6px",
		position: "relative",
		"& label": { fontSize: "80%" }
	},
	".cm-dialog-close": {
		position: "absolute",
		top: "3px",
		right: "4px",
		backgroundColor: "inherit",
		border: "none",
		font: "inherit",
		fontSize: "14px",
		padding: "0"
	},
	".cm-tab": {
		display: "inline-block",
		overflow: "hidden",
		verticalAlign: "bottom"
	},
	".cm-widgetBuffer": {
		verticalAlign: "baseline",
		height: "1em",
		width: 0,
		display: "inline"
	},
	".cm-placeholder": {
		color: "#888",
		display: "inline-block",
		verticalAlign: "top",
		userSelect: "none"
	},
	".cm-highlightSpace": {
		background: "radial-gradient(circle at 50% 55%, #aaa 20%, transparent 0) no-repeat",
		backgroundSize: ".4em",
		backgroundPosition: "calc(min(50%, 0px)) center"
	},
	".cm-highlightTab": {
		backgroundImage: "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"200\" height=\"20\"><path stroke=\"%23888\" stroke-width=\"1\" fill=\"none\" d=\"M1 10H196L190 5M190 15L196 10M197 4L197 16\"/></svg>')",
		backgroundSize: "auto 100%",
		backgroundPosition: "right 90%",
		backgroundRepeat: "no-repeat"
	},
	".cm-trailingSpace": { backgroundColor: "#ff332255" },
	".cm-button": {
		verticalAlign: "middle",
		color: "inherit",
		fontSize: "70%",
		padding: ".2em 1em",
		borderRadius: "1px"
	},
	"&light .cm-button": {
		backgroundImage: "linear-gradient(#eff1f5, #d9d9df)",
		border: "1px solid #888",
		"&:active": { backgroundImage: "linear-gradient(#b4b4b4, #d0d3d6)" }
	},
	"&dark .cm-button": {
		backgroundImage: "linear-gradient(#393939, #111)",
		border: "1px solid #888",
		"&:active": { backgroundImage: "linear-gradient(#111, #333)" }
	},
	".cm-textfield": {
		verticalAlign: "middle",
		color: "inherit",
		fontSize: "70%",
		border: "1px solid silver",
		padding: ".2em .5em"
	},
	"&light .cm-textfield": { backgroundColor: "white" },
	"&dark .cm-textfield": {
		border: "1px solid #555",
		backgroundColor: "inherit"
	}
}, Rs), Vs = {
	childList: !0,
	characterData: !0,
	subtree: !0,
	attributes: !0,
	characterDataOldValue: !0
}, Hs = B.ie && B.ie_version <= 11, Us = class {
	constructor(e) {
		this.view = e, this.active = !1, this.editContext = null, this.selectionRange = new Br(), this.selectionChanged = !1, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.intersecting = !1, this.gapIntersection = null, this.gaps = [], this.printQuery = null, this.parentCheck = -1, this.dom = e.contentDOM, this.observer = new MutationObserver((t) => {
			for (let e of t) this.queue.push(e);
			(B.ie && B.ie_version <= 11 || B.ios && e.composing) && t.some((e) => e.type == "childList" && e.removedNodes.length || e.type == "characterData" && e.oldValue.length > e.target.nodeValue.length) ? this.flushSoon() : this.flush();
		}), window.EditContext && B.android && e.constructor.EDIT_CONTEXT !== !1 && !(B.chrome && B.chrome_version < 126) && (this.editContext = new qs(e), e.state.facet(Li) && (e.contentDOM.editContext = this.editContext.editContext)), Hs && (this.onCharData = (e) => {
			this.queue.push({
				target: e.target,
				type: "characterData",
				oldValue: e.prevValue
			}), this.flushSoon();
		}), this.onSelectionChange = this.onSelectionChange.bind(this), this.onResize = this.onResize.bind(this), this.onPrint = this.onPrint.bind(this), this.onScroll = this.onScroll.bind(this), window.matchMedia && (this.printQuery = window.matchMedia("print")), typeof ResizeObserver == "function" && (this.resizeScroll = new ResizeObserver(() => {
			this.view.docView?.lastUpdate < Date.now() - 75 && this.onResize();
		}), this.resizeScroll.observe(e.scrollDOM)), this.addWindowListeners(this.win = e.win), this.start(), typeof IntersectionObserver == "function" && (this.intersection = new IntersectionObserver((e) => {
			this.parentCheck < 0 && (this.parentCheck = setTimeout(this.listenForScroll.bind(this), 1e3)), e.length > 0 && e[e.length - 1].intersectionRatio > 0 != this.intersecting && (this.intersecting = !this.intersecting, this.intersecting != this.view.inView && this.onScrollChanged(document.createEvent("Event")));
		}, { threshold: [0, .001] }), this.intersection.observe(this.dom), this.gapIntersection = new IntersectionObserver((e) => {
			e.length > 0 && e[e.length - 1].intersectionRatio > 0 && this.onScrollChanged(document.createEvent("Event"));
		}, {})), this.listenForScroll(), this.readSelectionRange();
	}
	onScrollChanged(e) {
		this.view.inputState.runHandlers("scroll", e), this.intersecting && this.view.measure();
	}
	onScroll(e) {
		this.intersecting && this.flush(this.pendingRecords().length > 0), this.editContext && this.view.requestMeasure(this.editContext.measureReq), this.onScrollChanged(e);
	}
	onResize() {
		this.resizeTimeout < 0 && (this.resizeTimeout = setTimeout(() => {
			this.resizeTimeout = -1, this.view.requestMeasure();
		}, 50));
	}
	onPrint(e) {
		(e.type != "change" && e.type || e.matches) && (this.view.viewState.printing = !0, this.view.measure(), setTimeout(() => {
			this.view.viewState.printing = !1, this.view.requestMeasure();
		}, 500));
	}
	updateGaps(e) {
		if (this.gapIntersection && (e.length != this.gaps.length || this.gaps.some((t, n) => t != e[n]))) {
			this.gapIntersection.disconnect();
			for (let t of e) this.gapIntersection.observe(t);
			this.gaps = e;
		}
	}
	onSelectionChange(e) {
		let t = this.selectionChanged;
		if (!this.readSelectionRange() || this.delayedAndroidKey) return;
		let { view: n } = this, r = this.selectionRange;
		if (n.state.facet(Li) ? n.root.activeElement != this.dom : !Or(this.dom, r)) return;
		let i = r.anchorNode && n.docView.tile.nearest(r.anchorNode);
		i && i.isWidget() && i.widget.ignoreEvent(e) ? t || (this.selectionChanged = !1) : (B.ie && B.ie_version <= 11 || B.android && B.chrome) && !n.state.selection.main.empty && r.focusNode && Ar(r.focusNode, r.focusOffset, r.anchorNode, r.anchorOffset) ? this.flushSoon() : this.flush(!1);
	}
	readSelectionRange() {
		let { view: e } = this, t = Er(e.root);
		if (!t) return !1;
		let n = B.safari && e.root.nodeType == 11 && e.root.activeElement == this.dom && Ks(this.view, t) || t;
		if (!n || this.selectionRange.eq(n)) return !1;
		let r = Or(this.dom, n);
		return r && !this.selectionChanged && e.inputState.lastFocusTime > Date.now() - 200 && e.inputState.lastTouchTime < Date.now() - 300 && Yr(this.dom, n) ? (this.view.inputState.lastFocusTime = 0, e.docView.updateSelection(), !1) : (this.selectionRange.setRange(n), r && (this.selectionChanged = !0), !0);
	}
	setSelectionRange(e, t) {
		this.selectionRange.set(e.node, e.offset, t.node, t.offset), this.selectionChanged = !1;
	}
	clearSelectionRange() {
		this.selectionRange.set(null, 0, null, 0);
	}
	listenForScroll() {
		this.parentCheck = -1;
		let e = 0, t = null;
		for (let n = this.dom; n;) if (H(n)) !t && e < this.scrollTargets.length && this.scrollTargets[e] == n ? e++ : t ||= this.scrollTargets.slice(0, e), t && t.push(n), n = n.assignedSlot || n.parentNode;
		else if (n.nodeType == 11) n = n.host;
		else break;
		if (e < this.scrollTargets.length && !t && (t = this.scrollTargets.slice(0, e)), t) {
			for (let e of this.scrollTargets) e.removeEventListener("scroll", this.onScroll);
			for (let e of this.scrollTargets = t) e.addEventListener("scroll", this.onScroll);
		}
	}
	ignore(e) {
		if (!this.active) return e();
		try {
			return this.stop(), e();
		} finally {
			this.start(), this.clear();
		}
	}
	start() {
		this.active ||= (this.observer.observe(this.dom, Vs), Hs && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), !0);
	}
	stop() {
		this.active && (this.active = !1, this.observer.disconnect(), Hs && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData));
	}
	clear() {
		this.processRecords(), this.queue.length = 0, this.selectionChanged = !1;
	}
	delayAndroidKey(e, t) {
		if (!this.delayedAndroidKey) {
			let e = () => {
				let e = this.delayedAndroidKey;
				e && (this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = e.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && e.force && qr(this.dom, e.key, e.keyCode));
			};
			this.flushingAndroidKey = this.view.win.requestAnimationFrame(e);
		}
		this.delayedAndroidKey && e != "Enter" || (this.delayedAndroidKey = {
			key: e,
			keyCode: t,
			force: this.lastChange < Date.now() - 50 || !!this.delayedAndroidKey?.force
		});
	}
	clearDelayedAndroidKey() {
		this.win.cancelAnimationFrame(this.flushingAndroidKey), this.delayedAndroidKey = null, this.flushingAndroidKey = -1;
	}
	flushSoon() {
		this.delayedFlush < 0 && (this.delayedFlush = this.view.win.requestAnimationFrame(() => {
			this.delayedFlush = -1, this.flush();
		}));
	}
	forceFlush() {
		this.delayedFlush >= 0 && (this.view.win.cancelAnimationFrame(this.delayedFlush), this.delayedFlush = -1), this.flush();
	}
	pendingRecords() {
		for (let e of this.observer.takeRecords()) this.queue.push(e);
		return this.queue;
	}
	processRecords() {
		let e = this.pendingRecords();
		e.length && (this.queue = []);
		let t = -1, n = -1, r = !1;
		for (let i of e) {
			let e = this.readMutation(i);
			e && (e.typeOver && (r = !0), t == -1 ? {from: t, to: n} = e : (t = Math.min(e.from, t), n = Math.max(e.to, n)));
		}
		return {
			from: t,
			to: n,
			typeOver: r
		};
	}
	readChange() {
		let { from: e, to: t, typeOver: n } = this.processRecords(), r = this.selectionChanged && Or(this.dom, this.selectionRange);
		if (e < 0 && !r) return null;
		e > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = !1;
		let i = new ao(this.view, e, t, n);
		return this.view.docView.domChanged = { newSel: i.newSel ? i.newSel.main : null }, i;
	}
	flush(e = !0) {
		if (this.delayedFlush >= 0 || this.delayedAndroidKey) return !1;
		e && this.readSelectionRange();
		let t = this.selectionChanged, n = this.readChange();
		if (!n) return this.view.requestMeasure(), !1;
		let r = this.view.state, i = so(this.view, n);
		return this.view.state == r && (n.domChanged || t) && this.view.update([]), i;
	}
	readMutation(e) {
		let t = this.view.docView.tile.nearest(e.target);
		if (!t || t.isWidget()) return null;
		if (t.markDirty(e.type == "attributes"), e.type == "childList") {
			let n = Ws(t, e.previousSibling || e.target.previousSibling, -1), r = Ws(t, e.nextSibling || e.target.nextSibling, 1);
			return {
				from: n ? t.posAfter(n) : t.posAtStart,
				to: r ? t.posBefore(r) : t.posAtEnd,
				typeOver: !1
			};
		}
		return e.type == "characterData" ? {
			from: t.posAtStart,
			to: t.posAtEnd,
			typeOver: e.target.nodeValue == e.oldValue
		} : null;
	}
	setWindow(e) {
		e != this.win && (this.removeWindowListeners(this.win), this.win = e, this.addWindowListeners(this.win));
	}
	addWindowListeners(e) {
		e.addEventListener("resize", this.onResize), this.printQuery ? this.printQuery.addEventListener ? this.printQuery.addEventListener("change", this.onPrint) : this.printQuery.addListener(this.onPrint) : e.addEventListener("beforeprint", this.onPrint), e.addEventListener("scroll", this.onScroll), e.document.addEventListener("selectionchange", this.onSelectionChange);
	}
	removeWindowListeners(e) {
		e.removeEventListener("scroll", this.onScroll), e.removeEventListener("resize", this.onResize), this.printQuery ? this.printQuery.removeEventListener ? this.printQuery.removeEventListener("change", this.onPrint) : this.printQuery.removeListener(this.onPrint) : e.removeEventListener("beforeprint", this.onPrint), e.document.removeEventListener("selectionchange", this.onSelectionChange);
	}
	update(e) {
		this.editContext && (this.editContext.update(e), e.startState.facet(Li) != e.state.facet(Li) && (e.view.contentDOM.editContext = e.state.facet(Li) ? this.editContext.editContext : null));
	}
	destroy() {
		var e, t, n;
		this.stop(), (e = this.intersection) == null || e.disconnect(), (t = this.gapIntersection) == null || t.disconnect(), (n = this.resizeScroll) == null || n.disconnect();
		for (let e of this.scrollTargets) e.removeEventListener("scroll", this.onScroll);
		this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey), this.editContext && (this.view.contentDOM.editContext = null, this.editContext.destroy());
	}
};
function Ws(e, t, n) {
	for (; t;) {
		let r = K.get(t);
		if (r && r.parent == e) return r;
		let i = t.parentNode;
		t = i == e.dom ? n > 0 ? t.nextSibling : t.previousSibling : i;
	}
	return null;
}
function Gs(e, t) {
	let n = t.startContainer, r = t.startOffset, i = t.endContainer, a = t.endOffset, o = e.docView.domAtPos(e.state.selection.main.anchor, 1);
	return Ar(o.node, o.offset, i, a) && ([n, r, i, a] = [
		i,
		a,
		n,
		r
	]), {
		anchorNode: n,
		anchorOffset: r,
		focusNode: i,
		focusOffset: a
	};
}
function Ks(e, t) {
	if (t.getComposedRanges) {
		let n = t.getComposedRanges(e.root)[0];
		if (n) return Gs(e, n);
	}
	let n = null;
	function r(e) {
		e.preventDefault(), e.stopImmediatePropagation(), n = e.getTargetRanges()[0];
	}
	return e.contentDOM.addEventListener("beforeinput", r, !0), e.dom.ownerDocument.execCommand("indent"), e.contentDOM.removeEventListener("beforeinput", r, !0), n ? Gs(e, n) : null;
}
var qs = class {
	constructor(e) {
		this.from = 0, this.to = 0, this.pendingContextChange = null, this.handlers = Object.create(null), this.composing = null, this.resetRange(e.state);
		let t = this.editContext = new window.EditContext({
			text: e.state.doc.sliceString(this.from, this.to),
			selectionStart: this.toContextPos(Math.max(this.from, Math.min(this.to, e.state.selection.main.anchor))),
			selectionEnd: this.toContextPos(e.state.selection.main.head)
		});
		this.handlers.textupdate = (n) => {
			let r = e.state.selection.main, { anchor: i, head: a } = r, o = this.toEditorPos(n.updateRangeStart), s = this.toEditorPos(n.updateRangeEnd);
			e.inputState.composing >= 0 && !this.composing && (this.composing = {
				contextBase: n.updateRangeStart,
				editorBase: o,
				drifted: !1
			});
			let c = s - o > n.text.length;
			o == this.from && i < this.from ? o = i : s == this.to && i > this.to && (s = i);
			let l = uo(e.state.sliceDoc(o, s), n.text, (c ? r.from : r.to) - o, c ? "end" : null);
			if (!l) {
				let t = N.single(this.toEditorPos(n.selectionStart), this.toEditorPos(n.selectionEnd));
				mo(t, r) || e.dispatch({
					selection: t,
					userEvent: "select"
				});
				return;
			}
			let u = {
				from: l.from + o,
				to: l.toA + o,
				insert: j.of(n.text.slice(l.from, l.toB).split("\n"))
			};
			if ((B.mac || B.android) && u.from == a - 1 && /^\. ?$/.test(n.text) && e.contentDOM.getAttribute("autocorrect") == "off" && (u = {
				from: o,
				to: s,
				insert: j.of([n.text.replace(".", " ")])
			}), this.pendingContextChange = u, !e.state.readOnly) {
				let t = this.to - this.from + (u.to - u.from + u.insert.length);
				co(e, u, N.single(this.toEditorPos(n.selectionStart, t), this.toEditorPos(n.selectionEnd, t)));
			}
			this.pendingContextChange && (this.revertPending(e.state), this.setSelection(e.state)), u.from < u.to && !u.insert.length && e.inputState.composing >= 0 && !/[\\p{Alphabetic}\\p{Number}_]/.test(t.text.slice(Math.max(0, n.updateRangeStart - 1), Math.min(t.text.length, n.updateRangeStart + 1))) && this.handlers.compositionend(n);
		}, this.handlers.characterboundsupdate = (n) => {
			let r = [], i = null;
			for (let t = this.toEditorPos(n.rangeStart), a = this.toEditorPos(n.rangeEnd); t < a; t++) {
				let n = e.coordsForChar(t);
				i = n && new DOMRect(n.left, n.top, n.right - n.left, n.bottom - n.top) || i || new DOMRect(), r.push(i);
			}
			t.updateCharacterBounds(n.rangeStart, r);
		}, this.handlers.textformatupdate = (t) => {
			let n = [];
			for (let e of t.getTextFormats()) {
				let t = e.underlineStyle, r = e.underlineThickness;
				if (!/none/i.test(t) && !/none/i.test(r)) {
					let i = this.toEditorPos(e.rangeStart), a = this.toEditorPos(e.rangeEnd);
					if (i < a) {
						let e = `text-decoration: underline ${/^[a-z]/.test(t) ? t + " " : t == "Dashed" ? "dashed " : t == "Squiggle" ? "wavy " : ""}${/thin/i.test(r) ? 1 : 2}px`;
						n.push(V.mark({ attributes: { style: e } }).range(i, a));
					}
				}
			}
			e.dispatch({ effects: Fi.of(V.set(n)) });
		}, this.handlers.compositionstart = () => {
			e.inputState.composing < 0 && (e.inputState.composing = 0, e.inputState.compositionFirstChange = !0);
		}, this.handlers.compositionend = () => {
			if (e.inputState.composing = -1, e.inputState.compositionFirstChange = null, this.composing) {
				let { drifted: t } = this.composing;
				this.composing = null, t && this.reset(e.state);
			}
		};
		for (let e in this.handlers) t.addEventListener(e, this.handlers[e]);
		this.measureReq = { read: (e) => {
			let t = Er(e.root);
			t && t.rangeCount && this.editContext.updateSelectionBounds(t.getRangeAt(0).getBoundingClientRect());
		} };
	}
	applyEdits(e) {
		let t = 0, n = !1, r = this.pendingContextChange;
		return e.changes.iterChanges((i, a, o, s, c) => {
			if (n) return;
			let l = c.length - (a - i);
			if (r && a >= r.to) {
				if (r.from == i && r.to == a && r.insert.eq(c)) {
					r = this.pendingContextChange = null, t += l, this.to += l;
					return;
				}
				r = null, this.revertPending(e.state);
			}
			if (i += t, a += t, a <= this.from) this.from += l, this.to += l;
			else if (i < this.to) {
				if (i < this.from || a > this.to || this.to - this.from + c.length > 3e4) {
					n = !0;
					return;
				}
				this.editContext.updateText(this.toContextPos(i), this.toContextPos(a), c.toString()), this.to += l;
			}
			t += l;
		}), r && !n && this.revertPending(e.state), !n;
	}
	update(e) {
		let t = this.pendingContextChange, n = e.startState.selection.main;
		this.composing && (this.composing.drifted || !e.changes.touchesRange(n.from, n.to) && e.transactions.some((e) => !e.isUserEvent("input.type") && e.changes.touchesRange(this.from, this.to))) ? (this.composing.drifted = !0, this.composing.editorBase = e.changes.mapPos(this.composing.editorBase)) : !this.applyEdits(e) || !this.rangeIsValid(e.state) ? (this.pendingContextChange = null, this.reset(e.state)) : (e.docChanged || e.selectionSet || t) && this.setSelection(e.state), (e.geometryChanged || e.docChanged || e.selectionSet) && e.view.requestMeasure(this.measureReq);
	}
	resetRange(e) {
		let { head: t } = e.selection.main;
		this.from = Math.max(0, t - 1e4), this.to = Math.min(e.doc.length, t + 1e4);
	}
	reset(e) {
		this.resetRange(e), this.editContext.updateText(0, this.editContext.text.length, e.doc.sliceString(this.from, this.to)), this.setSelection(e);
	}
	revertPending(e) {
		let t = this.pendingContextChange;
		this.pendingContextChange = null, this.editContext.updateText(this.toContextPos(t.from), this.toContextPos(t.from + t.insert.length), e.doc.sliceString(t.from, t.to));
	}
	setSelection(e) {
		let { main: t } = e.selection, n = this.toContextPos(Math.max(this.from, Math.min(this.to, t.anchor))), r = this.toContextPos(t.head);
		(this.editContext.selectionStart != n || this.editContext.selectionEnd != r) && this.editContext.updateSelection(n, r);
	}
	rangeIsValid(e) {
		let { head: t } = e.selection.main;
		return !(this.from > 0 && t - this.from < 500 || this.to < e.doc.length && this.to - t < 500 || this.to - this.from > 3e4);
	}
	toEditorPos(e, t = this.to - this.from) {
		e = Math.min(e, t);
		let n = this.composing;
		return n && n.drifted ? n.editorBase + (e - n.contextBase) : e + this.from;
	}
	toContextPos(e) {
		let t = this.composing;
		return t && t.drifted ? t.contextBase + (e - t.editorBase) : e - this.from;
	}
	destroy() {
		for (let e in this.handlers) this.editContext.removeEventListener(e, this.handlers[e]);
	}
}, J = class e {
	get state() {
		return this.viewState.state;
	}
	get viewport() {
		return this.viewState.viewport;
	}
	get visibleRanges() {
		return this.viewState.visibleRanges;
	}
	get inView() {
		return this.viewState.inView;
	}
	get composing() {
		return !!this.inputState && this.inputState.composing > 0;
	}
	get compositionStarted() {
		return !!this.inputState && this.inputState.composing >= 0;
	}
	get root() {
		return this._root;
	}
	get win() {
		return this.dom.ownerDocument.defaultView || window;
	}
	constructor(e = {}) {
		this.plugins = [], this.pluginMap = /* @__PURE__ */ new Map(), this.editorAttrs = {}, this.contentAttrs = {}, this.bidiCache = [], this.destroyed = !1, this.updateState = 2, this.measureScheduled = -1, this.measureRequests = [], this.clearAnnouncement = -1, this.contentDOM = document.createElement("div"), this.scrollDOM = document.createElement("div"), this.scrollDOM.tabIndex = -1, this.scrollDOM.className = "cm-scroller", this.scrollDOM.appendChild(this.contentDOM), this.announceDOM = document.createElement("div"), this.announceDOM.className = "cm-announced", this.announceDOM.setAttribute("aria-live", "polite"), this.dom = document.createElement("div"), this.dom.appendChild(this.announceDOM), this.dom.appendChild(this.scrollDOM), e.parent && e.parent.appendChild(this.dom);
		let { dispatch: t } = e;
		this.dispatchTransactions = e.dispatchTransactions || t && ((e) => e.forEach((e) => t(e, this))) || ((e) => this.update(e)), this.dispatch = this.dispatch.bind(this), this._root = e.root || Jr(e.parent) || document, this.viewState = new Cs(this, e.state || L.create(e)), e.scrollTo && e.scrollTo.is(Pi) && (this.viewState.scrollTarget = e.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(zi).map((e) => new Bi(e));
		for (let e of this.plugins) e.update(this);
		this.observer = new Us(this), this.inputState = new ho(this), this.inputState.ensureHandlers(this.plugins), this.docView = new Oa(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), document.fonts?.ready && document.fonts.ready.then(() => {
			this.viewState.mustMeasureContent = "refresh", this.requestMeasure();
		});
	}
	dispatch(...e) {
		let t = e.length == 1 && e[0] instanceof rn ? e : e.length == 1 && Array.isArray(e[0]) ? e[0] : [this.state.update(...e)];
		this.dispatchTransactions(t, this);
	}
	update(t) {
		if (this.updateState != 0) throw Error("Calls to EditorView.update are not allowed while an update is in progress");
		let n = !1, r = !1, i, a = this.state;
		for (let e of t) {
			if (e.startState != a) throw RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
			a = e.state;
		}
		if (this.destroyed) {
			this.viewState.state = a;
			return;
		}
		let o = this.hasFocus, s = 0, c = null;
		t.some((e) => e.annotation(Jo)) ? (this.inputState.notifiedFocused = o, s = 1) : o != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = o, c = Yo(a, o), c || (s = 1));
		let l = this.observer.delayedAndroidKey, u = null;
		if (l ? (this.observer.clearDelayedAndroidKey(), u = this.observer.readChange(), (u && !this.state.doc.eq(a.doc) || !this.state.selection.eq(a.selection)) && (u = null)) : this.observer.clear(), a.facet(L.phrases) != this.state.facet(L.phrases)) return this.setState(a);
		i = ea.create(this, a, t), i.flags |= s;
		let d = this.viewState.scrollTarget;
		try {
			this.updateState = 2;
			for (let n of t) {
				if (d &&= d.map(n.changes), n.scrollIntoView) {
					let { main: t } = n.state.selection, { x: r, y: i } = this.state.facet(e.cursorScrollMargin);
					d = new Ni(t.empty ? t : N.cursor(t.head, t.head > t.anchor ? -1 : 1), "nearest", "nearest", i, r);
				}
				for (let e of n.effects) e.is(Pi) && (d = e.value.clip(this.state));
			}
			this.viewState.update(i, d), this.bidiCache = Xs.update(this.bidiCache, i.changes), i.empty || (this.updatePlugins(i), this.inputState.update(i)), n = this.docView.update(i), this.state.facet(Qi) != this.styleModules && this.mountStyles(), r = this.updateAttrs(), this.showAnnouncements(t), this.docView.updateSelection(n, t.some((e) => e.isUserEvent("select.pointer")));
		} finally {
			this.updateState = 0;
		}
		if (i.startState.facet(Ns) != i.state.facet(Ns) && (this.viewState.mustMeasureContent = !0), (n || r || d || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), n && this.docViewUpdate(), !i.empty) for (let e of this.state.facet(Ti)) try {
			e(i);
		} catch (e) {
			Ii(this.state, e, "update listener");
		}
		(c || u) && Promise.resolve().then(() => {
			c && this.state == c.startState && this.dispatch(c), u && !so(this, u) && l.force && qr(this.contentDOM, l.key, l.keyCode);
		});
	}
	setState(e) {
		if (this.updateState != 0) throw Error("Calls to EditorView.setState are not allowed while an update is in progress");
		if (this.destroyed) {
			this.viewState.state = e;
			return;
		}
		this.updateState = 2;
		let t = this.hasFocus;
		try {
			for (let e of this.plugins) e.destroy(this);
			this.viewState = new Cs(this, e), this.plugins = e.facet(zi).map((e) => new Bi(e)), this.pluginMap.clear();
			for (let e of this.plugins) e.update(this);
			this.docView.destroy(), this.docView = new Oa(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = [];
		} finally {
			this.updateState = 0;
		}
		t && this.focus(), this.requestMeasure();
	}
	updatePlugins(e) {
		let t = e.startState.facet(zi), n = e.state.facet(zi);
		if (t != n) {
			let r = [];
			for (let i of n) {
				let n = t.indexOf(i);
				if (n < 0) r.push(new Bi(i));
				else {
					let t = this.plugins[n];
					t.mustUpdate = e, r.push(t);
				}
			}
			for (let t of this.plugins) t.mustUpdate != e && t.destroy(this);
			this.plugins = r, this.pluginMap.clear();
		} else for (let t of this.plugins) t.mustUpdate = e;
		for (let e = 0; e < this.plugins.length; e++) this.plugins[e].update(this);
		t != n && this.inputState.ensureHandlers(this.plugins);
	}
	docViewUpdate() {
		for (let e of this.plugins) {
			let t = e.value;
			if (t && t.docViewUpdate) try {
				t.docViewUpdate(this);
			} catch (e) {
				Ii(this.state, e, "doc view update listener");
			}
		}
	}
	measure(e = !0) {
		if (this.destroyed) return;
		if (this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.observer.delayedAndroidKey) {
			this.measureScheduled = -1, this.requestMeasure();
			return;
		}
		this.measureScheduled = 0, e && this.observer.forceFlush();
		let t = null, n = this.viewState.scrollParent, r = this.viewState.getScrollOffset(), { scrollAnchorPos: i, scrollAnchorHeight: a, scaleY: o } = this.viewState;
		Math.abs(r - this.viewState.scrollOffset) > 1 && (a = -1), this.viewState.scrollAnchorHeight = -1;
		try {
			for (let e = 0;; e++) {
				if (a < 0) {
					if (Xr(n || this.win)) i = -1, a = this.viewState.heightMap.height / this.viewState.scaleY;
					else {
						let e = this.viewState.scrollAnchorAt(r);
						i = e.from, a = e.top;
					}
					o = this.viewState.scaleY;
				}
				this.updateState = 1;
				let s = this.viewState.measure();
				if (!s && !this.measureRequests.length && this.viewState.scrollTarget == null) break;
				if (e > 5) {
					console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
					break;
				}
				let c = [];
				s & 4 || ([this.measureRequests, c] = [c, this.measureRequests]);
				let l = c.map((e) => {
					try {
						return e.read(this);
					} catch (e) {
						return Ii(this.state, e), Ys;
					}
				}), u = ea.create(this, this.state, []), d = !1;
				u.flags |= s, t ? t.flags |= s : t = u, this.updateState = 2, u.empty || (this.updatePlugins(u), this.inputState.update(u), this.updateAttrs(), d = this.docView.update(u), d && this.docViewUpdate());
				for (let e = 0; e < c.length; e++) if (l[e] != Ys) try {
					let t = c[e];
					t.write && t.write(l[e], this);
				} catch (e) {
					Ii(this.state, e);
				}
				if (d && this.docView.updateSelection(!0), !u.viewportChanged && this.measureRequests.length == 0) {
					if (this.viewState.editorHeight) {
						if (this.viewState.scrollTarget) {
							this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null, a = -1;
							continue;
						}
						{
							let e = (i < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(i).top) / this.viewState.scaleY - a / o;
							if ((e > 1 || e < -1) && !(B.ios && this.inputState.lastIOSMomentumScroll > Date.now() - 100) && (n == this.scrollDOM || this.hasFocus || Math.max(this.inputState.lastWheelEvent, this.inputState.lastTouchTime) > Date.now() - 100)) {
								r += e, n ? i < 0 ? n.scrollTop = n.scrollHeight : n.scrollTop += e : this.win.scrollBy(0, e), a = -1;
								continue;
							}
						}
					}
					break;
				}
			}
		} finally {
			this.updateState = 0, this.measureScheduled = -1;
		}
		if (t && !t.empty) for (let e of this.state.facet(Ti)) e(t);
	}
	get themeClasses() {
		return Fs + " " + (this.state.facet(Ps) ? Ls : Is) + " " + this.state.facet(Ns);
	}
	updateAttrs() {
		let e = Zs(this, Vi, { class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses }), t = {
			spellcheck: "false",
			autocorrect: "off",
			autocapitalize: "off",
			writingsuggestions: "false",
			translate: "no",
			contenteditable: this.state.facet(Li) ? "true" : "false",
			class: "cm-content",
			style: `${B.tabSize}: ${this.state.tabSize}`,
			role: "textbox",
			"aria-multiline": "true"
		};
		this.state.readOnly && (t["aria-readonly"] = "true"), Zs(this, Hi, t);
		let n = this.observer.ignore(() => {
			let n = mr(this.contentDOM, this.contentAttrs, t), r = mr(this.dom, this.editorAttrs, e);
			return n || r;
		});
		return this.editorAttrs = e, this.contentAttrs = t, n;
	}
	showAnnouncements(t) {
		let n = !0;
		for (let r of t) for (let t of r.effects) if (t.is(e.announce)) {
			n &&= (this.announceDOM.textContent = "", this.win.clearTimeout(this.clearAnnouncement), this.clearAnnouncement = this.win.setTimeout(() => {
				this.announceDOM.textContent = "\xA0";
			}, 200), !1);
			let e = this.announceDOM.appendChild(document.createElement("div"));
			e.textContent = t.value;
		}
	}
	mountStyles() {
		this.styleModules = this.state.facet(Qi);
		let t = this.state.facet(e.cspNonce);
		Hn.mount(this.root, this.styleModules.concat(Bs).reverse(), t ? { nonce: t } : void 0);
	}
	readMeasured() {
		if (this.updateState == 2) throw Error("Reading the editor layout isn't allowed during an update");
		this.updateState == 0 && this.measureScheduled > -1 && this.measure(!1);
	}
	requestMeasure(e) {
		if (this.measureScheduled < 0 && (this.measureScheduled = this.win.requestAnimationFrame(() => this.measure())), e) {
			if (this.measureRequests.indexOf(e) > -1) return;
			if (e.key != null) {
				for (let t = 0; t < this.measureRequests.length; t++) if (this.measureRequests[t].key === e.key) {
					this.measureRequests[t] = e;
					return;
				}
			}
			this.measureRequests.push(e);
		}
	}
	plugin(e) {
		let t = this.pluginMap.get(e);
		return (t === void 0 || t && t.plugin != e) && this.pluginMap.set(e, t = this.plugins.find((t) => t.plugin == e) || null), t && t.update(this).value;
	}
	get documentTop() {
		return this.contentDOM.getBoundingClientRect().top + this.viewState.paddingTop;
	}
	get documentPadding() {
		return {
			top: this.viewState.paddingTop,
			bottom: this.viewState.paddingBottom
		};
	}
	get scaleX() {
		return this.viewState.scaleX;
	}
	get scaleY() {
		return this.viewState.scaleY;
	}
	elementAtHeight(e) {
		return this.readMeasured(), this.viewState.elementAtHeight(e);
	}
	lineBlockAtHeight(e) {
		return this.readMeasured(), this.viewState.lineBlockAtHeight(e);
	}
	get viewportLineBlocks() {
		return this.viewState.viewportLines;
	}
	lineBlockAt(e) {
		return this.viewState.lineBlockAt(e);
	}
	get contentHeight() {
		return this.viewState.contentHeight;
	}
	moveByChar(e, t, n) {
		return Xa(this, e, Ga(this, e, t, n));
	}
	moveByGroup(e, t) {
		return Xa(this, e, Ga(this, e, t, (t) => Ka(this, e.head, t)));
	}
	visualLineSide(e, t) {
		return t ? N.cursor(e.to, 1) : N.cursor(e.from, -1);
	}
	moveToLineBoundary(e, t, n = !0) {
		return Wa(this, e, t, n);
	}
	moveVertically(e, t, n) {
		return Xa(this, e, qa(this, e, t, n));
	}
	domAtPos(e, t = 1) {
		return this.docView.domAtPos(e, t);
	}
	posAtDOM(e, t = 0) {
		return this.docView.posFromDOM(e, t);
	}
	posAtCoords(e, t = !0) {
		this.readMeasured();
		let n = Qa(this, e, t);
		return n && n.pos;
	}
	posAndSideAtCoords(e, t = !0) {
		return this.readMeasured(), Qa(this, e, t);
	}
	coordsAtPos(e, t = 1) {
		this.readMeasured();
		let n = this.state.doc.lineAt(e), r = this.bidiSpans(n), i = r[li.find(r, e - n.from, -1, t)];
		return n.length && (e == n.from && t < 0 || e == n.to && t > 0) && i.dir != this.textDirectionAt(n.from) && (e == n.to ? (e = n.from + i.from, t = 1) : (e = n.from + i.to, t = -1)), this.docView.coordsAt(e, t, i.dir == U.RTL);
	}
	coordsForChar(e) {
		return this.readMeasured(), this.docView.coordsForChar(e);
	}
	get defaultCharacterWidth() {
		return this.viewState.heightOracle.charWidth;
	}
	get defaultLineHeight() {
		return this.viewState.heightOracle.lineHeight;
	}
	get textDirection() {
		return this.viewState.defaultTextDirection;
	}
	textDirectionAt(e) {
		return !this.state.facet(Ai) || e < this.viewport.from || e > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(e));
	}
	get lineWrapping() {
		return this.viewState.heightOracle.lineWrapping;
	}
	bidiSpans(e) {
		if (e.length > Js) return _i(e.length);
		let t = this.textDirectionAt(e.from), n;
		for (let r of this.bidiCache) if (r.from == e.from && r.dir == t && (r.fresh || ui(r.isolates, n = Ji(this, e)))) return r.order;
		n ||= Ji(this, e);
		let r = gi(e.text, t, n);
		return this.bidiCache.push(new Xs(e.from, e.to, t, n, !0, r)), r;
	}
	get hasFocus() {
		return (this.dom.ownerDocument.hasFocus() || B.safari && this.inputState?.lastContextMenu > Date.now() - 3e4) && this.root.activeElement == this.contentDOM;
	}
	focus() {
		this.observer.ignore(() => {
			Wr(this.contentDOM), this.docView.updateSelection();
		});
	}
	setRoot(e) {
		this._root != e && (this._root = e, this.observer.setWindow((e.nodeType == 9 ? e : e.ownerDocument).defaultView || window), this.mountStyles());
	}
	destroy() {
		this.root.activeElement == this.contentDOM && this.contentDOM.blur();
		for (let e of this.plugins) e.destroy(this);
		this.plugins = [], this.inputState.destroy(), this.docView.destroy(), this.dom.remove(), this.observer.destroy(), this.win.clearTimeout(this.clearAnnouncement), this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.destroyed = !0;
	}
	static scrollIntoView(e, t = {}) {
		return Pi.of(new Ni(typeof e == "number" ? N.cursor(e) : e, t.y ?? "nearest", t.x ?? "nearest", t.yMargin ?? 5, t.xMargin ?? 5));
	}
	scrollSnapshot() {
		let { scrollTop: e, scrollLeft: t } = this.scrollDOM, n = this.viewState.scrollAnchorAt(e);
		return Pi.of(new Ni(N.cursor(n.from), "start", "start", n.top - e, t, !0));
	}
	setTabFocusMode(e) {
		e == null ? this.inputState.tabFocusMode = this.inputState.tabFocusMode < 0 ? 0 : -1 : typeof e == "boolean" ? this.inputState.tabFocusMode = e ? 0 : -1 : this.inputState.tabFocusMode != 0 && (this.inputState.tabFocusMode = Date.now() + e);
	}
	static domEventHandlers(e) {
		return G.define(() => ({}), { eventHandlers: e });
	}
	static domEventObservers(e) {
		return G.define(() => ({}), { eventObservers: e });
	}
	static theme(e, t) {
		let n = Hn.newName(), r = [Ns.of(n), Qi.of(zs(`.${n}`, e))];
		return t && t.dark && r.push(Ps.of(!0)), r;
	}
	static baseTheme(e) {
		return zt.lowest(Qi.of(zs("." + Fs, e, Rs)));
	}
	static findFromDOM(e) {
		let t = e.querySelector(".cm-content");
		return (t && K.get(t) || K.get(e))?.root?.view || null;
	}
};
J.styleModule = Qi, J.inputHandler = Ei, J.clipboardInputFilter = Oi, J.clipboardOutputFilter = ki, J.scrollHandler = Mi, J.focusChangeEffect = Di, J.perLineTextDirection = Ai, J.exceptionSink = wi, J.updateListener = Ti, J.editable = Li, J.mouseSelectionStyle = Ci, J.dragMovesSelection = Si, J.clickAddsSelectionRange = xi, J.decorations = Ui, J.blockWrappers = Wi, J.outerDecorations = Gi, J.atomicRanges = Ki, J.bidiIsolatedRanges = qi, J.cursorScrollMargin = /*@__PURE__*/ P.define({ combine: (e) => {
	let t = 5, n = 5;
	for (let r of e) typeof r == "number" ? t = n = r : {x: t, y: n} = r;
	return {
		x: t,
		y: n
	};
} }), J.scrollMargins = Xi, J.darkTheme = Ps, J.cspNonce = /*@__PURE__*/ P.define({ combine: (e) => e.length ? e[0] : "" }), J.contentAttributes = Hi, J.editorAttributes = Vi, J.lineWrapping = /*@__PURE__*/ J.contentAttributes.of({ class: "cm-lineWrapping" }), J.announce = /*@__PURE__*/ F.define();
var Js = 4096, Ys = {}, Xs = class e {
	constructor(e, t, n, r, i, a) {
		this.from = e, this.to = t, this.dir = n, this.isolates = r, this.fresh = i, this.order = a;
	}
	static update(t, n) {
		if (n.empty && !t.some((e) => e.fresh)) return t;
		let r = [], i = t.length ? t[t.length - 1].dir : U.LTR;
		for (let a = Math.max(0, t.length - 10); a < t.length; a++) {
			let o = t[a];
			o.dir == i && !n.touchesRange(o.from, o.to) && r.push(new e(n.mapPos(o.from, 1), n.mapPos(o.to, -1), o.dir, o.isolates, !1, o.order));
		}
		return r;
	}
};
function Zs(e, t, n) {
	for (let r = e.state.facet(t), i = r.length - 1; i >= 0; i--) {
		let t = r[i], a = typeof t == "function" ? t(e) : t;
		a && ur(a, n);
	}
	return n;
}
var Qs = B.mac ? "mac" : B.windows ? "win" : B.linux ? "linux" : "key";
function $s(e, t) {
	let n = e.split(/-(?!$)/), r = n[n.length - 1];
	r == "Space" && (r = " ");
	let i, a, o, s;
	for (let e = 0; e < n.length - 1; ++e) {
		let r = n[e];
		if (/^(cmd|meta|m)$/i.test(r)) s = !0;
		else if (/^a(lt)?$/i.test(r)) i = !0;
		else if (/^(c|ctrl|control)$/i.test(r)) a = !0;
		else if (/^s(hift)?$/i.test(r)) o = !0;
		else if (/^mod$/i.test(r)) t == "mac" ? s = !0 : a = !0;
		else throw Error("Unrecognized modifier name: " + r);
	}
	return i && (r = "Alt-" + r), a && (r = "Ctrl-" + r), s && (r = "Meta-" + r), o && (r = "Shift-" + r), r;
}
function ec(e, t, n) {
	return t.altKey && (e = "Alt-" + e), t.ctrlKey && (e = "Ctrl-" + e), t.metaKey && (e = "Meta-" + e), n !== !1 && t.shiftKey && (e = "Shift-" + e), e;
}
var tc = /*@__PURE__*/ zt.default(/*@__PURE__*/ J.domEventHandlers({ keydown(e, t) {
	return uc(ic(t.state), e, t, "editor");
} })), nc = /*@__PURE__*/ P.define({ enables: tc }), rc = /*@__PURE__*/ new WeakMap();
function ic(e) {
	let t = e.facet(nc), n = rc.get(t);
	return n || rc.set(t, n = cc(t.reduce((e, t) => e.concat(t), []))), n;
}
function ac(e, t, n) {
	return uc(ic(e.state), t, e, n);
}
var oc = null, sc = 4e3;
function cc(e, t = Qs) {
	let n = Object.create(null), r = Object.create(null), i = (e, t) => {
		let n = r[e];
		if (n == null) r[e] = t;
		else if (n != t) throw Error("Key binding " + e + " is used both as a regular binding and as a multi-stroke prefix");
	}, a = (e, r, a, o, s) => {
		let c = n[e] || (n[e] = Object.create(null)), l = r.split(/ (?!$)/).map((e) => $s(e, t));
		for (let t = 1; t < l.length; t++) {
			let n = l.slice(0, t).join(" ");
			i(n, !0), c[n] || (c[n] = {
				preventDefault: !0,
				stopPropagation: !1,
				run: [(t) => {
					let r = oc = {
						view: t,
						prefix: n,
						scope: e
					};
					return setTimeout(() => {
						oc == r && (oc = null);
					}, sc), !0;
				}]
			});
		}
		let u = l.join(" ");
		i(u, !1);
		let d = c[u] || (c[u] = {
			preventDefault: !1,
			stopPropagation: !1,
			run: (c._any?.run)?.slice() || []
		});
		a && d.run.push(a), o && (d.preventDefault = !0), s && (d.stopPropagation = !0);
	};
	for (let r of e) {
		let e = r.scope ? r.scope.split(" ") : ["editor"];
		if (r.any) for (let t of e) {
			let e = n[t] || (n[t] = Object.create(null));
			e._any ||= {
				preventDefault: !1,
				stopPropagation: !1,
				run: []
			};
			let { any: i } = r;
			for (let t in e) e[t].run.push((e) => i(e, lc));
		}
		let i = r[t] || r.key;
		if (i) for (let t of e) a(t, i, r.run, r.preventDefault, r.stopPropagation), r.shift && a(t, "Shift-" + i, r.shift, r.preventDefault, r.stopPropagation);
	}
	return n;
}
var lc = null;
function uc(e, t, n, r) {
	lc = t;
	let i = Zn(t), a = gt(mt(i, 0)) == i.length && i != " ", o = "", s = !1, c = !1, l = !1;
	oc && oc.view == n && oc.scope == r && (o = oc.prefix + " ", xo.indexOf(t.keyCode) < 0 && (c = !0, oc = null));
	let u = /* @__PURE__ */ new Set(), d = (e) => {
		if (e) {
			for (let t of e.run) if (!u.has(t) && (u.add(t), t(n))) return e.stopPropagation && (l = !0), !0;
			e.preventDefault && (e.stopPropagation && (l = !0), c = !0);
		}
		return !1;
	}, f = e[r], p, m;
	return f && (d(f[o + ec(i, t, !a)]) ? s = !0 : a && (t.altKey || t.metaKey || t.ctrlKey) && !(B.windows && t.ctrlKey && t.altKey) && !(B.mac && t.altKey && !(t.ctrlKey || t.metaKey)) && (p = Gn[t.keyCode]) && p != i ? (d(f[o + ec(p, t, !0)]) || t.shiftKey && (m = Kn[t.keyCode]) != i && m != p && d(f[o + ec(m, t, !1)])) && (s = !0) : a && t.shiftKey && d(f[o + ec(i, t, !0)]) && (s = !0), !s && d(f._any) && (s = !0)), c && (s = !0), s && l && t.stopPropagation(), lc = null, s;
}
var dc = class e {
	constructor(e, t, n, r, i) {
		this.className = e, this.left = t, this.top = n, this.width = r, this.height = i;
	}
	draw() {
		let e = document.createElement("div");
		return e.className = this.className, this.adjust(e), e;
	}
	update(e, t) {
		return t.className == this.className && (this.adjust(e), !0);
	}
	adjust(e) {
		e.style.left = this.left + "px", e.style.top = this.top + "px", this.width != null && (e.style.width = this.width + "px"), e.style.height = this.height + "px";
	}
	eq(e) {
		return this.left == e.left && this.top == e.top && this.width == e.width && this.height == e.height && this.className == e.className;
	}
	static forRange(t, n, r) {
		if (r.empty) {
			let i = t.coordsAtPos(r.head, r.assoc || 1);
			if (!i) return [];
			let a = fc(t);
			return [new e(n, i.left - a.left, i.top - a.top, null, i.bottom - i.top)];
		}
		return mc(t, n, r);
	}
};
function fc(e) {
	let t = e.scrollDOM.getBoundingClientRect();
	return {
		left: (e.textDirection == U.LTR ? t.left : t.right - e.scrollDOM.clientWidth * e.scaleX) - e.scrollDOM.scrollLeft * e.scaleX,
		top: t.top - e.scrollDOM.scrollTop * e.scaleY
	};
}
function pc(e, t, n, r) {
	let i = e.coordsAtPos(t, n * 2);
	if (!i) return r;
	let a = e.dom.getBoundingClientRect(), o = (i.top + i.bottom) / 2, s = e.posAtCoords({
		x: a.left + 1,
		y: o
	}), c = e.posAtCoords({
		x: a.right - 1,
		y: o
	});
	return s == null || c == null ? r : {
		from: Math.max(r.from, Math.min(s, c)),
		to: Math.min(r.to, Math.max(s, c))
	};
}
function mc(e, t, n) {
	if (n.to <= e.viewport.from || n.from >= e.viewport.to) return [];
	let r = Math.max(n.from, e.viewport.from), i = Math.min(n.to, e.viewport.to), a = e.textDirection == U.LTR, o = e.contentDOM, s = o.getBoundingClientRect(), c = fc(e), l = o.querySelector(".cm-line"), u = l && window.getComputedStyle(l), d = s.left + (u ? parseInt(u.paddingLeft) + Math.min(0, parseInt(u.textIndent)) : 0), f = s.right - (u ? parseInt(u.paddingRight) : 0), p = Ua(e, r, 1), m = Ua(e, i, -1), h = p.type == _r.Text ? p : null, g = m.type == _r.Text ? m : null;
	if (h && (e.lineWrapping || p.widgetLineBreaks) && (h = pc(e, r, 1, h)), g && (e.lineWrapping || m.widgetLineBreaks) && (g = pc(e, i, -1, g)), h && g && h.from == g.from && h.to == g.to) return v(y(n.from, n.to, h));
	{
		let t = h ? y(n.from, null, h) : ee(p, !1), r = g ? y(null, n.to, g) : ee(m, !0), i = [];
		return (h || p).to < (g || m).from - (h && g ? 1 : 0) || p.widgetLineBreaks > 1 && t.bottom + e.defaultLineHeight / 2 < r.top ? i.push(_(d, t.bottom, f, r.top)) : t.bottom < r.top && e.elementAtHeight((t.bottom + r.top) / 2).type == _r.Text && (t.bottom = r.top = (t.bottom + r.top) / 2), v(t).concat(i).concat(v(r));
	}
	function _(e, n, r, i) {
		return new dc(t, e - c.left, n - c.top, Math.max(0, r - e), i - n);
	}
	function v({ top: e, bottom: t, horizontal: n }) {
		let r = [];
		for (let i = 0; i < n.length; i += 2) r.push(_(n[i], e, n[i + 1], t));
		return r;
	}
	function y(t, n, r) {
		let i = 1e9, o = -1e9, s = [];
		function c(t, n, c, l, u) {
			let p = e.coordsAtPos(t, t == r.to ? -2 : 2), m = e.coordsAtPos(c, c == r.from ? 2 : -2);
			p && m && (i = Math.min(p.top, m.top, i), o = Math.max(p.bottom, m.bottom, o), u == U.LTR ? s.push(a && n ? d : p.left, a && l ? f : m.right) : s.push(!a && l ? d : m.left, !a && n ? f : p.right));
		}
		let l = t ?? r.from, u = n ?? r.to;
		for (let r of e.visibleRanges) if (r.to > l && r.from < u) for (let i = Math.max(r.from, l), a = Math.min(r.to, u);;) {
			let r = e.state.doc.lineAt(i);
			for (let o of e.bidiSpans(r)) {
				let e = o.from + r.from, s = o.to + r.from;
				if (e >= a) break;
				s > i && c(Math.max(e, i), t == null && e <= l, Math.min(s, a), n == null && s >= u, o.dir);
			}
			if (i = r.to + 1, i >= a) break;
		}
		return s.length == 0 && c(l, t == null, u, n == null, e.textDirection), {
			top: i,
			bottom: o,
			horizontal: s
		};
	}
	function ee(e, t) {
		let n = s.top + (t ? e.top : e.bottom);
		return {
			top: n,
			bottom: n,
			horizontal: []
		};
	}
}
function hc(e, t) {
	return e.constructor == t.constructor && e.eq(t);
}
var gc = class {
	constructor(e, t) {
		this.view = e, this.layer = t, this.drawn = [], this.scaleX = 1, this.scaleY = 1, this.measureReq = {
			read: this.measure.bind(this),
			write: this.draw.bind(this)
		}, this.dom = e.scrollDOM.appendChild(document.createElement("div")), this.dom.classList.add("cm-layer"), t.above && this.dom.classList.add("cm-layer-above"), t.class && this.dom.classList.add(t.class), this.scale(), this.dom.setAttribute("aria-hidden", "true"), this.setOrder(e.state), e.requestMeasure(this.measureReq), t.mount && t.mount(this.dom, e);
	}
	update(e) {
		e.startState.facet(_c) != e.state.facet(_c) && this.setOrder(e.state), (this.layer.update(e, this.dom) || e.geometryChanged) && (this.scale(), e.view.requestMeasure(this.measureReq));
	}
	docViewUpdate(e) {
		this.layer.updateOnDocViewUpdate !== !1 && e.requestMeasure(this.measureReq);
	}
	setOrder(e) {
		let t = 0, n = e.facet(_c);
		for (; t < n.length && n[t] != this.layer;) t++;
		this.dom.style.zIndex = String((this.layer.above ? 150 : -1) - t);
	}
	measure() {
		return this.layer.markers(this.view);
	}
	scale() {
		let { scaleX: e, scaleY: t } = this.view;
		(e != this.scaleX || t != this.scaleY) && (this.scaleX = e, this.scaleY = t, this.dom.style.transform = `scale(${1 / e}, ${1 / t})`);
	}
	draw(e) {
		if (e.length != this.drawn.length || e.some((e, t) => !hc(e, this.drawn[t]))) {
			let t = this.dom.firstChild, n = 0;
			for (let r of e) r.update && t && r.constructor && this.drawn[n].constructor && r.update(t, this.drawn[n]) ? (t = t.nextSibling, n++) : this.dom.insertBefore(r.draw(), t);
			for (; t;) {
				let e = t.nextSibling;
				t.remove(), t = e;
			}
			this.drawn = e, B.webkit && (this.dom.style.display = this.dom.firstChild ? "" : "none");
		}
	}
	destroy() {
		this.layer.destroy && this.layer.destroy(this.dom, this.view), this.dom.remove();
	}
}, _c = /*@__PURE__*/ P.define();
function vc(e) {
	return [G.define((t) => new gc(t, e)), _c.of(e)];
}
var yc = !B.ios, bc = /*@__PURE__*/ P.define({ combine(e) {
	return _n(e, {
		cursorBlinkRate: 1200,
		drawRangeCursor: !0,
		iosSelectionHandles: !0
	}, {
		cursorBlinkRate: (e, t) => Math.min(e, t),
		drawRangeCursor: (e, t) => e || t
	});
} });
function xc(e = {}) {
	return [
		bc.of(e),
		Cc,
		Tc,
		Dc,
		ji.of(!0)
	];
}
function Sc(e) {
	return e.startState.facet(bc) != e.state.facet(bc);
}
var Cc = /*@__PURE__*/ vc({
	above: !0,
	markers(e) {
		let { state: t } = e, n = t.facet(bc), r = [];
		for (let i of t.selection.ranges) {
			let a = i == t.selection.main;
			if (i.empty || n.drawRangeCursor && !(a && B.ios && n.iosSelectionHandles)) {
				let t = a ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary", n = i.empty ? i : N.cursor(i.head, i.assoc);
				for (let i of dc.forRange(e, t, n)) r.push(i);
			}
		}
		return r;
	},
	update(e, t) {
		e.transactions.some((e) => e.selection) && (t.style.animationName = t.style.animationName == "cm-blink" ? "cm-blink2" : "cm-blink");
		let n = Sc(e);
		return n && wc(e.state, t), e.docChanged || e.selectionSet || n;
	},
	mount(e, t) {
		wc(t.state, e);
	},
	class: "cm-cursorLayer"
});
function wc(e, t) {
	t.style.animationDuration = e.facet(bc).cursorBlinkRate + "ms";
}
var Tc = /*@__PURE__*/ vc({
	above: !1,
	markers(e) {
		let t = [], { main: n, ranges: r } = e.state.selection;
		for (let i of r) if (!i.empty && (yc || i != n)) for (let n of dc.forRange(e, "cm-selectionBackground", i)) t.push(n);
		if (B.ios && !n.empty && e.state.facet(bc).iosSelectionHandles) {
			for (let r of dc.forRange(e, "cm-selectionHandle cm-selectionHandle-start", N.cursor(n.from, 1))) t.push(r);
			for (let r of dc.forRange(e, "cm-selectionHandle cm-selectionHandle-end", N.cursor(n.to, 1))) t.push(r);
		}
		return t;
	},
	update(e, t) {
		return e.docChanged || e.selectionSet || e.viewportChanged || Sc(e);
	},
	class: "cm-selectionLayer"
}), Ec = B.gecko && B.gecko_version == 153 ? "#ffffff01" : "transparent", Dc = /*@__PURE__*/ zt.highest(/*@__PURE__*/ J.theme({
	".cm-line": {
		...yc ? { "& ::selection, &::selection": { backgroundColor: `${Ec} !important` } } : {},
		caretColor: "transparent !important"
	},
	".cm-content": {
		caretColor: "transparent !important",
		"& :focus": {
			caretColor: "initial !important",
			...yc ? { "&::selection, & ::selection": { backgroundColor: "Highlight !important" } } : {}
		}
	}
})), Oc = /*@__PURE__*/ F.define({ map(e, t) {
	return e == null ? null : t.mapPos(e);
} }), kc = /*@__PURE__*/ It.define({
	create() {
		return null;
	},
	update(e, t) {
		return e != null && (e = t.changes.mapPos(e)), t.effects.reduce((e, t) => t.is(Oc) ? t.value : e, e);
	}
}), Ac = /*@__PURE__*/ G.fromClass(class {
	constructor(e) {
		this.view = e, this.cursor = null, this.measureReq = {
			read: this.readPos.bind(this),
			write: this.drawCursor.bind(this)
		};
	}
	update(e) {
		var t;
		let n = e.state.field(kc);
		n == null ? this.cursor != null && ((t = this.cursor) == null || t.remove(), this.cursor = null) : (this.cursor || (this.cursor = this.view.scrollDOM.appendChild(document.createElement("div")), this.cursor.className = "cm-dropCursor"), (e.startState.field(kc) != n || e.docChanged || e.geometryChanged) && this.view.requestMeasure(this.measureReq));
	}
	readPos() {
		let { view: e } = this, t = e.state.field(kc), n = t != null && e.coordsAtPos(t);
		if (!n) return null;
		let r = e.scrollDOM.getBoundingClientRect();
		return {
			left: n.left - r.left + e.scrollDOM.scrollLeft * e.scaleX,
			top: n.top - r.top + e.scrollDOM.scrollTop * e.scaleY,
			height: n.bottom - n.top
		};
	}
	drawCursor(e) {
		if (this.cursor) {
			let { scaleX: t, scaleY: n } = this.view;
			e ? (this.cursor.style.left = e.left / t + "px", this.cursor.style.top = e.top / n + "px", this.cursor.style.height = e.height / n + "px") : this.cursor.style.left = "-100000px";
		}
	}
	destroy() {
		this.cursor && this.cursor.remove();
	}
	setDropPos(e) {
		this.view.state.field(kc) != e && this.view.dispatch({ effects: Oc.of(e) });
	}
}, { eventObservers: {
	dragover(e) {
		this.setDropPos(this.view.posAtCoords({
			x: e.clientX,
			y: e.clientY
		}));
	},
	dragleave(e) {
		e.target != this.view.contentDOM && this.view.contentDOM.contains(e.relatedTarget) || this.setDropPos(null);
	},
	dragend() {
		this.setDropPos(null);
	},
	drop() {
		this.setDropPos(null);
	}
} });
function jc() {
	return [kc, Ac];
}
function Mc(e, t, n, r, i) {
	t.lastIndex = 0;
	for (let a = e.iterRange(n, r), o = n, s; !a.next().done; o += a.value.length) if (!a.lineBreak) for (; s = t.exec(a.value);) i(o + s.index, s);
}
function Nc(e, t) {
	let n = e.visibleRanges;
	if (n.length == 1 && n[0].from == e.viewport.from && n[0].to == e.viewport.to) return n;
	let r = [];
	for (let { from: i, to: a } of n) i = Math.max(e.state.doc.lineAt(i).from, i - t), a = Math.min(e.state.doc.lineAt(a).to, a + t), r.length && r[r.length - 1].to >= i ? r[r.length - 1].to = a : r.push({
		from: i,
		to: a
	});
	return r;
}
var Pc = class {
	constructor(e) {
		let { regexp: t, decoration: n, decorate: r, boundary: i, maxLength: a = 1e3 } = e;
		if (!t.global) throw RangeError("The regular expression given to MatchDecorator should have its 'g' flag set");
		if (this.regexp = t, r) this.addMatch = (e, t, n, i) => r(i, n, n + e[0].length, e, t);
		else if (typeof n == "function") this.addMatch = (e, t, r, i) => {
			let a = n(e, t, r);
			a && i(r, r + e[0].length, a);
		};
		else if (n) this.addMatch = (e, t, r, i) => i(r, r + e[0].length, n);
		else throw RangeError("Either 'decorate' or 'decoration' should be provided to MatchDecorator");
		this.boundary = i, this.maxLength = a;
	}
	createDeco(e) {
		let t = new Tn(), n = t.add.bind(t);
		for (let { from: t, to: r } of Nc(e, this.maxLength)) Mc(e.state.doc, this.regexp, t, r, (t, r) => this.addMatch(r, e, t, n));
		return t.finish();
	}
	updateDeco(e, t) {
		let n = 1e9, r = -1;
		return e.docChanged && e.changes.iterChanges((t, i, a, o) => {
			o >= e.view.viewport.from && a <= e.view.viewport.to && (n = Math.min(a, n), r = Math.max(o, r));
		}), e.viewportMoved || r - n > 1e3 ? this.createDeco(e.view) : r > -1 ? this.updateRange(e.view, t.map(e.changes), n, r) : t;
	}
	updateRange(e, t, n, r) {
		for (let i of e.visibleRanges) {
			let a = Math.max(i.from, n), o = Math.min(i.to, r);
			if (o >= a) {
				let n = e.state.doc.lineAt(a), r = n.to < o ? e.state.doc.lineAt(o) : n, s = Math.max(i.from, n.from), c = Math.min(i.to, r.to);
				if (this.boundary) {
					for (; a > n.from; a--) if (this.boundary.test(n.text[a - 1 - n.from])) {
						s = a;
						break;
					}
					for (; o < r.to; o++) if (this.boundary.test(r.text[o - r.from])) {
						c = o;
						break;
					}
				}
				let l = [], u, d = (e, t, n) => l.push(n.range(e, t));
				if (n == r) for (this.regexp.lastIndex = s - n.from; (u = this.regexp.exec(n.text)) && u.index < c - n.from;) this.addMatch(u, e, u.index + n.from, d);
				else Mc(e.state.doc, this.regexp, s, c, (t, n) => this.addMatch(n, e, t, d));
				t = t.update({
					filterFrom: s,
					filterTo: c,
					filter: (e, t) => e < s || t > c,
					add: l
				});
			}
		}
		return t;
	}
}, Fc = /x/.unicode == null ? "g" : "gu", Ic = /*@__PURE__*/ RegExp("[\0-\b\n--­؜​‎‏\u2028\u2029‭‮⁦⁧⁩﻿￹-￼]", Fc), Lc = {
	0: "null",
	7: "bell",
	8: "backspace",
	10: "newline",
	11: "vertical tab",
	13: "carriage return",
	27: "escape",
	8203: "zero width space",
	8204: "zero width non-joiner",
	8205: "zero width joiner",
	8206: "left-to-right mark",
	8207: "right-to-left mark",
	8232: "line separator",
	8237: "left-to-right override",
	8238: "right-to-left override",
	8294: "left-to-right isolate",
	8295: "right-to-left isolate",
	8297: "pop directional isolate",
	8233: "paragraph separator",
	65279: "zero width no-break space",
	65532: "object replacement"
}, Rc = null;
function zc() {
	if (Rc == null && typeof document < "u" && document.body) {
		let e = document.body.style;
		Rc = (e.tabSize ?? e.MozTabSize) != null;
	}
	return Rc || !1;
}
var Bc = /*@__PURE__*/ P.define({ combine(e) {
	let t = _n(e, {
		render: null,
		specialChars: Ic,
		addSpecialChars: null
	});
	return (t.replaceTabs = !zc()) && (t.specialChars = RegExp("	|" + t.specialChars.source, Fc)), t.addSpecialChars && (t.specialChars = RegExp(t.specialChars.source + "|" + t.addSpecialChars.source, Fc)), t;
} });
function Vc(e = {}) {
	return [Bc.of(e), Uc()];
}
var Hc = null;
function Uc() {
	return Hc ||= G.fromClass(class {
		constructor(e) {
			this.view = e, this.decorations = V.none, this.decorationCache = Object.create(null), this.decorator = this.makeDecorator(e.state.facet(Bc)), this.decorations = this.decorator.createDeco(e);
		}
		makeDecorator(e) {
			return new Pc({
				regexp: e.specialChars,
				decoration: (t, n, r) => {
					let { doc: i } = n.state, a = mt(t[0], 0);
					if (a == 9) {
						let e = i.lineAt(r), t = n.state.tabSize, a = In(e.text, t, r - e.from);
						return V.replace({ widget: new qc((t - a % t) * this.view.defaultCharacterWidth / this.view.scaleX) });
					}
					return this.decorationCache[a] || (this.decorationCache[a] = V.replace({ widget: new Kc(e, a) }));
				},
				boundary: e.replaceTabs ? void 0 : /[^]/
			});
		}
		update(e) {
			let t = e.state.facet(Bc);
			e.startState.facet(Bc) == t ? this.decorations = this.decorator.updateDeco(e, this.decorations) : (this.decorator = this.makeDecorator(t), this.decorations = this.decorator.createDeco(e.view));
		}
	}, { decorations: (e) => e.decorations });
}
var Wc = "•";
function Gc(e) {
	return e >= 32 ? Wc : e == 10 ? "␤" : String.fromCharCode(9216 + e);
}
var Kc = class extends gr {
	constructor(e, t) {
		super(), this.options = e, this.code = t;
	}
	eq(e) {
		return e.code == this.code;
	}
	toDOM(e) {
		let t = Gc(this.code), n = e.state.phrase("Control character") + " " + (Lc[this.code] || "0x" + this.code.toString(16)), r = this.options.render && this.options.render(this.code, n, t);
		if (r) return r;
		let i = document.createElement("span");
		return i.textContent = t, i.title = n, i.setAttribute("aria-label", n), i.className = "cm-specialChar", i;
	}
	ignoreEvent() {
		return !1;
	}
}, qc = class extends gr {
	constructor(e) {
		super(), this.width = e;
	}
	eq(e) {
		return e.width == this.width;
	}
	toDOM() {
		let e = document.createElement("span");
		return e.textContent = "	", e.className = "cm-tab", e.style.width = this.width + "px", e;
	}
	ignoreEvent() {
		return !1;
	}
};
function Jc() {
	return Xc;
}
var Yc = /*@__PURE__*/ V.line({ class: "cm-activeLine" }), Xc = /*@__PURE__*/ G.fromClass(class {
	constructor(e) {
		this.decorations = this.getDeco(e);
	}
	update(e) {
		(e.docChanged || e.selectionSet) && (this.decorations = this.getDeco(e.view));
	}
	getDeco(e) {
		let t = -1, n = [];
		for (let r of e.state.selection.ranges) {
			let i = e.lineBlockAt(r.head);
			i.from > t && (n.push(Yc.range(i.from)), t = i.from);
		}
		return V.set(n);
	}
}, { decorations: (e) => e.decorations }), Zc = 2e3;
function Qc(e, t, n) {
	let r = Math.min(t.line, n.line), i = Math.max(t.line, n.line), a = [];
	if (t.off > Zc || n.off > Zc || t.col < 0 || n.col < 0) {
		let o = Math.min(t.off, n.off), s = Math.max(t.off, n.off);
		for (let t = r; t <= i; t++) {
			let n = e.doc.line(t);
			n.length <= s && a.push(N.range(n.from + o, n.to + s));
		}
	} else {
		let o = Math.min(t.col, n.col), s = Math.max(t.col, n.col);
		for (let t = r; t <= i; t++) {
			let n = e.doc.line(t), r = Ln(n.text, o, e.tabSize, !0);
			if (r < 0) a.push(N.cursor(n.to));
			else {
				let t = Ln(n.text, s, e.tabSize);
				a.push(N.range(n.from + r, n.from + t));
			}
		}
	}
	return a;
}
function $c(e, t) {
	let n = e.coordsAtPos(e.viewport.from);
	return n ? Math.round(Math.abs((n.left - t) / e.defaultCharacterWidth)) : -1;
}
function el(e, t) {
	let n = e.posAtCoords({
		x: t.clientX,
		y: t.clientY
	}, !1), r = e.state.doc.lineAt(n), i = n - r.from, a = i > Zc ? -1 : i == r.length ? $c(e, t.clientX) : In(r.text, e.state.tabSize, n - r.from);
	return {
		line: r.number,
		col: a,
		off: i
	};
}
function tl(e, t) {
	let n = el(e, t), r = e.state.selection;
	return n ? {
		update(e) {
			if (e.docChanged) {
				let t = e.changes.mapPos(e.startState.doc.line(n.line).from), i = e.state.doc.lineAt(t);
				n = {
					line: i.number,
					col: n.col,
					off: Math.min(n.off, i.length)
				}, r = r.map(e.changes);
			}
		},
		get(t, i, a) {
			let o = el(e, t);
			if (!o) return r;
			let s = Qc(e.state, n, o);
			return s.length ? a ? N.create(s.concat(r.ranges)) : N.create(s) : r;
		}
	} : null;
}
function nl(e) {
	let t = e?.eventFilter || ((e) => e.altKey && e.button == 0);
	return J.mouseSelectionStyle.of((e, n) => t(n) ? tl(e, n) : null);
}
var rl = {
	Alt: [18, (e) => !!e.altKey],
	Control: [17, (e) => !!e.ctrlKey],
	Shift: [16, (e) => !!e.shiftKey],
	Meta: [91, (e) => !!e.metaKey]
}, il = { style: "cursor: crosshair" };
function al(e = {}) {
	let [t, n] = rl[e.key || "Alt"], r = G.fromClass(class {
		constructor(e) {
			this.view = e, this.isDown = !1;
		}
		set(e) {
			this.isDown != e && (this.isDown = e, this.view.update([]));
		}
	}, { eventObservers: {
		keydown(e) {
			this.set(e.keyCode == t || n(e));
		},
		keyup(e) {
			e.keyCode != t && n(e) || this.set(!1);
		},
		mousemove(e) {
			this.set(n(e));
		}
	} });
	return [r, J.contentAttributes.of((e) => e.plugin(r)?.isDown ? il : null)];
}
var ol = "-10000px", sl = class {
	constructor(e, t, n, r) {
		this.facet = t, this.createTooltipView = n, this.removeTooltipView = r, this.input = e.state.facet(t), this.tooltips = this.input.filter((e) => e);
		let i = null;
		this.tooltipViews = this.tooltips.map((e) => i = n(e, i));
	}
	update(e, t) {
		var n;
		let r = e.state.facet(this.facet), i = r.filter((e) => e);
		if (r === this.input) {
			for (let t of this.tooltipViews) t.update && t.update(e);
			return !1;
		}
		let a = [], o = t ? [] : null;
		for (let n = 0; n < i.length; n++) {
			let r = i[n], s = -1;
			if (r) {
				for (let e = 0; e < this.tooltips.length; e++) {
					let t = this.tooltips[e];
					t && t.create == r.create && (s = e);
				}
				if (s < 0) a[n] = this.createTooltipView(r, n ? a[n - 1] : null), o && (o[n] = !!r.above);
				else {
					let r = a[n] = this.tooltipViews[s];
					o && (o[n] = t[s]), r.update && r.update(e);
				}
			}
		}
		for (let e of this.tooltipViews) a.indexOf(e) < 0 && (this.removeTooltipView(e), (n = e.destroy) == null || n.call(e));
		return t && (o.forEach((e, n) => t[n] = e), t.length = o.length), this.input = r, this.tooltips = i, this.tooltipViews = a, !0;
	}
};
function cl(e) {
	let t = e.dom.ownerDocument.documentElement, n = t.clientWidth, r = getComputedStyle(t);
	if (!/stable/.test(r.scrollbarGutter || "")) return {
		left: 0,
		right: n
	};
	let i = t.getBoundingClientRect(), a = e.win.scrollX;
	return {
		left: Math.max(0, i.left + a - parseFloat(r.marginLeft)),
		right: Math.min(n, i.right + a + parseFloat(r.marginRight))
	};
}
function ll(e) {
	let { left: t, right: n } = cl(e);
	return {
		top: 0,
		left: t,
		right: n,
		bottom: e.dom.ownerDocument.documentElement.clientHeight
	};
}
var ul = /*@__PURE__*/ P.define({ combine: (e) => ({
	position: B.ios ? "absolute" : e.find((e) => e.position)?.position || "fixed",
	parent: e.find((e) => e.parent)?.parent || null,
	tooltipSpace: e.find((e) => e.tooltipSpace)?.tooltipSpace || ll
}) }), dl = /*@__PURE__*/ new WeakMap(), fl = /*@__PURE__*/ G.fromClass(class {
	constructor(e) {
		this.view = e, this.above = [], this.inView = !0, this.madeAbsolute = !1, this.lastTransaction = 0, this.measureTimeout = -1;
		let t = e.state.facet(ul);
		this.position = t.position, this.parent = t.parent, this.classes = e.themeClasses, this.createContainer(), this.measureReq = {
			read: this.readMeasure.bind(this),
			write: this.writeMeasure.bind(this),
			key: this
		}, this.resizeObserver = typeof ResizeObserver == "function" ? new ResizeObserver(() => this.measureSoon()) : null, this.manager = new sl(e, gl, (e, t) => this.createTooltip(e, t), (e) => {
			this.resizeObserver && this.resizeObserver.unobserve(e.dom), e.dom.remove();
		}), this.above = this.manager.tooltips.map((e) => !!e.above), this.intersectionObserver = typeof IntersectionObserver == "function" ? new IntersectionObserver((e) => {
			Date.now() > this.lastTransaction - 50 && e.length > 0 && e[e.length - 1].intersectionRatio < 1 && this.measureSoon();
		}, { threshold: [1] }) : null, this.observeIntersection(), e.win.addEventListener("resize", this.measureSoon = this.measureSoon.bind(this)), this.maybeMeasure();
	}
	createContainer() {
		this.parent ? (this.container = document.createElement("div"), this.container.style.position = "relative", this.container.className = this.view.themeClasses, this.parent.appendChild(this.container)) : this.container = this.view.dom;
	}
	observeIntersection() {
		if (this.intersectionObserver) {
			this.intersectionObserver.disconnect();
			for (let e of this.manager.tooltipViews) this.intersectionObserver.observe(e.dom);
		}
	}
	measureSoon() {
		this.measureTimeout < 0 && (this.measureTimeout = setTimeout(() => {
			this.measureTimeout = -1, this.maybeMeasure();
		}, 50));
	}
	update(e) {
		e.transactions.length && (this.lastTransaction = Date.now());
		let t = this.manager.update(e, this.above);
		t && this.observeIntersection();
		let n = t || e.geometryChanged, r = e.state.facet(ul);
		if (r.position != this.position && !this.madeAbsolute) {
			this.position = r.position;
			for (let e of this.manager.tooltipViews) e.dom.style.position = this.position;
			n = !0;
		}
		if (r.parent != this.parent) {
			this.parent && this.container.remove(), this.parent = r.parent, this.createContainer();
			for (let e of this.manager.tooltipViews) this.container.appendChild(e.dom);
			n = !0;
		} else this.parent && this.view.themeClasses != this.classes && (this.classes = this.container.className = this.view.themeClasses);
		n && this.maybeMeasure();
	}
	createTooltip(e, t) {
		let n = e.create(this.view), r = t ? t.dom : null;
		if (n.dom.classList.add("cm-tooltip"), e.arrow && !n.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow")) {
			let e = document.createElement("div");
			e.className = "cm-tooltip-arrow", n.dom.appendChild(e);
		}
		return n.dom.style.position = this.position, n.dom.style.top = ol, n.dom.style.left = "0px", this.container.insertBefore(n.dom, r), n.mount && n.mount(this.view), this.resizeObserver && this.resizeObserver.observe(n.dom), n;
	}
	destroy() {
		var e, t, n;
		this.view.win.removeEventListener("resize", this.measureSoon);
		for (let t of this.manager.tooltipViews) t.dom.remove(), (e = t.destroy) == null || e.call(t);
		this.parent && this.container.remove(), (t = this.resizeObserver) == null || t.disconnect(), (n = this.intersectionObserver) == null || n.disconnect(), clearTimeout(this.measureTimeout);
	}
	readMeasure() {
		let e = 1, t = 1, n = !1, r = 0;
		if (this.position == "fixed" && this.manager.tooltipViews.length) {
			let { dom: e } = this.manager.tooltipViews[0];
			if (B.safari) {
				let t = e.getBoundingClientRect();
				n = Math.abs(t.top + 1e4) > 1 || Math.abs(t.left) > 1;
			} else n = !!e.offsetParent && e.offsetParent != this.container.ownerDocument.body;
		}
		if (n || this.position == "absolute") {
			if (this.parent) {
				let n = this.parent.getBoundingClientRect();
				n.width && n.height && (e = n.width / this.parent.offsetWidth, t = n.height / this.parent.offsetHeight);
			} else ({scaleX: e, scaleY: t} = this.view.viewState);
		} else r = cl(this.view).left;
		let i = this.view.scrollDOM.getBoundingClientRect(), a = Zi(this.view);
		return {
			visible: {
				left: i.left + a.left,
				top: i.top + a.top,
				right: i.right - a.right,
				bottom: i.bottom - a.bottom
			},
			parent: this.parent ? this.container.getBoundingClientRect() : this.view.dom.getBoundingClientRect(),
			pos: this.manager.tooltips.map((e, t) => {
				let n = this.manager.tooltipViews[t];
				return n.getCoords ? n.getCoords(e.pos) : this.view.coordsAtPos(e.pos);
			}),
			size: this.manager.tooltipViews.map(({ dom: e }) => e.getBoundingClientRect()),
			space: this.view.state.facet(ul).tooltipSpace(this.view),
			scaleX: e,
			scaleY: t,
			makeAbsolute: n,
			fixedLeft: r
		};
	}
	writeMeasure(e) {
		if (e.makeAbsolute) {
			this.madeAbsolute = !0, this.position = "absolute";
			for (let e of this.manager.tooltipViews) e.dom.style.position = "absolute";
		}
		let { visible: t, space: n, scaleX: r, scaleY: i } = e, a = [];
		for (let o = 0; o < this.manager.tooltips.length; o++) {
			let s = this.manager.tooltips[o], c = this.manager.tooltipViews[o], { dom: l } = c, u = e.pos[o], d = e.size[o];
			if (!u || s.clip !== !1 && (u.bottom <= Math.max(t.top, n.top) || u.top >= Math.min(t.bottom, n.bottom) || u.right < Math.max(t.left, n.left) - .1 || u.left > Math.min(t.right, n.right) + .1)) {
				l.style.top = ol;
				continue;
			}
			let f = s.arrow ? c.dom.querySelector(".cm-tooltip-arrow") : null, p = f ? 7 : 0, m = d.right - d.left, h = dl.get(c) ?? d.bottom - d.top, g = c.offset || hl, _ = this.view.textDirection == U.LTR, v = d.width > n.right - n.left ? _ ? n.left : n.right - d.width : _ ? Math.max(n.left, Math.min(u.left - (f ? 14 : 0) + g.x, n.right - m)) : Math.min(Math.max(n.left, u.left - m + (f ? 14 : 0) - g.x), n.right - m), y = this.above[o];
			!s.strictSide && (y ? u.top - h - p - g.y < n.top : u.bottom + h + p + g.y > n.bottom) && y == n.bottom - u.bottom > u.top - n.top && (y = this.above[o] = !y);
			let ee = (y ? u.top - n.top : n.bottom - u.bottom) - p;
			if (ee < h && c.resize !== !1) {
				if (ee < this.view.defaultLineHeight) {
					l.style.top = ol;
					continue;
				}
				dl.set(c, h), l.style.height = (h = ee) / i + "px";
			} else l.style.height && (l.style.height = "");
			let b = y ? u.top - h - p - g.y : u.bottom + p + g.y, x = v + m;
			if (c.overlap !== !0) for (let e of a) e.left < x && e.right > v && e.top < b + h && e.bottom > b && (b = y ? e.top - h - 2 - p : e.bottom + p + 2);
			if (this.position == "absolute" ? (l.style.top = (b - e.parent.top) / i + "px", pl(l, (v - e.parent.left) / r)) : (l.style.top = b / i + "px", pl(l, (v - e.fixedLeft) / r)), f) {
				let e = u.left + (_ ? g.x : -g.x) - (v + 14 - 7);
				f.style.left = e / r + "px";
			}
			c.overlap !== !0 && a.push({
				left: v,
				top: b,
				right: x,
				bottom: b + h
			}), l.classList.toggle("cm-tooltip-above", y), l.classList.toggle("cm-tooltip-below", !y), c.positioned && c.positioned(e.space);
		}
	}
	maybeMeasure() {
		if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView))) for (let e of this.manager.tooltipViews) e.dom.style.top = ol;
	}
}, { eventObservers: { scroll() {
	this.maybeMeasure();
} } });
function pl(e, t) {
	let n = parseInt(e.style.left, 10);
	(isNaN(n) || Math.abs(t - n) > 1) && (e.style.left = t + "px");
}
var ml = /*@__PURE__*/ J.baseTheme({
	".cm-tooltip": {
		zIndex: 500,
		boxSizing: "border-box"
	},
	"&light .cm-tooltip": {
		border: "1px solid #bbb",
		backgroundColor: "#f5f5f5"
	},
	"&light .cm-tooltip-section:not(:first-child)": { borderTop: "1px solid #bbb" },
	"&dark .cm-tooltip": {
		backgroundColor: "#333338",
		color: "white"
	},
	".cm-tooltip-arrow": {
		height: "7px",
		width: "14px",
		position: "absolute",
		zIndex: -1,
		overflow: "hidden",
		"&:before, &:after": {
			content: "''",
			position: "absolute",
			width: 0,
			height: 0,
			borderLeft: "7px solid transparent",
			borderRight: "7px solid transparent"
		},
		".cm-tooltip-above &": {
			bottom: "-7px",
			"&:before": { borderTop: "7px solid #bbb" },
			"&:after": {
				borderTop: "7px solid #f5f5f5",
				bottom: "1px"
			}
		},
		".cm-tooltip-below &": {
			top: "-7px",
			"&:before": { borderBottom: "7px solid #bbb" },
			"&:after": {
				borderBottom: "7px solid #f5f5f5",
				top: "1px"
			}
		}
	},
	"&dark .cm-tooltip .cm-tooltip-arrow": {
		"&:before": {
			borderTopColor: "#333338",
			borderBottomColor: "#333338"
		},
		"&:after": {
			borderTopColor: "transparent",
			borderBottomColor: "transparent"
		}
	}
}), hl = {
	x: 0,
	y: 0
}, gl = /*@__PURE__*/ P.define({ enables: [fl, ml] }), _l = /*@__PURE__*/ P.define({ combine: (e) => e.reduce((e, t) => e.concat(t), []) }), vl = class e {
	static create(t) {
		return new e(t);
	}
	constructor(e) {
		this.view = e, this.mounted = !1, this.dom = document.createElement("div"), this.dom.classList.add("cm-tooltip-hover"), this.manager = new sl(e, _l, (e, t) => this.createHostedView(e, t), (e) => e.dom.remove());
	}
	createHostedView(e, t) {
		let n = e.create(this.view);
		return n.dom.classList.add("cm-tooltip-section"), this.dom.insertBefore(n.dom, t ? t.dom.nextSibling : this.dom.firstChild), this.mounted && n.mount && n.mount(this.view), n;
	}
	mount(e) {
		for (let t of this.manager.tooltipViews) t.mount && t.mount(e);
		this.mounted = !0;
	}
	positioned(e) {
		for (let t of this.manager.tooltipViews) t.positioned && t.positioned(e);
	}
	update(e) {
		this.manager.update(e);
	}
	destroy() {
		var e;
		for (let t of this.manager.tooltipViews) (e = t.destroy) == null || e.call(t);
	}
	passProp(e) {
		let t;
		for (let n of this.manager.tooltipViews) {
			let r = n[e];
			if (r !== void 0) {
				if (t === void 0) t = r;
				else if (t !== r) return;
			}
		}
		return t;
	}
	get offset() {
		return this.passProp("offset");
	}
	get getCoords() {
		return this.passProp("getCoords");
	}
	get overlap() {
		return this.passProp("overlap");
	}
	get resize() {
		return this.passProp("resize");
	}
}, yl = /*@__PURE__*/ gl.compute([_l], (e) => {
	let t = e.facet(_l);
	return t.length === 0 ? null : {
		pos: Math.min(...t.map((e) => e.pos)),
		end: Math.max(...t.map((e) => e.end ?? e.pos)),
		create: vl.create,
		above: t[0].above,
		arrow: t.some((e) => e.arrow)
	};
}), bl = /*@__PURE__*/ P.define(), xl = class {
	constructor(e, t, n, r, i, a) {
		this.view = e, this.source = t, this.field = n, this.locked = r, this.setHover = i, this.hoverTime = a, this.hoverTimeout = -1, this.restartTimeout = -1, this.pending = null, this.lastMove = {
			x: 0,
			y: 0,
			target: e.dom,
			time: 0
		}, this.checkHover = this.checkHover.bind(this), e.dom.addEventListener("mouseleave", this.mouseleave = this.mouseleave.bind(this)), e.dom.addEventListener("mousemove", this.mousemove = this.mousemove.bind(this));
	}
	update(e) {
		this.pending && (this.pending = null, clearTimeout(this.restartTimeout), this.restartTimeout = setTimeout(() => this.startHover(), 20));
	}
	get active() {
		return this.view.state.field(this.field);
	}
	checkHover() {
		if (this.hoverTimeout = -1, this.active.length) return;
		let e = Date.now() - this.lastMove.time;
		e < this.hoverTime ? this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime - e) : this.startHover();
	}
	startHover() {
		clearTimeout(this.restartTimeout);
		let { view: e, lastMove: t } = this, n = e.docView.tile.nearest(t.target);
		if (!n) return;
		let r, i = 1;
		if (n.isWidget()) r = n.posAtStart;
		else {
			if (r = e.posAtCoords(t), r == null) return;
			let n = e.coordsAtPos(r);
			if (!n || t.y < n.top || t.y > n.bottom || t.x < n.left - e.defaultCharacterWidth || t.x > n.right + e.defaultCharacterWidth) return;
			let a = e.bidiSpans(e.state.doc.lineAt(r)).find((e) => e.from <= r && e.to >= r), o = a && a.dir == U.RTL ? -1 : 1;
			i = t.x < n.left ? -o : o;
		}
		this.activateHover(e, r, i);
	}
	activateHover(e, t, n, r) {
		let i = this.source(e, t, n), a = (t) => {
			if (t && (!Array.isArray(t) || t.length)) {
				let n = Array.isArray(t) ? t : [t];
				r && this.locked.set(n, r), e.dispatch({ effects: this.setHover.of(n) });
			}
		};
		if (i && "then" in i) {
			let n = this.pending = { pos: t };
			i.then((e) => {
				this.pending == n && (this.pending = null, a(e));
			}, (t) => Ii(e.state, t, "hover tooltip"));
		} else a(i);
	}
	get tooltip() {
		let e = this.view.plugin(fl), t = e ? e.manager.tooltips.findIndex((e) => e.create == vl.create) : -1;
		return t > -1 ? e.manager.tooltipViews[t] : null;
	}
	mousemove(e) {
		this.lastMove = {
			x: e.clientX,
			y: e.clientY,
			target: e.target,
			time: Date.now()
		}, this.hoverTimeout < 0 && (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
		let { active: t, tooltip: n } = this;
		if (t.length && !this.locked.has(t) && n && !Cl(n.dom, e) || this.pending) {
			let { pos: n } = t[0] || this.pending, r = t[0]?.end ?? n;
			(n == r ? this.view.posAtCoords(this.lastMove) != n : !wl(this.view, n, r, e.clientX, e.clientY)) && (this.view.dispatch({ effects: this.setHover.of([]) }), this.pending = null);
		}
	}
	mouseleave(e) {
		clearTimeout(this.hoverTimeout), this.hoverTimeout = -1;
		let { active: t } = this;
		if (t.length && !this.locked.has(t)) {
			let { tooltip: t } = this;
			t && t.dom.contains(e.relatedTarget) ? this.watchTooltipLeave(t.dom) : this.view.dispatch({ effects: this.setHover.of([]) });
		}
	}
	watchTooltipLeave(e) {
		let t = (n) => {
			e.removeEventListener("mouseleave", t);
			let { active: r } = this;
			r.length && !this.locked.has(r) && !this.view.dom.contains(n.relatedTarget) && this.view.dispatch({ effects: this.setHover.of([]) });
		};
		e.addEventListener("mouseleave", t);
	}
	destroy() {
		clearTimeout(this.hoverTimeout), clearTimeout(this.restartTimeout), this.view.dom.removeEventListener("mouseleave", this.mouseleave), this.view.dom.removeEventListener("mousemove", this.mousemove);
	}
}, Sl = 4;
function Cl(e, t) {
	let { left: n, right: r, top: i, bottom: a } = e.getBoundingClientRect(), o;
	if (o = e.querySelector(".cm-tooltip-arrow")) {
		let e = o.getBoundingClientRect();
		i = Math.min(e.top, i), a = Math.max(e.bottom, a);
	}
	return t.clientX >= n - Sl && t.clientX <= r + Sl && t.clientY >= i - Sl && t.clientY <= a + Sl;
}
function wl(e, t, n, r, i, a) {
	let o = e.scrollDOM.getBoundingClientRect(), s = e.documentTop + e.documentPadding.top + e.contentHeight;
	if (o.left > r || o.right < r || o.top > i || Math.min(o.bottom, s) < i) return !1;
	let c = e.posAtCoords({
		x: r,
		y: i
	}, !1);
	return c >= t && c <= n;
}
function Tl(e, t = {}) {
	let n = F.define(), r = /* @__PURE__ */ new WeakMap(), i = It.define({
		create() {
			return [];
		},
		update(e, a) {
			let o = r.get(e);
			if (e.length && (t.hideOnChange && (a.docChanged || a.selection) || o && o(a) ? e = [] : t.hideOn && (e = e.filter((e) => !t.hideOn(a, e)))), a.docChanged && e.length) {
				let t = [];
				for (let n of e) {
					let e = a.changes.mapPos(n.pos, -1, vt.TrackDel);
					if (e != null) {
						let r = Object.assign(Object.create(null), n);
						r.pos = e, r.end != null && (r.end = a.changes.mapPos(r.end)), t.push(r);
					}
				}
				e = t;
			}
			for (let t of a.effects) t.is(n) && (e = t.value, o = void 0), (t.is(Ol) && !t.value || t.value == i) && (e = []);
			return e.length && o && r.set(e, o), e;
		},
		provide: (e) => _l.from(e)
	}), a = G.define((a) => new xl(a, e, i, r, n, t.hoverTime || 300));
	return {
		active: i,
		extension: [
			i,
			a,
			bl.of(a),
			yl
		]
	};
}
function El(e, t, n, r = {}) {
	let i = e.state.facet(bl).map((t) => e.plugin(t)).filter((e) => !!e);
	if (r.tooltip && r.tooltip.active) {
		let e = i.find((e) => e.field == r.tooltip.active);
		e && (i = [e]);
	}
	for (let a of i) a.activateHover(e, t, n, r.until ?? (() => !1));
}
function Dl(e, t) {
	let n = e.plugin(fl);
	if (!n) return null;
	let r = n.manager.tooltips.indexOf(t);
	return r < 0 ? null : n.manager.tooltipViews[r];
}
var Ol = /*@__PURE__*/ F.define(), kl = /*@__PURE__*/ P.define({ combine(e) {
	let t, n;
	for (let r of e) t ||= r.topContainer, n ||= r.bottomContainer;
	return {
		topContainer: t,
		bottomContainer: n
	};
} });
function Al(e, t) {
	let n = e.plugin(jl), r = n ? n.specs.indexOf(t) : -1;
	return r > -1 ? n.panels[r] : null;
}
var jl = /*@__PURE__*/ G.fromClass(class {
	constructor(e) {
		this.input = e.state.facet(Pl), this.specs = this.input.filter((e) => e), this.panels = this.specs.map((t) => t(e));
		let t = e.state.facet(kl);
		this.top = new Ml(e, !0, t.topContainer), this.bottom = new Ml(e, !1, t.bottomContainer), this.top.sync(this.panels.filter((e) => e.top)), this.bottom.sync(this.panels.filter((e) => !e.top));
		for (let e of this.panels) e.dom.classList.add("cm-panel"), e.mount && e.mount();
	}
	update(e) {
		let t = e.state.facet(kl);
		this.top.container != t.topContainer && (this.top.sync([]), this.top = new Ml(e.view, !0, t.topContainer)), this.bottom.container != t.bottomContainer && (this.bottom.sync([]), this.bottom = new Ml(e.view, !1, t.bottomContainer)), this.top.syncClasses(), this.bottom.syncClasses();
		let n = e.state.facet(Pl);
		if (n != this.input) {
			let t = n.filter((e) => e), r = [], i = [], a = [], o = [];
			for (let n of t) {
				let t = this.specs.indexOf(n), s;
				t < 0 ? (s = n(e.view), o.push(s)) : (s = this.panels[t], s.update && s.update(e)), r.push(s), (s.top ? i : a).push(s);
			}
			this.specs = t, this.panels = r, this.top.sync(i), this.bottom.sync(a);
			for (let e of o) e.dom.classList.add("cm-panel"), e.mount && e.mount();
		} else for (let t of this.panels) t.update && t.update(e);
	}
	destroy() {
		this.top.sync([]), this.bottom.sync([]);
	}
}, { provide: (e) => J.scrollMargins.of((t) => {
	let n = t.plugin(e);
	return n && {
		top: n.top.scrollMargin(),
		bottom: n.bottom.scrollMargin()
	};
}) }), Ml = class {
	constructor(e, t, n) {
		this.view = e, this.top = t, this.container = n, this.dom = void 0, this.classes = "", this.panels = [], this.syncClasses();
	}
	sync(e) {
		for (let t of this.panels) t.destroy && e.indexOf(t) < 0 && t.destroy();
		this.panels = e, this.syncDOM();
	}
	syncDOM() {
		if (this.panels.length == 0) {
			this.dom &&= (this.dom.remove(), void 0);
			return;
		}
		if (!this.dom) {
			this.dom = document.createElement("div"), this.dom.className = this.top ? "cm-panels cm-panels-top" : "cm-panels cm-panels-bottom";
			let e = this.container || this.view.dom;
			e.insertBefore(this.dom, this.top ? e.firstChild : null);
		}
		let e = this.dom.firstChild;
		for (let t of this.panels) if (t.dom.parentNode == this.dom) {
			for (; e != t.dom;) e = Nl(e);
			e = e.nextSibling;
		} else this.dom.insertBefore(t.dom, e);
		for (; e;) e = Nl(e);
	}
	scrollMargin() {
		return !this.dom || this.container ? 0 : Math.max(0, this.top ? this.dom.getBoundingClientRect().bottom - Math.max(0, this.view.scrollDOM.getBoundingClientRect().top) : Math.min(innerHeight, this.view.scrollDOM.getBoundingClientRect().bottom) - this.dom.getBoundingClientRect().top);
	}
	syncClasses() {
		if (this.container && this.classes != this.view.themeClasses) {
			for (let e of this.classes.split(" ")) e && this.container.classList.remove(e);
			for (let e of (this.classes = this.view.themeClasses).split(" ")) e && this.container.classList.add(e);
		}
	}
};
function Nl(e) {
	let t = e.nextSibling;
	return e.remove(), t;
}
var Pl = /*@__PURE__*/ P.define({ enables: jl });
function Fl(e, t) {
	let n, r = new Promise((e) => n = e), i = (e) => Bl(e, t, n);
	e.state.field(Ll, !1) ? e.dispatch({ effects: Rl.of(i) }) : e.dispatch({ effects: F.appendConfig.of(Ll.init(() => [i])) });
	let a = zl.of(i);
	return {
		close: a,
		result: r.then((t) => ((e.win.queueMicrotask || ((t) => e.win.setTimeout(t, 10)))(() => {
			e.state.field(Ll).indexOf(i) > -1 && e.dispatch({ effects: a });
		}), t))
	};
}
function Il(e, t) {
	let n = e.state.field(Ll, !1) || [];
	for (let r of n) {
		let n = Al(e, r);
		if (n && n.dom.classList.contains(t)) return n;
	}
	return null;
}
var Ll = /*@__PURE__*/ It.define({
	create() {
		return [];
	},
	update(e, t) {
		for (let n of t.effects) n.is(Rl) ? e = [n.value].concat(e) : n.is(zl) && (e = e.filter((e) => e != n.value));
		return e;
	},
	provide: (e) => Pl.computeN([e], (t) => t.field(e))
}), Rl = /*@__PURE__*/ F.define(), zl = /*@__PURE__*/ F.define();
function Bl(e, t, n) {
	let r = t.content ? t.content(e, () => s(null)) : null;
	if (!r) {
		if (r = z("form"), t.input) {
			let e = z("input", t.input);
			/^(text|password|number|email|tel|url)$/.test(e.type) && e.classList.add("cm-textfield"), e.name ||= "input", r.appendChild(z("label", (t.label || "") + ": ", e));
		} else r.appendChild(document.createTextNode(t.label || ""));
		r.appendChild(document.createTextNode(" ")), r.appendChild(z("button", {
			class: "cm-button",
			type: "submit"
		}, t.submitLabel || "OK"));
	}
	let i = r.nodeName == "FORM" ? [r] : r.querySelectorAll("form");
	for (let e = 0; e < i.length; e++) {
		let t = i[e];
		t.addEventListener("keydown", (e) => {
			e.keyCode == 27 ? (e.preventDefault(), s(null)) : e.keyCode == 13 && (e.preventDefault(), s(t));
		}), t.addEventListener("submit", (e) => {
			e.preventDefault(), s(t);
		});
	}
	let a = z("div", r, z("button", {
		onclick: () => s(null),
		"aria-label": e.state.phrase("close"),
		class: "cm-dialog-close",
		type: "button"
	}, ["×"]));
	t.class && (a.className = t.class), a.classList.add("cm-dialog");
	let o = typeof t.focus == "string" ? r.querySelector(t.focus) : t.focus ? r.querySelector("input") || r.querySelector("button") : null;
	function s(t) {
		a.contains(a.ownerDocument.activeElement) && e.focus(), n(t);
	}
	return {
		dom: a,
		top: t.top,
		mount: () => {
			o && ("select" in o ? o.select() : "focus" in o && o.focus());
		},
		destroy: () => n(null)
	};
}
var Vl = class extends vn {
	compare(e) {
		return this == e || this.constructor == e.constructor && this.eq(e);
	}
	eq(e) {
		return !1;
	}
	destroy(e) {}
};
Vl.prototype.elementClass = "", Vl.prototype.toDOM = void 0, Vl.prototype.mapMode = vt.TrackBefore, Vl.prototype.startSide = Vl.prototype.endSide = -1, Vl.prototype.point = !0;
var Hl = /*@__PURE__*/ P.define(), Ul = /*@__PURE__*/ P.define(), Wl = {
	class: "",
	renderEmptyElements: !1,
	elementStyle: "",
	markers: () => R.empty,
	lineMarker: () => null,
	widgetMarker: () => null,
	lineMarkerChange: null,
	initialSpacer: null,
	updateSpacer: null,
	domEventHandlers: {},
	side: "before"
}, Gl = /*@__PURE__*/ P.define();
function Kl(e) {
	return [Jl(), Gl.of({
		...Wl,
		...e
	})];
}
var ql = /*@__PURE__*/ P.define({ combine: (e) => e.some((e) => e) });
function Jl(e) {
	let t = [Yl];
	return e && e.fixed === !1 && t.push(ql.of(!0)), t;
}
var Yl = /*@__PURE__*/ G.fromClass(class {
	constructor(e) {
		this.view = e, this.domAfter = null, this.prevViewport = e.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters cm-gutters-before", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.gutters = e.state.facet(Gl).map((t) => new $l(e, t)), this.fixed = !e.state.facet(ql);
		for (let e of this.gutters) e.config.side == "after" ? this.getDOMAfter().appendChild(e.dom) : this.dom.appendChild(e.dom);
		this.fixed && (this.dom.style.position = "sticky"), this.syncGutters(!1), e.scrollDOM.insertBefore(this.dom, e.contentDOM);
	}
	getDOMAfter() {
		return this.domAfter || (this.domAfter = document.createElement("div"), this.domAfter.className = "cm-gutters cm-gutters-after", this.domAfter.setAttribute("aria-hidden", "true"), this.domAfter.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.domAfter.style.position = this.fixed ? "sticky" : "", this.view.scrollDOM.appendChild(this.domAfter)), this.domAfter;
	}
	update(e) {
		if (this.updateGutters(e)) {
			let t = this.prevViewport, n = e.view.viewport, r = Math.min(t.to, n.to) - Math.max(t.from, n.from);
			this.syncGutters(r < (n.to - n.from) * .8);
		}
		if (e.geometryChanged) {
			let e = this.view.contentHeight / this.view.scaleY + "px";
			this.dom.style.minHeight = e, this.domAfter && (this.domAfter.style.minHeight = e);
		}
		this.view.state.facet(ql) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : "", this.domAfter && (this.domAfter.style.position = this.fixed ? "sticky" : "")), this.prevViewport = e.view.viewport;
	}
	syncGutters(e) {
		let t = this.dom.nextSibling;
		e && (this.dom.remove(), this.domAfter && this.domAfter.remove());
		let n = R.iter(this.view.state.facet(Hl), this.view.viewport.from), r = [], i = this.gutters.map((e) => new Ql(e, this.view.viewport, -this.view.documentPadding.top));
		for (let e of this.view.viewportLineBlocks) if (r.length && (r = []), Array.isArray(e.type)) {
			let t = !0;
			for (let a of e.type) if (a.type == _r.Text && t) {
				Zl(n, r, a.from);
				for (let e of i) e.line(this.view, a, r);
				t = !1;
			} else if (a.widget) for (let e of i) e.widget(this.view, a);
		} else if (e.type == _r.Text) {
			Zl(n, r, e.from);
			for (let t of i) t.line(this.view, e, r);
		} else if (e.widget) for (let t of i) t.widget(this.view, e);
		for (let e of i) e.finish();
		e && (this.view.scrollDOM.insertBefore(this.dom, t), this.domAfter && this.view.scrollDOM.appendChild(this.domAfter));
	}
	updateGutters(e) {
		let t = e.startState.facet(Gl), n = e.state.facet(Gl), r = e.docChanged || e.heightChanged || e.viewportChanged || !R.eq(e.startState.facet(Hl), e.state.facet(Hl), e.view.viewport.from, e.view.viewport.to);
		if (t == n) for (let t of this.gutters) t.update(e) && (r = !0);
		else {
			r = !0;
			let i = [];
			for (let r of n) {
				let n = t.indexOf(r);
				n < 0 ? i.push(new $l(this.view, r)) : (this.gutters[n].update(e), i.push(this.gutters[n]));
			}
			for (let e of this.gutters) e.dom.remove(), i.indexOf(e) < 0 && e.destroy();
			for (let e of i) e.config.side == "after" ? this.getDOMAfter().appendChild(e.dom) : this.dom.appendChild(e.dom);
			this.gutters = i;
		}
		return r;
	}
	destroy() {
		for (let e of this.gutters) e.destroy();
		this.dom.remove(), this.domAfter && this.domAfter.remove();
	}
}, { provide: (e) => J.scrollMargins.of((t) => {
	let n = t.plugin(e);
	if (!n || n.gutters.length == 0 || !n.fixed) return null;
	let r = n.dom.offsetWidth * t.scaleX, i = n.domAfter ? n.domAfter.offsetWidth * t.scaleX : 0;
	return t.textDirection == U.LTR ? {
		left: r,
		right: i
	} : {
		right: r,
		left: i
	};
}) });
function Xl(e) {
	return Array.isArray(e) ? e : [e];
}
function Zl(e, t, n) {
	for (; e.value && e.from <= n;) e.from == n && t.push(e.value), e.next();
}
var Ql = class {
	constructor(e, t, n) {
		this.gutter = e, this.height = n, this.i = 0, this.cursor = R.iter(e.markers, t.from);
	}
	addElement(e, t, n) {
		let { gutter: r } = this, i = (t.top - this.height) / e.scaleY, a = t.height / e.scaleY;
		if (this.i == r.elements.length) {
			let t = new eu(e, a, i, n);
			r.elements.push(t), r.dom.appendChild(t.dom);
		} else r.elements[this.i].update(e, a, i, n);
		this.height = t.bottom, this.i++;
	}
	line(e, t, n) {
		let r = [];
		Zl(this.cursor, r, t.from), n.length && (r = r.concat(n));
		let i = this.gutter.config.lineMarker(e, t, r);
		i && r.unshift(i);
		let a = this.gutter;
		(r.length != 0 || a.config.renderEmptyElements) && this.addElement(e, t, r);
	}
	widget(e, t) {
		let n = this.gutter.config.widgetMarker(e, t.widget, t), r = n ? [n] : null;
		for (let n of e.state.facet(Ul)) {
			let i = n(e, t.widget, t);
			i && (r ||= []).push(i);
		}
		r && this.addElement(e, t, r);
	}
	finish() {
		let e = this.gutter;
		for (; e.elements.length > this.i;) {
			let t = e.elements.pop();
			e.dom.removeChild(t.dom), t.destroy();
		}
	}
}, $l = class {
	constructor(e, t) {
		this.view = e, this.config = t, this.elements = [], this.spacer = null, this.dom = document.createElement("div"), this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : "");
		for (let n in t.domEventHandlers) this.dom.addEventListener(n, (r) => {
			let i = r.target, a;
			if (i != this.dom && this.dom.contains(i)) {
				for (; i.parentNode != this.dom;) i = i.parentNode;
				let e = i.getBoundingClientRect();
				a = (e.top + e.bottom) / 2;
			} else a = r.clientY;
			let o = e.lineBlockAtHeight(a - e.documentTop);
			t.domEventHandlers[n](e, o, r) && r.preventDefault();
		});
		this.markers = Xl(t.markers(e)), t.initialSpacer && (this.spacer = new eu(e, 0, 0, [t.initialSpacer(e)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none");
	}
	update(e) {
		let t = this.markers;
		if (this.markers = Xl(this.config.markers(e.view)), this.spacer && this.config.updateSpacer) {
			let t = this.config.updateSpacer(this.spacer.markers[0], e);
			t != this.spacer.markers[0] && this.spacer.update(e.view, 0, 0, [t]);
		}
		let n = e.view.viewport;
		return !R.eq(this.markers, t, n.from, n.to) || (this.config.lineMarkerChange ? this.config.lineMarkerChange(e) : !1);
	}
	destroy() {
		for (let e of this.elements) e.destroy();
	}
}, eu = class {
	constructor(e, t, n, r) {
		this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(e, t, n, r);
	}
	update(e, t, n, r) {
		this.height != t && (this.height = t, this.dom.style.height = t + "px"), this.above != n && (this.dom.style.marginTop = (this.above = n) ? n + "px" : ""), tu(this.markers, r) || this.setMarkers(e, r);
	}
	setMarkers(e, t) {
		let n = "cm-gutterElement", r = this.dom.firstChild;
		for (let i = 0, a = 0;;) {
			let o = a, s = i < t.length ? t[i++] : null, c = !1;
			if (s) {
				let e = s.elementClass;
				e && (n += " " + e);
				for (let e = a; e < this.markers.length; e++) if (this.markers[e].compare(s)) {
					o = e, c = !0;
					break;
				}
			} else o = this.markers.length;
			for (; a < o;) {
				let e = this.markers[a++];
				if (e.toDOM) {
					e.destroy(r);
					let t = r.nextSibling;
					r.remove(), r = t;
				}
			}
			if (!s) break;
			s.toDOM && (c ? r = r.nextSibling : this.dom.insertBefore(s.toDOM(e), r)), c && a++;
		}
		this.dom.className = n, this.markers = t;
	}
	destroy() {
		this.setMarkers(null, []);
	}
};
function tu(e, t) {
	if (e.length != t.length) return !1;
	for (let n = 0; n < e.length; n++) if (!e[n].compare(t[n])) return !1;
	return !0;
}
var nu = /*@__PURE__*/ P.define(), ru = /*@__PURE__*/ P.define(), iu = /*@__PURE__*/ P.define({ combine(e) {
	return _n(e, {
		formatNumber: String,
		domEventHandlers: {}
	}, { domEventHandlers(e, t) {
		let n = Object.assign({}, e);
		for (let e in t) {
			let r = n[e], i = t[e];
			n[e] = r ? (e, t, n) => r(e, t, n) || i(e, t, n) : i;
		}
		return n;
	} });
} }), au = class extends Vl {
	constructor(e) {
		super(), this.number = e;
	}
	eq(e) {
		return this.number == e.number;
	}
	toDOM() {
		return document.createTextNode(this.number);
	}
};
function ou(e, t) {
	return e.state.facet(iu).formatNumber(t, e.state);
}
var su = /*@__PURE__*/ Gl.compute([iu], (e) => ({
	class: "cm-lineNumbers",
	renderEmptyElements: !1,
	markers(e) {
		return e.state.facet(nu);
	},
	lineMarker(e, t, n) {
		return n.some((e) => e.toDOM) ? null : new au(ou(e, e.state.doc.lineAt(t.from).number));
	},
	widgetMarker: (e, t, n) => {
		for (let r of e.state.facet(ru)) {
			let i = r(e, t, n);
			if (i) return i;
		}
		return null;
	},
	lineMarkerChange: (e) => e.startState.facet(iu) != e.state.facet(iu),
	initialSpacer(e) {
		return new au(ou(e, lu(e.state.doc.lines)));
	},
	updateSpacer(e, t) {
		let n = ou(t.view, lu(t.view.state.doc.lines));
		return n == e.number ? e : new au(n);
	},
	domEventHandlers: e.facet(iu).domEventHandlers,
	side: "before"
}));
function cu(e = {}) {
	return [
		iu.of(e),
		Jl(),
		su
	];
}
function lu(e) {
	let t = 9;
	for (; t < e;) t = t * 10 + 9;
	return t;
}
var uu = /*@__PURE__*/ new class extends Vl {
	constructor() {
		super(...arguments), this.elementClass = "cm-activeLineGutter";
	}
}(), du = /*@__PURE__*/ Hl.compute(["selection"], (e) => {
	let t = [], n = -1;
	for (let r of e.selection.ranges) {
		let i = e.doc.lineAt(r.head).from;
		i > n && (n = i, t.push(uu.range(i)));
	}
	return R.of(t);
});
function fu() {
	return du;
}
// node_modules/@lezer/common/dist/index.js
var pu = 1024, mu = 0, hu = class {
	constructor(e, t) {
		this.from = e, this.to = t;
	}
}, Y = class {
	constructor(e = {}) {
		this.id = mu++, this.perNode = !!e.perNode, this.deserialize = e.deserialize || (() => {
			throw Error("This node type doesn't define a deserialize function");
		}), this.combine = e.combine || null;
	}
	add(e) {
		if (this.perNode) throw RangeError("Can't add per-node props to node types");
		return typeof e != "function" && (e = vu.match(e)), (t) => {
			let n = e(t);
			return n === void 0 ? null : [this, n];
		};
	}
};
Y.closedBy = new Y({ deserialize: (e) => e.split(" ") }), Y.openedBy = new Y({ deserialize: (e) => e.split(" ") }), Y.group = new Y({ deserialize: (e) => e.split(" ") }), Y.isolate = new Y({ deserialize: (e) => {
	if (e && e != "rtl" && e != "ltr" && e != "auto") throw RangeError("Invalid value for isolate: " + e);
	return e || "auto";
} }), Y.contextHash = new Y({ perNode: !0 }), Y.lookAhead = new Y({ perNode: !0 }), Y.mounted = new Y({ perNode: !0 });
var gu = class {
	constructor(e, t, n, r = !1) {
		this.tree = e, this.overlay = t, this.parser = n, this.bracketed = r;
	}
	static get(e) {
		return e && e.props && e.props[Y.mounted.id];
	}
}, _u = Object.create(null), vu = class e {
	constructor(e, t, n, r = 0) {
		this.name = e, this.props = t, this.id = n, this.flags = r;
	}
	static define(t) {
		let n = t.props && t.props.length ? Object.create(null) : _u, r = +!!t.top | (t.skipped ? 2 : 0) | (t.error ? 4 : 0) | (t.name == null ? 8 : 0), i = new e(t.name || "", n, t.id, r);
		if (t.props) {
			for (let e of t.props) if (Array.isArray(e) || (e = e(i)), e) {
				if (e[0].perNode) throw RangeError("Can't store a per-node prop on a node type");
				n[e[0].id] = e[1];
			}
		}
		return i;
	}
	prop(e) {
		return this.props[e.id];
	}
	get isTop() {
		return (this.flags & 1) > 0;
	}
	get isSkipped() {
		return (this.flags & 2) > 0;
	}
	get isError() {
		return (this.flags & 4) > 0;
	}
	get isAnonymous() {
		return (this.flags & 8) > 0;
	}
	is(e) {
		if (typeof e == "string") {
			if (this.name == e) return !0;
			let t = this.prop(Y.group);
			return t ? t.indexOf(e) > -1 : !1;
		}
		return this.id == e;
	}
	static match(e) {
		let t = Object.create(null);
		for (let n in e) for (let r of n.split(" ")) t[r] = e[n];
		return (e) => {
			for (let n = e.prop(Y.group), r = -1; r < (n ? n.length : 0); r++) {
				let i = t[r < 0 ? e.name : n[r]];
				if (i) return i;
			}
		};
	}
};
vu.none = new vu("", Object.create(null), 0, 8);
var yu = class e {
	constructor(e) {
		this.types = e;
		for (let t = 0; t < e.length; t++) if (e[t].id != t) throw RangeError("Node type ids should correspond to array positions when creating a node set");
	}
	extend(...t) {
		let n = [];
		for (let e of this.types) {
			let r = null;
			for (let n of t) {
				let t = n(e);
				if (t) {
					r ||= Object.assign({}, e.props);
					let n = t[1], i = t[0];
					i.combine && i.id in r && (n = i.combine(r[i.id], n)), r[i.id] = n;
				}
			}
			n.push(r ? new vu(e.name, r, e.id, e.flags) : e);
		}
		return new e(n);
	}
}, bu = /* @__PURE__ */ new WeakMap(), xu = /* @__PURE__ */ new WeakMap(), X;
(function(e) {
	e[e.ExcludeBuffers = 1] = "ExcludeBuffers", e[e.IncludeAnonymous = 2] = "IncludeAnonymous", e[e.IgnoreMounts = 4] = "IgnoreMounts", e[e.IgnoreOverlays = 8] = "IgnoreOverlays", e[e.EnterBracketed = 16] = "EnterBracketed";
})(X ||= {});
var Su = class e {
	constructor(e, t, n, r, i) {
		if (this.type = e, this.children = t, this.positions = n, this.length = r, this.props = null, i && i.length) {
			this.props = Object.create(null);
			for (let [e, t] of i) this.props[typeof e == "number" ? e : e.id] = t;
		}
	}
	toString() {
		let e = gu.get(this);
		if (e && !e.overlay) return e.tree.toString();
		let t = "";
		for (let e of this.children) {
			let n = e.toString();
			n && (t && (t += ","), t += n);
		}
		return this.type.name ? (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (t.length ? "(" + t + ")" : "") : t;
	}
	cursor(e = 0) {
		return new Iu(this.topNode, e);
	}
	cursorAt(e, t = 0, n = 0) {
		let r = new Iu(bu.get(this) || this.topNode);
		return r.moveTo(e, t), bu.set(this, r._tree), r;
	}
	get topNode() {
		return new Ou(this, 0, 0, null);
	}
	resolve(e, t = 0) {
		let n = Eu(bu.get(this) || this.topNode, e, t, !1);
		return bu.set(this, n), n;
	}
	resolveInner(e, t = 0) {
		let n = Eu(xu.get(this) || this.topNode, e, t, !0);
		return xu.set(this, n), n;
	}
	resolveStack(e, t = 0) {
		return Fu(this, e, t);
	}
	iterate(e) {
		let { enter: t, leave: n, from: r = 0, to: i = this.length } = e, a = e.mode || 0, o = (a & X.IncludeAnonymous) > 0;
		for (let e = this.cursor(a | X.IncludeAnonymous);;) {
			let a = !1;
			if (e.from <= i && e.to >= r && (!o && e.type.isAnonymous || t(e) !== !1)) {
				if (e.firstChild()) continue;
				a = !0;
			}
			for (; a && n && (o || !e.type.isAnonymous) && n(e), !e.nextSibling();) {
				if (!e.parent()) return;
				a = !0;
			}
		}
	}
	prop(e) {
		return e.perNode ? this.props ? this.props[e.id] : void 0 : this.type.prop(e);
	}
	get propValues() {
		let e = [];
		if (this.props) for (let t in this.props) e.push([+t, this.props[t]]);
		return e;
	}
	balance(t = {}) {
		return this.children.length <= 8 ? this : Vu(vu.none, this.children, this.positions, 0, this.children.length, 0, this.length, (t, n, r) => new e(this.type, t, n, r, this.propValues), t.makeTree || ((t, n, r) => new e(vu.none, t, n, r)));
	}
	static build(e) {
		return Ru(e);
	}
};
Su.empty = new Su(vu.none, [], [], 0);
var Cu = class e {
	constructor(e, t) {
		this.buffer = e, this.index = t;
	}
	get id() {
		return this.buffer[this.index - 4];
	}
	get start() {
		return this.buffer[this.index - 3];
	}
	get end() {
		return this.buffer[this.index - 2];
	}
	get size() {
		return this.buffer[this.index - 1];
	}
	get pos() {
		return this.index;
	}
	next() {
		this.index -= 4;
	}
	fork() {
		return new e(this.buffer, this.index);
	}
}, wu = class e {
	constructor(e, t, n) {
		this.buffer = e, this.length = t, this.set = n;
	}
	get type() {
		return vu.none;
	}
	toString() {
		let e = [];
		for (let t = 0; t < this.buffer.length;) e.push(this.childString(t)), t = this.buffer[t + 3];
		return e.join(",");
	}
	childString(e) {
		let t = this.buffer[e], n = this.buffer[e + 3], r = this.set.types[t], i = r.name;
		if (/\W/.test(i) && !r.isError && (i = JSON.stringify(i)), e += 4, n == e) return i;
		let a = [];
		for (; e < n;) a.push(this.childString(e)), e = this.buffer[e + 3];
		return i + "(" + a.join(",") + ")";
	}
	findChild(e, t, n, r, i) {
		let { buffer: a } = this, o = -1;
		for (let s = e; s != t && !(Tu(i, r, a[s + 1], a[s + 2]) && (o = s, n > 0)); s = a[s + 3]);
		return o;
	}
	slice(t, n, r) {
		let i = this.buffer, a = new Uint16Array(n - t), o = 0;
		for (let e = t, s = 0; e < n;) {
			a[s++] = i[e++], a[s++] = i[e++] - r;
			let n = a[s++] = i[e++] - r;
			a[s++] = i[e++] - t, o = Math.max(o, n);
		}
		return new e(a, o, this.set);
	}
};
function Tu(e, t, n, r) {
	switch (e) {
		case -2: return n < t;
		case -1: return r >= t && n < t;
		case 0: return n < t && r > t;
		case 1: return n <= t && r > t;
		case 2: return r > t;
		case 4: return !0;
	}
}
function Eu(e, t, n, r) {
	for (; e.from == e.to || (n < 1 ? e.from >= t : e.from > t) || (n > -1 ? e.to <= t : e.to < t);) {
		let t = !r && e instanceof Ou && e.index < 0 ? null : e.parent;
		if (!t) return e;
		e = t;
	}
	let i = r ? 0 : X.IgnoreOverlays;
	if (r) for (let r = e, a = r.parent; a; r = a, a = r.parent) r instanceof Ou && r.index < 0 && a.enter(t, n, i)?.from != r.from && (e = a);
	for (;;) {
		let r = e.enter(t, n, i);
		if (!r) return e;
		e = r;
	}
}
var Du = class {
	cursor(e = 0) {
		return new Iu(this, e);
	}
	getChild(e, t = null, n = null) {
		let r = ku(this, e, t, n);
		return r.length ? r[0] : null;
	}
	getChildren(e, t = null, n = null) {
		return ku(this, e, t, n);
	}
	resolve(e, t = 0) {
		return Eu(this, e, t, !1);
	}
	resolveInner(e, t = 0) {
		return Eu(this, e, t, !0);
	}
	matchContext(e) {
		return Au(this.parent, e);
	}
	enterUnfinishedNodesBefore(e) {
		let t = this.childBefore(e), n = this;
		for (; t;) {
			let e = t.lastChild;
			if (!e || e.to != t.to) break;
			e.type.isError && e.from == e.to ? (n = t, t = e.prevSibling) : t = e;
		}
		return n;
	}
	get node() {
		return this;
	}
	get next() {
		return this.parent;
	}
}, Ou = class e extends Du {
	constructor(e, t, n, r) {
		super(), this._tree = e, this.from = t, this.index = n, this._parent = r;
	}
	get type() {
		return this._tree.type;
	}
	get name() {
		return this._tree.type.name;
	}
	get to() {
		return this.from + this._tree.length;
	}
	nextChild(t, n, r, i, a = 0) {
		for (let o = this;;) {
			for (let { children: s, positions: c } = o._tree, l = n > 0 ? s.length : -1; t != l; t += n) {
				let l = s[t], u = c[t] + o.from, d;
				if (a & X.EnterBracketed && l instanceof Su && (d = gu.get(l)) && !d.overlay && d.bracketed && r >= u && r <= u + l.length || Tu(i, r, u, u + l.length)) {
					if (l instanceof wu) {
						if (a & X.ExcludeBuffers) continue;
						let e = l.findChild(0, l.buffer.length, n, r - u, i);
						if (e > -1) return new Mu(new ju(o, l, t, u), null, e);
					} else if (a & X.IncludeAnonymous || !l.type.isAnonymous || Lu(l)) {
						let s;
						if (!(a & X.IgnoreMounts) && (s = gu.get(l)) && !s.overlay) return new e(s.tree, u, t, o);
						let c = new e(l, u, t, o);
						return a & X.IncludeAnonymous || !c.type.isAnonymous ? c : c.nextChild(n < 0 ? l.children.length - 1 : 0, n, r, i, a);
					}
				}
			}
			if (a & X.IncludeAnonymous || !o.type.isAnonymous || (t = o.index >= 0 ? o.index + n : n < 0 ? -1 : o._parent._tree.children.length, o = o._parent, !o)) return null;
		}
	}
	get firstChild() {
		return this.nextChild(0, 1, 0, 4);
	}
	get lastChild() {
		return this.nextChild(this._tree.children.length - 1, -1, 0, 4);
	}
	childAfter(e) {
		return this.nextChild(0, 1, e, 2);
	}
	childBefore(e) {
		return this.nextChild(this._tree.children.length - 1, -1, e, -2);
	}
	prop(e) {
		return this._tree.prop(e);
	}
	enter(t, n, r = 0) {
		let i;
		if (!(r & X.IgnoreOverlays) && (i = gu.get(this._tree)) && i.overlay) {
			let a = t - this.from, o = r & X.EnterBracketed && i.bracketed;
			for (let { from: t, to: r } of i.overlay) if ((n > 0 || o ? t <= a : t < a) && (n < 0 || o ? r >= a : r > a)) return new e(i.tree, i.overlay[0].from + this.from, -1, this);
		}
		return this.nextChild(0, 1, t, n, r);
	}
	nextSignificantParent() {
		let e = this;
		for (; e.type.isAnonymous && e._parent;) e = e._parent;
		return e;
	}
	get parent() {
		return this._parent ? this._parent.nextSignificantParent() : null;
	}
	get nextSibling() {
		return this._parent && this.index >= 0 ? this._parent.nextChild(this.index + 1, 1, 0, 4) : null;
	}
	get prevSibling() {
		return this._parent && this.index >= 0 ? this._parent.nextChild(this.index - 1, -1, 0, 4) : null;
	}
	get tree() {
		return this._tree;
	}
	toTree() {
		return this._tree;
	}
	toString() {
		return this._tree.toString();
	}
};
function ku(e, t, n, r) {
	let i = e.cursor(), a = [];
	if (!i.firstChild()) return a;
	if (n != null) {
		for (let e = !1; !e;) if (e = i.type.is(n), !i.nextSibling()) return a;
	}
	for (;;) {
		if (r != null && i.type.is(r)) return a;
		if (i.type.is(t) && a.push(i.node), !i.nextSibling()) return r == null ? a : [];
	}
}
function Au(e, t, n = t.length - 1) {
	for (let r = e; n >= 0; r = r.parent) {
		if (!r) return !1;
		if (!r.type.isAnonymous) {
			if (t[n] && t[n] != r.name) return !1;
			n--;
		}
	}
	return !0;
}
var ju = class {
	constructor(e, t, n, r) {
		this.parent = e, this.buffer = t, this.index = n, this.start = r;
	}
}, Mu = class e extends Du {
	get name() {
		return this.type.name;
	}
	get from() {
		return this.context.start + this.context.buffer.buffer[this.index + 1];
	}
	get to() {
		return this.context.start + this.context.buffer.buffer[this.index + 2];
	}
	constructor(e, t, n) {
		super(), this.context = e, this._parent = t, this.index = n, this.type = e.buffer.set.types[e.buffer.buffer[n]];
	}
	child(t, n, r) {
		let { buffer: i } = this.context, a = i.findChild(this.index + 4, i.buffer[this.index + 3], t, n - this.context.start, r);
		return a < 0 ? null : new e(this.context, this, a);
	}
	get firstChild() {
		return this.child(1, 0, 4);
	}
	get lastChild() {
		return this.child(-1, 0, 4);
	}
	childAfter(e) {
		return this.child(1, e, 2);
	}
	childBefore(e) {
		return this.child(-1, e, -2);
	}
	prop(e) {
		return this.type.prop(e);
	}
	enter(t, n, r = 0) {
		if (r & X.ExcludeBuffers) return null;
		let { buffer: i } = this.context, a = i.findChild(this.index + 4, i.buffer[this.index + 3], n > 0 ? 1 : -1, t - this.context.start, n);
		return a < 0 ? null : new e(this.context, this, a);
	}
	get parent() {
		return this._parent || this.context.parent.nextSignificantParent();
	}
	externalSibling(e) {
		return this._parent ? null : this.context.parent.nextChild(this.context.index + e, e, 0, 4);
	}
	get nextSibling() {
		let { buffer: t } = this.context, n = t.buffer[this.index + 3];
		return n < (this._parent ? t.buffer[this._parent.index + 3] : t.buffer.length) ? new e(this.context, this._parent, n) : this.externalSibling(1);
	}
	get prevSibling() {
		let { buffer: t } = this.context, n = this._parent ? this._parent.index + 4 : 0;
		return this.index == n ? this.externalSibling(-1) : new e(this.context, this._parent, t.findChild(n, this.index, -1, 0, 4));
	}
	get tree() {
		return null;
	}
	toTree() {
		let e = [], t = [], { buffer: n } = this.context, r = this.index + 4, i = n.buffer[this.index + 3];
		if (i > r) {
			let a = n.buffer[this.index + 1];
			e.push(n.slice(r, i, a)), t.push(0);
		}
		return new Su(this.type, e, t, this.to - this.from);
	}
	toString() {
		return this.context.buffer.childString(this.index);
	}
};
function Nu(e) {
	if (!e.length) return null;
	let t = 0, n = e[0];
	for (let r = 1; r < e.length; r++) {
		let i = e[r];
		(i.from > n.from || i.to < n.to) && (n = i, t = r);
	}
	let r = n instanceof Ou && n.index < 0 ? null : n.parent, i = e.slice();
	return r ? i[t] = r : i.splice(t, 1), new Pu(i, n);
}
var Pu = class {
	constructor(e, t) {
		this.heads = e, this.node = t;
	}
	get next() {
		return Nu(this.heads);
	}
};
function Fu(e, t, n) {
	let r = e.resolveInner(t, n), i = null;
	for (let e = r instanceof Ou ? r : r.context.parent; e; e = e.parent) if (e.index < 0) {
		let a = e.parent;
		(i ||= [r]).push(a.resolve(t, n)), e = a;
	} else {
		let a = gu.get(e.tree);
		if (a && a.overlay && a.overlay[0].from <= t && a.overlay[a.overlay.length - 1].to >= t) {
			let o = new Ou(a.tree, a.overlay[0].from + e.from, -1, e);
			(i ||= [r]).push(Eu(o, t, n, !1));
		}
	}
	return i ? Nu(i) : r;
}
var Iu = class {
	get name() {
		return this.type.name;
	}
	constructor(e, t = 0) {
		if (this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, this.mode = t & ~X.EnterBracketed, e instanceof Ou) this.yieldNode(e);
		else {
			this._tree = e.context.parent, this.buffer = e.context;
			for (let t = e._parent; t; t = t._parent) this.stack.unshift(t.index);
			this.bufferNode = e, this.yieldBuf(e.index);
		}
	}
	yieldNode(e) {
		return e ? (this._tree = e, this.type = e.type, this.from = e.from, this.to = e.to, !0) : !1;
	}
	yieldBuf(e, t) {
		this.index = e;
		let { start: n, buffer: r } = this.buffer;
		return this.type = t || r.set.types[r.buffer[e]], this.from = n + r.buffer[e + 1], this.to = n + r.buffer[e + 2], !0;
	}
	yield(e) {
		return e ? e instanceof Ou ? (this.buffer = null, this.yieldNode(e)) : (this.buffer = e.context, this.yieldBuf(e.index, e.type)) : !1;
	}
	toString() {
		return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString();
	}
	enterChild(e, t, n) {
		if (!this.buffer) return this.yield(this._tree.nextChild(e < 0 ? this._tree._tree.children.length - 1 : 0, e, t, n, this.mode));
		let { buffer: r } = this.buffer, i = r.findChild(this.index + 4, r.buffer[this.index + 3], e, t - this.buffer.start, n);
		return i < 0 ? !1 : (this.stack.push(this.index), this.yieldBuf(i));
	}
	firstChild() {
		return this.enterChild(1, 0, 4);
	}
	lastChild() {
		return this.enterChild(-1, 0, 4);
	}
	childAfter(e) {
		return this.enterChild(1, e, 2);
	}
	childBefore(e) {
		return this.enterChild(-1, e, -2);
	}
	enter(e, t, n = this.mode) {
		return this.buffer ? n & X.ExcludeBuffers ? !1 : this.enterChild(1, e, t) : this.yield(this._tree.enter(e, t, n));
	}
	parent() {
		if (!this.buffer) return this.yieldNode(this.mode & X.IncludeAnonymous ? this._tree._parent : this._tree.parent);
		if (this.stack.length) return this.yieldBuf(this.stack.pop());
		let e = this.mode & X.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
		return this.buffer = null, this.yieldNode(e);
	}
	sibling(e) {
		if (!this.buffer) return this._tree._parent ? this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + e, e, 0, 4, this.mode)) : !1;
		let { buffer: t } = this.buffer, n = this.stack.length - 1;
		if (e < 0) {
			let e = n < 0 ? 0 : this.stack[n] + 4;
			if (this.index != e) return this.yieldBuf(t.findChild(e, this.index, -1, 0, 4));
		} else {
			let e = t.buffer[this.index + 3];
			if (e < (n < 0 ? t.buffer.length : t.buffer[this.stack[n] + 3])) return this.yieldBuf(e);
		}
		return n < 0 && this.yield(this.buffer.parent.nextChild(this.buffer.index + e, e, 0, 4, this.mode));
	}
	nextSibling() {
		return this.sibling(1);
	}
	prevSibling() {
		return this.sibling(-1);
	}
	atLastNode(e) {
		let t, n, { buffer: r } = this;
		if (r) {
			if (e > 0) {
				if (this.index < r.buffer.buffer.length) return !1;
			} else for (let e = 0; e < this.index; e++) if (r.buffer.buffer[e + 3] < this.index) return !1;
			({index: t, parent: n} = r);
		} else ({index: t, _parent: n} = this._tree);
		for (; n; {index: t, _parent: n} = n) if (t > -1) for (let r = t + e, i = e < 0 ? -1 : n._tree.children.length; r != i; r += e) {
			let e = n._tree.children[r];
			if (this.mode & X.IncludeAnonymous || e instanceof wu || !e.type.isAnonymous || Lu(e)) return !1;
		}
		return !0;
	}
	move(e, t) {
		if (t && this.enterChild(e, 0, 4)) return !0;
		for (;;) {
			if (this.sibling(e)) return !0;
			if (this.atLastNode(e) || !this.parent()) return !1;
		}
	}
	next(e = !0) {
		return this.move(1, e);
	}
	prev(e = !0) {
		return this.move(-1, e);
	}
	moveTo(e, t = 0) {
		for (; (this.from == this.to || (t < 1 ? this.from >= e : this.from > e) || (t > -1 ? this.to <= e : this.to < e)) && this.parent(););
		for (; this.enterChild(1, e, t););
		return this;
	}
	get node() {
		if (!this.buffer) return this._tree;
		let e = this.bufferNode, t = null, n = 0;
		if (e && e.context == this.buffer) scan: for (let r = this.index, i = this.stack.length; i >= 0;) {
			for (let a = e; a; a = a._parent) if (a.index == r) {
				if (r == this.index) return a;
				t = a, n = i + 1;
				break scan;
			}
			r = this.stack[--i];
		}
		for (let e = n; e < this.stack.length; e++) t = new Mu(this.buffer, t, this.stack[e]);
		return this.bufferNode = new Mu(this.buffer, t, this.index);
	}
	get tree() {
		return this.buffer ? null : this._tree._tree;
	}
	iterate(e, t) {
		for (let n = 0;;) {
			let r = !1;
			if (this.type.isAnonymous || e(this) !== !1) {
				if (this.firstChild()) {
					n++;
					continue;
				}
				this.type.isAnonymous || (r = !0);
			}
			for (;;) {
				if (r && t && t(this), r = this.type.isAnonymous, !n) return;
				if (this.nextSibling()) break;
				this.parent(), n--, r = !0;
			}
		}
	}
	matchContext(e) {
		if (!this.buffer) return Au(this.node.parent, e);
		let { buffer: t } = this.buffer, { types: n } = t.set;
		for (let r = e.length - 1, i = this.stack.length - 1; r >= 0; i--) {
			if (i < 0) return Au(this._tree, e, r);
			let a = n[t.buffer[this.stack[i]]];
			if (!a.isAnonymous) {
				if (e[r] && e[r] != a.name) return !1;
				r--;
			}
		}
		return !0;
	}
};
function Lu(e) {
	return e.children.some((e) => e instanceof wu || !e.type.isAnonymous || Lu(e));
}
function Ru(e) {
	let { buffer: t, nodeSet: n, maxBufferLength: r = pu, reused: i = [], minRepeatType: a = n.types.length } = e, o = Array.isArray(t) ? new Cu(t, t.length) : t, s = n.types, c = 0, l = 0;
	function u(e, t, _, v, y, ee) {
		let { id: b, start: x, end: S, size: C } = o, w = l, te = c;
		if (C < 0) {
			if (o.next(), C == -1) {
				let t = i[b];
				_.push(t), v.push(x - e);
				return;
			}
			if (C == -3) {
				c = b;
				return;
			}
			if (C == -4) {
				l = b;
				return;
			}
			throw RangeError(`Unrecognized record size: ${C}`);
		}
		let T = s[b], E, ne, re = x - e;
		if (S - x <= r && (ne = h(o.pos - t, y))) {
			let t = new Uint16Array(ne.size - ne.skip), r = o.pos - ne.size, i = t.length;
			for (; o.pos > r;) i = g(ne.start, t, i);
			E = new wu(t, S - ne.start, n), re = ne.start - e;
		} else {
			let e = o.pos - C;
			o.next();
			let t = [], n = [], i = b >= a ? b : -1, s = 0, c = S, h = w;
			for (; o.pos > e;) i >= 0 && o.id == i && o.size >= 0 ? (o.end <= c - r && (p(t, n, x, s, o.end, c, i, h, te), s = t.length, c = o.end, h = l), o.next()) : ee > 2500 ? d(x, e, t, n) : u(x, e, t, n, i, ee + 1);
			if (i >= 0 && s > 0 && s < t.length && p(t, n, x, s, x, c, i, h, te), t.reverse(), n.reverse(), i > -1 && s > 0) {
				let e = f(T, te);
				E = Vu(T, t, n, 0, t.length, 0, S - x, e, e);
			} else E = m(T, t, n, S - x, w - S, te);
		}
		_.push(E), v.push(re);
	}
	function d(e, t, i, a) {
		let s = [], c = 0, l = -1;
		for (; o.pos > t;) {
			let { id: e, start: t, end: n, size: i } = o;
			if (i > 4) o.next();
			else if (l > -1 && t < l) break;
			else l < 0 && (l = n - r), s.push(e, t, n), c++, o.next();
		}
		if (c) {
			let t = new Uint16Array(c * 4), r = s[s.length - 2];
			for (let e = s.length - 3, n = 0; e >= 0; e -= 3) t[n++] = s[e], t[n++] = s[e + 1] - r, t[n++] = s[e + 2] - r, t[n++] = n;
			i.push(new wu(t, s[2] - r, n)), a.push(r - e);
		}
	}
	function f(e, t) {
		return (n, r, i) => {
			let a = 0, o = n.length - 1, s, c;
			if (o >= 0 && (s = n[o]) instanceof Su) {
				if (!o && s.type == e && s.length == i) return s;
				(c = s.prop(Y.lookAhead)) && (a = r[o] + s.length + c - i);
			}
			return m(e, n, r, i, a, t);
		};
	}
	function p(e, t, r, i, a, o, s, c, l) {
		let u = [], d = [];
		for (; e.length > i;) u.push(e.pop()), d.push(t.pop() + r - a);
		e.push(m(n.types[s], u, d, o - a, c - o, l)), t.push(a - r);
	}
	function m(e, t, n, r, i, a, o) {
		if (a) {
			let e = [Y.contextHash, a];
			o = o ? [e].concat(o) : [e];
		}
		if (i > 25) {
			let e = [Y.lookAhead, i];
			o = o ? [e].concat(o) : [e];
		}
		return new Su(e, t, n, r, o);
	}
	function h(e, t) {
		let n = o.fork(), i = 0, s = 0, c = 0, l = n.end - r, u = {
			size: 0,
			start: 0,
			skip: 0
		};
		scan: for (let r = n.pos - e; n.pos > r;) {
			let e = n.size;
			if (n.id == t && e >= 0) {
				u.size = i, u.start = s, u.skip = c, c += 4, i += 4, n.next();
				continue;
			}
			let o = n.pos - e;
			if (e < 0 || o < r || n.start < l) break;
			let d = n.id >= a ? 4 : 0, f = n.start;
			for (n.next(); n.pos > o;) {
				if (n.size < 0) {
					if (n.size == -3 || n.size == -4) d += 4;
					else break scan;
				} else n.id >= a && (d += 4);
				n.next();
			}
			s = f, i += e, c += d;
		}
		return (t < 0 || i == e) && (u.size = i, u.start = s, u.skip = c), u.size > 4 ? u : void 0;
	}
	function g(e, t, n) {
		let { id: r, start: i, end: s, size: u } = o;
		if (o.next(), u >= 0 && r < a) {
			let a = n;
			if (u > 4) {
				let r = o.pos - (u - 4);
				for (; o.pos > r;) n = g(e, t, n);
			}
			t[--n] = a, t[--n] = s - e, t[--n] = i - e, t[--n] = r;
		} else u == -3 ? c = r : u == -4 && (l = r);
		return n;
	}
	let _ = [], v = [];
	for (; o.pos > 0;) u(e.start || 0, e.bufferStart || 0, _, v, -1, 0);
	let y = e.length ?? (_.length ? v[0] + _[0].length : 0);
	return new Su(s[e.topID], _.reverse(), v.reverse(), y);
}
var zu = /* @__PURE__ */ new WeakMap();
function Bu(e, t) {
	if (!e.isAnonymous || t instanceof wu || t.type != e) return 1;
	let n = zu.get(t);
	if (n == null) {
		n = 1;
		for (let r of t.children) {
			if (r.type != e || !(r instanceof Su)) {
				n = 1;
				break;
			}
			n += Bu(e, r);
		}
		zu.set(t, n);
	}
	return n;
}
function Vu(e, t, n, r, i, a, o, s, c) {
	let l = 0;
	for (let n = r; n < i; n++) l += Bu(e, t[n]);
	let u = Math.ceil(l * 1.5 / 8), d = [], f = [];
	function p(t, n, r, i, o) {
		for (let s = r; s < i;) {
			let r = s, l = n[s], m = Bu(e, t[s]);
			for (s++; s < i; s++) {
				let n = Bu(e, t[s]);
				if (m + n >= u) break;
				m += n;
			}
			if (s == r + 1) {
				if (m > u) {
					let e = t[r];
					p(e.children, e.positions, 0, e.children.length, n[r] + o);
					continue;
				}
				d.push(t[r]);
			} else {
				let i = n[s - 1] + t[s - 1].length - l;
				d.push(Vu(e, t, n, r, s, l, i, null, c));
			}
			f.push(l + o - a);
		}
	}
	return p(t, n, r, i, 0), (s || c)(d, f, o);
}
var Hu = class e {
	constructor(e, t, n, r, i = !1, a = !1) {
		this.from = e, this.to = t, this.tree = n, this.offset = r, this.open = !!i | (a ? 2 : 0);
	}
	get openStart() {
		return (this.open & 1) > 0;
	}
	get openEnd() {
		return (this.open & 2) > 0;
	}
	static addTree(t, n = [], r = !1) {
		let i = [new e(0, t.length, t, 0, !1, r)];
		for (let e of n) e.to > t.length && i.push(e);
		return i;
	}
	static applyChanges(t, n, r = 128) {
		if (!n.length) return t;
		let i = [], a = 1, o = t.length ? t[0] : null;
		for (let s = 0, c = 0, l = 0;; s++) {
			let u = s < n.length ? n[s] : null, d = u ? u.fromA : 1e9;
			if (d - c >= r) for (; o && o.from < d;) {
				let n = o;
				if (c >= n.from || d <= n.to || l) {
					let t = Math.max(n.from, c) - l, r = Math.min(n.to, d) - l;
					n = t >= r ? null : new e(t, r, n.tree, n.offset + l, s > 0, !!u);
				}
				if (n && i.push(n), o.to > d) break;
				o = a < t.length ? t[a++] : null;
			}
			if (!u) break;
			c = u.toA, l = u.toA - u.toB;
		}
		return i;
	}
}, Uu = class {
	startParse(e, t, n) {
		return typeof e == "string" && (e = new Wu(e)), n = n ? n.length ? n.map((e) => new hu(e.from, e.to)) : [new hu(0, 0)] : [new hu(0, e.length)], this.createParse(e, t || [], n);
	}
	parse(e, t, n) {
		let r = this.startParse(e, t, n);
		for (;;) {
			let e = r.advance();
			if (e) return e;
		}
	}
}, Wu = class {
	constructor(e) {
		this.string = e;
	}
	get length() {
		return this.string.length;
	}
	chunk(e) {
		return this.string.slice(e);
	}
	get lineChunks() {
		return !1;
	}
	read(e, t) {
		return this.string.slice(e, t);
	}
};
new Y({ perNode: !0 });
// node_modules/@lezer/highlight/dist/index.js
var Gu = 0, Ku = class e {
	constructor(e, t, n, r) {
		this.name = e, this.set = t, this.base = n, this.modified = r, this.id = Gu++;
	}
	toString() {
		let { name: e } = this;
		for (let t of this.modified) t.name && (e = `${t.name}(${e})`);
		return e;
	}
	static define(t, n) {
		let r = typeof t == "string" ? t : "?";
		if (t instanceof e && (n = t), n?.base) throw Error("Can not derive from a modified tag");
		let i = new e(r, [], null, []);
		if (i.set.push(i), n) for (let e of n.set) i.set.push(e);
		return i;
	}
	static defineModifier(e) {
		let t = new Ju(e);
		return (e) => e.modified.indexOf(t) > -1 ? e : Ju.get(e.base || e, e.modified.concat(t).sort((e, t) => e.id - t.id));
	}
}, qu = 0, Ju = class e {
	constructor(e) {
		this.name = e, this.instances = [], this.id = qu++;
	}
	static get(t, n) {
		if (!n.length) return t;
		let r = n[0].instances.find((e) => e.base == t && Yu(n, e.modified));
		if (r) return r;
		let i = [], a = new Ku(t.name, i, t, n);
		for (let e of n) e.instances.push(a);
		let o = Xu(n);
		for (let n of t.set) if (!n.modified.length) for (let t of o) i.push(e.get(n, t));
		return a;
	}
};
function Yu(e, t) {
	return e.length == t.length && e.every((e, n) => e == t[n]);
}
function Xu(e) {
	let t = [[]];
	for (let n = 0; n < e.length; n++) for (let r = 0, i = t.length; r < i; r++) t.push(t[r].concat(e[n]));
	return t.sort((e, t) => t.length - e.length);
}
function Zu(e) {
	let t = Object.create(null);
	for (let n in e) {
		let r = e[n];
		Array.isArray(r) || (r = [r]);
		for (let e of n.split(" ")) if (e) {
			let n = [], i = 2, a = e;
			for (let t = 0;;) {
				if (a == "..." && t > 0 && t + 3 == e.length) {
					i = 1;
					break;
				}
				let r = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(a);
				if (!r) throw RangeError("Invalid path: " + e);
				if (n.push(r[0] == "*" ? "" : r[0][0] == "\"" ? JSON.parse(r[0]) : r[0]), t += r[0].length, t == e.length) break;
				let o = e[t++];
				if (t == e.length && o == "!") {
					i = 0;
					break;
				}
				if (o != "/") throw RangeError("Invalid path: " + e);
				a = e.slice(t);
			}
			let o = n.length - 1, s = n[o];
			if (!s) throw RangeError("Invalid path: " + e);
			t[s] = new $u(r, i, o > 0 ? n.slice(0, o) : null).sort(t[s]);
		}
	}
	return Qu.add(t);
}
var Qu = new Y({ combine(e, t) {
	let n, r, i;
	for (; e || t;) {
		if (!e || t && e.depth <= t.depth ? (i = t, t = t.next) : (i = e, e = e.next), n && n.mode == i.mode && !i.context && !n.context) continue;
		let a = new $u(i.tags, i.mode, i.context);
		n ? n.next = a : r = a, n = a;
	}
	return r;
} }), $u = class {
	constructor(e, t, n, r) {
		this.tags = e, this.mode = t, this.context = n, this.next = r;
	}
	get opaque() {
		return this.mode == 0;
	}
	get inherit() {
		return this.mode == 1;
	}
	sort(e) {
		return !e || e.depth < this.depth ? (this.next = e, this) : (e.next = this.sort(e.next), e);
	}
	get depth() {
		return this.context ? this.context.length : 0;
	}
};
$u.empty = new $u([], 2, null);
function ed(e, t) {
	let n = Object.create(null);
	for (let t of e) if (!Array.isArray(t.tag)) n[t.tag.id] = t.class;
	else for (let e of t.tag) n[e.id] = t.class;
	let { scope: r, all: i = null } = t || {};
	return {
		style: (e) => {
			let t = i;
			for (let r of e) for (let e of r.set) {
				let r = n[e.id];
				if (r) {
					t = t ? t + " " + r : r;
					break;
				}
			}
			return t;
		},
		scope: r
	};
}
function td(e, t) {
	let n = null;
	for (let r of e) {
		let e = r.style(t);
		e && (n = n ? n + " " + e : e);
	}
	return n;
}
function nd(e, t, n, r = 0, i = e.length) {
	let a = new rd(r, Array.isArray(t) ? t : [t], n);
	a.highlightRange(e.cursor(), r, i, "", a.highlighters), a.flush(i);
}
var rd = class {
	constructor(e, t, n) {
		this.at = e, this.highlighters = t, this.span = n, this.class = "";
	}
	startSpan(e, t) {
		t != this.class && (this.flush(e), e > this.at && (this.at = e), this.class = t);
	}
	flush(e) {
		e > this.at && this.class && this.span(this.at, e, this.class);
	}
	highlightRange(e, t, n, r, i) {
		let { type: a, from: o, to: s } = e;
		if (o >= n || s <= t) return;
		a.isTop && (i = this.highlighters.filter((e) => !e.scope || e.scope(a)));
		let c = r, l = id(e) || $u.empty, u = td(i, l.tags);
		if (u && (c && (c += " "), c += u, l.mode == 1 && (r += (r ? " " : "") + u)), this.startSpan(Math.max(t, o), c), l.opaque) return;
		let d = e.tree && e.tree.prop(Y.mounted);
		if (d && d.overlay) {
			let a = e.node.enter(d.overlay[0].from + o, 1), l = this.highlighters.filter((e) => !e.scope || e.scope(d.tree.type)), u = e.firstChild();
			for (let f = 0, p = o;; f++) {
				let m = f < d.overlay.length ? d.overlay[f] : null, h = m ? m.from + o : s, g = Math.max(t, p), _ = Math.min(n, h);
				if (g < _ && u) for (; e.from < _ && (this.highlightRange(e, g, _, r, i), this.startSpan(Math.min(_, e.to), c), !(e.to >= h || !e.nextSibling())););
				if (!m || h > n) break;
				p = m.to + o, p > t && (this.highlightRange(a.cursor(), Math.max(t, m.from + o), Math.min(n, p), "", l), this.startSpan(Math.min(n, p), c));
			}
			u && e.parent();
		} else if (e.firstChild()) {
			d && (r = "");
			do
				if (!(e.to <= t)) {
					if (e.from >= n) break;
					this.highlightRange(e, t, n, r, i), this.startSpan(Math.min(n, e.to), c);
				}
			while (e.nextSibling());
			e.parent();
		}
	}
};
function id(e) {
	let t = e.type.prop(Qu);
	for (; t && t.context && !e.matchContext(t.context);) t = t.next;
	return t || null;
}
var Z = Ku.define, ad = Z(), od = Z(), sd = Z(od), cd = Z(od), ld = Z(), ud = Z(ld), dd = Z(ld), fd = Z(), pd = Z(fd), md = Z(), hd = Z(), gd = Z(), _d = Z(gd), vd = Z(), Q = {
	comment: ad,
	lineComment: Z(ad),
	blockComment: Z(ad),
	docComment: Z(ad),
	name: od,
	variableName: Z(od),
	typeName: sd,
	tagName: Z(sd),
	propertyName: cd,
	attributeName: Z(cd),
	className: Z(od),
	labelName: Z(od),
	namespace: Z(od),
	macroName: Z(od),
	literal: ld,
	string: ud,
	docString: Z(ud),
	character: Z(ud),
	attributeValue: Z(ud),
	number: dd,
	integer: Z(dd),
	float: Z(dd),
	bool: Z(ld),
	regexp: Z(ld),
	escape: Z(ld),
	color: Z(ld),
	url: Z(ld),
	keyword: md,
	self: Z(md),
	null: Z(md),
	atom: Z(md),
	unit: Z(md),
	modifier: Z(md),
	operatorKeyword: Z(md),
	controlKeyword: Z(md),
	definitionKeyword: Z(md),
	moduleKeyword: Z(md),
	operator: hd,
	derefOperator: Z(hd),
	arithmeticOperator: Z(hd),
	logicOperator: Z(hd),
	bitwiseOperator: Z(hd),
	compareOperator: Z(hd),
	updateOperator: Z(hd),
	definitionOperator: Z(hd),
	typeOperator: Z(hd),
	controlOperator: Z(hd),
	punctuation: gd,
	separator: Z(gd),
	bracket: _d,
	angleBracket: Z(_d),
	squareBracket: Z(_d),
	paren: Z(_d),
	brace: Z(_d),
	content: fd,
	heading: pd,
	heading1: Z(pd),
	heading2: Z(pd),
	heading3: Z(pd),
	heading4: Z(pd),
	heading5: Z(pd),
	heading6: Z(pd),
	contentSeparator: Z(fd),
	list: Z(fd),
	quote: Z(fd),
	emphasis: Z(fd),
	strong: Z(fd),
	link: Z(fd),
	monospace: Z(fd),
	strikethrough: Z(fd),
	inserted: Z(),
	deleted: Z(),
	changed: Z(),
	invalid: Z(),
	meta: vd,
	documentMeta: Z(vd),
	annotation: Z(vd),
	processingInstruction: Z(vd),
	definition: Ku.defineModifier("definition"),
	constant: Ku.defineModifier("constant"),
	function: Ku.defineModifier("function"),
	standard: Ku.defineModifier("standard"),
	local: Ku.defineModifier("local"),
	special: Ku.defineModifier("special")
};
for (let e in Q) {
	let t = Q[e];
	t instanceof Ku && (t.name = e);
}
ed([
	{
		tag: Q.link,
		class: "tok-link"
	},
	{
		tag: Q.heading,
		class: "tok-heading"
	},
	{
		tag: Q.emphasis,
		class: "tok-emphasis"
	},
	{
		tag: Q.strong,
		class: "tok-strong"
	},
	{
		tag: Q.keyword,
		class: "tok-keyword"
	},
	{
		tag: Q.atom,
		class: "tok-atom"
	},
	{
		tag: Q.bool,
		class: "tok-bool"
	},
	{
		tag: Q.url,
		class: "tok-url"
	},
	{
		tag: Q.labelName,
		class: "tok-labelName"
	},
	{
		tag: Q.inserted,
		class: "tok-inserted"
	},
	{
		tag: Q.deleted,
		class: "tok-deleted"
	},
	{
		tag: Q.literal,
		class: "tok-literal"
	},
	{
		tag: Q.string,
		class: "tok-string"
	},
	{
		tag: Q.number,
		class: "tok-number"
	},
	{
		tag: [
			Q.regexp,
			Q.escape,
			Q.special(Q.string)
		],
		class: "tok-string2"
	},
	{
		tag: Q.variableName,
		class: "tok-variableName"
	},
	{
		tag: Q.local(Q.variableName),
		class: "tok-variableName tok-local"
	},
	{
		tag: Q.definition(Q.variableName),
		class: "tok-variableName tok-definition"
	},
	{
		tag: Q.special(Q.variableName),
		class: "tok-variableName2"
	},
	{
		tag: Q.definition(Q.propertyName),
		class: "tok-propertyName tok-definition"
	},
	{
		tag: Q.typeName,
		class: "tok-typeName"
	},
	{
		tag: Q.namespace,
		class: "tok-namespace"
	},
	{
		tag: Q.className,
		class: "tok-className"
	},
	{
		tag: Q.macroName,
		class: "tok-macroName"
	},
	{
		tag: Q.propertyName,
		class: "tok-propertyName"
	},
	{
		tag: Q.operator,
		class: "tok-operator"
	},
	{
		tag: Q.comment,
		class: "tok-comment"
	},
	{
		tag: Q.meta,
		class: "tok-meta"
	},
	{
		tag: Q.invalid,
		class: "tok-invalid"
	},
	{
		tag: Q.punctuation,
		class: "tok-punctuation"
	}
]);
// node_modules/@codemirror/language/dist/index.js
var yd = /*@__PURE__*/ new Y();
function bd(e) {
	return P.define({ combine: e ? (t) => t.concat(e) : void 0 });
}
var xd = /*@__PURE__*/ new Y(), Sd = class {
	constructor(e, t, n = [], r = "") {
		this.data = e, this.name = r, L.prototype.hasOwnProperty("tree") || Object.defineProperty(L.prototype, "tree", { get() {
			return $(this);
		} }), this.parser = t, this.extension = [Nd.of(this), L.languageData.of((e, t, n) => {
			let r = Cd(e, t, n), i = r.type.prop(yd);
			if (!i) return [];
			let a = e.facet(i), o = r.type.prop(xd);
			if (o) {
				let i = r.resolve(t - r.from, n);
				for (let t of o) if (t.test(i, e)) {
					let n = e.facet(t.facet);
					return t.type == "replace" ? n : n.concat(a);
				}
			}
			return a;
		})].concat(n);
	}
	isActiveAt(e, t, n = -1) {
		return Cd(e, t, n).type.prop(yd) == this.data;
	}
	findRegions(e) {
		let t = e.facet(Nd);
		if (t?.data == this.data) return [{
			from: 0,
			to: e.doc.length
		}];
		if (!t || !t.allowsNesting) return [];
		let n = [], r = (e, t) => {
			if (e.prop(yd) == this.data) {
				n.push({
					from: t,
					to: t + e.length
				});
				return;
			}
			let i = e.prop(Y.mounted);
			if (i) {
				if (i.tree.prop(yd) == this.data) {
					if (i.overlay) for (let e of i.overlay) n.push({
						from: e.from + t,
						to: e.to + t
					});
					else n.push({
						from: t,
						to: t + e.length
					});
					return;
				}
				if (i.overlay) {
					let e = n.length;
					if (r(i.tree, i.overlay[0].from + t), n.length > e) return;
				}
			}
			for (let n = 0; n < e.children.length; n++) {
				let i = e.children[n];
				i instanceof Su && r(i, e.positions[n] + t);
			}
		};
		return r($(e), 0), n;
	}
	get allowsNesting() {
		return !0;
	}
};
Sd.setState = /*@__PURE__*/ F.define();
function Cd(e, t, n) {
	let r = e.facet(Nd), i = $(e).topNode;
	if (!r || r.allowsNesting) for (let e = i; e; e = e.enter(t, n, X.ExcludeBuffers | X.EnterBracketed)) e.type.isTop && (i = e);
	return i;
}
var wd = class e extends Sd {
	constructor(e, t, n) {
		super(e, t, [], n), this.parser = t;
	}
	static define(t) {
		let n = bd(t.languageData);
		return new e(n, t.parser.configure({ props: [yd.add((e) => e.isTop ? n : void 0)] }), t.name);
	}
	configure(t, n) {
		return new e(this.data, this.parser.configure(t), n || this.name);
	}
	get allowsNesting() {
		return this.parser.hasWrappers();
	}
};
function $(e) {
	let t = e.field(Sd.state, !1);
	return t ? t.tree : Su.empty;
}
var Td = class {
	constructor(e) {
		this.doc = e, this.cursorPos = 0, this.string = "", this.cursor = e.iter();
	}
	get length() {
		return this.doc.length;
	}
	syncTo(e) {
		return this.string = this.cursor.next(e - this.cursorPos).value, this.cursorPos = e + this.string.length, this.cursorPos - this.string.length;
	}
	chunk(e) {
		return this.syncTo(e), this.string;
	}
	get lineChunks() {
		return !0;
	}
	read(e, t) {
		let n = this.cursorPos - this.string.length;
		return e < n || t >= this.cursorPos ? this.doc.sliceString(e, t) : this.string.slice(e - n, t - n);
	}
}, Ed = null, Dd = class e {
	constructor(e, t, n = [], r, i, a, o, s) {
		this.parser = e, this.state = t, this.fragments = n, this.tree = r, this.treeLen = i, this.viewport = a, this.skipped = o, this.scheduleOn = s, this.parse = null, this.tempSkipped = [];
	}
	static create(t, n, r) {
		return new e(t, n, [], Su.empty, 0, r, [], null);
	}
	startParse() {
		return this.parser.startParse(new Td(this.state.doc), this.fragments);
	}
	work(e, t) {
		return t != null && t >= this.state.doc.length && (t = void 0), this.tree != Su.empty && this.isDone(t ?? this.state.doc.length) ? (this.takeTree(), !0) : this.withContext(() => {
			if (typeof e == "number") {
				let t = Date.now() + e;
				e = () => Date.now() > t;
			}
			for (this.parse ||= this.startParse(), t != null && (this.parse.stoppedAt == null || this.parse.stoppedAt > t) && t < this.state.doc.length && this.parse.stopAt(t);;) {
				let n = this.parse.advance();
				if (n) {
					if (this.fragments = this.withoutTempSkipped(Hu.addTree(n, this.fragments, this.parse.stoppedAt != null)), this.treeLen = this.parse.stoppedAt ?? this.state.doc.length, this.tree = n, this.parse = null, this.treeLen < (t ?? this.state.doc.length)) this.parse = this.startParse();
					else return !0;
				}
				if (e()) return !1;
			}
		});
	}
	takeTree() {
		let e, t;
		this.parse && (e = this.parse.parsedPos) >= this.treeLen && ((this.parse.stoppedAt == null || this.parse.stoppedAt > e) && this.parse.stopAt(e), this.withContext(() => {
			for (; !(t = this.parse.advance()););
		}), this.treeLen = e, this.tree = t, this.fragments = this.withoutTempSkipped(Hu.addTree(this.tree, this.fragments, !0)), this.parse = null);
	}
	withContext(e) {
		let t = Ed;
		Ed = this;
		try {
			return e();
		} finally {
			Ed = t;
		}
	}
	withoutTempSkipped(e) {
		for (let t; t = this.tempSkipped.pop();) e = Od(e, t.from, t.to);
		return e;
	}
	changes(t, n) {
		let { fragments: r, tree: i, treeLen: a, viewport: o, skipped: s } = this;
		if (this.takeTree(), !t.empty) {
			let e = [];
			if (t.iterChangedRanges((t, n, r, i) => e.push({
				fromA: t,
				toA: n,
				fromB: r,
				toB: i
			})), r = Hu.applyChanges(r, e), i = Su.empty, a = 0, o = {
				from: t.mapPos(o.from, -1),
				to: t.mapPos(o.to, 1)
			}, this.skipped.length) {
				s = [];
				for (let e of this.skipped) {
					let n = t.mapPos(e.from, 1), r = t.mapPos(e.to, -1);
					n < r && s.push({
						from: n,
						to: r
					});
				}
			}
		}
		return new e(this.parser, n, r, i, a, o, s, this.scheduleOn);
	}
	updateViewport(e) {
		if (this.viewport.from == e.from && this.viewport.to == e.to) return !1;
		this.viewport = e;
		let t = this.skipped.length;
		for (let t = 0; t < this.skipped.length; t++) {
			let { from: n, to: r } = this.skipped[t];
			n < e.to && r > e.from && (this.fragments = Od(this.fragments, n, r), this.skipped.splice(t--, 1));
		}
		return this.skipped.length >= t ? !1 : (this.reset(), !0);
	}
	reset() {
		this.parse &&= (this.takeTree(), null);
	}
	skipUntilInView(e, t) {
		this.skipped.push({
			from: e,
			to: t
		});
	}
	static getSkippingParser(e) {
		return new class extends Uu {
			createParse(t, n, r) {
				let i = r[0].from, a = r[r.length - 1].to;
				return {
					parsedPos: i,
					advance() {
						let t = Ed;
						if (t) {
							for (let e of r) t.tempSkipped.push(e);
							e && (t.scheduleOn = t.scheduleOn ? Promise.all([t.scheduleOn, e]) : e);
						}
						return this.parsedPos = a, new Su(vu.none, [], [], a - i);
					},
					stoppedAt: null,
					stopAt() {}
				};
			}
		}();
	}
	isDone(e) {
		e = Math.min(e, this.state.doc.length);
		let t = this.fragments;
		return this.treeLen >= e && t.length && t[0].from == 0 && t[0].to >= e;
	}
	static get() {
		return Ed;
	}
};
function Od(e, t, n) {
	return Hu.applyChanges(e, [{
		fromA: t,
		toA: n,
		fromB: t,
		toB: n
	}]);
}
var kd = class e {
	constructor(e) {
		this.context = e, this.tree = e.tree;
	}
	apply(t) {
		if (!t.docChanged && this.tree == this.context.tree) return this;
		let n = this.context.changes(t.changes, t.state), r = this.context.treeLen == t.startState.doc.length ? void 0 : Math.max(t.changes.mapPos(this.context.treeLen), n.viewport.to);
		return n.work(20, r) || n.takeTree(), new e(n);
	}
	static init(t) {
		let n = Math.min(3e3, t.doc.length), r = Dd.create(t.facet(Nd).parser, t, {
			from: 0,
			to: n
		});
		return r.work(20, n) || r.takeTree(), new e(r);
	}
};
Sd.state = /*@__PURE__*/ It.define({
	create: kd.init,
	update(e, t) {
		for (let e of t.effects) if (e.is(Sd.setState)) return e.value;
		return t.startState.facet(Nd) == t.state.facet(Nd) ? e.apply(t) : kd.init(t.state);
	}
});
var Ad = (e) => {
	let t = setTimeout(() => e(), 500);
	return () => clearTimeout(t);
};
typeof requestIdleCallback < "u" && (Ad = (e) => {
	let t = -1, n = setTimeout(() => {
		t = requestIdleCallback(e, { timeout: 400 });
	}, 100);
	return () => t < 0 ? clearTimeout(n) : cancelIdleCallback(t);
});
var jd = typeof navigator < "u" && navigator.scheduling?.isInputPending ? () => navigator.scheduling.isInputPending() : null, Md = /*@__PURE__*/ G.fromClass(class {
	constructor(e) {
		this.view = e, this.working = null, this.workScheduled = 0, this.chunkEnd = -1, this.chunkBudget = -1, this.work = this.work.bind(this), this.scheduleWork();
	}
	update(e) {
		let t = this.view.state.field(Sd.state).context;
		(t.updateViewport(e.view.viewport) || this.view.viewport.to > t.treeLen) && this.scheduleWork(), (e.docChanged || e.selectionSet) && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()), this.checkAsyncSchedule(t);
	}
	scheduleWork() {
		if (this.working) return;
		let { state: e } = this.view, t = e.field(Sd.state);
		t.tree == t.context.tree && t.context.isDone(e.doc.length) || (this.working = Ad(this.work));
	}
	work(e) {
		this.working = null;
		let t = Date.now();
		if (this.chunkEnd < t && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = t + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0) return;
		let { state: n, viewport: { to: r } } = this.view, i = n.field(Sd.state);
		if (i.tree == i.context.tree && i.context.isDone(r + 1e5)) return;
		let a = Date.now() + Math.min(this.chunkBudget, 100, e && !jd ? Math.max(25, e.timeRemaining() - 5) : 1e9), o = i.context.treeLen < r && n.doc.length > r + 1e3, s = i.context.work(() => jd && jd() || Date.now() > a, r + (o ? 0 : 1e5));
		this.chunkBudget -= Date.now() - t, (s || this.chunkBudget <= 0) && (i.context.takeTree(), this.view.dispatch({ effects: Sd.setState.of(new kd(i.context)) })), this.chunkBudget > 0 && (!s || o) && this.scheduleWork(), this.checkAsyncSchedule(i.context);
	}
	checkAsyncSchedule(e) {
		e.scheduleOn &&= (this.workScheduled++, e.scheduleOn.then(() => this.scheduleWork()).catch((e) => Ii(this.view.state, e)).then(() => this.workScheduled--), null);
	}
	destroy() {
		this.working && this.working();
	}
	isWorking() {
		return !!(this.working || this.workScheduled > 0);
	}
}, { eventHandlers: { focus() {
	this.scheduleWork();
} } }), Nd = /*@__PURE__*/ P.define({
	combine(e) {
		return e.length ? e[0] : null;
	},
	enables: (e) => [
		Sd.state,
		Md,
		J.contentAttributes.compute([e], (t) => {
			let n = t.facet(e);
			return n && n.name ? { "data-language": n.name } : {};
		})
	]
}), Pd = class {
	constructor(e, t = []) {
		this.language = e, this.support = t, this.extension = [e, t];
	}
}, Fd = /*@__PURE__*/ P.define(), Id = /*@__PURE__*/ P.define({ combine: (e) => {
	if (!e.length) return "  ";
	let t = e[0];
	if (!t || /\S/.test(t) || Array.from(t).some((e) => e != t[0])) throw Error("Invalid indent unit: " + JSON.stringify(e[0]));
	return t;
} });
function Ld(e) {
	let t = e.facet(Id);
	return t.charCodeAt(0) == 9 ? e.tabSize * t.length : t.length;
}
function Rd(e, t) {
	let n = "", r = e.tabSize, i = e.facet(Id)[0];
	if (i == "	") {
		for (; t >= r;) n += "	", t -= r;
		i = " ";
	}
	for (let e = 0; e < t; e++) n += i;
	return n;
}
function zd(e, t) {
	e instanceof L && (e = new Bd(e));
	for (let n of e.state.facet(Fd)) {
		let r = n(e, t);
		if (r !== void 0) return r;
	}
	let n = $(e.state);
	return n.length >= t ? Hd(e, n, t) : null;
}
var Bd = class {
	constructor(e, t = {}) {
		this.state = e, this.options = t, this.unit = Ld(e);
	}
	lineAt(e, t = 1) {
		let n = this.state.doc.lineAt(e), { simulateBreak: r, simulateDoubleBreak: i } = this.options;
		return r != null && r >= n.from && r <= n.to ? i && r == e ? {
			text: "",
			from: e
		} : (t < 0 ? r < e : r <= e) ? {
			text: n.text.slice(r - n.from),
			from: r
		} : {
			text: n.text.slice(0, r - n.from),
			from: n.from
		} : n;
	}
	textAfterPos(e, t = 1) {
		if (this.options.simulateDoubleBreak && e == this.options.simulateBreak) return "";
		let { text: n, from: r } = this.lineAt(e, t);
		return n.slice(e - r, Math.min(n.length, e + 100 - r));
	}
	column(e, t = 1) {
		let { text: n, from: r } = this.lineAt(e, t), i = this.countColumn(n, e - r), a = this.options.overrideIndentation ? this.options.overrideIndentation(r) : -1;
		return a > -1 && (i += a - this.countColumn(n, n.search(/\S|$/))), i;
	}
	countColumn(e, t = e.length) {
		return In(e, this.state.tabSize, t);
	}
	lineIndent(e, t = 1) {
		let { text: n, from: r } = this.lineAt(e, t), i = this.options.overrideIndentation;
		if (i) {
			let e = i(r);
			if (e > -1) return e;
		}
		return this.countColumn(n, n.search(/\S|$/));
	}
	get simulatedBreak() {
		return this.options.simulateBreak || null;
	}
}, Vd = /*@__PURE__*/ new Y();
function Hd(e, t, n) {
	let r = t.resolveStack(n), i = t.resolveInner(n, -1).resolve(n, 0).enterUnfinishedNodesBefore(n);
	if (i != r.node) {
		let e = [];
		for (let t = i; t && !(t.from < r.node.from || t.to > r.node.to || t.from == r.node.from && t.type == r.node.type); t = t.parent) e.push(t);
		for (let t = e.length - 1; t >= 0; t--) r = {
			node: e[t],
			next: r
		};
	}
	return Ud(r, e, n);
}
function Ud(e, t, n) {
	for (let r = e; r; r = r.next) {
		let e = Gd(r.node);
		if (e) return e(qd.create(t, n, r));
	}
	return 0;
}
function Wd(e) {
	return e.pos == e.options.simulateBreak && e.options.simulateDoubleBreak;
}
function Gd(e) {
	let t = e.type.prop(Vd);
	if (t) return t;
	let n = e.firstChild, r;
	if (n && (r = n.type.prop(Y.closedBy))) {
		let t = e.lastChild, n = t && r.indexOf(t.name) > -1;
		return (e) => Xd(e, !0, 1, void 0, n && !Wd(e) ? t.from : void 0);
	}
	return e.parent == null ? Kd : null;
}
function Kd() {
	return 0;
}
var qd = class e extends Bd {
	constructor(e, t, n) {
		super(e.state, e.options), this.base = e, this.pos = t, this.context = n;
	}
	get node() {
		return this.context.node;
	}
	static create(t, n, r) {
		return new e(t, n, r);
	}
	get textAfter() {
		return this.textAfterPos(this.pos);
	}
	get baseIndent() {
		return this.baseIndentFor(this.node);
	}
	baseIndentFor(e) {
		let t = this.state.doc.lineAt(e.from);
		for (;;) {
			let n = e.resolve(t.from);
			for (; n.parent && n.parent.from == n.from;) n = n.parent;
			if (Jd(n, e)) break;
			t = this.state.doc.lineAt(n.from);
		}
		return this.lineIndent(t.from);
	}
	continue() {
		return Ud(this.context.next, this.base, this.pos);
	}
};
function Jd(e, t) {
	for (let n = t; n; n = n.parent) if (e == n) return !0;
	return !1;
}
function Yd(e) {
	let t = e.node, n = t.childAfter(t.from), r = t.lastChild;
	if (!n) return null;
	let i = e.options.simulateBreak, a = e.state.doc.lineAt(n.from), o = i == null || i <= a.from ? a.to : Math.min(a.to, i);
	for (let e = n.to;;) {
		let i = t.childAfter(e);
		if (!i || i == r) return null;
		if (!i.type.isSkipped) {
			if (i.from >= o) return null;
			let e = /^ */.exec(a.text.slice(n.to - a.from))[0].length;
			return {
				from: n.from,
				to: n.to + e
			};
		}
		e = i.to;
	}
}
function Xd(e, t, n, r, i) {
	let a = e.textAfter, o = a.match(/^\s*/)[0].length, s = r && a.slice(o, o + r.length) == r || i == e.pos + o, c = t ? Yd(e) : null;
	return c ? s ? e.column(c.from) : e.column(c.to) : e.baseIndent + (s ? 0 : e.unit * n);
}
var Zd = 200;
function Qd() {
	return L.transactionFilter.of((e) => {
		if (!e.docChanged || !e.isUserEvent("input.type") && !e.isUserEvent("input.complete")) return e;
		let t = e.startState.languageDataAt("indentOnInput", e.startState.selection.main.head);
		if (!t.length) return e;
		let n = e.newDoc, { head: r } = e.newSelection.main, i = n.lineAt(r);
		if (r > i.from + Zd) return e;
		let a = n.sliceString(i.from, r);
		if (!t.some((e) => e.test(a))) return e;
		let { state: o } = e, s = -1, c = [];
		for (let { head: e } of o.selection.ranges) {
			let t = o.doc.lineAt(e);
			if (t.from == s) continue;
			s = t.from;
			let n = zd(o, t.from);
			if (n == null) continue;
			let r = /^\s*/.exec(t.text)[0], i = Rd(o, n);
			r != i && c.push({
				from: t.from,
				to: t.from + r.length,
				insert: i
			});
		}
		return c.length ? [e, {
			changes: c,
			sequential: !0
		}] : e;
	});
}
var $d = /*@__PURE__*/ P.define(), ef = /*@__PURE__*/ new Y();
function tf(e, t, n) {
	let r = $(e);
	if (r.length < n) return null;
	let i = r.resolveStack(n, 1), a = null;
	for (let o = i; o; o = o.next) {
		let i = o.node;
		if (i.to <= n || i.from > n) continue;
		if (a && i.from < t) break;
		let s = i.type.prop(ef);
		if (s && (i.to < r.length - 50 || r.length == e.doc.length || !nf(i))) {
			let r = s(i, e);
			r && r.from <= n && r.from >= t && r.to > n && (a = r);
		}
	}
	return a;
}
function nf(e) {
	let t = e.lastChild;
	return t && t.to == e.to && t.type.isError;
}
function rf(e, t, n) {
	for (let r of e.facet($d)) {
		let i = r(e, t, n);
		if (i) return i;
	}
	return tf(e, t, n);
}
function af(e, t) {
	let n = t.mapPos(e.from, 1), r = t.mapPos(e.to, -1);
	return n >= r ? void 0 : {
		from: n,
		to: r
	};
}
var of = /*@__PURE__*/ F.define({ map: af }), sf = /*@__PURE__*/ F.define({ map: af });
function cf(e) {
	let t = [];
	for (let { head: n } of e.state.selection.ranges) t.some((e) => e.from <= n && e.to >= n) || t.push(e.lineBlockAt(n));
	return t;
}
var lf = /*@__PURE__*/ It.define({
	create() {
		return V.none;
	},
	update(e, t) {
		t.isUserEvent("delete") && t.changes.iterChangedRanges((t, n) => e = uf(e, t, n)), e = e.map(t.changes);
		let n = [];
		for (let r of t.effects) r.is(of) && !ff(e, r.value.from, r.value.to) ? n.push(r.value) : r.is(sf) && (e = e.update({
			filter: (e, t) => r.value.from != e || r.value.to != t,
			filterFrom: r.value.from,
			filterTo: r.value.to
		}));
		if (n.length) {
			let { preparePlaceholder: r } = t.state.facet(yf), i = n.map((e) => (r ? V.replace({ widget: new Cf(r(t.state, e)) }) : Sf).range(e.from, e.to));
			e = e.update({ add: i });
		}
		return t.selection && (e = uf(e, t.selection.main.head)), e;
	},
	provide: (e) => J.decorations.from(e),
	toJSON(e, t) {
		let n = [];
		return e.between(0, t.doc.length, (e, t) => {
			n.push(e, t);
		}), n;
	},
	fromJSON(e) {
		if (!Array.isArray(e) || e.length % 2) throw RangeError("Invalid JSON for fold state");
		let t = [];
		for (let n = 0; n < e.length;) {
			let r = e[n++], i = e[n++];
			if (typeof r != "number" || typeof i != "number") throw RangeError("Invalid JSON for fold state");
			t.push(Sf.range(r, i));
		}
		return V.set(t, !0);
	}
});
function uf(e, t, n = t) {
	let r = !1;
	return e.between(t, n, (e, i) => {
		e < n && i > t && (r = !0);
	}), r ? e.update({
		filterFrom: t,
		filterTo: n,
		filter: (e, r) => e >= n || r <= t
	}) : e;
}
function df(e, t, n) {
	var r;
	let i = null;
	return (r = e.field(lf, !1)) == null || r.between(t, n, (e, t) => {
		(!i || i.from > e) && (i = {
			from: e,
			to: t
		});
	}), i;
}
function ff(e, t, n) {
	let r = !1;
	return e.between(t, t, (e, i) => {
		e == t && i == n && (r = !0);
	}), r;
}
function pf(e, t) {
	return e.field(lf, !1) ? t : t.concat(F.appendConfig.of(bf()));
}
var mf = (e) => {
	for (let t of cf(e)) {
		let n = rf(e.state, t.from, t.to);
		if (n) return e.dispatch({ effects: pf(e.state, [of.of(n), gf(e, n)]) }), !0;
	}
	return !1;
}, hf = (e) => {
	if (!e.state.field(lf, !1)) return !1;
	let t = [];
	for (let n of cf(e)) {
		let r = df(e.state, n.from, n.to);
		r && t.push(sf.of(r), gf(e, r, !1));
	}
	return t.length && e.dispatch({ effects: t }), t.length > 0;
};
function gf(e, t, n = !0) {
	let r = e.state.doc.lineAt(t.from).number, i = e.state.doc.lineAt(t.to).number;
	return J.announce.of(`${e.state.phrase(n ? "Folded lines" : "Unfolded lines")} ${r} ${e.state.phrase("to")} ${i}.`);
}
var _f = [
	{
		key: "Ctrl-Shift-[",
		mac: "Cmd-Alt-[",
		run: mf
	},
	{
		key: "Ctrl-Shift-]",
		mac: "Cmd-Alt-]",
		run: hf
	},
	{
		key: "Ctrl-Alt-[",
		run: (e) => {
			let { state: t } = e, n = [];
			for (let r = 0; r < t.doc.length;) {
				let i = e.lineBlockAt(r), a = rf(t, i.from, i.to);
				a && n.push(of.of(a)), r = (a ? e.lineBlockAt(a.to) : i).to + 1;
			}
			return n.length && e.dispatch({ effects: pf(e.state, n) }), !!n.length;
		}
	},
	{
		key: "Ctrl-Alt-]",
		run: (e) => {
			let t = e.state.field(lf, !1);
			if (!t || !t.size) return !1;
			let n = [];
			return t.between(0, e.state.doc.length, (e, t) => {
				n.push(sf.of({
					from: e,
					to: t
				}));
			}), e.dispatch({ effects: n }), !0;
		}
	}
], vf = {
	placeholderDOM: null,
	preparePlaceholder: null,
	placeholderText: "…"
}, yf = /*@__PURE__*/ P.define({ combine(e) {
	return _n(e, vf);
} });
function bf(e) {
	let t = [lf, Df];
	return e && t.push(yf.of(e)), t;
}
function xf(e, t) {
	let { state: n } = e, r = n.facet(yf), i = (t) => {
		let n = e.lineBlockAt(e.posAtDOM(t.target)), r = df(e.state, n.from, n.to);
		r && e.dispatch({ effects: sf.of(r) }), t.preventDefault();
	};
	if (r.placeholderDOM) return r.placeholderDOM(e, i, t);
	let a = document.createElement("span");
	return a.textContent = r.placeholderText, a.setAttribute("aria-label", n.phrase("folded code")), a.title = n.phrase("unfold"), a.className = "cm-foldPlaceholder", a.onclick = i, a;
}
var Sf = /*@__PURE__*/ V.replace({ widget: /*@__PURE__*/ new class extends gr {
	toDOM(e) {
		return xf(e, null);
	}
}() }), Cf = class extends gr {
	constructor(e) {
		super(), this.value = e;
	}
	eq(e) {
		return this.value == e.value;
	}
	toDOM(e) {
		return xf(e, this.value);
	}
}, wf = {
	openText: "⌄",
	closedText: "›",
	markerDOM: null,
	domEventHandlers: {},
	foldingChanged: () => !1
}, Tf = class extends Vl {
	constructor(e, t) {
		super(), this.config = e, this.open = t;
	}
	eq(e) {
		return this.config == e.config && this.open == e.open;
	}
	toDOM(e) {
		if (this.config.markerDOM) return this.config.markerDOM(this.open);
		let t = document.createElement("span");
		return t.textContent = this.open ? this.config.openText : this.config.closedText, t.title = e.state.phrase(this.open ? "Fold line" : "Unfold line"), t;
	}
};
function Ef(e = {}) {
	let t = {
		...wf,
		...e
	}, n = new Tf(t, !0), r = new Tf(t, !1), i = G.fromClass(class {
		constructor(e) {
			this.from = e.viewport.from, this.markers = this.buildMarkers(e);
		}
		update(e) {
			(e.docChanged || e.viewportChanged || e.startState.facet(Nd) != e.state.facet(Nd) || e.startState.field(lf, !1) != e.state.field(lf, !1) || $(e.startState) != $(e.state) || t.foldingChanged(e)) && (this.markers = this.buildMarkers(e.view));
		}
		buildMarkers(e) {
			let t = new Tn();
			for (let i of e.viewportLineBlocks) {
				let a = df(e.state, i.from, i.to) ? r : rf(e.state, i.from, i.to) ? n : null;
				a && t.add(i.from, i.from, a);
			}
			return t.finish();
		}
	}), { domEventHandlers: a } = t;
	return [
		i,
		Kl({
			class: "cm-foldGutter",
			markers(e) {
				return e.plugin(i)?.markers || R.empty;
			},
			initialSpacer() {
				return new Tf(t, !1);
			},
			domEventHandlers: {
				...a,
				click: (e, t, n) => {
					if (a.click && a.click(e, t, n)) return !0;
					let r = df(e.state, t.from, t.to);
					if (r) return e.dispatch({ effects: sf.of(r) }), !0;
					let i = rf(e.state, t.from, t.to);
					return i ? (e.dispatch({ effects: of.of(i) }), !0) : !1;
				}
			}
		}),
		bf()
	];
}
var Df = /*@__PURE__*/ J.baseTheme({
	".cm-foldPlaceholder": {
		backgroundColor: "#eee",
		border: "1px solid #ddd",
		color: "#888",
		borderRadius: ".2em",
		margin: "0 1px",
		padding: "0 1px",
		cursor: "pointer"
	},
	".cm-foldGutter span": {
		padding: "0 1px",
		cursor: "pointer"
	}
}), Of = class e {
	constructor(e, t) {
		this.specs = e;
		let n;
		function r(e) {
			let t = Hn.newName();
			return (n ||= Object.create(null))["." + t] = e, t;
		}
		let i = typeof t.all == "string" ? t.all : t.all ? r(t.all) : void 0, a = t.scope;
		this.scope = a instanceof Sd ? (e) => e.prop(yd) == a.data : a ? (e) => e == a : void 0, this.style = ed(e.map((e) => ({
			tag: e.tag,
			class: e.class || r(Object.assign({}, e, { tag: null }))
		})), { all: i }).style, this.module = n ? new Hn(n) : null, this.themeType = t.themeType;
	}
	static define(t, n) {
		return new e(t, n || {});
	}
}, kf = /*@__PURE__*/ P.define(), Af = /*@__PURE__*/ P.define({ combine(e) {
	return e.length ? [e[0]] : null;
} });
function jf(e) {
	let t = e.facet(kf);
	return t.length ? t : e.facet(Af);
}
function Mf(e, t) {
	let n = [Pf], r;
	return e instanceof Of && (e.module && n.push(J.styleModule.of(e.module)), r = e.themeType), t?.fallback ? n.push(Af.of(e)) : r ? n.push(kf.computeN([J.darkTheme], (t) => t.facet(J.darkTheme) == (r == "dark") ? [e] : [])) : n.push(kf.of(e)), n;
}
var Nf = class {
	constructor(e) {
		this.markCache = Object.create(null), this.tree = $(e.state), this.decorations = this.buildDeco(e, jf(e.state)), this.decoratedTo = e.viewport.to;
	}
	update(e) {
		let t = $(e.state), n = jf(e.state), r = n != jf(e.startState), { viewport: i } = e.view, a = e.changes.mapPos(this.decoratedTo, 1);
		t.length < i.to && !r && t.type == this.tree.type && a >= i.to ? (this.decorations = this.decorations.map(e.changes), this.decoratedTo = a) : (t != this.tree || e.viewportChanged || r) && (this.tree = t, this.decorations = this.buildDeco(e.view, n), this.decoratedTo = i.to);
	}
	buildDeco(e, t) {
		if (!t || !this.tree.length) return V.none;
		let n = new Tn();
		for (let { from: r, to: i } of e.visibleRanges) nd(this.tree, t, (e, t, r) => {
			n.add(e, t, this.markCache[r] || (this.markCache[r] = V.mark({ class: r })));
		}, r, i);
		return n.finish();
	}
}, Pf = /*@__PURE__*/ zt.high(/*@__PURE__*/ G.fromClass(Nf, { decorations: (e) => e.decorations })), Ff = /*@__PURE__*/ Of.define([
	{
		tag: Q.meta,
		color: "#404740"
	},
	{
		tag: Q.link,
		textDecoration: "underline"
	},
	{
		tag: Q.heading,
		textDecoration: "underline",
		fontWeight: "bold"
	},
	{
		tag: Q.emphasis,
		fontStyle: "italic"
	},
	{
		tag: Q.strong,
		fontWeight: "bold"
	},
	{
		tag: Q.strikethrough,
		textDecoration: "line-through"
	},
	{
		tag: Q.keyword,
		color: "#708"
	},
	{
		tag: [
			Q.atom,
			Q.bool,
			Q.url,
			Q.contentSeparator,
			Q.labelName
		],
		color: "#219"
	},
	{
		tag: [Q.literal, Q.inserted],
		color: "#164"
	},
	{
		tag: [Q.string, Q.deleted],
		color: "#a11"
	},
	{
		tag: [
			Q.regexp,
			Q.escape,
			/*@__PURE__*/ Q.special(Q.string)
		],
		color: "#e40"
	},
	{
		tag: /*@__PURE__*/ Q.definition(Q.variableName),
		color: "#00f"
	},
	{
		tag: /*@__PURE__*/ Q.local(Q.variableName),
		color: "#30a"
	},
	{
		tag: [Q.typeName, Q.namespace],
		color: "#085"
	},
	{
		tag: Q.className,
		color: "#167"
	},
	{
		tag: [/*@__PURE__*/ Q.special(Q.variableName), Q.macroName],
		color: "#256"
	},
	{
		tag: /*@__PURE__*/ Q.definition(Q.propertyName),
		color: "#00c"
	},
	{
		tag: Q.comment,
		color: "#940"
	},
	{
		tag: Q.invalid,
		color: "#f00"
	}
]), If = /*@__PURE__*/ J.baseTheme({
	"&.cm-focused .cm-matchingBracket": { backgroundColor: "#328c8252" },
	"&.cm-focused .cm-nonmatchingBracket": { backgroundColor: "#bb555544" }
}), Lf = 1e4, Rf = "()[]{}", zf = /*@__PURE__*/ P.define({ combine(e) {
	return _n(e, {
		afterCursor: !0,
		brackets: Rf,
		maxScanDistance: Lf,
		renderMatch: Hf
	});
} }), Bf = /*@__PURE__*/ V.mark({ class: "cm-matchingBracket" }), Vf = /*@__PURE__*/ V.mark({ class: "cm-nonmatchingBracket" });
function Hf(e) {
	let t = [], n = e.matched ? Bf : Vf;
	return t.push(n.range(e.start.from, e.start.to)), e.end && t.push(n.range(e.end.from, e.end.to)), t;
}
function Uf(e) {
	let t = [], n = e.facet(zf);
	for (let r of e.selection.ranges) {
		if (!r.empty) continue;
		let i = Yf(e, r.head, -1, n) || r.head > 0 && Yf(e, r.head - 1, 1, n) || n.afterCursor && (Yf(e, r.head, 1, n) || r.head < e.doc.length && Yf(e, r.head + 1, -1, n));
		i && (t = t.concat(n.renderMatch(i, e)));
	}
	return V.set(t, !0);
}
var Wf = [/* @__PURE__ */ G.fromClass(class {
	constructor(e) {
		this.paused = !1, this.decorations = Uf(e.state);
	}
	update(e) {
		(e.docChanged || e.selectionSet || this.paused) && (e.view.composing ? (this.decorations = this.decorations.map(e.changes), this.paused = !0) : (this.decorations = Uf(e.state), this.paused = !1));
	}
}, { decorations: (e) => e.decorations }), If];
function Gf(e = {}) {
	return [zf.of(e), Wf];
}
var Kf = /*@__PURE__*/ new Y();
function qf(e, t, n) {
	let r = e.prop(t < 0 ? Y.openedBy : Y.closedBy);
	if (r) return r;
	if (e.name.length == 1) {
		let r = n.indexOf(e.name);
		if (r > -1 && r % 2 == +(t < 0)) return [n[r + t]];
	}
	return null;
}
function Jf(e) {
	let t = e.type.prop(Kf);
	return t ? t(e.node) : e;
}
function Yf(e, t, n, r = {}) {
	let i = r.maxScanDistance || Lf, a = r.brackets || Rf, o = $(e), s = o.resolveInner(t, n);
	for (let r = s; r; r = r.parent) {
		let i = qf(r.type, n, a);
		if (i && r.from < r.to) {
			let o = Jf(r);
			if (o && (n > 0 ? t >= o.from && t < o.to : t > o.from && t <= o.to)) return Xf(e, t, n, r, o, i, a);
		}
	}
	return Zf(e, t, n, o, s.type, i, a);
}
function Xf(e, t, n, r, i, a, o) {
	let s = r.parent, c = {
		from: i.from,
		to: i.to
	}, l = 0, u = s?.cursor();
	if (u && (n < 0 ? u.childBefore(r.from) : u.childAfter(r.to))) do
		if (n < 0 ? u.to <= r.from : u.from >= r.to) {
			if (l == 0 && a.indexOf(u.type.name) > -1 && u.from < u.to) {
				let e = Jf(u);
				return {
					start: c,
					end: e ? {
						from: e.from,
						to: e.to
					} : void 0,
					matched: !0
				};
			}
			if (qf(u.type, n, o)) l++;
			else if (qf(u.type, -n, o)) {
				if (l == 0) {
					let e = Jf(u);
					return {
						start: c,
						end: e && e.from < e.to ? {
							from: e.from,
							to: e.to
						} : void 0,
						matched: !1
					};
				}
				l--;
			}
		}
	while (n < 0 ? u.prevSibling() : u.nextSibling());
	return {
		start: c,
		matched: !1
	};
}
function Zf(e, t, n, r, i, a, o) {
	if (n < 0 ? !t : t == e.doc.length) return null;
	let s = n < 0 ? e.sliceDoc(t - 1, t) : e.sliceDoc(t, t + 1), c = o.indexOf(s);
	if (c < 0 || c % 2 == 0 != n > 0) return null;
	let l = {
		from: n < 0 ? t - 1 : t,
		to: n > 0 ? t + 1 : t
	}, u = e.doc.iterRange(t, n > 0 ? e.doc.length : 0), d = 0;
	for (let e = 0; !u.next().done && e <= a;) {
		let a = u.value;
		n < 0 && (e += a.length);
		let s = t + e * n;
		for (let e = n > 0 ? 0 : a.length - 1, t = n > 0 ? a.length : -1; e != t; e += n) {
			let t = o.indexOf(a[e]);
			if (!(t < 0 || r.resolveInner(s + e, 1).type != i)) {
				if (t % 2 == 0 == n > 0) d++;
				else if (d == 1) return {
					start: l,
					end: {
						from: s + e,
						to: s + e + 1
					},
					matched: t >> 1 == c >> 1
				};
				else d--;
			}
		}
		n > 0 && (e += a.length);
	}
	return u.done ? {
		start: l,
		matched: !1
	} : null;
}
var Qf = /*@__PURE__*/ Object.create(null), $f = [vu.none], ep = [], tp = /*@__PURE__*/ Object.create(null), np = /*@__PURE__*/ Object.create(null);
for (let [e, t] of [
	["variable", "variableName"],
	["variable-2", "variableName.special"],
	["string-2", "string.special"],
	["def", "variableName.definition"],
	["tag", "tagName"],
	["attribute", "attributeName"],
	["type", "typeName"],
	["builtin", "variableName.standard"],
	["qualifier", "modifier"],
	["error", "invalid"],
	["header", "heading"],
	["property", "propertyName"]
]) np[e] = /*@__PURE__*/ ip(Qf, t);
function rp(e, t) {
	ep.indexOf(e) > -1 || (ep.push(e), console.warn(t));
}
function ip(e, t) {
	let n = [];
	for (let r of t.split(" ")) {
		let t = [];
		for (let n of r.split(".")) {
			let r = e[n] || Q[n];
			r ? typeof r == "function" ? t.length ? t = t.map(r) : rp(n, `Modifier ${n} used at start of tag`) : t.length ? rp(n, `Tag ${n} used as modifier`) : t = Array.isArray(r) ? r : [r] : rp(n, `Unknown highlighting tag ${n}`);
		}
		for (let e of t) n.push(e);
	}
	if (!n.length) return 0;
	let r = t.replace(/ /g, "_"), i = r + " " + n.map((e) => e.id), a = tp[i];
	if (a) return a.id;
	let o = tp[i] = vu.define({
		id: $f.length,
		name: r,
		props: [Zu({ [r]: n })]
	});
	return $f.push(o), o.id;
}
U.RTL, U.LTR;
// node_modules/@codemirror/commands/dist/index.js
var ap = (e) => {
	let { state: t } = e, n = t.doc.lineAt(t.selection.main.from), r = up(e.state, n.from);
	return r.line ? sp(e) : r.block ? lp(e) : !1;
};
function op(e, t) {
	return ({ state: n, dispatch: r }) => {
		if (n.readOnly) return !1;
		let i = e(t, n);
		return i ? (r(n.update(i)), !0) : !1;
	};
}
var sp = /*@__PURE__*/ op(hp, 0), cp = /*@__PURE__*/ op(mp, 0), lp = /*@__PURE__*/ op((e, t) => mp(e, t, pp(t)), 0);
function up(e, t) {
	let n = e.languageDataAt("commentTokens", t, 1);
	return n.length ? n[0] : {};
}
var dp = 50;
function fp(e, { open: t, close: n }, r, i) {
	let a = e.sliceDoc(r - dp, r), o = e.sliceDoc(i, i + dp), s = /\s*$/.exec(a)[0].length, c = /^\s*/.exec(o)[0].length, l = a.length - s;
	if (a.slice(l - t.length, l) == t && o.slice(c, c + n.length) == n) return {
		open: {
			pos: r - s,
			margin: s && 1
		},
		close: {
			pos: i + c,
			margin: c && 1
		}
	};
	let u, d;
	i - r <= 100 ? u = d = e.sliceDoc(r, i) : (u = e.sliceDoc(r, r + dp), d = e.sliceDoc(i - dp, i));
	let f = /^\s*/.exec(u)[0].length, p = /\s*$/.exec(d)[0].length, m = d.length - p - n.length;
	return u.slice(f, f + t.length) == t && d.slice(m, m + n.length) == n ? {
		open: {
			pos: r + f + t.length,
			margin: +!!/\s/.test(u.charAt(f + t.length))
		},
		close: {
			pos: i - p - n.length,
			margin: +!!/\s/.test(d.charAt(m - 1))
		}
	} : null;
}
function pp(e) {
	let t = [];
	for (let n of e.selection.ranges) {
		let r = e.doc.lineAt(n.from), i = n.to <= r.to ? r : e.doc.lineAt(n.to);
		i.from > r.from && i.from == n.to && (i = n.to == r.to + 1 ? r : e.doc.lineAt(n.to - 1));
		let a = t.length - 1;
		a >= 0 && t[a].to > r.from ? t[a].to = i.to : t.push({
			from: r.from + /^\s*/.exec(r.text)[0].length,
			to: i.to
		});
	}
	return t;
}
function mp(e, t, n = t.selection.ranges) {
	let r = n.map((e) => up(t, e.from).block);
	if (!r.every((e) => e)) return null;
	let i = n.map((e, n) => fp(t, r[n], e.from, e.to));
	if (e != 2 && !i.every((e) => e)) return { changes: t.changes(n.map((e, t) => i[t] ? [] : [{
		from: e.from,
		insert: r[t].open + " "
	}, {
		from: e.to,
		insert: " " + r[t].close
	}])) };
	if (e != 1 && i.some((e) => e)) {
		let e = [];
		for (let t = 0, n; t < i.length; t++) if (n = i[t]) {
			let i = r[t], { open: a, close: o } = n;
			e.push({
				from: a.pos - i.open.length,
				to: a.pos + a.margin
			}, {
				from: o.pos - o.margin,
				to: o.pos + i.close.length
			});
		}
		return { changes: e };
	}
	return null;
}
function hp(e, t, n = t.selection.ranges) {
	let r = [], i = -1;
	ranges: for (let { from: e, to: a } of n) {
		let n = r.length, o = 1e9, s;
		for (let n = e; n <= a;) {
			let c = t.doc.lineAt(n);
			if (s == null && (s = up(t, c.from).line, !s)) continue ranges;
			if (c.from > i && (e == a || a > c.from)) {
				i = c.from;
				let e = /^\s*/.exec(c.text)[0].length, t = e == c.length, n = c.text.slice(e, e + s.length) == s ? e : -1;
				e < c.text.length && e < o && (o = e), r.push({
					line: c,
					comment: n,
					token: s,
					indent: e,
					empty: t,
					single: !1
				});
			}
			n = c.to + 1;
		}
		if (o < 1e9) for (let e = n; e < r.length; e++) r[e].indent < r[e].line.text.length && (r[e].indent = o);
		r.length == n + 1 && (r[n].single = !0);
	}
	if (e != 2 && r.some((e) => e.comment < 0 && (!e.empty || e.single))) {
		let e = [];
		for (let { line: t, token: n, indent: i, empty: a, single: o } of r) (o || !a) && e.push({
			from: t.from + i,
			insert: n + " "
		});
		let n = t.changes(e);
		return {
			changes: n,
			selection: t.selection.map(n, 1)
		};
	}
	if (e != 1 && r.some((e) => e.comment >= 0)) {
		let e = [];
		for (let { line: t, comment: n, token: i } of r) if (n >= 0) {
			let r = t.from + n, a = r + i.length;
			t.text[a - t.from] == " " && a++, e.push({
				from: r,
				to: a
			});
		}
		return { changes: e };
	}
	return null;
}
var gp = /*@__PURE__*/ en.define(), _p = /*@__PURE__*/ en.define(), vp = /*@__PURE__*/ P.define(), yp = /*@__PURE__*/ P.define({ combine(e) {
	return _n(e, {
		minDepth: 100,
		newGroupDelay: 500,
		joinToEvent: (e, t) => t
	}, {
		minDepth: Math.max,
		newGroupDelay: Math.min,
		joinToEvent: (e, t) => (n, r) => e(n, r) || t(n, r)
	});
} }), bp = /*@__PURE__*/ It.define({
	create() {
		return zp.empty;
	},
	update(e, t) {
		let n = t.state.facet(yp), r = t.annotation(gp);
		if (r) {
			let i = Dp.fromTransaction(t, r.selection), a = r.side, o = a == 0 ? e.undone : e.done;
			return o = i ? Op(o, o.length, n.minDepth, i) : Pp(o, t.startState.selection), new zp(a == 0 ? r.rest : o, a == 0 ? o : r.rest);
		}
		let i = t.annotation(_p);
		if ((i == "full" || i == "before") && (e = e.isolate()), t.annotation(rn.addToHistory) === !1) return t.changes.empty ? e : e.addMapping(t.changes.desc);
		let a = Dp.fromTransaction(t), o = t.annotation(rn.time), s = t.annotation(rn.userEvent);
		return a ? e = e.addChanges(a, o, s, n, t) : t.selection && (e = e.addSelection(t.startState.selection, o, s, n.newGroupDelay)), (i == "full" || i == "after") && (e = e.isolate()), e;
	},
	toJSON(e) {
		return {
			done: e.done.map((e) => e.toJSON()),
			undone: e.undone.map((e) => e.toJSON())
		};
	},
	fromJSON(e) {
		return new zp(e.done.map(Dp.fromJSON), e.undone.map(Dp.fromJSON));
	}
});
function xp(e = {}) {
	return [
		bp,
		yp.of(e),
		J.domEventHandlers({ beforeinput(e, t) {
			let n = e.inputType == "historyUndo" ? Cp : e.inputType == "historyRedo" ? wp : null;
			return n ? (e.preventDefault(), n(t)) : !1;
		} })
	];
}
function Sp(e, t) {
	return function({ state: n, dispatch: r }) {
		if (!t && n.readOnly) return !1;
		let i = n.field(bp, !1);
		if (!i) return !1;
		let a = i.pop(e, n, t);
		return a ? (r(a), !0) : !1;
	};
}
var Cp = /*@__PURE__*/ Sp(0, !1), wp = /*@__PURE__*/ Sp(1, !1), Tp = /*@__PURE__*/ Sp(0, !0), Ep = /*@__PURE__*/ Sp(1, !0), Dp = class e {
	constructor(e, t, n, r, i) {
		this.changes = e, this.effects = t, this.mapped = n, this.startSelection = r, this.selectionsAfter = i;
	}
	setSelAfter(t) {
		return new e(this.changes, this.effects, this.mapped, this.startSelection, t);
	}
	toJSON() {
		return {
			changes: this.changes?.toJSON(),
			mapped: this.mapped?.toJSON(),
			startSelection: this.startSelection?.toJSON(),
			selectionsAfter: this.selectionsAfter.map((e) => e.toJSON())
		};
	}
	static fromJSON(t) {
		return new e(t.changes && bt.fromJSON(t.changes), [], t.mapped && yt.fromJSON(t.mapped), t.startSelection && N.fromJSON(t.startSelection), t.selectionsAfter.map(N.fromJSON));
	}
	static fromTransaction(t, n) {
		let r = Mp;
		for (let e of t.startState.facet(vp)) {
			let n = e(t);
			n.length && (r = r.concat(n));
		}
		return !r.length && t.changes.empty ? null : new e(t.changes.invert(t.startState.doc), r, void 0, n || t.startState.selection, Mp);
	}
	static selection(t) {
		return new e(void 0, Mp, void 0, void 0, t);
	}
};
function Op(e, t, n, r) {
	let i = t + 1 > n + 20 ? t - n - 1 : 0, a = e.slice(i, t);
	return a.push(r), a;
}
function kp(e, t) {
	let n = [], r = !1;
	return e.iterChangedRanges((e, t) => n.push(e, t)), t.iterChangedRanges((e, t, i, a) => {
		for (let e = 0; e < n.length;) {
			let t = n[e++], o = n[e++];
			a >= t && i <= o && (r = !0);
		}
	}), r;
}
function Ap(e, t) {
	return e.ranges.length == t.ranges.length && e.ranges.filter((e, n) => e.empty != t.ranges[n].empty).length === 0;
}
function jp(e, t) {
	return e.length ? t.length ? e.concat(t) : e : t;
}
var Mp = [], Np = 200;
function Pp(e, t) {
	if (e.length) {
		let n = e[e.length - 1], r = n.selectionsAfter.slice(Math.max(0, n.selectionsAfter.length - Np));
		return r.length && r[r.length - 1].eq(t) ? e : (r.push(t), Op(e, e.length - 1, 1e9, n.setSelAfter(r)));
	}
	return [Dp.selection([t])];
}
function Fp(e) {
	let t = e[e.length - 1], n = e.slice();
	return n[e.length - 1] = t.setSelAfter(t.selectionsAfter.slice(0, t.selectionsAfter.length - 1)), n;
}
function Ip(e, t) {
	if (!e.length) return e;
	let n = e.length, r = Mp;
	for (; n;) {
		let i = Lp(e[n - 1], t, r);
		if (i.changes && !i.changes.empty || i.effects.length) {
			let t = e.slice(0, n);
			return t[n - 1] = i, t;
		}
		t = i.mapped, n--, r = i.selectionsAfter;
	}
	return r.length ? [Dp.selection(r)] : Mp;
}
function Lp(e, t, n) {
	let r = jp(e.selectionsAfter.length ? e.selectionsAfter.map((e) => e.map(t)) : Mp, n);
	if (!e.changes) return Dp.selection(r);
	let i = e.changes.map(t), a = t.mapDesc(e.changes, !0), o = e.mapped ? e.mapped.composeDesc(a) : a;
	return new Dp(i, F.mapEffects(e.effects, t), o, e.startSelection.map(a), r);
}
var Rp = /^(input\.type|delete)($|\.)/, zp = class e {
	constructor(e, t, n = 0, r = void 0) {
		this.done = e, this.undone = t, this.prevTime = n, this.prevUserEvent = r;
	}
	isolate() {
		return this.prevTime ? new e(this.done, this.undone) : this;
	}
	addChanges(t, n, r, i, a) {
		let o = this.done, s = o[o.length - 1];
		return o = s && s.changes && !s.changes.empty && t.changes && (!r || Rp.test(r)) && (!s.selectionsAfter.length && n - this.prevTime < i.newGroupDelay && i.joinToEvent(a, kp(s.changes, t.changes)) || r == "input.type.compose") ? Op(o, o.length - 1, i.minDepth, new Dp(t.changes.compose(s.changes), jp(F.mapEffects(t.effects, s.changes), s.effects), s.mapped, s.startSelection, Mp)) : Op(o, o.length, i.minDepth, t), new e(o, Mp, n, r);
	}
	addSelection(t, n, r, i) {
		let a = this.done.length ? this.done[this.done.length - 1].selectionsAfter : Mp;
		return a.length > 0 && n - this.prevTime < i && r == this.prevUserEvent && r && /^select($|\.)/.test(r) && Ap(a[a.length - 1], t) ? this : new e(Pp(this.done, t), this.undone, n, r);
	}
	addMapping(t) {
		return new e(Ip(this.done, t), Ip(this.undone, t), this.prevTime, this.prevUserEvent);
	}
	pop(e, t, n) {
		let r = e == 0 ? this.done : this.undone;
		if (r.length == 0) return null;
		let i = r[r.length - 1], a = i.selectionsAfter[0] || (i.startSelection ? i.startSelection.map(i.changes.invertedDesc, 1) : t.selection);
		if (n && i.selectionsAfter.length) return t.update({
			selection: i.selectionsAfter[i.selectionsAfter.length - 1],
			annotations: gp.of({
				side: e,
				rest: Fp(r),
				selection: a
			}),
			userEvent: e == 0 ? "select.undo" : "select.redo",
			scrollIntoView: !0
		});
		if (i.changes) {
			let n = r.length == 1 ? Mp : r.slice(0, r.length - 1);
			return i.mapped && (n = Ip(n, i.mapped)), t.update({
				changes: i.changes,
				selection: i.startSelection,
				effects: i.effects,
				annotations: gp.of({
					side: e,
					rest: n,
					selection: a
				}),
				filter: !1,
				userEvent: e == 0 ? "undo" : "redo",
				scrollIntoView: !0
			});
		}
		return null;
	}
};
zp.empty = /*@__PURE__*/ new zp(Mp, Mp);
var Bp = [
	{
		key: "Mod-z",
		run: Cp,
		preventDefault: !0
	},
	{
		key: "Mod-y",
		mac: "Mod-Shift-z",
		run: wp,
		preventDefault: !0
	},
	{
		linux: "Ctrl-Shift-z",
		run: wp,
		preventDefault: !0
	},
	{
		key: "Mod-u",
		run: Tp,
		preventDefault: !0
	},
	{
		key: "Alt-u",
		mac: "Mod-Shift-u",
		run: Ep,
		preventDefault: !0
	}
];
function Vp(e, t) {
	return N.create(e.ranges.map(t), e.mainIndex);
}
function Hp(e, t) {
	return e.update({
		selection: t,
		scrollIntoView: !0,
		userEvent: "select"
	});
}
function Up({ state: e, dispatch: t }, n) {
	let r = Vp(e.selection, n);
	return !r.eq(e.selection, !0) && (t(Hp(e, r)), !0);
}
function Wp(e, t) {
	return N.cursor(t ? e.to : e.from);
}
function Gp(e, t) {
	return Up(e, (n) => n.empty ? e.moveByChar(n, t) : Wp(n, t));
}
function Kp(e) {
	return e.textDirectionAt(e.state.selection.main.head) == U.LTR;
}
var qp = (e) => Gp(e, !Kp(e)), Jp = (e) => Gp(e, Kp(e));
function Yp(e, t) {
	return Up(e, (n) => n.empty ? e.moveByGroup(n, t) : Wp(n, t));
}
var Xp = (e) => Yp(e, !Kp(e)), Zp = (e) => Yp(e, Kp(e));
typeof Intl < "u" && Intl.Segmenter;
function Qp(e, t, n) {
	if (t.type.prop(n)) return !0;
	let r = t.to - t.from;
	return r && (r > 2 || /[^\s,.;:]/.test(e.sliceDoc(t.from, t.to))) || t.firstChild;
}
function $p(e, t, n) {
	let r = $(e).resolveInner(t.head), i = n ? Y.closedBy : Y.openedBy;
	for (let a = t.head;;) {
		let t = n ? r.childAfter(a) : r.childBefore(a);
		if (!t) break;
		Qp(e, t, i) ? r = t : a = n ? t.to : t.from;
	}
	let a = r.type.prop(i), o, s;
	return s = a && (o = n ? Yf(e, r.from, 1) : Yf(e, r.to, -1)) && o.matched ? n ? o.end.to : o.end.from : n ? r.to : r.from, N.cursor(s, n ? -1 : 1);
}
var em = (e) => Up(e, (t) => $p(e.state, t, !Kp(e))), tm = (e) => Up(e, (t) => $p(e.state, t, Kp(e)));
function nm(e, t) {
	return Up(e, (n) => {
		if (!n.empty) return Wp(n, t);
		let r = e.moveVertically(n, t);
		return r.head == n.head ? e.moveToLineBoundary(n, t) : r;
	});
}
var rm = (e) => nm(e, !1), im = (e) => nm(e, !0);
function am(e) {
	let t = e.scrollDOM.clientHeight < e.scrollDOM.scrollHeight - 2, n = 0, r = 0, i;
	if (t) {
		for (let t of e.state.facet(J.scrollMargins)) {
			let i = t(e);
			i?.top && (n = Math.max(i?.top, n)), i?.bottom && (r = Math.max(i?.bottom, r));
		}
		i = e.scrollDOM.clientHeight - n - r;
	} else i = (e.dom.ownerDocument.defaultView || window).innerHeight;
	return {
		marginTop: n,
		marginBottom: r,
		selfScroll: t,
		height: Math.max(e.defaultLineHeight, i - 5)
	};
}
function om(e, t) {
	let n = am(e), { state: r } = e, i = Vp(r.selection, (r) => r.empty ? e.moveVertically(r, t, n.height) : Wp(r, t));
	if (i.eq(r.selection)) return !1;
	let a;
	if (n.selfScroll) {
		let t = e.coordsAtPos(r.selection.main.head), o = e.scrollDOM.getBoundingClientRect(), s = o.top + n.marginTop, c = o.bottom - n.marginBottom;
		t && t.top > s && t.bottom < c && (a = J.scrollIntoView(i.main.head, {
			y: "start",
			yMargin: t.top - s
		}));
	}
	return e.dispatch(Hp(r, i), { effects: a }), !0;
}
var sm = (e) => om(e, !1), cm = (e) => om(e, !0);
function lm(e, t, n) {
	let r = e.lineBlockAt(t.head), i = e.moveToLineBoundary(t, n);
	if (i.head == t.head && i.head != (n ? r.to : r.from) && (i = e.moveToLineBoundary(t, n, !1)), !n && i.head == r.from && r.length) {
		let n = /^\s*/.exec(e.state.sliceDoc(r.from, Math.min(r.from + 100, r.to)))[0].length;
		n && t.head != r.from + n && (i = N.cursor(r.from + n));
	}
	return i;
}
var um = (e) => Up(e, (t) => lm(e, t, !0)), dm = (e) => Up(e, (t) => lm(e, t, !1)), fm = (e) => Up(e, (t) => lm(e, t, !Kp(e))), pm = (e) => Up(e, (t) => lm(e, t, Kp(e))), mm = (e) => Up(e, (t) => e.moveToLineBoundary(t, !1, !1)), hm = (e) => Up(e, (t) => e.moveToLineBoundary(t, !0, !1));
function gm(e, t, n) {
	let r = !1, i = Vp(e.selection, (t) => {
		let i = Yf(e, t.head, -1) || Yf(e, t.head, 1) || t.head > 0 && Yf(e, t.head - 1, 1) || t.head < e.doc.length && Yf(e, t.head + 1, -1);
		if (!i || !i.end) return t;
		r = !0;
		let a = i.start.from == t.head ? i.end.to : i.end.from;
		return n ? N.range(t.anchor, a) : N.cursor(a);
	});
	return r ? (t(Hp(e, i)), !0) : !1;
}
var _m = ({ state: e, dispatch: t }) => gm(e, t, !1);
function vm(e, t, n) {
	let r = Vp(e.state.selection, (e) => {
		e.undirectional && e.head >= e.anchor != t && (e = N.range(e.head, e.anchor));
		let r = n(e);
		return N.range(e.anchor, r.head, r.goalColumn, r.bidiLevel || void 0, r.assoc);
	});
	return !r.eq(e.state.selection) && (e.dispatch(Hp(e.state, r)), !0);
}
function ym(e, t) {
	return vm(e, t, (n) => e.moveByChar(n, t));
}
var bm = (e) => ym(e, !Kp(e)), xm = (e) => ym(e, Kp(e));
function Sm(e, t) {
	return vm(e, t, (n) => e.moveByGroup(n, t));
}
var Cm = (e) => Sm(e, !Kp(e)), wm = (e) => Sm(e, Kp(e)), Tm = (e) => {
	let t = !Kp(e);
	return vm(e, t, (n) => $p(e.state, n, t));
}, Em = (e) => {
	let t = Kp(e);
	return vm(e, t, (n) => $p(e.state, n, t));
};
function Dm(e, t) {
	return vm(e, t, (n) => e.moveVertically(n, t));
}
var Om = (e) => Dm(e, !1), km = (e) => Dm(e, !0);
function Am(e, t) {
	return vm(e, t, (n) => e.moveVertically(n, t, am(e).height));
}
var jm = (e) => Am(e, !1), Mm = (e) => Am(e, !0), Nm = (e) => vm(e, !0, (t) => lm(e, t, !0)), Pm = (e) => vm(e, !1, (t) => lm(e, t, !1)), Fm = (e) => {
	let t = !Kp(e);
	return vm(e, t, (n) => lm(e, n, t));
}, Im = (e) => {
	let t = Kp(e);
	return vm(e, t, (n) => lm(e, n, t));
}, Lm = (e) => vm(e, !1, (t) => N.cursor(e.lineBlockAt(t.head).from)), Rm = (e) => vm(e, !0, (t) => N.cursor(e.lineBlockAt(t.head).to)), zm = ({ state: e, dispatch: t }) => (t(Hp(e, { anchor: 0 })), !0), Bm = ({ state: e, dispatch: t }) => (t(Hp(e, { anchor: e.doc.length })), !0), Vm = ({ state: e, dispatch: t }) => (t(Hp(e, {
	anchor: e.selection.main.anchor,
	head: 0
})), !0), Hm = ({ state: e, dispatch: t }) => (t(Hp(e, {
	anchor: e.selection.main.anchor,
	head: e.doc.length
})), !0), Um = ({ state: e, dispatch: t }) => (t(e.update({
	selection: {
		anchor: 0,
		head: e.doc.length
	},
	userEvent: "select"
})), !0), Wm = ({ state: e, dispatch: t }) => {
	let n = lh(e).map(({ from: t, to: n }) => N.undirectionalRange(t, Math.min(n + 1, e.doc.length)));
	return t(e.update({
		selection: N.create(n),
		userEvent: "select"
	})), !0;
}, Gm = ({ state: e, dispatch: t }) => {
	let n = Vp(e.selection, (t) => {
		let n = $(e), r = n.resolveStack(t.from, 1);
		if (t.empty) {
			let e = n.resolveStack(t.from, -1);
			e.node.from >= r.node.from && e.node.to <= r.node.to && (r = e);
		}
		for (let e = r; e; e = e.next) {
			let { node: n } = e;
			if ((n.from < t.from && n.to >= t.to || n.to > t.to && n.from <= t.from) && e.next) return N.undirectionalRange(n.from, n.to);
		}
		return t;
	});
	return !n.eq(e.selection) && (t(Hp(e, n)), !0);
};
function Km(e, t) {
	let { state: n } = e, r = n.selection, i = n.selection.ranges.slice();
	for (let r of n.selection.ranges) {
		let a = n.doc.lineAt(r.head);
		if (t ? a.to < e.state.doc.length : a.from > 0) for (let n = r;;) {
			let r = e.moveVertically(n, t);
			if (r.head < a.from || r.head > a.to) {
				i.some((e) => e.head == r.head) || i.push(r);
				break;
			}
			if (r.head == n.head) break;
			n = r;
		}
	}
	return i.length != r.ranges.length && (e.dispatch(Hp(n, N.create(i, i.length - 1))), !0);
}
var qm = (e) => Km(e, !1), Jm = (e) => Km(e, !0), Ym = ({ state: e, dispatch: t }) => {
	let n = e.selection, r = null;
	return n.ranges.length > 1 ? r = N.create([n.main]) : n.main.empty || (r = N.create([N.cursor(n.main.head)])), r ? (t(Hp(e, r)), !0) : !1;
};
function Xm(e, t) {
	if (e.state.readOnly) return !1;
	let n = "delete.selection", { state: r } = e, i = r.changeByRange((r) => {
		let { from: i, to: a } = r;
		if (i == a) {
			let o = t(r);
			o < i ? (n = "delete.backward", o = Zm(e, o, !1)) : o > i && (n = "delete.forward", o = Zm(e, o, !0)), i = Math.min(i, o), a = Math.max(a, o);
		} else i = Zm(e, i, !1), a = Zm(e, a, !0);
		return i == a ? { range: r } : {
			changes: {
				from: i,
				to: a
			},
			range: N.cursor(i, i < r.head ? -1 : 1)
		};
	});
	return !i.changes.empty && (e.dispatch(r.update(i, {
		scrollIntoView: !0,
		userEvent: n,
		effects: n == "delete.selection" ? J.announce.of(r.phrase("Selection deleted")) : void 0
	})), !0);
}
function Zm(e, t, n) {
	if (e instanceof J) for (let r of e.state.facet(J.atomicRanges).map((t) => t(e))) r.between(t, t, (e, r) => {
		e < t && r > t && (t = n ? r : e);
	});
	return t;
}
var Qm = (e, t, n) => Xm(e, (r) => {
	let i = r.from, { state: a } = e, o = a.doc.lineAt(i), s, c;
	if (n && !t && i > o.from && i < o.from + 200 && !/[^ \t]/.test(s = o.text.slice(0, i - o.from))) {
		if (s[s.length - 1] == "	") return i - 1;
		let e = In(s, a.tabSize) % Ld(a) || Ld(a);
		for (let t = 0; t < e && s[s.length - 1 - t] == " "; t++) i--;
		c = i;
	} else c = M(o.text, i - o.from, t, t) + o.from, c == i && o.number != (t ? a.doc.lines : 1) ? c += t ? 1 : -1 : !t && /[\ufe00-\ufe0f]/.test(o.text.slice(c - o.from, i - o.from)) && (c = M(o.text, c - o.from, !1, !1) + o.from);
	return c;
}), $m = (e) => Qm(e, !1, !0), eh = (e) => Qm(e, !0, !1), th = (e, t) => Xm(e, (n) => {
	let r = n.head, { state: i } = e, a = i.doc.lineAt(r), o = i.charCategorizer(r);
	for (let e = null;;) {
		if (r == (t ? a.to : a.from)) {
			r == n.head && a.number != (t ? i.doc.lines : 1) && (r += t ? 1 : -1);
			break;
		}
		let s = M(a.text, r - a.from, t) + a.from, c = a.text.slice(Math.min(r, s) - a.from, Math.max(r, s) - a.from), l = o(c);
		if (e != null && l != e) break;
		(c != " " || r != n.head) && (e = l), r = s;
	}
	return r;
}), nh = (e) => th(e, !1), rh = (e) => th(e, !0), ih = (e) => Xm(e, (t) => {
	let n = e.lineBlockAt(t.head).to;
	return t.head < n ? n : Math.min(e.state.doc.length, t.head + 1);
}), ah = (e) => Xm(e, (t) => {
	let n = e.moveToLineBoundary(t, !1).head;
	return t.head > n ? n : Math.max(0, t.head - 1);
}), oh = (e) => Xm(e, (t) => {
	let n = e.moveToLineBoundary(t, !0).head;
	return t.head < n ? n : Math.min(e.state.doc.length, t.head + 1);
}), sh = ({ state: e, dispatch: t }) => {
	if (e.readOnly) return !1;
	let n = e.changeByRange((e) => ({
		changes: {
			from: e.from,
			to: e.to,
			insert: j.of(["", ""])
		},
		range: N.cursor(e.from)
	}));
	return t(e.update(n, {
		scrollIntoView: !0,
		userEvent: "input"
	})), !0;
}, ch = ({ state: e, dispatch: t }) => {
	if (e.readOnly) return !1;
	let n = e.changeByRange((t) => {
		if (!t.empty || t.from == 0 || t.from == e.doc.length) return { range: t };
		let n = t.from, r = e.doc.lineAt(n), i = n == r.from ? n - 1 : M(r.text, n - r.from, !1) + r.from, a = n == r.to ? n + 1 : M(r.text, n - r.from, !0) + r.from;
		return {
			changes: {
				from: i,
				to: a,
				insert: e.doc.slice(n, a).append(e.doc.slice(i, n))
			},
			range: N.cursor(a)
		};
	});
	return !n.changes.empty && (t(e.update(n, {
		scrollIntoView: !0,
		userEvent: "move.character"
	})), !0);
};
function lh(e) {
	let t = [], n = -1;
	for (let r of e.selection.ranges) {
		let i = e.doc.lineAt(r.from), a = e.doc.lineAt(r.to);
		if (!r.empty && r.to == a.from && (a = e.doc.lineAt(r.to - 1)), n >= i.number) {
			let e = t[t.length - 1];
			e.to = a.to, e.ranges.push(r);
		} else t.push({
			from: i.from,
			to: a.to,
			ranges: [r]
		});
		n = a.number + 1;
	}
	return t;
}
function uh(e, t, n) {
	if (e.readOnly) return !1;
	let r = [], i = [];
	for (let t of lh(e)) {
		if (n ? t.to == e.doc.length : t.from == 0) continue;
		let a = e.doc.lineAt(n ? t.to + 1 : t.from - 1), o = a.length + 1;
		if (n) {
			r.push({
				from: t.to,
				to: a.to
			}, {
				from: t.from,
				insert: a.text + e.lineBreak
			});
			for (let n of t.ranges) i.push(N.range(Math.min(e.doc.length, n.anchor + o), Math.min(e.doc.length, n.head + o)));
		} else {
			r.push({
				from: a.from,
				to: t.from
			}, {
				from: t.to,
				insert: e.lineBreak + a.text
			});
			for (let e of t.ranges) i.push(N.range(e.anchor - o, e.head - o));
		}
	}
	return r.length ? (t(e.update({
		changes: r,
		scrollIntoView: !0,
		selection: N.create(i, e.selection.mainIndex),
		userEvent: "move.line"
	})), !0) : !1;
}
var dh = ({ state: e, dispatch: t }) => uh(e, t, !1), fh = ({ state: e, dispatch: t }) => uh(e, t, !0);
function ph(e, t, n) {
	if (e.readOnly) return !1;
	let r = [];
	for (let t of lh(e)) n ? r.push({
		from: t.from,
		insert: e.doc.slice(t.from, t.to) + e.lineBreak
	}) : r.push({
		from: t.to,
		insert: e.lineBreak + e.doc.slice(t.from, t.to)
	});
	let i = e.changes(r);
	return t(e.update({
		changes: i,
		selection: e.selection.map(i, n ? 1 : -1),
		scrollIntoView: !0,
		userEvent: "input.copyline"
	})), !0;
}
var mh = ({ state: e, dispatch: t }) => ph(e, t, !1), hh = ({ state: e, dispatch: t }) => ph(e, t, !0), gh = (e) => {
	if (e.state.readOnly) return !1;
	let { state: t } = e, n = t.changes(lh(t).map(({ from: e, to: n }) => (e > 0 ? e-- : n < t.doc.length && n++, {
		from: e,
		to: n
	}))), r = Vp(t.selection, (t) => {
		let n;
		if (e.lineWrapping) {
			let r = e.lineBlockAt(t.head), i = e.coordsAtPos(t.head, t.assoc || 1);
			i && (n = r.bottom + e.documentTop - i.bottom + e.defaultLineHeight / 2);
		}
		return e.moveVertically(t, !0, n);
	}).map(n);
	return e.dispatch({
		changes: n,
		selection: r,
		scrollIntoView: !0,
		userEvent: "delete.line"
	}), !0;
};
function _h(e, t) {
	if (/\(\)|\[\]|\{\}/.test(e.sliceDoc(t - 1, t + 1))) return {
		from: t,
		to: t
	};
	let n = $(e).resolveInner(t), r = n.childBefore(t), i = n.childAfter(t), a;
	return r && i && r.to <= t && i.from >= t && (a = r.type.prop(Y.closedBy)) && a.indexOf(i.name) > -1 && e.doc.lineAt(r.to).from == e.doc.lineAt(i.from).from && !/\S/.test(e.sliceDoc(r.to, i.from)) ? {
		from: r.to,
		to: i.from
	} : null;
}
var vh = /*@__PURE__*/ bh(!1), yh = /*@__PURE__*/ bh(!0);
function bh(e) {
	return ({ state: t, dispatch: n }) => {
		if (t.readOnly) return !1;
		let r = t.changeByRange((n) => {
			let { from: r, to: i } = n, a = t.doc.lineAt(r), o = !e && r == i && _h(t, r);
			e && (r = i = (i <= a.to ? a : t.doc.lineAt(i)).to);
			let s = new Bd(t, {
				simulateBreak: r,
				simulateDoubleBreak: !!o
			}), c = zd(s, r);
			for (c ??= In(/^\s*/.exec(t.doc.lineAt(r).text)[0], t.tabSize); i < a.to && /\s/.test(a.text[i - a.from]);) i++;
			o ? {from: r, to: i} = o : r > a.from && r < a.from + 100 && !/\S/.test(a.text.slice(0, r)) && (r = a.from);
			let l = ["", Rd(t, c)];
			return o && l.push(Rd(t, s.lineIndent(a.from, -1))), {
				changes: {
					from: r,
					to: i,
					insert: j.of(l)
				},
				range: N.cursor(r + 1 + l[1].length)
			};
		});
		return n(t.update(r, {
			scrollIntoView: !0,
			userEvent: "input"
		})), !0;
	};
}
function xh(e, t) {
	let n = -1;
	return e.changeByRange((r) => {
		let i = [];
		for (let a = r.from; a <= r.to;) {
			let o = e.doc.lineAt(a);
			o.number > n && (r.empty || r.to > o.from) && (t(o, i, r), n = o.number), a = o.to + 1;
		}
		let a = e.changes(i);
		return {
			changes: i,
			range: N.range(a.mapPos(r.anchor, 1), a.mapPos(r.head, 1))
		};
	});
}
var Sh = ({ state: e, dispatch: t }) => {
	if (e.readOnly) return !1;
	let n = Object.create(null), r = new Bd(e, { overrideIndentation: (e) => n[e] ?? -1 }), i = xh(e, (t, i, a) => {
		let o = zd(r, t.from);
		if (o == null) return;
		/\S/.test(t.text) || (o = 0);
		let s = /^\s*/.exec(t.text)[0], c = Rd(e, o);
		(s != c || a.from < t.from + s.length) && (n[t.from] = o, i.push({
			from: t.from,
			to: t.from + s.length,
			insert: c
		}));
	});
	return i.changes.empty || t(e.update(i, { userEvent: "indent" })), !0;
}, Ch = ({ state: e, dispatch: t }) => !e.readOnly && (t(e.update(xh(e, (t, n) => {
	n.push({
		from: t.from,
		insert: e.facet(Id)
	});
}), { userEvent: "input.indent" })), !0), wh = ({ state: e, dispatch: t }) => !e.readOnly && (t(e.update(xh(e, (t, n) => {
	let r = /^\s*/.exec(t.text)[0];
	if (!r) return;
	let i = In(r, e.tabSize), a = 0, o = Rd(e, Math.max(0, i - Ld(e)));
	for (; a < r.length && a < o.length && r.charCodeAt(a) == o.charCodeAt(a);) a++;
	n.push({
		from: t.from + a,
		to: t.from + r.length,
		insert: o.slice(a)
	});
}), { userEvent: "delete.dedent" })), !0), Th = (e) => (e.setTabFocusMode(), !0), Eh = [
	{
		key: "Ctrl-b",
		run: qp,
		shift: bm,
		preventDefault: !0
	},
	{
		key: "Ctrl-f",
		run: Jp,
		shift: xm
	},
	{
		key: "Ctrl-p",
		run: rm,
		shift: Om
	},
	{
		key: "Ctrl-n",
		run: im,
		shift: km
	},
	{
		key: "Ctrl-a",
		run: mm,
		shift: Lm
	},
	{
		key: "Ctrl-e",
		run: hm,
		shift: Rm
	},
	{
		key: "Ctrl-d",
		run: eh
	},
	{
		key: "Ctrl-h",
		run: $m
	},
	{
		key: "Ctrl-k",
		run: ih
	},
	{
		key: "Ctrl-Alt-h",
		run: nh
	},
	{
		key: "Ctrl-o",
		run: sh
	},
	{
		key: "Ctrl-t",
		run: ch
	},
	{
		key: "Ctrl-v",
		run: cm
	}
], Dh = /*@__PURE__*/ [
	{
		key: "ArrowLeft",
		run: qp,
		shift: bm,
		preventDefault: !0
	},
	{
		key: "Mod-ArrowLeft",
		mac: "Alt-ArrowLeft",
		run: Xp,
		shift: Cm,
		preventDefault: !0
	},
	{
		mac: "Cmd-ArrowLeft",
		run: fm,
		shift: Fm,
		preventDefault: !0
	},
	{
		key: "ArrowRight",
		run: Jp,
		shift: xm,
		preventDefault: !0
	},
	{
		key: "Mod-ArrowRight",
		mac: "Alt-ArrowRight",
		run: Zp,
		shift: wm,
		preventDefault: !0
	},
	{
		mac: "Cmd-ArrowRight",
		run: pm,
		shift: Im,
		preventDefault: !0
	},
	{
		key: "ArrowUp",
		run: rm,
		shift: Om,
		preventDefault: !0
	},
	{
		mac: "Cmd-ArrowUp",
		run: zm,
		shift: Vm
	},
	{
		mac: "Ctrl-ArrowUp",
		run: sm,
		shift: jm
	},
	{
		key: "ArrowDown",
		run: im,
		shift: km,
		preventDefault: !0
	},
	{
		mac: "Cmd-ArrowDown",
		run: Bm,
		shift: Hm
	},
	{
		mac: "Ctrl-ArrowDown",
		run: cm,
		shift: Mm
	},
	{
		key: "PageUp",
		run: sm,
		shift: jm
	},
	{
		key: "PageDown",
		run: cm,
		shift: Mm
	},
	{
		key: "Home",
		run: dm,
		shift: Pm,
		preventDefault: !0
	},
	{
		key: "Mod-Home",
		run: zm,
		shift: Vm
	},
	{
		key: "End",
		run: um,
		shift: Nm,
		preventDefault: !0
	},
	{
		key: "Mod-End",
		run: Bm,
		shift: Hm
	},
	{
		key: "Enter",
		run: vh,
		shift: vh
	},
	{
		key: "Mod-a",
		run: Um
	},
	{
		key: "Backspace",
		run: $m,
		shift: $m,
		preventDefault: !0
	},
	{
		key: "Delete",
		run: eh,
		preventDefault: !0
	},
	{
		key: "Mod-Backspace",
		mac: "Alt-Backspace",
		run: nh,
		preventDefault: !0
	},
	{
		key: "Mod-Delete",
		mac: "Alt-Delete",
		run: rh,
		preventDefault: !0
	},
	{
		mac: "Mod-Backspace",
		run: ah,
		preventDefault: !0
	},
	{
		mac: "Mod-Delete",
		run: oh,
		preventDefault: !0
	}
].concat(/*@__PURE__*/ Eh.map((e) => ({
	mac: e.key,
	run: e.run,
	shift: e.shift
}))), Oh = /*@__PURE__*/ [
	{
		key: "Alt-ArrowLeft",
		mac: "Ctrl-ArrowLeft",
		run: em,
		shift: Tm
	},
	{
		key: "Alt-ArrowRight",
		mac: "Ctrl-ArrowRight",
		run: tm,
		shift: Em
	},
	{
		key: "Alt-ArrowUp",
		run: dh
	},
	{
		key: "Shift-Alt-ArrowUp",
		run: mh
	},
	{
		key: "Alt-ArrowDown",
		run: fh
	},
	{
		key: "Shift-Alt-ArrowDown",
		run: hh
	},
	{
		key: "Mod-Alt-ArrowUp",
		run: qm
	},
	{
		key: "Mod-Alt-ArrowDown",
		run: Jm
	},
	{
		key: "Escape",
		run: Ym
	},
	{
		key: "Mod-Enter",
		run: yh
	},
	{
		key: "Alt-l",
		mac: "Ctrl-l",
		run: Wm
	},
	{
		key: "Mod-i",
		run: Gm,
		preventDefault: !0
	},
	{
		key: "Mod-[",
		run: wh
	},
	{
		key: "Mod-]",
		run: Ch
	},
	{
		key: "Mod-Alt-\\",
		run: Sh
	},
	{
		key: "Shift-Mod-k",
		run: gh
	},
	{
		key: "Shift-Mod-\\",
		run: _m
	},
	{
		key: "Mod-/",
		run: ap
	},
	{
		key: "Alt-A",
		mac: "Ctrl-A",
		run: cp
	},
	{
		key: "Ctrl-m",
		mac: "Shift-Alt-m",
		run: Th
	}
].concat(Dh), kh = typeof String.prototype.normalize == "function" ? (e) => e.normalize("NFKD") : (e) => e, Ah = class {
	constructor(e, t, n = 0, r = e.length, i, a) {
		this.test = a, this.value = {
			from: 0,
			to: 0,
			precise: !1
		}, this.done = !1, this.matches = [], this.buffer = "", this.bufferPos = 0, this.iter = e.iterRange(n, r), this.bufferStart = n, this.normalize = i ? (e) => i(kh(e)) : kh, this.query = this.normalize(t);
	}
	peek() {
		if (this.bufferPos == this.buffer.length) {
			if (this.bufferStart += this.buffer.length, this.iter.next(), this.iter.done) return -1;
			this.bufferPos = 0, this.buffer = this.iter.value;
		}
		return mt(this.buffer, this.bufferPos);
	}
	next() {
		for (; this.matches.length;) this.matches.pop();
		return this.nextOverlapping();
	}
	nextOverlapping() {
		for (;;) {
			let e = this.peek();
			if (e < 0) return this.done = !0, this;
			let t = ht(e), n = this.bufferStart + this.bufferPos;
			this.bufferPos += gt(e);
			let r = this.normalize(t);
			if (r.length) for (let e = 0, i = n, a = !0;; e++) {
				let n = r.charCodeAt(e), o = this.match(n, i, a, this.bufferPos + this.bufferStart, e == r.length - 1);
				if (o) return this.value = o, this;
				if (e == r.length - 1) break;
				a && e < t.length && t.charCodeAt(e) == n ? i++ : a = !1;
			}
		}
	}
	match(e, t, n, r, i) {
		let a = null;
		for (let t = 0; t < this.matches.length;) {
			let n = this.matches[t], o = !1;
			this.query.charCodeAt(n.index) == e && (n.index == this.query.length - 1 ? a = {
				from: n.from,
				to: r,
				precise: i && n.precise
			} : (n.index++, o = !0)), o ? t++ : this.matches.splice(t, 1);
		}
		return this.query.charCodeAt(0) == e && (this.query.length == 1 ? a = {
			from: t,
			to: r,
			precise: n && i
		} : this.matches.push({
			from: t,
			index: 1,
			precise: n
		})), a && this.test && !this.test(a.from, a.to, this.buffer, this.bufferStart) && (a = null), a;
	}
};
typeof Symbol < "u" && (Ah.prototype[Symbol.iterator] = function() {
	return this;
});
var jh = {
	from: -1,
	to: -1,
	match: /*@__PURE__*/ /.*/.exec(""),
	precise: !0
}, Mh = "gm" + (/x/.unicode == null ? "" : "u"), Nh = class {
	constructor(e, t, n, r = 0, i = e.length) {
		if (this.text = e, this.to = i, this.curLine = "", this.done = !1, this.value = jh, /\\[sWDnr]|\n|\r|\[\^/.test(t)) return new Ih(e, t, n, r, i);
		this.re = new RegExp(t, Mh + (n?.ignoreCase ? "i" : "")), this.test = n?.test, this.iter = e.iter();
		let a = e.lineAt(r);
		this.curLineStart = a.from, this.matchPos = Rh(e, r), this.getLine(this.curLineStart);
	}
	getLine(e) {
		this.iter.next(e), this.iter.lineBreak ? this.curLine = "" : (this.curLine = this.iter.value, this.curLineStart + this.curLine.length > this.to && (this.curLine = this.curLine.slice(0, this.to - this.curLineStart)), this.iter.next());
	}
	nextLine() {
		this.curLineStart = this.curLineStart + this.curLine.length + 1, this.curLineStart > this.to ? this.curLine = "" : this.getLine(0);
	}
	next() {
		for (let e = this.matchPos - this.curLineStart;;) {
			this.re.lastIndex = e;
			let t = this.matchPos <= this.to && this.re.exec(this.curLine);
			if (t) {
				let n = this.curLineStart + t.index, r = n + t[0].length;
				if (this.matchPos = Rh(this.text, r + +(n == r)), n == this.curLineStart + this.curLine.length && this.nextLine(), (n < r || n > this.value.to) && (!this.test || this.test(n, r, t))) return this.value = {
					from: n,
					to: r,
					precise: !0,
					match: t
				}, this;
				e = this.matchPos - this.curLineStart;
			} else if (this.curLineStart + this.curLine.length < this.to) this.nextLine(), e = 0;
			else return this.done = !0, this;
		}
	}
}, Ph = /*@__PURE__*/ new WeakMap(), Fh = class e {
	constructor(e, t) {
		this.from = e, this.text = t;
	}
	get to() {
		return this.from + this.text.length;
	}
	static get(t, n, r) {
		let i = Ph.get(t);
		if (!i || i.from >= r || i.to <= n) {
			let i = new e(n, t.sliceString(n, r));
			return Ph.set(t, i), i;
		}
		if (i.from == n && i.to == r) return i;
		let { text: a, from: o } = i;
		return o > n && (a = t.sliceString(n, o) + a, o = n), i.to < r && (a += t.sliceString(i.to, r)), Ph.set(t, new e(o, a)), new e(n, a.slice(n - o, r - o));
	}
}, Ih = class {
	constructor(e, t, n, r, i) {
		this.text = e, this.to = i, this.done = !1, this.value = jh, this.matchPos = Rh(e, r), this.re = new RegExp(t, Mh + (n?.ignoreCase ? "i" : "")), this.test = n?.test, this.flat = Fh.get(e, r, this.chunkEnd(r + 5e3));
	}
	chunkEnd(e) {
		return e >= this.to ? this.to : this.text.lineAt(e).to;
	}
	next() {
		for (;;) {
			let e = this.re.lastIndex = this.matchPos - this.flat.from, t = this.re.exec(this.flat.text);
			if (t && !t[0] && t.index == e && (this.re.lastIndex = e + 1, t = this.re.exec(this.flat.text)), t) {
				let e = this.flat.from + t.index, n = e + t[0].length;
				if ((this.flat.to >= this.to || t.index + t[0].length <= this.flat.text.length - 10) && (!this.test || this.test(e, n, t))) return this.value = {
					from: e,
					to: n,
					precise: !0,
					match: t
				}, this.matchPos = Rh(this.text, n + +(e == n)), this;
			}
			if (this.flat.to == this.to) return this.done = !0, this;
			this.flat = Fh.get(this.text, this.flat.from, this.chunkEnd(this.flat.from + this.flat.text.length * 2));
		}
	}
};
typeof Symbol < "u" && (Nh.prototype[Symbol.iterator] = Ih.prototype[Symbol.iterator] = function() {
	return this;
});
function Lh(e) {
	try {
		return new RegExp(e, Mh), !0;
	} catch {
		return !1;
	}
}
function Rh(e, t) {
	if (t >= e.length) return t;
	let n = e.lineAt(t), r;
	for (; t < n.to && (r = n.text.charCodeAt(t - n.from)) >= 56320 && r < 57344;) t++;
	return t;
}
var zh = (e) => {
	let t = Il(e, "cm-goto-line");
	if (t) {
		let e = t.dom.querySelector("input[type=text]");
		return e && e.select(), !0;
	}
	let { state: n } = e, r = String(n.doc.lineAt(e.state.selection.main.head).number), { close: i, result: a } = Fl(e, {
		class: "cm-goto-line",
		label: n.phrase("Go to line"),
		input: {
			type: "text",
			name: "line",
			value: r
		},
		focus: !0,
		submitLabel: n.phrase("go")
	});
	return a.then((t) => {
		let r = t && /^([+-])?(\d+)?(:\d+)?(%)?$/.exec(t.elements.line.value);
		if (!r) {
			e.dispatch({ effects: i });
			return;
		}
		let a = n.doc.lineAt(n.selection.main.head), [, o, s, c, l] = r, u = c ? +c.slice(1) : 0, d = s ? +s : a.number;
		if (s && l) {
			let e = d / 100;
			o && (e = e * (o == "-" ? -1 : 1) + a.number / n.doc.lines), d = Math.round(n.doc.lines * e);
		} else s && o && (d = d * (o == "-" ? -1 : 1) + a.number);
		let f = n.doc.line(Math.max(1, Math.min(n.doc.lines, d))), p = N.cursor(f.from + Math.max(0, Math.min(u, f.length)));
		e.dispatch({
			effects: [i, J.scrollIntoView(p.from, { y: "center" })],
			selection: p
		});
	}), !0;
}, Bh = {
	highlightWordAroundCursor: !1,
	minSelectionLength: 1,
	maxMatches: 100,
	wholeWords: !1
}, Vh = /*@__PURE__*/ P.define({ combine(e) {
	return _n(e, Bh, {
		highlightWordAroundCursor: (e, t) => e || t,
		minSelectionLength: Math.min,
		maxMatches: Math.min
	});
} });
function Hh(e) {
	let t = [Jh, qh];
	return e && t.push(Vh.of(e)), t;
}
var Uh = /*@__PURE__*/ V.mark({ class: "cm-selectionMatch" }), Wh = /*@__PURE__*/ V.mark({ class: "cm-selectionMatch cm-selectionMatch-main" });
function Gh(e, t, n, r) {
	return (n == 0 || e(t.sliceDoc(n - 1, n)) != I.Word) && (r == t.doc.length || e(t.sliceDoc(r, r + 1)) != I.Word);
}
function Kh(e, t, n, r) {
	return e(t.sliceDoc(n, n + 1)) == I.Word && e(t.sliceDoc(r - 1, r)) == I.Word;
}
var qh = /*@__PURE__*/ G.fromClass(class {
	constructor(e) {
		this.decorations = this.getDeco(e);
	}
	update(e) {
		(e.selectionSet || e.docChanged || e.viewportChanged) && (this.decorations = this.getDeco(e.view));
	}
	getDeco(e) {
		let t = e.state.facet(Vh), { state: n } = e, r = n.selection;
		if (r.ranges.length > 1) return V.none;
		let i = r.main, a, o = null;
		if (i.empty) {
			if (!t.highlightWordAroundCursor) return V.none;
			let e = n.wordAt(i.head);
			if (!e) return V.none;
			o = n.charCategorizer(i.head), a = n.sliceDoc(e.from, e.to);
		} else {
			let e = i.to - i.from;
			if (e < t.minSelectionLength || e > 200) return V.none;
			if (t.wholeWords) {
				if (a = n.sliceDoc(i.from, i.to), o = n.charCategorizer(i.head), !(Gh(o, n, i.from, i.to) && Kh(o, n, i.from, i.to))) return V.none;
			} else if (a = n.sliceDoc(i.from, i.to), !a) return V.none;
		}
		let s = [];
		for (let r of e.visibleRanges) {
			let e = new Ah(n.doc, a, r.from, r.to);
			for (; !e.next().done;) {
				let { from: r, to: a } = e.value;
				if ((!o || Gh(o, n, r, a)) && (i.empty && r <= i.from && a >= i.to ? s.push(Wh.range(r, a)) : (r >= i.to || a <= i.from) && s.push(Uh.range(r, a)), s.length > t.maxMatches)) return V.none;
			}
		}
		return V.set(s);
	}
}, { decorations: (e) => e.decorations }), Jh = /*@__PURE__*/ J.baseTheme({
	".cm-selectionMatch": { backgroundColor: "#99ff7780" },
	".cm-searchMatch .cm-selectionMatch": { backgroundColor: "transparent" }
}), Yh = ({ state: e, dispatch: t }) => {
	let { selection: n } = e, r = N.create(n.ranges.map((t) => e.wordAt(t.head) || N.cursor(t.head)), n.mainIndex);
	return !r.eq(n) && (t(e.update({ selection: r })), !0);
};
function Xh(e, t) {
	let { main: n, ranges: r } = e.selection, i = e.wordAt(n.head), a = i && i.from == n.from && i.to == n.to;
	for (let n = !1, i = new Ah(e.doc, t, r[r.length - 1].to);;) if (i.next(), i.done) {
		if (n) return null;
		i = new Ah(e.doc, t, 0, Math.max(0, r[r.length - 1].from - 1)), n = !0;
	} else {
		if (n && r.some((e) => e.from == i.value.from)) continue;
		if (a) {
			let t = e.wordAt(i.value.from);
			if (!t || t.from != i.value.from || t.to != i.value.to) continue;
		}
		return i.value;
	}
}
var Zh = ({ state: e, dispatch: t }) => {
	let { ranges: n } = e.selection;
	if (n.some((e) => e.from === e.to)) return Yh({
		state: e,
		dispatch: t
	});
	let r = e.sliceDoc(n[0].from, n[0].to);
	if (e.selection.ranges.some((t) => e.sliceDoc(t.from, t.to) != r)) return !1;
	let i = Xh(e, r);
	return i ? (t(e.update({
		selection: e.selection.addRange(N.range(i.from, i.to), !1),
		effects: J.scrollIntoView(i.to)
	})), !0) : !1;
}, Qh = /*@__PURE__*/ P.define({ combine(e) {
	return _n(e, {
		top: !1,
		caseSensitive: !1,
		literal: !1,
		regexp: !1,
		wholeWord: !1,
		createPanel: (e) => new Mg(e),
		scrollToMatch: (e) => J.scrollIntoView(e)
	});
} }), $h = class {
	constructor(e) {
		this.search = e.search, this.caseSensitive = !!e.caseSensitive, this.literal = !!e.literal, this.regexp = !!e.regexp, this.replace = e.replace || "", this.valid = !!this.search && (!this.regexp || Lh(this.search)), this.unquoted = this.unquote(this.search), this.wholeWord = !!e.wholeWord, this.test = e.test;
	}
	unquote(e) {
		return this.literal ? e : e.replace(/\\([nrt\\])/g, (e, t) => t == "n" ? "\n" : t == "r" ? "\r" : t == "t" ? "	" : "\\");
	}
	eq(e) {
		return this.search == e.search && this.replace == e.replace && this.caseSensitive == e.caseSensitive && this.regexp == e.regexp && this.wholeWord == e.wholeWord && this.test == e.test;
	}
	create() {
		return this.regexp ? new ug(this) : new ig(this);
	}
	getCursor(e, t = 0, n) {
		let r = e.doc ? e : L.create({ doc: e });
		return n ??= r.doc.length, this.regexp ? og(this, r, t, n) : ng(this, r, t, n);
	}
}, eg = class {
	constructor(e) {
		this.spec = e;
	}
};
function tg(e, t, n) {
	return (r, i, a, o) => n && !n(r, i, a, o) ? !1 : e(r >= o && i <= o + a.length ? a.slice(r - o, i - o) : t.doc.sliceString(r, i), t, r, i);
}
function ng(e, t, n, r) {
	let i;
	return e.wholeWord && (i = rg(t.doc, t.charCategorizer(t.selection.main.head))), e.test && (i = tg(e.test, t, i)), new Ah(t.doc, e.unquoted, n, r, e.caseSensitive ? void 0 : (e) => e.toLowerCase(), i);
}
function rg(e, t) {
	return (n, r, i, a) => ((a > n || a + i.length < r) && (a = Math.max(0, n - 2), i = e.sliceString(a, Math.min(e.length, r + 2))), (t(sg(i, n - a)) != I.Word || t(cg(i, n - a)) != I.Word) && (t(cg(i, r - a)) != I.Word || t(sg(i, r - a)) != I.Word));
}
var ig = class extends eg {
	constructor(e) {
		super(e);
	}
	nextMatch(e, t, n) {
		let r = ng(this.spec, e, n, e.doc.length).nextOverlapping();
		if (r.done) {
			let n = Math.min(e.doc.length, t + this.spec.unquoted.length);
			r = ng(this.spec, e, 0, n).nextOverlapping();
		}
		return r.done || r.value.from == t && r.value.to == n ? null : r.value;
	}
	prevMatchInRange(e, t, n) {
		for (let r = n;;) {
			let n = Math.max(t, r - 1e4 - this.spec.unquoted.length), i = ng(this.spec, e, n, r), a = null;
			for (; !i.nextOverlapping().done;) a = i.value;
			if (a) return a;
			if (n == t) return null;
			r -= 1e4;
		}
	}
	prevMatch(e, t, n) {
		let r = this.prevMatchInRange(e, 0, t);
		return r ||= this.prevMatchInRange(e, Math.max(0, n - this.spec.unquoted.length), e.doc.length), r && (r.from != t || r.to != n) ? r : null;
	}
	getReplacement(e) {
		return this.spec.unquote(this.spec.replace);
	}
	matchAll(e, t) {
		let n = ng(this.spec, e, 0, e.doc.length), r = [];
		for (; !n.next().done;) {
			if (r.length >= t) return null;
			r.push(n.value);
		}
		return r;
	}
	highlight(e, t, n, r) {
		let i = ng(this.spec, e, Math.max(0, t - this.spec.unquoted.length), Math.min(n + this.spec.unquoted.length, e.doc.length));
		for (; !i.next().done;) r(i.value.from, i.value.to);
	}
};
function ag(e, t, n) {
	return (r, i, a) => (!n || n(r, i, a)) && e(a[0], t, r, i);
}
function og(e, t, n, r) {
	let i;
	return e.wholeWord && (i = lg(t.charCategorizer(t.selection.main.head))), e.test && (i = ag(e.test, t, i)), new Nh(t.doc, e.search, {
		ignoreCase: !e.caseSensitive,
		test: i
	}, n, r);
}
function sg(e, t) {
	return e.slice(M(e, t, !1), t);
}
function cg(e, t) {
	return e.slice(t, M(e, t));
}
function lg(e) {
	return (t, n, r) => !r[0].length || (e(sg(r.input, r.index)) != I.Word || e(cg(r.input, r.index)) != I.Word) && (e(cg(r.input, r.index + r[0].length)) != I.Word || e(sg(r.input, r.index + r[0].length)) != I.Word);
}
var ug = class extends eg {
	nextMatch(e, t, n) {
		let r = og(this.spec, e, n, e.doc.length).next();
		return r.done && (r = og(this.spec, e, 0, t).next()), r.done ? null : r.value;
	}
	prevMatchInRange(e, t, n) {
		for (let r = 1;; r++) {
			let i = Math.max(t, n - r * 1e4), a = og(this.spec, e, i, n), o = null;
			for (; !a.next().done;) o = a.value;
			if (o && (i == t || o.from > i + 10)) return o;
			if (i == t) return null;
		}
	}
	prevMatch(e, t, n) {
		return this.prevMatchInRange(e, 0, t) || this.prevMatchInRange(e, n, e.doc.length);
	}
	getReplacement(e) {
		return this.spec.unquote(this.spec.replace).replace(/\$([$&]|\d+)/g, (t, n) => {
			if (n == "&") return e.match[0];
			if (n == "$") return "$";
			for (let t = n.length; t > 0; t--) {
				let r = +n.slice(0, t);
				if (r > 0 && r < e.match.length) return e.match[r] + n.slice(t);
			}
			return t;
		});
	}
	matchAll(e, t) {
		let n = og(this.spec, e, 0, e.doc.length), r = [];
		for (; !n.next().done;) {
			if (r.length >= t) return null;
			r.push(n.value);
		}
		return r;
	}
	highlight(e, t, n, r) {
		let i = og(this.spec, e, Math.max(0, t - 250), Math.min(n + 250, e.doc.length));
		for (; !i.next().done;) r(i.value.from, i.value.to);
	}
}, dg = /*@__PURE__*/ F.define(), fg = /*@__PURE__*/ F.define(), pg = /*@__PURE__*/ It.define({
	create(e) {
		return new mg(Eg(e).create(), null);
	},
	update(e, t) {
		for (let n of t.effects) n.is(dg) ? e = new mg(n.value.create(), e.panel) : n.is(fg) && (e = new mg(e.query, n.value ? Tg : null));
		return e;
	},
	provide: (e) => Pl.from(e, (e) => e.panel)
}), mg = class {
	constructor(e, t) {
		this.query = e, this.panel = t;
	}
}, hg = /*@__PURE__*/ V.mark({ class: "cm-searchMatch" }), gg = /*@__PURE__*/ V.mark({ class: "cm-searchMatch cm-searchMatch-selected" }), _g = /*@__PURE__*/ G.fromClass(class {
	constructor(e) {
		this.view = e, this.decorations = this.highlight(e.state.field(pg));
	}
	update(e) {
		let t = e.state.field(pg);
		(t != e.startState.field(pg) || e.docChanged || e.selectionSet || e.viewportChanged) && (this.decorations = this.highlight(t));
	}
	highlight({ query: e, panel: t }) {
		if (!t || !e.spec.valid) return V.none;
		let { view: n } = this, r = new Tn();
		for (let t = 0, i = n.visibleRanges, a = i.length; t < a; t++) {
			let { from: o, to: s } = i[t];
			for (; t < a - 1 && s > i[t + 1].from - 500;) s = i[++t].to;
			e.highlight(n.state, o, s, (e, t) => {
				let i = n.state.selection.ranges.some((n) => n.from == e && n.to == t);
				r.add(e, t, i ? gg : hg);
			});
		}
		return r.finish();
	}
}, { decorations: (e) => e.decorations });
function vg(e) {
	return (t) => {
		let n = t.state.field(pg, !1);
		return n && n.query.spec.valid ? e(t, n) : kg(t);
	};
}
var yg = /*@__PURE__*/ vg((e, { query: t }) => {
	let { to: n } = e.state.selection.main, r = t.nextMatch(e.state, n, n);
	if (!r) return !1;
	let i = N.single(r.from, r.to), a = e.state.facet(Qh);
	return e.dispatch({
		selection: i,
		effects: [Ig(e, r), a.scrollToMatch(i.main, e)],
		userEvent: "select.search"
	}), Og(e), !0;
}), bg = /*@__PURE__*/ vg((e, { query: t }) => {
	let { state: n } = e, { from: r } = n.selection.main, i = t.prevMatch(n, r, r);
	if (!i) return !1;
	let a = N.single(i.from, i.to), o = e.state.facet(Qh);
	return e.dispatch({
		selection: a,
		effects: [Ig(e, i), o.scrollToMatch(a.main, e)],
		userEvent: "select.search"
	}), Og(e), !0;
}), xg = /*@__PURE__*/ vg((e, { query: t }) => {
	let n = t.matchAll(e.state, 1e3);
	return !n || !n.length ? !1 : (e.dispatch({
		selection: N.create(n.map((e) => N.range(e.from, e.to))),
		userEvent: "select.search.matches"
	}), !0);
}), Sg = ({ state: e, dispatch: t }) => {
	let n = e.selection;
	if (n.ranges.length > 1 || n.main.empty) return !1;
	let { from: r, to: i } = n.main, a = [], o = 0;
	for (let t = new Ah(e.doc, e.sliceDoc(r, i)); !t.next().done;) {
		if (a.length > 1e3) return !1;
		t.value.from == r && (o = a.length), a.push(N.range(t.value.from, t.value.to));
	}
	return t(e.update({
		selection: N.create(a, o),
		userEvent: "select.search.matches"
	})), !0;
}, Cg = /*@__PURE__*/ vg((e, { query: t }) => {
	let { state: n } = e, { from: r, to: i } = n.selection.main;
	if (n.readOnly) return !1;
	let a = t.nextMatch(n, r, r);
	if (!a) return !1;
	let o = a, s = [], c, l, u = [];
	o.precise ? o.from == r && o.to == i && (l = n.toText(t.getReplacement(o)), s.push({
		from: o.from,
		to: o.to,
		insert: l
	}), o = t.nextMatch(n, o.from, o.to), u.push(J.announce.of(n.phrase("replaced match on line $", n.doc.lineAt(r).number) + "."))) : o = t.nextMatch(n, o.from, o.to);
	let d = e.state.changes(s);
	return o && (c = N.single(o.from, o.to).map(d), u.push(Ig(e, o)), u.push(n.facet(Qh).scrollToMatch(c.main, e))), e.dispatch({
		changes: d,
		selection: c,
		effects: u,
		userEvent: "input.replace"
	}), !0;
}), wg = /*@__PURE__*/ vg((e, { query: t }) => {
	if (e.state.readOnly) return !1;
	let n = [];
	for (let r of t.matchAll(e.state, 1e9)) {
		let { from: e, to: i, precise: a } = r;
		a && n.push({
			from: e,
			to: i,
			insert: t.getReplacement(r)
		});
	}
	if (!n.length) return !1;
	let r = e.state.phrase("replaced $ matches", n.length) + ".";
	return e.dispatch({
		changes: n,
		effects: J.announce.of(r),
		userEvent: "input.replace.all"
	}), !0;
});
function Tg(e) {
	return e.state.facet(Qh).createPanel(e);
}
function Eg(e, t) {
	let n = e.selection.main, r = n.empty || n.to > n.from + 100 ? "" : e.sliceDoc(n.from, n.to);
	if (t && !r) return t;
	let i = e.facet(Qh);
	return new $h({
		search: t?.literal ?? i.literal ? r : r.replace(/\n/g, "\\n"),
		caseSensitive: t?.caseSensitive ?? i.caseSensitive,
		literal: t?.literal ?? i.literal,
		regexp: t?.regexp ?? i.regexp,
		wholeWord: t?.wholeWord ?? i.wholeWord
	});
}
function Dg(e) {
	let t = Al(e, Tg);
	return t && t.dom.querySelector("[main-field]");
}
function Og(e) {
	let t = Dg(e);
	t && t == e.root.activeElement && t.select();
}
var kg = (e) => {
	let t = e.state.field(pg, !1);
	if (t && t.panel) {
		let n = Dg(e);
		if (n && n != e.root.activeElement) {
			let r = Eg(e.state, t.query.spec);
			r.valid && e.dispatch({ effects: dg.of(r) }), n.focus(), n.select();
		}
	} else e.dispatch({ effects: [fg.of(!0), t ? dg.of(Eg(e.state, t.query.spec)) : F.appendConfig.of(Rg)] });
	return !0;
}, Ag = (e) => {
	let t = e.state.field(pg, !1);
	if (!t || !t.panel) return !1;
	let n = Al(e, Tg);
	return n && n.dom.contains(e.root.activeElement) && e.focus(), e.dispatch({ effects: fg.of(!1) }), !0;
}, jg = [
	{
		key: "Mod-f",
		run: kg,
		scope: "editor search-panel"
	},
	{
		key: "F3",
		run: yg,
		shift: bg,
		scope: "editor search-panel",
		preventDefault: !0
	},
	{
		key: "Mod-g",
		run: yg,
		shift: bg,
		scope: "editor search-panel",
		preventDefault: !0
	},
	{
		key: "Escape",
		run: Ag,
		scope: "editor search-panel"
	},
	{
		key: "Mod-Shift-l",
		run: Sg
	},
	{
		key: "Mod-Alt-g",
		run: zh
	},
	{
		key: "Mod-d",
		run: Zh,
		preventDefault: !0
	}
], Mg = class {
	constructor(e) {
		this.view = e;
		let t = this.query = e.state.field(pg).query.spec;
		this.commit = this.commit.bind(this), this.searchField = z("input", {
			value: t.search,
			placeholder: Ng(e, "Find"),
			"aria-label": Ng(e, "Find"),
			class: "cm-textfield",
			name: "search",
			form: "",
			"main-field": "true",
			onchange: this.commit,
			onkeyup: this.commit
		}), this.replaceField = z("input", {
			value: t.replace,
			placeholder: Ng(e, "Replace"),
			"aria-label": Ng(e, "Replace"),
			class: "cm-textfield",
			name: "replace",
			form: "",
			onchange: this.commit,
			onkeyup: this.commit
		}), this.caseField = z("input", {
			type: "checkbox",
			name: "case",
			form: "",
			checked: t.caseSensitive,
			onchange: this.commit
		}), this.reField = z("input", {
			type: "checkbox",
			name: "re",
			form: "",
			checked: t.regexp,
			onchange: this.commit
		}), this.wordField = z("input", {
			type: "checkbox",
			name: "word",
			form: "",
			checked: t.wholeWord,
			onchange: this.commit
		});
		function n(e, t, n) {
			return z("button", {
				class: "cm-button",
				name: e,
				onclick: t,
				type: "button"
			}, n);
		}
		this.dom = z("div", {
			onkeydown: (e) => this.keydown(e),
			class: "cm-search"
		}, [
			this.searchField,
			n("next", () => yg(e), [Ng(e, "next")]),
			n("prev", () => bg(e), [Ng(e, "previous")]),
			n("select", () => xg(e), [Ng(e, "all")]),
			z("label", null, [this.caseField, Ng(e, "match case")]),
			z("label", null, [this.reField, Ng(e, "regexp")]),
			z("label", null, [this.wordField, Ng(e, "by word")]),
			...e.state.readOnly ? [] : [
				z("br"),
				this.replaceField,
				n("replace", () => Cg(e), [Ng(e, "replace")]),
				n("replaceAll", () => wg(e), [Ng(e, "replace all")])
			],
			z("button", {
				name: "close",
				onclick: () => Ag(e),
				"aria-label": Ng(e, "close"),
				type: "button"
			}, ["×"])
		]);
	}
	commit() {
		let e = new $h({
			search: this.searchField.value,
			caseSensitive: this.caseField.checked,
			regexp: this.reField.checked,
			wholeWord: this.wordField.checked,
			replace: this.replaceField.value
		});
		e.eq(this.query) || (this.query = e, this.view.dispatch({ effects: dg.of(e) }));
	}
	keydown(e) {
		ac(this.view, e, "search-panel") ? e.preventDefault() : e.keyCode == 13 && e.target == this.searchField ? (e.preventDefault(), (e.shiftKey ? bg : yg)(this.view)) : e.keyCode == 13 && e.target == this.replaceField && (e.preventDefault(), Cg(this.view));
	}
	update(e) {
		for (let t of e.transactions) for (let e of t.effects) e.is(dg) && !e.value.eq(this.query) && this.setQuery(e.value);
	}
	setQuery(e) {
		this.query = e, this.searchField.value = e.search, this.replaceField.value = e.replace, this.caseField.checked = e.caseSensitive, this.reField.checked = e.regexp, this.wordField.checked = e.wholeWord;
	}
	mount() {
		this.searchField.select();
	}
	get pos() {
		return 80;
	}
	get top() {
		return this.view.state.facet(Qh).top;
	}
};
function Ng(e, t) {
	return e.state.phrase(t);
}
var Pg = 30, Fg = /[\s\.,:;?!]/;
function Ig(e, { from: t, to: n }) {
	let r = e.state.doc.lineAt(t), i = e.state.doc.lineAt(n).to, a = Math.max(r.from, t - Pg), o = Math.min(i, n + Pg), s = e.state.sliceDoc(a, o);
	if (a != r.from) {
		for (let e = 0; e < Pg; e++) if (!Fg.test(s[e + 1]) && Fg.test(s[e])) {
			s = s.slice(e);
			break;
		}
	}
	if (o != i) {
		for (let e = s.length - 1; e > s.length - Pg; e--) if (!Fg.test(s[e - 1]) && Fg.test(s[e])) {
			s = s.slice(0, e);
			break;
		}
	}
	return J.announce.of(`${e.state.phrase("current match")}. ${s} ${e.state.phrase("on line")} ${r.number}.`);
}
var Lg = /*@__PURE__*/ J.baseTheme({
	".cm-panel.cm-search": {
		padding: "2px 6px 4px",
		position: "relative",
		"& [name=close]": {
			position: "absolute",
			top: "0",
			right: "4px",
			backgroundColor: "inherit",
			border: "none",
			font: "inherit",
			padding: 0,
			margin: 0
		},
		"& input, & button, & label": { margin: ".2em .6em .2em 0" },
		"& input[type=checkbox]": { marginRight: ".2em" },
		"& label": {
			fontSize: "80%",
			whiteSpace: "pre"
		}
	},
	"&light .cm-searchMatch": { backgroundColor: "#ffff0054" },
	"&dark .cm-searchMatch": { backgroundColor: "#00ffff8a" },
	"&light .cm-searchMatch-selected": { backgroundColor: "#ff6a0054" },
	"&dark .cm-searchMatch-selected": { backgroundColor: "#ff00ff8a" }
}), Rg = [
	pg,
	/*@__PURE__*/ zt.low(_g),
	Lg
], zg = class {
	constructor(e, t, n, r) {
		this.state = e, this.pos = t, this.explicit = n, this.view = r, this.abortListeners = [], this.abortOnDocChange = !1;
	}
	tokenBefore(e) {
		let t = $(this.state).resolveInner(this.pos, -1);
		for (; t && e.indexOf(t.name) < 0;) t = t.parent;
		return t ? {
			from: t.from,
			to: this.pos,
			text: this.state.sliceDoc(t.from, this.pos),
			type: t.type
		} : null;
	}
	matchBefore(e) {
		let t = this.state.doc.lineAt(this.pos), n = Math.max(t.from, this.pos - 250), r = t.text.slice(n - t.from, this.pos - t.from), i = r.search(Gg(e, !1));
		return i < 0 ? null : {
			from: n + i,
			to: this.pos,
			text: r.slice(i)
		};
	}
	get aborted() {
		return this.abortListeners == null;
	}
	addEventListener(e, t, n) {
		e == "abort" && this.abortListeners && (this.abortListeners.push(t), n && n.onDocChange && (this.abortOnDocChange = !0));
	}
};
function Bg(e) {
	let t = Object.keys(e).join(""), n = /\w/.test(t);
	return n && (t = t.replace(/\w/g, "")), `[${n ? "\\w" : ""}${t.replace(/[^\w\s]/g, "\\$&")}]`;
}
function Vg(e) {
	let t = Object.create(null), n = Object.create(null);
	for (let { label: r } of e) {
		t[r[0]] = !0;
		for (let e = 1; e < r.length; e++) n[r[e]] = !0;
	}
	let r = Bg(t) + Bg(n) + "*$";
	return [RegExp("^" + r), new RegExp(r)];
}
function Hg(e) {
	let t = e.map((e) => typeof e == "string" ? { label: e } : e), [n, r] = t.every((e) => /^\w+$/.test(e.label)) ? [/\w*$/, /\w+$/] : Vg(t);
	return (e) => {
		let i = e.matchBefore(r);
		return i || e.explicit ? {
			from: i ? i.from : e.pos,
			options: t,
			validFor: n
		} : null;
	};
}
var Ug = class {
	constructor(e, t, n, r) {
		this.completion = e, this.source = t, this.match = n, this.score = r;
	}
};
function Wg(e) {
	return e.selection.main.from;
}
function Gg(e, t) {
	let { source: n } = e, r = t && n[0] != "^", i = n[n.length - 1] != "$";
	return !r && !i ? e : RegExp(`${r ? "^" : ""}(?:${n})${i ? "$" : ""}`, e.flags ?? (e.ignoreCase ? "i" : ""));
}
var Kg = /*@__PURE__*/ en.define();
function qg(e, t, n, r) {
	let { main: i } = e.selection, a = n - i.from, o = r - i.from;
	return {
		...e.changeByRange((s) => {
			if (s != i && n != r && e.sliceDoc(s.from + a, s.from + o) != e.sliceDoc(n, r)) return { range: s };
			let c = e.toText(t);
			return {
				changes: {
					from: s.from + a,
					to: r == i.from ? s.to : s.from + o,
					insert: c
				},
				range: N.cursor(s.from + a + c.length)
			};
		}),
		scrollIntoView: !0,
		userEvent: "input.complete"
	};
}
var Jg = /*@__PURE__*/ new WeakMap();
function Yg(e) {
	if (!Array.isArray(e)) return e;
	let t = Jg.get(e);
	return t || Jg.set(e, t = Hg(e)), t;
}
var Xg = /*@__PURE__*/ F.define(), Zg = /*@__PURE__*/ F.define(), Qg = class {
	constructor(e) {
		this.pattern = e, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [], this.score = 0, this.matched = [];
		for (let t = 0; t < e.length;) {
			let n = mt(e, t), r = gt(n);
			this.chars.push(n);
			let i = e.slice(t, t + r), a = i.toUpperCase();
			this.folded.push(mt(a == i ? i.toLowerCase() : a, 0)), t += r;
		}
		this.astral = e.length != this.chars.length;
	}
	ret(e, t) {
		return this.score = e, this.matched = t, this;
	}
	match(e) {
		if (this.pattern.length == 0) return this.ret(-100, []);
		if (e.length < this.pattern.length) return null;
		let { chars: t, folded: n, any: r, precise: i, byWord: a } = this;
		if (t.length == 1) {
			let r = mt(e, 0), i = gt(r), a = i == e.length ? 0 : -100;
			if (r != t[0]) {
				if (r == n[0]) a += -200;
				else return null;
			}
			return this.ret(a, [0, i]);
		}
		let o = e.indexOf(this.pattern);
		if (o == 0) return this.ret(e.length == this.pattern.length ? 0 : -100, [0, this.pattern.length]);
		let s = t.length, c = 0;
		if (o < 0) {
			for (let i = 0, a = Math.min(e.length, 200); i < a && c < s;) {
				let a = mt(e, i);
				(a == t[c] || a == n[c]) && (r[c++] = i), i += gt(a);
			}
			if (c < s) return null;
		}
		let l = 0, u = 0, d = !1, f = 0, p = -1, m = -1, h = /[a-z]/.test(e), g = !0;
		for (let r = 0, c = Math.min(e.length, 200), _ = 0; r < c && u < s;) {
			let c = mt(e, r);
			o < 0 && (l < s && c == t[l] && (i[l++] = r), f < s && (c == t[f] || c == n[f] ? (f == 0 && (p = r), m = r + 1, f++) : f = 0));
			let v, y = c < 255 ? c >= 48 && c <= 57 || c >= 97 && c <= 122 ? 2 : +(c >= 65 && c <= 90) : (v = ht(c)) == v.toLowerCase() ? v == v.toUpperCase() ? 0 : 2 : 1;
			(!r || y == 1 && h || _ == 0 && y != 0) && (t[u] == c || n[u] == c && (d = !0) ? a[u++] = r : a.length && (g = !1)), _ = y, r += gt(c);
		}
		return u == s && a[0] == 0 && g ? this.result(-100 + (d ? -200 : 0), a, e) : f == s && p == 0 ? this.ret(-200 - e.length + (m == e.length ? 0 : -100), [0, m]) : o > -1 ? this.ret(-700 - e.length, [o, o + this.pattern.length]) : f == s ? this.ret(-900 - e.length, [p, m]) : u == s ? this.result(-100 + (d ? -200 : 0) + -700 + (g ? 0 : -1100), a, e) : t.length == 2 ? null : this.result((r[0] ? -700 : 0) + -200 + -1100, r, e);
	}
	result(e, t, n) {
		let r = [], i = 0;
		for (let e of t) {
			let t = e + (this.astral ? gt(mt(n, e)) : 1);
			i && r[i - 1] == e ? r[i - 1] = t : (r[i++] = e, r[i++] = t);
		}
		return this.ret(e - n.length, r);
	}
}, $g = class {
	constructor(e) {
		this.pattern = e, this.matched = [], this.score = 0, this.folded = e.toLowerCase();
	}
	match(e) {
		if (e.length < this.pattern.length) return null;
		let t = e.slice(0, this.pattern.length), n = t == this.pattern ? 0 : t.toLowerCase() == this.folded ? -200 : null;
		return n == null ? null : (this.matched = [0, t.length], this.score = n + (e.length == this.pattern.length ? 0 : -100), this);
	}
}, e_ = /*@__PURE__*/ P.define({ combine(e) {
	return _n(e, {
		activateOnTyping: !0,
		activateOnCompletion: () => !1,
		activateOnTypingDelay: 100,
		selectOnOpen: !0,
		override: null,
		closeOnBlur: !0,
		maxRenderedOptions: 100,
		defaultKeymap: !0,
		tooltipClass: () => "",
		optionClass: () => "",
		aboveCursor: !1,
		icons: !0,
		addToOptions: [],
		positionInfo: n_,
		filterStrict: !1,
		compareCompletions: (e, t) => (e.sortText || e.label).localeCompare(t.sortText || t.label),
		interactionDelay: 75,
		updateSyncTime: 100
	}, {
		defaultKeymap: (e, t) => e && t,
		closeOnBlur: (e, t) => e && t,
		icons: (e, t) => e && t,
		tooltipClass: (e, t) => (n) => t_(e(n), t(n)),
		optionClass: (e, t) => (n) => t_(e(n), t(n)),
		addToOptions: (e, t) => e.concat(t),
		filterStrict: (e, t) => e || t
	});
} });
function t_(e, t) {
	return e ? t ? e + " " + t : e : t;
}
function n_(e, t, n, r, i, a) {
	let o = e.textDirection == U.RTL, s = o, c = !1, l = "top", u, d, f = t.left - i.left, p = i.right - t.right, m = r.right - r.left, h = r.bottom - r.top;
	if (s && f < Math.min(m, p) ? s = !1 : !s && p < Math.min(m, f) && (s = !0), m <= (s ? f : p)) u = Math.max(i.top, Math.min(n.top, i.bottom - h)) - t.top, d = Math.min(400, s ? f : p);
	else {
		c = !0, d = Math.min(400, (o ? t.right : i.right - t.left) - 30);
		let e = i.bottom - t.bottom;
		e >= h || e > t.top ? u = n.bottom - t.top : (l = "bottom", u = t.bottom - n.top);
	}
	let g = (t.bottom - t.top) / a.offsetHeight, _ = (t.right - t.left) / a.offsetWidth;
	return {
		style: `${l}: ${u / g}px; max-width: ${d / _}px`,
		class: "cm-completionInfo-" + (c ? o ? "left-narrow" : "right-narrow" : s ? "left" : "right")
	};
}
var r_ = /*@__PURE__*/ F.define();
function i_(e) {
	let t = e.addToOptions.slice();
	return e.icons && t.push({
		render(e) {
			let t = document.createElement("div");
			return t.classList.add("cm-completionIcon"), e.type && t.classList.add(...e.type.split(/\s+/g).map((e) => "cm-completionIcon-" + e)), t.setAttribute("aria-hidden", "true"), t;
		},
		position: 20
	}), t.push({
		render(e, t, n, r) {
			let i = document.createElement("span");
			i.className = "cm-completionLabel";
			let a = e.displayLabel || e.label, o = 0;
			for (let e = 0; e < r.length;) {
				let t = r[e++], n = r[e++];
				t > o && i.appendChild(document.createTextNode(a.slice(o, t)));
				let s = i.appendChild(document.createElement("span"));
				s.appendChild(document.createTextNode(a.slice(t, n))), s.className = "cm-completionMatchedText", o = n;
			}
			return o < a.length && i.appendChild(document.createTextNode(a.slice(o))), i;
		},
		position: 50
	}, {
		render(e) {
			if (!e.detail) return null;
			let t = document.createElement("span");
			return t.className = "cm-completionDetail", t.textContent = e.detail, t;
		},
		position: 80
	}), t.sort((e, t) => e.position - t.position).map((e) => e.render);
}
function a_(e, t, n) {
	if (e <= n) return {
		from: 0,
		to: e
	};
	if (t < 0 && (t = 0), t <= e >> 1) {
		let e = Math.floor(t / n);
		return {
			from: e * n,
			to: (e + 1) * n
		};
	}
	let r = Math.ceil((e - t) / n);
	return {
		from: e - r * n,
		to: e - (r - 1) * n
	};
}
var o_ = class {
	constructor(e, t, n) {
		this.view = e, this.stateField = t, this.applyCompletion = n, this.info = null, this.infoDestroy = null, this.placeInfoReq = {
			read: () => this.measureInfo(),
			write: (e) => this.placeInfo(e),
			key: this
		}, this.space = null, this.currentClass = "";
		let r = e.state.field(t), { options: i, selected: a } = r.open, o = e.state.facet(e_);
		this.optionContent = i_(o), this.optionClass = o.optionClass, this.tooltipClass = o.tooltipClass, this.range = a_(i.length, a, o.maxRenderedOptions), this.dom = document.createElement("div"), this.dom.className = "cm-tooltip-autocomplete", this.updateTooltipClass(e.state), this.dom.addEventListener("mousedown", (n) => {
			let { options: r } = e.state.field(t).open;
			for (let t = n.target, i; t && t != this.dom; t = t.parentNode) if (t.nodeName == "LI" && (i = /-(\d+)$/.exec(t.id)) && +i[1] < r.length) {
				this.applyCompletion(e, r[+i[1]]), n.preventDefault();
				return;
			}
			if (n.target == this.list) {
				let t = this.list.classList.contains("cm-completionListIncompleteTop") && n.clientY < this.list.firstChild.getBoundingClientRect().top ? this.range.from - 1 : this.list.classList.contains("cm-completionListIncompleteBottom") && n.clientY > this.list.lastChild.getBoundingClientRect().bottom ? this.range.to : null;
				t != null && (e.dispatch({ effects: r_.of(t) }), n.preventDefault());
			}
		}), this.dom.addEventListener("focusout", (t) => {
			let n = e.state.field(this.stateField, !1);
			n && n.tooltip && e.state.facet(e_).closeOnBlur && t.relatedTarget != e.contentDOM && e.dispatch({ effects: Zg.of(null) });
		}), this.showOptions(i, r.id);
	}
	mount() {
		this.updateSel();
	}
	showOptions(e, t) {
		this.list && this.list.remove(), this.list = this.dom.appendChild(this.createListBox(e, t, this.range)), this.list.addEventListener("scroll", () => {
			this.info && this.view.requestMeasure(this.placeInfoReq);
		});
	}
	update(e) {
		let t = e.state.field(this.stateField), n = e.startState.field(this.stateField);
		if (this.updateTooltipClass(e.state), t != n) {
			let { options: r, selected: i, disabled: a } = t.open;
			n.open && n.open.options == r || (this.range = a_(r.length, i, e.state.facet(e_).maxRenderedOptions), this.showOptions(r, t.id)), this.updateSel(), a != n.open?.disabled && this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!a);
		}
	}
	updateTooltipClass(e) {
		let t = this.tooltipClass(e);
		if (t != this.currentClass) {
			for (let e of this.currentClass.split(" ")) e && this.dom.classList.remove(e);
			for (let e of t.split(" ")) e && this.dom.classList.add(e);
			this.currentClass = t;
		}
	}
	positioned(e) {
		this.space = e, this.info && this.view.requestMeasure(this.placeInfoReq);
	}
	updateSel() {
		let e = this.view.state.field(this.stateField), t = e.open;
		(t.selected > -1 && t.selected < this.range.from || t.selected >= this.range.to) && (this.range = a_(t.options.length, t.selected, this.view.state.facet(e_).maxRenderedOptions), this.showOptions(t.options, e.id));
		let n = this.updateSelectedOption(t.selected);
		if (n) {
			this.destroyInfo();
			let { completion: r } = t.options[t.selected], { info: i } = r;
			if (!i) return;
			let a = typeof i == "string" ? document.createTextNode(i) : i(r);
			if (!a) return;
			"then" in a ? a.then((t) => {
				t && this.view.state.field(this.stateField, !1) == e && this.addInfoPane(t, r);
			}).catch((e) => Ii(this.view.state, e, "completion info")) : (this.addInfoPane(a, r), n.setAttribute("aria-describedby", this.info.id));
		}
	}
	addInfoPane(e, t) {
		this.destroyInfo();
		let n = this.info = document.createElement("div");
		if (n.className = "cm-tooltip cm-completionInfo", n.id = "cm-completionInfo-" + Math.floor(Math.random() * 65535).toString(16), e.nodeType != null) n.appendChild(e), this.infoDestroy = null;
		else {
			let { dom: t, destroy: r } = e;
			n.appendChild(t), this.infoDestroy = r || null;
		}
		this.dom.appendChild(n), this.view.requestMeasure(this.placeInfoReq);
	}
	updateSelectedOption(e) {
		let t = null;
		for (let n = this.list.firstChild, r = this.range.from; n; n = n.nextSibling, r++) n.nodeName != "LI" || !n.id ? r-- : r == e ? n.hasAttribute("aria-selected") || (n.setAttribute("aria-selected", "true"), t = n) : n.hasAttribute("aria-selected") && (n.removeAttribute("aria-selected"), n.removeAttribute("aria-describedby"));
		return t && c_(this.list, t), t;
	}
	measureInfo() {
		let e = this.dom.querySelector("[aria-selected]");
		if (!e || !this.info) return null;
		let t = this.dom.getBoundingClientRect(), n = this.info.getBoundingClientRect(), r = e.getBoundingClientRect(), i = this.space;
		if (!i) {
			let e = this.dom.ownerDocument.documentElement;
			i = {
				left: 0,
				top: 0,
				right: e.clientWidth,
				bottom: e.clientHeight
			};
		}
		return r.top > Math.min(i.bottom, t.bottom) - 10 || r.bottom < Math.max(i.top, t.top) + 10 ? null : this.view.state.facet(e_).positionInfo(this.view, t, r, n, i, this.dom);
	}
	placeInfo(e) {
		this.info && (e ? (e.style && (this.info.style.cssText = e.style), this.info.className = "cm-tooltip cm-completionInfo " + (e.class || "")) : this.info.style.cssText = "top: -1e6px");
	}
	createListBox(e, t, n) {
		let r = document.createElement("ul");
		r.id = t, r.setAttribute("role", "listbox"), r.setAttribute("aria-expanded", "true"), r.setAttribute("aria-label", this.view.state.phrase("Completions")), r.addEventListener("mousedown", (e) => {
			e.target == r && e.preventDefault();
		});
		let i = null;
		for (let a = n.from; a < n.to; a++) {
			let { completion: o, match: s } = e[a], { section: c } = o;
			if (c) {
				let e = typeof c == "string" ? c : c.name;
				if (e != i && (a > n.from || n.from == 0)) {
					if (i = e, typeof c != "string" && c.header) r.appendChild(c.header(c));
					else {
						let t = r.appendChild(document.createElement("completion-section"));
						t.textContent = e;
					}
				}
			}
			let l = r.appendChild(document.createElement("li"));
			l.id = t + "-" + a, l.setAttribute("role", "option");
			let u = this.optionClass(o);
			u && (l.className = u);
			for (let e of this.optionContent) {
				let t = e(o, this.view.state, this.view, s);
				t && l.appendChild(t);
			}
		}
		return n.from && r.classList.add("cm-completionListIncompleteTop"), n.to < e.length && r.classList.add("cm-completionListIncompleteBottom"), r;
	}
	destroyInfo() {
		this.info &&= (this.infoDestroy && this.infoDestroy(), this.info.remove(), null);
	}
	destroy() {
		this.destroyInfo();
	}
};
function s_(e, t) {
	return (n) => new o_(n, e, t);
}
function c_(e, t) {
	let n = e.getBoundingClientRect(), r = t.getBoundingClientRect(), i = n.height / e.offsetHeight;
	r.top < n.top ? e.scrollTop -= (n.top - r.top) / i : r.bottom > n.bottom && (e.scrollTop += (r.bottom - n.bottom) / i);
}
function l_(e) {
	return (e.boost || 0) * 100 + (e.apply ? 10 : 0) + (e.info ? 5 : 0) + +!!e.type;
}
function u_(e, t) {
	let n = [], r = null, i = null, a = (e) => {
		n.push(e);
		let { section: t } = e.completion;
		if (t) {
			r ||= [];
			let e = typeof t == "string" ? t : t.name;
			r.some((t) => t.name == e) || r.push(typeof t == "string" ? { name: e } : t);
		}
	}, o = t.facet(e_);
	for (let r of e) if (r.hasResult()) {
		let e = r.result.getMatch;
		if (r.result.filter === !1) for (let t of r.result.options) a(new Ug(t, r.source, e ? e(t) : [], 1e9 - n.length));
		else {
			let n = t.sliceDoc(r.from, r.to), s, c = o.filterStrict ? new $g(n) : new Qg(n);
			for (let t of r.result.options) if (s = c.match(t.label)) {
				let n = t.displayLabel ? e ? e(t, s.matched) : [] : s.matched, o = s.score + (t.boost || 0);
				if (a(new Ug(t, r.source, n, o)), typeof t.section == "object" && t.section.rank === "dynamic") {
					let { name: e } = t.section;
					i ||= Object.create(null), i[e] = Math.max(o, i[e] || -1e9);
				}
			}
		}
	}
	if (r) {
		let e = Object.create(null), t = 0, a = (e, t) => (e.rank === "dynamic" && t.rank === "dynamic" ? i[t.name] - i[e.name] : 0) || (typeof e.rank == "number" ? e.rank : 1e9) - (typeof t.rank == "number" ? t.rank : 1e9) || (e.name < t.name ? -1 : 1);
		for (let n of r.sort(a)) t -= 1e5, e[n.name] = t;
		for (let t of n) {
			let { section: n } = t.completion;
			n && (t.score += e[typeof n == "string" ? n : n.name]);
		}
	}
	let s = [], c = null, l = o.compareCompletions;
	for (let e of n.sort((e, t) => t.score - e.score || l(e.completion, t.completion))) {
		let t = e.completion;
		!c || c.label != t.label || c.detail != t.detail || c.type != null && t.type != null && c.type != t.type || c.apply != t.apply || c.boost != t.boost ? s.push(e) : l_(e.completion) > l_(c) && (s[s.length - 1] = e), c = e.completion;
	}
	return s;
}
var d_ = class e {
	constructor(e, t, n, r, i, a) {
		this.options = e, this.attrs = t, this.tooltip = n, this.timestamp = r, this.selected = i, this.disabled = a;
	}
	setSelected(t, n) {
		return t == this.selected || t >= this.options.length ? this : new e(this.options, g_(n, t), this.tooltip, this.timestamp, t, this.disabled);
	}
	static build(t, n, r, i, a, o) {
		if (i && !o && t.some((e) => e.isPending)) return i.setDisabled();
		let s = u_(t, n);
		if (!s.length) return i && t.some((e) => e.isPending) ? i.setDisabled() : null;
		let c = n.facet(e_).selectOnOpen ? 0 : -1;
		if (i && i.selected != c && i.selected != -1) {
			let e = i.options[i.selected].completion;
			for (let t = 0; t < s.length; t++) if (s[t].completion == e) {
				c = t;
				break;
			}
		}
		return new e(s, g_(r, c), {
			pos: t.reduce((e, t) => t.hasResult() ? Math.min(e, t.from) : e, 1e8),
			create: T_,
			above: a.aboveCursor
		}, i ? i.timestamp : Date.now(), c, !1);
	}
	map(t) {
		return new e(this.options, this.attrs, {
			...this.tooltip,
			pos: t.mapPos(this.tooltip.pos)
		}, this.timestamp, this.selected, this.disabled);
	}
	setDisabled() {
		return new e(this.options, this.attrs, this.tooltip, this.timestamp, this.selected, !0);
	}
}, f_ = class e {
	constructor(e, t, n) {
		this.active = e, this.id = t, this.open = n;
	}
	static start() {
		return new e(__, "cm-ac-" + Math.floor(Math.random() * 2e6).toString(36), null);
	}
	update(t) {
		let { state: n } = t, r = n.facet(e_), i = (r.override || n.languageDataAt("autocomplete", Wg(n)).map(Yg)).map((e) => (this.active.find((t) => t.source == e) || new y_(e, +!!this.active.some((e) => e.state != 0))).update(t, r));
		i.length == this.active.length && i.every((e, t) => e == this.active[t]) && (i = this.active);
		let a = this.open, o = t.effects.some((e) => e.is(S_));
		a && t.docChanged && (a = a.map(t.changes)), t.selection || i.some((e) => e.hasResult() && t.changes.touchesRange(e.from, e.to)) || !p_(i, this.active) || o ? a = d_.build(i, n, this.id, a, r, o) : a && a.disabled && !i.some((e) => e.isPending) && (a = null), !a && i.every((e) => !e.isPending) && i.some((e) => e.hasResult()) && (i = i.map((e) => e.hasResult() ? new y_(e.source, 0) : e));
		for (let e of t.effects) e.is(r_) && (a &&= a.setSelected(e.value, this.id));
		return i == this.active && a == this.open ? this : new e(i, this.id, a);
	}
	get tooltip() {
		return this.open ? this.open.tooltip : null;
	}
	get attrs() {
		return this.open ? this.open.attrs : this.active.length ? m_ : h_;
	}
};
function p_(e, t) {
	if (e == t) return !0;
	for (let n = 0, r = 0;;) {
		for (; n < e.length && !e[n].hasResult();) n++;
		for (; r < t.length && !t[r].hasResult();) r++;
		let i = n == e.length, a = r == t.length;
		if (i || a) return i == a;
		if (e[n++].result != t[r++].result) return !1;
	}
}
var m_ = { "aria-autocomplete": "list" }, h_ = {};
function g_(e, t) {
	let n = {
		"aria-autocomplete": "list",
		"aria-haspopup": "listbox",
		"aria-controls": e
	};
	return t > -1 && (n["aria-activedescendant"] = e + "-" + t), n;
}
var __ = [];
function v_(e, t) {
	if (e.isUserEvent("input.complete")) {
		let n = e.annotation(Kg);
		if (n && t.activateOnCompletion(n)) return 12;
	}
	let n = e.isUserEvent("input.type");
	return n && t.activateOnTyping ? 5 : n ? 1 : e.isUserEvent("delete.backward") ? 2 : e.selection ? 8 : e.docChanged ? 16 : 0;
}
var y_ = class e {
	constructor(e, t, n = !1) {
		this.source = e, this.state = t, this.explicit = n;
	}
	hasResult() {
		return !1;
	}
	get isPending() {
		return this.state == 1;
	}
	update(t, n) {
		let r = v_(t, n), i = this;
		(r & 8 || r & 16 && this.touches(t)) && (i = new e(i.source, 0)), r & 4 && i.state == 0 && (i = new e(this.source, 1)), i = i.updateFor(t, r);
		for (let n of t.effects) if (n.is(Xg)) i = new e(i.source, 1, n.value);
		else if (n.is(Zg)) i = new e(i.source, 0);
		else if (n.is(S_)) for (let e of n.value) e.source == i.source && (i = e);
		return i;
	}
	updateFor(e, t) {
		return this.map(e.changes);
	}
	map(e) {
		return this;
	}
	touches(e) {
		return e.changes.touchesRange(Wg(e.state));
	}
}, b_ = class e extends y_ {
	constructor(e, t, n, r, i, a) {
		super(e, 3, t), this.limit = n, this.result = r, this.from = i, this.to = a;
	}
	hasResult() {
		return !0;
	}
	updateFor(t, n) {
		if (!(n & 3)) return this.map(t.changes);
		let r = this.result;
		r.map && !t.changes.empty && (r = r.map(r, t.changes));
		let i = t.changes.mapPos(this.from), a = t.changes.mapPos(this.to, 1), o = Wg(t.state);
		if (o > a || !r || n & 2 && (Wg(t.startState) == this.from || o < this.limit)) return new y_(this.source, n & 4 ? 1 : 0);
		let s = t.changes.mapPos(this.limit);
		return x_(r.validFor, t.state, i, a) ? new e(this.source, this.explicit, s, r, i, a) : r.update && (r = r.update(r, i, a, new zg(t.state, o, !1))) ? new e(this.source, this.explicit, s, r, r.from, r.to ?? Wg(t.state)) : new y_(this.source, 1, this.explicit);
	}
	map(t) {
		if (t.empty) return this;
		let n = this.result.map ? this.result.map(this.result, t) : this.result;
		return n ? new e(this.source, this.explicit, t.mapPos(this.limit), n, t.mapPos(this.from), t.mapPos(this.to, 1)) : new y_(this.source, 0);
	}
	touches(e) {
		return e.changes.touchesRange(this.from, this.to);
	}
};
function x_(e, t, n, r) {
	if (!e) return !1;
	let i = t.sliceDoc(n, r);
	return typeof e == "function" ? e(i, n, r, t) : Gg(e, !0).test(i);
}
var S_ = /*@__PURE__*/ F.define({ map(e, t) {
	return e.map((e) => e.map(t));
} }), C_ = /*@__PURE__*/ It.define({
	create() {
		return f_.start();
	},
	update(e, t) {
		return e.update(t);
	},
	provide: (e) => [gl.from(e, (e) => e.tooltip), J.contentAttributes.from(e, (e) => e.attrs)]
});
function w_(e, t) {
	let n = t.completion.apply || t.completion.label, r = e.state.field(C_).active.find((e) => e.source == t.source);
	return r instanceof b_ && (typeof n == "string" ? e.dispatch({
		...qg(e.state, n, r.from, r.to),
		annotations: Kg.of(t.completion)
	}) : n(e, t.completion, r.from, r.to), !0);
}
var T_ = /*@__PURE__*/ s_(C_, w_);
function E_(e, t = "option") {
	return (n) => {
		let r = n.state.field(C_, !1);
		if (!r || !r.open || r.open.disabled || Date.now() - r.open.timestamp < n.state.facet(e_).interactionDelay) return !1;
		let i = 1, a;
		t == "page" && (a = Dl(n, r.open.tooltip)) && (i = Math.max(2, Math.floor(a.dom.offsetHeight / a.dom.querySelector("li").offsetHeight) - 1));
		let { length: o } = r.open.options, s = r.open.selected > -1 ? r.open.selected + i * (e ? 1 : -1) : e ? 0 : o - 1;
		return s < 0 ? s = t == "page" ? 0 : o - 1 : s >= o && (s = t == "page" ? o - 1 : 0), n.dispatch({ effects: r_.of(s) }), !0;
	};
}
var D_ = (e) => {
	let t = e.state.field(C_, !1);
	return e.state.readOnly || !t || !t.open || t.open.selected < 0 || t.open.disabled || Date.now() - t.open.timestamp < e.state.facet(e_).interactionDelay ? !1 : w_(e, t.open.options[t.open.selected]);
}, O_ = (e) => e.state.field(C_, !1) ? (e.dispatch({ effects: Xg.of(!0) }), !0) : !1, k_ = (e) => {
	let t = e.state.field(C_, !1);
	return !t || !t.active.some((e) => e.state != 0) ? !1 : (e.dispatch({ effects: Zg.of(null) }), !0);
}, A_ = class {
	constructor(e, t) {
		this.active = e, this.context = t, this.time = Date.now(), this.updates = [], this.done = void 0;
	}
}, j_ = 50, M_ = 1e3, N_ = /*@__PURE__*/ G.fromClass(class {
	constructor(e) {
		this.view = e, this.debounceUpdate = -1, this.running = [], this.debounceAccept = -1, this.pendingStart = !1, this.composing = 0;
		for (let t of e.state.field(C_).active) t.isPending && this.startQuery(t);
	}
	update(e) {
		let t = e.state.field(C_), n = e.state.facet(e_);
		if (!e.selectionSet && !e.docChanged && e.startState.field(C_) == t) return;
		let r = e.transactions.some((e) => {
			let t = v_(e, n);
			return t & 8 || (e.selection || e.docChanged) && !(t & 3);
		});
		for (let t = 0; t < this.running.length; t++) {
			let n = this.running[t];
			if (r || n.context.abortOnDocChange && e.docChanged || n.updates.length + e.transactions.length > j_ && Date.now() - n.time > M_) {
				for (let e of n.context.abortListeners) try {
					e();
				} catch (e) {
					Ii(this.view.state, e);
				}
				n.context.abortListeners = null, this.running.splice(t--, 1);
			} else n.updates.push(...e.transactions);
		}
		this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate), e.transactions.some((e) => e.effects.some((e) => e.is(Xg))) && (this.pendingStart = !0);
		let i = this.pendingStart ? 50 : n.activateOnTypingDelay;
		if (this.debounceUpdate = t.active.some((e) => e.isPending && !this.running.some((t) => t.active.source == e.source)) ? setTimeout(() => this.startUpdate(), i) : -1, this.composing != 0) for (let t of e.transactions) t.isUserEvent("input.type") ? this.composing = 2 : this.composing == 2 && t.selection && (this.composing = 3);
	}
	startUpdate() {
		this.debounceUpdate = -1, this.pendingStart = !1;
		let { state: e } = this.view, t = e.field(C_);
		for (let e of t.active) e.isPending && !this.running.some((t) => t.active.source == e.source) && this.startQuery(e);
		this.running.length && t.open && t.open.disabled && (this.debounceAccept = setTimeout(() => this.accept(), this.view.state.facet(e_).updateSyncTime));
	}
	startQuery(e) {
		let { state: t } = this.view, n = new zg(t, Wg(t), e.explicit, this.view), r = new A_(e, n);
		this.running.push(r), Promise.resolve(e.source(n)).then((e) => {
			r.context.aborted || (r.done = e || null, this.scheduleAccept());
		}, (e) => {
			this.view.dispatch({ effects: Zg.of(null) }), Ii(this.view.state, e);
		});
	}
	scheduleAccept() {
		this.running.every((e) => e.done !== void 0) ? this.accept() : this.debounceAccept < 0 && (this.debounceAccept = setTimeout(() => this.accept(), this.view.state.facet(e_).updateSyncTime));
	}
	accept() {
		this.debounceAccept > -1 && clearTimeout(this.debounceAccept), this.debounceAccept = -1;
		let e = [], t = this.view.state.facet(e_), n = this.view.state.field(C_);
		for (let r = 0; r < this.running.length; r++) {
			let i = this.running[r];
			if (i.done === void 0) continue;
			if (this.running.splice(r--, 1), i.done) {
				let n = Wg(i.updates.length ? i.updates[0].startState : this.view.state), r = Math.min(n, i.done.from + +!i.active.explicit), a = new b_(i.active.source, i.active.explicit, r, i.done, i.done.from, i.done.to ?? n);
				for (let e of i.updates) a = a.update(e, t);
				if (a.hasResult()) {
					e.push(a);
					continue;
				}
			}
			let a = n.active.find((e) => e.source == i.active.source);
			if (a && a.isPending) {
				if (i.done == null) {
					let n = new y_(i.active.source, 0);
					for (let e of i.updates) n = n.update(e, t);
					n.isPending || e.push(n);
				} else this.startQuery(a);
			}
		}
		(e.length || n.open && n.open.disabled) && this.view.dispatch({ effects: S_.of(e) });
	}
}, { eventHandlers: {
	blur(e) {
		let t = this.view.state.field(C_, !1);
		if (t && t.tooltip && this.view.state.facet(e_).closeOnBlur) {
			let n = t.open && Dl(this.view, t.open.tooltip);
			n && n.dom.contains(e.relatedTarget) || setTimeout(() => this.view.dispatch({ effects: Zg.of(null) }), 10);
		}
	},
	compositionstart() {
		this.composing = 1;
	},
	compositionend() {
		this.composing == 3 && setTimeout(() => this.view.dispatch({ effects: Xg.of(!1) }), 20), this.composing = 0;
	}
} }), P_ = typeof navigator == "object" && /*@__PURE__*/ /Win/.test(navigator.platform), F_ = /*@__PURE__*/ zt.highest(/*@__PURE__*/ J.domEventHandlers({ keydown(e, t) {
	let n = t.state.field(C_, !1);
	if (!n || !n.open || n.open.disabled || n.open.selected < 0 || !e.key || e.key.length > 1 || e.ctrlKey && !(P_ && e.altKey) || e.metaKey) return !1;
	let r = n.open.options[n.open.selected], i = n.active.find((e) => e.source == r.source), a = r.completion.commitCharacters || i.result.commitCharacters;
	return a && a.indexOf(e.key) > -1 && w_(t, r), !1;
} })), I_ = /*@__PURE__*/ J.baseTheme({
	".cm-tooltip.cm-tooltip-autocomplete": { "& > ul": {
		fontFamily: "monospace",
		whiteSpace: "nowrap",
		overflow: "hidden auto",
		maxWidth_fallback: "700px",
		maxWidth: "min(700px, 95vw)",
		minWidth: "250px",
		maxHeight: "10em",
		height: "100%",
		listStyle: "none",
		margin: 0,
		padding: 0,
		"& > li, & > completion-section": {
			padding: "1px 3px",
			lineHeight: 1.2
		},
		"& > li": {
			overflowX: "hidden",
			textOverflow: "ellipsis",
			cursor: "pointer"
		},
		"& > completion-section": {
			display: "list-item",
			borderBottom: "1px solid silver",
			paddingLeft: "0.5em",
			opacity: .7
		}
	} },
	"&light .cm-tooltip-autocomplete ul li[aria-selected]": {
		background: "#17c",
		color: "white"
	},
	"&light .cm-tooltip-autocomplete-disabled ul li[aria-selected]": { background: "#777" },
	"&dark .cm-tooltip-autocomplete ul li[aria-selected]": {
		background: "#347",
		color: "white"
	},
	"&dark .cm-tooltip-autocomplete-disabled ul li[aria-selected]": { background: "#444" },
	".cm-completionListIncompleteTop:before, .cm-completionListIncompleteBottom:after": {
		content: "\"···\"",
		opacity: .5,
		display: "block",
		textAlign: "center",
		cursor: "pointer"
	},
	".cm-tooltip.cm-completionInfo": {
		position: "absolute",
		padding: "3px 9px",
		width: "max-content",
		maxWidth: "400px",
		boxSizing: "border-box",
		whiteSpace: "pre-line"
	},
	".cm-completionInfo.cm-completionInfo-left": { right: "100%" },
	".cm-completionInfo.cm-completionInfo-right": { left: "100%" },
	".cm-completionInfo.cm-completionInfo-left-narrow": { right: "30px" },
	".cm-completionInfo.cm-completionInfo-right-narrow": { left: "30px" },
	"&light .cm-snippetField": { backgroundColor: "#00000022" },
	"&dark .cm-snippetField": { backgroundColor: "#ffffff22" },
	".cm-snippetFieldPosition": {
		verticalAlign: "text-top",
		width: 0,
		height: "1.15em",
		display: "inline-block",
		margin: "0 -0.7px -.7em",
		borderLeft: "1.4px dotted #888"
	},
	".cm-completionMatchedText": { textDecoration: "underline" },
	".cm-completionDetail": {
		marginLeft: "0.5em",
		fontStyle: "italic"
	},
	".cm-completionIcon": {
		fontSize: "90%",
		width: ".8em",
		display: "inline-block",
		textAlign: "center",
		paddingRight: ".6em",
		opacity: "0.6",
		boxSizing: "content-box"
	},
	".cm-completionIcon-function, .cm-completionIcon-method": { "&:after": { content: "'ƒ'" } },
	".cm-completionIcon-class": { "&:after": { content: "'○'" } },
	".cm-completionIcon-interface": { "&:after": { content: "'◌'" } },
	".cm-completionIcon-variable": { "&:after": { content: "'𝑥'" } },
	".cm-completionIcon-constant": { "&:after": { content: "'𝐶'" } },
	".cm-completionIcon-type": { "&:after": { content: "'𝑡'" } },
	".cm-completionIcon-enum": { "&:after": { content: "'∪'" } },
	".cm-completionIcon-property": { "&:after": { content: "'□'" } },
	".cm-completionIcon-keyword": { "&:after": { content: "'🔑︎'" } },
	".cm-completionIcon-namespace": { "&:after": { content: "'▢'" } },
	".cm-completionIcon-text": { "&:after": {
		content: "'abc'",
		fontSize: "50%",
		verticalAlign: "middle"
	} }
}), L_ = {
	brackets: [
		"(",
		"[",
		"{",
		"'",
		"\""
	],
	before: ")]}:;>",
	stringPrefixes: []
}, R_ = /*@__PURE__*/ F.define({ map(e, t) {
	return t.mapPos(e, -1, vt.TrackAfter) ?? void 0;
} }), z_ = /*@__PURE__*/ new class extends vn {}();
z_.startSide = 1, z_.endSide = -1;
var B_ = /*@__PURE__*/ It.define({
	create() {
		return R.empty;
	},
	update(e, t) {
		if (e = e.map(t.changes), t.selection) {
			let n = t.state.doc.lineAt(t.selection.main.head);
			e = e.update({ filter: (e) => e >= n.from && e <= n.to });
		}
		for (let n of t.effects) n.is(R_) && (e = e.update({ add: [z_.range(n.value, n.value + 1)] }));
		return e;
	}
});
function V_() {
	return [K_, B_];
}
var H_ = "()[]{}<>«»»«［］｛｝";
function U_(e) {
	for (let t = 0; t < 16; t += 2) if (H_.charCodeAt(t) == e) return H_.charAt(t + 1);
	return ht(e < 128 ? e : e + 1);
}
function W_(e, t) {
	return e.languageDataAt("closeBrackets", t)[0] || L_;
}
var G_ = typeof navigator == "object" && /*@__PURE__*/ /Android\b/.test(navigator.userAgent), K_ = /*@__PURE__*/ J.inputHandler.of((e, t, n, r) => {
	if ((G_ ? e.composing : e.compositionStarted) || e.state.readOnly) return !1;
	let i = e.state.selection.main;
	if (r.length > 2 || r.length == 2 && gt(mt(r, 0)) == 1 || t != i.from || n != i.to) return !1;
	let a = J_(e.state, r);
	return a ? (e.dispatch(a), !0) : !1;
}), q_ = [{
	key: "Backspace",
	run: ({ state: e, dispatch: t }) => {
		if (e.readOnly) return !1;
		let n = W_(e, e.selection.main.head).brackets || L_.brackets, r = null, i = e.changeByRange((t) => {
			if (t.empty) {
				let r = Z_(e.doc, t.head);
				for (let i of n) if (i == r && X_(e.doc, t.head) == U_(mt(i, 0))) return {
					changes: {
						from: t.head - i.length,
						to: t.head + i.length
					},
					range: N.cursor(t.head - i.length)
				};
			}
			return { range: r = t };
		});
		return r || t(e.update(i, {
			scrollIntoView: !0,
			userEvent: "delete.backward"
		})), !r;
	}
}];
function J_(e, t) {
	let n = W_(e, e.selection.main.head), r = n.brackets || L_.brackets;
	for (let i of r) {
		let a = U_(mt(i, 0));
		if (t == i) return a == i ? ev(e, i, r.indexOf(i + i + i) > -1, n) : Q_(e, i, a, n.before || L_.before);
		if (t == a && Y_(e, e.selection.main.from)) return $_(e, i, a);
	}
	return null;
}
function Y_(e, t) {
	let n = !1;
	return e.field(B_).between(0, e.doc.length, (e) => {
		e == t && (n = !0);
	}), n;
}
function X_(e, t) {
	let n = e.sliceString(t, t + 2);
	return n.slice(0, gt(mt(n, 0)));
}
function Z_(e, t) {
	let n = e.sliceString(t - 2, t);
	return gt(mt(n, 0)) == n.length ? n : n.slice(1);
}
function Q_(e, t, n, r) {
	let i = null, a = e.changeByRange((a) => {
		if (!a.empty) return {
			changes: [{
				insert: t,
				from: a.from
			}, {
				insert: n,
				from: a.to
			}],
			effects: R_.of(a.to + t.length),
			range: N.range(a.anchor + t.length, a.head + t.length)
		};
		let o = X_(e.doc, a.head);
		return !o || /\s/.test(o) || r.indexOf(o) > -1 ? {
			changes: {
				insert: t + n,
				from: a.head
			},
			effects: R_.of(a.head + t.length),
			range: N.cursor(a.head + t.length)
		} : { range: i = a };
	});
	return i ? null : e.update(a, {
		scrollIntoView: !0,
		userEvent: "input.type"
	});
}
function $_(e, t, n) {
	let r = null, i = e.changeByRange((t) => t.empty && X_(e.doc, t.head) == n ? {
		changes: {
			from: t.head,
			to: t.head + n.length,
			insert: n
		},
		range: N.cursor(t.head + n.length)
	} : r = { range: t });
	return r ? null : e.update(i, {
		scrollIntoView: !0,
		userEvent: "input.type"
	});
}
function ev(e, t, n, r) {
	let i = r.stringPrefixes || L_.stringPrefixes, a = null, o = e.changeByRange((r) => {
		if (!r.empty) return {
			changes: [{
				insert: t,
				from: r.from
			}, {
				insert: t,
				from: r.to
			}],
			effects: R_.of(r.to + t.length),
			range: N.range(r.anchor + t.length, r.head + t.length)
		};
		let o = r.head, s = X_(e.doc, o), c;
		if (s == t) {
			if (tv(e, o)) return {
				changes: {
					insert: t + t,
					from: o
				},
				effects: R_.of(o + t.length),
				range: N.cursor(o + t.length)
			};
			if (Y_(e, o)) {
				let r = n && e.sliceDoc(o, o + t.length * 3) == t + t + t ? t + t + t : t;
				return {
					changes: {
						from: o,
						to: o + r.length,
						insert: r
					},
					range: N.cursor(o + r.length)
				};
			}
		} else if (n && e.sliceDoc(o - 2 * t.length, o) == t + t && (c = rv(e, o - 2 * t.length, i)) > -1 && tv(e, c)) return {
			changes: {
				insert: t + t + t + t,
				from: o
			},
			effects: R_.of(o + t.length),
			range: N.cursor(o + t.length)
		};
		else if (e.charCategorizer(o)(s) != I.Word && rv(e, o, i) > -1 && !nv(e, o, t, i)) return {
			changes: {
				insert: t + t,
				from: o
			},
			effects: R_.of(o + t.length),
			range: N.cursor(o + t.length)
		};
		return { range: a = r };
	});
	return a ? null : e.update(o, {
		scrollIntoView: !0,
		userEvent: "input.type"
	});
}
function tv(e, t) {
	let n = $(e).resolveInner(t + 1);
	return n.parent && n.from == t;
}
function nv(e, t, n, r) {
	let i = $(e).resolveInner(t, -1), a = r.reduce((e, t) => Math.max(e, t.length), 0);
	for (let o = 0; o < 5; o++) {
		let o = e.sliceDoc(i.from, Math.min(i.to, i.from + n.length + a)), s = o.indexOf(n);
		if (!s || s > -1 && r.indexOf(o.slice(0, s)) > -1) {
			let t = i.firstChild;
			for (; t && t.from == i.from && t.to - t.from > n.length + s;) {
				if (e.sliceDoc(t.to - n.length, t.to) == n) return !1;
				t = t.firstChild;
			}
			return !0;
		}
		let c = i.to == t && i.parent;
		if (!c) break;
		i = c;
	}
	return !1;
}
function rv(e, t, n) {
	let r = e.charCategorizer(t);
	if (r(e.sliceDoc(t - 1, t)) != I.Word) return t;
	for (let i of n) {
		let n = t - i.length;
		if (e.sliceDoc(n, t) == i && r(e.sliceDoc(n - 1, n)) != I.Word) return n;
	}
	return -1;
}
function iv(e = {}) {
	return [
		F_,
		C_,
		e_.of(e),
		N_,
		ov,
		I_
	];
}
var av = [
	{
		key: "Ctrl-Space",
		run: O_
	},
	{
		mac: "Alt-`",
		run: O_
	},
	{
		mac: "Alt-i",
		run: O_
	},
	{
		key: "Escape",
		run: k_
	},
	{
		key: "ArrowDown",
		run: /*@__PURE__*/ E_(!0)
	},
	{
		key: "ArrowUp",
		run: /*@__PURE__*/ E_(!1)
	},
	{
		key: "PageDown",
		run: /*@__PURE__*/ E_(!0, "page")
	},
	{
		key: "PageUp",
		run: /*@__PURE__*/ E_(!1, "page")
	},
	{
		key: "Enter",
		run: D_
	}
], ov = /*@__PURE__*/ zt.highest(/*@__PURE__*/ nc.computeN([e_], (e) => e.facet(e_).defaultKeymap ? [av] : [])), sv = class {
	constructor(e, t, n) {
		this.from = e, this.to = t, this.diagnostic = n;
	}
}, cv = class e {
	constructor(e, t, n) {
		this.diagnostics = e, this.panel = t, this.selected = n;
	}
	static init(t, n, r) {
		let i = r.facet(Sv).markerFilter;
		i && (t = i(t, r));
		let a = t.slice().sort((e, t) => e.from - t.from || e.to - t.to), o = new Tn(), s = [], c = 0, l = r.doc.iter(), u = 0, d = r.doc.length;
		for (let e = 0;;) {
			let t = e == a.length ? null : a[e];
			if (!t && !s.length) break;
			let n, r;
			if (s.length) n = c, r = s.reduce((e, t) => Math.min(e, t.to), t && t.from > n ? t.from : 1e8);
			else {
				if (n = t.from, n > d) break;
				r = t.to, s.push(t), e++;
			}
			for (; e < a.length;) {
				let t = a[e];
				if (t.from == n && (t.to > t.from || t.to == n)) s.push(t), e++, r = Math.min(t.to, r);
				else {
					r = Math.min(t.from, r);
					break;
				}
			}
			r = Math.min(r, d);
			let i = !1;
			if (s.some((e) => e.from == n && (e.to == r || r == d)) && (i = n == r, !i && r - n < 10)) {
				let e = n - (u + l.value.length);
				e > 0 && (l.next(e), u = n);
				for (let e = n;;) {
					if (e >= r) {
						i = !0;
						break;
					}
					if (!l.lineBreak && u + l.value.length > e) break;
					e = u + l.value.length, u += l.value.length, l.next();
				}
			}
			let f = Nv(s);
			if (i) o.add(n, n, V.widget({
				widget: new Ev(f),
				diagnostics: s.slice()
			}));
			else {
				let e = s.reduce((e, t) => t.markClass ? e + " " + t.markClass : e, "");
				o.add(n, r, V.mark({
					class: "cm-lintRange cm-lintRange-" + f + e,
					diagnostics: s.slice(),
					inclusiveEnd: s.some((e) => e.to > r)
				}));
			}
			if (c = r, c == d) break;
			for (let e = 0; e < s.length; e++) s[e].to <= c && s.splice(e--, 1);
		}
		let f = o.finish();
		return new e(f, n, lv(f));
	}
};
function lv(e, t = null, n = 0) {
	let r = null;
	return e.between(n, 1e9, (e, n, { spec: i }) => {
		if (!(t && i.diagnostics.indexOf(t) < 0)) {
			if (!r) r = new sv(e, n, t || i.diagnostics[0]);
			else if (i.diagnostics.indexOf(r.diagnostic) < 0) return !1;
			else r = new sv(r.from, n, r.diagnostic);
		}
	}), r;
}
function uv(e, t) {
	let n = t.pos, r = t.end || n, i = e.state.facet(Sv).hideOn(e, n, r);
	if (i != null) return i;
	let a = e.startState.doc.lineAt(t.pos);
	return !!(e.effects.some((e) => e.is(fv)) || e.changes.touchesRange(a.from, Math.max(a.to, r)));
}
function dv(e, t) {
	return e.field(hv, !1) ? t : t.concat(F.appendConfig.of(Fv));
}
var fv = /*@__PURE__*/ F.define(), pv = /*@__PURE__*/ F.define(), mv = /*@__PURE__*/ F.define(), hv = /*@__PURE__*/ It.define({
	create() {
		return new cv(V.none, null, null);
	},
	update(e, t) {
		if (t.docChanged && e.diagnostics.size) {
			let n = e.diagnostics.map(t.changes), r = null, i = e.panel;
			if (e.selected) {
				let i = t.changes.mapPos(e.selected.from, 1);
				r = lv(n, e.selected.diagnostic, i) || lv(n, null, i);
			}
			!n.size && i && t.state.facet(Sv).autoPanel && (i = null), e = new cv(n, i, r);
		}
		for (let n of t.effects) if (n.is(fv)) {
			let r = t.state.facet(Sv).autoPanel ? n.value.length ? Ov.open : null : e.panel;
			e = cv.init(n.value, r, t.state);
		} else n.is(pv) ? e = new cv(e.diagnostics, n.value ? Ov.open : null, e.selected) : n.is(mv) && (e = new cv(e.diagnostics, e.panel, n.value));
		return e;
	},
	provide: (e) => [Pl.from(e, (e) => e.panel), J.decorations.from(e, (e) => e.diagnostics)]
}), gv = /*@__PURE__*/ V.mark({ class: "cm-lintRange cm-lintRange-active" });
function _v(e, t, n) {
	let { diagnostics: r } = e.state.field(hv), i, a = -1, o = -1;
	r.between(t - +(n < 0), t + +(n > 0), (e, r, { spec: s }) => {
		if (t >= e && t <= r && (e == r || (t > e || n > 0) && (t < r || n < 0))) return i = s.diagnostics, a = e, o = r, !1;
	});
	let s = e.state.facet(Sv).tooltipFilter;
	return i && s && (i = s(i, e.state)), i ? {
		pos: a,
		end: o,
		above: !0,
		create() {
			return { dom: vv(e, i) };
		}
	} : null;
}
function vv(e, t) {
	return z("ul", { class: "cm-tooltip-lint" }, t.map((t) => Tv(e, t, !1)));
}
var yv = (e) => {
	let t = e.state.field(hv, !1);
	t && t.panel || e.dispatch({ effects: dv(e.state, [pv.of(!0)]) });
	let n = Al(e, Ov.open);
	return n && n.dom.querySelector(".cm-panel-lint ul").focus(), !0;
}, bv = (e) => {
	let t = e.state.field(hv, !1);
	return !t || !t.panel ? !1 : (e.dispatch({ effects: pv.of(!1) }), !0);
}, xv = [{
	key: "Mod-Shift-m",
	run: yv,
	preventDefault: !0
}, {
	key: "F8",
	run: (e) => {
		let t = e.state.field(hv, !1);
		if (!t) return !1;
		let n = e.state.selection.main, r = lv(t.diagnostics, null, n.to + 1);
		return !r && (r = lv(t.diagnostics, null, 0), !r || r.from == n.from && r.to == n.to) ? !1 : (e.dispatch({
			selection: {
				anchor: r.from,
				head: r.to
			},
			scrollIntoView: !0
		}), El(e, r.from, 1, {
			tooltip: Pv,
			until: (e) => e.docChanged || e.newSelection.main.head < r.from || e.newSelection.main.head > r.to
		}), !0);
	}
}], Sv = /*@__PURE__*/ P.define({ combine(e) {
	return {
		sources: e.map((e) => e.source).filter((e) => e != null),
		..._n(e.map((e) => e.config), {
			delay: 750,
			markerFilter: null,
			tooltipFilter: null,
			needsRefresh: null,
			hideOn: () => null
		}, {
			delay: Math.max,
			markerFilter: Cv,
			tooltipFilter: Cv,
			needsRefresh: (e, t) => e ? t ? (n) => e(n) || t(n) : e : t,
			hideOn: (e, t) => e ? t ? (n, r, i) => e(n, r, i) || t(n, r, i) : e : t,
			autoPanel: (e, t) => e || t
		})
	};
} });
function Cv(e, t) {
	return e ? t ? (n, r) => t(e(n, r), r) : e : t;
}
function wv(e) {
	let t = [];
	if (e) actions: for (let { name: n } of e) {
		for (let e = 0; e < n.length; e++) {
			let r = n[e];
			if (/[a-zA-Z]/.test(r) && !t.some((e) => e.toLowerCase() == r.toLowerCase())) {
				t.push(r);
				continue actions;
			}
		}
		t.push("");
	}
	return t;
}
function Tv(e, t, n) {
	let r = n ? wv(t.actions) : [];
	return z("li", { class: "cm-diagnostic cm-diagnostic-" + t.severity }, z("span", { class: "cm-diagnosticText" }, t.renderMessage ? t.renderMessage(e) : t.message), t.actions?.map((n, i) => {
		let a = !1, o = (r) => {
			if (r.preventDefault(), a) return;
			a = !0;
			let i = lv(e.state.field(hv).diagnostics, t);
			i && n.apply(e, i.from, i.to);
		}, { name: s } = n, c = r[i] ? s.indexOf(r[i]) : -1, l = c < 0 ? s : [
			s.slice(0, c),
			z("u", s.slice(c, c + 1)),
			s.slice(c + 1)
		];
		return z("button", {
			type: "button",
			class: "cm-diagnosticAction" + (n.markClass ? " " + n.markClass : ""),
			onclick: o,
			onmousedown: o,
			"aria-label": ` Action: ${s}${c < 0 ? "" : ` (access key "${r[i]})"`}.`
		}, l);
	}), t.source && z("div", { class: "cm-diagnosticSource" }, t.source));
}
var Ev = class extends gr {
	constructor(e) {
		super(), this.sev = e;
	}
	eq(e) {
		return e.sev == this.sev;
	}
	toDOM() {
		return z("span", { class: "cm-lintPoint cm-lintPoint-" + this.sev });
	}
}, Dv = class {
	constructor(e, t) {
		this.diagnostic = t, this.id = "item_" + Math.floor(Math.random() * 4294967295).toString(16), this.dom = Tv(e, t, !0), this.dom.id = this.id, this.dom.setAttribute("role", "option");
	}
}, Ov = class e {
	constructor(e) {
		this.view = e, this.items = [];
		let t = (t) => {
			if (!(t.ctrlKey || t.altKey || t.metaKey)) {
				if (t.keyCode == 27) bv(this.view), this.view.focus();
				else if (t.keyCode == 38 || t.keyCode == 33) this.moveSelection((this.selectedIndex - 1 + this.items.length) % this.items.length);
				else if (t.keyCode == 40 || t.keyCode == 34) this.moveSelection((this.selectedIndex + 1) % this.items.length);
				else if (t.keyCode == 36) this.moveSelection(0);
				else if (t.keyCode == 35) this.moveSelection(this.items.length - 1);
				else if (t.keyCode == 13) this.view.focus();
				else if (t.keyCode >= 65 && t.keyCode <= 90 && this.selectedIndex >= 0) {
					let { diagnostic: n } = this.items[this.selectedIndex], r = wv(n.actions);
					for (let i = 0; i < r.length; i++) if (r[i].toUpperCase().charCodeAt(0) == t.keyCode) {
						let t = lv(this.view.state.field(hv).diagnostics, n);
						t && n.actions[i].apply(e, t.from, t.to);
					}
				} else return;
				t.preventDefault();
			}
		}, n = (e) => {
			for (let t = 0; t < this.items.length; t++) this.items[t].dom.contains(e.target) && this.moveSelection(t);
		};
		this.list = z("ul", {
			tabIndex: 0,
			role: "listbox",
			"aria-label": this.view.state.phrase("Diagnostics"),
			onkeydown: t,
			onclick: n
		}), this.dom = z("div", { class: "cm-panel-lint" }, this.list, z("button", {
			type: "button",
			name: "close",
			"aria-label": this.view.state.phrase("close"),
			onclick: () => bv(this.view)
		}, "×")), this.update();
	}
	get selectedIndex() {
		let e = this.view.state.field(hv).selected;
		if (!e) return -1;
		for (let t = 0; t < this.items.length; t++) if (this.items[t].diagnostic == e.diagnostic) return t;
		return -1;
	}
	update() {
		let { diagnostics: e, selected: t } = this.view.state.field(hv), n = 0, r = !1, i = null, a = /* @__PURE__ */ new Set();
		for (e.between(0, this.view.state.doc.length, (e, o, { spec: s }) => {
			for (let e of s.diagnostics) {
				if (a.has(e)) continue;
				a.add(e);
				let o = -1, s;
				for (let t = n; t < this.items.length; t++) if (this.items[t].diagnostic == e) {
					o = t;
					break;
				}
				o < 0 ? (s = new Dv(this.view, e), this.items.splice(n, 0, s), r = !0) : (s = this.items[o], o > n && (this.items.splice(n, o - n), r = !0)), t && s.diagnostic == t.diagnostic ? s.dom.hasAttribute("aria-selected") || (s.dom.setAttribute("aria-selected", "true"), i = s) : s.dom.hasAttribute("aria-selected") && s.dom.removeAttribute("aria-selected"), n++;
			}
		}); n < this.items.length && !(this.items.length == 1 && this.items[0].diagnostic.from < 0);) r = !0, this.items.pop();
		this.items.length == 0 && (this.items.push(new Dv(this.view, {
			from: -1,
			to: -1,
			severity: "info",
			message: this.view.state.phrase("No diagnostics")
		})), r = !0), i ? (this.list.setAttribute("aria-activedescendant", i.id), this.view.requestMeasure({
			key: this,
			read: () => ({
				sel: i.dom.getBoundingClientRect(),
				panel: this.list.getBoundingClientRect()
			}),
			write: ({ sel: e, panel: t }) => {
				let n = t.height / this.list.offsetHeight;
				e.top < t.top ? this.list.scrollTop -= (t.top - e.top) / n : e.bottom > t.bottom && (this.list.scrollTop += (e.bottom - t.bottom) / n);
			}
		})) : this.selectedIndex < 0 && this.list.removeAttribute("aria-activedescendant"), r && this.sync();
	}
	sync() {
		let e = this.list.firstChild;
		function t() {
			let t = e;
			e = t.nextSibling, t.remove();
		}
		for (let n of this.items) if (n.dom.parentNode == this.list) {
			for (; e != n.dom;) t();
			e = n.dom.nextSibling;
		} else this.list.insertBefore(n.dom, e);
		for (; e;) t();
	}
	moveSelection(e) {
		if (this.selectedIndex < 0) return;
		let t = lv(this.view.state.field(hv).diagnostics, this.items[e].diagnostic);
		t && this.view.dispatch({
			selection: {
				anchor: t.from,
				head: t.to
			},
			scrollIntoView: !0,
			effects: mv.of(t)
		});
	}
	static open(t) {
		return new e(t);
	}
};
function kv(e, t = "viewBox=\"0 0 40 40\"") {
	return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${t}>${encodeURIComponent(e)}</svg>')`;
}
function Av(e) {
	return kv(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${e}" fill="none" stroke-width=".7"/>`, "width=\"6\" height=\"3\"");
}
var jv = /*@__PURE__*/ J.baseTheme({
	".cm-diagnostic": {
		padding: "3px 6px 3px 8px",
		marginLeft: "-1px",
		display: "block",
		whiteSpace: "pre-wrap"
	},
	".cm-diagnostic-error": { borderLeft: "5px solid #d11" },
	".cm-diagnostic-warning": { borderLeft: "5px solid orange" },
	".cm-diagnostic-info": { borderLeft: "5px solid #999" },
	".cm-diagnostic-hint": { borderLeft: "5px solid #66d" },
	".cm-diagnosticAction": {
		font: "inherit",
		border: "none",
		padding: "2px 4px",
		backgroundColor: "#444",
		color: "white",
		borderRadius: "3px",
		marginLeft: "8px",
		cursor: "pointer"
	},
	".cm-diagnosticSource": {
		fontSize: "70%",
		opacity: .7
	},
	".cm-lintRange": {
		backgroundPosition: "left bottom",
		backgroundRepeat: "repeat-x",
		paddingBottom: "0.7px"
	},
	".cm-lintRange-error": { backgroundImage: /*@__PURE__*/ Av("#f11") },
	".cm-lintRange-warning": { backgroundImage: /*@__PURE__*/ Av("orange") },
	".cm-lintRange-info": { backgroundImage: /*@__PURE__*/ Av("#999") },
	".cm-lintRange-hint": { backgroundImage: /*@__PURE__*/ Av("#66d") },
	".cm-lintRange-active": { backgroundColor: "#ffdd9980" },
	".cm-tooltip-lint": {
		padding: 0,
		margin: 0
	},
	".cm-lintPoint": {
		position: "relative",
		"&:after": {
			content: "\"\"",
			position: "absolute",
			bottom: 0,
			left: "-2px",
			borderLeft: "3px solid transparent",
			borderRight: "3px solid transparent",
			borderBottom: "4px solid #d11"
		}
	},
	".cm-lintPoint-warning": { "&:after": { borderBottomColor: "orange" } },
	".cm-lintPoint-info": { "&:after": { borderBottomColor: "#999" } },
	".cm-lintPoint-hint": { "&:after": { borderBottomColor: "#66d" } },
	".cm-panel.cm-panel-lint": {
		position: "relative",
		"& ul": {
			maxHeight: "100px",
			overflowY: "auto",
			"& [aria-selected]": {
				backgroundColor: "#ddd",
				"& u": { textDecoration: "underline" }
			},
			"&:focus [aria-selected]": {
				background_fallback: "#bdf",
				backgroundColor: "Highlight",
				color_fallback: "white",
				color: "HighlightText"
			},
			"& u": { textDecoration: "none" },
			padding: 0,
			margin: 0
		},
		"& [name=close]": {
			position: "absolute",
			top: "0",
			right: "2px",
			background: "inherit",
			border: "none",
			font: "inherit",
			padding: 0,
			margin: 0
		}
	},
	"&dark .cm-lintRange-active": { backgroundColor: "#86714a80" },
	"&dark .cm-panel.cm-panel-lint ul": { "& [aria-selected]": { backgroundColor: "#2e343e" } }
});
function Mv(e) {
	return e == "error" ? 4 : e == "warning" ? 3 : e == "info" ? 2 : 1;
}
function Nv(e) {
	let t = "hint", n = 1;
	for (let r of e) {
		let e = Mv(r.severity);
		e > n && (n = e, t = r.severity);
	}
	return t;
}
var Pv = /*@__PURE__*/ Tl(_v, { hideOn: uv }), Fv = [
	hv,
	/*@__PURE__*/ J.decorations.compute([hv], (e) => {
		let { selected: t, panel: n } = e.field(hv);
		return !t || !n || t.from == t.to ? V.none : V.set([gv.range(t.from, t.to)]);
	}),
	Pv,
	jv
], Iv = [
	cu(),
	fu(),
	Vc(),
	xp(),
	Ef(),
	xc(),
	jc(),
	L.allowMultipleSelections.of(!0),
	Qd(),
	Mf(Ff, { fallback: !0 }),
	Gf(),
	V_(),
	iv(),
	nl(),
	al(),
	Jc(),
	Hh(),
	nc.of([
		...q_,
		...Oh,
		...jg,
		...Bp,
		..._f,
		...av,
		...xv
	])
], Lv = class e {
	constructor(e, t, n, r, i, a, o, s, c, l = 0, u) {
		this.p = e, this.stack = t, this.state = n, this.reducePos = r, this.pos = i, this.score = a, this.buffer = o, this.bufferBase = s, this.curContext = c, this.lookAhead = l, this.parent = u;
	}
	toString() {
		return `[${this.stack.filter((e, t) => t % 3 == 0).concat(this.state)}]@${this.pos}${this.score ? "!" + this.score : ""}`;
	}
	static start(t, n, r = 0) {
		let i = t.parser.context;
		return new e(t, [], n, r, r, 0, [], 0, i ? new Rv(i, i.start) : null, 0, null);
	}
	get context() {
		return this.curContext ? this.curContext.context : null;
	}
	pushState(e, t) {
		this.stack.push(this.state, t, this.bufferBase + this.buffer.length), this.state = e;
	}
	reduce(e) {
		let t = e >> 19, n = e & 65535, { parser: r } = this.p, i = this.reducePos < this.pos - 25 && this.setLookAhead(this.pos), a = r.dynamicPrecedence(n);
		if (a && (this.score += a), t == 0) {
			n < r.minRepeatTerm && this.reducePos < this.pos && (this.reducePos = this.pos), this.pushState(r.getGoto(this.state, n, !0), this.reducePos), n < r.minRepeatTerm && this.storeNode(n, this.reducePos, this.reducePos, i ? 8 : 4, !0), this.reduceContext(n, this.reducePos);
			return;
		}
		let o = this.stack.length - (t - 1) * 3 - (e & 262144 ? 6 : 0), s = o ? this.stack[o - 2] : this.p.ranges[0].from;
		n < r.minRepeatTerm && s == this.reducePos && this.reducePos < this.pos && (this.reducePos = this.pos);
		let c = this.reducePos - s;
		c >= 2e3 && !this.p.parser.nodeSet.types[n]?.isAnonymous && (s == this.p.lastBigReductionStart ? (this.p.bigReductionCount++, this.p.lastBigReductionSize = c) : this.p.lastBigReductionSize < c && (this.p.bigReductionCount = 1, this.p.lastBigReductionStart = s, this.p.lastBigReductionSize = c));
		let l = o ? this.stack[o - 1] : 0, u = this.bufferBase + this.buffer.length - l;
		if (n < r.minRepeatTerm || e & 131072) {
			let e = r.stateFlag(this.state, 1) ? this.pos : this.reducePos;
			this.storeNode(n, s, e, u + 4, !0);
		}
		if (e & 262144) this.state = this.stack[o];
		else {
			let e = this.stack[o - 3];
			this.state = r.getGoto(e, n, !0);
		}
		for (; this.stack.length > o;) this.stack.pop();
		this.reduceContext(n, s);
	}
	storeNode(e, t, n, r = 4, i = !1) {
		if (e == 0 && (!this.stack.length || this.stack[this.stack.length - 1] < this.buffer.length + this.bufferBase)) {
			let e = this.buffer.length;
			if (e > 0 && this.buffer[e - 4] == 0 && this.buffer[e - 1] > -1) {
				if (t == n) return;
				if (this.buffer[e - 2] >= t) {
					this.buffer[e - 2] = n;
					return;
				}
			}
		}
		if (!i || this.pos == n) this.buffer.push(e, t, n, r);
		else {
			let i = this.buffer.length;
			if (i > 0 && (this.buffer[i - 4] != 0 || this.buffer[i - 1] < 0)) {
				let e = !1;
				for (let t = i; t > 0 && this.buffer[t - 2] > n; t -= 4) if (this.buffer[t - 1] >= 0) {
					e = !0;
					break;
				}
				if (e) for (; i > 0 && this.buffer[i - 2] > n;) this.buffer[i] = this.buffer[i - 4], this.buffer[i + 1] = this.buffer[i - 3], this.buffer[i + 2] = this.buffer[i - 2], this.buffer[i + 3] = this.buffer[i - 1], i -= 4, r > 4 && (r -= 4);
			}
			this.buffer[i] = e, this.buffer[i + 1] = t, this.buffer[i + 2] = n, this.buffer[i + 3] = r;
		}
	}
	shift(e, t, n, r) {
		if (e & 131072) this.pushState(e & 65535, this.pos);
		else if (e & 262144) this.pos = r, this.shiftContext(t, n), t <= this.p.parser.maxNode && this.buffer.push(t, n, r, 4);
		else {
			let i = e, { parser: a } = this.p;
			this.pos = r;
			let o = a.stateFlag(i, 1);
			!o && (r > n || t <= a.maxNode) && (this.reducePos = r), this.pushState(i, o ? n : Math.min(n, this.reducePos)), this.shiftContext(t, n), t <= a.maxNode && this.buffer.push(t, n, r, 4);
		}
	}
	apply(e, t, n, r) {
		e & 65536 ? this.reduce(e) : this.shift(e, t, n, r);
	}
	useNode(e, t, n) {
		let r = this.p.reused.length - 1;
		(r < 0 || this.p.reused[r] != e) && (this.p.reused.push(e), r++);
		let i = this.reducePos = this.pos = n + e.length;
		this.pushState(t, n), this.buffer.push(r, n, i, -1), this.curContext && this.updateContext(this.curContext.tracker.reuse(this.curContext.context, e, this, this.p.stream.reset(this.pos - e.length)));
	}
	split() {
		let t = this, n = t.buffer.length;
		for (n && t.buffer[n - 4] == 0 && (n -= 4); n > 0 && t.buffer[n - 2] > t.reducePos;) n -= 4;
		let r = t.buffer.slice(n), i = t.bufferBase + n;
		for (; t && i == t.bufferBase;) t = t.parent;
		return new e(this.p, this.stack.slice(), this.state, this.reducePos, this.pos, this.score, r, i, this.curContext, this.lookAhead, t);
	}
	recoverByDelete(e, t) {
		let n = e <= this.p.parser.maxNode;
		n && this.storeNode(e, this.pos, t, 4), this.storeNode(0, this.pos, t, n ? 8 : 4), this.pos = this.reducePos = t, this.score -= 190;
	}
	canShift(e) {
		for (let t = new zv(this);;) {
			let n = this.p.parser.stateSlot(t.state, 4) || this.p.parser.hasAction(t.state, e);
			if (n == 0) return !1;
			if (!(n & 65536)) return !0;
			t.reduce(n);
		}
	}
	recoverByInsert(e) {
		if (this.stack.length >= 300) return [];
		let t = this.p.parser.nextStates(this.state);
		if (t.length > 8 || this.stack.length >= 120) {
			let n = [];
			for (let r = 0, i; r < t.length; r += 2) (i = t[r + 1]) != this.state && this.p.parser.hasAction(i, e) && n.push(t[r], i);
			if (this.stack.length < 120) for (let e = 0; n.length < 8 && e < t.length; e += 2) {
				let r = t[e + 1];
				n.some((e, t) => t & 1 && e == r) || n.push(t[e], r);
			}
			t = n;
		}
		let n = [];
		for (let e = 0; e < t.length && n.length < 4; e += 2) {
			let r = t[e + 1];
			if (r == this.state) continue;
			let i = this.split();
			i.pushState(r, this.pos), i.storeNode(0, i.pos, i.pos, 4, !0), i.shiftContext(t[e], this.pos), i.reducePos = this.pos, i.score -= 200, n.push(i);
		}
		return n;
	}
	forceReduce() {
		let { parser: e } = this.p, t = e.stateSlot(this.state, 5);
		if (!(t & 65536)) return !1;
		if (!e.validAction(this.state, t)) {
			let n = t >> 19, r = t & 65535, i = this.stack.length - n * 3;
			if (i < 0 || e.getGoto(this.stack[i], r, !1) < 0) {
				let e = this.findForcedReduction();
				if (e == null) return !1;
				t = e;
			}
			this.storeNode(0, this.pos, this.pos, 4, !0), this.score -= 100;
		}
		return this.reducePos = this.pos, this.reduce(t), !0;
	}
	findForcedReduction() {
		let { parser: e } = this.p, t = [], n = (r, i) => {
			if (!t.includes(r)) return t.push(r), e.allActions(r, (t) => {
				if (!(t & 393216)) {
					if (t & 65536) {
						let n = (t >> 19) - i;
						if (n > 1) {
							let r = t & 65535, i = this.stack.length - n * 3;
							if (i >= 0 && e.getGoto(this.stack[i], r, !1) >= 0) return n << 19 | 65536 | r;
						}
					} else {
						let e = n(t, i + 1);
						if (e != null) return e;
					}
				}
			});
		};
		return n(this.state, 0);
	}
	forceAll() {
		for (; !this.p.parser.stateFlag(this.state, 2);) if (!this.forceReduce()) {
			this.storeNode(0, this.pos, this.pos, 4, !0);
			break;
		}
		return this;
	}
	get deadEnd() {
		if (this.stack.length != 3) return !1;
		let { parser: e } = this.p;
		return e.data[e.stateSlot(this.state, 1)] == 65535 && !e.stateSlot(this.state, 4);
	}
	restart() {
		this.storeNode(0, this.pos, this.pos, 4, !0), this.state = this.stack[0], this.stack.length = 0;
	}
	sameState(e) {
		if (this.state != e.state || this.stack.length != e.stack.length) return !1;
		for (let t = 0; t < this.stack.length; t += 3) if (this.stack[t] != e.stack[t]) return !1;
		return !0;
	}
	get parser() {
		return this.p.parser;
	}
	dialectEnabled(e) {
		return this.p.parser.dialect.flags[e];
	}
	shiftContext(e, t) {
		this.curContext && this.updateContext(this.curContext.tracker.shift(this.curContext.context, e, this, this.p.stream.reset(t)));
	}
	reduceContext(e, t) {
		this.curContext && this.updateContext(this.curContext.tracker.reduce(this.curContext.context, e, this, this.p.stream.reset(t)));
	}
	emitContext() {
		let e = this.buffer.length - 1;
		(e < 0 || this.buffer[e] != -3) && this.storeNode(this.curContext.hash, this.reducePos, this.reducePos, -3, !0);
	}
	emitLookAhead() {
		let e = this.buffer.length - 1;
		(e < 0 || this.buffer[e] != -4) && this.buffer.push(this.lookAhead, this.pos, this.pos, -4);
	}
	updateContext(e) {
		if (e != this.curContext.context) {
			let t = new Rv(this.curContext.tracker, e);
			t.hash != this.curContext.hash && this.emitContext(), this.curContext = t;
		}
	}
	setLookAhead(e) {
		return e <= this.lookAhead ? !1 : (this.emitLookAhead(), this.lookAhead = e, !0);
	}
	close() {
		this.curContext && this.curContext.tracker.strict && this.emitContext(), this.lookAhead > 0 && this.emitLookAhead();
	}
}, Rv = class {
	constructor(e, t) {
		this.tracker = e, this.context = t, this.hash = e.strict ? e.hash(t) : 0;
	}
}, zv = class {
	constructor(e) {
		this.start = e, this.state = e.state, this.stack = e.stack, this.base = this.stack.length;
	}
	reduce(e) {
		let t = e & 65535, n = e >> 19;
		n == 0 ? (this.stack == this.start.stack && (this.stack = this.stack.slice()), this.stack.push(this.state, 0, 0), this.base += 3) : this.base -= (n - 1) * 3;
		let r = this.start.p.parser.getGoto(this.stack[this.base - 3], t, !0);
		this.state = r;
	}
}, Bv = class e {
	constructor(e, t, n) {
		this.stack = e, this.pos = t, this.index = n, this.buffer = e.buffer, this.index == 0 && this.maybeNext();
	}
	static create(t, n = t.bufferBase + t.buffer.length) {
		return new e(t, n, n - t.bufferBase);
	}
	maybeNext() {
		let e = this.stack.parent;
		e != null && (this.index = this.stack.bufferBase - e.bufferBase, this.stack = e, this.buffer = e.buffer);
	}
	get id() {
		return this.buffer[this.index - 4];
	}
	get start() {
		return this.buffer[this.index - 3];
	}
	get end() {
		return this.buffer[this.index - 2];
	}
	get size() {
		return this.buffer[this.index - 1];
	}
	next() {
		this.index -= 4, this.pos -= 4, this.index == 0 && this.maybeNext();
	}
	fork() {
		return new e(this.stack, this.pos, this.index);
	}
};
function Vv(e, t = Uint16Array) {
	if (typeof e != "string") return e;
	let n = null;
	for (let r = 0, i = 0; r < e.length;) {
		let a = 0;
		for (;;) {
			let t = e.charCodeAt(r++), n = !1;
			if (t == 126) {
				a = 65535;
				break;
			}
			t >= 92 && t--, t >= 34 && t--;
			let i = t - 32;
			if (i >= 46 && (i -= 46, n = !0), a += i, n) break;
			a *= 46;
		}
		n ? n[i++] = a : n = new t(a);
	}
	return n;
}
var Hv = class {
	constructor() {
		this.start = -1, this.value = -1, this.end = -1, this.extended = -1, this.lookAhead = 0, this.mask = 0, this.context = 0;
	}
}, Uv = new Hv(), Wv = class {
	constructor(e, t) {
		this.input = e, this.ranges = t, this.chunk = "", this.chunkOff = 0, this.chunk2 = "", this.chunk2Pos = 0, this.next = -1, this.token = Uv, this.rangeIndex = 0, this.pos = this.chunkPos = t[0].from, this.range = t[0], this.end = t[t.length - 1].to, this.readNext();
	}
	resolveOffset(e, t) {
		let n = this.range, r = this.rangeIndex, i = this.pos + e;
		for (; i < n.from;) {
			if (!r) return null;
			let e = this.ranges[--r];
			i -= n.from - e.to, n = e;
		}
		for (; t < 0 ? i > n.to : i >= n.to;) {
			if (r == this.ranges.length - 1) return null;
			let e = this.ranges[++r];
			i += e.from - n.to, n = e;
		}
		return i;
	}
	clipPos(e) {
		if (e >= this.range.from && e < this.range.to) return e;
		for (let t of this.ranges) if (t.to > e) return Math.max(e, t.from);
		return this.end;
	}
	peek(e) {
		let t = this.chunkOff + e, n, r;
		if (t >= 0 && t < this.chunk.length) n = this.pos + e, r = this.chunk.charCodeAt(t);
		else {
			let t = this.resolveOffset(e, 1);
			if (t == null) return -1;
			if (n = t, n >= this.chunk2Pos && n < this.chunk2Pos + this.chunk2.length) r = this.chunk2.charCodeAt(n - this.chunk2Pos);
			else {
				let e = this.rangeIndex, t = this.range;
				for (; t.to <= n;) t = this.ranges[++e];
				this.chunk2 = this.input.chunk(this.chunk2Pos = n), n + this.chunk2.length > t.to && (this.chunk2 = this.chunk2.slice(0, t.to - n)), r = this.chunk2.charCodeAt(0);
			}
		}
		return n >= this.token.lookAhead && (this.token.lookAhead = n + 1), r;
	}
	acceptToken(e, t = 0) {
		let n = t ? this.resolveOffset(t, -1) : this.pos;
		if (n == null || n < this.token.start) throw RangeError("Token end out of bounds");
		this.token.value = e, this.token.end = n;
	}
	acceptTokenTo(e, t) {
		this.token.value = e, this.token.end = t;
	}
	getChunk() {
		if (this.pos >= this.chunk2Pos && this.pos < this.chunk2Pos + this.chunk2.length) {
			let { chunk: e, chunkPos: t } = this;
			this.chunk = this.chunk2, this.chunkPos = this.chunk2Pos, this.chunk2 = e, this.chunk2Pos = t, this.chunkOff = this.pos - this.chunkPos;
		} else {
			this.chunk2 = this.chunk, this.chunk2Pos = this.chunkPos;
			let e = this.input.chunk(this.pos), t = this.pos + e.length;
			this.chunk = t > this.range.to ? e.slice(0, this.range.to - this.pos) : e, this.chunkPos = this.pos, this.chunkOff = 0;
		}
	}
	readNext() {
		return this.next = this.chunkOff >= this.chunk.length && (this.getChunk(), this.chunkOff == this.chunk.length) ? -1 : this.chunk.charCodeAt(this.chunkOff);
	}
	advance(e = 1) {
		for (this.chunkOff += e; this.pos + e >= this.range.to;) {
			if (this.rangeIndex == this.ranges.length - 1) return this.setDone();
			e -= this.range.to - this.pos, this.range = this.ranges[++this.rangeIndex], this.pos = this.range.from;
		}
		return this.pos += e, this.pos >= this.token.lookAhead && (this.token.lookAhead = this.pos + 1), this.readNext();
	}
	setDone() {
		return this.pos = this.chunkPos = this.end, this.range = this.ranges[this.rangeIndex = this.ranges.length - 1], this.chunk = "", this.next = -1;
	}
	reset(e, t) {
		if (t ? (this.token = t, t.start = e, t.lookAhead = e + 1, t.value = t.extended = -1) : this.token = Uv, this.pos != e) {
			if (this.pos = e, e == this.end) return this.setDone(), this;
			for (; e < this.range.from;) this.range = this.ranges[--this.rangeIndex];
			for (; e >= this.range.to;) this.range = this.ranges[++this.rangeIndex];
			e >= this.chunkPos && e < this.chunkPos + this.chunk.length ? this.chunkOff = e - this.chunkPos : (this.chunk = "", this.chunkOff = 0), this.readNext();
		}
		return this;
	}
	read(e, t) {
		if (e >= this.chunkPos && t <= this.chunkPos + this.chunk.length) return this.chunk.slice(e - this.chunkPos, t - this.chunkPos);
		if (e >= this.chunk2Pos && t <= this.chunk2Pos + this.chunk2.length) return this.chunk2.slice(e - this.chunk2Pos, t - this.chunk2Pos);
		if (e >= this.range.from && t <= this.range.to) return this.input.read(e, t);
		let n = "";
		for (let r of this.ranges) {
			if (r.from >= t) break;
			r.to > e && (n += this.input.read(Math.max(r.from, e), Math.min(r.to, t)));
		}
		return n;
	}
}, Gv = class {
	constructor(e, t) {
		this.data = e, this.id = t;
	}
	token(e, t) {
		let { parser: n } = t.p;
		Jv(this.data, e, t, this.id, n.data, n.tokenPrecTable);
	}
};
Gv.prototype.contextual = Gv.prototype.fallback = Gv.prototype.extend = !1;
var Kv = class {
	constructor(e, t, n) {
		this.precTable = t, this.elseToken = n, this.data = typeof e == "string" ? Vv(e) : e;
	}
	token(e, t) {
		let n = e.pos, r = 0;
		for (;;) {
			let n = e.next < 0, i = e.resolveOffset(1, 1);
			if (Jv(this.data, e, t, 0, this.data, this.precTable), e.token.value > -1) break;
			if (this.elseToken == null) return;
			if (n || r++, i == null) break;
			e.reset(i, e.token);
		}
		r && (e.reset(n, e.token), e.acceptToken(this.elseToken, r));
	}
};
Kv.prototype.contextual = Gv.prototype.fallback = Gv.prototype.extend = !1;
var qv = class {
	constructor(e, t = {}) {
		this.token = e, this.contextual = !!t.contextual, this.fallback = !!t.fallback, this.extend = !!t.extend;
	}
};
function Jv(e, t, n, r, i, a) {
	let o = 0, s = 1 << r, { dialect: c } = n.p.parser;
	scan: for (; (s & e[o]) != 0;) {
		let n = e[o + 1];
		for (let r = o + 3; r < n; r += 2) if ((e[r + 1] & s) > 0) {
			let n = e[r];
			if (c.allows(n) && (t.token.value == -1 || t.token.value == n || Xv(n, t.token.value, i, a))) {
				t.acceptToken(n);
				break;
			}
		}
		let r = t.next, l = 0, u = e[o + 2];
		if (t.next < 0 && u > l && e[n + u * 3 - 3] == 65535) {
			o = e[n + u * 3 - 1];
			continue scan;
		}
		for (; l < u;) {
			let i = l + u >> 1, a = n + i + (i << 1), s = e[a], c = e[a + 1] || 65536;
			if (r < s) u = i;
			else if (r >= c) l = i + 1;
			else {
				o = e[a + 2], t.advance();
				continue scan;
			}
		}
		break;
	}
}
function Yv(e, t, n) {
	for (let r = t, i; (i = e[r]) != 65535; r++) if (i == n) return r - t;
	return -1;
}
function Xv(e, t, n, r) {
	let i = Yv(n, r, t);
	return i < 0 || Yv(n, r, e) < i;
}
var Zv = typeof process < "u" && process.env && /\bparse\b/.test(process.env.LOG), Qv = null;
function $v(e, t, n) {
	let r = e.cursor(X.IncludeAnonymous);
	for (r.moveTo(t);;) if (!(n < 0 ? r.childBefore(t) : r.childAfter(t))) for (;;) {
		if ((n < 0 ? r.to < t : r.from > t) && !r.type.isError) return n < 0 ? Math.max(0, Math.min(r.to - 1, t - 25)) : Math.min(e.length, Math.max(r.from + 1, t + 25));
		if (n < 0 ? r.prevSibling() : r.nextSibling()) break;
		if (!r.parent()) return n < 0 ? 0 : e.length;
	}
}
var ey = class {
	constructor(e, t) {
		this.fragments = e, this.minRepeat = t, this.i = 0, this.fragment = null, this.safeFrom = -1, this.safeTo = -1, this.trees = [], this.start = [], this.index = [], this.lastRepeat = null, this.lastRepeatPos = -1, this.nextFragment();
	}
	nextFragment() {
		let e = this.fragment = this.i == this.fragments.length ? null : this.fragments[this.i++];
		if (e) {
			for (this.safeFrom = e.openStart ? $v(e.tree, e.from + e.offset, 1) - e.offset : e.from, this.safeTo = e.openEnd ? $v(e.tree, e.to + e.offset, -1) - e.offset : e.to; this.trees.length;) this.trees.pop(), this.start.pop(), this.index.pop();
			this.trees.push(e.tree), this.start.push(-e.offset), this.index.push(0), this.nextStart = this.safeFrom;
		} else this.nextStart = 1e9;
	}
	nodeAt(e) {
		if (e < this.nextStart) return null;
		for (; this.fragment && this.safeTo <= e;) this.nextFragment();
		if (!this.fragment) return null;
		for (;;) {
			let t = this.trees.length - 1;
			if (t < 0) return this.nextFragment(), null;
			let n = this.trees[t], r = this.index[t];
			if (r == n.children.length) {
				this.trees.pop(), this.start.pop(), this.index.pop();
				continue;
			}
			let i = n.children[r], a = this.start[t] + n.positions[r];
			if (a > e) return this.nextStart = a, null;
			if (i instanceof Su) {
				let n = a > this.lastRepeatPos && i.type.id >= this.minRepeat;
				if (a == e || n) {
					let t = a + i.length, r;
					if (a >= this.safeFrom && t <= this.safeTo && (!(r = i.prop(Y.lookAhead)) || t + r < this.fragment.to)) {
						if (n && (this.lastRepeat = i, this.lastRepeatPos = a), a == e) return i;
					} else if (a == e) return null;
				}
				this.index[t]++, a + i.length >= Math.max(this.safeFrom, e) && (this.trees.push(i), this.start.push(a), this.index.push(0));
			} else this.index[t]++, this.nextStart = a + i.length;
		}
	}
}, ty = class {
	constructor(e, t) {
		this.stream = t, this.tokens = [], this.mainToken = null, this.actions = [], this.tokens = e.tokenizers.map((e) => new Hv());
	}
	getActions(e) {
		let t = 0, n = null, { parser: r } = e.p, { tokenizers: i } = r, a = r.stateSlot(e.state, 3), o = e.curContext ? e.curContext.hash : 0, s = 0;
		for (let r = 0; r < i.length; r++) {
			if (!(1 << r & a)) continue;
			let c = i[r], l = this.tokens[r];
			if ((!n || c.fallback) && ((c.contextual || l.start != e.pos || l.mask != a || l.context != o) && (this.updateCachedToken(l, c, e), l.mask = a, l.context = o), l.lookAhead > l.end + 25 && (s = Math.max(l.lookAhead, s)), l.value != 0)) {
				let r = t;
				if (l.extended > -1 && (t = this.addActions(e, l.extended, l.end, t)), t = this.addActions(e, l.value, l.end, t), !c.extend && (n = l, t > r)) break;
			}
		}
		for (; this.actions.length > t;) this.actions.pop();
		return s && e.setLookAhead(s), !n && e.pos == this.stream.end && (n = new Hv(), n.value = e.p.parser.eofTerm, n.start = n.end = e.pos, t = this.addActions(e, n.value, n.end, t)), this.mainToken = n, this.actions;
	}
	getMainToken(e) {
		if (this.mainToken) return this.mainToken;
		let t = new Hv(), { pos: n, p: r } = e;
		return t.start = n, t.end = Math.min(n + 1, r.stream.end), t.value = n == r.stream.end ? r.parser.eofTerm : 0, t;
	}
	updateCachedToken(e, t, n) {
		let r = this.stream.clipPos(n.pos);
		if (t.token(this.stream.reset(r, e), n), e.value > -1) {
			let { parser: t } = n.p;
			for (let r = 0; r < t.specialized.length; r++) if (t.specialized[r] == e.value) {
				let i = t.specializers[r](this.stream.read(e.start, e.end), n);
				if (i >= 0 && n.p.parser.dialect.allows(i >> 1)) {
					i & 1 ? e.extended = i >> 1 : e.value = i >> 1;
					break;
				}
			}
		} else e.value = 0, e.end = this.stream.clipPos(r + 1);
	}
	putAction(e, t, n, r) {
		for (let t = 0; t < r; t += 3) if (this.actions[t] == e) return r;
		return this.actions[r++] = e, this.actions[r++] = t, this.actions[r++] = n, r;
	}
	addActions(e, t, n, r) {
		let { state: i } = e, { parser: a } = e.p, { data: o } = a;
		for (let e = 0; e < 2; e++) for (let s = a.stateSlot(i, e ? 2 : 1);; s += 3) {
			if (o[s] == 65535) {
				if (o[s + 1] == 1) s = cy(o, s + 2);
				else {
					r == 0 && o[s + 1] == 2 && (r = this.putAction(cy(o, s + 2), t, n, r));
					break;
				}
			}
			o[s] == t && (r = this.putAction(cy(o, s + 1), t, n, r));
		}
		return r;
	}
}, ny = class {
	constructor(e, t, n, r) {
		this.parser = e, this.input = t, this.ranges = r, this.recovering = 0, this.nextStackID = 9812, this.minStackPos = 0, this.reused = [], this.stoppedAt = null, this.lastBigReductionStart = -1, this.lastBigReductionSize = 0, this.bigReductionCount = 0, this.stream = new Wv(t, r), this.tokens = new ty(e, this.stream), this.topTerm = e.top[1];
		let { from: i } = r[0];
		this.stacks = [Lv.start(this, e.top[0], i)], this.fragments = n.length && this.stream.end - i > e.bufferLength * 4 ? new ey(n, e.minRepeatTerm) : null;
	}
	get parsedPos() {
		return this.minStackPos;
	}
	advance() {
		let e = this.stacks, t = this.minStackPos, n = this.stacks = [], r, i;
		if (this.bigReductionCount > 300 && e.length == 1) {
			let [t] = e;
			for (; t.forceReduce() && t.stack.length && t.stack[t.stack.length - 2] >= this.lastBigReductionStart;);
			this.bigReductionCount = this.lastBigReductionSize = 0;
		}
		for (let a = 0; a < e.length; a++) {
			let o = e[a];
			for (;;) {
				if (this.tokens.mainToken = null, o.pos > t) n.push(o);
				else if (this.advanceStack(o, n, e)) continue;
				else {
					r || (r = [], i = []), r.push(o);
					let e = this.tokens.getMainToken(o);
					i.push(e.value, e.end);
				}
				break;
			}
		}
		if (!n.length) {
			let e = r && ly(r);
			if (e) return Zv && console.log("Finish with " + this.stackID(e)), this.stackToTree(e);
			if (this.parser.strict) throw Zv && r && console.log("Stuck with token " + (this.tokens.mainToken ? this.parser.getName(this.tokens.mainToken.value) : "none")), SyntaxError("No parse at " + t);
			this.recovering ||= 5;
		}
		if (this.recovering && r) {
			let e = this.stoppedAt != null && r[0].pos > this.stoppedAt ? r[0] : this.runRecovery(r, i, n);
			if (e) return Zv && console.log("Force-finish " + this.stackID(e)), this.stackToTree(e.forceAll());
		}
		if (this.recovering) {
			let e = this.recovering == 1 ? 1 : this.recovering * 3;
			if (n.length > e) for (n.sort((e, t) => t.score - e.score); n.length > e;) n.pop();
			n.some((e) => e.reducePos > t) && this.recovering--;
		} else if (n.length > 1) {
			outer: for (let e = 0; e < n.length - 1; e++) {
				let t = n[e];
				for (let r = e + 1; r < n.length; r++) {
					let i = n[r];
					if (t.sameState(i) || t.buffer.length > 500 && i.buffer.length > 500) {
						if ((t.score - i.score || t.buffer.length - i.buffer.length) > 0) n.splice(r--, 1);
						else {
							n.splice(e--, 1);
							continue outer;
						}
					}
				}
			}
			n.length > 12 && (n.sort((e, t) => t.score - e.score), n.splice(12, n.length - 12));
		}
		this.minStackPos = n[0].pos;
		for (let e = 1; e < n.length; e++) n[e].pos < this.minStackPos && (this.minStackPos = n[e].pos);
		return null;
	}
	stopAt(e) {
		if (this.stoppedAt != null && this.stoppedAt < e) throw RangeError("Can't move stoppedAt forward");
		this.stoppedAt = e;
	}
	tryReuse(e, t, n, r) {
		if (!n) return null;
		let i = e.curContext && e.curContext.tracker.strict, a = i ? e.curContext.hash : 0;
		for (; n;) {
			let o = this.parser.nodeSet.types[n.type.id] == n.type ? this.parser.getGoto(e.state, n.type.id) : -1;
			if (o > -1 && n.length && (!i || (n.prop(Y.contextHash) || 0) == a)) return e.useNode(n, o, t), n;
			if (n.children.length == 0 || n.positions[0] > 0) break;
			let s = n.children[0];
			if (s instanceof Su && (!r || s.type.id >= this.parser.minRepeatTerm)) n = s;
			else break;
		}
		return null;
	}
	advanceStack(e, t, n) {
		let r = e.pos, { parser: i } = this, a = Zv ? this.stackID(e) + " -> " : "";
		if (this.stoppedAt != null && r > this.stoppedAt) return e.forceReduce() ? e : null;
		if (this.fragments) {
			let t = e.reducePos < r && e.buffer.length && e.buffer[e.buffer.length - 2] <= e.reducePos && this.fragments.lastRepeatPos == e.reducePos && this.tryReuse(e, e.reducePos, this.fragments.lastRepeat, !0) || this.tryReuse(e, r, this.fragments.nodeAt(r), !1);
			if (t) return Zv && console.log(a + this.stackID(e) + ` (via reuse of ${i.getName(t.type.id)})`), !0;
		}
		let o = i.stateSlot(e.state, 4);
		if (o > 0) return e.reduce(o), Zv && console.log(a + this.stackID(e) + ` (via always-reduce ${i.getName(o & 65535)})`), !0;
		if (e.stack.length >= 8400) for (; e.stack.length > 6e3 && e.forceReduce(););
		let s = this.tokens.getActions(e);
		for (let o = 0; o < s.length;) {
			let c = s[o++], l = s[o++], u = s[o++], d = o == s.length || !n, f = d ? e : e.split(), p = this.tokens.mainToken;
			if (f.apply(c, l, p ? p.start : f.pos, u), Zv && console.log(a + this.stackID(f) + ` (via ${c & 65536 ? `reduce of ${i.getName(c & 65535)}` : "shift"} for ${i.getName(l)} @ ${r}${f == e ? "" : ", split"})`), d) return !0;
			f.pos > r ? t.push(f) : n.push(f);
		}
		return !1;
	}
	advanceFully(e, t) {
		let n = e.pos;
		for (;;) {
			if (!this.advanceStack(e, null, null)) return !1;
			if (e.pos > n) return ry(e, t), !0;
		}
	}
	runRecovery(e, t, n) {
		let r = null, i = !1;
		for (let a = 0; a < e.length; a++) {
			let o = e[a], s = t[a << 1], c = t[(a << 1) + 1], l = Zv ? this.stackID(o) + " -> " : "";
			if (o.deadEnd && (i || (i = !0, o.restart(), Zv && console.log(l + this.stackID(o) + " (restarted)"), this.advanceFully(o, n)))) continue;
			let u = o.split(), d = l;
			for (let e = 0; e < 10 && u.forceReduce() && (Zv && console.log(d + this.stackID(u) + " (via force-reduce)"), !this.advanceFully(u, n)); e++) Zv && (d = this.stackID(u) + " -> ");
			for (let e of o.recoverByInsert(s)) Zv && console.log(l + this.stackID(e) + " (via recover-insert)"), this.advanceFully(e, n);
			this.stream.end > o.pos ? (c == o.pos && (c++, s = 0), o.recoverByDelete(s, c), Zv && console.log(l + this.stackID(o) + ` (via recover-delete ${this.parser.getName(s)})`), ry(o, n)) : (!r || r.score < u.score) && (r = u);
		}
		return r;
	}
	stackToTree(e) {
		return e.close(), Su.build({
			buffer: Bv.create(e),
			nodeSet: this.parser.nodeSet,
			topID: this.topTerm,
			maxBufferLength: this.parser.bufferLength,
			reused: this.reused,
			start: this.ranges[0].from,
			length: e.pos - this.ranges[0].from,
			minRepeatType: this.parser.minRepeatTerm
		});
	}
	stackID(e) {
		let t = (Qv ||= /* @__PURE__ */ new WeakMap()).get(e);
		return t || Qv.set(e, t = String.fromCodePoint(this.nextStackID++)), t + e;
	}
};
function ry(e, t) {
	for (let n = 0; n < t.length; n++) {
		let r = t[n];
		if (r.pos == e.pos && r.sameState(e)) {
			t[n].score < e.score && (t[n] = e);
			return;
		}
	}
	t.push(e);
}
var iy = class {
	constructor(e, t, n) {
		this.source = e, this.flags = t, this.disabled = n;
	}
	allows(e) {
		return !this.disabled || this.disabled[e] == 0;
	}
}, ay = (e) => e, oy = class {
	constructor(e) {
		this.start = e.start, this.shift = e.shift || ay, this.reduce = e.reduce || ay, this.reuse = e.reuse || ay, this.hash = e.hash || (() => 0), this.strict = e.strict !== !1;
	}
}, sy = class e extends Uu {
	constructor(e) {
		if (super(), this.wrappers = [], e.version != 14) throw RangeError(`Parser version (${e.version}) doesn't match runtime version (14)`);
		let t = e.nodeNames.split(" ");
		this.minRepeatTerm = t.length;
		for (let n = 0; n < e.repeatNodeCount; n++) t.push("");
		let n = Object.keys(e.topRules).map((t) => e.topRules[t][1]), r = [];
		for (let e = 0; e < t.length; e++) r.push([]);
		function i(e, t, n) {
			r[e].push([t, t.deserialize(String(n))]);
		}
		if (e.nodeProps) for (let t of e.nodeProps) {
			let e = t[0];
			typeof e == "string" && (e = Y[e]);
			for (let n = 1; n < t.length;) {
				let r = t[n++];
				if (r >= 0) i(r, e, t[n++]);
				else {
					let a = t[n + -r];
					for (let o = -r; o > 0; o--) i(t[n++], e, a);
					n++;
				}
			}
		}
		this.nodeSet = new yu(t.map((t, i) => vu.define({
			name: i >= this.minRepeatTerm ? void 0 : t,
			id: i,
			props: r[i],
			top: n.indexOf(i) > -1,
			error: i == 0,
			skipped: e.skippedNodes && e.skippedNodes.indexOf(i) > -1
		}))), e.propSources && (this.nodeSet = this.nodeSet.extend(...e.propSources)), this.strict = !1, this.bufferLength = pu;
		let a = Vv(e.tokenData);
		this.context = e.context, this.specializerSpecs = e.specialized || [], this.specialized = new Uint16Array(this.specializerSpecs.length);
		for (let e = 0; e < this.specializerSpecs.length; e++) this.specialized[e] = this.specializerSpecs[e].term;
		this.specializers = this.specializerSpecs.map(uy), this.states = Vv(e.states, Uint32Array), this.data = Vv(e.stateData), this.goto = Vv(e.goto), this.maxTerm = e.maxTerm, this.tokenizers = e.tokenizers.map((e) => typeof e == "number" ? new Gv(a, e) : e), this.topRules = e.topRules, this.dialects = e.dialects || {}, this.dynamicPrecedences = e.dynamicPrecedences || null, this.tokenPrecTable = e.tokenPrec, this.termNames = e.termNames || null, this.maxNode = this.nodeSet.types.length - 1, this.dialect = this.parseDialect(), this.top = this.topRules[Object.keys(this.topRules)[0]];
	}
	createParse(e, t, n) {
		let r = new ny(this, e, t, n);
		for (let i of this.wrappers) r = i(r, e, t, n);
		return r;
	}
	getGoto(e, t, n = !1) {
		let r = this.goto;
		if (t >= r[0]) return -1;
		for (let i = r[t + 1];;) {
			let t = r[i++], a = t & 1, o = r[i++];
			if (a && n) return o;
			for (let n = i + (t >> 1); i < n; i++) if (r[i] == e) return o;
			if (a) return -1;
		}
	}
	hasAction(e, t) {
		let n = this.data;
		for (let r = 0; r < 2; r++) for (let i = this.stateSlot(e, r ? 2 : 1), a;; i += 3) {
			if ((a = n[i]) == 65535) {
				if (n[i + 1] == 1) a = n[i = cy(n, i + 2)];
				else if (n[i + 1] == 2) return cy(n, i + 2);
				else break;
			}
			if (a == t || a == 0) return cy(n, i + 1);
		}
		return 0;
	}
	stateSlot(e, t) {
		return this.states[e * 6 + t];
	}
	stateFlag(e, t) {
		return (this.stateSlot(e, 0) & t) > 0;
	}
	validAction(e, t) {
		return !!this.allActions(e, (e) => e == t || null);
	}
	allActions(e, t) {
		let n = this.stateSlot(e, 4), r = n ? t(n) : void 0;
		for (let n = this.stateSlot(e, 1); r == null; n += 3) {
			if (this.data[n] == 65535) {
				if (this.data[n + 1] == 1) n = cy(this.data, n + 2);
				else break;
			}
			r = t(cy(this.data, n + 1));
		}
		return r;
	}
	nextStates(e) {
		let t = [];
		for (let n = this.stateSlot(e, 1);; n += 3) {
			if (this.data[n] == 65535) {
				if (this.data[n + 1] == 1) n = cy(this.data, n + 2);
				else break;
			}
			if (!(this.data[n + 2] & 1)) {
				let e = this.data[n + 1];
				t.some((t, n) => n & 1 && t == e) || t.push(this.data[n], e);
			}
		}
		return t;
	}
	configure(t) {
		let n = Object.assign(Object.create(e.prototype), this);
		if (t.props && (n.nodeSet = this.nodeSet.extend(...t.props)), t.top) {
			let e = this.topRules[t.top];
			if (!e) throw RangeError(`Invalid top rule name ${t.top}`);
			n.top = e;
		}
		return t.tokenizers && (n.tokenizers = this.tokenizers.map((e) => {
			let n = t.tokenizers.find((t) => t.from == e);
			return n ? n.to : e;
		})), t.specializers && (n.specializers = this.specializers.slice(), n.specializerSpecs = this.specializerSpecs.map((e, r) => {
			let i = t.specializers.find((t) => t.from == e.external);
			if (!i) return e;
			let a = Object.assign(Object.assign({}, e), { external: i.to });
			return n.specializers[r] = uy(a), a;
		})), t.contextTracker && (n.context = t.contextTracker), t.dialect && (n.dialect = this.parseDialect(t.dialect)), t.strict != null && (n.strict = t.strict), t.wrap && (n.wrappers = n.wrappers.concat(t.wrap)), t.bufferLength != null && (n.bufferLength = t.bufferLength), n;
	}
	hasWrappers() {
		return this.wrappers.length > 0;
	}
	getName(e) {
		return this.termNames ? this.termNames[e] : String(e <= this.maxNode && this.nodeSet.types[e].name || e);
	}
	get eofTerm() {
		return this.maxNode + 1;
	}
	get topNode() {
		return this.nodeSet.types[this.top[1]];
	}
	dynamicPrecedence(e) {
		let t = this.dynamicPrecedences;
		return t == null ? 0 : t[e] || 0;
	}
	parseDialect(e) {
		let t = Object.keys(this.dialects), n = t.map(() => !1);
		if (e) for (let r of e.split(" ")) {
			let e = t.indexOf(r);
			e >= 0 && (n[e] = !0);
		}
		let r = null;
		for (let e = 0; e < t.length; e++) if (!n[e]) for (let n = this.dialects[t[e]], i; (i = this.data[n++]) != 65535;) (r ||= new Uint8Array(this.maxTerm + 1))[i] = 1;
		return new iy(e, n, r);
	}
	static deserialize(t) {
		return new e(t);
	}
};
function cy(e, t) {
	return e[t] | e[t + 1] << 16;
}
function ly(e) {
	let t = null;
	for (let n of e) {
		let e = n.p.stoppedAt;
		(n.pos == n.p.stream.end || e != null && n.pos > e) && n.p.parser.stateFlag(n.state, 2) && (!t || t.score < n.score) && (t = n);
	}
	return t;
}
function uy(e) {
	if (e.external) {
		let t = +!!e.extend;
		return (n, r) => e.external(n, r) << 1 | t;
	}
	return e.get;
}
// node_modules/@lezer/xml/dist/index.js
var dy = 1, fy = 2, py = 3, my = 4, hy = 5, gy = 36, _y = 37, vy = 38, yy = 11, by = 13;
function xy(e) {
	return e == 45 || e == 46 || e == 58 || e >= 65 && e <= 90 || e == 95 || e >= 97 && e <= 122 || e >= 161;
}
function Sy(e) {
	return e == 9 || e == 10 || e == 13 || e == 32;
}
var Cy = null, wy = null, Ty = 0;
function Ey(e, t) {
	let n = e.pos + t;
	if (wy == e && Ty == n) return Cy;
	for (; Sy(e.peek(t));) t++;
	let r = "";
	for (;;) {
		let n = e.peek(t);
		if (!xy(n)) break;
		r += String.fromCharCode(n), t++;
	}
	return wy = e, Ty = n, Cy = r || null;
}
function Dy(e, t) {
	this.name = e, this.parent = t;
}
var Oy = new oy({
	start: null,
	shift(e, t, n, r) {
		return t == dy ? new Dy(Ey(r, 1) || "", e) : e;
	},
	reduce(e, t) {
		return t == yy && e ? e.parent : e;
	},
	reuse(e, t, n, r) {
		let i = t.type.id;
		return i == dy || i == by ? new Dy(Ey(r, 1) || "", e) : e;
	},
	strict: !1
}), ky = new qv((e, t) => {
	if (e.next == 60) {
		if (e.advance(), e.next == 47) {
			e.advance();
			let n = Ey(e, 0);
			if (!n) return e.acceptToken(hy);
			if (t.context && n == t.context.name) return e.acceptToken(fy);
			for (let r = t.context; r; r = r.parent) if (r.name == n) return e.acceptToken(py, -2);
			e.acceptToken(my);
		} else if (e.next != 33 && e.next != 63) return e.acceptToken(dy);
	}
}, { contextual: !0 });
function Ay(e, t) {
	return new qv((n) => {
		let r = 0, i = t.charCodeAt(0);
		scan: for (; !(n.next < 0); n.advance(), r++) if (n.next == i) {
			for (let e = 1; e < t.length; e++) if (n.peek(e) != t.charCodeAt(e)) continue scan;
			break;
		}
		r && n.acceptToken(e);
	});
}
var jy = Ay(gy, "-->"), My = Ay(_y, "?>"), Ny = Ay(vy, "]]>"), Py = Zu({
	Text: Q.content,
	"StartTag StartCloseTag EndTag SelfCloseEndTag": Q.angleBracket,
	TagName: Q.tagName,
	"MismatchedCloseTag/TagName": [Q.tagName, Q.invalid],
	AttributeName: Q.attributeName,
	AttributeValue: Q.attributeValue,
	Is: Q.definitionOperator,
	"EntityReference CharacterReference": Q.character,
	Comment: Q.blockComment,
	ProcessingInst: Q.processingInstruction,
	DoctypeDecl: Q.documentMeta,
	Cdata: Q.special(Q.string)
}), Fy = sy.deserialize({
	version: 14,
	states: ",lOQOaOOOrOxO'#CfOzOpO'#CiO!tOaO'#CgOOOP'#Cg'#CgO!{OrO'#CrO#TOtO'#CsO#]OpO'#CtOOOP'#DT'#DTOOOP'#Cv'#CvQQOaOOOOOW'#Cw'#CwO#eOxO,59QOOOP,59Q,59QOOOO'#Cx'#CxO#mOpO,59TO#uO!bO,59TOOOP'#C|'#C|O$TOaO,59RO$[OpO'#CoOOOP,59R,59ROOOQ'#C}'#C}O$dOrO,59^OOOP,59^,59^OOOS'#DO'#DOO$lOtO,59_OOOP,59_,59_O$tOpO,59`O$|OpO,59`OOOP-E6t-E6tOOOW-E6u-E6uOOOP1G.l1G.lOOOO-E6v-E6vO%UO!bO1G.oO%UO!bO1G.oO%dOpO'#CkO%lO!bO'#CyO%zO!bO1G.oOOOP1G.o1G.oOOOP1G.w1G.wOOOP-E6z-E6zOOOP1G.m1G.mO&VOpO,59ZO&_OpO,59ZOOOQ-E6{-E6{OOOP1G.x1G.xOOOS-E6|-E6|OOOP1G.y1G.yO&gOpO1G.zO&gOpO1G.zOOOP1G.z1G.zO&oO!bO7+$ZO&}O!bO7+$ZOOOP7+$Z7+$ZOOOP7+$c7+$cO'YOpO,59VO'bOpO,59VO'mO!bO,59eOOOO-E6w-E6wO'{OpO1G.uO'{OpO1G.uOOOP1G.u1G.uO(TOpO7+$fOOOP7+$f7+$fO(]O!bO<<GuOOOP<<Gu<<GuOOOP<<G}<<G}O'bOpO1G.qO'bOpO1G.qO(hO#tO'#CnO(vO&jO'#CnOOOO1G.q1G.qO)UOpO7+$aOOOP7+$a7+$aOOOP<<HQ<<HQOOOPAN=aAN=aOOOPAN=iAN=iO'bOpO7+$]OOOO7+$]7+$]OOOO'#Cz'#CzO)^O#tO,59YOOOO,59Y,59YOOOO'#C{'#C{O)lO&jO,59YOOOP<<G{<<G{OOOO<<Gw<<GwOOOO-E6x-E6xOOOO1G.t1G.tOOOO-E6y-E6y",
	stateData: ")z~OPQOSVOTWOVWOWWOXWOiXOyPO!QTO!SUO~OvZOx]O~O^`Oz^O~OPQOQcOSVOTWOVWOWWOXWOyPO!QTO!SUO~ORdO~P!SOteO!PgO~OuhO!RjO~O^lOz^O~OvZOxoO~O^qOz^O~O[vO`sOdwOz^O~ORyO~P!SO^{Oz^O~OteO!P}O~OuhO!R!PO~O^!QOz^O~O[!SOz^O~O[!VO`sOd!WOz^O~Oa!YOz^O~Oz^O[mX`mXdmX~O[!VO`sOd!WO~O^!]Oz^O~O[!_Oz^O~O[!aOz^O~O[!cO`sOd!dOz^O~O[!cO`sOd!dO~Oa!eOz^O~Oz^O{!gO}!hO~Oz^O[ma`madma~O[!kOz^O~O[!lOz^O~O[!mO`sOd!nO~OW!qOX!qO{!sO|!qO~OW!tOX!tO}!sO!O!tO~O[!vOz^O~OW!qOX!qO{!yO|!qO~OW!tOX!tO}!yO!O!tO~O",
	goto: "%cxPPPPPPPPPPyyP!PP!VPP!`!jP!pyyyP!v!|#S$[$k$q$w$}%TPPPP%ZXWORYbXRORYb_t`qru!T!U!bQ!i!YS!p!e!fR!w!oQdRRybXSORYbQYORmYQ[PRn[Q_QQkVjp_krz!R!T!X!Z!^!`!f!j!oQr`QzcQ!RlQ!TqQ!XsQ!ZtQ!^{Q!`!QQ!f!YQ!j!]R!o!eQu`S!UqrU![u!U!bR!b!TQ!r!gR!x!rQ!u!hR!z!uQbRRxbQfTR|fQiUR!OiSXOYTaRb",
	nodeNames: "⚠ StartTag StartCloseTag MissingCloseTag StartCloseTag StartCloseTag Document Text EntityReference CharacterReference Cdata Element EndTag OpenTag TagName Attribute AttributeName Is AttributeValue CloseTag SelfCloseEndTag SelfClosingTag Comment ProcessingInst MismatchedCloseTag DoctypeDecl",
	maxTerm: 50,
	context: Oy,
	nodeProps: [
		[
			"closedBy",
			1,
			"SelfCloseEndTag EndTag",
			13,
			"CloseTag MissingCloseTag"
		],
		[
			"openedBy",
			12,
			"StartTag StartCloseTag",
			19,
			"OpenTag",
			20,
			"StartTag"
		],
		[
			"isolate",
			-6,
			13,
			18,
			19,
			21,
			22,
			24,
			""
		]
	],
	propSources: [Py],
	skippedNodes: [0],
	repeatNodeCount: 9,
	tokenData: "!)v~R!YOX$qXY)iYZ)iZ]$q]^)i^p$qpq)iqr$qrs*vsv$qvw+fwx/ix}$q}!O0[!O!P$q!P!Q2z!Q![$q![!]4n!]!^$q!^!_8U!_!`!#t!`!a!$l!a!b!%d!b!c$q!c!}4n!}#P$q#P#Q!'W#Q#R$q#R#S4n#S#T$q#T#o4n#o%W$q%W%o4n%o%p$q%p&a4n&a&b$q&b1p4n1p4U$q4U4d4n4d4e$q4e$IS4n$IS$I`$q$I`$Ib4n$Ib$Kh$q$Kh%#t4n%#t&/x$q&/x&Et4n&Et&FV$q&FV;'S4n;'S;:j8O;:j;=`)c<%l?&r$q?&r?Ah4n?Ah?BY$q?BY?Mn4n?MnO$qi$zXVP|W!O`Or$qrs%gsv$qwx'^x!^$q!^!_(o!_;'S$q;'S;=`)c<%lO$qa%nVVP!O`Ov%gwx&Tx!^%g!^!_&o!_;'S%g;'S;=`'W<%lO%gP&YTVPOv&Tw!^&T!_;'S&T;'S;=`&i<%lO&TP&lP;=`<%l&T`&tS!O`Ov&ox;'S&o;'S;=`'Q<%lO&o`'TP;=`<%l&oa'ZP;=`<%l%gX'eWVP|WOr'^rs&Tsv'^w!^'^!^!_'}!_;'S'^;'S;=`(i<%lO'^W(ST|WOr'}sv'}w;'S'};'S;=`(c<%lO'}W(fP;=`<%l'}X(lP;=`<%l'^h(vV|W!O`Or(ors&osv(owx'}x;'S(o;'S;=`)]<%lO(oh)`P;=`<%l(oi)fP;=`<%l$qo)t`VP|W!O`zUOX$qXY)iYZ)iZ]$q]^)i^p$qpq)iqr$qrs%gsv$qwx'^x!^$q!^!_(o!_;'S$q;'S;=`)c<%lO$qk+PV{YVP!O`Ov%gwx&Tx!^%g!^!_&o!_;'S%g;'S;=`'W<%lO%g~+iast,n![!]-r!c!}-r#R#S-r#T#o-r%W%o-r%p&a-r&b1p-r4U4d-r4e$IS-r$I`$Ib-r$Kh%#t-r&/x&Et-r&FV;'S-r;'S;:j/c?&r?Ah-r?BY?Mn-r~,qQ!Q![,w#l#m-V~,zQ!Q![,w!]!^-Q~-VOX~~-YR!Q![-c!c!i-c#T#Z-c~-fS!Q![-c!]!^-Q!c!i-c#T#Z-c~-ug}!O-r!O!P-r!Q![-r![!]-r!]!^/^!c!}-r#R#S-r#T#o-r$}%O-r%W%o-r%p&a-r&b1p-r1p4U-r4U4d-r4e$IS-r$I`$Ib-r$Je$Jg-r$Kh%#t-r&/x&Et-r&FV;'S-r;'S;:j/c?&r?Ah-r?BY?Mn-r~/cOW~~/fP;=`<%l-rk/rW}bVP|WOr'^rs&Tsv'^w!^'^!^!_'}!_;'S'^;'S;=`(i<%lO'^k0eZVP|W!O`Or$qrs%gsv$qwx'^x}$q}!O1W!O!^$q!^!_(o!_;'S$q;'S;=`)c<%lO$qk1aZVP|W!O`Or$qrs%gsv$qwx'^x!^$q!^!_(o!_!`$q!`!a2S!a;'S$q;'S;=`)c<%lO$qk2_X!PQVP|W!O`Or$qrs%gsv$qwx'^x!^$q!^!_(o!_;'S$q;'S;=`)c<%lO$qm3TZVP|W!O`Or$qrs%gsv$qwx'^x!^$q!^!_(o!_!`$q!`!a3v!a;'S$q;'S;=`)c<%lO$qm4RXdSVP|W!O`Or$qrs%gsv$qwx'^x!^$q!^!_(o!_;'S$q;'S;=`)c<%lO$qo4{!P`S^QVP|W!O`Or$qrs%gsv$qwx'^x}$q}!O4n!O!P4n!P!Q$q!Q![4n![!]4n!]!^$q!^!_(o!_!c$q!c!}4n!}#R$q#R#S4n#S#T$q#T#o4n#o$}$q$}%O4n%O%W$q%W%o4n%o%p$q%p&a4n&a&b$q&b1p4n1p4U4n4U4d4n4d4e$q4e$IS4n$IS$I`$q$I`$Ib4n$Ib$Je$q$Je$Jg4n$Jg$Kh$q$Kh%#t4n%#t&/x$q&/x&Et4n&Et&FV$q&FV;'S4n;'S;:j8O;:j;=`)c<%l?&r$q?&r?Ah4n?Ah?BY$q?BY?Mn4n?MnO$qo8RP;=`<%l4ni8]Y|W!O`Oq(oqr8{rs&osv(owx'}x!a(o!a!b!#U!b;'S(o;'S;=`)]<%lO(oi9S_|W!O`Or(ors&osv(owx'}x}(o}!O:R!O!f(o!f!g;e!g!}(o!}#ODh#O#W(o#W#XLp#X;'S(o;'S;=`)]<%lO(oi:YX|W!O`Or(ors&osv(owx'}x}(o}!O:u!O;'S(o;'S;=`)]<%lO(oi;OV!QP|W!O`Or(ors&osv(owx'}x;'S(o;'S;=`)]<%lO(oi;lX|W!O`Or(ors&osv(owx'}x!q(o!q!r<X!r;'S(o;'S;=`)]<%lO(oi<`X|W!O`Or(ors&osv(owx'}x!e(o!e!f<{!f;'S(o;'S;=`)]<%lO(oi=SX|W!O`Or(ors&osv(owx'}x!v(o!v!w=o!w;'S(o;'S;=`)]<%lO(oi=vX|W!O`Or(ors&osv(owx'}x!{(o!{!|>c!|;'S(o;'S;=`)]<%lO(oi>jX|W!O`Or(ors&osv(owx'}x!r(o!r!s?V!s;'S(o;'S;=`)]<%lO(oi?^X|W!O`Or(ors&osv(owx'}x!g(o!g!h?y!h;'S(o;'S;=`)]<%lO(oi@QY|W!O`Or?yrs@psv?yvwA[wxBdx!`?y!`!aCr!a;'S?y;'S;=`Db<%lO?ya@uV!O`Ov@pvxA[x!`@p!`!aAy!a;'S@p;'S;=`B^<%lO@pPA_TO!`A[!`!aAn!a;'SA[;'S;=`As<%lOA[PAsOiPPAvP;=`<%lA[aBQSiP!O`Ov&ox;'S&o;'S;=`'Q<%lO&oaBaP;=`<%l@pXBiX|WOrBdrsA[svBdvwA[w!`Bd!`!aCU!a;'SBd;'S;=`Cl<%lOBdXC]TiP|WOr'}sv'}w;'S'};'S;=`(c<%lO'}XCoP;=`<%lBdiC{ViP|W!O`Or(ors&osv(owx'}x;'S(o;'S;=`)]<%lO(oiDeP;=`<%l?yiDoZ|W!O`Or(ors&osv(owx'}x!e(o!e!fEb!f#V(o#V#WIr#W;'S(o;'S;=`)]<%lO(oiEiX|W!O`Or(ors&osv(owx'}x!f(o!f!gFU!g;'S(o;'S;=`)]<%lO(oiF]X|W!O`Or(ors&osv(owx'}x!c(o!c!dFx!d;'S(o;'S;=`)]<%lO(oiGPX|W!O`Or(ors&osv(owx'}x!v(o!v!wGl!w;'S(o;'S;=`)]<%lO(oiGsX|W!O`Or(ors&osv(owx'}x!c(o!c!dH`!d;'S(o;'S;=`)]<%lO(oiHgX|W!O`Or(ors&osv(owx'}x!}(o!}#OIS#O;'S(o;'S;=`)]<%lO(oiI]V|W!O`yPOr(ors&osv(owx'}x;'S(o;'S;=`)]<%lO(oiIyX|W!O`Or(ors&osv(owx'}x#W(o#W#XJf#X;'S(o;'S;=`)]<%lO(oiJmX|W!O`Or(ors&osv(owx'}x#T(o#T#UKY#U;'S(o;'S;=`)]<%lO(oiKaX|W!O`Or(ors&osv(owx'}x#h(o#h#iK|#i;'S(o;'S;=`)]<%lO(oiLTX|W!O`Or(ors&osv(owx'}x#T(o#T#UH`#U;'S(o;'S;=`)]<%lO(oiLwX|W!O`Or(ors&osv(owx'}x#c(o#c#dMd#d;'S(o;'S;=`)]<%lO(oiMkX|W!O`Or(ors&osv(owx'}x#V(o#V#WNW#W;'S(o;'S;=`)]<%lO(oiN_X|W!O`Or(ors&osv(owx'}x#h(o#h#iNz#i;'S(o;'S;=`)]<%lO(oi! RX|W!O`Or(ors&osv(owx'}x#m(o#m#n! n#n;'S(o;'S;=`)]<%lO(oi! uX|W!O`Or(ors&osv(owx'}x#d(o#d#e!!b#e;'S(o;'S;=`)]<%lO(oi!!iX|W!O`Or(ors&osv(owx'}x#X(o#X#Y?y#Y;'S(o;'S;=`)]<%lO(oi!#_V!SP|W!O`Or(ors&osv(owx'}x;'S(o;'S;=`)]<%lO(ok!$PXaQVP|W!O`Or$qrs%gsv$qwx'^x!^$q!^!_(o!_;'S$q;'S;=`)c<%lO$qo!$wX[UVP|W!O`Or$qrs%gsv$qwx'^x!^$q!^!_(o!_;'S$q;'S;=`)c<%lO$qk!%mZVP|W!O`Or$qrs%gsv$qwx'^x!^$q!^!_(o!_!`$q!`!a!&`!a;'S$q;'S;=`)c<%lO$qk!&kX!RQVP|W!O`Or$qrs%gsv$qwx'^x!^$q!^!_(o!_;'S$q;'S;=`)c<%lO$qk!'aZVP|W!O`Or$qrs%gsv$qwx'^x!^$q!^!_(o!_#P$q#P#Q!(S#Q;'S$q;'S;=`)c<%lO$qk!(]ZVP|W!O`Or$qrs%gsv$qwx'^x!^$q!^!_(o!_!`$q!`!a!)O!a;'S$q;'S;=`)c<%lO$qk!)ZXxQVP|W!O`Or$qrs%gsv$qwx'^x!^$q!^!_(o!_;'S$q;'S;=`)c<%lO$q",
	tokenizers: [
		ky,
		jy,
		My,
		Ny,
		0,
		1,
		2,
		3,
		4
	],
	topRules: { Document: [0, 6] },
	tokenPrec: 0
});
// node_modules/@codemirror/lang-xml/dist/index.js
function Iy(e, t) {
	let n = t && t.getChild("TagName");
	return n ? e.sliceString(n.from, n.to) : "";
}
function Ly(e, t) {
	let n = t && t.firstChild;
	return !n || n.name != "OpenTag" ? "" : Iy(e, n);
}
function Ry(e, t, n) {
	let r = t && t.getChildren("Attribute").find((e) => e.from <= n && e.to >= n), i = r && r.getChild("AttributeName");
	return i ? e.sliceString(i.from, i.to) : "";
}
function zy(e) {
	for (let t = e && e.parent; t; t = t.parent) if (t.name == "Element") return t;
	return null;
}
function By(e, t) {
	let n = $(e).resolveInner(t, -1), r = null;
	for (let e = n; !r && e.parent; e = e.parent) (e.name == "OpenTag" || e.name == "CloseTag" || e.name == "SelfClosingTag" || e.name == "MismatchedCloseTag") && (r = e);
	if (r && (r.to > t || r.lastChild.type.isError)) {
		let e = r.parent;
		if (n.name == "TagName") return r.name == "CloseTag" || r.name == "MismatchedCloseTag" ? {
			type: "closeTag",
			from: n.from,
			context: e
		} : {
			type: "openTag",
			from: n.from,
			context: zy(e)
		};
		if (n.name == "AttributeName") return {
			type: "attrName",
			from: n.from,
			context: r
		};
		if (n.name == "AttributeValue") return {
			type: "attrValue",
			from: n.from,
			context: r
		};
		let i = n == r || n.name == "Attribute" ? n.childBefore(t) : n;
		return i?.name == "StartTag" ? {
			type: "openTag",
			from: t,
			context: zy(e)
		} : i?.name == "StartCloseTag" && i.to <= t ? {
			type: "closeTag",
			from: t,
			context: e
		} : i?.name == "Is" ? {
			type: "attrValue",
			from: t,
			context: r
		} : i ? {
			type: "attrName",
			from: t,
			context: r
		} : null;
	}
	if (n.name == "StartCloseTag") return {
		type: "closeTag",
		from: t,
		context: n.parent
	};
	for (; n.parent && n.to == t && !n.lastChild?.type.isError;) n = n.parent;
	return n.name == "Element" || n.name == "Text" || n.name == "Document" ? {
		type: "tag",
		from: t,
		context: n.name == "Element" ? n : zy(n)
	} : null;
}
var Vy = class {
	constructor(e, t, n) {
		this.attrs = t, this.attrValues = n, this.children = [], this.name = e.name, this.completion = Object.assign(Object.assign({ type: "type" }, e.completion || {}), { label: this.name }), this.openCompletion = Object.assign(Object.assign({}, this.completion), { label: "<" + this.name }), this.closeCompletion = Object.assign(Object.assign({}, this.completion), {
			label: "</" + this.name + ">",
			boost: 2
		}), this.closeNameCompletion = Object.assign(Object.assign({}, this.completion), { label: this.name + ">" }), this.text = e.textContent ? e.textContent.map((e) => ({
			label: e,
			type: "text"
		})) : [];
	}
}, Hy = /^[:\-\.\w\u00b7-\uffff]*$/;
function Uy(e) {
	return Object.assign(Object.assign({ type: "property" }, e.completion || {}), { label: e.name });
}
function Wy(e) {
	return typeof e == "string" ? {
		label: `"${e}"`,
		type: "constant"
	} : /^"/.test(e.label) ? e : Object.assign(Object.assign({}, e), { label: `"${e.label}"` });
}
function Gy(e, t) {
	let n = [], r = [], i = Object.create(null);
	for (let e of t) {
		let t = Uy(e);
		n.push(t), e.global && r.push(t), e.values && (i[e.name] = e.values.map(Wy));
	}
	let a = [], o = [], s = Object.create(null);
	for (let t of e) {
		let e = r, c = i;
		t.attributes && (e = e.concat(t.attributes.map((e) => typeof e == "string" ? n.find((t) => t.label == e) || {
			label: e,
			type: "property"
		} : (e.values && (c == i && (c = Object.create(c)), c[e.name] = e.values.map(Wy)), Uy(e)))));
		let l = new Vy(t, e, c);
		s[l.name] = l, a.push(l), t.top && o.push(l);
	}
	o.length || (o = a);
	for (let t = 0; t < a.length; t++) {
		let n = e[t], r = a[t];
		if (n.children) for (let e of n.children) s[e] && r.children.push(s[e]);
		else r.children = a;
	}
	return (e) => {
		let { doc: t } = e.state, n = By(e.state, e.pos);
		if (!n || n.type == "tag" && !e.explicit) return null;
		let { type: c, from: l, context: u } = n;
		if (c == "openTag") {
			let e = o, n = Ly(t, u);
			return n && (e = s[n]?.children || a), {
				from: l,
				options: e.map((e) => e.completion),
				validFor: Hy
			};
		}
		if (c == "closeTag") {
			let n = Ly(t, u);
			return n ? {
				from: l,
				to: e.pos + +(t.sliceString(e.pos, e.pos + 1) == ">"),
				options: [s[n]?.closeNameCompletion || {
					label: n + ">",
					type: "type"
				}],
				validFor: Hy
			} : null;
		}
		if (c == "attrName") return {
			from: l,
			options: s[Iy(t, u)]?.attrs || r,
			validFor: Hy
		};
		if (c == "attrValue") {
			let n = Ry(t, u, l);
			if (!n) return null;
			let r = (s[Iy(t, u)]?.attrValues || i)[n];
			return !r || !r.length ? null : {
				from: l,
				to: e.pos + +(t.sliceString(e.pos, e.pos + 1) == "\""),
				options: r,
				validFor: /^"[^"]*"?$/
			};
		}
		if (c == "tag") {
			let n = Ly(t, u), r = s[n], i = [], c = u && u.lastChild;
			n && (!c || c.name != "CloseTag" || Iy(t, c) != n) && i.push(r ? r.closeCompletion : {
				label: "</" + n + ">",
				type: "type",
				boost: 2
			});
			let d = i.concat((r?.children || (u ? a : o)).map((e) => e.openCompletion));
			if (u && r?.text.length) {
				let t = u.firstChild;
				t.to > e.pos - 20 && !/\S/.test(e.state.sliceDoc(t.to, e.pos)) && (d = d.concat(r.text));
			}
			return {
				from: l,
				options: d,
				validFor: /^<\/?[:\-\.\w\u00b7-\uffff]*$/
			};
		}
		return null;
	};
}
var Ky = /*@__PURE__*/ wd.define({
	name: "xml",
	parser: /*@__PURE__*/ Fy.configure({ props: [
		/*@__PURE__*/ Vd.add({
			Element(e) {
				let t = /^\s*<\//.test(e.textAfter);
				return e.lineIndent(e.node.from) + (t ? 0 : e.unit);
			},
			"OpenTag CloseTag SelfClosingTag"(e) {
				return e.column(e.node.from) + e.unit;
			}
		}),
		/*@__PURE__*/ ef.add({ Element(e) {
			let t = e.firstChild, n = e.lastChild;
			return !t || t.name != "OpenTag" ? null : {
				from: t.to,
				to: n.name == "CloseTag" ? n.from : e.to
			};
		} }),
		/*@__PURE__*/ Kf.add({ "OpenTag CloseTag": (e) => e.getChild("TagName") })
	] }),
	languageData: {
		commentTokens: { block: {
			open: "<!--",
			close: "-->"
		} },
		indentOnInput: /^\s*<\/$/
	}
});
function qy(e = {}) {
	let t = [Ky.data.of({ autocomplete: Gy(e.elements || [], e.attributes || []) })];
	return e.autoCloseTags !== !1 && t.push(Yy), new Pd(Ky, t);
}
function Jy(e, t, n = e.length) {
	if (!t) return "";
	let r = t.firstChild, i = r && r.getChild("TagName");
	return i ? e.sliceString(i.from, Math.min(i.to, n)) : "";
}
var Yy = /*@__PURE__*/ J.inputHandler.of((e, t, n, r, i) => {
	if (e.composing || e.state.readOnly || t != n || r != ">" && r != "/" || !Ky.isActiveAt(e.state, t, -1)) return !1;
	let a = i(), { state: o } = a, s = o.changeByRange((e) => {
		let { head: t } = e, n = o.doc.sliceString(t - 1, t) == r, i = $(o).resolveInner(t, -1), a;
		if (n && r == ">" && i.name == "EndTag") {
			let n = i.parent;
			if (n.parent?.lastChild?.name != "CloseTag" && (a = Jy(o.doc, n.parent, t))) return {
				range: e,
				changes: {
					from: t,
					to: t + +(o.doc.sliceString(t, t + 1) === ">"),
					insert: `</${a}>`
				}
			};
		} else if (n && r == "/" && i.name == "StartCloseTag") {
			let e = i.parent;
			if (i.from == t - 2 && e.lastChild?.name != "CloseTag" && (a = Jy(o.doc, e, t))) {
				let e = t + +(o.doc.sliceString(t, t + 1) === ">"), n = `${a}>`;
				return {
					range: N.cursor(t + n.length, -1),
					changes: {
						from: t,
						to: e,
						insert: n
					}
				};
			}
		}
		return { range: e };
	});
	return !s.changes.empty && (e.dispatch([a, o.update(s, {
		userEvent: "input.complete",
		scrollIntoView: !0
	})]), !0);
}), Xy = (e) => e?.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
// node_modules/lucide-react/dist/esm/shared/src/utils/toLucideIconData.mjs
function Zy(e, t, n = []) {
	if (t == null) throw Error("[lucide]: iconNode is required when icon name is used");
	return {
		name: Xy(e),
		size: 24,
		node: t,
		...n.length > 0 ? { aliases: n } : {}
	};
}
// node_modules/lucide-react/dist/esm/shared/src/utils/toCamelCase.mjs
var Qy = (e) => {
	let t = "", n = !1;
	for (let r of e) r === "-" || r === "_" || r <= " " ? n = t.length > 0 : (t.length === 0 ? t += r.toLowerCase() : t += n ? r.toUpperCase() : r, n = !1);
	return t;
}, $y = (e) => {
	let t = Qy(e);
	return t.charAt(0).toUpperCase() + t.slice(1);
}, eb = (...e) => e.filter((e, t, n) => !!e && e.trim() !== "" && n.indexOf(e) === t).join(" ").trim(), tb = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": 2,
	"stroke-linecap": "round",
	"stroke-linejoin": "round"
};
// node_modules/lucide-react/dist/esm/shared/src/build/buildLucideIconNode.mjs
function nb(e) {
	return e != null;
}
function rb(e, t = {}) {
	let n = t.attributeNames ?? {}, r = (e) => n[e] ?? e, i = e.size ?? e.width ?? tb.width, a = e.size ?? e.height ?? tb.height, o = e.aliases?.filter((e) => typeof e == "string" && e.trim() !== "").map((e) => `lucide-${e}`) ?? [], s = [...e.name ? [`lucide-${e.name}`] : [], ...o], c = t.className?.split(" ").filter(Boolean) ?? [], l = t.includeDefaultClasses === !1 ? eb(...c) : eb("lucide", ...s, ...c), u = t.absoluteStrokeWidth ? Number(t.strokeWidth ?? tb["stroke-width"]) * Number(e.size ?? e.width ?? tb.width) / Number(t.size ?? t.width ?? tb.width) : t.strokeWidth ?? tb["stroke-width"];
	return [
		"svg",
		{
			...Object.entries(tb).reduce((e, [t, n]) => (e[r(t)] = n, e), {}),
			..."color" in t && t.color && { [r("stroke")]: t.color },
			..."size" in t && nb(t.size) && {
				[r("width")]: t.size,
				[r("height")]: t.size
			},
			..."width" in t && nb(t.width) && { [r("width")]: t.width },
			..."height" in t && nb(t.height) && { [r("height")]: t.height },
			[r("stroke-width")]: u,
			...l && { [r("class")]: l },
			[r("viewBox")]: `0 0 ${i} ${a}`,
			...t.hasA11yProp === !1 ? { [r("aria-hidden")]: "true" } : {},
			..."attributes" in t && t.attributes
		},
		e.node.map((e) => {
			let [n, i, a] = e, o = t.nonScalingStroke ? {
				[r("vector-effect")]: "non-scaling-stroke",
				...i
			} : i;
			return a ? [
				n,
				o,
				a
			] : [n, o];
		})
	];
}
// node_modules/lucide-react/dist/esm/shared/src/build/buildLucideIconForReact.mjs
function ib(e, t = {}) {
	return rb(e, {
		...t,
		attributeNames: {
			...t.attributeNames,
			class: "className",
			"stroke-width": "strokeWidth",
			"stroke-linecap": "strokeLinecap",
			"stroke-linejoin": "strokeLinejoin",
			"vector-effect": "vectorEffect"
		}
	});
}
// node_modules/lucide-react/dist/esm/shared/src/utils/hasA11yProp.mjs
var ab = (e) => {
	for (let t in e) if (t.startsWith("aria-") || t === "role" || t === "title") return !0;
	return !1;
}, ob = e({}), sb = () => i(ob), cb = n(({ color: e, size: n, width: r, height: i, strokeWidth: a, absoluteStrokeWidth: o, nonScalingStroke: s, className: c = "", children: l, iconNode: u = [], icon: d = {
	node: u,
	aliases: [],
	size: 24
}, ...f }, p) => {
	let { size: m = 24, strokeWidth: h = 2, absoluteStrokeWidth: g = !1, nonScalingStroke: _ = !1, color: v = "currentColor", className: y = "" } = sb() ?? {}, ee = !!l || ab(f), [b, x, S = []] = ib(d, {
		color: e ?? v,
		width: r ?? n ?? m,
		height: i ?? n ?? m,
		strokeWidth: a ?? h,
		absoluteStrokeWidth: o ?? g,
		nonScalingStroke: s ?? _,
		className: eb(y, c),
		hasA11yProp: ee,
		attributes: f
	});
	return t(b, {
		ref: p,
		...x
	}, [...S.map(([e, n]) => t(e, n)), ...Array.isArray(l) ? l : [l]]);
});
// node_modules/lucide-react/dist/esm/createLucideIcon.mjs
function lb(e, r = [], i = []) {
	let a = typeof e == "string" ? Zy(e, r, i) : e, o = n(({ className: e, ...n }, r) => t(cb, {
		ref: r,
		icon: a,
		className: e,
		...n
	}));
	return a.name && (o.displayName = $y(a.name)), o;
}
// node_modules/lucide-react/dist/esm/icons/box.mjs
var ub = {
	name: "box",
	size: 24,
	node: [
		["path", {
			d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",
			key: "hh9hay"
		}],
		["path", {
			d: "m3.3 7 8.7 5 8.7-5",
			key: "g66t2b"
		}],
		["path", {
			d: "M12 22V12",
			key: "d0xqtd"
		}]
	]
};
ub.node;
var db = lb(ub), fb = {
	name: "download",
	size: 24,
	node: [
		["path", {
			d: "M12 15V3",
			key: "m9g1x1"
		}],
		["path", {
			d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
			key: "ih7n3h"
		}],
		["path", {
			d: "m7 10 5 5 5-5",
			key: "brsn70"
		}]
	]
};
fb.node;
var pb = lb(fb), mb = {
	name: "eye-off",
	size: 24,
	node: [
		["path", {
			d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
			key: "ct8e1f"
		}],
		["path", {
			d: "M14.084 14.158a3 3 0 0 1-4.242-4.242",
			key: "151rxh"
		}],
		["path", {
			d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
			key: "13bj9a"
		}],
		["path", {
			d: "m2 2 20 20",
			key: "1ooewy"
		}]
	]
};
mb.node;
var hb = lb(mb), gb = {
	name: "file-code-corner",
	size: 24,
	node: [
		["path", {
			d: "M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35",
			key: "1wthlu"
		}],
		["path", {
			d: "M14 2v5a1 1 0 0 0 1 1h5",
			key: "wfsgrz"
		}],
		["path", {
			d: "m5 16-3 3 3 3",
			key: "331omg"
		}],
		["path", {
			d: "m9 22 3-3-3-3",
			key: "lsp7cz"
		}]
	],
	aliases: ["file-code-2"]
};
gb.node;
var _b = lb(gb), vb = {
	name: "file-up",
	size: 24,
	node: [
		["path", {
			d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
			key: "1oefj6"
		}],
		["path", {
			d: "M14 2v5a1 1 0 0 0 1 1h5",
			key: "wfsgrz"
		}],
		["path", {
			d: "M12 12v6",
			key: "3ahymv"
		}],
		["path", {
			d: "m15 15-3-3-3 3",
			key: "15xj92"
		}]
	]
};
vb.node;
var yb = lb(vb), bb = {
	name: "folder-open",
	size: 24,
	node: [["path", {
		d: "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",
		key: "usdka0"
	}]]
};
bb.node;
var xb = lb(bb), Sb = {
	name: "grid-3x3",
	size: 24,
	node: [
		["rect", {
			width: "18",
			height: "18",
			x: "3",
			y: "3",
			rx: "2",
			key: "afitv7"
		}],
		["path", {
			d: "M3 9h18",
			key: "1pudct"
		}],
		["path", {
			d: "M3 15h18",
			key: "5xshup"
		}],
		["path", {
			d: "M9 3v18",
			key: "fh3hqa"
		}],
		["path", {
			d: "M15 3v18",
			key: "14nvp0"
		}]
	],
	aliases: ["grid", "grid-3-x-3"]
};
Sb.node;
var Cb = lb(Sb), wb = {
	name: "lightbulb",
	size: 24,
	node: [
		["path", {
			d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
			key: "1gvzjb"
		}],
		["path", {
			d: "M9 18h6",
			key: "x1upvd"
		}],
		["path", {
			d: "M10 22h4",
			key: "ceow96"
		}]
	]
};
wb.node;
var Tb = lb(wb), Eb = {
	name: "maximize",
	size: 24,
	node: [
		["path", {
			d: "M8 3H5a2 2 0 0 0-2 2v3",
			key: "1dcmit"
		}],
		["path", {
			d: "M21 8V5a2 2 0 0 0-2-2h-3",
			key: "1e4gt3"
		}],
		["path", {
			d: "M3 16v3a2 2 0 0 0 2 2h3",
			key: "wsl5sc"
		}],
		["path", {
			d: "M16 21h3a2 2 0 0 0 2-2v-3",
			key: "18trek"
		}]
	]
};
Eb.node;
var Db = lb(Eb), Ob = {
	name: "redo-2",
	size: 24,
	node: [["path", {
		d: "m15 14 5-5-5-5",
		key: "12vg1m"
	}], ["path", {
		d: "M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13",
		key: "6uklza"
	}]]
};
Ob.node;
var kb = lb(Ob), Ab = {
	name: "refresh-ccw",
	size: 24,
	node: [
		["path", {
			d: "M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
			key: "14sxne"
		}],
		["path", {
			d: "M3 3v5h5",
			key: "1xhq8a"
		}],
		["path", {
			d: "M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",
			key: "1hlbsb"
		}],
		["path", {
			d: "M16 16h5v5",
			key: "ccwih5"
		}]
	]
};
Ab.node;
var jb = lb(Ab), Mb = {
	name: "rotate-ccw",
	size: 24,
	node: [["path", {
		d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
		key: "1357e3"
	}], ["path", {
		d: "M3 3v5h5",
		key: "1xhq8a"
	}]]
};
Mb.node;
var Nb = lb(Mb), Pb = {
	name: "search",
	size: 24,
	node: [["path", {
		d: "m21 21-4.34-4.34",
		key: "14j7rj"
	}], ["circle", {
		cx: "11",
		cy: "11",
		r: "8",
		key: "4ej97u"
	}]]
};
Pb.node;
var Fb = lb(Pb), Ib = {
	name: "trash",
	size: 24,
	node: [
		["path", {
			d: "M10 11v6",
			key: "nco0om"
		}],
		["path", {
			d: "M14 11v6",
			key: "outv1u"
		}],
		["path", {
			d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",
			key: "miytrc"
		}],
		["path", {
			d: "M3 6h18",
			key: "d0wm0j"
		}],
		["path", {
			d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
			key: "e791ji"
		}]
	],
	aliases: ["trash-2"]
};
Ib.node;
var Lb = lb(Ib), Rb = {
	name: "undo-2",
	size: 24,
	node: [["path", {
		d: "M9 14 4 9l5-5",
		key: "102s5s"
	}], ["path", {
		d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",
		key: "f3b9sd"
	}]]
};
Rb.node;
var zb = lb(Rb), Bb = class extends re {
	constructor(e) {
		super(e);
	}
	parse(e) {
		function t(e) {
			switch (e.image_type) {
				case d:
				case m:
					if (e.colormap_length > 256 || e.colormap_size !== 24 || e.colormap_type !== 1) throw Error("THREE.TGALoader: Invalid type colormap data for indexed type.");
					break;
				case f:
				case p:
				case h:
				case g:
					if (e.colormap_type) throw Error("THREE.TGALoader: Invalid type colormap data for colormap type.");
					break;
				case u: throw Error("THREE.TGALoader: No data.");
				default: throw Error("THREE.TGALoader: Invalid type " + e.image_type);
			}
			if (e.width <= 0 || e.height <= 0) throw Error("THREE.TGALoader: Invalid image size.");
			if (e.pixel_size !== 8 && e.pixel_size !== 16 && e.pixel_size !== 24 && e.pixel_size !== 32) throw Error("THREE.TGALoader: Invalid pixel size " + e.pixel_size);
		}
		function n(e, t, n, r, i) {
			let a, o, s = n.pixel_size >> 3, c = n.width * n.height * s;
			if (t && (o = i.subarray(r, r += n.colormap_length * (n.colormap_size >> 3))), e) {
				a = new Uint8Array(c);
				let e, t, n, o = 0, l = new Uint8Array(s);
				for (; o < c;) if (e = i[r++], t = (e & 127) + 1, e & 128) {
					for (n = 0; n < s; ++n) l[n] = i[r++];
					for (n = 0; n < t; ++n) a.set(l, o + n * s);
					o += s * t;
				} else {
					for (t *= s, n = 0; n < t; ++n) a[o + n] = i[r++];
					o += t;
				}
			} else a = i.subarray(r, r += t ? n.width * n.height : c);
			return {
				pixel_data: a,
				palettes: o
			};
		}
		function r(e, t, n, r, i, a, o, s, c) {
			let l = c, u, d = 0, f, p, m = w.width;
			for (p = t; p !== r; p += n) for (f = i; f !== o; f += a, d++) u = s[d], e[(f + m * p) * 4 + 3] = 255, e[(f + m * p) * 4 + 2] = l[u * 3 + 0], e[(f + m * p) * 4 + 1] = l[u * 3 + 1], e[(f + m * p) * 4 + 0] = l[u * 3 + 2];
			return e;
		}
		function i(e, t, n, r, i, a, o, s) {
			let c, l = 0, u, d, f = w.width;
			for (d = t; d !== r; d += n) for (u = i; u !== o; u += a, l += 2) c = s[l + 0] + (s[l + 1] << 8), e[(u + f * d) * 4 + 0] = (c & 31744) >> 7, e[(u + f * d) * 4 + 1] = (c & 992) >> 2, e[(u + f * d) * 4 + 2] = (c & 31) << 3, e[(u + f * d) * 4 + 3] = c & 32768 ? 0 : 255;
			return e;
		}
		function a(e, t, n, r, i, a, o, s) {
			let c = 0, l, u, d = w.width;
			for (u = t; u !== r; u += n) for (l = i; l !== o; l += a, c += 3) e[(l + d * u) * 4 + 3] = 255, e[(l + d * u) * 4 + 2] = s[c + 0], e[(l + d * u) * 4 + 1] = s[c + 1], e[(l + d * u) * 4 + 0] = s[c + 2];
			return e;
		}
		function o(e, t, n, r, i, a, o, s) {
			let c = 0, l, u, d = w.width;
			for (u = t; u !== r; u += n) for (l = i; l !== o; l += a, c += 4) e[(l + d * u) * 4 + 2] = s[c + 0], e[(l + d * u) * 4 + 1] = s[c + 1], e[(l + d * u) * 4 + 0] = s[c + 2], e[(l + d * u) * 4 + 3] = s[c + 3];
			return e;
		}
		function s(e, t, n, r, i, a, o, s) {
			let c, l = 0, u, d, f = w.width;
			for (d = t; d !== r; d += n) for (u = i; u !== o; u += a, l++) c = s[l], e[(u + f * d) * 4 + 0] = c, e[(u + f * d) * 4 + 1] = c, e[(u + f * d) * 4 + 2] = c, e[(u + f * d) * 4 + 3] = 255;
			return e;
		}
		function c(e, t, n, r, i, a, o, s) {
			let c = 0, l, u, d = w.width;
			for (u = t; u !== r; u += n) for (l = i; l !== o; l += a, c += 2) e[(l + d * u) * 4 + 0] = s[c + 0], e[(l + d * u) * 4 + 1] = s[c + 0], e[(l + d * u) * 4 + 2] = s[c + 0], e[(l + d * u) * 4 + 3] = s[c + 1];
			return e;
		}
		function l(e, t, n, l, u) {
			let d, f, p, m, h, g;
			switch ((w.flags & _) >> v) {
				default:
				case b:
					d = 0, p = 1, h = t, f = 0, m = 1, g = n;
					break;
				case y:
					d = 0, p = 1, h = t, f = n - 1, m = -1, g = -1;
					break;
				case x:
					d = t - 1, p = -1, h = -1, f = 0, m = 1, g = n;
					break;
				case ee: d = t - 1, p = -1, h = -1, f = n - 1, m = -1, g = -1;
			}
			if (E) switch (w.pixel_size) {
				case 8:
					s(e, f, m, g, d, p, h, l);
					break;
				case 16:
					c(e, f, m, g, d, p, h, l);
					break;
				default: throw Error("THREE.TGALoader: Format not supported.");
			}
			else switch (w.pixel_size) {
				case 8:
					r(e, f, m, g, d, p, h, l, u);
					break;
				case 16:
					i(e, f, m, g, d, p, h, l);
					break;
				case 24:
					a(e, f, m, g, d, p, h, l);
					break;
				case 32:
					o(e, f, m, g, d, p, h, l);
					break;
				default: throw Error("THREE.TGALoader: Format not supported.");
			}
			return e;
		}
		let u = 0, d = 1, f = 2, p = 3, m = 9, h = 10, g = 11, _ = 48, v = 4, y = 0, ee = 1, b = 2, x = 3;
		if (e.length < 19) throw Error("THREE.TGALoader: Not enough data to contain header.");
		let S = 0, C = new Uint8Array(e), w = {
			id_length: C[S++],
			colormap_type: C[S++],
			image_type: C[S++],
			colormap_index: C[S++] | C[S++] << 8,
			colormap_length: C[S++] | C[S++] << 8,
			colormap_size: C[S++],
			origin: [C[S++] | C[S++] << 8, C[S++] | C[S++] << 8],
			width: C[S++] | C[S++] << 8,
			height: C[S++] | C[S++] << 8,
			pixel_size: C[S++],
			flags: C[S++]
		};
		if (t(w), w.id_length + S > e.length) throw Error("THREE.TGALoader: No data.");
		S += w.id_length;
		let te = !1, T = !1, E = !1;
		switch (w.image_type) {
			case 9:
				te = !0, T = !0;
				break;
			case 1:
				T = !0;
				break;
			case 10:
				te = !0;
				break;
			case 2: break;
			case 11:
				te = !0, E = !0;
				break;
			case 3: E = !0;
		}
		let ne = new Uint8Array(w.width * w.height * 4), re = n(te, T, w, S, C);
		return l(ne, w.width, w.height, re.pixel_data, re.palettes), {
			data: ne,
			width: w.width,
			height: w.height,
			flipY: !0,
			generateMipmaps: !0,
			minFilter: he
		};
	}
};
// node_modules/three/examples/jsm/loaders/collada/ColladaParser.js
function Vb(e, t) {
	let n = [], r = e.childNodes;
	for (let e = 0, i = r.length; e < i; e++) {
		let i = r[e];
		i.nodeName === t && n.push(i);
	}
	return n;
}
function Hb(e) {
	return e.length === 0 ? [] : e.trim().split(/\s+/);
}
function Ub(e) {
	return e.length === 0 ? [] : e.trim().split(/\s+/).map(parseFloat);
}
function Wb(e) {
	return e.length === 0 ? [] : e.trim().split(/\s+/).map((e) => parseInt(e));
}
function Gb(e) {
	return e.substring(1);
}
var Kb = class {
	constructor() {
		this.count = 0;
	}
	generateId() {
		return "three_default_" + this.count++;
	}
	parse(e) {
		if (e.length === 0) return null;
		let t = new DOMParser().parseFromString(e, "application/xml"), n = Vb(t, "COLLADA")[0], r = t.getElementsByTagName("parsererror")[0];
		if (r !== void 0) {
			let e = Vb(r, "div")[0], t;
			return t = e ? e.textContent : this.parserErrorToText(r), console.error("THREE.ColladaLoader: Failed to parse collada file.\n", t), null;
		}
		let i = n.getAttribute("version");
		console.debug("THREE.ColladaLoader: File version", i);
		let a = this.parseAsset(Vb(n, "asset")[0]), o = {
			animations: {},
			clips: {},
			controllers: {},
			images: {},
			effects: {},
			materials: {},
			cameras: {},
			lights: {},
			geometries: {},
			nodes: {},
			visualScenes: {},
			kinematicsModels: {},
			physicsModels: {},
			kinematicsScenes: {},
			joints: {}
		};
		return this.library = o, this.collada = n, this.parseLibrary(n, "library_animations", "animation", this.parseAnimation.bind(this)), this.parseLibrary(n, "library_animation_clips", "animation_clip", this.parseAnimationClip.bind(this)), this.parseLibrary(n, "library_controllers", "controller", this.parseController.bind(this)), this.parseLibrary(n, "library_images", "image", this.parseImage.bind(this)), this.parseLibrary(n, "library_effects", "effect", this.parseEffect.bind(this)), this.parseLibrary(n, "library_materials", "material", this.parseMaterial.bind(this)), this.parseLibrary(n, "library_cameras", "camera", this.parseCamera.bind(this)), this.parseLibrary(n, "library_lights", "light", this.parseLight.bind(this)), this.parseLibrary(n, "library_geometries", "geometry", this.parseGeometry.bind(this)), this.parseLibrary(n, "library_nodes", "node", this.parseNode.bind(this)), this.parseLibrary(n, "library_visual_scenes", "visual_scene", this.parseVisualScene.bind(this)), this.parseLibrary(n, "library_joints", "joint", this.parseLibraryJoint.bind(this)), this.parseLibrary(n, "library_kinematics_models", "kinematics_model", this.parseKinematicsModel.bind(this)), this.parseLibrary(n, "library_physics_models", "physics_model", this.parsePhysicsModel.bind(this)), this.parseLibrary(n, "scene", "instance_kinematics_scene", this.parseKinematicsScene.bind(this)), {
			library: o,
			asset: a,
			collada: n
		};
	}
	parserErrorToText(e) {
		let t = [], n = [e];
		for (; n.length;) {
			let e = n.shift();
			e.nodeType === Node.TEXT_NODE ? t.push(e.textContent) : (t.push("\n"), n.push(...e.childNodes));
		}
		return t.join("").trim();
	}
	parseAsset(e) {
		return {
			unit: this.parseAssetUnit(Vb(e, "unit")[0]),
			upAxis: this.parseAssetUpAxis(Vb(e, "up_axis")[0])
		};
	}
	parseAssetUnit(e) {
		return e !== void 0 && e.hasAttribute("meter") === !0 ? parseFloat(e.getAttribute("meter")) : 1;
	}
	parseAssetUpAxis(e) {
		return e === void 0 ? "Y_UP" : e.textContent;
	}
	parseLibrary(e, t, n, r) {
		let i = Vb(e, t)[0];
		if (i !== void 0) {
			let e = Vb(i, n);
			for (let t = 0; t < e.length; t++) r(e[t]);
		}
	}
	parseAnimation(e) {
		let t = {
			sources: {},
			samplers: {},
			channels: {}
		}, n = !1;
		for (let r = 0, i = e.childNodes.length; r < i; r++) {
			let i = e.childNodes[r];
			if (i.nodeType !== 1) continue;
			let a;
			switch (i.nodeName) {
				case "source":
					a = i.getAttribute("id"), t.sources[a] = this.parseSource(i);
					break;
				case "sampler":
					a = i.getAttribute("id"), t.samplers[a] = this.parseAnimationSampler(i);
					break;
				case "channel":
					a = i.getAttribute("target"), t.channels[a] = this.parseAnimationChannel(i);
					break;
				case "animation": this.parseAnimation(i), n = !0;
			}
		}
		n === !1 && (this.library.animations[e.getAttribute("id") || ye.generateUUID()] = t);
	}
	parseAnimationSampler(e) {
		let t = { inputs: {} };
		for (let n = 0, r = e.childNodes.length; n < r; n++) {
			let r = e.childNodes[n];
			if (r.nodeType === 1 && r.nodeName === "input") {
				let e = Gb(r.getAttribute("source")), n = r.getAttribute("semantic");
				t.inputs[n] = e;
			}
		}
		return t;
	}
	parseAnimationChannel(e) {
		let t = {}, n = e.getAttribute("target").split("/"), r = n.shift(), i = n.shift(), a = i.indexOf("(") !== -1, o = i.indexOf(".") !== -1;
		if (o) n = i.split("."), i = n.shift(), t.member = n.shift();
		else if (a) {
			let e = i.split("(");
			i = e.shift();
			for (let t = 0; t < e.length; t++) e[t] = parseInt(e[t].replace(/\)/, ""));
			t.indices = e;
		}
		return t.id = r, t.sid = i, t.arraySyntax = a, t.memberSyntax = o, t.sampler = Gb(e.getAttribute("source")), t;
	}
	parseAnimationClip(e) {
		let t = {
			name: e.getAttribute("id") || "default",
			start: parseFloat(e.getAttribute("start") || 0),
			end: parseFloat(e.getAttribute("end") || 0),
			animations: []
		};
		for (let n = 0, r = e.childNodes.length; n < r; n++) {
			let r = e.childNodes[n];
			r.nodeType === 1 && r.nodeName === "instance_animation" && t.animations.push(Gb(r.getAttribute("url")));
		}
		this.library.clips[e.getAttribute("id")] = t;
	}
	parseController(e) {
		let t = {};
		for (let n = 0, r = e.childNodes.length; n < r; n++) {
			let r = e.childNodes[n];
			if (r.nodeType === 1) switch (r.nodeName) {
				case "skin":
					t.id = Gb(r.getAttribute("source")), t.skin = this.parseSkin(r);
					break;
				case "morph": t.id = Gb(r.getAttribute("source")), console.warn("THREE.ColladaLoader: Morph target animation not supported yet.");
			}
		}
		this.library.controllers[e.getAttribute("id")] = t;
	}
	parseSkin(e) {
		let t = { sources: {} };
		for (let n = 0, r = e.childNodes.length; n < r; n++) {
			let r = e.childNodes[n];
			if (r.nodeType === 1) switch (r.nodeName) {
				case "bind_shape_matrix":
					t.bindShapeMatrix = Ub(r.textContent);
					break;
				case "source":
					let e = r.getAttribute("id");
					t.sources[e] = this.parseSource(r);
					break;
				case "joints":
					t.joints = this.parseJoints(r);
					break;
				case "vertex_weights": t.vertexWeights = this.parseVertexWeights(r);
			}
		}
		return t;
	}
	parseJoints(e) {
		let t = { inputs: {} };
		for (let n = 0, r = e.childNodes.length; n < r; n++) {
			let r = e.childNodes[n];
			if (r.nodeType === 1 && r.nodeName === "input") {
				let e = r.getAttribute("semantic"), n = Gb(r.getAttribute("source"));
				t.inputs[e] = n;
			}
		}
		return t;
	}
	parseVertexWeights(e) {
		let t = { inputs: {} };
		for (let n = 0, r = e.childNodes.length; n < r; n++) {
			let r = e.childNodes[n];
			if (r.nodeType === 1) switch (r.nodeName) {
				case "input":
					let e = r.getAttribute("semantic"), n = Gb(r.getAttribute("source")), i = parseInt(r.getAttribute("offset"));
					t.inputs[e] = {
						id: n,
						offset: i
					};
					break;
				case "vcount":
					t.vcount = Wb(r.textContent);
					break;
				case "v": t.v = Wb(r.textContent);
			}
		}
		return t;
	}
	parseImage(e) {
		let t = { init_from: Vb(e, "init_from")[0].textContent };
		this.library.images[e.getAttribute("id")] = t;
	}
	parseEffect(e) {
		let t = {};
		for (let n = 0, r = e.childNodes.length; n < r; n++) {
			let r = e.childNodes[n];
			r.nodeType === 1 && r.nodeName === "profile_COMMON" && (t.profile = this.parseEffectProfileCOMMON(r));
		}
		this.library.effects[e.getAttribute("id")] = t;
	}
	parseEffectProfileCOMMON(e) {
		let t = {
			surfaces: {},
			samplers: {}
		};
		for (let n = 0, r = e.childNodes.length; n < r; n++) {
			let r = e.childNodes[n];
			if (r.nodeType === 1) switch (r.nodeName) {
				case "newparam":
					this.parseEffectNewparam(r, t);
					break;
				case "technique":
					t.technique = this.parseEffectTechnique(r);
					break;
				case "extra": t.extra = this.parseEffectExtra(r);
			}
		}
		return t;
	}
	parseEffectNewparam(e, t) {
		let n = e.getAttribute("sid");
		for (let r = 0, i = e.childNodes.length; r < i; r++) {
			let i = e.childNodes[r];
			if (i.nodeType === 1) switch (i.nodeName) {
				case "surface":
					t.surfaces[n] = this.parseEffectSurface(i);
					break;
				case "sampler2D": t.samplers[n] = this.parseEffectSampler(i);
			}
		}
	}
	parseEffectSurface(e) {
		let t = {};
		for (let n = 0, r = e.childNodes.length; n < r; n++) {
			let r = e.childNodes[n];
			r.nodeType === 1 && r.nodeName === "init_from" && (t.init_from = r.textContent);
		}
		return t;
	}
	parseEffectSampler(e) {
		let t = {};
		for (let n = 0, r = e.childNodes.length; n < r; n++) {
			let r = e.childNodes[n];
			r.nodeType === 1 && r.nodeName === "source" && (t.source = r.textContent);
		}
		return t;
	}
	parseEffectTechnique(e) {
		let t = {};
		for (let n = 0, r = e.childNodes.length; n < r; n++) {
			let r = e.childNodes[n];
			if (r.nodeType === 1) switch (r.nodeName) {
				case "constant":
				case "lambert":
				case "blinn":
				case "phong":
					t.type = r.nodeName, t.parameters = this.parseEffectParameters(r);
					break;
				case "extra": t.extra = this.parseEffectExtra(r);
			}
		}
		return t;
	}
	parseEffectParameters(e) {
		let t = {};
		for (let n = 0, r = e.childNodes.length; n < r; n++) {
			let r = e.childNodes[n];
			if (r.nodeType === 1) switch (r.nodeName) {
				case "emission":
				case "diffuse":
				case "specular":
				case "bump":
				case "ambient":
				case "shininess":
				case "transparency":
					t[r.nodeName] = this.parseEffectParameter(r);
					break;
				case "transparent": t[r.nodeName] = {
					opaque: r.hasAttribute("opaque") ? r.getAttribute("opaque") : "A_ONE",
					data: this.parseEffectParameter(r)
				};
			}
		}
		return t;
	}
	parseEffectParameter(e) {
		let t = {};
		for (let n = 0, r = e.childNodes.length; n < r; n++) {
			let r = e.childNodes[n];
			if (r.nodeType === 1) switch (r.nodeName) {
				case "color":
					t[r.nodeName] = Ub(r.textContent);
					break;
				case "float":
					t[r.nodeName] = parseFloat(r.textContent);
					break;
				case "texture": t[r.nodeName] = {
					id: r.getAttribute("texture"),
					extra: this.parseEffectParameterTexture(r)
				};
			}
		}
		return t;
	}
	parseEffectParameterTexture(e) {
		let t = { technique: {} };
		for (let n = 0, r = e.childNodes.length; n < r; n++) {
			let r = e.childNodes[n];
			r.nodeType === 1 && r.nodeName === "extra" && this.parseEffectParameterTextureExtra(r, t);
		}
		return t;
	}
	parseEffectParameterTextureExtra(e, t) {
		for (let n = 0, r = e.childNodes.length; n < r; n++) {
			let r = e.childNodes[n];
			r.nodeType === 1 && r.nodeName === "technique" && this.parseEffectParameterTextureExtraTechnique(r, t);
		}
	}
	parseEffectParameterTextureExtraTechnique(e, t) {
		for (let n = 0, r = e.childNodes.length; n < r; n++) {
			let r = e.childNodes[n];
			if (r.nodeType === 1) switch (r.nodeName) {
				case "repeatU":
				case "repeatV":
				case "offsetU":
				case "offsetV":
					t.technique[r.nodeName] = parseFloat(r.textContent);
					break;
				case "wrapU":
				case "wrapV":
					r.textContent.toUpperCase() === "TRUE" ? t.technique[r.nodeName] = 1 : r.textContent.toUpperCase() === "FALSE" ? t.technique[r.nodeName] = 0 : t.technique[r.nodeName] = parseInt(r.textContent);
					break;
				case "bump": t[r.nodeName] = this.parseEffectExtraTechniqueBump(r);
			}
		}
	}
	parseEffectExtra(e) {
		let t = {};
		for (let n = 0, r = e.childNodes.length; n < r; n++) {
			let r = e.childNodes[n];
			r.nodeType === 1 && r.nodeName === "technique" && (t.technique = this.parseEffectExtraTechnique(r));
		}
		return t;
	}
	parseEffectExtraTechnique(e) {
		let t = {};
		for (let n = 0, r = e.childNodes.length; n < r; n++) {
			let r = e.childNodes[n];
			if (r.nodeType === 1) switch (r.nodeName) {
				case "double_sided":
					t[r.nodeName] = parseInt(r.textContent);
					break;
				case "bump": t[r.nodeName] = this.parseEffectExtraTechniqueBump(r);
			}
		}
		return t;
	}
	parseEffectExtraTechniqueBump(e) {
		let t = {};
		for (let n = 0, r = e.childNodes.length; n < r; n++) {
			let r = e.childNodes[n];
			r.nodeType === 1 && r.nodeName === "texture" && (t[r.nodeName] = {
				id: r.getAttribute("texture"),
				texcoord: r.getAttribute("texcoord"),
				extra: this.parseEffectParameterTexture(r)
			});
		}
		return t;
	}
	parseMaterial(e) {
		let t = { name: e.getAttribute("name") };
		for (let n = 0, r = e.childNodes.length; n < r; n++) {
			let r = e.childNodes[n];
			r.nodeType === 1 && r.nodeName === "instance_effect" && (t.url = Gb(r.getAttribute("url")));
		}
		this.library.materials[e.getAttribute("id")] = t;
	}
	parseCamera(e) {
		let t = { name: e.getAttribute("name") };
		for (let n = 0, r = e.childNodes.length; n < r; n++) {
			let r = e.childNodes[n];
			r.nodeType === 1 && r.nodeName === "optics" && (t.optics = this.parseCameraOptics(r));
		}
		this.library.cameras[e.getAttribute("id")] = t;
	}
	parseCameraOptics(e) {
		for (let t = 0; t < e.childNodes.length; t++) {
			let n = e.childNodes[t];
			if (n.nodeName === "technique_common") return this.parseCameraTechnique(n);
		}
		return {};
	}
	parseCameraTechnique(e) {
		let t = {};
		for (let n = 0; n < e.childNodes.length; n++) {
			let r = e.childNodes[n];
			switch (r.nodeName) {
				case "perspective":
				case "orthographic": t.technique = r.nodeName, t.parameters = this.parseCameraParameters(r);
			}
		}
		return t;
	}
	parseCameraParameters(e) {
		let t = {};
		for (let n = 0; n < e.childNodes.length; n++) {
			let r = e.childNodes[n];
			switch (r.nodeName) {
				case "xfov":
				case "yfov":
				case "xmag":
				case "ymag":
				case "znear":
				case "zfar":
				case "aspect_ratio": t[r.nodeName] = parseFloat(r.textContent);
			}
		}
		return t;
	}
	parseLight(e) {
		let t = {};
		for (let n = 0, r = e.childNodes.length; n < r; n++) {
			let r = e.childNodes[n];
			r.nodeType === 1 && r.nodeName === "technique_common" && (t = this.parseLightTechnique(r));
		}
		this.library.lights[e.getAttribute("id")] = t;
	}
	parseLightTechnique(e) {
		let t = {};
		for (let n = 0, r = e.childNodes.length; n < r; n++) {
			let r = e.childNodes[n];
			if (r.nodeType === 1) switch (r.nodeName) {
				case "directional":
				case "point":
				case "spot":
				case "ambient": t.technique = r.nodeName, t.parameters = this.parseLightParameters(r);
			}
		}
		return t;
	}
	parseLightParameters(e) {
		let t = {};
		for (let n = 0, r = e.childNodes.length; n < r; n++) {
			let r = e.childNodes[n];
			if (r.nodeType === 1) switch (r.nodeName) {
				case "color":
					let e = Ub(r.textContent);
					t.color = new E().fromArray(e), ne.colorSpaceToWorking(t.color, Pe);
					break;
				case "falloff_angle":
					t.falloffAngle = parseFloat(r.textContent);
					break;
				case "quadratic_attenuation":
					let n = parseFloat(r.textContent);
					t.distance = n ? Math.sqrt(1 / n) : 0;
			}
		}
		return t;
	}
	parseGeometry(e) {
		let t = {
			name: e.getAttribute("name"),
			sources: {},
			vertices: {},
			primitives: []
		}, n = Vb(e, "mesh")[0];
		if (n !== void 0) {
			for (let e = 0; e < n.childNodes.length; e++) {
				let r = n.childNodes[e];
				if (r.nodeType !== 1) continue;
				let i = r.getAttribute("id");
				switch (r.nodeName) {
					case "source":
						t.sources[i] = this.parseSource(r);
						break;
					case "vertices":
						t.vertices = this.parseGeometryVertices(r);
						break;
					case "polygons":
					case "lines":
					case "linestrips":
					case "polylist":
					case "triangles": t.primitives.push(this.parseGeometryPrimitive(r));
				}
			}
			this.library.geometries[e.getAttribute("id")] = t;
		}
	}
	parseSource(e) {
		let t = {
			array: [],
			stride: 3
		};
		for (let n = 0; n < e.childNodes.length; n++) {
			let r = e.childNodes[n];
			if (r.nodeType === 1) switch (r.nodeName) {
				case "float_array":
					t.array = Ub(r.textContent);
					break;
				case "Name_array":
					t.array = Hb(r.textContent);
					break;
				case "technique_common":
					let e = Vb(r, "accessor")[0];
					e !== void 0 && (t.stride = parseInt(e.getAttribute("stride")));
			}
		}
		return t;
	}
	parseGeometryVertices(e) {
		let t = {};
		for (let n = 0; n < e.childNodes.length; n++) {
			let r = e.childNodes[n];
			r.nodeType === 1 && (t[r.getAttribute("semantic")] = Gb(r.getAttribute("source")));
		}
		return t;
	}
	parseGeometryPrimitive(e) {
		let t = {
			type: e.nodeName,
			material: e.getAttribute("material"),
			count: parseInt(e.getAttribute("count")),
			inputs: {},
			stride: 0,
			hasUV: !1
		};
		for (let n = 0, r = e.childNodes.length; n < r; n++) {
			let r = e.childNodes[n];
			if (r.nodeType === 1) switch (r.nodeName) {
				case "input":
					let e = Gb(r.getAttribute("source")), n = r.getAttribute("semantic"), i = parseInt(r.getAttribute("offset")), a = parseInt(r.getAttribute("set")), o = a > 0 ? n + a : n;
					t.inputs[o] = {
						id: e,
						offset: i
					}, t.stride = Math.max(t.stride, i + 1), n === "TEXCOORD" && (t.hasUV = !0);
					break;
				case "vcount":
					t.vcount = Wb(r.textContent);
					break;
				case "p": t.p = Wb(r.textContent);
			}
		}
		return t.type === "polygons" && (t.vcount = [t.p.length / t.stride]), t;
	}
	parseLibraryJoint(e) {
		this.library.joints[e.getAttribute("id")] = this.parseKinematicsJoint(e);
	}
	parseKinematicsModel(e) {
		let t = {
			name: e.getAttribute("name") || "",
			joints: {},
			links: []
		};
		for (let n = 0; n < e.childNodes.length; n++) {
			let r = e.childNodes[n];
			r.nodeType === 1 && r.nodeName === "technique_common" && this.parseKinematicsTechniqueCommon(r, t);
		}
		this.library.kinematicsModels[e.getAttribute("id")] = t;
	}
	parseKinematicsTechniqueCommon(e, t) {
		for (let n = 0; n < e.childNodes.length; n++) {
			let r = e.childNodes[n];
			if (r.nodeType === 1) switch (r.nodeName) {
				case "joint":
					t.joints[r.getAttribute("sid")] = this.parseKinematicsJoint(r);
					break;
				case "instance_joint":
					t.joints[r.getAttribute("sid")] = this.library.joints[Gb(r.getAttribute("url"))];
					break;
				case "link": t.links.push(this.parseKinematicsLink(r));
			}
		}
	}
	parseKinematicsJoint(e) {
		let t;
		for (let n = 0; n < e.childNodes.length; n++) {
			let r = e.childNodes[n];
			if (r.nodeType === 1) switch (r.nodeName) {
				case "prismatic":
				case "revolute": t = this.parseKinematicsJointParameter(r);
			}
		}
		return t;
	}
	parseKinematicsJointParameter(e) {
		let t = {
			sid: e.getAttribute("sid"),
			name: e.getAttribute("name") || "",
			axis: new O(),
			limits: {
				min: 0,
				max: 0
			},
			type: e.nodeName,
			static: !1,
			zeroPosition: 0,
			middlePosition: 0
		};
		for (let n = 0; n < e.childNodes.length; n++) {
			let r = e.childNodes[n];
			if (r.nodeType === 1) switch (r.nodeName) {
				case "axis":
					let e = Ub(r.textContent);
					t.axis.fromArray(e);
					break;
				case "limits":
					let n = r.getElementsByTagName("max")[0], i = r.getElementsByTagName("min")[0];
					t.limits.max = parseFloat(n.textContent), t.limits.min = parseFloat(i.textContent);
			}
		}
		return t.limits.min >= t.limits.max && (t.static = !0), t.middlePosition = (t.limits.min + t.limits.max) / 2, t;
	}
	parseKinematicsLink(e) {
		let t = {
			sid: e.getAttribute("sid"),
			name: e.getAttribute("name") || "",
			attachments: [],
			transforms: []
		};
		for (let n = 0; n < e.childNodes.length; n++) {
			let r = e.childNodes[n];
			if (r.nodeType === 1) switch (r.nodeName) {
				case "attachment_full":
					t.attachments.push(this.parseKinematicsAttachment(r));
					break;
				case "matrix":
				case "translate":
				case "rotate": t.transforms.push(this.parseKinematicsTransform(r));
			}
		}
		return t;
	}
	parseKinematicsAttachment(e) {
		let t = {
			joint: e.getAttribute("joint").split("/").pop(),
			transforms: [],
			links: []
		};
		for (let n = 0; n < e.childNodes.length; n++) {
			let r = e.childNodes[n];
			if (r.nodeType === 1) switch (r.nodeName) {
				case "link":
					t.links.push(this.parseKinematicsLink(r));
					break;
				case "matrix":
				case "translate":
				case "rotate": t.transforms.push(this.parseKinematicsTransform(r));
			}
		}
		return t;
	}
	parseKinematicsTransform(e) {
		let t = { type: e.nodeName }, n = Ub(e.textContent);
		switch (t.type) {
			case "matrix":
				t.obj = new be(), t.obj.fromArray(n).transpose();
				break;
			case "translate":
				t.obj = new O(), t.obj.fromArray(n);
				break;
			case "rotate": t.obj = new O(), t.obj.fromArray(n), t.angle = ye.degToRad(n[3]);
		}
		return t;
	}
	parsePhysicsModel(e) {
		let t = {
			name: e.getAttribute("name") || "",
			rigidBodies: {}
		};
		for (let n = 0; n < e.childNodes.length; n++) {
			let r = e.childNodes[n];
			r.nodeType === 1 && r.nodeName === "rigid_body" && (t.rigidBodies[r.getAttribute("name")] = {}, this.parsePhysicsRigidBody(r, t.rigidBodies[r.getAttribute("name")]));
		}
		this.library.physicsModels[e.getAttribute("id")] = t;
	}
	parsePhysicsRigidBody(e, t) {
		for (let n = 0; n < e.childNodes.length; n++) {
			let r = e.childNodes[n];
			r.nodeType === 1 && r.nodeName === "technique_common" && this.parsePhysicsTechniqueCommon(r, t);
		}
	}
	parsePhysicsTechniqueCommon(e, t) {
		for (let n = 0; n < e.childNodes.length; n++) {
			let r = e.childNodes[n];
			if (r.nodeType === 1) switch (r.nodeName) {
				case "inertia":
					t.inertia = Ub(r.textContent);
					break;
				case "mass": t.mass = Ub(r.textContent)[0];
			}
		}
	}
	parseKinematicsScene(e) {
		let t = { bindJointAxis: [] };
		for (let n = 0; n < e.childNodes.length; n++) {
			let r = e.childNodes[n];
			r.nodeType === 1 && r.nodeName === "bind_joint_axis" && t.bindJointAxis.push(this.parseKinematicsBindJointAxis(r));
		}
		this.library.kinematicsScenes[Gb(e.getAttribute("url"))] = t;
	}
	parseKinematicsBindJointAxis(e) {
		let t = { target: e.getAttribute("target").split("/").pop() };
		for (let n = 0; n < e.childNodes.length; n++) {
			let r = e.childNodes[n];
			if (r.nodeType === 1 && r.nodeName === "axis") {
				t.axis = r.getElementsByTagName("param")[0].textContent;
				let e = t.axis.split("inst_").pop().split("axis")[0];
				t.jointIndex = e.substring(0, e.length - 1);
			}
		}
		return t;
	}
	prepareNodes(e) {
		let t = e.getElementsByTagName("node");
		for (let e = 0; e < t.length; e++) {
			let n = t[e];
			n.hasAttribute("id") === !1 && n.setAttribute("id", this.generateId());
		}
	}
	parseNode(e) {
		let t = new be(), n = new O(), r = {
			name: e.getAttribute("name") || "",
			type: e.getAttribute("type"),
			id: e.getAttribute("id"),
			sid: e.getAttribute("sid"),
			matrix: new be(),
			nodes: [],
			instanceCameras: [],
			instanceControllers: [],
			instanceLights: [],
			instanceGeometries: [],
			instanceNodes: [],
			transforms: {},
			transformData: {},
			transformOrder: []
		};
		for (let i = 0; i < e.childNodes.length; i++) {
			let a = e.childNodes[i];
			if (a.nodeType !== 1) continue;
			let o;
			switch (a.nodeName) {
				case "node":
					r.nodes.push(a.getAttribute("id")), this.parseNode(a);
					break;
				case "instance_camera":
					r.instanceCameras.push(Gb(a.getAttribute("url")));
					break;
				case "instance_controller":
					r.instanceControllers.push(this.parseNodeInstance(a));
					break;
				case "instance_light":
					r.instanceLights.push(Gb(a.getAttribute("url")));
					break;
				case "instance_geometry":
					r.instanceGeometries.push(this.parseNodeInstance(a));
					break;
				case "instance_node":
					r.instanceNodes.push(Gb(a.getAttribute("url")));
					break;
				case "matrix":
					o = Ub(a.textContent), r.matrix.multiply(t.fromArray(o).transpose());
					{
						let e = a.getAttribute("sid");
						r.transforms[e] = a.nodeName, r.transformData[e] = {
							type: "matrix",
							array: o
						}, r.transformOrder.push(e);
					}
					break;
				case "translate":
					o = Ub(a.textContent), n.fromArray(o), r.matrix.multiply(t.makeTranslation(n.x, n.y, n.z));
					{
						let e = a.getAttribute("sid");
						r.transforms[e] = a.nodeName, r.transformData[e] = {
							type: "translate",
							x: o[0],
							y: o[1],
							z: o[2]
						}, r.transformOrder.push(e);
					}
					break;
				case "rotate":
					o = Ub(a.textContent);
					{
						let e = ye.degToRad(o[3]);
						r.matrix.multiply(t.makeRotationAxis(n.fromArray(o), e));
						let i = a.getAttribute("sid");
						r.transforms[i] = a.nodeName, r.transformData[i] = {
							type: "rotate",
							axis: [
								o[0],
								o[1],
								o[2]
							],
							angle: o[3]
						}, r.transformOrder.push(i);
					}
					break;
				case "scale":
					o = Ub(a.textContent), r.matrix.scale(n.fromArray(o));
					{
						let e = a.getAttribute("sid");
						r.transforms[e] = a.nodeName, r.transformData[e] = {
							type: "scale",
							x: o[0],
							y: o[1],
							z: o[2]
						}, r.transformOrder.push(e);
					}
			}
		}
		return this.hasNode(r.id) ? console.warn("THREE.ColladaLoader: There is already a node with ID %s. Exclude current node from further processing.", r.id) : this.library.nodes[r.id] = r, r;
	}
	parseNodeInstance(e) {
		let t = {
			id: Gb(e.getAttribute("url")),
			materials: {},
			skeletons: []
		};
		for (let n = 0; n < e.childNodes.length; n++) {
			let r = e.childNodes[n];
			switch (r.nodeName) {
				case "bind_material":
					let e = r.getElementsByTagName("instance_material");
					for (let n = 0; n < e.length; n++) {
						let r = e[n], i = r.getAttribute("symbol"), a = r.getAttribute("target");
						t.materials[i] = Gb(a);
					}
					break;
				case "skeleton": t.skeletons.push(Gb(r.textContent));
			}
		}
		return t;
	}
	parseVisualScene(e) {
		let t = {
			name: e.getAttribute("name"),
			children: []
		};
		this.prepareNodes(e);
		let n = Vb(e, "node");
		for (let e = 0; e < n.length; e++) t.children.push(this.parseNode(n[e]));
		this.library.visualScenes[e.getAttribute("id")] = t;
	}
	hasNode(e) {
		return this.library.nodes[e] !== void 0;
	}
}, qb = class {
	constructor(e, t, n, r) {
		this.library = e, this.collada = t, this.textureLoader = n, this.tgaLoader = r, this.tempColor = new E(), this.animations = [], this.kinematics = {}, this.position = new O(), this.scale = new O(), this.quaternion = new je(), this.matrix = new be(), this.deferredPivotAnimations = {}, this.transformNodes = {};
	}
	compose() {
		let e = this.library;
		this.buildLibrary(e.animations, this.buildAnimation.bind(this)), this.buildLibrary(e.clips, this.buildAnimationClip.bind(this)), this.buildLibrary(e.controllers, this.buildController.bind(this)), this.buildLibrary(e.images, this.buildImage.bind(this)), this.buildLibrary(e.effects, this.buildEffect.bind(this)), this.buildLibrary(e.materials, this.buildMaterial.bind(this)), this.buildLibrary(e.cameras, this.buildCamera.bind(this)), this.buildLibrary(e.lights, this.buildLight.bind(this)), this.buildLibrary(e.geometries, this.buildGeometry.bind(this)), this.buildLibrary(e.visualScenes, this.buildVisualScene.bind(this)), this.setupAnimations(), this.setupKinematics();
		let t = this.parseScene(Vb(this.collada, "scene")[0]);
		return t.animations = this.animations, {
			scene: t,
			animations: this.animations,
			kinematics: this.kinematics
		};
	}
	buildLibrary(e, t) {
		for (let n in e) {
			let r = e[n];
			r.build = t(e[n]);
		}
	}
	getBuild(e, t) {
		return e.build === void 0 && (e.build = t(e)), e.build;
	}
	isEmpty(e) {
		return Object.keys(e).length === 0;
	}
	buildAnimation(e) {
		let t = [], n = e.channels, r = e.samplers, i = e.sources, a = this.aggregateAnimationChannels(n, r, i);
		for (let e in a) {
			let n = this.library.nodes[e];
			if (!n) continue;
			let r = a[e];
			if (this.hasPivotTransforms(n)) this.collectDeferredPivotAnimation(e, r);
			else {
				let i = this.getNode(e), a = !1;
				for (let e in r) {
					let o = n.transforms[e], s = n.transformData[e], c = r[e];
					switch (o) {
						case "matrix":
							this.buildMatrixTracks(i, c, n, t);
							break;
						case "translate":
							this.buildTranslateTrack(i, c, s, t);
							break;
						case "rotate":
							a ||= (this.buildRotateTrack(i, e, c, s, n, t), !0);
							break;
						case "scale": this.buildScaleTrack(i, c, s, t);
					}
				}
			}
		}
		return t;
	}
	collectDeferredPivotAnimation(e, t) {
		this.deferredPivotAnimations[e] || (this.deferredPivotAnimations[e] = {});
		let n = this.deferredPivotAnimations[e];
		for (let e in t) {
			n[e] || (n[e] = {});
			for (let r in t[e]) n[e][r] = t[e][r];
		}
	}
	hasPivotTransforms(e) {
		for (let t of [
			"rotatePivot",
			"rotatePivotInverse",
			"rotatePivotTranslation",
			"scalePivot",
			"scalePivotInverse",
			"scalePivotTranslation"
		]) if (e.transforms[t] !== void 0) return !0;
		return !1;
	}
	getAnimation(e) {
		return this.getBuild(this.library.animations[e], this.buildAnimation.bind(this));
	}
	aggregateAnimationChannels(e, t, n) {
		let r = {};
		for (let i in e) {
			if (!e.hasOwnProperty(i)) continue;
			let a = e[i], o = t[a.sampler], s = o.inputs.INPUT, c = o.inputs.OUTPUT, l = n[s], u = n[c], d = o.inputs.INTERPOLATION, f = o.inputs.IN_TANGENT, p = o.inputs.OUT_TANGENT, m = d ? n[d] : null, h = f ? n[f] : null, g = p ? n[p] : null, _ = a.id, v = a.sid, y = a.member || "default";
			r[_] || (r[_] = {}), r[_][v] || (r[_][v] = {}), r[_][v][y] = {
				times: l.array,
				values: u.array,
				stride: u.stride,
				arraySyntax: a.arraySyntax,
				indices: a.indices,
				interpolation: m ? m.array : null,
				inTangent: h ? h.array : null,
				outTangent: g ? g.array : null,
				inTangentStride: h ? h.stride : 0,
				outTangentStride: g ? g.stride : 0
			};
		}
		return r;
	}
	buildMatrixTracks(e, t, n, r) {
		let i = n.matrix.clone().transpose(), a = {};
		for (let e in t) {
			let n = t[e], r = n.times, i = n.values, o = n.stride;
			for (let e = 0, t = r.length; e < t; e++) {
				let t = r[e], s = e * o;
				if (a[t] === void 0 && (a[t] = {}), n.arraySyntax === !0) {
					let e = i[s], r = n.indices[0] + 4 * n.indices[1];
					a[t][r] = e;
				} else for (let e = 0; e < o; e++) a[t][e] = i[s + e];
			}
		}
		let o = this.prepareAnimationData(a, i), s = {
			name: e.uuid,
			keyframes: o
		};
		this.createKeyframeTracks(s, r);
	}
	buildTranslateTrack(e, t, n, r) {
		if (t.default && t.default.stride === 3) {
			let n = t.default, i = Array.from(n.times), a = Array.from(n.values), o = new Ue(e.uuid + ".position", i, a), s = this.getInterpolationInfo(t);
			this.applyInterpolation(o, s, t), r.push(o);
			return;
		}
		let i = this.getTimesForAllAxes(t);
		if (i.length === 0) return;
		let a = [], o = this.getInterpolationInfo(t);
		for (let e = 0; e < i.length; e++) {
			let r = i[e], o = this.getValueAtTime(t.X, r, n.x), s = this.getValueAtTime(t.Y, r, n.y), c = this.getValueAtTime(t.Z, r, n.z);
			a.push(o, s, c);
		}
		let s = new Ue(e.uuid + ".position", i, a);
		this.applyInterpolation(s, o), r.push(s);
	}
	buildRotateTrack(e, t, n, r, i, a) {
		let o = n.ANGLE || n.default;
		if (!o) return;
		let s = Array.from(o.times);
		if (s.length === 0) return;
		let c = [];
		for (let e of i.transformOrder) if (i.transforms[e] === "rotate") {
			let t = i.transformData[e];
			c.push({
				sid: e,
				axis: new O(t.axis[0], t.axis[1], t.axis[2]),
				defaultAngle: t.angle
			});
		}
		let l = new je(), u = new je(), d = new je(), f = [], p = this.getInterpolationInfo(n);
		for (let e = 0; e < s.length; e++) {
			let n = s[e];
			l.identity();
			for (let e of c) {
				let r;
				r = e.sid === t ? this.getValueAtTime(o, n, e.defaultAngle) : e.defaultAngle;
				let i = ye.degToRad(r);
				d.setFromAxisAngle(e.axis, i), l.multiply(d);
			}
			e > 0 && u.dot(l) < 0 && (l.x = -l.x, l.y = -l.y, l.z = -l.z, l.w = -l.w), u.copy(l), f.push(l.x, l.y, l.z, l.w);
		}
		let m = new Me(e.uuid + ".quaternion", s, f);
		this.applyInterpolation(m, p), a.push(m);
	}
	buildScaleTrack(e, t, n, r) {
		if (t.default && t.default.stride === 3) {
			let n = t.default, i = Array.from(n.times), a = Array.from(n.values), o = new Ue(e.uuid + ".scale", i, a), s = this.getInterpolationInfo(t);
			this.applyInterpolation(o, s, t), r.push(o);
			return;
		}
		let i = this.getTimesForAllAxes(t);
		if (i.length === 0) return;
		let a = [], o = this.getInterpolationInfo(t);
		for (let e = 0; e < i.length; e++) {
			let r = i[e], o = this.getValueAtTime(t.X, r, n.x), s = this.getValueAtTime(t.Y, r, n.y), c = this.getValueAtTime(t.Z, r, n.z);
			a.push(o, s, c);
		}
		let s = new Ue(e.uuid + ".scale", i, a);
		this.applyInterpolation(s, o), r.push(s);
	}
	getTimesForAllAxes(e) {
		let t = [];
		return e.X && (t = t.concat(Array.from(e.X.times))), e.Y && (t = t.concat(Array.from(e.Y.times))), e.Z && (t = t.concat(Array.from(e.Z.times))), e.ANGLE && (t = t.concat(Array.from(e.ANGLE.times))), e.default && (t = t.concat(Array.from(e.default.times))), t = [...new Set(t)].sort((e, t) => e - t), t;
	}
	getValueAtTime(e, t, n) {
		if (!e) return n;
		let r = e.times, i = e.values, a = e.interpolation;
		for (let n = 0; n < r.length; n++) {
			if (r[n] === t) return i[n];
			if (r[n] > t) {
				if (n === 0) return i[0];
				let o = n - 1, s = n, c = r[o], l = r[s], u = i[o], d = i[s], f = a ? a[o] : "LINEAR";
				return f === "STEP" ? u : f === "BEZIER" && e.inTangent && e.outTangent ? this.evaluateBezierComponent(e, o, s, c, l, t) : u + (t - c) / (l - c) * (d - u);
			}
		}
		return i[i.length - 1];
	}
	evaluateBezierComponent(e, t, n, r, i, a) {
		let o = e.values, s = e.inTangent, c = e.outTangent, l = e.inTangentStride || 1, u = o[t], d = o[n], f, p, m, h;
		l === 2 ? (f = c[t * 2], p = c[t * 2 + 1], m = s[n * 2], h = s[n * 2 + 1]) : (f = r + (i - r) / 3, p = c[t], m = i - (i - r) / 3, h = s[n]);
		let g = (a - r) / (i - r);
		for (let e = 0; e < 8; e++) {
			let e = g * g, t = e * g, n = 1 - g, o = n * n, s = o * n * r + 3 * o * g * f + 3 * n * e * m + t * i, c = 3 * o * (f - r) + 6 * n * g * (m - f) + 3 * e * (i - m);
			if (Math.abs(c) < 1e-10) break;
			let l = s - a;
			if (Math.abs(l) < 1e-10) break;
			g -= l / c, g = Math.max(0, Math.min(1, g));
		}
		let _ = g * g, v = _ * g, y = 1 - g, ee = y * y;
		return ee * y * u + 3 * ee * g * p + 3 * y * _ * h + v * d;
	}
	getInterpolationInfo(e) {
		let t = [
			"X",
			"Y",
			"Z",
			"ANGLE",
			"default"
		], n = null, r = !0;
		for (let i of t) {
			let t = e[i];
			if (!t || !t.interpolation) continue;
			let a = t.interpolation;
			for (let e = 0; e < a.length; e++) {
				let t = a[e];
				n === null ? n = t : t !== n && (r = !1);
			}
		}
		return {
			type: n || "LINEAR",
			uniform: r
		};
	}
	applyInterpolation(e, t, n = null) {
		if (t.type === "STEP" && t.uniform) e.setInterpolation(de);
		else if (t.type === "BEZIER" && t.uniform && n) {
			let t = n.default;
			t && t.inTangent && t.outTangent && (e.setInterpolation(ue), e.settings = {
				inTangents: new Float32Array(t.inTangent),
				outTangents: new Float32Array(t.outTangent)
			});
		}
	}
	prepareAnimationData(e, t) {
		let n = [];
		for (let t in e) n.push({
			time: parseFloat(t),
			value: e[t]
		});
		n.sort((e, t) => e.time - t.time);
		for (let e = 0; e < 16; e++) this.transformAnimationData(n, e, t.elements[e]);
		return n;
	}
	createKeyframeTracks(e, t) {
		let n = e.keyframes, r = e.name, i = [], a = [], o = [], s = [], c = this.position, l = this.quaternion, u = this.scale, d = this.matrix;
		for (let e = 0, t = n.length; e < t; e++) {
			let t = n[e], r = t.time, f = t.value;
			d.fromArray(f).transpose(), d.decompose(c, l, u), i.push(r), a.push(c.x, c.y, c.z), o.push(l.x, l.y, l.z, l.w), s.push(u.x, u.y, u.z);
		}
		return a.length > 0 && t.push(new Ue(r + ".position", i, a)), o.length > 0 && t.push(new Me(r + ".quaternion", i, o)), s.length > 0 && t.push(new Ue(r + ".scale", i, s)), t;
	}
	transformAnimationData(e, t, n) {
		let r, i = !0, a, o;
		for (a = 0, o = e.length; a < o; a++) r = e[a], r.value[t] === void 0 ? r.value[t] = null : i = !1;
		if (i === !0) for (a = 0, o = e.length; a < o; a++) r = e[a], r.value[t] = n;
		else this.createMissingKeyframes(e, t);
	}
	createMissingKeyframes(e, t) {
		let n, r;
		for (let i = 0, a = e.length; i < a; i++) {
			let a = e[i];
			if (a.value[t] === null) {
				if (n = this.getPrev(e, i, t), r = this.getNext(e, i, t), n === null) {
					a.value[t] = r.value[t];
					continue;
				}
				if (r === null) {
					a.value[t] = n.value[t];
					continue;
				}
				this.interpolate(a, n, r, t);
			}
		}
	}
	getPrev(e, t, n) {
		for (; t >= 0;) {
			let r = e[t];
			if (r.value[n] !== null) return r;
			t--;
		}
		return null;
	}
	getNext(e, t, n) {
		for (; t < e.length;) {
			let r = e[t];
			if (r.value[n] !== null) return r;
			t++;
		}
		return null;
	}
	interpolate(e, t, n, r) {
		n.time - t.time === 0 ? e.value[r] = t.value[r] : e.value[r] = (e.time - t.time) * (n.value[r] - t.value[r]) / (n.time - t.time) + t.value[r];
	}
	buildAnimationClip(e) {
		let t = [], n = e.name, r = e.end - e.start || -1, i = e.animations;
		for (let e = 0, n = i.length; e < n; e++) {
			let n = this.getAnimation(i[e]);
			for (let e = 0, r = n.length; e < r; e++) t.push(n[e]);
		}
		return new S(n, r, t);
	}
	getAnimationClip(e) {
		return this.getBuild(this.library.clips[e], this.buildAnimationClip.bind(this));
	}
	buildController(e) {
		let t = { id: e.id }, n = this.library.geometries[t.id];
		return e.skin !== void 0 && (t.skin = this.buildSkin(e.skin), n.sources.skinIndices = t.skin.indices, n.sources.skinWeights = t.skin.weights), t;
	}
	buildSkin(e) {
		let t = {
			joints: [],
			indices: {
				array: [],
				stride: 4
			},
			weights: {
				array: [],
				stride: 4
			}
		}, n = e.sources, r = e.vertexWeights, i = r.vcount, a = r.v, o = r.inputs.JOINT.offset, s = r.inputs.WEIGHT.offset, c = e.sources[e.joints.inputs.JOINT], l = e.sources[e.joints.inputs.INV_BIND_MATRIX], u = n[r.inputs.WEIGHT.id].array, d = 0, f, p, m;
		for (f = 0, m = i.length; f < m; f++) {
			let e = i[f], n = [];
			for (p = 0; p < e; p++) {
				let e = a[d + o], t = u[a[d + s]];
				n.push({
					index: e,
					weight: t
				}), d += 2;
			}
			for (n.sort(h), p = 0; p < 4; p++) {
				let e = n[p];
				e === void 0 ? (t.indices.array.push(0), t.weights.array.push(0)) : (t.indices.array.push(e.index), t.weights.array.push(e.weight));
			}
		}
		for (t.bindMatrix = e.bindShapeMatrix ? new be().fromArray(e.bindShapeMatrix).transpose() : new be().identity(), f = 0, m = c.array.length; f < m; f++) {
			let e = c.array[f], n = new be().fromArray(l.array, f * l.stride).transpose();
			t.joints.push({
				name: e,
				boneInverse: n
			});
		}
		return t;
		function h(e, t) {
			return t.weight - e.weight;
		}
	}
	getController(e) {
		return this.getBuild(this.library.controllers[e], this.buildController.bind(this));
	}
	buildImage(e) {
		return e.build === void 0 ? e.init_from : e.build;
	}
	getImage(e) {
		let t = this.library.images[e];
		return t === void 0 ? (console.warn("THREE.ColladaLoader: Couldn't find image with ID:", e), null) : this.getBuild(t, this.buildImage.bind(this));
	}
	buildEffect(e) {
		return e;
	}
	getEffect(e) {
		return this.getBuild(this.library.effects[e], this.buildEffect.bind(this));
	}
	getTextureLoader(e) {
		let t, n = e.slice((e.lastIndexOf(".") - 1 >>> 0) + 2);
		switch (n = n.toLowerCase(), n) {
			case "tga":
				t = this.tgaLoader;
				break;
			default: t = this.textureLoader;
		}
		return t;
	}
	buildMaterial(e) {
		let t = this.getEffect(e.url), n = t.profile.technique, r;
		switch (n.type) {
			case "phong":
			case "blinn":
				r = new we();
				break;
			case "lambert":
				r = new Ce();
				break;
			default: r = new Se();
		}
		r.name = e.name || "";
		let i = this;
		function a(e, n = null) {
			let r = t.profile.samplers[e.id], a = null;
			if (r !== void 0) {
				let e = t.profile.surfaces[r.source];
				a = i.getImage(e.init_from);
			} else console.warn("THREE.ColladaLoader: Undefined sampler. Access image directly (see #12530)."), a = i.getImage(e.id);
			if (a !== null) {
				let t = i.getTextureLoader(a);
				if (t !== void 0) {
					let r = t.load(a), o = e.extra;
					if (o !== void 0 && o.technique !== void 0 && i.isEmpty(o.technique) === !1) {
						let e = o.technique;
						r.wrapS = e.wrapU ? Ne : T, r.wrapT = e.wrapV ? Ne : T, r.offset.set(e.offsetU || 0, e.offsetV || 0), r.repeat.set(e.repeatU || 1, e.repeatV || 1);
					} else r.wrapS = Ne, r.wrapT = Ne;
					return n !== null && (r.colorSpace = n), r;
				}
				return console.warn("THREE.ColladaLoader: Loader for texture %s not found.", a), null;
			}
			return console.warn("THREE.ColladaLoader: Couldn't create texture with ID:", e.id), null;
		}
		let o = n.parameters;
		for (let e in o) {
			let t = o[e];
			switch (e) {
				case "diffuse":
					t.color && r.color.fromArray(t.color), t.texture && (r.map = a(t.texture, Pe));
					break;
				case "specular":
					t.color && r.specular && r.specular.fromArray(t.color), t.texture && (r.specularMap = a(t.texture));
					break;
				case "bump":
					t.texture && (r.normalMap = a(t.texture));
					break;
				case "ambient":
					t.texture && (r.lightMap = a(t.texture, Pe));
					break;
				case "shininess":
					t.float && r.shininess && (r.shininess = t.float);
					break;
				case "emission": t.color && r.emissive && r.emissive.fromArray(t.color), t.texture && (r.emissiveMap = a(t.texture, Pe));
			}
		}
		ne.colorSpaceToWorking(r.color, Pe), r.specular && ne.colorSpaceToWorking(r.specular, Pe), r.emissive && ne.colorSpaceToWorking(r.emissive, Pe);
		let s = o.transparent, c = o.transparency;
		if (c === void 0 && s && (c = { float: 1 }), s === void 0 && c && (s = {
			opaque: "A_ONE",
			data: { color: [
				1,
				1,
				1,
				1
			] }
		}), s && c) {
			if (s.data.texture) r.transparent = !0;
			else {
				let e = s.data.color;
				switch (s.opaque) {
					case "A_ONE":
						r.opacity = e[3] * c.float;
						break;
					case "RGB_ZERO":
						r.opacity = 1 - e[0] * c.float;
						break;
					case "A_ZERO":
						r.opacity = 1 - e[3] * c.float;
						break;
					case "RGB_ONE":
						r.opacity = e[0] * c.float;
						break;
					default: console.warn("THREE.ColladaLoader: Invalid opaque type \"%s\" of transparent tag.", s.opaque);
				}
				r.opacity < 1 && (r.transparent = !0);
			}
		}
		if (n.extra !== void 0 && n.extra.technique !== void 0) {
			let e = n.extra.technique;
			for (let t in e) {
				let n = e[t];
				switch (t) {
					case "double_sided":
						r.side = n === 1 ? ae : D;
						break;
					case "bump": r.normalMap = a(n.texture), r.normalScale = new He(1, 1);
				}
			}
		}
		return r;
	}
	getMaterial(e) {
		return this.getBuild(this.library.materials[e], this.buildMaterial.bind(this));
	}
	buildCamera(e) {
		let t;
		switch (e.optics.technique) {
			case "perspective":
				t = new De(e.optics.parameters.yfov, e.optics.parameters.aspect_ratio, e.optics.parameters.znear, e.optics.parameters.zfar);
				break;
			case "orthographic":
				let n = e.optics.parameters.ymag, r = e.optics.parameters.xmag, i = e.optics.parameters.aspect_ratio;
				r = r === void 0 ? n * i : r, n = n === void 0 ? r / i : n, r *= .5, n *= .5, t = new Ee(-r, r, n, -n, e.optics.parameters.znear, e.optics.parameters.zfar);
				break;
			default: t = new De();
		}
		return t.name = e.name || "", t;
	}
	getCamera(e) {
		let t = this.library.cameras[e];
		return t === void 0 ? (console.warn("THREE.ColladaLoader: Couldn't find camera with ID:", e), null) : this.getBuild(t, this.buildCamera.bind(this));
	}
	buildLight(e) {
		let t;
		switch (e.technique) {
			case "directional":
				t = new ie();
				break;
			case "point":
				t = new Oe();
				break;
			case "spot":
				t = new ze();
				break;
			case "ambient": t = new x();
		}
		return e.parameters.color && t.color.copy(e.parameters.color), e.parameters.distance && (t.distance = e.parameters.distance), e.parameters.falloffAngle && (t.angle = ye.degToRad(e.parameters.falloffAngle)), t;
	}
	getLight(e) {
		let t = this.library.lights[e];
		return t === void 0 ? (console.warn("THREE.ColladaLoader: Couldn't find light with ID:", e), null) : this.getBuild(t, this.buildLight.bind(this));
	}
	groupPrimitives(e) {
		let t = {};
		for (let n = 0; n < e.length; n++) {
			let r = e[n];
			t[r.type] === void 0 && (t[r.type] = []), t[r.type].push(r);
		}
		return t;
	}
	checkUVCoordinates(e) {
		let t = 0;
		for (let n = 0, r = e.length; n < r; n++) e[n].hasUV === !0 && t++;
		t > 0 && t < e.length && (e.uvsNeedsFix = !0);
	}
	buildGeometry(e) {
		let t = {}, n = e.sources, r = e.vertices, i = e.primitives;
		if (i.length === 0) return {};
		let a = this.groupPrimitives(i);
		for (let e in a) {
			let i = a[e];
			this.checkUVCoordinates(i), t[e] = this.buildGeometryType(i, n, r);
		}
		return t;
	}
	buildGeometryType(e, t, n) {
		let r = {}, i = {
			array: [],
			stride: 0
		}, a = {
			array: [],
			stride: 0
		}, o = {
			array: [],
			stride: 0
		}, s = {
			array: [],
			stride: 0
		}, c = {
			array: [],
			stride: 0
		}, l = {
			array: [],
			stride: 4
		}, u = {
			array: [],
			stride: 4
		}, d = new te(), f = [], p = 0;
		for (let r = 0; r < e.length; r++) {
			let m = e[r], h = m.inputs, g = 0;
			switch (m.type) {
				case "lines":
				case "linestrips":
					g = m.count * 2;
					break;
				case "triangles":
					g = m.count * 3;
					break;
				case "polygons":
				case "polylist":
					for (let e = 0; e < m.count; e++) {
						let t = m.vcount[e];
						switch (t) {
							case 3:
								g += 3;
								break;
							case 4:
								g += 6;
								break;
							default: g += (t - 2) * 3;
						}
					}
					break;
				default: console.warn("THREE.ColladaLoader: Unknown primitive type:", m.type);
			}
			d.addGroup(p, g, r), p += g, m.material && f.push(m.material);
			for (let r in h) {
				let d = h[r];
				switch (r) {
					case "VERTEX":
						for (let r in n) {
							let f = n[r];
							switch (r) {
								case "POSITION":
									let n = i.array.length;
									if (this.buildGeometryData(m, t[f], d.offset, i.array), i.stride = t[f].stride, t.skinWeights && t.skinIndices && (this.buildGeometryData(m, t.skinIndices, d.offset, l.array), this.buildGeometryData(m, t.skinWeights, d.offset, u.array)), m.hasUV === !1 && e.uvsNeedsFix === !0) {
										let e = (i.array.length - n) / i.stride;
										for (let t = 0; t < e; t++) o.array.push(0, 0);
									}
									break;
								case "NORMAL":
									this.buildGeometryData(m, t[f], d.offset, a.array), a.stride = t[f].stride;
									break;
								case "COLOR":
									this.buildGeometryData(m, t[f], d.offset, c.array), c.stride = t[f].stride;
									break;
								case "TEXCOORD":
									this.buildGeometryData(m, t[f], d.offset, o.array), o.stride = t[f].stride;
									break;
								case "TEXCOORD1":
									this.buildGeometryData(m, t[f], d.offset, s.array), o.stride = t[f].stride;
									break;
								default: console.warn("THREE.ColladaLoader: Semantic \"%s\" not handled in geometry build process.", r);
							}
						}
						break;
					case "NORMAL":
						this.buildGeometryData(m, t[d.id], d.offset, a.array), a.stride = t[d.id].stride;
						break;
					case "COLOR":
						this.buildGeometryData(m, t[d.id], d.offset, c.array, !0), c.stride = t[d.id].stride;
						break;
					case "TEXCOORD":
						this.buildGeometryData(m, t[d.id], d.offset, o.array), o.stride = t[d.id].stride;
						break;
					case "TEXCOORD1": this.buildGeometryData(m, t[d.id], d.offset, s.array), s.stride = t[d.id].stride;
				}
			}
		}
		return i.array.length > 0 && d.setAttribute("position", new ce(i.array, i.stride)), a.array.length > 0 && d.setAttribute("normal", new ce(a.array, a.stride)), c.array.length > 0 && d.setAttribute("color", new ce(c.array, c.stride)), o.array.length > 0 && d.setAttribute("uv", new ce(o.array, o.stride)), s.array.length > 0 && d.setAttribute("uv1", new ce(s.array, s.stride)), l.array.length > 0 && d.setAttribute("skinIndex", new ce(l.array, l.stride)), u.array.length > 0 && d.setAttribute("skinWeight", new ce(u.array, u.stride)), r.data = d, r.type = e[0].type, r.materialKeys = f, r;
	}
	buildGeometryData(e, t, n, r, i = !1) {
		let a = e.p, o = e.stride, s = e.vcount, c = this.tempColor;
		function l(e) {
			let t = a[e + n] * d, o = t + d;
			for (; t < o; t++) r.push(u[t]);
			if (i) {
				let e = r.length - d - 1;
				c.setRGB(r[e + 0], r[e + 1], r[e + 2], Pe), r[e + 0] = c.r, r[e + 1] = c.g, r[e + 2] = c.b;
			}
		}
		let u = t.array, d = t.stride;
		if (e.vcount !== void 0) {
			let e = 0;
			for (let t = 0, n = s.length; t < n; t++) {
				let n = s[t];
				if (n === 4) {
					let t = e + o * 0, n = e + o * 1, r = e + o * 2, i = e + o * 3;
					l(t), l(n), l(i), l(n), l(r), l(i);
				} else if (n === 3) {
					let t = e + o * 0, n = e + o * 1, r = e + o * 2;
					l(t), l(n), l(r);
				} else if (n > 4) {
					let t = [];
					for (let r = 0; r < n; r++) {
						let n = a[e + o * r] * d, i = u[n], s = u[n + 1], c = u[n + 2];
						t.push(new O(i, s, c));
					}
					let r = new O(), i = new Ve();
					i.a = t[0], i.b = t[1], i.c = t[2], i.getNormal(r);
					let s = [];
					if (Math.abs(r.x) > Math.abs(r.y) && Math.abs(r.x) > Math.abs(r.z)) for (let e = 0; e < n; e++) s.push(new He(t[e].y, t[e].z));
					else if (Math.abs(r.y) > Math.abs(r.z)) for (let e = 0; e < n; e++) s.push(new He(t[e].x, t[e].z));
					else for (let e = 0; e < n; e++) s.push(new He(t[e].x, t[e].y));
					let c = Ie.isClockWise(s);
					c === !0 && s.reverse();
					let f = Ie.triangulateShape(s, []);
					for (let t = 0; t < f.length; t++) {
						let r = f[t], i, a, s;
						c === !1 ? (i = r[0], a = r[1], s = r[2]) : (i = n - 1 - r[0], a = n - 1 - r[2], s = n - 1 - r[1]);
						let u = e + o * i, d = e + o * a, p = e + o * s;
						l(u), l(d), l(p);
					}
				}
				e += o * n;
			}
		} else for (let e = 0, t = a.length; e < t; e += o) l(e);
	}
	getGeometry(e) {
		return this.getBuild(this.library.geometries[e], this.buildGeometry.bind(this));
	}
	buildKinematicsModel(e) {
		return e.build === void 0 ? e : e.build;
	}
	getKinematicsModel(e) {
		return this.getBuild(this.library.kinematicsModels[e], this.buildKinematicsModel.bind(this));
	}
	buildKinematicsScene(e) {
		return e.build === void 0 ? e : e.build;
	}
	getKinematicsScene(e) {
		return this.getBuild(this.library.kinematicsScenes[e], this.buildKinematicsScene.bind(this));
	}
	setupKinematics() {
		let e = Object.keys(this.library.kinematicsModels)[0], t = Object.keys(this.library.kinematicsScenes)[0], n = Object.keys(this.library.visualScenes)[0];
		if (e === void 0 || t === void 0) return;
		let r = this.getKinematicsModel(e), i = this.getKinematicsScene(t), a = this.getVisualScene(n), o = i.bindJointAxis, s = {}, c = this.collada, l = this;
		for (let e = 0, t = o.length; e < t; e++) {
			let t = o[e], n = c.querySelector("[sid=\"" + t.target + "\"]");
			if (n) {
				let e = n.parentElement;
				u(t.jointIndex, e);
			}
		}
		function u(e, t) {
			let n = t.getAttribute("name"), i = r.joints[e], o = l.buildTransformList(t);
			a.traverse(function(t) {
				t.name === n && (s[e] = {
					object: t,
					transforms: o,
					joint: i,
					position: i.zeroPosition
				});
			});
		}
		let d = new be(), f = this.matrix;
		this.kinematics = {
			joints: r && r.joints,
			getJointValue: function(e) {
				let t = s[e];
				if (t) return t.position;
				console.warn("THREE.ColladaLoader: Joint " + e + " doesn't exist.");
			},
			setJointValue: function(e, t) {
				let n = s[e];
				if (n) {
					let r = n.joint;
					if (t > r.limits.max || t < r.limits.min) console.warn("THREE.ColladaLoader: Joint " + e + " value " + t + " outside of limits (min: " + r.limits.min + ", max: " + r.limits.max + ").");
					else if (r.static) console.warn("THREE.ColladaLoader: Joint " + e + " is static.");
					else {
						let i = n.object, a = r.axis, o = n.transforms;
						f.identity();
						for (let n = 0; n < o.length; n++) {
							let i = o[n];
							if (i.sid && i.sid.indexOf(e) !== -1) switch (r.type) {
								case "revolute":
									f.multiply(d.makeRotationAxis(a, ye.degToRad(t)));
									break;
								case "prismatic":
									f.multiply(d.makeTranslation(a.x * t, a.y * t, a.z * t));
									break;
								default: console.warn("THREE.ColladaLoader: Unknown joint type: " + r.type);
							}
							else switch (i.type) {
								case "matrix":
									f.multiply(i.obj);
									break;
								case "translate":
									f.multiply(d.makeTranslation(i.obj.x, i.obj.y, i.obj.z));
									break;
								case "scale":
									f.scale(i.obj);
									break;
								case "rotate": f.multiply(d.makeRotationAxis(i.obj, i.angle));
							}
						}
						i.matrix.copy(f), i.matrix.decompose(i.position, i.quaternion, i.scale), s[e].position = t;
					}
				} else console.warn("THREE.ColladaLoader: Joint " + e + " does not exist.");
			}
		};
	}
	buildTransformList(e) {
		let t = [], n = this.collada.querySelector("[id=\"" + e.id + "\"]");
		for (let e = 0; e < n.childNodes.length; e++) {
			let r = n.childNodes[e];
			if (r.nodeType !== 1) continue;
			let i, a;
			switch (r.nodeName) {
				case "matrix":
					i = Ub(r.textContent);
					let e = new be().fromArray(i).transpose();
					t.push({
						sid: r.getAttribute("sid"),
						type: r.nodeName,
						obj: e
					});
					break;
				case "translate":
				case "scale":
					i = Ub(r.textContent), a = new O().fromArray(i), t.push({
						sid: r.getAttribute("sid"),
						type: r.nodeName,
						obj: a
					});
					break;
				case "rotate":
					i = Ub(r.textContent), a = new O().fromArray(i);
					let n = ye.degToRad(i[3]);
					t.push({
						sid: r.getAttribute("sid"),
						type: r.nodeName,
						obj: a,
						angle: n
					});
			}
		}
		return t;
	}
	buildSkeleton(e, t) {
		let n = [], r = [], i, a, o;
		for (i = 0; i < e.length; i++) {
			let r = e[i], a;
			if (this.hasNode(r)) a = this.getNode(r), this.buildBoneHierarchy(a, t, n);
			else if (this.hasVisualScene(r)) {
				let e = this.library.visualScenes[r].children;
				for (let r = 0; r < e.length; r++) {
					let i = e[r];
					if (i.type === "JOINT") {
						let e = this.getNode(i.id);
						this.buildBoneHierarchy(e, t, n);
					}
				}
			} else console.error("THREE.ColladaLoader: Unable to find root bone of skeleton with ID:", r);
		}
		for (i = 0; i < t.length; i++) for (a = 0; a < n.length; a++) if (o = n[a], o.bone.name === t[i].name) {
			r[i] = o, o.processed = !0;
			break;
		}
		for (i = 0; i < n.length; i++) o = n[i], o.processed === !1 && (r.push(o), o.processed = !0);
		let s = [], c = [];
		for (i = 0; i < r.length; i++) o = r[i], s.push(o.bone), c.push(o.boneInverse);
		return new Le(s, c);
	}
	buildBoneHierarchy(e, t, n) {
		e.traverse(function(e) {
			if (e.isBone === !0) {
				let r;
				for (let n = 0; n < t.length; n++) {
					let i = t[n];
					if (i.name === e.name) {
						r = i.boneInverse;
						break;
					}
				}
				r === void 0 && (r = new be()), n.push({
					bone: e,
					boneInverse: r,
					processed: !1
				});
			}
		});
	}
	buildNode(e) {
		let t = [], n = e.matrix, r = e.nodes, i = e.type, a = e.instanceCameras, o = e.instanceControllers, s = e.instanceLights, c = e.instanceGeometries, l = e.instanceNodes;
		for (let e = 0, n = r.length; e < n; e++) t.push(this.getNode(r[e]));
		for (let e = 0, n = a.length; e < n; e++) {
			let n = this.getCamera(a[e]);
			n !== null && t.push(n.clone());
		}
		for (let e = 0, n = o.length; e < n; e++) {
			let n = o[e], r = this.getController(n.id), i = this.getGeometry(r.id), a = this.buildObjects(i, n.materials), s = n.skeletons, c = r.skin.joints, l = this.buildSkeleton(s, c);
			for (let e = 0, n = a.length; e < n; e++) {
				let n = a[e];
				n.isSkinnedMesh && (n.bind(l, r.skin.bindMatrix), n.normalizeSkinWeights()), t.push(n);
			}
		}
		for (let e = 0, n = s.length; e < n; e++) {
			let n = this.getLight(s[e]);
			n !== null && t.push(n.clone());
		}
		for (let e = 0, n = c.length; e < n; e++) {
			let n = c[e], r = this.getGeometry(n.id), i = this.buildObjects(r, n.materials);
			for (let e = 0, n = i.length; e < n; e++) t.push(i[e]);
		}
		for (let e = 0, n = l.length; e < n; e++) t.push(this.getNode(l[e]).clone());
		let u;
		if (r.length === 0 && t.length === 1) u = t[0];
		else {
			u = i === "JOINT" ? new C() : new le();
			for (let e = 0; e < t.length; e++) u.add(t[e]);
		}
		return u.name = i === "JOINT" ? e.sid : e.name, i !== "JOINT" && this.hasPivotTransforms(e) ? this.wrapWithTransformHierarchy(u, e) : (u.matrix.copy(n), u.matrix.decompose(u.position, u.quaternion, u.scale), u);
	}
	wrapWithTransformHierarchy(e, t) {
		let n = t.id;
		this.transformNodes[n] = {};
		let r = t.transformOrder, i = t.transformData, a = new le();
		a.name = t.name;
		let o = a;
		for (let e = 0; e < r.length; e++) {
			let a = r[e], s = i[a], c = new le();
			switch (c.name = t.name + "_" + a, s.type) {
				case "translate":
					c.position.set(s.x, s.y, s.z);
					break;
				case "rotate": {
					let e = new O(s.axis[0], s.axis[1], s.axis[2]), t = ye.degToRad(s.angle);
					c.quaternion.setFromAxisAngle(e, t), c.userData.rotationAxis = e;
					break;
				}
				case "scale":
					c.scale.set(s.x, s.y, s.z);
					break;
				case "matrix": new be().fromArray(s.array).transpose().decompose(c.position, c.quaternion, c.scale);
			}
			this.transformNodes[n][a] = c, o.add(c), o = c;
		}
		return o.add(e), a;
	}
	resolveMaterialBinding(e, t) {
		let n = [];
		for (let r = 0, i = e.length; r < i; r++) {
			let i = t[e[r]];
			i === void 0 ? (console.warn("THREE.ColladaLoader: Material with key %s not found. Apply fallback material.", e[r]), n.push(this.fallbackMaterial)) : n.push(this.getMaterial(i));
		}
		return n;
	}
	get fallbackMaterial() {
		return this._fallbackMaterial === void 0 && (this._fallbackMaterial = new Se({
			name: ge.DEFAULT_MATERIAL_NAME,
			color: 16711935
		})), this._fallbackMaterial;
	}
	buildObjects(e, t) {
		let n = [];
		for (let r in e) {
			let i = e[r], a = this.resolveMaterialBinding(i.materialKeys, t);
			if (a.length === 0 && (r === "lines" || r === "linestrips" ? a.push(new pe()) : a.push(new we())), r === "lines" || r === "linestrips") for (let e = 0, t = a.length; e < t; e++) {
				let t = a[e];
				if (t.isMeshPhongMaterial === !0 || t.isMeshLambertMaterial === !0) {
					let n = new pe();
					n.color.copy(t.color), n.opacity = t.opacity, n.transparent = t.transparent, a[e] = n;
				}
			}
			let o = i.data.attributes.skinIndex !== void 0, s = a.length === 1 ? a[0] : a, c;
			switch (r) {
				case "lines":
					c = new me(i.data, s);
					break;
				case "linestrips":
					c = new fe(i.data, s);
					break;
				case "triangles":
				case "polygons":
				case "polylist": c = o ? new Re(i.data, s) : new xe(i.data, s);
			}
			n.push(c);
		}
		return n;
	}
	hasNode(e) {
		return this.library.nodes[e] !== void 0;
	}
	getNode(e) {
		return this.getBuild(this.library.nodes[e], this.buildNode.bind(this));
	}
	buildVisualScene(e) {
		let t = new le();
		t.name = e.name;
		let n = e.children;
		for (let e = 0; e < n.length; e++) {
			let r = n[e];
			t.add(this.getNode(r.id));
		}
		return t;
	}
	hasVisualScene(e) {
		return this.library.visualScenes[e] !== void 0;
	}
	getVisualScene(e) {
		return this.getBuild(this.library.visualScenes[e], this.buildVisualScene.bind(this));
	}
	parseScene(e) {
		let t = Vb(e, "instance_visual_scene")[0];
		return this.getVisualScene(this.parseId(t.getAttribute("url")));
	}
	parseId(e) {
		return e.substring(1);
	}
	setupAnimations() {
		let e = this.library.clips;
		if (this.isEmpty(e) === !0) {
			if (this.isEmpty(this.library.animations) === !1) {
				let e = [];
				for (let t in this.library.animations) {
					let n = this.getAnimation(t);
					for (let t = 0, r = n.length; t < r; t++) e.push(n[t]);
				}
				this.buildDeferredPivotAnimationTracks(e), this.animations.push(new S("default", -1, e));
			}
		} else for (let t in e) this.animations.push(this.getAnimationClip(t));
	}
	buildDeferredPivotAnimationTracks(e) {
		for (let t in this.deferredPivotAnimations) {
			let n = this.library.nodes[t];
			if (!n) continue;
			let r = this.deferredPivotAnimations[t];
			this.buildTransformHierarchyTracks(t, r, n, e);
		}
	}
	buildTransformHierarchyTracks(e, t, n, r) {
		let i = this.transformNodes[e];
		if (!i) console.warn("THREE.ColladaLoader: Transform hierarchy not found for node:", e);
		else for (let e in t) {
			let a = i[e];
			if (!a) continue;
			let o = n.transforms[e], s = n.transformData[e], c = t[e];
			switch (o) {
				case "translate":
					this.buildHierarchyTranslateTrack(a, c, s, r);
					break;
				case "rotate":
					this.buildHierarchyRotateTrack(a, c, s, r);
					break;
				case "scale": this.buildHierarchyScaleTrack(a, c, s, r);
			}
		}
	}
	buildHierarchyTranslateTrack(e, t, n, r) {
		if (t.default && t.default.stride === 3) {
			let n = t.default, i = new Ue(e.uuid + ".position", Array.from(n.times), Array.from(n.values)), a = this.getInterpolationInfo(t);
			this.applyInterpolation(i, a, t), r.push(i);
			return;
		}
		let i = this.getTimesForAllAxes(t);
		if (i.length === 0) return;
		let a = [], o = this.getInterpolationInfo(t);
		for (let e = 0; e < i.length; e++) {
			let r = i[e], o = this.getValueAtTime(t.X, r, n.x), s = this.getValueAtTime(t.Y, r, n.y), c = this.getValueAtTime(t.Z, r, n.z);
			a.push(o, s, c);
		}
		let s = new Ue(e.uuid + ".position", i, a);
		this.applyInterpolation(s, o), r.push(s);
	}
	buildHierarchyRotateTrack(e, t, n, r) {
		let i = t.ANGLE || t.default;
		if (!i) return;
		let a = Array.from(i.times);
		if (a.length === 0) return;
		let o = e.userData.rotationAxis || new O(n.axis[0], n.axis[1], n.axis[2]), s = new je(), c = new je(), l = [], u = this.getInterpolationInfo(t);
		for (let e = 0; e < a.length; e++) {
			let t = a[e], r = this.getValueAtTime(i, t, n.angle), u = ye.degToRad(r);
			s.setFromAxisAngle(o, u), e > 0 && c.dot(s) < 0 && (s.x = -s.x, s.y = -s.y, s.z = -s.z, s.w = -s.w), c.copy(s), l.push(s.x, s.y, s.z, s.w);
		}
		let d = new Me(e.uuid + ".quaternion", a, l);
		this.applyInterpolation(d, u), r.push(d);
	}
	buildHierarchyScaleTrack(e, t, n, r) {
		if (t.default && t.default.stride === 3) {
			let n = t.default, i = new Ue(e.uuid + ".scale", Array.from(n.times), Array.from(n.values)), a = this.getInterpolationInfo(t);
			this.applyInterpolation(i, a, t), r.push(i);
			return;
		}
		let i = this.getTimesForAllAxes(t);
		if (i.length === 0) return;
		let a = [], o = this.getInterpolationInfo(t);
		for (let e = 0; e < i.length; e++) {
			let r = i[e], o = this.getValueAtTime(t.X, r, n.x), s = this.getValueAtTime(t.Y, r, n.y), c = this.getValueAtTime(t.Z, r, n.z);
			a.push(o, s, c);
		}
		let s = new Ue(e.uuid + ".scale", i, a);
		this.applyInterpolation(s, o), r.push(s);
	}
}, Jb = class extends ge {
	load(e, t, n, r) {
		let i = this, a = i.path === "" ? _e.extractUrlBase(e) : i.path, o = new se(i.manager);
		o.setPath(i.path), o.setRequestHeader(i.requestHeader), o.setWithCredentials(i.withCredentials), o.load(e, function(n) {
			try {
				t(i.parse(n, a));
			} catch (t) {
				r ? r(t) : console.error(t), i.manager.itemError(e);
			}
		}, n, r);
	}
	parse(e, t) {
		if (e.length === 0) return { scene: new Fe() };
		let n = new Kb().parse(e);
		if (n === null) return null;
		let { library: r, asset: i, collada: a } = n, o = new Be(this.manager);
		o.setPath(this.resourcePath || t).setCrossOrigin(this.crossOrigin);
		let s;
		Bb && (s = new Bb(this.manager), s.setPath(this.resourcePath || t));
		let { scene: c, animations: l, kinematics: u } = new qb(r, a, o, s).compose();
		return c.animations = l, i.upAxis === "Z_UP" && (console.warn("THREE.ColladaLoader: You are loading an asset with a Z-UP coordinate system. The loader just rotates the asset to transform it into Y-UP. The vertex data are not converted, see #24289."), c.rotation.set(-Math.PI / 2, 0, 0)), c.scale.multiplyScalar(i.unit), {
			get animations() {
				return console.warn("THREE.ColladaLoader: Please access animations over scene.animations now."), l;
			},
			kinematics: u,
			library: r,
			scene: c
		};
	}
}, Yb = /^[og]\s*(.+)?/, Xb = /^mtllib /, Zb = /^usemtl /, Qb = /^usemap /, $b = /\s+/, ex = new O(), tx = new O(), nx = new O(), rx = new O(), ix = new O(), ax = new E();
function ox() {
	let e = {
		objects: [],
		object: {},
		vertices: [],
		normals: [],
		colors: [],
		uvs: [],
		materials: {},
		materialLibraries: [],
		startObject: function(e, t) {
			if (this.object && this.object.fromDeclaration === !1) {
				this.object.name = e, this.object.fromDeclaration = t !== !1;
				return;
			}
			let n = this.object && typeof this.object.currentMaterial == "function" ? this.object.currentMaterial() : void 0;
			if (this.object && typeof this.object._finalize == "function" && this.object._finalize(!0), this.object = {
				name: e || "",
				fromDeclaration: t !== !1,
				geometry: {
					vertices: [],
					normals: [],
					colors: [],
					uvs: [],
					hasUVIndices: !1
				},
				materials: [],
				smooth: !0,
				startMaterial: function(e, t) {
					let n = this._finalize(!1);
					n && (n.inherited || n.groupCount <= 0) && this.materials.splice(n.index, 1);
					let r = {
						index: this.materials.length,
						name: e || "",
						mtllib: Array.isArray(t) && t.length > 0 ? t[t.length - 1] : "",
						smooth: n === void 0 ? this.smooth : n.smooth,
						groupStart: n === void 0 ? 0 : n.groupEnd,
						groupEnd: -1,
						groupCount: -1,
						inherited: !1,
						clone: function(e) {
							let t = {
								index: typeof e == "number" ? e : this.index,
								name: this.name,
								mtllib: this.mtllib,
								smooth: this.smooth,
								groupStart: 0,
								groupEnd: -1,
								groupCount: -1,
								inherited: !1
							};
							return t.clone = this.clone.bind(t), t;
						}
					};
					return this.materials.push(r), r;
				},
				currentMaterial: function() {
					if (this.materials.length > 0) return this.materials[this.materials.length - 1];
				},
				_finalize: function(e) {
					let t = this.currentMaterial();
					if (t && t.groupEnd === -1 && (t.groupEnd = this.geometry.vertices.length / 3, t.groupCount = t.groupEnd - t.groupStart, t.inherited = !1), e && this.materials.length > 1) for (let e = this.materials.length - 1; e >= 0; e--) this.materials[e].groupCount <= 0 && this.materials.splice(e, 1);
					return e && this.materials.length === 0 && this.materials.push({
						name: "",
						smooth: this.smooth
					}), t;
				}
			}, n && n.name && typeof n.clone == "function") {
				let e = n.clone(0);
				e.inherited = !0, this.object.materials.push(e);
			}
			this.objects.push(this.object);
		},
		finalize: function() {
			this.object && typeof this.object._finalize == "function" && this.object._finalize(!0);
		},
		parseVertexIndex: function(e, t) {
			let n = parseInt(e, 10);
			return (n >= 0 ? n - 1 : n + t / 3) * 3;
		},
		parseNormalIndex: function(e, t) {
			let n = parseInt(e, 10);
			return (n >= 0 ? n - 1 : n + t / 3) * 3;
		},
		parseUVIndex: function(e, t) {
			let n = parseInt(e, 10);
			return (n >= 0 ? n - 1 : n + t / 2) * 2;
		},
		addVertex: function(e, t, n) {
			let r = this.vertices, i = this.object.geometry.vertices;
			i.push(r[e + 0], r[e + 1], r[e + 2]), i.push(r[t + 0], r[t + 1], r[t + 2]), i.push(r[n + 0], r[n + 1], r[n + 2]);
		},
		addVertexPoint: function(e) {
			let t = this.vertices;
			this.object.geometry.vertices.push(t[e + 0], t[e + 1], t[e + 2]);
		},
		addVertexLine: function(e) {
			let t = this.vertices;
			this.object.geometry.vertices.push(t[e + 0], t[e + 1], t[e + 2]);
		},
		addNormal: function(e, t, n) {
			let r = this.normals, i = this.object.geometry.normals;
			i.push(r[e + 0], r[e + 1], r[e + 2]), i.push(r[t + 0], r[t + 1], r[t + 2]), i.push(r[n + 0], r[n + 1], r[n + 2]);
		},
		addFaceNormal: function(e, t, n) {
			let r = this.vertices, i = this.object.geometry.normals;
			ex.fromArray(r, e), tx.fromArray(r, t), nx.fromArray(r, n), ix.subVectors(nx, tx), rx.subVectors(ex, tx), ix.cross(rx), ix.normalize(), i.push(ix.x, ix.y, ix.z), i.push(ix.x, ix.y, ix.z), i.push(ix.x, ix.y, ix.z);
		},
		addColor: function(e, t, n) {
			let r = this.colors, i = this.object.geometry.colors;
			r[e] !== void 0 && i.push(r[e + 0], r[e + 1], r[e + 2]), r[t] !== void 0 && i.push(r[t + 0], r[t + 1], r[t + 2]), r[n] !== void 0 && i.push(r[n + 0], r[n + 1], r[n + 2]);
		},
		addUV: function(e, t, n) {
			let r = this.uvs, i = this.object.geometry.uvs;
			i.push(r[e + 0], r[e + 1]), i.push(r[t + 0], r[t + 1]), i.push(r[n + 0], r[n + 1]);
		},
		addDefaultUV: function() {
			let e = this.object.geometry.uvs;
			e.push(0, 0), e.push(0, 0), e.push(0, 0);
		},
		addUVLine: function(e) {
			let t = this.uvs;
			this.object.geometry.uvs.push(t[e + 0], t[e + 1]);
		},
		addFace: function(e, t, n, r, i, a, o, s, c) {
			let l = this.vertices.length, u = this.parseVertexIndex(e, l), d = this.parseVertexIndex(t, l), f = this.parseVertexIndex(n, l);
			if (this.addVertex(u, d, f), this.addColor(u, d, f), o !== void 0 && o !== "") {
				let e = this.normals.length;
				u = this.parseNormalIndex(o, e), d = this.parseNormalIndex(s, e), f = this.parseNormalIndex(c, e), this.addNormal(u, d, f);
			} else this.addFaceNormal(u, d, f);
			if (r !== void 0 && r !== "") {
				let e = this.uvs.length;
				u = this.parseUVIndex(r, e), d = this.parseUVIndex(i, e), f = this.parseUVIndex(a, e), this.addUV(u, d, f), this.object.geometry.hasUVIndices = !0;
			} else this.addDefaultUV();
		},
		addPointGeometry: function(e) {
			this.object.geometry.type = "Points";
			let t = this.vertices.length;
			for (let n = 0, r = e.length; n < r; n++) {
				let r = this.parseVertexIndex(e[n], t);
				this.addVertexPoint(r), this.addColor(r);
			}
		},
		addLineGeometry: function(e, t) {
			this.object.geometry.type = "Line";
			let n = this.vertices.length, r = this.uvs.length;
			for (let t = 0, r = e.length; t < r; t++) this.addVertexLine(this.parseVertexIndex(e[t], n));
			for (let e = 0, n = t.length; e < n; e++) this.addUVLine(this.parseUVIndex(t[e], r));
		}
	};
	return e.startObject("", !1), e;
}
var sx = class extends ge {
	constructor(e) {
		super(e), this.materials = null;
	}
	load(e, t, n, r) {
		let i = this, a = new se(this.manager);
		a.setPath(this.path), a.setRequestHeader(this.requestHeader), a.setWithCredentials(this.withCredentials), a.load(e, function(n) {
			try {
				t(i.parse(n));
			} catch (t) {
				r ? r(t) : console.error(t), i.manager.itemError(e);
			}
		}, n, r);
	}
	setMaterials(e) {
		return this.materials = e, this;
	}
	parse(e) {
		let t = new ox();
		e.indexOf("\r\n") !== -1 && (e = e.replace(/\r\n/g, "\n")), e.indexOf("\\\n") !== -1 && (e = e.replace(/\\\n/g, ""));
		let n = e.split("\n"), r = [];
		for (let e = 0, i = n.length; e < i; e++) {
			let i = n[e].trimStart();
			if (i.length === 0) continue;
			let a = i.charAt(0);
			if (a !== "#") {
				if (a === "v") {
					let e = i.split($b);
					switch (e[0]) {
						case "v":
							t.vertices.push(parseFloat(e[1]), parseFloat(e[2]), parseFloat(e[3])), e.length >= 7 ? (ax.setRGB(parseFloat(e[4]), parseFloat(e[5]), parseFloat(e[6]), Pe), t.colors.push(ax.r, ax.g, ax.b)) : t.colors.push(void 0, void 0, void 0);
							break;
						case "vn":
							t.normals.push(parseFloat(e[1]), parseFloat(e[2]), parseFloat(e[3]));
							break;
						case "vt": t.uvs.push(parseFloat(e[1]), parseFloat(e[2]));
					}
				} else if (a === "f") {
					let e = i.slice(1).trim().split($b), n = [];
					for (let t = 0, r = e.length; t < r; t++) {
						let r = e[t];
						if (r.length > 0) {
							let e = r.split("/");
							n.push(e);
						}
					}
					let r = n[0];
					for (let e = 1, i = n.length - 1; e < i; e++) {
						let i = n[e], a = n[e + 1];
						t.addFace(r[0], i[0], a[0], r[1], i[1], a[1], r[2], i[2], a[2]);
					}
				} else if (a === "l") {
					let e = i.substring(1).trim().split(" "), n = [], r = [];
					if (i.indexOf("/") === -1) n = e;
					else for (let t = 0, i = e.length; t < i; t++) {
						let i = e[t].split("/");
						i[0] !== "" && n.push(i[0]), i[1] !== "" && r.push(i[1]);
					}
					t.addLineGeometry(n, r);
				} else if (a === "p") {
					let e = i.slice(1).trim().split(" ");
					t.addPointGeometry(e);
				} else if ((r = Yb.exec(i)) !== null) {
					let e = (" " + r[0].slice(1).trim()).slice(1);
					t.startObject(e);
				} else if (Zb.test(i)) t.object.startMaterial(i.substring(7).trim(), t.materialLibraries);
				else if (Xb.test(i)) t.materialLibraries.push(i.substring(7).trim());
				else if (Qb.test(i)) console.warn("THREE.OBJLoader: Rendering identifier \"usemap\" not supported. Textures must be defined in MTL files.");
				else if (a === "s") {
					if (r = i.split(" "), r.length > 1) {
						let e = r[1].trim().toLowerCase();
						t.object.smooth = e !== "0" && e !== "off";
					} else t.object.smooth = !0;
					let e = t.object.currentMaterial();
					e && (e.smooth = t.object.smooth);
				} else {
					if (i === "\0") continue;
					console.warn("THREE.OBJLoader: Unexpected line: \"" + i + "\"");
				}
			}
		}
		t.finalize();
		let i = new le();
		if (i.materialLibraries = [].concat(t.materialLibraries), t.objects.length !== 1 || t.objects[0].geometry.vertices.length !== 0) for (let e = 0, n = t.objects.length; e < n; e++) {
			let n = t.objects[e], r = n.geometry, a = n.materials, o = r.type === "Line", s = r.type === "Points", c = !1;
			if (r.vertices.length === 0) continue;
			let l = new te();
			l.setAttribute("position", new ce(r.vertices, 3)), r.normals.length > 0 && l.setAttribute("normal", new ce(r.normals, 3)), r.colors.length > 0 && (c = !0, l.setAttribute("color", new ce(r.colors, 3))), r.hasUVIndices === !0 && l.setAttribute("uv", new ce(r.uvs, 2));
			let u = [];
			for (let e = 0, n = a.length; e < n; e++) {
				let n = a[e], r = n.name + "_" + n.smooth + "_" + c, i = t.materials[r];
				if (this.materials !== null) {
					if (i = this.materials.create(n.name), o && i && !(i instanceof pe)) {
						let e = new pe();
						ve.prototype.copy.call(e, i), e.color.copy(i.color), i = e;
					} else if (s && i && !(i instanceof Ae)) {
						let e = new Ae({
							size: 10,
							sizeAttenuation: !1
						});
						ve.prototype.copy.call(e, i), e.color.copy(i.color), e.map = i.map, i = e;
					}
				}
				i === void 0 && (i = o ? new pe() : s ? new Ae({
					size: 1,
					sizeAttenuation: !1
				}) : new we(), i.name = n.name, i.flatShading = !n.smooth, i.vertexColors = c, t.materials[r] = i), u.push(i);
			}
			let d;
			if (u.length > 1) {
				for (let e = 0, t = a.length; e < t; e++) {
					let t = a[e];
					l.addGroup(t.groupStart, t.groupCount, e);
				}
				d = o ? new me(l, u) : s ? new ke(l, u) : new xe(l, u);
			} else d = o ? new me(l, u[0]) : s ? new ke(l, u[0]) : new xe(l, u[0]);
			d.name = n.name, i.add(d);
		}
		else if (t.vertices.length > 0) {
			let e = new Ae({
				size: 1,
				sizeAttenuation: !1
			}), n = new te();
			n.setAttribute("position", new ce(t.vertices, 3)), t.colors.length > 0 && t.colors[0] !== void 0 && (n.setAttribute("color", new ce(t.colors, 3)), e.vertexColors = !0);
			let r = new ke(n, e);
			i.add(r);
		}
		return i;
	}
}, cx = class extends ge {
	constructor(e) {
		super(e);
	}
	load(e, t, n, r) {
		let i = this, a = new se(this.manager);
		a.setPath(this.path), a.setResponseType("arraybuffer"), a.setRequestHeader(this.requestHeader), a.setWithCredentials(this.withCredentials), a.load(e, function(n) {
			try {
				t(i.parse(n));
			} catch (t) {
				r ? r(t) : console.error(t), i.manager.itemError(e);
			}
		}, n, r);
	}
	parse(e) {
		function t(e) {
			let t = new DataView(e);
			if (84 + t.getUint32(80, !0) * 50 === t.byteLength) return !0;
			let r = [
				115,
				111,
				108,
				105,
				100
			];
			for (let e = 0; e < 5; e++) if (n(r, t, e)) return !1;
			return !0;
		}
		function n(e, t, n) {
			for (let r = 0, i = e.length; r < i; r++) if (e[r] !== t.getUint8(n + r)) return !1;
			return !0;
		}
		function r(e) {
			let t = new DataView(e), n = t.getUint32(80, !0), r, i, a, o = !1, s, c, l, u, d;
			for (let e = 0; e < 70; e++) t.getUint32(e, !1) == 1129270351 && t.getUint8(e + 4) == 82 && t.getUint8(e + 5) == 61 && (o = !0, s = new Float32Array(n * 3 * 3), c = t.getUint8(e + 6) / 255, l = t.getUint8(e + 7) / 255, u = t.getUint8(e + 8) / 255, d = t.getUint8(e + 9) / 255);
			let f = new te(), p = new Float32Array(n * 3 * 3), m = new Float32Array(n * 3 * 3), h = new E();
			for (let e = 0; e < n; e++) {
				let n = 84 + e * 50, d = t.getFloat32(n, !0), f = t.getFloat32(n + 4, !0), g = t.getFloat32(n + 8, !0);
				if (o) {
					let e = t.getUint16(n + 48, !0);
					e & 32768 ? (r = c, i = l, a = u) : (r = (e & 31) / 31, i = (e >> 5 & 31) / 31, a = (e >> 10 & 31) / 31);
				}
				for (let c = 1; c <= 3; c++) {
					let l = n + c * 12, u = e * 3 * 3 + (c - 1) * 3;
					p[u] = t.getFloat32(l, !0), p[u + 1] = t.getFloat32(l + 4, !0), p[u + 2] = t.getFloat32(l + 8, !0), m[u] = d, m[u + 1] = f, m[u + 2] = g, o && (h.setRGB(r, i, a, Pe), s[u] = h.r, s[u + 1] = h.g, s[u + 2] = h.b);
				}
			}
			return f.setAttribute("position", new w(p, 3)), f.setAttribute("normal", new w(m, 3)), o && (f.setAttribute("color", new w(s, 3)), f.hasColors = !0, f.alpha = d), f;
		}
		function i(e) {
			let t = new te(), n = /solid([\s\S]*?)endsolid/g, r = /facet([\s\S]*?)endfacet/g, i = /solid\s(.+)/, a = 0, o = "[\\s]+([+-]?(?:\\d*)(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)", s = RegExp("vertex" + o + o + o, "g"), c = RegExp("normal" + o + o + o, "g"), l = [], u = [], d = [], f = new O(), p, m = 0, h = 0, g = 0;
			for (; (p = n.exec(e)) !== null;) {
				h = g;
				let e = p[0], n = (p = i.exec(e)) === null ? "" : p[1];
				for (d.push(n); (p = r.exec(e)) !== null;) {
					let e = 0, t = 0, n = p[0];
					for (; (p = c.exec(n)) !== null;) f.x = parseFloat(p[1]), f.y = parseFloat(p[2]), f.z = parseFloat(p[3]), t++;
					for (; (p = s.exec(n)) !== null;) l.push(parseFloat(p[1]), parseFloat(p[2]), parseFloat(p[3])), u.push(f.x, f.y, f.z), e++, g++;
					t !== 1 && console.error("THREE.STLLoader: Something isn't right with the normal of face number " + a), e !== 3 && console.error("THREE.STLLoader: Something isn't right with the vertices of face number " + a), a++;
				}
				let o = h, _ = g - h;
				t.userData.groupNames = d, t.addGroup(o, _, m), m++;
			}
			return t.setAttribute("position", new ce(l, 3)), t.setAttribute("normal", new ce(u, 3)), t;
		}
		function a(e) {
			return typeof e == "string" ? e : new TextDecoder().decode(e);
		}
		function o(e) {
			if (typeof e == "string") {
				let t = new Uint8Array(e.length);
				for (let n = 0; n < e.length; n++) t[n] = e.charCodeAt(n) & 255;
				return t.buffer || t;
			}
			return e;
		}
		let s = o(e);
		return t(s) ? r(s) : i(a(e));
	}
}, lx = new O(), ux = new oe(), dx = new be(), fx = new be(), px = new je(), mx = new O(1, 1, 1), hx = new O(), gx = class extends Te {
	constructor(...e) {
		super(...e), this.urdfNode = null, this.urdfName = "";
	}
	copy(e, t) {
		return super.copy(e, t), this.urdfNode = e.urdfNode, this.urdfName = e.urdfName, this;
	}
}, _x = class extends gx {
	constructor(...e) {
		super(...e), this.isURDFCollider = !0, this.type = "URDFCollider";
	}
}, vx = class extends gx {
	constructor(...e) {
		super(...e), this.isURDFVisual = !0, this.type = "URDFVisual";
	}
}, yx = class extends gx {
	constructor(...e) {
		super(...e), this.isURDFLink = !0, this.type = "URDFLink", this.name = "", this.inertial = {
			mass: 0,
			origin: {
				xyz: [
					0,
					0,
					0
				],
				rpy: [
					0,
					0,
					0
				]
			},
			inertia: {
				ixx: 0,
				ixy: 0,
				ixz: 0,
				iyy: 0,
				iyz: 0,
				izz: 0
			}
		};
	}
	copy(e, t) {
		return super.copy(e, t), this.inertial = {
			mass: e.inertial.mass,
			origin: {
				xyz: [...e.inertial.origin.xyz],
				rpy: [...e.inertial.origin.rpy]
			},
			inertia: { ...e.inertial.inertia }
		}, this;
	}
}, bx = class extends gx {
	get jointType() {
		return this._jointType;
	}
	set jointType(e) {
		if (this.jointType !== e) switch (this._jointType = e, this.matrixWorldNeedsUpdate = !0, e) {
			case "fixed":
				this.jointValue = [];
				break;
			case "continuous":
			case "revolute":
			case "prismatic":
				this.jointValue = [,].fill(0);
				break;
			case "planar":
				this.jointValue = [
					,
					,
					,
				].fill(0), this.axis = new O(0, 0, 1);
				break;
			case "floating": this.jointValue = [
				,
				,
				,
				,
				,
				,
			].fill(0);
		}
	}
	get angle() {
		return this.jointValue[0];
	}
	constructor(...e) {
		super(...e), this.isURDFJoint = !0, this.type = "URDFJoint", this.name = "", this.jointValue = null, this.jointType = "fixed", this.axis = new O(1, 0, 0), this.limit = {
			lower: 0,
			upper: 0,
			effort: 0,
			velocity: 0
		}, this.ignoreLimits = !1, this.origPosition = null, this.origQuaternion = null, this.mimicJoints = [];
	}
	copy(e, t) {
		return super.copy(e, t), this.jointType = e.jointType, this.axis = e.axis.clone(), this.limit.lower = e.limit.lower, this.limit.upper = e.limit.upper, this.limit.effort = e.limit.effort, this.limit.velocity = e.limit.velocity, this.ignoreLimits = !1, this.jointValue = [...e.jointValue], this.origPosition = e.origPosition ? e.origPosition.clone() : null, this.origQuaternion = e.origQuaternion ? e.origQuaternion.clone() : null, this.mimicJoints = [...e.mimicJoints], this;
	}
	setJointValue(...e) {
		e = e.map((e) => e === null ? null : parseFloat(e)), this.origPosition && this.origQuaternion || (this.origPosition = this.position.clone(), this.origQuaternion = this.quaternion.clone());
		let t = !1;
		switch (this.mimicJoints.forEach((n) => {
			t = n.updateFromMimickedJoint(...e) || t;
		}), this.jointType) {
			case "fixed": return t;
			case "continuous":
			case "revolute": {
				let n = e[0];
				return n == null || n === this.jointValue[0] ? t : (!this.ignoreLimits && this.jointType === "revolute" && (n = Math.min(this.limit.upper, n), n = Math.max(this.limit.lower, n)), this.quaternion.setFromAxisAngle(this.axis, n).premultiply(this.origQuaternion), this.jointValue[0] === n ? t : (this.jointValue[0] = n, this.matrixWorldNeedsUpdate = !0, !0));
			}
			case "prismatic": {
				let n = e[0];
				return n == null || n === this.jointValue[0] ? t : (this.ignoreLimits || (n = Math.min(this.limit.upper, n), n = Math.max(this.limit.lower, n)), this.position.copy(this.origPosition), lx.copy(this.axis).applyEuler(this.rotation), this.position.addScaledVector(lx, n), this.jointValue[0] === n ? t : (this.jointValue[0] = n, this.matrixWorldNeedsUpdate = !0, !0));
			}
			case "floating": return this.jointValue.every((t, n) => e[n] === t || e[n] === null) ? t : (this.jointValue[0] = e[0] === null ? this.jointValue[0] : e[0], this.jointValue[1] = e[1] === null ? this.jointValue[1] : e[1], this.jointValue[2] = e[2] === null ? this.jointValue[2] : e[2], this.jointValue[3] = e[3] === null ? this.jointValue[3] : e[3], this.jointValue[4] = e[4] === null ? this.jointValue[4] : e[4], this.jointValue[5] = e[5] === null ? this.jointValue[5] : e[5], fx.compose(this.origPosition, this.origQuaternion, mx), px.setFromEuler(ux.set(this.jointValue[3], this.jointValue[4], this.jointValue[5], "XYZ")), hx.set(this.jointValue[0], this.jointValue[1], this.jointValue[2]), dx.compose(hx, px, mx), fx.premultiply(dx), this.position.setFromMatrixPosition(fx), this.rotation.setFromRotationMatrix(fx), this.matrixWorldNeedsUpdate = !0, !0);
			case "planar": return this.jointValue.every((t, n) => e[n] === t || e[n] === null) ? t : (this.jointValue[0] = e[0] === null ? this.jointValue[0] : e[0], this.jointValue[1] = e[1] === null ? this.jointValue[1] : e[1], this.jointValue[2] = e[2] === null ? this.jointValue[2] : e[2], fx.compose(this.origPosition, this.origQuaternion, mx), px.setFromAxisAngle(this.axis, this.jointValue[2]), hx.set(this.jointValue[0], this.jointValue[1], 0), dx.compose(hx, px, mx), fx.premultiply(dx), this.position.setFromMatrixPosition(fx), this.rotation.setFromRotationMatrix(fx), this.matrixWorldNeedsUpdate = !0, !0);
		}
		return t;
	}
}, xx = class extends bx {
	constructor(...e) {
		super(...e), this.type = "URDFMimicJoint", this.mimicJoint = null, this.offset = 0, this.multiplier = 1;
	}
	updateFromMimickedJoint(...e) {
		let t = e.map((e) => e === null ? null : e * this.multiplier + this.offset);
		return super.setJointValue(...t);
	}
	copy(e, t) {
		return super.copy(e, t), this.mimicJoint = e.mimicJoint, this.offset = e.offset, this.multiplier = e.multiplier, this;
	}
}, Sx = class extends yx {
	constructor(...e) {
		super(...e), this.isURDFRobot = !0, this.urdfNode = null, this.urdfRobotNode = null, this.robotName = null, this.links = null, this.joints = null, this.colliders = null, this.visual = null, this.frames = null;
	}
	copy(e, t) {
		super.copy(e, t), this.urdfRobotNode = e.urdfRobotNode, this.robotName = e.robotName, this.links = {}, this.joints = {}, this.colliders = {}, this.visual = {}, this.traverse((t) => {
			t.isURDFJoint && t.urdfName in e.joints && (this.joints[t.urdfName] = t), t.isURDFLink && t.urdfName in e.links && (this.links[t.urdfName] = t), t.isURDFCollider && t.urdfName in e.colliders && (this.colliders[t.urdfName] = t), t.isURDFVisual && t.urdfName in e.visual && (this.visual[t.urdfName] = t);
		});
		for (let e in this.joints) this.joints[e].mimicJoints = this.joints[e].mimicJoints.map((e) => this.joints[e.name]);
		return this.frames = {
			...this.colliders,
			...this.visual,
			...this.links,
			...this.joints
		}, this;
	}
	getFrame(e) {
		return this.frames[e];
	}
	setJointValue(e, ...t) {
		let n = this.joints[e];
		return n ? n.setJointValue(...t) : !1;
	}
	setJointValues(e) {
		let t = !1;
		for (let n in e) {
			let r = e[n];
			t = Array.isArray(r) ? this.setJointValue(n, ...r) || t : this.setJointValue(n, r) || t;
		}
		return t;
	}
}, Cx = new b.Quaternion(), wx = new b.Euler();
function Tx(e) {
	return e ? e.trim().split(/\s+/g).map((e) => parseFloat(e)) : [
		0,
		0,
		0
	];
}
function Ex(e, t, n = !1) {
	n || e.rotation.set(0, 0, 0), wx.set(t[0], t[1], t[2], "ZYX"), Cx.setFromEuler(wx), Cx.multiply(e.quaternion), e.quaternion.copy(Cx);
}
var Dx = class {
	constructor(e) {
		this.manager = e || b.DefaultLoadingManager, this.loadMeshCb = this.defaultMeshLoader.bind(this), this.parseVisual = !0, this.parseCollision = !1, this.packages = "", this.workingPath = "", this.fetchOptions = {};
	}
	loadAsync(e) {
		return new Promise((t, n) => {
			this.load(e, t, null, n);
		});
	}
	load(e, t, n, r) {
		let i = this.manager, a = b.LoaderUtils.extractUrlBase(e), o = this.manager.resolveURL(e);
		i.itemStart(o), fetch(o, this.fetchOptions).then((e) => {
			if (e.ok) return n && n(null), e.text();
			throw Error(`URDFLoader: Failed to load url '${o}' with error code ${e.status} : ${e.statusText}.`);
		}).then((e) => {
			t(this.parse(e, this.workingPath || a)), i.itemEnd(o);
		}).catch((e) => {
			r ? r(e) : console.error("URDFLoader: Error loading file.", e), i.itemError(o), i.itemEnd(o);
		});
	}
	parse(e, t = this.workingPath) {
		let n = this.packages, r = this.loadMeshCb, i = this.parseVisual, a = this.parseCollision, o = this.manager, s = {}, c = {}, l = {};
		function u(e) {
			if (!/^package:\/\//.test(e)) return t ? t + e : e;
			let [r, i] = e.replace(/^package:\/\//, "").split(/\/(.+)/);
			if (typeof n == "string") return n.endsWith(r) ? n + "/" + i : n + "/" + r + "/" + i;
			if (typeof n == "function") return n(r) + "/" + i;
			if (typeof n == "object") return r in n ? n[r] + "/" + i : (console.error(`URDFLoader : ${r} not found in provided package list.`), null);
		}
		function d(e) {
			let t;
			return t = e instanceof Document ? [...e.children] : e instanceof Element ? [e] : [...new DOMParser().parseFromString(e, "text/xml").children], f(t.filter((e) => e.nodeName === "robot").pop());
		}
		function f(e) {
			let t = [...e.children], n = t.filter((e) => e.nodeName.toLowerCase() === "link"), r = t.filter((e) => e.nodeName.toLowerCase() === "joint"), i = t.filter((e) => e.nodeName.toLowerCase() === "material"), a = new Sx();
			a.robotName = e.getAttribute("name"), a.urdfRobotNode = e, i.forEach((e) => {
				let t = e.getAttribute("name");
				l[t] = h(e);
			});
			let o = {}, u = {};
			n.forEach((t) => {
				let n = t.getAttribute("name"), r = e.querySelector(`child[link="${n}"]`) === null;
				s[n] = m(t, o, u, r ? a : null);
			}), r.forEach((e) => {
				let t = e.getAttribute("name");
				c[t] = p(e);
			}), a.joints = c, a.links = s, a.colliders = u, a.visual = o;
			let d = Object.values(c);
			return d.forEach((e) => {
				e instanceof xx && c[e.mimicJoint].mimicJoints.push(e);
			}), d.forEach((e) => {
				let t = /* @__PURE__ */ new Set(), n = (e) => {
					if (t.has(e)) throw Error("URDFLoader: Detected an infinite loop of mimic joints.");
					t.add(e), e.mimicJoints.forEach((e) => {
						n(e);
					});
				};
				n(e);
			}), a.frames = {
				...u,
				...o,
				...s,
				...c
			}, a;
		}
		function p(e) {
			let t = [...e.children], n = e.getAttribute("type"), r, i = t.find((e) => e.nodeName.toLowerCase() === "mimic");
			i ? (r = new xx(), r.mimicJoint = i.getAttribute("joint"), r.multiplier = parseFloat(i.getAttribute("multiplier") || 1), r.offset = parseFloat(i.getAttribute("offset") || 0)) : r = new bx(), r.urdfNode = e, r.name = e.getAttribute("name"), r.urdfName = r.name, r.jointType = n;
			let a = null, o = null, c = [
				0,
				0,
				0
			], l = [
				0,
				0,
				0
			];
			t.forEach((e) => {
				let t = e.nodeName.toLowerCase();
				t === "origin" ? (c = Tx(e.getAttribute("xyz")), l = Tx(e.getAttribute("rpy"))) : t === "child" ? o = s[e.getAttribute("link")] : t === "parent" ? a = s[e.getAttribute("link")] : t === "limit" && (r.limit.lower = parseFloat(e.getAttribute("lower") || r.limit.lower), r.limit.upper = parseFloat(e.getAttribute("upper") || r.limit.upper), r.limit.effort = parseFloat(e.getAttribute("effort") || r.limit.effort), r.limit.velocity = parseFloat(e.getAttribute("velocity") || r.limit.velocity));
			}), a.add(r), r.add(o), Ex(r, l), r.position.set(c[0], c[1], c[2]);
			let u = t.filter((e) => e.nodeName.toLowerCase() === "axis")[0];
			if (u) {
				let e = u.getAttribute("xyz").split(/\s+/g).map((e) => parseFloat(e));
				r.axis = new b.Vector3(e[0], e[1], e[2]), r.axis.normalize();
			}
			return r;
		}
		function m(e, t, n, r = null) {
			r === null && (r = new yx());
			let o = [...e.children];
			r.name = e.getAttribute("name"), r.urdfName = r.name, r.urdfNode = e;
			let s = o.find((e) => e.nodeName.toLowerCase() === "inertial");
			return s && [...s.children].forEach((e) => {
				let t = e.nodeName.toLowerCase();
				t === "origin" ? (r.inertial.origin.xyz = Tx(e.getAttribute("xyz")), r.inertial.origin.rpy = Tx(e.getAttribute("rpy"))) : t === "mass" ? r.inertial.mass = parseFloat(e.getAttribute("value")) || 0 : t === "inertia" && (r.inertial.inertia.ixx = parseFloat(e.getAttribute("ixx")) || 0, r.inertial.inertia.ixy = parseFloat(e.getAttribute("ixy")) || 0, r.inertial.inertia.ixz = parseFloat(e.getAttribute("ixz")) || 0, r.inertial.inertia.iyy = parseFloat(e.getAttribute("iyy")) || 0, r.inertial.inertia.iyz = parseFloat(e.getAttribute("iyz")) || 0, r.inertial.inertia.izz = parseFloat(e.getAttribute("izz")) || 0);
			}), i && o.filter((e) => e.nodeName.toLowerCase() === "visual").forEach((e) => {
				let n = g(e, l);
				if (r.add(n), e.hasAttribute("name")) {
					let r = e.getAttribute("name");
					n.name = r, n.urdfName = r, t[r] = n;
				}
			}), a && o.filter((e) => e.nodeName.toLowerCase() === "collision").forEach((e) => {
				let t = g(e);
				if (r.add(t), e.hasAttribute("name")) {
					let r = e.getAttribute("name");
					t.name = r, t.urdfName = r, n[r] = t;
				}
			}), r;
		}
		function h(e) {
			let t = [...e.children], n = new b.MeshPhongMaterial();
			return n.name = e.getAttribute("name") || "", t.forEach((e) => {
				let t = e.nodeName.toLowerCase();
				if (t === "color") {
					let t = e.getAttribute("rgba").split(/\s/g).map((e) => parseFloat(e));
					n.color.setRGB(t[0], t[1], t[2]), n.opacity = t[3], n.transparent = t[3] < 1, n.depthWrite = !n.transparent;
				} else if (t === "texture") {
					let t = e.getAttribute("filename");
					if (t) {
						let e = new b.TextureLoader(o), r = u(t);
						n.map = e.load(r), n.map.colorSpace = b.SRGBColorSpace;
					}
				}
			}), n;
		}
		function g(e, t = {}) {
			let n = e.nodeName.toLowerCase() === "collision", i = [...e.children], a = null, s = i.filter((e) => e.nodeName.toLowerCase() === "material")[0];
			if (s) {
				let e = s.getAttribute("name");
				a = e && e in t ? t[e] : h(s);
			} else a = new b.MeshPhongMaterial();
			let c = n ? new _x() : new vx();
			return c.urdfNode = e, i.forEach((e) => {
				let t = e.nodeName.toLowerCase();
				if (t === "geometry") {
					let t = e.children[0].nodeName.toLowerCase();
					if (t === "mesh") {
						let t = u(e.children[0].getAttribute("filename"));
						if (t !== null) {
							let n = e.children[0].getAttribute("scale");
							if (n) {
								let e = Tx(n);
								c.scale.set(e[0], e[1], e[2]);
							}
							r(t, o, a, (e, t) => {
								t ? console.error("URDFLoader: Error loading mesh.", t) : e && (e.position.set(0, 0, 0), e.quaternion.identity(), c.add(e));
							});
						}
					} else if (t === "box") {
						let t = new b.Mesh();
						t.geometry = new b.BoxGeometry(1, 1, 1), t.material = a;
						let n = Tx(e.children[0].getAttribute("size"));
						t.scale.set(n[0], n[1], n[2]), c.add(t);
					} else if (t === "sphere") {
						let t = new b.Mesh();
						t.geometry = new b.SphereGeometry(1, 30, 30), t.material = a;
						let n = parseFloat(e.children[0].getAttribute("radius")) || 0;
						t.scale.set(n, n, n), c.add(t);
					} else if (t === "cylinder") {
						let t = new b.Mesh();
						t.geometry = new b.CylinderGeometry(1, 1, 1, 30), t.material = a;
						let n = parseFloat(e.children[0].getAttribute("radius")) || 0, r = parseFloat(e.children[0].getAttribute("length")) || 0;
						t.scale.set(n, r, n), t.rotation.set(Math.PI / 2, 0, 0), c.add(t);
					}
				} else if (t === "origin") {
					let t = Tx(e.getAttribute("xyz")), n = Tx(e.getAttribute("rpy"));
					c.position.set(t[0], t[1], t[2]), c.rotation.set(0, 0, 0), Ex(c, n);
				}
			}), c;
		}
		return d(e);
	}
	defaultMeshLoader(e, t, n, r) {
		/\.stl$/i.test(e) ? new cx(t).load(e, (e) => {
			r(new b.Mesh(e, n || new b.MeshPhongMaterial()));
		}, null, (e) => r(null, e)) : /\.dae$/i.test(e) ? new Jb(t).load(e, (e) => r(e.scene), null, (e) => r(null, e)) : console.warn(`URDFLoader: Could not load model at ${e}.\nNo loader available`);
	}
}, Ox = {
	visual: !0,
	collision: !1,
	modelAxes: !0,
	jointAxes: !1,
	centerOfMass: !1,
	inertia: !1,
	shadows: !1
};
function kx(e) {
	let t = [];
	for (let n of e.replace(/\\/g, "/").split("/")) n && n !== "." && (n === ".." ? t.pop() : t.push(n));
	return t.join("/").toLowerCase();
}
function Ax(e) {
	let t = e.isURDFJoint ? "joint" : e.isURDFLink || e.isURDFRobot ? "link" : void 0, n = e.children.map((e) => Ax(e)).filter((e) => e !== void 0);
	if (!t) return n.length === 1 ? n[0] : void 0;
	let r = e.urdfName || e.name || (e.isURDFRobot ? "robot" : t);
	return {
		id: `${t}:${r}`,
		name: r,
		type: t,
		children: n
	};
}
function jx(e) {
	e.traverse((e) => {
		let t = e;
		t.geometry?.dispose();
		let n = t.material;
		if (Array.isArray(n)) for (let e of n) e.dispose();
		else n?.dispose();
	});
}
var Mx = class {
	root = new b.Group();
	frameId;
	#e;
	#t = [];
	#n = { ...Ox };
	#r;
	#i;
	#a = /* @__PURE__ */ new Map();
	#o = new b.Box3();
	async load(e, t) {
		this.clear();
		let n = /* @__PURE__ */ new Map();
		for (let t of e) {
			n.set(t.name.toLowerCase(), t);
			let e = t.webkitRelativePath;
			e && n.set(kx(e), t);
		}
		let r = e.find((e) => /\.urdf$|\.xml$/i.test(e.name));
		if (!r) throw Error("未找到 .urdf 或 .xml 文件");
		let i = t ?? await r.text(), a = r.webkitRelativePath, o = a ? kx(a).split("/").slice(0, -1).join("/") : "", s = /* @__PURE__ */ new Set(), c = [], l = (e) => {
			let t = e.replace(/^package:\/\//, ""), r = kx(e.startsWith("package://") ? t : `${o}/${e}`), i = r.split("/").pop(), a = n.get(r), s = [...n].find(([e]) => e.endsWith(`/${r}`) || e.endsWith(`/${i}`)), c = a ?? n.get(i) ?? s?.[1];
			if (!c) return;
			let l = URL.createObjectURL(c);
			return this.#t.push(l), l;
		}, u = new cx(), d = new Jb(), f = new sx(), p = new Dx();
		p.loadMeshCb = (e, t, n, r) => {
			c.push(new Promise((t) => {
				let i = l(e);
				if (!i) {
					s.add(e), r(new b.Object3D(), /* @__PURE__ */ Error(`mesh 未找到: ${e}`)), t();
					return;
				}
				let a = (n, i) => {
					i && s.add(e), r(n, i), t();
				}, o = e.split(".").pop()?.toLowerCase();
				o === "stl" ? u.load(i, (e) => a(new b.Mesh(e, n ?? new b.MeshStandardMaterial({
					color: 10132122,
					roughness: .7
				}))), void 0, (e) => a(new b.Object3D(), e)) : o === "dae" ? d.load(i, (e) => a(e?.scene ?? new b.Object3D()), void 0, (e) => a(new b.Object3D(), e)) : o === "obj" ? f.load(i, a, void 0, (e) => a(new b.Object3D(), e)) : a(new b.Object3D(), /* @__PURE__ */ Error(`不支持的 mesh 格式: ${o ?? "unknown"}`));
			}));
		};
		let m;
		try {
			m = p.parse(i), await Promise.all(c);
		} catch (e) {
			throw this.clear(), e;
		}
		this.#e = m, this.root.add(m), m.updateMatrixWorld(!0), this.#o = new b.Box3().setFromObject(m), this.#s(m), this.#c(m), this.#l(m), this.applyDisplayOptions(this.#n);
		let h = [];
		for (let [e, t] of Object.entries(m.joints)) {
			if (t.jointType === "fixed" || t.jointType === "floating") continue;
			let n = t.jointType === "continuous";
			h.push({
				name: e,
				type: t.jointType,
				lower: n ? -Math.PI : Number(t.limit.lower),
				upper: n ? Math.PI : Number(t.limit.upper),
				value: Number(t.angle) || 0
			});
		}
		return {
			robotName: m.robotName || r.name,
			sourceFile: r.name,
			sourceText: i,
			joints: h,
			tree: Ax(m),
			missingMeshes: [...s].sort(),
			bounds: this.#o.clone()
		};
	}
	#s(e) {
		this.#a.clear(), e.traverse((e) => {
			let t = e, n = t.isURDFJoint ? "joint" : t.isURDFLink || t.isURDFRobot ? "link" : void 0;
			n && this.#a.set(`${n}:${t.urdfName || t.name}`, e);
		});
	}
	#c(e) {
		for (let t of Object.values(e.colliders)) t.traverse((e) => {
			let t = e;
			t.isMesh && (t.material = new b.MeshBasicMaterial({
				color: 15120384,
				wireframe: !0,
				transparent: !0,
				opacity: .55,
				depthWrite: !1
			}));
		});
	}
	#l(e) {
		this.#r = new b.AxesHelper(Math.max(.5, this.#o.getSize(new b.Vector3()).length() * .12)), this.#r.userData.urdfHelper = "modelAxes", this.root.add(this.#r);
		for (let t of Object.values(e.joints)) {
			if (t.jointType === "fixed" || t.jointType === "floating") continue;
			let e = new b.ArrowHelper(t.axis.clone().normalize(), new b.Vector3(), .3, 16119285, .08, .04);
			e.userData.urdfHelper = "jointAxes", t.add(e);
		}
		for (let t of Object.values(e.links)) {
			let e = t.inertial;
			if (!e || e.mass <= 0) continue;
			let n = new b.Vector3(...e.origin.xyz), r = new b.Euler(...e.origin.rpy, "XYZ"), i = new b.Mesh(new b.SphereGeometry(.035, 12, 8), new b.MeshBasicMaterial({ color: 16119285 }));
			i.position.copy(n), i.userData.urdfHelper = "centerOfMass", t.add(i);
			let { ixx: a, iyy: o, izz: s } = e.inertia, c = 5 / (2 * e.mass), l = new b.Vector3(Math.sqrt(Math.max(1e-6, c * (o + s - a))), Math.sqrt(Math.max(1e-6, c * (a + s - o))), Math.sqrt(Math.max(1e-6, c * (a + o - s)))), u = new b.Mesh(new b.SphereGeometry(1, 12, 8), new b.MeshBasicMaterial({
				color: 5153279,
				wireframe: !0,
				transparent: !0,
				opacity: .6
			}));
			u.position.copy(n), u.rotation.copy(r), u.scale.copy(l), u.userData.urdfHelper = "inertia", t.add(u);
		}
	}
	applyDisplayOptions(e) {
		this.#n = { ...e }, this.root.traverse((t) => {
			let n = t;
			n.isURDFVisual && (t.visible = e.visual), n.isURDFCollider && (t.visible = e.collision);
			let r = t.userData.urdfHelper;
			r && (t.visible = e[r]);
			let i = t;
			i.isMesh && !r && (i.castShadow = e.shadows, i.receiveShadow = e.shadows);
		});
	}
	setJoint(e, t) {
		this.#e?.setJointValue(e, t), this.#i?.update();
	}
	setJointValues(e) {
		this.#e?.setJointValues(e), this.#i?.update();
	}
	setIgnoreLimits(e) {
		if (this.#e) for (let t of Object.values(this.#e.joints)) t.ignoreLimits = e;
	}
	resetJoints() {
		if (this.#e) for (let e of Object.values(this.#e.joints)) e.jointType !== "fixed" && e.jointType !== "floating" && e.setJointValue(0);
	}
	selectNode(e) {
		if (this.#i &&= (this.root.remove(this.#i), this.#i.geometry.dispose(), this.#i.material.dispose(), void 0), !e) return;
		let t = this.#a.get(e);
		if (t) return this.#i = new b.BoxHelper(t, 16119285), this.root.add(this.#i), new b.Box3().setFromObject(t);
	}
	get bounds() {
		return this.#o.clone();
	}
	update(e) {}
	clear() {
		this.#e &&= (this.root.remove(this.#e), jx(this.#e), void 0), this.#r &&= (this.root.remove(this.#r), jx(this.#r), void 0), this.#i &&= (this.root.remove(this.#i), jx(this.#i), void 0);
		for (let e of this.#t) URL.revokeObjectURL(e);
		this.#t = [], this.#a.clear(), this.#o.makeEmpty();
	}
	dispose() {
		this.clear();
	}
}, Nx = {
	urdfViewport: 320,
	urdfInspector: 220
}, Px = "__urdf_editor__", Fx = {
	visual: !0,
	collision: !1,
	modelAxes: !0,
	jointAxes: !1,
	centerOfMass: !1,
	inertia: !1,
	shadows: !1,
	grid: !0,
	lighting: !0
};
function Ix(e, t) {
	let n = new DOMParser().parseFromString(e, "application/xml"), r = n.querySelector("parsererror");
	if (r) throw Error(r.textContent?.trim() || t("xmlFormatError"));
	if (n.documentElement.nodeName.toLowerCase() !== "robot") throw Error(t("urdfRootError"));
}
function Lx(e, t) {
	let n = t.match(/line\s+(\d+).*column\s+(\d+)/i);
	if (!e || !n) return;
	let r = Math.min(Number(n[1]), e.state.doc.lines), i = e.state.doc.line(Math.max(1, r)), a = Math.min(i.to, i.from + Math.max(0, Number(n[2]) - 1));
	e.dispatch({
		selection: { anchor: a },
		scrollIntoView: !0
	}), e.focus();
}
function Rx(e) {
	e.current++;
}
function zx(e, t) {
	let n = URL.createObjectURL(new Blob([e], { type: "application/xml" })), r = document.createElement("a");
	r.href = n, r.download = t, r.click(), URL.revokeObjectURL(n);
}
function Bx({ initialValue: e, theme: t, viewRef: n, onChange: r }) {
	let i = o(null), s = o(e), c = o(r);
	return c.current = r, a(() => {
		if (!i.current) return;
		let e = new J({
			parent: i.current,
			state: L.create({
				doc: s.current,
				extensions: [
					Iv,
					qy(),
					J.lineWrapping,
					J.theme({
						"&": {
							height: "100%",
							background: "transparent"
						},
						".cm-scroller": {
							fontFamily: "var(--mono)",
							fontSize: "var(--fs-ui)"
						},
						".cm-gutters": {
							background: "var(--surface-soft)",
							color: "var(--text-faint)",
							borderRight: "1px solid var(--border-soft)"
						},
						".cm-content": { caretColor: "var(--foreground)" },
						".cm-cursor": { borderLeftColor: "var(--foreground)" },
						".cm-activeLine, .cm-activeLineGutter": { background: "var(--surface-soft)" }
					}, { dark: t === "dark" }),
					J.updateListener.of((e) => {
						e.docChanged && c.current(e.state.doc.toString());
					})
				]
			})
		});
		return n.current = e, () => {
			n.current = null, e.destroy();
		};
	}, [t, n]), /* @__PURE__ */ k("div", {
		className: "urdf-code-editor",
		ref: i
	});
}
function Vx({ node: e, onSelect: t }) {
	return e.children.length === 0 ? /* @__PURE__ */ A(c, {
		className: `urdf-tree-node ${e.type}`,
		onClick: () => t(e),
		children: [/* @__PURE__ */ k("span", { children: e.type === "link" ? "L" : "J" }), e.name]
	}) : /* @__PURE__ */ A("details", {
		className: "urdf-tree-branch",
		open: !0,
		children: [/* @__PURE__ */ k("summary", { children: /* @__PURE__ */ A(c, {
			className: `urdf-tree-node ${e.type}`,
			onClick: () => t(e),
			children: [/* @__PURE__ */ k("span", { children: e.type === "link" ? "L" : "J" }), e.name]
		}) }), /* @__PURE__ */ k("div", { children: e.children.map((e) => /* @__PURE__ */ k(Vx, {
			node: e,
			onSelect: t
		}, e.id)) })]
	});
}
function Hx({ ctx: e, isMobile: t = !1 }) {
	let n = e.bridge, i = e.theme, b = e.pluginStates["urdf-editor"], x = b?.inspectorPercent ?? 35, S = r((t) => {
		e.onPluginStateChange("urdf-editor", {
			...b,
			inspectorPercent: t
		});
	}, [e, b]), C = ee(), { t: w } = y(), te = o(null), T = o(null), E = o(null), ne = o(null), re = o(null), ie = o(null), ae = o(""), oe = o(0), [se, ce] = s([]), [D, le] = s(), [ue, de] = s([]), [fe, pe] = s(""), [me, he] = s(0), [ge, _e] = s(!1), [ve, ye] = s("files"), [be, xe] = s(!1), [Se, Ce] = s(), [we, Te] = s(Fx), [Ee, De] = s("rad"), [Oe, ke] = s(!1), [Ae, je] = s(!1), [Me, Ne] = s(!1);
	a(() => {
		C.current?.setLayout({
			viewport: 100 - x,
			inspector: x
		});
	}, [x, C]), a(() => {
		if (!te.current) return;
		let e = new p(te.current, new _());
		return e.fixedFrame = "model", T.current = e, () => {
			Rx(oe), e.dispose(), T.current = null, E.current = null;
		};
	}, []), a(() => {
		re.current?.setAttribute("webkitdirectory", ""), re.current?.setAttribute("directory", "");
	}, []), a(() => {
		let e = E.current, t = T.current;
		if (!e || !t) return;
		let { grid: n, lighting: r, ...i } = we;
		e.applyDisplayOptions(i), t.setGridVisible(n), t.setLightingVisible(r), t.setShadowsEnabled(we.shadows), t.invalidate();
	}, [we]), a(() => {
		E.current?.setIgnoreLimits(Oe);
	}, [Oe]), a(() => {
		if (Ae) return n.subscribe("/joint_states", (e) => {
			if (e.kind !== "raw") return;
			let t = e.message;
			if (!t.name || !t.position) return;
			let n = {};
			for (let e = 0; e < t.name.length; e++) n[t.name[e]] = Number(t.position[e]);
			E.current?.setJointValues(n), de((e) => e.map((e) => n[e.name] == null ? e : {
				...e,
				value: n[e.name]
			})), T.current?.invalidate();
		});
	}, [n, Ae]);
	let Pe = r(async (e, t) => {
		let n = T.current;
		if (!n) return;
		let r = ++oe.current, i = new Mx();
		i.frameId = "model", xe(!0), Ce(void 0);
		try {
			let a = e.find((e) => /\.urdf$|\.xml$/i.test(e.name)), o = t ?? await a?.text() ?? "";
			Ix(o, w);
			let s = await i.load(e, o);
			if (r !== oe.current || T.current !== n) {
				i.dispose();
				return;
			}
			let { grid: c, lighting: l, ...u } = we;
			return i.applyDisplayOptions(u), i.setIgnoreLimits(Oe), n.addDisplay(Px, i), E.current = i, n.flyToFit(s.bounds), n.invalidate(), le(s), de(s.joints), s;
		} catch (e) {
			if (i.dispose(), r === oe.current) {
				let t = e instanceof Error ? e.message : String(e);
				Ce(t === "未找到 .urdf 或 .xml 文件" ? w("noUrdfFile") : t);
			}
			return;
		} finally {
			r === oe.current && xe(!1);
		}
	}, [
		Oe,
		we,
		w
	]), Fe = r(async (e) => {
		let t = [...e], n = await Pe(t);
		n && (ce(t), pe(n.sourceText), ae.current = n.sourceText, he((e) => e + 1), _e(!1), ye("structure"));
	}, [Pe]), Ie = r(async () => {
		if (!D) return;
		try {
			Ix(fe, w);
		} catch (e) {
			let t = e instanceof Error ? e.message : String(e);
			Ce(t), Lx(ie.current, t);
			return;
		}
		let e = new File([fe], D.sourceFile, { type: "application/xml" }), t = se.map((t) => t.name === D.sourceFile ? e : t);
		await Pe(t, fe) && (ce(t), ae.current = fe, _e(!1));
	}, [
		se,
		Pe,
		D,
		fe,
		w
	]), Le = r(() => {
		oe.current++, T.current?.removeDisplay(Px), E.current = null, ce([]), le(void 0), de([]), pe(""), ae.current = "", _e(!1), Ce(void 0), xe(!1), je(!1), ye("files");
	}, []), Re = r((e, t) => {
		E.current?.setJoint(e, t), de((n) => n.map((n) => n.name === e ? {
			...n,
			value: t
		} : n)), T.current?.invalidate();
	}, []), ze = r(() => {
		E.current?.resetJoints(), de((e) => e.map((e) => ({
			...e,
			value: 0
		}))), T.current?.invalidate();
	}, []), Be = (e) => {
		Te((t) => ({
			...t,
			[e]: !t[e]
		}));
	}, Ve = (e, t) => Ee === "deg" && t !== "prismatic" ? e * 180 / Math.PI : e, He = (e, t) => Ee === "deg" && t !== "prismatic" ? e * Math.PI / 180 : e;
	return /* @__PURE__ */ A(f, {
		className: `urdf-editor-page ${Me ? "dragging" : ""}`,
		onDragEnter: (e) => {
			e.preventDefault(), Ne(!0);
		},
		onDragOver: (e) => e.preventDefault(),
		onDragLeave: (e) => {
			e.currentTarget === e.target && Ne(!1);
		},
		onDrop: (e) => {
			e.preventDefault(), Ne(!1), e.dataTransfer.files.length && Fe(e.dataTransfer.files);
		},
		children: [/* @__PURE__ */ A(v, { children: [
			/* @__PURE__ */ A(c, {
				onClick: () => ne.current?.click(),
				children: [
					/* @__PURE__ */ k(yb, {}),
					" ",
					w("openFile")
				]
			}),
			/* @__PURE__ */ A(c, {
				onClick: () => re.current?.click(),
				children: [
					/* @__PURE__ */ k(xb, {}),
					" ",
					w("openFolder")
				]
			}),
			/* @__PURE__ */ k("input", {
				ref: ne,
				type: "file",
				multiple: !0,
				accept: ".urdf,.xml,.stl,.dae,.obj",
				hidden: !0,
				onChange: (e) => {
					e.target.files?.length && Fe(e.target.files), e.target.value = "";
				}
			}),
			/* @__PURE__ */ k("input", {
				ref: re,
				type: "file",
				multiple: !0,
				hidden: !0,
				onChange: (e) => {
					e.target.files?.length && Fe(e.target.files), e.target.value = "";
				}
			}),
			/* @__PURE__ */ k("span", { className: "toolbar-divider" }),
			/* @__PURE__ */ k(c, {
				selected: we.visual,
				onClick: () => Be("visual"),
				children: w("visual")
			}),
			/* @__PURE__ */ k(c, {
				selected: we.collision,
				onClick: () => Be("collision"),
				children: w("collision")
			}),
			/* @__PURE__ */ k(c, {
				selected: we.centerOfMass,
				onClick: () => Be("centerOfMass"),
				children: w("centerOfMass")
			}),
			/* @__PURE__ */ k(c, {
				selected: we.inertia,
				onClick: () => Be("inertia"),
				children: w("inertia")
			}),
			/* @__PURE__ */ k(c, {
				selected: we.modelAxes,
				onClick: () => Be("modelAxes"),
				children: w("modelAxes")
			}),
			/* @__PURE__ */ k(c, {
				selected: we.jointAxes,
				onClick: () => Be("jointAxes"),
				children: w("jointAxes")
			}),
			/* @__PURE__ */ k(c, {
				selected: we.grid,
				onClick: () => Be("grid"),
				title: w("grid"),
				"aria-label": w("grid"),
				children: /* @__PURE__ */ k(Cb, {})
			}),
			/* @__PURE__ */ k(c, {
				selected: we.lighting,
				onClick: () => Be("lighting"),
				title: w("lighting"),
				"aria-label": w("lighting"),
				children: /* @__PURE__ */ k(Tb, {})
			}),
			/* @__PURE__ */ k(c, {
				selected: we.shadows,
				onClick: () => Be("shadows"),
				children: w("shadows")
			}),
			/* @__PURE__ */ k("span", { className: "spacer" }),
			/* @__PURE__ */ k(c, {
				disabled: !D,
				onClick: () => D && T.current?.flyToFit(E.current?.bounds ?? D.bounds),
				title: w("fitModel"),
				"aria-label": w("fitModel"),
				children: /* @__PURE__ */ k(Db, {})
			}),
			/* @__PURE__ */ k(c, {
				onClick: () => T.current?.resetView(),
				title: w("resetView"),
				"aria-label": w("resetView"),
				children: /* @__PURE__ */ k(jb, {})
			}),
			/* @__PURE__ */ k(c, {
				disabled: !D,
				onClick: Le,
				title: w("unloadModel"),
				"aria-label": w("unloadModel"),
				children: /* @__PURE__ */ k(Lb, {})
			})
		] }), /* @__PURE__ */ A(m, {
			id: "urdf-workspace",
			groupRef: C,
			className: "urdf-workspace",
			disabled: t,
			defaultLayout: {
				viewport: 100 - x,
				inspector: x
			},
			resizeTargetMinimumSize: {
				fine: 6,
				coarse: 20
			},
			onLayoutChanged: (e, t) => {
				if (!t.isUserInteraction) return;
				let n = Object.values(e).reduce((e, t) => e + t, 0);
				n > 0 && S(e.inspector / n * 100);
			},
			children: [
				/* @__PURE__ */ k(g, {
					id: "viewport",
					minSize: t ? 0 : Nx.urdfViewport,
					children: /* @__PURE__ */ A("div", {
						className: "urdf-viewport",
						children: [
							/* @__PURE__ */ k("canvas", { ref: te }),
							!D && !be && /* @__PURE__ */ A("div", {
								className: "urdf-empty",
								children: [
									/* @__PURE__ */ k(db, {}),
									/* @__PURE__ */ k("strong", { children: w("loadUrdfFiles") }),
									/* @__PURE__ */ k("span", { children: w("dropFilesHint") })
								]
							}),
							be && /* @__PURE__ */ k("div", {
								className: "urdf-loading",
								role: "status",
								children: w("parsingModel")
							}),
							Me && /* @__PURE__ */ k("div", {
								className: "urdf-drop-target",
								children: w("dropToLoad")
							}),
							Se && /* @__PURE__ */ k("div", {
								className: "urdf-error",
								role: "alert",
								children: Se
							})
						]
					})
				}),
				/* @__PURE__ */ k(h, { "aria-label": w("structure") }),
				/* @__PURE__ */ k(g, {
					id: "inspector",
					minSize: t ? 0 : Nx.urdfInspector,
					maxSize: "55%",
					children: /* @__PURE__ */ A("aside", {
						className: "urdf-inspector",
						children: [/* @__PURE__ */ k("nav", {
							className: "inspector-tabs",
							children: [
								"files",
								"structure",
								"joints",
								"source"
							].map((e) => /* @__PURE__ */ k(c, {
								selected: ve === e,
								onClick: () => ye(e),
								children: w(e === "files" ? "files" : e === "structure" ? "structure" : e === "joints" ? "joints" : "source")
							}, e))
						}), /* @__PURE__ */ A("div", {
							className: "inspector-body",
							children: [
								ve === "files" && /* @__PURE__ */ A("div", {
									className: "urdf-file-list",
									children: [se.length === 0 ? /* @__PURE__ */ k(u, { children: w("noModelFiles") }) : se.map((e) => /* @__PURE__ */ A("div", {
										className: e.name === D?.sourceFile ? "source" : "",
										children: [
											e.name === D?.sourceFile ? /* @__PURE__ */ k(_b, {}) : /* @__PURE__ */ k(db, {}),
											/* @__PURE__ */ k("span", { children: e.webkitRelativePath || e.name }),
											/* @__PURE__ */ A("small", { children: [Math.max(1, Math.round(e.size / 1024)), " KB"] })
										]
									}, `${e.name}-${e.size}`)), D?.missingMeshes.map((e) => /* @__PURE__ */ A("div", {
										className: "missing",
										children: [
											/* @__PURE__ */ k(hb, {}),
											/* @__PURE__ */ k("span", { children: e }),
											/* @__PURE__ */ k("small", { children: w("missing") })
										]
									}, e))]
								}),
								ve === "structure" && /* @__PURE__ */ k("div", {
									className: "urdf-structure",
									children: D?.tree ? /* @__PURE__ */ k(Vx, {
										node: D.tree,
										onSelect: (e) => {
											let t = E.current?.selectNode(e.id);
											t && !t.isEmpty() && T.current?.flyToFit(t), T.current?.invalidate();
										}
									}) : /* @__PURE__ */ k(u, { children: w("structureEmpty") })
								}),
								ve === "joints" && /* @__PURE__ */ A("div", {
									className: "urdf-joints",
									children: [
										/* @__PURE__ */ A(v, {
											className: "joint-toolbar",
											children: [/* @__PURE__ */ A("div", {
												className: "segmented-control",
												children: [/* @__PURE__ */ k(c, {
													selected: Ee === "rad",
													onClick: () => De("rad"),
													children: w("radians")
												}), /* @__PURE__ */ k(c, {
													selected: Ee === "deg",
													onClick: () => De("deg"),
													children: w("degrees")
												})]
											}), /* @__PURE__ */ A(c, {
												onClick: ze,
												disabled: !ue.length,
												children: [
													/* @__PURE__ */ k(Nb, {}),
													" ",
													w("reset")
												]
											})]
										}),
										/* @__PURE__ */ k(l, {
											checked: Oe,
											onChange: (e) => ke(e.target.checked),
											children: w("ignoreLimits")
										}),
										/* @__PURE__ */ k(l, {
											checked: Ae,
											onChange: (e) => je(e.target.checked),
											children: w("followJointStates")
										}),
										ue.length === 0 ? /* @__PURE__ */ k(u, { children: w("noMovableJoints") }) : ue.map((e) => {
											let t = Ve(e.value, e.type), n = Ve(e.lower, e.type), r = Ve(e.upper, e.type);
											return /* @__PURE__ */ A("label", {
												className: "urdf-joint",
												children: [/* @__PURE__ */ A("span", { children: [/* @__PURE__ */ k("strong", { children: e.name }), /* @__PURE__ */ k("small", { children: e.type })] }), /* @__PURE__ */ A("div", { children: [/* @__PURE__ */ k("input", {
													type: "range",
													min: n,
													max: r,
													step: (r - n) / 500 || .001,
													value: Math.min(r, Math.max(n, t)),
													disabled: Ae,
													onChange: (t) => Re(e.name, He(Number(t.target.value), e.type))
												}), /* @__PURE__ */ k(d, {
													step: "any",
													"aria-label": e.name,
													value: Number(t.toFixed(5)),
													disabled: Ae,
													onValueChange: (t) => {
														t !== void 0 && Re(e.name, He(t, e.type));
													}
												}, Ee)] })]
											}, e.name);
										})
									]
								}),
								ve === "source" && /* @__PURE__ */ A("div", {
									className: "urdf-source-panel",
									children: [/* @__PURE__ */ A(v, {
										className: "source-toolbar",
										children: [
											/* @__PURE__ */ k(c, {
												onClick: () => ie.current && Cp(ie.current),
												"aria-label": w("undo"),
												title: w("undo"),
												children: /* @__PURE__ */ k(zb, {})
											}),
											/* @__PURE__ */ k(c, {
												onClick: () => ie.current && wp(ie.current),
												"aria-label": w("redo"),
												title: w("redo"),
												children: /* @__PURE__ */ k(kb, {})
											}),
											/* @__PURE__ */ k(c, {
												onClick: () => ie.current && kg(ie.current),
												"aria-label": w("search"),
												title: w("search"),
												children: /* @__PURE__ */ k(Fb, {})
											}),
											/* @__PURE__ */ A("span", {
												className: "source-name",
												children: [D?.sourceFile ?? w("notLoaded"), ge ? " *" : ""]
											}),
											/* @__PURE__ */ k("span", { className: "spacer" }),
											/* @__PURE__ */ A(c, {
												disabled: !D || !ge || be,
												onClick: () => void Ie(),
												children: [
													/* @__PURE__ */ k(jb, {}),
													" ",
													w("applyPreview")
												]
											}),
											/* @__PURE__ */ A(c, {
												disabled: !D,
												onClick: () => D && zx(fe, D.sourceFile),
												children: [
													/* @__PURE__ */ k(pb, {}),
													" ",
													w("download")
												]
											})
										]
									}), D ? /* @__PURE__ */ k(Bx, {
										initialValue: fe,
										theme: i,
										viewRef: ie,
										onChange: (e) => {
											pe(e), _e(e !== ae.current), Ce(void 0);
										}
									}, `${me}-${i}`) : /* @__PURE__ */ k(u, { children: w("sourceEmpty") })]
								})
							]
						})]
					})
				})
			]
		})]
	});
}
// urdf-editor/index.tsx
var Ux = {
	id: "urdf-editor",
	name: "URDF 编辑 (URDF Editor)",
	pages: [{
		id: "main",
		legacyMode: "urdf",
		title: (e) => e.locale === "en" ? "URDF Editor" : "URDF 编辑",
		component: Hx
	}]
};
export { Ux as default };
