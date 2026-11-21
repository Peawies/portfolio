(function () {
  'use strict';
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Gallery (reads js/works.js) ---------- */
  var grid = document.getElementById('grid'), chips = document.getElementById('chips'), dlg = document.getElementById('dlg');
  function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }

function openWork(w) {
  var di = document.getElementById('di'), dl = document.getElementById('dl');
  di.src = w.image; di.alt = w.title;
  document.getElementById('dt').textContent = w.title;
  document.getElementById('dd').innerHTML = w.description || '';
  document.getElementById('dtool').textContent = [].concat(w.category).join(' · ') + (w.tools ? ' · Made with ' + w.tools : '');
  dl.hidden = false;
  dl.style.display = w.video ? 'inline-block' : 'none';
  if (w.video) dl.href = w.video;
  dlg.showModal();
}

  if (!WORKS.length) grid.appendChild(el('p', 'tools', 'Add your first work in js/works.js.'));
  WORKS.forEach(function (w) {
    var cats = [].concat(w.category); var b = el('button', 'tile'); b.type = 'button'; b.dataset.c = cats.join('|');
    if (w.big) b.classList.add('big');
    var box = el('div', 'imgbox'), im = new Image();
    im.src = w.image; im.alt = 'Render of ' + w.title; im.loading = 'lazy'; im.style.objectFit = w.fit || 'cover';
    box.appendChild(im);
    var cap = el('div', 'cap'); cap.appendChild(el('b', '', w.title)); cap.appendChild(el('span', '', [].concat(w.category).join(' · ')));
    b.appendChild(box); b.appendChild(cap);
    b.onclick = function () { openWork(w); };
    grid.appendChild(b);
  });

  ['All'].concat(CATEGORIES).forEach(function (c, i) {
    var b = el('button', 'chip', c); b.type = 'button'; b.setAttribute('aria-pressed', i === 0);
    b.onclick = function () {
      chips.querySelectorAll('.chip').forEach(function (x) { x.setAttribute('aria-pressed', x === b); });
      grid.querySelectorAll('.tile').forEach(function (t) { t.hidden = !(c === 'All' || t.dataset.c.split('|').indexOf(c) > -1); });
    };
    chips.appendChild(b);
  });

  document.getElementById('close').onclick = function () { dlg.close(); };
  dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); });

  /* ---------- Hero: your Blockbench model (reads js/model-data.js) ---------- */
  try {
    var cv = document.getElementById('hero');
    var rd = new THREE.WebGLRenderer({ canvas: cv, antialias: true, alpha: true });
    rd.outputEncoding = THREE.sRGBEncoding;
    rd.setPixelRatio(Math.min(devicePixelRatio, 2));
    var sc = new THREE.Scene();

    /* Lighting: tweak these to change the shading. Each face gets lighter or darker
       depending on how it points at the lights, so the model reads as solid. */
    sc.add(new THREE.AmbientLight(0xffffff, 0.3));                              // base light everywhere
    sc.add(new THREE.HemisphereLight(0xdfe6ff, 0x3a3a46, 0.35));                // sky above, dark floor below
    var key = new THREE.DirectionalLight(0xffffff, 1.0); key.position.set(-6, 10, 8); sc.add(key);   // main light
    var rim = new THREE.DirectionalLight(0x9fb0ff, 0.35); rim.position.set(7, 3, -8); sc.add(rim);   // soft edge light

    var cam = new THREE.PerspectiveCamera(35, 1, 0.1, 500);
    var pivot = new THREE.Group(); sc.add(pivot);
    var rad = Math.PI / 180, RW = MODEL.res[0], RH = MODEL.res[1];
    var FA = { n: [[1,1,0],[0,1,0],[0,0,0],[1,0,0]], s: [[0,1,1],[1,1,1],[1,0,1],[0,0,1]],
               e: [[1,1,1],[1,1,0],[1,0,0],[1,0,1]], w: [[0,1,0],[0,1,1],[0,0,1],[0,0,0]],
               u: [[0,1,0],[1,1,0],[1,1,1],[0,1,1]], d: [[0,0,1],[1,0,1],[1,0,0],[0,0,0]] };

    var tex = new THREE.TextureLoader().load(TEX);
    tex.magFilter = tex.minFilter = THREE.NearestFilter; tex.generateMipmaps = false; tex.encoding = THREE.sRGBEncoding;
    var mat = new THREE.MeshLambertMaterial({ map: tex, alphaTest: 0.5, side: THREE.DoubleSide });

    function cube(n, po) {
      var i = n.i || 0, f = n.f.map(function (v) { return v - i; }), t = n.t.map(function (v) { return v + i; }), o = n.o;
      var P = [], U = [], X = [];
      Object.keys(n.u).forEach(function (k) {
        var uv = n.u[k], b = P.length / 3;
        FA[k].forEach(function (c, j) {
          P.push((c[0] ? t[0] : f[0]) - o[0], (c[1] ? t[1] : f[1]) - o[1], (c[2] ? t[2] : f[2]) - o[2]);
          U.push((j === 0 || j === 3 ? uv[0] : uv[2]) / RW, 1 - (j < 2 ? uv[1] : uv[3]) / RH);
        });
        X.push(b, b + 3, b + 2, b, b + 2, b + 1);
      });
      var g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.Float32BufferAttribute(P, 3));
      g.setAttribute('uv', new THREE.Float32BufferAttribute(U, 2));
      g.setIndex(X); g.computeVertexNormals();
      var m = new THREE.Mesh(g, mat);
      m.position.set(o[0] - po[0], o[1] - po[1], o[2] - po[2]);
      if (n.r) m.rotation.set(n.r[0] * rad, n.r[1] * rad, n.r[2] * rad, 'ZYX');
      return m;
    }
    function build(n, po) {
      if (!n.c) return cube(n, po);
      var g = new THREE.Group();
      g.position.set(n.o[0] - po[0], n.o[1] - po[1], n.o[2] - po[2]);
      if (n.r) g.rotation.set(n.r[0] * rad, n.r[1] * rad, n.r[2] * rad, 'ZYX');
      n.c.forEach(function (c) { g.add(build(c, n.o)); });
      return g;
    }

    var model = build(MODEL.tree, [0, 0, 0]);
    var box = new THREE.Box3().setFromObject(model), ctr = box.getCenter(new THREE.Vector3());
    model.position.sub(ctr); pivot.add(model);
    var span = Math.max(box.max.y - box.min.y, box.max.x - box.min.x);
    var dist = span / 2 / Math.tan(17.5 * rad) * 1.4;
    cam.position.set(0, dist * 0.2, dist * 0.98); cam.lookAt(0, 0, 0);

    /* Soft shadow on the "floor" under the model (stays still while the model turns) */
    var sh = document.createElement('canvas'); sh.width = sh.height = 128;
    var sx = sh.getContext('2d'), gr = sx.createRadialGradient(64, 64, 0, 64, 64, 64);
    gr.addColorStop(0, 'rgba(0,0,0,.7)'); gr.addColorStop(1, 'rgba(0,0,0,0)');
    sx.fillStyle = gr; sx.fillRect(0, 0, 128, 128);
    var shadow = new THREE.Mesh(new THREE.PlaneGeometry(span * 1, span * 0.85),
      new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(sh), transparent: true, depthWrite: false }));
    shadow.rotation.x = -Math.PI / 2; shadow.position.y = box.min.y - ctr.y - 0.1; sc.add(shadow);

    function fit() { var w = cv.clientWidth, h = cv.clientHeight; rd.setSize(w, h, false); cam.aspect = w / h; cam.updateProjectionMatrix(); }
    fit(); new ResizeObserver(fit).observe(cv);

    var tx = 0.05, ty = Math.PI - 0.6, drag = false, lx = 0, ly = 0;
    cv.addEventListener('pointerdown', function (e) { drag = true; lx = e.clientX; ly = e.clientY; cv.setPointerCapture(e.pointerId); cv.style.cursor = 'grabbing'; });
    cv.addEventListener('pointermove', function (e) {
      if (!drag) return;
      ty += (e.clientX - lx) * 0.01; tx = Math.max(-0.9, Math.min(0.9, tx + (e.clientY - ly) * 0.01));
      lx = e.clientX; ly = e.clientY;
    });
    function up() { drag = false; cv.style.cursor = 'grab'; }
    cv.addEventListener('pointerup', up); cv.addEventListener('pointercancel', up);
    pivot.rotation.set(tx, ty, 0);
    (function loop() {
      if (!drag && !reduce) ty += 0.0025;
      pivot.rotation.y += (ty - pivot.rotation.y) * 0.12; pivot.rotation.x += (tx - pivot.rotation.x) * 0.12;
      rd.render(sc, cam); requestAnimationFrame(loop);
    })();
  } catch (e) { document.querySelector('.stage').style.display = 'none'; }
})();
