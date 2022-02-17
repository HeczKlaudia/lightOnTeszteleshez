const { test } = QUnit;

QUnit.module("szomszedokValtoztatasa()", (hook) => {
  hook.before(() => {
    this.lojatek = new LOJatek(0);
  });

  test("Létezik-e a szomszedokValtoztatasa metódus?", (assert) => {
    assert.ok(this.lojatek.szomszedokValtoztatasa, "Létezik!");
  });

  test("Függvény-e?", (assert) => {
    assert.ok(typeof szomszedokValtoztatasa, "Függvény!");
  });

  /* test("elemek felkapcsolva", (assert) => {
    for (let i = 0; i < 9; i++) {
      lampak[i].elem.click();
      if (i == 5) {
        assert.equal(lampak[i].dataId, 5, "középső elem felkapcsolva");
      } else if (i == 1) {
        assert.equal(lampak[i].dataId, 1, "bal felső elem felkapcsolva");
      }
    }
  }); */
});
