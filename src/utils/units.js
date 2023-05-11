/**
 * convierte de hectogramos a kilogramos
 * @param {number} weight peso en hg
 * @returns peso en kg
 */
const hg2kg = (weight) => {
  return weight * 0.1
}

/**
 * convierte de decímetros a metros
 * @param {number} height altura en dm
 * @returns altura en m
 */
const dm2m = (height) => {
  return height * 0.1
}

export {
  hg2kg, dm2m
}