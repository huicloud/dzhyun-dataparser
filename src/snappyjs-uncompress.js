import { SnappyDecompressor } from 'snappyjs/snappy_decompressor';

export default function uncompress(compressed) {
  if (!(compressed instanceof ArrayBuffer)) {
    throw new TypeError('Argument compressed must be type of ArrayBuffer');
  }

  const decompressor = new SnappyDecompressor(new Uint8Array(compressed));
  const length = decompressor.readUncompressedLength();
  if (length === -1) {
    throw new Error('Invalid Snappy bitstream');
  }
  const uncompressed = new ArrayBuffer(length);
  const uncompressedView = new Uint8Array(uncompressed);
  if (!decompressor.uncompressToBuffer(uncompressedView)) {
    throw new Error('Invalid Snappy bitstream');
  }
  return uncompressed;
}
