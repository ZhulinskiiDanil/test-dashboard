import styles from './index.module.scss'
import clsx from 'clsx'

// Components
import { Heading } from './Heading'
import { Footer } from './Footer'
import { Table } from './Table'

export function Customers({
  className, ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={clsx([
    styles.customers, className
  ])} {...props}>
    <Heading />
    <Table />
    <Footer />
  </div>
}