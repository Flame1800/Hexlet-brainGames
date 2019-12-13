
module.exports = {
    presets: [
        ['@babel/preset-env',
            {
                targets: {
                    node: 'current',
                },
            },
        ],
        ['@babel/preset-stage-0',
            {
                targets: {
                    node: 'current',
                },
            },
        ],
    ],
    plugins: [
        [
            '@babel/plugin-proposal-pipeline-operator',
            {
                proposal: 'minimal',
            },
        ],
    ],
};