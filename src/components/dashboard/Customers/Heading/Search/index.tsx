import styles from './index.module.scss'

// Components
import { SVGSearch } from '@/components/svg'

export function HeadingSearch() {
  return <label className={styles.search}>
    <SVGSearch className={styles.icon} />
    <input placeholder='Search' type="text" />
  </label>
}