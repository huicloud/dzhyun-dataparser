const td = typeof TextDecoder !== 'undefined' ? new TextDecoder() : undefined;
const isWebWorker = (typeof WorkerGlobalScope !== 'undefined') && (typeof importScripts === 'function');
const MAX_ARGUMENTS_LIMIT = isWebWorker ? (65535 / 2) : 65535;

export function stringToArrayBuffer(str) {
  const strLen = str.length;
  const buf = new ArrayBuffer(strLen * 2); // 2 bytes for each char
  const bufView = new Uint8Array(buf);
  for (let i = 0; i < strLen; i += 1) {
    bufView[i] = str.charCodeAt(i);
  }
  return buf;
}

export function arrayBufferToString(arrayBuffer) {
  if (td) {
    return td.decode(new Uint8Array(arrayBuffer));
  }
  const uint8Array = new Uint8Array(arrayBuffer);
  const length = uint8Array.length;
  if (length > MAX_ARGUMENTS_LIMIT) {
    const results = [];
    let start = 0;
    do {
      const subArray = uint8Array.subarray(start, start += MAX_ARGUMENTS_LIMIT);
      results.push(String.fromCharCode.apply(String, subArray)); // eslint-disable-line
    } while (start < length);

    return decodeURIComponent(escape(results.join('')));
  }
  return decodeURIComponent(escape(String.fromCharCode.apply(String, uint8Array))); // eslint-disable-line
}
