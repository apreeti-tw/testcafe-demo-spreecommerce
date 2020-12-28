const createTestCafe = require('testcafe');

let testcafe;

createTestCafe('localhost').then((tc)=>{
  testcafe = tc;

  return testcafe.createRunner()
      .src('./tests')
      .browsers('chrome:headless')
      .screenshots('./artifacts/screenshots', true)
      .run({
        skipJsErrors: true,
      });
}).then((failedCount) => {
  testcafe.close();
  setTimeout(()=>{
    if (failedCount > 0) {
      console.log(`Tests failed: ${failedCount}`);
      process.exit(1);
    }
    process.exit(0);
  }, 3000);
}).catch((error)=>{
  console.log(`Error executing Testcafe tests - ${error.toString()}`);
  process.exit(1);
});
