import {ThemeSwitcher} from 'components/ThemeSwitcher';
import styles from './TheHeader.module.scss';

interface TheHeaderProps { }

export const TheHeader = ({ }: TheHeaderProps) => (
  <div className={styles.theHeader} data-testid="TheHeader">
   <div className={styles.logo} >
    devfinder
   </div>
   <ThemeSwitcher/>
  </div>
);
