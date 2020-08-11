const links = [
    {
        label: 'Twitter',
        url: function (text, url) {
            return `https://twitter.com/intent/tweet?text="${text}" - @liitacherry &url=https://blog.talitaoliveira.com.br${url}`
        }
    },
    {
        label: 'Linkedin',
        url: function (text, url) {
            return `https://www.linkedin.com/sharing/share-offsite/?&url=https://blog.talitaoliveira.com.br${url}`
        }
    },
    {
        label: 'Facebook',
        url: function (text, url) {
            return `http://www.facebook.com/sharer.php?&u=https://blog.talitaoliveira.com.br${url}`
        }
    }
]

export default links