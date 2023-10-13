const config = {
    content : [ "./src/**/*.{html,js,svelte,ts}" ],

    theme : {
        extend : {},
    },

    plugins : [
        require("@tailwindcss/typography"),
        require("daisyui"),
    ],

    daisyui : {
        themes : [
            "emerald",
            {
                streamlink : {
        
                    primary : "#F3F46F",
          
                    secondary : "#090D15",
          
                    accent : "#EA5234",
          
                    neutral : "#313846",
          
                    "base-100" : "#FFFFFF",
          
                    info : "#020116",
          
                    success : "#36D399",
          
                    warning : "#FBBD23",
          
                    error : "#F87272",
                },
            },
        ],
    },
};

module.exports = config;
