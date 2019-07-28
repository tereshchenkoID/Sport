function Menu(menu, show, menuBlock, menuShowBlock){
	this._menu = menu;
	this._show = show;
	this._menuBlock = menuBlock;
	this._menuShowBlock = menuShowBlock;
	this._menuClassActive = 'menu--active';
	this._menuShowClassActive = 'show-menu--active';
	this.changeMenu = function(){
		this._menu = this._menu == true ? false : true
		this._show = this._show == true ? false : true
		if (this._menu == true && this._show == true) {
			this._menuBlock.addClass(this._menuClassActive);
			this._menuShowBlock.addClass(this._menuShowClassActive);
			$('html, body').css('overflowY', 'hidden'); 
		}
		else{
			this._menuBlock.removeClass(this._menuClassActive);
			this._menuShowBlock.removeClass(this._menuShowClassActive);
			$('html, body').css('overflowY', 'auto'); 
		}
	}
}
var menuBlock = $('.menu--main'),
	menuShowBlock = $('.show-menu'),
	menu = new Menu(false, false, menuBlock, menuShowBlock);

menuShowBlock.click(function(){
	menu.changeMenu();
});
