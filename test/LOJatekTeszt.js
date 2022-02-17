const { test } = QUnit;

QUnit.module("ellenorzes()", (hook) => {
  hook.before(() => {
    this.lojatek = new LOJatek(0);
  });

  test("Függvény-e?", (assert) => {
    assert.ok(typeof ellenorzes, "Függvény!");
  });

  test("Létezik-e az ellenőrzés metódus?", (assert) => {
    assert.ok(this.lojatek.ellenorzes, "Létezik!");
  });

  test("Minden lámpa lekapcsolva", (assert) => {
    assert.equal(this.allapot == false, false);
  });

  test("Minden lámpa felkapcsolva", (assert) => {
    for (let i = 0; i < 9; i++) {
      assert.ok((lampak[i].allapot = true), true);
    }
  });

  test("Kiinduláskor néhány elem felkapcsolva", (assert) => {
    assert.equal(kezdetiDb, 4, "4 lámpa van felkapcsolva");
  });
});
