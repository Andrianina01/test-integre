const plugin = require('tailwindcss/plugin')

module.exports = {
    // ...
    plugins: [
        plugin(function({ addVariant }) {
            addVariant('third', '&:nth-child(3)')
        })
    ]
}