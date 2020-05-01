const decompress = require('decompress');
const performance = require('perf_hooks').performance;

async function measureDecompress(file) {
  const t0 = performance.now();
  decompress(`../${file}`, 'dist').then(() => {
    const t1 = performance.now();
    console.log(`Decompressing ${file} took ${t1 - t0} milliseconds.`);
  });
}

(async () => {
  await measureDecompress("100_files.zip");
  await measureDecompress("1k_files.zip");
  await measureDecompress("5k_files.zip");
  await measureDecompress("10k_files.zip");
})();
