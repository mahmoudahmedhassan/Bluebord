
import React from 'react';
import classes from './Pagination.module.css'

export const TablePagination = ({ gotoPage, previousPage, nextPage, canPreviousPage, pageIndex, pageOptions, canNextPage, pageCount,loading }) => {
    return (
        <div className={loading ? `${classes.hide}` : `${classes.pagination}`}>
            <div className={classes.pagination_section_2}>
                <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                    {'<<'}
                </button>{' '}
                <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                    {'<'}
                </button>
                <span >
                    Page{' '}
                    <strong>
                        {pageIndex + 1} of {pageOptions.length}
                    </strong>{' '}
                </span>
                <button onClick={() => nextPage()} disabled={!canNextPage}>
                    {'>'}
                </button>{' '}
                <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                    {'>>'}
                </button>{' '}
            </div>
        </div>
    )
}

export const SearchPagination = ({ pageIndex, gotoPage, setPageSize, pageSize,loading }) => {
    return (
        <div className={loading ? `${classes.hide}` : `${classes.pagination}`}>
            <div className={classes.pagination_section_1}>
                <input
                    type="number"
                    min="1"
                    defaultValue={pageIndex + 1}
                    onChange={e => {
                        const page = e.target.value ? Number(e.target.value) - 1 : 0
                        gotoPage(page)
                    }}
                />
                <select
                    value={pageSize}
                    onChange={e => {
                        setPageSize(Number(e.target.value))
                    }}
                >
                    {[10, 20, 30, 40, 50].map(pageSize => (
                        <option key={pageSize} value={pageSize}>
                            Show {pageSize}
                        </option>
                    ))}
                </select>
            </div>
        </div>

    )
}