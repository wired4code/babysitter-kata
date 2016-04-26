describe('roundUp', function () {
  it('should have a function `roundUp`', function () {
    expect(roundUp).to.be.a('function');
  });
  it('should return a string as a number', function () {
    expect(roundUp('3:00')).to.eql(3);
  });

  it('should round up the hour to the next', function () {
    expect(roundUp('3:05')).to.eql(4);
  });
});
