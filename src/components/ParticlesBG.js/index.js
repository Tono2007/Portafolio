import styles from './Particles.module.css';

function ParticlesBG() {
  return (
    <div className={styles.particleContainer}>
      <div className={styles.particle} />
      <div className={styles.particle} />
      <div className={styles.particle} />
      <div className={styles.particle} />
    </div>
  );
}

export default ParticlesBG;
