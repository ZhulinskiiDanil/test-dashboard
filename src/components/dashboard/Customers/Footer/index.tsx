import styles from './index.module.scss'

// Components
import { PagesSwitcher } from './PagesSwitcher'

export function Footer() {
  return <div className={styles.footer}>
    <h3 className={styles.showing}>
      Showing data 1 to 8 of 256K entries
    </h3>
    <PagesSwitcher />
  </div>
}