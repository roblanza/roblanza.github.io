target = $('.browser-frame');
Draggable.create(target, { trigger: "#drag-handle"});

var handleResize = $("<div class='resize-handle'></div>").appendTo(target);

Draggable.create(handleResize, {
	type:"top,left",
	onPress: function(e) {
		e.stopPropagation(); 
	},
	onDrag: function(e) {
		parent = this.target.parentNode
		TweenLite.set(parent, { width: this.x, height: this.y - 132 - 55});
	}
});

var pause = document.querySelector(".pause");
var audio = document.querySelector(".audio");

function togglePlay() {
	if (audio.paused) {
		audio.play();
		pause.innerHTML = "🔇";
	} else {
		audio.pause();
		pause.innerHTML = "🔊";
		pause.style.color = " #848484";
	}
}
