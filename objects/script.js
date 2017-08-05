var course = new Object();

// course.title = "Javascript Essential Training";
// course.instructor = "Morten Rand-Hendricksen";
// course.level = 1;
// course.published = 0;
// course.views = 0;

var course = {
	title: "Javascript Essential Training",
	instructor: "Morten Rand-Hendricksen",
	level: 1,
	published: 0,
	views: 0,
	updateviews: function() {
		return ++course.views;
	}
}

console.log(course.views);
course.updateviews();
console.log(course.views);