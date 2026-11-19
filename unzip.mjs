import path from 'node:path';
import extract from 'extract-zip';

async function unzipFile() {
  const source = path.resolve('./vault-game-node-deployable-wasmer-fixed.zip');
  const target = path.resolve('./target-folder'); // Converts to an absolute path

  await extract(source, { dir: target });
}

unzipFile();
