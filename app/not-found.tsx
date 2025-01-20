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
				<div className={`${styles.text_item} ${styles.text_item__highlight}`}>
					Oops! Page Not Found
				</div>
				<div className={`${styles.text_item}`}>
					It seems you’ve taken a wrong turn. Let’s get you back on track!
				</div>
				<div className={`${styles.button_wrapper}`}>
					<Link
						href={"/"}
						className={`${styles.button}`}>
						<i className={`far fa-home`} />
						Go back home
					</Link>
				</div>
			</div>
		</div>
	);
}
