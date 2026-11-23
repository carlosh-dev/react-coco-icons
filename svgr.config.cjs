const path = require('path')

/** @type {import('@svgr/core').Config} */
module.exports = {
  typescript: true,
  icon: true,
  titleProp: true,
  ref: true,
  // svgo normalizes "black" to "#000"; Diamond.svg uses #181818. White clipPath fills stay as-is.
  replaceAttrValues: { '#000': 'currentColor', '#181818': 'currentColor' },
  indexTemplate: (files) =>
    files
      .map(({ path: p }) => {
        const name = path.basename(p, path.extname(p))
        return `export { default as ${name}Icon } from './${name}'`
      })
      .join('\n'),
}
