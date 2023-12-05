import styles from './Header.module.css'
import { IoIosSearch } from 'react-icons/io'
import { FaRegUser } from 'react-icons/fa6'

const Header = () => {
  return (
    <nav className={styles.nav}>
      <img
        className={styles.icon}
        src='https://img.icons8.com/officel/80/react.png'
        alt='react'
      />
      <div className={styles.menu}>
        <form className={styles.form}>
          <input
            className={styles.input}
            type='text'
            placeholder='Search here...'
          />
          <IoIosSearch role='button' className={styles.search} />
        </form>
        <FaRegUser className={styles.user} />
      </div>
    </nav>
  )
}

export default Header
