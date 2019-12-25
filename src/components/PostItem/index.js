import React from 'react'

import * as S from './styled'

const PostItem = () => (
    <S.PostItemLink to="/slug/">
        <S.PostItemWrapper>
            <S.PostItemTag background="#47650b">
                Misc
            </S.PostItemTag>
            <S.PostItemInfo>
                <S.PostItemDate>25 de Dezembro de 2019 -  4 min de Leitura</S.PostItemDate>
                <S.PostItemTitle>Bem vindo ao meu blog</S.PostItemTitle>
                <S.PostItemDescription>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim ut ea officia consequuntur earum ipsam vel quam ratione consequatur blanditiis iure aut pariatur cupiditate sunt doloremque porro nostrum, harum labore.
                </S.PostItemDescription>
            </S.PostItemInfo>
        </S.PostItemWrapper>
    </S.PostItemLink>
)

export default PostItem