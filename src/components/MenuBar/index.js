import React, {useState, useEffect} from 'react'

import { Home } from 'styled-icons/boxicons-solid/Home'
import { Bulb } from 'styled-icons/boxicons-solid/Bulb'

import getThemeColor from '../../utils/getThemeColor'

import * as S from './styled'

const MenuBar = () => {
    const [theme, setTheme] = useState(null)

    const isdarkMode = theme === 'dark'

    useEffect(() => {
        setTheme(window.__theme)

        window.__onThemeChange = () => setTheme(window.__theme)
    }, [])

    return (
        <S.MenuBarWrapper>
            <S.MenuBarGroup>
                <S.MenuBarLink 
                to="/"
                cover
                direction="right"
                duration={.6}
                bg={getThemeColor()} 
                title="Voltar para home">
                    <S.MenuBarItem>
                        <Home />
                    </S.MenuBarItem>
                </S.MenuBarLink>
                <S.MenuBarItem title="Mudar o tema" onClick={() => {
                    window.__setPreferredTheme(isdarkMode ? 'light' : 'dark')
                }}
                className={theme}
                >
                    <Bulb />
                </S.MenuBarItem>
            </S.MenuBarGroup>
            <S.MenuBarGroup>
            </S.MenuBarGroup>
        </S.MenuBarWrapper>
    )
}



export default MenuBar;