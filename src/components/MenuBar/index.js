import React, {useState, useEffect} from 'react'

import { Home } from 'styled-icons/boxicons-solid/Home'
import { Search } from 'styled-icons/boxicons-regular/Search'
import { UpArrowAlt as UpArrow } from 'styled-icons/boxicons-regular/UpArrowAlt'
import { Bulb } from 'styled-icons/boxicons-solid/Bulb'
import { Grid } from 'styled-icons/boxicons-solid/Grid'
import { ThList as List } from 'styled-icons/typicons/ThList'

import * as S from './styled'

const MenuBar = () => {
    const [theme, setTheme] = useState(null)
    const [display, setDisplay] = useState(null)

    const isdarkMode = theme === 'dark'
    const isListMode = display === 'list'

    useEffect(() => {
        setTheme(window.__theme)
        setDisplay(window.__display)

        window.__onThemeChange = () => setTheme(window.__theme)
        window.__onDisplayChange = () => setDisplay(window.__display)
    }, [])

    return (
        <S.MenuBarWrapper>
            <S.MenuBarGroup>
                <S.MenuBarLink 
                to="/"
                cover
                direction="right"
                duration={.6}
                bg="#16202c" 
                title="Voltar para home">
                    <S.MenuBarItem>
                        <Home />
                    </S.MenuBarItem>
                </S.MenuBarLink>
                <S.MenuBarLink 
                to="/search/"
                cover
                direction="right"
                duration={.6}
                bg="#16202c" 
                title="Pesquisar">
                    <S.MenuBarItem>
                        <Search />
                    </S.MenuBarItem>
                </S.MenuBarLink>
            </S.MenuBarGroup>
            <S.MenuBarGroup>
                <S.MenuBarItem title="Mudar o tema" onClick={() => {
                    window.__setPreferredTheme(isdarkMode ? 'light' : 'dark')
                }}
                className={theme}
                >
                    <Bulb />
                </S.MenuBarItem>
                <S.MenuBarItem className="listMode" title="Mudar visualização" onClick={() => {
                    window.__setPreferredDisplay(isListMode ? 'grid' : 'list')
                }}>
                    { isListMode ? <Grid/> : <List/> }

                </S.MenuBarItem>
                <S.MenuBarItem title="Ir para o topo">
                    <UpArrow />
                </S.MenuBarItem>
            </S.MenuBarGroup>
        </S.MenuBarWrapper>
    )
}



export default MenuBar;