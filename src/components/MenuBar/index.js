import React from 'react'

import { Home } from 'styled-icons/boxicons-solid/Home'
import { Search } from 'styled-icons/boxicons-regular/Search'
import { UpArrowAlt as UpArrow } from 'styled-icons/boxicons-regular/UpArrowAlt'
import { Bulb } from 'styled-icons/boxicons-solid/Bulb'
import { Grid } from 'styled-icons/boxicons-solid/Grid'

import * as S from './styled'

const MenuBar = () => (
    <S.MenuBarWrapper>
        <S.MenuBarGroup>
            <S.MenuBarLink to="/" title="Voltar para home">
                <S.MenuBarItem>
                    <Home />
                </S.MenuBarItem>
            </S.MenuBarLink>
            <S.MenuBarLink to="/search/" title="Pesquisar">
                <S.MenuBarItem>
                    <Search />
                </S.MenuBarItem>
            </S.MenuBarLink>
        </S.MenuBarGroup>
        <S.MenuBarGroup>
            <S.MenuBarItem title="Mudar o tema">
                <Bulb />
            </S.MenuBarItem>
            <S.MenuBarItem title="Mudar visualização">
                <Grid />
            </S.MenuBarItem>
            <S.MenuBarItem title="Ir para o topo">
                <UpArrow />
            </S.MenuBarItem>
        </S.MenuBarGroup>
    </S.MenuBarWrapper>
)

export default MenuBar;