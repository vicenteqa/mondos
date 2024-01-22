import futmondo from "../pageobjects/futmondo.page";

it("Get Mondos", async function () {
  await futmondo.getMondos(2);
});
