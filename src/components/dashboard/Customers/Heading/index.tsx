import styles from './index.module.scss'

// Components
import { HeadingSearch } from './Search'

export function Heading() {
  return <div className={styles.heading}>
    <h2 className={styles.title}>
      All Customers
      <span>
        Active Members
      </span>
    </h2>
    <HeadingSearch />
  </div>
}