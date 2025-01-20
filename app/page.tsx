import Link from "next/link";
import styles from "@/assets/styles/page.module.css";

export default function Page() {
	return (
		<div className={`${styles.content_wrapper}`}>
			<Link
				href={"/"}
				className={`${styles.logo_wrapper}`}>
				<span>Design By</span> TACO
			</Link>
			<div className={`${styles.text_block}`}>
				<div className={`${styles.text_item} ${styles.text_item__highlight}`}>Hi!</div>
				<div className={`${styles.text_item}`}>
					I'm <span className={`${styles.text_item__script}`}>Nico.</span>{" "}
					<span className={`${styles.text_item__highlight}`}>Living in Turku 🇫🇮.</span>
				</div>
				<div className={`${styles.text_item}`}>
					<Link
						href={"https://utu.fi"}
						className={`${styles.text_item__highlight}`}>
						UTU
					</Link>{" "}
					computer science student.
				</div>
				<div className={`${styles.text_item} ${styles.text_item__highlight}`}>
					Passionate about{" "}
					<span className={`${styles.text_item__script}`}>
						Ux/Ui Design &amp; Web Development.
					</span>
				</div>
				<div className={`${styles.text_item}`}>
					No details spared,{" "}
					<span className={`${styles.text_item__highlight}`}>never.</span>
				</div>
			</div>
			<div className={`${styles.nav_wrapper}`}>
				<div className={`${styles.menu_wrapper}`}>
					<Link
						href={"mailto:hello@designbytaco.com"}
						className={`${styles.menu_item}`}>
						<i className={`far fa-envelope`} />
						Get in touch
					</Link>
				</div>
				<div className={`${styles.socials_wrapper}`}>
					<Link
						href={"https://github.com/nicohau"}
						className={`${styles.socials_item}`}>
						<i className={`fab fa-github`} />
					</Link>
				</div>
			</div>
		</div>
	);
}
