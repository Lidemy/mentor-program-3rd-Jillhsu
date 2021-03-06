const times = require('./challenge');

describe('challenge', () => {
  it('should return correct answer when a=11 and b=22', () => {
    expect(times('11', '22')).toBe('242');
  });
  it('should return correct answer when a=273487034 and b=274358', () => {
    expect(times('273487034', '274358')).toBe('75033355674172');
  });
  it('should return correct answer when a=99999999 and b=9999999', () => {
    expect(times('99999999', '9999999')).toBe('999999890000001');
  });
  it('should return correct answer when a=4278495702839457 and b=1', () => {
    expect(times('4278495702839457', '1')).toBe('4278495702839457');
  });
  it('should return correct answer when a=1 and b=1', () => {
    expect(times('12312383813881381381', '129018313819319831')).toBe('1588522998763262033482659100127466611');
  });
  it('should return correct answer when a=2 and b=1', () => {
    expect(times('3092384098435095803945802943', '90385098234905890324859')).toBe('279505440517117020748362778586424553864063868260037');
  });
  it('should return correct answer when a=0 and b=10000', () => {
    expect(times('0', '10000')).toBe('0');
  });
  it('should return correct answer when a=10000 and b=0', () => {
    expect(times('10000', '0')).toBe('0');
  });
});
