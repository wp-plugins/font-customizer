/*! iCheck v1.0.1 by Damir Sultanov, http://git.io/arlzeA, MIT Licensed */
!function(a) {
    function b(a, b, e) {
        var f = a[0], g = /er/.test(e) ? p : /bl/.test(e) ? n : l, h = e == q ? {
            checked: f[l],
            disabled: f[n],
            indeterminate: "true" == a.attr(p) || "false" == a.attr(o)
        } : f[g];
        if (/^(ch|di|in)/.test(e) && !h) c(a, g); else if (/^(un|en|de)/.test(e) && h) d(a, g); else if (e == q) for (g in h) h[g] ? c(a, g, !0) : d(a, g, !0); else b && "toggle" != e || (b || a[u]("ifClicked"), h ? f[r] !== k && d(a, g) : c(a, g));
    }
    function c(b, c, e) {
        var q = b[0], u = b.parent(), v = c == l, x = c == p, y = c == n, z = x ? o : v ? m : "enabled", A = f(b, z + g(q[r])), B = f(b, c + g(q[r]));
        if (!0 !== q[c]) {
            if (!e && c == l && q[r] == k && q.name) {
                var C = b.closest("form"), D = 'input[name="' + q.name + '"]', D = C.length ? C.find(D) : a(D);
                D.each(function() {
                    this !== q && a(this).data(i) && d(a(this), c);
                });
            }
            x ? (q[c] = !0, q[l] && d(b, l, "force")) : (e || (q[c] = !0), v && q[p] && d(b, p, !1)), h(b, v, c, e);
        }
        q[n] && f(b, w, !0) && u.find("." + j).css(w, "default"), u[s](B || f(b, c) || ""), y ? u.attr("aria-disabled", "true") : u.attr("aria-checked", x ? "mixed" : "true"), u[t](A || f(b, z) || "");
    }
    function d(a, b, c) {
        var d = a[0], e = a.parent(), i = b == l, k = b == p, q = b == n, u = k ? o : i ? m : "enabled", v = f(a, u + g(d[r])), x = f(a, b + g(d[r]));
        !1 !== d[b] && ((k || !c || "force" == c) && (d[b] = !1), h(a, i, u, c)), !d[n] && f(a, w, !0) && e.find("." + j).css(w, "pointer"), e[t](x || f(a, b) || ""), q ? e.attr("aria-disabled", "false") : e.attr("aria-checked", "false"), e[s](v || f(a, u) || "");
    }
    function e(b, c) {
        b.data(i) && (b.parent().html(b.attr("style", b.data(i).s || "")), c && b[u](c), b.off(".i").unwrap(), a(v + '[for="' + b[0].id + '"]').add(b.closest(v)).off(".i"));
    }
    function f(a, b, c) {
        return a.data(i) ? a.data(i).o[b + (c ? "" : "Class")] : void 0;
    }
    function g(a) {
        return a.charAt(0).toUpperCase() + a.slice(1);
    }
    function h(a, b, c, d) {
        d || (b && a[u]("ifToggled"), a[u]("ifChanged")[u]("if" + g(c)));
    }
    var i = "iCheck", j = i + "-helper", k = "radio", l = "checked", m = "un" + l, n = "disabled", o = "determinate", p = "in" + o, q = "update", r = "type", s = "addClass", t = "removeClass", u = "trigger", v = "label", w = "cursor", x = /ipad|iphone|ipod|android|blackberry|windows phone|opera mini|silk/i.test(navigator.userAgent);
    a.fn[i] = function(f, g) {
        var h = 'input[type="checkbox"], input[type="' + k + '"]', m = a(), o = function(b) {
            b.each(function() {
                var b = a(this);
                m = b.is(h) ? m.add(b) : m.add(b.find(h));
            });
        };
        if (/^(check|uncheck|toggle|indeterminate|determinate|disable|enable|update|destroy)$/i.test(f)) return f = f.toLowerCase(), o(this), m.each(function() {
            var c = a(this);
            "destroy" == f ? e(c, "ifDestroyed") : b(c, !0, f), a.isFunction(g) && g();
        });
        if ("object" != typeof f && f) return this;
        var w = a.extend({
            checkedClass: l,
            disabledClass: n,
            indeterminateClass: p,
            labelHover: !0,
            aria: !1
        }, f), y = w.handle, z = w.hoverClass || "hover", A = w.focusClass || "focus", B = w.activeClass || "active", C = !!w.labelHover, D = w.labelHoverClass || "hover", E = 0 | ("" + w.increaseArea).replace("%", "");
        return ("checkbox" == y || y == k) && (h = 'input[type="' + y + '"]'), -50 > E && (E = -50), o(this), m.each(function() {
            var f = a(this);
            e(f);
            var g = this, h = g.id, m = -E + "%", o = 100 + 2 * E + "%", o = {
                position: "absolute",
                top: m,
                left: m,
                display: "block",
                width: o,
                height: o,
                margin: 0,
                padding: 0,
                background: "#fff",
                border: 0,
                opacity: 0
            }, m = x ? {
                position: "absolute",
                visibility: "hidden"
            } : E ? o : {
                position: "absolute",
                opacity: 0
            }, p = "checkbox" == g[r] ? w.checkboxClass || "icheckbox" : w.radioClass || "i" + k, y = a(v + '[for="' + h + '"]').add(f.closest(v)), F = !!w.aria, G = i + "-" + Math.random().toString(36).substr(2, 6), H = '<div class="' + p + '" ' + (F ? 'role="' + g[r] + '" ' : "");
            F && y.each(function() {
                H += 'aria-labelledby="', this.id ? H += this.id : (this.id = G, H += G), H += '"';
            }), H = f.wrap(H + "/>")[u]("ifCreated").parent().append(w.insert), o = a('<ins class="' + j + '"/>').css(o).appendTo(H), f.data(i, {
                o: w,
                s: f.attr("style")
            }).css(m), w.inheritClass && H[s](g.className || ""), w.inheritID && h && H.attr("id", i + "-" + h), "static" == H.css("position") && H.css("position", "relative"), b(f, !0, q), y.length && y.on("click.i mouseover.i mouseout.i touchbegin.i touchend.i", function(c) {
                var d = c[r], e = a(this);
                if (!g[n]) {
                    if ("click" == d) {
                        if (a(c.target).is("a")) return;
                        b(f, !1, !0);
                    } else C && (/ut|nd/.test(d) ? (H[t](z), e[t](D)) : (H[s](z), e[s](D)));
                    if (!x) return !1;
                    c.stopPropagation();
                }
            }), f.on("click.i focus.i blur.i keyup.i keydown.i keypress.i", function(a) {
                var b = a[r];
                return a = a.keyCode, "click" == b ? !1 : "keydown" == b && 32 == a ? (g[r] == k && g[l] || (g[l] ? d(f, l) : c(f, l)), !1) : ("keyup" == b && g[r] == k ? !g[l] && c(f, l) : /us|ur/.test(b) && H["blur" == b ? t : s](A), void 0);
            }), o.on("click mousedown mouseup mouseover mouseout touchbegin.i touchend.i", function(a) {
                var c = a[r], d = /wn|up/.test(c) ? B : z;
                if (!g[n]) {
                    if ("click" == c ? b(f, !1, !0) : (/wn|er|in/.test(c) ? H[s](d) : H[t](d + " " + B), y.length && C && d == z && y[/ut|nd/.test(c) ? t : s](D)), !x) return !1;
                    a.stopPropagation();
                }
            });
        });
    };
}(window.jQuery || window.Zepto), define("lib_icheck", function() {}), 


/* 
 * Selecter v3.0.9 - 2014-02-10 
 * A jQuery plugin for replacing default select elements. Part of the Formstone Library. 
 * http://formstone.it/selecter/ 
 * 
 * Copyright 2014 Ben Plum; MIT Licensed 
 */
!function(a, b) {
    function c(b) {
        b = a.extend({}, x, b || {}), null === w && (w = a("body"));
        for (var c = a(this), e = 0, f = c.length; f > e; e++) d(c.eq(e), b);
        return c;
    }
    function d(b, c) {
        if (!b.hasClass("selecter-element")) {
            c = a.extend({}, c, b.data("selecter-options")), c.external && (c.links = !0);
            var d = b.find("option, optgroup"), g = d.filter("option"), h = g.filter(":selected"), n = "" !== c.label ? -1 : g.index(h), p = c.links ? "nav" : "div";
            c.tabIndex = b[0].tabIndex, b[0].tabIndex = -1, c.multiple = b.prop("multiple"), c.disabled = b.is(":disabled");
            var q = "<" + p + ' class="selecter ' + c.customClass;
            v ? q += " mobile" : c.cover && (q += " cover"), q += c.multiple ? " multiple" : " closed", c.disabled && (q += " disabled"), q += '" tabindex="' + c.tabIndex + '">', c.multiple || (q += '<span class="selecter-selected' + ("" !== c.label ? " placeholder" : "") + '">', q += a("<span></span").text(r("" !== c.label ? c.label : h.text(), c.trim)).html(), q += "</span>"), q += '<div class="selecter-options">', q += "</div>", q += "</" + p + ">", b.addClass("selecter-element").after(q);
            var s = b.next(".selecter"), u = a.extend({
                $select: b,
                $allOptions: d,
                $options: g,
                $selecter: s,
                $selected: s.find(".selecter-selected"),
                $itemsWrapper: s.find(".selecter-options"),
                index: -1,
                guid: t++
            }, c);
            e(u), o(n, u), void 0 !== a.fn.scroller && u.$itemsWrapper.scroller(), u.$selecter.on("touchstart.selecter click.selecter", ".selecter-selected", u, f).on("click.selecter", ".selecter-item", u, j).on("close.selecter", u, i).data("selecter", u), u.$select.on("change.selecter", u, k), v || (u.$selecter.on("focus.selecter", u, l).on("blur.selecter", u, m), u.$select.on("focus.selecter", u, function(a) {
                a.data.$selecter.trigger("focus");
            }));
        }
    }
    function e(b) {
        for (var c = "", d = b.links ? "a" : "span", e = 0, f = 0, g = b.$allOptions.length; g > f; f++) {
            var h = b.$allOptions.eq(f);
            if ("OPTGROUP" === h[0].tagName) c += '<span class="selecter-group', h.is(":disabled") && (c += " disabled"), c += '">' + h.attr("label") + "</span>"; else {
                var i = h.val();
                h.attr("value") || h.attr("value", i), c += "<" + d + ' class="selecter-item', h.is(":selected") && "" === b.label && (c += " selected"), h.is(":disabled") && (c += " disabled"), c += '" ', c += b.links ? 'href="' + i + '"' : 'data-value="' + i + '"', c += ">" + a("<span></span>").text(r(h.text(), b.trim)).html() + "</" + d + ">", e++;
            }
        }
        b.$itemsWrapper.html(c), b.$items = b.$selecter.find(".selecter-item");
    }
    function f(c) {
        c.preventDefault(), c.stopPropagation();
        var d = c.data;
        if (!d.$select.is(":disabled")) if (a(".selecter").not(d.$selecter).trigger("close.selecter", [ d ]), v) {
            var e = d.$select[0];
            if (b.document.createEvent) {
                var f = b.document.createEvent("MouseEvents");
                f.initMouseEvent("mousedown", !1, !0, b, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), e.dispatchEvent(f);
            } else e.fireEvent && e.fireEvent("onmousedown");
        } else d.$selecter.hasClass("closed") ? g(c) : d.$selecter.hasClass("open") && i(c);
    }
    function g(b) {
        b.preventDefault(), b.stopPropagation();
        var c = b.data;
        if (!c.$selecter.hasClass("open")) {
            var d = c.$selecter.offset(), e = w.outerHeight(), f = c.$itemsWrapper.outerHeight(!0), g = c.index >= 0 ? c.$items.eq(c.index).position() : {
                left: 0,
                top: 0
            };
            d.top + f > e && c.$selecter.addClass("bottom"), c.$itemsWrapper.show(), c.$selecter.removeClass("closed").addClass("open"), w.on("click.selecter-" + c.guid, ":not(.selecter-options)", c, h), void 0 !== a.fn.scroller ? c.$itemsWrapper.scroller("scroll", c.$itemsWrapper.find(".scroller-content").scrollTop() + g.top, 0).scroller("reset") : c.$itemsWrapper.scrollTop(c.$itemsWrapper.scrollTop() + g.top);
        }
    }
    function h(b) {
        b.preventDefault(), b.stopPropagation(), 0 === a(b.currentTarget).parents(".selecter").length && i(b);
    }
    function i(a) {
        a.preventDefault(), a.stopPropagation();
        var b = a.data;
        b.$selecter.hasClass("open") && (b.$itemsWrapper.hide(), b.$selecter.removeClass("open bottom").addClass("closed"), w.off(".selecter-" + b.guid));
    }
    function j(b) {
        b.preventDefault(), b.stopPropagation();
        var c = a(this), d = b.data;
        if (!d.$select.is(":disabled")) {
            if (d.$itemsWrapper.is(":visible")) {
                var e = d.$items.index(c);
                o(e, d), p(d);
            }
            d.multiple || i(b);
        }
    }
    function k(b, c) {
        var d = a(this), e = b.data;
        if (!c && !e.multiple) {
            var f = e.$options.index(e.$options.filter("[value='" + s(d.val()) + "']"));
            o(f, e), p(e);
        }
    }
    function l(b) {
        b.preventDefault(), b.stopPropagation();
        var c = b.data;
        c.$select.is(":disabled") || c.multiple || (c.$selecter.addClass("focus").on("keydown.selecter" + c.guid, c, n), a(".selecter").not(c.$selecter).trigger("close.selecter", [ c ]));
    }
    function m(b) {
        b.preventDefault(), b.stopPropagation();
        var c = b.data;
        c.$selecter.removeClass("focus").off("keydown.selecter" + c.guid + " keyup.selecter" + c.guid), a(".selecter").not(c.$selecter).trigger("close.selecter", [ c ]);
    }
    function n(b) {
        var c = b.data;
        if (13 === b.keyCode) c.$selecter.hasClass("open") && (i(b), o(c.index, c)), p(c); else if (!(9 === b.keyCode || b.metaKey || b.altKey || b.ctrlKey || b.shiftKey)) {
            b.preventDefault(), b.stopPropagation();
            var d = c.$items.length - 1, e = c.index < 0 ? 0 : c.index;
            if (a.inArray(b.keyCode, u ? [ 38, 40, 37, 39 ] : [ 38, 40 ]) > -1) e += 38 === b.keyCode || u && 37 === b.keyCode ? -1 : 1, 0 > e && (e = 0), e > d && (e = d); else {
                var f, g, h = String.fromCharCode(b.keyCode).toUpperCase();
                for (g = c.index + 1; d >= g; g++) if (f = c.$options.eq(g).text().charAt(0).toUpperCase(), f === h) {
                    e = g;
                    break;
                }
                if (0 > e) for (g = 0; d >= g; g++) if (f = c.$options.eq(g).text().charAt(0).toUpperCase(), f === h) {
                    e = g;
                    break;
                }
            }
            e >= 0 && o(e, c);
        }
    }
    function o(a, b) {
        var c = b.$items.eq(a), d = c.hasClass("selected"), e = c.hasClass("disabled");
        if (!e) {
            if (-1 === a && "" !== b.label) b.$selected.html(b.label); else if (d) b.multiple && (b.$options.eq(a).prop("selected", null), c.removeClass("selected")); else {
                var f = c.html();
                c.data("value"), b.multiple ? b.$options.eq(a).prop("selected", !0) : (b.$selected.html(f).removeClass("placeholder"), b.$items.filter(".selected").removeClass("selected"), b.$select[0].selectedIndex = a), c.addClass("selected");
            }
            (!d || b.multiple) && (b.index = a);
        }
    }
    function p(a) {
        a.links ? q(a) : (a.callback.call(a.$selecter, a.$select.val(), a.index), a.$select.trigger("change", [ !0 ]));
    }
    function q(a) {
        var c = a.$select.val();
        a.external ? b.open(c) : b.location.href = c;
    }
    function r(a, b) {
        return 0 === b ? a : a.length > b ? a.substring(0, b) + "..." : a;
    }
    function s(a) {
        return a.replace(/([;&,\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g, "\\$1");
    }
    var t = 0, u = b.navigator.userAgent.toLowerCase().indexOf("firefox") > -1, v = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(b.navigator.userAgent || b.navigator.vendor || b.opera), w = null, x = {
        callback: a.noop,
        cover: !1,
        customClass: "",
        label: "",
        external: !1,
        links: !1,
        trim: 0
    }, y = {
        defaults: function(b) {
            return x = a.extend(x, b || {}), a(this);
        },
        disable: function(b) {
            return a(this).each(function(c, d) {
                var e = a(d).next(".selecter").data("selecter");
                if (e) if ("undefined" != typeof b) {
                    var f = e.$items.index(e.$items.filter("[data-value=" + b + "]"));
                    e.$items.eq(f).addClass("disabled"), e.$options.eq(f).prop("disabled", !0);
                } else e.$selecter.hasClass("open") && e.$selecter.find(".selecter-selected").trigger("click.selecter"), e.$selecter.addClass("disabled"), e.$select.prop("disabled", !0);
            });
        },
        enable: function(b) {
            return a(this).each(function(c, d) {
                var e = a(d).next(".selecter").data("selecter");
                if (e) if ("undefined" != typeof b) {
                    var f = e.$items.index(e.$items.filter("[data-value=" + b + "]"));
                    e.$items.eq(f).removeClass("disabled"), e.$options.eq(f).prop("disabled", !1);
                } else e.$selecter.removeClass("disabled"), e.$select.prop("disabled", !1);
            });
        },
        destroy: function() {
            return a(this).each(function(b, c) {
                var d = a(c).next(".selecter").data("selecter");
                d && (d.$selecter.hasClass("open") && d.$selecter.find(".selecter-selected").trigger("click.selecter"), void 0 !== a.fn.scroller && d.$selecter.find(".selecter-options").scroller("destroy"), d.$select[0].tabIndex = d.tabIndex, d.$select.off(".selecter").removeClass("selecter-element").show(), d.$selecter.off(".selecter").remove());
            });
        },
        refresh: function() {
            return a(this).each(function(b, c) {
                var d = a(c).next(".selecter").data("selecter");
                if (d) {
                    var f = d.index;
                    d.$allOptions = d.$select.find("option, optgroup"), d.$options = d.$allOptions.filter("option"), d.index = -1, f = d.$options.index(d.$options.filter(":selected")), e(d), o(f, d);
                }
            });
        }
    };
    a.fn.selecter = function(a) {
        return y[a] ? y[a].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof a && a ? this : c.apply(this, arguments);
    }, a.selecter = function(a) {
        "defaults" === a && y.defaults.apply(this, Array.prototype.slice.call(arguments, 1));
    };
}(jQuery, window), define("lib_selecter", function() {}), 
/* 
 * Stepper v3.0.5 - 2014-02-06 
 * A jQuery plugin for cross browser number inputs. Part of the Formstone Library. 
 * http://formstone.it/stepper/ 
 * 
 * Copyright 2014 Ben Plum; MIT Licensed 
 */
!function(a) {
    function b(b) {
        b = a.extend({}, k, b || {});
        for (var d = a(this), e = 0, f = d.length; f > e; e++) c(d.eq(e), b);
        return d;
    }
    function c(b, c) {
        if (!b.hasClass("stepper-input")) {
            c = a.extend({}, c, b.data("stepper-options"));
            var e = parseFloat(b.attr("min")), f = parseFloat(b.attr("max")), g = parseFloat(b.attr("step")) || 1;
            b.addClass("stepper-input").wrap('<div class="stepper ' + c.customClass + '" />').after('<span class="stepper-arrow up">' + c.labels.up + '</span><span class="stepper-arrow down">' + c.labels.down + "</span>");
            var h = b.parent(".stepper"), j = a.extend({
                $stepper: h,
                $input: b,
                $arrow: h.find(".stepper-arrow"),
                min: void 0 === typeof e || isNaN(e) ? !1 : e,
                max: void 0 === typeof f || isNaN(f) ? !1 : f,
                step: void 0 === typeof g || isNaN(g) ? 1 : g,
                timer: null
            }, c);
            j.digits = i(j.step), b.is(":disabled") && h.addClass("disabled"), h.on("touchstart.stepper mousedown.stepper", ".stepper-arrow", j, d).data("stepper", j);
        }
    }
    function d(b) {
        b.preventDefault(), b.stopPropagation(), e(b);
        var c = b.data;
        if (!c.$input.is(":disabled") && !c.$stepper.hasClass("disabled")) {
            var d = a(b.target).hasClass("up") ? c.step : -c.step;
            c.timer = g(c.timer, 125, function() {
                f(c, d, !1);
            }), f(c, d), a("body").on("touchend.stepper mouseup.stepper", c, e);
        }
    }
    function e(b) {
        b.preventDefault(), b.stopPropagation();
        var c = b.data;
        h(c.timer), a("body").off(".stepper");
    }
    function f(a, b) {
        var c = parseFloat(a.$input.val()), d = b;
        void 0 === typeof c || isNaN(c) ? d = a.min !== !1 ? a.min : 0 : a.min !== !1 && c < a.min ? d = a.min : d += c;
        var e = (d - a.min) % a.step;
        0 !== e && (d -= e), a.min !== !1 && d < a.min && (d = a.min), a.max !== !1 && d > a.max && (d -= a.step), d !== c && (d = j(d, a.digits), a.$input.val(d).trigger("change"));
    }
    function g(a, b, c) {
        return h(a), setInterval(c, b);
    }
    function h(a) {
        a && (clearInterval(a), a = null);
    }
    function i(a) {
        var b = String(a);
        return b.indexOf(".") > -1 ? b.length - b.indexOf(".") - 1 : 0;
    }
    function j(a, b) {
        var c = Math.pow(10, b);
        return Math.round(a * c) / c;
    }
    var k = {
        customClass: "",
        labels: {
            up: "Up",
            down: "Down"
        }
    }, l = {
        defaults: function(b) {
            return k = a.extend(k, b || {}), a(this);
        },
        destroy: function() {
            return a(this).each(function() {
                var b = a(this).data("stepper");
                b && (b.$stepper.off(".stepper").find(".stepper-arrow").remove(), b.$input.unwrap().removeClass("stepper-input"));
            });
        },
        disable: function() {
            return a(this).each(function() {
                var b = a(this).data("stepper");
                b && (b.$input.attr("disabled", "disabled"), b.$stepper.addClass("disabled"));
            });
        },
        enable: function() {
            return a(this).each(function() {
                var b = a(this).data("stepper");
                b && (b.$input.attr("disabled", null), b.$stepper.removeClass("disabled"));
            });
        }
    };
    a.fn.stepper = function(a) {
        return l[a] ? l[a].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof a && a ? this : b.apply(this, arguments);
    }, a.stepper = function(a) {
        "defaults" === a && l.defaults.apply(this, Array.prototype.slice.call(arguments, 1));
    };
}(jQuery, this), define("lib_stepper", function() {}), 

/* !
 * Font Customizer Controls
 * Copyright (c) 2014 Nicolas GUILLAUME (nikeo), Themes & Co.
 * Inspired from jQuery.fontselect from Tom Moor, http://tommoor.com
 * GPL2+ Licensed
*/
TCFontAdmin && define("wp_localized", function() {
    return TCFontAdmin;
});

var is_dev = is_dev || !1;

!is_dev && typeof jQuery == "function" && define("jquery", function() {
    return jQuery;
}), define("wfc_plug_construct", [ "jquery", "wp_localized" ], function($, TCFontAdmin) {
    var TCFontAdmin = TCFontAdmin || {}, Tree = TCFontAdmin.Tree || {}, _root = _root || {};
    _root = {
        defaults: {
            FontPickerStyle: "font-select",
            placeholder: "Choose a font",
            lookahead: 0,
            api: "//fonts.googleapis.com/css?family=",
            selector: "p"
        },
        pluginName: "tcfc",
        SettingPrefix: TCFontAdmin.SettingPrefix,
        Tree: TCFontAdmin.Tree || {},
        CFonts: TCFontAdmin.CFonts || {},
        StatEffects: Tree["font-family"] ? Tree["font-family"].controls["static-effect"][1][1] : {},
        DBSets: TCFontAdmin.DBSettings || {},
        DefSets: TCFontAdmin.DefaultSettings || {},
        HasSavedSets: TCFontAdmin.HasSavedSets || {},
        CustomSets: TCFontAdmin.CustomSets || {},
        SkinColors: TCFontAdmin.SkinColors || {},
        Translations: TCFontAdmin.Translations || {},
        Zones: TCFontAdmin.Zones || {},
        ZoneExist: {},
        ZoneSection: {},
        ZoneTitleWrap: {},
        ZoneLayout: {},
        ZoneTitle: {},
        ZoneContent: {},
        AjaxUrl: TCFontAdmin.AjaxUrl || {},
        WFCNonce: TCFontAdmin.WFCNonce || {},
        CurrentBrowser: {},
        StaticFonts: {},
        ControlHTMLBlocks: {},
        BlockStatus: {},
        CustomInputFields: "",
        customizrpalette: [],
        ResetingAll: !1,
        __b: function(fn, me) {
            return function() {
                return fn.apply(me, arguments);
            };
        },
        TCFC: function(el, options) {
            this.id = "#" + $(el).attr("id"), this.options = $.extend({}, _root.defaults, options), this._defaults = _root.defaults, this._name = _root.pluginName, this.sel = this.options.selector, this.CustomizerLink = $('input[data-customize-setting-link="tc_font_customizer_plug[' + this.sel + ']"]'), this.currentskin = 0 != $("#customize-control-tc_theme_options-tc_skin select").length ? $("#customize-control-tc_theme_options-tc_skin select").find(":selected").val() : "grey.css", this.active = !1, this.isCustom = this.sel in _root.CustomSets, this.WrapControlsInZones(), this.InitControls("tc-check-input"), this.InitControls("tc-number-input"), this.InitLargeControls(), this.InitResetAll(), this.InitResetSingle(), this.InitSelectorTitle();
        }
    };
    for (var sets in _root.DefSets) for (var property in _root.DefSets[sets]) _root.DefSets[sets][property] && "string" == typeof _root.DefSets[sets][property] && (_root.DefSets[sets][property] = _root.DefSets[sets][property].replace("!important", ""));
    for (var key in _root.SkinColors) _root.customizrpalette.push(_root.SkinColors[key][0]);
    return _root.ptt = _root.TCFC.prototype, _root;
}), define("wfc_helpers_get_set", [ "jquery", "wfc_plug_construct" ], function($, _root) {
    _root.ptt.UGetCurSet = function(selector, setyp) {
        var el = this.CustomizerLink, set = el.val() ? JSON.parse(el.val() || {}) : !1, set = set[setyp] || _root.DBSets[selector][setyp] || _root.DefSets[selector][setyp], set = this.hasBeenReset ? _root.DefSets[selector][setyp] : set;
        switch (setyp) {
          case "font-family":
            set = set ? set.replace("[cfont]", "").replace("[gfont]", "") : !1;
        }
        return set;
    }, _root.ptt.UGetSettingType = function(setyp, target_el) {
        return setyp || $(target_el).attr("data-setting-type") || $(target_el).closest("ul.tc-list-items").attr("data-setting-type") || $(target_el).closest("div.selecter").siblings("select").attr("data-setting-type") || $(target_el).siblings("input.tc-number-input").attr("data-setting-type");
    }, _root.ptt.UGetSettingValue = function(setyp, target_el, reset) {
        var value = $(target_el).val() || $(target_el).attr("data-value");
        return value = $('.tc-select-input[data-setting-type="' + setyp + '"]', this.id).find("option:contains(" + value + ")").attr("data-value") || $(target_el).find(":selected").attr("data-value") || $(target_el).siblings("input.tc-number-input").val() || value, reset ? _root.DefSets[this.sel][setyp] : value;
    }, _root.ptt.UUpSet = function(e, settingval, setyp) {
        var event = e || window.event;
        if (!event) return;
        var target_el = event.currentTarget, globalinput = this.CustomizerLink, isReset = $(target_el).hasClass("tc-single-reset") ? !0 : !1, setyp = this.UGetSettingType(setyp, target_el), value = this.UGetSettingValue(setyp, target_el, isReset), currentsettings = globalinput.val() ? JSON.parse(globalinput.val() || {}) : {}, settingvalue = {};
        settingvalue[setyp] = value;
        switch (setyp) {
          case "color":
          case "color-hover":
            settingvalue[setyp] = isReset ? this.defaultcolor[setyp] : settingval, isReset && this.updateFontColor(setyp, settingvalue[setyp], !0);
            break;
          case "subset":
            var subset = !value || "all-subsets" == value ? "all-subsets" : value;
            this.RefreshFontlistHtml(subset), isReset && this.UpdateSelectInput(subset, setyp);
            break;
          case "font-family":
            var s = this.UInlineFontStyle(value);
            settingvalue["font-family"] = "[" + $(target_el).attr("data-font-type") + "]" + value, settingvalue["font-weight"] = s["font-weight"] ? s["font-weight"] : this.UGetCurSet(this.sel, "font-weight"), settingvalue["font-style"] = s["font-style"] ? s["font-style"] : this.UGetCurSet(this.sel, "font-style"), this.UpdateSelectInput(settingvalue["font-weight"], "font-weight"), this.UpdateSelectInput(settingvalue["font-style"], "font-style");
            if (isReset) {
                var Results = this.$DivSelResults[setyp], El = this.$DivSelEl[setyp], Input = this.$DivSelInput[setyp], FontName = Results.find('.tc-single-item[data-value="' + value + '"]').text();
                settingvalue["font-family"] = "[cfont]" + value, $, $("span", El).text(this.URemoveSpecChars(value)).css(this.UInlineFontStyle(value)), $("span", El).text(FontName), Input.val(""), this.DivSelUpdateSelectorTitle(null, value);
            }
            break;
          case "font-size":
          case "line-height":
          case "letter-spacing":
            var unit = $(target_el).attr("data-unit") || $(target_el).siblings("input").attr("data-unit");
            unit = unit || "px", settingvalue[setyp] = this.URemoveAllChars(settingvalue[setyp]) + unit;
            if (isReset) {
                var resetval = this.URemoveAllChars(settingvalue[setyp]);
                $(".tc-select-" + setyp + " input", this.id).val(resetval);
            }
            break;
          case "text-align":
          case "text-decoration":
          case "text-transform":
            isReset && this.UpdateSelectInput(settingvalue[setyp], setyp);
            break;
          case "static-effect":
            var newcolor = _root.StatEffects[value][2] || this.defaultcolor.color;
            settingvalue.color = isReset ? this.defaultcolor.color : newcolor, this.updateFontColor("color", newcolor);
            var newHoverColor = "main" == this.UGetCurSet(this.sel, "color-hover") ? this.defaultcolor["color-hover"] : this.UGetCurSet(this.sel, "color-hover");
            settingvalue["color-hover"] = isReset ? this.defaultcolor["color-hover"] : newHoverColor, this.updateFontColor("color-hover", newHoverColor);
            if (isReset) {
                var Results = this.$DivSelResults[setyp], El = this.$DivSelEl[setyp], Select = this.$DivSelSelect[setyp], Input = this.$DivSelInput[setyp], EffectName = Results.find('.tc-single-item[data-value="' + value + '"]').text();
                this.updateSelectedEffectClass($("span", Select), value), $("span", this.$DivSelEl[setyp]).text(EffectName), Input.val("");
            }
            break;
          case "icon":
            settingvalue[setyp] = $(target_el).is(":checked") ? "show" : "hide", settingvalue[setyp] = isReset ? "show" : settingvalue[setyp];
            var CheckInput = $(".tc-select-" + setyp + " input", this.id);
            isReset && CheckInput.iCheck("check");
            break;
          case "important":
            settingvalue[setyp] = $(target_el).is(":checked") ? !0 : !1, settingvalue[setyp] = isReset ? !1 : settingvalue[setyp];
            var CheckInput = $(".tc-select-" + setyp + " input", this.id);
            isReset && CheckInput.iCheck("uncheck");
        }
        for (var type in settingvalue) currentsettings[type] = settingvalue[type];
        globalinput.val(JSON.stringify(currentsettings));
        var browser = this.UgetBrowser();
        1 != browser.msie || "font-family" != setyp && "static-effect" != setyp ? globalinput.trigger("change") : "click" == event.type && globalinput.trigger("change"), !isReset && !_root.ResetingAll && (this.$OpenResetSingleButton.show().removeClass("not-changed").addClass("settings-changed"), $(".tc-open-all-reset").show());
    };
}), define("wfc_helpers_various", [ "jquery", "wfc_plug_construct" ], function($, _root) {
    _root.ptt.URemoveSpecChars = function(font) {
        return font && "string" == typeof font ? font.replace(/[\+|:]/g, " ") : !1;
    }, _root.ptt.URemoveAllChars = function(expr) {
        return "number" == typeof expr ? expr : expr ? expr.replace(/[^0-9\.]+/g, "") : !1;
    }, _root.ptt.URemoveNumbers = function(expr) {
        return "number" == typeof expr ? expr : expr ? expr.replace(/[0-9]/g, "") : !1;
    }, _root.ptt.UInlineFontStyle = function(font) {
        if (!font) return;
        var split = font.split(":"), font_family, font_weight, font_style = "";
        return font_family = split[0], font_weight = split[1] ? this.URemoveAllChars(split[1]) : "", font_style = split[1] && -1 != split[1].indexOf("italic") ? "italic" : "", {
            "font-family": this.URemoveSpecChars(font_family),
            "font-weight": font_weight || 400,
            "font-style": font_style || "normal"
        };
    }, _root.ptt.UGetObjectSize = function(obj) {
        var size = 0, key;
        for (key in obj) obj.hasOwnProperty(key) && size++;
        return size;
    }, _root.ptt.UgetBrowser = function() {
        var browser = {}, ua, match, matched;
        return $.isEmptyObject(_root.CurrentBrowser) ? (ua = navigator.userAgent.toLowerCase(), match = /(chrome)[ \/]([\w.]+)/.exec(ua) || /(webkit)[ \/]([\w.]+)/.exec(ua) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) || /(msie) ([\w.]+)/.exec(ua) || ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) || [], matched = {
            browser: match[1] || "",
            version: match[2] || "0"
        }, matched.browser && (browser[matched.browser] = !0, browser.version = matched.version), browser.chrome ? browser.webkit = !0 : browser.webkit && (browser.safari = !0), _root.CurrentBrowser = browser, browser) : _root.CurrentBrowser;
    };
}), define("wfc_zoneslayout_init", [ "jquery", "wfc_plug_construct" ], function($, _root) {
    _root.ptt.WrapControlsInZones = function(CustomZoneKey) {
        this.ZoneKey = CustomZoneKey || _root.DefSets[this.sel].zone || "body";
        var ZonesWrapperExist = 0 == $(".tc-zones-wrapper").length ? !1 : !0;
        this.$ZonesWrapper = ZonesWrapperExist ? $(".tc-zones-wrapper") : $("<ul>", {
            "class": "tc-zones-wrapper"
        });
        var ZoneKey = this.ZoneKey, ZonesWrapper = this.$ZonesWrapper, ZoneName = _root.Zones[ZoneKey][1] || "Undefined Zone", ZoneClassId = "tc-zone-" + ZoneKey, zh = this.GeneratesZonePicture(ZoneKey);
        CustomZoneKey || $(this.id).addClass(ZoneClassId), _root.ZoneExist[ZoneKey] = 0 == $("#" + ZoneClassId).length ? !1 : !0, _root.ZoneSection[ZoneKey] = !0 === _root.ZoneExist[ZoneKey] ? $("#" + ZoneClassId) : $("<li>", {
            id: ZoneClassId,
            "class": "tc-zone-section"
        }), _root.ZoneTitleWrap[ZoneKey] = _root.ZoneExist[ZoneKey] ? $(".tc-zone-title-wrap", _root.ZoneSection[ZoneKey]) : $("<ul>", {
            "class": "tc-zone-title-wrap"
        }), _root.ZoneLayout[ZoneKey] = _root.ZoneExist[ZoneKey] ? $(".tc-layout-wrapper", _root.ZoneTitleWrap[ZoneKey]) : $("<div>", {
            "class": "tc-layout-wrapper"
        }), _root.ZoneTitle[ZoneKey] = _root.ZoneExist[ZoneKey] ? $(".tc-zone-title", _root.ZoneTitleWrap[ZoneKey]) : $("<h3>", {
            "class": "tc-zone-title"
        }), _root.ZoneContent[ZoneKey] = _root.ZoneExist[ZoneKey] ? $(".tc-zone-content", _root.ZoneSection[ZoneKey]) : $("<ul>", {
            "class": "tc-zone-content"
        }), ZonesWrapperExist || $("#accordion-section-tc_font_customizer_settings > ul > li:first").after(ZonesWrapper), _root.ZoneExist[ZoneKey] || (_root.ZoneLayout[ZoneKey].append(zh), _root.ZoneTitle[ZoneKey].append(ZoneName), _root.ZoneTitleWrap[ZoneKey].append($("<li>").append(_root.ZoneLayout[ZoneKey])), _root.ZoneLayout[ZoneKey].after(_root.ZoneTitle[ZoneKey]), ZonesWrapper.append(_root.ZoneSection[ZoneKey].append(_root.ZoneTitleWrap[ZoneKey])), _root.ZoneTitleWrap[ZoneKey].after(_root.ZoneContent[ZoneKey]), _root.ZoneTitleWrap[ZoneKey].hover(function() {
            $(this).addClass("hover");
        }, function() {
            $(this).removeClass("hover");
        }));
        switch (ZoneKey) {
          case "body":
          case "custom":
            $(".tc-zones", _root.ZoneSection[ZoneKey]).addClass("tc-active-zone");
            break;
          default:
            $(".tc-layout-" + ZoneKey + ".tc-zones", _root.ZoneSection[ZoneKey]).addClass("tc-active-zone");
        }
        !CustomZoneKey && $(this.id).hasClass(ZoneClassId) && _root.ZoneContent[ZoneKey].append($(this.id));
        if (!CustomZoneKey) return;
        this.InitCustomSelectorForms({
            ZoneKey: ZoneKey
        }), _root.ZoneExist[ZoneKey] = 0 == $("#" + ZoneClassId).length ? !1 : !0;
    }, _root.ptt.GeneratesZonePicture = function(ZoneKey) {
        var Wrapper = _root.Zones[ZoneKey][0], zh = "";
        if (_root.ControlHTMLBlocks[Wrapper]) return _root.ControlHTMLBlocks[Wrapper];
        switch (Wrapper) {
          case "full-layout":
            zh += '<div class="tc-layout-header tc-zones">', zh += '    <div class="tc-layout-site-title tc-selector"></div>', zh += '    <div class="tc-layout-site-description tc-selector"></div>', zh += '    <div class="tc-layout-menu tc-selector"></div>', zh += "</div>", zh += '<div class="tc-layout-marketing tc-zones">', zh += '    <div class="tc-layout-slider tc-selector"></div>', zh += "</div>", zh += '<div class="tc-layout-sidebars tc-zones">', zh += '    <div class="tc-layout-single-sidebar tc-selector"></div>', zh += "</div>", zh += '<div class="tc-layout-post tc-zones">', zh += '    <div class="tc-layout-content tc-selector"></div>', zh += "</div>", zh += '<div class="tc-layout-comments tc-zones">', zh += '    <div class="tc-layout-single-comment one tc-selector"></div>', zh += '    <div class="tc-layout-single-comment two tc-selector"></div>', zh += '    <div class="tc-layout-single-comment three tc-selector"></div>', zh += "</div>", zh += '<div class="tc-layout-footer tc-zones">', zh += '    <div class="tc-layout-footer-widgets tc-selector"></div>', zh += '    <div class="tc-layout-footer-widgets tc-selector"></div>', zh += '    <div class="tc-layout-footer-widgets tc-selector last"></div>', zh += '    <div class="tc-layout-colophon tc-selector"></div>', zh += "</div>";
            break;
          case "headings":
            zh += '<div class="tc-headings h1 tc-selector"></div>', zh += '<div class="tc-headings h2 tc-selector"></div>', zh += '<div class="tc-headings h3 tc-selector"></div>', zh += '<div class="tc-headings h4 tc-selector"></div>', zh += '<div class="tc-headings h5 tc-selector"></div>', zh += '<div class="tc-headings h6 tc-selector"></div>';
            break;
          case "paragraphs":
            zh += '<div class="tc-paragraph tc-selector"></div>', zh += '<div class="tc-paragraph tc-selector"></div>', zh += '<div class="tc-paragraph tc-selector"></div>', zh += '<div class="tc-paragraph tc-selector"></div>', zh += '<div class="tc-paragraph tc-selector"></div>', zh += '<div class="tc-paragraph tc-selector"></div>', zh += '<div class="tc-paragraph tc-selector"></div>', zh += '<div class="tc-paragraph tc-selector"></div>', zh += '<div class="tc-paragraph tc-selector"></div>', zh += '<div class="tc-paragraph tc-selector"></div>', zh += '<div class="tc-paragraph half tc-selector"></div>';
            break;
          case "links":
            zh += '<div class="tc-link">', zh += '<span class="tc-customizer-icon tc-link-icon"></span>', zh += "</div>";
            break;
          case "blockquotes":
            zh += '<div class="tc-blockquote">', zh += '<span class="tc-customizer-icon tc-blockquote-icon"></span>', zh += "</div>";
        }
        return _root.ControlHTMLBlocks[Wrapper] = zh, zh;
    };
}), define("wfc_resetselector_init", [ "jquery", "wfc_plug_construct" ], function($, _root) {
    _root.ptt.InitResetAll = function() {
        if (_root.ControlHTMLBlocks["reset-all-warning"]) return;
        var me = this, $ResetAllblock = $("<div>", {
            "class": "tc-reset-all-block"
        }), $OpenResetAllButton = $("<span>", {
            "class": "tc-open-all-reset button"
        }), $ResetAllConfirm = $("<div>", {
            "class": "message settings-updated"
        }), $ResetAllwarningBlock = $("<div>", {
            "class": "tc-alert reset-all"
        }), $ResetAllYes = $("<span>", {
            "class": "tc-all-reset button"
        }), $ResetAllNo = $("<span>", {
            "class": "tc-cancel-all-reset button"
        }), $ResetAllNode = $("#customize-theme-controls").find('li[id*="accordion-section-tc_font_"] p.description');
        $ResetAllNode.after($ResetAllblock), $ResetAllblock.append($OpenResetAllButton.append('<a class="tc-customizer-icon tc-reset-icon" href="#" title="' + _root.Translations.reset_all_button + '">' + _root.Translations.reset_all_button + "</a>")).append($ResetAllConfirm.append($("<p>").text(_root.Translations.reset_all_confirm))).after($ResetAllwarningBlock), $ResetAllwarningBlock.append($("<p>").text(_root.Translations.reset_all_warning)).append($ResetAllYes.text(_root.Translations.reset_all_yes)).append(" ").append($ResetAllNo.text(_root.Translations.reset_all_no)), _root.ControlHTMLBlocks["reset-all-warning"] = $ResetAllwarningBlock, _root.HasSavedSets.hassavedsets && $OpenResetAllButton.show(), $OpenResetAllButton.click(function(e) {
            $ResetAllwarningBlock.slideToggle("fast"), $(this).hide();
        }), $ResetAllYes.click(function() {
            _root.ResetingAll = !0;
        }).click(_root.__b(me.ResetAllSelectors, me)).click(_root.__b(me.DisplayUpdateMessage, me)).click(function(e) {
            $ResetAllwarningBlock && $ResetAllwarningBlock.is(":visible") && $ResetAllwarningBlock.slideToggle("fast"), $OpenResetAllButton.hide();
        }), $ResetAllNo.click(function(e) {
            $ResetAllwarningBlock.slideToggle("fast"), setTimeout(function() {
                $OpenResetAllButton.show();
            }, 200);
        });
    }, _root.ptt.ResetAllSelectors = function() {
        var me = this;
        $(".tc-setting-title-wrapper").each(function() {
            $(this).find(".tc-open-single-reset").hasClass("settings-changed") && ($(this).find(".font-customizer-title").trigger("click"), $(this).find(".tc-single-reset.button").trigger("click", [ !0 ]));
        }), $("#customize-header-actions").find("#save").trigger("click"), setTimeout(function() {
            wp.customize.instance("tc_font_customizer_plug[" + me.sel + "]").previewer.refresh();
        }, 700), $(".tc-zone-section", "#customize-theme-controls").each(function() {
            $(this).hasClass("open") && $(this).find(".tc-zone-title-wrap").trigger("click");
        }), 0 == $(".settings-changed", me.$ZonesWrapper).length && $(".tc-open-all-reset").hide(), _root.ResetingAll = !1;
    }, _root.ptt.InitResetSingle = function() {
        var me = this;
        me.$OpenResetSingleButton = $(".tc-open-single-reset", me.id), me.$AlertResetBox = $(".alert-reset", me.id);
        var AlertButtons = $(".alert-reset .button", me.id), SingleResetButton = $(".tc-single-reset.button", me.id);
        _root.HasSavedSets[me.sel] && !me.hasBeenReset && me.$OpenResetSingleButton.css("display", "inline-block").removeClass("not-changed").addClass("settings-changed"), me.$OpenResetSingleButton.click(function(e) {
            me.$AlertResetBox.slideToggle("fast"), $(".tc-open-button", me.id).hide();
        }), SingleResetButton.click(_root.__b(me.ResetSingleSelector, me)).click(_root.__b(me.DisplayUpdateMessage, me)), AlertButtons.click(function(e, ResetAll) {
            ResetAll || (me.$AlertResetBox.slideToggle("fast"), $(".tc-open-button", me.id).not(".not-changed").show(), me.hasBeenReset || setTimeout(function() {
                me.$OpenResetSingleButton.removeClass("not-changed").addClass("settings-changed");
            }, 200));
        });
    }, _root.ptt.ResetSingleSelector = function(e, ResetAll) {
        this.hasBeenReset = !1;
        if (ResetAll && "" == this.CustomizerLink.val()) return;
        var event = e || window.event, target_el = event.currentTarget, me = this;
        for (var section in _root.Tree) $.each(_root.Tree[section].controls, function(setyp, data) {
            var classname = data[1][0];
            "tc-div-input" == classname && ($(".tc-select-" + setyp + " .tc-div-select", me.id).length || $(".font-customizer-title", me.id).trigger("click").trigger("click"), $(".tc-select-" + setyp + " .tc-dropdown", me.id).length || $(".tc-select-" + setyp + " .tc-div-select span", me.id).trigger("click").trigger("click"));
        });
        for (var section in _root.Tree) $.each(_root.Tree[section].controls, function(setyp, data) {
            var classname = data[1][0];
            me.UUpSet(event, !1, setyp);
        });
        me.CustomizerLink.val(""), me.CustomizerLink.trigger("change"), me.$OpenResetSingleButton.removeClass("settings-changed").addClass("not-changed").hide(), me.hasBeenReset = !0, ResetAll || ($("#customize-header-actions").find("#save").trigger("click"), setTimeout(function() {
            wp.customize.instance("tc_font_customizer_plug[" + me.sel + "]").previewer.refresh();
        }, 500)), !$(".settings-changed", this.$ZonesWrapper).length && $(".tc-open-all-reset").hide();
    }, _root.ptt.DisplayUpdateMessage = function(e, ResetAll) {
        var event = e || window.event, target_el = event.currentTarget, me = this;
        if (ResetAll && !this.hasBeenReset) return;
        var set_update = $(target_el).hasClass("tc-all-reset") ? $(".settings-updated", ".tc-reset-all-block") : $(".settings-updated", this.id);
        set_update.css("opacity", 0).show(), set_update.animate({
            opacity: .9
        }, function() {
            set_update.delay(1e3).fadeOut(function() {
                set_update.hide();
            });
        });
    };
}), define("wfc_control_init", [ "jquery", "wfc_plug_construct" ], function($, _root) {
    _root.ptt.InitSelectorTitle = function() {
        var me = this;
        this.$ControlTitle = $("h3.font-customizer-title", this.id), this.DivSelUpdateSelectorTitle(null, this.UGetCurSet(this.sel, "font-family")), this.$ControlTitle.on("click", function() {
            me.$AlertResetBox.is(":visible") && $(".tc-cancel", me.$AlertResetBox).trigger("click"), me.$AlertRemoveBox && me.$AlertRemoveBox.is(":visible") && $(".tc-cancel", me.$AlertRemoveBox).trigger("click"), me.$CustomInputWrap && me.$CustomInputWrap.is(":visible") && $(".tc-cancel-custom-selector", me.$CustomInputWrap).trigger("click");
        });
    }, _root.ptt.InitLargeControls = function() {
        var me = this;
        $(me.id).on("click", ".font-customizer-title , .font-customizer-title-font", function() {
            _root.BlockStatus[me.sel]["color-picker-hex"] || (me.InitControls("color-picker-hex"), _root.BlockStatus[me.sel]["color-picker-hex"] = 1), _root.BlockStatus[me.sel]["tc-select-input"] || (me.InitControls("tc-select-input"), _root.BlockStatus[me.sel]["tc-select-input"] = 1), _root.BlockStatus[me.sel]["tc-div-input-title"] || (me.InitControls("tc-div-input", "title"), _root.BlockStatus[me.sel]["tc-div-input-title"] = 1);
        }), $(me.id).on("click", ".tc-div-select span", function() {
            me.InitControls("tc-div-input", "list");
        }).on("click", ".tc-div-select b", function() {
            me.InitControls("tc-div-input", "list");
        }), $(me.id).on("click", ".tc-div-select span", _root.__b(me.DivSelToggleDrop, me)).on("click", ".tc-div-select b", _root.__b(me.DivSelToggleDrop, me)), $(me.id).on("mouseenter", ".tc-div-select-active li.tc-single-item", _root.__b(me.DivSelActivateItem, me)).on("mouseenter", ".tc-div-select-active li.tc-single-item", _root.__b(me.UUpSet, me)).on("mouseenter", ".tc-div-select-active li.tc-single-item", _root.__b(me.DivSelActivateItem, me)).on("mouseleave", ".tc-div-select-active li.tc-single-item", _root.__b(me.DivSelDeactivateItem, me)).on("click", ".tc-div-select-active li.tc-single-item", _root.__b(me.DivSelSelectItem, me)).on("click", ".tc-div-select-active li.tc-single-item", _root.__b(me.UUpSet, me)).on("click", ".tc-div-select-active li.tc-single-item", _root.__b(me.DivSelUpdateSelectorTitle, me));
    }, _root.ptt.InitControls = function(control_type, fragment) {
        var me = this;
        _root.BlockStatus[me.sel] = _root.BlockStatus[me.sel] || {};
        if (_root.BlockStatus[me.sel]["tc-div-input-title-font-family"] && _root.BlockStatus[me.sel]["tc-div-input-list-font-family"] && _root.BlockStatus[me.sel]["tc-div-input-title-static-effect"] && _root.BlockStatus[me.sel]["tc-div-input-list-static-effect"]) return;
        for (var section in _root.Tree) $.each(_root.Tree[section].controls, function(subsection, controls) {
            var setyp = subsection, classname = controls[1][0];
            if (control_type != classname) return !0;
            switch (classname) {
              case "tc-div-input":
                if (!_root.BlockStatus[me.sel]["tc-div-input-" + fragment + "-" + setyp]) {
                    me.GeneratesDivSelect(setyp, controls[1][1], fragment);
                    var browser = me.UgetBrowser();
                    "list" == fragment && "font-family" == setyp && (1 == browser.chrome || 1 == browser.safari || 1 == browser.opera) && $(".tc-select-font-family .tc-list-items", me.id).on("scroll", _root.__b(me.DivSelScroll, me)), _root.BlockStatus[me.sel]["tc-div-input-" + fragment + "-" + setyp] = 1;
                }
                "font-family" == setyp && "list" == fragment && me.RefreshFontlistHtml(me.UGetCurSet(me.sel, "subset"));
                break;
              case "tc-check-input":
                me.GeneratesCheckInput(setyp), $(me.id).on("ifChanged", ".tc-select-" + setyp + " .tc-check-input", _root.__b(me.UUpSet, me));
                break;
              case "tc-select-input":
                me.GeneratesSelectInput(setyp, controls[1][1]), "subset" == setyp ? $(me.id).on("change", ".tc-select-" + setyp + " .tc-select-input", _root.__b(me.UUpSet, me)) : $(me.id).on("hover", ".tc-select-" + setyp + " .selecter-item", _root.__b(me.UUpSet, me)).on("change", ".tc-select-" + setyp + " .tc-select-input", _root.__b(me.UUpSet, me));
                break;
              case "tc-number-input":
                me.InitNumberInputControl(setyp), $(me.id).on("click", ".tc-select-" + setyp + " .stepper-arrow", _root.__b(me.UUpSet, me));
                break;
              case "color-picker-hex":
                me.defaultcolor = me.defaultcolor || {}, me.savedcolor = me.savedcolor || {}, me.ColorInit = me.ColorInit || {}, me.defaultcolor[setyp] = "main" == _root.DefSets[me.sel][setyp] && _root.SkinColors[me.currentskin] ? _root.SkinColors[me.currentskin]["color" == setyp ? 0 : 1] || "#08c" : _root.DefSets[me.sel][setyp] || "#777", me.savedcolor[setyp] = me.UGetCurSet(me.sel, setyp), me.savedcolor[setyp] = "main" == me.savedcolor[setyp] || !me.savedcolor[setyp] ? me.defaultcolor[setyp] : me.savedcolor[setyp], me.ColorInit[setyp] = !0, me.InitColorControl(setyp);
            }
        });
    };
}), define("wfc_control_divdropdown", [ "jquery", "wfc_plug_construct" ], function($, _root) {
    _root.ptt.GeneratesDivSelect = function(setyp, list, fragment) {
        var savedsetting = this.UGetCurSet(this.sel, setyp), item_list = "";
        this.$DivSelInput = this.$DivSelInput || {}, this.$DivSelEl = this.$DivSelEl || {}, this.$DivSelDrop = this.$DivSelDrop || {}, this.$DivSelArrow = this.$DivSelArrow || {}, this.$DivSelSelect = this.$DivSelSelect || {}, this.$DivSelResults = this.$DivSelResults || {}, this.$DivSelInput[setyp] = this.$DivSelInput[setyp] || $(".tc-select-" + setyp + " input.tc-div-input", this.id), this.$DivSelEl[setyp] = this.$DivSelEl[setyp] || $("<div>", {
            "class": "tc-div-select"
        }), this.$DivSelDrop[setyp] = this.$DivSelDrop[setyp] || $("<div>", {
            "class": "tc-dropdown"
        }), this.$DivSelArrow[setyp] = this.$DivSelArrow[setyp] || $("<div><b></b></div>"), this.$DivSelResults[setyp] = this.$DivSelResults[setyp] || $("<ul>", {
            "class": "tc-list-items " + this.$DivSelInput[setyp].attr("class"),
            "data-setting-type": setyp
        });
        switch (setyp) {
          case "font-family":
            var fonts = list, l = fonts.length, cfont_length = _root.CFonts.length, r, s, font_style, data_selector;
            this.$DivSelSelect[setyp] = $("<a>").css(this.UInlineFontStyle(savedsetting)).append($("<span>" + this.URemoveSpecChars(savedsetting) + "</span>").attr("data-setting-type", setyp));
            if (fragment && "title" == fragment) break;
            if (!_root.ControlHTMLBlocks["font-list"]) {
                for (var i = 0; i < l; i++) r = this.URemoveSpecChars(fonts[i].name), s = this.UInlineFontStyle(fonts[i].name), font_style = s["font-style"] ? "; font-style:" + s["font-style"] : "", "-1" == $.inArray(fonts[i]["name"], _root.CFonts) ? (item_list += cfont_length == i ? '<li class="tc-font-list" id="google-list">Google Fonts<ul>' : "", item_list += '<li class="tc-single-item" data-font-type="gfont" data-subsets="' + fonts[i].subsets + '" data-value="' + fonts[i].name + '" style="font-family: ' + s["font-family"] + "; font-weight: " + s["font-weight"] + font_style + ';">' + r + "</li>", item_list += l == i ? "</ul></li>" : "") : (item_list += 0 == i ? '<li class="tc-font-list" id="classical-list">Web Safe Fonts<ul>' : "", item_list += '<li class="tc-single-item" data-font-type="cfont" data-value="' + fonts[i].name + '" style="font-family: ' + s["font-family"] + '">' + r + "</li>", item_list += cfont_length - 1 == i ? "</ul></li>" : "");
                _root.ControlHTMLBlocks["font-list"] = item_list;
            } else item_list = _root.ControlHTMLBlocks["font-list"];
            "-1" == $.inArray(savedsetting, _root.CFonts) && savedsetting && this.AddFontLink(savedsetting, "static");
            break;
          case "static-effect":
            var SavedSettingTitle = list[savedsetting] && list[savedsetting][0] ? list[savedsetting][0] : savedsetting;
            this.$DivSelSelect[setyp] = $("<a>").append($("<span>" + SavedSettingTitle + "</span>").attr("data-setting-type", setyp));
            if (fragment && "title" == fragment) break;
            if (!_root.ControlHTMLBlocks["effect-list"]) {
                for (var key in list) item_list += '<li class="tc-single-item ' + list[key][1] + '" data-value="' + key + '">' + list[key][0] + "</li>";
                _root.ControlHTMLBlocks["effect-list"] = item_list;
            } else item_list = _root.ControlHTMLBlocks["effect-list"];
            this.updateSelectedEffectClass($("span", this.$DivSelSelect[setyp]), savedsetting);
        }
        var Input = this.$DivSelInput[setyp], El = this.$DivSelEl[setyp], Drop = this.$DivSelDrop[setyp], Arrow = this.$DivSelArrow[setyp], Select = this.$DivSelSelect[setyp], Results = this.$DivSelResults[setyp];
        Input.empty().hide(), fragment && "title" == fragment ? Input.after(El.append(Select.append(Arrow))) : "list" == fragment && (Drop.append(Results.append(item_list)).hide(), Input.siblings(".tc-div-select").append(Drop));
    }, _root.ptt.DivSelToggleDrop = function(ev) {
        var me = this, event = ev || window.event, setyp = $(event.target).attr("data-setting-type") || $(ev.target).closest("div").siblings("span").attr("data-setting-type") || $(event.currentTarget).attr("data-setting-type") || $(event.currentTarget).closest("ul.tc-list-items").attr("data-setting-type") || $(event.currentTarget).siblings("span").attr("data-setting-type"), $li, El = me.$DivSelEl[setyp], Drop = me.$DivSelDrop[setyp], Input = me.$DivSelInput[setyp], Results = me.$DivSelResults[setyp], savedsetting = me.UGetCurSet(me.sel, setyp), settingval = Input.val() || savedsetting;
        settingval ? $li = $("li[data-value='" + settingval + "']", Results) : $li = $("li", Results).first(), me.active ? (El.removeClass("tc-div-select-active"), Results.scrollTop(0), Drop.hide()) : (El.addClass("tc-div-select-active"), Drop.show(), $li.addClass("active"), Results.scrollTop($li.position().top)), me.active = !me.active;
    }, _root.ptt.DivSelScroll = function() {
        var me = this;
        clearTimeout($.data(this, "scrollTimer")), $.data(this, "scrollTimer", setTimeout(function() {
            me.GetVisibleFonts();
        }, 500));
    }, _root.ptt.DivSelSelectItem = function(ev) {
        var event = ev || window.event, setyp = $(event.currentTarget).closest("ul.tc-list-items").attr("data-setting-type"), Input = this.$DivSelInput[setyp], Results = this.$DivSelResults[setyp], value = $("li.active", Results).data("value");
        Input.val(value).change(), this.DivSelUpdateCurrentItem(event, value, setyp), this.DivSelToggleDrop(event);
    }, _root.ptt.DivSelActivateItem = function(ev) {
        if (!this.$DivSelResults) return;
        var event = ev || window.event, setyp = $(event.currentTarget).closest("ul.tc-list-items").attr("data-setting-type"), Results = this.$DivSelResults[setyp];
        $("li.active", Results).removeClass("active"), $(event.currentTarget).addClass("active");
    }, _root.ptt.DivSelDeactivateItem = function(ev) {
        var event = ev || window.event;
        $(event.currentTarget).removeClass("active");
    }, _root.ptt.DivSelUpdateSelectorTitle = function(ev, value) {
        var event = ev || window.event, target_el = event && "click" == event.type ? $(event.currentTarget) : !1, fontname = " (" + this.URemoveSpecChars(value) + ")", fontnode = $("<span>", {
            "class": "font-customizer-title-font"
        });
        if (target_el) {
            var setyp = this.UGetSettingType(null, target_el);
            value = value ? value : this.UGetSettingValue(setyp, target_el), fontname = " (" + this.URemoveSpecChars(value) + ")";
        }
        if (setyp && "font-family" != setyp) return;
        0 != this.$ControlTitle.siblings(".font-customizer-title-font").length && $("span.font-customizer-title-font", this.id).remove(), this.$ControlTitle.css(this.UInlineFontStyle(value)), $(".tc-reset-block", this.id).after(fontnode.append(fontname)), this.AddFontLink(value, "static");
    }, _root.ptt.DivSelUpdateCurrentItem = function(event, value, setyp) {
        switch (setyp) {
          case "font-family":
            $("span", this.$DivSelEl[setyp]).text(this.URemoveSpecChars(value)).css(this.UInlineFontStyle(value)), this.AddFontLink(value, "static");
            break;
          case "static-effect":
            var effectname = $(event.currentTarget).text(), Select = this.$DivSelSelect[setyp];
            this.updateSelectedEffectClass($("span", Select), value), $("span", this.$DivSelEl[setyp]).text(effectname);
            break;
          default:
            $("span", this.$DivSelEl[setyp]).text(value);
        }
    }, _root.ptt.RefreshFontlistHtml = function(subset) {
        var results = this.$DivSelResults["font-family"];
        $("li.tc-single-item", results).each(function() {
            if (!$(this).attr("data-subsets") || "cfont" === $(this).attr("data-font-type")) return !0;
            -1 != $(this).attr("data-subsets").indexOf(subset) || !subset || "all-subsets" == subset ? $(this).show().removeClass("hidden") : $(this).hide().addClass("hidden");
        });
    }, _root.ptt.GetVisibleFonts = function() {
        var me = this, results = me.$DivSelResults["font-family"];
        if (results.is(":hidden")) return;
        var top = results.scrollTop(), bottom = top + results.height(), visiblefontlist = [];
        if (this.options.lookahead) {
            var li = $("li", results).first().height();
            bottom += li * this.options.lookahead;
        }
        $("li.tc-single-item", results).not(".hidden").each(function() {
            var ft = $(this).position().top + top, fb = ft + $(this).height(), font = $(this).data("value");
            fb >= top && ft <= bottom && "cfont" != $(this).data("font-type") && visiblefontlist.push(font);
        }), visiblefontlist.length > 0 && me.AddFontLink(visiblefontlist);
    }, _root.ptt.AddFontLink = function(fontlist, listtype) {
        if ("string" == typeof fontlist && "-1" != $.inArray(fontlist, _root.CFonts)) return;
        var subset = $(".subset-drop", this.id).find(":selected").attr("data-subset"), fontclass = listtype && "static" == listtype ? "static_gfont" : "dyn_gfont", fontlist = "string" == typeof fontlist ? [ fontlist ] : fontlist, apiUrl = [];
        switch (fontclass) {
          case "static_gfont":
            var StaticFontList = [];
            _root.StaticFonts[this.sel] = fontlist.join("");
            for (var key in _root.StaticFonts) StaticFontList.push(_root.StaticFonts[key]);
            apiUrl.push(this.options.api), apiUrl.push(StaticFontList.join("|"));
            break;
          case "dyn_gfont":
            apiUrl.push(this.options.api), apiUrl.push(fontlist.join("|"));
        }
        "undefined" != typeof subset && "all-subsets" != subset && apiUrl.push("&subset=" + subset), $("link." + fontclass).length === 0 ? $("link:last").after('<link class="' + fontclass + '" href="' + apiUrl.join("") + '" rel="stylesheet" type="text/css">') : $("link." + fontclass).attr("href", apiUrl.join(""));
    }, _root.ptt.updateSelectedEffectClass = function(SelectBox, CurrentEffect) {
        if (!_root.StatEffects[CurrentEffect]) return;
        var ClassesList = $(SelectBox).attr("class");
        if (ClassesList) {
            ClassesList = $(SelectBox).attr("class").split(" ");
            for (var i = 0; i < ClassesList.length; i++) ClassesList[i].indexOf("font-effect") != -1 && $(SelectBox).removeClass(ClassesList[i]);
        }
        $(SelectBox).addClass(_root.StatEffects[CurrentEffect][1]);
    };
}), define("wfc_control_check", [ "jquery", "wfc_plug_construct" ], function($, _root) {
    _root.ptt.GeneratesCheckInput = function(setyp) {
        var $CheckInput = $(".tc-select-" + setyp + " input", this.id), savedsetting = this.UGetCurSet(this.sel, setyp);
        $CheckInput.attr("data-setting-type", setyp), $CheckInput.iCheck({
            checkboxClass: "icheckbox_flat-grey",
            radioClass: "iradio_flat-grey"
        }), savedsetting && "hide" != savedsetting ? $CheckInput.iCheck("check") : savedsetting && "hide" == savedsetting && $CheckInput.iCheck("uncheck");
    };
}), define("wfc_control_select", [ "jquery", "wfc_plug_construct" ], function($, _root) {
    _root.ptt.GeneratesSelectInput = function(set, list) {
        var SelectInput = $(".tc-select-" + set + " input", this.id), savedsetting = this.UGetCurSet(this.sel, set), selected = savedsetting ? "" : 'selected="selected"', SelectWrapper = $("<select>", {
            "class": "tc-select-input",
            "data-setting-type": set
        }), html = "";
        if (!_root.ControlHTMLBlocks[set]) {
            for (var key in list) selected = key === savedsetting ? 'selected="selected"' : "", html += '<option data-value="' + key + '" class="tc-select-option" ' + selected + ">" + list[key] + "</option>";
            _root.ControlHTMLBlocks[set] = html;
        } else html = _root.ControlHTMLBlocks[set];
        SelectInput.empty().hide(), SelectInput.after(SelectWrapper.append(html)), SelectWrapper.selecter();
    }, _root.ptt.UpdateSelectInput = function(settingvalue, setyp) {
        var text = $('.tc-select-input[data-setting-type="' + setyp + '"]', this.id).find('option[data-value="' + settingvalue + '"]').text();
        $("input.tc-select-input", "li.tc-select-" + setyp).val(settingvalue), $(".selecter-selected", "li.tc-select-" + setyp).text(text);
    };
}), define("wfc_control_number", [ "jquery", "wfc_plug_construct" ], function($, _root) {
    _root.ptt.InitNumberInputControl = function(setyp) {
        var $input = $(".tc-select-" + setyp + " input", this.id), savedSetting = this.UGetCurSet(this.sel, setyp), unit = "px";
        "number" != typeof savedSetting ? unit = -1 != savedSetting.indexOf("px") || -1 != savedSetting.indexOf("em") ? this.URemoveNumbers(savedSetting).replace(/[\.|,]/g, "") : unit : unit = savedSetting > 8 ? "px" : "em", unit = savedSetting ? unit : "px", unit = "letter-spacing" == setyp ? "px" : unit, savedSetting ? (savedSetting = this.URemoveAllChars(savedSetting), $input.val(savedSetting)) : $input.val(0), $input.prev("span").append(" ( in " + unit + ")"), this.AddNumberInputAttributes($input, setyp, unit), $input.stepper();
    }, _root.ptt.AddNumberInputAttributes = function(input, setyp, unit) {
        var step = "em" == unit ? .1 : 1, min = 0;
        switch (setyp) {
          case "letter-spacing":
            input.attr("step", step).attr("data-unit", unit);
            break;
          default:
            input.attr("step", step).attr("min", min).attr("data-unit", unit);
        }
    };
}), define("wfc_control_color", [ "jquery", "wfc_plug_construct" ], function($, _root) {
    _root.ptt.InitColorControl = function(setyp) {
        var input = $(".tc-select-" + setyp + " input.color-picker-hex", this.id), me = this;
        input.wpColorPicker({
            width: 250,
            palettes: _root.customizrpalette,
            defaultColor: me.defaultcolor[setyp],
            change: function(event, ui) {
                me.ColorInit[setyp] || me.UUpSet(event, ui.color.toString(), setyp);
            }
        }), input.iris("option", "width", 222), input.iris("color", this.savedcolor[setyp]), this.ColorInit[setyp] = !1;
    }, _root.ptt.updateFontColor = function(setyp, color, reset) {
        var input = $(".tc-select-" + setyp + " input.color-picker-hex", this.id), event = "";
        input.iris("color", color), color == this.savedcolor[setyp] && !reset && this.UUpSet(event, color, setyp);
    };
}), define("wfc_plug_fire", [ "jquery", "wfc_plug_construct" ], function($, _root) {
    $.fn[_root.pluginName] = function(options) {
        return this.each(function() {
            $.data(this, "plugin_" + _root.pluginName) || $.data(this, "plugin_" + _root.pluginName, new _root.TCFC(this, options));
        });
    };
}), define("wfc_ready_pluginit", [ "jquery", "wfc_plug_construct" ], function($, _root) {
    $(document).ready(function() {
        var prefix = "#customize-control-" + _root.SettingPrefix + "-";
        for (var key in _root.DefSets) {
            var options = {
                selector: key
            };
            $(prefix + key).tcfc(options);
        }
    });
});

var is_dev = is_dev || !1;

is_dev || require([ "lib_icheck", "lib_selecter", "lib_stepper", "wfc_plug_construct", "wfc_helpers_get_set", "wfc_helpers_various", "wfc_zoneslayout_init", "wfc_resetselector_init", "wfc_control_init", "wfc_control_divdropdown", "wfc_control_check", "wfc_control_select", "wfc_control_number", "wfc_control_color", "wfc_plug_fire", "wfc_ready_pluginit", "wfc_ready_sectioninit" ]), define("wfc_ready_sectioninit", [ "jquery", "wfc_plug_construct" ], function($, _root) {
    $(document).ready(function() {
        var $WFCSection = $("#accordion-section-tc_font_customizer_settings", "#customize-theme-controls");
        $WFCSection.on("click", ".font-customizer-title , .font-customizer-title-font", function(e) {
            if (e.type === "keydown" && 13 !== e.which) return;
            e.preventDefault(), accordionSwitch($(this), "selectors");
        }), $WFCSection.on("click", ".tc-zone-title-wrap", function(e) {
            if (e.type === "keydown" && 13 !== e.which) return;
            e.preventDefault(), accordionSwitch($(this), "zones"), $(this).siblings(".tc-zone-content").find(".customize-control.open .tc-accordion-section-title").trigger("click");
        });
        var accordionOptions = {
            zones: $(".accordion-section-content li.tc-zone-section"),
            selectors: $(".accordion-section-content li.customize-control", $WFCSection)
        }, sectionContent = {
            zones: $(".tc-zone-content"),
            selectors: $(".tc-accordion-section-content", $WFCSection)
        };
        $(".accordion-section-title", "#customize-theme-controls").click(function() {
            $WFCSection.hasClass("open") && $WFCSection.find(".open .tc-zone-title").trigger("click");
        });
        var $ResetAllwarningBlock = $(".reset-all", "#accordion-section-tc_font_customizer_settings");
        $(".font-customizer-title, .tc-zone-title-wrap", "#customize-theme-controls").click(function() {
            !_root.ResetingAll && $ResetAllwarningBlock && $ResetAllwarningBlock.is(":visible") && $ResetAllwarningBlock.slideToggle("fast");
        });
        function accordionInit(type) {
            accordionOptions[type].removeClass("top bottom"), accordionOptions[type].filter(":visible").first().addClass("top"), accordionOptions[type].filter(":visible").last().addClass("bottom").find(sectionContent[type]).addClass("bottom");
        }
        function accordionSwitch(el, type) {
            if ("selectors" == type) var section = el.closest(".customize-control"), siblings = section.closest(".accordion-section-content").find(".customize-control.open"); else var section = el.closest(".tc-zone-section"), siblings = section.closest(".tc-zones-wrapper").find(".tc-zone-section.open");
            var content = section.find(sectionContent[type]);
            siblings.length && siblings.offset().top < 0 && $(".wp-full-overlay-sidebar-content").animate({
                scrollTop: -$("#customize-theme-controls").offset().top - siblings.height() + el.offset().top + $(".wp-full-overlay-sidebar-content").offset().top
            }, 700);
            if (section.hasClass("cannot-expand")) return;
            section.hasClass("open") ? (section.toggleClass("open"), content.toggle(!0).slideToggle(150)) : (siblings.removeClass("open"), siblings.find(sectionContent[type]).show().slideUp(150), content.toggle(!1).slideToggle(150).css("display", "inline-block"), section.toggleClass("open")), accordionInit(type);
        }
        accordionInit("zones"), accordionInit("selectors");
        if (TCFontAdmin.HasCustomToAdd) {
            $(".accordion-section-title", $WFCSection).trigger("click"), $(".tc-zone-title", "#tc-zone-" + TCFontAdmin.HasCustomToAdd.zone).trigger("click");
            var $ControlWrapper = $("#customize-control-tc_font_customizer_plug-" + TCFontAdmin.HasCustomToAdd.sel_name);
            0 != $ControlWrapper.length && $(".wp-full-overlay-sidebar-content").animate({
                scrollTop: $ControlWrapper.offset().top
            }, 700), $(".tc-accordion-section-title", $ControlWrapper).trigger("click");
        }
        var $WFCSectionTitle = $("#accordion-section-tc_font_customizer_settings > h3", "#customize-theme-controls"), $FontTextWrap = $("<span>", {
            "class": "wfc-font-text"
        }), $CustomizerTextWrap = $("<span>", {
            "class": "wfc-customizer-text"
        });
        $WFCSectionTitle.empty().append($FontTextWrap.text("Font")).append(" ").append($CustomizerTextWrap.text("Customizer")), $WFCSection.not(".open").hover(function() {
            $(this).addClass("tc-hover");
        }, function() {
            $(this).removeClass("tc-hover");
        });
    });
});;