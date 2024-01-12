import styles from './index.module.scss'

// Types
import type { PropsWithChildren } from "react";

// Components
import Dashboard from '@/components/widgets/Dashboard';

export function DefaultLayout({ children }: PropsWithChildren) {
  return <div className={styles.defaultLayout}>
    <Dashboard className={styles.dashboard} />
    <div className={styles.content}>
      { children }
    </div>
  </div>
}