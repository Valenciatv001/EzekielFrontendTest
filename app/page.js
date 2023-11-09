import UsersTable from './components/UsersTable';

import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
       <UsersTable />
    </main>
  )
}
