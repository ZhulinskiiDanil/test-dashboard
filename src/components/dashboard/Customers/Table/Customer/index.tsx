import clsx from 'clsx'
import styles from './index.module.scss'

// Types
import { CustomerStatus } from './types'

type CustomerProps = {
  name: string
  company: string
  phone: string
  email: string
  country: string
  status: CustomerStatus
}

export function Customer({
  name, company, phone, email, country, status
}: CustomerProps) {
  const statuses = {
    [CustomerStatus.ACTIVE]: {
      title: 'Active',
      className: 'active'
    },
    [CustomerStatus.INACTIVE]: {
      title: 'Inactive',
      className: 'inactive'
    }
  }
  const currStatus = statuses[status] || statuses[CustomerStatus.INACTIVE]

  return <div data-customers-table className={styles.customer}>
    <div className={styles.cell}>
      { name }
    </div>
    <div className={styles.cell}>
      { company }
    </div>
    <div className={styles.cell}>
      { phone }
    </div>
    <div className={styles.cell}>
      { email }
    </div>
    <div className={styles.cell}>
      { country }
    </div>
    <div className={styles.cell}>
      <div className={clsx([
        styles.status, styles[currStatus.className]
      ])}>
        { currStatus.title }
      </div>
    </div>
  </div>
}