export const ruMenu = [
    {
        text: 'Компоненты',
        collapsed: false,
        items: [
            { text: 'ABTest', link: '/components/abtest' },
            { text: 'AjaxForm', link: '/components/ajaxform' },
            {
                text: 'AjaxFormItLogin',
                collapsed: true,
                items: [
                    {
                        text: 'Общие сведения',
                        link: '/components/ajaxformItlogin/general-information/index',
                        collapsed: true,
                        items: [
                            { text: 'Системные настройки', link: '/components/ajaxformItlogin/general-information/system-settings' },
                            { text: 'Скрипты и Стили', link: '/components/ajaxformItlogin/general-information/scripts-and-styles' },
                            { text: 'Системные события', link: '/components/ajaxformItlogin/general-information/system-events' },
                        ],
                    },
                    {
                        text: 'Сниппеты',
                        collapsed: true,
                        items: [
                            { text: 'aflActivateUser', link: '/components/ajaxformItlogin/snippets/ajaxformitlogin' },
                            { text: 'AjaxFormitLogin', link: '/components/ajaxformItlogin/snippets/aflactivateuser' },
                            { text: 'Кастомные сниппеты', link: '/components/ajaxformItlogin/snippets/custom-snippets' },
                        ],
                    },
                    {
                        text: 'Хуки',
                        collapsed: true,
                        items: [
                            { text: 'AjaxIdentification', link: '/components/ajaxformItlogin/hooks/ajaxidentification' },
                        ],
                    },
                    {
                        text: 'Валидаторы',
                        collapsed: true,
                        items: [
                            { text: 'aflCheckPassLength', link: '/components/ajaxformItlogin/validators/aflcheckpasslength' },
                            { text: 'aflPasswordConfirm', link: '/components/ajaxformItlogin/validators/aflpasswordconfirm' },
                            { text: 'aflRequiredIf', link: '/components/ajaxformItlogin/validators/aflrequiredif' },
                            { text: 'aflUserExists', link: '/components/ajaxformItlogin/validators/afluserexists' },
                            { text: 'aflUserNotExists', link: '/components/ajaxformItlogin/validators/aflusernotexists' },
                        ],
                    },
                ],
            },
        ],
    },
]