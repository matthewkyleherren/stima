(window.webpackJsonp = window.webpackJsonp || []).push([
  [2, 59, 65],
  {
    472: function (e, t, r) {
      var content = r(490);
      (content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[e.i, content, ""]]),
        content.locals && (e.exports = content.locals));
      (0, r(32).default)("03acdcc4", content, !0, { sourceMap: !1 });
    },
    487: function (e, t, r) {
      "use strict";
      r.r(t);
      r(66);
      var n = {
          props: {
            active: { type: Boolean, default: !1 },
            color: { type: String, default: void 0 },
            size: {
              type: String,
              default: "large",
              validator: function (e) {
                return ["small", "large"].includes(e);
              },
            },
          },
        },
        o = (r(489), r(7)),
        component = Object(o.a)(
          n,
          function () {
            var e = this,
              t = e._self._c;
            return t(
              "div",
              {
                staticClass: "plus-minus-toggle",
                class: { "is-active": e.active },
              },
              [
                t("small" === e.size ? "IconPlus" : "IconPlusLarge", {
                  tag: "component",
                  staticClass: "plus-icon",
                  style: { opacity: e.active ? 0 : 1 },
                  attrs: { color: e.color },
                }),
                e._v(" "),
                t("small" === e.size ? "IconMinus" : "IconMinusLarge", {
                  tag: "component",
                  staticClass: "minus-icon",
                  style: { opacity: e.active ? 1 : 0 },
                  attrs: { color: e.color },
                }),
              ],
              1,
            );
          },
          [],
          !1,
          null,
          "d16360e0",
          null,
        );
      t.default = component.exports;
    },
    488: function (e, t, r) {
      "use strict";
      r.r(t);
      var n = r(185),
        o = r(487),
        l = {
          components: { Collapsible: n.default, PlusMinusToggle: o.default },
          props: {
            title: { type: String },
            href: { type: String },
            label: { type: String },
            collapsible: { type: Boolean, default: !1 },
            initiallyOpen: { type: Boolean, default: !1 },
          },
          data: function () {
            return { isOpen: this.initiallyOpen, isHovered: !1 };
          },
          computed: {
            hasCollapsibleContent: function () {
              return this.collapsible && this.$slots.default;
            },
          },
          methods: {
            toggleCollapsible: function (e) {
              ((this.isOpen = e), this.$emit("toggle", e));
            },
          },
        },
        d = (r(545), r(7)),
        component = Object(d.a)(
          l,
          function () {
            var e = this,
              t = e._self._c;
            return t(
              "div",
              {
                directives: [{ name: "fade-in", rawName: "v-fade-in" }],
                staticClass: "section-divider",
              },
              [
                t(
                  "div",
                  { staticClass: "section-divider-inner" },
                  [
                    e.hasCollapsibleContent
                      ? t(
                          "Collapsible",
                          {
                            attrs: { "is-open": e.isOpen },
                            on: { toggle: e.toggleCollapsible },
                            scopedSlots: e._u(
                              [
                                {
                                  key: "trigger",
                                  fn: function (r) {
                                    var n = r.toggle;
                                    return [
                                      t(
                                        "div",
                                        {
                                          staticClass:
                                            "section-divider-trigger",
                                          on: {
                                            click: n,
                                            mouseenter: function (t) {
                                              e.isHovered = !0;
                                            },
                                            mouseleave: function (t) {
                                              e.isHovered = !1;
                                            },
                                          },
                                        },
                                        [
                                          t("BlockDivider"),
                                          e._v(" "),
                                          t(
                                            "div",
                                            {
                                              staticClass: "title-container",
                                              class: {
                                                "stack-mobile": e.label,
                                              },
                                            },
                                            [
                                              t(
                                                "h3",
                                                { staticClass: "title" },
                                                [e._v(e._s(e.title))],
                                              ),
                                              e._v(" "),
                                              t(
                                                "div",
                                                {
                                                  staticClass: "icon-container",
                                                },
                                                [
                                                  e.href
                                                    ? t("BaseIconButton", {
                                                        attrs: {
                                                          href: e.href,
                                                          label: e.label,
                                                          hover: e.isHovered,
                                                        },
                                                      })
                                                    : e._e(),
                                                  e._v(" "),
                                                  !e.href && e.label
                                                    ? t(
                                                        "span",
                                                        {
                                                          staticClass: "label",
                                                        },
                                                        [e._v(e._s(e.label))],
                                                      )
                                                    : e._e(),
                                                  e._v(" "),
                                                  t(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "toggle-indicator",
                                                      class: { open: e.isOpen },
                                                    },
                                                    [
                                                      t("BaseIconButton", {
                                                        attrs: {
                                                          hover: e.isHovered,
                                                        },
                                                        scopedSlots: e._u(
                                                          [
                                                            {
                                                              key: "icon",
                                                              fn: function () {
                                                                return [
                                                                  t(
                                                                    "PlusMinusToggle",
                                                                    {
                                                                      attrs: {
                                                                        active:
                                                                          e.isOpen,
                                                                      },
                                                                    },
                                                                  ),
                                                                ];
                                                              },
                                                              proxy: !0,
                                                            },
                                                          ],
                                                          null,
                                                          !0,
                                                        ),
                                                      }),
                                                    ],
                                                    1,
                                                  ),
                                                ],
                                                1,
                                              ),
                                            ],
                                          ),
                                        ],
                                        1,
                                      ),
                                    ];
                                  },
                                },
                              ],
                              null,
                              !1,
                              3237557996,
                            ),
                          },
                          [
                            e._v(" "),
                            t(
                              "div",
                              { staticClass: "collapsible-content" },
                              [e._t("default")],
                              2,
                            ),
                          ],
                        )
                      : [
                          t("BlockDivider"),
                          e._v(" "),
                          t(
                            "div",
                            {
                              staticClass: "title-container",
                              class: { "stack-mobile": e.label },
                              on: {
                                mouseenter: function (t) {
                                  e.isHovered = !0;
                                },
                                mouseleave: function (t) {
                                  e.isHovered = !1;
                                },
                              },
                            },
                            [
                              t("h3", { staticClass: "title" }, [
                                e._v(e._s(e.title)),
                              ]),
                              e._v(" "),
                              t(
                                "div",
                                { staticClass: "icon-container" },
                                [
                                  e.href
                                    ? t(
                                        "BaseIconButton",
                                        {
                                          attrs: {
                                            href: e.href,
                                            label: e.label,
                                            hover: e.isHovered,
                                          },
                                        },
                                        [t("IconHorizontalArrow")],
                                        1,
                                      )
                                    : e._e(),
                                  e._v(" "),
                                  !e.href && e.label
                                    ? t("span", { staticClass: "label" }, [
                                        e._v(e._s(e.label)),
                                      ])
                                    : e._e(),
                                ],
                                1,
                              ),
                            ],
                          ),
                        ],
                  ],
                  2,
                ),
              ],
            );
          },
          [],
          !1,
          null,
          "2fabf5aa",
          null,
        );
      t.default = component.exports;
      installComponents(component, {
        BlockDivider: r(273).default,
        BaseIconButton: r(272).default,
        IconHorizontalArrow: r(181).default,
      });
    },
    489: function (e, t, r) {
      "use strict";
      r(472);
    },
    490: function (e, t, r) {
      var n = r(31)(function (i) {
        return i[1];
      });
      (n.push([
        e.i,
        ".plus-minus-toggle[data-v-d16360e0]{align-items:center;display:inline-flex;justify-content:center;position:relative;transform:rotate(0deg);transform-origin:center center;transition:transform .3s ease}.plus-minus-toggle.is-active[data-v-d16360e0]{transform:rotate(90deg)}.plus-minus-toggle .minus-icon[data-v-d16360e0],.plus-minus-toggle .plus-icon[data-v-d16360e0]{transition:opacity .3s ease}.plus-minus-toggle .minus-icon[data-v-d16360e0]{left:0;position:absolute;top:0;transform:rotate(-90deg);transform-origin:center center}",
        "",
      ]),
        (n.locals = {}),
        (e.exports = n));
    },
    492: function (e, t, r) {
      var content = r(542);
      (content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[e.i, content, ""]]),
        content.locals && (e.exports = content.locals));
      (0, r(32).default)("325b2595", content, !0, { sourceMap: !1 });
    },
    494: function (e, t, r) {
      var content = r(546);
      (content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[e.i, content, ""]]),
        content.locals && (e.exports = content.locals));
      (0, r(32).default)("7eb21343", content, !0, { sourceMap: !1 });
    },
    533: function (e, t, r) {
      "use strict";
      r.r(t);
      var n = r(4);
      (r(50),
        r(66),
        r(138),
        r(51),
        r(11),
        r(27),
        r(8),
        r(41),
        r(502),
        r(29),
        r(42));
      function o(e) {
        var t = (
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          ).logErrors,
          r = void 0 === t || t;
        return new Promise(function (t, n) {
          if (e) {
            var img = new Image();
            ((img.onload = function () {
              t(img);
            }),
              (img.onerror = function (t) {
                var o = "Failed to load image: ".concat(e);
                (r && console.warn(o, t), n(new Error(o)));
              }),
              (img.src = e));
          } else n(new Error("Image source is required"));
        });
      }
      var l = {
          props: {
            title: { type: String, default: "Untitled" },
            imageUrl: { type: String },
            theme: {
              type: String,
              default: "dark",
              validator: function (e) {
                return ["light", "dark"].includes(e);
              },
            },
            imageOpacity: {
              type: Number,
              default: 0,
              validator: function (e) {
                return e >= 0 && e <= 1;
              },
            },
          },
          data: function () {
            return { internalOpacity: 0, imageLoaded: !1 };
          },
          computed: {
            computedTheme: function () {
              return this.imageUrl ? this.theme : "light";
            },
            backgroundStyle: function () {
              return this.imageUrl
                ? {
                    "--bg-image": "url(".concat(
                      this.imageUrl,
                      "?w=2800&fm=webp)",
                    ),
                    "--bg-opacity": this.imageOpacity || this.internalOpacity,
                  }
                : {};
            },
          },
          mounted: function () {
            this.imageUrl && 0 === this.imageOpacity && this.loadAndFadeImage();
          },
          watch: {
            imageUrl: function (e) {
              e &&
                0 === this.imageOpacity &&
                ((this.internalOpacity = 0),
                (this.imageLoaded = !1),
                this.loadAndFadeImage());
            },
          },
          methods: {
            loadAndFadeImage: function () {
              var e = this;
              return Object(n.a)(
                regeneratorRuntime.mark(function t() {
                  return regeneratorRuntime.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (e.imageUrl) {
                              t.next = 2;
                              break;
                            }
                            return t.abrupt("return");
                          case 2:
                            return (
                              (t.prev = 2),
                              (t.next = 5),
                              o("".concat(e.imageUrl, "?w=2800&fm=webp"))
                            );
                          case 5:
                            ((e.imageLoaded = !0),
                              e.$nextTick(function () {
                                setTimeout(function () {
                                  e.internalOpacity = 1;
                                }, 50);
                              }),
                              (t.next = 12));
                            break;
                          case 9:
                            ((t.prev = 9),
                              (t.t0 = t.catch(2)),
                              (e.imageLoaded = !1));
                          case 12:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    null,
                    [[2, 9]],
                  );
                }),
              )();
            },
          },
        },
        d = (r(628), r(7)),
        component = Object(d.a)(
          l,
          function () {
            var e = this,
              t = e._self._c;
            return t(
              "section",
              {
                staticClass: "hero",
                class: {
                  "theme-light": "light" === e.computedTheme,
                  "theme-dark": "dark" === e.computedTheme,
                },
                style: e.backgroundStyle,
              },
              [
                t("NavBreadcrumbs"),
                e._v(" "),
                t("h1", { staticClass: "hero-title" }, [
                  t("span", [e._v(e._s(e.title))]),
                ]),
              ],
              1,
            );
          },
          [],
          !1,
          null,
          "72e3d7d6",
          null,
        );
      t.default = component.exports;
      installComponents(component, { NavBreadcrumbs: r(550).default });
    },
    541: function (e, t, r) {
      "use strict";
      r(492);
    },
    542: function (e, t, r) {
      var n = r(31)(function (i) {
        return i[1];
      });
      (n.push([
        e.i,
        ".breadcrumbs[data-v-12506a78]{display:none}@media(min-width:768px){.breadcrumbs[data-v-12506a78]{display:grid;grid-template-columns:repeat(var(--columns),1fr);grid-column-gap:var(--gutter-width);-moz-column-gap:var(--gutter-width);column-gap:var(--gutter-width);grid-template-rows:auto;margin-left:auto;margin-right:auto;max-width:var(--grid-max-width);padding-left:var(--grid-padding);padding-right:var(--grid-padding)}}.breadcrumb[data-v-12506a78]{display:flex;grid-column:1/-1;grid-column:var(--grid-column,1/-1)}.breadcrumb>:first-child a[data-v-12506a78]{padding-left:0}@media(min-width:768px){.breadcrumb[data-v-12506a78]{grid-column:3/span 5;grid-column:var(--grid-column,3/span 5)}}.breadcrumb-item[data-v-12506a78]{display:flex}.breadcrumb-link[data-v-12506a78]{font-size:var(--font-size-label-4);font-weight:500;letter-spacing:var(--letter-spacing-label-4);line-height:var(--line-height-label-4);padding:0 22px;text-transform:capitalize}@media(min-width:768px){.breadcrumb-link[data-v-12506a78]{font-size:var(--font-size-label-4-md);letter-spacing:var(--letter-spacing-label-4-md);line-height:var(--line-height-label-4-md)}}@media(min-width:1440px){.breadcrumb-link[data-v-12506a78]{font-size:var(--font-size-label-4-lg);letter-spacing:var(--letter-spacing-label-4-lg);line-height:var(--line-height-label-4-lg)}}.breadcrumb-link.active[data-v-12506a78]{color:var(--highlight-color,var(--color-black));pointer-events:none}.breadcrumb-separator[data-v-12506a78]{display:flex}.breadcrumb-separator svg[data-v-12506a78]{color:inherit;display:inline}.breadcrumb-item a[data-v-12506a78]:hover{color:var(--highlight-color,var(--color-black))}",
        "",
      ]),
        (n.locals = {}),
        (e.exports = n));
    },
    545: function (e, t, r) {
      "use strict";
      r(494);
    },
    546: function (e, t, r) {
      var n = r(31)(function (i) {
        return i[1];
      });
      (n.push([
        e.i,
        ".section-divider[data-v-2fabf5aa]{display:grid;grid-template-columns:repeat(var(--columns),1fr);grid-column-gap:var(--gutter-width);-moz-column-gap:var(--gutter-width);column-gap:var(--gutter-width);grid-template-rows:auto;margin-left:auto;margin-right:auto;margin-top:var(--space,var(--space-128));max-width:var(--grid-max-width);padding-left:var(--grid-padding);padding-right:var(--grid-padding);width:100%}.section-divider-inner[data-v-2fabf5aa]{grid-column:1/-1;grid-column:var(--grid-column,1/-1)}@media(min-width:768px){.section-divider-inner[data-v-2fabf5aa]{grid-column:3/span 5;grid-column:var(--grid-column,3/span 5)}}.title-container[data-v-2fabf5aa]{display:flex;flex-direction:row;padding-top:24px}.stack-mobile[data-v-2fabf5aa]{flex-direction:column}@media(min-width:768px){.stack-mobile[data-v-2fabf5aa]{flex-direction:row}}.stack-mobile[data-v-2fabf5aa] .icon-button{margin-top:10px}@media(min-width:768px){.stack-mobile[data-v-2fabf5aa] .icon-button{margin-top:0}}.title[data-v-2fabf5aa]{flex:1;font-size:var(--font-size-heading-6);font-weight:500;letter-spacing:var(--letter-spacing-heading-6);line-height:var(--line-height-heading-6)}@media(min-width:768px){.title[data-v-2fabf5aa]{font-size:var(--font-size-heading-6-md);letter-spacing:var(--letter-spacing-heading-6-md);line-height:var(--line-height-heading-6-md)}}@media(min-width:1440px){.title[data-v-2fabf5aa]{font-size:var(--font-size-heading-6-lg);letter-spacing:var(--letter-spacing-heading-6-lg);line-height:var(--line-height-heading-6-lg)}}.label[data-v-2fabf5aa]{color:var(--color-grey-200);font-size:var(--font-size-label-4);font-weight:500;letter-spacing:var(--letter-spacing-label-4);line-height:var(--line-height-label-4);text-transform:uppercase}@media(min-width:768px){.label[data-v-2fabf5aa]{font-size:var(--font-size-label-4-md);letter-spacing:var(--letter-spacing-label-4-md);line-height:var(--line-height-label-4-md)}}@media(min-width:1440px){.label[data-v-2fabf5aa]{font-size:var(--font-size-label-4-lg);letter-spacing:var(--letter-spacing-label-4-lg);line-height:var(--line-height-label-4-lg)}}.section-divider-trigger[data-v-2fabf5aa]{cursor:pointer}.toggle-indicator[data-v-2fabf5aa]{align-items:center;color:var(--color-grey-200);display:flex;height:20px;margin-left:12px}.collapsible-content[data-v-2fabf5aa]{padding-top:24px}",
        "",
      ]),
        (n.locals = {}),
        (e.exports = n));
    },
    550: function (e, t, r) {
      "use strict";
      r.r(t);
      (r(35),
        r(469),
        r(26),
        r(66),
        r(38),
        r(36),
        r(8),
        r(15),
        r(80),
        r(33),
        r(29));
      var n = {
          computed: {
            breadcrumbs: function () {
              var e = this,
                t = [],
                r = this.$route.path.split("/").filter(Boolean);
              return (
                r.forEach(function (n, o) {
                  var link = "/".concat(r.slice(0, o + 1).join("/")),
                    text = e.formatBreadcrumbText(n);
                  t.push({ text: text, link: link });
                }),
                1 === t.length &&
                  (t = [t[0], { text: "Overview", link: t[0].link }]),
                t
              );
            },
          },
          methods: {
            capitalize: function (e) {
              return e.charAt(0).toUpperCase() + e.slice(1);
            },
            formatBreadcrumbText: function (e) {
              var t = {
                news: "News & Insights",
                investors: "Investors",
                about: "About Us",
                contact: "Contact Us",
              };
              if (t[e.toLowerCase()]) return t[e.toLowerCase()];
              var text = e.replace(/-/g, " "),
                r = {
                  "case study": "Case studies",
                  "press release": "Press releases",
                };
              return Object.keys(r).includes(text.toLowerCase())
                ? r[text.toLowerCase()]
                : this.capitalize(text);
            },
          },
        },
        o = (r(541), r(7)),
        component = Object(o.a)(
          n,
          function () {
            var e = this,
              t = e._self._c;
            return t(
              "nav",
              {
                staticClass: "breadcrumbs",
                attrs: { "aria-label": "breadcrumb" },
              },
              [
                t(
                  "ol",
                  { staticClass: "breadcrumb" },
                  e._l(e.breadcrumbs.slice(0, -1), function (r, n) {
                    return t(
                      "li",
                      { key: n, staticClass: "breadcrumb-item" },
                      [
                        t(
                          "nuxt-link",
                          {
                            staticClass: "breadcrumb-link",
                            attrs: { to: r.link },
                          },
                          [e._v(e._s(r.text))],
                        ),
                        e._v(" "),
                        n < e.breadcrumbs.slice(0, -1).length - 1
                          ? t("span", { staticClass: "breadcrumb-separator" }, [
                              t(
                                "svg",
                                {
                                  attrs: {
                                    width: "6",
                                    height: "8",
                                    viewBox: "0 0 6 8",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                  },
                                },
                                [
                                  t("path", {
                                    attrs: {
                                      d: "M5.27734 4L0.670097 0.607247V7.39275L5.27734 4Z",
                                      fill: "currentColor",
                                    },
                                  }),
                                ],
                              ),
                            ])
                          : e._e(),
                      ],
                      1,
                    );
                  }),
                  0,
                ),
              ],
            );
          },
          [],
          !1,
          null,
          "12506a78",
          null,
        );
      t.default = component.exports;
    },
    576: function (e, t, r) {
      "use strict";
      (r(24), r(26), r(56), r(57), r(36), r(8), r(29));
      var n = r(4),
        o = r(34),
        l = (r(50), r(111));
      function d(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          (t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n));
        }
        return r;
      }
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? d(Object(r), !0).forEach(function (t) {
                Object(o.a)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : d(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
        }
        return e;
      }
      var v = {
        overview: {
          imageKey: "overviewHeaderImageUrl",
          themeKey: "overviewTheme",
          fields: {},
        },
        "stock-info": {
          imageKey: "stockInformationHeaderImageUrl",
          themeKey: "stockInformationTheme",
          fields: {},
        },
        financials: {
          imageKey: "financialsHeaderImageUrl",
          themeKey: "financialsTheme",
          fields: {},
        },
        "events-presentations": {
          imageKey: "eventsAndPresentationsHeaderImageUrl",
          themeKey: "eventsAndPresentationsTheme",
          fields: {},
        },
        "sec-filings": {
          imageKey: "secFilingsHeaderImageUrl",
          themeKey: "secFilingsTheme",
          fields: {},
        },
        governance: {
          imageKey: "governanceHeaderImageUrl",
          themeKey: "governanceTheme",
          fields: {},
        },
        faq: {
          imageKey: "faqHeaderImageUrl",
          themeKey: "faqTheme",
          fields: {},
        },
        contact: {
          imageKey: "contactUsHeaderImageUrl",
          themeKey: "contactUsTheme",
          fields: {
            generalInquiries: "contactGeneralInquiries",
            investorRelations: "contactInvestorRelations",
            mediaRelations: "contactMediaRelations",
          },
        },
      };
      t.a = {
        computed: c(
          c({}, Object(l.b)("content", ["investorsPage"])),
          {},
          {
            currentSection: function () {
              var e,
                path =
                  (null === (e = this.$route) || void 0 === e
                    ? void 0
                    : e.path) || "";
              return "/#" === path
                ? "overview"
                : path.split("/")[2] || "overview";
            },
            heroImageUrl: function () {
              var e, t;
              return null === (e = this.investorsPage) || void 0 === e
                ? void 0
                : e[
                    null === (t = v[this.currentSection]) || void 0 === t
                      ? void 0
                      : t.imageKey
                  ];
            },
            heroTheme: function () {
              var e, t;
              return (
                (null === (e = this.investorsPage) || void 0 === e
                  ? void 0
                  : e[
                      null === (t = v[this.currentSection]) || void 0 === t
                        ? void 0
                        : t.themeKey
                    ]) || "dark"
              );
            },
          },
        ),
        methods: {
          getCustomField: function (e) {
            var t,
              r,
              section = v[this.currentSection];
            return null != section &&
              null !== (t = section.fields) &&
              void 0 !== t &&
              t[e]
              ? null === (r = this.investorsPage) || void 0 === r
                ? void 0
                : r[section.fields[e]]
              : null;
          },
        },
        fetch: function () {
          var e = this;
          return Object(n.a)(
            regeneratorRuntime.mark(function t() {
              return regeneratorRuntime.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.next = 2),
                        e.$store.dispatch("content/fetchInvestorsPage")
                      );
                    case 2:
                    case "end":
                      return t.stop();
                  }
              }, t);
            }),
          )();
        },
      };
    },
    577: function (e, t, r) {
      var content = r(629);
      (content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[e.i, content, ""]]),
        content.locals && (e.exports = content.locals));
      (0, r(32).default)("21d0b81d", content, !0, { sourceMap: !1 });
    },
    628: function (e, t, r) {
      "use strict";
      r(577);
    },
    629: function (e, t, r) {
      var n = r(31)(function (i) {
        return i[1];
      });
      (n.push([
        e.i,
        '.hero[data-v-72e3d7d6]{background-color:var(--color-sage-green);background-position:50%;background-repeat:no-repeat;background-size:cover;color:var(--_theme-color-foreground);display:flex;flex-direction:column;height:514px;justify-content:flex-end;padding-bottom:24px;position:relative;width:100%;--highlight-color:var(--_theme-color-foreground)}.hero.theme-dark[data-v-72e3d7d6]{--_theme-color-foreground:var(--color-off-white)}.hero.theme-light[data-v-72e3d7d6]{--_theme-color-foreground:var(--color-off-black)}.hero[data-v-72e3d7d6]:after{background-image:var(--bg-image);background-position:50%;background-repeat:no-repeat;background-size:cover;opacity:1;opacity:var(--bg-opacity,1);transition:opacity 1s ease-in-out;z-index:0}.hero[data-v-72e3d7d6]:after,.hero[data-v-72e3d7d6]:before{bottom:0;content:"";left:0;position:absolute;right:0;top:0}.hero[data-v-72e3d7d6]:before{background:linear-gradient(180deg,transparent 0,rgba(0,0,0,.1) 30%,rgba(0,0,0,.3) 70%,rgba(0,0,0,.5));pointer-events:none;z-index:1}.hero>*[data-v-72e3d7d6]{position:relative;z-index:2}@media(min-width:768px){.hero[data-v-72e3d7d6]{padding-bottom:24px}}.breadcrumbs[data-v-72e3d7d6]{margin-bottom:48px;width:100%}.hero-title[data-v-72e3d7d6]{display:grid;grid-template-columns:repeat(var(--columns),1fr);transition:color .3s;width:100%;grid-column-gap:var(--gutter-width);-moz-column-gap:var(--gutter-width);column-gap:var(--gutter-width);font-size:var(--font-size-heading-2);font-weight:500;grid-template-rows:auto;letter-spacing:var(--letter-spacing-heading-2);line-height:var(--line-height-heading-2);margin-left:auto;margin-right:auto;max-width:var(--grid-max-width);padding-left:var(--grid-padding);padding-right:var(--grid-padding)}.hero-title span[data-v-72e3d7d6]{grid-column:1/-1}@media(min-width:768px){.hero-title span[data-v-72e3d7d6]{grid-column:3/span 5}.hero-title[data-v-72e3d7d6]{font-size:var(--font-size-heading-2-md);letter-spacing:var(--letter-spacing-heading-2-md);line-height:var(--line-height-heading-2-md)}}@media(min-width:1440px){.hero-title[data-v-72e3d7d6]{font-size:var(--font-size-heading-2-lg);letter-spacing:var(--letter-spacing-heading-2-lg);line-height:var(--line-height-heading-2-lg)}}',
        "",
      ]),
        (n.locals = {}),
        (e.exports = n));
    },
  },
]);
