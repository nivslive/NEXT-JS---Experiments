import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.scss'
import { ReactNode } from 'react';
import Portfolio from './types/portfolio/default';

export default function Home(): ReactNode {
const structure = require('../../storage/portfolio/structure.json')[0];

  return (
    <div>
      {structure.type === 'portfolio' && <Portfolio/>}
      {structure.type === 'default' && <div> Não existe esse type! </div>}
    </div>
  )
}
