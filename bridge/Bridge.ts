/**
* Decouple an abstraction from its implementation
* so that the two can vary independently.
*/
abstract class WebPage {
	protected theme: Theme;

	constructor(theme:Theme) {
		this.theme = theme;
	}
	setTheme(theme:Theme) {
		this.theme = theme;
	}

	abstract showIndex():void;
	abstract showDetail():void;
}

/**
 * refined Abstraction 1
 */
class WebPageV1 extends WebPage {
	showIndex(): void {
		console.log(this.theme.index());
	}

	showDetail(): void {
		console.log(this.theme.detail());
	}
}

/**
 * refined Abstraction 2
 */
class WebPageV2 extends WebPage {

	showIndex(): void {
		console.log(this.theme.index());
	}
	
	showDetail(): void {
		console.log(this.theme.detail());
	}

	/**
	 * extending WebPage with specific capability
	 */
	showAbout(): void {
		const aboutPage = this.theme.customPage('about.html');
		console.log(aboutPage);
	}
}

/**
 * Implementor ; defines the interface for implementation classes.
 */
type ThemeType = { theme?:string, page?:string };

abstract class Theme {
	protected themeType!: ThemeType;
	abstract index():ThemeType;
	abstract detail():ThemeType;
	customPage(page:string):ThemeType {
		return { theme:this.themeType.theme, page }
	};
}

/**
 * Concrete Implementor ; implements the Implementor interface and defines
 * its concrete implementation.
 */
class DarkTheme extends Theme {
	themeType: ThemeType = {};
	constructor() {
		super();
		this.themeType.theme = 'dark';
	}

	index(): ThemeType {
		this.themeType.page = 'index.html';
		return this.themeType;
	}	
	detail(): ThemeType {
		this.themeType.page = 'detail.html';
		return this.themeType;
	}
}

class LightTheme extends Theme {
	themeType: ThemeType = {};
	constructor() {
		super();
		this.themeType.theme = 'light';
	}
	
	index(): ThemeType {
		this.themeType.page = 'index.html';
		return this.themeType;
	}	
	detail(): ThemeType {
		this.themeType.page = 'detail.html';
		return this.themeType;
	}
}

export { WebPageV1, WebPageV2, DarkTheme, LightTheme };