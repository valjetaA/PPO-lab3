import styles from "./page.module.css";

export default function Resume() {
  return (
    <div className={styles.resumeContainer}>
      <main className={styles.resumeMain}>
        <h1 className={styles.resumeHeader}>Darya Platonova</h1>
        <h2 className={styles.resumeSubHeader}>Data Analyst</h2>

        <div className={styles.contactInfo}>
          <p>Email: <a href="mailto:john.doe@example.com" className="text-blue-500 hover:underline">d.platonova@mail.ru</a></p>
          <p>Phone: <a href="tel:123-456-7890" className="text-blue-500 hover:underline">8917*******</a></p>
        </div>

        <section className="w-full">
          <h3 className={styles.sectionHeader}>Skills</h3>
          <ul className={styles.list}>
            <li>Python</li>
            <li>SQL</li>
            <li>Power BI</li>
            <li>Excel</li>
          </ul>
        </section>

        <section className="w-full">
          <h3 className={styles.sectionHeader}>Experience</h3>
          <div className={styles.experienceItem}>
            <h4 className={styles.experienceTitle}>Product Analyst</h4>
            <p className="text-sm text-gray-600">Feb 2024 - Present</p>
            <p>B2B product analyst.</p>
          </div>
        </section>

        <section className="w-full">
          <h3 className={styles.sectionHeader}>Education</h3>
          <div className={styles.educationItem}>
            <h4 className={styles.educationTitle}>Software engineering</h4>
            <p className="text-sm text-gray-600">Volga State University, 2025</p>
          </div>
        </section>
      </main>
    </div>
  );
}