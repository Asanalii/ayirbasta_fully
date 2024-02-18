import React from 'react'
import ReactPaginate from 'react-paginate';

import styles from './Pagination.module.scss'

const Pagination = ({currentPage,onChangePage}) => {


  return (
    <div>

    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=" >"
      onPageChange={page => onChangePage(page.selected+1)}
      pageRangeDisplayed={4}
      pageCount={3}
      previousLabel="<"
      renderOnZeroPageCount={null}
      forcePage={currentPage-1}
      />

      </div>
  )
}

export default Pagination