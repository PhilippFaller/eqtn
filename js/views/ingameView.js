var IngameView = function (eqt) {
    
    this.el = $("<div/>").attr("class", "view");
    
    this.render = function () {
        this.el.html(IngameView.template());
        return this.el;
    };
    
};

IngameView.template = Handlebars.compile($("#ingame_tpl").html());