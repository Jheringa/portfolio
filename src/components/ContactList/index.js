import React from 'react'
import styles from './styles/ContactList.module.css'
import pdf from '../../static/Jiska-heringa-cv-2019.pdf';

const ContactList = () => (
  <ul className={styles.list}>
    <li>E: Jiska26@hotmail.com</li>
    <li>M: 0643434140</li>
    <li><a href={pdf} download>Download cv</a></li>
  </ul>
)

export default ContactList;