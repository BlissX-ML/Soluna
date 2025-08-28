export const RECAP_NAV = [
    {
        title: 'Computer-Related',
        key: 'Computer-Related',
    },
    {
        title: 'Chemistry-Related',
        key: 'Chemistry-Related',
    },
    {
        title: 'Language-Related',
        key: 'Language-Related',
    },
    {
        title: 'Animal-Related',
        key: 'Animal-Related',
    }
];

export const RECAP_MAIN_KEYS = [...RECAP_NAV].map(el => el.key)

export const RECAP_Detailed_Nav = [
    {
        key: 'Computer-Related',
        content: [
            {
                key: 'Computer_1',
                content: 'HTML',
                path: ''
            },
            {
                key: 'Computer_2',
                content: 'CSS',
                path: ''
            },
            {
                key: 'Computer_3',
                content: 'JavaScript',
                path: ''
            },
            {
                key: 'Computer_4',
                content: 'React',
                path: ''
            },
            {
                key: 'Computer_5',
                content: 'Postgraduate Entrance Exam -> 408',
                path: ''
            },
        ]
    },
    {
        key: 'Chemistry-Related',
        content: [
            {
                key: 'Chemistry_1',
                content: '无机化学',
                path: ''
            },
            {
                key: 'Chemistry_2',
                content: '有机化学',
                path: ''
            },
            {
                key: 'Chemistry_3',
                content: '物理化学',
                path: ''
            },
            {
                key: 'Chemistry_4',
                content: '分析化学',
                path: ''
            },
            {
                key: 'Chemistry_5',
                content: 'Gaussain计算',
                path: ''
            }
        ]
    },
    {
        key: 'Language-Related',
        content: [
            {
                key: 'Language_1',
                content: 'English',
                path: ''
            },
            {
                key: 'Language_2',
                content: '日本語',
                path: ''
            },
            {
                key: 'Language_3',
                content: '한국어',
                path: ''
            },
        ]
    },
    {
        key: 'Animal-Related',
        content: [
            {
                key: '',
                content: '',
                path: ''
            },
        ]
    }
]