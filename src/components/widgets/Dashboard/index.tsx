import styles from './index.module.scss'
import clsx from 'clsx'

// Components
import {
  SVGChevronRight,
  SVGCustomers,
  SVGDashboard,
  SVGHelp,
  SVGIncome,
  SVGProduct,
  SVGPromote,
  SVGSetting
} from '@/components/svg'
import { Link } from 'react-router-dom'

type NavLink = {
  icon: JSX.Element
  linkName: string
  href: string
}

export default function Dashboard({
  className, ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const links: NavLink[] = [
    { icon: <SVGDashboard />, linkName: 'Dashboard', href: '/' },
    { icon: <SVGProduct />, linkName: 'Product', href: '/product' },
    { icon: <SVGCustomers />, linkName: 'Customers', href: '/customers' },
    { icon: <SVGIncome />, linkName: 'Income', href: '/income' },
    { icon: <SVGPromote />, linkName: 'Promote', href: '/promote' },
    { icon: <SVGHelp />, linkName: 'Help', href: '/help' }
  ]
  
  const linksList = links.map(link => (
    <Link
      key={link.href}
      to={link.href}
      className={clsx([
        styles.link,
        location.pathname === link.href && styles.active
      ])}
    >
      <div className={styles.icon}>
        { link.icon }
      </div>
      { link.linkName }
      <SVGChevronRight className={styles.arrow} />
    </Link>
  ))

  return <div className={clsx([
    styles.dashboard, className
  ])} {...props}>
    <div className={styles.heading}>
      <SVGSetting className={styles.icon} />
      <h3 className={styles.title}>
        Dashboard
        <span className={styles.version}>
          v.01
        </span>
      </h3>
    </div>
    <nav className={styles.nav}>
      { linksList }
    </nav>
    <div className={styles.user}>
      <div className={styles.avatar}>
        <img
          src="/images/user.png"
          alt="Avatar"
        />
      </div>
      <div className={styles.data}>
        <div className={styles.username}>
          Evano
        </div>
        <div className={styles.role}>
          Project Manager
        </div>
      </div>
    </div>
  </div>
}