module.exports = {
    'subsets': {
        'font-size': [
            '.75rem',
            '.875rem',
            '1rem',
            '1.125rem',
            '1.25rem',
            '1.5rem',
            '1.875rem',
            '2.25rem',
            '3rem',
        ],
        'border-width': [
            '0',
            '1px',
            '2px',
            '3px'
        ],
        'border-color': [
            'transparent',
            '#22292f',
            '#3d4852',
            '#606f7b',
            '#8795a1',
            '#b8c2cc'
        ],
        'border-style': ['solid'],
        '@media': {
            'params': {
                'max-width': ['400px', '768px'],
            },
            'subsets': {
                'font-size': [
                    '1rem',
                    '1.125rem',
                    '1.25rem',
                    '1.5rem',
                    '1.875rem'
                ]
            }
        }
    }
};
