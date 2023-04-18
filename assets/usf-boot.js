	/* USF file - DO NOT MODIFY THIS FILE. THIS FILE IS REGULARLY CHANGED BY USF APP AND **ANY DIRECT CHANGES WILL BE LOST**. Use our in-app customization if you need to update CSS and JS code. Auto modified at: 7/14/2022 11:45:44 PM*/ ! function() {
		function e(e) {
			return "[object Function]" === Object.prototype.toString.call(e)
		}

		function t(e) {
			return "string" == typeof e || e instanceof String
		}

		function r(r) {
			var n;
			r = {
				config: r
			}.config;
			var i = new XMLHttpRequest,
				s = r.type || "GET",
				a = "GET" === s ? function(r) {
					var n, i, s = r.data;
					if(!s) return r.url;
					if(e(s) && (s = s()), !t(s)) {
						var a = [];
						for(var o in s) a.push(o + "=" + encodeURIComponent(s[o]));
						s = a.join("&")
					}
					return n = r.url, (i = s) ? n.includes("?") ? n + "&" + i : n + "?" + i : n
				}(r) : r.url;
			i.open(s, a, !0), i.timeout = r.timeout, i.setRequestHeader("Content-Type", r.contentType || "application/x-www-form-urlencoded");
			var o = r.error,
				l = !1,
				u = !1,
				f = {
					abort: function() {
						l = !0, u = !0, i.abort(), r.abort && r.abort.apply(r, [i])
					}
				};
			i.onreadystatechange = function() {
				4 == i.readyState && (i.status >= 200 && i.status < 400 ? r.success && r.success.apply(r, [function(e, t) {
					switch(e.dataType) {
						case "json":
							return JSON.parse(t.responseText);
						default:
							return t.responseText
					}
				}(r, i), {
					xhr: i,
					redirected: function(e, t) {
						for(var r = 0, n = t.response; r < n.length;) {
							var i = n[r++];
							if("\t" !== i && " " !== i && "\r" !== i && "\n" !== i) return "<" === i && -1 !== n.indexOf("<html")
						}
					}(0, i),
					config: r
				}]) : o && !l && (l = !0, o.apply(r, [i, i.status, null, {
					xhr: i,
					config: r
				}])))
			}, i.onerror = function(e) {
				o && !l && (l = !0, o.apply(r, [i, i.status, e]))
			}, i.ontimeout = function(e) {
				o && !l && (l = !0, o.apply(r, [i, "timeout", e]))
			}, i.onabort = function(e) {
				u || (l = !0, u = !0, r.abort && r.abort.apply(r, [i]))
			};
			var c = r.data;
			e(c) && (c = c());
			try {
				i.send(c)
			} catch(n) {
				o && !l && (l = !0, o.apply(r, [i, i.status, n]))
			}
			return f
		}
		var n, i = function() {
			this.list = {}
		};
		i.prototype = {
			add(e, t) {
				if(Array.isArray(e))
					for(var r = e.length, n = 0; n < r; n++) this.add(e[n], t);
				else {
					var i = this.list[e];
					i || (this.list[e] = i = []), i.push(t)
				}
			},
			remove(e, t) {
				t || delete this.list[e];
				var r = this.list[e];
				r.splice(r.indexOf(t), 1)
			},
			raise(e, t, r) {
				if(window.usf_container || "rerender" !== e) {
					var n = this.list[e];
					if(n)
						for(var i = 0; i < n.length; i++) n[i](t, r);
					else;
				}
			}
		}, window.usf || (window.usf = {}), usf.components = {}, usf.collectionsByUrlName = {}, usf.EventHub = i, usf.event = n = new i;
		var s = usf.settings;
		s.currencyRate = 1;
		var a, o, l = s.instantSearch.online,
			u = s.search.online,
			f = function(e) {
				if(this.list = [], e)
					for(var t = 0; t < e.length; t++) this.push(e[t]);
				var r = this,
					n = !1;
				window.addEventListener("pagehide", function() {
					if(!n && r.list.length) {
						var e = s.analyticsApiUrl;
						if(void 0 !== navigator.sendBeacon) {
							var t = navigator.sendBeacon(e, JSON.stringify({
								events: r.list,
								time: new Date
							}));
							n = t
						} else {
							var i = "events=" + encodeURIComponent(JSON.stringify(r.list)) + "&time=" + (new Date).toISOString(),
								a = new XMLHttpRequest;
							a.open("POST", e, !1), a.setRequestHeader("Content-Type", "text/plain;charset=UTF-8"), a.send(i)
						}
					}
				})
			};
		f.prototype = {
			push(e) {
				"function" == typeof e && (e = e.apply(this)), e.length && this[e[0]].apply(this, e.slice(1, e.length)), this.list.push(e)
			},
			track(e, t) {
				t.event = e, t.siteId = s.siteId, t.time = new Date, this.list.push(t)
			}
		}, window._usfaq = new f(window._usfaq);
		var c, d, h, p, g, m, y, _ = {
			List: 0,
			Box: 1,
			Swatch: 2
		};

		function w(e) {
			if(e && !d) {
				var t = document.createElement("div");
				t.innerHTML = e, usf_container.parentNode.insertBefore(t, usf_container), d = 1, C.redirectToOriginalView()
			}
		}

		function b(e, t, r) {
			var i;

			function l(s) {
				if(r)
					if(c) {
						var o = c;
						c = s, o()
					} else c = s;
				else ! function(s) {
					re(), a = null, e.loader = !1;
					var o = s.data.redirect;
					o && e.onRedirect(o);
					if(t && e.result && f) 1 === t ? e.result.items = e.result.items.concat(s.data.items) : e.result.items.unshift(...s.data.items);
					else {
						if(f && q.take > s.data.total + q.itemsPerPage) return void(q.take = q.itemsPerPage);
						e.result = {}, Object.assign(e.result, s.data)
					}
					r || n.raise("sr_dataReceived", e, s.data);
					var l = s.data.facets;
					if(e.hasFacets = l && l.length, e.hasFacets) {
						for(var u = !1, c = 0; c < l.length; c++) {
							var d = l[c];
							(d.labels.length || void 0 !== d.min || d.navigationCollectionsKeepMain && d.navigationCollectionsMenu.length) && (u = !0), d.displayMode = _[d.display]
						}
						u || (e.hasFacets = !1)
					}
					2 === t || (e.itemsLoaded += s.data.items.length);
					var p = s.data.extra;
					if(p) {
						var v = p.collections;
						if(v)
							for(var g = usf.collectionsByUrlName = {}, c = 0; c < v.length; c++) {
								var m = v[c];
								g[m.urlName] = m
							}
						w(p.message)
					}
					document.body.classList[e.noFacets ? "add" : "remove"]("usf-has-no-facets"), r || e.$nextTick(() => {
						n.raise("sr_updated", e, s.data), i && window.addEventListener("load", () => S(i)), !h && usf._ios && (h = 1, window.addEventListener("pageshow", function() {
							var e = sessionStorage.getItem("usfVP");
							e && S(e = JSON.parse(e))
						}))
					})
				}(s = JSON.parse(s))
			}
			var u = s.search.more,
				f = "more" === u || "infinite" === u;
			if((i = sessionStorage.getItem("usfVP")) && (i = JSON.parse(i), !p && f && i.take !== q.take)) return q.take = i.take, void(p = 1);
			if(e.loader || (e._refreshTime = (new Date).getTime()), f && !t) {
				var d = 0,
					v = q.take,
					g = s.search.itemsPerPage;
				v > g && (d = Math.floor((v - 1) / g) * g, e.itemsOffset = d), e.itemsLoaded = d
			}
			if(r || (e.loader = 1 === t ? "more" : 2 !== t || "prev", n.raise("sr_updating", e, null)), r) c = null;
			else if(void 0 !== c) {
				function m() {
					l(c), c = void 0
				}
				return void(null === c ? c = m : m())
			}
			var y = {
					q: P(e.term),
					apiKey: s.siteId
				},
				k = C.locale;
			k && (y.locale = k), window._usfGetProductDescription || (y.getProductDescription = 0);
			var E = C.customerTags;
			E && E.length && (y.customerTags = E.join(","));
			var T, L = e.facetFilters,
				U = {
					query: y,
					filters: L
				};
			if(C.onSearch(U), (L = U.filters) && (y.facetFilters = JSON.stringify(L)), f ? (T = 2 === t ? e.itemsOffset : e.itemsLoaded, v = e.itemsPerPage) : (T = (e.page - 1) * e.itemsPerPage, v = e.itemsPerPage), y.skip = T, y.take = v, e.sortBy && "r" !== e.sortBy && (y.sort = e.sortBy), !e.itemsLoaded && o !== e.term && (o = e.term, e.term)) {
				var O = e.result;
				_usfaq.track("search", {
					term: e.term,
					isEmpty: O && !O.items.length && !L
				})
			}
			a && a.abort(), a = usf.utils.send({
				url: s.searchSvcUrl + "search",
				data: y,
				startTime: e._refreshTime,
				success: l,
				error: function(r, n, i) {
					403 !== n ? setTimeout(() => {
						c = void 0;
						var r = usf.search;
						r._refreshTime = e._refreshTime, b(r, t)
					}, 3e3) : w(JSON.parse(r.response).meta.description)
				}
			})
		}

		function S(e) {
			sessionStorage.removeItem("usfVP"), setTimeout(function() {
				var t = usf_container.querySelector('.usf-results [data-usf-pid="' + e.id + '"]');
				if(t && ! function(e) {
						const t = e.getBoundingClientRect();
						return t.top >= 0 && t.left >= 0 && t.bottom <= (window.innerHeight || document.documentElement.clientHeight) && t.right <= (window.innerWidth || document.documentElement.clientWidth)
					}(t)) {
					var r = t.getBoundingClientRect();
					window.scrollBy(0, r.top - e.y)
				}
			}, window._usfScrollDelay || 200)
		}

		function P(e) {
			for(var t = 0; t < e.length && " " === e[t];) t++;
			return t > 0 && (e = e.substr(t)), e.toLocaleLowerCase().replace(/[*\?]/g, "")
		}
		usf._refineTerm = P;
		var k = location.pathname.toLowerCase();
		usf.platform = {
			name: "shopify",
			termVar: "q",
			isCollectionPage: -1 !== k.indexOf("/collections/") && -1 === k.indexOf("/products/"),
			get collection() {
				if(m) return m;
				var e = C.collectionWithParams;
				if(e) {
					var t = e.lastIndexOf("/"); - 1 !== t && (e = e.substring(0, t)), m = e
				}
				return e
			},
			set collection(e) {
				m = e
			},
			get locale() {
				return _usfLocale
			},
			get baseUrl() {
				return void 0 === g && "/" === (g = _usfRootUrl) && (g = ""), g
			},
			get collectionWithParams() {
				var e = k,
					t = C.baseUrl;
				if(e.startsWith(t + "/collections/")) return decodeURIComponent(e.substring(t.length + 500))
			},
			get tagUrlName() {
				if(void 0 === y) {
					var e = C.collectionWithParams;
					if(e) {
						var t = e.lastIndexOf("/");
						y = -1 !== t ? e.substring(t + 1) : null
					}
				}
				return y
			},
			get customerTags() {
				return _usfCustomerTags
			},
			onSearch(e) {
				if("vendors" === C.collection) {
					var t = X.get("q");
					t && (e.query.q = "", e.filters || (e.filters = {}), e.filters._usf_vendor = ["vendor", [t]])
				}
				var r = _usfCollectionId || "",
					n = C.tagUrlName;
				n && (r += "/" + n), (r || C.isCollectionPage) && (e.query.collection = r)
			},
			init() {
				_usfTheme.applied && (s.search.searchResultsUrl = "/search")
			},
			redirectToOriginalView() {
				var e = location.href; - 1 === e.indexOf("no-usf") && (location = e + (-1 === e.indexOf("?") ? "?" : "&") + "view=no-usf")
			}
		};
		var C = usf.platform;
		const E = "_usf_";

		function T(e) {
			for(var t = e.changed, r = 0; r < t.length; r++) t[r]()
		}
		var L = function(e) {
			this.canChangeUrl = e, this.changed = [];
			var t = this;
			history.pushState = (e => (function() {
				var r = e.apply(this, arguments);
				return T(t), r
			}))(history.pushState), history.replaceState = (e => (function() {
				var r = e.apply(this, arguments);
				return T(t), r
			}))(history.replaceState), window.addEventListener("popstate", () => T(t))
		};

		function U(e) {
			return e = e.replace(/\+/g, " "), decodeURIComponent(e)
		}
		var O = function(e) {
			for(var t = e ? e.substring(1).split("&") : [], r = [], n = 0; n < t.length; n++) {
				var i = t[n].split("="),
					s = i[1];
				if(void 0 !== s) {
					var a = s.split(E);
					if(a.length > 1)
						for(var o = 0; o < a.length; o++) a[o] = U(a[o]);
					else a = U(s);
					r.push([U(i[0]), a])
				}
			}
			this.entries = r
		};

		function R(e) {
			if(Array.isArray(e)) {
				for(var t = [], r = 0; r < e.length; r++) t.push(encodeURIComponent(e[r]));
				return t.join(E)
			}
			return encodeURIComponent(e)
		}
		O.prototype = {
			get(e, t) {
				var r = this.entries.find(t => t[0] === e);
				return r ? r[1] : t
			},
			append(e, t) {
				this.entries.find(r => r[0] === e && r[1] === t) || this.entries.push([e, t])
			},
			set(e, t) {
				var r = this.entries.find(t => t[0] === e);
				r ? r[1] = t : this.entries.push([e, t])
			},
			toString() {
				var e = this.entries;
				if(!e.length) return "";
				for(var t = [], r = 0; r < e.length; r++) {
					var n = e[r];
					t[r] = encodeURIComponent(n[0]) + "=" + R(n[1])
				}
				return "?" + t.join("&")
			},
			delete(e, t) {
				for(var r = this.entries.length - 1; r >= 0; r--) {
					var n = this.entries[r];
					F(e, decodeURIComponent(n[0])) && (t && decodeURIComponent(n[1]) !== t || this.entries.splice(r, 1))
				}
			}
		}, usf.URLSearchParams = O;
		var I = location.search;

		function x(e, t, r, n) {
			if(!1 !== r) {
				if(n.canChangeUrl) {
					var i = U(location.search) !== U(e);
					return r || i ? (e = location.pathname + e, t || !i ? history.replaceState({}, "", e) : history.pushState({}, "", e), !0) : void 0
				}
				e !== I && (I = e, T(n))
			}
		}

		function F(e, r) {
			return t(e) ? e === r : e.test(r)
		}

		function N(e, t, r) {
			Object.keys(t).forEach(n => {
				(function(t, r) {
					for(var n = 0; n < e.entries; n++) {
						var i = e.entries[n];
						if(i[0] === t && i[1] === r) return !0
					}
				})(n, t[n]) || e[r.append ? "append" : "set"](n, t[n])
			})
		}
		L.prototype = {
			get(e, t) {
				return new O(this.getSearch()).get(e, t)
			},
			entries() {
				return new O(this.getSearch()).entries
			},
			snapshot() {
				this._snapshot = this.entries()
			},
			getSearch() {
				return this.canChangeUrl ? location.search : I
			},
			getChanges() {
				var e = this.entries(),
					t = this._snapshot;
				if(!t) return e;
				var r = [];
				return e.forEach(e => {
					t.find(t => t[0] === e[0] && JSON.stringify(t[1]) === JSON.stringify(e[1])) || r.push(e)
				}), t.forEach(t => {
					e.find(e => e[0] === t[0]) || r.push([t[0]])
				}), r
			},
			update(e, t, r) {
				var n = new O(this.getSearch());
				if(r || (r = {}), t)
					if(t.length) t.forEach(e => n.delete(e));
					else
						for(var i = n.entries.length - 1; i >= 0; i--) {
							var s = n.entries[i],
								a = s[0];
							if(t.hasOwnProperty(a)) {
								var o = t[a];
								s[1] === o && n.delete(a, o)
							}
						}
				return e && N(n, e, r), x(n.toString(), r.replace, r.force, this)
			},
			add(e, t) {
				var r = new O(this.getSearch());
				return t || (t = {}), N(r, e, t), x(r.toString(), t.replace, t.force, this)
			},
			remove(e) {
				var r, n = new O(this.getSearch()),
					i = arguments.length;
				if(i >= 2 && "object" == typeof(r = arguments[i - 1]) && r && i--, 2 === i && (l = arguments[1]))
					for(var s = 0; s < n.entries.length; s++) {
						if((a = n.entries[s])[0] === e && a[1] === l) {
							n.delete(e, l);
							break
						}
					} else if(t(e))
						for(s = 0; s < n.entries.length; s++) {
							if((a = n.entries[s])[0] === e) {
								n.delete(e);
								break
							}
						} else if(e.length) e.forEach(e => {
							e && (Array.isArray(e) ? n.delete(e[0], e[1]) : n.delete(e))
						});
						else
							for(s = n.entries.length - 1; s >= 0; s--) {
								var a, o = (a = n.entries[s])[0];
								if(e.hasOwnProperty(o)) {
									var l = e[o];
									a[1] === l && n.delete(o, l)
								}
							}
				return r || (r = {}), x(n.toString(), r.replace, r.force, this)
			}
		}, usf.Query = L;

		function A() {}
		A.prototype = {
			get term() {
				return X.get(C.termVar, "")
			},
			set term(e) {
				var t = {};
				t[C.termVar] = e, X.update(t, [/uff_.*/, /usf_.*/, "page"], {
					force: !0
				})
			},
			getTermQuery: e => C.termVar + "=" + encodeURIComponent(e),
			get page() {
				return parseInt(X.get("page")) || 1
			},
			set page(e) {
				if(e <= 1) X.remove("page");
				else {
					var t = {};
					t.page = e, X.add(t)
				}
			},
			get take() {
				return parseInt(X.get("usf_take")) || s.search.itemsPerPage
			},
			set take(e) {
				e ? (v = {}, v.usf_take = e, X.update(v)) : X.remove("usf_take")
			},
			get itemsPerPage() {
				return function(e, t) {
					var r = parseInt(e) || t;
					r > t && (r = t);
					return r
				}(X.get("usf_ipp"), s.search.itemsPerPage)
			},
			getPageUrl(e) {
				if(this.p === this.page) return "javascript:void(0)";
				var t = new URL(window.location.href),
					r = t.searchParams;
				return !e || e <= 1 ? r.delete("page") : r.set("page", e), t.toString()
			},
			get facetFilters() {
				for(var e, t = X.entries(), r = {}, n = 0; n < t.length; n++) {
					var i = t[n],
						s = i[0];
					if(s.startsWith("uff_")) {
						var a = "uff_".length,
							o = s.indexOf("_", a),
							l = s.substring(a, o);
						l = parseInt(l, 36);
						var u = s.substr(o + 1),
							f = i[1];
						Array.isArray(f) || (f = [f]), r[l] = [u, f], e = !0
					}
				}
				return e ? r : null
			},
			set facetFilters(e) {
				if(Object.keys(e).length) {
					var t, r = {};
					for(var n in e) {
						var i = e[n];
						r["uff_" + (t = n, parseInt(t).toString(36)) + "_" + i[0]] = i[1]
					}
					X.update(r, [/uff_.*/, "page"])
				} else this.removeAllFacetFilters()
			},
			get view() {
				return X.get("usf_view", "grid")
			},
			set view(e) {
				if(e) {
					var t = {};
					t.usf_view = e, X.add(t)
				} else X.remove("usf_view")
			},
			isViewChanged: e => 1 !== e.length || "usf_view" !== e[0][0],
			get sort() {
				var e = X.get("usf_sort");
				if(e) return e;
				var t = s.search.sortFields;
				return t ? t[0] : ""
			},
			set sort(e) {
				if(e) {
					var t = {};
					t.usf_sort = e, X.add(t)
				} else X.remove("usf_sort")
			},
			removeAllFacetFilters() {
				X.remove([/uff_.*/, "page"])
			},
			addChangedEventListener(e) {
				X.changed.push(e)
			}
		};
		var q = new A;
		usf.queryRewriter = q;
		var B = function(e) {
			if(this.plugins = [], e)
				for(var t = 0; t < e.length; t++) this.push(e[t])
		};

		function M(e, t, r, n) {
			var i, s, a;
			if(!n)
				for(s = document.getElementsByTagName("link"), a = 0; a < s.length; a++)
					if(s[a].href.endsWith(e)) return !1;
			return(i = document.createElement("link")).setAttribute("rel", "stylesheet"), i.setAttribute("type", "text/css"), i.setAttribute("href", e), t && (i.onload = t), r && (i.onerror = r), document.head.appendChild(i), !0
		}

		function j(e, t, r, n) {
			var i, s, a;
			if(!n)
				for(s = document.getElementsByTagName("script"), a = 0; a < s.length; a++) {
					var o = s[a].src;
					if(o && o.endsWith(e)) return !1
				}
			return(i = document.createElement("script")).setAttribute("type", "text/javascript"), i.setAttribute("src", e), i.async = !0, t && (i.onload = t), r && (i.onerror = r), document.head.appendChild(i), !0
		}

		function D(e, t, r, n, i) {
			for(var s = 0, a = 0, o = 0; o < t.length; o++) {
				var l, u = t[o];
				n ? (0, l = j) : l = M, u.startsWith("http") || u.startsWith("//") || (u = e + u), l(u, function() {
					++s === a && r()
				}, null, i) && a++
			}
			a === s && r()
		}

		function H(e, t, r, n) {
			if(!e) throw new Error("Element must be set.");
			if(e.length)
				for(var i = 0; i < e.length; i++) H(e[i], t, r, n);
			else if(e._r_events || (e._r_events = {}), "string" == typeof t) r && (n || (n = {}), function(e, t, r, n) {
				var i, s = e._r_events[t];
				s || (e._r_events[t] = s = []);
				i = function(t) {
					return r.call(e, t)
				}, e.addEventListener(t, i, n), s[s.length] = {
					handler: r,
					browserHandler: i,
					options: n
				}
			}(e, t, r, n));
			else
				for(var s in t) {
					H(e, s, t[s], r)
				}
		}

		function V(e) {
			"loading" === document.readyState ? document.addEventListener("DOMContentLoaded", e) : e()
		}

		function W(e) {
			z && (z = [], delete z), n.raise("is_hide", e)
		}

		function J(e, t) {
			Z(function() {
				! function(e, t) {
					if(usf.platform.collection && e.closest(".usf-sr-inputbox")) return;
					(t || e.value) && n.raise("is_show", e)
				}(e, t)
			})
		}
		B.prototype = {
			push(e) {
				this.plugins.push(e)
			},
			invoke(e, t) {
				return function e(t, r, n, i) {
					if(!(r >= t.length)) {
						var s = t[r],
							a = s[n];
						if(a) {
							var o = i.slice(0, i.length);
							return o.push(function() {
								if(r < t.length - 1) return e(t, r + 1, n, i)
							}), a.apply(s, o)
						}
						return e(t, r + 1, n, i)
					}
				}(this.plugins, 0, e, t)
			},
			has(e) {
				for(var t = this.plugins, r = 0; r < t.length; r++)
					if(t[r][e]) return !0
			}
		}, usf.plugins = new B(usf.plugins) /* Begin plugin code */
		/* End plugin code */
		usf.utils = {
			on: H,
			off: function(e, t, r) {
				if(e._r_events && t) {
					var n = null,
						i = e._r_events[t] || [];
					if(void 0 !== r) {
						for(var s = 0, a = i.length; s < a; s++)
							if(i[s].handler === r) {
								n = i[s].browserHandler;
								break
							}
						e.removeEventListener(t, n), i.splice(s, 1)
					} else if("string" == typeof t) {
						for(s = 0, a = i.length; s < a; s++) n = i[s].browserHandler, e.removeEventListener(t, n);
						delete e._r_events[t]
					} else
						for(var o in t) {
							for(r = t[o], s = 0, a = (i = e._r_events[o] || []).length; s < a; s++)
								if(i[s].handler === r) {
									n = i[s].browserHandler;
									break
								}
							e.removeEventListener(o, n), i.splice(s, 1)
						}
				}
			},
			loadJsFile: j,
			loadFiles: D,
			ready: V,
			installSearchInput: Y,
			hideInstantSearch: W,
			loadAndShowInstantSearch: J,
			stopEvent: (e, t) => !!e && (e.preventDefault && e.preventDefault(), t || (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0), e.returnValue = !1, !1),
			send(e, t) {
				var n = e.startTime || (new Date).getTime();
				if(!e._errorModified) {
					var i = 6e3,
						s = e.error;
					e.timeout = i, e._errorModified = 1, e.error = function(r) {
						var a;
						if((new Date).getTime() - n >= i) return e.url = (a = e.url).includes("fallback") ? a : a.replace(/svc-(\d+)-/, "svc-$1-fallback-"), delete e.timeout, setTimeout(() => usf.utils.send.apply(this, [e, t]), 200), void(i = 1500);
						s.apply(this, arguments)
					}
				}
				if(!t) {
					var a = usf.plugins.invoke("send", [e]);
					if(void 0 !== a) return a
				}
				return r(e)
			}
		}, usf.fetch = b;
		window.performance && (window.performance.navigation.type, window.performance.navigation.TYPE_BACK_FORWARD);
		usf.query = new L(s.search.canChangeUrl);
		var G, K, z, Q, X = usf.query;

		function $(e) {
			if(!e.target._usf_no_popup) {
				var t = e.target;
				t.value ? J(t) : W(t)
			}
		}

		function Y(e, t) {
			if(e && (l || u)) {
				var r = e.parentNode;
				if(!r.classList.contains("usf-sr-inputbox")) {
					var n = e.cloneNode(!0);
					r.replaceChild(n, e), e = n
				}
				for(;
					"FORM" !== r.tagName;)
					if((r = r.parentNode) === document.body) {
						r = null;
						break
					}
				if(G = C.baseUrl + s.search.searchResultsUrl, r && u && (r.action = G, r.onsubmit = function(t) {
						var r = window.usf_container;
						return location.pathname.includes(G) || r && e.closest(".usf-sr-inputbox") ? (q.term = e.value, r && r.click(), W(e)) : location = G + "?" + C.termVar + "=" + encodeURIComponent(e.value), usf.utils.stopEvent(t)
					}), e._usf_no_popup = t, e.setAttribute("autocomplete", "off"), l) H(e, {
					input: $,
					keydown: function(e) {
						13 === e.keyCode && (usf.utils.stopEvent(e), r && u ? r.onsubmit() : location = G + "?" + C.termVar + "=" + encodeURIComponent(e.target.value))
					},
					click: t ? null : function(e) {
						return J(e.target, window._usfForceIs), usf.utils.stopEvent(e)
					}
				})
			}
		}

		function Z(e) {
			if(2 !== K)
				if(1 !== K) {
					var t;
					K = 1;
					var r = [(t = _usfTheme.assetUrl.replace("usf-boot.js", "{0}")).replace("{0}", "usf.js")],
						i = [t.replace("{0}", "usf.css")];
					n.raise("preinit"), e || b({
						term: q.term,
						itemsPerPage: q.itemsPerPage,
						page: q.page,
						facetFilters: q.facetFilters,
						sortBy: q.sort
					}, 0, !0), D(t, r, function() {
						K = 2, z && (z.forEach(e => e()), delete z), G = C.baseUrl + s.search.searchResultsUrl, e && e(), V(function() {
							n.raise("init")
						})
					}, 1, !0), D(t, i, function() {}, 0, !0)
				} else e && (z || (z = []), z.push(e));
			else e && e()
		}
		if(s.online) { /* Begin theme init code */ /* End theme init code */
			C.init();
			var ee = location.pathname,
				te = usf._canLoadContainer = (C.isCollectionPage ? s.collections.online : -1 !== ee.indexOf(s.search.searchResultsUrl) && s.search.online) || window._usfHasContainer;
			te && Z(), V(function() {
				var e = document.body.classList;

				function t() { /* Begin theme ready code */
					if(usf.settings.instantSearch.online) {
						document.body.classList.add('usf-hide-theme-search');
						// click on search icon -> show our instant search
						if(usf.isMobile) {
							var searchIcon = document.querySelector('.t4s-site-nav__search');
							if(searchIcon)
								searchIcon.addEventListener('click', function() {
									var target = document.createElement('input');
									usf.utils.loadAndShowInstantSearch(target, true);
								});

							// still register to 'is_show' event to hide the drawer.
							usf.event.add('is_show', function() {
								setTimeout(() => {
									var closeSearch = document.querySelector('#t4s-search-hidden .t4s-drawer__close');
									if(closeSearch)
										closeSearch.click();
									// refocus on our input box
									usf.instantSearch.focus();
								}, 300);
							})
						}

					}
					/* End theme ready code */
					l && s.instantSearch.searchBoxSelector.split(",").forEach(e => {
						for(var t = document.body.querySelectorAll(e), r = 0; r < t.length; r++) Y(t[r])
					}), document.body.addEventListener("keyup", function(e) {
						9 == e.keyCode && document.body.classList.add("usf-wc")
					}), document.addEventListener("click", function(e) {
						document.body.classList.remove("usf-wc")
					})
				}
				re(), s.darkMode && e.add("usf-dark"), te && window.usf_container && (e.add("usf-has-container"), C.isCollectionPage && e.add("usf-collections-page"), e.add(s.filters.horz ? "usf-horz-layout" : "usf-vert-layout")), usf.isMobile ? window.addEventListener("load", t) : t()
			})
		}

		function re() {
			Q || (Q = 1, (usf.isMobile = document.body.clientWidth < s.mobileBreakpoint) && (document.body.classList.add("usf-mobile"), usf.isMobileFilter = !s.filters.desktopLikeMobile))
		}
	}();
 