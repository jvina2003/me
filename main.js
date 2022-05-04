function bodyPaint() {
	window.addEventListener("scroll", function () {
		const scrollTop =
			window.pageYOffset ||
			document.documentElement.scrollTop ||
			document.body.scrollTop ||
			0;

		const triggers = document.querySelectorAll("[data-color]");

		const body = document.body;

		// Change 33% earlier than scroll position so colour is there when you arrive.
		const scroll = scrollTop + window.innerHeight / 3;

		for (var i = 0; i < triggers.length; i++) {
			const trigger = triggers[i];
			const triggerRect = trigger.getBoundingClientRect();
			const triggerRectTop = triggerRect.top + scrollTop;
			const triggerHeight = trigger.offsetHeight;
			const triggerColor = trigger.getAttribute("data-color");

			// if position is within range of this panel.
			// So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
			// Remember we set the scroll to 33% earlier in scroll var.
			if (triggerRectTop <= scroll && triggerRectTop + triggerHeight > scroll) {
				// Set attribute of currently active div
				body.setAttribute("data-paint", triggerColor);
				console.log(body.dataset.paint);
			}
		}
	});
}

bodyPaint();