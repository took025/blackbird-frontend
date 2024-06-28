/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            spacing: {
                '5px': '5px',
                '10px': '10px',
                '12px': '12px',
                '15px': '15px',
                '20px': '20px',
                '20px': '20px',
                '24px': '24px',
                '30px': '30px',
                '60px': '60px',
                '75px': '75px',
                '95px': '95px',
                '100px': '100px',
                '160px': '160px',
            },
            // margin: {
            //   '5px': '5px',
            //   '10px': '10px',
            //   '15px': '15px',
            //   '20px': '20px',
            //   '20px': '20px',
            // }
        },
        borderRadius: {
            'rounded-75': '75pxpx',
        }
    },
    plugins: [],
}

