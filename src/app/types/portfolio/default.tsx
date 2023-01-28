import { Inter } from '@next/font/google';
import styles from './page.module.scss';
import { Table } from './components/Table/index';
import { About } from './components/About';
import { Banner } from './components/Banner';
import { Footer } from './components/Footer';
const inter = Inter({ subsets: ['latin'] })

export default function Portfolio(): any {
const structure = require('../../../../storage/portfolio/structure.json')[0];
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
              
        By  &nbsp;
          <code className={styles.code}>{`nivs`}</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            >

            <div> {structure.reference.map(
                    (comp: any) => {
                      switch(comp.type) {
                        case 'about':
                          return <div> about </div>;
                        case 'banner':
                          return <div> banner </div>;
                        case 'table':
                            return <div> Table </div>;
                        case 'footer':
                            return <div> footer </div>;
                        default:
                            return comp.type + "(404)"
                      }
            })}</div>

          </a>
        </div>
      </div>

      {structure.reference.map(
          (comp: any) => {
              switch(comp.type) {
                case 'about':
                    return <About data={comp} />;
                case 'banner':
                    return <Banner data={comp}/>;
                case 'table':
                    return <Table data={comp}/>;
                case 'footer':
                    return <Footer />;
                default:
                    return comp.type + "(404)"
              }
            }
          )
        }


      {/*<div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>*/}

     {/* <div className={styles.grid}>
        <a
          href="https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Docs <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Templates <span>-&gt;</span>
          </h2>
          <p className={inter.className}>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Deploy <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
    </div>*/}
    </main>
  )
}
