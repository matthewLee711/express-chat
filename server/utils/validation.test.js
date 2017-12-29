const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {
  it('should reject non-string values', () => {
    var res = isRealString(98);
    expect(res).toBe(false);
  });

  it('should reject non-string values', () => {
    var res = isRealString('    ');
    expect(res).toBe(false);
  });

  it('should reject non-string values', () => {
    var res = isRealString('   Matt   ');
    expect(res).toBe(true);
  });
  
});