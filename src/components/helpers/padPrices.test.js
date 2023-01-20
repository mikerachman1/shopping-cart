import padPrices from "./padPrices";

describe('padPrices function', () => {

  describe('works with number inputs', () => {

    it('works with integers', () => {
      expect(padPrices(3)).toBe('3.00');
    });

    it('works with short floats', () => {
      expect(padPrices(3.1)).toBe('3.10');
    });

    it('works with long floats', () => {
      expect(padPrices(3.13333)).toBe('3.13');
    });

    it('returns proper price as string', () => {
      expect(padPrices(3.12)).toBe('3.12');
    });
  });

  describe('works with string inputs', () => {

    it('works with string integer', () => {
      expect(padPrices('3')).toBe('3.00');
    });

    it('works with long price string', () => {
      expect(padPrices('3.111111')).toBe('3.11');
    });

    it('doesnt change properly formatted strings', () => {
      expect(padPrices('3.11')).toBe('3.11');
    });
  });
});