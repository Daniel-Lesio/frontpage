const purgecss = require('@fullhuman/postcss-purgecss');



module.exports ={
    
    plugins : [
        require("tailwindcss"),
        //  purgecss({
        //      content : ['./src/index.html' , './src/components/Gallery.vue']
        //  }),
         require('cssnano')({}),
        require("autoprefixer")({grid : true})
    ]
}
// const ENV = process.env.NODE_ENV;
// const purgecss = require('@fullhuman/postcss-purgecss');

// module.exports = {
//     plugins: [
//         require('tailwindcss'),
//          purgecss({
//              content: ['./src/index.html','./src/partials/navigation.html']
//          }),
//         //  require('cssnano')({}),
//         //  require("autoprefixer")()
//     ]
// };