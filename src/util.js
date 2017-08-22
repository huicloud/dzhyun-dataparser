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
  const uint8Array = new Uint8Array(arrayBuffer);
  const length = uint8Array.length;
  if (length > 65535) {
    const results = [];
    let start = 0;
    do {
      const subArray = uint8Array.subarray(start, start += 65535);
      results.push(String.fromCharCode.apply(String, subArray));
    } while (start < length);

    return decodeURIComponent(escape(results.join('')));
  }
  return decodeURIComponent(escape(String.fromCharCode.apply(String, uint8Array)));
}
