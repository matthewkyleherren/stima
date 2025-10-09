(window.webpackJsonp = window.webpackJsonp || []).push([
  [1, 24, 52, 56, 60, 61, 67],
  {
    460: function (t, e, n) {
      var content = n(471);
      (content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals));
      (0, n(32).default)("24e2be20", content, !0, { sourceMap: !1 });
    },
    462: function (t, e, n) {
      var content = n(475);
      (content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals));
      (0, n(32).default)("d4cd44c0", content, !0, { sourceMap: !1 });
    },
    464: function (t, e, n) {
      var content = n(484);
      (content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals));
      (0, n(32).default)("5fb8e152", content, !0, { sourceMap: !1 });
    },
    467: function (t, e, n) {
      "use strict";
      n.r(e);
      (n(15), n(33));
      var r = {
          props: { color: { type: String, default: "#080808" } },
          computed: {
            lineBackgroundStyle: function () {
              var t = this.color.replace("#", "%23");
              return {
                backgroundImage:
                  'url(\'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="1" height="1"%3E%3Cline x1="0" y1="0" x2="1" y2="0" stroke="'.concat(
                    t,
                    '"  stroke-width=".5" /%3E%3C/svg%3E\')',
                  ),
              };
            },
          },
        },
        l = (n(474), n(7)),
        component = Object(l.a)(
          r,
          function () {
            var t = this,
              e = t._self._c;
            return e("div", { staticClass: "angled-divider" }, [
              e("div", {
                staticClass: "line-background bottom",
                style: t.lineBackgroundStyle,
              }),
              t._v(" "),
              e("div", { staticClass: "line-angle" }, [
                e(
                  "svg",
                  {
                    attrs: {
                      width: "20",
                      height: "20",
                      xmlns: "http://www.w3.org/2000/svg",
                    },
                  },
                  [
                    e("line", {
                      attrs: {
                        x1: "0",
                        y1: "20",
                        x2: "30",
                        y2: "0",
                        stroke: t.color,
                        "stroke-width": ".25",
                        "vector-effect": "non-scaling-stroke",
                      },
                    }),
                  ],
                ),
              ]),
              t._v(" "),
              e("div", {
                staticClass: "line-background top",
                style: t.lineBackgroundStyle,
              }),
            ]);
          },
          [],
          !1,
          null,
          "01b92d54",
          null,
        );
      e.default = component.exports;
    },
    468: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = {
          props: {
            src: { type: String, required: !0 },
            alt: { type: String, default: "image" },
          },
        },
        l = (n(470), n(7)),
        component = Object(l.a)(
          r,
          function () {
            var t = this;
            return (0, t._self._c)("div", {
              staticClass: "image-background",
              style: { backgroundImage: "url('".concat(t.src, "')") },
              attrs: { role: "img", "aria-label": t.alt },
            });
          },
          [],
          !1,
          null,
          "1ae5b99e",
          null,
        );
      e.default = component.exports;
    },
    470: function (t, e, n) {
      "use strict";
      n(460);
    },
    471: function (t, e, n) {
      var r = n(31)(function (i) {
        return i[1];
      });
      (r.push([
        t.i,
        ".image-background[data-v-1ae5b99e]{aspect-ratio:auto;aspect-ratio:var(--aspect-ratio,auto);background-position:50%;background-size:cover;height:inherit;height:var(--height,inherit);width:100%;width:var(--width,100%)}@media(min-width:768px){.image-background[data-v-1ae5b99e]{aspect-ratio:var(--aspect-ratio-md,var(--aspect-ratio))}}",
        "",
      ]),
        (r.locals = {}),
        (t.exports = r));
    },
    474: function (t, e, n) {
      "use strict";
      n(462);
    },
    475: function (t, e, n) {
      var r = n(31)(function (i) {
        return i[1];
      });
      (r.push([
        t.i,
        ".angled-divider[data-v-01b92d54]{align-items:flex-end;display:flex;grid-column:1/-1;height:14px;width:100%}.angled-divider svg[data-v-01b92d54]{display:block}.line-background[data-v-01b92d54]{background-repeat:repeat-x;height:1px}.line-background.bottom[data-v-01b92d54]{width:75%}.line-background.top[data-v-01b92d54]{align-self:flex-start;flex-grow:1}.line-angle[data-v-01b92d54]{transform:translate(-.1px,-.75px)}",
        "",
      ]),
        (r.locals = {}),
        (t.exports = r));
    },
    482: function (t, e, n) {
      "use strict";
      n.r(e);
      (n(14), n(138));
      var r = {
          props: {
            href: { type: String },
            imageSrc: { type: String, default: "" },
            title: { type: String, default: "" },
            category: { type: String },
            date: { type: String },
            subtitle: { type: String, default: "" },
            ctaLabel: { type: String },
            imageWidth: { type: Number, default: 1600 },
          },
          data: function () {
            return { isHovered: !1 };
          },
          computed: {
            hasCustomSubtitle: function () {
              return this.subtitle && this.subtitle.length > 0;
            },
            hasCustomCtaLabel: function () {
              return this.ctaLabel && "Read More" !== this.ctaLabel;
            },
          },
        },
        l = (n(483), n(7)),
        component = Object(l.a)(
          r,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              {
                directives: [{ name: "fade-in", rawName: "v-fade-in" }],
                staticClass: "thumbnail",
              },
              [
                e(
                  "BaseLink",
                  {
                    staticClass: "read-more-item col",
                    attrs: { href: t.href },
                    on: {
                      mouseenter: function (e) {
                        t.isHovered = !0;
                      },
                      mouseleave: function (e) {
                        t.isHovered = !1;
                      },
                    },
                    nativeOn: {
                      click: function (e) {
                        return t.$emit("click", e);
                      },
                    },
                  },
                  [
                    e(
                      "div",
                      { staticClass: "image-container" },
                      [
                        e("BaseBackgroundImage", {
                          attrs: {
                            src: ""
                              .concat(t.imageSrc, "?w=")
                              .concat(t.imageWidth, "&fm=webp"),
                          },
                        }),
                      ],
                      1,
                    ),
                    t._v(" "),
                    e(
                      "div",
                      {
                        staticClass: "cta",
                        class: { "cta-stacked": t.hasCustomCtaLabel },
                      },
                      [
                        t.date
                          ? e("p", { staticClass: "date" }, [
                              t._v(t._s(t.date)),
                            ])
                          : t._e(),
                        t._v(" "),
                        t.category
                          ? e("p", { staticClass: "category" }, [
                              t._v(t._s(t.category)),
                            ])
                          : t._e(),
                        t._v(" "),
                        e("div", { staticClass: "title-container" }, [
                          e("p", { staticClass: "title" }, [
                            t._v(t._s(t.title)),
                          ]),
                          t._v(" "),
                          t.hasCustomSubtitle
                            ? e("p", { staticClass: "subtitle" }, [
                                t._v(t._s(t.subtitle)),
                              ])
                            : t._e(),
                        ]),
                        t._v(" "),
                        e(
                          "div",
                          {
                            staticClass: "icon-container",
                            style: {
                              visibility: t.href ? "visible" : "hidden",
                            },
                          },
                          [
                            e("BaseIconButton", {
                              attrs: {
                                disableHref: !0,
                                href: t.href,
                                label: t.ctaLabel,
                                hover: t.isHovered,
                              },
                            }),
                          ],
                          1,
                        ),
                      ],
                    ),
                  ],
                ),
              ],
              1,
            );
          },
          [],
          !1,
          null,
          "29ee861c",
          null,
        );
      e.default = component.exports;
      installComponents(component, {
        BaseBackgroundImage: n(468).default,
        BaseIconButton: n(272).default,
        BaseLink: n(275).default,
      });
    },
    483: function (t, e, n) {
      "use strict";
      n(464);
    },
    484: function (t, e, n) {
      var r = n(31)(function (i) {
        return i[1];
      });
      (r.push([
        t.i,
        ".thumbnail[data-v-29ee861c]{container-type:inline-size;height:100%}.read-more-item[data-v-29ee861c]{display:flex;flex-direction:column;height:100%}.image-container[data-v-29ee861c]{--notch-height:10px;position:relative;--_notch-height:var(--notch-height,10px);--_notch-position-x:var(--notch-position-x,50%);clip-path:polygon(0 0,100% 0,100% calc(100% - 10px),calc(50% + 10px) calc(100% - 10px),50% calc(100% - 10px),calc(50% - 10px) 100%,0 100%);clip-path:polygon(0 0,100% 0,100% calc(100% - var(--_notch-height)),calc(var(--_notch-position-x) + var(--_notch-height)) calc(100% - var(--_notch-height)),calc(var(--_notch-position-x)) calc(100% - var(--_notch-height)),calc(var(--_notch-position-x) - var(--_notch-height)) 100%,0 100%)}.icon-container[data-v-29ee861c]{margin-top:-7px}.cta[data-v-29ee861c]{align-items:flex-start;display:flex;gap:9%;margin-top:20px}.cta.cta-stacked[data-v-29ee861c]{flex-direction:column;height:auto}.cta.cta-stacked .icon-container[data-v-29ee861c]{align-self:flex-start;margin-top:8px}.cta.cta-stacked .title[data-v-29ee861c]{padding-right:0}.cta .title-container[data-v-29ee861c]{flex:1}.cta .title[data-v-29ee861c]{display:inline-block;max-width:350px}@media(min-width:768px){.cta .title[data-v-29ee861c]{padding-right:24px}}.cta .title[data-v-29ee861c]{font-size:var(--font-size-heading-9);font-weight:500;letter-spacing:var(--letter-spacing-heading-9);line-height:var(--line-height-heading-9)}@media(min-width:768px){.cta .title[data-v-29ee861c]{font-size:var(--font-size-heading-9-md);letter-spacing:var(--letter-spacing-heading-9-md);line-height:var(--line-height-heading-9-md)}}@media(min-width:1440px){.cta .title[data-v-29ee861c]{font-size:var(--font-size-heading-9-lg);letter-spacing:var(--letter-spacing-heading-9-lg);line-height:var(--line-height-heading-9-lg)}}.cta .category[data-v-29ee861c],.cta .date[data-v-29ee861c]{color:var(--color-grey-175);font-size:var(--font-size-label-4);font-weight:400;letter-spacing:var(--letter-spacing-label-4);line-height:var(--line-height-label-4);text-transform:capitalize}@media(min-width:768px){.cta .category[data-v-29ee861c],.cta .date[data-v-29ee861c]{font-size:var(--font-size-label-4-md);letter-spacing:var(--letter-spacing-label-4-md);line-height:var(--line-height-label-4-md)}}@media(min-width:1440px){.cta .category[data-v-29ee861c],.cta .date[data-v-29ee861c]{font-size:var(--font-size-label-4-lg);letter-spacing:var(--letter-spacing-label-4-lg);line-height:var(--line-height-label-4-lg)}}@container (width < 500px){.cta .category[data-v-29ee861c],.cta .date[data-v-29ee861c]{display:none}}.cta .subtitle[data-v-29ee861c]{color:var(--color-grey-500);font-size:var(--font-size-label-4);font-weight:400;letter-spacing:var(--letter-spacing-label-4);line-height:var(--line-height-label-4);margin-top:4px}@media(min-width:768px){.cta .subtitle[data-v-29ee861c]{font-size:var(--font-size-label-4-md);letter-spacing:var(--letter-spacing-label-4-md);line-height:var(--line-height-label-4-md)}}@media(min-width:1440px){.cta .subtitle[data-v-29ee861c]{font-size:var(--font-size-label-4-lg);letter-spacing:var(--letter-spacing-label-4-lg);line-height:var(--line-height-label-4-lg)}}",
        "",
      ]),
        (r.locals = {}),
        (t.exports = r));
    },
    538: function (t, e, n) {
      var content = n(564);
      (content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals));
      (0, n(32).default)("065f3786", content, !0, { sourceMap: !1 });
    },
    551: function (t, e, n) {
      var content = n(590);
      (content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals));
      (0, n(32).default)("6b6ecf7d", content, !0, { sourceMap: !1 });
    },
    563: function (t, e, n) {
      "use strict";
      n(538);
    },
    564: function (t, e, n) {
      var r = n(31)(function (i) {
        return i[1];
      });
      (r.push([
        t.i,
        ".subheading[data-v-49d69e93]{display:grid;grid-template-columns:repeat(var(--columns),1fr);grid-column-gap:var(--gutter-width);-moz-column-gap:var(--gutter-width);column-gap:var(--gutter-width);grid-template-rows:auto;margin-left:auto;margin-right:auto;margin-top:var(--space,var(--space-128));max-width:var(--grid-max-width);padding:0 var(--grid-padding);width:100%}.align-left .title[data-v-49d69e93],.subheading[data-v-49d69e93],.subheading-inner[data-v-49d69e93]{grid-column:1/-1}@media(min-width:768px){.align-left .title[data-v-49d69e93]{grid-column:1/span 4}}.title[data-v-49d69e93]{font-size:var(--font-size-heading-3);font-weight:500;grid-column:1/-1;letter-spacing:var(--letter-spacing-heading-3);line-height:var(--line-height-heading-3);margin-top:25px}@media(min-width:768px){.title[data-v-49d69e93]{font-size:var(--font-size-heading-3-md);letter-spacing:var(--letter-spacing-heading-3-md);line-height:var(--line-height-heading-3-md)}}@media(min-width:1440px){.title[data-v-49d69e93]{font-size:var(--font-size-heading-3-lg);letter-spacing:var(--letter-spacing-heading-3-lg);line-height:var(--line-height-heading-3-lg)}}@media(min-width:768px){.title[data-v-49d69e93]{grid-column:3/span 4;margin-top:60px}.align-left .title[data-v-49d69e93]{grid-column:1/span 4;text-align:left}.align-right .title[data-v-49d69e93]{grid-column:5/-1;text-align:right}.align-center .title[data-v-49d69e93]{grid-column:3/span 4;text-align:center}}",
        "",
      ]),
        (r.locals = {}),
        (t.exports = r));
    },
    572: function (t, e, n) {
      "use strict";
      n.r(e);
      n(66);
      var r = {
          props: {
            title: { type: String, default: "Untitled", required: !0 },
            align: {
              type: String,
              default: "center",
              validator: function (t) {
                return ["left", "center"].includes(t);
              },
            },
          },
        },
        l = (n(563), n(7)),
        component = Object(l.a)(
          r,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "section",
              {
                directives: [{ name: "fade-in", rawName: "v-fade-in" }],
                staticClass: "subheading",
                class: "align-".concat(t.align),
              },
              [
                e(
                  "div",
                  { staticClass: "subheading-inner" },
                  [
                    e("BlockAngledDivider"),
                    t._v(" "),
                    e("h2", { staticClass: "title" }, [t._v(t._s(t.title))]),
                  ],
                  1,
                ),
              ],
            );
          },
          [],
          !1,
          null,
          "49d69e93",
          null,
        );
      e.default = component.exports;
      installComponents(component, { BlockAngledDivider: n(467).default });
    },
    589: function (t, e, n) {
      "use strict";
      n(551);
    },
    590: function (t, e, n) {
      var r = n(31)(function (i) {
        return i[1];
      });
      (r.push([
        t.i,
        ".cta-details[data-v-b9f9e00a]{display:flex;flex-wrap:wrap;gap:var(--grid-padding);margin-bottom:48px;max-width:none}@media(min-width:768px){.cta-details[data-v-b9f9e00a]{display:block;margin-bottom:0;max-width:280px}}.description[data-v-b9f9e00a]{font-size:var(--font-size-body-9);font-weight:500;letter-spacing:var(--letter-spacing-body-9);line-height:var(--line-height-body-9);max-width:280px;width:100%}@media(min-width:768px){.description[data-v-b9f9e00a]{font-size:var(--font-size-body-9-md);letter-spacing:var(--letter-spacing-body-9-md);line-height:var(--line-height-body-9-md)}}@media(min-width:1440px){.description[data-v-b9f9e00a]{font-size:var(--font-size-body-9-lg);letter-spacing:var(--letter-spacing-body-9-lg);line-height:var(--line-height-body-9-lg)}}.button-container[data-v-b9f9e00a]{width:100%}@media(min-width:768px){.button-container[data-v-b9f9e00a]{width:auto}}.description+.button-container[data-v-b9f9e00a]{margin-top:60px}.divider-container[data-v-b9f9e00a]{margin-top:20px;width:100%}.cta-button[data-v-b9f9e00a]{align-items:center;display:flex;flex-wrap:wrap;font-size:var(--font-size-label-1);font-weight:500;gap:8px;letter-spacing:var(--letter-spacing-label-1);line-height:var(--line-height-label-1);width:100%}@media(min-width:768px){.cta-button[data-v-b9f9e00a]{font-size:var(--font-size-label-1-md);letter-spacing:var(--letter-spacing-label-1-md);line-height:var(--line-height-label-1-md)}}@media(min-width:1440px){.cta-button[data-v-b9f9e00a]{font-size:var(--font-size-label-1-lg);letter-spacing:var(--letter-spacing-label-1-lg);line-height:var(--line-height-label-1-lg)}}@media(min-width:768px){.cta-button[data-v-b9f9e00a]{margin-top:64px}}.cta-button .label[data-v-b9f9e00a]{flex:1;text-align:left}.cta-button .button-heading[data-v-b9f9e00a]{color:#888;display:block;font-size:var(--font-size-label-4);font-weight:400;letter-spacing:var(--letter-spacing-label-4);line-height:var(--line-height-label-4);margin:0 0 10px;position:relative;text-transform:none;width:100%}@media(min-width:768px){.cta-button .button-heading[data-v-b9f9e00a]{font-size:var(--font-size-label-4-md);letter-spacing:var(--letter-spacing-label-4-md);line-height:var(--line-height-label-4-md)}}@media(min-width:1440px){.cta-button .button-heading[data-v-b9f9e00a]{font-size:var(--font-size-label-4-lg);letter-spacing:var(--letter-spacing-label-4-lg);line-height:var(--line-height-label-4-lg)}}",
        "",
      ]),
        (r.locals = {}),
        (t.exports = r));
    },
    605: function (t, e, n) {
      "use strict";
      n.r(e);
      (n(24), n(43), n(97));
      var r = {
          data: function () {
            return { isButtonHovered: !1 };
          },
          props: {
            description: { type: String, default: "" },
            buttonHeading: { type: String },
            buttonText: { type: String, default: "" },
            buttonLink: { type: String, default: "/" },
          },
          computed: {
            computedButtonLink: function () {
              return this.buttonLink || "/";
            },
            isExternalLink: function () {
              return (
                this.computedButtonLink &&
                (this.computedButtonLink.startsWith("http://") ||
                  this.computedButtonLink.startsWith("https://") ||
                  this.computedButtonLink.startsWith("//") ||
                  this.computedButtonLink.startsWith("www."))
              );
            },
          },
        },
        l = (n(589), n(7)),
        component = Object(l.a)(
          r,
          function () {
            var t = this,
              e = t._self._c;
            return e("div", { staticClass: "cta-details" }, [
              t.description
                ? e("p", {
                    staticClass: "description",
                    domProps: { innerHTML: t._s(t.description) },
                  })
                : t._e(),
              t._v(" "),
              e(
                "div",
                { staticClass: "button-container" },
                [
                  t.isExternalLink
                    ? e(
                        "a",
                        {
                          staticClass: "cta-button",
                          attrs: {
                            href: t.computedButtonLink,
                            target: "_blank",
                          },
                          on: {
                            mouseenter: function (e) {
                              t.isButtonHovered = !0;
                            },
                            mouseleave: function (e) {
                              t.isButtonHovered = !1;
                            },
                          },
                        },
                        [
                          t.buttonHeading
                            ? e("span", { staticClass: "button-heading" }, [
                                t._v(t._s(t.buttonHeading)),
                              ])
                            : t._e(),
                          t._v(" "),
                          e("span", { staticClass: "label" }, [
                            t._v(t._s(t.buttonText)),
                          ]),
                          t._v(" "),
                          e("IconHorizontalArrow"),
                        ],
                        1,
                      )
                    : e(
                        "NuxtLink",
                        {
                          staticClass: "cta-button",
                          attrs: { to: t.computedButtonLink },
                          nativeOn: {
                            mouseenter: function (e) {
                              t.isButtonHovered = !0;
                            },
                            mouseleave: function (e) {
                              t.isButtonHovered = !1;
                            },
                          },
                        },
                        [
                          t.buttonHeading
                            ? e("span", { staticClass: "button-heading" }, [
                                t._v(t._s(t.buttonHeading)),
                              ])
                            : t._e(),
                          t._v(" "),
                          e("span", { staticClass: "label" }, [
                            t._v(t._s(t.buttonText)),
                          ]),
                          t._v(" "),
                          e("IconHorizontalArrow"),
                        ],
                        1,
                      ),
                  t._v(" "),
                  e(
                    "div",
                    { staticClass: "divider-container" },
                    [
                      e("BlockDivider", {
                        attrs: { hover: t.isButtonHovered, barSide: "right" },
                      }),
                    ],
                    1,
                  ),
                ],
                1,
              ),
            ]);
          },
          [],
          !1,
          null,
          "b9f9e00a",
          null,
        );
      e.default = component.exports;
      installComponents(component, {
        IconHorizontalArrow: n(181).default,
        BlockDivider: n(273).default,
      });
    },
    699: function (t, e, n) {
      "use strict";
      n.r(e);
      (n(24), n(43));
      var r = {
          props: {
            heading: { type: String },
            description: { type: String },
            buttonHeading: { type: String },
            buttonText: { type: String, default: "All Case Studies" },
            buttonLink: { type: String, default: "/#" },
            articles: {
              type: Array,
              default: function () {
                return [];
              },
            },
          },
        },
        l = (n(861), n(7)),
        component = Object(l.a)(
          r,
          function () {
            var t = this,
              e = t._self._c;
            return t.articles.length > 0
              ? e(
                  "section",
                  {
                    directives: [{ name: "fade-in", rawName: "v-fade-in" }],
                    staticClass: "read-more",
                  },
                  [
                    t.heading
                      ? e("BlockSubheading", {
                          staticClass: "read-more-subheading",
                          attrs: { title: t.heading, align: "left" },
                        })
                      : t._e(),
                    t._v(" "),
                    e(
                      "div",
                      { staticClass: "read-more-contents" },
                      [
                        e("BlockCTA", {
                          staticClass: "col",
                          attrs: {
                            description: t.description,
                            buttonHeading: t.buttonHeading,
                            buttonText: t.buttonText,
                            buttonLink: t.buttonLink,
                          },
                        }),
                        t._v(" "),
                        t._l(t.articles, function (t, n) {
                          return e(
                            "div",
                            {
                              key: n,
                              staticClass: "read-more-item",
                              class: { "third-item": 2 === n },
                            },
                            [
                              e("ArticleThumbnail", {
                                attrs: {
                                  href: t.href,
                                  imageSrc: t.imageSrc,
                                  title: t.title,
                                  subtitle: t.subtitle,
                                },
                              }),
                            ],
                            1,
                          );
                        }),
                      ],
                      2,
                    ),
                  ],
                  1,
                )
              : t._e();
          },
          [],
          !1,
          null,
          "a499b5aa",
          null,
        );
      e.default = component.exports;
      installComponents(component, {
        BlockSubheading: n(572).default,
        BlockCTA: n(605).default,
        ArticleThumbnail: n(482).default,
      });
    },
    799: function (t, e, n) {
      var content = n(862);
      (content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals));
      (0, n(32).default)("0d44b734", content, !0, { sourceMap: !1 });
    },
    861: function (t, e, n) {
      "use strict";
      n(799);
    },
    862: function (t, e, n) {
      var r = n(31)(function (i) {
        return i[1];
      });
      (r.push([
        t.i,
        ".read-more[data-v-a499b5aa]{display:grid;grid-template-columns:repeat(var(--columns),1fr);grid-column-gap:var(--gutter-width);-moz-column-gap:var(--gutter-width);column-gap:var(--gutter-width);grid-template-rows:auto;margin-left:auto;margin-right:auto;margin-top:var(--space,var(--space-168));max-width:var(--grid-max-width);padding-left:var(--grid-padding);padding-right:var(--grid-padding)}.read-more-subheading[data-v-a499b5aa]{--grid-padding:0}.read-more-contents[data-v-a499b5aa]{display:grid;grid-template-columns:repeat(var(--columns),1fr);grid-column-gap:var(--gutter-width);-moz-column-gap:var(--gutter-width);column-gap:var(--gutter-width);grid-column:1/-1;grid-template-rows:auto;margin-left:auto;margin-right:auto;max-width:var(--grid-max-width);padding:0;width:100%}[data-v-a499b5aa] .subheading+.read-more-contents{margin-top:var(--space,var(--space-64))}.col[data-v-a499b5aa]{grid-column:1/-1;margin-bottom:48px}@media(min-width:768px){.col[data-v-a499b5aa]{grid-column:auto/span 2;margin-bottom:0}}.col[data-v-a499b5aa] .cta-button{margin:0}.read-more-item[data-v-a499b5aa]{--aspect-ratio:.75;grid-column:auto/span 4}@media(min-width:768px){.read-more-item[data-v-a499b5aa]{grid-column:auto/span 2}}.read-more-item.third-item[data-v-a499b5aa]{display:none}@media(min-width:768px){.read-more-item.third-item[data-v-a499b5aa]{display:block}}",
        "",
      ]),
        (r.locals = {}),
        (t.exports = r));
    },
  },
]);
