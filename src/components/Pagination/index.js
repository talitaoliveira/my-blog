import React from 'react'
import propTypes from 'prop-types'
import { Link } from 'gatsby'

import * as S from './styled'

const Pagination = ({ isFirst, isLast, currentPage, numPages, prevPage, nextPage }) => (
    <S.PaginationWrapper>
        {!isFirst &&
            <Link to={prevPage}>pagina anterior</Link>
        }

        <p>{currentPage} de {numPages}</p>

        {!isLast &&
            <Link to={nextPage}>proxima pagina</Link>
        }
    </S.PaginationWrapper>
)

Pagination.propTypes = {
    isFirst: propTypes.bool.isRequired,
    isLast: propTypes.bool.isRequired,
    currentPage: propTypes.number.isRequired,
    numPages: propTypes.number.isRequired,
    prevPage: propTypes.number.isRequired,
    nextPage: propTypes.number.isRequired,
}

export default Pagination
