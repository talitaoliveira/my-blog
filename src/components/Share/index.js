import React from 'react'

const handleClick = () => {
    if (navigator.share) {
        navigator.share({
          title: 'Talita Oliveira',
          text: 'Blog - Talita Oliveira',
          url: 'https://blog.talitaoliveira.com.br/',
        })
          .then(() => console.log('Successful share'))
          .catch((error) => console.log('Error sharing', error));
      }
  }

const Share = () => (
    <button onClick={handleClick}>Share</button>
)

export default Share;