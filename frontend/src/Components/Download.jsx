import React from 'react';
import { FaFilePdf, FaFileArchive, FaDownload, FaAndroid } from 'react-icons/fa'; // Add FaAndroid
import Navbar from './Navbar';
import Footer from './Footer';
import styles from './Download.module.css';

const downloads = [
	{
		icon: <FaFilePdf className={styles.downloadIcon} color="#e53e3e" />,
		title: 'Resume (PDF)',
		desc: 'Download my latest resume in PDF format.',
		url: '/downloads/NimeshDilhara_Resume.pdf',
		btn: 'Download',
	},
	{
		icon: <FaAndroid className={styles.downloadIcon} color="#3ddc84" />, // Changed icon and color
		title: 'Note App',
		desc: 'My new Project.',
		url: 'https://drive.google.com/uc?export=download&id=1-PRy0NVmhiec0-Xdzx5tYsKxxoorTgoB',
		btn: 'Download',
	},
];

function Download() {
	return (
		<>
			<Navbar />
			<div className={styles.centerWrapper}>
				<main className={styles.centerContent}>
					<h2 className={styles.title}>
						<FaDownload style={{ marginRight: '0.5em' }} />
						Downloads
					</h2>
					<div className={styles.cardList}>
						{downloads.map((item, idx) => (
							<div className={styles.card} key={idx}>
								{item.icon}
								<div>
									<h3 className={styles.cardTitle}>{item.title}</h3>
									<p className={styles.cardDesc}>{item.desc}</p>
									<a
										href={item.url}
										className={styles.downloadBtn}
										download
										target="_blank"
										rel="noopener noreferrer"
									>
										{item.btn}
									</a>
								</div>
							</div>
						))}
					</div>
				</main>
				<Footer />
			</div>
		</>
	);
}

export default Download;