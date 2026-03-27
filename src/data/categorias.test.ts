import { categoriasOrdenadas, rotulosCategoria } from './categorias'

describe('categorias', () => {
  it('mantém ordem fixa massas → molhos → recheios', () => {
    expect(categoriasOrdenadas).toEqual(['massas', 'molhos', 'recheios'])
  })

  it('expõe rótulos em português', () => {
    expect(rotulosCategoria.massas).toBe('Massas')
    expect(rotulosCategoria.molhos).toBe('Molhos')
    expect(rotulosCategoria.recheios).toBe('Recheios')
  })
})
