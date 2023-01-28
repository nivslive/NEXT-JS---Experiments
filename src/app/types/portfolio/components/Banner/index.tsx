import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import styles from './style.module.scss';

export const Banner: FC = (props: any): any => {
    console.log(props);
    const variation = () => {
        switch(props.data.variation) {
            case 1: 
                return <>
                    <div>
                        <div> <h1>{ props.data.data.title } </h1> </div>
                        <Link href={props.data.data.button.url}>
                            <button type="button">
                                { props.data.data.button.title }
                            </button>
                        </Link>
                    </div>
                    <div>
                        <div>
    
                        <Image
                            src="/nivs.jpg"
                            alt="Picture of the author"
                            width={240}
                            height={240}
                            className={styles.image}
                            />
                        </div>
                    </div>
                </>
            default: <>
                    <div style={{backgroundImage: `url(${props.image})`}}> 
                    </div>
                </>
        }
    }

    return (
        <div className={styles.bannerContainer}>
            { variation() }
        </div>
    )

}