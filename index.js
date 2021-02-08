function halleySolution(x, w0) {
  let w = w0;
  for (let i = 0; i < 100; i++) {
    const e = Math.exp(w);
    const p = w + 1.0;

    let t = w * e - x;
    if (w > 0) {
      t = (t / p) / e;
    } else {
      t /= e * p - 0.5 * (p + 1.0) * t / p;
    }

    w -= t;

    const tol = Number.EPSILON * Math.max(Math.abs(w), 1.0 / (Math.abs(p) * e));
    if (Math.abs(t) < tol) {
      return w;
    }
  }
  return w;
}

function seriesSolution(r) {
  const c = [
    -1.0,
    2.331643981597124203363536062168,
    -1.812187885639363490240191647568,
    1.936631114492359755363277457668,
    -2.353551201881614516821543561516,
    3.066858901050631912893148922704,
    -4.175335600258177138854984177460,
    5.858023729874774148815053846119,
    -8.401032217523977370984161688514,
    12.250753501314460424,
    -18.100697012472442755,
    27.029044799010561650];

  const t8 = c[8] + r * (c[9] + r * (c[10] + r * c[11]));
  const t5 = c[5] + r * (c[6] + r * (c[7] + r * t8));
  const t1 = c[1] + r * (c[2] + r * (c[3] + r * (c[4] + r * t5)));
  return c[0] + r * t1;
}

function lambertW0(x) {
  const q = x + 1.0 / Math.E;

  if (x === 0.0) {
    return 0.0;
  } else if (q < 0.0) {
    return NaN;
  } else if (q === 0.0) {
    return -1.0;
  } else if (q < 1.0e-3) {
    return seriesSolution(Math.sqrt(q));
  } else {
    let w0;
    if (x < 1.0) {
      const p = Math.sqrt(2.0 * Math.E * q);
      w0 = -1.0 + p * (1.0 + p * (-1.0 / 3.0 + p * 11.0 / 72.0));
    } else {
      w0 = Math.log(x);
      if (x > 3.0) w0 -= Math.log(w0);
    }

    return halleySolution(x, w0);
  }
}

if (typeof module !== 'undefined') {
  module.exports = {
    lambertW0,
    halleySolution,
    seriesSolution,
  }
}