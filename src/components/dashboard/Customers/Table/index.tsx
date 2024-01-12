import styles from './index.module.scss'

// Functions
import { getMockCustomers } from './model/getMockCustomers'

// Components
import { Customer } from './Customer'

export function Table() {
  const customers = getMockCustomers()
  const keys = [
    'Customer Name', 'Company',
    'Phone Number', 'Email',
    'Country', 'Status'
  ]

  const customersList = customers.map(customer => (
    <Customer
      key={customer.id}
      name={customer.name}
      company={customer.company}
      phone={customer.phone}
      email={customer.email}
      country={customer.country}
      status={customer.status}
    />
  ))

  return <div className={styles.table}>
    <div data-customers-table className={styles.heading}>
      {keys.map(elm => (
        <span key={elm}>
          { elm }
        </span>
      ))}
    </div>
    <hr className={styles.hr} />
    <div className={styles.content}>
      { customersList }
    </div>
  </div>
}