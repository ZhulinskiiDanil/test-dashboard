import styles from './index.module.scss'

// Components
import { Customers } from "@/components/dashboard/Customers";
import { DefaultLayout } from "@/components/layouts/Default";

export default function App() {
  return <DefaultLayout>
    <h2 className={styles.title}>Hello Evano 👋🏼</h2>
    <Customers className={styles.content} />
  </DefaultLayout>
}