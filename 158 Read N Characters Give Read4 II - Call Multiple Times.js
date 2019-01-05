// The API: int read4(char *buf) reads 4 characters at a time from a file.

// The return value is the actual number of characters read. For example, it returns 3 if there is only 3 characters left in the file.

// By using the read4 API, implement the function int read(char *buf, int n) that reads n characters from the file.

// Note:
// The read function may be called multiple times.

// Hide Company Tags Bloomberg Google Facebook
// Hide Tags String
// Hide Similar Problems (E) Read N Characters Given Read4

/**
 * Definition for read4()
 *
 * @param {character[]} buf Destination buffer
 * @return {number} The number of characters read
 * read4 = function(buf) {
 *     ...
 * };
 */

/**
 * @param {function} read4()
 * @return {function}
 */
var solution = function(read4) {
  let bufRead = [];
  let count = 0; // how many characters read with read4
  let i = 0;

  /**
   * @param {character[]} buf Destination buffer
   * @param {number} n Maximum number of characters to read
   * @return {number} The number of characters read
   */
  return function(buf, n) {
    let numChrRead = 0;

    while (numChrRead < n) {
      if (i === 0) {
        count = read4(bufRead);
      }

      while (i < count && numChrRead < n) {
        buf[numChrRead++] = bufRead[i++];
      }

      // read4 buffer used up, start over
      if (i === count) {
        i = 0;
      }

      // end of file
      if (count < 4) {
        break;
      }
    }

    return numChrRead;
  };
};
