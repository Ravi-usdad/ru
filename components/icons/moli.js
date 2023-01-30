export default function Moli() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 820" preserveAspectRatio="xMinYMid" role="img" aria-hidden="true" focusable="false">
			<defs>
				<rect width="950" height="950" x="750" y="-580" id="homepage-hero-blue-square" transform="rotate(38)">
					<animateTransform attributeName="transform" type="scale" values="1;0.9;1" dur="10s" additive="sum" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"></animateTransform>
					<animateTransform attributeName="transform" type="translate" values="0 0; 140 -5; 0 0" dur="10s" additive="sum" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"></animateTransform>
				</rect>
				<circle id="homepage-hero-red-circle" cx="339" cy="850" r="250">
					<animate attributeName="r" begin="0s" dur="10s" repeatCount="indefinite" values="250;220;250" calcMode="spline" keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"></animate>
				</circle>
				<mask id="mask">
					<use href="#homepage-hero-blue-square" fill="#FFFFFF"></use>
				</mask>
			</defs>
			<use href="#homepage-hero-blue-square" fill="#003FFF"></use>
			<use href="#homepage-hero-red-circle" fill="#FF002E"></use>
			<use href="#homepage-hero-red-circle" fill="#FFFFFF" mask="url(#mask)"></use>
			<circle id="homepage-hero-red-circle" cx="9" cy="745" r="8" fill="#FFBE2A">
				<animateTransform attributeName="transform" type="translate" values="0 0; 0 -35; 0 0" dur="10s" additive="sum" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"></animateTransform>
			</circle>
		</svg>
	)
}