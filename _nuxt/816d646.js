(window.webpackJsonp = window.webpackJsonp || []).push([
  [10, 104, 105, 106],
  {
    555: function (e, t, n) {
      var content = n(598);
      (content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[e.i, content, ""]]),
        content.locals && (e.exports = content.locals));
      (0, n(32).default)("40f134a0", content, !0, { sourceMap: !1 });
    },
    567: function (e, t, n) {
      e.exports = n.p + "img/spark-1.73888f2.png";
    },
    568: function (e, t, n) {
      e.exports = n.p + "img/lines-alphamap.ac8d54c.jpg";
    },
    569: function (e, t, n) {
      e.exports = n.p + "img/alphamap-pins.941fd43.jpg";
    },
    597: function (e, t, n) {
      "use strict";
      n(555);
    },
    598: function (e, t, n) {
      var r = n(31)(function (i) {
        return i[1];
      });
      (r.push([
        e.i,
        ".wrapper-vignette{pointer-events:none;touch-action:none;-moz-user-select:none;user-select:none;-webkit-user-select:none}.wrapper-vignette,.wrapper-vignette .vignette{height:100vh;left:0;position:absolute;top:0;width:100%}.wrapper-vignette .vignette{box-shadow:inset 0 0 150px 30px rgba(0,0,0,.6)}@media(max-width:819px){.wrapper-vignette .vignette{box-shadow:inset 0 0 80px 10px rgba(0,0,0,.6)}}",
        "",
      ]),
        (r.locals = {}),
        (e.exports = r));
    },
    613: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = { mounted: function () {}, methods: {} },
        o = (n(597), n(7)),
        component = Object(o.a)(
          r,
          function () {
            this._self._c;
            return this._m(0);
          },
          [
            function () {
              var e = this._self._c;
              return e("div", { staticClass: "wrapper-vignette" }, [
                e("div", { staticClass: "vignette" }),
              ]);
            },
          ],
          !1,
          null,
          null,
          null,
        );
      t.default = component.exports;
    },
    731: function (e, t, n) {
      e.exports = n.p + "img/alphamap-scan.292bde1.jpg";
    },
    732: function (e, t, n) {
      e.exports = n.p + "img/alphamap-scan-2.13dc231.jpg";
    },
    733: function (e, t, n) {
      e.exports = n.p + "img/teleport-map-2.9a20bb0.jpg";
    },
    734: function (e, t, n) {
      e.exports = n.p + "img/power.4193f47.png";
    },
    735: function (e, t, n) {
      e.exports = n.p + "img/power.2c44763.png";
    },
    736: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return d;
      });
      const r = Math.sqrt(3),
        o = 0.5 * (r - 1),
        l = (3 - r) / 6,
        h = (e) => 0 | Math.floor(e),
        c = new Float64Array([
          1, 1, -1, 1, 1, -1, -1, -1, 1, 0, -1, 0, 1, 0, -1, 0, 0, 1, 0, -1, 0,
          1, 0, -1,
        ]);
      function d(e = Math.random) {
        const t = m(e),
          n = new Float64Array(t).map((e) => c[(e % 12) * 2]),
          r = new Float64Array(t).map((e) => c[(e % 12) * 2 + 1]);
        return function (e, c) {
          let d = 0,
            m = 0,
            f = 0;
          const s = (e + c) * o,
            i = h(e + s),
            v = h(c + s),
            w = (i + v) * l,
            y = e - (i - w),
            M = c - (v - w);
          let x, S;
          y > M ? ((x = 1), (S = 0)) : ((x = 0), (S = 1));
          const P = y - x + l,
            _ = M - S + l,
            C = y - 1 + 2 * l,
            W = M - 1 + 2 * l,
            G = 255 & i,
            E = 255 & v;
          let L = 0.5 - y * y - M * M;
          if (L >= 0) {
            const e = G + t[E];
            ((L *= L), (d = L * L * (n[e] * y + r[e] * M)));
          }
          let I = 0.5 - P * P - _ * _;
          if (I >= 0) {
            const e = G + x + t[E + S];
            ((I *= I), (m = I * I * (n[e] * P + r[e] * _)));
          }
          let k = 0.5 - C * C - W * W;
          if (k >= 0) {
            const e = G + 1 + t[E + 1];
            ((k *= k), (f = k * k * (n[e] * C + r[e] * W)));
          }
          return 70 * (d + m + f);
        };
      }
      function m(e) {
        const t = 512,
          p = new Uint8Array(t);
        for (let i = 0; i < 256; i++) p[i] = i;
        for (let i = 0; i < 255; i++) {
          const t = i + ~~(e() * (256 - i)),
            n = p[i];
          ((p[i] = p[t]), (p[t] = n));
        }
        for (let i = 256; i < t; i++) p[i] = p[i - 256];
        return p;
      }
    },
    805: function (e, t, n) {
      "use strict";
      (n.r(t),
        n.d(t, "default", function () {
          return P;
        }));
      (n(24), n(43), n(53), n(67), n(35), n(44), n(15), n(47), n(41), n(42));
      var r = n(18),
        o = (n(632), n(182)),
        l = n(183),
        h = (n(27), n(36), n(8), n(29), n(476)),
        c = n(25),
        d = (n(633), n(702)),
        m = n(635),
        f = n(609),
        v = n(636),
        w = n(701),
        y = n(700),
        M = n(634);
      function x(e, t) {
        var n =
          ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!n) {
          if (
            Array.isArray(e) ||
            (n = (function (e, a) {
              if (e) {
                if ("string" == typeof e) return S(e, a);
                var t = {}.toString.call(e).slice(8, -1);
                return (
                  "Object" === t && e.constructor && (t = e.constructor.name),
                  "Map" === t || "Set" === t
                    ? Array.from(e)
                    : "Arguments" === t ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                      ? S(e, a)
                      : void 0
                );
              }
            })(e)) ||
            (t && e && "number" == typeof e.length)
          ) {
            n && (e = n);
            var r = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return r >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[r++] };
              },
              e: function (e) {
                throw e;
              },
              f: o,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
          );
        }
        var l,
          a = !0,
          u = !1;
        return {
          s: function () {
            n = n.call(e);
          },
          n: function () {
            var e = n.next();
            return ((a = e.done), e);
          },
          e: function (e) {
            ((u = !0), (l = e));
          },
          f: function () {
            try {
              a || null == n.return || n.return();
            } finally {
              if (u) throw l;
            }
          },
        };
      }
      function S(e, a) {
        (null == a || a > e.length) && (a = e.length);
        for (var t = 0, n = Array(a); t < a; t++) n[t] = e[t];
        return n;
      }
      var P = (function () {
        return Object(l.a)(
          function e(t, n, r) {
            (Object(o.a)(this, e),
              (this.isMobile = r),
              (this.preloadManager = n),
              (this.vw = Math.max(
                document.documentElement.clientWidth || 0,
                window.innerWidth || 0,
              )),
              (this.vh = Math.max(
                document.documentElement.clientHeight || 0,
                window.innerHeight || 0,
              )),
              (this.vhSave = Math.max(
                document.documentElement.clientHeight || 0,
                window.innerHeight || 0,
              )),
              this.vw / this.vh > 2
                ? (this.vh = this.vw / 2)
                : (this.vh = Math.max(
                    document.documentElement.clientHeight || 0,
                    window.innerHeight || 0,
                  )),
              (this.scene = new h.Scene()),
              (this.camera = new h.PerspectiveCamera(
                35,
                this.vw / this.vh,
                1,
                250,
              )),
              this.camera.position.set(0, 5, 22),
              this.camera.rotation.set(-0.2, 0, 0),
              this.scene.add(this.camera),
              (this.scene.background = new h.Color(12764098)),
              (this.renderer = new h.WebGLRenderer({ antialias: !1 })),
              (this.stats = null),
              (this.rendererStats = null),
              (this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1),
              (this.dracoLoader = new M.a()),
              this.dracoLoader.setDecoderPath("/draco/"),
              (this.modelLoader = new y.a(this.preloadManager.managerModels)),
              this.modelLoader.setDRACOLoader(this.dracoLoader),
              (this.textureLoader = new h.TextureLoader(
                this.preloadManager.managerTextures,
              )),
              (this.textureLoader.crossOrigin = ""),
              (this.controls = null),
              (this.mouseX = 0),
              (this.mouseY = 0),
              (this.mouse = { x: 0, y: 0 }),
              (this.resize = { ratio: 0 }),
              (this.panelRatio = { val: 1 }),
              (this.scrolled = 0),
              (this.scroll = { y: 0 }),
              (this.clock = new h.Clock()),
              (this.delta = this.clock.getDelta()),
              (this.countCalc = 0),
              (this.frames = 0),
              (this.startTime = window.performance.now()),
              (this.fps = 0),
              (this.flagCalcEasing = !1),
              (this.easingBase = 0.1),
              (this.pivot = new h.Object3D()),
              (this.globalGroup = new h.Group()),
              this.pivot.add(this.globalGroup),
              this.scene.add(this.pivot),
              (this.container = t),
              this.renderScene(),
              this.resizeCanvas());
          },
          [
            {
              key: "minVal",
              value: function (e, param) {
                return param < e ? e : param;
              },
            },
            {
              key: "maxVal",
              value: function (e, param) {
                return param > e ? e : param;
              },
            },
            {
              key: "betweenVal",
              value: function (e, t, param) {
                return param < e ? e : param > t ? t : param;
              },
            },
            {
              key: "renderScene",
              value: function () {
                ((this.renderer.shadowMap.enabled = !0),
                  (this.renderer.sortObjects = !0),
                  (this.renderer.premultipliedAlpha = !1),
                  (this.renderer.stencil = !1),
                  (this.renderer.depth = !1),
                  (this.renderer.autoClearStencil = !1),
                  (this.renderer.preserveDrawingBuffer = !1),
                  (this.renderer.powerPreference = "high-performance"),
                  this.renderer.setPixelRatio(this.pixelRatio),
                  this.renderer.setSize(this.vw, this.vh),
                  this.container.insertBefore(
                    this.renderer.domElement,
                    this.container.childNodes[0],
                  ));
                var e = new m.a(this.scene, this.camera);
                ((this.rgbPass = new f.a(v.a)),
                  (this.rgbPass.uniforms.angle.value = 2),
                  (this.rgbPass.uniforms.amount.value = 0.0014),
                  (this.rgbPass.renderToScreen = !0),
                  (this.bloomPass = new w.a(
                    new h.Vector2(this.vw, this.vh),
                    1.5,
                    0.4,
                    0.85,
                  )),
                  (this.bloomPass.threshold = 0),
                  (this.bloomPass.strength = 0.19),
                  (this.bloomPass.radius = 0),
                  (this.composer = new d.a(this.renderer)),
                  this.composer.addPass(e),
                  this.composer.addPass(this.bloomPass));
              },
            },
            {
              key: "updateMouse",
              value: function (e) {
                var t = void 0 === e.clientX ? e.touches[0].clientX : e.clientX,
                  n = void 0 === e.clientY ? e.touches[0].clientY : e.clientY;
                ((this.mouseX =
                  ((t - this.vw / 2) / (this.vw / 2)) * this.panelRatio.val),
                  (this.mouseY =
                    (-(n - this.vh / 2) / (this.vh / 2)) *
                    this.panelRatio.val));
              },
            },
            {
              key: "loopAnimation",
              value: function () {
                (this.countCalc <= 10
                  ? this.calculateFps()
                  : this.flagCalcEasing || this.calcEasingBase(),
                  (this.mouse.x =
                    (this.easingBase / 3) * (this.mouseX - this.mouse.x) +
                    this.mouse.x),
                  (this.mouse.y =
                    (this.easingBase / 3) * (this.mouseY - this.mouse.y) +
                    this.mouse.y));
                var e = window.scrollY;
                (window.innerWidth < 768 && (e = 1.8 * window.scrollY),
                  (this.scrolled = this.maxVal(2e3, e)),
                  (this.scroll.y =
                    this.easingBase * (this.scrolled - this.scroll.y) +
                    this.scroll.y));
                var t = 0.2 + this.scroll.y / 2500;
                ((this.globalGroup.rotation.x = (this.mouse.y / 20) * t),
                  (this.globalGroup.rotation.y =
                    Math.PI / -2 +
                    (this.mouse.x / 20) * t -
                    this.scroll.y / 2500),
                  this.camera.rotation.set(
                    -0.2 - this.scroll.y / 6666.67,
                    0,
                    0,
                  ),
                  this.globalGroup.position.set(
                    this.scroll.y / 1e3,
                    0,
                    this.scroll.y / 1e3,
                  ));
                var n = 1 + (1 - this.minVal(1, this.vh / this.vw)) / 4;
                (this.camera.position.set(
                  0,
                  5 + this.scroll.y / (57.14 / 1.5),
                  22 + this.scroll.y / (34.48 / 1.5),
                ),
                  (this.camera.fov = this.betweenVal(
                    12,
                    50,
                    (35 - this.scroll.y / 86.96) / n,
                  )),
                  this.camera.updateProjectionMatrix());
              },
            },
            {
              key: "calculateFps",
              value: function () {
                var e = performance.now(),
                  dt = e - this.startTime;
                (dt > 150 &&
                  ((this.fps = Math.round((1e3 * this.frames) / dt)),
                  (this.frames = 0),
                  (this.startTime = e),
                  this.countCalc++),
                  this.frames++);
              },
            },
            {
              key: "calcEasingBase",
              value: function () {
                ((this.flagCalcEasing = !0),
                  (this.easingBase = this.betweenVal(
                    0.05,
                    0.1,
                    60 / this.fps / 10,
                  )),
                  this.isMobile && (this.easingBase = 0.1));
              },
            },
            {
              key: "resizeCanvas",
              value: function () {
                ((this.vw = Math.max(
                  document.documentElement.clientWidth || 0,
                  window.innerWidth || 0,
                )),
                  (this.vh = Math.max(
                    document.documentElement.clientHeight || 0,
                    window.innerHeight || 0,
                  )),
                  (this.vhSave = Math.max(
                    document.documentElement.clientHeight || 0,
                    window.innerHeight || 0,
                  )),
                  this.vw / this.vh > 2
                    ? ((this.vh = this.vw / 2),
                      c.b.set(this.renderer.domElement, {
                        top: "50%",
                        yPercent: -50,
                      }),
                      document.getElementsByClassName("pin-wrapper-platform")
                        .length > 0 &&
                        this.vw > 767 &&
                        c.b.set(".pin-wrapper-platform", {
                          top: "50%",
                          y: -this.vh / 2,
                          force3D: !0,
                        }))
                    : ((this.vh = Math.max(
                        document.documentElement.clientHeight || 0,
                        window.innerHeight || 0,
                      )),
                      document.getElementsByClassName("pin-wrapper-platform")
                        .length > 0 &&
                        this.vw > 767 &&
                        c.b.set(".pin-wrapper-platform", {
                          top: 0,
                          y: 0,
                          force3D: !0,
                        })),
                  (this.camera.aspect = this.vw / this.vh),
                  this.camera.updateProjectionMatrix(),
                  this.renderer.setPixelRatio(this.pixelRatio),
                  this.renderer.setSize(this.vw, this.vh),
                  this.composer.setSize(this.vw, this.vh));
              },
            },
            {
              key: "cleanMemory",
              value: function () {
                var e = this;
                (this.scene.traverse(function (object) {
                  if (object.isMesh || object.isPoints || object.isLine)
                    if ((object.geometry.dispose(), object.material.isMaterial))
                      e.cleanMaterial(object.material);
                    else {
                      var t,
                        n = x(object.material);
                      try {
                        for (n.s(); !(t = n.n()).done; ) {
                          var r = t.value;
                          e.cleanMaterial(r);
                        }
                      } catch (e) {
                        n.e(e);
                      } finally {
                        n.f();
                      }
                    }
                  object.isLight &&
                    (e.scene.remove(object),
                    object.shadow &&
                      object.shadow.map &&
                      object.shadow.map.dispose());
                }),
                  this.composer &&
                    (this.composer.passes &&
                      this.composer.passes.forEach(function (e) {
                        e.dispose && e.dispose();
                      }),
                    this.composer.renderTarget1 &&
                      this.composer.renderTarget1.dispose(),
                    this.composer.renderTarget2 &&
                      this.composer.renderTarget2.dispose()),
                  this.renderer &&
                    this.renderer.renderLists &&
                    this.renderer.renderLists.dispose(),
                  this.renderer.dispose());
              },
            },
            {
              key: "cleanMaterial",
              value: function (e) {
                e.dispose();
                for (var t = 0, n = Object.keys(e); t < n.length; t++) {
                  var o = e[n[t]];
                  o &&
                    "object" === Object(r.a)(o) &&
                    "minFilter" in o &&
                    o.dispose();
                }
              },
            },
          ],
        );
      })();
    },
    807: function (e, t, n) {
      var content = n(875);
      (content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[e.i, content, ""]]),
        content.locals && (e.exports = content.locals));
      (0, n(32).default)("3fa71aec", content, !0, { sourceMap: !1 });
    },
    824: function (e, t, n) {
      "use strict";
      n.r(t);
      n(51);
      var r = n(180),
        o = n.n(r),
        l = n(25),
        h = n(613),
        c = n(830),
        d = n(805),
        m = n(182),
        f = n(183),
        v = (n(276), n(44), n(8), n(191), n(476)),
        w = n(736),
        y = (function () {
          return Object(f.a)(
            function e(t, n, r) {
              (Object(m.a)(this, e),
                (this.setupWebglScene = t),
                (this.preloadManager = n),
                (this.isMobile = r),
                (this.frameAnimation = { val: 0 }),
                (this.clock = new v.Clock()),
                (this.delta = this.clock.getDelta()),
                (this.scrolled0 = 0),
                (this.scrolled1 = 0),
                (this.scrolled2 = 0),
                (this.scrolled3 = 0),
                (this.scrolled4 = 0),
                (this.scroll = { y0: 0, y1: 0, y2: 0, y3: 0, y4: 0 }),
                (this.pinsPosition1 = []),
                (this.boxPositions1 = new Array(this.pinsPosition1.length)),
                (this.pins1 = []),
                (this.pinsPosition2 = []),
                (this.boxPositions2 = new Array(this.pinsPosition2.length)),
                (this.pins2 = []),
                (this.pinsPosition4 = []),
                (this.boxPositions4 = new Array(this.pinsPosition4.length)),
                (this.pins4 = []),
                (this.particleShaderMaterial = null),
                (this.particleSystem1 = null),
                (this.sizes = null),
                (this.indexSize = 0),
                (this.simplex = Object(w.a)()),
                (this.sizeParticle = { ratio: 0 }),
                (this.stageGroupGlobal = new v.Group()),
                (this.stageGroup1 = new v.Group()),
                (this.stageGroup2 = new v.Group()),
                (this.stageGroup3 = new v.Group()),
                (this.stageGroup4 = new v.Group()),
                this.stageGroupGlobal.add(this.stageGroup1),
                this.stageGroupGlobal.add(this.stageGroup2),
                this.stageGroupGlobal.add(this.stageGroup3),
                this.stageGroupGlobal.add(this.stageGroup4),
                this.setupWebglScene.globalGroup.add(this.stageGroupGlobal),
                this.createPins1(),
                this.createPins2(),
                this.createPins4(),
                this.createParticles(),
                this.createPlatform1(),
                this.createPlatform2(),
                this.createPlatform3(),
                this.createPlatform4(),
                this.resizeCanvas());
            },
            [
              {
                key: "minVal",
                value: function (e, param) {
                  return param < e ? e : param;
                },
              },
              {
                key: "maxVal",
                value: function (e, param) {
                  return param > e ? e : param;
                },
              },
              {
                key: "betweenVal",
                value: function (e, t, param) {
                  return param < e ? e : param > t ? t : param;
                },
              },
              {
                key: "roundTwo",
                value: function (e) {
                  return Math.floor(100 * e) / 100;
                },
              },
              {
                key: "createPins1",
                value: function () {
                  var e = this.setupWebglScene.textureLoader.load(
                    this.preloadManager.preloadManifest.find(function (e) {
                      return "pins-alphamap" === e.id;
                    }).src,
                  );
                  ((e.wrapS = e.wrapT = v.RepeatWrapping),
                    (e.minFilter = v.NearestFilter),
                    (e.magFilter = v.NearestFilter),
                    (this.pinsMaterial1 = new v.MeshBasicMaterial({
                      color: 0,
                      alphaMap: e,
                      depthWrite: !1,
                      transparent: !0,
                      opacity: 0,
                      side: v.DoubleSide,
                    })),
                    (this.pinsMaterial2 = new v.MeshBasicMaterial({
                      color: 0,
                      transparent: !0,
                      opacity: 0,
                      side: v.DoubleSide,
                    })),
                    (this.pinsPosition1 = [
                      { x: 8, y: 1.5, z: 5, height: 8 },
                      { x: 4, y: 1.5, z: -8, height: 8 },
                      { x: -2, y: 1.5, z: 3.9, height: 8 },
                    ]));
                  for (var i = 0; i < this.pinsPosition1.length; i++) {
                    var t = new v.PlaneGeometry(
                        0.05,
                        this.pinsPosition1[i].height,
                      ),
                      n = new v.PlaneGeometry(0.15, 2.5),
                      r = new v.Mesh(t, this.pinsMaterial1),
                      o = new v.Mesh(n, this.pinsMaterial2);
                    ((o.position.y = this.pinsPosition1[i].height / 2 + 0.375),
                      r.position.copy(this.pinsPosition1[i]),
                      r.add(o),
                      r.rotation.set(0, -0.8, 0),
                      r.scale.set(1, 1e-5, 1),
                      this.pins1.push(r),
                      this.stageGroup1.add(r));
                  }
                },
              },
              {
                key: "createPins2",
                value: function () {
                  this.pinsPosition2 = [{ x: 0, y: 1.5, z: 0, height: 2 }];
                  for (
                    var e = new v.BoxGeometry(1, 1, 1), i = 0;
                    i < this.pinsPosition2.length;
                    i++
                  ) {
                    var t = new v.Mesh(e);
                    (t.position.copy(this.pinsPosition2[i]),
                      (t.visible = !1),
                      this.pins2.push(t),
                      this.stageGroup1.add(t));
                  }
                },
              },
              {
                key: "createPins4",
                value: function () {
                  this.pinsPosition4 = [{ x: 0, y: 1.5, z: 0, height: 2 }];
                  for (
                    var e = new v.BoxGeometry(1, 1, 1), i = 0;
                    i < this.pinsPosition4.length;
                    i++
                  ) {
                    var t = new v.Mesh(e);
                    (t.position.copy(this.pinsPosition4[i]),
                      (t.visible = !1),
                      this.pins4.push(t),
                      this.stageGroup4.add(t));
                  }
                },
              },
              {
                key: "createParticles",
                value: function () {
                  var e = this,
                    t = new v.BufferGeometry(),
                    n = new v.Vector4(0, 0, 0, 1);
                  (this.setupWebglScene.textureLoader.load(
                    this.preloadManager.preloadManifest.find(function (e) {
                      return "particle" === e.id;
                    }).src,
                    function (map) {
                      var r = {
                        pointTexture: { value: map },
                        color: { value: n },
                        resolution: {
                          type: "v4",
                          value: new v.Vector4(1, 1, 1, 1),
                        },
                      };
                      ((e.particleShaderMaterial = new v.ShaderMaterial({
                        uniforms: r,
                        vertexShader:
                          "attribute float size; varying vec4 vColor; uniform vec4 color; void main() { vColor = color; vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 ); gl_PointSize = size * ( 300.0 / -mvPosition.z ); gl_Position = projectionMatrix * mvPosition; }",
                        fragmentShader:
                          "uniform sampler2D pointTexture; varying vec4 vColor; uniform vec4 resolution; void main() { gl_FragColor = vec4( vColor.x, vColor.y, vColor.z, 0.8 ); gl_FragColor = gl_FragColor * texture2D( pointTexture, gl_PointCoord ); }",
                        blending: v.NormalBlending,
                        transparent: !0,
                        depthWrite: !1,
                      })),
                        (e.particleSystem1 = new v.Points(
                          t,
                          e.particleShaderMaterial,
                        )),
                        e.particleSystem1.rotation.set(Math.PI / 2, 0, 0),
                        e.particleSystem1.position.set(0.65, 0.1, 0.3),
                        (e.particleSystem2 = e.particleSystem1.clone()),
                        (e.particleSystem3 = e.particleSystem1.clone()),
                        (e.particleSystem4 = e.particleSystem1.clone()),
                        e.stageGroup1.add(e.particleSystem1),
                        e.stageGroup2.add(e.particleSystem2),
                        e.stageGroup3.add(e.particleSystem3),
                        e.stageGroup4.add(e.particleSystem4));
                    },
                  ),
                    (this.countX = 48),
                    (this.countY = 32));
                  for (
                    var r = 0.5625, o = [], l = [], i = 0;
                    i < this.countX;
                    i++
                  )
                    for (var h = 0; h < this.countY; h++)
                      (o.push(i * r - (this.countX * r) / 2),
                        o.push(h * r - (this.countY * r) / 2),
                        o.push(0),
                        l.push(2));
                  (t.setAttribute(
                    "position",
                    new v.Float32BufferAttribute(o, 3),
                  ),
                    t.setAttribute(
                      "size",
                      new v.Float32BufferAttribute(l, 1).setUsage(
                        v.DynamicDrawUsage,
                      ),
                    ),
                    (this.sizes = t.attributes.size.array));
                },
              },
              {
                key: "createPlatform1",
                value: function () {
                  var e = this,
                    t = this.setupWebglScene.textureLoader.load(
                      this.preloadManager.preloadManifest.find(function (e) {
                        return "lines-alphamap" === e.id;
                      }).src,
                    );
                  ((t.wrapS = t.wrapT = v.RepeatWrapping),
                    (t.minFilter = v.NearestFilter),
                    (t.magFilter = v.NearestFilter),
                    t.repeat.set(0.6, 0.6));
                  var n = this.setupWebglScene.textureLoader.load(
                    this.preloadManager.preloadManifest.find(function (e) {
                      return "scan-alphamap" === e.id;
                    }).src,
                  );
                  ((n.wrapS = n.wrapT = v.RepeatWrapping),
                    (n.minFilter = v.NearestFilter),
                    (n.magFilter = v.NearestFilter),
                    n.repeat.set(0.6, 0.6));
                  var r = this.setupWebglScene.textureLoader.load(
                    this.preloadManager.preloadManifest.find(function (e) {
                      return "scan-alphamap-2" === e.id;
                    }).src,
                  );
                  ((r.wrapS = r.wrapT = v.RepeatWrapping),
                    (r.minFilter = v.NearestFilter),
                    (r.magFilter = v.NearestFilter),
                    r.repeat.set(0.6, 0.6));
                  var o = this.setupWebglScene.textureLoader.load(
                    this.preloadManager.preloadManifest.find(function (e) {
                      return "power" === e.id;
                    }).src,
                  );
                  ((o.wrapS = o.wrapT = v.RepeatWrapping),
                    (o.minFilter = v.NearestFilter),
                    (o.magFilter = v.NearestFilter),
                    (this.greenLineMaterial = new v.MeshBasicMaterial({
                      color: 7368816,
                      side: v.DoubleSide,
                    })),
                    (this.greenColor = new v.Color(8962560)),
                    (this.greenWireframeMaterial = new v.MeshLambertMaterial({
                      color: 8962560,
                      emissive: 8962560,
                      emissiveIntensity: 1,
                      alphaMap: t,
                      transparent: !0,
                      opacity: 1,
                      side: v.DoubleSide,
                    })),
                    (this.greenCubeMaterial = new v.MeshLambertMaterial({
                      color: 8962560,
                      emissive: 8962560,
                      emissiveIntensity: 1,
                      transparent: !0,
                      opacity: 0,
                      depthWrite: !1,
                      side: v.DoubleSide,
                    })),
                    (this.whiteCubeMaterial = new v.MeshBasicMaterial({
                      color: 7368816,
                      transparent: !0,
                      opacity: 0,
                      depthWrite: !1,
                      side: v.DoubleSide,
                    })));
                  var l = new v.MeshBasicMaterial({
                      color: 7368816,
                      side: v.DoubleSide,
                    }),
                    h = new v.MeshBasicMaterial({
                      color: 12764098,
                      side: v.DoubleSide,
                    });
                  this.setupWebglScene.modelLoader.load(
                    this.preloadManager.preloadManifest.find(function (e) {
                      return "scene-1" === e.id;
                    }).src,
                    function (object) {
                      ((e.stage1 = object.scene),
                        e.stage1.rotation.set(0, Math.PI / 2, 0),
                        e.stage1.traverse(function (t) {
                          t.isMesh &&
                            ("FLOOR" === t.name && (t.material = h),
                            "LINES_WHITE" === t.name &&
                              ((e.linesWhite = t),
                              e.linesWhite.scale.set(1, 1e-4, 1),
                              (t.material = l)),
                            "WIREFRAME_WHITE" === t.name && (t.material = l),
                            "WIREFRAME_GREEN" === t.name &&
                              ((t.position.y = 0.02),
                              (t.material = e.greenWireframeMaterial)));
                        }),
                        e.stageGroup1.add(e.stage1));
                    },
                  );
                  var c = new v.PlaneGeometry(32, 32);
                  this.titleMaterial = new v.MeshBasicMaterial({
                    map: o,
                    transparent: !0,
                    opacity: 0.1,
                    depthWrite: !1,
                    side: v.DoubleSide,
                  });
                  var title = new v.Mesh(c, this.titleMaterial);
                  (title.position.set(-20, 1, 0),
                    title.rotation.set(0, Math.PI / 2, 0),
                    this.stageGroup1.add(title));
                  var d = new v.PlaneGeometry(18.2, 27.2);
                  ((this.scanMaterial1 = new v.MeshBasicMaterial({
                    color: 8962560,
                    alphaMap: n,
                    transparent: !0,
                    opacity: 0.1,
                    depthWrite: !1,
                    side: v.DoubleSide,
                  })),
                    (this.scanMaterial2 = new v.MeshBasicMaterial({
                      color: 8962560,
                      alphaMap: r,
                      transparent: !0,
                      opacity: 1,
                      depthWrite: !1,
                      side: v.DoubleSide,
                    })));
                  var m = new v.Mesh(d, this.scanMaterial1);
                  (m.position.set(0.02, 0.02, -0.02),
                    m.rotation.set(-Math.PI / 2, 0, Math.PI / 2));
                  var f = new v.Mesh(d, this.scanMaterial2);
                  (f.position.set(0.02, 0.02, -0.02),
                    f.rotation.set(-Math.PI / 2, 0, Math.PI / 2),
                    this.stageGroup1.add(m),
                    this.stageGroup1.add(f));
                },
              },
              {
                key: "createPlatform2",
                value: function () {
                  var e = this,
                    t = new v.MeshBasicMaterial({
                      color: 7368816,
                      transparent: !0,
                      opacity: 0.5,
                      side: v.DoubleSide,
                    }),
                    n = new v.MeshBasicMaterial({
                      color: 7644672,
                      side: v.DoubleSide,
                    });
                  ((this.greenCubeMaterial = new v.MeshBasicMaterial({
                    color: 8962560,
                    transparent: !0,
                    opacity: 0,
                    depthWrite: !1,
                    side: v.DoubleSide,
                  })),
                    (this.whiteCubeMaterial = new v.MeshBasicMaterial({
                      color: 7368816,
                      transparent: !0,
                      opacity: 0,
                      depthWrite: !1,
                      side: v.DoubleSide,
                    })));
                  var r = new v.MeshBasicMaterial({
                      color: 7368816,
                      side: v.DoubleSide,
                    }),
                    o = new v.MeshBasicMaterial({
                      color: 12764098,
                      side: v.DoubleSide,
                    });
                  this.setupWebglScene.modelLoader.load(
                    this.preloadManager.preloadManifest.find(function (e) {
                      return "scene-2" === e.id;
                    }).src,
                    function (object) {
                      ((e.stage2 = object.scene),
                        e.stage2.rotation.set(0, Math.PI / 2, 0),
                        e.stage2.traverse(function (l) {
                          l.isMesh &&
                            ("FLOOR" === l.name && (l.material = o),
                            "CUBE_GREEN" === l.name &&
                              ((e.cubeGreen = l),
                              (l.material = e.greenCubeMaterial)),
                            "CUBE_WIREFRAME" === l.name &&
                              ((e.cubeWireframe = l),
                              (l.material = e.whiteCubeMaterial)),
                            "LINES_GREEN" === l.name &&
                              ((e.linesGreen = l),
                              e.linesGreen.scale.set(1, 1e-4, 1),
                              (l.material = n)),
                            "LINES_WHITE" === l.name &&
                              ((e.linesWhite2 = l),
                              e.linesWhite2.scale.set(1, 1e-4, 1),
                              (l.material = t)),
                            "WIREFRAME_WHITE" === l.name && (l.material = r),
                            "WIREFRAME_GREEN" === l.name &&
                              ((l.position.y = 0.02), (l.material = t)));
                        }),
                        (e.stageGroup2.position.y = -36),
                        e.stageGroup2.add(e.stage2));
                    },
                  );
                },
              },
              {
                key: "createPlatform3",
                value: function () {
                  var e = this,
                    t = this.setupWebglScene.textureLoader.load(
                      this.preloadManager.preloadManifest.find(function (e) {
                        return "teleport-alphamap-2" === e.id;
                      }).src,
                    );
                  ((t.wrapS = t.wrapT = v.RepeatWrapping),
                    (t.minFilter = v.NearestFilter),
                    (t.magFilter = v.NearestFilter),
                    t.repeat.set(14, 14),
                    (this.teleportMaterial = new v.MeshLambertMaterial({
                      color: 8962560,
                      emissive: 8962560,
                      emissiveIntensity: 1,
                      opacity: 0,
                      alphaMap: t,
                      transparent: !0,
                      depthWrite: !1,
                      side: v.DoubleSide,
                    })));
                  var n = new v.MeshBasicMaterial({
                      color: 11513775,
                      transparent: !0,
                      opacity: 0.5,
                      side: v.DoubleSide,
                    }),
                    r = new v.MeshBasicMaterial({
                      color: 12764098,
                      side: v.DoubleSide,
                    }),
                    o = new v.MeshBasicMaterial({
                      color: 7368816,
                      side: v.DoubleSide,
                    }),
                    l = new v.MeshBasicMaterial({
                      color: 7368816,
                      transparent: !0,
                      opacity: 0.9,
                      side: v.DoubleSide,
                    });
                  this.setupWebglScene.modelLoader.load(
                    this.preloadManager.preloadManifest.find(function (e) {
                      return "scene-3" === e.id;
                    }).src,
                    function (object) {
                      ((e.stage3 = object.scene),
                        e.stage3.rotation.set(0, Math.PI / 2, 0),
                        e.stage3.traverse(function (t) {
                          t.isMesh &&
                            ("GEOMETRY" === t.name && (t.material = r),
                            "GEOMETRY_GRAY" === t.name && (t.material = n),
                            "GEOMETRY_GRAY_2" === t.name &&
                              ((e.teleportLines = t),
                              e.teleportLines.scale.set(1, 1e-4, 1),
                              (t.material = e.teleportMaterial)),
                            "WIREFRAME" === t.name && (t.material = o),
                            "WIREFRAME_THIN" === t.name && (t.material = l));
                        }),
                        (e.stageGroup3.position.y = -36),
                        e.stageGroup3.add(e.stage3));
                    },
                  );
                },
              },
              {
                key: "createPlatform4",
                value: function () {
                  var e = this,
                    t = this.setupWebglScene.textureLoader.load(
                      this.preloadManager.preloadManifest.find(function (e) {
                        return "lines-alphamap" === e.id;
                      }).src,
                    );
                  ((t.wrapS = t.wrapT = v.RepeatWrapping),
                    (t.minFilter = v.NearestFilter),
                    (t.magFilter = v.NearestFilter),
                    t.repeat.set(0.5, 0.5));
                  var n = new v.MeshBasicMaterial({
                      color: 10790809,
                      transparent: !0,
                      opacity: 0.6,
                      depthWrite: !1,
                      side: v.DoubleSide,
                    }),
                    r = new v.MeshBasicMaterial({
                      color: 12369084,
                      transparent: !0,
                      opacity: 0.5,
                      depthWrite: !1,
                      side: v.DoubleSide,
                    }),
                    o = new v.MeshBasicMaterial({
                      color: 12764098,
                      side: v.DoubleSide,
                    }),
                    l = new v.MeshBasicMaterial({
                      color: 7368816,
                      side: v.DoubleSide,
                    }),
                    h = new v.MeshBasicMaterial({
                      color: 7368816,
                      transparent: !0,
                      opacity: 0.9,
                      side: v.DoubleSide,
                    }),
                    c = new v.MeshBasicMaterial({ color: 12237498 });
                  ((this.linesMaterialGreen = new v.MeshLambertMaterial({
                    color: 8962560,
                    emissive: 8962560,
                    emissiveIntensity: 1,
                    alphaMap: t,
                    depthWrite: !1,
                    transparent: !0,
                    side: v.DoubleSide,
                  })),
                    this.setupWebglScene.modelLoader.load(
                      this.preloadManager.preloadManifest.find(function (e) {
                        return "scene-4" === e.id;
                      }).src,
                      function (object) {
                        ((e.stage4 = object.scene),
                          e.stage4.rotation.set(0, Math.PI / 2, 0),
                          e.stage4.traverse(function (t) {
                            t.isMesh &&
                              ("GEOMETRY" === t.name && (t.material = o),
                              "GEOMETRY_BUILDING" === t.name &&
                                (t.material = r),
                              "BUILDING_GREEN_CUBE" === t.name &&
                                (t.material = n),
                              ("WIREFRAME" !== t.name && "BLACK" !== t.name) ||
                                (t.material = l),
                              "WIREFRAME_THIN" === t.name && (t.material = h),
                              "LINES_FLOOR" === t.name && (t.material = c),
                              ("LINE_1" !== t.name && "LINE_2" !== t.name) ||
                                ((t.material = e.linesMaterialGreen),
                                (t.position.y = 0.01)),
                              ("LINE_3" !== t.name &&
                                "LINE_4" !== t.name &&
                                "LINE_5" !== t.name &&
                                "LINE_6" !== t.name &&
                                "LINE_7" !== t.name &&
                                "LINE_8" !== t.name &&
                                "LINE_9" !== t.name &&
                                "LINE_10" !== t.name &&
                                "LINE_11" !== t.name &&
                                "LINE_12" !== t.name &&
                                "LINE_13" !== t.name) ||
                                ((t.material = e.linesMaterialGreen),
                                (t.position.y = 0.01)));
                          }),
                          (e.stageGroup4.position.y = -54),
                          e.stageGroup4.add(e.stage4));
                      },
                    ));
                },
              },
              {
                key: "loopAnimation",
                value: function () {
                  ((this.delta = this.clock.getDelta()),
                    (this.frameAnimation.val += this.delta / 2));
                  var e = window.scrollY;
                  (window.innerWidth < 768 && (e = 1.8 * window.scrollY),
                    (this.scrolled0 = this.maxVal(1e3, -1e3 + e)),
                    this.setupWebglScene.vw > 767
                      ? ((this.scrolled1 = this.betweenVal(0, 1e3, -1500 + e)),
                        (this.scrolled2 = this.betweenVal(0, 1e3, -4200 + e)),
                        (this.scrolled3 = this.betweenVal(0, 1e3, -6900 + e)),
                        (this.scrolled4 = this.betweenVal(0, 1e3, -9600 + e)))
                      : ((this.scrolled1 = this.betweenVal(0, 1e3, -1500 + e)),
                        (this.scrolled2 = this.betweenVal(0, 1e3, -3600 + e)),
                        (this.scrolled3 = this.betweenVal(0, 1e3, -6300 + e)),
                        (this.scrolled4 = this.betweenVal(0, 1e3, -9e3 + e))),
                    (this.scroll.y0 =
                      this.setupWebglScene.easingBase *
                        (this.scrolled0 - this.scroll.y0) +
                      this.scroll.y0),
                    (this.scroll.y1 =
                      this.setupWebglScene.easingBase *
                        (this.scrolled1 - this.scroll.y1) +
                      this.scroll.y1),
                    (this.scroll.y2 =
                      this.setupWebglScene.easingBase *
                        (this.scrolled2 - this.scroll.y2) +
                      this.scroll.y2),
                    (this.scroll.y3 =
                      this.setupWebglScene.easingBase *
                        (this.scrolled3 - this.scroll.y3) +
                      this.scroll.y3),
                    (this.scroll.y4 =
                      this.setupWebglScene.easingBase *
                        (this.scrolled4 - this.scroll.y4) +
                      this.scroll.y4),
                    (this.linesMaterialGreen.alphaMap.offset.y =
                      -this.frameAnimation.val - 0.5),
                    (this.titleMaterial.opacity = this.minVal(
                      0,
                      0.8 - this.setupWebglScene.scroll.y / 2e3,
                    )),
                    this.linesWhite &&
                      (this.linesWhite.scale.y =
                        1e-4 + this.scroll.y0 / 1e3 - this.scroll.y2 / 3e3));
                  for (var i = 0; i < this.pins1.length; i++)
                    this.pins1[i].scale.y = 1e-4 + this.scroll.y1 / 1e3;
                  ((this.pinsMaterial1.opacity = this.scroll.y1 / 1e3),
                    (this.pinsMaterial2.opacity = this.scroll.y1 / 1e3),
                    l.b.set(".pin-section-platform-1", {
                      opacity: this.scroll.y1 / 1e3 - this.scroll.y2 / 1e3,
                    }),
                    (this.greenWireframeMaterial.opacity =
                      this.scroll.y1 / 6e3 - this.scroll.y2 / 6e3),
                    (this.greenWireframeMaterial.alphaMap.offset.y =
                      this.frameAnimation.val / 1.3 - 0.43),
                    (this.scanMaterial1.opacity =
                      this.scroll.y1 / 2e3 - this.scroll.y2 / 2e3),
                    (this.scanMaterial1.alphaMap.offset.y =
                      -this.frameAnimation.val / 1.3),
                    (this.scanMaterial2.opacity =
                      this.scroll.y1 / 1e3 - this.scroll.y2 / 1e3),
                    (this.scanMaterial2.alphaMap.offset.y =
                      -this.frameAnimation.val / 1.3),
                    this.linesGreen &&
                      ((this.linesGreen.scale.y = 1e-4 + this.scroll.y2 / 1e3),
                      (this.linesWhite2.scale.y = 1e-4 + this.scroll.y2 / 1e3)),
                    (this.greenCubeMaterial.opacity =
                      ((0.4 * (Math.sin(7 * this.frameAnimation.val) + 1)) / 2 -
                        0.02 +
                        0.15) *
                      (this.scroll.y2 / 1e3)),
                    (this.whiteCubeMaterial.opacity = this.scroll.y2 / 1e3),
                    this.cubeGreen &&
                      ((this.cubeGreen.position.y =
                        (this.scroll.y2 / 1e3) * 5 - 5.03),
                      (this.cubeWireframe.position.y =
                        (this.scroll.y2 / 1e3) * 5 - 5)),
                    l.b.set(".pin-section-platform-2", {
                      y: 100 - this.scroll.y2 / 10,
                      opacity: this.scroll.y2 / 500 - 0.75,
                    }),
                    (this.stageGroup1.position.y = (this.scroll.y2 / 1e3) * 10),
                    (this.stageGroup1.rotation.y =
                      (-this.scroll.y2 / 1e3) * (Math.PI / 2)),
                    (this.stageGroupGlobal.position.y =
                      (this.scroll.y2 / 1e3) * 18 +
                      (this.scroll.y3 / 1e3) * 18 +
                      (this.scroll.y4 / 1e3) * 18),
                    (this.stageGroup2.rotation.y =
                      Math.PI / 2 -
                      (this.scroll.y2 / 1e3) * (Math.PI / 2) -
                      (this.scroll.y3 / 1e3) * (Math.PI / 2)),
                    this.teleportLines &&
                      (this.teleportLines.scale.y =
                        0.001 + this.scroll.y3 / 1e3),
                    (this.teleportMaterial.opacity = this.scroll.y3 / 1e3),
                    (this.teleportMaterial.alphaMap.offset.y =
                      2 * this.frameAnimation.val),
                    (this.stageGroup2.position.y =
                      (this.scroll.y3 / 1e3) * 10 - 18),
                    l.b.set(".pin-section-platform-3", {
                      y: 100 - this.scroll.y4 / 10,
                      opacity: this.scroll.y4 / 500 - 0.75,
                    }),
                    (this.stageGroup3.position.y =
                      (this.scroll.y4 / 1e3) * 10 - 36),
                    (this.stageGroup3.rotation.y =
                      Math.PI / 2 -
                      (this.scroll.y3 / 1e3) * (Math.PI / 2) -
                      (this.scroll.y4 / 1e3) * (Math.PI / 2)),
                    (this.stageGroup4.rotation.y =
                      Math.PI / 2 - (this.scroll.y4 / 1e3) * (Math.PI / 2)));
                },
              },
              {
                key: "loopPinPosition",
                value: function () {
                  if (this.setupWebglScene.vw > 767) {
                    for (var i = 0; i < this.pins1.length; i++) {
                      var e = new v.Vector3();
                      (e = new v.Box3()
                        .setFromObject(this.pins1[i])
                        .getCenter(new v.Vector3())).project(
                        this.setupWebglScene.camera,
                      );
                      var t = this.setupWebglScene.vw / 2,
                        n = this.setupWebglScene.vh / 2;
                      ((e.x = (e.x + 0.02) * t + t),
                        (e.y = (e.y + 0.4) * n + n));
                      var r = this.roundTwo(this.setupWebglScene.vh - e.y),
                        o = this.roundTwo(e.x);
                      l.b.set(".pin-" + i, { y: r, x: o, force3D: !0 });
                    }
                    for (var h = 0; h < this.pins2.length; h++) {
                      var c = new v.Vector3();
                      (c = new v.Box3()
                        .setFromObject(this.pins2[h])
                        .getCenter(new v.Vector3())).project(
                        this.setupWebglScene.camera,
                      );
                      var d = this.setupWebglScene.vw / 2,
                        m = this.setupWebglScene.vh / 2;
                      ((c.x = c.x * d + d), (c.y = c.y * m + m));
                      var f = this.roundTwo(this.setupWebglScene.vh - c.y),
                        w = this.roundTwo(c.x);
                      l.b.set(".pin-" + (this.pins1.length + h), {
                        y: f,
                        x: w,
                        force3D: !0,
                      });
                    }
                    for (var y = 0; y < this.pins4.length; y++) {
                      var M = new v.Vector3();
                      (M = new v.Box3()
                        .setFromObject(this.pins4[y])
                        .getCenter(new v.Vector3())).project(
                        this.setupWebglScene.camera,
                      );
                      var x = this.setupWebglScene.vw / 2,
                        S = this.setupWebglScene.vh / 2;
                      ((M.x = M.x * x + x), (M.y = M.y * S + S));
                      var P = this.roundTwo(this.setupWebglScene.vh - M.y),
                        _ = this.roundTwo(M.x);
                      l.b.set(
                        ".pin-" + (this.pins1.length + this.pins2.length + y),
                        { y: P, x: _, force3D: !0 },
                      );
                    }
                  }
                },
              },
              {
                key: "loopParticleAnimation",
                value: function () {
                  for (
                    var e = 6 * this.frameAnimation.val,
                      t = 0.5 + this.setupWebglScene.scroll.y / 1500,
                      n = 0,
                      i = 0;
                    i < this.countX;
                    i++
                  ) {
                    for (var r = 0; r < this.countY; r++)
                      this.sizes[r + n] =
                        ((Math.sin(i / 2 + 2 * e) + 2.5) / 2) * t;
                    n += this.countY;
                  }
                  null !== this.particleSystem1 &&
                    (this.particleSystem1.geometry.attributes.size.needsUpdate =
                      !0);
                },
              },
              { key: "resizeCanvas", value: function () {} },
            ],
          );
        })(),
        M = {
          components: { Vignette: h.default },
          mounted: function () {
            ((this.platformRaf = null),
              (this.isLoaded = !1),
              (this.pageHeight = window.innerHeight),
              (this.isMobileDevice = o()({ tablet: !0, featureDetect: !1 })),
              this.init(),
              (this.networkHeight =
                document.getElementsByClassName("network")[0].offsetHeight));
          },
          beforeDestroy: function () {
            (this.setupWebglScene.cleanMemory(),
              window.removeEventListener("resize", this.onResize, !1),
              window.removeEventListener("mousemove", this.onMouseMove, !1),
              cancelAnimationFrame(this.platformRaf));
          },
          methods: {
            init: function () {
              var e = this;
              (l.a.set("body", {
                height: window.innerHeight,
                overflow: "hidden",
              }),
                (this.preloadManager = new c.default(this.isMobileDevice)),
                (this.setupWebglScene = new d.default(
                  this.$refs.canvasWrapperPlatform,
                  this.preloadManager,
                  this.isMobileDevice,
                )),
                (this.sceneA = new y(
                  this.setupWebglScene,
                  this.preloadManager,
                  this.isMobileDevice,
                )),
                this.onResize(),
                this.render3dScene(),
                window.setTimeout(function () {
                  e.onResize();
                }, 1e3),
                (this.preloadManager.onLoaded = function () {
                  (l.a.to(".canvasWrapperPlatform", {
                    duration: 0.8,
                    opacity: 1,
                    delay: 1,
                    onComplete: function () {
                      ((e.isLoaded = !0), e.onResize());
                    },
                  }),
                    l.a.to(".wrapper-platform .bottom-gradient", {
                      duration: 0.8,
                      opacity: 1,
                      delay: 1,
                    }),
                    l.a.fromTo(
                      ".model span",
                      { opacity: 0 },
                      {
                        opacity: 1,
                        color: "#080808",
                        stagger: 0.05,
                        delay: 1.1,
                      },
                    ));
                }),
                window.addEventListener("resize", this.onResize, !1),
                window.addEventListener("mousemove", this.onMouseMove, !1));
            },
            onResize: function () {
              (this.setupWebglScene.resizeCanvas(),
                this.sceneA.resizeCanvas(),
                this.isLoaded
                  ? l.a.set("body", { height: "auto", overflow: "initial" })
                  : l.a.set("body", {
                      height: window.innerHeight,
                      overflow: "hidden",
                    }));
            },
            onMouseMove: function (e) {
              this.setupWebglScene.updateMouse(e);
            },
            render3dScene: function () {
              ((this.networkHeight =
                document.getElementsByClassName("network")[0].offsetHeight),
                this.setupWebglScene.composer.render(),
                this.setupWebglScene.loopAnimation(),
                this.sceneA.loopAnimation(),
                this.sceneA.loopParticleAnimation(),
                this.sceneA.loopPinPosition(),
                (this.platformRaf = requestAnimationFrame(this.render3dScene)));
            },
          },
        },
        x = (n(874), n(7)),
        component = Object(x.a)(
          M,
          function () {
            var e = this,
              t = e._self._c;
            return t(
              "div",
              {
                ref: "canvasWrapperPlatform",
                staticClass: "canvasWrapperPlatform",
              },
              [
                t("div", { staticClass: "pin-wrapper-platform" }, [
                  e._m(0),
                  e._v(" "),
                  t(
                    "div",
                    {
                      staticClass:
                        "pin-section-platform pin-section-platform-2",
                    },
                    [
                      t("div", { staticClass: "pin pin-3" }, [
                        t("div", { staticClass: "pin-inner grid" }, [
                          t(
                            "svg",
                            {
                              staticClass: "line-pin",
                              attrs: {
                                viewBox: "0 0 513 114",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                              },
                            },
                            [
                              t("path", {
                                attrs: {
                                  d: "M0.5 113.875V15.0625L22.25 0.25H512.938",
                                  stroke: "#818181",
                                  "stroke-width": "2",
                                },
                              }),
                            ],
                          ),
                          e._v(" "),
                          e._m(1),
                          e._v(" "),
                          e._m(2),
                        ]),
                      ]),
                    ],
                  ),
                  e._v(" "),
                  t(
                    "div",
                    {
                      staticClass:
                        "pin-section-platform pin-section-platform-3",
                    },
                    [
                      t("div", { staticClass: "pin pin-4" }, [
                        t("div", { staticClass: "pin-inner grid left" }, [
                          t(
                            "svg",
                            {
                              staticClass: "line-pin",
                              attrs: {
                                viewBox: "0 0 513 114",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                              },
                            },
                            [
                              t("path", {
                                attrs: {
                                  d: "M0.5 113.875V15.0625L22.25 0.25H512.938",
                                  stroke: "#818181",
                                  "stroke-width": "2",
                                },
                              }),
                            ],
                          ),
                          e._v(" "),
                          e._m(3),
                        ]),
                      ]),
                    ],
                  ),
                ]),
              ],
            );
          },
          [
            function () {
              var e = this,
                t = e._self._c;
              return t(
                "div",
                { staticClass: "pin-section-platform pin-section-platform-1" },
                [
                  t("div", { staticClass: "pin pin-0 stack left" }, [
                    t("div", { staticClass: "pin-inner" }, [
                      t(
                        "div",
                        {
                          staticClass: "pin-data label",
                          staticStyle: { visibility: "hidden" },
                        },
                        [e._v("Area")],
                      ),
                      e._v(" "),
                      t("div", { staticClass: "pin-data" }, [
                        t("b", [e._v("Sector 1")]),
                      ]),
                      e._v(" "),
                      t("div", { staticClass: "pin-data label" }, [
                        e._v("Capacity¹"),
                      ]),
                      e._v(" "),
                      t("div", { staticClass: "pin-data" }, [e._v("Moderate")]),
                      e._v(" "),
                      t("div", { staticClass: "pin-data label" }, [
                        e._v("Return Potential¹"),
                      ]),
                      e._v(" "),
                      t("div", { staticClass: "pin-data" }, [e._v("Low")]),
                    ]),
                  ]),
                  e._v(" "),
                  t("div", { staticClass: "pin pin-1 stack left" }, [
                    t("div", { staticClass: "pin-inner" }, [
                      t(
                        "div",
                        {
                          staticClass: "pin-data label",
                          staticStyle: { visibility: "hidden" },
                        },
                        [e._v("Area")],
                      ),
                      e._v(" "),
                      t("div", { staticClass: "pin-data" }, [
                        t("b", [e._v("Sector 3")]),
                      ]),
                      e._v(" "),
                      t("div", { staticClass: "pin-data label" }, [
                        e._v("Capacity¹"),
                      ]),
                      e._v(" "),
                      t("div", { staticClass: "pin-data" }, [e._v("Low")]),
                      e._v(" "),
                      t("div", { staticClass: "pin-data label" }, [
                        e._v("Return Potential¹"),
                      ]),
                      e._v(" "),
                      t("div", { staticClass: "pin-data" }, [e._v("Moderate")]),
                    ]),
                  ]),
                  e._v(" "),
                  t("div", { staticClass: "pin pin-2 stack left" }, [
                    t("div", { staticClass: "pin-inner" }, [
                      t(
                        "div",
                        {
                          staticClass: "pin-data label",
                          staticStyle: { visibility: "hidden" },
                        },
                        [e._v("Area")],
                      ),
                      e._v(" "),
                      t("div", { staticClass: "pin-data" }, [
                        t("b", [e._v("Sector 2")]),
                      ]),
                      e._v(" "),
                      t("div", { staticClass: "pin-data label" }, [
                        e._v("Capacity¹"),
                      ]),
                      e._v(" "),
                      t("div", { staticClass: "pin-data" }, [e._v("High")]),
                      e._v(" "),
                      t("div", { staticClass: "pin-data label" }, [
                        e._v("Return Potential¹"),
                      ]),
                      e._v(" "),
                      t("div", { staticClass: "pin-data" }, [e._v("High")]),
                    ]),
                  ]),
                ],
              );
            },
            function () {
              var e = this,
                t = e._self._c;
              return t("div", { staticClass: "grid-item" }, [
                t("div", { staticClass: "pin-data" }, [t("b", [e._v("25 %")])]),
                e._v(" "),
                t("div", { staticClass: "pin-data label" }, [
                  e._v("Annualized Return"),
                ]),
                e._v(" "),
                t("div", { staticClass: "divider" }),
                e._v(" "),
                t("div", { staticClass: "pin-data" }, [
                  t("b", [e._v("Salt Creek")]),
                ]),
                e._v(" "),
                t("div", { staticClass: "pin-data label" }, [e._v("Location")]),
              ]);
            },
            function () {
              var e = this,
                t = e._self._c;
              return t("div", { staticClass: "grid-item" }, [
                t("div", { staticClass: "pin-data" }, [
                  t("b", [e._v("26 MV")]),
                ]),
                e._v(" "),
                t("div", { staticClass: "pin-data label" }, [
                  e._v("Available Capacity"),
                ]),
                e._v(" "),
                t("div", { staticClass: "divider" }),
                e._v(" "),
                t("div", { staticClass: "pin-data" }, [
                  t("b", [e._v("552 Days")]),
                ]),
                e._v(" "),
                t("div", { staticClass: "pin-data label" }, [
                  e._v("Construction time"),
                ]),
              ]);
            },
            function () {
              var e = this,
                t = e._self._c;
              return t("div", { staticClass: "grid-item" }, [
                t("div", { staticClass: "pin-data" }, [
                  t("b", [e._v("Viwanda Vizuri")]),
                ]),
                e._v(" "),
                t("div", { staticClass: "pin-data label" }, [
                  e._v("Initial Use Case"),
                ]),
              ]);
            },
          ],
          !1,
          null,
          null,
          null,
        );
      t.default = component.exports;
    },
    830: function (e, t, n) {
      "use strict";
      (n.r(t),
        n.d(t, "default", function () {
          return A;
        }));
      var r = n(182),
        o = n(183),
        l = n(476),
        h = n(567),
        c = n.n(h),
        d = n(568),
        m = n.n(d),
        f = n(731),
        v = n.n(f),
        w = n(732),
        y = n.n(w),
        M = n(569),
        x = n.n(M),
        S = n(733),
        P = n.n(S),
        _ = n(734),
        C = n.n(_),
        W = n(735),
        G = n.n(W),
        E = n.p + "3fea17fbdca58782c305ad92d1175c35.glb",
        L = n.p + "238a5f7712e49988a54504d4d0c35c0f.glb",
        I = n.p + "6cd38e8820e166a150d72ee0ed5f10b8.glb",
        k = n.p + "e3bdff1af36b32ac2688ea3279bc67d6.glb",
        A = (function () {
          return Object(o.a)(
            function e(t) {
              var n = this;
              (Object(r.a)(this, e),
                (this.managerTextures = new l.LoadingManager()),
                (this.managerModels = new l.LoadingManager()),
                (this.isMobile = t),
                (this.calcPercentageTextures = 0),
                (this.calcPercentageModels = 0),
                (this.calcPercentage = 0),
                (this.loaded = 0),
                (this.preloadManifest = [
                  { id: "particle", src: c.a },
                  { id: "lines-alphamap", src: m.a },
                  { id: "scan-alphamap", src: v.a },
                  { id: "scan-alphamap-2", src: y.a },
                  { id: "pins-alphamap", src: x.a },
                  { id: "teleport-alphamap-2", src: P.a },
                  { id: "scene-1", src: E },
                  { id: "scene-2", src: L },
                  { id: "scene-3", src: I },
                  { id: "scene-4", src: k },
                ]),
                this.isMobile
                  ? this.preloadManifest.push({ id: "power", src: G.a })
                  : this.preloadManifest.push({ id: "power", src: C.a }),
                (this.managerTextures.onProgress = function (e, t, r) {
                  ((n.calcPercentageTextures = ((t / r) * 100) / 2),
                    (n.calcPercentage = n.roundTwo(
                      n.calcPercentageTextures + n.calcPercentageModels,
                    )),
                    n.onLoadingAssets(n.calcPercentage));
                }),
                (this.managerTextures.onLoad = function () {
                  (n.loaded++, 2 === n.loaded && n.onLoadedAssets());
                }),
                (this.managerModels.onProgress = function (e, t, r) {
                  ((n.calcPercentageModels = ((t / r) * 100) / 2),
                    (n.calcPercentage = n.roundTwo(
                      n.calcPercentageTextures + n.calcPercentageModels,
                    )),
                    n.onLoadingAssets(n.calcPercentage));
                }),
                (this.managerModels.onLoad = function () {
                  (n.loaded++, 2 === n.loaded && n.onLoadedAssets());
                }));
            },
            [
              {
                key: "roundTwo",
                value: function (e) {
                  return Math.floor(100 * e) / 100;
                },
              },
              { key: "onLoadingAssets", value: function (e) {} },
              {
                key: "onLoadedAssets",
                value: function () {
                  this.onLoaded();
                },
              },
            ],
          );
        })();
    },
    874: function (e, t, n) {
      "use strict";
      n(807);
    },
    875: function (e, t, n) {
      var r = n(31)(function (i) {
        return i[1];
      });
      (r.push([
        e.i,
        '@font-face{font-family:"ITC Franklin Gothic Std";font-style:normal;font-weight:400;src:url(/fonts/ITCFranklinGothicStd-Book.woff2) format("woff2")}@font-face{font-family:"ITC Franklin Gothic Std";font-style:normal;font-weight:500;src:url(/fonts/ITCFranklinGothicStd-Med.woff2) format("woff2")}.canvasWrapperPlatform{background-color:#080808;height:100%;opacity:0;overflow:hidden;width:100%}.canvasWrapperPlatform,.canvasWrapperPlatform>canvas,.pin-wrapper-platform{left:0;position:fixed;top:0}.pin-wrapper-platform{display:none;height:100%;overflow:hidden;width:100%}@media(min-width:768px){.pin-wrapper-platform{display:block}}.pin-wrapper-platform .pin-section-platform{height:100%;left:0;opacity:0;position:absolute;top:0;width:100%}.pin-wrapper-platform .pin{align-items:flex-start;flex-direction:column;flex-wrap:nowrap;height:auto;position:absolute;width:auto}.pin-wrapper-platform .pin:first-child .pin-inner{left:0}.pin-wrapper-platform .pin .pin-inner{align-items:flex-start;display:flex;flex-direction:column;flex-wrap:wrap;left:4px;position:relative}.pin-wrapper-platform .pin .pin-inner.grid{flex-direction:row;justify-content:space-between;left:150px;top:-180px;width:200px}.pin-wrapper-platform .pin .pin-inner.grid.left{left:-500px;top:-120px}.pin-wrapper-platform .pin .pin-inner.grid.left .line-pin{left:0;transform:rotateY(180deg)}.pin-wrapper-platform .pin .pin-inner.grid:after{background-color:var(--color-bright-green);content:"";height:2px;left:0;position:absolute;top:-16px;width:100%}.pin-wrapper-platform .pin .pin-inner.grid .line-pin{left:-100%;position:absolute;top:-16px;width:200%}.pin-wrapper-platform .pin .pin-inner.grid .grid-item{width:46%}.pin-wrapper-platform .pin .pin-inner.grid .divider{background-color:#484848;height:1px;margin:12px 0;position:relative;width:100%}.pin-wrapper-platform .pin .pin-inner.grid .pin-data b{font-size:14px!important}.pin-wrapper-platform .pin .pin-inner.grid .pin-data.label{margin:0}.pin-wrapper-platform .pin .pin-data{align-items:center;color:var(--color-off-black);display:flex;font-size:12px!important;padding:0;pointer-events:none;position:relative;z-index:-1}.pin-wrapper-platform .pin .pin-data b{font-size:14px!important;font-size:var(--font-size-label-1);font-weight:500;letter-spacing:var(--letter-spacing-label-1);line-height:var(--line-height-label-1)}@media(min-width:768px){.pin-wrapper-platform .pin .pin-data b{font-size:var(--font-size-label-1-md);letter-spacing:var(--letter-spacing-label-1-md);line-height:var(--line-height-label-1-md)}}@media(min-width:1440px){.pin-wrapper-platform .pin .pin-data b{font-size:var(--font-size-label-1-lg);letter-spacing:var(--letter-spacing-label-1-lg);line-height:var(--line-height-label-1-lg)}}.pin-wrapper-platform .pin .pin-data.label{color:#888;font-size:var(--font-size-body-9);font-weight:400;letter-spacing:var(--letter-spacing-body-9);line-height:var(--line-height-body-9);margin:10px 0 0}@media(min-width:768px){.pin-wrapper-platform .pin .pin-data.label{font-size:var(--font-size-body-9-md);letter-spacing:var(--letter-spacing-body-9-md);line-height:var(--line-height-body-9-md)}}@media(min-width:1440px){.pin-wrapper-platform .pin .pin-data.label{font-size:var(--font-size-body-9-lg);letter-spacing:var(--letter-spacing-body-9-lg);line-height:var(--line-height-body-9-lg)}}',
        "",
      ]),
        (r.locals = {}),
        (e.exports = r));
    },
  },
]);
