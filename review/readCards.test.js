import readCards from "./readCards.js";

describe('read cards, given correct input', () => {
  it('Straight', () => {
    expect(readCards(['K', '10', 'J', 'Q', 'A'])).toBe("Straight")
  })

  it('Straight', () => {
    expect(readCards(['A', '2', '3', '4', '5'])).toBe("Straight")
  })

  it('Straight', () => {
    expect(readCards(['2', '3', '4', '5', '6'])).toBe("Straight")
  })

  it('Impossible, given letter', () => {
    expect(readCards(['K', 'K', 'K', 'K', 'K'])).toBe("Impossible")
  })

  it('Impossible, given number', () => {
    expect(readCards(['10', '10', '10', '10', '10'])).toBe("Impossible")
  })

  it('Four of A Kind', () => {
    expect(readCards(['10', '10', '10', '10', 'A'])).toBe("Four of a Kind")
  })

  it('Four of A Kind', () => {
    expect(readCards(['J', 'K', 'J', 'J', 'J'])).toBe("Four of a Kind")
  })

  it('Three of A Kind', () => {
    expect(readCards(['A', 'K', 'J', 'J', 'J'])).toBe("Three of a Kind")
  })

  it('Three of A Kind', () => {
    expect(readCards(['10', 'J', '7', 'J', 'J'])).toBe("Three of a Kind")
  })

  it('Three of A Kind', () => {
    expect(readCards(['A', 'K', 'J', 'J', 'J'])).toBe("Three of a Kind")
  })

  it('Full House', () => {
    expect(readCards(['7', 'J', '7', 'J', 'J'])).toBe("Full House")
  })

  it('Full House', () => {
    expect(readCards(['A', 'K', 'A', 'K', 'A'])).toBe("Full House")
  })

  it('Two Pairs', () => {
    expect(readCards(['7', 'J', '7', 'A', 'J'])).toBe("Two Pairs")
  })

  it('Two Pairs', () => {
    expect(readCards(['A', 'K', 'A', '5', '5'])).toBe("Two Pairs")
  })

  
  it('One Pair', () => {
    expect(readCards(['7', 'J', '7', '8', '4'])).toBe("One Pair")
  })

  it('One Pair', () => {
    expect(readCards(['J', 'K', 'A', '5', 'J'])).toBe("One Pair")
  })

  it('Nothing', () => {
    expect(readCards(['J', 'K', 'A', '5', '3'])).toBe("Nothing")
  })

  it('Nothing', () => {
    expect(readCards(['A', 'Q', '3', 'J', '10'])).toBe("    :::::
    :///::
   :///:X:
  :///:XX:
 :::::XXX:
 :   :XX:
 :   :X:
 :   ::
 :::::")
  })
})