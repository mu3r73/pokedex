import { dm2m, hg2kg } from '../../src/utils/units'

describe('pruebas en units', () => {

  test('hg2kg() debe retornar 10 para weight 100', () => {
    const weightHg = 100
    const expectedWeightKg = 10
    const weightKg = hg2kg(weightHg)
    expect(weightKg).toBe(expectedWeightKg)
  })

  test('hg2kg() debe retornar 0.1 para weight 1', () => {
    const weightHg = 1
    const expectedWeightKg = .1
    const weightKg = hg2kg(weightHg)
    expect(weightKg).toBe(expectedWeightKg)
  })

  test('dm2m() debe retornar 10 para height 100', () => {
    const heightDm = 100
    const expectedHeightM = 10
    const heightM = dm2m(heightDm)
    expect(heightM).toBe(expectedHeightM)
  })

  test('dm2m() debe retornar 0.1 para height 1', () => {
    const heightDm = 1
    const expectedHeightM = .1
    const heightM = dm2m(heightDm)
    expect(heightM).toBe(expectedHeightM)
  })
})