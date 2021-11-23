import styles from './Introduction.module.css';

export default function Introduction() {
    return (
        <div className="font-mono text-2xl md:text-4xl">
            <p className="mb-10">Hi! <span className={styles.wave}>👋</span> I'm <span className="font-bold">Kenan Mesic</span>, a software engineer and entrepreneur.</p>
            <p className="mb-10">📍 California</p>
            <p className="mb-10"><a href="mailto:kmesic.dev@gmail.com" className="font-bold text-indigo-600 hover:underline">Say hello</a>, or keep scrolling.</p>
        </div>
    );
}