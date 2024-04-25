import futmondo from "../pageobjects/futmondo.page";

it("Get Mondos", async function () {
  // await futmondo.reload()
  await futmondo.getMondos(80);
});


