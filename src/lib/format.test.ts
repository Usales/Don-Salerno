import { brl } from './format'

describe('brl', () => {
  it('formata número em Real brasileiro', () => {
    expect(brl(8)).toMatch(/R\$\s*8,00/)
    expect(brl(42.5)).toMatch(/42,50/)
  })

  it('retorna traço para valor inválido', () => {
    expect(brl(Number.NaN)).toBe('—')
    expect(brl('x' as unknown as number)).toBe('—')
  })
})
