import clsx from 'clsx'
import styles from './index.module.scss'

// Components

export function PagesSwitcher() {
  return <div className={styles.switcher}>
    <button className={styles.button}>
      &lt;
    </button>
    <button className={clsx([
      styles.button, styles.active
    ])}>
      1
    </button>
    <button className={styles.button}>
      2
    </button>
    <button className={styles.button}>
      3
    </button>
    <button className={styles.button}>
      4
    </button>
    <button className={clsx([
      styles.button, styles.dots
    ])}>
      ...
    </button>
    <button className={styles.button}>
      40
    </button>
    <button className={styles.button}>
      &gt;
    </button>
  </div>
}